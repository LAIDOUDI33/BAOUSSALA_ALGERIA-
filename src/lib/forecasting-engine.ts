// ═══════════════════════════════════════════════════════════════════════════════
// FORECASTING ENGINE — Moteur de Prévision Statistique
// Linear Regression + Exponential Smoothing with 3 Scenarios
// ═══════════════════════════════════════════════════════════════════════════════

export type Scenario = "optimistic" | "baseline" | "pessimistic";

export interface ForecastPoint {
  year: number;
  historical?: number;  // actual value if available
  forecast: number;
  upperBound?: number;
  lowerBound?: number;
}

export interface ForecastResult {
  indicator: string;
 unit: string;
 data: ForecastPoint[];
 scenario: Scenario;
}

// ─── Linear Regression ───────────────────────────────────────────────────────
function linearRegression(points: { x: number; y: number }[]): { slope: number; intercept: number; r2: number } {
  const n = points.length;
  if (n < 2) return { slope: 0, intercept: points[0]?.y ?? 0, r2: 0 };

  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  for (const p of points) {
    sumX += p.x;
    sumY += p.y;
    sumXY += p.x * p.y;
    sumX2 += p.x * p.x;
    sumY2 += p.y * p.y;
  }

  const denom = n * sumX2 - sumX * sumX;
  if (Math.abs(denom) < 1e-10) return { slope: 0, intercept: sumY / n, r2: 0 };

  const slope = (n * sumXY - sumX * sumY) / denom;
  const intercept = (sumY - slope * sumX) / n;

  // R-squared
  const yMean = sumY / n;
  let ssRes = 0, ssTot = 0;
  for (const p of points) {
    const pred = slope * p.x + intercept;
    ssRes += (p.y - pred) ** 2;
    ssTot += (p.y - yMean) ** 2;
  }
  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;

  return { slope, intercept, r2 };
}

// ─── Exponential Smoothing (Holt's method for trend) ─────────────────────────
function holtSmoothing(values: number[], alpha: number = 0.3, beta: number = 0.1): { level: number; trend: number } {
  if (values.length < 2) return { level: values[0] ?? 0, trend: 0 };

  let level = values[0];
  let trend = values[1] - values[0];

  for (let i = 1; i < values.length; i++) {
    const newLevel = alpha * values[i] + (1 - alpha) * (level + trend);
    const newTrend = beta * (newLevel - level) + (1 - beta) * trend;
    level = newLevel;
    trend = newTrend;
  }

  return { level, trend };
}

// ─── Standard Error of Estimate ──────────────────────────────────────────────
function standardError(points: { x: number; y: number }[], slope: number, intercept: number): number {
  const n = points.length;
  if (n < 3) return 0;
  let ssRes = 0;
  for (const p of points) {
    const pred = slope * p.x + intercept;
    ssRes += (p.y - pred) ** 2;
  }
  return Math.sqrt(ssRes / (n - 2));
}

// ─── Main Forecast Function ─────────────────────────────────────────────────
export function forecastIndicator(
  historicalData: { year: number; value: number }[],
  indicator: string,
  unit: string,
  forecastYears: number = 3,
  scenario: Scenario = "baseline"
): ForecastResult {
  if (historicalData.length < 3) {
    return { indicator, unit, data: [], scenario };
  }

  const sorted = [...historicalData].sort((a, b) => a.year - b.year);
  const points = sorted.map(d => ({ x: d.year, y: d.value }));

  // Use last 10 years for regression to capture recent trends
  const recentPoints = points.slice(-10);
  const { slope, intercept, r2 } = linearRegression(recentPoints);
  const se = standardError(recentPoints, slope, intercept);

  // Holt's smoothing as alternative
  const values = sorted.map(d => d.value);
  const { level: hLevel, trend: hTrend } = holtSmoothing(values);

  // Scenario multipliers
  const scenarioConfig = {
    optimistic:  { multiplier: 1.15, confidence: 1.3, weight: 0.3 },
    baseline:    { multiplier: 1.0,  confidence: 1.96, weight: 0.5 },
    pessimistic: { multiplier: 0.85, confidence: 1.3, weight: 0.2 },
  }[scenario];

  const lastYear = sorted[sorted.length - 1].year;
  const data: ForecastPoint[] = [];

  // Historical data
  for (const d of sorted) {
    data.push({ year: d.year, historical: d.value, forecast: d.value });
  }

  // Forecasted data
  for (let i = 1; i <= forecastYears; i++) {
    const year = lastYear + i;
    // Blend linear regression with Holt's smoothing
    const lrValue = slope * year + intercept;
    const holtValue = hLevel + hTrend * i;
    const blendedForecast = (lrValue * 0.6 + holtValue * 0.4) * scenarioConfig.multiplier;

    // Confidence interval widens with forecast horizon
    const uncertainty = se * scenarioConfig.confidence * Math.sqrt(i);
    const upper = blendedForecast + uncertainty;
    const lower = blendedForecast - uncertainty;

    data.push({
      year,
      forecast: Math.round(blendedForecast * 100) / 100,
      upperBound: Math.round(upper * 100) / 100,
      lowerBound: Math.round(lower * 100) / 100,
    });
  }

  return { indicator, unit, data, scenario };
}

// ─── Multi-scenario forecast (all 3 at once) ─────────────────────────────────
export function forecastAllScenarios(
  historicalData: { year: number; value: number }[],
  indicator: string,
  unit: string,
  forecastYears: number = 3
): { optimistic: ForecastResult; baseline: ForecastResult; pessimistic: ForecastResult } {
  return {
    optimistic: forecastIndicator(historicalData, indicator, unit, forecastYears, "optimistic"),
    baseline: forecastIndicator(historicalData, indicator, unit, forecastYears, "baseline"),
    pessimistic: forecastIndicator(historicalData, indicator, unit, forecastYears, "pessimistic"),
  };
}

