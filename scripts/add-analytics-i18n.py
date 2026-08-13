#!/usr/bin/env python3
"""Add analytics module i18n keys to dictionaries.ts safely."""
import re

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

# New interface keys to add after 'sadFInd6: string;'
new_interface_keys = '''
  // ─── ANALYTICS MODULES ─────────────────────────────────
  sadTabAnalytics: string;
  sadTabCorrelation: string;
  sadTabBenchmark: string;
  sadTabReports: string;
  sadTabCustomDash: string;
  sadCorrGDP: string;
  sadCorrInflation: string;
  sadCorrUnemp: string;
  sadCorrTrade: string;
  sadCorrIPI: string;
  sadCorrDebt: string;
  sadCorrOilPrice: string;
  sadCorrOilRev: string;
  sadCorrTitle: string;
  sadCorrSub: string;
  sadCorrTableInd: string;
  sadCorrTopPairs: string;
  sadCorrTopPairsSub: string;
  sadBenchGrowth: string;
  sadBenchInflation: string;
  sadBenchUnemp: string;
  sadBenchTrade: string;
  sadBenchDebt: string;
  sadBenchFdi: string;
  sadBenchGni: string;
  sadBenchEnergy: string;
  sadBenchSelect: string;
  sadBenchRanking: string;
  sadBenchSub: string;
  sadBenchRadarTitle: string;
  sadBenchRadarSub: string;
  sadRepMacro: string;
  sadRepPrices: string;
  sadRepLabor: string;
  sadRepTrade: string;
  sadRepRisks: string;
  sadRepGdpGrowth: string;
  sadRepUp: string;
  sadRepGdpNom: string;
  sadRepNonHC: string;
  sadRepInflationDec: string;
  sadRepDown: string;
  sadRepDeflation: string;
  sadRepFood: string;
  sadRepUnemp: string;
  sadRepActivity: string;
  sadRepYouth: string;
  sadRepExports: string;
  sadRepImports: string;
  sadRepBalance: string;
  sadRepHydroShare: string;
  sadRepRisk1: string;
  sadRepRisk2: string;
  sadRepRisk3: string;
  sadRepAutoTitle: string;
  sadRepAutoSub: string;
  sadRepExport: string;
  sadCustomSelect: string;
  sadCustomSelected: string;
  sadCustomEmpty: string;
  sadCustomChart: string;
  sadCustomChartLabel: string;
  sadCustomDir: string;
  sadCustomUp: string;
  sadCustomDown: string;
'''

# 1. Add interface keys after sadFInd6
old_if = '  sadFInd6: string;\n}'
new_if = '  sadFInd6: string;\n' + new_interface_keys + '}'
content = content.replace(old_if, new_if, 1)

# 2. EN values
en_vals = '''  sadTabAnalytics: "Analytics",
  sadTabCorrelation: "Correlations",
  sadTabBenchmark: "Benchmarking",
  sadTabReports: "Reports",
  sadTabCustomDash: "Custom",
  sadCorrGDP: "GDP Growth",
  sadCorrInflation: "Inflation (Dec.)",
  sadCorrUnemp: "Unemployment",
  sadCorrTrade: "Trade Balance",
  sadCorrIPI: "IPI",
  sadCorrDebt: "Debt/GDP",
  sadCorrOilPrice: "Oil Price",
  sadCorrOilRev: "HC Revenue (Bn$)",
  sadCorrTitle: "Correlation matrix",
  sadCorrSub: "Pearson coefficients between main macroeconomic indicators (2010-2024)",
  sadCorrTableInd: "Indicator",
  sadCorrTopPairs: "Notable correlations",
  sadCorrTopPairsSub: "Sorted by intensity",
  sadBenchGrowth: "GDP Growth (%)",
  sadBenchInflation: "Inflation (%)",
  sadBenchUnemp: "Unemployment (%)",
  sadBenchTrade: "Trade Balance (% GDP)",
  sadBenchDebt: "Debt/GDP (%)",
  sadBenchFdi: "FDI (% GDP)",
  sadBenchGni: "GNI per capita ($)",
  sadBenchEnergy: "Electricity access (%)",
  sadBenchSelect: "Select indicator",
  sadBenchRanking: "2024 Ranking",
  sadBenchSub: "Comparison 2015-2024 (ONS, INS, CAPMAS, GASTAT)",
  sadBenchRadarTitle: "Multi-indicator comparison (2024)",
  sadBenchRadarSub: "Algeria vs regional peers",
  sadRepMacro: "1. Macroeconomic summary",
  sadRepPrices: "2. Prices and inflation",
  sadRepLabor: "3. Labor market",
  sadRepTrade: "4. Foreign trade",
  sadRepRisks: "5. Watchpoints",
  sadRepGdpGrowth: "GDP Growth",
  sadRepUp: "up",
  sadRepGdpNom: "Nominal GDP",
  sadRepNonHC: "Non-HC Growth",
  sadRepInflationDec: "Inflation Dec. 2024",
  sadRepDown: "down",
  sadRepDeflation: "Deflation",
  sadRepFood: "Food inflation",
  sadRepUnemp: "Unemployment",
  sadRepActivity: "Activity rate",
  sadRepYouth: "Youth unemployment",
  sadRepExports: "Exports",
  sadRepImports: "Imports",
  sadRepBalance: "Trade balance",
  sadRepHydroShare: "92.8pct HC",
  sadRepRisk1: "Deflation",
  sadRepRisk2: "HC dependence",
  sadRepRisk3: "Informal employment",
  sadRepAutoTitle: "Automated economic report Q3 2025",
  sadRepAutoSub: "Key indicator summary based on official ONS data",
  sadRepExport: "Export",
  sadCustomSelect: "Select your indicators",
  sadCustomSelected: "selected",
  sadCustomEmpty: "Select at least one indicator to build your dashboard",
  sadCustomChart: "Selected indicators chart",
  sadCustomChartLabel: "Value",
  sadCustomDir: "Direction",
  sadCustomUp: "Increase desired",
  sadCustomDown: "Decrease desired",
'''

