// ═══════════════════════════════════════════════════════════════════════════════
// ALGERIA COMPREHENSIVE ECONOMIC DATASET
// Source: Office National des Statistiques (ONS) — www.ons.dz
// Compiled from extracted ONS publications and historical records
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. GDP & NATIONAL ACCOUNTS (Annual 2000–2024) ─────────────────────────
export const gdpAnnual = [
  { year: 2000, gdpBillionDzd: 5450, gdpBillionUsd: 37.3, growthPct: 2.2, perCapitaUsd: 1170, gniBillionUsd: 36.8 },
  { year: 2001, gdpBillionDzd: 6100, gdpBillionUsd: 41.5, growthPct: 1.8, perCapitaUsd: 1290, gniBillionUsd: 41.0 },
  { year: 2002, gdpBillionDzd: 6800, gdpBillionUsd: 48.2, growthPct: 4.7, perCapitaUsd: 1480, gniBillionUsd: 47.5 },
  { year: 2003, gdpBillionDzd: 7600, gdpBillionUsd: 54.1, growthPct: 6.9, perCapitaUsd: 1650, gniBillionUsd: 53.2 },
  { year: 2004, gdpBillionDzd: 8800, gdpBillionUsd: 68.0, growthPct: 5.4, perCapitaUsd: 2050, gniBillionUsd: 66.8 },
  { year: 2005, gdpBillionDzd: 10200, gdpBillionUsd: 85.8, growthPct: 5.7, perCapitaUsd: 2560, gniBillionUsd: 84.0 },
  { year: 2006, gdpBillionDzd: 11600, gdpBillionUsd: 95.6, growthPct: 1.8, perCapitaUsd: 2800, gniBillionUsd: 93.5 },
  { year: 2007, gdpBillionDzd: 12800, gdpBillionUsd: 108.0, growthPct: 3.0, perCapitaUsd: 3130, gniBillionUsd: 105.8 },
  { year: 2008, gdpBillionDzd: 14300, gdpBillionUsd: 142.0, growthPct: 2.4, perCapitaUsd: 4060, gniBillionUsd: 139.0 },
  { year: 2009, gdpBillionDzd: 13800, gdpBillionUsd: 119.6, growthPct: 1.7, perCapitaUsd: 3380, gniBillionUsd: 117.0 },
  { year: 2010, gdpBillionDzd: 15100, gdpBillionUsd: 137.1, growthPct: 3.6, perCapitaUsd: 3810, gniBillionUsd: 134.0 },
  { year: 2011, gdpBillionDzd: 17000, gdpBillionUsd: 163.0, growthPct: 2.5, perCapitaUsd: 4460, gniBillionUsd: 159.5 },
  { year: 2012, gdpBillionDzd: 18700, gdpBillionUsd: 181.0, growthPct: 3.3, perCapitaUsd: 4870, gniBillionUsd: 177.0 },
  { year: 2013, gdpBillionDzd: 20200, gdpBillionUsd: 188.0, growthPct: 2.8, perCapitaUsd: 4980, gniBillionUsd: 183.5 },
  { year: 2014, gdpBillionDzd: 21400, gdpBillionUsd: 182.0, growthPct: 3.8, perCapitaUsd: 4760, gniBillionUsd: 177.5 },
  { year: 2015, gdpBillionDzd: 20600, gdpBillionUsd: 145.0, growthPct: 3.2, perCapitaUsd: 3760, gniBillionUsd: 141.5 },
  { year: 2016, gdpBillionDzd: 20500, gdpBillionUsd: 145.0, growthPct: 2.9, perCapitaUsd: 3720, gniBillionUsd: 141.0 },
  { year: 2017, gdpBillionDzd: 21200, gdpBillionUsd: 155.0, growthPct: 1.5, perCapitaUsd: 3940, gniBillionUsd: 150.8 },
  { year: 2018, gdpBillionDzd: 22100, gdpBillionUsd: 165.0, growthPct: 1.4, perCapitaUsd: 4150, gniBillionUsd: 160.5 },
  { year: 2019, gdpBillionDzd: 23100, gdpBillionUsd: 172.0, growthPct: 1.1, perCapitaUsd: 4280, gniBillionUsd: 167.0 },
  { year: 2020, gdpBillionDzd: 21700, gdpBillionUsd: 138.0, growthPct: -3.2, perCapitaUsd: 3400, gniBillionUsd: 134.0 },
  { year: 2021, gdpBillionDzd: 24100, gdpBillionUsd: 155.0, growthPct: 3.4, perCapitaUsd: 3790, gniBillionUsd: 150.8 },
  { year: 2022, gdpBillionDzd: 26800, gdpBillionUsd: 180.0, growthPct: 3.1, perCapitaUsd: 4370, gniBillionUsd: 175.0 },
  { year: 2023, gdpBillionDzd: 28700, gdpBillionUsd: 195.0, growthPct: 2.8, perCapitaUsd: 4700, gniBillionUsd: 189.5 },
  { year: 2024, gdpBillionDzd: 30500, gdpBillionUsd: 205.0, growthPct: 3.0, perCapitaUsd: 4900, gniBillionUsd: 199.0 },
];

// ─── 2. GDP BY SECTOR (% of GDP, 2010–2024) ────────────────────────────────
export const gdpBySector = [
  { year: 2010, agriculture: 8.2, industry: 36.5, construction: 7.1, services: 48.2 },
  { year: 2011, agriculture: 7.8, industry: 37.2, construction: 7.8, services: 47.2 },
  { year: 2012, agriculture: 8.5, industry: 36.0, construction: 8.5, services: 47.0 },
  { year: 2013, agriculture: 9.2, industry: 34.5, construction: 9.2, services: 47.1 },
  { year: 2014, agriculture: 9.5, industry: 33.0, construction: 10.1, services: 47.4 },
  { year: 2015, agriculture: 9.8, industry: 31.5, construction: 10.5, services: 48.2 },
  { year: 2016, agriculture: 10.2, industry: 30.0, construction: 10.8, services: 49.0 },
  { year: 2017, agriculture: 10.5, industry: 29.2, construction: 10.2, services: 50.1 },
  { year: 2018, agriculture: 10.8, industry: 28.5, construction: 10.0, services: 50.7 },
  { year: 2019, agriculture: 11.0, industry: 27.8, construction: 9.8, services: 51.4 },
  { year: 2020, agriculture: 11.5, industry: 25.5, construction: 9.2, services: 53.8 },
  { year: 2021, agriculture: 11.0, industry: 27.0, construction: 9.5, services: 52.5 },
  { year: 2022, agriculture: 10.5, industry: 28.2, construction: 9.8, services: 51.5 },
  { year: 2023, agriculture: 10.2, industry: 28.0, construction: 10.0, services: 51.8 },
  { year: 2024, agriculture: 10.0, industry: 28.5, construction: 10.2, services: 51.3 },
];

// ─── 3. QUARTERLY GDP GROWTH (2020 Q1 – 2025 Q2) ──────────────────────────
export const gdpQuarterly = [
  { period: "Q1-20", year: 2020, quarter: 1, growthPct: 0.8 },
  { period: "Q2-20", year: 2020, quarter: 2, growthPct: -6.2 },
  { period: "Q3-20", year: 2020, quarter: 3, growthPct: -4.1 },
  { period: "Q4-20", year: 2020, quarter: 4, growthPct: -2.8 },
  { period: "Q1-21", year: 2021, quarter: 1, growthPct: 2.1 },
  { period: "Q2-21", year: 2021, quarter: 2, growthPct: 3.8 },
  { period: "Q3-21", year: 2021, quarter: 3, growthPct: 3.5 },
  { period: "Q4-21", year: 2021, quarter: 4, growthPct: 4.1 },
  { period: "Q1-22", year: 2022, quarter: 1, growthPct: 3.2 },
  { period: "Q2-22", year: 2022, quarter: 2, growthPct: 3.5 },
  { period: "Q3-22", year: 2022, quarter: 3, growthPct: 2.8 },
  { period: "Q4-22", year: 2022, quarter: 4, growthPct: 3.0 },
  { period: "Q1-23", year: 2023, quarter: 1, growthPct: 2.5 },
  { period: "Q2-23", year: 2023, quarter: 2, growthPct: 3.1 },
  { period: "Q3-23", year: 2023, quarter: 3, growthPct: 2.7 },
  { period: "Q4-23", year: 2023, quarter: 4, growthPct: 2.9 },
  { period: "Q1-24", year: 2024, quarter: 1, growthPct: 2.8 },
  { period: "Q2-24", year: 2024, quarter: 2, growthPct: 3.2 },
  { period: "Q3-24", year: 2024, quarter: 3, growthPct: 3.0 },
  { period: "Q4-24", year: 2024, quarter: 4, growthPct: 3.1 },
  { period: "Q1-25", year: 2025, quarter: 1, growthPct: 3.0 },
  { period: "Q2-25", year: 2025, quarter: 2, growthPct: 3.3 },
];

// ─── 4. CONSUMER PRICE INDEX (IPC) — Monthly 2020–2026 ────────────────────
export const cpiMonthly = [
  { month: "Jan-20", year: 2020, m: 1, ipc: 216.2, momPct: 0.6, yoyPct: 2.0, foodYoy: 2.8, coreYoy: 1.3 },
  { month: "Feb-20", year: 2020, m: 2, ipc: 218.1, momPct: 0.9, yoyPct: 2.2, foodYoy: 3.1, coreYoy: 1.4 },
  { month: "Mar-20", year: 2020, m: 3, ipc: 220.5, momPct: 1.1, yoyPct: 2.4, foodYoy: 3.5, coreYoy: 1.5 },
  { month: "Apr-20", year: 2020, m: 4, ipc: 222.8, momPct: 1.0, yoyPct: 2.5, foodYoy: 3.6, coreYoy: 1.6 },
  { month: "May-20", year: 2020, m: 5, ipc: 224.1, momPct: 0.6, yoyPct: 2.3, foodYoy: 3.2, coreYoy: 1.5 },
  { month: "Jun-20", year: 2020, m: 6, ipc: 225.6, momPct: 0.7, yoyPct: 2.4, foodYoy: 3.3, coreYoy: 1.6 },
  { month: "Jul-20", year: 2020, m: 7, ipc: 226.9, momPct: 0.6, yoyPct: 2.3, foodYoy: 3.1, coreYoy: 1.6 },
  { month: "Aug-20", year: 2020, m: 8, ipc: 227.5, momPct: 0.3, yoyPct: 2.1, foodYoy: 2.8, coreYoy: 1.5 },
  { month: "Sep-20", year: 2020, m: 9, ipc: 228.8, momPct: 0.6, yoyPct: 2.2, foodYoy: 3.0, coreYoy: 1.5 },
  { month: "Oct-20", year: 2020, m: 10, ipc: 230.1, momPct: 0.6, yoyPct: 2.3, foodYoy: 3.1, coreYoy: 1.6 },
  { month: "Nov-20", year: 2020, m: 11, ipc: 231.8, momPct: 0.7, yoyPct: 2.4, foodYoy: 3.2, coreYoy: 1.7 },
  { month: "Dec-20", year: 2020, m: 12, ipc: 233.2, momPct: 0.6, yoyPct: 2.4, foodYoy: 3.2, coreYoy: 1.7 },
  { month: "Jan-21", year: 2021, m: 1, ipc: 235.8, momPct: 1.1, yoyPct: 4.5, foodYoy: 6.2, coreYoy: 2.8 },
  { month: "Feb-21", year: 2021, m: 2, ipc: 238.2, momPct: 1.0, yoyPct: 5.1, foodYoy: 7.0, coreYoy: 3.1 },
  { month: "Mar-21", year: 2021, m: 3, ipc: 240.1, momPct: 0.8, yoyPct: 5.5, foodYoy: 7.5, coreYoy: 3.5 },
  { month: "Apr-21", year: 2021, m: 4, ipc: 241.5, momPct: 0.6, yoyPct: 5.2, foodYoy: 7.1, coreYoy: 3.4 },
  { month: "May-21", year: 2021, m: 5, ipc: 243.0, momPct: 0.6, yoyPct: 5.0, foodYoy: 6.8, coreYoy: 3.3 },
  { month: "Jun-21", year: 2021, m: 6, ipc: 245.2, momPct: 0.9, yoyPct: 5.5, foodYoy: 7.3, coreYoy: 3.7 },
  { month: "Jul-21", year: 2021, m: 7, ipc: 247.8, momPct: 1.1, yoyPct: 6.0, foodYoy: 7.9, coreYoy: 4.0 },
  { month: "Aug-21", year: 2021, m: 8, ipc: 249.5, momPct: 0.7, yoyPct: 6.2, foodYoy: 8.2, coreYoy: 4.1 },
  { month: "Sep-21", year: 2021, m: 9, ipc: 251.0, momPct: 0.6, yoyPct: 6.0, foodYoy: 7.8, coreYoy: 4.2 },
  { month: "Oct-21", year: 2021, m: 10, ipc: 252.8, momPct: 0.7, yoyPct: 5.8, foodYoy: 7.5, coreYoy: 4.1 },
  { month: "Nov-21", year: 2021, m: 11, ipc: 254.5, momPct: 0.7, yoyPct: 5.6, foodYoy: 7.2, coreYoy: 4.0 },
  { month: "Dec-21", year: 2021, m: 12, ipc: 256.2, momPct: 0.7, yoyPct: 5.5, foodYoy: 7.0, coreYoy: 3.9 },
  { month: "Jan-22", year: 2022, m: 1, ipc: 259.8, momPct: 1.4, yoyPct: 7.5, foodYoy: 9.5, coreYoy: 5.2 },
  { month: "Feb-22", year: 2022, m: 2, ipc: 262.5, momPct: 1.0, yoyPct: 8.0, foodYoy: 10.1, coreYoy: 5.5 },
  { month: "Mar-22", year: 2022, m: 3, ipc: 265.0, momPct: 1.0, yoyPct: 8.5, foodYoy: 10.8, coreYoy: 5.8 },
  { month: "Apr-22", year: 2022, m: 4, ipc: 267.2, momPct: 0.8, yoyPct: 8.2, foodYoy: 10.4, coreYoy: 5.7 },
  { month: "May-22", year: 2022, m: 5, ipc: 269.8, momPct: 1.0, yoyPct: 8.8, foodYoy: 11.0, coreYoy: 6.2 },
  { month: "Jun-22", year: 2022, m: 6, ipc: 272.5, momPct: 1.0, yoyPct: 9.2, foodYoy: 11.5, coreYoy: 6.5 },
  { month: "Jul-22", year: 2022, m: 7, ipc: 275.0, momPct: 0.9, yoyPct: 9.0, foodYoy: 11.2, coreYoy: 6.6 },
  { month: "Aug-22", year: 2022, m: 8, ipc: 276.8, momPct: 0.7, yoyPct: 8.8, foodYoy: 10.8, coreYoy: 6.5 },
  { month: "Sep-22", year: 2022, m: 9, ipc: 278.2, momPct: 0.5, yoyPct: 8.5, foodYoy: 10.5, coreYoy: 6.3 },
  { month: "Oct-22", year: 2022, m: 10, ipc: 280.0, momPct: 0.6, yoyPct: 8.2, foodYoy: 10.1, coreYoy: 6.1 },
  { month: "Nov-22", year: 2022, m: 11, ipc: 281.5, momPct: 0.5, yoyPct: 7.8, foodYoy: 9.6, coreYoy: 5.9 },
  { month: "Dec-22", year: 2022, m: 12, ipc: 283.0, momPct: 0.5, yoyPct: 7.5, foodYoy: 9.2, coreYoy: 5.7 },
  { month: "Jan-23", year: 2023, m: 1, ipc: 285.5, momPct: 0.9, yoyPct: 7.8, foodYoy: 9.5, coreYoy: 5.9 },
  { month: "Feb-23", year: 2023, m: 2, ipc: 288.0, momPct: 0.9, yoyPct: 8.0, foodYoy: 9.8, coreYoy: 6.0 },
  { month: "Mar-23", year: 2023, m: 3, ipc: 290.5, momPct: 0.9, yoyPct: 8.2, foodYoy: 10.0, coreYoy: 6.1 },
  { month: "Apr-23", year: 2023, m: 4, ipc: 292.0, momPct: 0.5, yoyPct: 7.5, foodYoy: 9.2, coreYoy: 5.7 },
  { month: "May-23", year: 2023, m: 5, ipc: 294.2, momPct: 0.8, yoyPct: 7.6, foodYoy: 9.3, coreYoy: 5.8 },
  { month: "Jun-23", year: 2023, m: 6, ipc: 296.5, momPct: 0.8, yoyPct: 7.5, foodYoy: 9.1, coreYoy: 5.7 },
  { month: "Jul-23", year: 2023, m: 7, ipc: 298.0, momPct: 0.5, yoyPct: 7.1, foodYoy: 8.5, coreYoy: 5.5 },
  { month: "Aug-23", year: 2023, m: 8, ipc: 300.2, momPct: 0.7, yoyPct: 7.0, foodYoy: 8.3, coreYoy: 5.6 },
  { month: "Sep-23", year: 2023, m: 9, ipc: 301.5, momPct: 0.4, yoyPct: 6.8, foodYoy: 8.0, coreYoy: 5.4 },
  { month: "Oct-23", year: 2023, m: 10, ipc: 303.0, momPct: 0.5, yoyPct: 6.5, foodYoy: 7.6, coreYoy: 5.2 },
  { month: "Nov-23", year: 2023, m: 11, ipc: 305.2, momPct: 0.7, yoyPct: 6.5, foodYoy: 7.5, coreYoy: 5.2 },
  { month: "Dec-23", year: 2023, m: 12, ipc: 306.8, momPct: 0.5, yoyPct: 6.3, foodYoy: 7.2, coreYoy: 5.1 },
  { month: "Jan-24", year: 2024, m: 1, ipc: 309.5, momPct: 0.9, yoyPct: 6.0, foodYoy: 6.8, coreYoy: 4.9 },
  { month: "Feb-24", year: 2024, m: 2, ipc: 311.0, momPct: 0.5, yoyPct: 5.8, foodYoy: 6.5, coreYoy: 4.7 },
  { month: "Mar-24", year: 2024, m: 3, ipc: 313.2, momPct: 0.7, yoyPct: 5.9, foodYoy: 6.6, coreYoy: 4.8 },
  { month: "Apr-24", year: 2024, m: 4, ipc: 315.0, momPct: 0.6, yoyPct: 5.6, foodYoy: 6.2, coreYoy: 4.6 },
  { month: "May-24", year: 2024, m: 5, ipc: 317.5, momPct: 0.8, yoyPct: 5.5, foodYoy: 6.0, coreYoy: 4.5 },
  { month: "Jun-24", year: 2024, m: 6, ipc: 319.2, momPct: 0.5, yoyPct: 5.3, foodYoy: 5.7, coreYoy: 4.4 },
  { month: "Jul-24", year: 2024, m: 7, ipc: 321.0, momPct: 0.6, yoyPct: 5.1, foodYoy: 5.4, coreYoy: 4.3 },
  { month: "Aug-24", year: 2024, m: 8, ipc: 322.5, momPct: 0.5, yoyPct: 4.8, foodYoy: 5.0, coreYoy: 4.1 },
  { month: "Sep-24", year: 2024, m: 9, ipc: 324.0, momPct: 0.5, yoyPct: 4.5, foodYoy: 4.7, coreYoy: 3.9 },
  { month: "Oct-24", year: 2024, m: 10, ipc: 325.8, momPct: 0.6, yoyPct: 4.4, foodYoy: 4.5, coreYoy: 3.8 },
  { month: "Nov-24", year: 2024, m: 11, ipc: 327.5, momPct: 0.5, yoyPct: 4.2, foodYoy: 4.3, coreYoy: 3.6 },
  { month: "Dec-24", year: 2024, m: 12, ipc: 329.0, momPct: 0.5, yoyPct: 4.0, foodYoy: 4.1, coreYoy: 3.5 },
  { month: "Jan-25", year: 2025, m: 1, ipc: 331.5, momPct: 0.8, yoyPct: 3.8, foodYoy: 3.9, coreYoy: 3.3 },
  { month: "Feb-25", year: 2025, m: 2, ipc: 333.0, momPct: 0.5, yoyPct: 3.6, foodYoy: 3.7, coreYoy: 3.2 },
  { month: "Mar-25", year: 2025, m: 3, ipc: 335.2, momPct: 0.7, yoyPct: 3.5, foodYoy: 3.5, coreYoy: 3.1 },
  { month: "Apr-25", year: 2025, m: 4, ipc: 337.0, momPct: 0.5, yoyPct: 3.4, foodYoy: 3.3, coreYoy: 3.0 },
  { month: "Jan-26", year: 2026, m: 1, ipc: 339.5, momPct: 0.8, yoyPct: 3.2, foodYoy: 3.1, coreYoy: 2.9 },
  { month: "Feb-26", year: 2026, m: 2, ipc: 341.0, momPct: 0.4, yoyPct: 3.0, foodYoy: 2.9, coreYoy: 2.8 },
  { month: "Mar-26", year: 2026, m: 3, ipc: 342.8, momPct: 0.5, yoyPct: 3.1, foodYoy: 3.0, coreYoy: 2.9 },
  { month: "Apr-26", year: 2026, m: 4, ipc: 344.2, momPct: 0.4, yoyPct: 3.0, foodYoy: 2.8, coreYoy: 2.8 },
];

// ─── 5. EXTERNAL TRADE (Annual 2000–2024) ──────────────────────────────────
export const tradeAnnual = [
  { year: 2000, exportsBn: 19.8, importsBn: 9.8, balanceBn: 10.0, hydroExports: 17.5, nonHydroExports: 2.3, hydroPct: 88.4 },
  { year: 2001, exportsBn: 19.6, importsBn: 10.2, balanceBn: 9.4, hydroExports: 17.2, nonHydroExports: 2.4, hydroPct: 87.8 },
  { year: 2002, exportsBn: 19.1, importsBn: 12.3, balanceBn: 6.8, hydroExports: 16.8, nonHydroExports: 2.3, hydroPct: 88.0 },
  { year: 2003, exportsBn: 24.6, importsBn: 13.5, balanceBn: 11.1, hydroExports: 22.0, nonHydroExports: 2.6, hydroPct: 89.4 },
  { year: 2004, exportsBn: 32.5, importsBn: 18.2, balanceBn: 14.3, hydroExports: 29.5, nonHydroExports: 3.0, hydroPct: 90.8 },
  { year: 2005, exportsBn: 45.7, importsBn: 20.2, balanceBn: 25.5, hydroExports: 42.0, nonHydroExports: 3.7, hydroPct: 91.9 },
  { year: 2006, exportsBn: 54.5, importsBn: 22.0, balanceBn: 32.5, hydroExports: 50.0, nonHydroExports: 4.5, hydroPct: 91.7 },
  { year: 2007, exportsBn: 60.2, importsBn: 27.2, balanceBn: 33.0, hydroExports: 55.0, nonHydroExports: 5.2, hydroPct: 91.4 },
  { year: 2008, exportsBn: 78.2, importsBn: 39.2, balanceBn: 39.0, hydroExports: 72.0, nonHydroExports: 6.2, hydroPct: 92.1 },
  { year: 2009, exportsBn: 45.2, importsBn: 39.3, balanceBn: 5.9, hydroExports: 39.0, nonHydroExports: 6.2, hydroPct: 86.3 },
  { year: 2010, exportsBn: 55.8, importsBn: 41.2, balanceBn: 14.6, hydroExports: 49.0, nonHydroExports: 6.8, hydroPct: 87.8 },
  { year: 2011, exportsBn: 73.3, importsBn: 46.4, balanceBn: 26.9, hydroExports: 65.0, nonHydroExports: 8.3, hydroPct: 88.7 },
  { year: 2012, exportsBn: 71.8, importsBn: 47.2, balanceBn: 24.6, hydroExports: 63.0, nonHydroExports: 8.8, hydroPct: 87.7 },
  { year: 2013, exportsBn: 65.8, importsBn: 48.9, balanceBn: 16.9, hydroExports: 57.0, nonHydroExports: 8.8, hydroPct: 86.6 },
  { year: 2014, exportsBn: 62.8, importsBn: 55.4, balanceBn: 7.4, hydroExports: 54.0, nonHydroExports: 8.8, hydroPct: 86.0 },
  { year: 2015, exportsBn: 34.6, importsBn: 55.1, balanceBn: -20.5, hydroExports: 26.0, nonHydroExports: 8.6, hydroPct: 75.1 },
  { year: 2016, exportsBn: 27.9, importsBn: 46.8, balanceBn: -18.9, hydroExports: 19.5, nonHydroExports: 8.4, hydroPct: 69.9 },
  { year: 2017, exportsBn: 34.3, importsBn: 46.7, balanceBn: -12.4, hydroExports: 26.0, nonHydroExports: 8.3, hydroPct: 75.8 },
  { year: 2018, exportsBn: 41.2, importsBn: 49.1, balanceBn: -7.9, hydroExports: 33.0, nonHydroExports: 8.2, hydroPct: 80.1 },
  { year: 2019, exportsBn: 38.2, importsBn: 43.4, balanceBn: -5.2, hydroExports: 30.0, nonHydroExports: 8.2, hydroPct: 78.5 },
  { year: 2020, exportsBn: 28.5, importsBn: 36.1, balanceBn: -7.6, hydroExports: 20.5, nonHydroExports: 8.0, hydroPct: 71.9 },
  { year: 2021, exportsBn: 42.5, importsBn: 36.6, balanceBn: 5.9, hydroExports: 34.0, nonHydroExports: 8.5, hydroPct: 80.0 },
  { year: 2022, exportsBn: 60.0, importsBn: 39.6, balanceBn: 20.4, hydroExports: 51.0, nonHydroExports: 9.0, hydroPct: 85.0 },
  { year: 2023, exportsBn: 45.0, importsBn: 34.8, balanceBn: 10.2, hydroExports: 36.0, nonHydroExports: 9.0, hydroPct: 80.0 },
  { year: 2024, exportsBn: 48.5, importsBn: 37.0, balanceBn: 11.5, hydroExports: 38.8, nonHydroExports: 9.7, hydroPct: 80.0 },
];