// ─── What-If Simulation Engine ───────────────────────────────────────────────
export interface SimulationParams {
  oilPrice: number;           // USD/barrel (reference: 76)
  oilProduction: number;      // mbpd (reference: 0.98)
  gasPrice: number;           // USD/mmbtu (reference: 10.5)
  nonHydroGrowthPct: number;  // non-HC GDP growth (reference: 4.8)
  importGrowthPct: number;    // import growth rate (reference: 5.0)
  publicInvestPctGdp: number; // public investment % GDP (reference: 15.2)
}

export interface SimulationResult {
  gdpGrowthPct: number;
  gdpBillionDzd: number;
  gdpBillionUsd: number;
  hydroRevenueBn: number;
  exportsBn: number;
  importsBn: number;
  tradeBalanceBn: number;
  fiscalRevenuePctGdp: number;
  unemploymentPct: number;
  currentAccountPctGdp: number;
  debtToGdpPct: number;
  nonHydroExportsBn: number;
}

export function runSimulation(params: SimulationParams): SimulationResult {
  // Reference values (2024 actuals from ONS)
  const refOilPrice = 76;
  const refOilProd = 0.98;
  const refGasPrice = 10.5;
  const refNonHCGrowth = 4.8;
  const refImportGrowth = 5.0;

  // Base GDP 2024
  const baseGdpDzd = 35789; // Mds DZD
  const baseGdpUsd = 267;   // Mds USD
  const baseExchangeRate = baseGdpDzd / baseGdpUsd; // ~134 DZD/USD
  const baseHydroRev = 33.0; // Mds USD
  const baseExports = 49.7;  // Mds USD
  const baseImports = 47.8;  // Mds USD
  const baseNonHydroExports = 3.6;
  const baseFiscalRevPct = 36.8;
  const baseUnemployment = 9.7;
  const baseDebtGdp = 41.0;
  const baseCurrentAccount = 3.2;
  const baseNonHCGdpShare = 76.5; // % of GDP

  // Oil price elasticity
  const oilPriceImpact = ((params.oilPrice / refOilPrice) - 1);
  const oilVolumeImpact = ((params.oilProduction / refOilProd) - 1);
 const gasPriceImpact = ((params.gasPrice / refGasPrice) - 1);
  const totalHydroImpact = oilPriceImpact * 0.5 + oilVolumeImpact * 0.3 + gasPriceImpact * 0.2;

  // Hydrocarbon revenue impact
  const hydroRevenue = baseHydroRev * (1 + totalHydroImpact);
  const hydroExports = baseExports - baseNonHydroExports;
  const newHydroExports = hydroExports * (1 + totalHydroImpact * 0.8);

  // Non-hydrocarbon growth impact
  const nonHCGrowthImpact = (params.nonHydroGrowthPct - refNonHCGrowth) / 100;

  // Total GDP growth
  const hydroGdpShare = 1 - baseNonHCGdpShare / 100;
  const gdpGrowthPct = 3.6
    + totalHydroImpact * hydroGdpShare * 0.4
    + nonHCGrowthImpact * (baseNonHCGdpShare / 100);

  // GDP nominal
  const gdpBillionDzd = baseGdpDzd * (1 + gdpGrowthPct / 100);
  const exchangeRate = baseExchangeRate * (1 + oilPriceImpact * 0.05); // small FX impact
  const gdpBillionUsd = gdpBillionDzd / exchangeRate;

  // Trade
  const newExports = newHydroExports + baseNonHydroExports * (1 + nonHCGrowthImpact * 2);
  const newImports = baseImports * (1 + (params.importGrowthPct - refImportGrowth) / 100);
  const tradeBalance = newExports - newImports;

  // Fiscal
  const fiscalRevenuePct = baseFiscalRevPct + oilPriceImpact * 8 + oilVolumeImpact * 2;

  // Unemployment (Okun's law approximation)
  const unemploymentPct = Math.max(4, baseUnemployment - (gdpGrowthPct - 3.6) * 1.5);

  // Current account
  const currentAccountPct = baseCurrentAccount + totalHydroImpact * 3 - (params.importGrowthPct - refImportGrowth) * 0.3;

  // Debt (simplified)
  const debtToGdp = baseDebtGdp - fiscalRevenuePct + baseFiscalRevPct + (gdpGrowthPct < 2 ? 2 : 0);

  return {
    gdpGrowthPct: Math.round(gdpGrowthPct * 10) / 10,
    gdpBillionDzd: Math.round(gdpBillionDzd),
    gdpBillionUsd: Math.round(gdpBillionUsd * 10) / 10,
    hydroRevenueBn: Math.round(hydroRevenue * 10) / 10,
    exportsBn: Math.round(newExports * 10) / 10,
    importsBn: Math.round(newImports * 10) / 10,
    tradeBalanceBn: Math.round(tradeBalance * 10) / 10,
    fiscalRevenuePctGdp: Math.round(fiscalRevenuePct * 10) / 10,
    unemploymentPct: Math.round(unemploymentPct * 10) / 10,
    currentAccountPctGdp: Math.round(currentAccountPct * 10) / 10,
    debtToGdpPct: Math.round(debtToGdp * 10) / 10,
    nonHydroExportsBn: Math.round(baseNonHydroExports * (1 + nonHCGrowthImpact * 2) * 10) / 10,
  };
}
