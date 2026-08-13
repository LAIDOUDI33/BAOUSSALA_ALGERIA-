"use client";

import { useState, useMemo } from "react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis,
  ScatterChart, Scatter, ZAxis, PieChart, Pie, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Line, LineChart, AreaChart, Area,
} from "recharts";
import { MapPin, Users, Ruler, Grid3x3, Building, Search, ArrowUpDown, Filter } from "lucide-react";
import {
  wilayas, totalArea, totalPopulation, totalDairas, totalCommunes, avgDensity,
  top10Population, top10Density, top10Area, legacyWilayas, newWilayas, regions,
  type Wilaya,
} from "@/lib/wilaya-data";

// ─── Color palette ────────────────────────────────────────────────────────────
const C = {
  green: "#059669", greenLight: "#d1fae5",
  blue: "#2563eb", blueLight: "#dbeafe",
  red: "#dc2626", redLight: "#fee2e2",
  amber: "#d97706", amberLight: "#fef3c7",
  purple: "#7c3aed", purpleLight: "#ede9fe",
  cyan: "#0891b2", cyanLight: "#cffafe",
  rose: "#e11d48", teal: "#0d9488",
  orange: "#ea580c", slate: "#475569",
};

const CHART_COLORS = [C.green, C.blue, C.amber, C.purple, C.cyan, C.rose, C.teal, C.orange, C.red, C.slate];

// ─── Types ────────────────────────────────────────────────────────────────────
type SortKey = "code" | "name" | "population" | "density" | "area" | "dairas" | "communes";
type SortDir = "asc" | "desc";

interface Props {
  t: Record<string, string>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1) + "K";
  return n.toLocaleString();
}

function fmtArea(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M km²";
  if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1) + ",000 km²";
  return n + " km²";
}

function densityColor(d: number): string {
  if (d >= 500) return C.red;
  if (d >= 200) return C.amber;
  if (d >= 50) return C.blue;
  if (d >= 10) return C.cyan;
  return C.slate;
}

