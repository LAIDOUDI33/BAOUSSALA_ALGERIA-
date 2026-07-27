// ═══════════════════════════════════════════════════════════════════════════════
// CORRELATION ENGINE — Analyse de Corrélation entre Indicateurs
// Pearson correlation + correlation matrix + scatter data
// ═══════════════════════════════════════════════════════════════════════════════

export interface CorrelationPair {
  x: string;
  y: string;
  r: number;         // Pearson r
  rSquared: number;   // R²
  strength: "none" | "weak" | "moderate" | "strong" | "very-strong";
  direction: "positive" | "negative" | "none";
}

export interface ScatterPoint {
  x: number;
  y: number;
  label: string;
}

export interface IndicatorSeries {
  name: string;
  data: { year: number; value: number }[];
}

// ─── Pearson Correlation Coefficient ──────────────────────────────────────────
function mean(arr: number[]): number {
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

function stdDev(arr: number[]): number {
  const m = mean(arr);
  return Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / (arr.length - 1));
}

export function pearson(x: number[], y: number[]): number {
  const n = Math.min(x.length, y.length);
  if (n < 3) return 0;
  const mx = mean(x.slice(0, n));
  const my = mean(y.slice(0, n));
  let num = 0, dx = 0, dy = 0;
  for (let i = 0; i < n; i++) {
    const a = x[i] - mx;
    const b = y[i] - my;
    num += a * b;
    dx += a * a;
    dy += b * b;
  }
  const denom = Math.sqrt(dx * dy);
  return denom === 0 ? 0 : num / denom;
}

// ─── Correlation Strength Classification ─────────────────────────────────────
function classifyCorrelation(r: number): { strength: CorrelationPair["strength"]; direction: CorrelationPair["direction"] } {
  const abs = Math.abs(r);
  let strength: CorrelationPair["strength"] = "none";
  if (abs >= 0.9) strength = "very-strong";
  else if (abs >= 0.7) strength = "strong";
  else if (abs >= 0.4) strength = "moderate";
  else if (abs >= 0.2) strength = "weak";

  const direction = r > 0.05 ? "positive" : r < -0.05 ? "negative" : "none";
  return { strength, direction };
}

// ─── Full Correlation Matrix ─────────────────────────────────────────────────
export function correlationMatrix(series: IndicatorSeries[]): CorrelationPair[] {
  const pairs: CorrelationPair[] = [];
  for (let i = 0; i < series.length; i++) {
    for (let j = i + 1; j < series.length; j++) {
      const xData = series[i].data.map(d => d.value);
      const yData = series[j].data.map(d => d.value);
      const r = pearson(xData, yData);
      const { strength, direction } = classifyCorrelation(r);
      pairs.push({
        x: series[i].name,
        y: series[j].name,
        r: Math.round(r * 1000) / 1000,
        rSquared: Math.round(r * r * 1000) / 1000,
        strength,
        direction,
      });
    }
  }
  return pairs;
}

// ─── Scatter Data for a specific pair ───────────────────────────────────────
export function scatterData(
  s1: IndicatorSeries,
  s2: IndicatorSeries
): ScatterPoint[] {
  const map = new Map(s1.data.map(d => [d.year, d.value]));
  return s2.data
    .filter(d => map.has(d.year))
    .map(d => ({ x: map.get(d.year)!, y: d.value, label: `${d.year}` }));
}

// ─── Lagged Correlation (x leads y by `lag` periods) ───────────────────────
export function laggedCorrelation(
  x: number[],
  y: number[],
  lag: number = 1
): number {
  if (lag >= Math.min(x.length, y.length)) return 0;
  return pearson(x.slice(0, x.length - lag), y.slice(lag));
}
