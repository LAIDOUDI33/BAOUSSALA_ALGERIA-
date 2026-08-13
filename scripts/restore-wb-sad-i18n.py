"""Add WB and SAD i18n keys to Dictionary interface + FR/EN/AR dictionaries"""

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

# ─── 1. Add to Dictionary interface (before wilaya block) ─────────────────
interface_keys = '''  // ─── WORLD BANK ─────────────────────────────────────────────────
  tabWorldBank: string;
  wbKpiGdp: string;
  wbKpiInflation: string;
  wbKpiPop: string;
  wbKpiGni: string;
  wbKpiUnemp: string;
  wbKpiTrade: string;
  wbKpiFdi: string;
  wbKpiDebt: string;
  chartWbGdpGrowth: string;
  chartWbGdpGrowthSub: string;
  chartWbGdpCapita: string;
  chartWbGdpCapitaSub: string;
  chartWbInflation: string;
  chartWbInflationSub: string;
  chartWbUnemp: string;
  chartWbUnempSub: string;
  chartWbTradeFdi: string;
  chartWbTradeFdiSub: string;
  chartWbPopGrowth: string;
  chartWbPopGrowthSub: string;
  chartWbInternetTrend: string;
  chartWbInternetTrendSub: string;
  chartWbEduHealthSpend: string;
  chartWbEduHealthSpendSub: string;
  chartWbGcfComp: string;
  chartWbGcfCompSub: string;
  chartWbDeviation: string;
  chartWbDeviationSub: string;
  labelWb: string;
  labelWbSource: string;
  labelOns: string;
  labelMobileSubs: string;
  labelBroadband: string;
  labelEduSpend: string;
  labelHealthSpend: string;

  // ─── SAD (AIDE À LA DÉCISION) ───────────────────────────────────────
  tabSad: string;
  sadForecastTab: string;
  sadSimulationTab: string;
  sadAlertsTab: string;
  sadScenarioBase: string;
  sadScenarioOpti: string;
  sadScenarioPessi: string;
  sadLeverOilPrice: string;
  sadLeverOilProd: string;
  sadLeverInvestment: string;
  sadLeverTourism: string;
  sadLeverAgriculture: string;
  sadLeverIndustry: string;
  sadAlertTitle: string;
  sadAlertDesc: string;
  sadNoAlerts: string;
  sadSource: string;
  sadMethodTitle: string;
  sadMethodDesc: string;
  sadMethodHolt: string;
  sadMethodHoltDesc: string;
  sadDisclaimer: string;

'''

content = content.replace('  // ─── WILAYA', interface_keys + '  // ─── WILAYA')