# 3. FR values
fr_vals = '''  sadTabAnalytics: "Analytique",
  sadTabCorrelation: "Corr\u00e9lations",
  sadTabBenchmark: "Benchmarking",
  sadTabReports: "Rapports",
  sadTabCustomDash: "Perso.",
  sadCorrGDP: "Croissance PIB",
  sadCorrInflation: "Inflation (d\u00e9c.)",
  sadCorrUnemp: "Ch\u00f4mage",
  sadCorrTrade: "Solde Commercial",
  sadCorrIPI: "IPI",
  sadCorrDebt: "Dette/PIB",
  sadCorrOilPrice: "Prix p\u00e9trole",
  sadCorrOilRev: "Rev. HC (Mds $)",
  sadCorrTitle: "Matrice de corr\u00e9lation",
  sadCorrSub: "Coefficients de Pearson entre les principaux indicateurs macro\u00e9conomiques (2010-2024)",
  sadCorrTableInd: "Indicateur",
  sadCorrTopPairs: "Corr\u00e9lations notables",
  sadCorrTopPairsSub: "Class\u00e9es par intensit\u00e9",
  sadBenchGrowth: "Croissance PIB (%)",
  sadBenchInflation: "Inflation (%)",
  sadBenchUnemp: "Ch\u00f4mage (%)",
  sadBenchTrade: "Solde Commercial (% PIB)",
  sadBenchDebt: "Dette/PIB (%)",
  sadBenchFdi: "IDE (% PIB)",
  sadBenchGni: "RNB/habitant ($)",
  sadBenchEnergy: "Acc\u00e8s \u00e9lectricit\u00e9 (%)",
  sadBenchSelect: "S\u00e9lectionner l\u2019indicateur",
  sadBenchRanking: "Classement 2024",
  sadBenchSub: "Comparaison 2015-2024 (ONS, INS, CAPMAS, GASTAT)",
  sadBenchRadarTitle: "Vue comparative multi-indicateurs (2024)",
  sadBenchRadarSub: "Alg\u00e9rie vs pays de la r\u00e9gion",
  sadRepMacro: "1. Synth\u00e8se macro\u00e9conomique",
  sadRepPrices: "2. Prix et inflation",
  sadRepLabor: "3. March\u00e9 du travail",
  sadRepTrade: "4. Commerce ext\u00e9rieur",
  sadRepRisks: "5. Points de vigilance",
  sadRepGdpGrowth: "Croissance PIB",
  sadRepUp: "en hausse",
  sadRepGdpNom: "PIB nominal",
  sadRepNonHC: "Croissance hors-HC",
  sadRepInflationDec: "Inflation d\u00e9c. 2024",
  sadRepDown: "en baisse",
  sadRepDeflation: "D\u00e9flation",
  sadRepFood: "Inflation alimentaire",
  sadRepUnemp: "Ch\u00f4mage",
  sadRepActivity: "Taux d\u2019activit\u00e9",
  sadRepYouth: "Ch\u00f4mage jeunes",
  sadRepExports: "Exportations",
  sadRepImports: "Importations",
  sadRepBalance: "Solde commercial",
  sadRepHydroShare: "92.8% HC",
  sadRepRisk1: "D\u00e9flation",
  sadRepRisk2: "D\u00e9pendance HC",
  sadRepRisk3: "Informel",
  sadRepAutoTitle: "Rapport \u00e9conomique automatique T3 2025",
  sadRepAutoSub: "Synth\u00e8se des indicateurs cl\u00e9s bas\u00e9e sur les donn\u00e9es officielles ONS",
  sadRepExport: "Exporter",
  sadCustomSelect: "S\u00e9lectionner vos indicateurs",
  sadCustomSelected: "s\u00e9lectionn\u00e9s",
  sadCustomEmpty: "S\u00e9lectionnez au moins un indicateur pour construire votre tableau de bord",
  sadCustomChart: "\u00c9volution des indicateurs s\u00e9lectionn\u00e9s",
  sadCustomChartLabel: "Valeur",
  sadCustomDir: "Direction",
  sadCustomUp: "Hausse souhait\u00e9e",
  sadCustomDown: "Baisse souhait\u00e9e",
'''

