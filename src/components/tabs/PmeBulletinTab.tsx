"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { ChartCard } from "@/components/chart-card";
import {
  Card, CardContent,
} from "@/components/ui/card";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid,
  Line, LineChart, Pie, PieChart, Cell,
  XAxis, YAxis,
} from "recharts";
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Users, Building2, Factory, Briefcase, FileText,
  Shield, MapPin, Activity, BarChart3, ChevronRight,
} from "lucide-react";
import {
  pmeKeyIndicators, pmeByType, pmeBySector, pmeBySize,
  pmeMovements, cessationsByType, regionalShares,
  topWilayasPme, creditGuarantee, pmeGrowthRates,
  professionsLiberales,
} from "@/lib/pme-bulletin-data";

// ─── Color palette ──────────────────────────────────────────────────────
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

const PIE_COLORS = [C.blue, C.emerald, C.amber, C.purple, C.rose, C.cyan];

// ─── Mini Kpi Card ──────────────────────────────────────────────────────
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
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Sub-tab selector ───────────────────────────────────────────────────
const SUBTABS = ["overview", "structure", "dynamics", "geography", "credit"] as Array<"overview" | "structure" | "dynamics" | "geography" | "credit">;

function SubTabBar({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  const { t } = useI18n();
  const tabs = [
    { key: "overview", label: t.pmeSubOverview || "Overview", icon: Activity },
    { key: "structure", label: t.pmeSubStructure || "Structure", icon: Building2 },
    { key: "dynamics", label: t.pmeSubDynamics || "Dynamics", icon: TrendingUp },
    { key: "geography", label: t.pmeSubGeography || "Geography", icon: MapPin },
    { key: "credit", label: t.pmeSubCredit || "Credit", icon: Shield },
  ];
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 mb-4">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              isActive
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  OVERVIEW SUB-TAB
// ═══════════════════════════════════════════════════════════════════════════
function OverviewSection() {
  const { t } = useI18n();
  const latest = pmeKeyIndicators[pmeKeyIndicators.length - 1];
  const prev = pmeKeyIndicators[pmeKeyIndicators.length - 2];
  const growthPct = prev ? +((latest.totalPme / prev.totalPme - 1) * 100).toFixed(1) : null;

  const chartData = pmeKeyIndicators.map(d => ({
    year: d.year,
    total: d.totalPme,
    creations: d.creations,
    cessations: d.cessations,
  }));

  return (
    <>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Kpi
          title={t.pmeKpiTotal || "Total PME"}
          value={latest.totalPme.toLocaleString("fr-FR")}
          change={growthPct ?? undefined}
          changeDir={growthPct && growthPct > 0 ? "up" : "down"}
          icon={Building2} color={C.blue}
        />
        <Kpi
          title={t.pmeKpiCreations || "Creations (Latest)"}
          value={latest.creations.toLocaleString("fr-FR")}
          icon={TrendingUp} color={C.emerald}
        />
        <Kpi
          title={t.pmeKpiCessations || "Cessations (Latest)"}
          value={latest.cessations.toLocaleString("fr-FR")}
          icon={TrendingDown} color={C.red}
        />
        <Kpi
          title={t.pmeKpiDensity || "Density (PME/1000 hab)"}
          value={latest.density}
          change={prev ? +(latest.density - prev.density) : undefined}
          changeDir={(latest.density - (prev?.density ?? 0)) >= 0 ? "up" : "down"}
          icon={Users} color={C.purple}
        />
        <Kpi
          title={t.pmeKpiEmployment || "Employment"}
          value={latest.employment ? (latest.employment / 1000000).toFixed(1) : "N/A"}
          unit={latest.employment ? "M" : undefined}
          icon={Briefcase} color={C.amber}
        />
      </div>

      {/* Total PME Evolution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard
          title={t.pmeChartTotalEvolution || "Total PME Evolution"}
          subtitle={t.pmeChartTotalEvolutionSub || "2014–2023 | BIS"}
          data={chartData}
          unit="PME"
        >
          <ChartContainer config={{
            total: { label: t.pmeChartTotal || "Total PME", color: C.blue },
          }} className="h-[320px] w-full">
            <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="total" fill={C.blueLight} stroke={C.blue} strokeWidth={2} fillOpacity={0.4} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard
          title={t.pmeChartMovements || "Creations vs Cessations"}
          subtitle={t.pmeChartMovementsSub || "Annual PME movements"}
          data={chartData}
        >
          <ChartContainer config={{
            creations: { label: t.pmeChartCreations || "Creations", color: C.emerald },
            cessations: { label: t.pmeChartCessations || "Cessations", color: C.red },
          }} className="h-[320px] w-full">
            <BarChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="creations" fill={C.emerald} radius={[4, 4, 0, 0]} />
              <Bar dataKey="cessations" fill={C.red} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      {/* Density Evolution */}
      <ChartCard
        title={t.pmeChartDensity || "PME Density per 1000 Inhabitants"}
        subtitle={t.pmeChartDensitySub || "vs International Average (45)"}
        data={pmeKeyIndicators.filter(d => d.density).map(d => ({ year: d.year, density: d.density, intl: 45 }))}
      >
        <ChartContainer config={{
          density: { label: t.pmeChartPmeDensity || "PME Density", color: C.purple },
          intl: { label: t.pmeChartIntlAvg || "International Avg", color: C.slate },
        }} className="h-[300px] w-full">
          <LineChart data={pmeKeyIndicators.filter(d => d.density).map(d => ({ year: d.year, density: d.density, intl: 45 }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 50]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="density" stroke={C.purple} strokeWidth={2.5} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="intl" stroke={C.slate} strokeWidth={2} strokeDasharray="6 3" dot={false} />
          </LineChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  STRUCTURE SUB-TAB
// ═══════════════════════════════════════════════════════════════════════════
function StructureSection() {
  const { t } = useI18n();
  const latest = pmeByType[pmeByType.length - 1];
  const latestYear = latest.year;

  const typePieData = [
    { name: t.pmeTypeMorales || "Personnes Morales", value: latest.personnesMorales },
    { name: t.pmeTypePhysiques || "Personnes Physiques", value: latest.personnesPhysiques },
    { name: t.pmeTypeArtisanat || "Artisanat", value: latest.artisanat },
  ];

  const sectorData = pmeBySector.map(d => ({
    year: d.year,
    agriculture: d.agriculture,
    energy: d.energy,
    btph: d.btph,
    manufacturing: d.manufacturing,
    services: d.services,
  }));

  const sizeData = pmeBySize.map(d => ({
    year: d.year,
    tpe: d.tpe,
    pe: d.pe,
    me: d.me,
  }));

  const profData = professionsLiberales.map(d => ({
    year: d.year,
    sante: d.sante,
    justice: d.justice,
    agricoles: d.exploitationsAgricoles,
  }));

  return (
    <>
      {/* Type Distribution Pie + KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ChartCard title={t.pmeChartTypeDist || "PME by Legal Status"} subtitle={`${latestYear}`} data={typePieData}>
          <ChartContainer config={{
            morales: { label: t.pmeTypeMorales || "Morales", color: C.blue },
            physiques: { label: t.pmeTypePhysiques || "Physiques", color: C.emerald },
            artisanat: { label: t.pmeTypeArtisanat || "Artisanat", color: C.amber },
          }} className="h-[280px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie data={typePieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={50}>
                {typePieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.pmeChartSectorEvolution || "PME by Sector (Morales)"} subtitle={t.pmeChartSectorEvolutionSub || "2017–2023"} data={sectorData}>
          <ChartContainer config={{
            services: { label: t.pmeSectorServices || "Services", color: C.blue },
            btph: { label: t.pmeSectorBtph || "BTPH", color: C.emerald },
            manufacturing: { label: t.pmeSectorMfg || "Manufacturing", color: C.amber },
            agriculture: { label: t.pmeSectorAgri || "Agriculture", color: C.purple },
            energy: { label: t.pmeSectorEnergy || "Energy", color: C.rose },
          }} className="h-[280px] w-full">
            <AreaChart data={sectorData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" stackId="1" dataKey="services" fill={C.blue} stroke={C.blue} fillOpacity={0.5} />
              <Area type="monotone" stackId="1" dataKey="btph" fill={C.emerald} stroke={C.emerald} fillOpacity={0.5} />
              <Area type="monotone" stackId="1" dataKey="manufacturing" fill={C.amber} stroke={C.amber} fillOpacity={0.5} />
              <Area type="monotone" stackId="1" dataKey="agriculture" fill={C.purple} stroke={C.purple} fillOpacity={0.5} />
              <Area type="monotone" stackId="1" dataKey="energy" fill={C.rose} stroke={C.rose} fillOpacity={0.5} />
            </AreaChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.pmeChartSizeDist || "PME by Size"} subtitle={t.pmeChartSizeDistSub || "TPE / PE / ME"} data={sizeData}>
          <ChartContainer config={{
            tpe: { label: "TPE (1-9)", color: C.cyan },
            pe: { label: "PE (10-49)", color: C.blue },
            me: { label: "ME (50-250)", color: C.purple },
          }} className="h-[280px] w-full">
            <BarChart data={sizeData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="tpe" stackId="a" fill={C.cyan} />
              <Bar dataKey="pe" stackId="a" fill={C.blue} />
              <Bar dataKey="me" stackId="a" fill={C.purple} />
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      {/* Professions Liberales */}
      <ChartCard title={t.pmeChartProfessions || "Professions Liberales"} subtitle={t.pmeChartProfessionsSub || "Health / Justice / Agricultural Exploitations"} data={profData}>
        <ChartContainer config={{
          sante: { label: t.pmeProfSante || "Health", color: C.rose },
          justice: { label: t.pmeProfJustice || "Justice", color: C.purple },
          agricoles: { label: t.pmeProfAgri || "Agricultural Exploitations", color: C.emerald },
        }} className="h-[300px] w-full">
          <AreaChart data={profData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="sante" fill={C.roseLight} stroke={C.rose} strokeWidth={2} fillOpacity={0.3} />
            <Area type="monotone" dataKey="justice" fill={C.purpleLight} stroke={C.purple} strokeWidth={2} fillOpacity={0.3} />
            <Area type="monotone" dataKey="agricoles" fill={C.emeraldLight} stroke={C.emerald} strokeWidth={2} fillOpacity={0.3} />
          </AreaChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  DYNAMICS SUB-TAB
// ═══════════════════════════════════════════════════════════════════════════
function DynamicsSection() {
  const { t } = useI18n();

  const movData = pmeMovements.map(d => ({
    year: d.year,
    creations: d.creations,
    reactivations: d.reactivations,
    cessations: d.cessations,
    netGrowth: d.netGrowth,
  }));

  const growthData = pmeGrowthRates.filter(d => d.growthRate !== null).map(d => ({
    year: d.year,
    rate: d.growthRate,
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(() => {
          const l = pmeMovements[pmeMovements.length - 1];
          const p = pmeMovements[pmeMovements.length - 2];
          const cChange = p ? +((l.creations / p.creations - 1) * 100).toFixed(1) : null;
          return <>
            <Kpi title={t.pmeKpiTotalCreations || "Total Creations"} value={l.totalCreations.toLocaleString("fr-FR")} change={cChange ?? undefined} changeDir={cChange && cChange > 0 ? "up" : "down"} icon={TrendingUp} color={C.emerald} />
            <Kpi title={t.pmeKpiTotalCessations || "Total Cessations"} value={l.cessations.toLocaleString("fr-FR")} icon={TrendingDown} color={C.red} />
            <Kpi title={t.pmeKpiNetGrowth || "Net Growth"} value={l.netGrowth.toLocaleString("fr-FR")} icon={Activity} color={C.blue} />
            <Kpi title={t.pmeKpiSurvival || "Survival Rate"} value={p ? (100 - (l.cessations / l.totalCreations) * 100).toFixed(1) : "N/A"} unit={p ? "%" : undefined} icon={Shield} color={C.teal} />
          </>;
        })()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.pmeChartAllMovements || "PME Movements"} subtitle={t.pmeChartAllMovementsSub || "Creations, Reactivations, Cessations"} data={movData}>
          <ChartContainer config={{
            creations: { label: t.pmeChartCreations || "Creations", color: C.emerald },
            reactivations: { label: t.pmeChartReactivations || "Reactivations", color: C.blue },
            cessations: { label: t.pmeChartCessations || "Cessations", color: C.red },
          }} className="h-[320px] w-full">
            <BarChart data={movData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="creations" fill={C.emerald} radius={[3, 3, 0, 0]} />
              <Bar dataKey="reactivations" fill={C.blue} radius={[3, 3, 0, 0]} />
              <Bar dataKey="cessations" fill={C.red} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.pmeChartNetGrowth || "Net PME Growth"} subtitle={t.pmeChartNetGrowthSub || "Creations + Reactivations - Cessations"} data={movData}>
          <ChartContainer config={{
            netGrowth: { label: t.pmeChartNetGrowthVal || "Net Growth", color: C.blue },
          }} className="h-[320px] w-full">
            <BarChart data={movData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="netGrowth" radius={[4, 4, 0, 0]}>
                {movData.map((d, i) => (
                  <Cell key={i} fill={d.netGrowth >= 0 ? C.emerald : C.red} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      <ChartCard title={t.pmeChartGrowthRate || "PME Annual Growth Rate"} subtitle={t.pmeChartGrowthRateSub || "Year-over-year %"} data={growthData} unit="%">
        <ChartContainer config={{
          rate: { label: t.pmeChartGrowthPct || "Growth %", color: C.purple },
        }} className="h-[300px] w-full">
          <LineChart data={growthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="rate" stroke={C.purple} strokeWidth={2.5} dot={{ r: 4 }} />
          </LineChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  GEOGRAPHY SUB-TAB
// ═══════════════════════════════════════════════════════════════════════════
function GeographySection() {
  const { t } = useI18n();

  const regionPie = regionalShares.map(d => ({
    name: d.region === "Hauts Plateaux" ? (t.pmeRegionHp || "High Plateaus") : d.region === "Sud" ? (t.pmeRegionSouth || "South") : (t.pmeRegionNorth || "North"),
    value: d.pme,
    density: d.density,
  }));

  const wilayaData = topWilayasPme.map(d => ({
    wilaya: d.wilaya,
    pme: d.pme,
    share: d.share,
  }));

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-2">
        {regionalShares.map(d => (
          <Kpi
            key={d.region}
            title={d.region === "Hauts Plateaux" ? (t.pmeRegionHp || "High Plateaus") : d.region}
            value={d.pme.toLocaleString("fr-FR")}
            unit={t.pmeUnitDensity || "PME"}
            change={+d.density.toFixed(1)}
            changeDir="up"
            icon={MapPin}
            color={d.region === "Nord" ? C.blue : d.region === "Hauts Plateaux" ? C.emerald : C.amber}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard title={t.pmeChartRegional || "Regional Distribution"} subtitle={t.pmeChartRegionalSub || "Personnes Morales, 2014"} data={regionPie}>
          <ChartContainer config={{
            nord: { label: t.pmeRegionNorth || "North", color: C.blue },
            hp: { label: t.pmeRegionHp || "High Plateaus", color: C.emerald },
            sud: { label: t.pmeRegionSouth || "South", color: C.amber },
          }} className="h-[320px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie data={regionPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} innerRadius={55}>
                <Cell fill={C.blue} />
                <Cell fill={C.emerald} />
                <Cell fill={C.amber} />
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title={t.pmeChartRegionalDensity || "Regional PME Density"} subtitle={t.pmeChartRegionalDensitySub || "PME per 1000 inhabitants"} data={regionalShares.map(d => ({ region: d.region === "Hauts Plateaux" ? (t.pmeRegionHp || "High Plateaus") : d.region, density: d.density }))}>
          <ChartContainer config={{
            density: { label: t.pmeChartDensityVal || "Density", color: C.purple },
          }} className="h-[320px] w-full">
            <BarChart data={regionalShares.map(d => ({ region: d.region === "Hauts Plateaux" ? (t.pmeRegionHp || "HP") : d.region, density: d.density }))} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} domain={[0, 20]} />
              <YAxis type="category" dataKey="region" tick={{ fontSize: 12 }} tickLine={false} width={60} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="density" radius={[0, 4, 4, 0]}>
                <Cell fill={C.blue} />
                <Cell fill={C.emerald} />
                <Cell fill={C.amber} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      <ChartCard title={t.pmeChartTopWilayas || "Top Wilayas by PME Count"} subtitle={t.pmeChartTopWilayasSub || "2023 Estimates"} data={wilayaData}>
        <ChartContainer config={{
          pme: { label: t.pmeChartPmeCount || "PME Count", color: C.blue },
        }} className="h-[350px] w-full">
          <BarChart data={wilayaData} layout="vertical" margin={{ top: 5, right: 20, left: 5, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis type="category" dataKey="wilaya" tick={{ fontSize: 11 }} tickLine={false} width={90} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="pme" fill={C.blue} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  CREDIT SUB-TAB
// ═══════════════════════════════════════════════════════════════════════════
function CreditSection() {
  const { t } = useI18n();

  const guaranteeData = creditGuarantee.filter(d => d.amountGuaranteed).map(d => ({
    year: d.year,
    guaranteed: Math.round(d.amountGuaranteed / 1e9),
    solicited: d.amountSolicited ? Math.round(d.amountSolicited / 1e9) : null,
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {(() => {
          const l = creditGuarantee.filter(d => d.offers)[creditGuarantee.filter(d => d.offers).length - 1];
          return <>
            <Kpi title={t.pmeKpiGuarantees || "Guarantees Granted"} value={l ? l.offers.toLocaleString("fr-FR") : "N/A"} icon={Shield} color={C.blue} />
            <Kpi title={t.pmeKpiCertificates || "Certificates"} value={l ? l.certificates.toLocaleString("fr-FR") : "N/A"} icon={FileText} color={C.emerald} />
            <Kpi title={t.pmeKpiAmountGuaranteed || "Amount Guaranteed"} value={l ? Math.round(l.amountGuaranteed / 1e9).toLocaleString("fr-FR") : "N/A"} unit={t.pmeUnitBda || "BDA"} icon={BarChart3} color={C.amber} />
          </>;
        })()}
      </div>

      <ChartCard title={t.pmeChartGuaranteeAmount || "Credit Guarantee Amount"} subtitle={t.pmeChartGuaranteeAmountSub || "Billions DA"} data={guaranteeData} unit="BDA">
        <ChartContainer config={{
          guaranteed: { label: t.pmeChartGuaranteed || "Guaranteed (BDA)", color: C.blue },
          solicited: { label: t.pmeChartSolicited || "Solicited (BDA)", color: C.slate },
        }} className="h-[320px] w-full">
          <BarChart data={guaranteeData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="guaranteed" fill={C.blue} radius={[4, 4, 0, 0]} />
            {guaranteeData.some(d => d.solicited) && (
              <Bar dataKey="solicited" fill={C.slateLight} stroke={C.slate} radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        </ChartContainer>
      </ChartCard>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export default function PmeBulletinTab() {
  const [sub, setSub] = useState<"overview" | "structure" | "dynamics" | "geography" | "credit">("overview");
  const { t } = useI18n();

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-4 h-4 text-slate-500" />
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {t.pmeSource || "Source: BIS — Ministère de l'Industrie (2014–2023)"}
        </p>
      </div>
      <SubTabBar active={sub} onChange={(v) => setSub(v as Array<"overview" | "structure" | "dynamics" | "geography" | "credit">[0])} />
      {sub === "overview" && <OverviewSection />}
      {sub === "structure" && <StructureSection />}
      {sub === "dynamics" && <DynamicsSection />}
      {sub === "geography" && <GeographySection />}
      {sub === "credit" && <CreditSection />}
    </div>
  );
}
