// ═══════════════════════════════════════════════════════════════════════════════
// ONS DASHBOARD — TRILINGUAL DICTIONARIES (FR / AR / EN)
// ═══════════════════════════════════════════════════════════════════════════════

export type Locale = "fr" | "ar" | "en";

export interface Dictionary {
  // Header
  headerTitle: string;
  headerSubtitle: string;

  // Tabs
  tabMacro: string;
  tabInflation: string;
  tabTrade: string;
  tabIndustry: string;
  tabLabor: string;
  tabSocial: string;
  tabFiscal: string;
  tabRegional: string;

  // ─── MACRO ─────────────────────────────────────────────────────────
  kpiGdpGrowth: string;
  kpiGdp2024: string;
  kpiInflation: string;
  kpiUnemployment: string;
  kpiPopulation: string;
  kpiInvestmentRate: string;

  chartGdpGrowth: string;
  chartGdpGrowthSub: string;
  chartGdpBnUsd: string;
  chartGrowthPct: string;

  chartGdpSector: string;
  chartGdpSectorSub: string;
  sectorAgriculture: string;
  sectorIndustry: string;
  sectorConstruction: string;
  sectorServices: string;

  chartQuarterlyGdp: string;
  chartQuarterlyGdpSub: string;

  chartGdpPerCapita: string;
  chartGdpPerCapitaSub: string;
  chartGdpCapita: string;

  // ─── INFLATION ─────────────────────────────────────────────────────
  kpiCpi: string;
  kpiYoyInflation: string;
  kpiFoodInflation: string;
  kpiCoreInflation: string;

  chartCpiMonthly: string;
  chartCpiMonthlySub: string;
  chartInflationYoy: string;
  chartFoodYoy: string;
  chartCoreYoy: string;
  legendTotalYoy: string;
  legendFoodYoy: string;
  legendCoreYoy: string;

  chartCpiLevel: string;
  chartCpiLevelSub: string;
  chartIpcIndex: string;

  chartCpiDivision: string;
  chartCpiDivisionSub: string;

  chartCpiWeights: string;
  chartCpiWeightsSub: string;

  chartIppi: string;
  chartIppiSub: string;
  sectorMining: string;
  sectorManufacturing: string;
  sectorEnergy: string;

  // ─── TRADE ─────────────────────────────────────────────────────────
  kpiExports: string;
  kpiImports: string;
  kpiTradeBalance: string;
  kpiHydroPct: string;

  chartTradeAnnual: string;
  chartTradeAnnualSub: string;
  chartExports: string;
  chartImports: string;
  chartBalance: string;

  chartHydroShare: string;
  chartHydroShareSub: string;
  chartHydroPct: string;

  chartTradeQuarterly: string;
  chartTradeQuarterlySub: string;

  chartTradePartners: string;
  chartTradePartnersSub: string;

  // ─── INDUSTRY ──────────────────────────────────────────────────────
  kpiIpi: string;
  kpiMining: string;
  kpiManufacturing: string;
  kpiEnergy: string;

  chartIpi: string;
  chartIpiSub: string;
  chartIpiTotal: string;

  chartIpiIppi: string;
  chartIpiIppiSub: string;
  chartIpiProd: string;
  chartIppiPrices: string;

  chartConstruction: string;
  chartConstructionSub: string;
  chartConstructionIdx: string;

  // ─── LABOR ─────────────────────────────────────────────────────────
  kpiUnempRate: string;
  kpiActivityRate: string;
  kpiYouthUnemp: string;
  kpiFemalePartic: string;
  kpiInformal: string;
  kpiEmpPop: string;

  chartUnempRate: string;
  chartUnempRateSub: string;
  chartTotalPct: string;
  chartYouthPct: string;

  chartActivityFemale: string;
  chartActivityFemaleSub: string;
  chartActRate: string;
  chartFemPartic: string;
  chartInformalPct: string;

  chartEmpPop: string;
  chartEmpPopSub: string;
  chartEmpPopPct: string;

  // ─── SOCIAL ────────────────────────────────────────────────────────
  kpiPop: string;
  kpiGrowthRate: string;
  kpiUrbanization: string;
  kpiFertility: string;

  chartPopGrowth: string;
  chartPopGrowthSub: string;
  chartPopulationM: string;

  chartPopPyramid: string;
  chartPopPyramidSub: string;
  chartMale: string;
  chartFemale: string;

  chartDemographic: string;
  chartDemographicSub: string;
  chartBirthRate: string;
  chartDeathRate: string;
  chartFertilityRate: string;

  chartEducation: string;
  chartEducationSub: string;
  chartPrimary: string;
  chartSecondary: string;
  chartHigher: string;

  chartLiteracy: string;
  chartLiteracySub: string;
  chartLiteracyRate: string;
  chartPrimaryNet: string;
  chartSecondaryNet: string;
  chartHigherGross: string;

  // ─── FISCAL ────────────────────────────────────────────────────────
  kpiSavings: string;
  kpiInvest: string;
  kpiDebt: string;
  kpiFiscalDeficit: string;

  chartFiscal: string;
  chartFiscalSub: string;
  chartRevenue: string;
  chartExpenditure: string;
  chartDeficit: string;

  chartSavingsInvest: string;
  chartSavingsInvestSub: string;
  chartSavingsRate: string;
  chartInvestRate: string;

