import codecs


def add_keys_after(filepath, line_num, keys_text):
    with codecs.open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    # line_num is 1-based, convert to 0-based
    insert_at = line_num  # insert after this line number
    new_lines = keys_text.rstrip() + '\n'
    lines = lines[:insert_at] + [new_lines] + lines[insert_at:]
    with codecs.open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted {len(keys_text.splitlines())} keys after line {line_num}')

add_keys_after('src/lib/i18n/dictionaries.ts', 1119,
    '''  // ── EXECUTIVE ENHANCEMENTS ──────────────────
  execTabOverview: string;
  execTabRisks: string;
  execTabTargets: string;
  execTabComparison: string;
  execRiskTitle: string;
  execRiskSub: string;
  execRiskCrit: string;
  execRiskHigh: string;
  execRiskMed: string;
  execRiskLow: string;
  execRiskHighImpact: string;
  execRiskMedImpact: string;
  execRiskLowImpact: string;
  execRiskProbAxis: string;
  execRiskProb: string;
  execRiskImpact: string;
  execRiskList: string;
  execTargetTitle: string;
  execTargetSub: string;
  execTargetOnTrack: string;
  execTargetModerate: string;
  execTargetAtRisk: string;
  execCompTitle: string;
  execCompSub: string;
  execCompPrev: string;
  execCompCurr: string;
  execCompTable: string;
  execCompImproved: string;
  execCompVs: string;
  execCompPeriod: string;''')

add_keys_after('src/lib/i18n/dictionaries.ts', 2350,
    '''  execTabOverview: "Overview",
  execTabRisks: "Risk Matrix",
  execTabTargets: "VNR Targets",
  execTabComparison: "Comparison",
  execRiskTitle: "Risk Assessment Matrix",
  execRiskSub: "Probability vs Impact assessment for key economic risks",
  execRiskCrit: "Critical",
  execRiskHigh: "High",
  execRiskMed: "Medium",
  execRiskLow: "Low",
  execRiskHighImpact: "High Impact",
  execRiskMedImpact: "Med. Impact",
  execRiskLowImpact: "Low Impact",
  execRiskProbAxis: "Probability",
  execRiskProb: "Probability",
  execRiskImpact: "Impact",
  execRiskList: "All Risks",
  execTargetTitle: "VNR 2026 Target Tracker",
  execTargetSub: "Progress toward Voluntary National Review targets",
  execTargetOnTrack: "On Track",
  execTargetModerate: "Moderate",
  execTargetAtRisk: "At Risk",
  execCompTitle: "Executive Period Comparison",
  execCompSub: "Current vs previous period for key indicators",
  execCompPrev: "Previous",
  execCompCurr: "Current",
  execCompTable: "Detailed Comparison",
  execCompImproved: "Improved",
  execCompVs: "vs",
  execCompPeriod: "Semi-annual comparison",''')

add_keys_after('src/lib/i18n/dictionaries.ts', 3648,
    '''  execTabOverview: "Vue d'ensemble",
  execTabRisks: "Matrice des risques",
  execTabTargets: "Objectifs VNR",
  execTabComparison: "Comparaison",
  execRiskTitle: "Matrice d'\u00e9valuation des risques",
  execRiskSub: "\u00c9valuation de la probabilit\u00e9 vs l'impact pour les risques \u00e9conomiques cl\u00e9s",
  execRiskCrit: "Critique",
  execRiskHigh: "\u00c9lev\u00e9",
  execRiskMed: "Moyen",
  execRiskLow: "Faible",
  execRiskHighImpact: "Impact \u00e9lev\u00e9",
  execRiskMedImpact: "Impact moy.",
  execRiskLowImpact: "Impact faible",
  execRiskProbAxis: "Probabilit\u00e9",
  execRiskProb: "Probabilit\u00e9",
  execRiskImpact: "Impact",
  execRiskList: "Tous les risques",
  execTargetTitle: "Suivi des objectifs VNR 2026",
  execTargetSub: "Progr\u00e8s vers les objectifs de l'Examen National Volontaire",
  execTargetOnTrack: "Sur la bonne voie",
  execTargetModerate: "Progr\u00e8s mod\u00e9r\u00e9",
  execTargetAtRisk: "\u00c0 risque",
  execCompTitle: "Comparaison des p\u00e9riodes",
  execCompSub: "Indicateurs cl\u00e9s : p\u00e9riode actuelle vs pr\u00e9c\u00e9dente",
  execCompPrev: "Pr\u00e9c\u00e9dent",
  execCompCurr: "Actuel",
  execCompTable: "Comparaison d\u00e9taill\u00e9e",
  execCompImproved: "Am\u00e9lior\u00e9s",
  execCompVs: "vs",
  execCompPeriod: "Comparaison semestrielle",''')