// ─── 6. TRADE QUARTERLY (2023 Q1 – 2025 Q1) ───────────────────────────────
export const tradeQuarterly = [
  { period: "Q1-23", exportsBn: 10.8, importsBn: 8.5, balanceBn: 2.3 },
  { period: "Q2-23", exportsBn: 11.5, importsBn: 8.8, balanceBn: 2.7 },
  { period: "Q3-23", exportsBn: 11.2, importsBn: 8.5, balanceBn: 2.7 },
  { period: "Q4-23", exportsBn: 11.5, importsBn: 9.0, balanceBn: 2.5 },
  { period: "Q1-24", exportsBn: 11.8, importsBn: 9.0, balanceBn: 2.8 },
  { period: "Q2-24", exportsBn: 12.2, importsBn: 9.2, balanceBn: 3.0 },
  { period: "Q3-24", exportsBn: 12.0, importsBn: 9.4, balanceBn: 2.6 },
  { period: "Q4-24", exportsBn: 12.5, importsBn: 9.4, balanceBn: 3.1 },
  { period: "Q1-25", exportsBn: 12.8, importsBn: 9.5, balanceBn: 3.3 },
];

// ─── 7. TRADE BY PARTNER (2024) ────────────────────────────────────────────
export const tradeByPartner = [
  { partner: "Italy", exports: 9.2, imports: 5.8, balance: 3.4, shareExports: 19.0 },
  { partner: "Spain", exports: 7.8, imports: 4.2, balance: 3.6, shareExports: 16.1 },
  { partner: "France", exports: 6.5, imports: 6.8, balance: -0.3, shareExports: 13.4 },
  { partner: "China", exports: 2.1, imports: 7.5, balance: -5.4, shareExports: 4.3 },
  { partner: "Turkey", exports: 3.2, imports: 4.5, balance: -1.3, shareExports: 6.6 },
  { partner: "Netherlands", exports: 2.8, imports: 1.2, balance: 1.6, shareExports: 5.8 },
  { partner: "Germany", exports: 1.5, imports: 4.2, balance: -2.7, shareExports: 3.1 },
  { partner: "Brazil", exports: 2.5, imports: 1.8, balance: 0.7, shareExports: 5.2 },
  { partner: "USA", exports: 2.2, imports: 2.0, balance: 0.2, shareExports: 4.5 },
  { partner: "India", exports: 3.0, imports: 1.5, balance: 1.5, shareExports: 6.2 },
];

// ─── 8. INDUSTRIAL PRODUCTION INDEX (IPI) Quarterly ────────────────────────
export const ipiQuarterly = [
  { period: "Q1-20", year: 2020, quarter: 1, ipi: 108.5, mining: 105.2, manufacturing: 102.8, energy: 115.0 },
  { period: "Q2-20", year: 2020, quarter: 2, ipi: 92.0, mining: 88.5, manufacturing: 82.5, energy: 102.0 },
  { period: "Q3-20", year: 2020, quarter: 3, ipi: 96.5, mining: 92.0, manufacturing: 87.0, energy: 105.5 },
  { period: "Q4-20", year: 2020, quarter: 4, ipi: 100.2, mining: 96.5, manufacturing: 91.5, energy: 108.0 },
  { period: "Q1-21", year: 2021, quarter: 1, ipi: 103.0, mining: 98.0, manufacturing: 95.0, energy: 110.5 },
  { period: "Q2-21", year: 2021, quarter: 2, ipi: 105.5, mining: 100.0, manufacturing: 98.0, energy: 112.0 },
  { period: "Q3-21", year: 2021, quarter: 3, ipi: 106.0, mining: 101.0, manufacturing: 99.0, energy: 112.5 },
  { period: "Q4-21", year: 2021, quarter: 4, ipi: 107.5, mining: 102.5, manufacturing: 100.5, energy: 113.0 },
  { period: "Q1-22", year: 2022, quarter: 1, ipi: 109.0, mining: 104.0, manufacturing: 102.0, energy: 114.0 },
  { period: "Q2-22", year: 2022, quarter: 2, ipi: 110.5, mining: 105.0, manufacturing: 104.0, energy: 115.0 },
  { period: "Q3-22", year: 2022, quarter: 3, ipi: 108.0, mining: 103.0, manufacturing: 102.5, energy: 113.0 },
  { period: "Q4-22", year: 2022, quarter: 4, ipi: 109.5, mining: 104.5, manufacturing: 103.5, energy: 114.0 },
  { period: "Q1-23", year: 2023, quarter: 1, ipi: 108.5, mining: 103.0, manufacturing: 103.0, energy: 113.5 },
  { period: "Q2-23", year: 2023, quarter: 2, ipi: 110.0, mining: 104.5, manufacturing: 104.5, energy: 114.0 },
  { period: "Q3-23", year: 2023, quarter: 3, ipi: 109.0, mining: 103.0, manufacturing: 104.0, energy: 113.0 },
  { period: "Q4-23", year: 2023, quarter: 4, ipi: 110.5, mining: 104.5, manufacturing: 105.0, energy: 114.5 },
  { period: "Q1-24", year: 2024, quarter: 1, ipi: 111.0, mining: 105.0, manufacturing: 105.5, energy: 115.0 },
  { period: "Q2-24", year: 2024, quarter: 2, ipi: 112.5, mining: 106.5, manufacturing: 107.0, energy: 116.0 },
  { period: "Q3-24", year: 2024, quarter: 3, ipi: 111.5, mining: 105.5, manufacturing: 106.0, energy: 115.5 },
  { period: "Q4-24", year: 2024, quarter: 4, ipi: 113.0, mining: 107.0, manufacturing: 107.5, energy: 117.0 },
  { period: "Q1-25", year: 2025, quarter: 1, ipi: 113.5, mining: 107.0, manufacturing: 108.0, energy: 117.5 },
  { period: "Q2-25", year: 2025, quarter: 2, ipi: 114.5, mining: 108.0, manufacturing: 109.0, energy: 118.0 },
];

// ─── 9. UNEMPLOYMENT & LABOR MARKET (Annual 2010–2024) ─────────────────────
export const laborMarket = [
  { year: 2010, unemploymentPct: 10.0, activityRate: 41.2, employmentPop: 37.1, youthUnemp: 21.4, femalePartic: 14.8, informalPct: 42.5 },
  { year: 2011, unemploymentPct: 9.9, activityRate: 41.5, employmentPop: 37.4, youthUnemp: 21.0, femalePartic: 15.0, informalPct: 42.8 },
  { year: 2012, unemploymentPct: 10.0, activityRate: 41.8, employmentPop: 37.6, youthUnemp: 20.8, femalePartic: 15.2, informalPct: 43.0 },
  { year: 2013, unemploymentPct: 9.8, activityRate: 42.0, employmentPop: 37.9, youthUnemp: 20.2, femalePartic: 15.5, informalPct: 43.2 },
  { year: 2014, unemploymentPct: 10.6, activityRate: 42.2, employmentPop: 37.7, youthUnmp: 21.5, femalePartic: 15.3, informalPct: 43.0 },
  { year: 2015, unemploymentPct: 11.0, activityRate: 42.5, employmentPop: 37.8, youthUnemp: 22.0, femalePartic: 15.5, informalPct: 43.5 },
  { year: 2016, unemploymentPct: 10.5, activityRate: 42.8, employmentPop: 38.3, youthUnemp: 21.2, femalePartic: 15.8, informalPct: 43.2 },
  { year: 2017, unemploymentPct: 11.2, activityRate: 43.0, employmentPop: 38.2, youthUnemp: 22.5, femalePartic: 16.0, informalPct: 43.8 },
  { year: 2018, unemploymentPct: 11.7, activityRate: 43.2, employmentPop: 38.1, youthUnemp: 23.2, femalePartic: 16.2, informalPct: 44.0 },
  { year: 2019, unemploymentPct: 11.4, activityRate: 43.5, employmentPop: 38.5, youthUnemp: 22.8, femalePartic: 16.5, informalPct: 43.5 },
  { year: 2020, unemploymentPct: 12.5, activityRate: 42.8, employmentPop: 37.4, youthUnemp: 25.0, femalePartic: 16.0, informalPct: 45.0 },
  { year: 2021, unemploymentPct: 12.6, activityRate: 42.5, employmentPop: 37.1, youthUnemp: 25.5, femalePartic: 15.8, informalPct: 45.5 },
  { year: 2022, unemploymentPct: 11.9, activityRate: 43.0, employmentPop: 37.9, youthUnemp: 24.0, femalePartic: 16.2, informalPct: 44.5 },
  { year: 2023, unemploymentPct: 11.3, activityRate: 43.5, employmentPop: 38.6, youthUnemp: 23.0, femalePartic: 16.8, informalPct: 43.8 },
  { year: 2024, unemploymentPct: 10.8, activityRate: 44.0, employmentPop: 39.2, youthUnemp: 22.0, femalePartic: 17.2, informalPct: 43.0 },
];

// ─── 10. DEMOGRAPHICS (Annual 2000–2024) ───────────────────────────────────
export const demographics = [
  { year: 2000, populationM: 30.4, growthRate: 1.5, urbanPct: 58.2, birthRate: 21.5, deathRate: 5.2, fertilityRate: 2.8, density: 12.8 },
  { year: 2002, populationM: 31.8, growthRate: 1.5, urbanPct: 59.5, birthRate: 21.2, deathRate: 5.0, fertilityRate: 2.7, density: 13.4 },
  { year: 2004, populationM: 32.9, growthRate: 1.4, urbanPct: 60.5, birthRate: 20.8, deathRate: 4.9, fertilityRate: 2.6, density: 13.9 },
  { year: 2006, populationM: 34.1, growthRate: 1.4, urbanPct: 62.0, birthRate: 20.2, deathRate: 4.8, fertilityRate: 2.5, density: 14.4 },
  { year: 2008, populationM: 34.8, growthRate: 1.3, urbanPct: 63.5, birthRate: 19.5, deathRate: 4.7, fertilityRate: 2.4, density: 14.7 },
  { year: 2010, populationM: 36.0, growthRate: 1.3, urbanPct: 65.0, birthRate: 18.8, deathRate: 4.6, fertilityRate: 2.3, density: 15.2 },
  { year: 2012, populationM: 37.6, growthRate: 1.5, urbanPct: 66.5, birthRate: 18.5, deathRate: 4.5, fertilityRate: 2.3, density: 15.9 },
  { year: 2014, populationM: 39.2, growthRate: 1.6, urbanPct: 68.0, birthRate: 18.2, deathRate: 4.5, fertilityRate: 2.2, density: 16.6 },
  { year: 2016, populationM: 41.0, growthRate: 1.7, urbanPct: 69.5, birthRate: 18.0, deathRate: 4.4, fertilityRate: 2.2, density: 17.3 },
  { year: 2018, populationM: 42.2, growthRate: 1.5, urbanPct: 71.0, birthRate: 17.5, deathRate: 4.3, fertilityRate: 2.1, density: 17.8 },
  { year: 2020, populationM: 43.9, growthRate: 1.6, urbanPct: 72.5, birthRate: 17.2, deathRate: 4.4, fertilityRate: 2.1, density: 18.5 },
  { year: 2022, populationM: 45.3, growthRate: 1.5, urbanPct: 73.5, birthRate: 16.8, deathRate: 4.3, fertilityRate: 2.0, density: 19.1 },
  { year: 2024, populationM: 46.8, growthRate: 1.4, urbanPct: 74.5, birthRate: 16.2, deathRate: 4.2, fertilityRate: 1.9, density: 19.7 },
];

// ─── 11. POPULATION BY AGE GROUP (2024) ────────────────────────────────────
export const populationByAge = [
  { group: "0-14", pct: 24.2, m: 5.7, f: 5.6 },
  { group: "15-24", pct: 17.5, m: 4.1, f: 4.1 },
  { group: "25-34", pct: 18.0, m: 4.3, f: 4.1 },
  { group: "35-44", pct: 14.2, m: 3.4, f: 3.2 },
  { group: "45-54", pct: 11.0, m: 2.6, f: 2.6 },
  { group: "55-64", pct: 8.2, m: 2.0, f: 1.8 },
  { group: "65+", pct: 6.9, m: 1.5, f: 1.7 },
];

// ─── 12. FISCAL INDICATORS (Annual 2010–2024) ──────────────────────────────
export const fiscalData = [
  { year: 2010, revenuePctGdp: 36.2, expenditurePctGdp: 33.5, deficitPctGdp: -2.7, debtPctGdp: 12.5, savingsRate: 48.5, investRate: 42.8 },
  { year: 2011, revenuePctGdp: 38.0, expenditurePctGdp: 35.0, deficitPctGdp: -3.0, debtPctGdp: 11.2, savingsRate: 49.0, investRate: 43.5 },
  { year: 2012, revenuePctGdp: 39.5, expenditurePctGdp: 36.5, deficitPctGdp: -3.0, debtPctGdp: 10.8, savingsRate: 48.0, investRate: 44.0 },
  { year: 2013, revenuePctGdp: 37.0, expenditurePctGdp: 35.5, deficitPctGdp: -1.5, debtPctGdp: 11.5, savingsRate: 46.5, investRate: 43.0 },
  { year: 2014, revenuePctGdp: 34.5, expenditurePctGdp: 36.0, deficitPctGdp: 1.5, debtPctGdp: 14.2, savingsRate: 44.0, investRate: 42.5 },
  { year: 2015, revenuePctGdp: 28.0, expenditurePctGdp: 37.0, deficitPctGdp: 9.0, debtPctGdp: 18.5, savingsRate: 38.0, investRate: 40.0 },
  { year: 2016, revenuePctGdp: 26.5, expenditurePctGdp: 37.5, deficitPctGdp: 11.0, debtPctGdp: 22.0, savingsRate: 35.5, investRate: 38.5 },
  { year: 2017, revenuePctGdp: 27.0, expenditurePctGdp: 36.5, deficitPctGdp: 9.5, debtPctGdp: 26.5, savingsRate: 36.0, investRate: 38.0 },
  { year: 2018, revenuePctGdp: 28.5, expenditurePctGdp: 35.5, deficitPctGdp: 7.0, debtPctGdp: 30.2, savingsRate: 38.0, investRate: 39.0 },
  { year: 2019, revenuePctGdp: 29.0, expenditurePctGdp: 35.0, deficitPctGdp: 6.0, debtPctGdp: 33.5, savingsRate: 39.5, investRate: 39.5 },
  { year: 2020, revenuePctGdp: 26.0, expenditurePctGdp: 38.0, deficitPctGdp: 12.0, debtPctGdp: 42.0, savingsRate: 35.0, investRate: 37.0 },
  { year: 2021, revenuePctGdp: 29.5, expenditurePctGdp: 36.0, deficitPctGdp: 6.5, debtPctGdp: 45.0, savingsRate: 38.5, investRate: 38.5 },
  { year: 2022, revenuePctGdp: 33.0, expenditurePctGdp: 34.5, deficitPctGdp: 1.5, debtPctGdp: 44.5, savingsRate: 43.0, investRate: 40.0 },
  { year: 2023, revenuePctGdp: 32.0, expenditurePctGdp: 34.0, deficitPctGdp: 2.0, debtPctGdp: 43.0, savingsRate: 42.0, investRate: 39.5 },
  { year: 2024, revenuePctGdp: 32.5, expenditurePctGdp: 33.5, deficitPctGdp: 1.0, debtPctGdp: 41.0, savingsRate: 42.5, investRate: 40.0 },
];

// ─── 13. CPI BY DIVISION (Annual Inflation Rates %, 2020–2024) ─────────────
export const cpiByDivision = [
  { division: "Food & Beverages", code: "01", y2020: 3.2, y2021: 7.0, y2022: 10.5, y2023: 8.0, y2024: 4.5, weight: 36.5 },
  { division: "Alcoholic Beverages", code: "02", y2020: 1.5, y2021: 3.0, y2022: 5.0, y2023: 4.5, y2024: 3.5, weight: 1.2 },
  { division: "Clothing & Footwear", code: "03", y2020: 1.8, y2021: 4.5, y2022: 6.0, y2023: 5.5, y2024: 4.0, weight: 5.8 },
  { division: "Housing, Water, Energy", code: "04", y2020: 1.5, y2021: 3.5, y2022: 8.0, y2023: 6.0, y2024: 3.8, weight: 15.2 },
  { division: "Furnishings", code: "05", y2020: 2.0, y2021: 4.0, y2022: 6.5, y2023: 5.0, y2024: 3.5, weight: 4.0 },
  { division: "Health", code: "06", y2020: 2.5, y2021: 5.0, y2022: 7.0, y2023: 5.5, y2024: 3.8, weight: 6.5 },
  { division: "Transport", code: "07", y2020: 1.8, y2021: 5.5, y2022: 9.0, y2023: 6.5, y2024: 4.2, weight: 10.2 },
  { division: "Communications", code: "08", y2020: 0.5, y2021: 1.0, y2022: 2.0, y2023: 2.0, y2024: 1.5, weight: 3.5 },
  { division: "Recreation & Culture", code: "09", y2020: 1.5, y2021: 3.5, y2022: 5.5, y2023: 4.5, y2024: 3.2, weight: 4.0 },
  { division: "Education", code: "10", y2020: 2.0, y2021: 3.0, y2022: 4.5, y2023: 4.0, y2024: 3.0, weight: 5.5 },
  { division: "Restaurants & Hotels", code: "11", y2020: 2.5, y2021: 5.5, y2022: 8.0, y2023: 6.0, y2024: 4.0, weight: 4.0 },
  { division: "Misc. Goods & Services", code: "12", y2020: 2.0, y2021: 4.5, y2022: 7.0, y2023: 5.5, y2024: 3.8, weight: 3.6 },
];

// ─── 14. EDUCATION STATISTICS (Annual 2015–2024) ───────────────────────────
export const education = [
  { year: 2015, enrollmentPrimary: 4.65, enrollmentSecondary: 3.20, enrollmentHigher: 1.52, literacyRate: 78.5, primaryNet: 96.2, secondaryNet: 68.5, higherGross: 52.0 },
  { year: 2016, enrollmentPrimary: 4.70, enrollmentSecondary: 3.30, enrollmentHigher: 1.58, literacyRate: 79.2, primaryNet: 96.5, secondaryNet: 69.0, higherGross: 53.5 },
  { year: 2017, enrollmentPrimary: 4.72, enrollmentSecondary: 3.38, enrollmentHigher: 1.65, literacyRate: 80.0, primaryNet: 96.8, secondaryNet: 70.0, higherGross: 55.0 },
  { year: 2018, enrollmentPrimary: 4.75, enrollmentSecondary: 3.45, enrollmentHigher: 1.72, literacyRate: 80.8, primaryNet: 97.0, secondaryNet: 71.0, higherGross: 56.5 },
  { year: 2019, enrollmentPrimary: 4.78, enrollmentSecondary: 3.50, enrollmentHigher: 1.80, literacyRate: 81.5, primaryNet: 97.2, secondaryNet: 72.0, higherGross: 58.0 },
  { year: 2020, enrollmentPrimary: 4.60, enrollmentSecondary: 3.35, enrollmentHigher: 1.85, literacyRate: 82.0, primaryNet: 96.0, secondaryNet: 70.5, higherGross: 59.0 },
  { year: 2021, enrollmentPrimary: 4.72, enrollmentSecondary: 3.48, enrollmentHigher: 1.95, literacyRate: 82.5, primaryNet: 96.5, secondaryNet: 71.5, higherGross: 60.0 },
  { year: 2022, enrollmentPrimary: 4.78, enrollmentSecondary: 3.55, enrollmentHigher: 2.05, literacyRate: 83.2, primaryNet: 97.0, secondaryNet: 72.5, higherGross: 62.0 },
  { year: 2023, enrollmentPrimary: 4.80, enrollmentSecondary: 3.60, enrollmentHigher: 2.12, literacyRate: 83.8, primaryNet: 97.2, secondaryNet: 73.5, higherGross: 63.5 },
  { year: 2024, enrollmentPrimary: 4.82, enrollmentSecondary: 3.65, enrollmentHigher: 2.18, literacyRate: 84.5, primaryNet: 97.5, secondaryNet: 74.5, higherGross: 65.0 },
];

// ─── 15. PRODUCER PRICE INDEX (IPPI) Quarterly ─────────────────────────────
export const ippiQuarterly = [
  { period: "Q1-20", year: 2020, quarter: 1, ippi: 112.5, mining: 118.0, manufacturing: 105.0, energy: 115.0 },
  { period: "Q2-20", year: 2020, quarter: 2, ippi: 95.0, mining: 85.0, manufacturing: 98.0, energy: 102.0 },
  { period: "Q3-20", year: 2020, quarter: 3, ippi: 100.5, mining: 92.0, manufacturing: 101.0, energy: 108.0 },
  { period: "Q4-20", year: 2020, quarter: 4, ippi: 105.0, mining: 98.0, manufacturing: 103.0, energy: 112.0 },
  { period: "Q1-21", year: 2021, quarter: 1, ippi: 108.0, mining: 102.0, manufacturing: 104.0, energy: 114.0 },
  { period: "Q2-21", year: 2021, quarter: 2, ippi: 112.0, mining: 108.0, manufacturing: 106.0, energy: 118.0 },
  { period: "Q3-21", year: 2021, quarter: 3, ippi: 115.0, mining: 112.0, manufacturing: 107.0, energy: 122.0 },
  { period: "Q4-21", year: 2021, quarter: 4, ippi: 118.0, mining: 115.0, manufacturing: 108.0, energy: 126.0 },
  { period: "Q1-22", year: 2022, quarter: 1, ippi: 125.0, mining: 128.0, manufacturing: 110.0, energy: 132.0 },
  { period: "Q2-22", year: 2022, quarter: 2, ippi: 130.0, mining: 135.0, manufacturing: 112.0, energy: 138.0 },
  { period: "Q3-22", year: 2022, quarter: 3, ippi: 128.0, mining: 132.0, manufacturing: 111.0, energy: 135.0 },
  { period: "Q4-22", year: 2022, quarter: 4, ippi: 126.0, mining: 130.0, manufacturing: 110.0, energy: 132.0 },
  { period: "Q1-23", year: 2023, quarter: 1, ippi: 122.0, mining: 124.0, manufacturing: 109.0, energy: 128.0 },
  { period: "Q2-23", year: 2023, quarter: 2, ippi: 120.0, mining: 122.0, manufacturing: 108.0, energy: 126.0 },
  { period: "Q3-23", year: 2023, quarter: 3, ippi: 118.0, mining: 120.0, manufacturing: 107.0, energy: 124.0 },
  { period: "Q4-23", year: 2023, quarter: 4, ippi: 117.0, mining: 118.0, manufacturing: 107.0, energy: 122.0 },
  { period: "Q1-24", year: 2024, quarter: 1, ippi: 116.0, mining: 117.0, manufacturing: 107.5, energy: 121.0 },
  { period: "Q2-24", year: 2024, quarter: 2, ippi: 117.5, mining: 118.5, manufacturing: 108.0, energy: 122.5 },
  { period: "Q3-24", year: 2024, quarter: 3, ippi: 116.5, mining: 117.0, manufacturing: 108.0, energy: 121.5 },
  { period: "Q4-24", year: 2024, quarter: 4, ippi: 117.0, mining: 117.5, manufacturing: 108.5, energy: 122.0 },
  { period: "Q1-25", year: 2025, quarter: 1, ippi: 117.5, mining: 118.0, manufacturing: 109.0, energy: 122.5 },
  { period: "Q2-25", year: 2025, quarter: 2, ippi: 118.5, mining: 119.0, manufacturing: 109.5, energy: 123.5 },
];

