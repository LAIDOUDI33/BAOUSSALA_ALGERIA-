"use client";

import {
  gdpAnnual, gdpBySector, gdpQuarterly, cpiMonthly, tradeAnnual,
  tradeQuarterly, tradeByPartner, ipiQuarterly, laborMarket,
  demographics, populationByAge, fiscalData, cpiByDivision,
  education, ippiQuarterly, wilayaData, constructionIndex, latestKPIs,
} from "@/lib/algeria-data";

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
  Scale, ChevronRight,
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

// ─── Reusable Chart Configs ────────────────────────────────────────────────
const gdpChartConfig = { gdpBillionUsd: { label: "GDP (bn USD)", color: COLORS.emerald }, growthPct: { label: "Growth %", color: COLORS.blue } };
const cpiChartConfig = { yoyPct: { label: "Inflation YoY %", color: COLORS.red }, foodYoy: { label: "Food YoY %", color: COLORS.amber }, coreYoy: { label: "Core YoY %", color: COLORS.blue } };
const tradeChartConfig = { exportsBn: { label: "Exports", color: COLORS.emerald }, importsBn: { label: "Imports", color: COLORS.red }, balanceBn: { label: "Balance", color: COLORS.blue } };

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

function SectionTitle({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700"><Icon className="w-4 h-4" /></div>
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Algeria Economic Dashboard</h1>
              <p className="text-emerald-200/70 text-xs sm:text-sm">
                Office National des Statistiques (ONS) — Data Science Analysis Platform
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-5 w-full">
        <Tabs defaultValue="macro" className="space-y-5">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
            {[
              { val: "macro", label: "Macroeconomic", icon: Activity },
              { val: "inflation", label: "Prices & Inflation", icon: Scale },
              { val: "trade", label: "Trade & Balance", icon: Globe },
              { val: "industry", label: "Industrial Production", icon: Factory },
              { val: "labor", label: "Labor Market", icon: Users },
              { val: "social", label: "Demographics & Social", icon: Heart },
              { val: "fiscal", label: "Fiscal & Savings", icon: DollarSign },
              { val: "regional", label: "Regional", icon: Building2 },
            ].map((t) => (
              <TabsTrigger key={t.val} value={t.val}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm font-medium">
                <t.icon className="w-3.5 h-3.5 mr-1.5" />
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ═══ MACROECONOMIC ═══════════════════════════════════════════════ */}
          <TabsContent value="macro" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <KpiCard title="GDP Growth" value={latestKPIs.gdpGrowth} unit="%" change={0.2} changeDir="up" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title="GDP (2024)" value="205" unit="bn $" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title="Inflation" value={latestKPIs.inflation} unit="%" change={-1.0} changeDir="down" icon={Scale} color={COLORS.red} />
              <KpiCard title="Unemployment" value={latestKPIs.unemployment} unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.amber} />
              <KpiCard title="Population" value="46.8" unit="M" icon={Heart} color={COLORS.purple} />
              <KpiCard title="Investment Rate" value={latestKPIs.investmentRate} unit="% GDP" icon={Factory} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* GDP & Growth */}
              <ChartCard title="GDP & Growth Rate (2000–2024)" subtitle="Billion USD and annual growth %">
                <ChartContainer config={gdpChartConfig} className="h-[320px] w-full">
                  <ComposedChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[-5, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="gdpBillionUsd" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name="GDP (bn USD)" />
                    <Line yAxisId="right" type="monotone" dataKey="growthPct" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} name="Growth %" />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              {/* GDP by Sector Stacked Area */}
              <ChartCard title="GDP by Sector (% Contribution)" subtitle="Agriculture, Industry, Construction, Services">
                <ChartContainer config={{
                  agriculture: { label: "Agriculture", color: COLORS.emerald },
                  industry: { label: "Industry", color: COLORS.blue },
                  construction: { label: "Construction", color: COLORS.amber },
                  services: { label: "Services", color: COLORS.purple },
                }} className="h-[320px] w-full">
                  <AreaChart data={gdpBySector} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="services" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="construction" fill={COLORS.amber} stroke={COLORS.amber} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="industry" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="agriculture" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Quarterly GDP Growth */}
              <ChartCard title="Quarterly GDP Growth (2020–2025)" subtitle="QoQ growth rate %">
                <ChartContainer config={{ growthPct: { label: "Growth %", color: COLORS.emerald } }} className="h-[280px] w-full">
                  <BarChart data={gdpQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[-8, 6]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="growthPct" radius={[2, 2, 0, 0]}>
                      {gdpQuarterly.map((d, i) => (
                        <Cell key={i} fill={d.growthPct >= 0 ? COLORS.emerald : COLORS.red} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              {/* GDP per Capita */}
              <ChartCard title="GDP per Capita (2000–2024)" subtitle="Current USD">
                <ChartContainer config={{ perCapitaUsd: { label: "GDP/capita (USD)", color: COLORS.blue } }} className="h-[280px] w-full">
                  <AreaChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="perCapitaUsd" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          {/* ═══ PRICES & INFLATION ═══════════════════════════════════════════ */}
          <TabsContent value="inflation" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title="CPI (Apr 2026)" value="344.2" change={0.4} changeDir="up" icon={Scale} color={COLORS.red} />
              <KpiCard title="YoY Inflation" value="3.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.emerald} />
              <KpiCard title="Food Inflation" value="2.8" unit="%" change={-1.3} changeDir="down" icon={Package} color={COLORS.amber} />
              <KpiCard title="Core Inflation" value="2.8" unit="%" change={-0.7} changeDir="down" icon={Activity} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* CPI Monthly Trend */}
              <ChartCard title="Consumer Price Index — Monthly (2020–2026)" subtitle="Year-over-year inflation %">
                <ChartContainer config={cpiChartConfig} className="h-[340px] w-full">
                  <LineChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="yoyPct" stroke={COLORS.red} strokeWidth={2} dot={false} name="Total YoY" />
                    <Line type="monotone" dataKey="foodYoy" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Food YoY" />
                    <Line type="monotone" dataKey="coreYoy" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name="Core YoY" />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              {/* IPC Level */}
              <ChartCard title="CPI Index Level (2020–2026)" subtitle="Base year implied index">
                <ChartContainer config={{ ipc: { label: "IPC Index", color: COLORS.rose } }} className="h-[340px] w-full">
                  <AreaChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[200, 360]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="ipc" fill={COLORS.roseLight} stroke={COLORS.rose} strokeWidth={2} fillOpacity={0.5} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* CPI by Division Bar Chart */}
              <ChartCard title="Inflation by COICOP Division (2024)" subtitle="Year-over-year change by product group">
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

              {/* CPI Weights Pie */}
              <ChartCard title="CPI Basket Weights by Division" subtitle="Share in consumer basket">
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

            {/* PPI Chart */}
            <ChartCard title="Producer Price Index (IPPI) — Quarterly (2020–2025)" subtitle="Mining, Manufacturing, Energy">
              <ChartContainer config={{
                mining: { label: "Mining", color: COLORS.amber },
                manufacturing: { label: "Manufacturing", color: COLORS.blue },
                energy: { label: "Energy", color: COLORS.red },
              }} className="h-[300px] w-full">
                <LineChart data={ippiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="energy" stroke={COLORS.red} strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ TRADE & EXTERNAL BALANCE ════════════════════════════════════ */}
          <TabsContent value="trade" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title="Exports (2024)" value="48.5" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title="Imports (2024)" value="37.0" unit="bn $" change={6.3} changeDir="up" icon={Package} color={COLORS.red} />
              <KpiCard title="Trade Balance" value="11.5" unit="bn $" change={1.3} changeDir="up" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title="Hydrocarbon % Exports" value="80.0" unit="%" icon={Factory} color={COLORS.amber} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Annual Trade Flows */}
              <ChartCard title="External Trade (2000–2024)" subtitle="Exports, Imports, Balance — Billion USD">
                <ChartContainer config={tradeChartConfig} className="h-[340px] w-full">
                  <ComposedChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} />
                    <Line type="monotone" dataKey="balanceBn" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 2 }} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              {/* Hydrocarbon Share */}
              <ChartCard title="Hydrocarbon Share of Exports" subtitle="% of total export value">
                <ChartContainer config={{ hydroPct: { label: "Hydrocarbon %", color: COLORS.amerald } }} className="h-[340px] w-full">
                  <AreaChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[60, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="hydroPct" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.5} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Quarterly Trade */}
              <ChartCard title="Quarterly Trade Balance (2023–2025)" subtitle="Billion USD">
                <ChartContainer config={{
                  exportsBn: { label: "Exports", color: COLORS.emerald },
                  importsBn: { label: "Imports", color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              {/* Top Partners */}
              <ChartCard title="Top Trade Partners (2024)" subtitle="Exports vs Imports by country">
                <ChartContainer config={{
                  exports: { label: "Exports", color: COLORS.emerald },
                  imports: { label: "Imports", color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeByPartner} layout="vertical" margin={{ top: 5, right: 10, left: 65, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="partner" type="category" tick={{ fontSize: 10 }} tickLine={false} width={60} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exports" fill={COLORS.emerald} radius={[0, 4, 4, 0]} />
                    <Bar dataKey="imports" fill={COLORS.red} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>
          </TabsContent>

          {/* ═══ INDUSTRIAL PRODUCTION ═════════════════════════════════════════ */}
          <TabsContent value="industry" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title="IPI (Q2 2025)" value="114.5" change={1.8} changeDir="up" icon={Factory} color={COLORS.emerald} />
              <KpiCard title="Mining" value="108.0" change={1.4} changeDir="up" icon={Factory} color={COLORS.amber} />
              <KpiCard title="Manufacturing" value="109.0" change={1.8} changeDir="up" icon={Building2} color={COLORS.blue} />
              <KpiCard title="Energy" value="118.0" change={0.4} changeDir="up" icon={Activity} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title="Industrial Production Index (2020–2025)" subtitle="Mining, Manufacturing, Energy — Base 100 = 2019">
                <ChartContainer config={{
                  mining: { label: "Mining", color: COLORS.amber },
                  manufacturing: { label: "Manufacturing", color: COLORS.blue },
                  energy: { label: "Energy", color: COLORS.cyan },
                  ipi: { label: "IPI Total", color: COLORS.emerald },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[75, 125]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="energy" stroke={COLORS.cyan} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 2 }} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title="IPI vs IPPI Comparison (2020–2025)" subtitle="Industrial Production vs Producer Prices">
                <ChartContainer config={{
                  ipi: { label: "IPI (Production)", color: COLORS.emerald },
                  ippi: { label: "IPPI (Prices)", color: COLORS.red },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly.map((d, i) => ({
                    period: d.period, ipi: d.ipi, ippi: ippiQuarterly[i]?.ippi || 0
                  }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="ippi" stroke={COLORS.red} strokeWidth={2} dot={false} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Construction Index */}
            <ChartCard title="Construction Cost Index (2015–2024)" subtitle="Base 100 = 2014">
              <ChartContainer config={{ index: { label: "Construction Index", color: COLORS.amber } }} className="h-[250px] w-full">
                <BarChart data={constructionIndex} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[100, 170]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="index" fill={COLORS.amber} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ LABOR MARKET ═════════════════════════════════════════════════ */}
          <TabsContent value="labor" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <KpiCard title="Unemployment" value="10.8" unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.red} />
              <KpiCard title="Activity Rate" value="44.0" unit="%" change={0.5} changeDir="up" icon={Activity} color={COLORS.emerald} />
              <KpiCard title="Youth Unemp." value="22.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.amber} />
              <KpiCard title="Female Partic." value="17.2" unit="%" change={0.4} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title="Informal Sector" value="43.0" unit="%" change={-0.8} changeDir="down" icon={Building2} color={COLORS.slate} />
              <KpiCard title="Employment/Pop" value="39.2" unit="%" change={0.6} changeDir="up" icon={TrendingUp} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title="Unemployment Rate (2010–2024)" subtitle="Total and youth (15-24) unemployment %">
                <ChartContainer config={{
                  unemploymentPct: { label: "Total %", color: COLORS.red },
                  youthUnemp: { label: "Youth (15-24) %", color: COLORS.amber },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="youthUnemp" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="unemploymentPct" stroke={COLORS.red} strokeWidth={2.5} dot={{ r: 3 }} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title="Activity Rate & Female Participation" subtitle="% of working-age population">
                <ChartContainer config={{
                  activityRate: { label: "Activity Rate", color: COLORS.emerald },
                  femalePartic: { label: "Female Partic.", color: COLORS.purple },
                  informalPct: { label: "Informal %", color: COLORS.slate },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[10, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="informalPct" stroke={COLORS.slate} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="femalePartic" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="activityRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Employment-to-Population Ratio */}
            <ChartCard title="Employment-to-Population Ratio (2010–2024)" subtitle="% of total population employed">
              <ChartContainer config={{ employmentPop: { label: "Emp/Pop %", color: COLORS.blue } }} className="h-[250px] w-full">
                <BarChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[35, 42]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="employmentPop" fill={COLORS.blue} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ DEMOGRAPHICS & SOCIAL ═══════════════════════════════════════ */}
          <TabsContent value="social" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title="Population" value="46.8" unit="M" icon={Users} color={COLORS.purple} />
              <KpiCard title="Growth Rate" value="1.4" unit="%" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title="Urbanization" value="74.5" unit="%" icon={Building2} color={COLORS.blue} />
              <KpiCard title="Fertility Rate" value="1.9" icon={Heart} color={COLORS.rose} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title="Population Growth (2000–2024)" subtitle="Millions of inhabitants">
                <ChartContainer config={{ populationM: { label: "Population (M)", color: COLORS.purple } }} className="h-[300px] w-full">
                  <AreaChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="populationM" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title="Population Pyramid (2024)" subtitle="By age group — Millions">
                <ChartContainer config={{ m: { label: "Male (M)", color: COLORS.blue }, f: { label: "Female (M)", color: COLORS.rose } }} className="h-[300px] w-full">
                  <BarChart data={populationByAge} layout="vertical" margin={{ top: 5, right: 10, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="group" type="category" tick={{ fontSize: 10 }} tickLine={false} width={40} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="f" fill={COLORS.rose} radius={[4, 0, 0, 4]} />
                    <Bar dataKey="m" fill={COLORS.blue} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Demographic Indicators */}
              <ChartCard title="Demographic Transition Indicators" subtitle="Birth rate, death rate, fertility rate">
                <ChartContainer config={{
                  birthRate: { label: "Birth Rate", color: COLORS.emerald },
                  deathRate: { label: "Death Rate", color: COLORS.red },
                  fertilityRate: { label: "Fertility Rate", color: COLORS.amber },
                }} className="h-[300px] w-full">
                  <LineChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="deathRate" stroke={COLORS.red} strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="fertilityRate" stroke={COLORS.amber} strokeWidth={2} dot={false} strokeDasharray="4 2" />
                    <Line type="monotone" dataKey="birthRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} />
                  </LineChart>
                </ChartContainer>
              </ChartCard>

              {/* Education */}
              <ChartCard title="Education Enrollment (2015–2024)" subtitle="Millions of students">
                <ChartContainer config={{
                  enrollmentPrimary: { label: "Primary", color: COLORS.emerald },
                  enrollmentSecondary: { label: "Secondary", color: COLORS.blue },
                  enrollmentHigher: { label: "Higher", color: COLORS.purple },
                }} className="h-[300px] w-full">
                  <AreaChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentHigher" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentSecondary" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentPrimary" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            {/* Literacy Rate */}
            <ChartCard title="Literacy Rate & Net Enrollment (2015–2024)" subtitle="Literacy %, Primary and Secondary net enrollment rates">
              <ChartContainer config={{
                literacyRate: { label: "Literacy Rate %", color: COLORS.emerald },
                primaryNet: { label: "Primary Net %", color: COLORS.blue },
                secondaryNet: { label: "Secondary Net %", color: COLORS.amber },
                higherGross: { label: "Higher Gross %", color: COLORS.purple },
              }} className="h-[280px] w-full">
                <LineChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="higherGross" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                  <Line type="monotone" dataKey="secondaryNet" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
                  <Line type="monotone" dataKey="primaryNet" stroke={COLORS.blue} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="literacyRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} />
                </LineChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ FISCAL & SAVINGS ═════════════════════════════════════════════ */}
          <TabsContent value="fiscal" className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <KpiCard title="Savings Rate" value="42.5" unit="% GDP" icon={DollarSign} color={COLORS.emerald} />
              <KpiCard title="Investment Rate" value="40.0" unit="% GDP" icon={Factory} color={COLORS.blue} />
              <KpiCard title="Debt/GDP" value="41.0" unit="%" change={-2.0} changeDir="down" icon={Scale} color={COLORS.amber} />
              <KpiCard title="Fiscal Deficit" value="1.0" unit="% GDP" change={-1.0} changeDir="down" icon={Activity} color={COLORS.purple} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title="Fiscal Balance (% of GDP)" subtitle="Revenue, Expenditure, Deficit">
                <ChartContainer config={{
                  revenuePctGdp: { label: "Revenue", color: COLORS.emerald },
                  expenditurePctGdp: { label: "Expenditure", color: COLORS.red },
                  deficitPctGdp: { label: "Deficit", color: COLORS.amber },
                }} className="h-[340px] w-full">
                  <ComposedChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="revenuePctGdp" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} />
                    <Bar dataKey="expenditurePctGdp" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} />
                    <Line type="monotone" dataKey="deficitPctGdp" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} />
                  </ComposedChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title="Savings vs Investment Rate" subtitle="% of GDP">
                <ChartContainer config={{
                  savingsRate: { label: "Savings Rate", color: COLORS.emerald },
                  investRate: { label: "Investment Rate", color: COLORS.blue },
                }} className="h-[340px] w-full">
                  <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[30, 55]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="investRate" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} />
                    <Area type="monotone" dataKey="savingsRate" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.4} />
                  </AreaChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title="Public Debt to GDP Ratio (2010–2024)" subtitle="% of GDP">
              <ChartContainer config={{ debtPctGdp: { label: "Debt/GDP %", color: COLORS.red } }} className="h-[280px] w-full">
                <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 50]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="debtPctGdp" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.5} />
                </AreaChart>
              </ChartContainer>
            </ChartCard>
          </TabsContent>

          {/* ═══ REGIONAL ═════════════════════════════════════════════════════ */}
          <TabsContent value="regional" className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ChartCard title="Top 10 Wilayas by GDP Share (2023)" subtitle="Contribution to national GDP">
                <ChartContainer config={{ gdpShare: { label: "GDP Share %", color: COLORS.emerald } }} className="h-[380px] w-full">
                  <BarChart data={wilayaData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 11 }} tickLine={false} width={75} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="gdpShare" fill={COLORS.emerald} radius={[0, 4, 4, 0]}>
                      {wilayaData.map((_, i) => (
                        <Cell key={i} fill={[COLORS.emerald, COLORS.blue, COLORS.purple, COLORS.amber, COLORS.cyan, COLORS.rose, COLORS.teal, COLORS.orange, COLORS.slate, COLORS.red][i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>

              <ChartCard title="Unemployment Rate by Wilaya (2023)" subtitle="Top 10 wilayas">
                <ChartContainer config={{ unemployment: { label: "Unemployment %", color: COLORS.red } }} className="h-[380px] w-full">
                  <BarChart data={wilayaData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 18]} />
                    <YAxis dataKey="wilaya" type="category" tick={{ fontSize: 11 }} tickLine={false} width={75} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="unemployment" radius={[0, 4, 4, 0]}>
                      {wilayaData.map((d) => (
                        <Cell key={d.wilaya} fill={d.unemployment >= 13 ? COLORS.red : d.unemployment >= 11 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ChartCard>
            </div>

            <ChartCard title="Population vs GDP Scatter (2023)" subtitle="Top 10 wilayas — bubble size = unemployment rate">
              <ChartContainer config={{
                x: { label: "Population (K)", color: COLORS.blue },
                y: { label: "GDP Share %", color: COLORS.emerald },
              }} className="h-[350px] w-full">
                <ScatterChart margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="populationK" name="Population (K)" tick={{ fontSize: 11 }} tickLine={false} label={{ value: "Population (thousands)", position: "bottom", fontSize: 11 }} />
                  <YAxis dataKey="gdpShare" name="GDP Share %" tick={{ fontSize: 11 }} tickLine={false} label={{ value: "GDP Share %", angle: -90, position: "insideLeft", fontSize: 11 }} />
                  <ZAxis dataKey="unemployment" range={[80, 400]} name="Unemployment %" />
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
        </Tabs>

        {/* Source footer */}
        <Separator className="my-6" />
        <footer className="text-center text-xs text-muted-foreground pb-4">
          <p>Source: Office National des Statistiques (ONS) — www.ons.dz | All data from ONS publications (IPC, IPI, IPPI, CNT, Commerce Extérieur, Comptes Economiques, ENEM, RGPH)</p>
        </footer>
      </main>
    </div>
  );
}