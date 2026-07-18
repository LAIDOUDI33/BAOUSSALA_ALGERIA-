with open('src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

lines = content.split('\n')
fr_insert_idx = None
for i, line in enumerate(lines):
    if 'chartUnempPctLabel: "Ch' in line and '\u00f4' in line:
        fr_insert_idx = i + 1
        break

fr_keys = """  kpiRegTotalPop: "Pop. 58 wilayas",
  kpiRegTotalWilayas: "58 wilayas",
  kpiRegNationalGdp: "PIB national",
  kpiRegAvgUnemp: "Ch\\u00f4mage moyen",
  kpiRegYouthUnemp: "Ch\\u00f4mage des jeunes",
  kpiRegUrbanization: "Taux d'urbanisation",
  kpiRegPoverty: "Taux de pauvret\\u00e9",
  kpiRegElectrification: "\\u00c9lectrification",
  kpiRegInformal: "Emploi informel",
  kpiRegSecondary: "Scolarisation secondaire",
  kpiRegNetMigration: "Solde migratoire",
  kpiRegHospitalBeds: "Lits/10 000 hab.",
  chartRegionGdpShare: "Part du PIB par Macro-R\\u00e9gion (2024)",
  chartRegionGdpShareSub: "% du PIB national \\u2014 Source : ONS Comptes R\\u00e9gionaux",
  chartRegionUnempTrend: "Taux de Ch\\u00f4mage par R\\u00e9gion (2015\\u20132024)",
  chartRegionUnempTrendSub: "% \\u2014 Source : ONS Enqu\\u00eates Emploi",
  chartRegionUnemp: "Ch\\u00f4mage %",
  chartRegionGdpTrend: "\\u00c9volution de la Part du PIB par R\\u00e9gion (2015\\u20132024)",
  chartRegionGdpTrendSub: "% du PIB national",
  chartRegionSectorComp: "Composition Sectorielle du PIB par R\\u00e9gion (2023)",
  chartRegionSectorCompSub: "% \\u2014 Agriculture, Industrie, BTP, Services, Hydrocarbures",
  chartRegionPoverty: "Taux de Pauvret\\u00e9 par Macro-R\\u00e9gion (2024)",
  chartRegionPovertySub: "% sous le seuil national de pauvret\\u00e9 \\u2014 Source : ONS",
  chartRegionYouthUnemp: "Ch\\u00f4mage des Jeunes (15-24 ans) par R\\u00e9gion (2024)",
  chartRegionYouthUnempSub: "% \\u2014 Source : ONS Enqu\\u00eate Emploi 2024",
  chartRegionUrbanization: "Taux d'Urbanisation par R\\u00e9gion (2024)",
  chartRegionUrbanizationSub: "% de la population en milieu urbain",
  chartRegionDensity: "Densit\\u00e9 de Population par Macro-R\\u00e9gion (2024)",
  chartRegionDensitySub: "Habitants par km\\u00b2",
  chartRegionPerCapita: "PIB par Habitant par Macro-R\\u00e9gion (2024)",
  chartRegionPerCapitaSub: "Milliers DZD \\u2014 Source : ONS",
  chartRegionElectrification: "Taux d'\\u00c9lectrification par R\\u00e9gion (2024)",
  chartRegionElectrificationSub: "% des m\\u00e9nages raccord\\u00e9s \\u00e0 l'\\u00e9lectricit\\u00e9",
  chartRegionMigration: "Solde Migratoire par R\\u00e9gion (2024)",
  chartRegionMigrationSub: "Pour 1 000 habitants (\\u2030)",
  chartRegionInformal: "Emploi Informel par R\\u00e9gion (2024)",
  chartRegionInformalSub: "% de l'emploi total \\u2014 Source : ONS",
  chartRegionHealth: "Lits Hospitaliers pour 10 000 par R\\u00e9gion (2024)",
  chartRegionHealthSub: "Source : ONS / Minist\\u00e8re de la Sant\\u00e9",
  chartRegionEducation: "Scolarisation Secondaire par R\\u00e9gion (2024)",
  chartRegionEducationSub: "% scolarisation brute \\u2014 Source : ONS",
  labelCentre: "Centre",
  labelEst: "Est",
  labelOuest: "Ouest",
  labelSud: "Sud",
  labelHautsPlateaux: "Hauts Plateaux",
  labelAgriculture: "Agriculture",
  labelIndustry: "Industrie",
  labelConstruction: "BTP",
  labelServices: "Services",
  labelHydrocarbons: "Hydrocarbures","""

if fr_insert_idx:
    lines.insert(fr_insert_idx, fr_keys)
    content = '\n'.join(lines)
    print(f"FR keys inserted at line {fr_insert_idx}")
else:
    print("ERROR: Could not find FR marker")

with open('src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)