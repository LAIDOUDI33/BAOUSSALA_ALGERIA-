import re

filepath = '/home/z/my-project/src/lib/i18n/dictionaries.ts'

with open(filepath, 'r') as f:
    lines = f.readlines()

# Find the line numbers for each section boundary
# EN ends with '};' before FRENCH comment
# FR ends with '};' before ARABIC comment  
# AR ends with '};' before DICTIONARY MAP comment

en_end = -1
fr_end = -1
ar_end = -1

for i, line in enumerate(lines):
    if '// ' + '─' * 3 + ' FRENCH' in line:
        en_end = i
    if '// ' + '─' * 3 + ' ARABIC' in line:
        fr_end = i
    if '// ' + '─' * 3 + ' DICTIONARY MAP' in line:
        ar_end = i

print(f'EN ends at line {en_end}, FR ends at line {fr_end}, AR ends at line {ar_end}')

if en_end < 0 or fr_end < 0 or ar_end < 0:
    print('ERROR: Could not find section boundaries')
    exit(1)

# The last key before each boundary
# Find 'pmeUnitBda' line before each boundary
en_pme_line = -1
fr_pme_line = -1
ar_pme_line = -1

for i in range(en_end - 1, max(en_end - 10, 0), -1):
    if 'pmeUnitBda' in lines[i]:
        en_pme_line = i
        break

for i in range(fr_end - 1, max(fr_end - 10, 0), -1):
    if 'pmeUnitBda' in lines[i]:
        fr_pme_line = i
        break

for i in range(ar_end - 1, max(ar_end - 10, 0), -1):
    if 'pmeUnitBda' in lines[i]:
        ar_pme_line = i
        break

print(f'EN pmeUnitBda at line {en_pme_line+1}')
print(f'FR pmeUnitBda at line {fr_pme_line+1}')
print(f'AR pmeUnitBda at line {ar_pme_line+1}')

# Check if exec keys already exist after each pmeUnitBda
en_has_exec = any('tabExecutive' in lines[i] for i in range(en_pme_line, en_end))
fr_has_exec = any('tabExecutive' in lines[i] for i in range(fr_pme_line, fr_end))
ar_has_exec = any('tabExecutive' in lines[i] for i in range(ar_pme_line, ar_end))

print(f'EN has exec: {en_has_exec}, FR has exec: {fr_has_exec}, AR has exec: {ar_has_exec}')

# Build insertion blocks
en_insert = '''  // ── EXECUTIVE DASHBOARD ───────────────────────\n  tabExecutive: "Executive",\n  tabExecutiveBrief: "Briefing",\n  execDashboardTitle: "Executive Dashboard",\n  execDashboardSub: "Strategic overview of national economic indicators",\n  execLastUpdate: "Last update",\n  execNationalScore: "National Performance Score",\n  execScoreChange: "Change from previous quarter",\n  execComponents: "Performance Components",\n  execCompGrowth: "Economic Growth",\n  execCompStability: "Price Stability",\n  execCompEmployment: "Employment",\n  execCompTrade: "Trade Balance",\n  execCompFiscal: "Fiscal Health",\n  execCompSocial: "Social Welfare",\n  execCompInfra: "Infrastructure",\n  execCompSustain: "Sustainability",\n  execKpiGdp: "GDP",\n  execKpiGrowth: "Growth Rate",\n  execKpiInflation: "Inflation",\n  execKpiUnemployment: "Unemployment",\n  execKpiTradeSurplus: "Trade Surplus",\n  execKpiForexReserves: "FX Reserves",\n  execKpiFdi: "FDI Inflows",\n  execKpiInvestmentRate: "Investment Rate",\n  execTrendTitle: "Monthly Economic Trends",\n  execTrendSub: "12-month rolling trends for key indicators",\n  execTrendGdp: "GDP Growth %",\n  execTrendInfl: "Inflation %",\n  execTrendUnemp: "Unemployment %",\n  execSectorTitle: "Sector Performance",\n  execSectorSub: "Growth rate by sector (% year-over-year)",\n  execSectorTable: "Sector Breakdown",\n  execSectorGrowth: "Growth %",\n  execSectorHydrocarbons: "Hydrocarbons",\n  execSectorAgriculture: "Agriculture",\n  execSectorManufacturing: "Manufacturing",\n  execSectorConstruction: "Construction",\n  execSectorServices: "Services",\n  execSectorMining: "Mining",\n  execContrib: "Contribution",\n  execAlerts: "Strategic Alerts",\n  execAlertsCritical: "Critical",\n  execAlertsWarning: "Warning",\n  execAlertsInfo: "Info",\n  execAction: "Action",\n  execBriefTitle: "Executive Briefing",\n  execBriefPrint: "Print Briefing",\n  execBriefHighlights: "Key Highlights",\n  execBriefRisks: "Risk Factors",\n  execBriefActions: "Pending Action Items",\n  execBriefDecisions: "Key Decisions Tracking",\n  execBriefAlerts: "Active Alerts",\n  execBriefStatusPending: "Pending",\n  execBriefStatusInReview: "In Review",\n  execBriefStatusInProgress: "In Progress",\n  execBriefStatusCompleted: "Completed",\n  execBriefDisclaimer: "This briefing is generated from ONS data and is intended for internal executive use only.",\n'''

