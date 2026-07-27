// ═══════════════════════════════════════════════════════════════════════════════
// INTERNATIONAL BENCHMARKING DATA
// Sources officielles : ONS (DZ), INS (TN), CAPMAS (EG), GASTAT (SA)
// ═══════════════════════════════════════════════════════════════════════════════

export type Country = "DZ" | "TN" | "EG" | "SA";

export const countryMeta: Record<Country, { name: string; nameAr: string; flag: string; populationM: number; gdpBnUsd: number; gdpPerCapita: number; currency: string }> = {
  DZ: { name: "Algérie", nameAr: "الجزائر", flag: "🇩🇿", populationM: 46.3, gdpBnUsd: 267, gdpPerCapita: 5760, currency: "DZD" },
  TN: { name: "Tunisie", nameAr: "تونس", flag: "🇹🇳", populationM: 12.5, gdpBnUsd: 51.2, gdpPerCapita: 4100, currency: "TND" },
  EG: { name: "Égypte", nameAr: "مصر", flag: "🇪🇬", populationM: 104.3, gdpBnUsd: 395, gdpPerCapita: 3790, currency: "EGP" },
  SA: { name: "Arabie Saoudite", nameAr: "السعودية", flag: "🇸🇦", populationM: 36.9, gdpBnUsd: 1108, gdpPerCapita: 30040, currency: "SAR" },
};

export interface BenchmarkRow {
  year: number;
  dz: number;
  tn: number;
  eg: number;
  sa: number;
}

// ─── GDP Growth (%) ──────────────────────────────────────────────────────────
// Sources: ONS DZ, INS TN, CAPMAS EG, GASTAT SA
export const benchmarkGdpGrowth: BenchmarkRow[] = [
  { year: 2015, dz: 3.2, tn: 0.8, eg: 4.4, sa: 3.7 },
  { year: 2016, dz: 2.9, tn: 1.1, eg: 4.3, sa: 1.4 },
  { year: 2017, dz: 1.5, tn: 2.0, eg: 5.3, sa: -0.7 },
  { year: 2018, dz: 1.4, tn: 2.6, eg: 5.4, sa: 2.5 },
  { year: 2019, dz: 1.1, tn: 1.0, eg: 5.6, sa: 0.8 },
  { year: 2020, dz: -3.2, tn: -8.8, eg: 3.3, sa: -4.1 },
  { year: 2021, dz: 3.4, tn: 4.3, eg: 3.3, sa: 3.2 },
  { year: 2022, dz: 3.1, tn: 2.6, eg: 3.8, sa: 8.7 },
  { year: 2023, dz: 2.8, tn: 0.8, eg: 3.8, sa: -0.8 },
  { year: 2024, dz: 3.6, tn: 1.2, eg: 5.1, sa: 0.8 },
];

// ─── Inflation YoY (%) ───────────────────────────────────────────────────────
export const benchmarkInflation: BenchmarkRow[] = [
  { year: 2015, dz: 4.8, tn: 4.9, eg: 11.4, sa: 2.2 },
  { year: 2016, dz: 3.6, tn: 3.6, eg: 13.8, sa: 3.5 },
  { year: 2017, dz: 5.6, tn: 5.3, eg: 23.5, sa: -0.8 },
  { year: 2018, dz: 2.6, tn: 5.5, eg: 13.9, sa: 2.5 },
  { year: 2019, dz: 2.0, tn: 6.7, eg: 9.4, sa: -2.1 },
  { year: 2020, dz: 2.4, tn: 5.6, eg: 5.7, sa: 3.4 },
  { year: 2021, dz: 7.2, tn: 5.6, eg: 5.2, sa: 3.1 },
  { year: 2022, dz: 9.3, tn: 8.3, eg: 13.3, sa: 2.5 },
  { year: 2023, dz: 7.4, tn: 7.3, eg: 33.9, sa: 1.6 },
  { year: 2024, dz: 4.0, tn: 3.8, eg: 23.4, sa: 1.7 },
];