# ─── 2. English ─────────────────────────────────────────────────────────
en_block = '''  tabWorldBank: "World Bank",
  wbKpiGdp: "GDP Growth",
  wbKpiInflation: "Inflation",
  wbKpiPop: "Population",
  wbKpiGni: "GNI/Capita",
  wbKpiUnemp: "Unemployment",
  wbKpiTrade: "Trade (% GDP)",
  wbKpiFdi: "FDI Inflows",
  wbKpiDebt: "External Debt",
  chartWbGdpGrowth: "GDP Growth (WB)",
  chartWbGdpGrowthSub: "World Bank — Annual % change",
  chartWbGdpCapita: "GDP Per Capita (WB)",
  chartWbGdpCapitaSub: "Current USD — World Bank data",
  chartWbInflation: "Inflation (WB)",
  chartWbInflationSub: "Annual % — CPI",
  chartWbUnemp: "Unemployment (WB)",
  chartWbUnempSub: "ILO estimate — % of labor force",
  chartWbTradeFdi: "Trade & FDI (WB)",
  chartWbTradeFdiSub: "Trade openness + Foreign Direct Investment",
  chartWbPopGrowth: "Population Growth (WB)",
  chartWbPopGrowthSub: "Total population in millions",
  chartWbInternetTrend: "Digital Connectivity (WB)",
  chartWbInternetTrendSub: "Internet, mobile & broadband penetration",
  chartWbEduHealthSpend: "Education & Health Spending (WB)",
  chartWbEduHealthSpendSub: "% of GDP — World Bank",
  chartWbGcfComp: "Gross Capital Formation: WB vs ONS",
  chartWbGcfCompSub: "Comparison of investment rate estimates",
  chartWbDeviation: "WB vs ONS Deviation Summary",
  chartWbDeviationSub: "Key indicator differences",
  labelWb: "World Bank",
  labelWbSource: "Source: World Bank Open Data (data.worldbank.org) — Compared with ONS publications",
  labelOns: "ONS",
  labelMobileSubs: "Mobile %",
  labelBroadband: "Broadband %",
  labelEduSpend: "Education % GDP",
  labelHealthSpend: "Health % GDP",
  tabSad: "Decision Aid",
  sadForecastTab: "Forecasts",
  sadSimulationTab: "What-If",
  sadAlertsTab: "Alerts",
  sadScenarioBase: "Baseline",
  sadScenarioOpti: "Optimistic",
  sadScenarioPessi: "Pessimistic",
  sadLeverOilPrice: "Oil Price ($/bbl)",
  sadLeverOilProd: "Oil Production (M bbl/d)",
  sadLeverInvestment: "Investment Rate (% GDP)",
  sadLeverTourism: "Tourism Revenue ($B)",
  sadLeverAgriculture: "Agriculture Growth (%)",
  sadLeverIndustry: "Industry Growth (%)",
  sadAlertTitle: "Intelligent Alerts",
  sadAlertDesc: "Anomaly detection on ONS data",
  sadNoAlerts: "No alerts — all indicators within normal range.",
  sadSource: "Source: ONS data — Anomaly detection via Z-score & threshold analysis",
  sadMethodTitle: "Methodology",
  sadMethodDesc: "Forecasts use Linear Regression and Holt's Exponential Smoothing. What-If uses proportional impact on GDP components.",
  sadMethodHolt: "Holt's Smoothing",
  sadMethodHoltDesc: "Double exponential smoothing capturing level + trend.",
  sadDisclaimer: "Simulations are illustrative projections, not official forecasts.",
'''

content = content.replace(
    '  tabWilaya: "Wilayas",',
    en_block + '  tabWilaya: "Wilayas",'
)

# ─── 3. French ─────────────────────────────────────────────────────────
fr_block = '''  tabWorldBank: "Banque Mondiale",
  wbKpiGdp: "Croissance PIB",
  wbKpiInflation: "Inflation",
  wbKpiPop: "Population",
  wbKpiGni: "RNB/Habitant",
  wbKpiUnemp: "Chômage",
  wbKpiTrade: "Commerce (% PIB)",
  wbKpiFdi: "IDE",
  wbKpiDebt: "Dette Extérieure",
  chartWbGdpGrowth: "Croissance PIB (BM)",
  chartWbGdpGrowthSub: "Banque Mondiale — Variation annuelle %",
  chartWbGdpCapita: "PIB Par Habitant (BM)",
  chartWbGdpCapitaSub: "USD courant — Données Banque Mondiale",
  chartWbInflation: "Inflation (BM)",
  chartWbInflationSub: "Annuelle % — IPC",
  chartWbUnemp: "Chômage (BM)",
  chartWbUnempSub: "Estimation OIT — % de la population active",
  chartWbTradeFdi: "Commerce & IDE (BM)",
  chartWbTradeFdiSub: "Ouverture commerciale + Investissement étranger",
  chartWbPopGrowth: "Évolution Population (BM)",
  chartWbPopGrowthSub: "Population totale en millions",
  chartWbInternetTrend: "Connectivité Numérique (BM)",
  chartWbInternetTrendSub: "Taux de pénétration internet, mobile & haut débit",
  chartWbEduHealthSpend: "Dépenses Éducation & Santé (BM)",
  chartWbEduHealthSpendSub: "% du PIB — Banque Mondiale",
  chartWbGcfComp: "FBCF : BM vs ONS",
  chartWbGcfCompSub: "Comparaison des estimations du taux d'investissement",
  chartWbDeviation: "Écarts BM vs ONS",
  chartWbDeviationSub: "Différences sur les indicateurs clés",
  labelWb: "Banque Mondiale",
  labelWbSource: "Source : Banque Mondiale — Données Ouvertes (data.worldbank.org) — Comparées aux publications ONS",
  labelOns: "ONS",
  labelMobileSubs: "Mobile %",
  labelBroadband: "Haut débit %",
  labelEduSpend: "Éducation % PIB",
  labelHealthSpend: "Santé % PIB",
  tabSad: "Aide à la Décision",
  sadForecastTab: "Prévisions",
  sadSimulationTab: "Simulations",
  sadAlertsTab: "Alertes",
  sadScenarioBase: "Baseline",
  sadScenarioOpti: "Optimiste",
  sadScenarioPessi: "Pessimiste",
  sadLeverOilPrice: "Prix Pétrole ($/bbl)",
  sadLeverOilProd: "Production Pétrole (M bbl/j)",
  sadLeverInvestment: "Taux d'Investissement (% PIB)",
  sadLeverTourism: "Revenus Tourisme ($Mrd)",
  sadLeverAgriculture: "Croissance Agriculture (%)",
  sadLeverIndustry: "Croissance Industrie (%)",
  sadAlertTitle: "Alertes Intelligentes",
  sadAlertDesc: "Détection d'anomalies sur données ONS",
  sadNoAlerts: "Aucune alerte — tous les indicateurs dans la normale.",
  sadSource: "Source : Données ONS — Détection d'anomalies par Z-score & seuils",
  sadMethodTitle: "Méthodologie",
  sadMethodDesc: "Prévisions par Régression Linéaire et Lissage Exponentiel de Holt. Simulations par impact proportionnel sur les composantes du PIB.",
  sadMethodHolt: "Lissage de Holt",
  sadMethodHoltDesc: "Double lissage exponentiel captant le niveau + la tendance.",
  sadDisclaimer: "Les simulations sont des projections illustratives, pas des prévisions officielles.",
'''