fr_insert = '''  // ── EXECUTIVE DASHBOARD ───────────────────────\n  tabExecutive: "Direction",\n  tabExecutiveBrief: "Briefing",\n  execDashboardTitle: "Tableau de Bord de Direction",\n  execDashboardSub: "Vue strat\u00e9gique des indicateurs \u00e9conomiques nationaux",\n  execLastUpdate: "Derni\u00e8re mise \u00e0 jour",\n  execNationalScore: "Score de Performance Nationale",\n  execScoreChange: "Variation par rapport au trimestre pr\u00e9c\u00e9dent",\n  execComponents: "Composantes de la Performance",\n  execCompGrowth: "Croissance \u00c9conomique",\n  execCompStability: "Stabilit\u00e9 des Prix",\n  execCompEmployment: "Emploi",\n  execCompTrade: "Balance Commerciale",\n  execCompFiscal: "Sant\u00e9 Fiscale",\n  execCompSocial: "Protection Sociale",\n  execCompInfra: "Infrastructure",\n  execCompSustain: "Durabilit\u00e9",\n  execKpiGdp: "PIB",\n  execKpiGrowth: "Taux de Croissance",\n  execKpiInflation: "Inflation",\n  execKpiUnemployment: "Ch\u00f4mage",\n  execKpiTradeSurplus: "Exc\u00e9dent Commercial",\n  execKpiForexReserves: "R\u00e9serves de Change",\n  execKpiFdi: "IDE",\n  execKpiInvestmentRate: "Taux d\u2019Investissement",\n  execTrendTitle: "Tendances \u00c9conomiques Mensuelles",\n  execTrendSub: "Tendances glissantes sur 12 mois pour les indicateurs cl\u00e9s",\n  execTrendGdp: "Croissance du PIB %",\n  execTrendInfl: "Inflation %",\n  execTrendUnemp: "Ch\u00f4mage %",\n  execSectorTitle: "Performance par Secteur",\n  execSectorSub: "Taux de croissance par secteur (% en glissement annuel)",\n  execSectorTable: "R\u00e9partition Sectorielle",\n  execSectorGrowth: "Croissance %",\n  execSectorHydrocarbons: "Hydrocarbures",\n  execSectorAgriculture: "Agriculture",\n  execSectorManufacturing: "Industrie Manufacturi\u00e8re",\n  execSectorConstruction: "BTP",\n  execSectorServices: "Services",\n  execSectorMining: "Mines",\n  execContrib: "Contribution",\n  execAlerts: "Alertes Strat\u00e9giques",\n  execAlertsCritical: "Critique",\n  execAlertsWarning: "Attention",\n  execAlertsInfo: "Info",\n  execAction: "Action",\n  execBriefTitle: "Briefing de Direction",\n  execBriefPrint: "Imprimer le Briefing",\n  execBriefHighlights: "Points Cl\u00e9s",\n  execBriefRisks: "Facteurs de Risque",\n  execBriefActions: "Actions en Attente",\n  execBriefDecisions: "Suivi des D\u00e9cisions Cl\u00e9s",\n  execBriefAlerts: "Alertes Actives",\n  execBriefStatusPending: "En attente",\n  execBriefStatusInReview: "En cours d\u2019examen",\n  execBriefStatusInProgress: "En cours",\n  execBriefStatusCompleted: "Termin\u00e9",\n  execBriefDisclaimer: "Ce briefing est g\u00e9n\u00e9r\u00e9 \u00e0 partir des donn\u00e9es de l\u2019ONS et est destin\u00e9 \u00e0 un usage interne de la direction uniquement.",\n'''