  chartDebt: string;
  chartDebtSub: string;
  chartDebtGdp: string;

  // ─── REGIONAL ──────────────────────────────────────────────────────
  chartWilayaGdp: string;
  chartWilayaGdpSub: string;
  chartGdpShare: string;

  chartWilayaUnemp: string;
  chartWilayaUnempSub: string;
  chartUnempPct: string;

  chartScatter: string;
  chartScatterSub: string;
  chartPopK: string;
  chartGdpShareLabel: string;
  chartPopThousands: string;
  chartUnempPctLabel: string;

  // ─── FOOTER ────────────────────────────────────────────────────────
  footer: string;
}

// ─── ENGLISH ──────────────────────────────────────────────────────────────────
const en: Dictionary = {
  headerTitle: "Algeria Economic Dashboard",
  headerSubtitle: "Office National des Statistiques (ONS) — Data Science Analysis Platform",

  tabMacro: "Macroeconomic",
  tabInflation: "Prices & Inflation",
  tabTrade: "Trade & Balance",
  tabIndustry: "Industrial Production",
  tabLabor: "Labor Market",
  tabSocial: "Demographics & Social",
  tabFiscal: "Fiscal & Savings",
  tabRegional: "Regional",

  kpiGdpGrowth: "GDP Growth",
  kpiGdp2024: "GDP (2024)",
  kpiInflation: "Inflation",
  kpiUnemployment: "Unemployment",
  kpiPopulation: "Population",
  kpiInvestmentRate: "Investment Rate",

  chartGdpGrowth: "GDP & Growth Rate (2000–2024)",
  chartGdpGrowthSub: "Billion USD and annual growth %",
  chartGdpBnUsd: "GDP (bn USD)",
  chartGrowthPct: "Growth %",

  chartGdpSector: "GDP by Sector (% Contribution)",
  chartGdpSectorSub: "Agriculture, Industry, Construction, Services",
  sectorAgriculture: "Agriculture",
  sectorIndustry: "Industry",
  sectorConstruction: "Construction",
  sectorServices: "Services",

  chartQuarterlyGdp: "Quarterly GDP Growth (2020–2025)",
  chartQuarterlyGdpSub: "QoQ growth rate %",
  chartGdpPerCapita: "GDP per Capita (2000–2024)",
  chartGdpPerCapitaSub: "Current USD",
  chartGdpCapita: "GDP/capita (USD)",

  kpiCpi: "CPI (Apr 2026)",
  kpiYoyInflation: "YoY Inflation",
  kpiFoodInflation: "Food Inflation",
  kpiCoreInflation: "Core Inflation",

  chartCpiMonthly: "Consumer Price Index — Monthly (2020–2026)",
  chartCpiMonthlySub: "Year-over-year inflation %",
  chartInflationYoy: "Inflation YoY %",
  chartFoodYoy: "Food YoY %",
  chartCoreYoy: "Core YoY %",
  legendTotalYoy: "Total YoY",
  legendFoodYoy: "Food YoY",
  legendCoreYoy: "Core YoY",

  chartCpiLevel: "CPI Index Level (2020–2026)",
  chartCpiLevelSub: "Base year implied index",
  chartIpcIndex: "CPI Index",

  chartCpiDivision: "Inflation by COICOP Division (2024)",
  chartCpiDivisionSub: "Year-over-year change by product group",

  chartCpiWeights: "CPI Basket Weights by Division",
  chartCpiWeightsSub: "Share in consumer basket",

  chartIppi: "Producer Price Index (IPPI) — Quarterly (2020–2025)",
  chartIppiSub: "Mining, Manufacturing, Energy",
  sectorMining: "Mining",
  sectorManufacturing: "Manufacturing",
  sectorEnergy: "Energy",

  kpiExports: "Exports (2024)",
  kpiImports: "Imports (2024)",
  kpiTradeBalance: "Trade Balance",
  kpiHydroPct: "Hydrocarbon % Exports",

  chartTradeAnnual: "External Trade (2000–2024)",
  chartTradeAnnualSub: "Exports, Imports, Balance — Billion USD",
  chartExports: "Exports",
  chartImports: "Imports",
  chartBalance: "Balance",

  chartHydroShare: "Hydrocarbon Share of Exports",
  chartHydroShareSub: "% of total export value",
  chartHydroPct: "Hydrocarbon %",

  chartTradeQuarterly: "Quarterly Trade Balance (2023–2025)",
  chartTradeQuarterlySub: "Billion USD",

  chartTradePartners: "Top Trade Partners (2024)",
  chartTradePartnersSub: "Exports vs Imports by country",

  kpiIpi: "IPI (Q2 2025)",
  kpiMining: "Mining",
  kpiManufacturing: "Manufacturing",
  kpiEnergy: "Energy",

  chartIpi: "Industrial Production Index (2020–2025)",
  chartIpiSub: "Mining, Manufacturing, Energy — Base 100 = 2019",
  chartIpiTotal: "IPI Total",

  chartIpiIppi: "IPI vs IPPI Comparison (2020–2025)",
  chartIpiIppiSub: "Industrial Production vs Producer Prices",
  chartIpiProd: "IPI (Production)",
  chartIppiPrices: "IPPI (Prices)",

  chartConstruction: "Construction Cost Index (2015–2024)",
  chartConstructionSub: "Base 100 = 2014",
  chartConstructionIdx: "Construction Index",

  kpiUnempRate: "Unemployment",
  kpiActivityRate: "Activity Rate",
  kpiYouthUnemp: "Youth Unemp.",
  kpiFemalePartic: "Female Partic.",
  kpiInformal: "Informal Sector",
  kpiEmpPop: "Employment/Pop",

  chartUnempRate: "Unemployment Rate (2010–2024)",
  chartUnempRateSub: "Total and youth (15-24) unemployment %",
  chartTotalPct: "Total %",
  chartYouthPct: "Youth (15-24) %",

  chartActivityFemale: "Activity Rate & Female Participation",
  chartActivityFemaleSub: "% of working-age population",
  chartActRate: "Activity Rate",
  chartFemPartic: "Female Partic.",
  chartInformalPct: "Informal %",

  chartEmpPop: "Employment-to-Population Ratio (2010–2024)",
  chartEmpPopSub: "% of total population employed",
  chartEmpPopPct: "Emp/Pop %",

  kpiPop: "Population",
  kpiGrowthRate: "Growth Rate",
  kpiUrbanization: "Urbanization",
  kpiFertility: "Fertility Rate",

  chartPopGrowth: "Population Growth (2000–2024)",
  chartPopGrowthSub: "Millions of inhabitants",
  chartPopulationM: "Population (M)",

  chartPopPyramid: "Population Pyramid (2024)",
  chartPopPyramidSub: "By age group — Millions",
  chartMale: "Male (M)",
  chartFemale: "Female (M)",

  chartDemographic: "Demographic Transition Indicators",
  chartDemographicSub: "Birth rate, death rate, fertility rate",
  chartBirthRate: "Birth Rate",
  chartDeathRate: "Death Rate",
  chartFertilityRate: "Fertility Rate",

  chartEducation: "Education Enrollment (2015–2024)",
  chartEducationSub: "Millions of students",
  chartPrimary: "Primary",
  chartSecondary: "Secondary",
  chartHigher: "Higher",

  chartLiteracy: "Literacy Rate & Net Enrollment (2015–2024)",
  chartLiteracySub: "Literacy %, Primary and Secondary net enrollment rates",
  chartLiteracyRate: "Literacy Rate %",
  chartPrimaryNet: "Primary Net %",
  chartSecondaryNet: "Secondary Net %",
  chartHigherGross: "Higher Gross %",

  kpiSavings: "Savings Rate",
  kpiInvest: "Investment Rate",
  kpiDebt: "Debt/GDP",
  kpiFiscalDeficit: "Fiscal Deficit",

  chartFiscal: "Fiscal Balance (% of GDP)",
  chartFiscalSub: "Revenue, Expenditure, Deficit",
  chartRevenue: "Revenue",
  chartExpenditure: "Expenditure",
  chartDeficit: "Deficit",

  chartSavingsInvest: "Savings vs Investment Rate",
  chartSavingsInvestSub: "% of GDP",
  chartSavingsRate: "Savings Rate",
  chartInvestRate: "Investment Rate",

  chartDebt: "Public Debt to GDP Ratio (2010–2024)",
  chartDebtSub: "% of GDP",
  chartDebtGdp: "Debt/GDP %",

  chartWilayaGdp: "Top 10 Wilayas by GDP Share (2023)",
  chartWilayaGdpSub: "Contribution to national GDP",
  chartGdpShare: "GDP Share %",

  chartWilayaUnemp: "Unemployment Rate by Wilaya (2023)",
  chartWilayaUnempSub: "Top 10 wilayas",
  chartUnempPct: "Unemployment %",

  chartScatter: "Population vs GDP Scatter (2023)",
  chartScatterSub: "Top 10 wilayas — bubble size = unemployment rate",
  chartPopK: "Population (K)",
  chartGdpShareLabel: "GDP Share %",
  chartPopThousands: "Population (thousands)",
  chartUnempPctLabel: "Unemployment %",

  footer: "Source: Office National des Statistiques (ONS) — www.ons.dz | All data from ONS publications (IPC, IPI, IPPI, CNT, Commerce Ext\u00e9rieur, Comptes Economiques, ENEM, RGPH)",
};

