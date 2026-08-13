"use client";

import React from "react";
import { useI18n } from "@/lib/i18n/context";
import { ChartCard } from "@/components/chart-card";
import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid,
  Line, LineChart, Pie, PieChart, Cell,
  ComposedChart, XAxis, YAxis, Legend, ResponsiveContainer,
} from "recharts";
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, BarChart3, Factory, Activity, Zap,
  Briefcase, Globe, Package, Truck, Target, Building2,
  Sprout, Hammer, Wrench, Droplets,
} from "lucide-react";
import {
  publicIndustrialGrowth,
  manufacturingValueAdded,
  manufacturingPctGDP,
  ipiAnnual,
  subSectorPerformance,
  fdiData,
  investmentProjects,
  smeData,
  publicSectorEmployment,
  industrialExports,
  agrofoodData,
  industryGdpShare,
  employmentBySector,
  oilPriceData,
  ipiQuarterlyGrowth,
  topIndustrialProducts,
  industryKPIs,
} from "@/lib/industry-data";

// ─── Color palette ──────────────────────────────────────────────────────────
const C = {
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

// ─── Mini Kpi Card (inline) ────────────────────────────────────────────────
function Kpi({ title, value, unit, change, changeDir, icon: Icon, color }: {
  title: string; value: string | number; unit?: string;
  change?: number; changeDir?: "up" | "down"; icon: React.ElementType; color: string;
}) {
  const isUp = changeDir === "up";
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate mr-1">{title}</p>
          <div className="p-1.5 rounded-md" style={{ backgroundColor: color + "15" }}>
            <Icon className="w-3.5 h-3.5" style={{ color }} />
          </div>
        </div>
        <div className="flex items-end gap-1.5 mt-1.5">
          <span className="text-xl font-bold" style={{ color }}>{value}</span>
          {unit && <span className="text-xs text-slate-400 mb-0.5">{unit}</span>}
        </div>
        {change !== undefined && changeDir && (
          <div className={`flex items-center gap-0.5 mt-1 text-xs ${isUp ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            <span>{Math.abs(change)}%</span>
            <span className="text-slate-400 dark:text-slate-500 ml-0.5">vs prev.</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Sub-tabs for the Industry KPI page ────────────────────────────────────
type SubTab = "overview" | "production" | "investment" | "exports" | "agrofood";

export function IndustryKpiTab() {
  const { t } = useI18n();
  const [sub, setSub] = React.useState<SubTab>("overview");

  const subTabs: { key: SubTab; label: string; icon: React.ElementType }[] = [
    { key: "overview", label: t.indKpiOverview || "Overview", icon: BarChart3 },
    { key: "production", label: t.indKpiProduction || "Production", icon: Factory },
    { key: "investment", label: t.indKpiInvestment || "Investment", icon: DollarSign },
    { key: "exports", label: t.indKpiExports || "Exports", icon: Globe },
    { key: "agrofood", label: t.indKpiAgrofood || "Agro-food", icon: Sprout },
  ];

  return (
    <div className="space-y-5">
      {/* Sub-tab navigation */}
      <div className="flex flex-wrap gap-2">
        {subTabs.map(st => (
          <button
            key={st.key}
            onClick={() => setSub(st.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              sub === st.key
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            <st.icon className="w-3.5 h-3.5" />
            {st.label}
          </button>
        ))}
      </div>

      {sub === "overview" && <OverviewSection />}
      {sub === "production" && <ProductionSection />}
      {sub === "investment" && <InvestmentSection />}
      {sub === "exports" && <ExportsSection />}
      {sub === "agrofood" && <AgrofoodSection />}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  OVERVIEW SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function OverviewSection() {
  const { t } = useI18n();
  return (
    <>
      {/* Row 1: Top KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Kpi title={t.indKpiMfgValue || "Mfg Value Added"} value={industryKPIs.mfgValueAdded2024} unit="$B" change={12.6} changeDir="up" icon={Factory} color={C.emerald} />
        <Kpi title={t.indKpiMfgGDP || "Mfg % of GDP"} value={industryKPIs.mfgPctGDP} unit="%" change={0.3} changeDir="up" icon={Activity} color={C.blue} />
        <Kpi title={t.indKpiIPI || "IPI Index (2024)"} value={industryKPIs.ipi2024} change={1.5} changeDir="up" icon={TrendingUp} color={C.purple} />
        <Kpi title={t.indKpiPubGrowth || "Public Prod. Growth"} value={industryKPIs.publicProdGrowthQ2_2025} unit="%" change={2.5} changeDir="up" icon={Zap} color={C.cyan} />
        <Kpi title={t.indKpiFDI || "FDI Inflow"} value={industryKPIs.fdi2024} unit="$B" change={20.0} changeDir="up" icon={Globe} color={C.amber} />
        <Kpi title={t.indKpiProjects || "Investment Projects"} value={industryKPIs.investmentProjects.toLocaleString()} change={17.6} changeDir="up" icon={Target} color={C.orange} />
      </div>

      {/* Row 2: Secondary KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
        <Kpi title={t.indKpiIndustryGDP || "Industry % GDP"} value={industryKPIs.industryPctGDP} unit="%" icon={Building2} color={C.teal} />
        <Kpi title={t.indKpiEmpIndustry || "Industry Employment"} value={industryKPIs.employmentIndustryPct} unit="%" change={0.3} changeDir="up" icon={Users} color={C.blue} />
        <Kpi title={t.indKpiSMEs || "Total SMEs (2021)"} value={(industryKPIs.smeTotal / 1000).toFixed(1) + "K"} change={13.4} changeDir="up" icon={Briefcase} color={C.emerald} />
        <Kpi title={t.indKpiNonHydroExp || "Non-Hydro Exports"} value={industryKPIs.nonHydroExports} unit="$B" change={-6.0} changeDir="down" icon={Truck} color={C.red} />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartMfgValue || "Manufacturing Value Added"} subtitle={t.indChartMfgValueSub || "World Bank, current USD billions"} unit="$B" data={manufacturingValueAdded}>
          <ChartContainer config={{
            value: { label: t.indChartMfgValue || "Value Added", color: C.emerald },
          }} className="h-[320px] w-full">
            <AreaChart data={manufacturingValueAdded} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="value" fill={C.emeraldLight} stroke={C.emerald} strokeWidth={2} fillOpacity={0.5} name={t.indChartMfgValue || "Value Added"} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartGDPShare || "GDP by Sector"} subtitle={t.indChartGDPShareSub || "Share of gross domestic product"} unit="%" data={industryGdpShare}>
          <ChartContainer config={{
            agriculture: { label: t.indSectorAgri || "Agriculture", color: C.emerald },
            industry: { label: t.indSectorIndustry || "Industry", color: C.blue },
            services: { label: t.indSectorServices || "Services", color: C.purple },
          }} className="h-[320px] w-full">
            <AreaChart data={industryGdpShare} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 60]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area type="monotone" stackId="1" dataKey="services" fill={C.purpleLight} stroke={C.purple} fillOpacity={0.7} name={t.indSectorServices || "Services"} />
              <Area type="monotone" stackId="1" dataKey="industry" fill={C.blueLight} stroke={C.blue} fillOpacity={0.7} name={t.indSectorIndustry || "Industry"} />
              <Area type="monotone" stackId="1" dataKey="agriculture" fill={C.emeraldLight} stroke={C.emerald} fillOpacity={0.7} name={t.indSectorAgri || "Agriculture"} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartEmployment || "Employment by Sector"} subtitle={t.indChartEmploymentSub || "% of total employment"} unit="%" data={employmentBySector}>
          <ChartContainer config={{
            agriculture: { label: t.indSectorAgri || "Agriculture", color: C.emerald },
            industry: { label: t.indSectorIndustry || "Industry", color: C.blue },
            services: { label: t.indSectorServices || "Services", color: C.purple },
          }} className="h-[320px] w-full">
            <BarChart data={employmentBySector} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar stackId="1" dataKey="services" fill={C.purple} name={t.indSectorServices || "Services"} />
              <Bar stackId="1" dataKey="industry" fill={C.blue} name={t.indSectorIndustry || "Industry"} />
              <Bar stackId="1" dataKey="agriculture" fill={C.emerald} name={t.indSectorAgri || "Agriculture"} />
            </BarChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartOilPrice || "Crude Oil Price"} subtitle={t.indChartOilPriceSub || "Algerian Saharan Blend, USD/barrel"} unit="$/bbl" data={oilPriceData}>
          <ChartContainer config={{
            price: { label: t.indChartOilPrice || "Oil Price", color: C.amber },
          }} className="h-[320px] w-full">
            <LineChart data={oilPriceData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[30, 120]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="price" stroke={C.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.indChartOilPrice || "Oil Price"} />
            </LineChart>
          </ChartContainer>
        </ChartCard>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  PRODUCTION SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function ProductionSection() {
  const { t } = useI18n();
  return (
    <>
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Kpi title={t.indKpiPubProd2024 || "Public Prod. 2024"} value="3.0" unit="%" change={-3.3} changeDir="down" icon={Factory} color={C.blue} />
        <Kpi title={t.indKpiPubProdQ2 || "Public Prod. Q2 2025"} value="6.3" unit="%" change={2.5} changeDir="up" icon={TrendingUp} color={C.emerald} />
        <Kpi title={t.indKpiIPI2024 || "IPI 2024"} value="114.5" change={1.5} changeDir="up" icon={Activity} color={C.purple} />
        <Kpi title={t.indKpiConstructMat || "Construction Mat. Q2"} value="16.7" unit="%" change={12.0} changeDir="up" icon={Hammer} color={C.amber} />
      </div>

      {/* Public Industrial Production Growth */}
      <ChartCard title={t.indChartPubGrowth || "Public Industrial Production Growth"} subtitle={t.indChartPubGrowthSub || "Annual % change, ONS"} unit="%" data={publicIndustrialGrowth}>
        <ChartContainer config={{
          growth: { label: t.indChartGrowth || "Growth %", color: C.emerald },
        }} className="h-[300px] w-full">
          <ComposedChart data={publicIndustrialGrowth} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="growth" fill={C.emeraldLight} stroke={C.emerald} strokeWidth={1} radius={[4, 4, 0, 0]} name={t.indChartGrowth || "Growth %"} />
          </ComposedChart>
        </ChartContainer>
      </ChartCard>

      {/* IPI by Sector + Quarterly Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartIPIBySector || "IPI by Sector"} subtitle={t.indChartIPIBySectorSub || "Base 2015 = 100"} data={ipiAnnual}>
          <ChartContainer config={{
            energy: { label: t.indSectorEnergy || "Energy", color: C.cyan },
            manufacturing: { label: t.indSectorMfg || "Manufacturing", color: C.blue },
            mining: { label: t.indSectorMining || "Mining", color: C.amber },
            construction: { label: t.indSectorConstruction || "Construction", color: C.orange },
          }} className="h-[320px] w-full">
            <LineChart data={ipiAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[75, 150]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="energy" stroke={C.cyan} strokeWidth={1.5} dot={false} name={t.indSectorEnergy || "Energy"} />
              <Line type="monotone" dataKey="manufacturing" stroke={C.blue} strokeWidth={2.5} dot={{ r: 2 }} name={t.indSectorMfg || "Manufacturing"} />
              <Line type="monotone" dataKey="mining" stroke={C.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.indSectorMining || "Mining"} />
              <Line type="monotone" dataKey="construction" stroke={C.orange} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.indSectorConstruction || "Construction"} />
            </LineChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartQuarterlyGrowth || "Quarterly IPI Growth"} subtitle={t.indChartQuarterlyGrowthSub || "Annual % change"} unit="%" data={ipiQuarterlyGrowth}>
          <ChartContainer config={{
            value: { label: t.indChartGrowth || "Growth %", color: C.blue },
          }} className="h-[320px] w-full">
            <BarChart data={ipiQuarterlyGrowth} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="period" tick={{ fontSize: 9 }} tickLine={false} angle={-45} textAnchor="end" height={50} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" name={t.indChartGrowth || "Growth %"} radius={[3, 3, 0, 0]}>
                {ipiQuarterlyGrowth.map((d, i) => (
                  <Cell key={i} fill={d.value >= 0 ? C.emerald : C.red} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      {/* Sub-sector performance Q2 2025 */}
      <ChartCard title={t.indChartSubSector || "Sub-Sector Performance Q2 2025"} subtitle={t.indChartSubSectorSub || "Year-on-year % change, ONS/APS"} unit="%" data={subSectorPerformance}>
        <ChartContainer config={{
          growth: { label: t.indChartGrowth || "Growth %", color: C.emerald },
        }} className="h-[380px] w-full">
          <BarChart data={subSectorPerformance} layout="vertical" margin={{ top: 5, right: 10, left: 120, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis dataKey="sector" type="category" tick={{ fontSize: 10 }} tickLine={false} width={115} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="growth" name={t.indChartGrowth || "Growth %"} radius={[0, 4, 4, 0]}>
              {subSectorPerformance.map((d, i) => (
                <Cell key={i} fill={d.growth >= 0 ? d.color : C.red} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </ChartCard>

      {/* Manufacturing % of GDP */}
      <ChartCard title={t.indChartMfgPctGDP || "Manufacturing % of GDP"} subtitle={t.indChartMfgPctGDPSub || "World Bank national accounts"} unit="%" data={manufacturingPctGDP}>
        <ChartContainer config={{
          pct: { label: t.indChartMfgPctGDP || "% of GDP", color: C.blue },
        }} className="h-[250px] w-full">
          <AreaChart data={manufacturingPctGDP} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[6, 12]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="pct" fill={C.blueLight} stroke={C.blue} strokeWidth={2} fillOpacity={0.4} name={t.indChartMfgPctGDP || "% of GDP"} />
          </AreaChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  INVESTMENT SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function InvestmentSection() {
  const { t } = useI18n();
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Kpi title={t.indKpiFDI2024 || "FDI 2024"} value="1.44" unit="$B" change={20.0} changeDir="up" icon={Globe} color={C.emerald} />
        <Kpi title={t.indKpiProjects2024 || "Total Projects 2024"} value="8,465" change={17.6} changeDir="up" icon={Target} color={C.blue} />
        <Kpi title={t.indKpiFDIProjects || "FDI Projects"} value="64" change={68.4} changeDir="up" icon={DollarSign} color={C.amber} />
        <Kpi title={t.indKpiNewIndProjects || "New Industrial Projects"} value="46" change={21.1} changeDir="up" icon={Factory} color={C.purple} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartFDI || "Foreign Direct Investment"} subtitle={t.indChartFDISub || "CNUCED, billion USD"} unit="$B" data={fdiData}>
          <ChartContainer config={{
            fdi: { label: t.indChartFDI || "FDI", color: C.emerald },
          }} className="h-[320px] w-full">
            <BarChart data={fdiData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 2]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="fdi" fill={C.emeraldLight} stroke={C.emerald} strokeWidth={1} radius={[4, 4, 0, 0]} name={t.indChartFDI || "FDI"} />
            </BarChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartProjects || "Investment Projects (AAPI)"} subtitle={t.indChartProjectsSub || "Registered investment intentions"} data={investmentProjects}>
          <ChartContainer config={{
            fdi: { label: t.indChartFDIProj || "FDI", color: C.amber },
            domestic: { label: t.indChartDomestic || "Domestic", color: C.blue },
          }} className="h-[320px] w-full">
            <BarChart data={investmentProjects} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar stackId="1" dataKey="domestic" fill={C.blue} name={t.indChartDomestic || "Domestic"} />
              <Bar stackId="1" dataKey="fdi" fill={C.amber} name={t.indChartFDIProj || "FDI"} />
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      {/* SMEs + Public Sector Employment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartSMEs || "SME / PME Evolution"} subtitle={t.indChartSMEsSub || "Ministry of Industry bulletin"} data={smeData}>
          <ChartContainer config={{
            total: { label: t.indChartSMETotal || "Total SMEs (thousands)", color: C.blue },
            jobs: { label: t.indChartSMEJobs || "Jobs (thousands)", color: C.emerald },
          }} className="h-[320px] w-full">
            <ComposedChart data={smeData.map(d => ({
              year: d.year,
              total: Math.round(d.total / 1000),
              jobs: Math.round(d.jobs / 1000),
            }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar yAxisId="left" dataKey="total" fill={C.blueLight} stroke={C.blue} strokeWidth={1} radius={[4, 4, 0, 0]} name={t.indChartSMETotal || "Total SMEs (K)"} />
              <Line yAxisId="right" type="monotone" dataKey="jobs" stroke={C.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.indChartSMEJobs || "Jobs (K)"} />
            </ComposedChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartPublicEmp || "Public Industrial Employment (SPMI)"} subtitle={t.indChartPublicEmpSub || "ONS, Ministry of Industry"} unit="employees" data={publicSectorEmployment}>
          <ChartContainer config={{
            employees: { label: t.indChartEmployees || "Employees", color: C.purple },
          }} className="h-[320px] w-full">
            <AreaChart data={publicSectorEmployment} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[19000, 24500]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="employees" fill={C.purpleLight} stroke={C.purple} strokeWidth={2} fillOpacity={0.4} name={t.indChartEmployees || "Employees"} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  EXPORTS SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function ExportsSection() {
  const { t } = useI18n();
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Kpi title={t.indKpiTotalExp || "Total Exports 2024"} value="42.8" unit="$B" change={-11.8} changeDir="down" icon={Globe} color={C.blue} />
        <Kpi title={t.indKpiHydroExp || "Hydrocarbon Exports"} value="35.0" unit="$B" change={-12.9} changeDir="down" icon={Droplets} color={C.cyan} />
        <Kpi title={t.indKpiNonHydroExp || "Non-Hydro Exports"} value="7.8" unit="$B" change={-6.0} changeDir="down" icon={Package} color={C.amber} />
        <Kpi title={t.indKpiHydroPct || "Hydrocarbon Share"} value="83" unit="%" icon={Activity} color={C.red} />
      </div>

      <ChartCard title={t.indChartExports || "Industrial Exports Breakdown"} subtitle={t.indChartExportsSub || "Billion USD"} unit="$B" data={industrialExports}>
        <ChartContainer config={{
          hydrocarbon: { label: t.indChartHydro || "Hydrocarbons", color: C.cyan },
          nonHydrocarbon: { label: t.indChartNonHydro || "Non-Hydrocarbons", color: C.amber },
        }} className="h-[320px] w-full">
          <BarChart data={industrialExports} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar stackId="1" dataKey="nonHydrocarbon" fill={C.amber} name={t.indChartNonHydro || "Non-Hydrocarbons"} />
            <Bar stackId="1" dataKey="hydrocarbon" fill={C.cyan} name={t.indChartHydro || "Hydrocarbons"} />
          </BarChart>
        </ChartContainer>
      </ChartCard>

      {/* Top Industrial Products */}
      <ChartCard title={t.indChartTopProducts || "Top Industrial Products (2024)"} subtitle={t.indChartTopProductsSub || "Billion USD"} data={topIndustrialProducts}>
        <ChartContainer config={{
          value: { label: t.indChartValue || "Value", color: C.blue },
        }} className="h-[380px] w-full">
          <BarChart data={topIndustrialProducts} layout="vertical" margin={{ top: 5, right: 10, left: 110, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis dataKey="product" type="category" tick={{ fontSize: 10 }} tickLine={false} width={105} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill={C.blueLight} stroke={C.blue} strokeWidth={1} radius={[0, 4, 4, 0]} name={t.indChartValue || "Value"} />
          </BarChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  AGRO-FOOD SECTION
// ═══════════════════════════════════════════════════════════════════════════════
function AgrofoodSection() {
  const { t } = useI18n();
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Kpi title={t.indKpiAgroEnt || "Agro-food Enterprises"} value="47,200" change={3.1} changeDir="up" icon={Factory} color={C.emerald} />
        <Kpi title={t.indKpiAgroJobs || "Agro-food Jobs"} value="1.6" unit="M" change={5.3} changeDir="up" icon={Users} color={C.blue} />
        <Kpi title={t.indKpiAgroValue || "Agro-food Value"} value="14.0" unit="$B" change={3.7} changeDir="up" icon={DollarSign} color={C.amber} />
        <Kpi title={t.indKpiAgroShare || "Share of Mfg Output"} value="55" unit="%" icon={Sprout} color={C.teal} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.indChartAgroEnterprises || "Agro-food Enterprises"} subtitle={t.indChartAgroEnterprisesSub || "Ministry of Industry"} data={agrofoodData}>
          <ChartContainer config={{
            enterprises: { label: t.indChartEnterprises || "Enterprises", color: C.emerald },
          }} className="h-[320px] w-full">
            <AreaChart data={agrofoodData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="enterprises" fill={C.emeraldLight} stroke={C.emerald} strokeWidth={2} fillOpacity={0.4} name={t.indChartEnterprises || "Enterprises"} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.indChartAgroValue || "Agro-food Production Value"} subtitle={t.indChartAgroValueSub || "Billion USD"} unit="$B" data={agrofoodData}>
          <ChartContainer config={{
            valueB: { label: t.indChartValue || "Value ($B)", color: C.amber },
          }} className="h-[320px] w-full">
            <AreaChart data={agrofoodData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="valueB" fill={C.amberLight} stroke={C.amber} strokeWidth={2} fillOpacity={0.4} name={t.indChartValue || "Value ($B)"} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>
      </div>

      <ChartCard title={t.indChartAgroJobs || "Agro-food Employment"} subtitle={t.indChartAgroJobsSub || "Direct jobs"} data={agrofoodData}>
        <ChartContainer config={{
          jobs: { label: t.indChartJobs || "Jobs", color: C.blue },
        }} className="h-[300px] w-full">
          <AreaChart data={agrofoodData.map(d => ({ year: d.year, jobsK: Math.round(d.jobs / 1000) }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="jobsK" fill={C.blueLight} stroke={C.blue} strokeWidth={2} fillOpacity={0.4} name={t.indChartJobs || "Jobs (K)"} />
          </AreaChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}
