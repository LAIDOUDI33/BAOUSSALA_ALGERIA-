// ═══════════════════════════════════════════════════════════════════════════════
// INTERNATIONAL BENCHMARKING DATA — Algeria vs Tunisia, Egypt, Saudi Arabia
// Sources: World Bank Open Data, IMF WEO, ILO, UNDP
// NO Morocco — per user requirement
// ═══════════════════════════════════════════════════════════════════════════════

export type Country = "DZ" | "TN" | "EG" | "SA";

export const countryMeta: Record<Country, { name: string; nameAr: string; nameFr: string; flag: string; populationM: number; gdpBn: number; gniPerCapita: number; hdi: number; region: string }> = {
  DZ: { name: "Algeria", nameAr: "الجزائر", nameFr: "Algérie", flag: "🇩🇿", populationM: 46.2, gdpBn: 267, gniPerCapita: 4700, hdi: 0.745, region: "Maghreb" },
  TN: { name: "Tunisia", nameAr: "تونس", nameFr: "Tunisie", flag: "🇹🇳", populationM: 12.5, gdpBn: 46, gniPerCapita: 3690, hdi: 0.731, region: "Maghreb" },
  EG: { name: "Egypt", nameAr: "مصر", nameFr: "Égypte", flag: "🇪🇬", populationM: 112.7, gdpBn: 395, gniPerCapita: 3810, hdi: 0.731, region: "MENA" },
  SA: { name: "Saudi Arabia", nameAr: "السعودية", nameFr: "Arabie Saoudite", flag: "🇸🇦", populationM: 36.9, gdpBn: 1062, gniPerCapita: 28620, hdi: 0.875, region: "Gulf" },
};

// ─── GDP Growth % (2015-2024) ─────────────────────────────────────────────
export const gdpGrowthComparison = [
  { year: 2015, DZ: 3.8, TN: 0.8, EG: 4.4, SA: 4.1 },
  { year: 2016, DZ: 3.3, TN: 1.0, EG: 4.3, SA: 1.5 },
  { year: 2017, DZ: 1.4, TN: 2.0, EG: 4.2, SA: -0.7 },
  { year: 2018, DZ: 2.1, TN: 2.6, EG: 5.3, SA: 2.5 },
  { year: 2019, DZ: 0.8, TN: 1.1, EG: 5.6, SA: 0.8 },
  { year: 2020, DZ: -5.1, TN: -8.7, EG: 3.3, SA: -4.1 },
  { year: 2021, DZ: 3.4, TN: 3.7, EG: 3.3, SA: 3.2 },
  { year: 2022, DZ: 3.4, TN: 2.8, EG: 3.8, SA: 8.7 },
  { year: 2023, DZ: 2.4, TN: 0.8, EG: 3.8, SA: -0.8 },
  { year: 2024, DZ: 2.9, TN: 1.2, EG: 4.2, SA: 1.0 },
];

// ─── Inflation % (2015-2024) ───────────────────────────────────────────────
export const inflationComparison = [
  { year: 2015, DZ: 4.8, TN: 4.9, EG: 10.4, SA: 2.2 },
  { year: 2016, DZ: 6.4, TN: 3.8, EG: 13.8, SA: 3.5 },
  { year: 2017, DZ: 5.6, TN: 5.3, EG: 23.5, SA: -0.2 },
  { year: 2018, DZ: 2.0, TN: 7.4, EG: 13.9, SA: 2.5 },
  { year: 2019, DZ: 2.0, TN: 6.7, EG: 9.4, SA: -1.1 },
  { year: 2020, DZ: 2.4, TN: 5.6, EG: 5.7, SA: 3.4 },
  { year: 2021, DZ: 7.2, TN: 5.6, EG: 5.2, SA: 3.1 },
  { year: 2022, DZ: 9.3, TN: 8.3, EG: 13.4, SA: 2.5 },
  { year: 2023, DZ: 7.2, TN: 8.1, EG: 33.9, SA: 1.6 },
  { year: 2024, DZ: 5.8, TN: 6.3, EG: 23.4, SA: 1.7 },
];

