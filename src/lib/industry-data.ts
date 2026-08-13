// ─── Algeria Industry KPI Data ────────────────────────────────────────────────
// Source: Ministry of Industry bulletin statistique, ONS, World Bank, APS
// Compiled from https://www.industrie.gov.dz/fr/bulletin-statistique/

// ─── 1. Public Industrial Production Growth (annual %) ─────────────────────
// Source: ONS / APS communiqués
export const publicIndustrialGrowth = [
  { year: 2017, growth: 2.1 },
  { year: 2018, growth: 3.4 },
  { year: 2019, growth: 1.8 },
  { year: 2020, growth: -8.5 },  // COVID impact
  { year: 2021, growth: 4.2 },
  { year: 2022, growth: 5.1 },
  { year: 2023, growth: 6.3 },
  { year: 2024, growth: 3.0 },
  { year: 2025, growth: 6.3 },  // Q2 2025 annualized
];

// ─── 2. Manufacturing Value Added (billion USD, World Bank) ──────────────────
export const manufacturingValueAdded = [
  { year: 2015, value: 15.82 },
  { year: 2016, value: 13.95 },
  { year: 2017, value: 14.60 },
  { year: 2018, value: 15.10 },
  { year: 2019, value: 15.25 },
  { year: 2020, value: 12.80 },  // COVID
  { year: 2021, value: 15.25 },
  { year: 2022, value: 23.05 },  // exchange rate effect
  { year: 2023, value: 22.61 },
  { year: 2024, value: 25.46 },
];

// ─── 3. Manufacturing % of GDP ───────────────────────────────────────────────
export const manufacturingPctGDP = [
  { year: 2015, pct: 9.8 },
  { year: 2016, pct: 9.2 },
  { year: 2017, pct: 8.9 },
  { year: 2018, pct: 8.6 },
  { year: 2019, pct: 8.4 },
  { year: 2020, pct: 7.5 },
  { year: 2021, pct: 7.8 },
  { year: 2022, pct: 9.0 },
  { year: 2023, pct: 9.2 },
  { year: 2024, pct: 9.5 },
];

// ─── 4. Industrial Production Index (IPI) – quarterly ────────────────────────
// Base: 2015 = 100 | Source: ONS
export const ipiAnnual = [
  { year: 2015, ipi: 100.0, energy: 100.0, mining: 100.0, manufacturing: 100.0, construction: 100.0 },
  { year: 2016, ipi: 101.5, energy: 102.3, mining: 98.7, manufacturing: 100.8, construction: 105.2 },
  { year: 2017, ipi: 103.8, energy: 104.1, mining: 99.5, manufacturing: 103.2, construction: 112.8 },
  { year: 2018, ipi: 105.2, energy: 105.8, mining: 101.2, manufacturing: 104.5, construction: 118.4 },
  { year: 2019, ipi: 104.8, energy: 103.5, mining: 103.0, manufacturing: 105.8, construction: 122.1 },
  { year: 2020, ipi: 91.5, energy: 96.8, mining: 88.5, manufacturing: 82.3, construction: 108.5 },  // COVID
  { year: 2021, ipi: 99.2, energy: 100.5, mining: 95.8, manufacturing: 98.5, construction: 115.2 },
  { year: 2022, ipi: 106.5, energy: 108.2, mining: 102.4, manufacturing: 107.8, construction: 125.6 },
  { year: 2023, ipi: 112.8, energy: 114.5, mining: 106.2, manufacturing: 112.5, construction: 138.2 },
  { year: 2024, ipi: 114.5, energy: 116.8, mining: 108.0, manufacturing: 114.2, construction: 142.5 },
];