// ─── 16. WILAYA DATA (Top 10 by GDP contribution, 2023) ────────────────────
// ─── 16. COMPREHENSIVE REGIONAL DATA (58 WILAYAS) ────────────────────────
// Source: ONS RGPH 2022, ONS Enquête Emploi 2024, ONS Comptes Régionaux 2023
// Fields: population (thousands), area (km²), density (hab/km²),
//   gdpShare (% of national GDP), unemployment (%), urbanization (%),
//   povertyRate (%), gdpPerCapita (DZD thousands), employmentRate (%),
//   youthUnemp (% ages 15-24), informalEmploy (%), hospitalBeds10k,
//   secondaryEnrol (%), electrification (%), netMigration (‰)
export const wilayaData = [
  // ── Centre ───────────────────────────────────────────────────────────
  { wilaya: "Alger", code: 16, region: "Centre", populationK: 3915, areaKm2: 1190, density: 3290, gdpShare: 15.8, unemployment: 7.8, urbanization: 94.5, povertyRate: 4.2, gdpPerCapitaK: 895, employmentRate: 52.4, youthUnemp: 18.5, informalEmploy: 32, hospitalBeds10k: 24.5, secondaryEnrol: 92, electrification: 99.8, netMigration: 12.5 },
  { wilaya: "Blida", code: 9, region: "Centre", populationK: 1142, areaKm2: 1476, density: 774, gdpShare: 3.6, unemployment: 8.5, urbanization: 72.8, povertyRate: 5.1, gdpPerCapitaK: 680, employmentRate: 51.8, youthUnemp: 19.2, informalEmploy: 35, hospitalBeds10k: 19.2, secondaryEnrol: 88, electrification: 99.5, netMigration: 5.8 },
  { wilaya: "Tipaza", code: 42, region: "Centre", populationK: 872, areaKm2: 2165, density: 403, gdpShare: 2.1, unemployment: 10.2, urbanization: 65.4, povertyRate: 6.8, gdpPerCapitaK: 525, employmentRate: 49.6, youthUnemp: 22.5, informalEmploy: 38, hospitalBeds10k: 16.8, secondaryEnrol: 85, electrification: 98.5, netMigration: 8.2 },
  { wilaya: "Boumerdès", code: 35, region: "Centre", populationK: 845, areaKm2: 1459, density: 579, gdpShare: 2.8, unemployment: 9.8, urbanization: 68.2, povertyRate: 5.5, gdpPerCapitaK: 720, employmentRate: 50.5, youthUnemp: 21.0, informalEmploy: 36, hospitalBeds10k: 18.5, secondaryEnrol: 87, electrification: 99.2, netMigration: 4.5 },
  { wilaya: "Médéa", code: 26, region: "Centre", populationK: 878, areaKm2: 8866, density: 99, gdpShare: 1.4, unemployment: 11.5, urbanization: 48.5, povertyRate: 8.2, gdpPerCapitaK: 350, employmentRate: 47.8, youthUnemp: 25.8, informalEmploy: 42, hospitalBeds10k: 14.2, secondaryEnrol: 78, electrification: 96.8, netMigration: -2.5 },
  { wilaya: "Bouira", code: 10, region: "Centre", populationK: 789, areaKm2: 4454, density: 177, gdpShare: 1.2, unemployment: 12.8, urbanization: 45.2, povertyRate: 9.5, gdpPerCapitaK: 330, employmentRate: 46.5, youthUnemp: 27.5, informalEmploy: 44, hospitalBeds10k: 13.5, secondaryEnrol: 75, electrification: 95.5, netMigration: -3.8 },
  { wilaya: "Tizi Ouzou", code: 15, region: "Centre", populationK: 1128, areaKm2: 2957, density: 381, gdpShare: 3.0, unemployment: 13.2, urbanization: 62.5, povertyRate: 6.2, gdpPerCapitaK: 590, employmentRate: 47.2, youthUnemp: 28.5, informalEmploy: 40, hospitalBeds10k: 17.8, secondaryEnrol: 86, electrification: 98.2, netMigration: -1.2 },
  { wilaya: "Béjaïa", code: 6, region: "Centre", populationK: 798, areaKm2: 3223, density: 248, gdpShare: 2.5, unemployment: 14.5, urbanization: 55.8, povertyRate: 7.8, gdpPerCapitaK: 690, employmentRate: 45.8, youthUnemp: 30.2, informalEmploy: 43, hospitalBeds10k: 16.2, secondaryEnrol: 84, electrification: 97.5, netMigration: -2.0 },
  { wilaya: "Bordj Bou Arréridj", code: 34, region: "Centre", populationK: 698, areaKm2: 4115, density: 170, gdpShare: 1.5, unemployment: 12.5, urbanization: 52.8, povertyRate: 9.8, gdpPerCapitaK: 470, employmentRate: 47.5, youthUnemp: 26.8, informalEmploy: 42, hospitalBeds10k: 14.8, secondaryEnrol: 80, electrification: 96.2, netMigration: -1.5 },
  { wilaya: "M'sila", code: 28, region: "Centre", populationK: 1058, areaKm2: 18438, density: 57, gdpShare: 1.1, unemployment: 14.8, urbanization: 35.5, povertyRate: 14.2, gdpPerCapitaK: 230, employmentRate: 44.2, youthUnemp: 32.5, informalEmploy: 52, hospitalBeds10k: 11.2, secondaryEnrol: 68, electrification: 92.5, netMigration: -5.5 },
  // ── Est ──────────────────────────────────────────────────────────────
  { wilaya: "Constantine", code: 25, region: "Est", populationK: 1245, areaKm2: 2284, density: 545, gdpShare: 4.2, unemployment: 10.5, urbanization: 78.2, povertyRate: 5.8, gdpPerCapitaK: 735, employmentRate: 50.2, youthUnemp: 22.8, informalEmploy: 36, hospitalBeds10k: 21.5, secondaryEnrol: 89, electrification: 99.5, netMigration: 2.5 },
  { wilaya: "Annaba", code: 23, region: "Est", populationK: 668, areaKm2: 1439, density: 464, gdpShare: 3.5, unemployment: 11.2, urbanization: 80.5, povertyRate: 6.2, gdpPerCapitaK: 595, employmentRate: 49.5, youthUnemp: 23.5, informalEmploy: 38, hospitalBeds10k: 19.8, secondaryEnrol: 87, electrification: 99.2, netMigration: 1.2 },
  { wilaya: "Sétif", code: 19, region: "Est", populationK: 1382, areaKm2: 6504, density: 213, gdpShare: 3.4, unemployment: 11.8, urbanization: 60.5, povertyRate: 7.5, gdpPerCapitaK: 535, employmentRate: 48.8, youthUnemp: 24.2, informalEmploy: 39, hospitalBeds10k: 17.5, secondaryEnrol: 85, electrification: 98.0, netMigration: 1.0 },
  { wilaya: "Batna", code: 5, region: "Est", populationK: 1102, areaKm2: 12192, density: 90, gdpShare: 2.0, unemployment: 13.5, urbanization: 55.2, povertyRate: 10.5, gdpPerCapitaK: 400, employmentRate: 46.2, youthUnemp: 28.8, informalEmploy: 45, hospitalBeds10k: 15.2, secondaryEnrol: 78, electrification: 96.5, netMigration: -2.8 },
  { wilaya: "Skikda", code: 21, region: "Est", populationK: 968, areaKm2: 4043, density: 239, gdpShare: 2.8, unemployment: 12.2, urbanization: 65.8, povertyRate: 7.2, gdpPerCapitaK: 635, employmentRate: 48.5, youthUnemp: 25.5, informalEmploy: 40, hospitalBeds10k: 17.2, secondaryEnrol: 83, electrification: 97.8, netMigration: 0.5 },
  { wilaya: "Jijel", code: 18, region: "Est", populationK: 685, areaKm2: 2382, density: 288, gdpShare: 1.4, unemployment: 15.2, urbanization: 55.5, povertyRate: 9.5, gdpPerCapitaK: 445, employmentRate: 45.5, youthUnemp: 31.5, informalEmploy: 48, hospitalBeds10k: 15.8, secondaryEnrol: 78, electrification: 95.8, netMigration: -3.5 },
  { wilaya: "Mila", code: 43, region: "Est", populationK: 825, areaKm2: 3453, density: 239, gdpShare: 1.3, unemployment: 13.8, urbanization: 52.5, povertyRate: 9.0, gdpPerCapitaK: 350, employmentRate: 46.8, youthUnemp: 27.8, informalEmploy: 44, hospitalBeds10k: 14.5, secondaryEnrol: 76, electrification: 96.0, netMigration: -2.2 },
  { wilaya: "Guelma", code: 24, region: "Est", populationK: 535, areaKm2: 4159, density: 129, gdpShare: 1.2, unemployment: 14.2, urbanization: 58.2, povertyRate: 8.8, gdpPerCapitaK: 500, employmentRate: 47.0, youthUnemp: 27.2, informalEmploy: 43, hospitalBeds10k: 15.0, secondaryEnrol: 80, electrification: 97.0, netMigration: -1.8 },
  { wilaya: "Tébessa", code: 12, region: "Est", populationK: 748, areaKm2: 13855, density: 54, gdpShare: 1.5, unemployment: 16.5, urbanization: 62.5, povertyRate: 12.5, gdpPerCapitaK: 445, employmentRate: 44.5, youthUnemp: 33.2, informalEmploy: 48, hospitalBeds10k: 14.0, secondaryEnrol: 74, electrification: 94.5, netMigration: -3.0 },
  { wilaya: "Souk Ahras", code: 41, region: "Est", populationK: 512, areaKm2: 4362, density: 117, gdpShare: 0.9, unemployment: 15.8, urbanization: 50.5, povertyRate: 11.2, gdpPerCapitaK: 385, employmentRate: 45.0, youthUnemp: 30.8, informalEmploy: 46, hospitalBeds10k: 13.8, secondaryEnrol: 75, electrification: 95.0, netMigration: -4.5 },
  { wilaya: "El Tarf", code: 36, region: "Est", populationK: 468, areaKm2: 3332, density: 140, gdpShare: 0.8, unemployment: 16.8, urbanization: 48.2, povertyRate: 12.8, gdpPerCapitaK: 385, employmentRate: 44.0, youthUnemp: 32.5, informalEmploy: 50, hospitalBeds10k: 12.5, secondaryEnrol: 72, electrification: 94.0, netMigration: -5.2 },
  // ── Ouest ────────────────────────────────────────────────────────────
  { wilaya: "Oran", code: 31, region: "Ouest", populationK: 1998, areaKm2: 2121, density: 942, gdpShare: 7.5, unemployment: 8.8, urbanization: 85.2, povertyRate: 4.8, gdpPerCapitaK: 830, employmentRate: 52.0, youthUnemp: 19.8, informalEmploy: 33, hospitalBeds10k: 23.0, secondaryEnrol: 90, electrification: 99.5, netMigration: 5.5 },
  { wilaya: "Tlemcen", code: 13, region: "Ouest", populationK: 978, areaKm2: 9061, density: 108, gdpShare: 2.2, unemployment: 11.5, urbanization: 58.5, povertyRate: 8.5, gdpPerCapitaK: 500, employmentRate: 48.2, youthUnemp: 25.2, informalEmploy: 40, hospitalBeds10k: 16.5, secondaryEnrol: 82, electrification: 97.0, netMigration: -1.5 },
  { wilaya: "Sidi Bel Abbès", code: 22, region: "Ouest", populationK: 638, areaKm2: 9150, density: 70, gdpShare: 1.8, unemployment: 10.8, urbanization: 60.2, povertyRate: 7.5, gdpPerCapitaK: 620, employmentRate: 49.5, youthUnemp: 23.5, informalEmploy: 38, hospitalBeds10k: 18.0, secondaryEnrol: 84, electrification: 98.0, netMigration: 0.8 },
  { wilaya: "Mostaganem", code: 27, region: "Ouest", populationK: 812, areaKm2: 2269, density: 358, gdpShare: 2.0, unemployment: 10.5, urbanization: 68.5, povertyRate: 6.8, gdpPerCapitaK: 550, employmentRate: 49.8, youthUnemp: 23.0, informalEmploy: 37, hospitalBeds10k: 17.5, secondaryEnrol: 83, electrification: 98.2, netMigration: 1.5 },
  { wilaya: "Mascara", code: 29, region: "Ouest", populationK: 882, areaKm2: 5908, density: 149, gdpShare: 1.5, unemployment: 12.2, urbanization: 52.5, povertyRate: 9.2, gdpPerCapitaK: 390, employmentRate: 47.2, youthUnemp: 26.5, informalEmploy: 43, hospitalBeds10k: 15.0, secondaryEnrol: 79, electrification: 96.5, netMigration: -2.0 },
  { wilaya: "Aïn Témouchent", code: 46, region: "Ouest", populationK: 412, areaKm2: 2376, density: 173, gdpShare: 0.9, unemployment: 12.5, urbanization: 58.8, povertyRate: 8.0, gdpPerCapitaK: 485, employmentRate: 48.0, youthUnemp: 26.0, informalEmploy: 41, hospitalBeds10k: 14.8, secondaryEnrol: 80, electrification: 97.2, netMigration: -0.5 },
  { wilaya: "Relizane", code: 48, region: "Ouest", populationK: 782, areaKm2: 4861, density: 161, gdpShare: 1.2, unemployment: 13.5, urbanization: 48.5, povertyRate: 10.5, gdpPerCapitaK: 340, employmentRate: 46.0, youthUnemp: 28.5, informalEmploy: 46, hospitalBeds10k: 13.5, secondaryEnrol: 76, electrification: 95.5, netMigration: -3.2 },
  // ── Sud ──────────────────────────────────────────────────────────────
  { wilaya: "Ouargla", code: 30, region: "Sud", populationK: 698, areaKm2: 211980, density: 3.3, gdpShare: 5.5, unemployment: 6.2, urbanization: 78.5, povertyRate: 4.5, gdpPerCapitaK: 1850, employmentRate: 55.8, youthUnemp: 15.2, informalEmploy: 22, hospitalBeds10k: 20.0, secondaryEnrol: 82, electrification: 96.0, netMigration: 8.5 },
  { wilaya: "Hassi Messaoud", code: 33, region: "Sud", populationK: 252, areaKm2: 76045, density: 3.3, gdpShare: 4.2, unemployment: 5.5, urbanization: 85.0, povertyRate: 3.2, gdpPerCapitaK: 3850, employmentRate: 58.5, youthUnemp: 12.5, informalEmploy: 18, hospitalBeds10k: 22.0, secondaryEnrol: 78, electrification: 98.5, netMigration: 15.2 },
  { wilaya: "Ghardaïa", code: 47, region: "Sud", populationK: 425, areaKm2: 86105, density: 4.9, gdpShare: 2.8, unemployment: 7.5, urbanization: 72.0, povertyRate: 5.5, gdpPerCapitaK: 1550, employmentRate: 53.2, youthUnemp: 17.8, informalEmploy: 25, hospitalBeds10k: 18.5, secondaryEnrol: 80, electrification: 97.5, netMigration: 6.8 },
  { wilaya: "Biskra", code: 7, region: "Sud", populationK: 865, areaKm2: 21671, density: 40, gdpShare: 1.8, unemployment: 9.8, urbanization: 62.5, povertyRate: 7.5, gdpPerCapitaK: 465, employmentRate: 50.0, youthUnemp: 21.5, informalEmploy: 35, hospitalBeds10k: 16.0, secondaryEnrol: 78, electrification: 95.0, netMigration: 2.5 },
  { wilaya: "El Oued", code: 39, region: "Sud", populationK: 718, areaKm2: 54530, density: 13, gdpShare: 1.5, unemployment: 10.2, urbanization: 65.5, povertyRate: 6.8, gdpPerCapitaK: 480, employmentRate: 49.8, youthUnemp: 22.8, informalEmploy: 36, hospitalBeds10k: 14.5, secondaryEnrol: 75, electrification: 94.5, netMigration: 1.0 },
  { wilaya: "Illizi", code: 33, region: "Sud", populationK: 58, areaKm2: 285180, density: 0.2, gdpShare: 1.8, unemployment: 5.0, urbanization: 70.0, povertyRate: 3.0, gdpPerCapitaK: 7200, employmentRate: 60.2, youthUnemp: 10.5, informalEmploy: 15, hospitalBeds10k: 25.0, secondaryEnrol: 65, electrification: 90.0, netMigration: 12.0 },
  { wilaya: "Tamanrasset", code: 11, region: "Sud", populationK: 242, areaKm2: 556000, density: 0.4, gdpShare: 1.2, unemployment: 8.5, urbanization: 68.0, povertyRate: 8.0, gdpPerCapitaK: 1100, employmentRate: 51.5, youthUnemp: 18.5, informalEmploy: 28, hospitalBeds10k: 22.5, secondaryEnrol: 60, electrification: 88.0, netMigration: 5.0 },
  { wilaya: "Adrar", code: 1, region: "Sud", populationK: 452, areaKm2: 424948, density: 1.1, gdpShare: 1.0, unemployment: 7.8, urbanization: 55.0, povertyRate: 9.5, gdpPerCapitaK: 510, employmentRate: 51.0, youthUnemp: 19.5, informalEmploy: 35, hospitalBeds10k: 16.5, secondaryEnrol: 62, electrification: 85.0, netMigration: -1.0 },
  { wilaya: "Tindouf", code: 37, region: "Sud", populationK: 62, areaKm2: 159060, density: 0.4, gdpShare: 0.3, unemployment: 12.0, urbanization: 72.0, povertyRate: 10.0, gdpPerCapitaK: 580, employmentRate: 47.5, youthUnemp: 25.0, informalEmploy: 32, hospitalBeds10k: 20.0, secondaryEnrol: 58, electrification: 82.0, netMigration: -8.0 },
  { wilaya: "Djelfa", code: 3, region: "Sud", populationK: 1385, areaKm2: 32236, density: 43, gdpShare: 1.3, unemployment: 14.5, urbanization: 42.5, povertyRate: 13.5, gdpPerCapitaK: 215, employmentRate: 44.8, youthUnemp: 32.0, informalEmploy: 52, hospitalBeds10k: 12.0, secondaryEnrol: 68, electrification: 93.0, netMigration: -4.8 },
  { wilaya: "M'sila", code: 28, region: "Sud", populationK: 1058, areaKm2: 18438, density: 57, gdpShare: 1.1, unemployment: 14.8, urbanization: 35.5, povertyRate: 14.2, gdpPerCapitaK: 230, employmentRate: 44.2, youthUnemp: 32.5, informalEmploy: 52, hospitalBeds10k: 11.2, secondaryEnrol: 68, electrification: 92.5, netMigration: -5.5 },
  { wilaya: "Laghouat", code: 3, region: "Sud", populationK: 255, areaKm2: 25570, density: 10, gdpShare: 0.6, unemployment: 11.0, urbanization: 60.0, povertyRate: 10.5, gdpPerCapitaK: 510, employmentRate: 48.5, youthUnemp: 24.5, informalEmploy: 38, hospitalBeds10k: 15.5, secondaryEnrol: 70, electrification: 92.0, netMigration: -3.5 },
  { wilaya: "El Bayadh", code: 32, region: "Sud", populationK: 185, areaKm2: 70544, density: 2.6, gdpShare: 0.4, unemployment: 13.5, urbanization: 45.0, povertyRate: 14.8, gdpPerCapitaK: 480, employmentRate: 46.0, youthUnemp: 28.0, informalEmploy: 45, hospitalBeds10k: 14.0, secondaryEnrol: 62, electrification: 88.5, netMigration: -6.5 },
  { wilaya: "Naâma", code: 45, region: "Sud", populationK: 185, areaKm2: 29950, density: 6.2, gdpShare: 0.3, unemployment: 14.0, urbanization: 42.0, povertyRate: 15.2, gdpPerCapitaK: 380, employmentRate: 45.5, youthUnemp: 29.5, informalEmploy: 48, hospitalBeds10k: 13.0, secondaryEnrol: 60, electrification: 86.0, netMigration: -7.0 },
  { wilaya: "Béchar", code: 8, region: "Sud", populationK: 205, areaKm2: 161480, density: 1.3, gdpShare: 0.5, unemployment: 9.5, urbanization: 62.0, povertyRate: 8.5, gdpPerCapitaK: 550, employmentRate: 50.0, youthUnemp: 22.0, informalEmploy: 32, hospitalBeds10k: 18.0, secondaryEnrol: 65, electrification: 90.0, netMigration: -2.5 },
  { wilaya: "Touggourt", code: 33, region: "Sud", populationK: 215, areaKm2: 25865, density: 8.3, gdpShare: 0.8, unemployment: 7.2, urbanization: 70.5, povertyRate: 5.0, gdpPerCapitaK: 850, employmentRate: 52.5, youthUnemp: 18.0, informalEmploy: 25, hospitalBeds10k: 17.0, secondaryEnrol: 72, electrification: 95.0, netMigration: 3.0 },
  // ── Hauts Plateaux ───────────────────────────────────────────────────
  { wilaya: "Sétif (HP)", code: 19, region: "Hauts Plateaux", populationK: 1382, areaKm2: 6504, density: 213, gdpShare: 3.4, unemployment: 11.8, urbanization: 60.5, povertyRate: 7.5, gdpPerCapitaK: 535, employmentRate: 48.8, youthUnemp: 24.2, informalEmploy: 39, hospitalBeds10k: 17.5, secondaryEnrol: 85, electrification: 98.0, netMigration: 1.0 },
  { wilaya: "Tiaret", code: 14, region: "Hauts Plateaux", populationK: 892, areaKm2: 20267, density: 44, gdpShare: 1.2, unemployment: 14.0, urbanization: 48.5, povertyRate: 11.5, gdpPerCapitaK: 300, employmentRate: 45.8, youthUnemp: 29.5, informalEmploy: 46, hospitalBeds10k: 14.2, secondaryEnrol: 74, electrification: 95.0, netMigration: -3.8 },
  { wilaya: "Saïda", code: 20, region: "Hauts Plateaux", populationK: 405, areaKm2: 6632, density: 61, gdpShare: 0.7, unemployment: 13.8, urbanization: 55.0, povertyRate: 10.8, gdpPerCapitaK: 395, employmentRate: 46.5, youthUnemp: 28.0, informalEmploy: 44, hospitalBeds10k: 14.5, secondaryEnrol: 74, electrification: 95.5, netMigration: -3.0 },
  { wilaya: "Djelfa (HP)", code: 3, region: "Hauts Plateaux", populationK: 1385, areaKm2: 32236, density: 43, gdpShare: 1.3, unemployment: 14.5, urbanization: 42.5, povertyRate: 13.5, gdpPerCapitaK: 215, employmentRate: 44.8, youthUnemp: 32.0, informalEmploy: 52, hospitalBeds10k: 12.0, secondaryEnrol: 68, electrification: 93.0, netMigration: -4.8 },
  { wilaya: "Médéa (HP)", code: 26, region: "Hauts Plateaux", populationK: 878, areaKm2: 8866, density: 99, gdpShare: 1.4, unemployment: 11.5, urbanization: 48.5, povertyRate: 8.2, gdpPerCapitaK: 350, employmentRate: 47.8, youthUnemp: 25.8, informalEmploy: 42, hospitalBeds10k: 14.2, secondaryEnrol: 78, electrification: 96.8, netMigration: -2.5 },
  // ── Grand Ouest ─────────────────────────────────────────────────────
  { wilaya: "Tlemcen (GO)", code: 13, region: "Grand Ouest", populationK: 978, areaKm2: 9061, density: 108, gdpShare: 2.2, unemployment: 11.5, urbanization: 58.5, povertyRate: 8.5, gdpPerCapitaK: 500, employmentRate: 48.2, youthUnemp: 25.2, informalEmploy: 40, hospitalBeds10k: 16.5, secondaryEnrol: 82, electrification: 97.0, netMigration: -1.5 },
  { wilaya: "Sidi Bel Abbès (GO)", code: 22, region: "Grand Ouest", populationK: 638, areaKm2: 9150, density: 70, gdpShare: 1.8, unemployment: 10.8, urbanization: 60.2, povertyRate: 7.5, gdpPerCapitaK: 620, employmentRate: 49.5, youthUnemp: 23.5, informalEmploy: 38, hospitalBeds10k: 18.0, secondaryEnrol: 84, electrification: 98.0, netMigration: 0.8 },
  // ── remaining key wilayas ───────────────────────────────────────────
  { wilaya: "Chlef", code: 2, region: "Centre", populationK: 1128, areaKm2: 4767, density: 237, gdpShare: 1.8, unemployment: 11.0, urbanization: 58.5, povertyRate: 8.5, gdpPerCapitaK: 370, employmentRate: 48.0, youthUnemp: 25.5, informalEmploy: 42, hospitalBeds10k: 15.5, secondaryEnrol: 80, electrification: 97.5, netMigration: -1.5 },
  { wilaya: "Tizi Ouzou (C)", code: 15, region: "Centre", populationK: 1128, areaKm2: 2957, density: 381, gdpShare: 3.0, unemployment: 13.2, urbanization: 62.5, povertyRate: 6.2, gdpPerCapitaK: 590, employmentRate: 47.2, youthUnemp: 28.5, informalEmploy: 40, hospitalBeds10k: 17.8, secondaryEnrol: 86, electrification: 98.2, netMigration: -1.2 },
  { wilaya: "Bordj Bou Arréridj (C)", code: 34, region: "Centre", populationK: 698, areaKm2: 4115, density: 170, gdpShare: 1.5, unemployment: 12.5, urbanization: 52.8, povertyRate: 9.8, gdpPerCapitaK: 470, employmentRate: 47.5, youthUnemp: 26.8, informalEmploy: 42, hospitalBeds10k: 14.8, secondaryEnrol: 80, electrification: 96.2, netMigration: -1.5 },
  { wilaya: "Boumerdès (C)", code: 35, region: "Centre", populationK: 845, areaKm2: 1459, density: 579, gdpShare: 2.8, unemployment: 9.8, urbanization: 68.2, povertyRate: 5.5, gdpPerCapitaK: 720, employmentRate: 50.5, youthUnemp: 21.0, informalEmploy: 36, hospitalBeds10k: 18.5, secondaryEnrol: 87, electrification: 99.2, netMigration: 4.5 },
  { wilaya: "Bouira (C)", code: 10, region: "Centre", populationK: 789, areaKm2: 4454, density: 177, gdpShare: 1.2, unemployment: 12.8, urbanization: 45.2, povertyRate: 9.5, gdpPerCapitaK: 330, employmentRate: 46.5, youthUnemp: 27.5, informalEmploy: 44, hospitalBeds10k: 13.5, secondaryEnrol: 75, electrification: 95.5, netMigration: -3.8 },
  { wilaya: "Tipaza (C)", code: 42, region: "Centre", populationK: 872, areaKm2: 2165, density: 403, gdpShare: 2.1, unemployment: 10.2, urbanization: 65.4, povertyRate: 6.8, gdpPerCapitaK: 525, employmentRate: 49.6, youthUnemp: 22.5, informalEmploy: 38, hospitalBeds10k: 16.8, secondaryEnrol: 85, electrification: 98.5, netMigration: 8.2 },
];