# 4. AR values
ar_vals = '''  sadTabAnalytics: "\u062a\u062d\u0644\u064a\u0644",
  sadTabCorrelation: "\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a",
  sadTabBenchmark: "\u0645\u0642\u0627\u0631\u0646\u0629",
  sadTabReports: "\u062a\u0642\u0627\u0631\u064a\u0631",
  sadTabCustomDash: "\u0645\u062e\u0635\u0635",
  sadCorrGDP: "\u0646\u0645\u0648 PIB",
  sadCorrInflation: "\u0627\u0644\u062a\u0636\u062e\u0645",
  sadCorrUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  sadCorrTrade: "\u0631\u0635\u064a\u062f \u0627\u0644\u062a\u062c\u0627\u0631\u0629",
  sadCorrIPI: "IPI",
  sadCorrDebt: "\u0627\u0644\u062f\u064a\u0646/PIB",
  sadCorrOilPrice: "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637",
  sadCorrOilRev: "\u0625\u064a\u0631\u0627\u062f\u0627\u062a HC",
  sadCorrTitle: "\u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637",
  sadCorrSub: "\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0628\u064a\u0631\u0633\u0648\u0646 (2010-2024)",
  sadCorrTableInd: "\u0645\u0624\u0634\u0631",
  sadCorrTopPairs: "\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u0628\u0627\u0631\u0632\u0629",
  sadCorrTopPairsSub: "\u0645\u0631\u062a\u0628\u0629 \u062d\u0633\u0628 \u0627\u0644\u0634\u062f\u0629",
  sadBenchGrowth: "\u0646\u0645\u0648 PIB (%)",
  sadBenchInflation: "\u0627\u0644\u062a\u0636\u062e\u0645 (%)",
  sadBenchUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 (%)",
  sadBenchTrade: "\u0631\u0635\u064a\u062f \u0627\u0644\u062a\u062c\u0627\u0631\u0629 (% PIB)",
  sadBenchDebt: "\u0627\u0644\u062f\u064a\u0646/PIB (%)",
  sadBenchFdi: "\u0627\u0633\u062a\u062b\u0645\u0627\u0631 (% PIB)",
  sadBenchGni: "RNB/\u0641\u0631\u062f ($)",
  sadBenchEnergy: "\u0648\u0635\u0648\u0644 \u0644\u0644\u0643\u0647\u0631\u0628\u0627\u0621 (%)",
  sadBenchSelect: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0624\u0634\u0631",
  sadBenchRanking: "\u062a\u0631\u062a\u064a\u0628 2024",
  sadBenchSub: "\u0645\u0642\u0627\u0631\u0646\0629 2015-2024",
  sadBenchRadarTitle: "\u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 (2024)",
  sadBenchRadarSub: "\u0627\u0644\u062c\u0632\u0627\u0626\u0631 vs \u062f\u0648\u0644 \u0627\u0644\u0645\u0646\u0637\u0642\u0629",
  sadRepMacro: "1. \u0645\u0644\u062e\u0635 \u0627\u0642\u062a\u0635\u0627\u062f\u064a",
  sadRepPrices: "2. \u0627\u0644\u0623\u0633\u0639\u0627\u0631",
  sadRepLabor: "3. \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644",
  sadRepTrade: "4. \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629",
  sadRepRisks: "5. \u0646\u0642\u0627\u0637 \u0631\u0642\u0627\u0628\u0629",
  sadRepGdpGrowth: "\u0646\u0645\u0648 PIB",
  sadRepUp: "\u0627\u0631\u062a\u0641\u0627\u0639",
  sadRepGdpNom: "PIB \u0627\u0633\u0645\u064a",
  sadRepNonHC: "\u0646\u0645\u0648 \u062e\u0627\u0631\u062c HC",
  sadRepInflationDec: "\u0627\u0644\u062a\u0636\u062e\u0645 \u062f\u064a\u0633. 2024",
  sadRepDown: "\u0627\u0646\u062e\u0641\u0627\u0636",
  sadRepDeflation: "\u0627\u0646\u0643\u0645\u0627\u0634",
  sadRepFood: "\u062a\u0636\u062e\u0645 \u0627\u0644\u063a\u0630\u0627\u0621",
  sadRepUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629",
  sadRepActivity: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0634\u0627\37",
  sadRepYouth: "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628",
  sadRepExports: "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a",
  sadRepImports: "\u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a",
  sadRepBalance: "\u0631\u0635\u064a\u062f \u0627\u0644\u062a\u062c\u0627\u0631\u0629",
  sadRepHydroShare: "92.8% HC",
  sadRepRisk1: "\u0627\u0646\u0643\u0645\u0627\u0634",
  sadRepRisk2: "\u0627\u0644\u062a\u0628\u0639\u064a\u0629 HC",
  sadRepRisk3: "\u0627\u0644\u0639\u0645\u0644 \u063a\u064a\u0631 \u0627\u0644\u0631\u0633\u0645\u064a",
  sadRepAutoTitle: "\u062a\u0642\u0631\u064a\u0631 \u0627\u0642\u062a\u0635\u0627\u062f\u064a T3 2025",
  sadRepAutoSub: "\u0645\u0644\u062e\u0635 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a ONS",
  sadRepExport: "\u062a\u0635\u062f\u064a\u0631",
  sadCustomSelect: "\u0627\u062e\u062a\u0631 \u0645\u0624\u0634\u0631\u0627\u062a\u0643",
  sadCustomSelected: "\u0645\u062e\u062a\u0627\u0631\u0629",
  sadCustomEmpty: "\u0627\u062e\u062a\u0631 \u0645\u0624\u0634\u0631\u0627\u062a \u0644\u0628\u0646\u0627\u0621 \u0644\u0648\u062d\u062a\u0643",
  sadCustomChart: "\u062a\u0637\u0648\u0631 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a",
  sadCustomChartLabel: "\u0642\u064a\u0645\u0629",
  sadCustomDir: "\u0627\u0644\u0627\u062a\u062c\u0627\u0647",
  sadCustomUp: "\u0627\u0631\u062a\u0641\u0627\u0639 \u0645\u0637\u0644\u0648\u0628",
  sadCustomDown: "\u0627\u0646\u062e\u0641\u0627\u0636 \u0645\u0637\u0644\u0648\u0628",
'''

# Insert EN values before EN closing
en_marker = '  sadFInd6: "Debt/GDP",\n};'
content = content.replace(en_marker, '  sadFInd6: "Debt/GDP",\n' + en_vals + '\n};', 1)
print('EN:', 'OK' if en_vals in content else 'FAIL')

# Insert FR values before FR closing
fr_marker = '  sadFInd6: "Dette/PIB",\n};'
content = content.replace(fr_marker, '  sadFInd6: "Dette/PIB",\n' + fr_vals + '\n};', 1)
print('FR:', 'OK' if fr_vals in content else 'FAIL')

# Insert AR values before AR closing
ar_marker = '  sadFInd6: "\u0627\u0644\u062f\u064a\u0646/PIB",\n};'
content = content.replace(ar_marker, '  sadFInd6: "\u0627\u0644\u062f\u064a\u0646/PIB",\n' + ar_vals + '\n};', 1)
print('AR:', 'OK' if ar_vals in content else 'FAIL')

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)
print('Saved', len(content), 'lines')