// ─── Unemployment % (2015-2024) ────────────────────────────────────────────
export const unemploymentComparison = [
  { year: 2015, DZ: 11.4, TN: 15.3, EG: 12.8, SA: 5.6 },
  { year: 2016, DZ: 10.5, TN: 15.5, EG: 13.3, SA: 5.9 },
  { year: 2017, DZ: 11.5, TN: 15.4, EG: 11.9, SA: 6.0 },
  { year: 2018, DZ: 11.7, TN: 15.2, EG: 10.4, SA: 5.7 },
  { year: 2019, DZ: 11.9, TN: 15.0, EG: 7.5, SA: 5.6 },
  { year: 2020, DZ: 12.7, TN: 16.2, EG: 9.6, SA: 8.5 },
  { year: 2021, DZ: 12.4, TN: 17.4, EG: 7.9, SA: 7.4 },
  { year: 2022, DZ: 11.9, TN: 16.3, EG: 7.5, SA: 5.8 },
  { year: 2023, DZ: 12.2, TN: 15.5, EG: 7.2, SA: 5.3 },
  { year: 2024, DZ: 12.0, TN: 15.0, EG: 6.9, SA: 4.9 },
];

// ─── GDP Per Capita USD (2015-2024) ─────────────────────────────────────────
export const gdpPerCapitaComparison = [
  { year: 2015, DZ: 4200, TN: 3710, EG: 3500, SA: 20550 },
  { year: 2016, DZ: 3900, TN: 3660, EG: 3490, SA: 20200 },
  { year: 2017, DZ: 4070, TN: 3680, EG: 2430, SA: 20760 },
  { year: 2018, DZ: 4300, TN: 3690, EG: 2540, SA: 23200 },
  { year: 2019, DZ: 4050, TN: 3310, EG: 3010, SA: 23070 },
  { year: 2020, DZ: 3330, TN: 3270, EG: 3550, SA: 20320 },
  { year: 2021, DZ: 3750, TN: 3680, EG: 3930, SA: 23520 },
  { year: 2022, DZ: 4250, TN: 3750, EG: 4290, SA: 30040 },
  { year: 2023, DZ: 4560, TN: 3770, EG: 3730, SA: 29970 },
  { year: 2024, DZ: 4780, TN: 3890, EG: 3500, SA: 28800 },
];

// ─── Trade Openness % of GDP (2015-2024) ────────────────────────────────────
export const tradeOpennessComparison = [
  { year: 2015, DZ: 56.3, TN: 89.0, EG: 36.7, SA: 57.4 },
  { year: 2016, DZ: 53.5, TN: 83.2, EG: 31.4, SA: 53.0 },
  { year: 2017, DZ: 58.3, TN: 84.3, EG: 37.3, SA: 54.1 },
  { year: 2018, DZ: 61.9, TN: 88.6, EG: 41.3, SA: 56.6 },
  { year: 2019, DZ: 58.8, TN: 85.2, EG: 39.5, SA: 55.6 },
  { year: 2020, DZ: 46.9, TN: 72.0, EG: 35.1, SA: 48.0 },
  { year: 2021, DZ: 57.3, TN: 82.5, EG: 40.2, SA: 60.3 },
  { year: 2022, DZ: 67.3, TN: 93.1, EG: 42.5, SA: 68.4 },
  { year: 2023, DZ: 63.1, TN: 88.5, EG: 40.1, SA: 63.7 },
  { year: 2024, DZ: 59.9, TN: 86.0, EG: 38.5, SA: 59.2 },
];

// ─── FDI Inflows % of GDP (2015-2024) ──────────────────────────────────────
export const fdiComparison = [
  { year: 2015, DZ: 1.2, TN: 2.4, EG: 1.6, SA: 0.8 },
  { year: 2016, DZ: 0.9, TN: 1.6, EG: 1.9, SA: 0.5 },
  { year: 2017, DZ: 1.4, TN: 1.8, EG: 1.7, SA: 0.5 },
  { year: 2018, DZ: 1.1, TN: 1.5, EG: 1.6, SA: 0.4 },
  { year: 2019, DZ: 1.0, TN: 1.6, EG: 1.4, SA: 0.6 },
  { year: 2020, DZ: 0.6, TN: 1.3, EG: 1.2, SA: 0.3 },
  { year: 2021, DZ: 0.8, TN: 1.8, EG: 1.5, SA: 0.4 },
  { year: 2022, DZ: 1.1, TN: 2.0, EG: 1.9, SA: 0.5 },
  { year: 2023, DZ: 1.3, TN: 2.2, EG: 2.0, SA: 0.6 },
  { year: 2024, DZ: 1.5, TN: 2.4, EG: 2.3, SA: 0.8 },
];