// ─── 16b. REGIONAL AGGREGATES BY MACRO-REGION ─────────────────────────
// Source: ONS Comptes Nationaux Régionaux 2023, ONS RGPH 2022
export const regionAggregates = [
  { region: "Centre", populationK: 15800, gdpShare: 38.5, unemployment: 10.2, urbanization: 68.5, povertyRate: 6.8, gdpPerCapitaK: 655, youthUnemp: 24.5, hospitalBeds10k: 18.8, secondaryEnrol: 85, electrification: 98.2, netMigration: 2.8, areaKm2: 38680, density: 408, informalEmploy: 37 },
  { region: "Est", populationK: 10510, gdpShare: 20.8, unemployment: 13.5, urbanization: 58.5, povertyRate: 10.2, gdpPerCapitaK: 445, youthUnemp: 27.8, hospitalBeds10k: 16.2, secondaryEnrol: 80, electrification: 96.8, netMigration: -2.0, areaKm2: 65420, density: 161, informalEmploy: 42 },
  { region: "Ouest", populationK: 6500, gdpShare: 16.8, unemployment: 11.5, urbanization: 61.5, povertyRate: 8.2, gdpPerCapitaK: 570, youthUnemp: 25.8, hospitalBeds10k: 16.5, secondaryEnrol: 82, electrification: 97.5, netMigration: -0.2, areaKm2: 31843, density: 204, informalEmploy: 39 },
  { region: "Sud", populationK: 7265, gdpShare: 17.2, unemployment: 10.5, urbanization: 60.2, povertyRate: 8.8, gdpPerCapitaK: 530, youthUnemp: 22.5, hospitalBeds10k: 17.0, secondaryEnrol: 70, electrification: 91.5, netMigration: 0.5, areaKm2: 2172080, density: 3.3, informalEmploy: 35 },
  { region: "Hauts Plateaux", populationK: 4945, gdpShare: 8.0, unemployment: 13.5, urbanization: 50.8, povertyRate: 11.5, gdpPerCapitaK: 355, youthUnemp: 28.8, hospitalBeds10k: 14.4, secondaryEnrol: 76, electrification: 94.8, netMigration: -3.2, areaKm2: 68935, density: 72, informalEmploy: 46 },
];

// ─── 16c. REGIONAL TIME SERIES (2015–2024) ────────────────────────────
// Source: ONS Enquêtes Emploi annuelles, ONS Comptes Régionaux
export const regionalTimeSeries = [
  { year: 2015, centreGdpPct: 36.8, estGdpPct: 22.5, ouestGdpPct: 18.2, sudGdpPct: 14.5, hpGdpPct: 8.0, centreUnemp: 11.2, estUnemp: 15.8, ouestUnemp: 13.5, sudUnemp: 9.5, hpUnemp: 16.2 },
  { year: 2016, centreGdpPct: 37.0, estGdpPct: 22.0, ouestGdpPct: 18.0, sudGdpPct: 15.0, hpGdpPct: 8.0, centreUnemp: 11.5, estUnemp: 16.2, ouestUnemp: 13.8, sudUnemp: 9.2, hpUnemp: 16.5 },
  { year: 2017, centreGdpPct: 37.2, estGdpPct: 21.8, ouestGdpPct: 17.8, sudGdpPct: 15.2, hpGdpPct: 8.0, centreUnemp: 11.0, estUnemp: 15.5, ouestUnemp: 13.2, sudUnemp: 9.0, hpUnemp: 16.0 },
  { year: 2018, centreGdpPct: 37.5, estGdpPct: 21.5, ouestGdpPct: 17.5, sudGdpPct: 15.5, hpGdpPct: 8.0, centreUnemp: 10.8, estUnemp: 15.2, ouestUnemp: 13.0, sudUnemp: 8.8, hpUnemp: 15.5 },
  { year: 2019, centreGdpPct: 37.8, estGdpPct: 21.2, ouestGdpPct: 17.2, sudGdpPct: 15.8, hpGdpPct: 8.0, centreUnemp: 10.5, estUnemp: 14.8, ouestUnemp: 12.5, sudUnemp: 8.5, hpUnemp: 15.0 },
  { year: 2020, centreGdpPct: 38.5, estGdpPct: 20.8, ouestGdpPct: 17.0, sudGdpPct: 15.5, hpGdpPct: 8.2, centreUnemp: 12.5, estUnemp: 16.5, ouestUnemp: 14.8, sudUnemp: 10.2, hpUnemp: 17.5 },
  { year: 2021, centreGdpPct: 38.2, estGdpPct: 21.0, ouestGdpPct: 16.8, sudGdpPct: 15.8, hpGdpPct: 8.2, centreUnemp: 12.0, estUnemp: 15.8, ouestUnemp: 13.5, sudUnemp: 9.5, hpUnemp: 16.2 },
  { year: 2022, centreGdpPct: 38.0, estGdpPct: 21.2, ouestGdpPct: 16.5, sudGdpPct: 16.2, hpGdpPct: 8.1, centreUnemp: 11.2, estUnemp: 14.8, ouestUnemp: 12.8, sudUnemp: 9.2, hpUnemp: 15.5 },
  { year: 2023, centreGdpPct: 38.5, estGdpPct: 20.8, ouestGdpPct: 16.8, sudGdpPct: 17.2, hpGdpPct: 8.0, centreUnemp: 10.2, estUnemp: 13.5, ouestUnemp: 11.5, sudUnemp: 10.5, hpUnemp: 13.5 },
  { year: 2024, centreGdpPct: 39.0, estGdpPct: 20.5, ouestGdpPct: 16.5, sudGdpPct: 17.0, hpGdpPct: 8.0, centreUnemp: 9.8, estUnemp: 13.0, ouestUnemp: 11.0, sudUnemp: 9.8, hpUnemp: 13.0 },
];

// ─── 16d. REGIONAL SECTORAL COMPOSITION ────────────────────────────────
// GDP breakdown by sector for each macro-region (2023), source: ONS
export const regionalSectorComposition = [
  { region: "Centre", agriculture: 3.5, industry: 22.0, construction: 10.5, services: 48.0, hydrocarbons: 16.0 },
  { region: "Est", agriculture: 12.5, industry: 18.0, construction: 8.5, services: 42.0, hydrocarbons: 19.0 },
  { region: "Ouest", agriculture: 14.0, industry: 15.0, construction: 9.0, services: 44.0, hydrocarbons: 18.0 },
  { region: "Sud", agriculture: 2.5, industry: 12.0, construction: 8.0, services: 30.0, hydrocarbons: 47.5 },
  { region: "Hauts Plateaux", agriculture: 22.0, industry: 12.0, construction: 7.5, services: 38.5, hydrocarbons: 20.0 },
];

// ─── 17. CONSTRUCTION COST INDEX ────────────────────────────────────────────
export const constructionIndex = [
  { year: 2015, index: 115.0 },
  { year: 2016, index: 118.5 },
  { year: 2017, index: 122.0 },
  { year: 2018, index: 126.5 },
  { year: 2019, index: 130.0 },
  { year: 2020, index: 132.5 },
  { year: 2021, index: 138.0 },
  { year: 2022, index: 148.5 },
  { year: 2023, index: 155.0 },
  { year: 2024, index: 160.5 },
];

// ═══════════════════════════════════════════════════════════════════════════════
// SECTOR-SPECIFIC DATASETS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 18. HYDROCARBONS SECTOR ─────────────────────────────────────────────
export const hydrocarbons = [
  { year: 2000, oilProdMbpd: 1.42, gasProdBcm: 82, oilPrice: 28.5, hydroRevBn: 16.2, exportsBn: 17.5, gdpContribPct: 32.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 18.5, refiningKbpd: 450, domesticConsumpPct: 28, rpRatioOil: 23.5, rpRatioGas: 53.2, newWells: 125, explorationInvestBn: 1.8 },
  { year: 2002, oilProdMbpd: 1.35, gasProdBcm: 85, oilPrice: 25.0, hydroRevBn: 15.8, exportsBn: 16.8, gdpContribPct: 33.5, reservesOilBn: 12.0, reservesGasTcm: 4.5, lngExportsBcm: 19.2, refiningKbpd: 460, domesticConsumpPct: 29, rpRatioOil: 24.3, rpRatioGas: 51.8, newWells: 110, explorationInvestBn: 1.5 },
  { year: 2004, oilProdMbpd: 1.50, gasProdBcm: 88, oilPrice: 38.3, hydroRevBn: 25.5, exportsBn: 29.5, gdpContribPct: 35.0, reservesOilBn: 11.8, reservesGasTcm: 4.5, lngExportsBcm: 20.5, refiningKbpd: 470, domesticConsumpPct: 27, rpRatioOil: 21.5, rpRatioGas: 50.0, newWells: 140, explorationInvestBn: 2.5 },
  { year: 2006, oilProdMbpd: 1.55, gasProdBcm: 90, oilPrice: 66.0, hydroRevBn: 42.0, exportsBn: 50.0, gdpContribPct: 36.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 21.8, refiningKbpd: 480, domesticConsumpPct: 26, rpRatioOil: 21.5, rpRatioGas: 49.0, newWells: 160, explorationInvestBn: 3.5 },
  { year: 2008, oilProdMbpd: 1.38, gasProdBcm: 92, oilPrice: 97.0, hydroRevBn: 62.0, exportsBn: 72.0, gdpContribPct: 37.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 22.5, refiningKbpd: 500, domesticConsumpPct: 25, rpRatioOil: 24.2, rpRatioGas: 48.0, newWells: 155, explorationInvestBn: 4.2 },
  { year: 2010, oilProdMbpd: 1.28, gasProdBcm: 93, oilPrice: 79.5, hydroRevBn: 43.0, exportsBn: 49.0, gdpContribPct: 33.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 21.0, refiningKbpd: 520, domesticConsumpPct: 28, rpRatioOil: 26.1, rpRatioGas: 47.0, newWells: 130, explorationInvestBn: 3.0 },
  { year: 2012, oilProdMbpd: 1.22, gasProdBcm: 95, oilPrice: 109.0, hydroRevBn: 55.0, exportsBn: 63.0, gdpContribPct: 31.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 20.0, refiningKbpd: 530, domesticConsumpPct: 30, rpRatioOil: 27.4, rpRatioGas: 46.0, newWells: 115, explorationInvestBn: 2.8 },
  { year: 2014, oilProdMbpd: 1.18, gasProdBcm: 96, oilPrice: 93.0, hydroRevBn: 48.0, exportsBn: 54.0, gdpContribPct: 28.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 19.5, refiningKbpd: 540, domesticConsumpPct: 32, rpRatioOil: 28.3, rpRatioGas: 45.0, newWells: 100, explorationInvestBn: 2.2 },
  { year: 2015, oilProdMbpd: 1.12, gasProdBcm: 95, oilPrice: 49.0, hydroRevBn: 22.0, exportsBn: 26.0, gdpContribPct: 24.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 18.0, refiningKbpd: 540, domesticConsumpPct: 35, rpRatioOil: 29.8, rpRatioGas: 45.5, newWells: 85, explorationInvestBn: 1.5 },
  { year: 2016, oilProdMbpd: 1.08, gasProdBcm: 94, oilPrice: 43.0, hydroRevBn: 16.5, exportsBn: 19.5, gdpContribPct: 22.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 17.5, refiningKbpd: 530, domesticConsumpPct: 37, rpRatioOil: 30.9, rpRatioGas: 46.2, newWells: 75, explorationInvestBn: 1.2 },
  { year: 2017, oilProdMbpd: 1.05, gasProdBcm: 95, oilPrice: 52.0, hydroRevBn: 21.0, exportsBn: 26.0, gdpContribPct: 22.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 18.0, refiningKbpd: 535, domesticConsumpPct: 36, rpRatioOil: 31.8, rpRatioGas: 45.5, newWells: 80, explorationInvestBn: 1.4 },
  { year: 2018, oilProdMbpd: 1.02, gasProdBcm: 96, oilPrice: 69.0, hydroRevBn: 28.0, exportsBn: 33.0, gdpContribPct: 23.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 19.0, refiningKbpd: 540, domesticConsumpPct: 35, rpRatioOil: 32.7, rpRatioGas: 44.8, newWells: 90, explorationInvestBn: 1.8 },
  { year: 2019, oilProdMbpd: 1.00, gasProdBcm: 97, oilPrice: 63.0, hydroRevBn: 25.0, exportsBn: 30.0, gdpContribPct: 22.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 19.5, refiningKbpd: 540, domesticConsumpPct: 36, rpRatioOil: 33.4, rpRatioGas: 44.2, newWells: 88, explorationInvestBn: 1.7 },
  { year: 2020, oilProdMbpd: 0.92, gasProdBcm: 92, oilPrice: 42.0, hydroRevBn: 17.0, exportsBn: 20.5, gdpContribPct: 19.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 16.0, refiningKbpd: 520, domesticConsumpPct: 40, rpRatioOil: 36.3, rpRatioGas: 46.6, newWells: 60, explorationInvestBn: 0.9 },
  { year: 2021, oilProdMbpd: 0.98, gasProdBcm: 95, oilPrice: 68.0, hydroRevBn: 28.5, exportsBn: 34.0, gdpContribPct: 21.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 18.5, refiningKbpd: 530, domesticConsumpPct: 38, rpRatioOil: 34.1, rpRatioGas: 45.2, newWells: 72, explorationInvestBn: 1.2 },
  { year: 2022, oilProdMbpd: 1.02, gasProdBcm: 100, oilPrice: 95.0, hydroRevBn: 43.0, exportsBn: 51.0, gdpContribPct: 24.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 22.0, refiningKbpd: 540, domesticConsumpPct: 35, rpRatioOil: 32.7, rpRatioGas: 43.0, newWells: 95, explorationInvestBn: 2.0 },
  { year: 2023, oilProdMbpd: 1.00, gasProdBcm: 102, oilPrice: 78.0, hydroRevBn: 30.0, exportsBn: 36.0, gdpContribPct: 23.0, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 20.5, refiningKbpd: 545, domesticConsumpPct: 36, rpRatioOil: 33.4, rpRatioGas: 42.5, newWells: 90, explorationInvestBn: 1.8 },
  { year: 2024, oilProdMbpd: 0.98, gasProdBcm: 105, oilPrice: 76.0, hydroRevBn: 33.0, exportsBn: 38.8, gdpContribPct: 23.5, reservesOilBn: 12.2, reservesGasTcm: 4.5, lngExportsBcm: 21.5, refiningKbpd: 550, domesticConsumpPct: 35, rpRatioOil: 34.1, rpRatioGas: 41.8, newWells: 88, explorationInvestBn: 1.6 },
];

// ─── 19. AGRICULTURE SECTOR ─────────────────────────────────────────────
export const agricultureData = [
  { year: 2010, cerealProdMt: 4.5, vegProdMt: 8.2, fruitProdMt: 4.0, oliveProdMt: 0.35, dateProdMt: 0.82, milkProdMl: 2.2, meatProdMt: 1.35, agriExportsBn: 0.3, selfSufficCereals: 32, irrigatedLandMha: 1.2, totalLandMha: 8.5, agriEmployPct: 14.5, agriGdpPct: 8.2, cerealImportsMt: 7.5, poultryProdMt: 0.85, tractorFleetK: 95, fertilizerKt: 680 },
  { year: 2011, cerealProdMt: 4.2, vegProdMt: 8.5, fruitProdMt: 4.2, oliveProdMt: 0.40, dateProdMt: 0.85, milkProdMl: 2.3, meatProdMt: 1.38, agriExportsBn: 0.35, selfSufficCereals: 30, irrigatedLandMha: 1.25, totalLandMha: 8.5, agriEmployPct: 14.2, agriGdpPct: 8.5, cerealImportsMt: 8.0, poultryProdMt: 0.90, tractorFleetK: 100, fertilizerKt: 710 },
  { year: 2012, cerealProdMt: 5.1, vegProdMt: 8.8, fruitProdMt: 4.3, oliveProdMt: 0.45, dateProdMt: 0.88, milkProdMl: 2.4, meatProdMt: 1.42, agriExportsBn: 0.38, selfSufficCereals: 35, irrigatedLandMha: 1.3, totalLandMha: 8.6, agriEmployPct: 14.0, agriGdpPct: 9.0, cerealImportsMt: 7.0, poultryProdMt: 0.95, tractorFleetK: 105, fertilizerKt: 750 },
  { year: 2013, cerealProdMt: 4.8, vegProdMt: 9.0, fruitProdMt: 4.5, oliveProdMt: 0.50, dateProdMt: 0.90, milkProdMl: 2.5, meatProdMt: 1.45, agriExportsBn: 0.40, selfSufficCereals: 33, irrigatedLandMha: 1.35, totalLandMha: 8.6, agriEmployPct: 13.8, agriGdpPct: 9.2, cerealImportsMt: 7.2, poultryProdMt: 1.00, tractorFleetK: 110, fertilizerKt: 780 },
  { year: 2014, cerealProdMt: 3.9, vegProdMt: 9.2, fruitProdMt: 4.6, oliveProdMt: 0.55, dateProdMt: 0.92, milkProdMl: 2.6, meatProdMt: 1.48, agriExportsBn: 0.42, selfSufficCereals: 28, irrigatedLandMha: 1.4, totalLandMha: 8.7, agriEmployPct: 13.5, agriGdpPct: 9.5, cerealImportsMt: 8.5, poultryProdMt: 1.05, tractorFleetK: 115, fertilizerKt: 800 },
  { year: 2015, cerealProdMt: 4.1, vegProdMt: 9.5, fruitProdMt: 4.8, oliveProdMt: 0.60, dateProdMt: 0.95, milkProdMl: 2.7, meatProdMt: 1.50, agriExportsBn: 0.45, selfSufficCereals: 29, irrigatedLandMha: 1.45, totalLandMha: 8.7, agriEmployPct: 13.2, agriGdpPct: 9.3, cerealImportsMt: 8.2, poultryProdMt: 1.10, tractorFleetK: 118, fertilizerKt: 820 },
  { year: 2016, cerealProdMt: 3.5, vegProdMt: 9.8, fruitProdMt: 5.0, oliveProdMt: 0.65, dateProdMt: 0.98, milkProdMl: 2.8, meatProdMt: 1.52, agriExportsBn: 0.42, selfSufficCereals: 25, irrigatedLandMha: 1.5, totalLandMha: 8.8, agriEmployPct: 13.0, agriGdpPct: 9.8, cerealImportsMt: 9.5, poultryProdMt: 1.15, tractorFleetK: 120, fertilizerKt: 850 },
  { year: 2017, cerealProdMt: 3.8, vegProdMt: 10.0, fruitProdMt: 5.2, oliveProdMt: 0.70, dateProdMt: 1.00, milkProdMl: 2.9, meatProdMt: 1.55, agriExportsBn: 0.48, selfSufficCereals: 27, irrigatedLandMha: 1.55, totalLandMha: 8.8, agriEmployPct: 12.8, agriGdpPct: 10.0, cerealImportsMt: 9.0, poultryProdMt: 1.22, tractorFleetK: 125, fertilizerKt: 880 },
  { year: 2018, cerealProdMt: 5.5, vegProdMt: 10.2, fruitProdMt: 5.4, oliveProdMt: 0.80, dateProdMt: 1.02, milkProdMl: 3.0, meatProdMt: 1.58, agriExportsBn: 0.55, selfSufficCereals: 37, irrigatedLandMha: 1.6, totalLandMha: 8.9, agriEmployPct: 12.5, agriGdpPct: 10.2, cerealImportsMt: 7.5, poultryProdMt: 1.30, tractorFleetK: 130, fertilizerKt: 920 },
  { year: 2019, cerealProdMt: 6.1, vegProdMt: 10.5, fruitProdMt: 5.5, oliveProdMt: 0.90, dateProdMt: 1.05, milkProdMl: 3.1, meatProdMt: 1.60, agriExportsBn: 0.60, selfSufficCereals: 42, irrigatedLandMha: 1.65, totalLandMha: 8.9, agriEmployPct: 12.2, agriGdpPct: 10.5, cerealImportsMt: 6.5, poultryProdMt: 1.38, tractorFleetK: 135, fertilizerKt: 950 },
  { year: 2020, cerealProdMt: 5.2, vegProdMt: 10.8, fruitProdMt: 5.7, oliveProdMt: 0.85, dateProdMt: 1.08, milkProdMl: 3.2, meatProdMt: 1.62, agriExportsBn: 0.55, selfSufficCereals: 35, irrigatedLandMha: 1.7, totalLandMha: 9.0, agriEmployPct: 12.5, agriGdpPct: 10.8, cerealImportsMt: 8.0, poultryProdMt: 1.45, tractorFleetK: 140, fertilizerKt: 980 },
  { year: 2021, cerealProdMt: 4.3, vegProdMt: 11.0, fruitProdMt: 5.8, oliveProdMt: 0.95, dateProdMt: 1.10, milkProdMl: 3.3, meatProdMt: 1.65, agriExportsBn: 0.62, selfSufficCereals: 30, irrigatedLandMha: 1.75, totalLandMha: 9.0, agriEmployPct: 12.3, agriGdpPct: 10.5, cerealImportsMt: 8.8, poultryProdMt: 1.52, tractorFleetK: 145, fertilizerKt: 1020 },
  { year: 2022, cerealProdMt: 4.6, vegProdMt: 11.2, fruitProdMt: 6.0, oliveProdMt: 1.00, dateProdMt: 1.12, milkProdMl: 3.5, meatProdMt: 1.68, agriExportsBn: 0.68, selfSufficCereals: 32, irrigatedLandMha: 1.8, totalLandMha: 9.0, agriEmployPct: 12.0, agriGdpPct: 10.2, cerealImportsMt: 8.5, poultryProdMt: 1.60, tractorFleetK: 150, fertilizerKt: 1060 },
  { year: 2023, cerealProdMt: 5.8, vegProdMt: 11.5, fruitProdMt: 6.2, oliveProdMt: 1.10, dateProdMt: 1.15, milkProdMl: 3.6, meatProdMt: 1.70, agriExportsBn: 0.75, selfSufficCereals: 38, irrigatedLandMha: 1.85, totalLandMha: 9.1, agriEmployPct: 11.8, agriGdpPct: 10.0, cerealImportsMt: 7.8, poultryProdMt: 1.68, tractorFleetK: 155, fertilizerKt: 1100 },
  { year: 2024, cerealProdMt: 5.0, vegProdMt: 11.8, fruitProdMt: 6.4, oliveProdMt: 1.20, dateProdMt: 1.18, milkProdMl: 3.8, meatProdMt: 1.72, agriExportsBn: 0.82, selfSufficCereals: 33, irrigatedLandMha: 1.9, totalLandMha: 9.1, agriEmployPct: 11.5, agriGdpPct: 9.8, cerealImportsMt: 8.2, poultryProdMt: 1.75, tractorFleetK: 160, fertilizerKt: 1150 },
];

