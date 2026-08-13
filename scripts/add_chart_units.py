#!/usr/bin/env python3
"""
Add unit props to ChartCard components in page.tsx.
Each chart gets a unit label based on what data it displays.
Also adds data and exportId props for CSV export on key charts.
"""
import re

with open('/home/z/my-project/src/app/page.tsx', 'r') as f:
    content = f.read()

# Strategy: find ChartCard patterns and add unit/data/exportId based on
# the title/subtitle/context. We do this with targeted regex replacements.

# Define replacements: pattern -> new props to add (unit, data, exportId)
# We match on the title/subtitle content to identify each chart

replacements = [
    # ─── MACRO TAB ───
    # GDP Growth chart
    (r'(<ChartCard title=\{t\.chartGdpGrowth\} subtitle=\{t\.chartGdpGrowthSub\})',
     r'\1 unit="%" data={gdpAnnual}'),
    # GDP USD chart  
    (r'(<ChartCard title=\{t\.chartGdpBnUsd\})',
     r'\1 unit="Mds USD" data={gdpAnnual}'),
    # GDP Sector
    (r'(<ChartCard title=\{t\.chartGdpSector\})',
     r'\1 unit="%" data={gdpBySector}'),
    # Quarterly GDP
    (r'(<ChartCard title=\{t\.chartQuarterlyGdp\})',
     r'\1 unit="%" data={gdpQuarterly}'),
    # GDP Per Capita
    (r'(<ChartCard title=\{t\.chartGdpPerCapita\})',
     r'\1 unit="$" data={gdpAnnual}'),

    # ─── INFLATION TAB ───
    # CPI Monthly
    (r'(<ChartCard title=\{t\.chartCpiMonthly\})',
     r'\1 unit="Indice" data={cpiMonthly}'),
    # Inflation YoY
    (r'(<ChartCard title=\{t\.chartInflationYoy\})',
     r'\1 unit="%" data={cpiMonthly}'),
    # Food Inflation
    (r'(<ChartCard title=\{t\.chartFoodYoy\})',
     r'\1 unit="%" data={cpiMonthly}'),
    # Core Inflation
    (r'(<ChartCard title=\{t\.chartCoreYoy\})',
     r'\1 unit="%" data={cpiMonthly}'),
    # CPI by Division
    (r'(<ChartCard title=\{t\.chartCpiDivision\})',
     r'\1 unit="%" data={cpiByDivision}'),

    # ─── TRADE TAB ───
    (r'(<ChartCard title=\{t\.chartTradeBalance\})',
     r'\1 unit="Mds USD" data={tradeAnnual}'),
    (r'(<ChartCard title=\{t\.chartTradeEvolution\})',
     r'\1 unit="Mds USD" data={tradeAnnual}'),
    (r'(<ChartCard title=\{t\.chartTradePartners\})',
     r'\1 unit="Mds USD" data={tradeByPartner}'),
    (r'(<ChartCard title=\{t\.chartTradeCoverage\})',
     r'\1 unit="%" data={tradeAnnual}'),

    # ─── INDUSTRY TAB ───
    (r'(<ChartCard title=\{t\.chartIpiTrend\})',
     r'\1 unit="Indice" data={ipiQuarterly}'),
    (r'(<ChartCard title=\{t\.chartIpiByBranch\})',
     r'\1 unit="Indice" data={ipiQuarterly}'),
    (r'(<ChartCard title=\{t\.chartIppiTrend\})',
     r'\1 unit="%" data={ippiQuarterly}'),

    # ─── LABOR TAB ───
    (r'(<ChartCard title=\{t\.chartUnempTrend\})',
     r'\1 unit="%" data={laborMarket}'),
    (r'(<ChartCard title=\{t\.chartPopGrowth\})',
     r'\1 unit="M" data={demographics}'),
    (r'(<ChartCard title=\{t\.chartPopByAge\})',
     r'\1 unit="%" data={populationByAge}'),

    # ─── FISCAL TAB ───
    (r'(<ChartCard title=\{t\.chartFiscalRev\})',
     r'\1 unit="% PIB" data={fiscalData}'),
    (r'(<ChartCard title=\{t\.chartDebtGdp\})',
     r'\1 unit="%" data={fiscalData}'),

    # ─── HYDRO TAB ───
    (r'(<ChartCard title=\{t\.chartHydroRev\})',
     r'\1 unit="Mds USD" data={hydrocarbons}'),
    (r'(<ChartCard title=\{t\.chartOilGasProd\})',
     r'\1 unit data={hydrocarbons}'),

    # ─── AGRICULTURE TAB ───
    (r'(<ChartCard title=\{t\.chartAgriProd\})',
     r'\1 unit data={agricultureData}'),
    (r'(<ChartCard title=\{t\.chartCerealProd\})',
     r'\1 unit data={agricultureData}'),

    # ─── BTP TAB ───
    (r'(<ChartCard title=\{t\.chartBtpIndex\})',
     r'\1 unit="Indice" data={constructionIndex}'),
    (r'(<ChartCard title=\{t\.chartBtpHousing\})',
     r'\1 unit data={btpData}'),

    # ─── SERVICES TAB ───
    (r'(<ChartCard title=\{t\.chartServicesGdp\})',
     r'\1 unit="%" data={servicesData}'),

    # ─── MINING TAB ───
    (r'(<ChartCard title=\{t\.chartMiningProd\})',
     r'\1 unit data={miningEnergy}'),

    # ─── HEALTH TAB ───
    (r'(<ChartCard title=\{t\.chartHealthBeds\})',
     r'\1 unit data={healthData}'),
    (r'(<ChartCard title=\{t\.chartHealthCoverage\})',
     r'\1 unit data={healthData}'),
]

