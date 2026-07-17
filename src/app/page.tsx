"use client";

import {
  gdpAnnual, gdpBySector, gdpQuarterly, cpiMonthly, tradeAnnual,
  tradeQuarterly, tradeByPartner, ipiQuarterly, laborMarket,
  demographics, populationByAge, fiscalData, cpiByDivision,
  education, ippiQuarterly, wilayaData, constructionIndex, latestKPIs,
  hydrocarbons, agricultureData, manufacturingData, btpData,
  servicesData, miningEnergy,
} from "@/lib/algeria-data";

import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";

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
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, BarChart3, Globe, Percent, Activity,
  Factory, GraduationCap, Building2, Truck, Heart, Package,
  Scale, ChevronRight, Droplets, Sprout, Hammer, Wrench, Zap,
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
    <Card className="border-0 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground font-medium">{title}</span>
          <div className={`p-1.5 rounded-lg`} style={{ backgroundColor: color + "15" }}>
            <Icon className="w-3.5 h-3.5" style={{ color }} />
          </div>
        </div>
        <div className="flex items-end gap-1.5">
          <span className="text-2xl font-bold">{value}</span>
          {unit && <span className="text-sm text-muted-foreground mb-0.5">{unit}</span>}
        </div>
        {change !== undefined && changeDir && (
          <div className={`flex items-center gap-0.5 mt-1 text-xs font-medium ${changeDir === "up" ? "text-emerald-600" : "text-red-600"}`}>
            {changeDir === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {change > 0 ? "+" : ""}{change}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ChartCard({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <Card className={`border-0 shadow-sm ${className || ""}`}>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        {subtitle && <CardDescription className="text-xs">{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="px-4 pb-4">{children}</CardContent>
    </Card>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═════════════════════════════════════════════════════════════════════════════
export default function AlgeriaDashboard() {
  const { t, isRtl, locale } = useI18n();

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col" style={arabicFontStyle}>
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
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-5 w-full">
        <Tabs defaultValue="macro" className="space-y-5">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
            {tabItems.map((tab) => (
              <TabsTrigger key={tab.val} value={tab.val}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm font-medium">
                <tab.icon className="w-3.5 h-3.5 me-1.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ═══ MACROECONOMIC ═══════════════════════════════════════════════ */}
          <TabsContent value="macro" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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

          {/* ═══ PRICES & INFLATION ═══════════════════════════════════════════ */}
          <TabsContent value="inflation" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ TRADE & EXTERNAL BALANCE ════════════════════════════════════ */}
          <TabsContent value="trade" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ INDUSTRIAL PRODUCTION ═════════════════════════════════════════ */}
          <TabsContent value="industry" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ LABOR MARKET ═════════════════════════════════════════════════ */}
          <TabsContent value="labor" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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

          {/* ═══ DEMOGRAPHICS & SOCIAL ═══════════════════════════════════════ */}
          <TabsContent value="social" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ FISCAL & SAVINGS ═════════════════════════════════════════════ */}
          <TabsContent value="fiscal" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ REGIONAL ═════════════════════════════════════════════════════ */}
          <TabsContent value="regional" className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title={t.chartWilayaGdp} subtitle={t.chartWilayaGdpSub}>
                <ChartContainer config={{ gdpShare: { label: t.chartGdpShare, color: COLORS.emerald } }} className="h-[380px] w-full">
                  <BarChart data={wilayaData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 11 }} tickLine={false} width={75} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="gdpShare" fill={COLORS.emerald} radius={[0, 4, 4, 0]} name={t.chartGdpShare}>
                      {wilayaData.map((_, i) => (
                        <Cell key={i} fill={[COLORS.emerald, COLORS.blue, COLORS.purple, COLORS.amber, COLORS.cyan, COLORS.rose, COLORS.teal, COLORS.orange, COLORS.slate, COLORS.red][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title={t.chartWilayaUnemp} subtitle={t.chartWilayaUnempSub}>
                <ChartContainer config={{ unemployment: { label: t.chartUnempPct, color: COLORS.red } }} className="h-[380px] w-full">
                  <BarChart data={wilayaData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 18]} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 11 }} tickLine={false} width={75} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="unemployment" radius={[0, 4, 4, 0]} name={t.chartUnempPct}>
                      {wilayaData.map((d) => (
                        <Cell key={d.wilaya} fill={d.unemployment >= 13 ? COLORS.red : d.unemployment >= 11 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title={t.chartScatter} subtitle={t.chartScatterSub}>
              <ChartContainer config={{
                x: { label: t.chartPopK, color: COLORS.blue },
                y: { label: t.chartGdpShareLabel, color: COLORS.emerald },
              }} className="h-[350px] w-full">
                <ScatterChart margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="populationK" name={t.chartPopK} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartPopThousands, position: "bottom", fontSize: 11 }} />
                  <YAxis dataKey="gdpShare" name={t.chartGdpShareLabel} tick={{ fontSize: 11 }} tickLine={false} label={{ value: t.chartGdpShareLabel, angle: isRtl ? 90 : -90, position: "insideLeft", fontSize: 11 }} />
                  <ZAxis dataKey="unemployment" range={[80, 400]} name={t.chartUnempPctLabel} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Scatter data={wilayaData} fill={COLORS.emerald}>
                    {wilayaData.map((_, i) => (
                      <Cell key={i} fill={[COLORS.emerald, COLORS.blue, COLORS.purple, COLORS.amber, COLORS.cyan, COLORS.rose, COLORS.teal, COLORS.orange, COLORS.slate, COLORS.red][i]} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ HYDROCARBONS ════════════════════════════════════════════ */}
          <TabsContent value="hydro" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiHydroRevenue} value="33.0" unit="bn $" change={10.0} changeDir="up" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiOilProd} value="0.98" unit="Mb/j" icon={Droplets} color={COLORS.emerald} />
              <KpiCard title={t.kpiGasProd} value="105" unit="Bcm" icon={Droplets} color={COLORS.blue} />
              <KpiCard title={t.kpiHydroGdpShare} value="23.5" unit="%" icon={Activity} color={COLORS.red} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiOilPrice} value="76.0" unit="$/bbl" change={-2.6} changeDir="down" icon={DollarSign} color={COLORS.red} />
              <KpiCard title={t.kpiHydroExports} value="38.8" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiReservesOil} value="12.2" unit="Bn bbl" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiReservesGas} value="4.5" unit="Tcm" icon={Zap} color={COLORS.blue} />
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
          </TabsContent>

          {/* ═══ AGRICULTURE ═════════════════════════════════════════════ */}
          <TabsContent value="agriculture" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiCerealProd} value="5.0" unit="Mt" icon={Sprout} color={COLORS.emerald} />
              <KpiCard title={t.kpiSelfSuffic} value="33" unit="%" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiAgriExports} value="0.82" unit="bn $" icon={Package} color={COLORS.blue} />
              <KpiCard title={t.kpiAgriEmploy} value="11.5" unit="%" icon={Users} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiVegProd} value="11.8" unit="Mt" icon={Sprout} color={COLORS.emerald} change={2.6} changeDir="up" />
              <KpiCard title={t.kpiFruitProd} value="6.4" unit="Mt" icon={Sprout} color={COLORS.rose} change={3.2} changeDir="up" />
              <KpiCard title={t.kpiMilkProd} value="3.8" unit="B litres" icon={Heart} color={COLORS.blue} change={5.6} changeDir="up" />
              <KpiCard title={t.kpiIrrigatedLand} value="1.9" unit="M ha" icon={Droplets} color={COLORS.cyan} change={2.7} changeDir="up" />
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
          </TabsContent>

          {/* ═══ MANUFACTURING ══════════════════════════════════════════ */}
          <TabsContent value="manufacturing" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiFoodIndustry} value="110" icon={Factory} color={COLORS.emerald} />
              <KpiCard title={t.kpiPharma} value="128" change={5.0} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiTextiles} value="86" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiChemicals} value="107" icon={Factory} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title={t.kpiMetallurgy} value="102" icon={Hammer} color={COLORS.slate} />
              <KpiCard title={t.kpiBuildingMat} value="112" change={1.8} changeDir="up" icon={Building2} color={COLORS.orange} />
              <KpiCard title={t.kpiElectrical} value="94" icon={Zap} color={COLORS.cyan} />
              <KpiCard title={t.kpiPaper} value="98" icon={Package} color={COLORS.rose} />
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
                    <Radar name="2024" stroke={COLORS.emerald} fill={COLORS.emeraldLight} fillOpacity={0.4} strokeWidth={2} />
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
          </TabsContent>

          {/* ═══ BTP ═════════════════════════════════════════════════════ */}
          <TabsContent value="btp" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ SERVICES ══════════════════════════════════════════════════ */}
          <TabsContent value="services" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* ═══ MINING & ENERGY ══════════════════════════════════════════ */}
          <TabsContent value="mining" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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