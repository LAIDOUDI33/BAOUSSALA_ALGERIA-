"use client";

import { sdgDeepDive, sdgDesalination, sdgEducation, sdgEnergyMix, sdgFoodSecurity, sdgHousingPrograms, sdgInequality, sdgInnovation, sdgOceans, sdgOverview, sdgTelecoms, sdgWaterReuse, vnr2026Targets } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Badge } from "@/components/ui/badge";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ChartContainer, ChartTooltip, ChartTooltipContent, ComposedChart, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, XAxis, YAxis } from "recharts";
import { ArrowDownRight, CheckCircle2, CircleDot } from "lucide-react";

export function SdgTab() {
  const { t } = useI18n();
  return (
            {/* KPI row: counts by status */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiSdgOnTrack} value={String(sdgOverview.filter(s => s.status === "on_track").length)} unit="/ 17" icon={CheckCircle2} color={COLORS.emerald} />
              <KpiCard title={t.kpiSdgModerate} value={String(sdgOverview.filter(s => s.status === "moderate").length)} unit="/ 17" icon={CircleDot} color={COLORS.amber} />
              <KpiCard title={t.kpiSdgInsufficient} value={String(sdgOverview.filter(s => s.status === "insufficient").length)} unit="/ 17" icon={ArrowDownRight} color={COLORS.red} />
              <KpiCard title={t.kpiSdgAchieved} value={String(sdgOverview.filter(s => s.achieved).length)} unit="/ 17" icon={CheckCircle2} color={COLORS.blue} />
            </div>

            {/* Chart 1: SDG Progress Overview — horizontal bars */}
            <ExportableChartCard title={t.chartSdgProgress} subtitle={t.chartSdgProgressSub} exportId="chartSdgProgress" data={sdgOverview}>
              <ChartContainer config={{ progress: { label: t.labelProgress, color: "#059669" } }} className="h-[520px] w-full">
                <BarChart data={sdgOverview.map(s => ({ name: `${s.sdg}`, fullName: s.name, progress: s.progress, fill: s.achieved ? COLORS.emerald : s.status === "on_track" ? "#3b82f6" : s.status === "moderate" ? COLORS.amber : COLORS.red }))} layout="vertical" margin={{ top: 5, right: 40, bottom: 5, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <YAxis dataKey="name" type="category" width={30} tick={{ fontSize: 12 }} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} formatter={(value: number, name: string, props: { payload: { fullName: string } }) => [`${value} %`, props.payload.fullName || `ODD ${props.payload.name}`]} />
                  <Bar dataKey="progress" radius={[0, 6, 6, 0]}>
                    {sdgOverview.map((_, i) => (
                      <Cell key={i} fill={sdgOverview[i].achieved ? COLORS.emerald : sdgOverview[i].status === "on_track" ? "#3b82f6" : sdgOverview[i].status === "moderate" ? COLORS.amber : COLORS.red} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </ExportableChartCard>

            {/* Chart 2: SDG Radar — deep dive goals */}
            <ExportableChartCard title={t.chartSdgRadar} subtitle={t.chartSdgRadarSub} exportId="chartSdgRadar">
              <ChartContainer config={{ value: { label: t.labelProgress, color: "#7c3aed" } }} className="h-[400px] w-full">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={sdgDeepDive.map(d => ({ name: `${d.sdg}`, progress: Math.round(d.kpis.filter(k => k.status === "achieved").length / d.kpis.length * 100) }))}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9 }} tickCount={5} />
                  <Radar name={t.labelProgress} dataKey="progress" stroke="#7c3aed" fill="#ede9fe" fillOpacity={0.5} strokeWidth={2} dot={{ r: 4, fill: "#7c3aed" }} />
                  <ChartTooltip content={<ChartTooltipContent />} formatter={(value: number) => [`${value} %`, t.labelProgress]} />
                </RadarChart>
              </ChartContainer>
            </ExportableChartCard>

            {/* Charts row: Energy Mix + Housing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartSdgEnergyMix} subtitle={t.chartSdgEnergyMixSub} exportId="chartSdgEnergyMix" data={sdgEnergyMix}>
                <ChartContainer config={{ share: { label: "%", color: "#f59e0b" } }} className="h-[320px] w-full">
                  <PieChart>
                    <Pie data={sdgEnergyMix.map(e => ({ name: e.source === "gaz" ? t.labelGazNatural : e.source === "solaire" ? t.labelSolarPV : e.source === "hydraulique" ? t.labelHydro : e.source === "eolien" ? t.labelWind : e.source === "autresEnr" ? t.labelOtherEnr : t.labelFuelOil, value: e.share }))} cx="50%" cy="50%" outerRadius={80} innerRadius={50} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={true}>
                      {sdgEnergyMix.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSdgHousing} subtitle={t.chartSdgHousingSub} exportId="chartSdgHousing" data={sdgHousingPrograms}>
                <ChartContainer config={{ built: { label: t.labelUnits, color: "#ea580c" } }} className="h-[320px] w-full">
                  <BarChart data={sdgHousingPrograms.map(h => ({ name: h.period, units: Math.round(h.built / 1000) }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="units" fill={COLORS.orange} radius={[6, 6, 0, 0]} name={t.labelUnits} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Desalination + Water Reuse */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartSdgDesalination} subtitle={t.chartSdgDesalinationSub} exportId="chartSdgDesalination" data={sdgDesalination}>
                <ChartContainer config={{ capacity: { label: t.labelCapacity, color: "#0891b2" }, stations: { label: t.labelStations, color: "#2563eb" } }} className="h-[300px] w-full">
                  <ComposedChart data={sdgDesalination}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="stations" fill={COLORS.blue} radius={[4, 4, 0, 0]} opacity={0.7} />
                    <Line yAxisId="right" type="monotone" dataKey="capacity" stroke={COLORS.cyan} strokeWidth={2} dot={{ fill: COLORS.cyan, r: 4 }} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSdgWaterReuse} subtitle={t.chartSdgWaterReuseSub} exportId="chartSdgWaterReuse" data={sdgWaterReuse}>
                <ChartContainer config={{ volume: { label: t.labelVolume, color: "#0d9488" } }} className="h-[300px] w-full">
                  <AreaChart data={sdgWaterReuse}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="volume" stroke={COLORS.teal} fill={COLORS.tealLight} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Digital Transformation + Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartSdgTelecoms} subtitle={t.chartSdgTelecomsSub} exportId="chartSdgTelecoms" data={sdgTelecoms}>
                <ChartContainer config={{ inetMobilePct: { label: t.labelInetPop, color: "#7c3aed" }, coverage4G: { label: t.labelCoverage4G, color: "#dc2626" }, inetPop: { label: t.labelInetPop, color: "#2563eb" } }} className="h-[320px] w-full">
                  <ComposedChart data={sdgTelecoms.filter(d => d.coverage4G > 0)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="coverage4G" fill={COLORS.blue} radius={[4, 4, 0, 0]} opacity={0.5} />
                    <Line type="monotone" dataKey="inetMobilePct" stroke={COLORS.purple} strokeWidth={2} dot={{ fill: COLORS.purple, r: 4 }} />
                    <Line type="monotone" dataKey="inetPop" stroke={COLORS.blue} strokeWidth={2} dot={{ fill: COLORS.blue, r: 4 }} strokeDasharray="5 5" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSdgInnovation} subtitle={t.chartSdgInnovationSub} exportId="chartSdgInnovation" data={sdgInnovation}>
                <ChartContainer config={{ startups: { label: t.labelStartups, color: "#ea580c" }, incubators: { label: t.labelIncubators, color: "#0891b2" } }} className="h-[320px] w-full">
                  <ComposedChart data={sdgInnovation}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 250]} tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="startups" fill={COLORS.orange} radius={[4, 4, 0, 0]} opacity={0.6} />
                    <Line yAxisId="right" type="monotone" dataKey="incubators" stroke={COLORS.cyan} strokeWidth={2} dot={{ fill: COLORS.cyan, r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="universities" stroke={COLORS.purple} strokeWidth={2} dot={{ fill: COLORS.purple, r: 4 }} strokeDasharray="5 5" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Food Security + Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartSdgFood} subtitle={t.chartSdgFoodSub} exportId="chartSdgFood" data={sdgFoodSecurity}>
                <ChartContainer config={{ wheatKg: { label: t.labelWheat, color: "#d97706" }, milkCoverage: { label: t.labelMilkCov, color: "#2563eb" }, aquaculture: { label: t.labelAquaculture, color: "#0d9488" } }} className="h-[320px] w-full">
                  <ComposedChart data={sdgFoodSecurity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line yAxisId="left" type="monotone" dataKey="wheatKg" stroke={COLORS.amber} strokeWidth={2} dot={{ fill: COLORS.amber, r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="milkCoverage" stroke={COLORS.blue} strokeWidth={2} dot={{ fill: COLORS.blue, r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="undernourishment" stroke={COLORS.red} strokeWidth={2} dot={{ fill: COLORS.red, r: 4 }} strokeDasharray="5 5" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSdgEducation} subtitle={t.chartSdgEducationSub} exportId="chartSdgEducation" data={sdgEducation}>
                <ChartContainer config={{ primary: { label: t.labelPrimary, color: "#059669" }, secondary: { label: t.labelSecondary, color: "#2563eb" }, literacy: { label: t.labelLiteracy, color: "#d97706" }, preprimary: { label: t.labelPreprimary, color: "#7c3aed" } }} className="h-[320px] w-full">
                  <ComposedChart data={sdgEducation}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} domain={[30, 105]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="primary" stroke={COLORS.emerald} strokeWidth={2} dot={{ fill: COLORS.emerald, r: 4 }} />
                    <Line type="monotone" dataKey="secondary" stroke={COLORS.blue} strokeWidth={2} dot={{ fill: COLORS.blue, r: 4 }} />
                    <Line type="monotone" dataKey="literacy" stroke={COLORS.amber} strokeWidth={2} dot={{ fill: COLORS.amber, r: 4 }} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="preprimary" stroke={COLORS.purple} strokeWidth={2} dot={{ fill: COLORS.purple, r: 3 }} strokeDasharray="3 3" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Charts row: Inequality + Oceans */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ExportableChartCard title={t.chartSdgInequality} subtitle={t.chartSdgInequalitySub} exportId="chartSdgInequality" data={sdgInequality}>
                <ChartContainer config={{ socialCoverage: { label: t.labelSocialCov, color: "#059669" }, quintileShare: { label: "Part quintile sup.", color: "#dc2626" }, remittanceCost: { label: t.labelRemittanceCost, color: "#d97706" } }} className="h-[300px] w-full">
                  <ComposedChart data={sdgInequality}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" domain={[50, 75]} tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 10]} tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area yAxisId="left" type="monotone" dataKey="socialCoverage" stroke={COLORS.emerald} fill={COLORS.emeraldLight} strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="quintileShare" stroke={COLORS.red} strokeWidth={2} dot={{ fill: COLORS.red, r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="remittanceCost" stroke={COLORS.amber} strokeWidth={2} dot={{ fill: COLORS.amber, r: 4 }} strokeDasharray="5 5" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSdgOceans} subtitle={t.chartSdgOceansSub} exportId="chartSdgOceans" data={sdgOceans}>
                <ChartContainer config={{ marineProtected: { label: t.labelMarineProtected, color: "#0a97d9" }, aquaculture: { label: t.labelAquaculture, color: "#0d9488" }, coastalPlans: { label: t.labelCoastalPlans, color: "#2563eb" } }} className="h-[300px] w-full">
                  <ComposedChart data={sdgOceans}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" domain={[0, 20]} tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 8000]} tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="right" dataKey="aquaculture" fill={COLORS.teal} radius={[4, 4, 0, 0]} opacity={0.5} />
                    <Line yAxisId="left" type="monotone" dataKey="marineProtected" stroke={COLORS.cyan} strokeWidth={2} dot={{ fill: COLORS.cyan, r: 5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="coastalPlans" stroke={COLORS.blue} strokeWidth={2} dot={{ fill: COLORS.blue, r: 4 }} strokeDasharray="5 5" />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* Vision 2030 Roadmap */}
            <ExportableChartCard title={t.chartSdgTimeline} subtitle={t.chartSdgTimelineSub} exportId="chartSdgTimeline">
              <div className="space-y-3">
                {vnr2026Targets.map((tg, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${tg.priority === "high" ? "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50" : "bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50"}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${tg.priority === "high" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground">{tg.target}</div>
                      <div className="text-xs text-muted-foreground">{tg.desc}</div>
                    </div>
                    <Badge variant={tg.priority === "high" ? "default" : "secondary"} className={`text-xs ${tg.priority === "high" ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}>{tg.priority === "high" ? t.labelHigh : t.labelMedium}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">{t.labelSdgSource}</p>
            </ExportableChartCard>
          );
}

export default SdgTab;