ar_insert = '''  // ── EXECUTIVE DASHBOARD ───────────────────────\n  tabExecutive: "\u0627\u0644\u062a\u0646\u0641\u064a\u0630\u064a",\n  tabExecutiveBrief: "\u0627\u0644\u0625\u062d\u0637\u0627\u0637",\n  execDashboardTitle: "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",\n  execDashboardSub: "\u0646\u0638\u0631\u0629 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629",\n  execLastUpdate: "\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b",\n  execNationalScore: "\u0645\u0624\u0634\u0631 \u0627\u0644\u0623\u062f\u0627\u0621 \u0627\u0644\u0648\u0637\u0646\u064a",\n  execScoreChange: "\u0627\u0644\u062a\u063a\u064a\u064a\u0631 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0633\u0627\u0628\u0642",\n  execComponents: "\u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0623\u062f\u0627\u0621",\n  execCompGrowth: "\u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a",\n  execCompStability: "\u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",\n  execCompEmployment: "\u0627\u0644\u062a\u0634\u063a\u064a\u0644",\n  execCompTrade: "\u0627\u0644\u0645\u064a\u0632\u0627\u0646 \u0627\u0644\u062a\u062c\u0627\u0631\u064a",\n  execCompFiscal: "\u0627\u0644\u0635\u062d\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629",\n  execCompSocial: "\u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629",\n  execCompInfra: "\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629",\n  execCompSustain: "\u0627\u0644\u0627\u0633\u062a\u062f\u0627\u0645\u0629",\n  execKpiGdp: "\u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a",\n  execKpiGrowth: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648",\n  execKpiInflation: "\u0627\u0644\u062a\u0636\u062e\u0645",\n  execKpiUnemployment: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629",\n  execKpiTradeSurplus: "\u0641\u0627\u0626\u0636 \u0627\u0644\u062a\u062c\u0627\u0631\u0629",\n  execKpiForexReserves: "\u0627\u0644\u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0627\u062a \u0627\u0644\u0623\u062c\u0646\u0628\u064a\u0629",\n  execKpiFdi: "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0623\u062c\u0646\u0628\u064a",\n  execKpiInvestmentRate: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631",\n  execTrendTitle: "\u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0627\u0644\u0634\u0647\u0631\u064a\u0629",\n  execTrendSub: "\u0627\u062a\u062c\u0627\u0647\u0627\u062a \u0645\u062a\u062d\u0631\u0643\u0629 \u0644\u0640 12 \u0634\u0647\u0631\u0627\u064b \u0644\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",\n  execTrendGdp: "\u0646\u0645\u0648 \u0627\u0644\u0646\u0627\u062a\u062c \u0627\u0644\u0645\u062d\u0644\u064a %",\n  execTrendInfl: "\u0627\u0644\u062a\u0636\u062e\u0645 %",\n  execTrendUnemp: "\u0627\u0644\u0628\u0637\u0627\u0644\u0629 %",\n  execSectorTitle: "\u0623\u062f\u0627\u0621 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a",\n  execSectorSub: "\u0645\u0639\u062f\u0644 \u0627\u0644\u0646\u0645\u0648 \u062d\u0633\u0628 \u0627\u0644\u0642\u0637\u0627\u0639 (% \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0633\u0646\u0648\u064a)",\n  execSectorTable: "\u062a\u0641\u0635\u064a\u0644 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a",\n  execSectorGrowth: "\u0627\u0644\u0646\u0645\u0648 %",\n  execSectorHydrocarbons: "\u0627\u0644\u0647\u064a\u062f\u0631\u0648\u0643\u0631\u0628\u0648\u0646\u0627\u062a",\n  execSectorAgriculture: "\u0627\u0644\u0632\u0631\u0627\u0639\u0629",\n  execSectorManufacturing: "\u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u064a\u0629",\n  execSectorConstruction: "\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u0623\u0634\u063a\u0627\u0644",\n  execSectorServices: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",\n  execSectorMining: "\u0627\u0644\u062a\u0639\u062f\u064a\u0646",\n  execContrib: "\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629",\n  execAlerts: "\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",\n  execAlertsCritical: "\u062d\u0631\u062c",\n  execAlertsWarning: "\u062a\u062d\u0630\u064a\u0631",\n  execAlertsInfo: "\u0645\u0639\u0644\u0648\u0645\u0627\u062a",\n  execAction: "\u0627\u0644\u0625\u062c\u0631\u0627\u0621",\n  execBriefTitle: "\u0625\u062d\u0637\u0627\u0637 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",\n  execBriefPrint: "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0625\u062d\u0637\u0627\u0637",\n  execBriefHighlights: "\u0623\u0647\u0645 \u0627\u0644\u0646\u0642\u0627\u0637",\n  execBriefRisks: "\u0639\u0648\u0627\u0645\u0644 \u0627\u0644\u062e\u0637\u0631",\n  execBriefActions: "\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631",\n  execBriefDecisions: "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",\n  execBriefAlerts: "\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0646\u0634\u0637\u0629",\n  execBriefStatusPending: "\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631",\n  execBriefStatusInReview: "\u0642\u064a\u062f \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629",\n  execBriefStatusInProgress: "\u0642\u064a\u062f \u0627\u0644\u062a\u0646\u0641\u064a\u0630",\n  execBriefStatusCompleted: "\u0645\u062a\u0645",\n  execBriefDisclaimer: "\u064a\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0625\u062d\u0637\u0627\u0637 \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629 \u0644\u0644\u0625\u062d\u0635\u0627\u0621 \u0648\u0647\u0648 \u0645\u062e\u0635\u0635 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062f\u0627\u062e\u0644\u064a \u0644\u0644\u0642\u064a\u0627\u062f\u0629 \u0641\u0642\u0637.",\n'''

# Insert after pmeUnitBda line in each section
new_lines = []
for i, line in enumerate(lines):
    new_lines.append(line)
    if not en_has_exec and i == en_pme_line:
        new_lines.append(en_insert)
    if not fr_has_exec and i == fr_pme_line:
        new_lines.append(fr_insert)
    if not ar_has_exec and i == ar_pme_line:
        new_lines.append(ar_insert)

with open(filepath, 'w') as f:
    f.writelines(new_lines)

print(f'\nDone! Total lines: {len(new_lines)}')

# Verify
with open(filepath, 'r') as f:
    content = f.read()
print(f'tabExecutive count: {content.count("tabExecutive")}')
print(f'execDashboardTitle count: {content.count("execDashboardTitle")}')
print(f'execBriefTitle count: {content.count("execBriefTitle")}')