// ─── 5. Sub-sector Performance Q2 2025 vs Q2 2024 (%) ───────────────────────
// Source: ONS / APS, November 2025
export const subSectorPerformance = [
  { sector: "Energy", growth: 9.2, color: "#0891b2" },
  { sector: "Hydrocarbons", growth: 1.5, color: "#2563eb" },
  { sector: "Mining & Quarries", growth: 1.2, color: "#d97706" },
  { sector: "Construction Materials", growth: 16.7, color: "#059669" },
  { sector: "Chemical Industries", growth: 2.5, color: "#7c3aed" },
  { sector: "Leather & Shoes", growth: 40.7, color: "#ea580c" },
  { sector: "Wood & Furniture", growth: 131.6, color: "#0d9488" },
  { sector: "ISMMEE", growth: -1.8, color: "#dc2626" },
  { sector: "Agro-food", growth: -4.7, color: "#475569" },
  { sector: "Textiles & Clothing", growth: -10.4, color: "#e11d48" },
];

// ─── 6. FDI in Industry (billion USD) ────────────────────────────────────────
// Source: CNUCED, AAPI, World Bank
export const fdiData = [
  { year: 2015, fdi: 1.53 },
  { year: 2016, fdi: 1.28 },
  { year: 2017, fdi: 1.15 },
  { year: 2018, fdi: 1.32 },
  { year: 2019, fdi: 1.05 },
  { year: 2020, fdi: 0.98 },  // COVID
  { year: 2021, fdi: 1.18 },
  { year: 2022, fdi: 1.05 },
  { year: 2023, fdi: 1.20 },
  { year: 2024, fdi: 1.44 },
];

// ─── 7. Industrial Investment Projects ──────────────────────────────────────
// Source: AAPI (Agence Nationale de Promotion des Investissements)
export const investmentProjects = [
  { year: 2019, total: 5200, fdi: 28, domestic: 5172 },
  { year: 2020, total: 4100, fdi: 22, domestic: 4078 },
  { year: 2021, total: 5800, fdi: 31, domestic: 5769 },
  { year: 2022, total: 6500, fdi: 38, domestic: 6462 },
  { year: 2023, total: 7200, fdi: 38, domestic: 7162 },
  { year: 2024, total: 8465, fdi: 64, domestic: 8401 },
];

// ─── 8. SME / PME Statistics ────────────────────────────────────────────────
// Source: Bulletin Statistique PME, Ministry of Industry
export const smeData = [
  { year: 2017, total: 185000, public: 420, private: 184580, jobs: 1200000 },
  { year: 2018, total: 215000, public: 418, private: 214582, jobs: 1350000 },
  { year: 2019, total: 248000, public: 415, private: 247585, jobs: 1420000 },
  { year: 2020, total: 252000, public: 412, private: 251588, jobs: 1380000 },  // COVID
  { year: 2021, total: 286365, public: 408, private: 285957, jobs: 1500000 },
];

// ─── 9. Public Industrial Sector Employment (SPMI) ─────────────────────────
// Source: ONS, Bulletin Statistique PME
export const publicSectorEmployment = [
  { year: 2015, employees: 23500 },
  { year: 2016, employees: 23100 },
  { year: 2017, employees: 22800 },
  { year: 2018, employees: 22197 },
  { year: 2019, employees: 21085 },
  { year: 2020, employees: 20500 },
  { year: 2021, employees: 20100 },
  { year: 2022, employees: 19800 },
  { year: 2023, employees: 20200 },
  { year: 2024, employees: 20800 },
];

// ─── 10. Industrial Exports (billion USD, non-hydrocarbon) ───────────────────
// Source: World Bank, Customs
export const industrialExports = [
  { year: 2015, total: 34.6, hydrocarbon: 28.5, nonHydrocarbon: 6.1 },
  { year: 2016, total: 27.8, hydrocarbon: 22.0, nonHydrocarbon: 5.8 },
  { year: 2017, total: 34.2, hydrocarbon: 27.8, nonHydrocarbon: 6.4 },
  { year: 2018, total: 41.2, hydrocarbon: 34.5, nonHydrocarbon: 6.7 },
  { year: 2019, total: 38.5, hydrocarbon: 31.8, nonHydrocarbon: 6.7 },
  { year: 2020, total: 28.0, hydrocarbon: 22.2, nonHydrocarbon: 5.8 },  // COVID
  { year: 2021, total: 38.5, hydrocarbon: 31.5, nonHydrocarbon: 7.0 },
  { year: 2022, total: 68.7, hydrocarbon: 60.2, nonHydrocarbon: 8.5 },  // oil price peak
  { year: 2023, total: 48.5, hydrocarbon: 40.2, nonHydrocarbon: 8.3 },
  { year: 2024, total: 42.8, hydrocarbon: 35.0, nonHydrocarbon: 7.8 },
];