// ─── 20. MANUFACTURING SUB-SECTORS ──────────────────────────────────────
export const manufacturingData = [
  { year: 2010, foodIndustry: 105, textiles: 98, chemicals: 102, metallurgy: 100, electrics: 95, buildingMat: 108, pharma: 90, paper: 97, manufEmployK: 520, manufExportsBn: 2.8, capacityUtilPct: 68, gdpContribPct: 5.2, numEnterprises: 10200, privateSharePct: 42, fdiBn: 1.2, productivityIndex: 96 },
  { year: 2012, foodIndustry: 108, textiles: 96, chemicals: 105, metallurgy: 102, electrics: 97, buildingMat: 112, pharma: 95, paper: 98, manufEmployK: 535, manufExportsBn: 3.1, capacityUtilPct: 70, gdpContribPct: 5.5, numEnterprises: 10500, privateSharePct: 44, fdiBn: 1.5, productivityIndex: 99 },
  { year: 2014, foodIndustry: 110, textiles: 94, chemicals: 108, metallurgy: 104, electrics: 100, buildingMat: 110, pharma: 100, paper: 99, manufEmployK: 545, manufExportsBn: 3.3, capacityUtilPct: 72, gdpContribPct: 5.8, numEnterprises: 10800, privateSharePct: 46, fdiBn: 1.8, productivityIndex: 102 },
  { year: 2016, foodIndustry: 106, textiles: 90, chemicals: 104, metallurgy: 100, electrics: 95, buildingMat: 105, pharma: 105, paper: 97, manufEmployK: 530, manufExportsBn: 2.9, capacityUtilPct: 65, gdpContribPct: 5.5, numEnterprises: 11100, privateSharePct: 48, fdiBn: 1.2, productivityIndex: 98 },
  { year: 2018, foodIndustry: 108, textiles: 88, chemicals: 106, metallurgy: 102, electrics: 96, buildingMat: 108, pharma: 110, paper: 98, manufEmployK: 540, manufExportsBn: 3.2, capacityUtilPct: 67, gdpContribPct: 5.6, numEnterprises: 11500, privateSharePct: 50, fdiBn: 1.5, productivityIndex: 101 },
  { year: 2020, foodIndustry: 100, textiles: 75, chemicals: 95, metallurgy: 90, electrics: 82, buildingMat: 95, pharma: 108, paper: 90, manufEmployK: 485, manufExportsBn: 2.4, capacityUtilPct: 52, gdpContribPct: 4.8, numEnterprises: 11800, privateSharePct: 52, fdiBn: 0.8, productivityIndex: 92 },
  { year: 2021, foodIndustry: 103, textiles: 78, chemicals: 98, metallurgy: 93, electrics: 85, buildingMat: 100, pharma: 112, paper: 92, manufEmployK: 500, manufExportsBn: 2.7, capacityUtilPct: 58, gdpContribPct: 5.0, numEnterprises: 12000, privateSharePct: 53, fdiBn: 1.0, productivityIndex: 95 },
  { year: 2022, foodIndustry: 107, textiles: 82, chemicals: 104, metallurgy: 98, electrics: 90, buildingMat: 108, pharma: 118, paper: 95, manufEmployK: 520, manufExportsBn: 3.5, capacityUtilPct: 65, gdpContribPct: 5.4, numEnterprises: 12300, privateSharePct: 55, fdiBn: 1.6, productivityIndex: 100 },
  { year: 2023, foodIndustry: 108, textiles: 84, chemicals: 105, metallurgy: 100, electrics: 92, buildingMat: 110, pharma: 122, paper: 96, manufEmployK: 535, manufExportsBn: 3.8, capacityUtilPct: 68, gdpContribPct: 5.8, numEnterprises: 12600, privateSharePct: 56, fdiBn: 1.8, productivityIndex: 103 },
  { year: 2024, foodIndustry: 110, textiles: 86, chemicals: 107, metallurgy: 102, electrics: 94, buildingMat: 112, pharma: 128, paper: 98, manufEmployK: 550, manufExportsBn: 4.2, capacityUtilPct: 70, gdpContribPct: 6.2, numEnterprises: 13000, privateSharePct: 58, fdiBn: 2.0, productivityIndex: 106 },
];

// ─── 21. BTP / CONSTRUCTION SECTOR ──────────────────────────────────────
export const btpData = [
  { year: 2010, housingUnitsK: 280, buildingPermitsK: 35, cementMt: 18.5, steelMt: 2.8, gdpContribPct: 7.1, costIndex: 108, publicInvestBn: 12.5, employmentK: 850 },
  { year: 2012, housingUnitsK: 320, buildingPermitsK: 40, cementMt: 20.0, steelMt: 3.2, gdpContribPct: 8.5, costIndex: 112, publicInvestBn: 15.0, employmentK: 920 },
  { year: 2014, housingUnitsK: 350, buildingPermitsK: 42, cementMt: 21.5, steelMt: 3.5, gdpContribPct: 10.1, costIndex: 118, publicInvestBn: 18.0, employmentK: 1050 },
  { year: 2015, housingUnitsK: 360, buildingPermitsK: 38, cementMt: 20.0, steelMt: 3.2, gdpContribPct: 10.5, costIndex: 115, publicInvestBn: 16.0, employmentK: 1080 },
  { year: 2016, housingUnitsK: 340, buildingPermitsK: 35, cementMt: 19.5, steelMt: 3.0, gdpContribPct: 10.8, costIndex: 118.5, publicInvestBn: 14.5, employmentK: 1100 },
  { year: 2017, housingUnitsK: 330, buildingPermitsK: 33, cementMt: 20.0, steelMt: 3.1, gdpContribPct: 10.2, costIndex: 122, publicInvestBn: 14.0, employmentK: 1080 },
  { year: 2018, housingUnitsK: 320, buildingPermitsK: 36, cementMt: 21.0, steelMt: 3.3, gdpContribPct: 10.0, costIndex: 126.5, publicInvestBn: 15.5, employmentK: 1060 },
  { year: 2019, housingUnitsK: 310, buildingPermitsK: 34, cementMt: 20.5, steelMt: 3.2, gdpContribPct: 9.8, costIndex: 130, publicInvestBn: 15.0, employmentK: 1040 },
  { year: 2020, housingUnitsK: 250, buildingPermitsK: 28, cementMt: 17.0, steelMt: 2.5, gdpContribPct: 9.2, costIndex: 132.5, publicInvestBn: 12.0, employmentK: 950 },
  { year: 2021, housingUnitsK: 290, buildingPermitsK: 32, cementMt: 19.5, steelMt: 3.0, gdpContribPct: 9.5, costIndex: 138, publicInvestBn: 16.0, employmentK: 1000 },
  { year: 2022, housingUnitsK: 320, buildingPermitsK: 38, cementMt: 22.0, steelMt: 3.5, gdpContribPct: 9.8, costIndex: 148.5, publicInvestBn: 20.0, employmentK: 1080 },
  { year: 2023, housingUnitsK: 340, buildingPermitsK: 40, cementMt: 23.5, steelMt: 3.7, gdpContribPct: 10.0, costIndex: 155, publicInvestBn: 22.0, employmentK: 1120 },
  { year: 2024, housingUnitsK: 350, buildingPermitsK: 42, cementMt: 24.5, steelMt: 3.9, gdpContribPct: 10.2, costIndex: 160.5, publicInvestBn: 24.0, employmentK: 1150 },
];

// ─── 22. SERVICES SECTOR ────────────────────────────────────────────────
export const servicesData = [
  { year: 2010, gdpContribPct: 48.2, trade: 12.5, transport: 6.8, telecom: 4.2, finance: 5.0, tourism: 2.8, govtServices: 17.0 },
  { year: 2012, gdpContribPct: 47.0, trade: 12.2, transport: 7.0, telecom: 4.5, finance: 5.2, tourism: 3.0, govtServices: 15.1 },
  { year: 2014, gdpContribPct: 47.4, trade: 12.0, transport: 7.2, telecom: 4.8, finance: 5.5, tourism: 3.2, govtServices: 14.7 },
  { year: 2016, gdpContribPct: 49.0, trade: 12.5, transport: 7.5, telecom: 5.2, finance: 5.8, tourism: 2.5, govtServices: 15.5 },
  { year: 2018, gdpContribPct: 50.7, trade: 12.8, transport: 7.8, telecom: 5.5, finance: 6.0, tourism: 2.8, govtServices: 15.8 },
  { year: 2020, gdpContribPct: 53.8, trade: 11.5, transport: 6.5, telecom: 5.8, finance: 6.2, tourism: 1.5, govtServices: 22.3 },
  { year: 2022, gdpContribPct: 51.5, trade: 12.5, transport: 7.2, telecom: 6.2, finance: 6.5, tourism: 2.2, govtServices: 16.9 },
  { year: 2024, gdpContribPct: 51.3, trade: 12.8, transport: 7.5, telecom: 6.5, finance: 6.8, tourism: 2.5, govtServices: 15.2 },
];

// ─── 23. MINING & ENERGY ────────────────────────────────────────────────
export const miningEnergy = [
  { year: 2010, ironOreMt: 2.5, phosphateMt: 1.8, zincKt: 35, leadKt: 12, saltMt: 0.8, electricityTwh: 45, gasConsumptionBcm: 28, petrolConsumptionMt: 12.5 },
  { year: 2012, ironOreMt: 2.8, phosphateMt: 2.0, zincKt: 38, leadKt: 14, saltMt: 0.9, electricityTwh: 50, gasConsumptionBcm: 30, petrolConsumptionMt: 13.0 },
  { year: 2014, ironOreMt: 3.0, phosphateMt: 1.5, zincKt: 32, leadKt: 11, saltMt: 0.85, electricityTwh: 55, gasConsumptionBcm: 32, petrolConsumptionMt: 14.0 },
  { year: 2016, ironOreMt: 2.5, phosphateMt: 1.2, zincKt: 28, leadKt: 10, saltMt: 0.8, electricityTwh: 58, gasConsumptionBcm: 34, petrolConsumptionMt: 14.5 },
  { year: 2018, ironOreMt: 3.2, phosphateMt: 1.5, zincKt: 30, leadKt: 10, saltMt: 0.85, electricityTwh: 62, gasConsumptionBcm: 36, petrolConsumptionMt: 15.0 },
  { year: 2020, ironOreMt: 2.8, phosphateMt: 1.0, zincKt: 22, leadKt: 8, saltMt: 0.75, electricityTwh: 60, gasConsumptionBcm: 35, petrolConsumptionMt: 12.0 },
  { year: 2022, ironOreMt: 3.5, phosphateMt: 1.3, zincKt: 28, leadKt: 10, saltMt: 0.8, electricityTwh: 68, gasConsumptionBcm: 40, petrolConsumptionMt: 15.5 },
  { year: 2024, ironOreMt: 3.8, phosphateMt: 1.5, zincKt: 32, leadKt: 11, saltMt: 0.85, electricityTwh: 72, gasConsumptionBcm: 42, petrolConsumptionMt: 16.0 },
];

// ─── 24. HEALTH SECTOR ───────────────────────────────────────────────────
export const healthData = [
  { year: 2010, hospitalBeds10k: 16.5, physicians10k: 17.2, nurses10k: 21.0, healthExpenditurePct: 5.2, lifeExpectancy: 75.2, infantMortality: 24.5, maternalMortality95k: 132, vaccinationRate: 92, numHospitals: 415, numHealthCenters: 1350, numPolyclinics: 320, primaryCareVisitsM: 48 },
  { year: 2012, hospitalBeds10k: 17.0, physicians10k: 18.0, nurses10k: 22.5, healthExpenditurePct: 5.5, lifeExpectancy: 75.8, infantMortality: 22.8, maternalMortality95k: 120, vaccinationRate: 93, numHospitals: 425, numHealthCenters: 1400, numPolyclinics: 340, primaryCareVisitsM: 52 },
  { year: 2014, hospitalBeds10k: 17.5, physicians10k: 19.2, nurses10k: 24.0, healthExpenditurePct: 6.0, lifeExpectancy: 76.3, infantMortality: 21.0, maternalMortality95k: 108, vaccinationRate: 94, numHospitals: 435, numHealthCenters: 1480, numPolyclinics: 360, primaryCareVisitsM: 56 },
  { year: 2016, hospitalBeds10k: 18.0, physicians10k: 20.5, nurses10k: 25.5, healthExpenditurePct: 6.3, lifeExpectancy: 76.8, infantMortality: 19.5, maternalMortality95k: 96, vaccinationRate: 95, numHospitals: 445, numHealthCenters: 1550, numPolyclinics: 380, primaryCareVisitsM: 60 },
  { year: 2018, hospitalBeds10k: 18.5, physicians10k: 21.8, nurses10k: 27.0, healthExpenditurePct: 6.5, lifeExpectancy: 77.1, infantMortality: 18.0, maternalMortality95k: 85, vaccinationRate: 95, numHospitals: 458, numHealthCenters: 1620, numPolyclinics: 400, primaryCareVisitsM: 65 },
  { year: 2020, hospitalBeds10k: 19.2, physicians10k: 22.5, nurses10k: 28.5, healthExpenditurePct: 7.2, lifeExpectancy: 76.8, infantMortality: 17.0, maternalMortality95k: 78, vaccinationRate: 90, numHospitals: 472, numHealthCenters: 1700, numPolyclinics: 420, primaryCareVisitsM: 70 },
  { year: 2022, hospitalBeds10k: 19.8, physicians10k: 24.0, nurses10k: 30.5, healthExpenditurePct: 6.8, lifeExpectancy: 77.2, infantMortality: 16.0, maternalMortality95k: 72, vaccinationRate: 93, numHospitals: 485, numHealthCenters: 1780, numPolyclinics: 440, primaryCareVisitsM: 74 },
  { year: 2024, hospitalBeds10k: 20.3, physicians10k: 25.5, nurses10k: 32.0, healthExpenditurePct: 6.5, lifeExpectancy: 77.5, infantMortality: 15.2, maternalMortality95k: 65, vaccinationRate: 94, numHospitals: 498, numHealthCenters: 1850, numPolyclinics: 460, primaryCareVisitsM: 78 },
];

// ─── HELPER: Latest values for KPI cards ────────────────────────────────────
export const latestKPIs = {
  gdpGrowth: 3.0,
  inflation: 3.0,
  unemployment: 10.8,
  tradeBalance: 11.5,
  populationM: 46.8,
  investmentRate: 40.0,
  debtToGdp: 41.0,
  savingsRate: 42.5,
  hydrocarbonShare: 80.0,
  ipiChange: 1.8,
};

// ─── 25. REGIONAL DETAILED KPIs — ENHANCED ───────────────────────────────
// Source: ONS Comptes Régionaux, RGPH 2022, Enquêtes Emploi, Annuaire Statistique
// Expanded wilaya-level data for expert regional analysis

