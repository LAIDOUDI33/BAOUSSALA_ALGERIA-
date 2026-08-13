import re

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'r') as f:
    content = f.read()

# 1. Add to Dictionary interface (before 'footer: string;')
interface_block = '''
  // ─── WILAYA CARTOGRAPHY ─────────────────────────────────────────────
  tabWilaya: string;
  wilayaKpiTotal: string;
  wilayaKpiTotalSub: string;
  wilayaKpiWilayas: string;
  wilayaKpiPop: string;
  wilayaKpiHab: string;
  wilayaKpiPopSub: string;
  wilayaKpiArea: string;
  wilayaKpiAreaSub: string;
  wilayaKpiDairas: string;
  wilayaKpiDairasSub: string;
  wilayaKpiCommunes: string;
  wilayaKpiCommunesSub: string;
  wilayaKpiDensity: string;
  wilayaKpiHabKm2: string;
  wilayaKpiDensitySub: string;
  wilayaTabTable: string;
  wilayaTabPop: string;
  wilayaTabGeo: string;
  wilayaTabAnalysis: string;
  wilayaSearch: string;
  wilayaFilterAll: string;
  wilayaFilterLegacy: string;
  wilayaFilterNew: string;
  wilayaColName: string;
  wilayaColDairas: string;
  wilayaColCommunes: string;
  wilayaColArea: string;
  wilayaColPop: string;
  wilayaColDensity: string;
  wilayaColStatus: string;
  wilayaColCount: string;
  wilayaShown: string;
  wilayaBadgeNew: string;
  wilayaBadgeHist: string;
  wilayaLegacy: string;
  wilayaNew2019: string;
  wilayaChartTop10Pop: string;
  wilayaChartTop10PopSub: string;
  wilayaChartPopRegion: string;
  wilayaChartPopRegionSub: string;
  wilayaChartDensDist: string;
  wilayaChartDensDistSub: string;
  wilayaChartNewVsOld: string;
  wilayaChartNewVsOldSub: string;
  wilayaChartTop10Area: string;
  wilayaChartTop10AreaSub: string;
  wilayaChartAreaRegion: string;
  wilayaChartAreaRegionSub: string;
  wilayaChartScatter: string;
  wilayaChartScatterSub: string;
  wilayaChartTop10Dens: string;
  wilayaChartTop10DensSub: string;
  wilayaChartCommPerWilaya: string;
  wilayaChartCommPerWilayaSub: string;
  wilayaChartPopVsArea: string;
  wilayaChartPopVsAreaSub: string;
  wilayaChartDairasVsComm: string;
  wilayaChartDairasVsCommSub: string;
  wilayaDens0: string;
  wilayaDens10: string;
  wilayaDens50: string;
  wilayaDens200: string;
  wilayaDens500: string;
  wilayaSource: string;
'''

content = content.replace('  footer: string;', interface_block + '  footer: string;', 1)