// ─── Unemployment (%) ────────────────────────────────────────────────────────
export const benchmarkUnemployment: BenchmarkRow[] = [
  { year: 2015, dz: 11.0, tn: 15.4, eg: 12.8, sa: 5.6 },
  { year: 2016, dz: 10.5, tn: 15.5, eg: 12.5, sa: 5.8 },
  { year: 2017, dz: 11.2, tn: 15.5, eg: 11.9, sa: 5.8 },
  { year: 2018, dz: 11.7, tn: 15.2, eg: 10.0, sa: 5.9 },
  { year: 2019, dz: 11.4, tn: 15.0, eg: 8.0, sa: 5.7 },
  { year: 2020, dz: 12.5, tn: 16.2, eg: 9.6, sa: 5.9 },
  { year: 2021, dz: 12.6, tn: 17.4, eg: 7.9, sa: 5.7 },
  { year: 2022, dz: 11.9, tn: 16.2, eg: 7.5, sa: 5.4 },
  { year: 2023, dz: 11.3, tn: 15.2, eg: 7.0, sa: 5.2 },
  { year: 2024, dz: 9.7, tn: 14.3, eg: 6.7, sa: 4.9 },
];

// ─── Trade Balance (% GDP) ───────────────────────────────────────────────────
export const benchmarkTradeBalance: BenchmarkRow[] = [
  { year: 2015, dz: -8.2, tn: -7.9, eg: -7.3, sa: 7.9 },
  { year: 2016, dz: -13.0, tn: -8.6, eg: -7.1, sa: 2.8 },
  { year: 2017, dz: -10.0, tn: -8.4, eg: -6.6, sa: 6.1 },
  { year: 2018, dz: -5.7, tn: -8.7, eg: -6.4, sa: 9.2 },
  { year: 2019, dz: -3.0, tn: -8.0, eg: -3.1, sa: 5.1 },
  { year: 2020, dz: -4.3, tn: -7.2, eg: -3.6, sa: -3.4 },
  { year: 2021, dz: 3.6, tn: -7.6, eg: -3.1, sa: 11.1 },
  { year: 2022, dz: 11.3, tn: -7.1, eg: -3.3, sa: 16.5 },
  { year: 2023, dz: 5.7, tn: -6.8, eg: -3.5, sa: 4.3 },
  { year: 2024, dz: 1.1, tn: -6.5, eg: -3.2, sa: 5.8 },
];

// ─── Debt to GDP (%) ──────────────────────────────────────────────────────────
export const benchmarkDebtGdp: BenchmarkRow[] = [
  { year: 2015, dz: 8.3, tn: 53.1, eg: 90.8, sa: 5.8 },
  { year: 2016, dz: 13.5, tn: 57.8, eg: 97.5, sa: 12.9 },
  { year: 2017, dz: 20.0, tn: 71.0, eg: 103.1, sa: 16.9 },
  { year: 2018, dz: 24.5, tn: 72.0, eg: 90.2, sa: 18.4 },
  { year: 2019, dz: 27.0, tn: 76.7, eg: 84.2, sa: 22.8 },
  { year: 2020, dz: 33.0, tn: 87.2, eg: 90.2, sa: 32.5 },
  { year: 2021, dz: 38.0, tn: 84.6, eg: 88.2, sa: 26.2 },
  { year: 2022, dz: 36.5, tn: 81.5, eg: 87.5, sa: 24.6 },
  { year: 2023, dz: 39.0, tn: 80.2, eg: 87.0, sa: 26.0 },
  { year: 2024, dz: 41.0, tn: 79.8, eg: 86.0, sa: 25.5 },
];

// ─── FDI Net Inflows (% GDP) ─────────────────────────────────────────────────
export const benchmarkFdi: BenchmarkRow[] = [
  { year: 2015, dz: 1.0, tn: 2.2, eg: 1.6, sa: 0.6 },
  { year: 2016, dz: 0.8, tn: 1.5, eg: 2.2, sa: 0.8 },
  { year: 2017, dz: 0.9, tn: 1.4, eg: 1.9, sa: 0.6 },
  { year: 2018, dz: 1.1, tn: 1.8, eg: 2.1, sa: 0.8 },
  { year: 2019, dz: 1.0, tn: 1.5, eg: 1.8, sa: 0.5 },
  { year: 2020, dz: 0.6, tn: 0.9, eg: 1.5, sa: -0.2 },
  { year: 2021, dz: 0.7, tn: 1.6, eg: 2.2, sa: 0.9 },
  { year: 2022, dz: 1.0, tn: 1.8, eg: 2.8, sa: 1.0 },
  { year: 2023, dz: 1.2, tn: 1.7, eg: 2.5, sa: 0.8 },
  { year: 2024, dz: 1.3, tn: 2.0, eg: 2.3, sa: 0.9 },
];

