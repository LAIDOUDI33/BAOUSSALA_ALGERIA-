"""Fix duplicate translation keys in dictionaries.ts.

Issues:
1. EN dict (875-1976) has FR+AR duplicate WB/Benchmarking/SAD keys at lines 1516-1767
2. FR dict (1979-2975) has EN duplicate WB/Benchmarking/SAD keys at lines 2494-2584
3. FR dict has AR duplicate WB/Benchmarking/SAD/Wilaya keys at lines 2676-2767
4. AR dict (2978-3632) is MISSING all WB/Benchmarking/SAD/Wilaya keys
5. EN dict tabWilaya at ~line 1768 has Arabic value instead of English
"""

import re

INPUT = "/home/z/my-project/src/lib/i18n/dictionaries.ts"
OUTPUT = "/home/z/my-project/src/lib/i18n/dictionaries.ts"

with open(INPUT, "r", encoding="utf-8") as f:
    lines = f.readlines()

total = len(lines)
print(f"Total lines: {total}")

# Verify boundaries
assert "const en: Dictionary = {" in lines[874], f"EN dict start wrong at line 875: {lines[874][:60]}"
assert lines[1975].strip() == "};", f"EN dict end wrong at line 1976: {lines[1975][:60]}"
assert "const fr: Dictionary = {" in lines[1978], f"FR dict start wrong at line 1979: {lines[1978][:60]}"
assert lines[2974].strip() == "};", f"FR dict end wrong at line 2975: {lines[2974][:60]}"
assert "const ar: Dictionary = {" in lines[2977], f"AR dict start wrong at line 2978: {lines[2977][:60]}"
assert lines[3631].strip() == "};", f"AR dict end wrong at line 3632: {lines[3631][:60]}"

# Verify the duplicate blocks
# EN dict: line 1515 (0-indexed) should be sadDisclaimer EN, then 1516 starts tabWorldBank FR
assert 'tabWorldBank: "Banque Mondiale"' in lines[1515], f"Expected FR WB start at 1516: {lines[1515][:60]}"
# EN dict: line 1641 (0-indexed) should be sadDisclaimer AR, line 1642 starts tabWorldBank AR
assert 'tabWorldBank: "\\u0627\\u0644\\u0628\\u0646\\u0643' in lines[1641] or 'tabWorldBank: "البنك الدولي"' in lines[1641], f"Expected AR WB start at 1642: {lines[1641][:60]}"
# EN dict: line 1767 (0-indexed) should be tabWilaya Arabic
assert 'tabWilaya: "الولايات"' in lines[1767], f"Expected tabWilaya AR at 1768: {lines[1767][:60]}"

# FR dict: line 2493 (0-indexed) should be tabWorldBank EN
assert 'tabWorldBank: "World Bank"' in lines[2493], f"Expected EN WB start in FR at 2494: {lines[2493][:60]}"
# FR dict: line 2584 (0-indexed) should be tabWorldBank FR  
assert 'tabWorldBank: "Banque Mondiale"' in lines[2584], f"Expected FR WB start in FR at 2585: {lines[2584][:60]}"
# FR dict: line 2675 (0-indexed) should be tabWorldBank AR
assert 'tabWorldBank: "البنك الدولي"' in lines[2675] or 'tabWilaya: "الولايات"' in lines[2676], f"Expected AR start in FR at 2676: {lines[2675][:60]}"

print("All boundary checks passed!")

# ── Step 1: Remove duplicates from EN dict ──
# Remove lines 1516-1767 (0-indexed: 1515-1766) = FR+AR WB/Benchmarking/SAD block
# Keep lines 1515 (sadDisclaimer EN) and 1768+ (tabWilaya and rest)

# But first fix tabWilaya on line 1768 (0-indexed: 1767)
lines[1767] = lines[1767].replace('tabWilaya: "الولايات"', 'tabWilaya: "Wilayas"')
print(f"Fixed tabWilaya in EN dict")