# 2. English translations
en_keys = {
    'tabWilaya': '"Wilayas"',
    'wilayaKpiTotal': '"Total Wilayas"',
    'wilayaKpiTotalSub': '"48 historical + 21 new (2019+)"',
    'wilayaKpiWilayas': '"wilayas"',
    'wilayaKpiPop': '"Total Population"',
    'wilayaKpiHab': '"inhabitants"',
    'wilayaKpiPopSub': '"RGPH 2008 census"',
    'wilayaKpiArea': '"Total Area"',
    'wilayaKpiAreaSub': '"Largest: Tamanrasset"',
    'wilayaKpiDairas': '"Daïras"',
    'wilayaKpiDairasSub': '"Administrative districts"',
    'wilayaKpiCommunes': '"Communes"',
    'wilayaKpiCommunesSub': '"Municipalities"',
    'wilayaKpiDensity': '"Avg. Density"',
    'wilayaKpiHabKm2': '"hab./km²"',
    'wilayaKpiDensitySub': '"National average"',
    'wilayaTabTable': '"Data Table"',
    'wilayaTabPop': '"Population"',
    'wilayaTabGeo': '"Geography"',
    'wilayaTabAnalysis': '"Analysis"',
    'wilayaSearch': '"Search wilaya by name or code..."',
    'wilayaFilterAll': '"All"',
    'wilayaFilterLegacy': '"Historical (48)"',
    'wilayaFilterNew': '"New 2019+ (21)"',
    'wilayaColName': '"Wilaya"',
    'wilayaColDairas': '"Daïras"',
    'wilayaColCommunes': '"Communes"',
    'wilayaColArea': '"Area (km²)"',
    'wilayaColPop': '"Population"',
    'wilayaColDensity': '"Density"',
    'wilayaColStatus': '"Status"',
    'wilayaColCount': '"Count"',
    'wilayaShown': '"wilayas displayed"',
    'wilayaBadgeNew': '"New"',
    'wilayaBadgeHist': '"Hist."',
    'wilayaLegacy': '"Historical (48)"',
    'wilayaNew2019': '"New 2019+"',
    'wilayaChartTop10Pop': '"Top 10 Most Populated"',
    'wilayaChartTop10PopSub': '"RGPH 2008 — Population by wilaya"',
    'wilayaChartPopRegion': '"Population by Region"',
    'wilayaChartPopRegionSub': '"Distribution across 6 macro-regions"',
    'wilayaChartDensDist': '"Density Distribution"',
    'wilayaChartDensDistSub': '"Number of wilayas per density range"',
    'wilayaChartNewVsOld': '"Historical vs New Wilayas"',
    'wilayaChartNewVsOldSub': '"Comparison by count"',
    'wilayaChartTop10Area': '"Top 10 Largest by Area"',
    'wilayaChartTop10AreaSub': '"Surface area in km²"',
    'wilayaChartAreaRegion': '"Area by Region"',
    'wilayaChartAreaRegionSub': '"Territorial distribution"',
    'wilayaChartScatter': '"Area vs Density (bubble = population)"',
    'wilayaChartScatterSub': '"Each dot = one wilaya"',
    'wilayaChartTop10Dens': '"Top 10 Densest"',
    'wilayaChartTop10DensSub': '"Inhabitants per km²"',
    'wilayaChartCommPerWilaya': '"Top 10 by Communes"',
    'wilayaChartCommPerWilayaSub': '"Number of communes per wilaya"',
    'wilayaChartPopVsArea': '"Population vs Area (Top 15)"',
    'wilayaChartPopVsAreaSub': '"Combined comparison"',
    'wilayaChartDairasVsComm': '"Daïras vs Communes"',
    'wilayaChartDairasVsCommSub': '"Administrative structure correlation"',
    'wilayaDens0': '"< 10"',
    'wilayaDens10': '"10-50"',
    'wilayaDens50': '"50-200"',
    'wilayaDens200': '"200-500"',
    'wilayaDens500': '"500+"',
    'wilayaSource': '"Source: ONS — RGPH 2008 + Administrative Division Law 2019"',
}