// ─── FRENCH ───────────────────────────────────────────────────────────────────
const fr: Dictionary = {
  headerTitle: "Tableau de Bord \u00c9conomique de l'Alg\u00e9rie",
  headerSubtitle: "Office National des Statistiques (ONS) — Plateforme d'Analyse de Donn\u00e9es",

  tabMacro: "Macro\u00e9conomie",
  tabInflation: "Prix & Inflation",
  tabTrade: "Commerce Ext\u00e9rieur",
  tabIndustry: "Production Industrielle",
  tabLabor: "March\u00e9 du Travail",
  tabSocial: "D\u00e9mographie & Social",
  tabFiscal: "Finances & \u00c9pargne",
  tabRegional: "R\u00e9gional",

  kpiGdpGrowth: "Croissance du PIB",
  kpiGdp2024: "PIB (2024)",
  kpiInflation: "Inflation",
  kpiUnemployment: "Ch\u00f4mage",
  kpiPopulation: "Population",
  kpiInvestmentRate: "Taux d'Investissement",

  chartGdpGrowth: "PIB et Taux de Croissance (2000\u20132024)",
  chartGdpGrowthSub: "Milliards USD et taux de croissance annuel %",
  chartGdpBnUsd: "PIB (Mds USD)",
  chartGrowthPct: "Croissance %",

  chartGdpSector: "PIB par Secteur (% de Contribution)",
  chartGdpSectorSub: "Agriculture, Industrie, BTP, Services",
  sectorAgriculture: "Agriculture",
  sectorIndustry: "Industrie",
  sectorConstruction: "BTP",
  sectorServices: "Services",

  chartQuarterlyGdp: "Croissance Trimestrielle du PIB (2020\u20132025)",
  chartQuarterlyGdpSub: "Taux de croissance trimestriel %",
  chartGdpPerCapita: "PIB par Habitant (2000\u20132024)",
  chartGdpPerCapitaSub: "USD courants",
  chartGdpCapita: "PIB/habitant (USD)",

  kpiCpi: "IPC (Avr 2026)",
  kpiYoyInflation: "Inflation glissante",
  kpiFoodInflation: "Inflation Alimentaire",
  kpiCoreInflation: "Inflation Sous-jacente",

  chartCpiMonthly: "Indice des Prix \u00e0 la Consommation \u2014 Mensuel (2020\u20132026)",
  chartCpiMonthlySub: "Inflation annuelle %",
  chartInflationYoy: "Inflation annuelle %",
  chartFoodYoy: "Alimentaire annuel %",
  chartCoreYoy: "Sous-jacente annuelle %",
  legendTotalYoy: "Total annuel",
  legendFoodYoy: "Alimentaire",
  legendCoreYoy: "Sous-jacente",

  chartCpiLevel: "Niveau de l'IPC (2020\u20132026)",
  chartCpiLevelSub: "Indice implicite ann\u00e9e de base",
  chartIpcIndex: "Indice IPC",

  chartCpiDivision: "Inflation par Division COICOP (2024)",
  chartCpiDivisionSub: "Variation annuelle par groupe de produits",

  chartCpiWeights: "Pond\u00e9rations du Panier IPC par Division",
  chartCpiWeightsSub: "Part dans le panier de consommation",

  chartIppi: "Indice des Prix \u00e0 la Production Industrielle (IPPI) \u2014 Trimestriel (2020\u20132025)",
  chartIppiSub: "Mines, Manufacture, \u00c9nergie",
  sectorMining: "Mines",
  sectorManufacturing: "Manufacture",
  sectorEnergy: "\u00c9nergie",

  kpiExports: "Exportations (2024)",
  kpiImports: "Importations (2024)",
  kpiTradeBalance: "Balance Commerciale",
  kpiHydroPct: "Part Hydrocarbures",

  chartTradeAnnual: "Commerce Ext\u00e9rieur (2000\u20132024)",
  chartTradeAnnualSub: "Exportations, Importations, Solde \u2014 Milliards USD",
  chartExports: "Exportations",
  chartImports: "Importations",
  chartBalance: "Solde",

  chartHydroShare: "Part des Hydrocarbures dans les Exportations",
  chartHydroShareSub: "% de la valeur totale des exportations",
  chartHydroPct: "Hydrocarbures %",

  chartTradeQuarterly: "Balance Commerciale Trimestrielle (2023\u20132025)",
  chartTradeQuarterlySub: "Milliards USD",

  chartTradePartners: "Principaux Partenaires Commerciaux (2024)",
  chartTradePartnersSub: "Exportations vs Importations par pays",

  kpiIpi: "IPI (T2 2025)",
  kpiMining: "Mines",
  kpiManufacturing: "Manufacture",
  kpiEnergy: "\u00c9nergie",

  chartIpi: "Indice de la Production Industrielle (2020\u20132025)",
  chartIpiSub: "Mines, Manufacture, \u00c9nergie \u2014 Base 100 = 2019",
  chartIpiTotal: "IPI Total",

  chartIpiIppi: "Comparaison IPI vs IPPI (2020\u20132025)",
  chartIpiIppiSub: "Production industrielle vs Prix \u00e0 la production",
  chartIpiProd: "IPI (Production)",
  chartIppiPrices: "IPPI (Prix)",

  chartConstruction: "Indice du Co\u00fbt de la Construction (2015\u20132024)",
  chartConstructionSub: "Base 100 = 2014",
  chartConstructionIdx: "Indice Construction",

  kpiUnempRate: "Taux de Ch\u00f4mage",
  kpiActivityRate: "Taux d'Activit\u00e9",
  kpiYouthUnemp: "Ch\u00f4mage Jeunes",
  kpiFemalePartic: "Part. F\u00e9minine",
  kpiInformal: "Secteur Informel",
  kpiEmpPop: "Emploi/Pop.",

  chartUnempRate: "Taux de Ch\u00f4mage (2010\u20132024)",
  chartUnempRateSub: "Ch\u00f4mage global et jeunes (15-24 ans) %",
  chartTotalPct: "Global %",
  chartYouthPct: "Jeunes (15-24) %",

  chartActivityFemale: "Taux d'Activit\u00e9 et Participation F\u00e9minine",
  chartActivityFemaleSub: "% de la population en \u00e2ge de travailler",
  chartActRate: "Taux d'Activit\u00e9",
  chartFemPartic: "Part. F\u00e9minine",
  chartInformalPct: "Informel %",

  chartEmpPop: "Taux d'Emploi par Rapport \u00e0 la Population (2010\u20132024)",
  chartEmpPopSub: "% de la population totale employ\u00e9e",
  chartEmpPopPct: "Emploi/Pop. %",

  kpiPop: "Population",
  kpiGrowthRate: "Taux de Croissance",
  kpiUrbanization: "Urbanisation",
  kpiFertility: "Indice de F\u00e9condit\u00e9",

  chartPopGrowth: "\u00c9volution de la Population (2000\u20132024)",
  chartPopGrowthSub: "Millions d'habitants",
  chartPopulationM: "Population (M)",

  chartPopPyramid: "Pyramide des \u00c2ges (2024)",
  chartPopPyramidSub: "Par groupe d'\u00e2ge \u2014 Millions",
  chartMale: "Hommes (M)",
  chartFemale: "Femmes (M)",

  chartDemographic: "Indicateurs de Transition D\u00e9mographique",
  chartDemographicSub: "Taux de natalit\u00e9, mortalit\u00e9, f\u00e9condit\u00e9",
  chartBirthRate: "Taux de Natalit\u00e9",
  chartDeathRate: "Taux de Mortalit\u00e9",
  chartFertilityRate: "Indice de F\u00e9condit\u00e9",

  chartEducation: "Effectifs Scolaires (2015\u20132024)",
  chartEducationSub: "Millions d'\u00e9l\u00e8ves et \u00e9tudiants",
  chartPrimary: "Primaire",
  chartSecondary: "Secondaire",
  chartHigher: "Sup\u00e9rieur",

  chartLiteracy: "Taux d'Alphab\u00e9tisme et Taux de Scolarisation (2015\u20132024)",
  chartLiteracySub: "Alphab\u00e9tisme %, taux nets primaire et secondaire",
  chartLiteracyRate: "Alphab\u00e9tisme %",
  chartPrimaryNet: "Primaire Net %",
  chartSecondaryNet: "Secondaire Net %",
  chartHigherGross: "Sup\u00e9rieur Brut %",

  kpiSavings: "Taux d'\u00c9pargne",
  kpiInvest: "Taux d'Investissement",
  kpiDebt: "Dette/PIB",
  kpiFiscalDeficit: "D\u00e9ficit Budg\u00e9taire",

  chartFiscal: "\u00c9quilibre Budg\u00e9taire (% du PIB)",
  chartFiscalSub: "Recettes, D\u00e9penses, D\u00e9ficit",
  chartRevenue: "Recettes",
  chartExpenditure: "D\u00e9penses",
  chartDeficit: "D\u00e9ficit",

  chartSavingsInvest: "\u00c9pargne vs Investissement",
  chartSavingsInvestSub: "% du PIB",
  chartSavingsRate: "Taux d'\u00c9pargne",
  chartInvestRate: "Taux d'Investissement",

  chartDebt: "Dette Publique / PIB (2010\u20132024)",
  chartDebtSub: "% du PIB",
  chartDebtGdp: "Dette/PIB %",

  chartWilayaGdp: "Top 10 Wilayas par Part du PIB (2023)",
  chartWilayaGdpSub: "Contribution au PIB national",
  chartGdpShare: "Part du PIB %",

  chartWilayaUnemp: "Taux de Ch\u00f4mage par Wilaya (2023)",
  chartWilayaUnempSub: "Top 10 wilayas",
  chartUnempPct: "Ch\u00f4mage %",

  chartScatter: "Population vs PIB \u2014 Nuage de Points (2023)",
  chartScatterSub: "Top 10 wilayas \u2014 taille = taux de ch\u00f4mage",
  chartPopK: "Population (K)",
  chartGdpShareLabel: "Part du PIB %",
  chartPopThousands: "Population (milliers)",
  chartUnempPctLabel: "Ch\u00f4mage %",

  footer: "Source : Office National des Statistiques (ONS) \u2014 www.ons.dz | Toutes les donn\u00e9es issues des publications ONS (IPC, IPI, IPPI, CNT, Commerce Ext\u00e9rieur, Comptes \u00c9conomiques, ENEM, RGPH)",
};