# Remove EN dict duplicates: lines 1516-1767 (1-indexed) = indices 1515-1766
removed_en = lines[1515:1767]
lines = lines[:1515] + lines[1767:]
print(f"Removed {len(removed_en)} lines from EN dict (FR+AR duplicates)")

# After removal, line numbers shift. The FR dict was at lines 1979-2975 (1-indexed).
# We removed 252 lines (1767-1515), so FR dict now starts at 1979-252 = 1727 (1-indexed).
# But let's find it by content.

# Find the FR dict start
fr_start = None
for i, line in enumerate(lines):
    if "const fr: Dictionary = {" in line:
        fr_start = i
        break
assert fr_start is not None, "Could not find FR dict start"
print(f"FR dict now at line {fr_start + 1}")

# In the FR dict, find the duplicate blocks.
# The EN duplicate starts with: tabWorldBank: "World Bank"
# The FR correct starts with: tabWorldBank: "Banque Mondiale"
# The AR duplicate starts with: tabWorldBank: "البنك الدولي"

# Find all occurrences of tabWorldBank in FR dict
fr_dict_end = None
for i in range(fr_start, len(lines)):
    if lines[i].strip() == "};":
        fr_dict_end = i
        break

wb_lines_in_fr = []
for i in range(fr_start, fr_dict_end):
    if 'tabWorldBank:' in lines[i] or 'tabBenchmarking:' in lines[i] or 'tabSad:' in lines[i] or 'tabWilaya:' in lines[i]:
        wb_lines_in_fr.append((i, lines[i].strip()[:60]))

print(f"Found {len(wb_lines_in_fr)} tab key lines in FR dict:")
for idx, (ln, txt) in enumerate(wb_lines_in_fr):
    print(f"  Line {ln+1}: {txt}")

# The pattern should be:
# 1st occurrence: EN (tabWorldBank: "World Bank") at some line
# 2nd occurrence: FR (tabWorldBank: "Banque Mondiale")  
# 3rd occurrence: AR (tabWorldBank: "البنك الدولي")

# We need to remove the EN block (from 1st tabWorldBank to just before 2nd tabWorldBank)
# And remove the AR block (from 3rd tabWorldBank to just before wilaya/other FR keys)

if len(wb_lines_in_fr) >= 2:
    # Find the EN block: from 1st occurrence to just before 2nd
    en_block_start = wb_lines_in_fr[0][0]
    
    # The EN block includes tabWorldBank, wbKpi*, chartWb*, labelWb*, tabBenchmarking, bench*, tabSad, sad*
    # It ends just before the next tabWorldBank (FR)
    fr_wb_start = wb_lines_in_fr[1][0]
    
    # Remove the EN block
    removed_fr_en = lines[en_block_start:fr_wb_start]
    lines = lines[:en_block_start] + lines[fr_wb_start:]
    print(f"Removed {len(removed_fr_en)} EN-duplicate lines from FR dict")

# After removing EN duplicates, recalculate positions
fr_dict_end = None
for i in range(fr_start, len(lines)):
    if lines[i].strip() == "};":
        fr_dict_end = i
        break

# Find remaining AR duplicates in FR dict
# After removing EN block, the FR correct block should be there, followed by AR duplicates
wb_lines_in_fr2 = []
for i in range(fr_start, fr_dict_end):
    if 'tabWorldBank:' in lines[i]:
        wb_lines_in_fr2.append((i, lines[i].strip()[:80]))

print(f"\nAfter EN removal, tabWorldBank occurrences in FR dict: {len(wb_lines_in_fr2)}")
for idx, (ln, txt) in enumerate(wb_lines_in_fr2):
    print(f"  Line {ln+1}: {txt}")

