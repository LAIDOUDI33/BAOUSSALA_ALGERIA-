#!/usr/bin/env python3
"""Insert World Bank tab into page.tsx"""

filepath = "/home/z/my-project/src/app/page.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add WB imports to the data import block
old_import = '''  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,
} from "@/lib/algeria-data";'''
new_import = '''  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,
  worldBankKPIs, worldBankGdpGrowth, worldBankGdpPerCapita, worldBankInflation,
  worldBankUnemployment, worldBankPopulation, worldBankGniPerCapita,
  worldBankTradeGdp, worldBankFdi, worldBankGrossCapital, worldBankExternalDebt,
  worldBankPoverty, worldBankLifeExpectancy, worldBankCo2Emissions,
  worldBankEnergyAccess, worldBankInternetUsers, worldBankEducationSpend,
  worldBankDeviation,
} from "@/lib/algeria-data";'''

content = content.replace(old_import, new_import)

# 2. Add Landmark icon to lucide imports (if not already there)
if 'Landmark' not in content:
    old_icons = '  Target, CheckCircle2, CircleDot, Flame, Sun, Battery, Sunrise, Factory as FactoryIcon,'
    new_icons = '  Target, CheckCircle2, CircleDot, Flame, Sun, Battery, Sunrise, Factory as FactoryIcon, Landmark,'
    content = content.replace(old_icons, new_icons)

# 3. Add World Bank tab to tabItems
old_tabs = '''    { val: "sdg", label: t.tabSdg, icon: Target },
  ];'''
new_tabs = '''    { val: "sdg", label: t.tabSdg, icon: Target },
    { val: "worldbank", label: t.tabWorldBank, icon: Landmark },
  ];'''
content = content.replace(old_tabs, new_tabs)