// 25a. Wilaya-level detailed indicators (top 20 by population)
export const wilayaDetailed = [
  { wilaya: "Alger", code: 16, region: "Centre", populationK: 3915, areaKm2: 1190, density: 3290, gdpShare: 15.8, gdpBillionDzd: 4820, gdpPerCapitaK: 1231, unemployment: 7.8, youthUnemp: 18.5, femaleParticipation: 16.2, employmentRate: 52.4, informalEmploy: 32, urbanization: 94.5, povertyRate: 4.2, electrification: 99.8, waterAccess: 98.5, internetAccess: 82, secondaryEnrol: 92, higherEnrol: 48, literacyRate: 96.5, hospitalBeds10k: 24.5, physicians10k: 38.2, nurses10k: 52.0, healthCenters: 185, polyclinics: 62, infantMortality: 12.5, netMigration: 12.5, housingDeficitK: 45, vehicles10k: 385, phoneLines10k: 112, primarySchools: 520, middleSchools: 310, highSchools: 185, universityCapacityK: 125, industrialUnits: 4200, agriAreaHa: 28500, gdpGrowthPct: 2.8 },
  { wilaya: "Oran", code: 31, region: "Ouest", populationK: 1956, areaKm2: 2147, density: 911, gdpShare: 5.2, gdpBillionDzd: 1590, gdpPerCapitaK: 813, unemployment: 9.5, youthUnemp: 22.0, femaleParticipation: 14.8, employmentRate: 50.5, informalEmploy: 35, urbanization: 82.5, povertyRate: 6.2, electrification: 99.5, waterAccess: 96.0, internetAccess: 72, secondaryEnrol: 88, higherEnrol: 38, literacyRate: 93.8, hospitalBeds10k: 22.0, physicians10k: 30.5, nurses10k: 42.0, healthCenters: 120, polyclinics: 45, infantMortality: 15.8, netMigration: 4.2, housingDeficitK: 32, vehicles10k: 310, phoneLines10k: 95, primarySchools: 380, middleSchools: 195, highSchools: 120, universityCapacityK: 85, industrialUnits: 2800, agriAreaHa: 42500, gdpGrowthPct: 2.5 },
  { wilaya: "Constantine", code: 25, region: "Est", populationK: 1240, areaKm2: 2285, density: 543, gdpShare: 3.8, gdpBillionDzd: 1160, gdpPerCapitaK: 935, unemployment: 12.5, youthUnemp: 26.5, femaleParticipation: 13.2, employmentRate: 48.8, informalEmploy: 40, urbanization: 72.5, povertyRate: 7.8, electrification: 99.0, waterAccess: 94.5, internetAccess: 65, secondaryEnrol: 86, higherEnrol: 42, literacyRate: 92.5, hospitalBeds10k: 20.5, physicians10k: 28.0, nurses10k: 38.5, healthCenters: 95, polyclinics: 38, infantMortality: 17.2, netMigration: 1.5, housingDeficitK: 25, vehicles10k: 245, phoneLines10k: 82, primarySchools: 310, middleSchools: 165, highSchools: 98, universityCapacityK: 72, industrialUnits: 1800, agriAreaHa: 52000, gdpGrowthPct: 2.2 },
  { wilaya: "Annaba", code: 23, region: "Est", populationK: 742, areaKm2: 1439, density: 516, gdpShare: 2.8, gdpBillionDzd: 855, gdpPerCapitaK: 1152, unemployment: 14.2, youthUnemp: 28.8, femaleParticipation: 12.5, employmentRate: 47.5, informalEmploy: 42, urbanization: 75.2, povertyRate: 8.5, electrification: 98.8, waterAccess: 95.0, internetAccess: 62, secondaryEnrol: 84, higherEnrol: 35, literacyRate: 91.8, hospitalBeds10k: 19.5, physicians10k: 25.5, nurses10k: 35.0, healthCenters: 68, polyclinics: 28, infantMortality: 18.5, netMigration: -0.5, housingDeficitK: 18, vehicles10k: 220, phoneLines10k: 75, primarySchools: 205, middleSchools: 108, highSchools: 62, universityCapacityK: 48, industrialUnits: 1450, agriAreaHa: 38500, gdpGrowthPct: 1.8 },
  { wilaya: "Blida", code: 9, region: "Centre", populationK: 1142, areaKm2: 1476, density: 774, gdpShare: 3.6, gdpBillionDzd: 1100, gdpPerCapitaK: 963, unemployment: 8.5, youthUnemp: 19.2, femaleParticipation: 15.5, employmentRate: 51.8, informalEmploy: 35, urbanization: 72.8, povertyRate: 5.1, electrification: 99.5, waterAccess: 97.5, internetAccess: 70, secondaryEnrol: 88, higherEnrol: 40, literacyRate: 94.2, hospitalBeds10k: 19.2, physicians10k: 26.0, nurses10k: 36.0, healthCenters: 82, polyclinics: 32, infantMortality: 14.8, netMigration: 5.8, housingDeficitK: 28, vehicles10k: 275, phoneLines10k: 88, primarySchools: 285, middleSchools: 148, highSchools: 88, universityCapacityK: 55, industrialUnits: 2100, agriAreaHa: 45000, gdpGrowthPct: 3.2 },
  { wilaya: "Sétif", code: 19, region: "Hauts Plateaux", populationK: 1750, areaKm2: 6514, density: 269, gdpShare: 3.2, gdpBillionDzd: 975, gdpPerCapitaK: 557, unemployment: 14.8, youthUnemp: 30.5, femaleParticipation: 11.8, employmentRate: 46.5, informalEmploy: 45, urbanization: 55.2, povertyRate: 12.5, electrification: 96.5, waterAccess: 88.0, internetAccess: 58, secondaryEnrol: 78, higherEnrol: 32, literacyRate: 89.5, hospitalBeds10k: 14.8, physicians10k: 18.5, nurses10k: 28.0, healthCenters: 105, polyclinics: 35, infantMortality: 22.0, netMigration: -3.5, housingDeficitK: 35, vehicles10k: 185, phoneLines10k: 68, primarySchools: 420, middleSchools: 210, highSchools: 125, universityCapacityK: 58, industrialUnits: 1650, agriAreaHa: 285000, gdpGrowthPct: 2.0 },
  { wilaya: "Tizi Ouzou", code: 15, region: "Centre", populationK: 1280, areaKm2: 3568, density: 359, gdpShare: 2.5, gdpBillionDzd: 763, gdpPerCapitaK: 596, unemployment: 15.5, youthUnemp: 32.0, femaleParticipation: 11.2, employmentRate: 45.8, informalEmploy: 48, urbanization: 48.5, povertyRate: 11.0, electrification: 95.0, waterAccess: 85.0, internetAccess: 55, secondaryEnrol: 80, higherEnrol: 30, literacyRate: 88.8, hospitalBeds10k: 15.5, physicians10k: 19.5, nurses10k: 29.5, healthCenters: 95, polyclinics: 30, infantMortality: 20.5, netMigration: -2.0, housingDeficitK: 22, vehicles10k: 195, phoneLines10k: 72, primarySchools: 380, middleSchools: 185, highSchools: 105, universityCapacityK: 52, industrialUnits: 950, agriAreaHa: 125000, gdpGrowthPct: 1.5 },
  { wilaya: "Djelfa", code: 14, region: "Hauts Plateaux", populationK: 1420, areaKm2: 32220, density: 44, gdpShare: 1.8, gdpBillionDzd: 549, gdpPerCapitaK: 387, unemployment: 16.5, youthUnemp: 33.5, femaleParticipation: 10.5, employmentRate: 44.2, informalEmploy: 50, urbanization: 42.5, povertyRate: 14.8, electrification: 92.0, waterAccess: 78.0, internetAccess: 42, secondaryEnrol: 72, higherEnrol: 22, literacyRate: 85.5, hospitalBeds10k: 12.5, physicians10k: 14.0, nurses10k: 22.0, healthCenters: 88, polyclinics: 28, infantMortality: 25.5, netMigration: -5.2, housingDeficitK: 28, vehicles10k: 125, phoneLines10k: 52, primarySchools: 480, middleSchools: 195, highSchools: 95, universityCapacityK: 28, industrialUnits: 620, agriAreaHa: 520000, gdpGrowthPct: 1.8 },
  { wilaya: "Béjaïa", code: 6, region: "Centre", populationK: 960, areaKm2: 3268, density: 294, gdpShare: 2.2, gdpBillionDzd: 671, gdpPerCapitaK: 699, unemployment: 16.8, youthUnemp: 34.2, femaleParticipation: 10.8, employmentRate: 44.5, informalEmploy: 48, urbanization: 45.8, povertyRate: 10.5, electrification: 94.5, waterAccess: 82.0, internetAccess: 52, secondaryEnrol: 79, higherEnrol: 28, literacyRate: 88.2, hospitalBeds10k: 14.8, physicians10k: 18.0, nurses10k: 27.0, healthCenters: 72, polyclinics: 25, infantMortality: 21.0, netMigration: -1.5, housingDeficitK: 18, vehicles10k: 175, phoneLines10k: 62, primarySchools: 310, middleSchools: 148, highSchools: 82, universityCapacityK: 42, industrialUnits: 850, agriAreaHa: 95000, gdpGrowthPct: 1.2 },
  { wilaya: "Batna", code: 5, region: "Hauts Plateaux", populationK: 1185, areaKm2: 12558, density: 94, gdpShare: 1.8, gdpBillionDzd: 549, gdpPerCapitaK: 463, unemployment: 15.2, youthUnemp: 31.0, femaleParticipation: 11.0, employmentRate: 45.5, informalEmploy: 46, urbanization: 52.5, povertyRate: 13.5, electrification: 93.5, waterAccess: 82.0, internetAccess: 48, secondaryEnrol: 75, higherEnrol: 25, literacyRate: 87.0, hospitalBeds10k: 14.2, physicians10k: 16.5, nurses10k: 25.0, healthCenters: 82, polyclinics: 28, infantMortality: 23.5, netMigration: -3.0, housingDeficitK: 25, vehicles10k: 155, phoneLines10k: 58, primarySchools: 395, middleSchools: 180, highSchools: 95, universityCapacityK: 38, industrialUnits: 780, agriAreaHa: 320000, gdpGrowthPct: 1.5 },
  { wilaya: "Tlemcen", code: 13, region: "Ouest", populationK: 985, areaKm2: 9020, density: 109, gdpShare: 2.0, gdpBillionDzd: 610, gdpPerCapitaK: 619, unemployment: 12.8, youthUnemp: 26.5, femaleParticipation: 12.2, employmentRate: 47.8, informalEmploy: 42, urbanization: 58.5, povertyRate: 9.5, electrification: 97.0, waterAccess: 88.0, internetAccess: 55, secondaryEnrol: 82, higherEnrol: 30, literacyRate: 90.5, hospitalBeds10k: 16.5, physicians10k: 20.0, nurses10k: 28.5, healthCenters: 78, polyclinics: 28, infantMortality: 19.5, netMigration: -1.0, housingDeficitK: 20, vehicles10k: 178, phoneLines10k: 65, primarySchools: 340, middleSchools: 155, highSchools: 85, universityCapacityK: 45, industrialUnits: 920, agriAreaHa: 195000, gdpGrowthPct: 1.8 },
  { wilaya: "Boumerdès", code: 35, region: "Centre", populationK: 845, areaKm2: 1459, density: 579, gdpShare: 2.8, gdpBillionDzd: 855, gdpPerCapitaK: 1012, unemployment: 9.8, youthUnemp: 21.0, femaleParticipation: 15.0, employmentRate: 50.5, informalEmploy: 36, urbanization: 68.2, povertyRate: 5.5, electrification: 99.2, waterAccess: 96.5, internetAccess: 75, secondaryEnrol: 87, higherEnrol: 38, literacyRate: 93.5, hospitalBeds10k: 18.5, physicians10k: 24.5, nurses10k: 34.0, healthCenters: 68, polyclinics: 25, infantMortality: 15.2, netMigration: 4.5, housingDeficitK: 22, vehicles10k: 265, phoneLines10k: 85, primarySchools: 245, middleSchools: 128, highSchools: 72, universityCapacityK: 42, industrialUnits: 1950, agriAreaHa: 35000, gdpGrowthPct: 2.5 },
  { wilaya: "Ouargla", code: 30, region: "Sud", populationK: 725, areaKm2: 211980, density: 3.4, gdpShare: 3.5, gdpBillionDzd: 1068, gdpPerCapitaK: 1473, unemployment: 6.5, youthUnemp: 16.0, femaleParticipation: 10.2, employmentRate: 55.2, informalEmploy: 25, urbanization: 72.0, povertyRate: 5.8, electrification: 95.5, waterAccess: 82.0, internetAccess: 55, secondaryEnrol: 75, higherEnrol: 22, literacyRate: 87.5, hospitalBeds10k: 18.0, physicians10k: 22.0, nurses10k: 30.0, healthCenters: 52, polyclinics: 18, infantMortality: 18.0, netMigration: 8.5, housingDeficitK: 15, vehicles10k: 320, phoneLines10k: 78, primarySchools: 185, middleSchools: 85, highSchools: 42, universityCapacityK: 25, industrialUnits: 580, agriAreaHa: 45000, gdpGrowthPct: 2.0 },
  { wilaya: "Biskra", code: 7, region: "Sud", populationK: 825, areaKm2: 21560, density: 38, gdpShare: 1.5, gdpBillionDzd: 458, gdpPerCapitaK: 555, unemployment: 11.5, youthUnemp: 22.5, femaleParticipation: 12.0, employmentRate: 48.5, informalEmploy: 38, urbanization: 62.5, povertyRate: 9.2, electrification: 94.0, waterAccess: 80.0, internetAccess: 48, secondaryEnrol: 74, higherEnrol: 20, literacyRate: 86.0, hospitalBeds10k: 15.5, physicians10k: 17.5, nurses10k: 25.0, healthCenters: 62, polyclinics: 22, infantMortality: 22.0, netMigration: 0.5, housingDeficitK: 18, vehicles10k: 165, phoneLines10k: 55, primarySchools: 265, middleSchools: 110, highSchools: 55, universityCapacityK: 22, industrialUnits: 520, agriAreaHa: 165000, gdpGrowthPct: 2.2 },
  { wilaya: "M'sila", code: 28, region: "Hauts Plateaux", populationK: 1080, areaKm2: 18458, density: 59, gdpShare: 1.2, gdpBillionDzd: 366, gdpPerCapitaK: 339, unemployment: 17.5, youthUnemp: 35.0, femaleParticipation: 9.8, employmentRate: 43.2, informalEmploy: 52, urbanization: 38.5, povertyRate: 15.8, electrification: 90.5, waterAccess: 72.0, internetAccess: 35, secondaryEnrol: 68, higherEnrol: 18, literacyRate: 83.5, hospitalBeds10k: 11.8, physicians10k: 12.5, nurses10k: 20.0, healthCenters: 72, polyclinics: 22, infantMortality: 28.0, netMigration: -6.5, housingDeficitK: 32, vehicles10k: 105, phoneLines10k: 42, primarySchools: 385, middleSchools: 155, highSchools: 72, universityCapacityK: 18, industrialUnits: 380, agriAreaHa: 380000, gdpGrowthPct: 1.2 },
  { wilaya: "Tipaza", code: 42, region: "Centre", populationK: 872, areaKm2: 2165, density: 403, gdpShare: 2.1, gdpBillionDzd: 641, gdpPerCapitaK: 735, unemployment: 10.2, youthUnemp: 22.5, femaleParticipation: 14.0, employmentRate: 49.6, informalEmploy: 38, urbanization: 65.4, povertyRate: 6.8, electrification: 98.5, waterAccess: 92.0, internetAccess: 62, secondaryEnrol: 85, higherEnrol: 32, literacyRate: 92.0, hospitalBeds10k: 16.8, physicians10k: 22.0, nurses10k: 30.5, healthCenters: 65, polyclinics: 24, infantMortality: 17.5, netMigration: 8.2, housingDeficitK: 20, vehicles10k: 225, phoneLines10k: 72, primarySchools: 240, middleSchools: 118, highSchools: 65, universityCapacityK: 15, industrialUnits: 1100, agriAreaHa: 68000, gdpGrowthPct: 2.8 },
  { wilaya: "Médéa", code: 26, region: "Centre", populationK: 932, areaKm2: 8866, density: 105, gdpShare: 1.5, gdpBillionDzd: 458, gdpPerCapitaK: 491, unemployment: 13.8, youthUnemp: 28.5, femaleParticipation: 11.5, employmentRate: 46.2, informalEmploy: 44, urbanization: 52.0, povertyRate: 10.2, electrification: 95.5, waterAccess: 85.0, internetAccess: 48, secondaryEnrol: 78, higherEnrol: 25, literacyRate: 88.0, hospitalBeds10k: 14.5, physicians10k: 17.0, nurses10k: 24.5, healthCenters: 72, polyclinics: 24, infantMortality: 21.5, netMigration: -1.5, housingDeficitK: 22, vehicles10k: 152, phoneLines10k: 55, primarySchools: 320, middleSchools: 145, highSchools: 72, universityCapacityK: 20, industrialUnits: 680, agriAreaHa: 185000, gdpGrowthPct: 1.5 },
  { wilaya: "Mostaganem", code: 27, region: "Ouest", populationK: 880, areaKm2: 2269, density: 388, gdpShare: 2.0, gdpBillionDzd: 610, gdpPerCapitaK: 693, unemployment: 11.2, youthUnemp: 24.0, femaleParticipation: 13.5, employmentRate: 48.8, informalEmploy: 40, urbanization: 65.0, povertyRate: 8.0, electrification: 98.0, waterAccess: 90.0, internetAccess: 58, secondaryEnrol: 82, higherEnrol: 28, literacyRate: 90.0, hospitalBeds10k: 17.5, physicians10k: 21.0, nurses10k: 29.5, healthCenters: 68, polyclinics: 25, infantMortality: 19.0, netMigration: 0.2, housingDeficitK: 18, vehicles10k: 195, phoneLines10k: 68, primarySchools: 275, middleSchools: 132, highSchools: 72, universityCapacityK: 28, industrialUnits: 1250, agriAreaHa: 120000, gdpGrowthPct: 2.0 },
  { wilaya: "Ghardaïa", code: 47, region: "Sud", populationK: 425, areaKm2: 86820, density: 4.9, gdpShare: 1.8, gdpBillionDzd: 549, gdpPerCapitaK: 1292, unemployment: 7.5, youthUnemp: 18.5, femaleParticipation: 11.8, employmentRate: 54.0, informalEmploy: 28, urbanization: 78.5, povertyRate: 6.5, electrification: 96.0, waterAccess: 85.0, internetAccess: 52, secondaryEnrol: 78, higherEnrol: 25, literacyRate: 89.0, hospitalBeds10k: 17.0, physicians10k: 20.0, nurses10k: 28.0, healthCenters: 38, polyclinics: 14, infantMortality: 19.5, netMigration: 2.5, housingDeficitK: 8, vehicles10k: 280, phoneLines10k: 72, primarySchools: 145, middleSchools: 62, highSchools: 35, universityCapacityK: 18, industrialUnits: 420, agriAreaHa: 55000, gdpGrowthPct: 2.5 },
  { wilaya: "Skikda", code: 21, region: "Est", populationK: 1020, areaKm2: 3166, density: 322, gdpShare: 2.5, gdpBillionDzd: 763, gdpPerCapitaK: 748, unemployment: 13.5, youthUnemp: 27.5, femaleParticipation: 12.5, employmentRate: 47.2, informalEmploy: 42, urbanization: 62.0, povertyRate: 9.0, electrification: 97.5, waterAccess: 90.0, internetAccess: 58, secondaryEnrol: 82, higherEnrol: 28, literacyRate: 90.5, hospitalBeds10k: 17.0, physicians10k: 20.5, nurses10k: 28.5, healthCenters: 75, polyclinics: 28, infantMortality: 19.0, netMigration: -0.8, housingDeficitK: 22, vehicles10k: 205, phoneLines10k: 68, primarySchools: 295, middleSchools: 145, highSchools: 82, universityCapacityK: 32, industrialUnits: 1600, agriAreaHa: 85000, gdpGrowthPct: 2.0 },
];

// 25b. Regional inequality indices (Gini coefficient by dimension per region)
export const regionalInequality = [
  { region: "Centre", giniIncome: 0.315, giniLand: 0.42, giniEducation: 0.18, giniHealth: 0.15, giniHousing: 0.35, theilIndex: 0.12, palmaRatio: 1.45 },
  { region: "Est", giniIncome: 0.345, giniLand: 0.48, giniEducation: 0.22, giniHealth: 0.20, giniHousing: 0.40, theilIndex: 0.18, palmaRatio: 1.72 },
  { region: "Ouest", giniIncome: 0.330, giniLand: 0.45, giniEducation: 0.20, giniHealth: 0.18, giniHousing: 0.38, theilIndex: 0.15, palmaRatio: 1.58 },
  { region: "Sud", giniIncome: 0.295, giniLand: 0.55, giniEducation: 0.28, giniHealth: 0.25, giniHousing: 0.42, theilIndex: 0.14, palmaRatio: 1.35 },
  { region: "Hauts Plateaux", giniIncome: 0.360, giniLand: 0.50, giniEducation: 0.25, giniHealth: 0.22, giniHousing: 0.45, theilIndex: 0.22, palmaRatio: 1.85 },
];

// 25c. Regional human development composite index (HDI-like) 2015-2024
export const regionalHDI = [
  { year: 2015, centreHDI: 0.782, estHDI: 0.718, ouestHDI: 0.735, sudHDI: 0.705, hpHDI: 0.665 },
  { year: 2016, centreHDI: 0.785, estHDI: 0.722, ouestHDI: 0.738, sudHDI: 0.708, hpHDI: 0.668 },
  { year: 2017, centreHDI: 0.788, estHDI: 0.725, ouestHDI: 0.740, sudHDI: 0.712, hpHDI: 0.672 },
  { year: 2018, centreHDI: 0.792, estHDI: 0.728, ouestHDI: 0.742, sudHDI: 0.715, hpHDI: 0.675 },
  { year: 2019, centreHDI: 0.795, estHDI: 0.730, ouestHDI: 0.745, sudHDI: 0.718, hpHDI: 0.678 },
  { year: 2020, centreHDI: 0.790, estHDI: 0.720, ouestHDI: 0.738, sudHDI: 0.710, hpHDI: 0.670 },
  { year: 2021, centreHDI: 0.798, estHDI: 0.732, ouestHDI: 0.748, sudHDI: 0.720, hpHDI: 0.680 },
  { year: 2022, centreHDI: 0.802, estHDI: 0.738, ouestHDI: 0.752, sudHDI: 0.725, hpHDI: 0.685 },
  { year: 2023, centreHDI: 0.808, estHDI: 0.742, ouestHDI: 0.755, sudHDI: 0.728, hpHDI: 0.688 },
  { year: 2024, centreHDI: 0.812, estHDI: 0.748, ouestHDI: 0.760, sudHDI: 0.732, hpHDI: 0.692 },
];

// 25d. Regional employment structure (2024) - sectoral employment breakdown
export const regionalEmployment = [
  { region: "Centre", totalEmployK: 3850, agriculturePct: 4.5, industryPct: 22.0, constructionPct: 12.5, servicesPct: 45.0, publicSectorPct: 16.0, femalePct: 16.2, youthPct: 22.5 },
  { region: "Est", totalEmployK: 2180, agriculturePct: 18.5, industryPct: 16.0, constructionPct: 10.5, servicesPct: 38.0, publicSectorPct: 17.0, femalePct: 12.5, youthPct: 25.8 },
  { region: "Ouest", totalEmployK: 1550, agriculturePct: 15.0, industryPct: 14.5, constructionPct: 11.0, servicesPct: 42.0, publicSectorPct: 17.5, femalePct: 13.8, youthPct: 24.2 },
  { region: "Sud", totalEmployK: 1980, agriculturePct: 3.5, industryPct: 25.0, constructionPct: 12.0, servicesPct: 35.0, publicSectorPct: 24.5, femalePct: 10.2, youthPct: 20.5 },
  { region: "Hauts Plateaux", totalEmployK: 1320, agriculturePct: 28.0, industryPct: 10.0, constructionPct: 8.5, servicesPct: 35.5, publicSectorPct: 18.0, femalePct: 9.8, youthPct: 28.5 },
];

// 25e. Regional infrastructure indicators (2024)
export const regionalInfrastructure = [
  { region: "Centre", roadDensity: 0.85, highwayKm: 520, railwayKm: 680, airports: 3, ports: 4, waterSupplyPct: 95.5, sewagePct: 82.0, broadbandSubscribersK: 1850, mobilePenetration: 118, internetUsersPct: 72 },
  { region: "Est", roadDensity: 0.42, highwayKm: 280, railwayKm: 520, airports: 2, ports: 3, waterSupplyPct: 88.0, sewagePct: 62.0, broadbandSubscribersK: 920, mobilePenetration: 108, internetUsersPct: 58 },
  { region: "Ouest", roadDensity: 0.55, highwayKm: 310, railwayKm: 420, airports: 2, ports: 2, waterSupplyPct: 90.0, sewagePct: 65.0, broadbandSubscribersK: 680, mobilePenetration: 112, internetUsersPct: 62 },
  { region: "Sud", roadDensity: 0.08, highwayKm: 850, railwayKm: 180, airports: 5, ports: 0, waterSupplyPct: 72.0, sewagePct: 35.0, broadbandSubscribersK: 520, mobilePenetration: 105, internetUsersPct: 48 },
  { region: "Hauts Plateaux", roadDensity: 0.32, highwayKm: 180, railwayKm: 350, airports: 1, ports: 0, waterSupplyPct: 78.0, sewagePct: 45.0, broadbandSubscribersK: 580, mobilePenetration: 102, internetUsersPct: 45 },
];

// 25f. Top wilayas by specific indicators - for ranked charts
export const topWilayasByUnemp = [
  { wilaya: "M'sila", rate: 17.5, region: "Hauts Plateaux" },
  { wilaya: "Béjaïa", rate: 16.8, region: "Centre" },
  { wilaya: "Djelfa", rate: 16.5, region: "Hauts Plateaux" },
  { wilaya: "Tizi Ouzou", rate: 15.5, region: "Centre" },
  { wilaya: "Batna", rate: 15.2, region: "Hauts Plateaux" },
  { wilaya: "Sétif", rate: 14.8, region: "Hauts Plateaux" },
  { wilaya: "Annaba", rate: 14.2, region: "Est" },
  { wilaya: "Skikda", rate: 13.5, region: "Est" },
  { wilaya: "Médéa", rate: 13.8, region: "Centre" },
  { wilaya: "Tlemcen", rate: 12.8, region: "Ouest" },
  { wilaya: "Mostaganem", rate: 11.2, region: "Ouest" },
  { wilaya: "Tipaza", rate: 10.2, region: "Centre" },
  { wilaya: "Boumerdès", rate: 9.8, region: "Centre" },
  { wilaya: "Oran", rate: 9.5, region: "Ouest" },
  { wilaya: "Biskra", rate: 11.5, region: "Sud" },
];

export const topWilayasByGDP = [
  { wilaya: "Alger", gdpShare: 15.8, gdpBillionDzd: 4820 },
  { wilaya: "Oran", gdpShare: 5.2, gdpBillionDzd: 1590 },
  { wilaya: "Constantine", gdpShare: 3.8, gdpBillionDzd: 1160 },
  { wilaya: "Ouargla", gdpShare: 3.5, gdpBillionDzd: 1068 },
  { wilaya: "Annaba", gdpShare: 2.8, gdpBillionDzd: 855 },
  { wilaya: "Boumerdès", gdpShare: 2.8, gdpBillionDzd: 855 },
  { wilaya: "Blida", gdpShare: 3.6, gdpBillionDzd: 1100 },
  { wilaya: "Skikda", gdpShare: 2.5, gdpBillionDzd: 763 },
  { wilaya: "Tizi Ouzou", gdpShare: 2.5, gdpBillionDzd: 763 },
  { wilaya: "Tipaza", gdpShare: 2.1, gdpBillionDzd: 641 },
  { wilaya: "Béjaïa", gdpShare: 2.2, gdpBillionDzd: 671 },
  { wilaya: "Mostaganem", gdpShare: 2.0, gdpBillionDzd: 610 },
  { wilaya: "Tlemcen", gdpShare: 2.0, gdpBillionDzd: 610 },
  { wilaya: "Sétif", gdpShare: 3.2, gdpBillionDzd: 975 },
  { wilaya: "Ghardaïa", gdpShare: 1.8, gdpBillionDzd: 549 },
];

// 25g. Correlation scatter data: GDP per capita vs education vs health
export const regionalDevelopmentScatter = [
  { region: "Centre", gdpPerCapitaK: 655, secondaryEnrol: 85, hospitalBeds10k: 18.8, literacyRate: 94.2, lifeExp: 77.8, povertyRate: 6.8 },
  { region: "Est", gdpPerCapitaK: 445, secondaryEnrol: 80, hospitalBeds10k: 16.2, literacyRate: 90.5, lifeExp: 76.5, povertyRate: 10.2 },
  { region: "Ouest", gdpPerCapitaK: 570, secondaryEnrol: 82, hospitalBeds10k: 16.5, literacyRate: 91.8, lifeExp: 77.0, povertyRate: 8.2 },
  { region: "Sud", gdpPerCapitaK: 530, secondaryEnrol: 70, hospitalBeds10k: 17.0, literacyRate: 87.5, lifeExp: 76.0, povertyRate: 8.8 },
  { region: "Hauts Plateaux", gdpPerCapitaK: 355, secondaryEnrol: 76, hospitalBeds10k: 14.4, literacyRate: 86.5, lifeExp: 75.5, povertyRate: 11.5 },
];

// 25h. Regional urbanization trend 2015-2024
export const regionalUrbanization = [
  { year: 2015, centre: 64.5, est: 54.5, ouest: 57.5, sud: 56.0, hp: 46.5 },
  { year: 2016, centre: 65.0, est: 55.0, ouest: 58.0, sud: 56.5, hp: 47.0 },
  { year: 2017, centre: 65.5, est: 55.5, ouest: 58.5, sud: 57.0, hp: 47.5 },
  { year: 2018, centre: 66.2, est: 56.0, ouest: 59.0, sud: 57.5, hp: 48.0 },
  { year: 2019, centre: 66.8, est: 56.5, ouest: 59.5, sud: 58.0, hp: 48.5 },
  { year: 2020, centre: 67.0, est: 56.8, ouest: 59.5, sud: 58.5, hp: 48.8 },
  { year: 2021, centre: 67.5, est: 57.2, ouest: 60.0, sud: 59.0, hp: 49.2 },
  { year: 2022, centre: 68.0, est: 57.8, ouest: 60.8, sud: 59.5, hp: 50.0 },
  { year: 2023, centre: 68.2, est: 58.2, ouest: 61.2, sud: 59.8, hp: 50.5 },
  { year: 2024, centre: 68.5, est: 58.5, ouest: 61.5, sud: 60.2, hp: 50.8 },
];

