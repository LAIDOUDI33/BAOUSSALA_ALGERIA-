"""Restore World Bank tab (inline) and SAD tab (component) to page.tsx"""

with open('/home/z/my-project/src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Add WB data imports
old_import = '  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,\n} from "@/lib/algeria-data";'
new_import = '''  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,
  worldBankGdpGrowth, worldBankGdpPerCapita, worldBankInflation, worldBankUnemployment,
  worldBankPopulation, worldBankGniPerCapita, worldBankTradeGdp, worldBankFdi,
  worldBankGrossCapital, worldBankExternalDebt, worldBankPoverty, worldBankLifeExpectancy,
  worldBankCo2Emissions, worldBankEnergyAccess, worldBankInternetUsers,
  worldBankEducationSpend, worldBankKPIs, worldBankDeviation,
} from "@/lib/algeria-data";'''
content = content.replace(old_import, new_import)

# 2. Add DecisionSupportTab import
content = content.replace(
    'import WilayaMapTab from "@/components/tabs/WilayaMapTab";',
    'import WilayaMapTab from "@/components/tabs/WilayaMapTab";\nimport DecisionSupportTab from "@/components/tabs/DecisionSupportTab";'
)

# 3. Add Brain icon import
content = content.replace(
    '  Map as MapIcon,\n} from "lucide-react";',
    '  Map as MapIcon, Brain,\n} from "lucide-react";'
)

# 4. Add WB and SAD tab items
old_tabs = '''    { val: "sdg", label: t.tabSdg, icon: Target },
    { val: "wilaya", label: t.tabWilaya, icon: MapIcon },
  ];'''
new_tabs = '''    { val: "sdg", label: t.tabSdg, icon: Target },
    { val: "worldbank", label: t.tabWorldBank, icon: Landmark },
    { val: "sad", label: t.tabSad, icon: Brain },
    { val: "wilaya", label: t.tabWilaya, icon: MapIcon },
  ];'''
content = content.replace(old_tabs, new_tabs)

# 5. Add WB + SAD TabsContent before wilaya TabsContent
wb_tab = '''          <TabsContent value="worldbank" className="space-y-5">
            {/* World Bank KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.wbKpiGdp} value={worldBankKPIs.gdpGrowth} unit="%" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.wbKpiInflation} value={worldBankKPIs.inflation} unit="%" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.wbKpiPop} value={worldBankKPIs.population} unit="M" icon={Users} color={COLORS.blue} />
              <KpiCard title={t.wbKpiGni} value={worldBankKPIs.gniPerCapita} unit="$" icon={DollarSign} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.wbKpiUnemp} value={worldBankKPIs.unemployment} unit="%" icon={Users} color={COLORS.amber} />
              <KpiCard title={t.wbKpiTrade} value={worldBankKPIs.tradeGdp} unit="% GDP" icon={Globe} color={COLORS.cyan} />
              <KpiCard title={t.wbKpiFdi} value={worldBankKPIs.fdi} unit="bn $" icon={TrendingUp} color={COLORS.teal} />
              <KpiCard title={t.wbKpiDebt} value={worldBankKPIs.externalDebt} unit="% GNI" icon={DollarSign} color={COLORS.rose} />
            </div>

            {/* Charts row: GDP Growth + GDP Per Capita */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWbGdpGrowth} subtitle={t.chartWbGdpGrowthSub} exportId="chartWbGdpGrowth" data={worldBankGdpGrowth}>
                <ChartContainer config={{ value: { label: t.labelWb, color: "#0891b2" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankGdpGrowth} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[-5, 8]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="value" stroke={COLORS.cyan} strokeWidth={2} dot={{ fill: COLORS.cyan, r: 3 }} name={t.labelWb} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartWbGdpCapita} subtitle={t.chartWbGdpCapitaSub} exportId="chartWbGdpCapita" data={worldBankGdpPerCapita}>
                <ChartContainer config={{ value: { label: t.wbKpiGni, color: "#059669" } }} className="h-[300px] w-full">
                  <AreaChart data={worldBankGdpPerCapita} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="value" stroke={COLORS.emerald} fill={COLORS.emeraldLight} fillOpacity={0.4} strokeWidth={2} name={t.wbKpiGni} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: Inflation + Unemployment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWbInflation} subtitle={t.chartWbInflationSub} exportId="chartWbInflation" data={worldBankInflation}>
                <ChartContainer config={{ value: { label: t.wbKpiInflation, color: "#dc2626" } }} className="h-[300px] w-full">
                  <BarChart data={worldBankInflation} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[0, 12]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" name={t.wbKpiInflation} radius={[2, 2, 0, 0]}>
                      {worldBankInflation.map((d: { value: number }, i: number) => (
                        <Cell key={i} fill={d.value >= 6 ? COLORS.red : d.value >= 4 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartWbUnemp} subtitle={t.chartWbUnempSub} exportId="chartWbUnemp" data={worldBankUnemployment}>
                <ChartContainer config={{ value: { label: t.wbKpiUnemp, color: "#d97706" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankUnemployment} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[8, 14]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="value" stroke={COLORS.amber} strokeWidth={2} dot={{ fill: COLORS.amber, r: 3 }} name={t.wbKpiUnemp} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: Trade + FDI + Population */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWbTradeFdi} subtitle={t.chartWbTradeFdiSub} exportId="chartWbTradeFdi" data={worldBankTradeGdp}>
                <ChartContainer config={{ trade: { label: t.wbKpiTrade, color: "#0891b2" }, fdi: { label: t.wbKpiFdi, color: "#059669" } }} className="h-[300px] w-full">
                  <ComposedChart data={worldBankTradeGdp} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="trade" fill={COLORS.cyan} radius={[2, 2, 0, 0]} opacity={0.7} name={t.wbKpiTrade} />
                    <Line type="monotone" dataKey="fdi" stroke={COLORS.emerald} strokeWidth={2} dot={{ r: 3 }} name={t.wbKpiFdi} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartWbPopGrowth} subtitle={t.chartWbPopGrowthSub} exportId="chartWbPopGrowth" data={worldBankPopulation}>
                <ChartContainer config={{ value: { label: t.wbKpiPop, color: "#2563eb" } }} className="h-[300px] w-full">
                  <AreaChart data={worldBankPopulation} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[35, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="value" stroke={COLORS.blue} fill={COLORS.blueLight} fillOpacity={0.3} strokeWidth={2} name={t.wbKpiPop} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: Internet + Edu/Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWbInternetTrend} subtitle={t.chartWbInternetTrendSub} exportId="chartWbInternet" data={worldBankInternetUsers}>
                <ChartContainer config={{ internet: { label: "Internet %", color: "#2563eb" }, mobile: { label: t.labelMobileSubs, color: "#059669" }, broadband: { label: t.labelBroadband, color: "#7c3aed" } }} className="h-[300px] w-full">
                  <ComposedChart data={worldBankInternetUsers} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[0, 105]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="internet" stroke={COLORS.blue} fill={COLORS.blueLight} fillOpacity={0.3} strokeWidth={2} />
                    <Line type="monotone" dataKey="mobile" stroke={COLORS.emerald} strokeWidth={2} dot={{ fill: COLORS.emerald, r: 3 }} />
                    <Bar dataKey="broadband" fill={COLORS.purple} radius={[4, 4, 0, 0]} opacity={0.5} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartWbEduHealthSpend} subtitle={t.chartWbEduHealthSpendSub} exportId="chartWbEduHealth" data={worldBankEducationSpend}>
                <ChartContainer config={{ eduGdp: { label: t.labelEduSpend, color: "#2563eb" }, healthGdp: { label: t.labelHealthSpend, color: "#e11d48" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankEducationSpend} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[4, 8]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="eduGdp" stroke={COLORS.blue} strokeWidth={2} dot={{ fill: COLORS.blue, r: 3 }} />
                    <Line type="monotone" dataKey="healthGdp" stroke={COLORS.rose} strokeWidth={2} dot={{ fill: COLORS.rose, r: 3 }} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: GCF Comparison + Deviation Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWbGcfComp} subtitle={t.chartWbGcfCompSub} exportId="chartWbGcf" data={worldBankGrossCapital}>
                <ChartContainer config={{ gcf: { label: t.labelWb, color: "#0891b2" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankGrossCapital} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[30, 45]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="gcf" stroke={COLORS.cyan} strokeWidth={2} dot={{ fill: COLORS.cyan, r: 3 }} name={t.labelWb} />
                    <Line type="monotone" dataKey="ons" stroke={COLORS.emerald} strokeWidth={2} dot={{ fill: COLORS.emerald, r: 3 }} strokeDasharray="6 3" name={t.labelOns} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartWbDeviation} subtitle={t.chartWbDeviationSub} exportId="chartWbDeviation">
                <div className="space-y-2">
                  {worldBankDeviation.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                      <span className="flex-1 text-sm font-medium text-foreground truncate">{d.indicator}</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-16 text-right">{d.wb}</span>
                      <span className="text-xs text-muted-foreground">vs</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 w-16 text-right">{d.ons}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${d.diff > 0 ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300" : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300"}`}>{d.diff > 0 ? "+" : ""}{d.diff}</span>
                    </div>
                  ))}
                </div>
              </ChartCard>
            </div>

            <p className="text-xs text-muted-foreground">{t.labelWbSource}</p>
          </TabsContent>'''

sad_tab = '''          <TabsContent value="sad" className="space-y-5">
            <DecisionSupportTab t={t} />
          </TabsContent>'''

# Insert WB+SAD before wilaya tab
old_wilaya = '''          <TabsContent value="wilaya" className="space-y-5">
            <WilayaMapTab t={t} />
          </TabsContent>'''
content = content.replace(old_wilaya, wb_tab + '\n' + sad_tab + '\n' + old_wilaya)

with open('/home/z/my-project/src/app/page.tsx', 'w') as f:
    f.write(content)

print('Done - WB tab + SAD tab restored in page.tsx')
