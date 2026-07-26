"use client";

import {
  gdpAnnual, gdpBySector, gdpQuarterly, cpiMonthly, tradeAnnual,
  tradeQuarterly, tradeByPartner, ipiQuarterly, laborMarket,
  demographics, populationByAge, fiscalData, cpiByDivision,
  education, ippiQuarterly, wilayaData, constructionIndex, latestKPIs,
  hydrocarbons, agricultureData, manufacturingData, btpData,
  servicesData, miningEnergy, healthData, regionAggregates, regionalTimeSeries, regionalSectorComposition,
  wilayaDetailed, regionalInequality, regionalHDI, regionalEmployment, regionalInfrastructure,
  topWilayasByUnemp, topWilayasByGDP, regionalDevelopmentScatter, regionalUrbanization, wilayaPopulationRanking,
  sdgOverview, sdgIndicators, sdgDeepDive, sdgEnergyMix, sdgHousingPrograms,
  sdgDesalination, sdgWaterReuse, sdgTelecoms, sdgInnovation, vnr2026Targets,
  sdgFoodSecurity, sdgEducation, sdgInequality, sdgOceans,
} from "@/lib/algeria-data";

import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { HeaderControls } from "@/components/global-search";

import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart,
  Line, LineChart, Pie, PieChart, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, XAxis, YAxis, Tooltip as RTooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis,
} from "recharts";
import { useState, useCallback } from "react";
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, BarChart3, Globe, Percent, Activity,
  Factory, GraduationCap, Building2, Truck, Heart, Package,
  Scale, ChevronRight, Droplets, Sprout, Hammer, Wrench, Zap,
  Stethoscope, Shield, Thermometer, Baby, Syringe, BedDouble,
  MapPin, ArrowRightLeft, Landmark, Wheat, Briefcase,
  Wifi, Car, Pipette, TreePine, BookOpen, UserCheck, Home, Route,
  Target, CheckCircle2, CircleDot, Flame, Sun, Battery, Sunrise, Factory as FactoryIcon,
} from "lucide-react";

// ─── Color palette ──────────────────────────────────────────────────────────
const COLORS = {
  emerald: "#059669", emeraldLight: "#d1fae5",
  blue: "#2563eb", blueLight: "#dbeafe",
  red: "#dc2626", redLight: "#fee2e2",
  amber: "#d97706", amberLight: "#fef3c7",
  purple: "#7c3aed", purpleLight: "#ede9fe",
  cyan: "#0891b2", cyanLight: "#cffafe",
  rose: "#e11d48", roseLight: "#ffe4e6",
  slate: "#475569", slateLight: "#f1f5f9",
  teal: "#0d9488", tealLight: "#ccfbf1",
  orange: "#ea580c", orangeLight: "#ffedd5",
};

// ─── Reusable Chart Configs (will be built dynamically with t) ──────────────