// 25i. Wilaya population ranking (all 58 wilayas, top 20 shown)
export const wilayaPopulationRanking = [
  { rank: 1, wilaya: "Alger", popK: 3915, region: "Centre" },
  { rank: 2, wilaya: "Sétif", popK: 1750, region: "Hauts Plateaux" },
  { rank: 3, wilaya: "Oran", popK: 1956, region: "Ouest" },
  { rank: 4, wilaya: "Djelfa", popK: 1420, region: "Hauts Plateaux" },
  { rank: 5, wilaya: "Tizi Ouzou", popK: 1280, region: "Centre" },
  { rank: 6, wilaya: "Constantine", popK: 1240, region: "Est" },
  { rank: 7, wilaya: "M'sila", popK: 1080, region: "Hauts Plateaux" },
  { rank: 8, wilaya: "Médéa", popK: 932, region: "Centre" },
  { rank: 9, wilaya: "Mostaganem", popK: 880, region: "Ouest" },
  { rank: 10, wilaya: "Batna", popK: 1185, region: "Hauts Plateaux" },
  { rank: 11, wilaya: "Blida", popK: 1142, region: "Centre" },
  { rank: 12, wilaya: "Boumerdès", popK: 845, region: "Centre" },
  { rank: 13, wilaya: "Tipaza", popK: 872, region: "Centre" },
  { rank: 14, wilaya: "Tlemcen", popK: 985, region: "Ouest" },
  { rank: 15, wilaya: "Biskra", popK: 825, region: "Sud" },
  { rank: 16, wilaya: "Skikda", popK: 1020, region: "Est" },
  { rank: 17, wilaya: "Annaba", popK: 742, region: "Est" },
  { rank: 18, wilaya: "Ouargla", popK: 725, region: "Sud" },
  { rank: 19, wilaya: "Béjaïa", popK: 960, region: "Centre" },
  { rank: 20, wilaya: "Ghardaïa", popK: 425, region: "Sud" },
];
// ═══════════════════════════════════════════════════════════════════
// SECTION 26: ODD / SDGs — VNR 2026 Data
// Source: Rapport National Volontaire 2026 — Agenda 2030
// ═══════════════════════════════════════════════════════════════════

export const sdgOverview = [
  { sdg: 1, name: "Pauvreté", color: "#E5243B", achieved: true, progress: 95, status: "on_track" },
  { sdg: 2, name: "Faim", color: "#DDA63A", achieved: false, progress: 65, status: "moderate" },
  { sdg: 3, name: "Santé", color: "#4C9F38", achieved: false, progress: 82, status: "on_track" },
  { sdg: 4, name: "Éducation", color: "#C5192D", achieved: false, progress: 88, status: "on_track" },
  { sdg: 5, name: "Égalité sexes", color: "#FF3A21", achieved: false, progress: 60, status: "moderate" },
  { sdg: 6, name: "Eau", color: "#26BDE2", achieved: false, progress: 90, status: "on_track" },
  { sdg: 7, name: "Énergie", color: "#FCC30B", achieved: false, progress: 45, status: "insufficient" },
  { sdg: 8, name: "Croissance", color: "#A21942", achieved: false, progress: 62, status: "moderate" },
  { sdg: 9, name: "Industrie", color: "#FD6925", achieved: false, progress: 55, status: "moderate" },
  { sdg: 10, name: "Inégalités", color: "#DD1367", achieved: false, progress: 78, status: "on_track" },
  { sdg: 11, name: "Villes", color: "#FD9D24", achieved: false, progress: 72, status: "on_track" },
  { sdg: 12, name: "Consommation", color: "#BF8B2E", achieved: false, progress: 40, status: "insufficient" },
  { sdg: 13, name: "Climat", color: "#3F7E44", achieved: false, progress: 38, status: "insufficient" },
  { sdg: 14, name: "Océans", color: "#0A97D9", achieved: false, progress: 50, status: "moderate" },
  { sdg: 15, name: "Écosystèmes", color: "#56C02B", achieved: false, progress: 48, status: "moderate" },
  { sdg: 16, name: "Paix", color: "#00689D", achieved: false, progress: 70, status: "on_track" },
  { sdg: 17, name: "Partenariats", color: "#19486A", achieved: false, progress: 55, status: "moderate" },
];

export const sdgIndicators = [
  { sdg: 1, indicator: "Taux extrême pauvreté (%)", ref2015: "< 0,5", recent: "< 0,5 (2024)", target2030: "0", progressPct: 99, achieved: true },
  { sdg: 1, indicator: "Taux pauvreté national (%)", ref2015: "5,5", recent: "4,67 (2024)", target2030: "< 3", progressPct: 75, achieved: false },
  { sdg: 1, indicator: "Couverture sécurité sociale (%)", ref2015: "55,2", recent: "67 (2024)", target2030: "≥ 80", progressPct: 62, achieved: false },
  { sdg: 2, indicator: "Disponibilité blé (kg/hab/an)", ref2015: "227", recent: "265 (2024)", target2030: "≥ 280", progressPct: 82, achieved: false },
  { sdg: 2, indicator: "Production aquacole (tonnes)", ref2015: "1 327", recent: "6 935 (2024)", target2030: "≥ 30 000", progressPct: 20, achieved: false },
  { sdg: 3, indicator: "Espérance de vie (ans)", ref2015: "77,1", recent: "79,6 (2023)", target2030: "≥ 80", progressPct: 90, achieved: false },
  { sdg: 3, indicator: "Mortalité maternelle (/100k)", ref2015: "60,5", recent: "48,5 (2019)", target2030: "< 15", progressPct: 40, achieved: false },
  { sdg: 3, indicator: "Mortalité infantile (‰)", ref2015: "25,7", recent: "19,7 (2024)", target2030: "< 15", progressPct: 63, achieved: false },
  { sdg: 3, indicator: "Vaccination DTC3 (%)", ref2015: "94", recent: "96 (2024)", target2030: "≥ 95", progressPct: 100, achieved: true },
  { sdg: 3, indicator: "Incidence tuberculose (/100k)", ref2015: "57,4", recent: "39,9 (2024)", target2030: "< 30", progressPct: 58, achieved: false },
  { sdg: 4, indicator: "Scolarisation primaire (%)", ref2015: "97,1", recent: "100 (2024)", target2030: "100", progressPct: 100, achieved: true },
  { sdg: 4, indicator: "Scolarisation secondaire (%)", ref2015: "63", recent: "75,3 (2024)", target2030: "≥ 92", progressPct: 57, achieved: false },
  { sdg: 4, indicator: "Étudiants supérieur (M)", ref2015: "1,4", recent: "1,7 (2024)", target2030: "≥ 2,0", progressPct: 60, achieved: false },
  { sdg: 4, indicator: "Filles supérieur (%)", ref2015: "60", recent: "65,7 (2024)", target2030: "≥ 50", progressPct: 100, achieved: true },
  { sdg: 4, indicator: "Alphabétisation adultes (%)", ref2015: "80,2", recent: "85,1 (2024)", target2030: "≥ 95", progressPct: 49, achieved: false },
  { sdg: 6, indicator: "Raccordement eau potable (%)", ref2015: "78", recent: "98 (2024)", target2030: "100", progressPct: 91, achieved: false },
  { sdg: 6, indicator: "Assainissement (%)", ref2015: "86", recent: "93 (2024)", target2030: "≥ 95", progressPct: 71, achieved: false },
  { sdg: 7, indicator: "Électrification (%)", ref2015: "~ 99", recent: "99,9 (2025)", target2030: "100", progressPct: 99, achieved: false },
  { sdg: 7, indicator: "Part EnR (%)", ref2015: "0,8", recent: "3 (2024)", target2030: "10", progressPct: 24, achieved: false },
  { sdg: 7, indicator: "Puissance EnR installée (MW)", ref2015: "~ 400", recent: "700 (2025)", target2030: "≥ 3000", progressPct: 12, achieved: false },
  { sdg: 8, indicator: "Croissance PIB (%)", ref2015: "3,7", recent: "3,7 (2024)", target2030: "≥ 4,0", progressPct: 85, achieved: false },
  { sdg: 8, indicator: "Chômage global (%)", ref2015: "11,2", recent: "9,7 (2024)", target2030: "< 8", progressPct: 52, achieved: false },
  { sdg: 8, indicator: "Chômage jeunes (%)", ref2015: "25", recent: "30,8 (2024)", target2030: "< 20", progressPct: 0, achieved: false },
  { sdg: 8, indicator: "Femmes emploi (%)", ref2015: "16,5", recent: "17,8 (2024)", target2030: "≥ 25", progressPct: 24, achieved: false },
  { sdg: 8, indicator: "DAB/100k adultes", ref2015: "5", recent: "16 (2025)", target2030: "≥ 30", progressPct: 44, achieved: false },
  { sdg: 9, indicator: "Part industrie manufact. (% PIB)", ref2015: "7,1", recent: "10,0 (2024)", target2030: "≥ 12", progressPct: 70, achieved: false },
  { sdg: 9, indicator: "Dépenses R&D (% PIB)", ref2015: "0,5", recent: "0,7 (2024)", target2030: "1,5", progressPct: 20, achieved: false },
  { sdg: 9, indicator: "Couverture 4G (% territoire)", ref2015: "", recent: "98 (2025)", target2030: "100", progressPct: 92, achieved: false },
  { sdg: 9, indicator: "Pénétration internet mobile (%)", ref2015: "41", recent: "110,6 (2025)", target2030: "≥ 120", progressPct: 82, achieved: false },
  { sdg: 10, indicator: "Indice de Gini", ref2015: "0,275", recent: "0,28 (2024)", target2030: "≤ 0,30", progressPct: 100, achieved: true },
  { sdg: 10, indicator: "Couverture protection sociale (%)", ref2015: "55,2", recent: "67 (2024)", target2030: "≥ 80", progressPct: 62, achieved: false },
  { sdg: 11, indicator: "Logements distribués (2020-2024)", ref2015: "", recent: "1 700 479", target2030: "≥ 2 000 000", progressPct: 85, achieved: false },
  { sdg: 11, indicator: "Taux occupation logement", ref2015: "4,8", recent: "4,1 (2024)", target2030: "≤ 4,0", progressPct: 88, achieved: false },
  { sdg: 11, indicator: "Réseau ferroviaire (km)", ref2015: "3 800", recent: "5 738 (fév. 2026)", target2030: "≥ 7 000", progressPct: 65, achieved: false },
  { sdg: 12, indicator: "Élimination DEEE (%)", ref2015: "", recent: "35 (2024)", target2030: "≥ 50", progressPct: 70, achieved: false },
  { sdg: 13, indicator: "Émissions GES (MtCO2eq)", ref2015: "155", recent: "175 (2023)", target2030: "Réduction", progressPct: 20, achieved: false },
  { sdg: 13, indicator: "Capacité dessalement (Mm³/j)", ref2015: "", recent: "3,75 (2025)", target2030: "5,0", progressPct: 75, achieved: false },
  { sdg: 14, indicator: "Aires marines protégées (%)", ref2015: "", recent: "15,15 (2024)", target2030: "≥ 50", progressPct: 30, achieved: false },
  { sdg: 15, indicator: "Surface forestière (M ha)", ref2015: "4,7", recent: "4,8 (2024)", target2030: "≥ 5,0", progressPct: 33, achieved: false },
  { sdg: 16, indicator: "Taux de criminalité (/100k)", ref2015: "3,3", recent: "2,6 (2024)", target2030: "< 2,5", progressPct: 70, achieved: false },
  { sdg: 16, indicator: "Taux obtention justice (%)", ref2015: "", recent: "67 (2024)", target2030: "≥ 75", progressPct: 68, achieved: false },
  { sdg: 17, indicator: "Service dette/exports B&S (%)", ref2015: "13,3", recent: "6,8 (2024)", target2030: "≤ 1,0", progressPct: 50, achieved: false },
  { sdg: 17, indicator: "IDE entrants/RNB (%)", ref2015: "1,02", recent: "0,58 (2024)", target2030: "≥ 2,0", progressPct: 35, achieved: false },
];

export const sdgDeepDive = [
  {
    sdg: 1, title: "Pauvreté", subtitle: "ODD 1",
    kpis: [
      { key: "extremePoverty", label: "Extrême pauvreté", value: "< 0,5 %", target: "0 %", status: "achieved", icon: "CheckCircle" },
      { key: "nationalPoverty", label: "Pauvreté nationale", value: "4,67 %", target: "< 3 %", status: "progress", icon: "TrendingDown" },
      { key: "socialCoverage", label: "Couverture sociale", value: "67 %", target: "≥ 80 %", status: "progress", icon: "Shield" },
      { key: "afBeneficiaries", label: "Bénéficiaires AFS", value: "1,2 M", target: "Extension", status: "progress", icon: "Users" },
      { key: "giniIndex", label: "Indice de Gini", value: "0,28", target: "≤ 0,30", status: "achieved", icon: "Scale" },
      { key: "housingUnits", label: "Logements distribués", value: "1 700 479", target: "2020-2024", status: "progress", icon: "Home" },
    ],
    timeSeries: [
      { year: 2015, socialCoverage: 55.2, afsBeneficiaries: 850924, extremePoverty: 0.5, nationalPoverty: 5.5, gini: 0.275 },
      { year: 2018, socialCoverage: 59.0, afsBeneficiaries: 980000, extremePoverty: 0.5, nationalPoverty: 5.0, gini: 0.28 },
      { year: 2020, socialCoverage: 61.5, afsBeneficiaries: 1050000, extremePoverty: 0.5, nationalPoverty: 4.8, gini: 0.28 },
      { year: 2022, socialCoverage: 64.0, afsBeneficiaries: 1120000, extremePoverty: 0.5, nationalPoverty: 4.7, gini: 0.28 },
      { year: 2024, socialCoverage: 67.0, afsBeneficiaries: 1200000, extremePoverty: 0.5, nationalPoverty: 4.67, gini: 0.28 },
    ],
  },
  {
    sdg: 3, title: "Santé", subtitle: "ODD 3",
    kpis: [
      { key: "lifeExpectancy", label: "Espérance de vie", value: "79,6 ans", target: "≥ 80", status: "progress", icon: "Heart" },
      { key: "maternalMortality", label: "Mortalité maternelle", value: "48,5 /100k", target: "< 15", status: "progress", icon: "Baby" },
      { key: "infantMortality", label: "Mortalité infantile", value: "19,7 ‰", target: "< 15 ‰", status: "progress", icon: "Activity" },
      { key: "vaccination", label: "Vaccination DTC3", value: "96 %", target: "≥ 95 %", status: "achieved", icon: "Syringe" },
      { key: "tbIncidence", label: "Tuberculose", value: "39,9 /100k", target: "< 30", status: "progress", icon: "Thermometer" },
      { key: "csuIndex", label: "Couverture sanitaire", value: "82", target: "≥ 90", status: "progress", icon: "Hospital" },
    ],
    timeSeries: [
      { year: 2015, lifeExp: 77.1, lifeExpF: 78.9, lifeExpM: 75.3, mmr: 60.5, imr: 25.7, nmr: 16.2, u5mr: 28.2, tb: 57.4, dtc3: 94, csu: 72 },
      { year: 2018, lifeExp: 78.0, lifeExpF: 79.5, lifeExpM: 76.2, mmr: 55.0, imr: 23.0, nmr: 15.0, u5mr: 25.0, tb: 50.1, dtc3: 95, csu: 76 },
      { year: 2020, lifeExp: 78.4, lifeExpF: 79.8, lifeExpM: 76.8, mmr: 52.0, imr: 22.0, nmr: 14.5, u5mr: 24.0, tb: 46.0, dtc3: 95, csu: 78 },
      { year: 2023, lifeExp: 79.6, lifeExpF: 81.4, lifeExpM: 77.8, mmr: 48.5, imr: 19.7, nmr: 13.8, u5mr: 22.6, tb: 42.0, dtc3: 96, csu: 82 },
      { year: 2024, lifeExp: 79.8, lifeExpF: 81.6, lifeExpM: 78.0, mmr: 46.0, imr: 19.0, nmr: 13.0, u5mr: 22.0, tb: 39.9, dtc3: 96, csu: 84 },
    ],
  },
  {
    sdg: 6, title: "Eau", subtitle: "ODD 6",
    kpis: [
      { key: "waterAccess", label: "Eau potable", value: "98 %", target: "100 %", status: "progress", icon: "Droplets" },
      { key: "sewage", label: "Assainissement", value: "93 %", target: "≥ 95 %", status: "progress", icon: "Waves" },
      { key: "desalination", label: "Dessalement", value: "3,75 Mm³/j", target: "5,0 Mm³/j", status: "progress", icon: "Factory" },
      { key: "waterReuse", label: "Réutilisation EU", value: "111 Mm³/an", target: "300 Mm³/an", status: "progress", icon: "Recycle" },
      { key: "transferSystems", label: "Systèmes transfert", value: "37", target: "Expansion", status: "progress", icon: "GitBranch" },
      { key: "gireScore", label: "Score GIRE", value: "64", target: "≥ 75", status: "progress", icon: "Gauge" },
    ],
    timeSeries: [
      { year: 2015, waterAccess: 78, sewage: 86, desalCapacity: 1.2, waterReuseMm3: 10 },
      { year: 2018, waterAccess: 85, sewage: 88, desalCapacity: 1.8, waterReuseMm3: 15 },
      { year: 2020, waterAccess: 92, sewage: 90, desalCapacity: 2.11, waterReuseMm3: 20 },
      { year: 2022, waterAccess: 95, sewage: 92, desalCapacity: 2.70, waterReuseMm3: 45 },
      { year: 2024, waterAccess: 98, sewage: 93, desalCapacity: 3.40, waterReuseMm3: 85 },
      { year: 2025, waterAccess: 98, sewage: 93, desalCapacity: 3.75, waterReuseMm3: 111 },
    ],
  },
  {
    sdg: 7, title: "Énergie", subtitle: "ODD 7",
    kpis: [
      { key: "electrification", label: "Électrification", value: "99,9 %", target: "100 %", status: "achieved", icon: "Zap" },
      { key: "enrShare", label: "Part EnR", value: "3 %", target: "10 % (2030)", status: "insufficient", icon: "Sun" },
      { key: "enrCapacity", label: "Puissance EnR", value: "700 MW", target: "≥ 3000 MW", status: "insufficient", icon: "Battery" },
      { key: "solarPV", label: "Solaire PV", value: "386 MW", target: "15 000 MW (2035)", status: "insufficient", icon: "Sunrise" },
      { key: "energyDemand", label: "Demande électrique", value: "74 664 GWh", target: "Maîtrise", status: "progress", icon: "TrendingUp" },
      { key: "gasAccess", label: "Accès gaz naturel", value: "> 95 %", target: "Universal", status: "achieved", icon: "Flame" },
    ],
    timeSeries: [
      { year: 2015, production: 69, demand: 50152, enrShare: 0.8, enrCapacity: 400 },
      { year: 2018, production: 75, demand: 58000, enrShare: 1.2, enrCapacity: 450 },
      { year: 2020, production: 73, demand: 62000, enrShare: 1.5, enrCapacity: 480 },
      { year: 2022, production: 84, demand: 67000, enrShare: 2.1, enrCapacity: 550 },
      { year: 2024, production: 85, demand: 74664, enrShare: 3.0, enrCapacity: 525 },
      { year: 2025, production: 86, demand: 77000, enrShare: 3.5, enrCapacity: 700 },
    ],
  },
  {
    sdg: 8, title: "Croissance & Emploi", subtitle: "ODD 8",
    kpis: [
      { key: "gdpGrowth", label: "Croissance PIB", value: "3,7 %", target: "≥ 4,0 %", status: "progress", icon: "TrendingUp" },
      { key: "unemployment", label: "Chômage global", value: "9,7 %", target: "< 8 %", status: "progress", icon: "Users" },
      { key: "youthUnemp", label: "Chômage jeunes", value: "30,8 %", target: "< 20 %", status: "insufficient", icon: "UserX" },
      { key: "femaleEmployment", label: "Femmes emploi", value: "17,8 %", target: "≥ 25 %", status: "insufficient", icon: "UserCheck" },
      { key: "avgSalary", label: "Salaire net moyen", value: "43 500 DA", target: "↑", status: "progress", icon: "Banknote" },
      { key: "financialInclusion", label: "DAB/100k adultes", value: "16", target: "≥ 30", status: "progress", icon: "CreditCard" },
    ],
    timeSeries: [
      { year: 2015, gdpGrowth: 3.7, unemployment: 11.2, youthUnemp: 25.0, femaleEmp: 16.5, avgSalary: 39242, dab100k: 5, tourismVA: 1.2 },
      { year: 2017, gdpGrowth: 1.4, unemployment: 11.5, youthUnemp: 26.0, femaleEmp: 16.5, avgSalary: 40200, dab100k: 7, tourismVA: 1.3 },
      { year: 2019, gdpGrowth: 0.8, unemployment: 10.5, youthUnemp: 28.0, femaleEmp: 16.8, avgSalary: 41000, dab100k: 10, tourismVA: 1.4 },
      { year: 2020, gdpGrowth: -5.1, unemployment: 12.5, youthUnemp: 33.0, femaleEmp: 15.5, avgSalary: 41950, dab100k: 11, tourismVA: 0.9 },
      { year: 2021, gdpGrowth: 3.4, unemployment: 12.0, youthUnemp: 32.0, femaleEmp: 16.0, avgSalary: 42500, dab100k: 12, tourismVA: 1.0 },
      { year: 2022, gdpGrowth: 3.2, unemployment: 11.5, youthUnemp: 31.5, femaleEmp: 16.5, avgSalary: 43500, dab100k: 13, tourismVA: 1.3 },
      { year: 2023, gdpGrowth: 4.1, unemployment: 10.0, youthUnemp: 30.5, femaleEmp: 17.0, avgSalary: 44000, dab100k: 14, tourismVA: 1.5 },
      { year: 2024, gdpGrowth: 3.7, unemployment: 9.7, youthUnemp: 30.8, femaleEmp: 17.8, avgSalary: 44500, dab100k: 16, tourismVA: 1.6 },
    ],
  },
  {
    sdg: 9, title: "Industrie & Innovation", subtitle: "ODD 9",
    kpis: [
      { key: "mfgShare", label: "Industrie manufact.", value: "10,0 %", target: "≥ 12 %", status: "progress", icon: "Factory" },
      { key: "mfgPerCapita", label: "VA manufact./hab.", value: "Indice 141", target: "≥ 170", status: "progress", icon: "BarChart3" },
      { key: "rdSpending", label: "Dépenses R&D", value: "0,7 % PIB", target: "1,5 % PIB", status: "insufficient", icon: "FlaskConical" },
      { key: "startups", label: "Start-ups", value: "1 800", target: "↑", status: "progress", icon: "Rocket" },
      { key: "mobileSubs", label: "Abonnés mobile", value: "54,9 M", target: "↑", status: "progress", icon: "Smartphone" },
      { key: "internetMobile", label: "Internet mobile", value: "52 M", target: "↑", status: "progress", icon: "Wifi" },
    ],
    timeSeries: [
      { year: 2015, mfgPib: 7.1, mfgPerCap: 100, rdPct: 0.5, mobileM: 43.0, inetMobileM: 16.7, inetMobilePct: 41, coverage4G: 0, internetPop: 38.2 },
      { year: 2018, mfgPib: 6.9, mfgPerCap: 97, rdPct: 0.55, mobileM: 46.5, inetMobileM: 25.0, inetMobilePct: 60, coverage4G: 45, internetPop: 49.0 },
      { year: 2020, mfgPib: 7.5, mfgPerCap: 108, rdPct: 0.6, mobileM: 48.0, inetMobileM: 35.0, inetMobilePct: 80, coverage4G: 70, internetPop: 60.0 },
      { year: 2022, mfgPib: 8.5, mfgPerCap: 125, rdPct: 0.65, mobileM: 51.5, inetMobileM: 42.3, inetMobilePct: 94, coverage4G: 84, internetPop: 72.1 },
      { year: 2024, mfgPib: 10.0, mfgPerCap: 141, rdPct: 0.7, mobileM: 54.5, inetMobileM: 49.0, inetMobilePct: 105, coverage4G: 96, internetPop: 76.0 },
      { year: 2025, mfgPib: 10.0, mfgPerCap: 141, rdPct: 0.7, mobileM: 54.9, inetMobileM: 52.0, inetMobilePct: 110.6, coverage4G: 98, internetPop: 79.5 },
    ],
  },
  {
    sdg: 11, title: "Villes Durables", subtitle: "ODD 11",
    kpis: [
      { key: "housingDist", label: "Logements distribués", value: "1 700 479", target: "2020-2024", status: "progress", icon: "Home" },
      { key: "tol", label: "Taux occupation log.", value: "4,1", target: "≤ 4,0", status: "progress", icon: "Users" },
      { key: "railway", label: "Réseau ferroviaire", value: "5 738 km", target: "≥ 7 000 km", status: "progress", icon: "TrainFront" },
      { key: "metroTram", label: "Métro + tramways", value: "8 lignes", target: "11 lignes (2030)", status: "progress", icon: "TramFront" },
      { key: "chi", label: "CHI achevées", value: "846", target: "1 367 lancées", status: "progress", icon: "Building" },
      { key: "urbanization", label: "Urbanisation", value: "73,5 %", target: "↑ maîtrisée", status: "progress", icon: "Landmark" },
    ],
    timeSeries: [
      { year: 2000, tol: 5.6, railKm: 3800, housingBuilt: 550000, metroTram: 3 },
      { year: 2005, tol: 5.2, railKm: 3900, housingBuilt: 980000, metroTram: 3 },
      { year: 2010, tol: 4.9, railKm: 3950, housingBuilt: 1230000, metroTram: 3 },
      { year: 2015, tol: 4.8, railKm: 3800, housingBuilt: 1520418, metroTram: 3 },
      { year: 2019, tol: 4.6, railKm: 3982, housingBuilt: 1520418, metroTram: 4 },
      { year: 2022, tol: 4.4, railKm: 4200, housingBuilt: 1848881, metroTram: 6 },
      { year: 2024, tol: 4.1, railKm: 5500, housingBuilt: 1848881, metroTram: 8 },
      { year: 2026, tol: 4.1, railKm: 5738, housingBuilt: 1848881, metroTram: 8 },
    ],
  },
  {
    sdg: 17, title: "Partenariats", subtitle: "ODD 17",
    kpis: [
      { key: "debtService", label: "Service dette/exports", value: "6,8 %", target: "≤ 1,0 %", status: "progress", icon: "DollarSign" },
      { key: "publicRevenue", label: "Recettes publiques", value: "26,05 % PIB", target: "≥ 30 % PIB", status: "progress", icon: "Landmark" },
      { key: "ide", label: "IDE/RNB", value: "0,58 %", target: "≥ 2,0 %", status: "insufficient", icon: "Globe" },
      { key: "internetPenetration", label: "Internet population", value: "79,5 %", target: "≥ 90 %", status: "progress", icon: "Wifi" },
      { key: "unPartners", label: "Partenaires ONU", value: "15 agences", target: "↑", status: "progress", icon: "Handshake" },
      { key: "customsDuty", label: "Droits douane moyens", value: "5,9 %", target: "↓ régional", status: "progress", icon: "Receipt" },
    ],
    timeSeries: [
      { year: 2015, revenuePct: 33, debtService: 13.3, idePct: 1.02, internetPop: 38.2, inetFixM: 19, customsPct: 7.7, apdM: 135, partners: 11 },
      { year: 2018, revenuePct: 30, debtService: 10.5, idePct: 0.85, internetPop: 49.0, inetFixM: 25, customsPct: 7.0, apdM: 120, partners: 12 },
      { year: 2020, revenuePct: 26.21, debtService: 9.8, idePct: 0.77, internetPop: 60.0, inetFixM: 32, customsPct: 7.1, apdM: 110, partners: 13 },
      { year: 2022, revenuePct: 28.76, debtService: 8.2, idePct: 0.68, internetPop: 72.1, inetFixM: 39, customsPct: 6.5, apdM: 100, partners: 14 },
      { year: 2024, revenuePct: 26.05, debtService: 6.8, idePct: 0.58, internetPop: 76.0, inetFixM: 47, customsPct: 5.9, apdM: 95, partners: 15 },
      { year: 2025, revenuePct: 27.0, debtService: 6.0, idePct: 0.6, internetPop: 79.5, inetFixM: 52, customsPct: 5.5, apdM: 90, partners: 15 },
    ],
  },
];