# 4. Insert the World Bank TabsContent before the closing </Tabs>
wb_tab = '''          <TabsContent value="worldbank" className="space-y-5">
            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiWbGdpGrowth} value={worldBankKPIs.gdpGrowthWb} unit="%" change={worldBankKPIs.gdpGrowthOns - worldBankKPIs.gdpGrowthWb} changeDir="up" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.kpiWbInflation} value={worldBankKPIs.inflationWb} unit="%" change={worldBankKPIs.inflationOns - worldBankKPIs.inflationWb} changeDir="down" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.kpiWbUnemployment} value={worldBankKPIs.unemploymentWb} unit="%" change={worldBankKPIs.unemploymentOns - worldBankKPIs.unemploymentWb} changeDir="down" icon={Users} color={COLORS.amber} />
              <KpiCard title={t.kpiWbGniPerCapita} value={worldBankKPIs.gniPerCapita} unit="$" icon={DollarSign} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiWbTradeGdp} value={worldBankKPIs.tradeGdpPct} unit="%" icon={Globe} color={COLORS.cyan} />
              <KpiCard title={t.kpiWbFdi} value={worldBankKPIs.fdiPct} unit="%" icon={Briefcase} color={COLORS.purple} />
              <KpiCard title={t.kpiWbExtDebt} value={worldBankKPIs.externalDebtPct} unit={t.labelPctGni} icon={ArrowDownRight} color={COLORS.rose} />
              <KpiCard title={t.kpiWbLifeExp} value={worldBankKPIs.lifeExpectancy} unit={t.labelYears} icon={Heart} color={COLORS.teal} />
            </div>

            {/* Chart: GDP Growth WB vs ONS */}
            <ExportableChartCard title={t.chartWbGdpGrowthComp} subtitle={t.chartWbGdpGrowthCompSub} exportId="chartWbGdpGrowth" data={worldBankGdpGrowth}>
              <ChartContainer config={{ wb: { label: t.labelWb, color: "#2563eb" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[320px] w-full">
                <LineChart data={worldBankGdpGrowth} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[-6, 5]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="wb" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: "#2563eb", r: 4 }} name={t.labelWb} />
                  <Line type="monotone" dataKey="ons" stroke="#059669" strokeWidth={2.5} dot={{ fill: "#059669", r: 4 }} strokeDasharray="6 3" name={t.labelOns} />
                </LineChart>
              </ChartContainer>
            </ExportableChartCard>

            {/* Charts row: Inflation + Unemployment comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbInflationComp} subtitle={t.chartWbInflationCompSub} exportId="chartWbInflation" data={worldBankInflation}>
                <ChartContainer config={{ wb: { label: t.labelWb, color: "#dc2626" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankInflation} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="wb" stroke="#dc2626" strokeWidth={2} dot={{ fill: "#dc2626", r: 3 }} name={t.labelWb} />
                    <Line type="monotone" dataKey="ons" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669", r: 3 }} strokeDasharray="6 3" name={t.labelOns} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbUnemploymentComp} subtitle={t.chartWbUnemploymentCompSub} exportId="chartWbUnemp" data={worldBankUnemployment}>
                <ChartContainer config={{ wb: { label: t.labelWb, color: "#d97706" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankUnemployment} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[9, 14]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="wb" stroke="#d97706" strokeWidth={2} dot={{ fill: "#d97706", r: 3 }} name={t.labelWb} />
                    <Line type="monotone" dataKey="ons" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669", r: 3 }} strokeDasharray="6 3" name={t.labelOns} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: GDP per Capita + Population comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbGdpPerCapitaComp} subtitle={t.chartWbGdpPerCapitaCompSub} exportId="chartWbGdpCap" data={worldBankGdpPerCapita}>
                <ChartContainer config={{ wb: { label: t.labelWb, color: "#2563eb" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankGdpPerCapita} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="wb" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb", r: 3 }} name={t.labelWb} />
                    <Line type="monotone" dataKey="ons" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669", r: 3 }} strokeDasharray="6 3" name={t.labelOns} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbPopulationComp} subtitle={t.chartWbPopulationCompSub} exportId="chartWbPop" data={worldBankPopulation}>
                <ChartContainer config={{ wb: { label: t.labelWb, color: "#7c3aed" }, ons: { label: t.labelOns, color: "#059669" } }} className="h-[300px] w-full">
                  <AreaChart data={worldBankPopulation} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[38, 48]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="wb" stroke="#7c3aed" fill="#ede9fe" fillOpacity={0.5} strokeWidth={2} name={t.labelWb} />
                    <Line type="monotone" dataKey="ons" stroke="#059669" strokeWidth={2} dot={{ fill: "#059669", r: 3 }} strokeDasharray="6 3" name={t.labelOns} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: GNI Trend + Trade/GDP */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbGniTrend} subtitle={t.chartWbGniTrendSub} exportId="chartWbGni" data={worldBankGniPerCapita}>
                <ChartContainer config={{ gni: { label: t.labelBnUsd, color: "#0891b2" } }} className="h-[300px] w-full">
                  <AreaChart data={worldBankGniPerCapita} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gni" stroke={COLORS.cyan} fill={COLORS.cyanLight} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbTradeGdp} subtitle={t.chartWbTradeGdpSub} exportId="chartWbTrade" data={worldBankTradeGdp}>
                <ChartContainer config={{ exports: { label: t.labelExports, color: "#059669" }, imports: { label: t.labelImports, color: "#dc2626" }, trade: { label: t.labelTrade, color: "#2563eb" } }} className="h-[300px] w-full">
                  <ComposedChart data={worldBankTradeGdp} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="exports" fill={COLORS.emerald} radius={[4, 4, 0, 0]} opacity={0.7} />
                    <Bar dataKey="imports" fill={COLORS.red} radius={[4, 4, 0, 0]} opacity={0.7} />
                    <Line type="monotone" dataKey="trade" stroke={COLORS.blue} strokeWidth={2.5} dot={{ fill: COLORS.blue, r: 4 }} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: FDI + External Debt */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbFdiTrend} subtitle={t.chartWbFdiTrendSub} exportId="chartWbFdi" data={worldBankFdi}>
                <ChartContainer config={{ fdi: { label: t.labelPctGdp, color: "#7c3aed" } }} className="h-[300px] w-full">
                  <BarChart data={worldBankFdi} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="fdi" fill={COLORS.purple} radius={[6, 6, 0, 0]} opacity={0.8} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbExtDebtTrend} subtitle={t.chartWbExtDebtTrendSub} exportId="chartWbDebt" data={worldBankExternalDebt}>
                <ChartContainer config={{ debt: { label: t.labelPctGni, color: "#e11d48" } }} className="h-[300px] w-full">
                  <AreaChart data={worldBankExternalDebt} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="debt" stroke={COLORS.rose} fill={COLORS.roseLight} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Life Expectancy + Poverty */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbLifeExpTrend} subtitle={t.chartWbLifeExpTrendSub} exportId="chartWbLife" data={worldBankLifeExpectancy}>
                <ChartContainer config={{ lifeExp: { label: t.labelYears, color: "#0d9488" }, male: { label: t.labelMale, color: "#2563eb" }, female: { label: t.labelFemale, color: "#e11d48" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankLifeExpectancy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[73, 81]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="male" stroke={COLORS.blue} strokeWidth={1.5} dot={{ fill: COLORS.blue, r: 3 }} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="female" stroke={COLORS.rose} strokeWidth={1.5} dot={{ fill: COLORS.rose, r: 3 }} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="lifeExp" stroke={COLORS.teal} strokeWidth={2.5} dot={{ fill: COLORS.teal, r: 4 }} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbPovertyTrend} subtitle={t.chartWbPovertyTrendSub} exportId="chartWbPoverty" data={worldBankPoverty}>
                <ChartContainer config={{ poverty215: { label: t.labelPoverty215, color: "#dc2626" }, poverty365: { label: t.labelPoverty365, color: "#d97706" }, povertyNational: { label: t.labelPovertyNational, color: "#7c3aed" } }} className="h-[300px] w-full">
                  <LineChart data={worldBankPoverty} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="poverty215" stroke={COLORS.red} strokeWidth={2} dot={{ fill: COLORS.red, r: 3 }} />
                    <Line type="monotone" dataKey="poverty365" stroke={COLORS.amber} strokeWidth={2} dot={{ fill: COLORS.amber, r: 3 }} />
                    <Line type="monotone" dataKey="povertyNational" stroke={COLORS.purple} strokeWidth={2} dot={{ fill: COLORS.purple, r: 3 }} strokeDasharray="6 3" />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: CO2 + Energy Access */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbCo2Trend} subtitle={t.chartWbCo2TrendSub} exportId="chartWbCo2" data={worldBankCo2Emissions}>
                <ChartContainer config={{ co2: { label: t.labelTonsCapita, color: "#475569" } }} className="h-[300px] w-full">
                  <BarChart data={worldBankCo2Emissions} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} domain={[2.5, 4.0]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="co2" fill={COLORS.slate} radius={[6, 6, 0, 0]} opacity={0.8} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbEnergyAccess} subtitle={t.chartWbEnergyAccessSub} exportId="chartWbEnergy" data={worldBankEnergyAccess}>
                <ChartContainer config={{ electricity: { label: t.labelElectricity, color: "#ea580c" }, renewable: { label: t.labelRenewable, color: "#059669" } }} className="h-[300px] w-full">
                  <ComposedChart data={worldBankEnergyAccess} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} domain={[98, 101]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line yAxisId="left" type="monotone" dataKey="electricity" stroke={COLORS.orange} strokeWidth={2.5} dot={{ fill: COLORS.orange, r: 4 }} />
                    <Bar yAxisId="right" dataKey="renewable" fill={COLORS.emerald} radius={[4, 4, 0, 0]} opacity={0.7} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Internet + Edu/Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbInternetTrend} subtitle={t.chartWbInternetTrendSub} exportId="chartWbInternet" data={worldBankInternetUsers}>
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
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbEduHealthSpend} subtitle={t.chartWbEduHealthSpendSub} exportId="chartWbEduHealth" data={worldBankEducationSpend}>
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
              </ExportableChartCard>
            </div>

            {/* Charts row: GCF Comparison + Deviation Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartWbGcfComp} subtitle={t.chartWbGcfCompSub} exportId="chartWbGcf" data={worldBankGrossCapital}>
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
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWbDeviation} subtitle={t.chartWbDeviationSub} exportId="chartWbDeviation">
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
              </ExportableChartCard>
            </div>

            <p className="text-xs text-muted-foreground">{t.labelWbSource}</p>
          </TabsContent>
'''

old_close = '''          </TabsContent>
        </Tabs>

        {/* Source footer */}'''
new_close = wb_tab + '''        </Tabs>

        {/* Source footer */}'''

content = content.replace(old_close, new_close)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: World Bank tab inserted into page.tsx")