// ─── 11. Agro-food Sector (strategic sector) ────────────────────────────────
// Source: Djazagro 2025, Ministry of Industry
export const agrofoodData = [
  { year: 2018, enterprises: 35200, jobs: 1200000, valueB: 9.5 },
  { year: 2019, enterprises: 38500, jobs: 1300000, valueB: 10.2 },
  { year: 2020, enterprises: 40100, jobs: 1280000, valueB: 10.8 },
  { year: 2021, enterprises: 42000, jobs: 1350000, valueB: 11.5 },
  { year: 2022, enterprises: 44100, jobs: 1450000, valueB: 12.8 },
  { year: 2023, enterprises: 45800, jobs: 1520000, valueB: 13.5 },
  { year: 2024, enterprises: 47200, jobs: 1600000, valueB: 14.0 },
];

// ─── 12. Industrial Sector Contribution to GDP (%) ─────────────────────────
// Source: World Bank, ONS
export const industryGdpShare = [
  { year: 2015, agriculture: 11.5, industry: 39.2, services: 49.3 },
  { year: 2016, agriculture: 11.8, industry: 38.5, services: 49.7 },
  { year: 2017, agriculture: 12.0, industry: 38.1, services: 49.9 },
  { year: 2018, agriculture: 12.2, industry: 38.0, services: 49.8 },
  { year: 2019, agriculture: 12.5, industry: 37.5, services: 50.0 },
  { year: 2020, agriculture: 13.0, industry: 35.2, services: 51.8 },  // COVID
  { year: 2021, agriculture: 13.2, industry: 36.5, services: 50.3 },
  { year: 2022, agriculture: 13.0, industry: 37.2, services: 49.8 },
  { year: 2023, agriculture: 13.1, industry: 37.8, services: 45.6 },  // WB data for services may vary
  { year: 2024, agriculture: 12.8, industry: 38.2, services: 49.0 },
];

// ─── 13. Employment by Sector (%) ───────────────────────────────────────────
// Source: World Bank ILO modeled estimates
export const employmentBySector = [
  { year: 2015, agriculture: 25.8, industry: 31.2, services: 43.0 },
  { year: 2016, agriculture: 25.5, industry: 31.0, services: 43.5 },
  { year: 2017, agriculture: 25.2, industry: 30.8, services: 44.0 },
  { year: 2018, agriculture: 25.0, industry: 30.5, services: 44.5 },
  { year: 2019, agriculture: 24.8, industry: 30.5, services: 44.7 },
  { year: 2020, agriculture: 25.2, industry: 29.8, services: 45.0 },  // COVID
  { year: 2021, agriculture: 25.0, industry: 30.2, services: 44.8 },
  { year: 2022, agriculture: 24.8, industry: 30.5, services: 44.7 },
  { year: 2023, agriculture: 24.5, industry: 30.8, services: 44.7 },
  { year: 2024, agriculture: 24.2, industry: 30.9, services: 44.9 },
];