if len(wb_lines_in_fr2) >= 2:
    # First is FR (correct), second is AR (duplicate to remove)
    ar_block_start = wb_lines_in_fr2[1][0]
    
    # The AR block goes from tabWorldBank AR to tabWilaya AR
    # Find where it ends (next section that's clearly FR)
    # Look for the pattern: after sadDisclaimer AR, there's tabWilaya AR, then wilaya keys in French
    # The AR block ends just before the French wilaya keys
    
    # Find the end of the AR block: look for the transition back to French content
    # After the AR SAD keys, there should be tabWilaya: "الولايات" (AR) then French wilaya keys
    # We need to find where the Arabic content ends and French content resumes
    
    # Strategy: find the line with tabWilaya in the AR block, then find where the content
    # switches back to clearly French text (non-Arabic)
    ar_block_end = ar_block_start
    for i in range(ar_block_start, fr_dict_end):
        line = lines[i]
        # If we find tabWilaya and then the NEXT key has French text, that's the boundary
        if 'tabWilaya:' in line:
            # The AR tabWilaya line itself is part of the AR block
            # Check if next non-empty lines are French
            for j in range(i + 1, min(i + 5, fr_dict_end)):
                stripped = lines[j].strip()
                if not stripped:
                    continue
                # French indicators: contains French chars like é, è, ê, à, etc.
                if any(c in stripped for c in 'éèêàùîôûç') and 'wilaya' in stripped.lower():
                    ar_block_end = j
                    break
                # Or just look for common French wilaya key patterns
                if 'wilayaKpiTotalSub:' in stripped and 'Total Wilayas' in stripped:
                    # This is English/French, not Arabic
                    ar_block_end = j
                    break
            break
    
    # Actually, let me use a simpler approach: the AR block starts at ar_block_start
    # and goes up to (but not including) the first clearly French/English wilaya key
    # after the Arabic SAD keys
    
    # Find the end more reliably
    ar_block_end = ar_block_start
    found_transition = False
    for i in range(ar_block_start + 1, fr_dict_end):
        stripped = lines[i].strip()
        if not stripped or stripped.startswith('//'):
            continue
        # After the AR block ends, we should see French wilaya keys
        # Look for wilayaKpiTotal with French/English text (not Arabic)
        if 'wilayaKpiTotal:' in stripped:
            # Check if the value is Arabic or French/English
            if 'ال' not in stripped and 'إ' not in stripped and 'و' not in stripped:
                ar_block_end = i
                found_transition = True
                break
        # Also check for other non-Arabic keys that follow the AR block
        if 'footer:' in stripped and 'Source' in stripped:
            ar_block_end = i
            found_transition = True
            break
    
    if not found_transition:
        # Fallback: find the last Arabic-looking line
        for i in range(ar_block_start, fr_dict_end):
            stripped = lines[i].strip()
            # Arabic text contains Arabic Unicode chars
            if any(ord(c) > 0x0600 and ord(c) < 0x06FF for c in stripped):
                ar_block_end = i + 1
        
    print(f"AR duplicate block in FR dict: lines {ar_block_start+1} to {ar_block_end}")
    
    removed_fr_ar = lines[ar_block_start:ar_block_end]
    lines = lines[:ar_block_start] + lines[ar_block_end:]
    print(f"Removed {len(removed_fr_ar)} AR-duplicate lines from FR dict")

# ── Step 3: Add missing keys to AR dict ──
# Find AR dict
ar_start = None
ar_end = None
for i, line in enumerate(lines):
    if "const ar: Dictionary = {" in line:
        ar_start = i
    if ar_start is not None and line.strip() == "};" and i > ar_start:
        # Make sure this is the right closing brace (not an inner one)
        ar_end = i

# Actually find the LAST }; after ar_start for the ar dict
ar_end = None
brace_count = 0
for i in range(ar_start, len(lines)):
    for c in lines[i]:
        if c == '{':
            brace_count += 1
        elif c == '}':
            brace_count -= 1
            if brace_count == 0:
                ar_end = i
                break
    if ar_end is not None:
        break

print(f"\nAR dict: lines {ar_start+1} to {ar_end+1}")

# Check if AR dict already has tabWorldBank
ar_has_wb = any('tabWorldBank:' in lines[i] for i in range(ar_start, ar_end))
ar_has_bench = any('tabBenchmarking:' in lines[i] for i in range(ar_start, ar_end))
ar_has_sad = any('tabSad:' in lines[i] for i in range(ar_start, ar_end))
ar_has_wilaya = any('tabWilaya:' in lines[i] for i in range(ar_start, ar_end))