// ─── GNI Per Capita (USD) ─────────────────────────────────────────────────────
export const benchmarkGniPerCapita: BenchmarkRow[] = [
  { year: 2015, dz: 3760, tn: 4210, eg: 3510, sa: 20390 },
  { year: 2016, dz: 3720, tn: 3910, eg: 3470, sa: 19440 },
  { year: 2017, dz: 3940, tn: 3700, eg: 2410, sa: 19970 },
  { year: 2018, dz: 4150, tn: 3730, eg: 2540, sa: 23220 },
  { year: 2019, dz: 4280, tn: 3710, eg: 2780, sa: 23020 },
  { year: 2020, dz: 3400, tn: 3360, eg: 3520, sa: 21210 },
  { year: 2021, dz: 3790, tn: 3660, eg: 3780, sa: 23590 },
  { year: 2022, dz: 4370, tn: 3790, eg: 4030, sa: 27770 },
  { year: 2023, dz: 4700, tn: 3860, eg: 4150, sa: 27570 },
  { year: 2024, dz: 5760, tn: 4100, eg: 3790, sa: 30040 },
];

// ─── Energy Access (% population with electricity) ──────────────────────────
export const benchmarkEnergyAccess: BenchmarkRow[] = [
  { year: 2015, dz: 99.6, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2016, dz: 99.7, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2017, dz: 99.8, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2018, dz: 99.8, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2019, dz: 99.9, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2020, dz: 99.9, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2021, dz: 99.9, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2022, dz: 100.0, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2023, dz: 100.0, tn: 100.0, eg: 100.0, sa: 100.0 },
  { year: 2024, dz: 100.0, tn: 100.0, eg: 100.0, sa: 100.0 },
];

// ─── All benchmark datasets ─────────────────────────────────────────────────
export const allBenchmarks = {
  gdpGrowth: { data: benchmarkGdpGrowth, unit: "%" },
  inflation: { data: benchmarkInflation, unit: "%" },
  unemployment: { data: benchmarkUnemployment, unit: "%" },
  tradeBalance: { data: benchmarkTradeBalance, unit: "% PIB" },
  debtGdp: { data: benchmarkDebtGdp, unit: "%" },
  fdi: { data: benchmarkFdi, unit: "% PIB" },
  gniPerCapita: { data: benchmarkGniPerCapita, unit: "$" },
  energyAccess: { data: benchmarkEnergyAccess, unit: "%" },
};

// ─── Latest Snapshot (2024) ─────────────────────────────────────────────────
export const latestSnapshot: Record<Country, Record<string, number>> = {
  DZ: {
    gdpGrowth: 3.6, inflation: 4.0, unemployment: 9.7,
    tradeBalance: 1.1, debtGdp: 41.0, fdi: 1.3, gniPerCapita: 5760, energyAccess: 100.0,
  },
  TN: {
    gdpGrowth: 1.2, inflation: 3.8, unemployment: 14.3,
    tradeBalance: -6.5, debtGdp: 79.8, fdi: 2.0, gniPerCapita: 4100, energyAccess: 100.0,
  },
  EG: {
    gdpGrowth: 5.1, inflation: 23.4, unemployment: 6.7,
    tradeBalance: -3.2, debtGdp: 86.0, fdi: 2.3, gniPerCapita: 3790, energyAccess: 100.0,
  },
  SA: {
    gdpGrowth: 0.8, inflation: 1.7, unemployment: 4.9,
    tradeBalance: 5.8, debtGdp: 25.5, fdi: 0.9, gniPerCapita: 30040, energyAccess: 100.0,
  },
};
