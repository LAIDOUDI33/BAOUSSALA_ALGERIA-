#!/usr/bin/env python3
"""Apply filterByYear() to all year-based datasets in page.tsx charts.

Datasets WITH year field that should be wrapped with filterByYear():
  gdpAnnual, gdpBySector, gdpQuarterly, cpiMonthly, tradeAnnual,
  ipiQuarterly, laborMarket, demographics, fiscalData, education,
  ippiQuarterly, regionalTimeSeries, constructionIndex, hydrocarbons,
  agricultureData, manufacturingData, btpData, servicesData, miningEnergy,
  healthData, regionalHDI, regionalUrbanization,
  sdgDesalination, sdgWaterReuse, sdgTelecoms, sdgInnovation,
  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,
  worldBankGdpGrowth, worldBankGdpPerCapita, worldBankInflation,
  worldBankUnemployment, worldBankPopulation, worldBankGniPerCapita,
  worldBankTradeGdp, worldBankFdi, worldBankGrossCapital,
  worldBankExternalDebt, worldBankPoverty, worldBankLifeExpectancy,
  worldBankCo2Emissions, worldBankEnergyAccess, worldBankInternetUsers,
  worldBankEducationSpend

Datasets WITHOUT year field (categorical/static) — DO NOT wrap:
  tradeQuarterly, tradeByPartner, populationByAge, cpiByDivision,
  wilayaData, regionAggregates, regionalSectorComposition,
  wilayaDetailed, regionalInequality, regionalEmployment,
  regionalInfrastructure, topWilayasByUnemp, topWilayasByGDP,
  regionalDevelopmentScatter, wilayaPopulationRanking,
  sdgOverview, sdgIndicators, sdgDeepDive, sdgEnergyMix,
  sdgHousingPrograms, vnr2026Targets, worldBankDeviation, latestKPIs
"""

import re

FILE = "/home/z/my-project/src/app/page.tsx"

with open(FILE, "r") as f:
    content = f.read()

# Datasets that have a 'year' field and should be filtered
YEAR_DATASETS = {
    "gdpAnnual", "gdpBySector", "gdpQuarterly", "cpiMonthly", "tradeAnnual",
    "ipiQuarterly", "laborMarket", "demographics", "fiscalData", "education",
    "ippiQuarterly", "regionalTimeSeries", "constructionIndex", "hydrocarbons",
    "agricultureData", "manufacturingData", "btpData", "servicesData", "miningEnergy",
    "healthData", "regionalHDI", "regionalUrbanization",
    "sdgDesalination", "sdgWaterReuse", "sdgTelecoms", "sdgInnovation",
    "sdgFoodSecurity", "sdgEducation", "sdgInequality", "sdgOceans",
    "worldBankGdpGrowth", "worldBankGdpPerCapita", "worldBankInflation",
    "worldBankUnemployment", "worldBankPopulation", "worldBankGniPerCapita",
    "worldBankTradeGdp", "worldBankFdi", "worldBankGrossCapital",
    "worldBankExternalDebt", "worldBankPoverty", "worldBankLifeExpectancy",
    "worldBankCo2Emissions", "worldBankEnergyAccess", "worldBankInternetUsers",
    "worldBankEducationSpend",
}

# Pattern: data={datasetName} but NOT already wrapped with filterByYear
# Matches: data={gdpAnnual}, data={tradeAnnual}, etc.
# Does NOT match: data={filterByYear(gdpAnnual)}, data={someArray.map(...)}
pattern = re.compile(r'data=\{(' + '|'.join(YEAR_DATASETS) + r')\}')

# Find all matches
matches = list(pattern.finditer(content))
print(f"Found {len(matches)} chart data props needing filterByYear")

# Replace in reverse order to preserve positions
for m in reversed(matches):
    dataset = m.group(1)
    old = f"data={{{dataset}}}"
    new = f"data={{filterByYear({dataset})}}"
    content = content[:m.start()] + new + content[m.end():]
    print(f"  Line ~{content[:m.start()].count(chr(10))+1}: {old} → {new}")

with open(FILE, "w") as f:
    f.write(content)

print(f"\nDone! Applied filterByYear to {len(matches)} chart data props.")