// ─── External Debt % of GNI (2015-2024) ────────────────────────────────────
export const externalDebtComparison = [
  { year: 2015, DZ: 3.2, TN: 53.8, EG: 16.3, SA: 20.4 },
  { year: 2016, DZ: 5.8, TN: 60.2, EG: 18.5, SA: 21.2 },
  { year: 2017, DZ: 7.9, TN: 69.3, EG: 22.1, SA: 21.8 },
  { year: 2018, DZ: 8.6, TN: 73.5, EG: 25.8, SA: 22.1 },
  { year: 2019, DZ: 9.1, TN: 77.0, EG: 28.5, SA: 22.5 },
  { year: 2020, DZ: 10.8, TN: 84.1, EG: 28.3, SA: 24.8 },
  { year: 2021, DZ: 12.3, TN: 87.2, EG: 27.5, SA: 25.3 },
  { year: 2022, DZ: 12.8, TN: 88.0, EG: 28.0, SA: 24.1 },
  { year: 2023, DZ: 13.5, TN: 86.5, EG: 27.2, SA: 23.5 },
  { year: 2024, DZ: 14.2, TN: 85.0, EG: 26.5, SA: 22.8 },
];

// ─── Life Expectancy (2024 snapshot) ────────────────────────────────────────
export const lifeExpectancySnapshot = [
  { country: "DZ", total: 77.5, male: 75.7, female: 79.5 },
  { country: "TN", total: 77.8, male: 75.6, female: 80.2 },
  { country: "EG", total: 72.0, male: 70.1, female: 74.0 },
  { country: "SA", total: 78.1, male: 76.4, female: 80.0 },
];

// ─── HDI Components (2023) ──────────────────────────────────────────────────
export const hdiComponents = [
  { country: "DZ", hdi: 0.745, lifeExp: 0.80, education: 0.66, gni: 0.78, rank: 91 },
  { country: "TN", hdi: 0.731, lifeExp: 0.81, education: 0.65, gni: 0.73, rank: 97 },
  { country: "EG", hdi: 0.731, lifeExp: 0.73, education: 0.67, gni: 0.79, rank: 97 },
  { country: "SA", hdi: 0.875, lifeExp: 0.83, education: 0.78, gni: 1.01, rank: 40 },
];

// ─── Sector Composition 2024 (% of GDP) ─────────────────────────────────────
export const sectorComposition = [
  { country: "DZ", agriculture: 9.4, industry: 36.2, services: 48.5, hydrocarbons: 5.9 },
  { country: "TN", agriculture: 9.8, industry: 26.3, services: 63.9, hydrocarbons: 0 },
  { country: "EG", agriculture: 11.5, industry: 32.2, services: 51.3, hydrocarbons: 5.0 },
  { country: "SA", agriculture: 2.5, industry: 45.5, services: 46.0, hydrocarbons: 6.0 },
];

// ─── Digital Indicators 2024 ────────────────────────────────────────────────
export const digitalIndicators = [
  { country: "DZ", internet: 83.5, mobile: 97.2, broadband: 37.0, digitalEconomy: 3.2 },
  { country: "TN", internet: 84.0, mobile: 95.5, broadband: 28.0, digitalEconomy: 4.1 },
  { country: "EG", internet: 72.2, mobile: 89.0, broadband: 22.5, digitalEconomy: 3.8 },
  { country: "SA", internet: 99.0, mobile: 129.0, broadband: 52.0, digitalEconomy: 6.5 },
];

// ─── Energy Indicators 2024 ────────────────────────────────────────────────
export const energyIndicators = [
  { country: "DZ", electricityAccess: 100.0, renewableShare: 3.5, co2PerCapita: 3.3, energyPerCapita: 1550 },
  { country: "TN", electricityAccess: 100.0, renewableShare: 12.5, co2PerCapita: 2.4, energyPerCapita: 1010 },
  { country: "EG", electricityAccess: 100.0, renewableShare: 11.8, co2PerCapita: 2.3, energyPerCapita: 990 },
  { country: "SA", electricityAccess: 100.0, renewableShare: 1.2, co2PerCapita: 15.3, energyPerCapita: 9600 },
];

// ─── Budget & Fiscal 2024 (% of GDP) ────────────────────────────────────────
export const fiscalComparison = [
  { country: "DZ", revenue: 36.8, expenditure: 38.5, deficit: -1.7, debt: 41.0 },
  { country: "TN", revenue: 28.5, expenditure: 33.2, deficit: -4.7, debt: 85.0 },
  { country: "EG", revenue: 22.0, expenditure: 30.5, deficit: -8.5, debt: 89.0 },
  { country: "SA", revenue: 27.5, expenditure: 30.2, deficit: -2.7, debt: 26.5 },
];

