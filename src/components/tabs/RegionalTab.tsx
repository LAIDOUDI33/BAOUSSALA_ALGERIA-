"use client";

import { hydrocarbons, regionAggregates, regionalDevelopmentScatter, regionalEmployment, regionalHDI, regionalInequality, regionalInfrastructure, regionalSectorComposition, regionalTimeSeries, regionalUrbanization, topWilayasByGDP, topWilayasByUnemp, wilayaDetailed, wilayaPopulationRanking } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, Radar, Scatter, ScatterChart, XAxis, YAxis, ZAxis } from "recharts";
import { Activity, ArrowRightLeft, Baby, BookOpen, Briefcase, Building2, Car, Droplets, Globe, GraduationCap, Heart, MapPin, Route, Scale, TrendingUp, UserCheck, Users, Wifi, Zap } from "lucide-react";

export function RegionalTab() {
  const { t, isRtl } = useI18n();
  return (
            {/* ── KPI CARDS ROW 1: Core Demographics ──────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegTotalPop} value="46.8" unit="M" icon={Users} color={COLORS.blue} />
              <KpiCard title={t.kpiRegTotalWilayas} value="58" unit="" icon={MapPin} color={COLORS.emerald} />
              <KpiCard title={t.kpiRegNationalGdp} value="205" unit="bn $" icon={Globe} color={COLORS.amber} />
              <KpiCard title={t.kpiRegAvgUnemp} value="11.9" unit="%" change={-1.5} changeDir="down" icon={Activity} color={COLORS.red} />
            </div>
            {/* ── KPI CARDS ROW 2: Social Indicators ──────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegYouthUnemp} value="26.2" unit="%" icon={Users} color={COLORS.rose} />
              <KpiCard title={t.kpiRegUrbanization} value="73.5" unit="%" icon={Building2} color={COLORS.purple} />
              <KpiCard title={t.kpiRegPoverty} value="9.5" unit="%" change={-0.8} changeDir="down" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiRegElectrification} value="97.6" unit="%" icon={Zap} color={COLORS.teal} />
            </div>
            {/* ── KPI CARDS ROW 3: Development ────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegInformal} value="41.2" unit="%" icon={Briefcase} color={COLORS.slate} />
              <KpiCard title={t.kpiRegSecondary} value="79.8" unit="%" icon={GraduationCap} color={COLORS.blue} />
              <KpiCard title={t.kpiRegNetMigration} value="-0.4" unit="‰" icon={ArrowRightLeft} color={COLORS.orange} />
              <KpiCard title={t.kpiRegHospitalBeds} value="17.4" unit="" icon={Heart} color={COLORS.red} />
            </div>
            {/* ── KPI CARDS ROW 4: Enhanced KPIs ──────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegDensity} value="19.7" unit="hab/km²" icon={Users} color={COLORS.cyan} />
              <KpiCard title={t.kpiRegEmployment} value="48.8" unit="%" icon={UserCheck} color={COLORS.emerald} />
              <KpiCard title={t.kpiRegFemalePartic} value="13.5" unit="%" icon={Users} color={COLORS.purple} />
              <KpiCard title={t.kpiRegInternet} value="60.8" unit="%" icon={Wifi} color={COLORS.blue} />
            </div>
            {/* ── KPI CARDS ROW 5: More Enhanced KPIs ─────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegLiteracy} value="89.8" unit="%" icon={BookOpen} color={COLORS.teal} />
              <KpiCard title={t.kpiRegInfantMort} value="17.8" unit="‰" icon={Baby} color={COLORS.red} />
              <KpiCard title={t.kpiRegWaterAccess} value="88.0" unit="%" icon={Droplets} color={COLORS.cyan} />
              <KpiCard title={t.kpiRegHDI} value="0.749" unit="" icon={TrendingUp} color={COLORS.emerald} />
            </div>
            {/* ── KPI CARDS ROW 6: Infrastructure ──────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiRegRoadDensity} value="0.44" unit="km/km²" icon={Route} color={COLORS.slate} />
              <KpiCard title={t.kpiRegMobilePenetration} value="109" unit="%" icon={Wifi} color={COLORS.blue} />
              <KpiCard title={t.kpiRegBroadband} value="4550" unit="K" icon={Wifi} color={COLORS.purple} />
              <KpiCard title={t.kpiRegVehicles} value="220" unit="/10K" icon={Car} color={COLORS.amber} />
            </div>

            {/* ── ROW 1: GDP Share + Unemployment Trend ──────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionGdpShare} subtitle={t.chartRegionGdpShareSub} exportId="chartRegionGdpShare">
                <ChartContainer config={{
                  Centre: { label: t.labelCentre, color: COLORS.blue },
                  Est: { label: t.labelEst, color: COLORS.emerald },
                  Ouest: { label: t.labelOuest, color: COLORS.amber },
                  Sud: { label: t.labelSud, color: COLORS.red },
                  ["Hauts Plateaux"]: { label: t.labelHautsPlateaux, color: COLORS.purple },
                }} className="h-[340px] w-full">
                  <BarChart data={regionAggregates} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 45]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="gdpShare" radius={[4, 4, 0, 0]}>
                      {regionAggregates.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionUnempTrend} subtitle={t.chartRegionUnempTrendSub} exportId="chartRegionUnempTrend" data={regionalTimeSeries}>
                <ChartContainer config={{
                  centreUnemp: { label: t.labelCentre, color: COLORS.blue },
                  estUnemp: { label: t.labelEst, color: COLORS.emerald },
                  ouestUnemp: { label: t.labelOuest, color: COLORS.amber },
                  sudUnemp: { label: t.labelSud, color: COLORS.red },
                  hpUnemp: { label: t.labelHautsPlateaux, color: COLORS.purple },
                }} className="h-[340px] w-full">
                  <LineChart data={regionalTimeSeries} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 20]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="centreUnemp" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="estUnemp" stroke={COLORS.emerald} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="ouestUnemp" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="sudUnemp" stroke={COLORS.red} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="hpUnemp" stroke={COLORS.purple} strokeWidth={2} dot={{ r: 2 }} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 2: GDP Trend + Sectoral Composition ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionGdpTrend} subtitle={t.chartRegionGdpTrendSub} exportId="chartRegionGdpTrend" data={regionalTimeSeries}>
                <ChartContainer config={{
                  centreGdpPct: { label: t.labelCentre, color: COLORS.blue },
                  estGdpPct: { label: t.labelEst, color: COLORS.emerald },
                  ouestGdpPct: { label: t.labelOuest, color: COLORS.amber },
                  sudGdpPct: { label: t.labelSud, color: COLORS.red },
                  hpGdpPct: { label: t.labelHautsPlateaux, color: COLORS.purple },
                }} className="h-[340px] w-full">
                  <AreaChart data={regionalTimeSeries} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 45]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="hpGdpPct" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={1.5} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="sudGdpPct" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={1.5} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="ouestGdpPct" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={1.5} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="estGdpPct" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={1.5} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="centreGdpPct" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={1.5} fillOpacity={0.7} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionSectorComp} subtitle={t.chartRegionSectorCompSub} exportId="chartRegionSectorComp">
                <ChartContainer config={{
                  agriculture: { label: t.labelAgriculture, color: COLORS.emerald },
                  industry: { label: t.labelIndustry, color: COLORS.blue },
                  construction: { label: t.labelConstruction, color: COLORS.amber },
                  services: { label: t.labelServices, color: COLORS.purple },
                  hydrocarbons: { label: t.labelHydrocarbons, color: COLORS.red },
                }} className="h-[340px] w-full">
                  <BarChart data={regionalSectorComposition} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="agriculture" stackId="a" fill={COLORS.emerald} />
                    <Bar dataKey="industry" stackId="a" fill={COLORS.blue} />
                    <Bar dataKey="construction" stackId="a" fill={COLORS.amber} />
                    <Bar dataKey="services" stackId="a" fill={COLORS.purple} />
                    <Bar dataKey="hydrocarbons" stackId="a" fill={COLORS.red} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 3: Poverty + Youth Unemployment + Urbanization ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ExportableChartCard title={t.chartRegionPoverty} subtitle={t.chartRegionPovertySub} exportId="chartRegionPoverty">
                <ChartContainer config={{ povertyRate: { label: t.kpiRegPoverty, color: COLORS.amber } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 16]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="povertyRate" radius={[0, 4, 4, 0]}>
                      {regionAggregates.map((d) => (
                        <Cell key={d.region} fill={d.povertyRate >= 10 ? COLORS.red : d.povertyRate >= 8 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionYouthUnemp} subtitle={t.chartRegionYouthUnempSub} exportId="chartRegionYouthUnemp">
                <ChartContainer config={{ youthUnemp: { label: t.kpiRegYouthUnemp, color: COLORS.rose } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 35]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="youthUnemp" radius={[0, 4, 4, 0]} fill={COLORS.rose} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionUrbanization} subtitle={t.chartRegionUrbanizationSub} exportId="chartRegionUrbanization">
                <ChartContainer config={{ urbanization: { label: t.kpiRegUrbanization, color: COLORS.purple } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="urbanization" radius={[0, 4, 4, 0]} fill={COLORS.purple} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 4: HDI Trend + Employment Structure ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionHDI} subtitle={t.chartRegionHDISub} exportId="chartRegionHDI" data={regionalHDI}>
                <ChartContainer config={{
                  centreHDI: { label: t.chartCentreHDI, color: COLORS.blue },
                  estHDI: { label: t.chartEstHDI, color: COLORS.emerald },
                  ouestHDI: { label: t.chartOuestHDI, color: COLORS.amber },
                  sudHDI: { label: t.chartSudHDI, color: COLORS.red },
                  hpHDI: { label: t.chartHPHDI, color: COLORS.purple },
                }} className="h-[340px] w-full">
                  <LineChart data={regionalHDI} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0.64, 0.84]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="centreHDI" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="ouestHDI" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="estHDI" stroke={COLORS.emerald} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="sudHDI" stroke={COLORS.red} strokeWidth={2} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="hpHDI" stroke={COLORS.purple} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="5 3" />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionEmployStruct} subtitle={t.chartRegionEmployStructSub} exportId="chartRegionEmployStruct">
                <ChartContainer config={{
                  agriculturePct: { label: t.chartRegionAgriEmp, color: COLORS.emerald },
                  industryPct: { label: t.chartRegionIndEmp, color: COLORS.blue },
                  constructionPct: { label: t.chartRegionConstrEmp, color: COLORS.amber },
                  servicesPct: { label: t.chartRegionServEmp, color: COLORS.purple },
                  publicSectorPct: { label: t.chartRegionPublicEmp, color: COLORS.red },
                }} className="h-[340px] w-full">
                  <BarChart data={regionalEmployment} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="agriculturePct" stackId="a" fill={COLORS.emerald} />
                    <Bar dataKey="industryPct" stackId="a" fill={COLORS.blue} />
                    <Bar dataKey="constructionPct" stackId="a" fill={COLORS.amber} />
                    <Bar dataKey="servicesPct" stackId="a" fill={COLORS.purple} />
                    <Bar dataKey="publicSectorPct" stackId="a" fill={COLORS.red} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 5: Per Capita GDP + Electrification + Migration ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ExportableChartCard title={t.chartRegionPerCapita} subtitle={t.chartRegionPerCapitaSub} exportId="chartRegionPerCapita">
                <ChartContainer config={{ gdpPerCapitaK: { label: t.chartRegionPerCapita, color: COLORS.emerald } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="gdpPerCapitaK" radius={[0, 4, 4, 0]} fill={COLORS.emerald} opacity={0.85}>
                      {regionAggregates.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionElectrification} subtitle={t.chartRegionElectrificationSub} exportId="chartRegionElectrification">
                <ChartContainer config={{ electrification: { label: t.kpiRegElectrification, color: COLORS.teal } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[80, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="electrification" radius={[0, 4, 4, 0]} fill={COLORS.teal} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionMigration} subtitle={t.chartRegionMigrationSub} exportId="chartRegionMigration">
                <ChartContainer config={{ netMigration: { label: t.kpiRegNetMigration, color: COLORS.orange } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="netMigration" radius={[0, 4, 4, 0]}>
                      {regionAggregates.map((d) => (
                        <Cell key={d.region} fill={d.netMigration >= 0 ? COLORS.emerald : COLORS.red} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 6: Top Wilayas GDP + Population Scatter ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartWilayaGdp} subtitle={t.chartWilayaGdpSub} exportId="chartWilayaGdp" data={regionAggregates}>
                <ChartContainer config={{ gdpShare: { label: t.chartGdpShare, color: COLORS.emerald } }} className="h-[380px] w-full">
                  <BarChart data={topWilayasByGDP} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 120 : 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 10 }} tickLine={false} width={isRtl ? 120 : 100} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="gdpShare" fill={COLORS.emerald} radius={[0, 4, 4, 0]} name={t.chartGdpShare}>
                      {topWilayasByGDP.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.purple, COLORS.cyan, COLORS.rose, COLORS.teal, COLORS.orange, COLORS.slate, COLORS.red, COLORS.blueLight, COLORS.emeraldLight, COLORS.amberLight, COLORS.purpleLight, COLORS.cyanLight][i % 15]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartScatter} subtitle={t.chartScatterSub} exportId="chartScatter">
                <ChartContainer config={{
                  x: { label: t.chartPopK, color: COLORS.blue },
                  y: { label: t.chartGdpShareLabel, color: COLORS.emerald },
                }} className="h-[380px] w-full">
                  <ScatterChart margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="populationK" name={t.chartPopK} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartPopThousands, position: "bottom", fontSize: 11 }} />
                    <YAxis dataKey="gdpShare" name={t.chartGdpShareLabel} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartGdpShareLabel, angle: isRtl ? 90 : -90, position: "insideLeft", fontSize: 11 }} />
                    <ZAxis dataKey="unemployment" range={[80, 400]} name={t.chartUnempPctLabel} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Scatter data={wilayaDetailed} fill={COLORS.emerald}>
                      {wilayaDetailed.map((d, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.purple, COLORS.cyan, COLORS.rose, COLORS.teal, COLORS.orange, COLORS.slate, COLORS.red, COLORS.blueLight, COLORS.emeraldLight, COLORS.amberLight, COLORS.purpleLight, COLORS.cyanLight, COLORS.roseLight, COLORS.tealLight, COLORS.orangeLight, COLORS.slateLight, COLORS.redLight][i % 20]} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 7: Inequality (Gini) + Inequality Radar ────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionInequality} subtitle={t.chartRegionInequalitySub} exportId="chartRegionInequality">
                <ChartContainer config={{
                  giniIncome: { label: t.chartGiniIncome, color: COLORS.red },
                  giniEducation: { label: t.chartGiniEducation, color: COLORS.blue },
                  giniHealth: { label: t.chartGiniHealth, color: COLORS.emerald },
                  giniHousing: { label: t.chartGiniHousing, color: COLORS.amber },
                }} className="h-[340px] w-full">
                  <BarChart data={regionalInequality} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 0.6]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="giniIncome" fill={COLORS.red} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="giniEducation" fill={COLORS.blue} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="giniHealth" fill={COLORS.emerald} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="giniHousing" fill={COLORS.amber} radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionPopulation} subtitle={t.chartRegionPopulationSub} exportId="chartRegionPopulation">
                <ChartContainer config={{
                  populationK: { label: t.chartPopThousands, color: COLORS.blue },
                }} className="h-[340px] w-full">
                  <BarChart data={regionAggregates} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="populationK" radius={[4, 4, 0, 0]}>
                      {regionAggregates.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 8: Urbanization Trend + Wilaya Population Ranking ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionUrbanTrend} subtitle={t.chartRegionUrbanTrendSub} exportId="chartRegionUrbanTrend" data={regionalUrbanization}>
                <ChartContainer config={{
                  centre: { label: t.labelCentre, color: COLORS.blue },
                  est: { label: t.labelEst, color: COLORS.emerald },
                  ouest: { label: t.labelOuest, color: COLORS.amber },
                  sud: { label: t.labelSud, color: COLORS.red },
                  hp: { label: t.labelHautsPlateaux, color: COLORS.purple },
                }} className="h-[340px] w-full">
                  <AreaChart data={regionalUrbanization} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[40, 75]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="centre" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.3} />
                    <Area type="monotone" dataKey="ouest" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.3} />
                    <Area type="monotone" dataKey="est" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.3} />
                    <Area type="monotone" dataKey="sud" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.3} />
                    <Area type="monotone" dataKey="hp" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.3} strokeDasharray="5 3" />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartWilayaPopRank} subtitle={t.chartWilayaPopRankSub} exportId="chartWilayaPopRank" data={wilayaPopulationRanking}>
                <ChartContainer config={{ popK: { label: t.chartPopThousands, color: COLORS.blue } }} className="h-[340px] w-full">
                  <BarChart data={wilayaPopulationRanking} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 120 : 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 10 }} tickLine={false} width={isRtl ? 120 : 100} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="popK" radius={[0, 4, 4, 0]}>
                      {wilayaPopulationRanking.map((d, i) => (
                        <Cell key={i} fill={d.region === "Centre" ? COLORS.blue : d.region === "Hauts Plateaux" ? COLORS.purple : d.region === "Est" ? COLORS.emerald : d.region === "Ouest" ? COLORS.amber : COLORS.red} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 9: Wilaya Unemployment Ranking + Health/Education/Informal ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartWilayaUnempRank} subtitle={t.chartWilayaUnempRankSub} exportId="chartWilayaUnempRank" data={topWilayasByUnemp}>
                <ChartContainer config={{ rate: { label: t.chartUnempPct, color: COLORS.red } }} className="h-[380px] w-full">
                  <BarChart data={topWilayasByUnemp} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 120 : 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 38]} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 10 }} tickLine={false} width={isRtl ? 120 : 100} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                      {topWilayasByUnemp.map((d) => (
                        <Cell key={d.wilaya} fill={d.rate >= 16 ? COLORS.red : d.rate >= 13 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionDevScatter} subtitle={t.chartRegionDevScatterSub} exportId="chartRegionDevScatter" data={regionalDevelopmentScatter}>
                <ChartContainer config={{
                  x: { label: t.chartRegionPerCapita, color: COLORS.blue },
                  y: { label: t.chartSecondaryEnrol, color: COLORS.emerald },
                }} className="h-[380px] w-full">
                  <ScatterChart margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="gdpPerCapitaK" name={t.chartRegionPerCapita} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartRegionPerCapita, position: "bottom", fontSize: 10 }} />
                    <YAxis dataKey="secondaryEnrol" name={t.chartSecondaryEnrol} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartSecondaryEnrol, angle: isRtl ? 90 : -90, position: "insideLeft", fontSize: 10 }} />
                    <ZAxis dataKey="povertyRate" range={[100, 500]} name={t.chartPovertyRate} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Scatter data={regionalDevelopmentScatter} fill={COLORS.blue}>
                      {regionalDevelopmentScatter.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 10: Health + Education + Informal ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ExportableChartCard title={t.chartRegionHealth} subtitle={t.chartRegionHealthSub} exportId="chartRegionHealth">
                <ChartContainer config={{ hospitalBeds10k: { label: t.kpiRegHospitalBeds, color: COLORS.red } }} className="h-[280px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="hospitalBeds10k" radius={[0, 4, 4, 0]} fill={COLORS.red} opacity={0.85}>
                      {regionAggregates.map((_, i) => (
                        <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionEducation} subtitle={t.chartRegionEducationSub} exportId="chartRegionEducation">
                <ChartContainer config={{ secondaryEnrol: { label: t.kpiRegSecondary, color: COLORS.blue } }} className="h-[280px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[60, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="secondaryEnrol" radius={[0, 4, 4, 0]} fill={COLORS.blue} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionInformal} subtitle={t.chartRegionInformalSub} exportId="chartRegionInformal">
                <ChartContainer config={{ informalEmploy: { label: t.kpiRegInformal, color: COLORS.slate } }} className="h-[280px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 55]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="informalEmploy" radius={[0, 4, 4, 0]} fill={COLORS.slate} opacity={0.85}>
                      {regionAggregates.map((d) => (
                        <Cell key={d.region} fill={d.informalEmploy >= 40 ? COLORS.red : d.informalEmploy >= 35 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            {/* ── ROW 11: Infrastructure Dashboard ────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartRegionInfra} subtitle={t.chartRegionInfraSub} exportId="chartRegionInfra" data={regionalInfrastructure}>
                <ChartContainer config={{
                  roadDensity: { label: t.chartRoadDensity, color: COLORS.slate },
                  waterSupplyPct: { label: t.chartWaterSupply, color: COLORS.cyan },
                  sewagePct: { label: t.chartSewage, color: COLORS.blue },
                  internetUsersPct: { label: t.chartInternetUsers, color: COLORS.purple },
                  mobilePenetration: { label: t.chartMobilePen, color: COLORS.emerald },
                }} className="h-[380px] w-full">
                  <BarChart data={regionalInfrastructure} margin={{ top: 5, right: 10, left: isRtl ? 10 : -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="roadDensity" fill={COLORS.slate} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="waterSupplyPct" fill={COLORS.cyan} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="sewagePct" fill={COLORS.blue} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="internetUsersPct" fill={COLORS.purple} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="mobilePenetration" fill={COLORS.emerald} radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartRegionDensityBar} subtitle={t.chartRegionDensityBarSub} exportId="chartRegionDensityBar">
                <ChartContainer config={{ density: { label: t.kpiRegDensity, color: COLORS.cyan } }} className="h-[380px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="density" radius={[0, 4, 4, 0]}>
                      {regionAggregates.map((d, i) => (
                        <Cell key={d.region} fill={[COLORS.blue, COLORS.emerald, COLORS.amber, COLORS.red, COLORS.purple][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default RegionalTab;
