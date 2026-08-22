"""Fix missing i18n keys in dictionaries.ts - adds 130 sad* + 5 label* keys"""
import json
import re

FILE = "src/lib/i18n/dictionaries.ts"

with open(FILE, "r", encoding="utf-8") as f:
    lines = f.readlines()

# ─── All 135 new keys with EN/FR/AR translations ───────────────────────────
new_keys = [
    # Global Search & Theme (5 keys)
    ("labelSearch", "Search", "Rechercher", "\u0628\u062d\u062b"),
    ("labelSearchPlaceholder", "Search tabs, charts, indicators...", "Rechercher onglets, graphiques, indicateurs...", "\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0623\u0642\u0633\u0627\u0645\u060c \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629\u060c \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a..."),
    ("labelSearchNoResults", "No results found.", "Aucun r\u00e9sultat trouv\u00e9.", "\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c."),
    ("labelThemeLight", "Light", "Clair", "\u0641\u0627\u062a\u062d"),
    ("labelThemeDark", "Dark", "Sombre", "\u062f\u0627\u0643\u0646"),

    # SAD Tab labels
    ("sadTabAlerts", "Alerts", "Alertes", "\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a"),
    ("sadTabForecast", "Forecast", "Pr\u00e9visions", "\u0627\u0644\u062a\u0648\u0642\u0639\u0627\u062a"),
    ("sadTabWhatIf", "What-If", "Simulations", "\u0633\u064a\u0646\u0627\u0631\u064a\u0648\u0647\u0627\u062a"),
    ("sadTabAnalytics", "Analytics", "Analytique", "\u0627\u0644\u062a\u062d\u0644\u064a\u0644\u0627\u062a"),
    ("sadTabCorrelation", "Correlation", "Corr\u00e9lation", "\u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637"),
    ("sadTabBenchmark", "Benchmark", "R\u00e9f\u00e9rence", "\u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629"),
    ("sadTabReports", "Reports", "Rapports", "\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631"),
    ("sadTabCustomDash", "Custom", "Personnalis\u00e9", "\u0645\u062e\u0635\u0635"),

    # SAD KPI badges
    ("sadKpiAlerts", "Active Alerts", "Alertes actives", "\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0646\u0634\u0637\u0629"),
    ("sadKpiScenarios", "Scenarios", "Sc\u00e9narios", "\u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648\u0647\u0627\u062a"),
    ("sadKpiScenariosSub", "Simulated outcomes", "R\u00e9sultats simul\u00e9s", "\u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629"),
    ("sadKpiParams", "Parameters", "Param\u00e8tres", "\u0627\u0644\u0645\u0639\u0644\u0645\u0627\u062a"),
    ("sadKpiParamsSub", "Adjustable variables", "Variables ajustables", "\u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0639\u062f\u064a\u0644"),
    ("sadKpiIndicators", "Indicators", "Indicateurs", "\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a"),
    ("sadKpiIndicatorsSub", "Economic variables tracked", "Variables \u00e9conomiques suivies", "\u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629"),

    # SAD Alerts
    ("sadAlertBanner", "Strategic Alert Dashboard", "Tableau de bord des alertes strat\u00e9giques", "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629"),
    ("sadAlertsTitle", "Alerts & Thresholds", "Alertes & Seuils", "\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a"),
    ("sadAlertsSub", "Automatic detection of anomalies and threshold breaches", "D\u00e9tection automatique des anomalies et d\u00e9passements de seuils", "\u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a \u0639\u0646 \u0627\u0644\u0634\u0648\u0627\u0630\u0627\u062a \u0648\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a"),
    ("sadThresholdTitle", "Threshold Configuration", "Configuration des seuils", "\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a"),
    ("sadThresholdSub", "Alert trigger levels for key indicators", "Niveaux de d\u00e9clenchement des alertes", "\u0645\u0633\u062a\u0648\u064a\u0627\u062a \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0644\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"),
    ("sadCriticalAlert", "Critical Alert", "Alerte critique", "\u062a\u0646\u0628\u064a\u0647 \u062d\u0631\u062c"),
    ("sadRequiresAttention", "Requires Attention", "N\u00e9cessite une attention", "\u064a\u062a\u0637\u0644\u0628 \u0627\u0647\u062a\u0645\u0627\u0645\u0627"),
    ("sadCritical", "Critical", "Critique", "\u062d\u0631\u062c"),
    ("sadWarning", "Warning", "Attention", "\u062a\u062d\u0630\u064a\u0631"),
    ("sadInfo", "Info", "Info", "\u0645\u0639\u0644\u0648\u0645\u0629"),
    ("sadNoAlerts", "No active alerts", "Aucune alerte active", "\u0644\u0627 \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0646\u0634\u0637\u0629"),
    ("sadSelectIndicator", "Select indicator", "S\u00e9lectionner un indicateur", "\u0627\u062e\u062a\u0631 \u0645\u0624\u0634\u0631\u0627"),
    ("sadTypeAnomaly", "Anomaly", "Anomalie", "\u0634\u0630\u0648\u0630"),
    ("sadTypeThreshold", "Threshold Breach", "D\u00e9passement de seuil", "\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
    ("sadTypeTrend", "Trend Alert", "Alerte de tendance", "\u062a\u0646\u0628\u064a\u0647 \u0627\u062a\u062c\u0627\u0647"),
    ("sadValue", "Value", "Valeur", "\u0627\u0644\u0642\u064a\u0645\u0629"),
    ("sadExpected", "Expected", "Attendu", "\u0627\u0644\u0645\u062a\u0648\u0642\u0639"),
    ("sadLastActual", "Last actual", "Dernier r\u00e9el", "\u0622\u062e\u0631 \u0642\u064a\u0645\u0629 \u0641\u0639\u0644\u064a\u0629"),

    # SAD Forecast
    ("sadForecastSub", "Multi-scenario projections for key economic indicators", "Projections multi-sc\u00e9narios pour les indicateurs cl\u00e9s", "\u062a\u0648\u0642\u0639\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648\u0647\u0627\u062a \u0644\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"),
    ("sadForecastGdpGrowth", "GDP Growth Forecast", "Pr\u00e9vision croissance du PIB", "\u062a\u0648\u0642\u0639 \u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadForecastInflation", "Inflation Forecast", "Pr\u00e9vision inflation", "\u062a\u0648\u0642\u0639 \u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadForecastUnemp", "Unemployment Forecast", "Pr\u00e9vision ch\u00f4mage", "\u062a\u0648\u0642\u0639 \u0627\u0644\u0628\u0637\u0627\u0644\u0629"),
    ("sadForecastTrade", "Trade Balance Forecast", "Pr\u00e9vision balance commerciale", "\u062a\u0648\u0642\u0639 \u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a"),
    ("sadForecastIpi", "Industrial Production Forecast", "Pr\u00e9vision production industrielle", "\u062a\u0648\u0642\u0639 \u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a"),
    ("sadForecastDebt", "Debt Forecast", "Pr\u00e9vision dette", "\u062a\u0648\u0642\u0639 \u0627\u0644\u062f\u064a\u0646"),
    ("sadHistorical", "Historical", "Historique", "\u062a\u0627\u0631\u064a\u062e\u064a"),
    ("sadRef", "Reference", "R\u00e9f\u00e9rence", "\u0645\u0631\u062c\u0639"),
    ("sadOptimistic", "Optimistic", "Optimiste", "\u0645\u062a\u0641\u0627\u0626\u0644"),
    ("sadBaseline", "Baseline", "R\u00e9f\u00e9rence", "\u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0627\u0644\u0623\u0633\u0627\u0633\u064a"),
    ("sadPessimistic", "Pessimistic", "Pessimiste", "\u0645\u062a\u0634\u0627\u0626\u0645"),
    ("sadFInd1", "GDP Growth", "Croissance du PIB", "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadFInd2", "Inflation", "Inflation", "\u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadFInd3", "Unemployment", "Ch\u00f4mage", "\u0627\u0644\u0628\u0637\u0627\u0644\u0629"),
    ("sadFInd4", "Trade Balance", "Balance commerciale", "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a"),
    ("sadFInd5", "Industrial Production", "Production industrielle", "\u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a"),
    ("sadFInd6", "Public Debt", "Dette publique", "\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0639\u0627\u0645"),

    # SAD Simulation / What-If
    ("sadSimParams", "Simulation Parameters", "Param\u00e8tres de simulation", "\u0645\u0639\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629"),
    ("sadSimParamsSub", "Adjust variables to simulate economic scenarios", "Ajustez les variables pour simuler des sc\u00e9narios", "\u0639\u062f\u0644 \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0644\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648\u0647\u0627\u062a"),
    ("sadOilPrice", "Oil Price (USD/bbl)", "Prix du p\u00e9trole (USD/bbl)", "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637 (\u062f\u0648\u0644\u0627\u0631/\u0628\u0631\u0645\u0644)"),
    ("sadOilProd", "Oil Production (Mbd)", "Production de p\u00e9trole (Mbj)", "\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0646\u0641\u0637 (\u0645\u0644\u064a\u0648\u0646 \u0628\u0631\u0645\u0644/\u064a\u0648\u0645)"),
    ("sadGasPrice", "Gas Price (USD/Mbtu)", "Prix du gaz (USD/Mbtu)", "\u0633\u0639\u0631 \u0627\u0644\u063a\u0627\u0632 (\u062f\u0648\u0644\u0627\u0631/\u0645\u0644\u064a\u0648\u0646 \u0648\u062d\u062f\u0629 \u062d\u0631\u0627\u0631\u064a\u0629)"),
    ("sadNonHCGrowth", "Non-HC Growth (%)", "Croissance hors HC (%)", "\u0627\u0644\u0646\u0645\u0648 \u062e\u0627\u0631\u062c \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a (%)") ,
    ("sadImportGrowth", "Import Growth (%)", "Croissance des importations (%)", "\u0646\u0645\u0648 \u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a (%)") ,
    ("sadPublicInvest", "Public Investment (% GDP)", "Investissement public (% PIB)", "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0639\u0627\u0645 (% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"),
    ("sadReset", "Reset", "R\u00e9initialiser", "\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646"),
    ("sadSimImpact", "Simulation Impact", "Impact de la simulation", "\u062a\u0623\u062b\u064a\u0631 \u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629"),
    ("sadSimImpactSub", "Projected changes from baseline scenario", "Variations projet\u00e9es par rapport au sc\u00e9nario de r\u00e9f\u00e9rence", "\u0627\u0644\u062a\u063a\u064a\u0631\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0642\u0639\u0629 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0627\u0644\u0623\u0633\u0627\u0633\u064a"),
    ("sadImpact", "Impact", "Impact", "\u0627\u0644\u062a\u0623\u062b\u064a\u0631"),
    ("sadSimGdpGrowth", "GDP Growth", "Croissance du PIB", "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadSimGdp", "GDP (bn USD)", "PIB (Mds USD)", "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a (\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631)"),
    ("sadSimTrade", "Trade Balance (bn USD)", "Balance commerciale (Mds USD)", "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a (\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631)"),
    ("sadSimUnemp", "Unemployment (%)", "Ch\u00f4mage (%)", "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 (%)") ,
    ("sadSimHydroRev", "Hydrocarbon Revenue (bn USD)", "Revenus hydrocarbures (Mds USD)", "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a (\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631)"),
    ("sadSimExports", "Exports (bn USD)", "Exportations (Mds USD)", "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a (\u0645\u0644\u064a\u0627\u0631 \u062f\u0648\u0644\u0627\u0631)"),
    ("sadSimFiscal", "Fiscal Balance (% GDP)", "Solde budg\u00e9taire (% PIB)", "\u0627\u0644\u0645\u064a\u0632\u0627\u0646\u064a\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 (% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"),
    ("sadSimDebt", "Public Debt (% GDP)", "Dette publique (% PIB)", "\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0639\u0627\u0645 (% \u0645\u0646 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a)"),

    # SAD Correlation
    ("sadCorrTitle", "Correlation Analysis", "Analyse de corr\u00e9lation", "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637"),
    ("sadCorrSub", "Statistical relationships between economic indicators", "Relations statistiques entre indicateurs \u00e9conomiques", "\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0625\u062d\u0635\u0627\u0626\u064a\u0629 \u0628\u064a\u0646 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629"),
    ("sadCorrTopPairs", "Top Correlated Pairs", "Paires les plus corr\u00e9l\u00e9es", "\u0623\u0643\u062b\u0631 \u0627\u0644\u0623\u0632\u0648\u0627\u062c \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u064b"),
    ("sadCorrTopPairsSub", "Indicator pairs with strongest correlations", "Paires d'indicateurs les plus fortement corr\u00e9l\u00e9es", "\u0623\u0632\u0648\u0627\u062c \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0623\u0643\u062b\u0631 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u064b"),
    ("sadCorrTableInd", "Indicator", "Indicateur", "\u0627\u0644\u0645\u0624\u0634\u0631"),
    ("sadCorrGDP", "GDP", "PIB", "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadCorrInflation", "Inflation", "Inflation", "\u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadCorrTrade", "Trade Balance", "Balance commerciale", "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a"),
    ("sadCorrUnemp", "Unemployment", "Ch\u00f4mage", "\u0627\u0644\u0628\u0637\u0627\u0644\u0629"),
    ("sadCorrIPI", "Industrial Production", "Production industrielle", "\u0627\u0644\u0625\u0646\u062a\u0627\u062c \u0627\u0644\u0635\u0646\u0627\u0639\u064a"),
    ("sadCorrOilPrice", "Oil Price", "Prix du p\u00e9trole", "\u0633\u0639\u0631 \u0627\u0644\u0646\u0641\u0637"),
    ("sadCorrOilRev", "Oil Revenue", "Revenus p\u00e9troliers", "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0646\u0641\u0637"),
    ("sadCorrDebt", "Public Debt", "Dette publique", "\u0627\u0644\u062f\u064a\u0646 \u0627\u0644\u0639\u0627\u0645"),

    # SAD Benchmark
    ("sadBenchRanking", "Country Ranking", "Classement des pays", "\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u062f\u0648\u0644"),
    ("sadBenchRadarTitle", "Multi-Indicator Comparison", "Comparaison multi-indicateurs", "\u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a"),
    ("sadBenchRadarSub", "Radar comparison across key indicators", "Comparaison radar sur les indicateurs cl\u00e9s", "\u0645\u0642\u0627\u0631\u0646\u0629 \u0631\u0627\u062f\u0627\u0631\u064a\u0629 \u0639\u0628\u0631 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"),
    ("sadBenchSelect", "Select indicator", "S\u00e9lectionner un indicateur", "\u0627\u062e\u062a\u0631 \u0645\u0624\u0634\u0631\u0627"),
    ("sadBenchSub", "Compare Algeria with regional peers", "Comparer l'Alg\u00e9rie avec les pays de la r\u00e9gion", "\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0645\u0639 \u0627\u0644\u062f\u0648\u0644 \u0627\u0644\u0625\u0642\u0644\u064a\u0645\u064a\u0629"),
    ("sadBenchGrowth", "GDP Growth", "Croissance du PIB", "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadBenchInflation", "Inflation", "Inflation", "\u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadBenchUnemp", "Unemployment", "Ch\u00f4mage", "\u0627\u0644\u0628\u0637\u0627\u0644\u0629"),
    ("sadBenchTrade", "Trade/GDP", "Commerce/PIB", "\u0627\u0644\u062a\u062c\u0627\u0631\u0629/\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadBenchFdi", "FDI", "IDE", "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631"),
    ("sadBenchGni", "GNI/capita", "RNB/habitant", "\u0627\u0644\u062f\u062e\u0644 \u0627\u0644\u0642\u0648\u0645\u064a \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a/\u0641\u0631\u062f"),
    ("sadBenchDebt", "Debt/GDP", "Dette/PIB", "\u0627\u0644\u062f\u064a\u0646/\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadBenchEnergy", "Energy Access", "Acc\u00e8s \u00e0 l'\u00e9nergie", "\u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u0637\u0627\u0642\u0629"),

    # SAD Auto-Reports
    ("sadRepAutoTitle", "Auto-Generated Reports", "Rapports automatiques", "\u062a\u0642\u0627\u0631\u064a\u0631 \u062a\u0644\u0642\u0627\u0626\u064a\u0629"),
    ("sadRepAutoSub", "AI-generated analytical summaries based on latest data", "R\u00e9sum\u00e9s analytiques g\u00e9n\u00e9r\u00e9s par IA", "\u0645\u0644\u062e\u0635\u0627\u062a \u062a\u062d\u0644\u064a\u0644\u064a\u0629 \u0645\u0646\u062a\u062c\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a"),
    ("sadRepMacro", "Macroeconomic Report", "Rapport macro\u00e9conomique", "\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u0643\u0644\u064a"),
    ("sadRepPrices", "Prices Report", "Rapport des prix", "\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631"),
    ("sadRepTrade", "Trade Report", "Rapport commercial", "\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u062a\u062c\u0627\u0631\u0629"),
    ("sadRepLabor", "Labor Market Report", "Rapport du march\u00e9 du travail", "\u062a\u0642\u0631\u064a\u0631 \u0633\u0648\u0642 \u0627\u0644\u0639\u0645\u0644"),
    ("sadRepRisks", "Risk Assessment", "\u00c9valuation des risques", "\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u062e\u0627\u0637\u0631"),
    ("sadRepRisk1", "Hydrocarbon dependence", "D\u00e9pendance aux hydrocarbures", "\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a"),
    ("sadRepRisk2", "Youth unemployment", "Ch\u00f4mage des jeunes", "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628"),
    ("sadRepRisk3", "Inflation persistence", "Persistance de l'inflation", "\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadRepGdpGrowth", "GDP Growth", "Croissance du PIB", "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a"),
    ("sadRepGdpNom", "Nominal GDP", "PIB nominal", "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a \u0627\u0644\u0627\u0633\u0645\u064a"),
    ("sadRepInflationDec", "Inflation Deceleration", "D\u00e9c\u00e9l\u00e9ration de l'inflation", "\u062a\u0628\u0637\u0624 \u0627\u0644\u062a\u0636\u062e\u0645"),
    ("sadRepDeflation", "Deflation Risk", "Risque de d\u00e9flation", "\u062e\u0637\u0631 \u0627\u0644\u0627\u0646\u0643\u0645\u0627\u0634"),
    ("sadRepUnemp", "Unemployment Rate", "Taux de ch\u00f4mage", "\u0645\u0639\u062f\u0644 \u0627\u0644\u0628\u0637\u0627\u0644\u0629"),
    ("sadRepYouth", "Youth Unemployment", "Ch\u00f4mage des jeunes", "\u0628\u0637\u0627\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628"),
    ("sadRepExports", "Exports", "Exportations", "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a"),
    ("sadRepImports", "Imports", "Importations", "\u0627\u0644\u0648\u0627\u0631\u062f\u0627\u062a"),
    ("sadRepBalance", "Trade Balance", "Balance commerciale", "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a"),
    ("sadRepNonHC", "Non-HC Exports", "Exportations hors HC", "\u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a \u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a"),
    ("sadRepActivity", "Activity Rate", "Taux d'activit\u00e9", "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0634\u0627\u0637"),
    ("sadRepUp", "Up", "Hausse", "\u0627\u0631\u062a\u0641\u0627\u0639"),
    ("sadRepDown", "Down", "Baisse", "\u0627\u0646\u062e\u0641\u0627\u0636"),
    ("sadRepFood", "Food inflation", "Inflation alimentaire", "\u062a\u0636\u062e\u0645 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u063a\u0630\u0627\u0626\u064a\u0629"),
    ("sadRepExport", "Export revenues", "Revenus d'exportation", "\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a"),

    # SAD Custom Dashboard
    ("sadCustomSelect", "Select indicators to display", "S\u00e9lectionner les indicateurs \u00e0 afficher", "\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0644\u0639\u0631\u0636\u0647\u0627"),
    ("sadCustomSelected", "Selected indicators", "Indicateurs s\u00e9lectionn\u00e9s", "\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0645\u062e\u062a\u0627\u0631\u0629"),
    ("sadCustomChart", "Custom Chart", "Graphique personnalis\u00e9", "\u0631\u0633\u0645 \u0628\u064a\u0627\u0646\u064a \u0645\u062e\u0635\u0635"),
    ("sadCustomChartLabel", "Indicators", "Indicateurs", "\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a"),
    ("sadCustomDir", "Direction", "Direction", "\u0627\u0644\u0627\u062a\u062c\u0627\u0647"),
    ("sadCustomEmpty", "Select at least one indicator to display the chart.", "S\u00e9lectionnez au moins un indicateur pour afficher le graphique.", "\u0627\u062e\u062a\u0631 \u0645\u0624\u0634\u0631\u0627\u064b \u0648\u0627\u062d\u062f\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0644\u0639\u0631\u0636 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a."),
    ("sadCustomUp", "Up", "Hausse", "\u0627\u0631\u062a\u0641\u0627\u0639"),
    ("sadCustomDown", "Down", "Baisse", "\u0627\u0646\u062e\u0641\u0627\u0636"),
]

# ─── Build insertion blocks ──────────────────────────────────────────────────
interface_block = "\n".join(f"  {k}: string;" for k, _, _, _ in new_keys)
en_block = ",\n".join(f'  {k}: {json.dumps(v1)}' for k, v1, _, _ in new_keys)
fr_block = ",\n".join(f'  {k}: {json.dumps(v2)}' for k, _, v2, _ in new_keys)
ar_block = ",\n".join(f'  {k}: {json.dumps(v3)}' for k, _, _, v3 in new_keys)

# ─── Find insertion points by line number ───────────────────────────────────
# Interface ends at line 1120 with }
# EN dict ends at line 2217 with };
# FR dict ends somewhere after 3379
# AR dict ends somewhere after 4478

# Find the 3 dict-ending markers (};) after their respective starts
markers = {
    'interface': ('  execBriefDisclaimer: string;', 1120),
    'en': ('  execBriefDisclaimer: "This briefing is generated from ONS data and is intended for internal executive use only.",', 2216),
}

# Detect FR end line
fr_end = None
ar_end = None
for i, line in enumerate(lines):
    if 'execBriefDisclaimer' in line and 'direction' in line:
        fr_end = i  # This is the FR disclaimer line
    if 'execBriefDisclaimer' in line and '\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a' in line:
        ar_end = i  # This is the AR disclaimer line

print(f"Interface insert: before line 1120")
print(f"EN insert: after line 2216")
print(f"FR insert: after line {fr_end + 1 if fr_end else '?'}")
print(f"AR insert: after line {ar_end + 1 if ar_end else '?'}")

# ─── Insert into interface ──────────────────────────────────────────────────
# Line 1119 is execBriefDisclaimer: string;
# Line 1120 is }
# Insert interface keys between them
lines.insert(1120, interface_block + "\n")
print(f"Inserted {len(new_keys)} interface keys at line 1120")

# After inserting interface block, all subsequent line numbers shift
shift = len(interface_block.split('\n')) + 1

# ─── Insert EN values ──────────────────────────────────────────────────────
# Find the EN disclaimer line again (shifted)
en_insert_line = None
for i, line in enumerate(lines):
    if 'execBriefDisclaimer' in line and 'internal executive' in line and 'const' not in line:
        en_insert_line = i + 1  # Insert after this line
        break

if en_insert_line:
    # Change the comma-less end to have comma
    lines[en_insert_line - 1] = lines[en_insert_line - 1].rstrip() + ",\n"
    en_lines = [f"  {line}\n" for line in en_block.split('\n')]
    for j, el in enumerate(en_lines):
        lines.insert(en_insert_line + j, el)
    print(f"Inserted {len(new_keys)} EN values at line {en_insert_line}")
    shift += len(new_keys)
else:
    print("ERROR: Could not find EN dict end!")

# ─── Insert FR values ──────────────────────────────────────────────────────
fr_insert_line = None
for i, line in enumerate(lines):
    if 'execBriefDisclaimer' in line and 'direction' in line and 'usage interne' in line:
        fr_insert_line = i + 1
        break

if fr_insert_line:
    lines[fr_insert_line - 1] = lines[fr_insert_line - 1].rstrip() + ",\n"
    fr_lines = [f"  {line}\n" for line in fr_block.split('\n')]
    for j, fl in enumerate(fr_lines):
        lines.insert(fr_insert_line + j, fl)
    print(f"Inserted {len(new_keys)} FR values at line {fr_insert_line}")
    shift += len(new_keys)
else:
    print("ERROR: Could not find FR dict end!")

# ─── Insert AR values ──────────────────────────────────────────────────────
ar_insert_line = None
for i, line in enumerate(lines):
    if 'execBriefDisclaimer' in line and '\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a' in line:
        ar_insert_line = i + 1
        break

if ar_insert_line:
    lines[ar_insert_line - 1] = lines[ar_insert_line - 1].rstrip() + ",\n"
    ar_lines = [f"  {line}\n" for line in ar_block.split('\n')]
    for j, al in enumerate(ar_lines):
        lines.insert(ar_insert_line + j, al)
    print(f"Inserted {len(new_keys)} AR values at line {ar_insert_line}")
else:
    print("ERROR: Could not find AR dict end!")

# ─── Write back ─────────────────────────────────────────────────────────────
with open(FILE, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"\nDone! Total new keys added: {len(new_keys)}")
print(f"New file size: {len(lines)} lines")