// ─── Summary Ranking Table ─────────────────────────────────────────────────
export const benchmarkSummary = [
  { indicator: "GDP Growth 2024 (%)", DZ: 2.9, TN: 1.2, EG: 4.2, SA: 1.0, best: "EG", worst: "SA" },
  { indicator: "Inflation 2024 (%)", DZ: 5.8, TN: 6.3, EG: 23.4, SA: 1.7, best: "SA", worst: "EG" },
  { indicator: "Unemployment 2024 (%)", DZ: 12.0, TN: 15.0, EG: 6.9, SA: 4.9, best: "SA", worst: "TN" },
  { indicator: "GDP/Capita 2024 ($)", DZ: 4780, TN: 3890, EG: 3500, SA: 28800, best: "SA", worst: "EG" },
  { indicator: "HDI 2023", DZ: 0.745, TN: 0.731, EG: 0.731, SA: 0.875, best: "SA", worst: "TN" },
  { indicator: "Debt/GNI 2024 (%)", DZ: 14.2, TN: 85.0, EG: 26.5, SA: 22.8, best: "DZ", worst: "TN" },
  { indicator: "Trade Openness 2024 (%)", DZ: 59.9, TN: 86.0, EG: 38.5, SA: 59.2, best: "TN", worst: "EG" },
  { indicator: "FDI 2024 (% GDP)", DZ: 1.5, TN: 2.4, EG: 2.3, SA: 0.8, best: "TN", worst: "SA" },
  { indicator: "Life Expectancy (yr)", DZ: 77.5, TN: 77.8, EG: 72.0, SA: 78.1, best: "SA", worst: "EG" },
  { indicator: "Internet Users (%)", DZ: 83.5, TN: 84.0, EG: 72.2, SA: 99.0, best: "SA", worst: "EG" },
  { indicator: "Renewable Energy (%)", DZ: 3.5, TN: 12.5, EG: 11.8, SA: 1.2, best: "TN", worst: "SA" },
  { indicator: "CO2/Capita (t)", DZ: 3.3, TN: 2.4, EG: 2.3, SA: 15.3, best: "EG", worst: "SA" },
];

export type BenchmarkRow = { ind: string; DZ: number; TN: number; EG: number; SA: number };

export const allBenchmarks: Record<string, { label: string; unit: string; data: BenchmarkRow[] }> = {
  gdpGrowth: { label: "GDP Growth", unit: "%", data: gdpGrowthComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  inflation: { label: "Inflation", unit: "%", data: inflationComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  unemployment: { label: "Unemployment", unit: "%", data: unemploymentComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  gdpPerCapita: { label: "GDP/Capita", unit: "$", data: gdpPerCapitaComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  tradeOpenness: { label: "Trade Openness", unit: "%", data: tradeOpennessComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  fdi: { label: "FDI", unit: "%", data: fdiComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
  externalDebt: { label: "External Debt", unit: "%", data: externalDebtComparison.map(d => ({ ind: String(d.year), DZ: d.DZ, TN: d.TN, EG: d.EG, SA: d.SA })) },
};

// Latest year snapshot for AnalyticsModules
export const latestSnapshot: Record<Country, { gdpGrowth: number; inflation: number; unemployment: number; debtGdp: number; gdpPerCapita: number }> = {
  DZ: { gdpGrowth: 2.9, inflation: 5.8, unemployment: 12.0, debtGdp: 14.2, gdpPerCapita: 4780 },
  TN: { gdpGrowth: 1.2, inflation: 6.3, unemployment: 15.0, debtGdp: 85.0, gdpPerCapita: 3890 },
  EG: { gdpGrowth: 4.2, inflation: 23.4, unemployment: 6.9, debtGdp: 26.5, gdpPerCapita: 3500 },
  SA: { gdpGrowth: 1.0, inflation: 1.7, unemployment: 4.9, debtGdp: 22.8, gdpPerCapita: 28800 },
};

// ─── Radar Chart Data (Normalized 0-100) ───────────────────────────────────
export const radarBenchmark = [
  { axis: "Croissance", DZ: 58, TN: 24, EG: 84, SA: 20 },
  { axis: "Stabilité Prix", DZ: 65, TN: 60, EG: 15, SA: 90 },
  { axis: "Emploi", DZ: 40, TN: 25, EG: 55, SA: 75 },
  { axis: "Richesse/hab", DZ: 17, TN: 14, EG: 12, SA: 100 },
  { axis: "Faible Dette", DZ: 100, TN: 17, EG: 55, SA: 65 },
  { axis: "Ouverture", DZ: 60, TN: 100, EG: 40, SA: 59 },
  { axis: "IDH", DZ: 85, TN: 84, EG: 84, SA: 100 },
  { axis: "Numérique", DZ: 76, TN: 77, EG: 65, SA: 100 },
];