// ─── KPI Cards ─────────────────────────────────────────────────────────────────
function KpiCard({ title, value, unit, icon: Icon, color, sub }: {
  title: string; value: string; unit?: string; icon: React.ElementType; color: string; sub?: string;
}) {
  return (
    <Card className="border border-slate-200/80 dark:border-slate-700/60 shadow-sm bg-white dark:bg-slate-800/80">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground font-medium leading-tight">{title}</span>
          <div className="p-2 rounded-xl" style={{ backgroundColor: color + "20" }}>
            <Icon className="w-4 h-4" style={{ color }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold tracking-tight">{value}</span>
          {unit && <span className="text-sm text-muted-foreground font-medium">{unit}</span>}
        </div>
        {sub && <p className="text-[11px] text-muted-foreground mt-1">{sub}</p>}
      </CardContent>
    </Card>
  );
}

// ─── Chart Card wrapper ───────────────────────────────────────────────────────
function CCard({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WilayaMapTab({ t }: Props) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("code");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filterStatus, setFilterStatus] = useState<"all" | "legacy" | "new">("all");
  const [subTab, setSubTab] = useState("table");

  // ─── Filter & Sort ───────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let data = [...wilayas];
    if (filterStatus === "legacy") data = data.filter(w => !w.isNew);
    if (filterStatus === "new") data = data.filter(w => w.isNew);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(w =>
        w.name.toLowerCase().includes(q) ||
        w.nameEn.toLowerCase().includes(q) ||
        w.nameAr.includes(q) ||
        String(w.code).includes(q)
      );
    }
    data.sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      if (typeof va === "string" && typeof vb === "string") return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      return sortDir === "asc" ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return data;
  }, [search, sortKey, sortDir, filterStatus]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  const SortIcon = ({ col }: { col: SortKey }) => (
    <ArrowUpDown className={`w-3 h-3 ml-1 inline ${sortKey === col ? "text-emerald-600" : "text-slate-400"}`} />
  );

  // ─── Chart data ──────────────────────────────────────────────────────────
  const popBarData = top10Population.map(w => ({ name: w.name, pop: w.population, code: w.code }));
  const densityBarData = top10Density.map(w => ({ name: w.name, density: w.density, code: w.code }));
  const areaBarData = top10Area.map(w => ({ name: w.name, area: w.area, code: w.code }));

  // Scatter: area vs density (bubble = population)
  const scatterData = wilayas.filter(w => !w.isNew).map(w => ({
    name: w.name, x: w.area, y: w.density, z: w.population, code: w.code,
  }));

  // Region pie data
  const regionPieData = regions.map(r => ({ name: r.name, value: r.population, fill: CHART_COLORS[regions.indexOf(r) % CHART_COLORS.length] }));

  // Area distribution pie
  const areaPieData = regions.map(r => ({ name: r.name, value: r.area, fill: CHART_COLORS[regions.indexOf(r) % CHART_COLORS.length] }));

  // Density distribution histogram
  const densityBuckets = useMemo(() => {
    const ranges = [
      { label: t.wilayaDens0, min: 0, max: 10 },
      { label: t.wilayaDens10, min: 10, max: 50 },
      { label: t.wilayaDens50, min: 50, max: 200 },
      { label: t.wilayaDens200, min: 200, max: 500 },
      { label: t.wilayaDens500, min: 500, max: 10000 },
    ];
    return ranges.map(r => ({ name: r.label, count: wilayas.filter(w => w.density >= r.min && w.density < r.max).length }));
  }, [t]);

  // New vs legacy comparison
  const comparisonData = [
    { name: t.wilayaLegacy, wilayas: legacyWilayas.length, pop: legacyWilayas.reduce((s, w) => s + w.population, 0), area: legacyWilayas.reduce((s, w) => s + w.area, 0), dairas: totalDairas, communes: totalCommunes - newWilayas.reduce((s, w) => s + w.communes, 0) },
    { name: t.wilayaNew2019, wilayas: newWilayas.length, pop: newWilayas.reduce((s, w) => s + w.population, 0), area: newWilayas.reduce((s, w) => s + w.area, 0), dairas: newWilayas.reduce((s, w) => s + w.dairas, 0), communes: newWilayas.reduce((s, w) => s + w.communes, 0) },
  ];

  return (
    <div className="space-y-5">
      {/* ─── KPIs ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <KpiCard title={t.wilayaKpiTotal} value={wilayas.length} unit={t.wilayaKpiWilayas} icon={MapPin} color={C.green} sub={t.wilayaKpiTotalSub} />
        <KpiCard title={t.wilayaKpiPop} value={fmt(totalPopulation)} unit={t.wilayaKpiHab} icon={Users} color={C.blue} sub={t.wilayaKpiPopSub} />
        <KpiCard title={t.wilayaKpiArea} value={fmtArea(totalArea)} icon={Ruler} color={C.amber} sub={t.wilayaKpiAreaSub} />
        <KpiCard title={t.wilayaKpiDairas} value={totalDairas} icon={Grid3x3} color={C.purple} sub={t.wilayaKpiDairasSub} />
        <KpiCard title={t.wilayaKpiCommunes} value={totalCommunes} icon={Building} color={C.cyan} sub={t.wilayaKpiCommunesSub} />
        <KpiCard title={t.wilayaKpiDensity} value={avgDensity.toFixed(1)} unit={t.wilayaKpiHabKm2} icon={Users} color={C.rose} sub={t.wilayaKpiDensitySub} />
      </div>

      {/* ─── Sub-tabs ──────────────────────────────────────────────────────── */}
      <Tabs value={subTab} onValueChange={setSubTab}>
        <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
          <TabsTrigger value="table" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-1.5 text-xs font-medium">
            <Building className="w-3 h-3 me-1.5" />{t.wilayaTabTable}
          </TabsTrigger>
          <TabsTrigger value="population" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-1.5 text-xs font-medium">
            <Users className="w-3 h-3 me-1.5" />{t.wilayaTabPop}
          </TabsTrigger>
          <TabsTrigger value="geography" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-1.5 text-xs font-medium">
            <MapPin className="w-3 h-3 me-1.5" />{t.wilayaTabGeo}
          </TabsTrigger>
          <TabsTrigger value="analysis" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-1.5 text-xs font-medium">
            <Grid3x3 className="w-3 h-3 me-1.5" />{t.wilayaTabAnalysis}
          </TabsTrigger>
        </TabsList>

        {/* ═══════ TABLE ══════════════════════════════════════════════════════ */}
        <TabsContent value="table" className="space-y-4">
          {/* Search + Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder={t.wilayaSearch} value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
            </div>
            <div className="flex gap-1.5">
              {(["all", "legacy", "new"] as Array<"all" | "legacy" | "new">).map(f => (
                <button key={f} onClick={() => setFilterStatus(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    filterStatus === f ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}>
                  {f === "all" ? t.wilayaFilterAll : f === "legacy" ? t.wilayaFilterLegacy : t.wilayaFilterNew}
                </button>
              ))}
            </div>
          </div>

          <Card className="border border-slate-200/80 dark:border-slate-700/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto max-h-[580px] overflow-y-auto">
              <Table>
                <TableHeader className="sticky top-0 bg-slate-50 dark:bg-slate-800 z-10">
                  <TableRow>
                    <TableHead className="text-xs cursor-pointer" onClick={() => toggleSort("code")}># <SortIcon col="code" /></TableHead>
                    <TableHead className="text-xs cursor-pointer" onClick={() => toggleSort("name")}>{t.wilayaColName} <SortIcon col="name" /></TableHead>
                    <TableHead className="text-xs cursor-pointer text-right" onClick={() => toggleSort("dairas")}>{t.wilayaColDairas} <SortIcon col="dairas" /></TableHead>
                    <TableHead className="text-xs cursor-pointer text-right" onClick={() => toggleSort("communes")}>{t.wilayaColCommunes} <SortIcon col="communes" /></TableHead>
                    <TableHead className="text-xs cursor-pointer text-right" onClick={() => toggleSort("area")}>{t.wilayaColArea} <SortIcon col="area" /></TableHead>
                    <TableHead className="text-xs cursor-pointer text-right" onClick={() => toggleSort("population")}>{t.wilayaColPop} <SortIcon col="population" /></TableHead>
                    <TableHead className="text-xs cursor-pointer text-right" onClick={() => toggleSort("density")}>{t.wilayaColDensity} <SortIcon col="density" /></TableHead>
                    <TableHead className="text-xs">{t.wilayaColStatus}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map(w => (
                    <TableRow key={w.code} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30">
                      <TableCell className="text-xs font-mono font-bold text-slate-500">{String(w.code).padStart(2, "0")}</TableCell>
                      <TableCell className="text-sm font-semibold">{w.name}</TableCell>
                      <TableCell className="text-sm text-right">{w.dairas}</TableCell>
                      <TableCell className="text-sm text-right">{w.communes}</TableCell>
                      <TableCell className="text-sm text-right font-mono">{w.area.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-right font-semibold">{w.population.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-right">
                        <span className="font-semibold" style={{ color: densityColor(w.density) }}>{w.density}</span>
                      </TableCell>
                      <TableCell>
                        {w.isNew ? <Badge variant="secondary" className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px]">{t.wilayaBadgeNew}</Badge> : <Badge variant="outline" className="text-[10px]">{t.wilayaBadgeHist}</Badge>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="px-4 py-2.5 border-t bg-slate-50/50 dark:bg-slate-800/50 text-xs text-muted-foreground">
              {filtered.length} / {wilayas.length} {t.wilayaShown}
            </div>
          </Card>
        </TabsContent>

        {/* ═══════ POPULATION ══════════════════════════════════════════════════ */}
        <TabsContent value="population" className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CCard title={t.wilayaChartTop10Pop} subtitle={t.wilayaChartTop10PopSub}>
              <ChartContainer config={{ pop: { label: t.wilayaColPop, color: C.blue } }} className="h-[340px] w-full">
                <BarChart data={popBarData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={100} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="pop" fill={C.blue} radius={[0, 4, 4, 0]} name={t.wilayaColPop}>
                    {popBarData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CCard>

            <CCard title={t.wilayaChartPopRegion} subtitle={t.wilayaChartPopRegionSub}>
              <ChartContainer config={Object.fromEntries(regionPieData.map(d => [d.name, { label: d.name, color: d.fill }]))} className="h-[340px] w-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie data={regionPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} innerRadius={50} paddingAngle={2} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={{ strokeWidth: 1 }} />
                </PieChart>
              </ChartContainer>
            </CCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CCard title={t.wilayaChartDensDist} subtitle={t.wilayaChartDensDistSub}>
              <ChartContainer config={{ count: { label: t.wilayaColCount, color: C.purple } }} className="h-[300px] w-full">
                <BarChart data={densityBuckets} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" name={t.wilayaColCount} radius={[4, 4, 0, 0]}>
                    {densityBuckets.map((d, i) => <Cell key={i} fill={[C.slate, C.cyan, C.blue, C.amber, C.red][i]} />)}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CCard>

            <CCard title={t.wilayaChartNewVsOld} subtitle={t.wilayaChartNewVsOldSub}>
              <ChartContainer config={{ legacy: { label: t.wilayaLegacy, color: C.green }, newW: { label: t.wilayaNew2019, color: C.amber } }} className="h-[300px] w-full">
                <BarChart data={comparisonData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="wilayas" fill={C.green} radius={[4, 4, 0, 0]} name={t.wilayaKpiWilayas}>
                    <Cell fill={C.green} /><Cell fill={C.amber} />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CCard>
          </div>
        </TabsContent>

        {/* ═══════ GEOGRAPHY ══════════════════════════════════════════════════ */}
        <TabsContent value="geography" className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CCard title={t.wilayaChartTop10Area} subtitle={t.wilayaChartTop10AreaSub}>
              <ChartContainer config={{ area: { label: t.wilayaColArea, color: C.amber } }} className="h-[340px] w-full">
                <BarChart data={areaBarData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={110} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="area" fill={C.amber} radius={[0, 4, 4, 0]} name={t.wilayaColArea}>
                    {areaBarData.map((_, i) => <Cell key={i} fill={[C.amber, C.orange, C.rose, C.red, C.purple, C.cyan, C.blue, C.green, C.teal, C.slate][i]} />)}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CCard>

            <CCard title={t.wilayaChartAreaRegion} subtitle={t.wilayaChartAreaRegionSub}>
              <ChartContainer config={Object.fromEntries(areaPieData.map(d => [d.name, { label: d.name, color: d.fill }]))} className="h-[340px] w-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie data={areaPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} innerRadius={50} paddingAngle={2} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={{ strokeWidth: 1 }} />
                </PieChart>
              </ChartContainer>
            </CCard>
          </div>

          <CCard title={t.wilayaChartScatter} subtitle={t.wilayaChartScatterSub}>
            <ChartContainer config={{ x: { label: t.wilayaColArea, color: C.blue }, y: { label: t.wilayaColDensity, color: C.red } }} className="h-[380px] w-full">
              <ScatterChart margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="x" type="number" name={t.wilayaColArea} tick={{ fontSize: 10 }} label={{ value: t.wilayaColArea + " (km²)", position: "insideBottom", offset: -2, fontSize: 10 }} />
                <YAxis dataKey="y" type="number" name={t.wilayaColDensity} tick={{ fontSize: 10 }} label={{ value: t.wilayaColDensity, angle: -90, position: "insideLeft", fontSize: 10 }} />
                <ZAxis dataKey="z" range={[40, 800]} name={t.wilayaColPop} />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name={t.wilayaChartScatter} data={scatterData} fill={C.green} fillOpacity={0.6} />
              </ScatterChart>
            </ChartContainer>
          </CCard>
        </TabsContent>

        {/* ═══════ ANALYSIS ═══════════════════════════════════════════════════ */}
        <TabsContent value="analysis" className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CCard title={t.wilayaChartTop10Dens} subtitle={t.wilayaChartTop10DensSub}>
              <ChartContainer config={{ density: { label: t.wilayaColDensity, color: C.red } }} className="h-[340px] w-full">
                <BarChart data={densityBarData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={90} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="density" fill={C.red} radius={[0, 4, 4, 0]} name={t.wilayaColDensity}>
                    {densityBarData.map((d, i) => <Cell key={i} fill={densityColor(d.density)} />)}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CCard>

            <CCard title={t.wilayaChartCommPerWilaya} subtitle={t.wilayaChartCommPerWilayaSub}>
              <ChartContainer config={{ communes: { label: t.wilayaColCommunes, color: C.teal } }} className="h-[340px] w-full">
                <BarChart data={[...wilayas].sort((a, b) => b.communes - a.communes).slice(0, 10).map(w => ({ name: w.name, communes: w.communes }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={90} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="communes" fill={C.teal} radius={[0, 4, 4, 0]} name={t.wilayaColCommunes} />
                </BarChart>
              </ChartContainer>
            </CCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CCard title={t.wilayaChartPopVsArea} subtitle={t.wilayaChartPopVsAreaSub}>
              <ChartContainer config={{ population: { label: t.wilayaColPop, color: C.blue }, area: { label: t.wilayaColArea, color: C.amber } }} className="h-[320px] w-full">
                <BarChart data={[...wilayas].sort((a, b) => b.population - a.population).slice(0, 15).map(w => ({ name: w.name, population: w.population, area: Math.round(w.area / 1000) }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 9 }} angle={-35} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="population" fill={C.blue} radius={[2, 2, 0, 0]} name={t.wilayaColPop} />
                  <Bar dataKey="area" fill={C.amber} radius={[2, 2, 0, 0]} name={t.wilayaColArea + " (x1000 km²)"} />
                </BarChart>
              </ChartContainer>
            </CCard>

            <CCard title={t.wilayaChartDairasVsComm} subtitle={t.wilayaChartDairasVsCommSub}>
              <ChartContainer config={{ dairas: { label: t.wilayaColDairas, color: C.purple }, communes: { label: t.wilayaColCommunes, color: C.cyan } }} className="h-[320px] w-full">
                <ScatterChart margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="dairas" type="number" name={t.wilayaColDairas} tick={{ fontSize: 10 }} label={{ value: t.wilayaColDairas, position: "insideBottom", offset: -2, fontSize: 10 }} />
                  <YAxis dataKey="communes" type="number" name={t.wilayaColCommunes} tick={{ fontSize: 10 }} label={{ value: t.wilayaColCommunes, angle: -90, position: "insideLeft", fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name={t.wilayaChartDairasVsComm} data={wilayas.map(w => ({ dairas: w.dairas, communes: w.communes, name: w.name }))} fill={C.purple} fillOpacity={0.6} />
                </ScatterChart>
              </ChartContainer>
            </CCard>
          </div>
        </TabsContent>
      </Tabs>

      <p className="text-xs text-muted-foreground">{t.wilayaSource}</p>
    </div>
  );
}
