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

  // ─── SECTOR: HYDROCARBONS ────────────
  tabHydro: string;
  kpiHydroRevenue: string;
  kpiOilProd: string;
  kpiGasProd: string;
  kpiHydroGdpShare: string;
  kpiOilPrice: string;
  kpiHydroExports: string;
  kpiReservesOil: string;
  kpiReservesGas: string;
  chartHydroRevenue: string;
  chartHydroRevenueSub: string;
  chartHydroExports: string;
  chartHydroExportsSub: string;
  chartOilPrice: string;
  chartOilPriceSub: string;
  chartHydroGdp: string;
  chartHydroGdpSub: string;
  chartOilProduction: string;
  chartOilProductionSub: string;
  chartGasProduction: string;
  chartHydroRevLabel: string;
  chartExportsLabel: string;
  chartOilPriceLabel: string;
  chartOilProdLabel: string;
  chartGasProdLabel: string;
  chartHydroVsNonHydro: string;
  chartHydroVsNonHydroSub: string;
  chartHydroExportLabel: string;
  chartNonHydroExportLabel: string;
  chartReservesPie: string;
  chartReservesPieSub: string;
  chartOilReservesLabel: string;
  chartGasReservesLabel: string;

  // ─── SECTOR: AGRICULTURE ─────────────
  tabAgriculture: string;
  kpiCerealProd: string;
  kpiSelfSuffic: string;
  kpiAgriExports: string;
  kpiAgriEmploy: string;
  kpiVegProd: string;
  kpiFruitProd: string;
  kpiMilkProd: string;
  kpiIrrigatedLand: string;
  chartCerealProd: string;
  chartCerealProdSub: string;
  chartSelfSuffic: string;
  chartSelfSufficSub: string;
  chartAgriExports: string;
  chartAgriExportsSub: string;
  chartVegFruitProd: string;
  chartVegFruitProdSub: string;
  chartLivestock: string;
  chartLivestockSub: string;
  chartLandUse: string;
  chartLandUseSub: string;
  chartCerealLabel: string;
  chartSelfSufficLabel: string;
  chartAgriExportsLabel: string;
  chartVegLabel: string;
  chartFruitLabel: string;
  chartMilkLabel: string;
  chartMeatLabel: string;
  chartIrrigatedLabel: string;
  chartTotalLandLabel: string;
  chartOliveDateProd: string;
  chartOliveDateProdSub: string;
  chartOliveLabel: string;
  chartDateLabel: string;

  // ─── SECTOR: MANUFACTURING ────────────
  tabManufacturing: string;
  kpiFoodIndustry: string;
  kpiPharma: string;
  kpiTextiles: string;
  kpiChemicals: string;
  kpiMetallurgy: string;
  kpiBuildingMat: string;
  kpiElectrical: string;
  kpiPaper: string;
  chartManufSubsectors: string;
  chartManufSubsectorsSub: string;
  chartManufRadar: string;
  chartManufRadarSub: string;
  chartFoodLabel: string;
  chartTextileLabel: string;
  chartChemicalLabel: string;
  chartMetallurgyLabel: string;
  chartElectricLabel: string;
  chartBuildingMatLabel: string;
  chartPharmaLabel: string;
  chartPaperLabel: string;
  chartManufBuildingPaper: string;
  chartManufBuildingPaperSub: string;
  chartManufEmployCapacity: string;
  chartManufEmployCapacitySub: string;
  chartCapacityLabel: string;
  chartEmployLabel: string;
  chartManufExportLabel: string;

  // ─── SECTOR: BTP ─────────────────────
  tabBTP: string;
  kpiHousingUnits: string;
  kpiCementProd: string;
  kpiBTPGdp: string;
  kpiBTPEmploy: string;
  chartHousingUnits: string;
  chartHousingUnitsSub: string;
  chartCementSteel: string;
  chartCementSteelSub: string;
  chartBTPCostIndex: string;
  chartBTPCostIndexSub: string;
  chartBTPInvest: string;
  chartBTPInvestSub: string;
  chartHousingLabel: string;
  chartCementLabel: string;
  chartSteelLabel: string;
  chartCostIndexLabel: string;
  chartPublicInvestLabel: string;
  chartPermitsLabel: string;

  // ─── SECTOR: SERVICES ────────────────
  tabServices: string;
  kpiServicesGdp: string;
  kpiTrade: string;
  kpiTransport: string;
  kpiTelecom: string;
  chartServicesComposition: string;
  chartServicesCompositionSub: string;
  chartServicesTrend: string;
  chartServicesTrendSub: string;
  chartTradeLabel: string;
  chartTransportLabel: string;
  chartTelecomLabel: string;
  chartFinanceLabel: string;
  chartTourismLabel: string;
  chartGovtLabel: string;

  // ─── SECTOR: MINING & ENERGY ─────────
  tabMiningEnergy: string;
  kpiElectricity: string;
  kpiGasConsump: string;
  kpiIronOre: string;
  kpiPhosphate: string;
  chartMiningProd: string;
  chartMiningProdSub: string;
  chartEnergyConsump: string;
  chartEnergyConsumpSub: string;
  chartElectricity: string;
  chartElectricitySub: string;
  chartIronOreLabel: string;
  chartPhosphateLabel: string;
  chartZincLabel: string;
  chartLeadLabel: string;
  chartSaltLabel: string;
  chartElectricityLabel: string;
  chartGasConsumpLabel: string;
  chartPetrolConsumpLabel: string;

  // ─── ADDITIONAL SECTOR KPIs ────
  // Hydrocarbons extra
  kpiLNG: string;
  kpiRefining: string;
  kpiDomesticConsump: string;
  kpiRPRatioOil: string;
  kpiNewWells: string;
  kpiExplorationInvest: string;
  chartLNGExports: string;
  chartLNGExportsSub: string;
  chartRefining: string;
  chartRefiningSub: string;
  chartExplorationInvest: string;
  chartExplorationInvestSub: string;
  chartLNGLabel: string;
  chartRefiningLabel: string;
  chartExplorInvestLabel: string;

  // Agriculture extra
  kpiAgriGdp: string;
  kpiCerealImports: string;
  kpiPoultryProd: string;
  kpiTractorFleet: string;
  kpiFertilizer: string;
  chartPoultryProd: string;
  chartPoultryProdSub: string;
  chartTractorFertilizer: string;
  chartTractorFertilizerSub: string;
  chartCerealImports: string;
  chartCerealImportsSub: string;
  chartPoultryLabel: string;
  chartTractorLabel: string;
  chartFertilizerLabel: string;
  chartCerealImportLabel: string;
  chartAgriGdpLabel: string;

  // Manufacturing extra
  kpiManufEmploy: string;
  kpiManufExports: string;
  kpiCapacityUtil: string;
  kpiManufGdp: string;
  kpiNumEnterprises: string;
  kpiPrivateShare: string;
  kpiManufFDI: string;
  kpiProductivity: string;
  chartManufGDP: string;
  chartManufGDPSub: string;
  chartManufFDI: string;
  chartManufFDISub: string;
  chartManufGDPLabel: string;
  chartManufFDILabel: string;
  chartProductivityLabel: string;

  // ─── SECTOR: HEALTH ──────────────
  tabHealth: string;
  kpiHospitalBeds: string;
  kpiPhysicians: string;
  kpiNurses: string;
  kpiHealthExpenditure: string;
  kpiLifeExpectancy: string;
  kpiInfantMortality: string;
  kpiMaternalMortality: string;
  kpiVaccination: string;
  kpiNumHospitals: string;
  kpiHealthCenters: string;
  kpiPolyclinics: string;
  kpiPrimaryCareVisits: string;
  chartHealthInfrastructure: string;
  chartHealthInfrastructureSub: string;
  chartPersonnelTrend: string;
  chartPersonnelTrendSub: string;
  chartMortalityTrend: string;
  chartMortalityTrendSub: string;
  chartHealthExpenditureTrend: string;
  chartHealthExpenditureTrendSub: string;
  chartVaccinationTrend: string;
  chartVaccinationTrendSub: string;
  chartHospitalsLabel: string;
  chartHealthCentersLabel: string;
  chartPolyclinicsLabel: string;
  chartPhysiciansLabel: string;
  chartNursesLabel: string;
  chartInfantMortLabel: string;
  chartMaternalMortLabel: string;
  chartLifeExpLabel: string;
  chartHealthExpLabel: string;
  chartVaccinationLabel: string;
  chartPrimaryCareLabel: string;

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

  // ─── SECTOR: HYDROCARBONS ────────────
  tabHydro: "Hydrocarbons",
  kpiHydroRevenue: "Hydro Revenue", kpiOilProd: "Oil Production", kpiGasProd: "Gas Production", kpiHydroGdpShare: "Hydro % GDP",
  kpiOilPrice: "Oil Price", kpiHydroExports: "Hydro Exports", kpiReservesOil: "Oil Reserves", kpiReservesGas: "Gas Reserves",
  chartHydroRevenue: "Hydrocarbon Revenue & Exports (2000\u20132024)", chartHydroRevenueSub: "Billion USD \u2014 Revenue and export earnings",
  chartHydroExports: "Hydrocarbon Export Trend (2000\u20132024)", chartHydroExportsSub: "Billion USD",
  chartOilPrice: "Crude Oil Price (2000\u20132024)", chartOilPriceSub: "USD per barrel (Brent)",
  chartHydroGdp: "Hydrocarbon Contribution to GDP (2000\u20132024)", chartHydroGdpSub: "% of GDP",
  chartOilProduction: "Oil & Gas Production (2000\u20132024)", chartOilProductionSub: "Mbpd and Bcm",
  chartGasProduction: "Gas Production", chartHydroRevLabel: "Revenue", chartExportsLabel: "Exports",
  chartOilPriceLabel: "Oil Price $/bbl", chartOilProdLabel: "Oil (Mbpd)", chartGasProdLabel: "Gas (Bcm)",
  chartHydroVsNonHydro: "Hydrocarbon vs Non-Hydrocarbon Exports", chartHydroVsNonHydroSub: "Billion USD (2000\u20132024)",
  chartHydroExportLabel: "Hydrocarbons", chartNonHydroExportLabel: "Non-Hydrocarbons",
  chartReservesPie: "Proven Reserves (2024)", chartReservesPieSub: "Oil and natural gas reserves",
  chartOilReservesLabel: "Oil (Bn bbl)", chartGasReservesLabel: "Gas (Tcm)",

  // ─── SECTOR: AGRICULTURE ─────────────
  tabAgriculture: "Agriculture",
  kpiCerealProd: "Cereal Prod.", kpiSelfSuffic: "Self-Sufficiency", kpiAgriExports: "Agri. Exports", kpiAgriEmploy: "Agri. Employment",
  kpiVegProd: "Veg. Production", kpiFruitProd: "Fruit Production", kpiMilkProd: "Milk Production", kpiIrrigatedLand: "Irrigated Land",
  chartCerealProd: "Cereal Production (2010\u20132024)", chartCerealProdSub: "Million tonnes",
  chartSelfSuffic: "Cereal Self-Sufficiency Rate", chartSelfSufficSub: "% of national consumption",
  chartAgriExports: "Agricultural Exports (2010\u20132024)", chartAgriExportsSub: "Billion USD",
  chartVegFruitProd: "Vegetable & Fruit Production", chartVegFruitProdSub: "Million tonnes (2010\u20132024)",
  chartLivestock: "Livestock Production", chartLivestockSub: "Milk (M litres) and Meat (Mt)",
  chartLandUse: "Agricultural Land", chartLandUseSub: "Irrigated vs Total (M ha)",
  chartCerealLabel: "Cereals", chartSelfSufficLabel: "Self-Sufficiency %", chartAgriExportsLabel: "Agri. Exports",
  chartVegLabel: "Vegetables", chartFruitLabel: "Fruits", chartMilkLabel: "Milk", chartMeatLabel: "Meat",
  chartIrrigatedLabel: "Irrigated", chartTotalLandLabel: "Total Land",
  chartOliveDateProd: "Olive & Date Production", chartOliveDateProdSub: "Million tonnes (2010\u20132024)",
  chartOliveLabel: "Olive", chartDateLabel: "Dates",

  // ─── SECTOR: MANUFACTURING ────────────
  tabManufacturing: "Manufacturing",
  kpiFoodIndustry: "Food Industry", kpiPharma: "Pharma", kpiTextiles: "Textiles", kpiChemicals: "Chemicals",
  kpiMetallurgy: "Metallurgy", kpiBuildingMat: "Building Mat.", kpiElectrical: "Electrical", kpiPaper: "Paper",
  chartManufSubsectors: "Manufacturing Sub-Sector Indices (2010\u20132024)", chartManufSubsectorsSub: "Base 100 = 2019",
  chartManufRadar: "Manufacturing Radar (2024)", chartManufRadarSub: "Index by sub-sector",
  chartFoodLabel: "Food Industry", chartTextileLabel: "Textiles", chartChemicalLabel: "Chemicals",
  chartMetallurgyLabel: "Metallurgy", chartElectricLabel: "Electrical", chartBuildingMatLabel: "Building Materials",
  chartPharmaLabel: "Pharma", chartPaperLabel: "Paper",
  chartManufBuildingPaper: "Building Materials & Paper Indices", chartManufBuildingPaperSub: "Base 100 = 2019",
  chartManufEmployCapacity: "Employment & Capacity Utilization", chartManufEmployCapacitySub: "Thousands of employees and %",
  chartCapacityLabel: "Capacity Util. %", chartEmployLabel: "Employment (K)", chartManufExportLabel: "Manuf. Exports (bn $)",

  // ─── SECTOR: BTP ─────────────────────
  tabBTP: "BTP",
  kpiHousingUnits: "Housing Units", kpiCementProd: "Cement Prod.", kpiBTPGdp: "BTP % GDP", kpiBTPEmploy: "BTP Employment",
  chartHousingUnits: "Housing Units Delivered", chartHousingUnitsSub: "Thousands of units",
  chartCementSteel: "Cement & Steel Production", chartCementSteelSub: "Cement (Mt) and Steel (Mt)",
  chartBTPCostIndex: "Construction Cost Index", chartBTPCostIndexSub: "Base 100 = 2014",
  chartBTPInvest: "Public Investment in Construction", chartBTPInvestSub: "Billion USD",
  chartHousingLabel: "Housing Units (K)", chartCementLabel: "Cement (Mt)", chartSteelLabel: "Steel (Mt)",
  chartCostIndexLabel: "Cost Index", chartPublicInvestLabel: "Public Invest.", chartPermitsLabel: "Building Permits (K)",

  // ─── SECTOR: SERVICES ────────────────
  tabServices: "Services",
  kpiServicesGdp: "Services % GDP", kpiTrade: "Trade", kpiTransport: "Transport", kpiTelecom: "Telecom",
  chartServicesComposition: "Services Sector Composition", chartServicesCompositionSub: "% of GDP by sub-sector",
  chartServicesTrend: "Services Sector Trend (2010\u20132024)", chartServicesTrendSub: "% of GDP",
  chartTradeLabel: "Trade", chartTransportLabel: "Transport", chartTelecomLabel: "Telecom",
  chartFinanceLabel: "Finance", chartTourismLabel: "Tourism", chartGovtLabel: "Govt. Services",

  // ─── SECTOR: MINING & ENERGY ─────────
  tabMiningEnergy: "Mines & Energy",
  kpiElectricity: "Electricity", kpiGasConsump: "Gas Consump.", kpiIronOre: "Iron Ore", kpiPhosphate: "Phosphate",
  chartMiningProd: "Mining Production (2010\u20132024)", chartMiningProdSub: "Tonnes",
  chartEnergyConsump: "Energy Consumption", chartEnergyConsumpSub: "Gas (Bcm) and Petroleum (Mt)",
  chartElectricity: "Electricity Production", chartElectricitySub: "TWh (2010\u20132024)",
  chartIronOreLabel: "Iron Ore (Mt)", chartPhosphateLabel: "Phosphate (Mt)", chartZincLabel: "Zinc (Kt)",
  chartLeadLabel: "Lead (Kt)", chartSaltLabel: "Salt (Mt)", chartElectricityLabel: "Electricity (TWh)",
  chartGasConsumpLabel: "Gas (Bcm)", chartPetrolConsumpLabel: "Petroleum (Mt)",

  // Hydrocarbons extra
  kpiLNG: "LNG Exports", kpiRefining: "Refining Cap.", kpiDomesticConsump: "Domestic Consump.", kpiRPRatioOil: "R/P Ratio Oil", kpiNewWells: "New Wells", kpiExplorationInvest: "Exploration Invest.",
  chartLNGExports: "LNG Exports (2000\u20132024)", chartLNGExportsSub: "Billion cubic metres",
  chartRefining: "Refining Capacity (2000\u20132024)", chartRefiningSub: "Thousand barrels/day",
  chartExplorationInvest: "Exploration Investment (2000\u20132024)", chartExplorationInvestSub: "Billion USD",
  chartLNGLabel: "LNG (Bcm)", chartRefiningLabel: "Refining (Kb/d)", chartExplorInvestLabel: "Exploration (bn $)",

  // Agriculture extra
  kpiAgriGdp: "Agri. % GDP", kpiCerealImports: "Cereal Imports", kpiPoultryProd: "Poultry Prod.", kpiTractorFleet: "Tractor Fleet", kpiFertilizer: "Fertilizer Consump.",
  chartPoultryProd: "Poultry Production (2010\u20132024)", chartPoultryProdSub: "Million tonnes",
  chartTractorFertilizer: "Tractor Fleet & Fertilizer Use", chartTractorFertilizerSub: "Thousands of tractors / Kt of fertilizer",
  chartCerealImports: "Cereal Imports vs Production (2010\u20132024)", chartCerealImportsSub: "Million tonnes",
  chartPoultryLabel: "Poultry", chartTractorLabel: "Tractors (K)", chartFertilizerLabel: "Fertilizer (Kt)", chartCerealImportLabel: "Cereal Imports", chartAgriGdpLabel: "Agri. % GDP",

  // Manufacturing extra
  kpiManufEmploy: "Manuf. Employment", kpiManufExports: "Manuf. Exports", kpiCapacityUtil: "Capacity Util.", kpiManufGdp: "Manuf. % GDP", kpiNumEnterprises: "Enterprises", kpiPrivateShare: "Private Share", kpiManufFDI: "FDI Industry", kpiProductivity: "Productivity Idx.",
  chartManufGDP: "Manufacturing GDP Contribution (2010\u20132024)", chartManufGDPSub: "% of GDP",
  chartManufFDI: "FDI in Manufacturing (2010\u20132024)", chartManufFDISub: "Billion USD",
  chartManufGDPLabel: "Manuf. % GDP", chartManufFDILabel: "FDI (bn $)", chartProductivityLabel: "Productivity Idx.",

  // Health sector
  tabHealth: "Health",
  kpiHospitalBeds: "Hospital Beds", kpiPhysicians: "Physicians", kpiNurses: "Nurses", kpiHealthExpenditure: "Health Expend.", kpiLifeExpectancy: "Life Expect.", kpiInfantMortality: "Infant Mortality", kpiMaternalMortality: "Maternal Mort.", kpiVaccination: "Vaccination", kpiNumHospitals: "Hospitals", kpiHealthCenters: "Health Centers", kpiPolyclinics: "Polyclinics", kpiPrimaryCareVisits: "Primary Care",
  chartHealthInfrastructure: "Health Infrastructure (2010\u20132024)", chartHealthInfrastructureSub: "Number of facilities",
  chartPersonnelTrend: "Health Personnel per 10,000 (2010\u20132024)", chartPersonnelTrendSub: "Per 10,000 inhabitants",
  chartMortalityTrend: "Mortality Indicators (2010\u20132024)", chartMortalityTrendSub: "Infant (per 1,000) & Maternal (per 100,000)",
  chartHealthExpenditureTrend: "Health Expenditure (2010\u20132024)", chartHealthExpenditureTrendSub: "% of GDP",
  chartVaccinationTrend: "Vaccination Coverage (2010\u20132024)", chartVaccinationTrendSub: "% of children vaccinated",
  chartHospitalsLabel: "Hospitals", chartHealthCentersLabel: "Health Centers", chartPolyclinicsLabel: "Polyclinics",
  chartPhysiciansLabel: "Physicians", chartNursesLabel: "Nurses",
  chartInfantMortLabel: "Infant Mortality", chartMaternalMortLabel: "Maternal Mortality", chartLifeExpLabel: "Life Expectancy",
  chartHealthExpLabel: "Health Exp. % GDP", chartVaccinationLabel: "Vaccination %", chartPrimaryCareLabel: "Primary Care (M visits)",

  footer: "Source: Office National des Statistiques (ONS) \u2014 www.ons.dz | All data from ONS publications (IPC, IPI, IPPI, CNT, Commerce Ext\u00e9rieur, Comptes Economiques, ENEM, RGPH)",
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

  // ─── SECTOR: HYDROCARBONS ────────────
  tabHydro: "Hydrocarbures",
  kpiHydroRevenue: "Rev. Hydrocarbures", kpiOilProd: "Production P\u00e9trole", kpiGasProd: "Production Gaz", kpiHydroGdpShare: "Hydro % PIB",
  kpiOilPrice: "Prix P\u00e9trole", kpiHydroExports: "Export. Hydrocarbures", kpiReservesOil: "R\u00e9serves P\u00e9trole", kpiReservesGas: "R\u00e9serves Gaz",
  chartHydroRevenue: "Revenus et Exportations Hydrocarbures (2000\u20132024)", chartHydroRevenueSub: "Milliards USD",
  chartHydroExports: "Exportations d\u2019Hydrocarbures (2000\u20132024)", chartHydroExportsSub: "Milliards USD",
  chartOilPrice: "Prix du P\u00e9trole Brut (2000\u20132024)", chartOilPriceSub: "USD par baril (Brent)",
  chartHydroGdp: "Contribution des Hydrocarbures au PIB (2000\u20132024)", chartHydroGdpSub: "% du PIB",
  chartOilProduction: "Production P\u00e9trole & Gaz (2000\u20132024)", chartOilProductionSub: "Mb/j et Mds m\u00b3",
  chartGasProduction: "Production Gaz", chartHydroRevLabel: "Revenus", chartExportsLabel: "Exportations",
  chartOilPriceLabel: "Prix $/bbl", chartOilProdLabel: "P\u00e9trole (Mb/j)", chartGasProdLabel: "Gaz (Mds m\u00b3)",
  chartHydroVsNonHydro: "Hydrocarbures vs Non-Hydrocarbures", chartHydroVsNonHydroSub: "Milliards USD (2000\u20132024)",
  chartHydroExportLabel: "Hydrocarbures", chartNonHydroExportLabel: "Non-Hydrocarbures",
  chartReservesPie: "R\u00e9serves Prouv\u00e9es (2024)", chartReservesPieSub: "R\u00e9serves de p\u00e9trole et gaz naturel",
  chartOilReservesLabel: "P\u00e9trole (Mds bbl)", chartGasReservesLabel: "Gaz (Tcm)",

  // ─── SECTOR: AGRICULTURE ─────────────
  tabAgriculture: "Agriculture",
  kpiCerealProd: "Prod. C\u00e9r\u00e9ales", kpiSelfSuffic: "Autosuffisance", kpiAgriExports: "Export. Agri.", kpiAgriEmploy: "Emploi Agri.",
  kpiVegProd: "Prod. L\u00e9gumes", kpiFruitProd: "Prod. Fruits", kpiMilkProd: "Prod. Lait", kpiIrrigatedLand: "Terres Irrigu\u00e9es",
  chartCerealProd: "Production C\u00e9r\u00e9ali\u00e8re (2010\u20132024)", chartCerealProdSub: "Millions de tonnes",
  chartSelfSuffic: "Taux d\u2019Autosuffisance C\u00e9r\u00e9ali\u00e8re", chartSelfSufficSub: "% de la consommation nationale",
  chartAgriExports: "Exportations Agricoles (2010\u20132024)", chartAgriExportsSub: "Milliards USD",
  chartVegFruitProd: "Production L\u00e9gumes & Fruits", chartVegFruitProdSub: "Millions de tonnes (2010\u20132024)",
  chartLivestock: "Production \u00c9levage", chartLivestockSub: "Lait (M litres) et Viande (Mt)",
  chartLandUse: "Terres Agricoles", chartLandUseSub: "Irrigu\u00e9es vs Totales (M ha)",
  chartCerealLabel: "C\u00e9r\u00e9ales", chartSelfSufficLabel: "Autosuffisance %", chartAgriExportsLabel: "Export. Agri.",
  chartVegLabel: "L\u00e9gumes", chartFruitLabel: "Fruits", chartMilkLabel: "Lait", chartMeatLabel: "Viande",
  chartIrrigatedLabel: "Irrigu\u00e9es", chartTotalLandLabel: "Total",
  chartOliveDateProd: "Production d'Olives & Dattes", chartOliveDateProdSub: "Millions de tonnes (2010\u20132024)",
  chartOliveLabel: "Olives", chartDateLabel: "Dattes",

  // ─── SECTOR: MANUFACTURING ────────────
  tabManufacturing: "Industrie",
  kpiFoodIndustry: "Ind. Alimentaire", kpiPharma: "Pharma", kpiTextiles: "Textiles", kpiChemicals: "Chimie",
  kpiMetallurgy: "Sid\u00e9rurgie", kpiBuildingMat: "Mat. Construction", kpiElectrical: "\u00c9lectrique", kpiPaper: "Papier",
  chartManufSubsectors: "Indices des Sous-Secteurs Industriels (2010\u20132024)", chartManufSubsectorsSub: "Base 100 = 2019",
  chartManufRadar: "Radar Industriel (2024)", chartManufRadarSub: "Indice par sous-secteur",
  chartFoodLabel: "Ind. Alimentaire", chartTextileLabel: "Textiles", chartChemicalLabel: "Chimie",
  chartMetallurgyLabel: "Sid\u00e9rurgie", chartElectricLabel: "\u00c9lectrique", chartBuildingMatLabel: "Mat. Construction",
  chartPharmaLabel: "Pharma", chartPaperLabel: "Papier",
  chartManufBuildingPaper: "Indices Mat. Construction & Papier", chartManufBuildingPaperSub: "Base 100 = 2019",
  chartManufEmployCapacity: "Emploi & Taux d'Utilisation", chartManufEmployCapacitySub: "Milliers d'employ\u00e9s et %",
  chartCapacityLabel: "Taux Util. %", chartEmployLabel: "Emploi (K)", chartManufExportLabel: "Export. Ind. (Mds $)",

  // ─── SECTOR: BTP ─────────────────────
  tabBTP: "BTP",
  kpiHousingUnits: "Logements", kpiCementProd: "Prod. Ciment", kpiBTPGdp: "BTP % PIB", kpiBTPEmploy: "Emploi BTP",
  chartHousingUnits: "Logements Livr\u00e9s", chartHousingUnitsSub: "Milliers d\u2019unit\u00e9s",
  chartCementSteel: "Production Ciment & Acier", chartCementSteelSub: "Ciment (Mt) et Acier (Mt)",
  chartBTPCostIndex: "Indice du Co\u00fbt de la Construction", chartBTPCostIndexSub: "Base 100 = 2014",
  chartBTPInvest: "Investissement Public dans le BTP", chartBTPInvestSub: "Milliards USD",
  chartHousingLabel: "Logements (K)", chartCementLabel: "Ciment (Mt)", chartSteelLabel: "Acier (Mt)",
  chartCostIndexLabel: "Indice Co\u00fbt", chartPublicInvestLabel: "Invest. Public", chartPermitsLabel: "Permis Constr. (K)",

  // ─── SECTOR: SERVICES ────────────────
  tabServices: "Services",
  kpiServicesGdp: "Services % PIB", kpiTrade: "Commerce", kpiTransport: "Transport", kpiTelecom: "T\u00e9l\u00e9coms",
  chartServicesComposition: "Composition du Secteur des Services", chartServicesCompositionSub: "% du PIB par sous-secteur",
  chartServicesTrend: "\u00c9volution du Secteur des Services (2010\u20132024)", chartServicesTrendSub: "% du PIB",
  chartTradeLabel: "Commerce", chartTransportLabel: "Transport", chartTelecomLabel: "T\u00e9l\u00e9coms",
  chartFinanceLabel: "Finance", chartTourismLabel: "Tourisme", chartGovtLabel: "Services Publics",

  // ─── SECTOR: MINING & ENERGY ─────────
  tabMiningEnergy: "Mines & \u00c9nergie",
  kpiElectricity: "\u00c9lectricit\u00e9", kpiGasConsump: "Conso. Gaz", kpiIronOre: "Fer", kpiPhosphate: "Phosphate",
  chartMiningProd: "Production Mini\u00e8re (2010\u20132024)", chartMiningProdSub: "Tonnes",
  chartEnergyConsump: "Consommation d\u2019\u00c9nergie", chartEnergyConsumpSub: "Gaz (Mds m\u00b3) et P\u00e9trole (Mt)",
  chartElectricity: "Production d\u2019\u00c9lectricit\u00e9", chartElectricitySub: "TWh (2010\u20132024)",
  chartIronOreLabel: "Minerai de Fer (Mt)", chartPhosphateLabel: "Phosphate (Mt)", chartZincLabel: "Zinc (Kt)",
  chartLeadLabel: "Plomb (Kt)", chartSaltLabel: "Sel (Mt)", chartElectricityLabel: "\u00c9lectricit\u00e9 (TWh)",
  chartGasConsumpLabel: "Gaz (Mds m\u00b3)", chartPetrolConsumpLabel: "P\u00e9trole (Mt)",

  // Hydrocarbures extra
  kpiLNG: "Export. GNL", kpiRefining: "Cap. Raffinage", kpiDomesticConsump: "Conso. Domestique", kpiRPRatioOil: "R/P P\u00e9trole", kpiNewWells: "Nouveaux Puits", kpiExplorationInvest: "Invest. Exploration",
  chartLNGExports: "Exportations GNL (2000\u20132024)", chartLNGExportsSub: "Milliards m\u00e8tres cubes",
  chartRefining: "Capacit\u00e9 de Raffinage (2000\u20132024)", chartRefiningSub: "Milliers barils/jour",
  chartExplorationInvest: "Investissement Exploration (2000\u20132024)", chartExplorationInvestSub: "Milliards USD",
  chartLNGLabel: "GNL (Mm\u00b3)", chartRefiningLabel: "Raffinage (Kb/j)", chartExplorInvestLabel: "Exploration (Mds $)",

  // Agriculture extra
  kpiAgriGdp: "Agri. % PIB", kpiCerealImports: "Import. C\u00e9r\u00e9ales", kpiPoultryProd: "Prod. Volailles", kpiTractorFleet: "Parc Tracteurs", kpiFertilizer: "Conso. Engrais",
  chartPoultryProd: "Production de Volailles (2010\u20132024)", chartPoultryProdSub: "Millions de tonnes",
  chartTractorFertilizer: "Parc Tracteurs & Engrais", chartTractorFertilizerSub: "Milliers de tracteurs / Kt d\u2019engrais",
  chartCerealImports: "Importations vs Production de C\u00e9r\u00e9ales (2010\u20132024)", chartCerealImportsSub: "Millions de tonnes",
  chartPoultryLabel: "Volailles", chartTractorLabel: "Tracteurs (K)", chartFertilizerLabel: "Engrais (Kt)", chartCerealImportLabel: "Import. C\u00e9r\u00e9ales", chartAgriGdpLabel: "Agri. % PIB",

  // Industrie extra
  kpiManufEmploy: "Emploi Ind.", kpiManufExports: "Export. Ind.", kpiCapacityUtil: "Taux Util.", kpiManufGdp: "Ind. % PIB", kpiNumEnterprises: "Entreprises", kpiPrivateShare: "Part Priv\u00e9", kpiManufFDI: "IDE Industrie", kpiProductivity: "Productivit\u00e9",
  chartManufGDP: "Contribution de l\u2019Industrie au PIB (2010\u20132024)", chartManufGDPSub: "% du PIB",
  chartManufFDI: "IDE dans l\u2019Industrie (2010\u20132024)", chartManufFDISub: "Milliards USD",
  chartManufGDPLabel: "Ind. % PIB", chartManufFDILabel: "IDE (Mds $)", chartProductivityLabel: "Productivit\u00e9",

  // Sant\u00e9
  tabHealth: "Sant\u00e9",
  kpiHospitalBeds: "Lits H\u00f4pital", kpiPhysicians: "M\u00e9decins", kpiNurses: "Infirmiers", kpiHealthExpenditure: "D\u00e9p. Sant\u00e9", kpiLifeExpectancy: "Esp\u00e9r. Vie", kpiInfantMortality: "Mort. Infantile", kpiMaternalMortality: "Mort. Matern.", kpiVaccination: "Vaccination", kpiNumHospitals: "H\u00f4pitaux", kpiHealthCenters: "Centres Sant\u00e9", kpiPolyclinics: "Polycliniques", kpiPrimaryCareVisits: "Soins Prim.",
  chartHealthInfrastructure: "Infrastructure Sanitaire (2010\u20132024)", chartHealthInfrastructureSub: "Nombre d\u2019\u00e9tablissements",
  chartPersonnelTrend: "Personnel de Sant\u00e9 pour 10 000 (2010\u20132024)", chartPersonnelTrendSub: "Pour 10 000 habitants",
  chartMortalityTrend: "Indicateurs de Mortalit\u00e9 (2010\u20132024)", chartMortalityTrendSub: "Infantile (1 000) & Maternelle (100 000)",
  chartHealthExpenditureTrend: "D\u00e9penses de Sant\u00e9 (2010\u20132024)", chartHealthExpenditureTrendSub: "% du PIB",
  chartVaccinationTrend: "Couverture Vaccinale (2010\u20132024)", chartVaccinationTrendSub: "% enfants vaccin\u00e9s",
  chartHospitalsLabel: "H\u00f4pitaux", chartHealthCentersLabel: "Centres de Sant\u00e9", chartPolyclinicsLabel: "Polycliniques",
  chartPhysiciansLabel: "M\u00e9decins", chartNursesLabel: "Infirmiers",
  chartInfantMortLabel: "Mortalit\u00e9 Infantile", chartMaternalMortLabel: "Mortalit\u00e9 Maternelle", chartLifeExpLabel: "Esp\u00e9rance de Vie",
  chartHealthExpLabel: "D\u00e9p. Sant\u00e9 % PIB", chartVaccinationLabel: "Vaccination %", chartPrimaryCareLabel: "Soins Primaires (M visites)",

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

  // ─── SECTOR: HYDROCARBONS ────────────
  tabHydro: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a",
  kpiHydroRevenue: "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a", kpiOilProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0646\u0641\u0637", kpiGasProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u063a\u0627\u0632", kpiHydroGdpShare: "\u0645\u062d\u0631\u0648\u0642\u0627\u062a % \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c",
  kpiOilPrice: "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637", kpiHydroExports: "\u0635\u0627\u062f\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a", kpiReservesOil: "\u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0627\u0644\u0646\u0641\u0637", kpiReservesGas: "\u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0627\u0644\u063a\u0627\u0632",
  chartHydroRevenue: "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0648\u0635\u0627\u062f\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a (2000\u20132024)", chartHydroRevenueSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartHydroExports: "\u0635\u0627\u062f\u0631\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a (2000\u20132024)", chartHydroExportsSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartOilPrice: "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637 \u0627\u0644\u062e\u0627\u0645 (2000\u20132024)", chartOilPriceSub: "\u062f\u0648\u0644\u0627\u0631 \u0644\u0644\u0628\u0631\u0645\u064a\u0644",
  chartHydroGdp: "\u0645\u0633\u0627\u0647\u0645\u0629 \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a \u0641\u064a \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (2000\u20132024)", chartHydroGdpSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartOilProduction: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0646\u0641\u0637 \u0648\u0627\u0644\u063a\u0627\u0632 (2000\u20132024)", chartOilProductionSub: "\u0645\u0644\u064a\u0648\u0646 \u0628\u0631\u0645\u064a\u0644/\u064a\u0648\u0645 \u0648\u0645\u0644\u064a\u0627\u0631 \u0645\u062a\u0631 \u0645\u0643\u0639\u0628",
  chartGasProduction: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u063a\u0627\u0632", chartHydroRevLabel: "\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a", chartExportsLabel: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  chartOilPriceLabel: "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637 $/\u0628\u0631\u0645\u064a\u0644", chartOilProdLabel: "\u0627\u0644\u0646\u0641\u0637 (\u0645\u0628/\u064a\u0648\u0645)", chartGasProdLabel: "\u0627\u0644\u063a\u0627\u0632 (\u0645\u0644\u064a\u0627\u0631 \u0645\u0643\u0639\u0628)",
  chartHydroVsNonHydro: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a \u0645\u0642\u0627\u0628\u0644 \u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a", chartHydroVsNonHydroSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631 (2000\u20132024)",
  chartHydroExportLabel: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a", chartNonHydroExportLabel: "\u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a",
  chartReservesPie: "\u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0627\u0644\u0645\u062b\u0628\u062a\u0629 (2024)", chartReservesPieSub: "\u0627\u062d\u062a\u064a\u0627\u0637\u064a \u0627\u0644\u0646\u0641\u0637 \u0648\u0627\u0644\u063a\u0627\u0632 \u0627\u0644\u0637\u0628\u064a\u0639\u064a",
  chartOilReservesLabel: "\u0646\u0641\u0637 (\u0645\u0644\u064a\u0627\u0631 \u0628\u0631\u0645\u064a\u0644)", chartGasReservesLabel: "\u063a\u0627\u0632 (\u062a\u0631\u064a\u0644\u064a\u0648\u0646 \u0645\u062a\u0631 \u0645\u0643\u0639\u0628)",

  // ─── SECTOR: AGRICULTURE ─────────────
  tabAgriculture: "\u0627\u0644\u0641\u0644\u0627\u062d\u0629",
  kpiCerealProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062d\u0628\u0648\u0628", kpiSelfSuffic: "\u0627\u0644\u0627\u062a\u062d\u0627\u0630 \u0627\u0644\u0630\u0627\u062a\u064a", kpiAgriExports: "\u0635\u0627\u062f\u0631\u0627\u062a \u0632\u0631\u0627\u0639\u064a\u0629", kpiAgriEmploy: "\u062a\u0634\u063a\u064a\u0644 \u0632\u0631\u0627\u0639\u064a",
  kpiVegProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062e\u0636\u0631\u0648\u0627\u062a", kpiFruitProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0641\u0648\u0627\u0643\u0647", kpiMilkProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062d\u0644\u064a\u0628", kpiIrrigatedLand: "\u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0627\u0644\u0645\u0631\u0648\u064a\u0629",
  chartCerealProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062d\u0628\u0648\u0628 (2010\u20132024)", chartCerealProdSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0623\u0637\u0646\u0627\u0646",
  chartSelfSuffic: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u062a\u062d\u0627\u0630 \u0627\u0644\u0630\u0627\u062a\u064a \u0645\u0646 \u0627\u0644\u062d\u0628\u0648\u0628", chartSelfSufficSub: "% \u0645\u0646 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0648\u0637\u0646\u064a",
  chartAgriExports: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629 (2010\u20132024)", chartAgriExportsSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartVegFruitProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062e\u0636\u0627\u0631 \u0648\u0627\u0644\u0641\u0648\u0627\u0643\u0647", chartVegFruitProdSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0623\u0637\u0646\u0627\u0646 (2010\u20132024)",
  chartLivestock: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062b\u0631\u0648\u0629", chartLivestockSub: "\u0627\u0644\u062d\u0644\u064a\u0628 (\u0645\u0644\u064a\u0648\u0646 \u0644\u062a\u0631) \u0648\u0627\u0644\u0644\u062d\u0645 (\u0645\u062a\u0631)",
  chartLandUse: "\u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629", chartLandUseSub: "\u0627\u0644\u0645\u0633\u062a\u0635\u0644\u0629 \u0648\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a (\u0645\u0644\u064a\u0648\u0646 \u0647\u0643\u062a\u0627\u0631)",
  chartCerealLabel: "\u0627\u0644\u062d\u0628\u0648\u0628", chartSelfSufficLabel: "\u0627\u0644\u0627\u062a\u062d\u0627\u0630 %", chartAgriExportsLabel: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  chartVegLabel: "\u0627\u0644\u062e\u0636\u0627\u0631", chartFruitLabel: "\u0627\u0644\u0641\u0648\u0627\u0643\u0647", chartMilkLabel: "\u0627\u0644\u062d\u0644\u064a\u0628", chartMeatLabel: "\u0627\u0644\u0644\u062d\u0645",
  chartIrrigatedLabel: "\u0645\u0633\u062a\u0635\u0644\u0629", chartTotalLandLabel: "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a",
  chartOliveDateProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0632\u064a\u062a\u0648\u0646 \u0648\u0627\u0644\u062a\u0645\u0648\u0631", chartOliveDateProdSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0623\u0637\u0646\u0627\u0646 (2010\u20132024)",
  chartOliveLabel: "\u0627\u0644\u0632\u064a\u062a\u0648\u0646", chartDateLabel: "\u0627\u0644\u062a\u0645\u0648\u0631",

  // ─── SECTOR: MANUFACTURING ────────────
  tabManufacturing: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629",
  kpiFoodIndustry: "\u0635\u0646\u0627\u0639\u0629 \u063a\u0630\u0627\u0626\u064a\u0629", kpiPharma: "\u0627\u0644\u0623\u062f\u0648\u064a\u0629", kpiTextiles: "\u0627\u0644\u0646\u0633\u064a\u062c", kpiChemicals: "\u0627\u0644\u0643\u064a\u0645\u064a\u0627\u0621",
  kpiMetallurgy: "\u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u0645\u0639\u062f\u0646\u064a\u0629", kpiBuildingMat: "\u0645\u0648\u0627\u062f \u0627\u0644\u0628\u0646\u0627\u0621", kpiElectrical: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629", kpiPaper: "\u0627\u0644\u0648\u0631\u0642",
  chartManufSubsectors: "\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0635\u0646\u0627\u0639\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629 (2010\u20132024)", chartManufSubsectorsSub: "\u0627\u0644\u0623\u0633\u0627\u0633 100 = 2019",
  chartManufRadar: "\u0631\u0627\u062f\u0627\u0631 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 (2024)", chartManufRadarSub: "\u0627\u0644\u0645\u0624\u0634\u0631 \u062d\u0633\u0628 \u0627\u0644\u0642\u0637\u0627\u0639",
  chartFoodLabel: "\u0635\u0646\u0627\u0639\u0629 \u063a\u0630\u0627\u0626\u064a\u0629", chartTextileLabel: "\u0627\u0644\u0646\u0633\u064a\u062c", chartChemicalLabel: "\u0627\u0644\u0643\u064a\u0645\u064a\u0627\u0621",
  chartMetallurgyLabel: "\u0627\u0644\u062d\u062f\u064a\u062f", chartElectricLabel: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621", chartBuildingMatLabel: "\u0645\u0648\u0627\u062f \u0627\u0644\u0628\u0646\u0627\u0621",
  chartPharmaLabel: "\u0627\u0644\u0623\u062f\u0648\u064a\u0629", chartPaperLabel: "\u0627\u0644\u0648\u0631\u0642",
  chartManufBuildingPaper: "\u0645\u0624\u0634\u0631\u0627\u062a \u0645\u0648\u0627\u062f \u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0648\u0631\u0642", chartManufBuildingPaperSub: "\u0627\u0644\u0623\u0633\u0627\u0633 100 = 2019",
  chartManufEmployCapacity: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0648\u0645\u0639\u062f\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0637\u0627\u0642\u0629", chartManufEmployCapacitySub: "\u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u0648\u0638\u0641\u064a\u0646 \u0648\u0646\u0633\u0628\u0629 %",
  chartCapacityLabel: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 %", chartEmployLabel: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644 (\u0623\u0644\u0641)", chartManufExportLabel: "\u0635\u0627\u062f\u0631\u0627\u062a \u0635\u0646\u0627\u0639\u064a\u0629 (\u0645\u0644\u064a\u0627\u0631 $)",

  // ─── SECTOR: BTP ─────────────────────
  tabBTP: "\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0623\u0634\u063a\u0627\u0644",
  kpiHousingUnits: "\u0648\u062d\u062f\u0627\u062a \u0633\u0643\u0646\u064a\u0629", kpiCementProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0625\u0633\u0645\u0646\u062a", kpiBTPGdp: "BTP % \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c", kpiBTPEmploy: "\u062a\u0634\u063a\u064a\u0644 BTP",
  chartHousingUnits: "\u0648\u062d\u062f\u0627\u062a \u0633\u0643\u0646\u064a\u0629 \u0645\u0633\u0644\u0645\u0629", chartHousingUnitsSub: "\u0622\u0644\u0627\u0641 \u0627\u0644\u0648\u062d\u062f\u0627\u062a",
  chartCementSteel: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0625\u0633\u0645\u0646\u062a \u0648\u0627\u0644\u0623\u062d\u064a\u0627\u0621", chartCementSteelSub: "\u0627\u0644\u0625\u0633\u0645\u0646\u062a (\u0645\u062a\u0631) \u0648\u0627\u0644\u0623\u062d\u064a\u0627\u0621 (\u0645\u062a\u0631)",
  chartBTPCostIndex: "\u0645\u0624\u0634\u0631 \u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0628\u0646\u0627\u0621", chartBTPCostIndexSub: "\u0627\u0644\u0623\u0633\u0627\u0633 100 = 2014",
  chartBTPInvest: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0639\u0627\u0645 \u0641\u064a BTP", chartBTPInvestSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartHousingLabel: "\u0627\u0644\u0648\u062d\u062f\u0627\u062a (\u0623\u0644\u0641)", chartCementLabel: "\u0627\u0644\u0625\u0633\u0645\u0646\u062a (\u0645\u062a\u0631)", chartSteelLabel: "\u0627\u0644\u0623\u062d\u064a\u0627\u0621 (\u0645\u062a\u0631)",
  chartCostIndexLabel: "\u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", chartPublicInvestLabel: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0639\u0627\u0645", chartPermitsLabel: "\u0631\u062e\u0635\u0627\u062a \u0627\u0644\u0628\u0646\u0627\u0621 (\u0623\u0644\u0641)",

  // ─── SECTOR: SERVICES ────────────────
  tabServices: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
  kpiServicesGdp: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a % \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c", kpiTrade: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629", kpiTransport: "\u0627\u0644\u0646\u0642\u0644", kpiTelecom: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a",
  chartServicesComposition: "\u062a\u0631\u0643\u064a\u0628\u0629 \u0642\u0637\u0627\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a", chartServicesCompositionSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u062d\u0633\u0628 \u0627\u0644\u0642\u0637\u0627\u0639",
  chartServicesTrend: "\u062a\u0637\u0648\u0631 \u0642\u0637\u0627\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a (2010\u20132024)", chartServicesTrendSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartTradeLabel: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629", chartTransportLabel: "\u0627\u0644\u0646\u0642\u0644", chartTelecomLabel: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a",
  chartFinanceLabel: "\u0627\u0644\u0645\u0627\u0644\u064a\u0629", chartTourismLabel: "\u0627\u0644\u0633\u064a\u0627\u062d\u0629", chartGovtLabel: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629",

  // ─── SECTOR: MINING & ENERGY ─────────
  tabMiningEnergy: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646 \u0648\u0627\u0644\u0637\u0627\u0642\u0629",
  kpiElectricity: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621", kpiGasConsump: "\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u063a\u0627\u0632", kpiIronOre: "\u0627\u0644\u062d\u062f\u064a\u062f", kpiPhosphate: "\u0627\u0644\u0641\u0633\u0641\u0627\u062a",
  chartMiningProd: "\u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0645\u0646\u0642\u064a (2010\u20132024)", chartMiningProdSub: "\u0623\u0637\u0646\u0627\u0646",
  chartEnergyConsump: "\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0637\u0627\u0642\u0629", chartEnergyConsumpSub: "\u0627\u0644\u063a\u0627\u0632 (\u0645\u0644\u064a\u0627\u0631 \u0645\u0643\u0639\u0628) \u0648\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a (\u0645\u062a\u0631)",
  chartElectricity: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621", chartElectricitySub: "\u062a\u064a\u0631\u0627\u0648\u0627\u062a \u0633\u0627\u0639\u0629 (2010\u20132024)",
  chartIronOreLabel: "\u0645\u0646\u0635\u0631 \u0627\u0644\u062d\u062f\u064a\u062f (\u0645\u062a\u0631)", chartPhosphateLabel: "\u0627\u0644\u0641\u0633\u0641\u0627\u062a (\u0645\u062a\u0631)", chartZincLabel: "\u0627\u0644\u0632\u0646\u0643 (\u0623\u0644\u0641 \u0637\u0646)",
  chartLeadLabel: "\u0627\u0644\u0631\u0635\u0627\u0635 (\u0623\u0644\u0641 \u0637\u0646)", chartSaltLabel: "\u0627\u0644\u0645\u0644\u062d (\u0645\u062a\u0631)", chartElectricityLabel: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621 (\u062a\u064a\u0631\u0627\u0648\u0627\u062a)",
  chartGasConsumpLabel: "\u0627\u0644\u063a\u0627\u0632 (\u0645\u0644\u064a\u0627\u0631 \u0645\u0643\u0639\u0628)", chartPetrolConsumpLabel: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a (\u0645\u062a\u0631)",

  // \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a extra
  kpiLNG: "\u0635\u0627\u062f\u0631\u0627\u062a GNL", kpiRefining: "\u0637\u0627\u0642\u0629 \u062a\u0643\u0631\u064a\u0631", kpiDomesticConsump: "\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u062f\u0627\u062e\u0644\u064a", kpiRPRatioOil: "\u0646\u0633\u0628\u0629 R/P \u0646\u0641\u0637", kpiNewWells: "\u0622\u0628\u0627\u0631 \u062c\u062f\u064a\u062f\u0629", kpiExplorationInvest: "\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0633\u062a\u0643\u0634\u0627\u0641",
  chartLNGExports: "\u0635\u0627\u062f\u0631\u0627\u062a GNL (2000\u20132024)", chartLNGExportsSub: "\u0645\u0644\u064a\u0627\u0631 \u0645\u062a\u0631 \u0645\u0643\u0639\u0628",
  chartRefining: "\u0637\u0627\u0642\u0629 \u0627\u0644\u062a\u0643\u0631\u064a\u0631 (2000\u20132024)", chartRefiningSub: "\u0623\u0644\u0641 \u0628\u0631\u0645\u064a\u0644/\u064a\u0648\u0645",
  chartExplorationInvest: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0641\u064a \u0627\u0644\u0627\u0633\u062a\u0643\u0634\u0627\u0641 (2000\u20132024)", chartExplorationInvestSub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartLNGLabel: "GNL (\u0645\u0644\u064a\u0627\u0631 \u0645\u0643\u0639\u0628)", chartRefiningLabel: "\u062a\u0643\u0631\u064a\u0631 (\u0623\u0644\u0641 \u0628/\u064a)", chartExplorInvestLabel: "\u0627\u0633\u062a\u0643\u0634\u0627\u0641 (\u0645\u0644\u064a\u0627\u0631 $)",

  // \u0627\u0644\u0641\u0644\u0627\u062d\u0629 extra
  kpiAgriGdp: "\u0632\u0631\u0627\u0639\u0629 % \u0646\u0627\u062a\u062c", kpiCerealImports: "\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u062d\u0628\u0648\u0628", kpiPoultryProd: "\u0625\u0646\u062a\u0627\u062c \u062f\u0648\u0627\u062c\u0646", kpiTractorFleet: "\u0642\u0637\u064a\u0639\u0629 \u062c\u0631\u0627\u0631\u0627\u062a", kpiFertilizer: "\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u0633\u0645\u062f\u0629",
  chartPoultryProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062f\u0648\u0627\u062c\u0646 (2010\u20132024)", chartPoultryProdSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0623\u0637\u0646\u0627\u0646",
  chartTractorFertilizer: "\u0642\u0637\u064a\u0639\u0629 \u0627\u0644\u062c\u0631\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0623\u0633\u0645\u062f\u0629", chartTractorFertilizerSub: "\u0622\u0644\u0627\u0641 \u062c\u0631\u0627\u0631\u0627\u062a / \u0623\u0644\u0641 \u0637\u0646 \u0623\u0633\u0645\u062f\u0629",
  chartCerealImports: "\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u0645\u0642\u0627\u0628\u0644 \u0625\u0646\u062a\u0627\u062c \u0627\u0644\u062d\u0628\u0648\u0628 (2010\u20132024)", chartCerealImportsSub: "\u0645\u0644\u0627\u064a\u064a\u0646 \u0623\u0637\u0646\u0627\u0646",
  chartPoultryLabel: "\u0627\u0644\u062f\u0648\u0627\u062c\u0646", chartTractorLabel: "\u062c\u0631\u0627\u0631\u0627\u062a (\u0623\u0644\u0641)", chartFertilizerLabel: "\u0623\u0633\u0645\u062f\u0629 (\u0623\u0644\u0641 \u0637\u0646)", chartCerealImportLabel: "\u0627\u0633\u062a\u064a\u0631\u0627\u062f \u062d\u0628\u0648\u0628", chartAgriGdpLabel: "\u0632\u0631\u0627\u0639\u0629 % \u0646\u0627\u062a\u062c",

  // \u0627\u0644\u0635\u0646\u0627\u0639\u0629 extra
  kpiManufEmploy: "\u062a\u0634\u063a\u064a\u0644 \u0635\u0646\u0627\u0639\u064a", kpiManufExports: "\u0635\u0627\u062f\u0631\u0627\u062a \u0635\u0646\u0627\u0639\u064a\u0629", kpiCapacityUtil: "\u0645\u0639\u062f\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645", kpiManufGdp: "\u0635\u0646\u0627\u0639\u0629 % \u0646\u0627\u062a\u062c", kpiNumEnterprises: "\u0645\u0624\u0633\u0633\u0627\u062a", kpiPrivateShare: "\u062d\u0635\u0629 \u0627\u0644\u062e\u0627\u0635", kpiManufFDI: "\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0623\u062c\u0646\u0628\u064a", kpiProductivity: "\u0625\u0646\u062a\u0627\u062c\u064a\u0629",
  chartManufGDP: "\u0645\u0633\u0627\u0647\u0645\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0641\u064a \u0627\u0644\u0646\u0627\u062a\u062c (2010\u20132024)", chartManufGDPSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartManufFDI: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0641\u064a \u0627\u0644\u0635\u0646\u0627\u0639\u0629 (2010\u20132024)", chartManufFDISub: "\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631",
  chartManufGDPLabel: "\u0635\u0646\u0627\u0639\u0629 % \u0646\u0627\u062a\u062c", chartManufFDILabel: "\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0623\u062c\u0646\u0628\u064a (\u0645\u0644\u064a\u0627\u0631 $)", chartProductivityLabel: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0625\u0646\u062a\u0627\u062c\u064a\u0629",

  // \u0627\u0644\u0635\u062d\u0629
  tabHealth: "\u0627\u0644\u0635\u062d\u0629",
  kpiHospitalBeds: "\u0623\u0633\u0631\u0629 \u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a", kpiPhysicians: "\u0623\u0637\u0628\u0627\u0621", kpiNurses: "\u0645\u0645\u0631\u0636\u0648\u0646", kpiHealthExpenditure: "\u0646\u0641\u0642\u0627\u062a \u0635\u062d\u064a\u0629", kpiLifeExpectancy: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0639\u0645\u0631", kpiInfantMortality: "\u0648\u0641\u064a\u0627\u062a \u0631\u0636\u0639", kpiMaternalMortality: "\u0648\u0641\u064a\u0627\u062a \u0623\u0645\u0648\u0645\u0627\u062a", kpiVaccination: "\u062a\u0644\u0642\u064a\u062d", kpiNumHospitals: "\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a", kpiHealthCenters: "\u0645\u0631\u0627\u0643\u0632 \u0635\u062d\u064a\u0629", kpiPolyclinics: "\u0645\u062a\u0639\u062f\u062f\u0627\u062a \u0627\u0644\u062a\u062e\u0635\u0635\u0627\u062a", kpiPrimaryCareVisits: "\u0639\u064a\u0627\u062f\u0627\u062a \u0623\u0648\u0644\u064a\u0629",
  chartHealthInfrastructure: "\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u0627\u0644\u0635\u062d\u064a\u0629 (2010\u20132024)", chartHealthInfrastructureSub: "\u0639\u062f\u062f \u0627\u0644\u0645\u0646\u0634\u0622\u062a",
  chartPersonnelTrend: "\u0627\u0644\u0643\u0648\u0627\u062f\u0631 \u0627\u0644\u0635\u062d\u064a\u0629 \u0644\u0643\u0644 10.000 (2010\u20132024)", chartPersonnelTrendSub: "\u0644\u0643\u0644 10.000 \u0633\u0627\u0643\u0646",
  chartMortalityTrend: "\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0648\u0641\u064a\u0627\u062a (2010\u20132024)", chartMortalityTrendSub: "\u0631\u0636\u0639 (1.000) & \u0623\u0645\u0648\u0645\u0627\u062a (100.000)",
  chartHealthExpenditureTrend: "\u0627\u0644\u0646\u0641\u0642\u0627\u062a \u0627\u0644\u0635\u062d\u064a\u0629 (2010\u20132024)", chartHealthExpenditureTrendSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartVaccinationTrend: "\u063a\u0637\u0627\u0621 \u0627\u0644\u062a\u0644\u0642\u064a\u062d (2010\u20132024)", chartVaccinationTrendSub: "% \u0645\u0646 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0644\u0645\u0644\u0642\u062d\u064a\u0646",
  chartHospitalsLabel: "\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a", chartHealthCentersLabel: "\u0645\u0631\u0627\u0643\u0632 \u0635\u062d\u064a\u0629", chartPolyclinicsLabel: "\u0645\u062a\u0639\u062f\u062f\u0627\u062a \u062a\u062e\u0635\u0635\u0627\u062a",
  chartPhysiciansLabel: "\u0623\u0637\u0628\u0627\u0621", chartNursesLabel: "\u0645\u0645\u0631\u0636\u0648\u0646",
  chartInfantMortLabel: "\u0648\u0641\u064a\u0627\u062a \u0627\u0644\u0631\u0636\u0639", chartMaternalMortLabel: "\u0648\u0641\u064a\u0627\u062a \u0627\u0644\u0623\u0645\u0648\u0645\u0627\u062a", chartLifeExpLabel: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0639\u0645\u0631",
  chartHealthExpLabel: "\u0646\u0641\u0642\u0627\u062a \u0635\u062d\u064a\u0629 % \u0646\u0627\u062a\u062c", chartVaccinationLabel: "\u062a\u0644\u0642\u064a\u062d %", chartPrimaryCareLabel: "\u0639\u064a\u0627\u062f\u0627\u062a \u0623\u0648\u0644\u064a\u0629 (\u0645\u0644\u064a\u0648\u0646)",

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