add_keys_after('src/lib/i18n/dictionaries.ts', 4882,
    '''  execTabOverview: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
  execTabRisks: "\u0645\u0635\u0648\u0641 \u0627\u0644\u0645\u062e\u0627\u0637\u0631",
  execTabTargets: "\u0623\u0647\u062f\u0627\u0641 VNR",
  execTabComparison: "\u0645\u0642\u0627\u0631\u0646\u0649",
  execRiskTitle: "\u0645\u0635\u0648\u0641 \u062a\u0642\u064a\u0645 \u0627\u0644\u0645\u062e\u0627\u0637\u0631",
  execRiskSub: "\u062a\u0642\u064a\u0645 \u0627\u0644\u062d\u0627\u0645\u0644\u064a\u0629 \u0645\u0622\u0627\u0648\u0644 \u0627\u0644\u062a\u063b\u064a\u0631",
  execRiskCrit: "\u062d\u0631\u062c",
  execRiskHigh: "\u0645\u0631\u062a\u0639",
  execRiskMed: "\u0645\u062a\u0648\u0637",
  execRiskLow: "\u0645\u0646\u062e\u0641",
  execRiskHighImpact: "\u062a\u0633\u062b\u064a\u0631 \u0645\u0631\u062a\u0639",
  execRiskMedImpact: "\u062a\u0633\u062b\u064a\u0631 \u0645\u062a\u0648\u0637",
  execRiskLowImpact: "\u062a\u0633\u062b\u064a\u0631 \u0645\u0646\u062e\u0641",
  execRiskProbAxis: "\u0627\u0644\u062d\u0627\u0645\u0627\u0644\u064a\u0629",
  execRiskProb: "\u0627\u0644\u062d\u0627\u0645\u0647\u064a\u064a",
  execRiskImpact: "\u0627\u0644\u062a\u0633\u062b\u064a\u0631",
  execRiskList: "\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u062e\u0627\u0637\u0631",
  execTargetTitle: "\u0645\u062a\u0628\u0639 \u0623\u0647\u062f\u0627\u0641 VNR 2026",
  execTargetSub: "\u0627\u0644\u062a\u0642\u064f\u0645 \u0646\u062d\u0648 \u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u062a\u0642\u064a\u0631 ا\u0644\u062d\u0627\u0646\u064a",
  execTargetOnTrack: "\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0644\u0635\u062d\u0627\u0644",
  execTargetModerate: "\u062a\u0642\u064f\u0645 \u0645\u0639\u062a\u0648\u0641",
  execTargetAtRisk: "\u0645\u0639\u0631\u0636 \u0644\u0644\u062e\u0637\u0631",
  execCompTitle: "\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0641\u062a\u0631\u0627\u062a",
  execCompSub: "\u0627\u0644\u0645\u0624\u0634\u0611\u0627\u062a \u0627\u0644\u061f\u0631\u0626\u064a\u0629: \u0627\u0644\u061f\u062c\u0627\u0644\u0629 ا\u0644\u062d\u0646\u0648\u064a",
  execCompPrev: "\u0627\u0644\u0633\u0627\u0646\u0628\u0642",
  execCompCurr: "\u0627\u0644\u062d\u0627\u0644\u064a",
  execCompTable: "\u0645\u0642\u0627\u0631\u0646\0629 \u062a\u0641\u0635\u064a\u0644\u064a\u0629",
  execCompImproved: "\u062a\u062d\u0633\u0646",
  execCompVs: "\u0645\u0642\u0627\u0648\u0644",
  execCompPeriod: "\u0645\u0642\u0627\u0631\u0646\u0629 \u0646\u0635\u0641 \u0633\u0646\u0648\u064a",
  labelSearch: "\u0627\u0644\u0628\u062d",
''')

print('All insertions complete')