// ─── ARABIC ───────────────────────────────────────────────────────────────────
const ar: Dictionary = {
  headerTitle: "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0644\u0644\u062c\u0632\u0627\u0626\u0631",
  headerSubtitle: "\u0627\u0644\u0645\u0643\u062a\u0628 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u0644\u0625\u062d\u0635\u0627\u0621\u0627\u062a (ONS) \u2014 \u0645\u0646\u0635\u0629 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",

  tabMacro: "\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0643\u0644\u064a",
  tabInflation: "\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u062a\u0636\u062e\u0645",
  tabTrade: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629",
  tabIndustry: "\u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a",
  tabLabor: "\u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644",
  tabSocial: "\u0627\u0644\u062f\u064a\u0645\u0648\u063a\u0631\u0627\u0641\u064a\u0627 \u0648\u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639",
  tabFiscal: "\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u062a\u0648\u0641\u064a\u0631",
  tabRegional: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642",

  kpiGdpGrowth: "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  kpiGdp2024: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2024)",
  kpiInflation: "\u0627\u0644\u062a\u0636\u062e\u0645",
  kpiUnemployment: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  kpiPopulation: "\u0627\u0644\u0633\u0643\u0627\u0646",
  kpiInvestmentRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",

  chartGdpGrowth: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0648\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648 (2000\u20132024)",
  chartGdpGrowthSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631 \u0648\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0633\u0646\u0648\u064a %",
  chartGdpBnUsd: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631)",
  chartGrowthPct: "\u0627\u0644\u0646\u0645\u0648 %",

  chartGdpSector: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u062d\u0633\u0628 \u0627\u0644\u0642\u0637\u0627\u0639 (% \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629)",
  chartGdpSectorSub: "\u0627\u0644\u0641\u0644\u0627\u062d\u0629\u060c \u0627\u0644\u0635\u0646\u0627\u0639\u0629\u060c \u0627\u0644\u0628\u0646\u0627\u0621\u060c \u0627\u0644\u062e\u062f\u0645\u0627\u062a",
  sectorAgriculture: "\u0627\u0644\u0641\u0644\u0627\u062d\u0629",
  sectorIndustry: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629",
  sectorConstruction: "\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0623\u0634\u063a\u0627\u0644",
  sectorServices: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",

  chartQuarterlyGdp: "\u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0631\u0628\u0639\u064a \u0644\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2020\u20132025)",
  chartQuarterlyGdpSub: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0631\u0628\u0639\u064a %",
  chartGdpPerCapita: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0644\u0644\u0641\u0631\u062f (2000\u20132024)",
  chartGdpPerCapitaSub: "\u062f\u0648\u0644\u0627\u0631 \u062c\u0627\u0631\u064a",
  chartGdpCapita: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a/\u0641\u0631\u062f (\u062f\u0648\u0644\u0627\u0631)",

  kpiCpi: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 (\u0623\u0628\u0631\u064a\u0644 2026)",
  kpiYoyInflation: "\u0627\u0644\u062a\u0636\u062e\u0645 \u0627\u0644\u0633\u0646\u0648\u064a",
  kpiFoodInflation: "\u062a\u0636\u062e\u0645 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629",
  kpiCoreInflation: "\u0627\u0644\u062a\u0636\u062e\u0645 \u0627\u0644\u062c\u0648\u0647\u0631\u064a",

  chartCpiMonthly: "\u0645\u0624\u0634\u0631 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u2014 \u0634\u0647\u0631\u064a (2020\u20132026)",
  chartCpiMonthlySub: "\u0627\u0644\u062a\u0636\u062e\u0645 \u0627\u0644\u0633\u0646\u0648\u064a %",
  chartInflationYoy: "\u0627\u0644\u062a\u0636\u062e\u0645 \u0627\u0644\u0633\u0646\u0648\u064a %",
  chartFoodYoy: "\u0627\u0644\u063a\u0630\u0627\u0621 \u0627\u0644\u0633\u0646\u0648\u064a %",
  chartCoreYoy: "\u0627\u0644\u062c\u0648\u0647\u0631\u064a \u0627\u0644\u0633\u0646\u0648\u064a %",
  legendTotalYoy: "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0646\u0648\u064a",
  legendFoodYoy: "\u0627\u0644\u063a\u0630\u0627\u0621",
  legendCoreYoy: "\u0627\u0644\u062c\u0648\u0647\u0631\u064a",

  chartCpiLevel: "\u0645\u0633\u062a\u0648\u0649 \u0645\u0624\u0634\u0631 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 (2020\u20132026)",
  chartCpiLevelSub: "\u0645\u0624\u0634\u0631 \u0633\u0646\u0629 \u0627\u0644\u0623\u0633\u0627\u0633",
  chartIpcIndex: "\u0645\u0624\u0634\u0631 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643",

  chartCpiDivision: "\u0627\u0644\u062a\u0636\u062e\u0645 \u062d\u0633\u0628 \u0623\u0642\u0633\u0627\u0645 COICOP (2024)",
  chartCpiDivisionSub: "\u0627\u0644\u062a\u063a\u064a\u0631 \u0627\u0644\u0633\u0646\u0648\u064a \u062d\u0633\u0628 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",

  chartCpiWeights: "\u0623\u0648\u0632\u0627\u0646 \u0633\u0644\u0629 \u0645\u0624\u0634\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0642\u0633\u0645",
  chartCpiWeightsSub: "\u0627\u0644\u062d\u0635\u0629 \u0641\u064a \u0633\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643",

  chartIppi: "\u0645\u0624\u0634\u0631 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a (IPPI) \u2014 \u0631\u0628\u0639\u064a (2020\u20132025)",
  chartIppiSub: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646\u060c \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629\u060c \u0627\u0644\u0637\u0627\u0642\u0629",
  sectorMining: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646",
  sectorManufacturing: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629",
  sectorEnergy: "\u0627\u0644\u0637\u0627\u0642\u0629",

  kpiExports: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a (2024)",
  kpiImports: "\u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a (2024)",
  kpiTradeBalance: "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a",
  kpiHydroPct: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a",

  chartTradeAnnual: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629 (2000\u20132024)",
  chartTradeAnnualSub: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a\u060c \u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a\u060c \u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u2014 \u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartExports: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  chartImports: "\u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a",
  chartBalance: "\u0627\u0644\u0645\u064a\u0632\u0627\u0646",

  chartHydroShare: "\u062d\u0635\u0629 \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a \u0641\u064a \u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  chartHydroShareSub: "% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0642\u064a\u0645\u0629 \u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  chartHydroPct: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a %",

  chartTradeQuarterly: "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u0627\u0644\u0631\u0628\u0639\u064a (2023\u20132025)",
  chartTradeQuarterlySub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",

  chartTradePartners: "\u0623\u0643\u0628\u0631 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u064a\u0646 (2024)",
  chartTradePartnersSub: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0628\u0644\u062f",

  kpiIpi: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a (\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a 2025)",
  kpiMining: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646",
  kpiManufacturing: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629",
  kpiEnergy: "\u0627\u0644\u0637\u0627\u0642\u0629",

  chartIpi: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a (2020\u20132025)",
  chartIpiSub: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646\u060c \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629\u060c \u0627\u0644\u0637\u0627\u0642\u0629 \u2014 \u0627\u0644\u0623\u0633\u0627\u0633 100 = 2019",
  chartIpiTotal: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a",

  chartIpiIppi: "\u0645\u0642\u0627\u0631\u0646\u0629 IPI \u0645\u0639 IPPI (2020\u20132025)",
  chartIpiIppiSub: "\u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a \u0645\u0642\u0627\u0628\u0644 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c",
  chartIpiProd: "IPI (\u0627\u0644\u0625\u0646\u062a\u0627\u062c)",
  chartIppiPrices: "IPPI (\u0627\u0644\u0623\u0633\u0639\u0627\u0631)",

  chartConstruction: "\u0645\u0624\u0634\u0631 \u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0628\u0646\u0627\u0621 (2015\u20132024)",
  chartConstructionSub: "\u0627\u0644\u0623\u0633\u0627\u0633 100 = 2014",
  chartConstructionIdx: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0628\u0646\u0627\u0621",

  kpiUnempRate: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  kpiActivityRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0634\u0627\u0637",
  kpiYouthUnemp: "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628",
  kpiFemalePartic: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u0633\u0627\u0621",
  kpiInformal: "\u0627\u0644\u0642\u0637\u0627\u0639 \u063a\u064a\u0631 \u0627\u0644\u0631\u0633\u0645\u064a",
  kpiEmpPop: "\u0627\u0644\u0634\u063a\u0644/\u0627\u0644\u0633\u0643\u0627\u0646",

  chartUnempRate: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0628\u0637\u0627\u0644\u0629 (2010\u20132024)",
  chartUnempRateSub: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a\u0629 \u0648\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628 (15-24 \u0633\u0646\u0629) %",
  chartTotalPct: "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a %",
  chartYouthPct: "\u0627\u0644\u0634\u0628\u0627\u0628 (15-24) %",

  chartActivityFemale: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0634\u0627\u0637 \u0648\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u0633\u0627\u0621",
  chartActivityFemaleSub: "% \u0645\u0646 \u0627\u0644\u0633\u0643\u0627\u0646 \u0641\u064a \u0633\u0646 \u0627\u0644\u0639\u0645\u0644",
  chartActRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0634\u0627\u0637",
  chartFemPartic: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u0633\u0627\u0621",
  chartInformalPct: "\u063a\u064a\u0631 \u0631\u0633\u0645\u064a %",

  chartEmpPop: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0634\u063a\u0644 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0633\u0643\u0627\u0646 (2010\u20132024)",
  chartEmpPopSub: "% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u0643\u0627\u0646 \u0627\u0644\u0645\u0634\u062a\u063a\u0644\u064a\u0646",
  chartEmpPopPct: "\u0627\u0644\u0634\u063a\u0644/\u0627\u0644\u0633\u0643\u0627\u0646 %",

  kpiPop: "\u0627\u0644\u0633\u0643\u0627\u0646",
  kpiGrowthRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648",
  kpiUrbanization: "\u0627\u0644\u062a\u062d\u0636\u0631",
  kpiFertility: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062e\u0635\u0648\u0628\u0629",

  chartPopGrowth: "\u0646\u0645\u0648 \u0627\u0644\u0633\u0643\u0627\u0646 (2000\u20132024)",
  chartPopGrowthSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0627\u0644\u0633\u0643\u0627\u0646",
  chartPopulationM: "\u0627\u0644\u0633\u0643\u0627\u0646 (\u0645\u0644\u064a\u0648\u0646)",

  chartPopPyramid: "\u0647\u0631\u0645 \u0627\u0644\u0639\u0645\u0631 \u0627\u0644\u0633\u0643\u0627\u0646\u064a (2024)",
  chartPopPyramidSub: "\u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064a\u0629 \u2014 \u0645\u0644\u0627\u064a\u064a\u0646",
  chartMale: "\u0630\u0643\u0648\u0631 (\u0645\u0644\u064a\u0648\u0646)",
  chartFemale: "\u0623\u0646\u0627\u062b (\u0645\u0644\u064a\u0648\u0646)",

  chartDemographic: "\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0644\u062f\u064a\u0645\u0648\u063a\u0631\u0627\u0641\u064a",
  chartDemographicSub: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0648\u0644\u0627\u062f\u0629\u060c \u0645\u0639\u062f\u0644 \u0627\u0644\u0648\u0641\u064a\u0627\u062a\u060c \u0645\u0639\u062f\u0644 \u0627\u0644\u062e\u0635\u0648\u0628\u0629",
  chartBirthRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0648\u0644\u0627\u062f\u0629",
  chartDeathRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0648\u0641\u064a\u0627\u062a",
  chartFertilityRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062e\u0635\u0648\u0628\u0629",

  chartEducation: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0641\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645 (2015\u20132024)",
  chartEducationSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0627\u0644\u0637\u0644\u0628\u0629",
  chartPrimary: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0627\u0628\u062a\u062f\u0627\u0626\u064a",
  chartSecondary: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0645\u062a\u0648\u0633\u0637",
  chartHigher: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0639\u0627\u0644\u064a",

  chartLiteracy: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0645\u0639\u0631\u0641\u064a\u0629 \u0648\u0645\u0639\u062f\u0644\u0627\u062a \u0627\u0644\u062a\u0633\u062c\u064a\u0644 (2015\u20132024)",
  chartLiteracySub: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0645\u0639\u0631\u0641\u064a\u0629 %\u060c \u0645\u0639\u062f\u0644\u0627\u062a \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0635\u0627\u0641\u064a \u0627\u0644\u0627\u0628\u062a\u062f\u0627\u0626\u064a \u0648\u0627\u0644\u0645\u062a\u0648\u0633\u0637",
  chartLiteracyRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0645\u0639\u0631\u0641\u064a\u0629 %",
  chartPrimaryNet: "\u0627\u0644\u0627\u0628\u062a\u062f\u0627\u0626\u064a \u0627\u0644\u0635\u0627\u0641\u064a %",
  chartSecondaryNet: "\u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0635\u0627\u0641\u064a %",
  chartHigherGross: "\u0627\u0644\u0639\u0627\u0644\u064a \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a %",

  kpiSavings: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0648\u0641\u064a\u0631",
  kpiInvest: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",
  kpiDebt: "\u0627\u0644\u062f\u064a\u0646/\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  kpiFiscalDeficit: "\u0639\u062c\u0632 \u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0629",

  chartFiscal: "\u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a (% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)",
  chartFiscalSub: "\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a\u060c \u0627\u0644\u0646\u0641\u0642\u0627\u062a\u060c \u0627\u0644\u0639\u062c\u0632",
  chartRevenue: "\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",
  chartExpenditure: "\u0627\u0644\u0646\u0641\u0642\u0627\u062a",
  chartDeficit: "\u0627\u0644\u0639\u062c\u0632",

  chartSavingsInvest: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0648\u0641\u064a\u0631 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",
  chartSavingsInvestSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartSavingsRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0648\u0641\u064a\u0631",
  chartInvestRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",

  chartDebt: "\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0639\u0627\u0645 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2010\u20132024)",
  chartDebtSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartDebtGdp: "\u0627\u0644\u062f\u064a\u0646/\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a %",

  chartWilayaGdp: "\u0623\u0643\u0628\u0631 10 \u0648\u0644\u0627\u064a\u0627\u062a \u062d\u0633\u0628 \u062d\u0635\u0629 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2023)",
  chartWilayaGdpSub: "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0648\u0637\u0646\u064a",
  chartGdpShare: "\u062d\u0635\u0629 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a %",

  chartWilayaUnemp: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0628\u0637\u0627\u0644\u0629 \u062d\u0633\u0628 \u0627\u0644\u0648\u0644\u0627\u064a\u0629 (2023)",
  chartWilayaUnempSub: "\u0623\u0643\u0628\u0631 10 \u0648\u0644\u0627\u064a\u0627\u062a",
  chartUnempPct: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 %",

  chartScatter: "\u0627\u0644\u0633\u0643\u0627\u0646 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2023)",
  chartScatterSub: "\u0623\u0643\u0628\u0631 10 \u0648\u0644\u0627\u064a\u0627\u062a \u2014 \u062d\u062c\u0645 \u0627\u0644\u0641\u0642\u0627\u0639\u0629 = \u0646\u0633\u0628\u0629 \u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  chartPopK: "\u0627\u0644\u0633\u0643\u0627\u0646 (\u0623\u0644\u0641)",
  chartGdpShareLabel: "\u062d\u0635\u0629 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a %",
  chartPopThousands: "\u0627\u0644\u0633\u0643\u0627\u0646 (\u0622\u0644\u0627\u0641)",
  chartUnempPctLabel: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 %",

  footer: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0645\u0643\u062a\u0628 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u0644\u0625\u062d\u0635\u0627\u0621\u0627\u062a (ONS) \u2014 www.ons.dz | \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0646 \u0645\u0646\u0634\u0648\u0631\u0627\u062a ONS (\u0627\u0644\u0623\u0633\u0639\u0627\u0631\u060c \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u060c \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0648\u0637\u0646\u064a\u0629\u060c \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629\u060c \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629\u060c \u0627\u0644\u062a\u0639\u062f\u0627\u062f \u0627\u0644\u0633\u0643\u0627\u0646\u064a)",
};

// ─── DICTIONARY MAP ───────────────────────────────────────────────────────────
const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Fran\u00e7ais",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
};

export const localeFlags: Record<Locale, string> = {
  en: "\ud83c\uddec\ud83c\udde7",
  fr: "\ud83c\uddeb\ud83c\uddf7",
  ar: "\ud83c\uddf9\ud83c\uddf1",
};