// ─── Helper ─────────────────────────────────────────────────────────────────
function KpiCard({ title, value, unit, change, changeDir, icon: Icon, color }: {
  title: string; value: string | number; unit?: string;
  change?: number; changeDir?: "up" | "down"; icon: React.ElementType; color: string;
}) {
  return (
    <Card className="border border-slate-200/80 dark:border-slate-700/60 shadow-sm min-h-[130px] bg-white dark:bg-slate-800/80">
      <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold leading-tight tracking-wide uppercase">{title}</span>
          <div className="p-2.5 rounded-xl flex-shrink-0" style={{ backgroundColor: color + "20" }}>
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-[34px] font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">{value}</span>
          {unit && <span className="text-sm sm:text-[15px] text-slate-500 dark:text-slate-400 font-semibold">{unit}</span>}
        </div>
        {change !== undefined && changeDir && (
          <div className={`inline-flex items-center gap-1 mt-2.5 text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full w-fit ${changeDir === "up" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400" : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400"}`}>
            {changeDir === "up" ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
            {change > 0 ? "+" : ""}{change}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ChartCard({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <Card className={`border border-slate-200/80 dark:border-slate-700/60 shadow-sm bg-white dark:bg-slate-800/80 ${className || ""}`}>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-100">{title}</CardTitle>
        {subtitle && <CardDescription className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="px-4 pb-4">{children}</CardContent>
    </Card>
  );
}

// MAIN PAGE
export default function AlgeriaDashboard() {
  const { t, isRtl, locale } = useI18n();
  const [activeTab, setActiveTab] = useState("macro");
  const handleTabSelect = useCallback((tab: string) => setActiveTab(tab), []);

  // Arabic font style
  const arabicFontStyle = locale === "ar"
    ? { fontFamily: "'Noto Sans Arabic', 'Noto Sans SC', sans-serif" }
    : {};

  const tabItems = [
    { val: "macro", label: t.tabMacro, icon: Activity },
    { val: "inflation", label: t.tabInflation, icon: Scale },
    { val: "trade", label: t.tabTrade, icon: Globe },
    { val: "industry", label: t.tabIndustry, icon: Factory },
    { val: "labor", label: t.tabLabor, icon: Users },
    { val: "social", label: t.tabSocial, icon: Heart },
    { val: "fiscal", label: t.tabFiscal, icon: DollarSign },
    { val: "regional", label: t.tabRegional, icon: Building2 },
    { val: "hydro", label: t.tabHydro, icon: Droplets },
    { val: "agriculture", label: t.tabAgriculture, icon: Sprout },
    { val: "manufacturing", label: t.tabManufacturing, icon: Factory },
    { val: "btp", label: t.tabBTP, icon: Hammer },
    { val: "services", label: t.tabServices, icon: Wrench },
    { val: "mining", label: t.tabMiningEnergy, icon: Zap },
    { val: "health", label: t.tabHealth, icon: Stethoscope },
    { val: "sdg", label: t.tabSdg, icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex flex-col" style={arabicFontStyle}>
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{t.headerTitle}</h1>
                <p className="text-emerald-200/70 text-xs sm:text-sm">
                  {t.headerSubtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HeaderControls onTabSelect={handleTabSelect} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-5 w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
            {tabItems.map((tab) => (
              <TabsTrigger key={tab.val} value={tab.val}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm font-medium">
                <tab.icon className="w-3.5 h-3.5 me-1.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{(tab.label || "").split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="macro" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <KpiCard title={t.kpiGdpGrowth} value={latestKPIs.gdpGrowth} unit="%" change={0.2} changeDir="up" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.kpiGdp2024} value="205" unit="bn $" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title={t.kpiInflation} value={latestKPIs.inflation} unit="%" change={-1.0} changeDir="down" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.kpiUnemployment} value={latestKPIs.unemployment} unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.amber} />
              <KpiCard title={t.kpiPopulation} value="46.8" unit="M" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiInvestmentRate} value={latestKPIs.investmentRate} unit="% GDP" icon={Factory} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartGdpGrowth} subtitle={t.chartGdpGrowthSub}>
                <ChartContainer config={{ gdpBillionUsd: { label: t.chartGdpBnUsd, color: COLORS.emerald }, growthPct: { label: t.chartGrowthPct, color: COLORS.blue } }} className="h-[320px] w-full">
                  <ComposedChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[-5, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="gdpBillionUsd" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartGdpBnUsd} />
                    <Line yAxisId="right" type="monotone" dataKey="growthPct" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} name={t.chartGrowthPct} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartGdpSector} subtitle={t.chartGdpSectorSub}>
                <ChartContainer config={{
                  agriculture: { label: t.sectorAgriculture, color: COLORS.emerald },
                  industry: { label: t.sectorIndustry, color: COLORS.blue },
                  construction: { label: t.sectorConstruction, color: COLORS.amber },
                  services: { label: t.sectorServices, color: COLORS.purple },
                }} className="h-[320px] w-full">
                  <AreaChart data={gdpBySector} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="services" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} name={t.sectorServices} />
                    <Area type="monotone" stackId="1" dataKey="construction" fill={COLORS.amber} stroke={COLORS.amber} fillOpacity={0.7} name={t.sectorConstruction} />
                    <Area type="monotone" stackId="1" dataKey="industry" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} name={t.sectorIndustry} />
                    <Area type="monotone" stackId="1" dataKey="agriculture" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} name={t.sectorAgriculture} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartQuarterlyGdp} subtitle={t.chartQuarterlyGdpSub}>
                <ChartContainer config={{ growthPct: { label: t.chartGrowthPct, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <BarChart data={gdpQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[-8, 6]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="growthPct" radius={[2, 2, 0, 0]} name={t.chartGrowthPct}>
                      {gdpQuarterly.map((d, i) => (
                        <Cell key={i} fill={d.growthPct >= 0 ? COLORS.emerald : COLORS.red} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartGdpPerCapita} subtitle={t.chartGdpPerCapitaSub}>
                <ChartContainer config={{ perCapitaUsd: { label: t.chartGdpCapita, color: COLORS.blue } }} className="h-[280px] w-full">
                  <AreaChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="perCapitaUsd" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} name={t.chartGdpCapita} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="inflation" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiCpi} value="344.2" change={0.4} changeDir="up" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.kpiYoyInflation} value="3.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.emerald} />
              <KpiCard title={t.kpiFoodInflation} value="2.8" unit="%" change={-1.3} changeDir="down" icon={Package} color={COLORS.amber} />
              <KpiCard title={t.kpiCoreInflation} value="2.8" unit="%" change={-0.7} changeDir="down" icon={Activity} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartCpiMonthly} subtitle={t.chartCpiMonthlySub}>
                <ChartContainer config={{ yoyPct: { label: t.chartInflationYoy, color: COLORS.red }, foodYoy: { label: t.chartFoodYoy, color: COLORS.amber }, coreYoy: { label: t.chartCoreYoy, color: COLORS.blue } }} className="h-[340px] w-full">
                  <LineChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="yoyPct" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.legendTotalYoy} />
                    <Line type="monotone" dataKey="foodYoy" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.legendFoodYoy} />
                    <Line type="monotone" dataKey="coreYoy" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.legendCoreYoy} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartCpiLevel} subtitle={t.chartCpiLevelSub}>
                <ChartContainer config={{ ipc: { label: t.chartIpcIndex, color: COLORS.rose } }} className="h-[340px] w-full">
                  <AreaChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[200, 360]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="ipc" fill={COLORS.roseLight} stroke={COLORS.rose} strokeWidth={2} fillOpacity={0.5} name={t.chartIpcIndex} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartCpiDivision} subtitle={t.chartCpiDivisionSub}>
                <ChartContainer config={{ y2024: { label: "2024 YoY %", color: COLORS.blue } }} className="h-[340px] w-full">
                  <BarChart data={cpiByDivision} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="division" type="category" tick={{ fontSize: 10 }} tickLine={false} width={95} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="y2024" fill={COLORS.blue} radius={[0, 4, 4, 0]}>
                      {cpiByDivision.map((d, i) => (
                        <Cell key={i} fill={d.y2024 >= 5 ? COLORS.red : d.y2024 >= 3.5 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartCpiWeights} subtitle={t.chartCpiWeightsSub}>
                <ChartContainer config={Object.fromEntries(
                  cpiByDivision.map((d, i) => [d.division, { label: d.division, color: Object.values(COLORS)[i % Object.values(COLORS).length] }])
                )} className="h-[340px] w-full">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie data={cpiByDivision} dataKey="weight" nameKey="division" cx="50%" cy="50%" outerRadius={110} innerRadius={50} paddingAngle={1}>
                      {cpiByDivision.map((_, i) => (
                        <Cell key={i} fill={Object.values(COLORS)[i % Object.values(COLORS).length]} />
                      ))}
                    </Pie>
                    <Legend content={<ChartLegendContent nameKey="division" />} />
                  </PieChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartIppi} subtitle={t.chartIppiSub}>
              <ChartContainer config={{
                mining: { label: t.sectorMining, color: COLORS.amber },
                manufacturing: { label: t.sectorManufacturing, color: COLORS.blue },
                energy: { label: t.sectorEnergy, color: COLORS.red },
              }} className="h-[300px] w-full">
                <LineChart data={ippiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={2} dot={false} name={t.sectorMining} />
                  <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.sectorManufacturing} />
                  <Line type="monotone" dataKey="energy" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.sectorEnergy} />
                </LineChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="trade" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiExports} value="48.5" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiImports} value="37.0" unit="bn $" change={6.3} changeDir="up" icon={Package} color={COLORS.red} />
              <KpiCard title={t.kpiTradeBalance} value="11.5" unit="bn $" change={1.3} changeDir="up" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title={t.kpiHydroPct} value="80.0" unit="%" icon={Factory} color={COLORS.amber} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartTradeAnnual} subtitle={t.chartTradeAnnualSub}>
                <ChartContainer config={{ exportsBn: { label: t.chartExports, color: COLORS.emerald }, importsBn: { label: t.chartImports, color: COLORS.red }, balanceBn: { label: t.chartBalance, color: COLORS.blue } }} className="h-[340px] w-full">
                  <ComposedChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartExports} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartImports} />
                    <Line type="monotone" dataKey="balanceBn" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartBalance} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartHydroShare} subtitle={t.chartHydroShareSub}>
                <ChartContainer config={{ hydroPct: { label: t.chartHydroPct, color: COLORS.amber } }} className="h-[340px] w-full">
                  <AreaChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[60, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="hydroPct" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.5} name={t.chartHydroPct} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartTradeQuarterly} subtitle={t.chartTradeQuarterlySub}>
                <ChartContainer config={{
                  exportsBn: { label: t.chartExports, color: COLORS.emerald },
                  importsBn: { label: t.chartImports, color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} name={t.chartExports} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} name={t.chartImports} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartTradePartners} subtitle={t.chartTradePartnersSub}>
                <ChartContainer config={{
                  exports: { label: t.chartExports, color: COLORS.emerald },
                  imports: { label: t.chartImports, color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeByPartner} layout="vertical" margin={{ top: 5, right: 10, left: 65, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="partner" type="category" tick={{ fontSize: 10 }} tickLine={false} width={60} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exports" fill={COLORS.emerald} radius={[0, 4, 4, 0]} name={t.chartExports} />
                    <Bar dataKey="imports" fill={COLORS.red} radius={[0, 4, 4, 0]} name={t.chartImports} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="industry" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiIpi} value="114.5" change={1.8} changeDir="up" icon={Factory} color={COLORS.emerald} />
              <KpiCard title={t.kpiMining} value="108.0" change={1.4} changeDir="up" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiManufacturing} value="109.0" change={1.8} changeDir="up" icon={Building2} color={COLORS.blue} />
              <KpiCard title={t.kpiEnergy} value="118.0" change={0.4} changeDir="up" icon={Activity} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartIpi} subtitle={t.chartIpiSub}>
                <ChartContainer config={{
                  mining: { label: t.sectorMining, color: COLORS.amber },
                  manufacturing: { label: t.sectorManufacturing, color: COLORS.blue },
                  energy: { label: t.sectorEnergy, color: COLORS.cyan },
                  ipi: { label: t.chartIpiTotal, color: COLORS.emerald },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[75, 125]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="energy" stroke={COLORS.cyan} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorEnergy} />
                    <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorMining} />
                    <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorManufacturing} />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartIpiTotal} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartIpiIppi} subtitle={t.chartIpiIppiSub}>
                <ChartContainer config={{
                  ipi: { label: t.chartIpiProd, color: COLORS.emerald },
                  ippi: { label: t.chartIppiPrices, color: COLORS.red },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly.map((d, i) => ({
                    period: d.period, ipi: d.ipi, ippi: ippiQuarterly[i]?.ippi || 0
                  }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2} dot={false} name={t.chartIpiProd} />
                    <Line type="monotone" dataKey="ippi" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.chartIppiPrices} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartConstruction} subtitle={t.chartConstructionSub}>
              <ChartContainer config={{ index: { label: t.chartConstructionIdx, color: COLORS.amber } }} className="h-[250px] w-full">
                <BarChart data={constructionIndex} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[100, 170]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="index" fill={COLORS.amber} radius={[4, 4, 0, 0]} name={t.chartConstructionIdx} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="labor" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <KpiCard title={t.kpiUnempRate} value="10.8" unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.red} />
              <KpiCard title={t.kpiActivityRate} value="44.0" unit="%" change={0.5} changeDir="up" icon={Activity} color={COLORS.emerald} />
              <KpiCard title={t.kpiYouthUnemp} value="22.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.amber} />
              <KpiCard title={t.kpiFemalePartic} value="17.2" unit="%" change={0.4} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiInformal} value="43.0" unit="%" change={-0.8} changeDir="down" icon={Building2} color={COLORS.slate} />
              <KpiCard title={t.kpiEmpPop} value="39.2" unit="%" change={0.6} changeDir="up" icon={TrendingUp} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartUnempRate} subtitle={t.chartUnempRateSub}>
                <ChartContainer config={{
                  unemploymentPct: { label: t.chartTotalPct, color: COLORS.red },
                  youthUnemp: { label: t.chartYouthPct, color: COLORS.amber },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="youthUnemp" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartYouthPct} />
                    <Line type="monotone" dataKey="unemploymentPct" stroke={COLORS.red} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartTotalPct} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartActivityFemale} subtitle={t.chartActivityFemaleSub}>
                <ChartContainer config={{
                  activityRate: { label: t.chartActRate, color: COLORS.emerald },
                  femalePartic: { label: t.chartFemPartic, color: COLORS.purple },
                  informalPct: { label: t.chartInformalPct, color: COLORS.slate },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[10, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="informalPct" stroke={COLORS.slate} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartInformalPct} />
                    <Line type="monotone" dataKey="femalePartic" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartFemPartic} />
                    <Line type="monotone" dataKey="activityRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartActRate} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartEmpPop} subtitle={t.chartEmpPopSub}>
              <ChartContainer config={{ employmentPop: { label: t.chartEmpPopPct, color: COLORS.blue } }} className="h-[250px] w-full">
                <BarChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[35, 42]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="employmentPop" fill={COLORS.blue} radius={[4, 4, 0, 0]} name={t.chartEmpPopPct} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="social" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiPop} value="46.8" unit="M" icon={Users} color={COLORS.purple} />
              <KpiCard title={t.kpiGrowthRate} value="1.4" unit="%" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.kpiUrbanization} value="74.5" unit="%" icon={Building2} color={COLORS.blue} />
              <KpiCard title={t.kpiFertility} value="1.9" icon={Heart} color={COLORS.rose} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartPopGrowth} subtitle={t.chartPopGrowthSub}>
                <ChartContainer config={{ populationM: { label: t.chartPopulationM, color: COLORS.purple } }} className="h-[300px] w-full">
                  <AreaChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="populationM" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.chartPopulationM} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartPopPyramid} subtitle={t.chartPopPyramidSub}>
                <ChartContainer config={{ m: { label: t.chartMale, color: COLORS.blue }, f: { label: t.chartFemale, color: COLORS.rose } }} className="h-[300px] w-full">
                  <BarChart data={populationByAge} layout="vertical" margin={{ top: 5, right: 10, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="group" type="category" tick={{ fontSize: 10 }} tickLine={false} width={40} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="f" fill={COLORS.rose} radius={[4, 0, 0, 4]} name={t.chartFemale} />
                    <Bar dataKey="m" fill={COLORS.blue} radius={[0, 4, 4, 0]} name={t.chartMale} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartDemographic} subtitle={t.chartDemographicSub}>
                <ChartContainer config={{
                  birthRate: { label: t.chartBirthRate, color: COLORS.emerald },
                  deathRate: { label: t.chartDeathRate, color: COLORS.red },
                  fertilityRate: { label: t.chartFertilityRate, color: COLORS.amber },
                }} className="h-[300px] w-full">
                  <LineChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="deathRate" stroke={COLORS.red} strokeWidth={1.5} dot={false} name={t.chartDeathRate} />
                    <Line type="monotone" dataKey="fertilityRate" stroke={COLORS.amber} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartFertilityRate} />
                    <Line type="monotone" dataKey="birthRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartBirthRate} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartEducation} subtitle={t.chartEducationSub}>
                <ChartContainer config={{
                  enrollmentPrimary: { label: t.chartPrimary, color: COLORS.emerald },
                  enrollmentSecondary: { label: t.chartSecondary, color: COLORS.blue },
                  enrollmentHigher: { label: t.chartHigher, color: COLORS.purple },
                }} className="h-[300px] w-full">
                  <AreaChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentHigher" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} name={t.chartHigher} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentSecondary" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} name={t.chartSecondary} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentPrimary" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} name={t.chartPrimary} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartLiteracy} subtitle={t.chartLiteracySub}>
              <ChartContainer config={{
                literacyRate: { label: t.chartLiteracyRate, color: COLORS.emerald },
                primaryNet: { label: t.chartPrimaryNet, color: COLORS.blue },
                secondaryNet: { label: t.chartSecondaryNet, color: COLORS.amber },
                higherGross: { label: t.chartHigherGross, color: COLORS.purple },
              }} className="h-[280px] w-full">
                <LineChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="higherGross" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartHigherGross} />
                  <Line type="monotone" dataKey="secondaryNet" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartSecondaryNet} />
                  <Line type="monotone" dataKey="primaryNet" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.chartPrimaryNet} />
                  <Line type="monotone" dataKey="literacyRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartLiteracyRate} />
                </LineChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="fiscal" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiSavings} value="42.5" unit="% GDP" icon={DollarSign} color={COLORS.emerald} />
              <KpiCard title={t.kpiInvest} value="40.0" unit="% GDP" icon={Factory} color={COLORS.blue} />
              <KpiCard title={t.kpiDebt} value="41.0" unit="%" change={-2.0} changeDir="down" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiFiscalDeficit} value="1.0" unit="% GDP" change={-1.0} changeDir="down" icon={Activity} color={COLORS.purple} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartFiscal} subtitle={t.chartFiscalSub}>
                <ChartContainer config={{
                  revenuePctGdp: { label: t.chartRevenue, color: COLORS.emerald },
                  expenditurePctGdp: { label: t.chartExpenditure, color: COLORS.red },
                  deficitPctGdp: { label: t.chartDeficit, color: COLORS.amber },
                }} className="h-[340px] w-full">
                  <ComposedChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="revenuePctGdp" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartRevenue} />
                    <Bar dataKey="expenditurePctGdp" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartExpenditure} />
                    <Line type="monotone" dataKey="deficitPctGdp" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartDeficit} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartSavingsInvest} subtitle={t.chartSavingsInvestSub}>
                <ChartContainer config={{
                  savingsRate: { label: t.chartSavingsRate, color: COLORS.emerald },
                  investRate: { label: t.chartInvestRate, color: COLORS.blue },
                }} className="h-[340px] w-full">
                  <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[30, 55]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="investRate" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} name={t.chartInvestRate} />
                    <Area type="monotone" dataKey="savingsRate" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.4} name={t.chartSavingsRate} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartDebt} subtitle={t.chartDebtSub}>
              <ChartContainer config={{ debtPctGdp: { label: t.chartDebtGdp, color: COLORS.red } }} className="h-[280px] w-full">
                <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 50]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="debtPctGdp" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.5} name={t.chartDebtGdp} />
                </AreaChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="regional" className="space-y-5">
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
              <ChartCard title={t.chartRegionGdpShare} subtitle={t.chartRegionGdpShareSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionUnempTrend} subtitle={t.chartRegionUnempTrendSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 2: GDP Trend + Sectoral Composition ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartRegionGdpTrend} subtitle={t.chartRegionGdpTrendSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionSectorComp} subtitle={t.chartRegionSectorCompSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 3: Poverty + Youth Unemployment + Urbanization ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ChartCard title={t.chartRegionPoverty} subtitle={t.chartRegionPovertySub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionYouthUnemp} subtitle={t.chartRegionYouthUnempSub}>
                <ChartContainer config={{ youthUnemp: { label: t.kpiRegYouthUnemp, color: COLORS.rose } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 35]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="youthUnemp" radius={[0, 4, 4, 0]} fill={COLORS.rose} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartRegionUrbanization} subtitle={t.chartRegionUrbanizationSub}>
                <ChartContainer config={{ urbanization: { label: t.kpiRegUrbanization, color: COLORS.purple } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="urbanization" radius={[0, 4, 4, 0]} fill={COLORS.purple} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* ── ROW 4: HDI Trend + Employment Structure ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartRegionHDI} subtitle={t.chartRegionHDISub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionEmployStruct} subtitle={t.chartRegionEmployStructSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 5: Per Capita GDP + Electrification + Migration ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ChartCard title={t.chartRegionPerCapita} subtitle={t.chartRegionPerCapitaSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionElectrification} subtitle={t.chartRegionElectrificationSub}>
                <ChartContainer config={{ electrification: { label: t.kpiRegElectrification, color: COLORS.teal } }} className="h-[300px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[80, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="electrification" radius={[0, 4, 4, 0]} fill={COLORS.teal} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartRegionMigration} subtitle={t.chartRegionMigrationSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 6: Top Wilayas GDP + Population Scatter ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWilayaGdp} subtitle={t.chartWilayaGdpSub}>
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
              </ChartCard>

              <ChartCard title={t.chartScatter} subtitle={t.chartScatterSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 7: Inequality (Gini) + Inequality Radar ────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartRegionInequality} subtitle={t.chartRegionInequalitySub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionPopulation} subtitle={t.chartRegionPopulationSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 8: Urbanization Trend + Wilaya Population Ranking ────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartRegionUrbanTrend} subtitle={t.chartRegionUrbanTrendSub}>
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
              </ChartCard>

              <ChartCard title={t.chartWilayaPopRank} subtitle={t.chartWilayaPopRankSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 9: Wilaya Unemployment Ranking + Health/Education/Informal ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWilayaUnempRank} subtitle={t.chartWilayaUnempRankSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionDevScatter} subtitle={t.chartRegionDevScatterSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 10: Health + Education + Informal ──────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ChartCard title={t.chartRegionHealth} subtitle={t.chartRegionHealthSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionEducation} subtitle={t.chartRegionEducationSub}>
                <ChartContainer config={{ secondaryEnrol: { label: t.kpiRegSecondary, color: COLORS.blue } }} className="h-[280px] w-full">
                  <BarChart data={regionAggregates} layout="vertical" margin={{ top: 5, right: 10, left: isRtl ? 100 : 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[60, 100]} />
                    <YAxis dataKey="region" type="category" tick={{ fontSize: 11 }} tickLine={false} width={isRtl ? 100 : 80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="secondaryEnrol" radius={[0, 4, 4, 0]} fill={COLORS.blue} opacity={0.85} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartRegionInformal} subtitle={t.chartRegionInformalSub}>
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
              </ChartCard>
            </div>

            {/* ── ROW 11: Infrastructure Dashboard ────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartRegionInfra} subtitle={t.chartRegionInfraSub}>
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
              </ChartCard>

              <ChartCard title={t.chartRegionDensityBar} subtitle={t.chartRegionDensityBarSub}>
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
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="hydro" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHydroRevenue} value="33.0" unit="bn $" change={10.0} changeDir="up" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiOilProd} value="0.98" unit="Mb/j" icon={Droplets} color={COLORS.emerald} />
              <KpiCard title={t.kpiGasProd} value="105" unit="Bcm" icon={Droplets} color={COLORS.blue} />
              <KpiCard title={t.kpiHydroGdpShare} value="23.5" unit="%" icon={Activity} color={COLORS.red} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiOilPrice} value="76.0" unit="$/bbl" change={-2.6} changeDir="down" icon={DollarSign} color={COLORS.red} />
              <KpiCard title={t.kpiHydroExports} value="38.8" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiReservesOil} value="12.2" unit="Bn bbl" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiReservesGas} value="4.5" unit="Tcm" icon={Zap} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiLNG} value="21.5" unit="Bcm" change={4.9} changeDir="up" icon={Droplets} color={COLORS.cyan} />
              <KpiCard title={t.kpiRefining} value="550" unit="Kb/d" icon={Factory} color={COLORS.slate} />
              <KpiCard title={t.kpiDomesticConsump} value="35" unit="%" icon={Activity} color={COLORS.rose} />
              <KpiCard title={t.kpiRPRatioOil} value="34.1" unit="ans" icon={DollarSign} color={COLORS.amber} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartHydroRevenue} subtitle={t.chartHydroRevenueSub}>
                <ChartContainer config={{ hydroRevBn: { label: t.chartHydroRevLabel, color: COLORS.amber }, exportsBn: { label: t.chartExportsLabel, color: COLORS.emerald } }} className="h-[320px] w-full">
                  <ComposedChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="hydroRevBn" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartHydroRevLabel} />
                    <Line type="monotone" dataKey="exportsBn" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartExportsLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartHydroVsNonHydro} subtitle={t.chartHydroVsNonHydroSub}>
                <ChartContainer config={{ hydroExports: { label: t.chartHydroExportLabel, color: COLORS.amber }, nonHydroExports: { label: t.chartNonHydroExportLabel, color: COLORS.blue } }} className="h-[320px] w-full">
                  <AreaChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="nonHydroExports" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.5} name={t.chartNonHydroExportLabel} />
                    <Area type="monotone" stackId="1" dataKey="hydroExports" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.5} name={t.chartHydroExportLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartOilPrice} subtitle={t.chartOilPriceSub}>
                <ChartContainer config={{ oilPrice: { label: t.chartOilPriceLabel, color: COLORS.red } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="oilPrice" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.4} name={t.chartOilPriceLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartHydroGdp} subtitle={t.chartHydroGdpSub}>
                <ChartContainer config={{ gdpContribPct: { label: t.kpiHydroGdpShare, color: COLORS.purple } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[15, 40]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gdpContribPct" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.kpiHydroGdpShare} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartOilProduction} subtitle={t.chartOilProductionSub}>
                <ChartContainer config={{ oilProdMbpd: { label: t.chartOilProdLabel, color: COLORS.amber }, gasProdBcm: { label: t.chartGasProdLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <ComposedChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[0.8, 1.7]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[75, 110]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="oilProdMbpd" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartOilProdLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="gasProdBcm" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartGasProdLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartReservesPie} subtitle={t.chartReservesPieSub}>
                <ChartContainer config={{ reservesOilBn: { label: t.chartOilReservesLabel, color: COLORS.amber }, reservesGasTcm: { label: t.chartGasReservesLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Pie data={[
                      { name: t.chartOilReservesLabel, value: hydrocarbons[hydrocarbons.length - 1].reservesOilBn },
                      { name: t.chartGasReservesLabel, value: hydrocarbons[hydrocarbons.length - 1].reservesGasTcm * 2.7 },
                    ]} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" nameKey="name" paddingAngle={2}>
                      <Cell fill={COLORS.amber} />
                      <Cell fill={COLORS.blue} />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartLNGExports} subtitle={t.chartLNGExportsSub}>
                <ChartContainer config={{ lngExportsBcm: { label: t.chartLNGLabel, color: COLORS.cyan } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="lngExportsBcm" fill={COLORS.cyanLight} stroke={COLORS.cyan} strokeWidth={2.5} fillOpacity={0.4} name={t.chartLNGLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartRefining} subtitle={t.chartRefiningSub}>
                <ChartContainer config={{ refiningKbpd: { label: t.chartRefiningLabel, color: COLORS.slate } }} className="h-[280px] w-full">
                  <BarChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[400, 580]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="refiningKbpd" fill={COLORS.slate} radius={[4, 4, 0, 0]} name={t.chartRefiningLabel} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="agriculture" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiCerealProd} value="5.0" unit="Mt" icon={Sprout} color={COLORS.emerald} />
              <KpiCard title={t.kpiSelfSuffic} value="33" unit="%" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiAgriExports} value="0.82" unit="bn $" icon={Package} color={COLORS.blue} />
              <KpiCard title={t.kpiAgriEmploy} value="11.5" unit="%" icon={Users} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiVegProd} value="11.8" unit="Mt" icon={Sprout} color={COLORS.emerald} change={2.6} changeDir="up" />
              <KpiCard title={t.kpiFruitProd} value="6.4" unit="Mt" icon={Sprout} color={COLORS.rose} change={3.2} changeDir="up" />
              <KpiCard title={t.kpiMilkProd} value="3.8" unit="B litres" icon={Heart} color={COLORS.blue} change={5.6} changeDir="up" />
              <KpiCard title={t.kpiIrrigatedLand} value="1.9" unit="M ha" icon={Droplets} color={COLORS.cyan} change={2.7} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiAgriGdp} value="9.8" unit="%" icon={Activity} color={COLORS.teal} change={-2.0} changeDir="down" />
              <KpiCard title={t.kpiCerealImports} value="8.2" unit="Mt" icon={Globe} color={COLORS.red} />
              <KpiCard title={t.kpiPoultryProd} value="1.75" unit="Mt" icon={Sprout} color={COLORS.amber} change={4.2} changeDir="up" />
              <KpiCard title={t.kpiTractorFleet} value="160" unit="K" icon={Truck} color={COLORS.slate} change={3.2} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartCerealProd} subtitle={t.chartCerealProdSub}>
                <ChartContainer config={{ cerealProdMt: { label: t.chartCerealLabel, color: COLORS.emerald }, selfSufficCereals: { label: t.chartSelfSufficLabel, color: COLORS.amber } }} className="h-[320px] w-full">
                  <ComposedChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[20, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="cerealProdMt" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartCerealLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="selfSufficCereals" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartSelfSufficLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartVegFruitProd} subtitle={t.chartVegFruitProdSub}>
                <ChartContainer config={{ vegProdMt: { label: t.chartVegLabel, color: COLORS.emerald }, fruitProdMt: { label: t.chartFruitLabel, color: COLORS.rose } }} className="h-[320px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="fruitProdMt" fill={COLORS.roseLight} stroke={COLORS.rose} strokeWidth={2} fillOpacity={0.5} name={t.chartFruitLabel} />
                    <Area type="monotone" stackId="1" dataKey="vegProdMt" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.5} name={t.chartVegLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartLivestock} subtitle={t.chartLivestockSub}>
                <ChartContainer config={{ milkProdMl: { label: t.chartMilkLabel, color: COLORS.blue }, meatProdMt: { label: t.chartMeatLabel, color: COLORS.red } }} className="h-[300px] w-full">
                  <LineChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="milkProdMl" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartMilkLabel} />
                    <Line type="monotone" dataKey="meatProdMt" stroke={COLORS.red} strokeWidth={2} dot={{ r: 2 }} name={t.chartMeatLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartLandUse} subtitle={t.chartLandUseSub}>
                <ChartContainer config={{ irrigatedLandMha: { label: t.chartIrrigatedLabel, color: COLORS.cyan }, totalLandMha: { label: t.chartTotalLandLabel, color: COLORS.slate } }} className="h-[300px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="totalLandMha" fill={COLORS.slateLight} stroke={COLORS.slate} strokeWidth={2} fillOpacity={0.3} name={t.chartTotalLandLabel} />
                    <Area type="monotone" dataKey="irrigatedLandMha" fill={COLORS.cyanLight} stroke={COLORS.cyan} strokeWidth={2} fillOpacity={0.6} name={t.chartIrrigatedLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartOliveDateProd} subtitle={t.chartOliveDateProdSub}>
                <ChartContainer config={{ oliveProdMt: { label: t.chartOliveLabel, color: COLORS.emerald }, dateProdMt: { label: t.chartDateLabel, color: COLORS.amber } }} className="h-[300px] w-full">
                  <LineChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="oliveProdMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartOliveLabel} />
                    <Line type="monotone" dataKey="dateProdMt" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartDateLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartAgriExports} subtitle={t.chartAgriExportsSub}>
                <ChartContainer config={{ agriExportsBn: { label: t.chartAgriExportsLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="agriExportsBn" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2.5} fillOpacity={0.4} name={t.chartAgriExportsLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartPoultryProd} subtitle={t.chartPoultryProdSub}>
                <ChartContainer config={{ poultryProdMt: { label: t.chartPoultryLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="poultryProdMt" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2.5} fillOpacity={0.4} name={t.chartPoultryLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartCerealImports} subtitle={t.chartCerealImportsSub}>
                <ChartContainer config={{ cerealImportsMt: { label: t.chartCerealImportLabel, color: COLORS.red }, cerealProdMt: { label: t.chartCerealLabel, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <ComposedChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="cerealImportsMt" fill={COLORS.redLight} stroke={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.7} name={t.chartCerealImportLabel} />
                    <Line type="monotone" dataKey="cerealProdMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCerealLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="manufacturing" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiFoodIndustry} value="110" icon={Factory} color={COLORS.emerald} />
              <KpiCard title={t.kpiPharma} value="128" change={5.0} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiTextiles} value="86" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiChemicals} value="107" icon={Factory} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiMetallurgy} value="102" icon={Hammer} color={COLORS.slate} />
              <KpiCard title={t.kpiBuildingMat} value="112" change={1.8} changeDir="up" icon={Building2} color={COLORS.orange} />
              <KpiCard title={t.kpiElectrical} value="94" icon={Zap} color={COLORS.cyan} />
              <KpiCard title={t.kpiPaper} value="98" icon={Package} color={COLORS.rose} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiManufEmploy} value="550" unit="K" icon={Users} color={COLORS.purple} change={2.8} changeDir="up" />
              <KpiCard title={t.kpiManufExports} value="4.2" unit="bn $" icon={Globe} color={COLORS.emerald} change={10.5} changeDir="up" />
              <KpiCard title={t.kpiCapacityUtil} value="70" unit="%" icon={Activity} color={COLORS.blue} change={2.9} changeDir="up" />
              <KpiCard title={t.kpiManufGdp} value="6.2" unit="%" icon={Factory} color={COLORS.teal} change={7.0} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiNumEnterprises} value="13.0" unit="K" icon={Building2} color={COLORS.slate} change={3.2} changeDir="up" />
              <KpiCard title={t.kpiPrivateShare} value="58" unit="%" icon={DollarSign} color={COLORS.amber} change={3.6} changeDir="up" />
              <KpiCard title={t.kpiManufFDI} value="2.0" unit="bn $" icon={Globe} color={COLORS.cyan} change={11.1} changeDir="up" />
              <KpiCard title={t.kpiProductivity} value="106" icon={TrendingUp} color={COLORS.emerald} change={2.9} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartManufSubsectors} subtitle={t.chartManufSubsectorsSub}>
                <ChartContainer config={{
                  foodIndustry: { label: t.chartFoodLabel, color: COLORS.emerald },
                  textiles: { label: t.chartTextileLabel, color: COLORS.amber },
                  chemicals: { label: t.chartChemicalLabel, color: COLORS.blue },
                  metallurgy: { label: t.chartMetallurgyLabel, color: COLORS.slate },
                  electrics: { label: t.chartElectricLabel, color: COLORS.cyan },
                  pharma: { label: t.chartPharmaLabel, color: COLORS.purple },
                }} className="h-[380px] w-full">
                  <LineChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[70, 135]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="textiles" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartTextileLabel} />
                    <Line type="monotone" dataKey="metallurgy" stroke={COLORS.slate} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartMetallurgyLabel} />
                    <Line type="monotone" dataKey="electrics" stroke={COLORS.cyan} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartElectricLabel} />
                    <Line type="monotone" dataKey="chemicals" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.chartChemicalLabel} />
                    <Line type="monotone" dataKey="pharma" stroke={COLORS.purple} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPharmaLabel} />
                    <Line type="monotone" dataKey="foodIndustry" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartFoodLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartManufRadar} subtitle={t.chartManufRadarSub}>
                <ChartContainer config={{
                  foodIndustry: { label: t.chartFoodLabel, color: COLORS.emerald },
                  textiles: { label: t.chartTextileLabel, color: COLORS.amber },
                  chemicals: { label: t.chartChemicalLabel, color: COLORS.blue },
                  metallurgy: { label: t.chartMetallurgyLabel, color: COLORS.slate },
                  electrics: { label: t.chartElectricLabel, color: COLORS.cyan },
                  buildingMat: { label: t.chartBuildingMatLabel, color: COLORS.orange },
                  pharma: { label: t.chartPharmaLabel, color: COLORS.purple },
                  paper: { label: t.chartPaperLabel, color: COLORS.rose },
                }} className="h-[380px] w-full">
                  <RadarChart cx="50%" cy="50%" outerRadius={120} data={[
                    { key: t.chartFoodLabel, value: manufacturingData[manufacturingData.length - 1].foodIndustry },
                    { key: t.chartTextileLabel, value: manufacturingData[manufacturingData.length - 1].textiles },
                    { key: t.chartChemicalLabel, value: manufacturingData[manufacturingData.length - 1].chemicals },
                    { key: t.chartMetallurgyLabel, value: manufacturingData[manufacturingData.length - 1].metallurgy },
                    { key: t.chartElectricLabel, value: manufacturingData[manufacturingData.length - 1].electrics },
                    { key: t.chartBuildingMatLabel, value: manufacturingData[manufacturingData.length - 1].buildingMat },
                    { key: t.chartPharmaLabel, value: manufacturingData[manufacturingData.length - 1].pharma },
                    { key: t.chartPaperLabel, value: manufacturingData[manufacturingData.length - 1].paper },
                  ]}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="key" tick={{ fontSize: 9 }} />
                    <PolarRadiusAxis tick={{ fontSize: 9 }} domain={[70, 135]} />
                    <Radar name="2024" dataKey="value" stroke={COLORS.emerald} fill={COLORS.emeraldLight} fillOpacity={0.4} strokeWidth={2} />
                  </RadarChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartManufBuildingPaper} subtitle={t.chartManufBuildingPaperSub}>
                <ChartContainer config={{ buildingMat: { label: t.chartBuildingMatLabel, color: COLORS.orange }, paper: { label: t.chartPaperLabel, color: COLORS.rose } }} className="h-[300px] w-full">
                  <LineChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[80, 120]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="buildingMat" stroke={COLORS.orange} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartBuildingMatLabel} />
                    <Line type="monotone" dataKey="paper" stroke={COLORS.rose} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartPaperLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartManufEmployCapacity} subtitle={t.chartManufEmployCapacitySub}>
                <ChartContainer config={{ manufEmployK: { label: t.chartEmployLabel, color: COLORS.purple }, capacityUtilPct: { label: t.chartCapacityLabel, color: COLORS.blue }, manufExportsBn: { label: t.chartManufExportLabel, color: COLORS.emerald } }} className="h-[300px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[40, 80]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="manufExportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufExportLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="capacityUtilPct" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCapacityLabel} />
                    <Line yAxisId="left" type="monotone" dataKey="manufEmployK" stroke={COLORS.purple} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartEmployLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartManufGDP} subtitle={t.chartManufGDPSub}>
                <ChartContainer config={{ gdpContribPct: { label: t.chartManufGDPLabel, color: COLORS.teal }, privateSharePct: { label: t.kpiPrivateShare, color: COLORS.amber } }} className="h-[280px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[4, 7]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[35, 65]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="gdpContribPct" fill={COLORS.teal} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufGDPLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="privateSharePct" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.kpiPrivateShare} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartManufFDI} subtitle={t.chartManufFDISub}>
                <ChartContainer config={{ fdiBn: { label: t.chartManufFDILabel, color: COLORS.cyan }, productivityIndex: { label: t.chartProductivityLabel, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[85, 115]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="fdiBn" fill={COLORS.cyan} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufFDILabel} />
                    <Line yAxisId="right" type="monotone" dataKey="productivityIndex" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartProductivityLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="btp" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHousingUnits} value="350" unit="K" change={2.9} changeDir="up" icon={Building2} color={COLORS.emerald} />
              <KpiCard title={t.kpiCementProd} value="24.5" unit="Mt" change={4.3} changeDir="up" icon={Factory} color={COLORS.blue} />
              <KpiCard title={t.kpiBTPGdp} value="10.2" unit="%" icon={Activity} color={COLORS.amber} />
              <KpiCard title={t.kpiBTPEmploy} value="1150" unit="K" icon={Users} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartHousingUnits} subtitle={t.chartHousingUnitsSub}>
                <ChartContainer config={{ housingUnitsK: { label: t.chartHousingLabel, color: COLORS.emerald }, buildingPermitsK: { label: t.chartPermitsLabel, color: COLORS.amber } }} className="h-[320px] w-full">
                  <ComposedChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="housingUnitsK" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartHousingLabel} />
                    <Line type="monotone" dataKey="buildingPermitsK" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 3 }} name={t.chartPermitsLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartCementSteel} subtitle={t.chartCementSteelSub}>
                <ChartContainer config={{ cementMt: { label: t.chartCementLabel, color: COLORS.blue }, steelMt: { label: t.chartSteelLabel, color: COLORS.slate } }} className="h-[320px] w-full">
                  <LineChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="cementMt" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCementLabel} />
                    <Line type="monotone" dataKey="steelMt" stroke={COLORS.slate} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartSteelLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartBTPCostIndex} subtitle={t.chartBTPCostIndexSub}>
                <ChartContainer config={{ costIndex: { label: t.chartCostIndexLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <BarChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[100, 170]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="costIndex" fill={COLORS.amber} radius={[4, 4, 0, 0]} name={t.chartCostIndexLabel} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartBTPInvest} subtitle={t.chartBTPInvestSub}>
                <ChartContainer config={{ publicInvestBn: { label: t.chartPublicInvestLabel, color: COLORS.purple } }} className="h-[280px] w-full">
                  <AreaChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="publicInvestBn" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.chartPublicInvestLabel} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiServicesGdp} value="51.3" unit="%" icon={Activity} color={COLORS.purple} />
              <KpiCard title={t.kpiTrade} value="12.8" unit="%" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiTransport} value="7.5" unit="%" icon={Truck} color={COLORS.blue} />
              <KpiCard title={t.kpiTelecom} value="6.5" unit="%" icon={Zap} color={COLORS.cyan} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartServicesTrend} subtitle={t.chartServicesTrendSub}>
                <ChartContainer config={{ gdpContribPct: { label: t.kpiServicesGdp, color: COLORS.purple } }} className="h-[320px] w-full">
                  <AreaChart data={servicesData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[45, 55]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gdpContribPct" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2.5} fillOpacity={0.4} name={t.kpiServicesGdp} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartServicesComposition} subtitle={t.chartServicesCompositionSub}>
                <ChartContainer config={{
                  trade: { label: t.chartTradeLabel, color: COLORS.emerald },
                  transport: { label: t.chartTransportLabel, color: COLORS.blue },
                  telecom: { label: t.chartTelecomLabel, color: COLORS.cyan },
                  finance: { label: t.chartFinanceLabel, color: COLORS.amber },
                  tourism: { label: t.chartTourismLabel, color: COLORS.rose },
                  govtServices: { label: t.chartGovtLabel, color: COLORS.slate },
                }} className="h-[320px] w-full">
                  <BarChart data={servicesData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="trade" fill={COLORS.emerald} radius={[2, 2, 0, 0]} stackId="1" name={t.chartTradeLabel} />
                    <Bar dataKey="transport" fill={COLORS.blue} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTransportLabel} />
                    <Bar dataKey="telecom" fill={COLORS.cyan} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTelecomLabel} />
                    <Bar dataKey="finance" fill={COLORS.amber} radius={[0, 0, 0, 0]} stackId="1" name={t.chartFinanceLabel} />
                    <Bar dataKey="tourism" fill={COLORS.rose} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTourismLabel} />
                    <Bar dataKey="govtServices" fill={COLORS.slate} radius={[2, 2, 0, 0]} stackId="1" name={t.chartGovtLabel} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          <TabsContent value="mining" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiElectricity} value="72" unit="TWh" icon={Zap} color={COLORS.cyan} />
              <KpiCard title={t.kpiGasConsump} value="42" unit="Bcm" icon={Droplets} color={COLORS.blue} />
              <KpiCard title={t.kpiIronOre} value="3.8" unit="Mt" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiPhosphate} value="1.5" unit="Mt" icon={Factory} color={COLORS.emerald} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartMiningProd} subtitle={t.chartMiningProdSub}>
                <ChartContainer config={{
                  ironOreMt: { label: t.chartIronOreLabel, color: COLORS.amber },
                  phosphateMt: { label: t.chartPhosphateLabel, color: COLORS.emerald },
                }} className="h-[320px] w-full">
                  <LineChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="ironOreMt" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartIronOreLabel} />
                    <Line type="monotone" dataKey="phosphateMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPhosphateLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartElectricity} subtitle={t.chartElectricitySub}>
                <ChartContainer config={{ electricityTwh: { label: t.chartElectricityLabel, color: COLORS.cyan } }} className="h-[320px] w-full">
                  <BarChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[40, 80]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="electricityTwh" fill={COLORS.cyan} radius={[4, 4, 0, 0]} name={t.chartElectricityLabel} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <ChartCard title={t.chartEnergyConsump} subtitle={t.chartEnergyConsumpSub}>
              <ChartContainer config={{ gasConsumptionBcm: { label: t.chartGasConsumpLabel, color: COLORS.blue }, petrolConsumptionMt: { label: t.chartPetrolConsumpLabel, color: COLORS.red } }} className="h-[280px] w-full">
                <LineChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="gasConsumptionBcm" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartGasConsumpLabel} />
                  <Line type="monotone" dataKey="petrolConsumptionMt" stroke={COLORS.red} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartPetrolConsumpLabel} />
                </LineChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          <TabsContent value="health" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHospitalBeds} value="20.3" icon={BedDouble} color={COLORS.blue} change={2.5} changeDir="up" />
              <KpiCard title={t.kpiPhysicians} value="25.5" icon={Stethoscope} color={COLORS.emerald} change={6.3} changeDir="up" />
              <KpiCard title={t.kpiNurses} value="32.0" icon={Shield} color={COLORS.purple} change={4.9} changeDir="up" />
              <KpiCard title={t.kpiHealthExpenditure} value="6.5" unit="%" icon={DollarSign} color={COLORS.amber} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiLifeExpectancy} value="77.5" unit="ans" icon={Heart} color={COLORS.rose} change={0.4} changeDir="up" />
              <KpiCard title={t.kpiInfantMortality} value="15.2" icon={Baby} color={COLORS.red} change={-5.0} changeDir="down" />
              <KpiCard title={t.kpiMaternalMortality} value="65" icon={Heart} color={COLORS.orange} change={-9.7} changeDir="down" />
              <KpiCard title={t.kpiVaccination} value="94" unit="%" icon={Syringe} color={COLORS.teal} change={1.1} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiNumHospitals} value="498" icon={Building2} color={COLORS.blue} change={2.7} changeDir="up" />
              <KpiCard title={t.kpiHealthCenters} value="1850" icon={Activity} color={COLORS.emerald} change={3.9} changeDir="up" />
              <KpiCard title={t.kpiPolyclinics} value="460" icon={Factory} color={COLORS.purple} change={4.5} changeDir="up" />
              <KpiCard title={t.kpiPrimaryCareVisits} value="78" unit="M" icon={Users} color={COLORS.amber} change={5.4} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartHealthInfrastructure} subtitle={t.chartHealthInfrastructureSub}>
                <ChartContainer config={{
                  numHospitals: { label: t.chartHospitalsLabel, color: COLORS.blue },
                  numHealthCenters: { label: t.chartHealthCentersLabel, color: COLORS.emerald },
                  numPolyclinics: { label: t.chartPolyclinicsLabel, color: COLORS.purple },
                }} className="h-[320px] w-full">
                  <BarChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="numHealthCenters" fill={COLORS.emerald} radius={[2, 2, 0, 0]} stackId="1" name={t.chartHealthCentersLabel} />
                    <Bar dataKey="numPolyclinics" fill={COLORS.purple} radius={[0, 0, 0, 0]} stackId="1" name={t.chartPolyclinicsLabel} />
                    <Bar dataKey="numHospitals" fill={COLORS.blue} radius={[2, 2, 0, 0]} name={t.chartHospitalsLabel} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartPersonnelTrend} subtitle={t.chartPersonnelTrendSub}>
                <ChartContainer config={{
                  physicians10k: { label: t.chartPhysiciansLabel, color: COLORS.emerald },
                  nurses10k: { label: t.chartNursesLabel, color: COLORS.purple },
                  hospitalBeds10k: { label: t.chartHospitalsLabel, color: COLORS.blue },
                }} className="h-[320px] w-full">
                  <LineChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="hospitalBeds10k" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} name={t.chartHospitalsLabel} />
                    <Line type="monotone" dataKey="physicians10k" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPhysiciansLabel} />
                    <Line type="monotone" dataKey="nurses10k" stroke={COLORS.purple} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartNursesLabel} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartMortalityTrend} subtitle={t.chartMortalityTrendSub}>
                <ChartContainer config={{
                  infantMortality: { label: t.chartInfantMortLabel, color: COLORS.red },
                  maternalMortality95k: { label: t.chartMaternalMortLabel, color: COLORS.orange },
                }} className="h-[300px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[50, 150]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area yAxisId="left" type="monotone" dataKey="infantMortality" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2.5} fillOpacity={0.4} name={t.chartInfantMortLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="maternalMortality95k" stroke={COLORS.orange} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartMaternalMortLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
              <ChartCard title={t.chartHealthExpenditureTrend} subtitle={t.chartHealthExpenditureTrendSub}>
                <ChartContainer config={{
                  healthExpenditurePct: { label: t.chartHealthExpLabel, color: COLORS.amber },
                  lifeExpectancy: { label: t.chartLifeExpLabel, color: COLORS.rose },
                }} className="h-[300px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[4, 8]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[74, 79]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="healthExpenditurePct" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartHealthExpLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="lifeExpectancy" stroke={COLORS.rose} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartLifeExpLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartVaccinationTrend} subtitle={t.chartVaccinationTrendSub}>
                <ChartContainer config={{ vaccinationRate: { label: t.chartVaccinationLabel, color: COLORS.teal }, primaryCareVisitsM: { label: t.chartPrimaryCareLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[85, 100]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area yAxisId="left" type="monotone" dataKey="vaccinationRate" fill={COLORS.tealLight} stroke={COLORS.teal} strokeWidth={2.5} fillOpacity={0.4} name={t.chartVaccinationLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="primaryCareVisitsM" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartPrimaryCareLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          {/* SDGs / VNR 2026 TAB */}
          <TabsContent value="sdg" className="space-y-5">
            {/* KPI row: counts by status */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiSdgOnTrack} value={String(sdgOverview.filter(s => s.status === "on_track").length)} unit="/ 17" icon={CheckCircle2} color={COLORS.emerald} />
              <KpiCard title={t.kpiSdgModerate} value={String(sdgOverview.filter(s => s.status === "moderate").length)} unit="/ 17" icon={CircleDot} color={COLORS.amber} />
              <KpiCard title={t.kpiSdgInsufficient} value={String(sdgOverview.filter(s => s.status === "insufficient").length)} unit="/ 17" icon={ArrowDownRight} color={COLORS.red} />
              <KpiCard title={t.kpiSdgAchieved} value={String(sdgOverview.filter(s => s.achieved).length)} unit="/ 17" icon={CheckCircle2} color={COLORS.blue} />
            </div>

            {/* Chart 1: SDG Progress Overview — horizontal bars */}
            <ChartCard title={t.chartSdgProgress} subtitle={t.chartSdgProgressSub}>
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
            </ChartCard>

            {/* Chart 2: SDG Radar — deep dive goals */}
            <ChartCard title={t.chartSdgRadar} subtitle={t.chartSdgRadarSub}>
              <ChartContainer config={{ value: { label: t.labelProgress, color: "#7c3aed" } }} className="h-[400px] w-full">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={sdgDeepDive.map(d => ({ name: `${d.sdg}`, progress: Math.round(d.kpis.filter(k => k.status === "achieved").length / d.kpis.length * 100) }))}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9 }} tickCount={5} />
                  <Radar name={t.labelProgress} dataKey="progress" stroke="#7c3aed" fill="#ede9fe" fillOpacity={0.5} strokeWidth={2} dot={{ r: 4, fill: "#7c3aed" }} />
                  <ChartTooltip content={<ChartTooltipContent />} formatter={(value: number) => [`${value} %`, t.labelProgress]} />
                </RadarChart>
              </ChartContainer>
            </ChartCard>

            {/* Charts row: Energy Mix + Housing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ChartCard title={t.chartSdgEnergyMix} subtitle={t.chartSdgEnergyMixSub}>
                <ChartContainer config={{ share: { label: "%", color: "#f59e0b" } }} className="h-[320px] w-full">
                  <PieChart>
                    <Pie data={sdgEnergyMix.map(e => ({ name: e.source === "gaz" ? t.labelGazNatural : e.source === "solaire" ? t.labelSolarPV : e.source === "hydraulique" ? t.labelHydro : e.source === "eolien" ? t.labelWind : e.source === "autresEnr" ? t.labelOtherEnr : t.labelFuelOil, value: e.share }))} cx="50%" cy="50%" outerRadius={80} innerRadius={50} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={true}>
                      {sdgEnergyMix.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartSdgHousing} subtitle={t.chartSdgHousingSub}>
                <ChartContainer config={{ built: { label: t.labelUnits, color: "#ea580c" } }} className="h-[320px] w-full">
                  <BarChart data={sdgHousingPrograms.map(h => ({ name: h.period, units: Math.round(h.built / 1000) }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="units" fill={COLORS.orange} radius={[6, 6, 0, 0]} name={t.labelUnits} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: Desalination + Water Reuse */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ChartCard title={t.chartSdgDesalination} subtitle={t.chartSdgDesalinationSub}>
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
              </ChartCard>

              <ChartCard title={t.chartSdgWaterReuse} subtitle={t.chartSdgWaterReuseSub}>
                <ChartContainer config={{ volume: { label: t.labelVolume, color: "#0d9488" } }} className="h-[300px] w-full">
                  <AreaChart data={sdgWaterReuse}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="volume" stroke={COLORS.teal} fill={COLORS.tealLight} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Charts row: Digital Transformation + Innovation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ChartCard title={t.chartSdgTelecoms} subtitle={t.chartSdgTelecomsSub}>
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
              </ChartCard>

              <ChartCard title={t.chartSdgInnovation} subtitle={t.chartSdgInnovationSub}>
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
              </ChartCard>
            </div>

            {/* Charts row: Food Security + Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ChartCard title={t.chartSdgFood} subtitle={t.chartSdgFoodSub}>
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
              </ChartCard>

              <ChartCard title={t.chartSdgEducation} subtitle={t.chartSdgEducationSub}>
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
              </ChartCard>
            </div>

            {/* Charts row: Inequality + Oceans */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ChartCard title={t.chartSdgInequality} subtitle={t.chartSdgInequalitySub}>
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
              </ChartCard>

              <ChartCard title={t.chartSdgOceans} subtitle={t.chartSdgOceansSub}>
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
              </ChartCard>
            </div>

            {/* Vision 2030 Roadmap */}
            <ChartCard title={t.chartSdgTimeline} subtitle={t.chartSdgTimelineSub}>
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
            </ChartCard>
          </TabsContent>
        </Tabs>

        {/* Source footer */}
        <Separator className="my-6" />
        <footer className="text-center text-xs text-muted-foreground pb-4">
          <p>{t.footer}</p>
        </footer>
      </main>
    </div>
  );
}