# Find the French tabWilaya line and insert before it
content = content.replace(
    '  tabWilaya: "Wilayas",',  # Will match second occurrence (French)
    fr_block + '  tabWilaya: "Wilayas",'
)

# ─── 4. Arabic ─────────────────────────────────────────────────────────
ar_block = '''  tabWorldBank: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u062f\u0648\u0644\u064a",
  wbKpiGdp: "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",
  wbKpiInflation: "\u0627\u0644\u062a\u0636\u062e\u0645",
  wbKpiPop: "\u0627\u0644\u0633\u0643\u0627\u0646",
  wbKpiGni: "\u0627\u0644\u062f\u062e\u0644 \u0627\u0644\u0642\u0648\u0645\u064a",
  wbKpiUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  wbKpiTrade: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 (% \u0646\u0627\u062a\u062c)",
  wbKpiFdi: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a",
  wbKpiDebt: "\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u062e\u0627\u0631\u062c\u064a",
  chartWbGdpGrowth: "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c (BM)",
  chartWbGdpGrowthSub: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u062f\u0648\u0644\u064a — \u062a\u063a\u064a\u0631 \u0633\u0646\u0648\u064a %",
  chartWbGdpCapita: "\u0627\u0644\u0646\u0627\u062a\u062c \u0644\u0643\u0644 \u0646\u0633\u0645\u0629 (BM)",
  chartWbGdpCapitaSub: "\u062f\u0648\u0644\u0627\u0631 \u0623\u0645\u0631\u064a\u0643\u064a",
  chartWbInflation: "\u0627\u0644\u062a\u0636\u062e\u0645 (BM)",
  chartWbInflationSub: "\u0633\u0646\u0648\u064a %",
  chartWbUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 (BM)",
  chartWbUnempSub: "\u062a\u0642\u062f\u064a\u0631 \u0645\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0644",
  chartWbTradeFdi: "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 & \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 (BM)",
  chartWbTradeFdiSub: "\u0627\u0646\u0641\u062a\u0627\u062d \u062a\u062c\u0627\u0631\u064a + \u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0623\u062c\u0646\u0628\u064a",
  chartWbPopGrowth: "\u0646\u0645\u0648 \u0627\u0644\u0633\u0643\u0627\u0646 (BM)",
  chartWbPopGrowthSub: "\u0627\u0644\u0633\u0643\u0627\u0646 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a",
  chartWbInternetTrend: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0631\u0642\u0645\u064a (BM)",
  chartWbInternetTrendSub: "\u0627\u0646\u062a\u0634\u0627\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a \u0648\u0627\u0644\u0647\u0627\u062a\u0641",
  chartWbEduHealthSpend: "\u0625\u0646\u0641\u0627\u0642 \u0627\u0644\u062a\u0639\u0644\u064a\u0645 & \u0627\u0644\u0635\u062d\u0629 (BM)",
  chartWbEduHealthSpendSub: "% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c",
  chartWbGcfComp: "\u0627\u0644\u062a\u0643\u0648\u064a\u0646: BM vs ONS",
  chartWbGcfCompSub: "\u0645\u0642\u0627\u0631\u0646\u0629 \u062a\u0642\u062f\u064a\u0631\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",
  chartWbDeviation: "\u0627\u0644\u0627\u0646\u062d\u0631\u0627\u0641\u0627\u062a BM vs ONS",
  chartWbDeviationSub: "\u0627\u0644\u0641\u0631\u0648\u0642 \u0641\u064a \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a",
  labelWb: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u062f\u0648\u0644\u064a",
  labelWbSource: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u062f\u0648\u0644\u064a — \u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u0639 ONS",
  labelOns: "ONS",
  labelMobileSubs: "\u0647\u0627\u062a\u0641 %",
  labelBroadband: "\u0628\u0631\u0648\u0627\u062f\u0628\u0627\u0646\u062f %",
  labelEduSpend: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 % \u0646\u0627\u062a\u062c",
  labelHealthSpend: "\u0627\u0644\u0635\u062d\u0629 % \u0646\u0627\u062a\u062c",
  tabSad: "\u0627\u0644\u0642\u0631\u0627\u0631",
  sadForecastTab: "\u062a\u0648\u0642\u0639\u0627\u062a",
  sadSimulationTab: "\u0645\u062d\u0627\u0643\u0627\u0629",
  sadAlertsTab: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a",
  sadScenarioBase: "\u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648",
  sadScenarioOpti: "\u0645\u062a\u0641\u0627\u0626\u0644",
  sadScenarioPessi: "\u0645\u062a\u0634\u0627\u0626\u0645",
  sadLeverOilPrice: "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637 ($/\u0628\u0631\u0645\u0644)",
  sadLeverOilProd: "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0646\u0641\u0637 (M \u0628\u0631\u0645\u0644/\u064a)",
  sadLeverInvestment: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 (% \u0646\u0627\u062a\u062c)",
  sadLeverTourism: "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u062d\u0629 ($\u0645\u0631\u064a\u0627\u0631\u062f)",
  sadLeverAgriculture: "\u0646\u0645\u0648 \u0627\u0644\u0632\u0631\u0627\u0639\u0629 (%)",
  sadLeverIndustry: "\u0646\u0645\u0648 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 (%)",
  sadAlertTitle: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0630\u0643\u064a\u0629",
  sadAlertDesc: "\u0643\u0634\u0641 \u0627\u0644\u0634\u0630\u0648\u0630 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a ONS",
  sadNoAlerts: "\u0644\u0627 \u062a\u0646\u0628\u064a\u0647\u0627\u062a — \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0637\u0628\u064a\u0639\u064a\u0629.",
  sadSource: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0628\u064a\u0627\u0646\u0627\u062a ONS — Z-score",
  sadMethodTitle: "\u0627\u0644\u0645\u0646\u0647\u062c\u064a\u0629",
  sadMethodDesc: "\u0627\u0644\u062a\u0648\u0642\u0639\u0627\u062a \u0628\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631 \u0627\u0644\u062e\u0637\u064a + \u0644\u0633\u0645 \u0647\u0648\u0644\u062a.",
  sadMethodHolt: "\u062a\u0633\u0637\u064a\u062d \u0647\u0648\u0644\u062a",
  sadMethodHoltDesc: "\u062a\u0633\u0637\u064a\u062d \u0623\u0633\u064a \u062b\u0646\u0627\u0626\u064a.",
  sadDisclaimer: "\u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629 \u062a\u0648\u0642\u0639\u0627\u062a \u062a\u0648\u0636\u064a\u062d\u064a\u0629 \u0644\u064a\u0633\u062a \u0631\u0633\u0645\u064a\u0629.",
'''

# The third occurrence of tabWilaya is Arabic
content = content.replace(
    '  tabWilaya: "Wilayas",',  # Third occurrence (Arabic)
    ar_block + '  tabWilaya: "\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a",'
)

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)

print('Done - WB + SAD i18n keys added to interface + EN/FR/AR')
