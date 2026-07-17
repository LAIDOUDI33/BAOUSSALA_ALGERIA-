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
export const wilayaData = [
  { wilaya: "Alger", code: 16, populationK: 3890, gdpShare: 15.2, unemployment: 8.5 },
  { wilaya: "Oran", code: 31, populationK: 1940, gdpShare: 7.8, unemployment: 9.2 },
  { wilaya: "Constantine", code: 25, populationK: 1220, gdpShare: 4.5, unemployment: 10.8 },
  { wilaya: "Annaba", code: 23, populationK: 640, gdpShare: 3.8, unemployment: 11.5 },
  { wilaya: "Blida", code: 9, populationK: 1090, gdpShare: 3.5, unemployment: 9.0 },
  { wilaya: "Sétif", code: 19, populationK: 1350, gdpShare: 3.2, unemployment: 12.0 },
  { wilaya: "Tizi Ouzou", code: 15, populationK: 1120, gdpShare: 3.0, unemployment: 13.5 },
  { wilaya: "Béjaïa", code: 6, populationK: 760, gdpShare: 2.8, unemployment: 14.2 },
  { wilaya: "Batna", code: 5, populationK: 1060, gdpShare: 2.2, unemployment: 12.8 },
  { wilaya: "Tlemcen", code: 13, populationK: 950, gdpShare: 2.0, unemployment: 11.0 },
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
  { year: 2000, oilProdMbpd: 1.42, gasProdBcm: 82, oilPrice: 28.5, hydroRevBn: 16.2, exportsBn: 17.5, gdpContribPct: 32.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2002, oilProdMbpd: 1.35, gasProdBcm: 85, oilPrice: 25.0, hydroRevBn: 15.8, exportsBn: 16.8, gdpContribPct: 33.5, reservesOilBn: 12.0, reservesGasTcm: 4.5 },
  { year: 2004, oilProdMbpd: 1.50, gasProdBcm: 88, oilPrice: 38.3, hydroRevBn: 25.5, exportsBn: 29.5, gdpContribPct: 35.0, reservesOilBn: 11.8, reservesGasTcm: 4.5 },
  { year: 2006, oilProdMbpd: 1.55, gasProdBcm: 90, oilPrice: 66.0, hydroRevBn: 42.0, exportsBn: 50.0, gdpContribPct: 36.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2008, oilProdMbpd: 1.38, gasProdBcm: 92, oilPrice: 97.0, hydroRevBn: 62.0, exportsBn: 72.0, gdpContribPct: 37.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2010, oilProdMbpd: 1.28, gasProdBcm: 93, oilPrice: 79.5, hydroRevBn: 43.0, exportsBn: 49.0, gdpContribPct: 33.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2012, oilProdMbpd: 1.22, gasProdBcm: 95, oilPrice: 109.0, hydroRevBn: 55.0, exportsBn: 63.0, gdpContribPct: 31.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2014, oilProdMbpd: 1.18, gasProdBcm: 96, oilPrice: 93.0, hydroRevBn: 48.0, exportsBn: 54.0, gdpContribPct: 28.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2015, oilProdMbpd: 1.12, gasProdBcm: 95, oilPrice: 49.0, hydroRevBn: 22.0, exportsBn: 26.0, gdpContribPct: 24.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2016, oilProdMbpd: 1.08, gasProdBcm: 94, oilPrice: 43.0, hydroRevBn: 16.5, exportsBn: 19.5, gdpContribPct: 22.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2017, oilProdMbpd: 1.05, gasProdBcm: 95, oilPrice: 52.0, hydroRevBn: 21.0, exportsBn: 26.0, gdpContribPct: 22.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2018, oilProdMbpd: 1.02, gasProdBcm: 96, oilPrice: 69.0, hydroRevBn: 28.0, exportsBn: 33.0, gdpContribPct: 23.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2019, oilProdMbpd: 1.00, gasProdBcm: 97, oilPrice: 63.0, hydroRevBn: 25.0, exportsBn: 30.0, gdpContribPct: 22.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2020, oilProdMbpd: 0.92, gasProdBcm: 92, oilPrice: 42.0, hydroRevBn: 17.0, exportsBn: 20.5, gdpContribPct: 19.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2021, oilProdMbpd: 0.98, gasProdBcm: 95, oilPrice: 68.0, hydroRevBn: 28.5, exportsBn: 34.0, gdpContribPct: 21.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2022, oilProdMbpd: 1.02, gasProdBcm: 100, oilPrice: 95.0, hydroRevBn: 43.0, exportsBn: 51.0, gdpContribPct: 24.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2023, oilProdMbpd: 1.00, gasProdBcm: 102, oilPrice: 78.0, hydroRevBn: 30.0, exportsBn: 36.0, gdpContribPct: 23.0, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
  { year: 2024, oilProdMbpd: 0.98, gasProdBcm: 105, oilPrice: 76.0, hydroRevBn: 33.0, exportsBn: 38.8, gdpContribPct: 23.5, reservesOilBn: 12.2, reservesGasTcm: 4.5 },
];

// ─── 19. AGRICULTURE SECTOR ─────────────────────────────────────────────
export const agricultureData = [
  { year: 2010, cerealProdMt: 4.5, vegProdMt: 8.2, fruitProdMt: 4.0, oliveProdMt: 0.35, dateProdMt: 0.82, milkProdMl: 2.2, meatProdMt: 1.35, agriExportsBn: 0.3, selfSufficCereals: 32, irrigatedLandMha: 1.2, totalLandMha: 8.5, agriEmployPct: 14.5 },
  { year: 2011, cerealProdMt: 4.2, vegProdMt: 8.5, fruitProdMt: 4.2, oliveProdMt: 0.40, dateProdMt: 0.85, milkProdMl: 2.3, meatProdMt: 1.38, agriExportsBn: 0.35, selfSufficCereals: 30, irrigatedLandMha: 1.25, totalLandMha: 8.5, agriEmployPct: 14.2 },
  { year: 2012, cerealProdMt: 5.1, vegProdMt: 8.8, fruitProdMt: 4.3, oliveProdMt: 0.45, dateProdMt: 0.88, milkProdMl: 2.4, meatProdMt: 1.42, agriExportsBn: 0.38, selfSufficCereals: 35, irrigatedLandMha: 1.3, totalLandMha: 8.6, agriEmployPct: 14.0 },
  { year: 2013, cerealProdMt: 4.8, vegProdMt: 9.0, fruitProdMt: 4.5, oliveProdMt: 0.50, dateProdMt: 0.90, milkProdMl: 2.5, meatProdMt: 1.45, agriExportsBn: 0.40, selfSufficCereals: 33, irrigatedLandMha: 1.35, totalLandMha: 8.6, agriEmployPct: 13.8 },
  { year: 2014, cerealProdMt: 3.9, vegProdMt: 9.2, fruitProdMt: 4.6, oliveProdMt: 0.55, dateProdMt: 0.92, milkProdMl: 2.6, meatProdMt: 1.48, agriExportsBn: 0.42, selfSufficCereals: 28, irrigatedLandMha: 1.4, totalLandMha: 8.7, agriEmployPct: 13.5 },
  { year: 2015, cerealProdMt: 4.1, vegProdMt: 9.5, fruitProdMt: 4.8, oliveProdMt: 0.60, dateProdMt: 0.95, milkProdMl: 2.7, meatProdMt: 1.50, agriExportsBn: 0.45, selfSufficCereals: 29, irrigatedLandMha: 1.45, totalLandMha: 8.7, agriEmployPct: 13.2 },
  { year: 2016, cerealProdMt: 3.5, vegProdMt: 9.8, fruitProdMt: 5.0, oliveProdMt: 0.65, dateProdMt: 0.98, milkProdMl: 2.8, meatProdMt: 1.52, agriExportsBn: 0.42, selfSufficCereals: 25, irrigatedLandMha: 1.5, totalLandMha: 8.8, agriEmployPct: 13.0 },
  { year: 2017, cerealProdMt: 3.8, vegProdMt: 10.0, fruitProdMt: 5.2, oliveProdMt: 0.70, dateProdMt: 1.00, milkProdMl: 2.9, meatProdMt: 1.55, agriExportsBn: 0.48, selfSufficCereals: 27, irrigatedLandMha: 1.55, totalLandMha: 8.8, agriEmployPct: 12.8 },
  { year: 2018, cerealProdMt: 5.5, vegProdMt: 10.2, fruitProdMt: 5.4, oliveProdMt: 0.80, dateProdMt: 1.02, milkProdMl: 3.0, meatProdMt: 1.58, agriExportsBn: 0.55, selfSufficCereals: 37, irrigatedLandMha: 1.6, totalLandMha: 8.9, agriEmployPct: 12.5 },
  { year: 2019, cerealProdMt: 6.1, vegProdMt: 10.5, fruitProdMt: 5.5, oliveProdMt: 0.90, dateProdMt: 1.05, milkProdMl: 3.1, meatProdMt: 1.60, agriExportsBn: 0.60, selfSufficCereals: 42, irrigatedLandMha: 1.65, totalLandMha: 8.9, agriEmployPct: 12.2 },
  { year: 2020, cerealProdMt: 5.2, vegProdMt: 10.8, fruitProdMt: 5.7, oliveProdMt: 0.85, dateProdMt: 1.08, milkProdMl: 3.2, meatProdMt: 1.62, agriExportsBn: 0.55, selfSufficCereals: 35, irrigatedLandMha: 1.7, totalLandMha: 9.0, agriEmployPct: 12.5 },
  { year: 2021, cerealProdMt: 4.3, vegProdMt: 11.0, fruitProdMt: 5.8, oliveProdMt: 0.95, dateProdMt: 1.10, milkProdMl: 3.3, meatProdMt: 1.65, agriExportsBn: 0.62, selfSufficCereals: 30, irrigatedLandMha: 1.75, totalLandMha: 9.0, agriEmployPct: 12.3 },
  { year: 2022, cerealProdMt: 4.6, vegProdMt: 11.2, fruitProdMt: 6.0, oliveProdMt: 1.00, dateProdMt: 1.12, milkProdMl: 3.5, meatProdMt: 1.68, agriExportsBn: 0.68, selfSufficCereals: 32, irrigatedLandMha: 1.8, totalLandMha: 9.0, agriEmployPct: 12.0 },
  { year: 2023, cerealProdMt: 5.8, vegProdMt: 11.5, fruitProdMt: 6.2, oliveProdMt: 1.10, dateProdMt: 1.15, milkProdMl: 3.6, meatProdMt: 1.70, agriExportsBn: 0.75, selfSufficCereals: 38, irrigatedLandMha: 1.85, totalLandMha: 9.1, agriEmployPct: 11.8 },
  { year: 2024, cerealProdMt: 5.0, vegProdMt: 11.8, fruitProdMt: 6.4, oliveProdMt: 1.20, dateProdMt: 1.18, milkProdMl: 3.8, meatProdMt: 1.72, agriExportsBn: 0.82, selfSufficCereals: 33, irrigatedLandMha: 1.9, totalLandMha: 9.1, agriEmployPct: 11.5 },
];

// ─── 20. MANUFACTURING SUB-SECTORS ──────────────────────────────────────
export const manufacturingData = [
  { year: 2010, foodIndustry: 105, textiles: 98, chemicals: 102, metallurgy: 100, electrics: 95, buildingMat: 108, pharma: 90, paper: 97, manufEmployK: 520, manufExportsBn: 2.8, capacityUtilPct: 68 },
  { year: 2012, foodIndustry: 108, textiles: 96, chemicals: 105, metallurgy: 102, electrics: 97, buildingMat: 112, pharma: 95, paper: 98, manufEmployK: 535, manufExportsBn: 3.1, capacityUtilPct: 70 },
  { year: 2014, foodIndustry: 110, textiles: 94, chemicals: 108, metallurgy: 104, electrics: 100, buildingMat: 110, pharma: 100, paper: 99, manufEmployK: 545, manufExportsBn: 3.3, capacityUtilPct: 72 },
  { year: 2016, foodIndustry: 106, textiles: 90, chemicals: 104, metallurgy: 100, electrics: 95, buildingMat: 105, pharma: 105, paper: 97, manufEmployK: 530, manufExportsBn: 2.9, capacityUtilPct: 65 },
  { year: 2018, foodIndustry: 108, textiles: 88, chemicals: 106, metallurgy: 102, electrics: 96, buildingMat: 108, pharma: 110, paper: 98, manufEmployK: 540, manufExportsBn: 3.2, capacityUtilPct: 67 },
  { year: 2020, foodIndustry: 100, textiles: 75, chemicals: 95, metallurgy: 90, electrics: 82, buildingMat: 95, pharma: 108, paper: 90, manufEmployK: 485, manufExportsBn: 2.4, capacityUtilPct: 52 },
  { year: 2021, foodIndustry: 103, textiles: 78, chemicals: 98, metallurgy: 93, electrics: 85, buildingMat: 100, pharma: 112, paper: 92, manufEmployK: 500, manufExportsBn: 2.7, capacityUtilPct: 58 },
  { year: 2022, foodIndustry: 107, textiles: 82, chemicals: 104, metallurgy: 98, electrics: 90, buildingMat: 108, pharma: 118, paper: 95, manufEmployK: 520, manufExportsBn: 3.5, capacityUtilPct: 65 },
  { year: 2023, foodIndustry: 108, textiles: 84, chemicals: 105, metallurgy: 100, electrics: 92, buildingMat: 110, pharma: 122, paper: 96, manufEmployK: 535, manufExportsBn: 3.8, capacityUtilPct: 68 },
  { year: 2024, foodIndustry: 110, textiles: 86, chemicals: 107, metallurgy: 102, electrics: 94, buildingMat: 112, pharma: 128, paper: 98, manufEmployK: 550, manufExportsBn: 4.2, capacityUtilPct: 70 },
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