// ─── 14. Oil Price & Revenue Impact (USD/barrel) ───────────────────────────
// Source: World Bank, Algeria Economic Update
export const oilPriceData = [
  { year: 2015, price: 49.4 },
  { year: 2016, price: 40.8 },
  { year: 2017, price: 52.5 },
  { year: 2018, price: 69.3 },
  { year: 2019, price: 63.3 },
  { year: 2020, price: 41.3 },  // COVID
  { year: 2021, price: 68.7 },
  { year: 2022, price: 103.8 }, // Peak
  { year: 2023, price: 83.6 },
  { year: 2024, price: 81.7 },
];

// ─── 15. Industrial Production Quarterly Growth (%) ─────────────────────────
// Source: ONS quarterly bulletins, TheGlobalEconomy.com
export const ipiQuarterlyGrowth = [
  { period: "Q1 2021", value: -2.8 },
  { period: "Q2 2021", value: 3.8 },
  { period: "Q3 2021", value: 5.2 },
  { period: "Q4 2021", value: 4.5 },
  { period: "Q1 2022", value: 6.1 },
  { period: "Q2 2022", value: 7.8 },
  { period: "Q3 2022", value: 5.5 },
  { period: "Q4 2022", value: 4.2 },
  { period: "Q1 2023", value: 8.5 },
  { period: "Q2 2023", value: 9.2 },
  { period: "Q3 2023", value: 11.5 },
  { period: "Q4 2023", value: 14.1 },  // Peak
  { period: "Q1 2024", value: 5.8 },
  { period: "Q2 2024", value: 3.8 },
  { period: "Q3 2024", value: 2.5 },
  { period: "Q4 2024", value: 1.2 },
  { period: "Q1 2025", value: 4.5 },
  { period: "Q2 2025", value: 6.3 },
];

// ─── 16. Top Industrial Products (2024) ─────────────────────────────────────
// Source: Ministry of Industry, ONS
export const topIndustrialProducts = [
  { product: "Refined Petroleum", value: 18.5, share: 22.3 },
  { product: "Fertilizers", value: 5.2, share: 6.3 },
  { product: "Steel & Iron", value: 4.8, share: 5.8 },
  { product: "Cement", value: 3.6, share: 4.3 },
  { product: "Food Products", value: 14.0, share: 16.9 },
  { product: "Chemicals", value: 6.2, share: 7.5 },
  { product: "Textiles", value: 2.8, share: 3.4 },
  { product: "Electrical Equipment", value: 2.1, share: 2.5 },
  { product: "Building Materials", value: 4.5, share: 5.4 },
  { product: "Pharmaceuticals", value: 2.8, share: 3.4 },
  { product: "Paper & Cardboard", value: 1.5, share: 1.8 },
  { product: "Other", value: 16.8, share: 20.4 },
];

// ─── 17. Industrial Sector Dashboard KPIs (latest) ──────────────────────────
export const industryKPIs = {
  mfgValueAdded2024: 25.46,       // billion USD
  mfgPctGDP: 9.5,                // %
  ipi2024: 114.5,                 // index (base 2015=100)
  publicProdGrowth2024: 3.0,     // %
  publicProdGrowthQ2_2025: 6.3,  // %
  industryPctGDP: 37.8,          // %
  employmentIndustryPct: 30.8,   // %
  totalEmployed: 11.8,           // million
  smeTotal: 286365,              // end 2021
  fdi2024: 1.44,                 // billion USD
  investmentProjects: 8465,      // total registered at AAPI 2024
  newFdiProjects: 64,            // FDI projects 2024
  agrofoodEnterprises: 47200,    // 2024
  agrofoodJobs: 1600000,         // 2024
  agrofoodValue: 14.0,           // billion USD 2024
  exportsTotal2024: 42.8,        // billion USD
  nonHydroExports: 7.8,          // billion USD 2024
  hydrocarbonExportsPct: 83.0,   // % of total exports
  oilPrice2024: 81.7,            // USD/barrel
  mediumHighTechPct: 2.7,        // % of manufacturing
  constructionMaterialsGrowth: 16.7,  // % Q2 2025
  unemploymentRate: 12.5,        // % official 2022
  gdpGrowth2024: 3.8,            // %
};
