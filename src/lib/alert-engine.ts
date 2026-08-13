// ═══════════════════════════════════════════════════════════════════════════════
// ALERT ENGINE — Système d'Alertes Intelligentes
// Z-score anomaly detection + threshold-based alerts
// ═══════════════════════════════════════════════════════════════════════════════

export type AlertSeverity = "critical" | "warning" | "info";
export type AlertType = "anomaly" | "threshold" | "trend";

export interface Alert {
  id: string;
  indicator: string;
  severity: AlertSeverity;
  type: AlertType;
  title: string;
  description: string;
  value: number;
  expected: number;
  deviation: number;
  period: string;
  icon: string;
}

export interface ThresholdConfig {
  indicator: string;
  field: string;
  upperCritical?: number;
  upperWarning?: number;
  lowerCritical?: number;
  lowerWarning?: number;
  icon: string;
}

// ─── Z-Score Calculation ─────────────────────────────────────────────────────
function zScore(value: number, mean: number, stdDev: number): number {
  if (stdDev === 0) return 0;
  return (value - mean) / stdDev;
}

function mean(values: number[]): number {
  return values.reduce((s, v) => s + v, 0) / values.length;
}

function stdDev(values: number[]): number {
  const m = mean(values);
  const variance = values.reduce((s, v) => s + (v - m) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

// ─── Anomaly Detection ───────────────────────────────────────────────────────
export function detectAnomalies(
  data: { period: string; value: number }[],
  indicator: string,
  icon: string,
  windowSize: number = 6
): Alert[] {
  if (data.length < windowSize + 1) return [];

  const alerts: Alert[] = [];
  const values = data.map(d => d.value);

  for (let i = windowSize; i < values.length; i++) {
    const window = values.slice(i - windowSize, i);
    const wMean = mean(window);
    const wStd = stdDev(window);
    const z = zScore(values[i], wMean, wStd);
    const deviation = values[i] - wMean;

    if (Math.abs(z) > 2.5) {
      alerts.push({
        id: `${indicator}-${data[i].period}`,
        indicator,
        severity: Math.abs(z) > 3.5 ? "critical" : "warning",
        type: "anomaly",
        title: `${indicator} — ${data[i].period}`,
        description: z > 0
          ? `Hausse anormale de +${deviation.toFixed(1)} (z-score: ${z.toFixed(2)})`
          : `Baisse anormale de ${deviation.toFixed(1)} (z-score: ${z.toFixed(2)})`,
        value: values[i],
        expected: Math.round(wMean * 100) / 100,
        deviation: Math.round(deviation * 100) / 100,
        period: data[i].period,
        icon,
      });
    }
  }

  return alerts;
}

// ─── Threshold Check ────────────────────────────────────────────────────────
export function checkThresholds(
  currentValues: { indicator: string; value: number; period: string }[],
  thresholds: ThresholdConfig[]
): Alert[] {
  const alerts: Alert[] = [];

  for (const cv of currentValues) {
    const config = thresholds.find(t => t.indicator === cv.indicator);
    if (!config) continue;

    const v = cv.value;
    let severity: AlertSeverity | null = null;
    let description = "";

    if (config.upperCritical !== undefined && v > config.upperCritical) {
      severity = "critical";
      description = `Valeur ${v} dépasse le seuil critique de ${config.upperCritical}`;
    } else if (config.upperWarning !== undefined && v > config.upperWarning) {
      severity = "warning";
      description = `Valeur ${v} dépasse le seuil d'alerte de ${config.upperWarning}`;
    } else if (config.lowerCritical !== undefined && v < config.lowerCritical) {
      severity = "critical";
      description = `Valeur ${v} inférieure au seuil critique de ${config.lowerCritical}`;
    } else if (config.lowerWarning !== undefined && v < config.lowerWarning) {
      severity = "warning";
      description = `Valeur ${v} inférieure au seuil d'alerte de ${config.lowerWarning}`;
    }

    if (severity) {
      const expected = config.upperWarning ?? config.lowerWarning ?? v;
      alerts.push({
        id: `thresh-${cv.indicator}-${cv.period}`,
        indicator: cv.indicator,
        severity,
        type: "threshold",
        title: `${cv.indicator} — Seuil dépassé`,
        description,
        value: v,
        expected,
        deviation: Math.round((v - expected) * 100) / 100,
        period: cv.period,
        icon: config.icon,
      });
    }
  }

  return alerts;
}

// ─── Trend Detection (consecutive deteriorating/improving) ──────────────────
export function detectTrends(
  data: { period: string; value: number }[],
  indicator: string,
  icon: string,
  direction: "improving" | "deteriorating" = "deteriorating",
  minConsecutive: number = 3
): Alert[] {
  if (data.length < minConsecutive + 1) return [];

  const alerts: Alert[] = [];
  let count = 0;
  let startIdx = data.length - 1;

  for (let i = data.length - 1; i > 0; i--) {
    const diff = data[i].value - data[i - 1].value;
    const isDirection = direction === "deteriorating" ? diff < 0 : diff > 0;
    if (isDirection) {
      count++;
      startIdx = i - 1;
    } else {
      break;
    }
  }

  if (count >= minConsecutive) {
    const totalChange = data[data.length - 1].value - data[startIdx].value;
    alerts.push({
      id: `trend-${indicator}`,
      indicator,
      severity: count >= 5 ? "critical" : "warning",
      type: "trend",
      title: `${indicator} — Tendance ${direction === "deteriorating" ? "baissière" : "haussière"} détectée`,
      description: `${count} périodes consécutives de ${direction === "deteriorating" ? "baisse" : "hausse"} (${totalChange > 0 ? "+" : ""}${totalChange.toFixed(1)})`,
      value: data[data.length - 1].value,
      expected: data[startIdx].value,
      deviation: totalChange,
      period: `${data[startIdx].period} → ${data[data.length - 1].period}`,
      icon,
    });
  }

  return alerts;
}

// ─── Default Threshold Configs for Algeria ──────────────────────────────────
export const algeriaThresholds: ThresholdConfig[] = [
  {
    indicator: "Inflation (YoY)",
    field: "yoyPct",
    lowerCritical: -1,
    lowerWarning: 0,
    upperWarning: 6,
    upperCritical: 10,
    icon: "Scale",
  },
  {
    indicator: "Chômage",
    field: "unemploymentPct",
    lowerWarning: 6,
    lowerCritical: 4,
    upperWarning: 12,
    upperCritical: 15,
    icon: "Users",
  },
  {
    indicator: "Croissance PIB",
    field: "growthPct",
    lowerCritical: -1,
    lowerWarning: 1.5,
    upperWarning: 6,
    upperCritical: 8,
    icon: "Activity",
  },
  {
    indicator: "Solde Commercial (Mds USD)",
    field: "balanceBn",
    lowerCritical: -15,
    lowerWarning: -5,
    upperWarning: 20,
    upperCritical: 30,
    icon: "Globe",
  },
  {
    indicator: "Dette/PIB (%)",
    field: "debtPctGdp",
    upperWarning: 50,
    upperCritical: 70,
    icon: "DollarSign",
  },
  {
    indicator: "IPI",
    field: "ipi",
    lowerCritical: 90,
    lowerWarning: 95,
    icon: "Factory",
  },
];

// ─── Run All Alert Checks ───────────────────────────────────────────────────
export function runAllAlerts(
  cpiData: { month: string; yoyPct: number }[],
  gdpGrowthData: { year: number; growthPct: number }[],
  tradeData: { year: number; balanceBn: number }[],
  laborData: { year: number; unemploymentPct: number }[],
  ipiData: { period: string; ipi: number }[],
  fiscalData: { year: number; debtPctGdp: number }[]
): Alert[] {
  const allAlerts: Alert[] = [];

  // 1. Anomaly detection on monthly inflation
  allAlerts.push(...detectAnomalies(
    cpiData.map(d => ({ period: d.month, value: d.yoyPct })),
    "Inflation (YoY)", "Scale"
  ));

  // 2. Trend detection on inflation (deflation warning)
  allAlerts.push(...detectTrends(
    cpiData.map(d => ({ period: d.month, value: d.yoyPct })),
    "Inflation (YoY)", "Scale", "deteriorating", 3
  ));

  // 3. Anomaly detection on IPI
  allAlerts.push(...detectAnomalies(
    ipiData.map(d => ({ period: d.period, value: d.ipi })),
    "IPI", "Factory"
  ));

  // 4. Threshold checks on latest values
  const latestCpi = cpiData[cpiData.length - 1];
  const latestGdp = gdpGrowthData[gdpGrowthData.length - 1];
  const latestTrade = tradeData[tradeData.length - 1];
  const latestLabor = laborData[laborData.length - 1];
  const latestIpi = ipiData[ipiData.length - 1];
  const latestFiscal = fiscalData[fiscalData.length - 1];

  allAlerts.push(...checkThresholds([
    { indicator: "Inflation (YoY)", value: latestCpi?.yoyPct ?? 0, period: latestCpi?.month ?? "" },
    { indicator: "Chômage", value: latestLabor?.unemploymentPct ?? 0, period: `${latestLabor?.year ?? ""}` },
    { indicator: "Croissance PIB", value: latestGdp?.growthPct ?? 0, period: `${latestGdp?.year ?? ""}` },
    { indicator: "Solde Commercial (Mds USD)", value: latestTrade?.balanceBn ?? 0, period: `${latestTrade?.year ?? ""}` },
    { indicator: "Dette/PIB (%)", value: latestFiscal?.debtPctGdp ?? 0, period: `${latestFiscal?.year ?? ""}` },
    { indicator: "IPI", value: latestIpi?.ipi ?? 0, period: latestIpi?.period ?? "" },
  ], algeriaThresholds));

  // 5. Trend on unemployment
  allAlerts.push(...detectTrends(
    laborData.map(d => ({ period: `${d.year}`, value: d.unemploymentPct })),
    "Chômage", "Users", "improving", 2
  ));

  // Sort by severity
  const severityOrder = { critical: 0, warning: 1, info: 2 };
  allAlerts.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return allAlerts;
}
