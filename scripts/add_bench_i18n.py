#!/usr/bin/env python3
"""Add benchmarking i18n values before each tabSad dictionary entry."""
import re

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

# EN values
en_block = '''  tabBenchmarking: "Benchmarking",
  benchTabOverview: "Overview",
  benchTabGrowth: "Growth & Trade",
  benchTabSocial: "Social & HDI",
  benchTabDigital: "Digital & Energy",
  benchTabFiscal: "Budget & Debt",
  benchFocus: "Reference",
  benchPop: "Population",
  benchGdp: "GDP",
  benchGni: "GNI/cap",
  benchRadar: "Comparative Profile",
  benchRadarSub: "Algeria vs peers — normalized scores 0-100",
  benchSummary: "Summary Table",
  benchSummarySub: "Ranking on 12 key indicators",
  benchIndicator: "Indicator",
  benchBest: "Best",
  benchGdpGrowth: "GDP Growth",
  benchGdpGrowthSub: "Annual % — World Bank",
  benchGdpCapita: "GDP Per Capita",
  benchInflation: "Inflation",
  benchTrade: "Trade Openness",
  benchUnemp: "Unemployment",
  benchFdi: "FDI",
  benchLifeExp: "Life Expectancy",
  benchHdi: "HDI Components",
  benchSectors: "Sector Structure",
  benchUnempComp: "Unemployment 2024",
  benchDigital: "Digital Indicators",
  benchEnergy: "Energy & CO2",
  benchDebt: "External Debt",
  benchFiscal: "Fiscal Balance",
  benchSource: "Source: World Bank, IMF, UNDP, ILO — Data 2015-2024",
'''

# FR values
fr_block = '''  tabBenchmarking: "Comparaison Internationale",
  benchTabOverview: "Vue d'ensemble",
  benchTabGrowth: "Croissance & Commerce",
  benchTabSocial: "Social & IDH",
  benchTabDigital: "Numérique & Énergie",
  benchTabFiscal: "Budget & Dette",
  benchFocus: "Référence",
  benchPop: "Population",
  benchGdp: "PIB",
  benchGni: "RNB/hab",
  benchRadar: "Profil Comparatif",
  benchRadarSub: "Algérie vs pairs — scores normalisés 0-100",
  benchSummary: "Tableau de Synthèse",
  benchSummarySub: "Classement sur 12 indicateurs clés",
  benchIndicator: "Indicateur",
  benchBest: "Meilleur",
  benchGdpGrowth: "Croissance PIB",
  benchGdpGrowthSub: "% annuel — Banque Mondiale",
  benchGdpCapita: "PIB par Habitant",
  benchInflation: "Inflation",
  benchTrade: "Ouverture Commerciale",
  benchUnemp: "Chômage",
  benchFdi: "IDE",
  benchLifeExp: "Espérance de Vie",
  benchHdi: "Composantes IDH",
  benchSectors: "Structure Sectorielle",
  benchUnempComp: "Chômage 2024",
  benchDigital: "Indicateurs Numériques",
  benchEnergy: "Énergie & CO2",
  benchDebt: "Dette Extérieure",
  benchFiscal: "Équilibre Budgétaire",
  benchSource: "Source : Banque Mondiale, FMI, PNUD, OIT — Données 2015-2024",
'''

# AR values
ar_block = '''  tabBenchmarking: "مقارنة دولية",
  benchTabOverview: "نظرة عامة",
  benchTabGrowth: "النمو والتجارة",
  benchTabSocial: "اجتماعي ومؤشر التنمية",
  benchTabDigital: "رقمي وطاقة",
  benchTabFiscal: "ميزانية ودين",
  benchFocus: "مرجع",
  benchPop: "السكان",
  benchGdp: "الناتج",
  benchGni: "الدخل/فرد",
  benchRadar: "ملف مقارن",
  benchRadarSub: "الجزائر مقابل الدول المشابهة — نقاط 0-100",
  benchSummary: "جدول ملخص",
  benchSummarySub: "ترتيب على 12 مؤشر رئيسي",
  benchIndicator: "المؤشر",
  benchBest: "الأفضل",
  benchGdpGrowth: "نمو الناتج",
  benchGdpGrowthSub: "% سنوي — البنك الدولي",
  benchGdpCapita: "الناتج للفرد",
  benchInflation: "التضخم",
  benchTrade: "الانفتاح التجاري",
  benchUnemp: "البطالة",
  benchFdi: "الاستثمار الأجنبي",
  benchLifeExp: "متوسط العمر",
  benchHdi: "مكونات مؤشر التنمية",
  benchSectors: "البنية القطاعية",
  benchUnempComp: "البطالة 2024",
  benchDigital: "المؤشرات الرقمية",
  benchEnergy: "الطاقة وثاني أكسيد الكربون",
  benchDebt: "الدين الخارجي",
  benchFiscal: "التوازن المالي",
  benchSource: "المصدر: البنك الدولي، صندوق النقد، برنامج الأمم المتحدة، منظمة العمل — بيانات 2015-2024",
'''

# Find all tabSad occurrences (dictionary values, not type def)
# Pattern: match tabSad: "..." at start of line (dictionary value lines)
lines = content.split('\n')
new_lines = []
dict_index = 0  # 0=EN, 1=FR, 2=AR, 3=EN2, 4=FR2, 5=AR2

for line in lines:
    if re.match(r'  tabSad: "', line):
        # Determine which language based on the value
        if '"Aide' in line or "'Aide" in line:
            new_lines.append(fr_block)
        elif '\u0627\u0644\u0642' in line or 'القرار' in line:
            new_lines.append(ar_block)
        else:
            new_lines.append(en_block)
    new_lines.append(line)

content = '\n'.join(new_lines)

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)

print('Benchmarking i18n values added')