print(f"AR dict has: WB={ar_has_wb}, Bench={ar_has_bench}, SAD={ar_has_sad}, Wilaya={ar_has_wilaya}")

if not ar_has_wb:
    # Arabic translations for WB/Benchmarking/SAD/Wilaya
    ar_missing_keys = '''
  tabWorldBank: "البنك الدولي",
  wbKpiGdp: "نمو الناتج المحلي",
  wbKpiInflation: "التضخم",
  wbKpiPop: "السكان",
  wbKpiGni: "الدخل القومي",
  wbKpiUnemp: "البطالة",
  wbKpiTrade: "التجارة (% ناتج)",
  wbKpiFdi: "الاستثمار الأجنبي",
  wbKpiDebt: "الدين الخارجي",
  chartWbGdpGrowth: "نمو الناتج (BM)",
  chartWbGdpGrowthSub: "البنك الدولي — تغير سنوي %",
  chartWbGdpCapita: "الناتج لكل نسمة (BM)",
  chartWbGdpCapitaSub: "دولار أمريكي",
  chartWbInflation: "التضخم (BM)",
  chartWbInflationSub: "سنوي %",
  chartWbUnemp: "البطالة (BM)",
  chartWbUnempSub: "تقدير منظمة العمل",
  chartWbTradeFdi: "التجارة والاستثمار (BM)",
  chartWbTradeFdiSub: "انفتاح تجاري + استثمار أجنبي",
  chartWbPopGrowth: "نمو السكان (BM)",
  chartWbPopGrowthSub: "السكان الإجمالي",
  chartWbInternetTrend: "الاتصال الرقمي (BM)",
  chartWbInternetTrendSub: "انتشار الإنترنت والهاتف",
  chartWbEduHealthSpend: "إنفاق التعليم والصحة (BM)",
  chartWbEduHealthSpendSub: "% من الناتج",
  chartWbGcfComp: "التكوين: BM vs ONS",
  chartWbGcfCompSub: "مقارنة تقديرات الاستثمار",
  chartWbDeviation: "الانحرافات BM vs ONS",
  chartWbDeviationSub: "الفروق في المؤشرات",
  labelWb: "البنك الدولي",
  labelWbSource: "المصدر: البنك الدولي — مقارنة مع ONS",
  labelOns: "ONS",
  labelMobileSubs: "هاتف %",
  labelBroadband: "بروادباند %",
  labelEduSpend: "التعليم % ناتج",
  labelHealthSpend: "الصحة % ناتج",
  chartWbVsOnsGdp: "نمو الناتج: البنك الدولي vs ONS",
  chartWbVsOnsGdpSub: "مقارنة مصدرين — % سنوي",
  chartWbVsOnsInflation: "التضخم: البنك الدولي vs ONS",
  chartWbVsOnsInflationSub: "مؤشر الأسعار الاستهلاكية — مصدران",
  chartWbVsOnsUnemp: "البطالة: البنك الدولي vs ONS",
  chartWbVsOnsUnempSub: "تقدير منظمة العمل vs ONS — % القوة العاملة",
  chartWbExtDebt: "الدين الخارجي (البنك الدولي)",
  chartWbExtDebtSub: "% من الناتج القومي الإجمالي",
  chartWbLifeExp: "متوسط العمر المتوقع (البنك الدولي)",
  chartWbLifeExpSub: "سنوات عند الولادة — ذكور وإناث",
  chartWbPoverty: "معدلات الفقر (البنك الدولي)",
  chartWbPovertySub: "نسب الفقر حسب خطوط فقر مختلفة",
  chartWbCo2: "انبعاثات CO2 (البنك الدولي)",
  chartWbCo2Sub: "طن متري للفرد",
  chartWbEnergy: "الوصول للطاقة والمتجددة (البنك الدولي)",
  chartWbEnergySub: "معدل الوصول للكهرباء وحصة الطاقة المتجددة",
  labelExports: "الصادرات",
  labelImports: "الواردات",
  labelTradeOpenness: "الانفتاح التجاري",
  labelLifeExp: "متوسط العمر",
  labelMale: "ذكر",
  labelFemale: "أنثى",
  labelPoverty215: "2.15$/يوم",
  labelPoverty365: "3.65$/يوم",
  labelPovertyNat: "الخط الوطني",
  labelElectricity: "الكهرباء %",
  labelRenewable: "متجدد %",
  labelCo2: "CO2 (طن/فرد)",
  labelYear: "السنة",
  labelDeviation: "الانحراف",
  wbKpiLifeExp: "متوسط العمر",
  wbKpiPoverty: "معدل الفقر",
  wbKpiCo2: "CO2/فرد",
  wbKpiRenewable: "الطاقة المتجددة",
  wbKpiInternet: "مستخدمو الإنترنت",

  tabBenchmarking: "مقارنة دولية",
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

  tabSad: "دعم القرار",
  sadForecastTab: "توقعات",
  sadSimulationTab: "محاكاة",
  sadAlertsTab: "تنبيهات",
  sadScenarioBase: "السيناريو الأساسي",
  sadScenarioOpti: "متفائل",
  sadScenarioPessi: "متشائم",
  sadLeverOilPrice: "سعر النفط ($/برمل)",
  sadLeverOilProd: "إنتاج النفط (م برمل/ي)",
  sadLeverInvestment: "معدل الاستثمار (% ناتج)",
  sadLeverTourism: "إيرادات السياحة ($مليار)",
  sadLeverAgriculture: "نمو الزراعة (%)",
  sadLeverIndustry: "نمو الصناعة (%)",
  sadAlertTitle: "تنبيهات ذكية",
  sadAlertDesc: "كشف الشذوذ في بيانات ONS",
  sadNoAlerts: "لا تنبيهات — جميع المؤشرات طبيعية.",
  sadSource: "المصدر: بيانات ONS — Z-score",
  sadMethodTitle: "المنهجية",
  sadMethodDesc: "التوقعات بالانحدار الخطي + تسطيح هولت.",
  sadMethodHolt: "تسطيح هولت",
  sadMethodHoltDesc: "تسطيح أسي ثنائي.",
  sadDisclaimer: "المحاكاة توقعات توضيحية ليست رسمية.",

  tabWilaya: "الولايات",
  wilayaKpiTotal: "إجمالي الولايات",
  wilayaKpiTotalSub: "48 تاريخية + 21 جديدة (2019+)",
  wilayaKpiWilayas: "ولاية",
  wilayaKpiPop: "إجمالي السكان",
  wilayaKpiHab: "نسمة",
  wilayaKpiPopSub: "إحصاء RGPH 2008",
  wilayaKpiArea: "إجمالي المساحة",
  wilayaKpiAreaSub: "الأكبر: تمنراست",
  wilayaKpiDairas: "الدوائر",
  wilayaKpiDairasSub: "المناطق الإدارية",
  wilayaKpiCommunes: "البلديات",
  wilayaKpiCommunesSub: "البلديات",
  wilayaKpiDensity: "متوسط الكثافة",
  wilayaKpiHabKm2: "نسمة/كم²",
  wilayaKpiDensitySub: "المعدل الوطني",
  wilayaTabTable: "جدول البيانات",
  wilayaTabPop: "السكان",
  wilayaTabGeo: "الجغرافيا",
  wilayaTabAnalysis: "تحليل",
  wilayaSearch: "البحث عن ولاية بالاسم أو الرقم...",
  wilayaFilterAll: "الكل",
  wilayaFilterLegacy: "التاريخية (48)",
  wilayaFilterNew: "الجديدة 2019+ (21)",
  wilayaColName: "الولاية",
  wilayaColDairas: "الدوائر",
  wilayaColCommunes: "البلديات",
  wilayaColArea: "المساحة (كم²)",
  wilayaColPop: "السكان",
  wilayaColDensity: "الكثافة",
  wilayaColStatus: "الحالة",
  wilayaColCount: "العدد",
  wilayaShown: "ولاية معروضة",
  wilayaBadgeNew: "جديدة",
  wilayaBadgeHist: "تاريخية",
  wilayaLegacy: "التاريخية (48)",
  wilayaNew2019: "الجديدة 2019+",
  wilayaChartTop10Pop: "أكثر 10 ولايات سكانا",
  wilayaChartTop10PopSub: "RGPH 2008 — السكان حسب الولاية",
  wilayaChartPopRegion: "السكان حسب المنطقة",
  wilayaChartPopRegionSub: "التوزيع على 6 مناطق كبرى",
  wilayaChartDensDist: "توزيع الكثافة",
  wilayaChartDensDistSub: "عدد الولايات حسب فئة الكثافة",
  wilayaChartNewVsOld: "الولايات التاريخية مقابل الجديدة",
  wilayaChartNewVsOldSub: "مقارنة بالعدد",
  wilayaChartTop10Area: "أكبر 10 ولايات مساحة",
  wilayaChartTop10AreaSub: "المساحة بالكم²",
  wilayaChartAreaRegion: "المساحة حسب المنطقة",
  wilayaChartAreaRegionSub: "التوزيع الإقليمي",
  wilayaChartScatter: "المساحة مقابل الكثافة (فقاعة = السكان)",
  wilayaChartScatterSub: "كل نقطة = ولاية واحدة",
  wilayaChartTop10Dens: "أكثف 10 ولايات",
  wilayaChartTop10DensSub: "نسمة لكل كم²",
  wilayaChartCommPerWilaya: "أعلى 10 حسب البلديات",
  wilayaChartCommPerWilayaSub: "عدد البلديات حسب الولاية",
  wilayaChartPopVsArea: "السكان مقابل المساحة (أعلى 15)",
  wilayaChartPopVsAreaSub: "مقارنة مدمجة",
  wilayaChartDairasVsComm: "الدوائر مقابل البلديات",
  wilayaChartDairasVsCommSub: "الارتباط الإداري",
  wilayaDens0: "< 10",
  wilayaDens10: "10-50",
  wilayaDens50: "50-200",
  wilayaDens200: "200-500",
  wilayaDens500: "500+",
  wilayaSource: "المصدر: ONS — RGPH 2008 + قانون التقسيم الإداري 2019",'''
    
    # Insert before the closing }; of AR dict
    lines = lines[:ar_end] + [ar_missing_keys + "\n"] + lines[ar_end:]
    print(f"Added {ar_missing_keys.count(chr(10))} lines of missing Arabic keys")

