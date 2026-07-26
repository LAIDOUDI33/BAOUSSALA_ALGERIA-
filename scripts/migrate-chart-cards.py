"""Migrate ChartCard to ExportableChartCard in page.tsx with data references.

Strategy:
1. Add the ExportableChartCard import
2. For each ChartCard, find the nearest data array reference in the JSX and pass it as `data` prop
3. Also add a unique exportId derived from the translation key
"""

import re

filepath = "/home/z/my-project/src/app/page.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Step 1: Add the import
old_import = 'import { HeaderControls } from "@/components/global-search";'
new_import = '''import { HeaderControls } from "@/components/global-search";
import { ExportableChartCard } from "@/components/exportable-chart";'''

if 'ExportableChartCard' not in content:
    content = content.replace(old_import, new_import, 1)
    print("Added ExportableChartCard import")

# Step 2: Replace ChartCard with ExportableChartCard
# We need to be smart about finding the data prop for each chart.
# Pattern: <ChartCard title={t.someKey} -> we use someKey as exportId

# First, let's find all ChartCard usages with their data arrays.
# The data is typically the first array variable inside the ChartContainer.

# Simple replacement: just change the component name and add exportId from title
lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    new_line = line
    
    # Replace <ChartCard with <ExportableChartCard
    if '<ChartCard ' in line and '</ChartCard>' not in line:
        new_line = line.replace('<ChartCard ', '<ExportableChartCard ')
        
        # Try to extract the translation key from title={t.someKey} for exportId
        title_match = re.search(r'title=\{t\.([a-zA-Z]+)\}', new_line)
        if title_match:
            key = title_match.group(1)
            # Add exportId prop - insert before the closing > or before subtitle/classname
            if '>' in new_line and 'exportId' not in new_line:
                # Find the last > that's not inside a string
                insert_pos = new_line.rfind('>')
                before = new_line[:insert_pos]
                after = new_line[insert_pos:]
                new_line = f'{before} exportId="{key}"{after}'
    
    # Replace </ChartCard> with </ExportableChartCard>
    if '</ChartCard>' in line:
        new_line = line.replace('</ChartCard>', '</ExportableChartCard>')
    
    new_lines.append(new_line)

content = '\n'.join(new_lines)

# Step 3: Now add data props to the most important charts (ones with clear data arrays)
# Map of title translation keys -> data variable names (from algeria-data imports)
data_mapping = {
    # Macro
    'chartGdpGrowth': 'gdpAnnual',
    'chartGdpSector': 'gdpBySector',
    'chartQuarterlyGdp': 'gdpQuarterly',
    'chartGdpPerCapita': 'gdpAnnual',
    # Inflation
    'chartCpiMonthly': 'cpiMonthly',
    'chartCpiLevel': 'cpiMonthly',
    'chartCpiDivision': 'cpiByDivision',
    # Trade
    'chartTradeAnnual': 'tradeAnnual',
    'chartTradeQuarterly': 'tradeQuarterly',
    'chartTradePartners': 'tradeByPartner',
    # Industry
    'chartIpi': 'ipiQuarterly',
    'chartIpiIppi': 'ipiQuarterly',
    'chartConstruction': 'constructionIndex',
    # Labor
    'chartUnempRate': 'laborMarket',
    'chartActivityFemale': 'laborMarket',
    'chartEmpPop': 'laborMarket',
    # Social
    'chartPopGrowth': 'demographics',
    'chartPopPyramid': 'populationByAge',
    # Regional
    'chartWilayaGdp': 'regionAggregates',
    'chartRegionUnempTrend': 'regionalTimeSeries',
    'chartRegionGdpTrend': 'regionalTimeSeries',
    'chartRegionSectors': 'regionalSectorComposition',
    'chartRegionHDI': 'regionalHDI',
    'chartRegionEmploy': 'regionalEmployment',
    'chartRegionInfra': 'regionalInfrastructure',
    'chartWilayaUnempRank': 'topWilayasByUnemp',
    'chartRegionGdpRank': 'topWilayasByGDP',
    'chartRegionDevScatter': 'regionalDevelopmentScatter',
    'chartRegionUrbanTrend': 'regionalUrbanization',
    'chartWilayaPopRank': 'wilayaPopulationRank',
    # Hydro
    'chartHydroRevenue': 'hydrocarbons',
    'chartHydroVsNonHydro': 'hydrocarbons',
    'chartHydroGdp': 'hydrocarbons',
    # Agriculture
    'chartAgriExports': 'agricultureData',
    # Manufacturing
    'chartManufSubsectors': 'manufacturingData',
    'chartManufRadar': 'manufacturingData',
    'chartManufBuildingPaper': 'manufacturingData',
    'chartManufEmployCapacity': 'manufacturingData',
    'chartManufGDP': 'manufacturingData',
    'chartManufFDI': 'manufacturingData',
    # SDG
    'chartSdgProgress': 'sdgOverview',
    'chartSdgEnergyMix': 'sdgEnergyMix',
    'chartSdgHousing': 'sdgHousingPrograms',
    'chartSdgDesalination': 'sdgDesalination',
    'chartSdgWaterReuse': 'sdgWaterReuse',
    'chartSdgTelecoms': 'sdgTelecoms',
    'chartSdgInnovation': 'sdgInnovation',
    'chartSdgFood': 'sdgFoodSecurity',
    'chartSdgEducation': 'sdgEducation',
    'chartSdgInequality': 'sdgInequality',
    'chartSdgOceans': 'sdgOceans',
}

# For each exportId in the file, add the corresponding data prop
for key, data_var in data_mapping.items():
    pattern = f'exportId="{key}"'
    replacement = f'exportId="{key}" data={{{data_var}}}'
    content = content.replace(pattern, replacement, 1)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Replaced all ChartCard -> ExportableChartCard with {len(data_mapping)} data mappings")