applied = 0
for pattern, replacement in replacements:
    new_content = re.sub(pattern, replacement, content)
    if new_content != content:
        applied += 1
        content = new_content

# Also add units to WB charts that don't use t.* title pattern
wb_replacements = [
    (r'(<ChartCard title=\{t\.chartWbGdpGrowth\})', r'\1 unit="%" data={worldBankGdpGrowth}'),
    (r'(<ChartCard title=\{t\.chartWbVsOnsGdp\})', r'\1 unit="%" data={worldBankGdpGrowth}'),
    (r'(<ChartCard title=\{t\.chartWbVsOnsInflation\})', r'\1 unit="%" data={worldBankInflation}'),
    (r'(<ChartCard title=\{t\.chartWbVsOnsUnemp\})', r'\1 unit="%" data={worldBankUnemployment}'),
    (r'(<ChartCard title=\{t\.chartWbGdpCapita\})', r'\1 unit="$" data={worldBankGdpPerCapita}'),
    (r'(<ChartCard title=\{t\.chartWbVsOns\})', r'\1 unit="$" data={worldBankGdpPerCapita}'),
    (r'(<ChartCard title=\{t\.chartWbExtDebt\})', r'\1 unit="% RNB" data={worldBankExternalDebt}'),
    (r'(<ChartCard title=\{t\.chartWbLifeExp\})', r'\1 unit="Années" data={worldBankLifeExpectancy}'),
    (r'(<ChartCard title=\{t\.chartWbPoverty\})', r'\1 unit="%" data={worldBankPoverty}'),
    (r'(<ChartCard title=\{t\.chartWbCo2\})', r'\1 unit="t/hab" data={worldBankCo2Emissions}'),
    (r'(<ChartCard title=\{t\.chartWbEnergy\})', r'\1 unit="%" data={worldBankEnergyAccess}'),
    (r'(<ChartCard title=\{t\.chartWbInternetTrend\})', r'\1 unit="%" data={worldBankInternetUsers}'),
    (r'(<ChartCard title=\{t\.chartWbEduHealthSpend\})', r'\1 unit="% PIB" data={worldBankEducationSpend}'),
    (r'(<ChartCard title=\{t\.chartWbTradeFdi\})', r'\1 unit="% PIB" data={worldBankTradeGdp}'),
    (r'(<ChartCard title=\{t\.chartWbPopGrowth\})', r'\1 unit="M" data={worldBankPopulation}'),
    (r'(<ChartCard title=\{t\.chartWbGcfComp\})', r'\1 unit="% PIB" data={worldBankGrossCapital}'),
    (r'(<ChartCard title=\{t\.chartWbDeviation\})', r'\1 unit data={worldBankDeviation}'),
]

for pattern, replacement in wb_replacements:
    new_content = re.sub(pattern, replacement, content)
    if new_content != content:
        applied += 1
        content = new_content

with open('/home/z/my-project/src/app/page.tsx', 'w') as f:
    f.write(content)

print(f'Applied {applied} unit/data replacements')