# 3. French translations
fr_keys = {
    'tabWilaya': '"Wilayas"',
    'wilayaKpiTotal': '"Total Wilayas"',
    'wilayaKpiTotalSub': '"48 historiques + 21 nouvelles (2019+)"',
    'wilayaKpiWilayas': '"wilayas"',
    'wilayaKpiPop': '"Population Totale"',
    'wilayaKpiHab': '"habitants"',
    'wilayaKpiPopSub': '"Recensement RGPH 2008"',
    'wilayaKpiArea': '"Superficie Totale"',
    'wilayaKpiAreaSub': '"Plus grande : Tamanrasset"',
    'wilayaKpiDairas': '"Daïras"',
    'wilayaKpiDairasSub': '"Districts administratifs"',
    'wilayaKpiCommunes': '"Communes"',
    'wilayaKpiCommunesSub': '"Municipalités"',
    'wilayaKpiDensity': '"Densité Moy."',
    'wilayaKpiHabKm2': '"hab./km²"',
    'wilayaKpiDensitySub': '"Moyenne nationale"',
    'wilayaTabTable': '"Tableau"',
    'wilayaTabPop': '"Population"',
    'wilayaTabGeo': '"Géographie"',
    'wilayaTabAnalysis': '"Analyse"',
    'wilayaSearch': '"Rechercher une wilaya par nom ou code..."',
    'wilayaFilterAll': '"Toutes"',
    'wilayaFilterLegacy': '"Historiques (48)"',
    'wilayaFilterNew': '"Nouvelles 2019+ (21)"',
    'wilayaColName': '"Wilaya"',
    'wilayaColDairas': '"Daïras"',
    'wilayaColCommunes': '"Communes"',
    'wilayaColArea': '"Superficie (km²)"',
    'wilayaColPop': '"Population"',
    'wilayaColDensity': '"Densité"',
    'wilayaColStatus': '"Statut"',
    'wilayaColCount': '"Nombre"',
    'wilayaShown': '"wilayas affichées"',
    'wilayaBadgeNew': '"Nouvelle"',
    'wilayaBadgeHist': '"Hist."',
    'wilayaLegacy': '"Historiques (48)"',
    'wilayaNew2019': '"Nouvelles 2019+"',
    'wilayaChartTop10Pop': '"Top 10 Plus Peuplées"',
    'wilayaChartTop10PopSub': '"RGPH 2008 — Population par wilaya"',
    'wilayaChartPopRegion': '"Population par Région"',
    'wilayaChartPopRegionSub': '"Répartition sur 6 macro-régions"',
    'wilayaChartDensDist': '"Répartition Densité"',
    'wilayaChartDensDistSub': '"Nombre de wilayas par tranche de densité"',
    'wilayaChartNewVsOld': '"Wilayas Historiques vs Nouvelles"',
    'wilayaChartNewVsOldSub': '"Comparaison par nombre"',
    'wilayaChartTop10Area': '"Top 10 Plus Grandes"',
    'wilayaChartTop10AreaSub': '"Superficie en km²"',
    'wilayaChartAreaRegion': '"Superficie par Région"',
    'wilayaChartAreaRegionSub': '"Répartition territoriale"',
    'wilayaChartScatter': '"Superficie vs Densité (bulle = population)"',
    'wilayaChartScatterSub': '"Chaque point = une wilaya"',
    'wilayaChartTop10Dens': '"Top 10 Plus Denses"',
    'wilayaChartTop10DensSub': '"Habitants par km²"',
    'wilayaChartCommPerWilaya': '"Top 10 par Communes"',
    'wilayaChartCommPerWilayaSub': '"Nombre de communes par wilaya"',
    'wilayaChartPopVsArea': '"Population vs Superficie (Top 15)"',
    'wilayaChartPopVsAreaSub': '"Comparaison combinée"',
    'wilayaChartDairasVsComm': '"Daïras vs Communes"',
    'wilayaChartDairasVsCommSub': '"Corrélation administrative"',
    'wilayaDens0': '"< 10"',
    'wilayaDens10': '"10-50"',
    'wilayaDens50': '"50-200"',
    'wilayaDens200': '"200-500"',
    'wilayaDens500': '"500+"',
    'wilayaSource': '"Source : ONS — RGPH 2008 + Loi de Découpage Administratif 2019"',
}