# ── Step 4: Verify the fix ──
# Check no duplicate keys remain
for dict_name, dict_start_keyword in [("EN", "const en: Dictionary = {"), ("FR", "const fr: Dictionary = {"), ("AR", "const ar: Dictionary = {")]:
    dict_start = None
    dict_end = None
    brace_count = 0
    for i, line in enumerate(lines):
        if dict_start_keyword in line and dict_start is None:
            dict_start = i
            brace_count = 0
        if dict_start is not None:
            for c in line:
                if c == '{':
                    brace_count += 1
                elif c == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        dict_end = i
                        break
            if dict_end is not None:
                break
    
    if dict_start is None or dict_end is None:
        print(f"WARNING: Could not find {dict_name} dict boundaries!")
        continue
    
    # Check for duplicate tab keys
    key_counts = {}
    for i in range(dict_start, dict_end):
        stripped = lines[i].strip()
        if stripped.startswith('tab') and ':' in stripped:
            key_name = stripped.split(':')[0].strip()
            key_counts[key_name] = key_counts.get(key_name, 0) + 1
    
    duplicates = {k: v for k, v in key_counts.items() if v > 1}
    if duplicates:
        print(f"WARNING: {dict_name} dict still has duplicate tab keys: {duplicates}")
    else:
        print(f"OK: {dict_name} dict has no duplicate tab keys")

with open(OUTPUT, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"\nDone! File saved to {OUTPUT}")
print(f"Final line count: {len(lines)} (was {total})")