export const sdgEnergyMix = [
  { source: "gaz", share: 96, color: "#64748b" },
  { source: "solaire", share: 2.5, color: "#f59e0b" },
  { source: "hydraulique", share: 0.4, color: "#3b82f6" },
  { source: "eolien", share: 0.1, color: "#06b6d4" },
  { source: "autresEnr", share: 0.3, color: "#22c55e" },
  { source: "fioul", share: 0.7, color: "#ef4444" },
];

export const sdgHousingPrograms = [
  { period: "2000-2004", built: 550000, label: "Pré-modernisation" },
  { period: "2005-2009", built: 980000, label: "Plan quinquennal" },
  { period: "2010-2014", built: 1230000, label: "Accélération AADL" },
  { period: "2015-2019", built: 1520418, label: "Programmes massifs" },
  { period: "2020-2024", built: 1848881, label: "Programme historique" },
];

export const sdgDesalination = [
  { year: 2020, stations: 11, capacity: 2.11, pctNorth: 30 },
  { year: 2022, stations: 13, capacity: 2.70, pctNorth: 40 },
  { year: 2024, stations: 17, capacity: 3.40, pctNorth: 55 },
  { year: 2025, stations: 19, capacity: 3.75, pctNorth: 60 },
  { year: 2030, stations: 25, capacity: 5.00, pctNorth: 75 },
];

export const sdgWaterReuse = [
  { year: 2019, volume: 20, usage: "Irrigation, espaces verts" },
  { year: 2021, volume: 45, usage: "Extension irrigation" },
  { year: 2023, volume: 85, usage: "Industrie ajoutée" },
  { year: 2024, volume: 111, usage: "Mix irrigation/industrie/EV" },
  { year: 2030, volume: 300, usage: "Économie circulaire de l'eau" },
];

export const sdgTelecoms = [
  { year: 2015, mobile: 43.0, inetMobile: 16.7, inetMobilePct: 41, coverage4G: 0, inetFix: 19, inetPop: 38.2 },
  { year: 2018, mobile: 47.2, inetMobile: 29.1, inetMobilePct: 68, coverage4G: 45, inetFix: 28, inetPop: 49.0 },
  { year: 2020, mobile: 49.5, inetMobile: 38.0, inetMobilePct: 85, coverage4G: 70, inetFix: 35, inetPop: 60.0 },
  { year: 2022, mobile: 51.5, inetMobile: 42.3, inetMobilePct: 94, coverage4G: 84, inetFix: 39, inetPop: 72.1 },
  { year: 2024, mobile: 54.5, inetMobile: 49.0, inetMobilePct: 105, coverage4G: 96, inetFix: 47, inetPop: 76.0 },
  { year: 2025, mobile: 54.9, inetMobile: 52.0, inetMobilePct: 110.6, coverage4G: 98, inetFix: 52, inetPop: 79.5 },
];

export const sdgInnovation = [
  { year: 2015, rdPct: 0.5, startups: 0, incubators: 20, universities: 100 },
  { year: 2020, rdPct: 0.6, startups: 300, incubators: 50, universities: 108 },
  { year: 2024, rdPct: 0.7, startups: 1800, incubators: 90, universities: 113 },
  { year: 2030, rdPct: 1.5, startups: 5000, incubators: 200, universities: 120 },
];

export const vnr2026Targets = [
  { target: "Transition énergétique", desc: "15 000 MW EnR à 2035", priority: "high" },
  { target: "Sécurisation hydrique", desc: "5 Mm³/jour dessalement à 2030", priority: "high" },
  { target: "Diversification éco.", desc: "Industrie manufact. 12 % PIB à 2030", priority: "high" },
  { target: "Inclusion jeunes/femmes", desc: "Doublement activité féminine (cible 25 %)", priority: "high" },
  { target: "Modernisation num.", desc: "E-gouvernance généralisée", priority: "medium" },
  { target: "Réduction chômage jeunes", desc: "Cible < 20 % à 2030", priority: "high" },
  { target: "Économie circulaire", desc: "300 Mm³/an réutilisation EU", priority: "medium" },
  { target: "Souveraineté sanitaire", desc: "Production pharmaceutique nationale", priority: "medium" },
  { target: "Souveraineté alimentaire", desc: "30 000 t aquacole à 2030", priority: "medium" },
  { target: "Intégration africaine", desc: "ZLECAf, TAH 2, réseau ferroviaire", priority: "medium" },
];

export const sdgFoodSecurity = [
  { year: 2015, wheatKg: 227, milkL: 167, milkCoverage: 55, aquaculture: 1327, undernourishment: 5.0 },
  { year: 2018, wheatKg: 240, milkL: 155, milkCoverage: 62, aquaculture: 3000, undernourishment: 4.5 },
  { year: 2020, wheatKg: 245, milkL: 148, milkCoverage: 65, aquaculture: 4000, undernourishment: 4.0 },
  { year: 2022, wheatKg: 255, milkL: 135, milkCoverage: 68, aquaculture: 5500, undernourishment: 3.5 },
  { year: 2024, wheatKg: 265, milkL: 127, milkCoverage: 71, aquaculture: 6935, undernourishment: 3.0 },
];

export const sdgEducation = [
  { year: 2015, primary: 97.1, secondary: 63.0, higher: 1.4, femaleHigher: 60.0, literacy: 80.2, preprimary: 48.0 },
  { year: 2018, primary: 98.5, secondary: 67.0, higher: 1.5, femaleHigher: 62.0, literacy: 82.0, preprimary: 55.0 },
  { year: 2020, primary: 99.0, secondary: 69.0, higher: 1.5, femaleHigher: 63.0, literacy: 83.0, preprimary: 52.0 },
  { year: 2022, primary: 99.5, secondary: 72.0, higher: 1.6, femaleHigher: 64.5, literacy: 84.0, preprimary: 58.0 },
  { year: 2024, primary: 100.0, secondary: 75.3, higher: 1.7, femaleHigher: 65.7, literacy: 85.1, preprimary: 63.3 },
];

export const sdgInequality = [
  { year: 2015, gini: 0.275, socialCoverage: 55.2, quintileShare: 8.1, remittanceCost: 8.1 },
  { year: 2018, gini: 0.28, socialCoverage: 59.0, quintileShare: 8.2, remittanceCost: 7.5 },
  { year: 2020, gini: 0.28, socialCoverage: 61.5, quintileShare: 8.3, remittanceCost: 7.0 },
  { year: 2022, gini: 0.28, socialCoverage: 64.0, quintileShare: 8.3, remittanceCost: 6.5 },
  { year: 2024, gini: 0.28, socialCoverage: 67.0, quintileShare: 8.4, remittanceCost: 5.9 },
];

export const sdgOceans = [
  { year: 2015, marineProtected: 5, aquaculture: 1327, fisheries: 95000, monitoringStations: 30, coastalPlans: 5 },
  { year: 2020, marineProtected: 10, aquaculture: 4000, fisheries: 98000, monitoringStations: 40, coastalPlans: 8 },
  { year: 2024, marineProtected: 15.15, aquaculture: 6935, fisheries: 105000, monitoringStations: 50, coastalPlans: 12 },
];

// ═══════════════════════════════════════════════════════════════════════════════
// WORLD BANK DATA — ALGERIA (Source: World Bank Open Data)
// Compared with ONS (Office National des Statistiques) where available
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Core macro comparison: WB vs ONS ────────────────────────────────────
export const worldBankGdpGrowth = [
  { year: 2015, wb: 3.8, ons: 3.6 },
  { year: 2016, wb: 3.3, ons: 3.2 },
  { year: 2017, wb: 1.4, ons: 1.6 },
  { year: 2018, wb: 2.1, ons: 2.2 },
  { year: 2019, wb: 0.8, ons: 0.9 },
  { year: 2020, wb: -5.1, ons: -4.9 },
  { year: 2021, wb: 3.4, ons: 3.6 },
  { year: 2022, wb: 3.4, ons: 3.1 },
  { year: 2023, wb: 2.4, ons: 2.5 },
  { year: 2024, wb: 2.9, ons: 3.1 },
];

export const worldBankGdpPerCapita = [
  { year: 2015, wb: 4200, ons: 4060 },
  { year: 2016, wb: 3900, ons: 3780 },
  { year: 2017, wb: 4070, ons: 3920 },
  { year: 2018, wb: 4300, ons: 4150 },
  { year: 2019, wb: 4050, ons: 3900 },
  { year: 2020, wb: 3330, ons: 3200 },
  { year: 2021, wb: 3750, ons: 3600 },
  { year: 2022, wb: 4250, ons: 4100 },
  { year: 2023, wb: 4560, ons: 4400 },
  { year: 2024, wb: 4780, ons: 4620 },
];

export const worldBankInflation = [
  { year: 2015, wb: 4.8, ons: 4.6 },
  { year: 2016, wb: 6.4, ons: 6.1 },
  { year: 2017, wb: 5.6, ons: 5.4 },
  { year: 2018, wb: 2.0, ons: 2.1 },
  { year: 2019, wb: 2.0, ons: 1.9 },
  { year: 2020, wb: 2.4, ons: 2.2 },
  { year: 2021, wb: 7.2, ons: 7.5 },
  { year: 2022, wb: 9.3, ons: 9.3 },
  { year: 2023, wb: 7.2, ons: 7.4 },
  { year: 2024, wb: 5.8, ons: 5.6 },
];

export const worldBankUnemployment = [
  { year: 2015, wb: 11.4, ons: 10.5 },
  { year: 2016, wb: 10.5, ons: 10.0 },
  { year: 2017, wb: 11.5, ons: 11.2 },
  { year: 2018, wb: 11.7, ons: 11.0 },
  { year: 2019, wb: 11.9, ons: 11.4 },
  { year: 2020, wb: 12.7, ons: 12.5 },
  { year: 2021, wb: 12.4, ons: 12.2 },
  { year: 2022, wb: 11.9, ons: 11.7 },
  { year: 2023, wb: 12.2, ons: 12.0 },
  { year: 2024, wb: 12.0, ons: 11.8 },
];

export const worldBankPopulation = [
  { year: 2015, wb: 39.7, ons: 39.5 },
  { year: 2016, wb: 40.4, ons: 40.2 },
  { year: 2017, wb: 41.1, ons: 40.9 },
  { year: 2018, wb: 41.9, ons: 41.7 },
  { year: 2019, wb: 42.6, ons: 42.4 },
  { year: 2020, wb: 43.3, ons: 43.1 },
  { year: 2021, wb: 44.0, ons: 43.9 },
  { year: 2022, wb: 44.7, ons: 44.6 },
  { year: 2023, wb: 45.4, ons: 45.3 },
  { year: 2024, wb: 46.2, ons: 46.0 },
];

// ─── World Bank exclusive KPIs (no ONS equivalent) ───────────────────────
export const worldBankGniPerCapita = [
  { year: 2015, gni: 4130 },
  { year: 2016, gni: 3840 },
  { year: 2017, gni: 4000 },
  { year: 2018, gni: 4220 },
  { year: 2019, gni: 3970 },
  { year: 2020, gni: 3270 },
  { year: 2021, gni: 3680 },
  { year: 2022, gni: 4180 },
  { year: 2023, gni: 4490 },
  { year: 2024, gni: 4700 },
];

export const worldBankTradeGdp = [
  { year: 2015, exports: 26.1, imports: 30.2, trade: 56.3 },
  { year: 2016, exports: 23.8, imports: 29.7, trade: 53.5 },
  { year: 2017, exports: 27.5, imports: 30.8, trade: 58.3 },
  { year: 2018, exports: 29.8, imports: 32.1, trade: 61.9 },
  { year: 2019, exports: 28.3, imports: 30.5, trade: 58.8 },
  { year: 2020, exports: 22.1, imports: 24.8, trade: 46.9 },
  { year: 2021, exports: 27.9, imports: 29.4, trade: 57.3 },
  { year: 2022, exports: 33.2, imports: 34.1, trade: 67.3 },
  { year: 2023, exports: 30.5, imports: 32.6, trade: 63.1 },
  { year: 2024, exports: 28.7, imports: 31.2, trade: 59.9 },
];

export const worldBankFdi = [
  { year: 2015, fdi: 1.2 },
  { year: 2016, fdi: 0.9 },
  { year: 2017, fdi: 1.4 },
  { year: 2018, fdi: 1.1 },
  { year: 2019, fdi: 1.0 },
  { year: 2020, fdi: 0.6 },
  { year: 2021, fdi: 0.8 },
  { year: 2022, fdi: 1.1 },
  { year: 2023, fdi: 1.3 },
  { year: 2024, fdi: 1.5 },
];

export const worldBankGrossCapital = [
  { year: 2015, gcf: 37.2, ons: 38.5 },
  { year: 2016, gcf: 35.8, ons: 37.1 },
  { year: 2017, gcf: 36.5, ons: 37.8 },
  { year: 2018, gcf: 38.1, ons: 39.2 },
  { year: 2019, gcf: 37.9, ons: 39.0 },
  { year: 2020, gcf: 33.2, ons: 34.5 },
  { year: 2021, gcf: 37.5, ons: 38.8 },
  { year: 2022, gcf: 39.8, ons: 41.0 },
  { year: 2023, gcf: 40.2, ons: 41.5 },
  { year: 2024, gcf: 41.0, ons: 42.2 },
];

export const worldBankExternalDebt = [
  { year: 2015, debt: 3.2 },
  { year: 2016, debt: 5.8 },
  { year: 2017, debt: 7.9 },
  { year: 2018, debt: 8.6 },
  { year: 2019, debt: 9.1 },
  { year: 2020, debt: 10.8 },
  { year: 2021, debt: 12.3 },
  { year: 2022, debt: 12.8 },
  { year: 2023, debt: 13.5 },
  { year: 2024, debt: 14.2 },
];

// ─── Social & Development WB indicators ────────────────────────────────
export const worldBankPoverty = [
  { year: 2015, poverty215: 0.5, poverty365: 3.6, povertyNational: 5.0 },
  { year: 2018, poverty215: 0.3, poverty365: 2.9, povertyNational: 4.2 },
  { year: 2019, poverty215: 0.4, poverty365: 3.2, povertyNational: 4.5 },
  { year: 2020, poverty215: 1.2, poverty365: 5.5, povertyNational: 7.8 },
  { year: 2021, poverty215: 0.8, poverty365: 4.3, povertyNational: 6.1 },
  { year: 2022, poverty215: 0.5, poverty365: 3.5, povertyNational: 5.0 },
  { year: 2023, poverty215: 0.4, poverty365: 3.0, povertyNational: 4.3 },
  { year: 2024, poverty215: 0.3, poverty365: 2.8, povertyNational: 4.0 },
];

export const worldBankLifeExpectancy = [
  { year: 2015, lifeExp: 76.5, male: 74.8, female: 78.3 },
  { year: 2016, lifeExp: 76.7, male: 75.0, female: 78.5 },
  { year: 2017, lifeExp: 76.9, male: 75.2, female: 78.7 },
  { year: 2018, lifeExp: 77.0, male: 75.3, female: 78.8 },
  { year: 2019, lifeExp: 77.1, male: 75.4, female: 78.9 },
  { year: 2020, lifeExp: 76.2, male: 74.3, female: 78.3 },
  { year: 2021, lifeExp: 76.5, male: 74.6, female: 78.6 },
  { year: 2022, lifeExp: 77.0, male: 75.2, female: 79.0 },
  { year: 2023, lifeExp: 77.3, male: 75.5, female: 79.3 },
  { year: 2024, lifeExp: 77.5, male: 75.7, female: 79.5 },
];

export const worldBankCo2Emissions = [
  { year: 2015, co2: 3.2 },
  { year: 2016, co2: 3.4 },
  { year: 2017, co2: 3.5 },
  { year: 2018, co2: 3.4 },
  { year: 2019, co2: 3.3 },
  { year: 2020, co2: 3.0 },
  { year: 2021, co2: 3.2 },
  { year: 2022, co2: 3.3 },
  { year: 2023, co2: 3.4 },
  { year: 2024, co2: 3.3 },
];

export const worldBankEnergyAccess = [
  { year: 2015, electricity: 99.7, renewable: 0.3 },
  { year: 2016, electricity: 99.8, renewable: 0.4 },
  { year: 2017, electricity: 99.8, renewable: 0.5 },
  { year: 2018, electricity: 99.9, renewable: 0.7 },
  { year: 2019, electricity: 99.9, renewable: 1.0 },
  { year: 2020, electricity: 100.0, renewable: 1.2 },
  { year: 2021, electricity: 100.0, renewable: 1.5 },
  { year: 2022, electricity: 100.0, renewable: 2.1 },
  { year: 2023, electricity: 100.0, renewable: 2.8 },
  { year: 2024, electricity: 100.0, renewable: 3.5 },
];

export const worldBankInternetUsers = [
  { year: 2015, internet: 42.9, mobile: 75.1, broadband: 10.2 },
  { year: 2016, internet: 45.2, mobile: 78.3, broadband: 12.1 },
  { year: 2017, internet: 49.8, mobile: 82.1, broadband: 14.8 },
  { year: 2018, internet: 53.2, mobile: 85.0, broadband: 17.5 },
  { year: 2019, internet: 57.2, mobile: 88.2, broadband: 20.3 },
  { year: 2020, internet: 64.0, mobile: 91.5, broadband: 23.8 },
  { year: 2021, internet: 71.0, mobile: 93.2, broadband: 27.5 },
  { year: 2022, internet: 75.5, mobile: 94.8, broadband: 30.2 },
  { year: 2023, internet: 79.3, mobile: 96.0, broadband: 33.5 },
  { year: 2024, internet: 83.5, mobile: 97.2, broadband: 37.0 },
];

export const worldBankEducationSpend = [
  { year: 2015, eduGdp: 5.8, healthGdp: 6.2 },
  { year: 2016, eduGdp: 6.0, healthGdp: 6.4 },
  { year: 2017, eduGdp: 6.2, healthGdp: 6.5 },
  { year: 2018, eduGdp: 6.1, healthGdp: 6.3 },
  { year: 2019, eduGdp: 5.9, healthGdp: 6.1 },
  { year: 2020, eduGdp: 6.5, healthGdp: 6.8 },
  { year: 2021, eduGdp: 6.3, healthGdp: 6.6 },
  { year: 2022, eduGdp: 6.0, healthGdp: 6.4 },
  { year: 2023, eduGdp: 5.8, healthGdp: 6.2 },
  { year: 2024, eduGdp: 5.7, healthGdp: 6.1 },
];

// ─── Deviation summary (for KPI cards) ──────────────────────────────────
export const worldBankKPIs = {
  gdpGrowthWb: 2.9,
  gdpGrowthOns: 3.1,
  gdpPerCapitaWb: 4780,
  gdpPerCapitaOns: 4620,
  inflationWb: 5.8,
  inflationOns: 5.6,
  unemploymentWb: 12.0,
  unemploymentOns: 11.8,
  populationWb: 46.2,
  populationOns: 46.0,
  gniPerCapita: 4700,
  tradeGdpPct: 59.9,
  fdiPct: 1.5,
  externalDebtPct: 14.2,
  lifeExpectancy: 77.5,
  povertyRate: 4.0,
  co2PerCapita: 3.3,
  electricityAccess: 100.0,
  renewableEnergy: 3.5,
  internetUsers: 83.5,
  eduSpendGdp: 5.7,
  healthSpendGdp: 6.1,
};

// ─── ONS vs WB deviation chart data ──────────────────────────────────────
export const worldBankDeviation = [
  { indicator: "Croissance PIB", wb: 2.9, ons: 3.1, diff: 0.2 },
  { indicator: "Inflation %", wb: 5.8, ons: 5.6, diff: -0.2 },
  { indicator: "Chomage %", wb: 12.0, ons: 11.8, diff: -0.2 },
  { indicator: "PIB/hab ($)", wb: 4780, ons: 4620, diff: -160 },
  { indicator: "Population (M)", wb: 46.2, ons: 46.0, diff: -0.2 },
  { indicator: "FBCF (% PIB)", wb: 41.0, ons: 42.2, diff: 1.2 },
];
