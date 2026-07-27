#!/usr/bin/env python3
"""Insert World Bank Arabic translations into dictionaries.ts"""
import re

filepath = "/home/z/my-project/src/lib/i18n/dictionaries.ts"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

ar_wb = '''
  // World Bank Tab
  tabWorldBank: "البنك الدولي",
  kpiWbGdpGrowth: "بم نمو الناتج المحلي",
  kpiWbInflation: "بم التضخم",
  kpiWbUnemployment: "بم البطالة",
  kpiWbGniPerCapita: "الدخل الوطني الإجمالي / فرد",
  kpiWbTradeGdp: "التجارة / ناتج",
  kpiWbFdi: "استثمار أجنبي",
  kpiWbExtDebt: "الدين الخارجي",
  kpiWbLifeExp: "متوسط العمر",
  chartWbGdpGrowthComp: "نمو الناتج المحلي — البنك الدولي vs ONS",
  chartWbGdpGrowthCompSub: "معدل النمو السنوي (%) — 2015–2024",
  chartWbInflationComp: "التضخم — البنك الدولي vs ONS",
  chartWbInflationCompSub: "تضخم الأسعار (%) — 2015–2024",
  chartWbUnemploymentComp: "البطالة — البنك الدولي vs ONS",
  chartWbUnemploymentCompSub: "نسبة البطالة (%) — 2015–2024",
  chartWbGdpPerCapitaComp: "الناتج المحلي / فرد — البنك الدولي vs ONS",
  chartWbGdpPerCapitaCompSub: "دولار أمريكي جارٍ — 2015–2024",
  chartWbPopulationComp: "السكان — البنك الدولي vs ONS",
  chartWbPopulationCompSub: "إجمالي السكان (ملايين) — 2015–2024",
  chartWbGniTrend: "الدخل الوطني الإجمالي / فرد",
  chartWbGniTrendSub: "دولار أمريكي — البنك الدولي",
  chartWbTradeGdp: "التجارة نسبة من الناتج",
  chartWbTradeGdpSub: "الصادرات، الواردات والإجمالي — البنك الدولي",
  chartWbFdiTrend: "الاستثمار الأجنبي (% من الناتج)",
  chartWbFdiTrendSub: "الاستثمار المباشر — البنك الدولي",
  chartWbExtDebtTrend: "محفظ الدين الخارجي (% من الدخل الوطني)",
  chartWbExtDebtTrendSub: "البنك الدولي",
  chartWbLifeExpTrend: "متوسط العمر عند الولادة",
  chartWbLifeExpTrendSub: "ذكور، إناث، الإجمالي — البنك الدولي",
  chartWbPovertyTrend: "معدلات الفقر",
  chartWbPovertyTrendSub: "2.15$/يوم، 3.65$/يوم، خط وطني — البنك الدولي",
  chartWbCo2Trend: "انبعاثات CO2 (طن/فرد)",
  chartWbCo2TrendSub: "انبعاثات ثاني أكسيد الكربون — البنك الدولي",
  chartWbEnergyAccess: "الوصول للطاقة والمتجددة",
  chartWbEnergyAccessSub: "نسبة الكهرباء، الطاقة المتجددة — البنك الدولي",
  chartWbInternetTrend: "الربط الرقمي",
  chartWbInternetTrendSub: "الإنترنت، المحمول، النطاق العريض — البنك الدولي",
  chartWbEduHealthSpend: "النفقات العامة (% من الناتج)",
  chartWbEduHealthSpendSub: "التعليم والصحة — البنك الدولي",
  chartWbGcfComp: "التكوين الرأسمالي — بم vs ONS",
  chartWbGcfCompSub: "% من الناتج — 2015–2024",
  chartWbDeviation: "ONS vs البنك الدولي — الانحرافات",
  chartWbDeviationSub: "مقارنة جانبية للمؤشرات الرئيسية 2024",
  labelWbSource: "المصدر: البنك الدولي للبيانات المفتوحة (data.worldbank.org) — مقارنة مع ONS",
  labelWb: "البنك الدولي",
  labelOns: "ONS",
  labelDeviation: "الانحراف (ONS-بم)",
  labelBnUsd: "مليار دولار",
  labelMUsd: "مليون دولار",
  labelPctPop: "% من السكان",
  labelTonsCapita: "طن/فرد",
  labelPctFinalEnergy: "% الطاقة النهائية",
  labelMobileSubs: "% اشتراكات المحمول",
  labelBroadband: "% النطاق العريض",
  labelPctGdp: "% من الناتج",
  labelPctGni: "% من الدخل الوطني الإجمالي",
  labelYears: "سنوات",
  labelPoverty215: "2.15$/يوم",
  labelPoverty365: "3.65$/يوم",
  labelPovertyNational: "الخط الوطني",
  labelMale: "ذكور",
  labelFemale: "إناث",
  labelElectricity: "الوصول للكهرباء",
  labelRenewable: "الطاقة المتجددة",
  labelEduSpend: "التعليم",
  labelHealthSpend: "الصحة",
'''

# Find the Arabic labelSdgSource line and insert after it
old = '  labelSdgSource: "المصدر: ONS ومراجع الأهداف",\n\n  labelSearch: "بحث",'
new = '  labelSdgSource: "المصدر: ONS ومراجع الأهداف",' + ar_wb + '\n  labelSearch: "بحث",'

if old in content:
    content = content.replace(old, new)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: Arabic WB translations inserted")
else:
    print("ERROR: Could not find anchor text")
    # Debug
    idx = content.find('المصدر: ONS')
    print(f"Found 'المصدر: ONS' at index {idx}")
    if idx >= 0:
        print(repr(content[idx:idx+200]))