# 4. Arabic translations
ar_keys = {
    'tabWilaya': '"\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a"',
    'wilayaKpiTotal': '"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a"',
    'wilayaKpiTotalSub': '"48 \u062a\u0627\u0631\u064a\u062e\u064a\u0629 + 21 \u062c\u062f\u064a\u062f\u0629 (2019+)"',
    'wilayaKpiWilayas': '"\u0648\u0644\u0627\u064a\u0629"',
    'wilayaKpiPop': '"\u0627\u0644\u0633\u0643\u0627\u0646"',
    'wilayaKpiHab': '"\u0646\u0633\u064a\u0645\u0629"',
    'wilayaKpiPopSub': '"\u0625\u062d\u0635\u0627\u0621 RGPH 2008"',
    'wilayaKpiArea': '"\u0627\u0644\u0645\u0633\u0627\u062d\u0629"',
    'wilayaKpiAreaSub': '"\u0627\u0644\u0623\u0643\u0628\u0631: \u062a\u0645\u0646\u0631\u0627\u0633\u062a"',
    'wilayaKpiDairas': '"\u0627\u0644\u062f\u0648\u0627\u0626\u0631"',
    'wilayaKpiDairasSub': '"\u0645\u0642\u0627\u0637\u0639 \u0625\u062f\u0627\u0631\u064a\u0629"',
    'wilayaKpiCommunes': '"\u0627\u0644\u0628\u0644\u062f\u064a\u0627\u062a"',
    'wilayaKpiCommunesSub': '"\u0628\u0644\u062f\u064a\u0627\u062a"',
    'wilayaKpiDensity': '"\u0643\u062b\u0627\u0641\u0629 \u0645\u062a\u0648\u0633\u0637\u0629"',
    'wilayaKpiHabKm2': '"\u0646\u0633\u064a\u0645\u0629/\u0643\u0645\u0628"',
    'wilayaKpiDensitySub': '"\u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0648\u0637\u0646\u064a"',
    'wilayaTabTable': '"\u062c\u062f\u0648\u0644"',
    'wilayaTabPop': '"\u0627\u0644\u0633\u0643\u0627\u0646"',
    'wilayaTabGeo': '"\u062c\u063a\u0631\u0627\u0641\u064a\u0627"',
    'wilayaTabAnalysis': '"\u062a\u062d\u0644\u064a\u0644"',
    'wilayaSearch': '"\u0628\u062d\u062b \u0628\u0627\u0633\u0645 \u0627\u0644\u0648\u0644\u0627\u064a\u0629 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632..."',
    'wilayaFilterAll': '"\u0627\u0644\u0643\u0644"',
    'wilayaFilterLegacy': '"\u062a\u0627\u0631\u064a\u062e\u064a\u0629 (48)"',
    'wilayaFilterNew': '"\u062c\u062f\u064a\u062f\u0629 2019+ (21)"',
    'wilayaColName': '"\u0627\u0644\u0648\u0644\u0627\u064a\u0629"',
    'wilayaColDairas': '"\u0627\u0644\u062f\u0648\u0627\u0626\u0631"',
    'wilayaColCommunes': '"\u0627\u0644\u0628\u0644\u062f\u064a\u0627\u062a"',
    'wilayaColArea': '"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 (\u0643\u0645\u0628)"',
    'wilayaColPop': '"\u0627\u0644\u0633\u0643\u0627\u0646"',
    'wilayaColDensity': '"\u0627\u0644\u0643\u062b\u0627\u0641\u0629"',
    'wilayaColStatus': '"\u0627\u0644\u062d\u0627\u0644\u0629"',
    'wilayaColCount': '"\u0627\u0644\u0639\u062f\u062f"',
    'wilayaShown': '"\u0648\u0644\u0627\u064a\u0629 \u0645\u0639\u0631\u0648\u0636\u0629"',
    'wilayaBadgeNew': '"\u062c\u062f\u064a\u062f\u0629"',
    'wilayaBadgeHist': '"\u062a\u0627\u0631\u064a\u062e\u064a\u0629"',
    'wilayaLegacy': '"\u062a\u0627\u0631\u064a\u062e\u064a\u0629 (48)"',
    'wilayaNew2019': '"\u062c\u062f\u064a\u062f\u0629 2019+"',
    'wilayaChartTop10Pop': '"\u0623\u0643\u062b\u0631 10 \u0648\u0644\u0627\u064a\u0627\u062a \u0633\u0643\u0627\u0646\u0627"',
    'wilayaChartTop10PopSub': '"RGPH 2008 \u2014 \u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0633\u0628 \u0627\u0644\u0648\u0644\u0627\u064a\u0629"',
    'wilayaChartPopRegion': '"\u0627\u0644\u0633\u0643\u0627\u0646 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"',
    'wilayaChartPopRegionSub': '"\u0627\u0644\u062a\u0648\u0632\u064a\u0639 \u0639\u0644\u0649 6 \u0645\u0646\u0627\u0637\u0642"',
    'wilayaChartDensDist': '"\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u0643\u062b\u0627\u0641\u0629"',
    'wilayaChartDensDistSub': '"\u0639\u062f\u062f \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0643\u062b\u0627\u0641\u0629"',
    'wilayaChartNewVsOld': '"\u062a\u0627\u0631\u064a\u062e\u064a\u0629 vs \u062c\u062f\u064a\u062f\u0629"',
    'wilayaChartNewVsOldSub': '"\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0627\u0644\u0639\u062f\u062f"',
    'wilayaChartTop10Area': '"\u0623\u0643\u0628\u0631 10 \u0648\u0644\u0627\u064a\u0627\u062a \u0645\u0633\u0627\u062d\u0629"',
    'wilayaChartTop10AreaSub': '"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0628\u0627\u0644\u0643\u0645\u0628"',
    'wilayaChartAreaRegion': '"\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"',
    'wilayaChartAreaRegionSub': '"\u0627\u0644\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u062a\u0631\u0627\u0628\u064a"',
    'wilayaChartScatter': '"\u0645\u0633\u0627\u062d\u0629 vs \u0643\u062b\u0627\u0641\u0629"',
    'wilayaChartScatterSub': '"\u0643\u0644 \u0646\u0642\u0637\u0629 = \u0648\u0644\u0627\u064a\u0629"',
    'wilayaChartTop10Dens': '"\u0623\u0643\u062b\u0631 10 \u0643\u062b\u0627\u0641\u0629"',
    'wilayaChartTop10DensSub': '"\u0646\u0633\u064a\u0645\u0629 \u0644\u0643\u0644 \u0643\u0645\u0628"',
    'wilayaChartCommPerWilaya': '"\u0623\u0643\u062b\u0631 10 \u0628\u0644\u062f\u064a\u0627\u062a"',
    'wilayaChartCommPerWilayaSub': '"\u0639\u062f\u062f \u0627\u0644\u0628\u0644\u062f\u064a\u0627\u062a \u0644\u0643\u0644 \u0648\u0644\u0627\u064a\u0629"',
    'wilayaChartPopVsArea': '"\u0627\u0644\u0633\u0643\u0627\u0646 vs \u0627\u0644\u0645\u0633\u0627\u062d\u0629"',
    'wilayaChartPopVsAreaSub': '"\u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u062c\u0645\u0639\u0629"',
    'wilayaChartDairasVsComm': '"\u062f\u0648\u0627\u0626\u0631 vs \u0628\u0644\u062f\u064a\u0627\u062a"',
    'wilayaChartDairasVsCommSub': '"\u0639\u0644\u0627\u0642\u0629 \u0625\u062f\u0627\u0631\u064a\u0629"',
    'wilayaDens0': '"< 10"',
    'wilayaDens10': '"10-50"',
    'wilayaDens50': '"50-200"',
    'wilayaDens200': '"200-500"',
    'wilayaDens500': '"500+"',
    'wilayaSource': '"\u0627\u0644\u0645\u0635\u062f\u0631: ONS \u2014 RGPH 2008 + \u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062a\u0642\u0633\u064a\u0645 \u0627\u0644\u0625\u062f\u0627\u0631\u064a 2019"',
}

# Build insertion blocks
for lang, keys in [('en', en_keys), ('fr', fr_keys), ('ar', ar_keys)]:
    block = ',\n'.join(f'  {k}: {v}' for k, v in keys.items())
    
    # Find the footer line in this language section and insert before it
    # We need to find the right footer for each language
    if lang == 'en':
        marker = '  footer: "Source: Office National des Statistiques'
    elif lang == 'fr':
        marker = '  footer: "Source : Office National des Statistiques'
    else:
        marker = '  footer: "\u0627\u0644\u0645\u0635\u062f\u0631: \u0627\u0644\u0645\u0643\u062a\u0628'
    
    content = content.replace(marker, block + ',\n' + marker)

with open('/home/z/my-project/src/lib/i18n/dictionaries.ts', 'w') as f:
    f.write(content)

print('Done - added wilaya i18n keys to Dictionary interface + EN/FR/AR')
