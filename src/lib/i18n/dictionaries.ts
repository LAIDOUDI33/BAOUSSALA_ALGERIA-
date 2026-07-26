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
  tabSdg: string;

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
  kpiRegTotalPop: string;
  kpiRegTotalWilayas: string;
  kpiRegNationalGdp: string;
  kpiRegAvgUnemp: string;
  kpiRegYouthUnemp: string;
  kpiRegUrbanization: string;
  kpiRegPoverty: string;
  kpiRegElectrification: string;
  kpiRegInformal: string;
  kpiRegSecondary: string;
  kpiRegNetMigration: string;
  kpiRegHospitalBeds: string;
  chartRegionGdpShare: string;
  chartRegionGdpShareSub: string;
  chartRegionUnempTrend: string;
  chartRegionUnempTrendSub: string;
  chartRegionUnemp: string;
  chartRegionGdpTrend: string;
  chartRegionGdpTrendSub: string;
  chartRegionSectorComp: string;
  chartRegionSectorCompSub: string;
  chartRegionPoverty: string;
  chartRegionPovertySub: string;
  chartRegionYouthUnemp: string;
  chartRegionYouthUnempSub: string;
  chartRegionUrbanization: string;
  chartRegionUrbanizationSub: string;
  chartRegionDensity: string;
  chartRegionDensitySub: string;
  chartRegionPerCapita: string;
  chartRegionPerCapitaSub: string;
  chartRegionElectrification: string;
  chartRegionElectrificationSub: string;
  chartRegionMigration: string;
  chartRegionMigrationSub: string;
  chartRegionInformal: string;
  chartRegionInformalSub: string;
  chartRegionHealth: string;
  chartRegionHealthSub: string;
  chartRegionEducation: string;
  chartRegionEducationSub: string;
  labelCentre: string;
  labelEst: string;
  labelOuest: string;
  labelSud: string;
  labelHautsPlateaux: string;
  labelAgriculture: string;
  labelIndustry: string;
  labelConstruction: string;
  labelServices: string;
  labelHydrocarbons: string;
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

  // ─── REGIONAL ENHANCED KPIs ─────
  kpiRegDensity: string;
  kpiRegArea: string;
  kpiRegEmployment: string;
  kpiRegFemalePartic: string;
  kpiRegInternet: string;
  kpiRegLiteracy: string;
  kpiRegInfantMort: string;
  kpiRegLifeExp: string;
  kpiRegHealthExp: string;
  kpiRegVaccination: string;
  kpiRegPhysicians: string;
  kpiRegWaterAccess: string;
  kpiRegHousingDeficit: string;
  kpiRegVehicles: string;
  kpiRegIndustrialUnits: string;
  kpiRegRoadDensity: string;
  kpiRegMobilePenetration: string;
  kpiRegBroadband: string;
  kpiRegAgriculturalLand: string;
  kpiRegGiniIncome: string;
  kpiRegHDI: string;
  kpiRegGrowthRate: string;
  chartRegionPopulation: string;
  chartRegionPopulationSub: string;
  chartRegionDensityBar: string;
  chartRegionDensityBarSub: string;
  chartRegionEmployStruct: string;
  chartRegionEmployStructSub: string;
  chartRegionHDI: string;
  chartRegionHDISub: string;
  chartRegionUrbanTrend: string;
  chartRegionUrbanTrendSub: string;
  chartRegionInequality: string;
  chartRegionInequalitySub: string;
  chartRegionInfra: string;
  chartRegionInfraSub: string;
  chartRegionDevScatter: string;
  chartRegionDevScatterSub: string;
  chartWilayaPopRank: string;
  chartWilayaPopRankSub: string;
  chartWilayaUnempRank: string;
  chartWilayaUnempRankSub: string;
  chartRegionEmpLabel: string;
  chartRegionAgriEmp: string;
  chartRegionIndEmp: string;
  chartRegionConstrEmp: string;
  chartRegionServEmp: string;
  chartRegionPublicEmp: string;
  chartRoadDensity: string;
  chartWaterSupply: string;
  chartSewage: string;
  chartBroadband: string;
  chartMobilePen: string;
  chartInternetUsers: string;
  chartGiniIncome: string;
  chartGiniEducation: string;
  chartGiniHealth: string;
  chartGiniHousing: string;
  chartCentreHDI: string;
  chartEstHDI: string;
  chartOuestHDI: string;
  chartSudHDI: string;
  chartHPHDI: string;
  chartSecondaryEnrol: string;
  chartHospitalBeds: string;
  chartPovertyRate: string;
  chartEmploymentPct: string;
  chartFemalePartLabel: string;
  chartYouthEmpLabel: string;

  // ─── FOOTER ────────────────────────────────────────────────────────
  footer: string;

  // ─── SDG TAB ─────────────────────────────────────────────────────────
  kpiSdgOnTrack: string;
  kpiSdgModerate: string;
  kpiSdgInsufficient: string;
  kpiSdgAchieved: string;
  chartSdgProgress: string;
  chartSdgProgressSub: string;
  chartSdgRadar: string;
  chartSdgRadarSub: string;
  chartSdgTimeline: string;
  chartSdgTimelineSub: string;
  chartSdgEnergyMix: string;
  chartSdgEnergyMixSub: string;
  chartSdgHousing: string;
  chartSdgHousingSub: string;
  chartSdgDesalination: string;
  chartSdgDesalinationSub: string;
  chartSdgWaterReuse: string;
  chartSdgWaterReuseSub: string;
  chartSdgTelecoms: string;
  chartSdgTelecomsSub: string;
  chartSdgInnovation: string;
  chartSdgInnovationSub: string;
  chartSdgFood: string;
  chartSdgFoodSub: string;
  chartSdgEducation: string;
  chartSdgEducationSub: string;
  chartSdgInequality: string;
  chartSdgInequalitySub: string;
  chartSdgOceans: string;
  chartSdgOceansSub: string;
  labelRef2015: string;
  labelRecent: string;
  labelTarget2030: string;
  labelProgress: string;
  labelOnTrack: string;
  labelModerate: string;
  labelInsufficient: string;
  labelAchieved: string;
  labelStatus: string;
  labelHigh: string;
  labelMedium: string;
  labelSdg: string;
  labelName: string;
  labelValue: string;
  labelTarget: string;
  labelGazNatural: string;
  labelSolarPV: string;
  labelHydro: string;
  labelWind: string;
  labelOtherEnr: string;
  labelFuelOil: string;
  labelYear: string;
  labelUnits: string;
  labelPrimary: string;
  labelSecondary: string;
  labelHigher: string;
  labelLiteracy: string;
  labelFemaleHigher: string;
  labelPreprimary: string;
  labelMobile: string;
  labelInetMobile: string;
  labelInetPop: string;
  labelCoverage4G: string;
  labelInetFix: string;
  labelRdPib: string;
  labelStartups: string;
  labelIncubators: string;
  labelUniversities: string;
  labelCapacity: string;
  labelStations: string;
  labelVolume: string;
  labelMarineProtected: string;
  labelFisheries: string;
  labelMonitoring: string;
  labelCoastalPlans: string;
  labelWheat: string;
  labelMilk: string;
  labelMilkCov: string;
  labelAquaculture: string;
  labelUndernourish: string;
  labelGini: string;
  labelSocialCov: string;
  labelQuintileShare: string;
  labelRemittanceCost: string;
  labelSdgSource: string;
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
  kpiRegTotalPop: "58 Wilayas Pop.",
  kpiRegTotalWilayas: "58 Wilayas",
  kpiRegNationalGdp: "National GDP",
  kpiRegAvgUnemp: "Avg. Unemployment",
  kpiRegYouthUnemp: "Youth Unemployment",
  kpiRegUrbanization: "Urbanization Rate",
  kpiRegPoverty: "Poverty Rate",
  kpiRegElectrification: "Electrification",
  kpiRegInformal: "Informal Employment",
  kpiRegSecondary: "Secondary Enrolment",
  kpiRegNetMigration: "Net Migration",
  kpiRegHospitalBeds: "Hospital Beds/10K",
  chartRegionGdpShare: "GDP Share by Macro-Region (2024)",
  chartRegionGdpShareSub: "% of national GDP – Source: ONS Comptes Régionaux",
  chartRegionUnempTrend: "Unemployment Rate by Region (2015–2024)",
  chartRegionUnempTrendSub: "% – Source: ONS Enquêtes Emploi",
  chartRegionUnemp: "Unemployment %",
  chartRegionGdpTrend: "GDP Share Evolution by Region (2015–2024)",
  chartRegionGdpTrendSub: "% of national GDP",
  chartRegionSectorComp: "Sectoral GDP Composition by Region (2023)",
  chartRegionSectorCompSub: "% breakdown – Agriculture, Industry, Construction, Services, Hydrocarbons",
  chartRegionPoverty: "Poverty Rate by Macro-Region (2024)",
  chartRegionPovertySub: "% below national poverty line – Source: ONS",
  chartRegionYouthUnemp: "Youth Unemployment (15-24) by Region (2024)",
  chartRegionYouthUnempSub: "% – Source: ONS Enquête Emploi 2024",
  chartRegionUrbanization: "Urbanization Rate by Region (2024)",
  chartRegionUrbanizationSub: "% of population living in urban areas",
  chartRegionDensity: "Population Density by Macro-Region (2024)",
  chartRegionDensitySub: "Inhabitants per km²",
  chartRegionPerCapita: "GDP Per Capita by Macro-Region (2024)",
  chartRegionPerCapitaSub: "Thousands DZD – Source: ONS",
  chartRegionElectrification: "Electrification Rate by Region (2024)",
  chartRegionElectrificationSub: "% of households with electricity",
  chartRegionMigration: "Net Migration Rate by Region (2024)",
  chartRegionMigrationSub: "Per 1,000 inhabitants (‰)",
  chartRegionInformal: "Informal Employment by Region (2024)",
  chartRegionInformalSub: "% of total employment – Source: ONS",
  chartRegionHealth: "Hospital Beds per 10,000 by Region (2024)",
  chartRegionHealthSub: "Source: ONS / Ministry of Health",
  chartRegionEducation: "Secondary School Enrolment by Region (2024)",
  chartRegionEducationSub: "% gross enrolment – Source: ONS",
  labelCentre: "Centre",
  labelEst: "East",
  labelOuest: "West",
  labelSud: "South",
  labelHautsPlateaux: "High Plateaus",
  labelAgriculture: "Agriculture",
  labelIndustry: "Industry",
  labelConstruction: "Construction",
  labelServices: "Services",
  labelHydrocarbons: "Hydrocarbons",
  kpiRegDensity: "Avg. Density",
  kpiRegArea: "Total Area",
  kpiRegEmployment: "Employment Rate",
  kpiRegFemalePartic: "Female Participation",
  kpiRegInternet: "Internet Access",
  kpiRegLiteracy: "Literacy Rate",
  kpiRegInfantMort: "Infant Mortality",
  kpiRegLifeExp: "Life Expectancy",
  kpiRegHealthExp: "Health Expenditure",
  kpiRegVaccination: "Vaccination Rate",
  kpiRegPhysicians: "Physicians/10K",
  kpiRegWaterAccess: "Water Access",
  kpiRegHousingDeficit: "Housing Deficit",
  kpiRegVehicles: "Motor Vehicles/10K",
  kpiRegIndustrialUnits: "Industrial Units",
  kpiRegRoadDensity: "Road Density",
  kpiRegMobilePenetration: "Mobile Penetration",
  kpiRegBroadband: "Broadband Subs.",
  kpiRegAgriculturalLand: "Agricultural Land",
  kpiRegGiniIncome: "Gini (Income)",
  kpiRegHDI: "Human Dev. Index",
  kpiRegGrowthRate: "GDP Growth Rate",
  chartRegionPopulation: "Population by Macro-Region (2024)",
  chartRegionPopulationSub: "Thousands of inhabitants – Source: ONS RGPH 2022",
  chartRegionDensityBar: "Population Density by Region (2024)",
  chartRegionDensityBarSub: "Inhabitants per km² – Log scale",
  chartRegionEmployStruct: "Employment Structure by Region (2024)",
  chartRegionEmployStructSub: "% of regional employment by sector",
  chartRegionHDI: "Regional Human Development Index (2015–2024)",
  chartRegionHDISub: "Composite index (health, education, income) – Source: ONS",
  chartRegionUrbanTrend: "Urbanization Rate Trend by Region (2015–2024)",
  chartRegionUrbanTrendSub: "% of population in urban areas",
  chartRegionInequality: "Inequality Indices by Region (2024)",
  chartRegionInequalitySub: "Gini coefficient by dimension – Source: ONS",
  chartRegionInfra: "Infrastructure Indicators by Region (2024)",
  chartRegionInfraSub: "Selected infrastructure metrics – Source: ONS",
  chartRegionDevScatter: "Development Correlation: GDP vs Health vs Education (2024)",
  chartRegionDevScatterSub: "Bubble size = poverty rate – Source: ONS",
  chartWilayaPopRank: "Top 20 Wilayas by Population (2024)",
  chartWilayaPopRankSub: "Thousands of inhabitants – Source: ONS RGPH 2022",
  chartWilayaUnempRank: "Top 15 Wilayas by Unemployment Rate (2024)",
  chartWilayaUnempRankSub: "% – Source: ONS Enquête Emploi 2024",
  chartRegionEmpLabel: "Employment (K)",
  chartRegionAgriEmp: "Agriculture",
  chartRegionIndEmp: "Industry",
  chartRegionConstrEmp: "Construction",
  chartRegionServEmp: "Services",
  chartRegionPublicEmp: "Public Sector",
  chartRoadDensity: "Road Density (km/km²)",
  chartWaterSupply: "Water Supply %",
  chartSewage: "Sewage Coverage %",
  chartBroadband: "Broadband (K subs.)",
  chartMobilePen: "Mobile Pen. %",
  chartInternetUsers: "Internet Users %",
  chartGiniIncome: "Gini Income",
  chartGiniEducation: "Gini Education",
  chartGiniHealth: "Gini Health",
  chartGiniHousing: "Gini Housing",
  chartCentreHDI: "Centre",
  chartEstHDI: "East",
  chartOuestHDI: "West",
  chartSudHDI: "South",
  chartHPHDI: "High Plateaus",
  chartSecondaryEnrol: "Secondary Enrolment %",
  chartHospitalBeds: "Hospital Beds/10K",
  chartPovertyRate: "Poverty Rate %",
  chartEmploymentPct: "Employment Rate %",
  chartFemalePartLabel: "Female Participation %",
  chartYouthEmpLabel: "Youth Employment %",


  // ─── SDGs / VNR 2026 ──────────────────────────────────────────────
  tabSdg: "SDGs (VNR 2026)",
  kpiSdgOverview: "17 SDGs Overview",
  kpiSdgOnTrack: "On Track",
  kpiSdgModerate: "Moderate Progress",
  kpiSdgInsufficient: "Insufficient Progress",
  kpiSdgAchieved: "Achieved",
  chartSdgProgress: "SDG Progress Overview",
  chartSdgProgressSub: "Progress towards 2030 targets – Source: VNR 2026",
  chartSdgRadar: "SDG Radar – Deep Dive Goals",
  chartSdgRadarSub: "Comparative progress across key SDGs",
  chartSdgIndicators: "Key Indicators vs 2030 Targets",
  chartSdgIndicatorsSub: "Reference 2015 / Recent / Target 2030",
  chartSdgTimeline: "Vision 2030 Roadmap",
  chartSdgTimelineSub: "Priority structural projects for 2026-2030",
  chartSdgEnergyMix: "Electricity Mix 2024",
  chartSdgEnergyMixSub: "% of total production",
  chartSdgHousing: "Housing Units Built by Program",
  chartSdgHousingSub: "Cumulative units constructed",
  chartSdgDesalination: "Desalination Capacity Growth",
  chartSdgDesalinationSub: "Mm³/day – Stations – % Northern needs",
  chartSdgWaterReuse: "Wastewater Reuse",
  chartSdgWaterReuseSub: "Mm³/year",
  chartSdgTelecoms: "Digital Transformation",
  chartSdgTelecomsSub: "Mobile & Internet penetration evolution",
  chartSdgInnovation: "R&D and Innovation Ecosystem",
  chartSdgInnovationSub: "R&D spending, startups, incubators, universities",
  chartSdgFood: "Food Security Indicators",
  chartSdgFoodSub: "Wheat, milk, aquaculture, undernourishment",
  chartSdgEducation: "Education Evolution",
  chartSdgEducationSub: "Enrollment rates and literacy 2015-2024",
  chartSdgInequality: "Inequality Indicators",
  chartSdgInequalitySub: "Gini, social coverage, remittance costs",
  chartSdgOceans: "Ocean & Marine Resources",
  chartSdgOceansSub: "Marine protected areas, aquaculture, fisheries",
  labelRef2015: "2015 Ref.",
  labelRecent: "Recent",
  labelTarget2030: "2030 Target",
  labelProgress: "Progress %",
  labelOnTrack: "On Track",
  labelModerate: "Moderate",
  labelInsufficient: "Insufficient",
  labelAchieved: "Achieved",
  labelStatus: "Status",
  labelHigh: "High",
  labelMedium: "Medium",
  labelSdg: "SDG",
  labelName: "Name",
  labelValue: "Value",
  labelTarget: "Target",
  labelGazNatural: "Natural Gas",
  labelSolarPV: "Solar PV",
  labelHydro: "Hydro",
  labelWind: "Wind",
  labelOtherEnr: "Other RE",
  labelFuelOil: "Fuel Oil",
  labelYear: "Year",
  labelUnits: "Units (thousands)",
  labelPrimary: "Primary",
  labelSecondary: "Secondary",
  labelHigher: "Higher",
  labelLiteracy: "Literacy",
  labelFemaleHigher: "Female Higher %",
  labelPreprimary: "Pre-primary",
  labelMobile: "Mobile (M)",
  labelInetMobile: "Internet Mobile (M)",
  labelInetPop: "Internet Pop %",
  labelCoverage4G: "4G Coverage %",
  labelInetFix: "Internet Fix (M)",
  labelRdPib: "R&D % GDP",
  labelStartups: "Startups",
  labelIncubators: "Incubators",
  labelUniversities: "Universities",
  labelCapacity: "Capacity (Mm³/j)",
  labelStations: "Stations",
  labelVolume: "Volume (Mm³/an)",
  labelMarineProtected: "Marine Protected %",
  labelFisheries: "Fisheries (t)",
  labelMonitoring: "Monitoring Stations",
  labelCoastalPlans: "Coastal Plans",
  labelWheat: "Wheat (kg/hab)",
  labelMilk: "Milk (L/hab)",
  labelMilkCov: "Milk Coverage %",
  labelAquaculture: "Aquaculture (t)",
  labelUndernourish: "Undernourishment %",
  labelGini: "Gini",
  labelSocialCov: "Social Coverage %",
  labelQuintileShare: "Bottom Quintile %",
  labelRemittanceCost: "Remittance Cost %",
  labelSdgSource: "Source: VNR 2026 – Rapport National Volontaire, Comité intersectoriel ODD, ONS",

  footer: "Source: Office National des Statistiques (ONS) \u2014 www.ons.dz | All data from ONS publications (IPC, IPI, IPPI, CNT, Commerce Ext\u00e9rieur, Comptes Economiques, ENEM, RGPH)",
  kpiOilProd: "Oil Production",
  kpiGasProd: "Gas Production",
  kpiHydroGdpShare: "Hydrocarbon GDP %",
  kpiHydroExports: "Hydrocarbon Exports",
  kpiReservesOil: "Oil Reserves",
  kpiReservesGas: "Gas Reserves",
  chartHydroRevenueSub: "Revenue trends 2015-2024",
  chartHydroExportsSub: "Hydrocarbon vs non-hydrocarbon exports",
  chartOilPriceSub: "Brent price and Algerian Saharan Blend",
  chartHydroGdpSub: "Hydrocarbon sector GDP contribution",
  chartOilProductionSub: "Annual oil & gas production volumes",
  chartHydroRevLabel: "Revenue",
  chartExportsLabel: "Exports",
  chartOilProdLabel: "Oil",
  chartGasProdLabel: "Gas",
  chartHydroVsNonHydroSub: "Hydrocarbon share of total exports",
  chartNonHydroExportLabel: "Non-hydro",
  chartReservesPieSub: "Proven reserves breakdown",
  chartGasReservesLabel: "Natural Gas",
  kpiRefining: "Refining Capacity",
  kpiDomesticConsump: "Domestic Consumption",
  kpiRPRatioOil: "R/P Ratio (Oil)",
  kpiNewWells: "New Wells Drilled",
  kpiExplorationInvest: "Exploration Investment",
  chartLNGExportsSub: "LNG export volumes",
  chartRefiningSub: "Refining capacity utilization",
  chartExplorationInvestSub: "Exploration & production investment",
  chartRefiningLabel: "Refining",
  chartExplorInvestLabel: "Exploration Invest.",
  kpiSelfSuffic: "Self-Sufficiency Rate",
  kpiAgriExports: "Agri. Exports",
  kpiAgriEmploy: "Agri. Employment",
  kpiFruitProd: "Fruit Production",
  kpiMilkProd: "Milk Production",
  kpiIrrigatedLand: "Irrigated Land",
  chartCerealProdSub: "Cereal production trends",
  chartSelfSufficSub: "Self-sufficiency rate by product",
  chartAgriExportsSub: "Agricultural export value",
  chartVegFruitProdSub: "Vegetable & fruit production",
  chartLivestockSub: "Livestock numbers",
  chartLandUseSub: "Agricultural land use distribution",
  chartSelfSufficLabel: "Self-suffic.",
  chartAgriExportsLabel: "Agri. exports",
  chartFruitLabel: "Fruit",
  chartMilkLabel: "Milk",
  chartMeatLabel: "Meat",
  chartTotalLandLabel: "Total",
  chartOliveDateProdSub: "Olive oil & date production",
  chartDateLabel: "Dates",
  kpiCerealImports: "Cereal Imports",
  kpiPoultryProd: "Poultry Production",
  kpiTractorFleet: "Tractor Fleet",
  kpiFertilizer: "Fertilizer Use",
  chartPoultryProdSub: "Poultry & egg production",
  chartTractorFertilizerSub: "Agricultural equipment & inputs",
  chartCerealImportsSub: "Cereal import dependency",
  chartTractorLabel: "Tractors",
  chartFertilizerLabel: "Fertilizer",
  chartCerealImportLabel: "Cereal imports",
  chartAgriGdpLabel: "Agri. GDP",
  kpiPharma: "Pharmaceuticals",
  kpiTextiles: "Textiles",
  kpiChemicals: "Chemicals",
  kpiBuildingMat: "Building Materials",
  kpiElectrical: "Electrical Eqpt.",
  kpiPaper: "Paper & Cardboard",
  chartManufSubsectorsSub: "Manufacturing output by subsector",
  chartManufRadarSub: "Sector competitiveness radar",
  chartTextileLabel: "Textiles",
  chartChemicalLabel: "Chemicals",
  chartElectricLabel: "Electrical",
  chartBuildingMatLabel: "Building Mat.",
  chartPaperLabel: "Paper",
  chartManufBuildingPaperSub: "Building materials & paper industry",
  chartManufEmployCapacitySub: "Employment & capacity utilization",
  chartEmployLabel: "Employment",
  chartManufExportLabel: "Exports",
  kpiManufExports: "Manufacturing Exports",
  kpiCapacityUtil: "Capacity Utilization",
  kpiManufGdp: "Manufacturing GDP",
  kpiNumEnterprises: "Enterprises",
  kpiPrivateShare: "Private Sector %",
  kpiManufFDI: "Manufacturing FDI",
  kpiProductivity: "Labor Productivity",
  chartManufGDPSub: "Manufacturing sector GDP trend",
  chartManufFDISub: "FDI inflows to manufacturing",
  chartManufFDILabel: "FDI",
  chartProductivityLabel: "Productivity",
  kpiCementProd: "Cement Production",
  kpiBTPGdp: "BTP GDP Share",
  kpiBTPEmploy: "BTP Employment",
  chartHousingUnitsSub: "Housing units delivered",
  chartCementSteelSub: "Cement & steel production",
  chartBTPCostIndexSub: "Construction cost index",
  chartBTPInvestSub: "Public investment in construction",
  chartCementLabel: "Cement",
  chartSteelLabel: "Steel",
  chartPublicInvestLabel: "Public Invest.",
  chartPermitsLabel: "Permits",
  kpiTrade: "Trade Share",
  kpiTransport: "Transport Share",
  kpiTelecom: "Telecom Share",
  chartServicesCompositionSub: "Services sector composition",
  chartServicesTrendSub: "Services GDP trend",
  chartTransportLabel: "Transport",
  chartTelecomLabel: "Telecom",
  chartTourismLabel: "Tourism",
  chartGovtLabel: "Government",
  kpiGasConsump: "Gas Consumption",
  kpiIronOre: "Iron Ore Production",
  kpiPhosphate: "Phosphate Production",
  chartMiningProdSub: "Mining production volumes",
  chartEnergyConsumpSub: "Energy consumption by source",
  chartElectricitySub: "Electricity generation mix",
  chartPhosphateLabel: "Phosphate",
  chartZincLabel: "Zinc",
  chartSaltLabel: "Salt",
  chartElectricityLabel: "Electricity",
  chartPetrolConsumpLabel: "Petrol. Consump.",
  kpiPhysicians: "Physicians / 10k",
  kpiNurses: "Nurses / 10k",
  kpiHealthExpenditure: "Health Expenditure",
  kpiLifeExpectancy: "Life Expectancy",
  kpiInfantMortality: "Infant Mortality",
  kpiMaternalMortality: "Maternal Mortality",
  kpiVaccination: "Vaccination Rate",
  kpiNumHospitals: "Hospitals",
  kpiHealthCenters: "Health Centers",
  kpiPolyclinics: "Polyclinics",
  kpiPrimaryCareVisits: "Primary Care Visits",
  chartHealthInfrastructureSub: "Health infrastructure by wilaya",
  chartPersonnelTrendSub: "Healthcare personnel trends",
  chartMortalityTrendSub: "Mortality rate trends",
  chartHealthExpenditureTrendSub: "Health expenditure evolution",
  chartVaccinationTrendSub: "Vaccination coverage trends",
  chartHealthCentersLabel: "Health Centers",
  chartPolyclinicsLabel: "Polyclinics",
  chartNursesLabel: "Nurses",
  chartMaternalMortLabel: "Mat. Mortality",
  chartLifeExpLabel: "Life Expect.",
  chartVaccinationLabel: "Vaccination",
  chartPrimaryCareLabel: "Primary Care",
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
  kpiRegTotalPop: "Pop. 58 wilayas",
  kpiRegTotalWilayas: "58 wilayas",
  kpiRegNationalGdp: "PIB national",
  kpiRegAvgUnemp: "Ch\u00f4mage moyen",
  kpiRegYouthUnemp: "Ch\u00f4mage des jeunes",
  kpiRegUrbanization: "Taux d'urbanisation",
  kpiRegPoverty: "Taux de pauvret\u00e9",
  kpiRegElectrification: "\u00c9lectrification",
  kpiRegInformal: "Emploi informel",
  kpiRegSecondary: "Scolarisation secondaire",
  kpiRegNetMigration: "Solde migratoire",
  kpiRegHospitalBeds: "Lits/10 000 hab.",
  chartRegionGdpShare: "Part du PIB par Macro-R\u00e9gion (2024)",
  chartRegionGdpShareSub: "% du PIB national \u2013 Source : ONS Comptes R\u00e9gionaux",
  chartRegionUnempTrend: "Taux de Ch\u00f4mage par R\u00e9gion (2015\u20132024)",
  chartRegionUnempTrendSub: "% \u2013 Source : ONS Enqu\u00eates Emploi",
  chartRegionUnemp: "Ch\u00f4mage %",
  chartRegionGdpTrend: "\u00c9volution de la Part du PIB par R\u00e9gion (2015\u20132024)",
  chartRegionGdpTrendSub: "% du PIB national",
  chartRegionSectorComp: "Composition Sectorielle du PIB par R\u00e9gion (2023)",
  chartRegionSectorCompSub: "% \u2013 Agriculture, Industrie, BTP, Services, Hydrocarbures",
  chartRegionPoverty: "Taux de Pauvret\u00e9 par Macro-R\u00e9gion (2024)",
  chartRegionPovertySub: "% sous le seuil national de pauvret\u00e9 \u2013 Source : ONS",
  chartRegionYouthUnemp: "Ch\u00f4mage des Jeunes (15-24) par R\u00e9gion (2024)",
  chartRegionYouthUnempSub: "% \u2013 Source : ONS Enqu\u00eate Emploi 2024",
  chartRegionUrbanization: "Taux d'Urbanisation par R\u00e9gion (2024)",
  chartRegionUrbanizationSub: "% de population en milieu urbain",
  chartRegionDensity: "Densit\u00e9 de Population par Macro-R\u00e9gion (2024)",
  chartRegionDensitySub: "Habitants par km\u00b2",
  chartRegionPerCapita: "PIB par Habitant par Macro-R\u00e9gion (2024)",
  chartRegionPerCapitaSub: "Milliers DZD \u2013 Source : ONS",
  chartRegionElectrification: "Taux d'\u00c9lectrification par R\u00e9gion (2024)",
  chartRegionElectrificationSub: "% de m\u00e9nages \u00e9lectrifi\u00e9s",
  chartRegionMigration: "Solde Migratoire par R\u00e9gion (2024)",
  chartRegionMigrationSub: "Pour 1 000 habitants (\u2030)",
  chartRegionInformal: "Emploi Informel par R\u00e9gion (2024)",
  chartRegionInformalSub: "% de l'emploi total \u2013 Source : ONS",
  chartRegionHealth: "Lits d'H\u00f4pital pour 10 000 par R\u00e9gion (2024)",
  chartRegionHealthSub: "Source : ONS / Minist\u00e8re de la Sant\u00e9",
  chartRegionEducation: "Scolarisation Secondaire par R\u00e9gion (2024)",
  chartRegionEducationSub: "% scolarisation brute \u2013 Source : ONS",
  labelCentre: "Centre",
  labelEst: "Est",
  labelOuest: "Ouest",
  labelSud: "Sud",
  labelHautsPlateaux: "Hauts Plateaux",
  labelAgriculture: "Agriculture",
  labelIndustry: "Industrie",
  labelConstruction: "BTP",
  labelServices: "Services",
  labelHydrocarbons: "Hydrocarbures",
  kpiRegDensity: "Densit\u00e9 moyenne",
  kpiRegArea: "Superficie totale",
  kpiRegEmployment: "Taux d'emploi",
  kpiRegFemalePartic: "Participation f\u00e9minine",
  kpiRegInternet: "Acc\u00e8s Internet",
  kpiRegLiteracy: "Taux d'alphab\u00e9tisation",
  kpiRegInfantMort: "Mortalit\u00e9 infantile",
  kpiRegLifeExp: "Esp\u00e9rance de vie",
  kpiRegHealthExp: "D\u00e9penses de sant\u00e9",
  kpiRegVaccination: "Taux de vaccination",
  kpiRegPhysicians: "M\u00e9decins/10K",
  kpiRegWaterAccess: "Acc\u00e8s \u00e0 l'eau",
  kpiRegHousingDeficit: "D\u00e9ficit en logements",
  kpiRegVehicles: "V\u00e9hicules/10K",
  kpiRegIndustrialUnits: "Unit\u00e9s industrielles",
  kpiRegRoadDensity: "Densit\u00e9 routi\u00e8re",
  kpiRegMobilePenetration: "Taux de t\u00e9l\u00e9phonie mobile",
  kpiRegBroadband: "Abonn\u00e9s haut d\u00e9bit",
  kpiRegAgriculturalLand: "Terres agricoles",
  kpiRegGiniIncome: "Gini (Revenu)",
  kpiRegHDI: "IDH r\u00e9gional",
  kpiRegGrowthRate: "Croissance du PIB",
  chartRegionPopulation: "Population par macro-r\u00e9gion (2024)",
  chartRegionPopulationSub: "Milliers d'habitants – Source : ONS RGPH 2022",
  chartRegionDensityBar: "Densit\u00e9 de population par r\u00e9gion (2024)",
  chartRegionDensityBarSub: "Habitants par km\u00b2 – \u00c9chelle log",
  chartRegionEmployStruct: "Structure de l'emploi par r\u00e9gion (2024)",
  chartRegionEmployStructSub: "% de l'emploi r\u00e9gional par secteur",
  chartRegionHDI: "Indice de d\u00e9veloppement humain r\u00e9gional (2015–2024)",
  chartRegionHDISub: "Indice composite (sant\u00e9, \u00e9ducation, revenu) – Source : ONS",
  chartRegionUrbanTrend: "Tendance du taux d'urbanisation par r\u00e9gion (2015–2024)",
  chartRegionUrbanTrendSub: "% de population en milieu urbain",
  chartRegionInequality: "Indices d'in\u00e9galit\u00e9 par r\u00e9gion (2024)",
  chartRegionInequalitySub: "Coefficient de Gini par dimension – Source : ONS",
  chartRegionInfra: "Indicateurs d'infrastructure par r\u00e9gion (2024)",
  chartRegionInfraSub: "M\u00e9triques d'infrastructure s\u00e9lectionn\u00e9es – Source : ONS",
  chartRegionDevScatter: "Corr\u00e9lation d\u00e9veloppement : PIB vs Sant\u00e9 vs \u00c9ducation (2024)",
  chartRegionDevScatterSub: "Taille de la bulle = taux de pauvret\u00e9 – Source : ONS",
  chartWilayaPopRank: "Top 20 wilayas par population (2024)",
  chartWilayaPopRankSub: "Milliers d'habitants – Source : ONS RGPH 2022",
  chartWilayaUnempRank: "Top 15 wilayas par taux de ch\u00f4mage (2024)",
  chartWilayaUnempRankSub: "% – Source : ONS Enqu\u00eate Emploi 2024",
  chartRegionEmpLabel: "Emploi (K)",
  chartRegionAgriEmp: "Agriculture",
  chartRegionIndEmp: "Industrie",
  chartRegionConstrEmp: "BTP",
  chartRegionServEmp: "Services",
  chartRegionPublicEmp: "Secteur public",
  chartRoadDensity: "Densit\u00e9 routi\u00e8re (km/km\u00b2)",
  chartWaterSupply: "Eau potable %",
  chartSewage: "Assainissement %",
  chartBroadband: "Haut d\u00e9bit (K abo.)",
  chartMobilePen: "T\u00e9l. mobile %",
  chartInternetUsers: "Utilisateurs Internet %",
  chartGiniIncome: "Gini Revenu",
  chartGiniEducation: "Gini \u00c9ducation",
  chartGiniHealth: "Gini Sant\u00e9",
  chartGiniHousing: "Gini Logement",
  chartCentreHDI: "Centre",
  chartEstHDI: "Est",
  chartOuestHDI: "Ouest",
  chartSudHDI: "Sud",
  chartHPHDI: "Hauts Plateaux",
  chartSecondaryEnrol: "Taux de scolarisation %",
  chartHospitalBeds: "Lits/10 000 hab.",
  chartPovertyRate: "Taux de pauvret\u00e9 %",
  chartEmploymentPct: "Taux d'emploi %",
  chartFemalePartLabel: "Participation f\u00e9minine %",
  chartYouthEmpLabel: "Emploi jeunes %",


  // ─── ODD / VNR 2026 ──────────────────────────────────────────────
  tabSdg: "ODD (VNR 2026)",
  kpiSdgOverview: "Vue d'ensemble des 17 ODD",
  kpiSdgOnTrack: "En bonne voie",
  kpiSdgModerate: "Progrès modérés",
  kpiSdgInsufficient: "Progrès insuffisants",
  kpiSdgAchieved: "Atteint",
  chartSdgProgress: "Aperçu des progrès ODD",
  chartSdgProgressSub: "Progrès vers les cibles 2030 – Source : VNR 2026",
  chartSdgRadar: "Radar ODD – Objectifs d'approfondissement",
  chartSdgRadarSub: "Progrès comparatifs des ODD clés",
  chartSdgIndicators: "Indicateurs clés vs Cibles 2030",
  chartSdgIndicatorsSub: "Référence 2015 / Récent / Cible 2030",
  chartSdgTimeline: "Feuille de route Vision 2030",
  chartSdgTimelineSub: "Chantiers structurants prioritaires 2026-2030",
  chartSdgEnergyMix: "Mix énergétique 2024",
  chartSdgEnergyMixSub: "% de la production totale",
  chartSdgHousing: "Logements construits par programme",
  chartSdgHousingSub: "Unités cumulées construites",
  chartSdgDesalination: "Croissance de la capacité de dessalement",
  chartSdgDesalinationSub: "Mm³/jour – Stations – % besoins Nord",
  chartSdgWaterReuse: "Réutilisation des eaux usées",
  chartSdgWaterReuseSub: "Mm³/an",
  chartSdgTelecoms: "Transformation numérique",
  chartSdgTelecomsSub: "Pénétration mobile et internet",
  chartSdgInnovation: "Écosystème R&D et Innovation",
  chartSdgInnovationSub: "Dépenses R&D, start-ups, incubateurs, universités",
  chartSdgFood: "Indicateurs de sécurité alimentaire",
  chartSdgFoodSub: "Blé, lait, aquaculture, sous-alimentation",
  chartSdgEducation: "Évolution de l'éducation",
  chartSdgEducationSub: "Taux de scolarisation et alphabétisation 2015-2024",
  chartSdgInequality: "Indicateurs d'inégalité",
  chartSdgInequalitySub: "Gini, couverture sociale, coût des envois de fonds",
  chartSdgOceans: "Océans et ressources marines",
  chartSdgOceansSub: "Aires marines protégées, aquaculture, pêche",
  labelRef2015: "Réf. 2015",
  labelRecent: "Récent",
  labelTarget2030: "Cible 2030",
  labelProgress: "Progrès %",
  labelOnTrack: "En bonne voie",
  labelModerate: "Modéré",
  labelInsufficient: "Insuffisant",
  labelAchieved: "Atteint",
  labelStatus: "Statut",
  labelHigh: "Élevée",
  labelMedium: "Moyenne",
  labelSdg: "ODD",
  labelName: "Nom",
  labelValue: "Valeur",
  labelTarget: "Cible",
  labelGazNatural: "Gaz naturel",
  labelSolarPV: "Solaire PV",
  labelHydro: "Hydraulique",
  labelWind: "Éolien",
  labelOtherEnr: "Autres EnR",
  labelFuelOil: "Fioul",
  labelYear: "Année",
  labelUnits: "Logements (milliers)",
  labelPrimary: "Primaire",
  labelSecondary: "Secondaire",
  labelHigher: "Supérieur",
  labelLiteracy: "Alphabétisation",
  labelFemaleHigher: "Femmes sup. %",
  labelPreprimary: "Préscolaire",
  labelMobile: "Mobile (M)",
  labelInetMobile: "Internet mobile (M)",
  labelInetPop: "Internet pop. %",
  labelCoverage4G: "Couverture 4G %",
  labelInetFix: "Internet fixe (M)",
  labelRdPib: "R&D % PIB",
  labelStartups: "Start-ups",
  labelIncubators: "Incubateurs",
  labelUniversities: "Universités",
  labelCapacity: "Capacité (Mm³/j)",
  labelStations: "Stations",
  labelVolume: "Volume (Mm³/an)",
  labelMarineProtected: "Aires marines prot. %",
  labelFisheries: "Pêche (t)",
  labelMonitoring: "Stations surveillance",
  labelCoastalPlans: "Plans côtiers",
  labelWheat: "Blé (kg/hab)",
  labelMilk: "Lait (L/hab)",
  labelMilkCov: "Couverture lait %",
  labelAquaculture: "Aquaculture (t)",
  labelUndernourish: "Sous-alimentation %",
  labelGini: "Gini",
  labelSocialCov: "Couverture sociale %",
  labelQuintileShare: "Quintile inf. %",
  labelRemittanceCost: "Coût envois de fonds %",
  labelSdgSource: "Source : VNR 2026 – Rapport National Volontaire, Comité intersectoriel ODD, ONS",

  footer: "Source : Office National des Statistiques (ONS) \u2014 www.ons.dz | Toutes les donn\u00e9es issues des publications ONS (IPC, IPI, IPPI, CNT, Commerce Ext\u00e9rieur, Comptes \u00c9conomiques, ENEM, RGPH)",
  kpiOilProd: "Production de Pétrole",
  kpiGasProd: "Production de Gaz",
  kpiHydroGdpShare: "Part Hydrocarbures PIB",
  kpiHydroExports: "Exportations Hydrocarbures",
  kpiReservesOil: "Réserves de Pétrole",
  kpiReservesGas: "Réserves de Gaz",
  chartHydroRevenueSub: "Tendances des revenus 2015-2024",
  chartHydroExportsSub: "Exportations hydrocarbures vs non-hydrocarbures",
  chartOilPriceSub: "Prix Brent et Saharan Blend algérien",
  chartHydroGdpSub: "Contribution du secteur hydrocarbures au PIB",
  chartOilProductionSub: "Volumes annuels de production pétrolière et gazière",
  chartHydroRevLabel: "Revenus",
  chartExportsLabel: "Exportations",
  chartOilProdLabel: "Pétrole",
  chartGasProdLabel: "Gaz",
  chartHydroVsNonHydroSub: "Part des hydrocarbures dans les exportations totales",
  chartNonHydroExportLabel: "Non-hydro",
  chartReservesPieSub: "Répartition des réserves prouvées",
  chartGasReservesLabel: "Gaz Naturel",
  kpiRefining: "Capacité de Raffinage",
  kpiDomesticConsump: "Consommation Domestique",
  kpiRPRatioOil: "Ratio R/P (Pétrole)",
  kpiNewWells: "Nouveaux Puits Forés",
  kpiExplorationInvest: "Investissement Exploration",
  chartLNGExportsSub: "Volumes d’exportation GNL",
  chartRefiningSub: "Taux d’utilisation de la capacité de raffinage",
  chartExplorationInvestSub: "Investissement exploration & production",
  chartRefiningLabel: "Raffinage",
  chartExplorInvestLabel: "Invest. Explor.",
  kpiSelfSuffic: "Taux d’Autosuffisance",
  kpiAgriExports: "Exportations Agri.",
  kpiAgriEmploy: "Emploi Agricole",
  kpiFruitProd: "Production Fruitière",
  kpiMilkProd: "Production Laitière",
  kpiIrrigatedLand: "Terres Irriguées",
  chartCerealProdSub: "Tendances de la production céréalière",
  chartSelfSufficSub: "Taux d’autosuffisance par produit",
  chartAgriExportsSub: "Valeur des exportations agricoles",
  chartVegFruitProdSub: "Production de légumes et fruits",
  chartLivestockSub: "Effectifs d’élevage",
  chartLandUseSub: "Répartition des terres agricoles",
  chartSelfSufficLabel: "Autosuffic.",
  chartAgriExportsLabel: "Export. agri.",
  chartFruitLabel: "Fruits",
  chartMilkLabel: "Lait",
  chartMeatLabel: "Viande",
  chartTotalLandLabel: "Total",
  chartOliveDateProdSub: "Production d’huile d’olive et de dattes",
  chartDateLabel: "Dattes",
  kpiCerealImports: "Importations Céréales",
  kpiPoultryProd: "Production Avicole",
  kpiTractorFleet: "Parc de Tracteurs",
  kpiFertilizer: "Consommation Engrais",
  chartPoultryProdSub: "Production avicole et œufs",
  chartTractorFertilizerSub: "Équipement et intrants agricoles",
  chartCerealImportsSub: "Dépendance aux importations céréalières",
  chartTractorLabel: "Tracteurs",
  chartFertilizerLabel: "Engrais",
  chartCerealImportLabel: "Import. céréales",
  chartAgriGdpLabel: "PIB agri.",
  kpiPharma: "Pharmaceutique",
  kpiTextiles: "Textiles",
  kpiChemicals: "Chimie",
  kpiBuildingMat: "Matériaux de Construction",
  kpiElectrical: "Équipement Électrique",
  kpiPaper: "Papier & Carton",
  chartManufSubsectorsSub: "Production manufacturière par sous-secteur",
  chartManufRadarSub: "Radar de compétitivité sectorielle",
  chartTextileLabel: "Textiles",
  chartChemicalLabel: "Chimie",
  chartElectricLabel: "Électrique",
  chartBuildingMatLabel: "Mat. Constr.",
  chartPaperLabel: "Papier",
  chartManufBuildingPaperSub: "Industrie des matériaux de construction et papier",
  chartManufEmployCapacitySub: "Emploi et taux d’utilisation des capacités",
  chartEmployLabel: "Emploi",
  chartManufExportLabel: "Exportations",
  kpiManufExports: "Exportations Manufacturières",
  kpiCapacityUtil: "Taux d’Utilisation",
  kpiManufGdp: "PIB Manufacturier",
  kpiNumEnterprises: "Entreprises",
  kpiPrivateShare: "Part Privé %",
  kpiManufFDI: "IDE Manufacturier",
  kpiProductivity: "Productivité du Travail",
  chartManufGDPSub: "Tendance du PIB manufacturier",
  chartManufFDISub: "Flux d’IDE vers l’industrie",
  chartManufFDILabel: "IDE",
  chartProductivityLabel: "Productivité",
  kpiCementProd: "Production de Ciment",
  kpiBTPGdp: "Part BTP du PIB",
  kpiBTPEmploy: "Emploi BTP",
  chartHousingUnitsSub: "Logements livrés",
  chartCementSteelSub: "Production de ciment et acier",
  chartBTPCostIndexSub: "Indice des coûts de construction",
  chartBTPInvestSub: "Investissement public dans le BTP",
  chartCementLabel: "Ciment",
  chartSteelLabel: "Acier",
  chartPublicInvestLabel: "Invest. Public",
  chartPermitsLabel: "Permis",
  kpiTrade: "Part Commerce",
  kpiTransport: "Part Transport",
  kpiTelecom: "Part Télécoms",
  chartServicesCompositionSub: "Composition du secteur des services",
  chartServicesTrendSub: "Tendance du PIB des services",
  chartTransportLabel: "Transport",
  chartTelecomLabel: "Télécoms",
  chartTourismLabel: "Tourisme",
  chartGovtLabel: "Gouvernement",
  kpiGasConsump: "Consommation de Gaz",
  kpiIronOre: "Production de Minerai de Fer",
  kpiPhosphate: "Production de Phosphate",
  chartMiningProdSub: "Volumes de production minière",
  chartEnergyConsumpSub: "Consommation d’énergie par source",
  chartElectricitySub: "Mix de production d’électricité",
  chartPhosphateLabel: "Phosphate",
  chartZincLabel: "Zinc",
  chartSaltLabel: "Sel",
  chartElectricityLabel: "Électricité",
  chartPetrolConsumpLabel: "Consom. Pétrole",
  kpiPhysicians: "Médecins / 10k",
  kpiNurses: "Infirmiers / 10k",
  kpiHealthExpenditure: "Dépenses de Santé",
  kpiLifeExpectancy: "Espérance de Vie",
  kpiInfantMortality: "Mortalité Infantile",
  kpiMaternalMortality: "Mortalité Maternelle",
  kpiVaccination: "Taux de Vaccination",
  kpiNumHospitals: "Hôpitaux",
  kpiHealthCenters: "Centres de Santé",
  kpiPolyclinics: "Polycliniques",
  kpiPrimaryCareVisits: "Visites Soins Primaires",
  chartHealthInfrastructureSub: "Infrastructure sanitaire par wilaya",
  chartPersonnelTrendSub: "Tendances du personnel de santé",
  chartMortalityTrendSub: "Tendances des taux de mortalité",
  chartHealthExpenditureTrendSub: "Évolution des dépenses de santé",
  chartVaccinationTrendSub: "Tendances de la couverture vaccinale",
  chartHealthCentersLabel: "Centres de Santé",
  chartPolyclinicsLabel: "Polycliniques",
  chartNursesLabel: "Infirmiers",
  chartMaternalMortLabel: "Mort. Matern.",
  chartLifeExpLabel: "Espérance",
  chartVaccinationLabel: "Vaccination",
  chartPrimaryCareLabel: "Soins Primaires",
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
  kpiRegTotalPop: "\u0633\u0643\u0627\u0646 58 \u0648\u0644\u0627\u064a\u0629",
  kpiRegTotalWilayas: "58 \u0648\u0644\u0627\u064a\u0629",
  kpiRegNationalGdp: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0648\u0637\u0646\u064a",
  kpiRegAvgUnemp: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  kpiRegYouthUnemp: "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628",
  kpiRegUrbanization: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062d\u0636\u0631",
  kpiRegPoverty: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0641\u0642\u0631",
  kpiRegElectrification: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621",
  kpiRegInformal: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u063a\u064a\u0631 \u0627\u0644\u0631\u0633\u0645\u064a",
  kpiRegSecondary: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062b\u0627\u0646\u0648\u064a",
  kpiRegNetMigration: "\u0627\u0644\u0647\u062c\u0631\u0629 \u0627\u0644\u0635\u0627\u0641\u064a\u0629",
  kpiRegHospitalBeds: "\u0623\u0633\u0631\u0629/10 \u0622\u0644\u0627\u0641",
  chartRegionGdpShare: "\u062d\u0635\u0629 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionGdpShareSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0648\u0637\u0646\u064a \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionUnempTrend: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0628\u0637\u0627\u0644\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2015\u20132024)",
  chartRegionUnempTrendSub: "% \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0633\u062a\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 %",
  chartRegionGdpTrend: "\u062a\u0637\u0648\u0631 \u062d\u0635\u0629 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2015\u20132024)",
  chartRegionGdpTrendSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0648\u0637\u0646\u064a",
  chartRegionSectorComp: "\u062a\u0631\u0643\u064a\u0628 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0642\u0637\u0627\u0639\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2023)",
  chartRegionSectorCompSub: "% \u2013 \u0627\u0644\u0632\u0631\u0627\u0639\u0629\u060c \u0627\u0644\u0635\u0646\u0627\u0639\u0629\u060c \u0627\u0644\u0628\u0646\u0627\u0621\u060c \u0627\u0644\u062e\u062f\u0645\u0627\u062a\u060c \u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a",
  chartRegionPoverty: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0641\u0642\u0631 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionPovertySub: "% \u062a\u062d\u062a \u062e\u0637 \u0627\u0644\u0641\u0642\u0631 \u0627\u0644\u0648\u0637\u0646\u064a \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionYouthUnemp: "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628 (15-24 \u0633\u0646\u0629) \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionYouthUnempSub: "% \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0627\u0644\u0648\u0641\u0627\u0621 2024",
  chartRegionUrbanization: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u062d\u0636\u0631 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionUrbanizationSub: "% \u0645\u0646 \u0627\u0644\u0633\u0643\u0627\u0646 \u0641\u064a \u0627\u0644\u0645\u062f\u0646",
  chartRegionDensity: "\u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionDensitySub: "\u0633\u0643\u0627\u0646 \u0644\u0643\u0644 \u0643\u0645\u00b2",
  chartRegionPerCapita: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0644\u0644\u0641\u0631\u062f \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionPerCapitaSub: "\u0622\u0644\u0627\u0641 \u062f\u062c \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionElectrification: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionElectrificationSub: "% \u0645\u0646 \u0627\u0644\u0623\u0633\u0631 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u064a\u0646 \u0628\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621",
  chartRegionMigration: "\u0627\u0644\u0647\u062c\u0631\u0629 \u0627\u0644\u0635\u0627\u0641\u064a\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionMigrationSub: "\u0644\u0643\u0644 1000 \u0633\u0643\u0627\u0646 (\u2030)",
  chartRegionInformal: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u063a\u064a\u0631 \u0627\u0644\u0631\u0633\u0645\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionInformalSub: "% \u0645\u0646 \u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionHealth: "\u0623\u0633\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u0634\u0641\u064a\u0627\u062a \u0644\u0643\u0644 10 \u0622\u0644\u0627\u0641 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionHealthSub: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621 / \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0635\u062d\u0629",
  chartRegionEducation: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062b\u0627\u0646\u0648\u064a \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionEducationSub: "% \u062a\u0633\u062c\u064a\u0644 \u0625\u062c\u0645\u0627\u0644\u064a \u2013 \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  labelCentre: "\u0627\u0644\u0645\u0631\u0643\u0632",
  labelEst: "\u0627\u0644\u0634\u0631\u0642",
  labelOuest: "\u0627\u0644\u063a\u0631\u0628",
  labelSud: "\u0627\u0644\u062c\u0646\u0648\u0628",
  labelHautsPlateaux: "\u0627\u0644\u0647\u0636\u0628 \u0627\u0644\u0639\u0627\u0644\u064a",
  labelAgriculture: "\u0627\u0644\u0632\u0631\u0627\u0639\u0629",
  labelIndustry: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629",
  labelConstruction: "\u0627\u0644\u0628\u0646\u0627\u0621",
  labelServices: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
  labelHydrocarbons: "\u0627\u0644\u0645\u062d\u0631\u0648\u0642\u0627\u062a",
  kpiRegDensity: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0643\u062b\u0627\u0641\u0629",
  kpiRegArea: "\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a\u0629",
  kpiRegEmployment: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0634\u063a\u064a\u0644",
  kpiRegFemalePartic: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0645\u0631\u0623\u0629",
  kpiRegInternet: "\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",
  kpiRegLiteracy: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0645\u0639\u0631\u0641\u0629",
  kpiRegInfantMort: "\u0648\u0641\u064a\u0627\u062a \u0627\u0644\u0631\u0636\u0639",
  kpiRegLifeExp: "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0639\u0645\u0631",
  kpiRegHealthExp: "\u0625\u0646\u0641\u0627\u0642 \u0627\u0644\u0635\u062d\u0629",
  kpiRegVaccination: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0637\u0639\u064a\u0645",
  kpiRegPhysicians: "\u0623\u0637\u0628\u0627\u0621/10 \u0622\u0644\u0627\u0641",
  kpiRegWaterAccess: "\u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0635\u0627\u0644\u062d\u0629",
  kpiRegHousingDeficit: "\u0639\u062c\u0632 \u0627\u0644\u0633\u0643\u0646",
  kpiRegVehicles: "\u0645\u0631\u0643\u0628\u0627\u062a/10 \u0622\u0644\u0627\u0641",
  kpiRegIndustrialUnits: "\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629",
  kpiRegRoadDensity: "\u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0637\u0631\u0642",
  kpiRegMobilePenetration: "\u0627\u062e\u062a\u0631\u0627\u0642 \u0627\u0644\u0647\u0627\u062a\u0641",
  kpiRegBroadband: "\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a \u0627\u0644\u0646\u062a",
  kpiRegAgriculturalLand: "\u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629",
  kpiRegGiniIncome: "\u062c\u064a\u0646\u064a (\u0627\u0644\u062f\u062e\u0644)",
  kpiRegHDI: "\u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u0646\u0645\u064a\u0629",
  kpiRegGrowthRate: "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  chartRegionPopulation: "\u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionPopulationSub: "\u0622\u0644\u0627\u0641 \u0627\u0644\u0633\u0643\u0627\u0646 – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621 RGPH 2022",
  chartRegionDensityBar: "\u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionDensityBarSub: "\u0633\u0643\u0627\u0646 \u0644\u0643\u0644 \u0643\u0645\u00b2",
  chartRegionEmployStruct: "\u0647\u064a\u0643\u0644 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionEmployStructSub: "% \u0645\u0646 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0625\u0642\u0644\u064a\u0645\u064a \u062d\u0633\u0628 \u0627\u0644\u0642\u0637\u0627\u0639",
  chartRegionHDI: "\u0645\u0624\u0634\u0631 \u0627\u0644\u062a\u0646\u0645\u064a\u0629 \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0627\u0644\u0625\u0642\u0644\u064a\u0645\u064a (2015–2024)",
  chartRegionHDISub: "\u0645\u0624\u0634\u0631 \u0645\u0631\u0643\u0628 (\u0635\u062d\u0629\u060c \u062a\u0639\u0644\u064a\u0645\u060c \u062f\u062e\u0644) – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionUrbanTrend: "\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u062a\u062d\u0636\u0631 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2015–2024)",
  chartRegionUrbanTrendSub: "% \u0645\u0646 \u0627\u0644\u0633\u0643\u0627\u0646 \u0627\u0644\u062d\u0636\u0631\u064a\u064a\u0646",
  chartRegionInequality: "\u0645\u0624\u0634\u0631\u0627\u062a \u0639\u062f\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionInequalitySub: "\u0645\u0639\u0627\u0645\u0644 \u062c\u064a\u0646\u064a \u062d\u0633\u0628 \u0627\u0644\u0628\u0639\u062f – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionInfra: "\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 (2024)",
  chartRegionInfraSub: "\u0645\u0642\u0627\u064a\u064a\u0633 \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629 – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartRegionDevScatter: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0627\u0644\u062a\u0646\u0645\u064a\u0629: \u0627\u0644\u0646\u0627\u062a\u062c \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0635\u062d\u0629 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0645 (2024)",
  chartRegionDevScatterSub: "\u062d\u062c\u0645 \u0627\u0644\u0641\u0642\u0627\u0639\u0629 = \u0645\u0639\u062f\u0644 \u0627\u0644\u0641\u0642\u0631 – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621",
  chartWilayaPopRank: "\u0623\u0643\u0628\u0631 20 \u0648\u0644\u0627\u064a\u0629 \u0645\u0646 \u062d\u064a\u062b \u0627\u0644\u0633\u0643\u0627\u0646 (2024)",
  chartWilayaPopRankSub: "\u0622\u0644\u0627\u0641 \u0627\u0644\u0633\u0643\u0627\u0646 – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0648\u0641\u0627\u0621 RGPH 2022",
  chartWilayaUnempRank: "\u0623\u0639\u0644\u0649 15 \u0648\u0644\u0627\u064a\u0629 \u0645\u0646 \u062d\u064a\u062b \u0627\u0644\u0628\u0637\u0627\u0644\u0629 (2024)",
  chartWilayaUnempRankSub: "% – \u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0627\u0644\u0648\u0641\u0627\u0621 2024",
  chartRegionEmpLabel: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644 (\u0623\u0644\u0641)",
  chartRegionAgriEmp: "\u0627\u0644\u0632\u0631\u0627\u0639\u0629",
  chartRegionIndEmp: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629",
  chartRegionConstrEmp: "\u0627\u0644\u0628\u0646\u0627\u0621",
  chartRegionServEmp: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
  chartRegionPublicEmp: "\u0627\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0645\u0648\u0645\u064a",
  chartRoadDensity: "\u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0637\u0631\u0642 (\u0643\u0645/\u0643\u0645\u00b2)",
  chartWaterSupply: "\u0627\u0644\u0645\u064a\u0627\u0647 \u0627\u0644\u0635\u0627\u0644\u062d\u0629 %",
  chartSewage: "\u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0635\u062d\u064a %",
  chartBroadband: "\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0631\u064a\u0636 (\u0623\u0644\u0641)",
  chartMobilePen: "\u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u062d\u0645\u0648\u0644 %",
  chartInternetUsers: "\u0645\u0633\u062a\u062e\u062f\u0645\u0648 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a %",
  chartGiniIncome: "\u062c\u064a\u0646\u064a \u0627\u0644\u062f\u062e\u0644",
  chartGiniEducation: "\u062c\u064a\u0646\u064a \u0627\u0644\u062a\u0639\u0644\u064a\u0645",
  chartGiniHealth: "\u062c\u064a\u0646\u064a \u0627\u0644\u0635\u062d\u0629",
  chartGiniHousing: "\u062c\u064a\u0646\u064a \u0627\u0644\u0633\u0643\u0646",
  chartCentreHDI: "\u0627\u0644\u0645\u0631\u0643\u0632",
  chartEstHDI: "\u0627\u0644\u0634\u0631\u0642",
  chartOuestHDI: "\u0627\u0644\u063a\u0631\u0628",
  chartSudHDI: "\u0627\u0644\u062c\u0646\u0648\u0628",
  chartHPHDI: "\u0627\u0644\u0647\u0636\u0628 \u0627\u0644\u0639\u0627\u0644\u064a",
  chartSecondaryEnrol: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062b\u0627\u0646\u0648\u064a %",
  chartHospitalBeds: "\u0623\u0633\u0631\u0629/10 \u0622\u0644\u0627\u0641",
  chartPovertyRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0641\u0642\u0631 %",
  chartEmploymentPct: "\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 %",
  chartFemalePartLabel: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0646\u0633\u0627\u0621 %",
  chartYouthEmpLabel: "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0634\u0628\u0627\u0628 %",

  footer: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0645\u0643\u062a\u0628 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u0644\u0625\u062d\u0635\u0627\u0621\u0627\u062a (ONS) \u2014 www.ons.dz | \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0646 \u0645\u0646\u0634\u0648\u0631\u0627\u062a ONS (\u0627\u0644\u0623\u0633\u0639\u0627\u0631\u060c \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u060c \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0648\u0637\u0646\u064a\u0629\u060c \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629\u060c \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629\u060c \u0627\u0644\u062a\u0639\u062f\u0627\u062f \u0627\u0644\u0633\u0643\u0627\u0646\u064a)",
  tabSdg: "أهداف التنمية المستدامة",
  kpiOilProd: "إنتاج النفط",
  kpiGasProd: "إنتاج الغاز",
  kpiHydroGdpShare: "مساهمة المحروقات في الناتج المحلي",
  kpiHydroExports: "صادرات المحروقات",
  kpiReservesOil: "احتياطيات النفط",
  kpiReservesGas: "احتياطيات الغاز",
  chartHydroRevenueSub: "اتجاهات الإيرادات 2015-2024",
  chartHydroExportsSub: "صادرات المحروقات مقابل غير المحروقات",
  chartOilPriceSub: "أسعار برنت وساهاران بلند الجزائري",
  chartHydroGdpSub: "مساهمة قطاع المحروقات في الناتج المحلي",
  chartOilProductionSub: "حجم الإنتاج السنوي للنفط والغاز",
  chartHydroRevLabel: "الإيرادات",
  chartExportsLabel: "الصادرات",
  chartOilProdLabel: "النفط",
  chartGasProdLabel: "الغاز",
  chartHydroVsNonHydroSub: "حصة المحروقات في إجمالي الصادرات",
  chartNonHydroExportLabel: "غير محروقات",
  chartReservesPieSub: "توزيع الاحتياطيات المثبوتة",
  chartGasReservesLabel: "الغاز الطبيعي",
  kpiRefining: "سعة التهرئة",
  kpiDomesticConsump: "الاستهلاك الداخلي",
  kpiRPRatioOil: "نسبة R/P (النفط)",
  kpiNewWells: "آبار جديدة",
  kpiExplorationInvest: "استثمار الاستكشاف",
  chartLNGExportsSub: "حجم صادرات الغاز المسال",
  chartRefiningSub: "معدل استخدام طاقة التهرئة",
  chartExplorationInvestSub: "استثمار الاستكشاف والإنتاج",
  chartRefiningLabel: "التهرئة",
  chartExplorInvestLabel: "استثمار الاستكشاف",
  kpiSelfSuffic: "معدل الابتذار الذاتي",
  kpiAgriExports: "صادرات زراعية",
  kpiAgriEmploy: "التشغيل الزراعي",
  kpiFruitProd: "إنتاج الفواكه",
  kpiMilkProd: "إنتاج الحليب",
  kpiIrrigatedLand: "الأراضي المستسقاة",
  chartCerealProdSub: "اتجاهات إنتاج الحبوب",
  chartSelfSufficSub: "معدل الابتذار الذاتي حسب المنتج",
  chartAgriExportsSub: "قيمة الصادرات الزراعية",
  chartVegFruitProdSub: "إنتاج الخضروات والفواكه",
  chartLivestockSub: "أعداد المواشي",
  chartLandUseSub: "توزيع استخدام الأراضي الزراعية",
  chartSelfSufficLabel: "ابتذار ذاتي",
  chartAgriExportsLabel: "صادرات زراعية",
  chartFruitLabel: "فواكه",
  chartMilkLabel: "حليب",
  chartMeatLabel: "لحم",
  chartTotalLandLabel: "الإجمالي",
  chartOliveDateProdSub: "إنتاج زيت الزيتون والتمور",
  chartDateLabel: "تمور",
  kpiCerealImports: "واردات الحبوب",
  kpiPoultryProd: "إنتاج الدواجن",
  kpiTractorFleet: "أسطول الجرار",
  kpiFertilizer: "استخدام الأسمدة",
  chartPoultryProdSub: "إنتاج الدواجن والبيض",
  chartTractorFertilizerSub: "المعدات والمدخلات الزراعية",
  chartCerealImportsSub: "الاعتماد على واردات الحبوب",
  chartTractorLabel: "جرارات",
  chartFertilizerLabel: "أسمدة",
  chartCerealImportLabel: "واردات حبوب",
  chartAgriGdpLabel: "ناتج زراعي",
  kpiPharma: "الأدوية",
  kpiTextiles: "النسيج",
  kpiChemicals: "الكيمياء",
  kpiBuildingMat: "مواد البناء",
  kpiElectrical: "المعدات الكهربائية",
  kpiPaper: "الورق والكرتون",
  chartManufSubsectorsSub: "الإنتاج الصناعي حسب القطاع الفرعي",
  chartManufRadarSub: "رادار تنافسية القطاعات",
  chartTextileLabel: "النسيج",
  chartChemicalLabel: "الكيمياء",
  chartElectricLabel: "كهربائي",
  chartBuildingMatLabel: "مواد بناء",
  chartPaperLabel: "ورق",
  chartManufBuildingPaperSub: "صناعة مواد البناء والورق",
  chartManufEmployCapacitySub: "التشغيل ومعدل استخدام الطاقة الإنتاجية",
  chartEmployLabel: "تشغيل",
  chartManufExportLabel: "صادرات",
  kpiManufExports: "صادرات صناعية",
  kpiCapacityUtil: "معدل استخدام الطاقة",
  kpiManufGdp: "ناتج صناعي",
  kpiNumEnterprises: "المؤسسات",
  kpiPrivateShare: "حصة القطاع الخاص",
  kpiManufFDI: "استثمار أجنبي صناعي",
  kpiProductivity: "إنتاجية العمل",
  chartManufGDPSub: "اتجاه الناتج المحلي الصناعي",
  chartManufFDISub: "تدفقات الاستثمار الأجنبي للصناعة",
  chartManufFDILabel: "استثمار أجنبي",
  chartProductivityLabel: "إنتاجية",
  kpiCementProd: "إنتاج الإسمنت",
  kpiBTPGdp: "حصة البناء والأشغال من الناتج",
  kpiBTPEmploy: "تشغيل البناء والأشغال",
  chartHousingUnitsSub: "وحدات السكن المسلمة",
  chartCementSteelSub: "إنتاج الإسمنت والفولاذ",
  chartBTPCostIndexSub: "مؤشر تكاليف البناء",
  chartBTPInvestSub: "الاستثمار العام في البناء",
  chartCementLabel: "إسمنت",
  chartSteelLabel: "فولاذ",
  chartPublicInvestLabel: "استثمار عام",
  chartPermitsLabel: "رخصة",
  kpiTrade: "حصة التجارة",
  kpiTransport: "حصة النقل",
  kpiTelecom: "حصة الاتصالات",
  chartServicesCompositionSub: "تركيب قطاع الخدمات",
  chartServicesTrendSub: "اتجاه ناتج الخدمات",
  chartTransportLabel: "النقل",
  chartTelecomLabel: "الاتصالات",
  chartTourismLabel: "السياحة",
  chartGovtLabel: "الحكومة",
  kpiGasConsump: "استهلاك الغاز",
  kpiIronOre: "إنتاج خام الحديد",
  kpiPhosphate: "إنتاج الفسفات",
  chartMiningProdSub: "حجم الإنتاج المناقي",
  chartEnergyConsumpSub: "استهلاك الطاقة حسب المصدر",
  chartElectricitySub: "ميزان إنتاج الكهرباء",
  chartPhosphateLabel: "فسفات",
  chartZincLabel: "زنك",
  chartSaltLabel: "ملح",
  chartElectricityLabel: "كهرباء",
  chartPetrolConsumpLabel: "استهلاك النفط",
  kpiPhysicians: "أطباء / 10 آلاف",
  kpiNurses: "ممرضون / 10 آلاف",
  kpiHealthExpenditure: "النفقات الصحية",
  kpiLifeExpectancy: "متوسط العمر",
  kpiInfantMortality: "وفيات الرضع",
  kpiMaternalMortality: "وفيات الأمومات",
  kpiVaccination: "معدل التلقيح",
  kpiNumHospitals: "المستشفيات",
  kpiHealthCenters: "مراكز الصحة",
  kpiPolyclinics: "المتعدديات",
  kpiPrimaryCareVisits: "زيارات الرعاية الأولية",
  chartHealthInfrastructureSub: "البنية التحتية الصحية حسب الولاية",
  chartPersonnelTrendSub: "اتجاهات الكوادر الطبي",
  chartMortalityTrendSub: "اتجاهات معدلات الوفيات",
  chartHealthExpenditureTrendSub: "تطور النفقات الصحية",
  chartVaccinationTrendSub: "اتجاهات تغطية التلقيح",
  chartHealthCentersLabel: "مراكز الصحة",
  chartPolyclinicsLabel: "المتعدديات",
  chartNursesLabel: "ممرضون",
  chartMaternalMortLabel: "وفيات أمومات",
  chartLifeExpLabel: "متوسط عمر",
  chartVaccinationLabel: "تلقيح",
  chartPrimaryCareLabel: "رعاية أولية",

  // SDG Tab
  kpiSdgOnTrack: "14",
  kpiSdgModerate: "8",
  kpiSdgInsufficient: "6",
  kpiSdgAchieved: "2",
  chartSdgProgress: "تقدم أهداف التنمية المستدامة",
  chartSdgProgressSub: "حالة تقدم أهداف 2030",
  chartSdgRadar: "رادار التنمية المستدامة",
  chartSdgRadarSub: "مؤشرات الأداء",
  chartSdgTimeline: "الجدول الزمني للأهداف",
  chartSdgTimelineSub: "مؤشرات الانخفاض منذ 2015",
  chartSdgEnergyMix: "ميزان الطاقة",
  chartSdgEnergyMixSub: "التحول الطاقوي 2024-2035",
  chartSdgHousing: "برامج السكن",
  chartSdgHousingSub: "وحدات السكن المسلمة والمبرمجة",
  chartSdgDesalination: "تحلية مياه البحر",
  chartSdgDesalinationSub: "سعة تحلية مياه البحر",
  chartSdgWaterReuse: "إعادة استخدام المياه",
  chartSdgWaterReuseSub: "حجم إعادة استخدام مياه الصرف الصحي",
  chartSdgTelecoms: "الاتصالات",
  chartSdgTelecomsSub: "انتشار الهاتف والإنترنت",
  chartSdgInnovation: "الابتكار",
  chartSdgInnovationSub: "البحث والتطوير",
  chartSdgFood: "الأمن الغذائي",
  chartSdgFoodSub: "الابتذار الذاتي والإنتاج",
  chartSdgEducation: "التعليم",
  chartSdgEducationSub: "معدلات التسجيل والمعرفية",
  chartSdgInequality: "التفاوتات",
  chartSdgInequalitySub: "معدل جيني والتغطية الاجتماعية",
  chartSdgOceans: "المحيطات",
  chartSdgOceansSub: "المناطق البحرية المحمية",
  labelRef2015: "مرجع 2015",
  labelRecent: "الأخير",
  labelTarget2030: "هدف 2030",
  labelProgress: "التقدم",
  labelOnTrack: "على المسار",
  labelModerate: "متوسط",
  labelInsufficient: "غير كافٍ",
  labelAchieved: "محقق",
  labelStatus: "الحالة",
  labelHigh: "عالٍ",
  labelMedium: "متوسط",
  labelSdg: "هدف تنمية",
  labelName: "الاسم",
  labelValue: "القيمة",
  labelTarget: "الهدف",
  labelGazNatural: "الغاز الطبيعي",
  labelSolarPV: "الشمسية",
  labelHydro: "المائية",
  labelWind: "الرياح",
  labelOtherEnr: "طاقة متجددة أخرى",
  labelFuelOil: "المازوت",
  labelYear: "السنة",
  labelUnits: "الوحدات",
  labelPrimary: "الابتدائي",
  labelSecondary: "المتوسط",
  labelHigher: "الجامعي",
  labelLiteracy: "المعرفية",
  labelFemaleHigher: "إناث أنثى",
  labelPreprimary: "ما قبل الابتدائي",
  labelMobile: "الهاتف",
  labelInetMobile: "إنترنت محمول",
  labelInetPop: "مستخدمو إنترنت",
  labelCoverage4G: "تغطية 4G",
  labelInetFix: "إنترنت ثابت",
  labelRdPib: "بحث / ناتج",
  labelStartups: "ناشئات",
  labelIncubators: "حضانات",
  labelUniversities: "جامعات",
  labelCapacity: "السعة",
  labelStations: "محطات",
  labelVolume: "الحجم",
  labelMarineProtected: "مناطق محمية",
  labelFisheries: "الصيد",
  labelMonitoring: "الرصد",
  labelCoastalPlans: "خطط ساحلية",
  labelWheat: "قمح",
  labelMilk: "حليب",
  labelMilkCov: "تغطية حليب",
  labelAquaculture: "الأقراص",
  labelUndernourish: "سوء التغذية",
  labelGini: "جيني",
  labelSocialCov: "تغطية اجتماعية",
  labelQuintileShare: "حصة الخمسي",
  labelRemittanceCost: "تكلفة الحوالة",
  labelSdgSource: "المصدر: ONS ومراجع الأهداف",
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