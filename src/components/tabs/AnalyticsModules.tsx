"use client";

import { useState, useMemo } from "react";
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Scatter, ScatterChart, XAxis, YAxis, ZAxis,
} from "recharts";
import {
  GitBranch, Globe2, FileText, LayoutDashboard, Download, RotateCcw,
  TrendingUp, TrendingDown, Minus, ArrowUpRight, ArrowDownRight,
} from "lucide-react";

import {
  gdpAnnual, cpiMonthly, tradeAnnual, ipiQuarterly,
  laborMarket, fiscalData, hydrocarbons,
} from "@/lib/algeria-data";
import { correlationMatrix, scatterData, type IndicatorSeries } from "@/lib/correlation-engine";
import {
  allBenchmarks, countryMeta, latestSnapshot,
  type Country, type BenchmarkRow,
} from "@/lib/benchmarking-data";
import { ExportableChartCard } from "@/components/exportable-chart";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Dict { [key: string]: string }
interface Props { t: Dict }

type AnalyticsSubTab = "correlation" | "benchmark" | "reports" | "custom";

const COUNTRY_COLORS: Record<Country, string> = {
  DZ: "#059669", TN: "#d97706", EG: "#dc2626", SA: "#2563eb",
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
export function AnalyticsModules({ t }: Props) {
  const [subTab, setSubTab] = useState<AnalyticsSubTab>("benchmark");
  const [benchIndicator, setBenchIndicator] = useState<keyof typeof allBenchmarks>("gdpGrowth");
  const [selectedKpis, setSelectedKpis] = useState<string[]>([
    "gdpGrowth", "inflation", "unemployment", "tradeBalance",
  ]);

  return (
    <div className="space-y-4">
      {/* Sub-tab nav */}
      <div className="flex gap-2 flex-wrap">
        {([
          { key: "correlation" as const, icon: GitBranch, label: t.sadTabCorrelation || "Corrélations" },
          { key: "benchmark" as const, icon: Globe2, label: t.sadTabBenchmark || "Benchmarking" },
          { key: "reports" as const, icon: FileText, label: t.sadTabReports || "Rapports" },
          { key: "custom" as const, icon: LayoutDashboard, label: t.sadTabCustomDash || "Perso." },
        ]).map(tab => (
          <Button key={tab.key}
            variant={subTab === tab.key ? "default" : "outline"}
            size="sm"
            className={subTab === tab.key
              ? "bg-emerald-600 hover:bg-emerald-700 text-white"
              : "text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600"
            }
            onClick={() => setSubTab(tab.key)}
          >
            <tab.icon className="w-3.5 h-3.5 me-1.5" />
            {tab.label}
          </Button>
        ))}
      </div>

      {subTab === "correlation" && <CorrelationPanel t={t} />}
      {subTab === "benchmark" && <BenchmarkPanel t={t} benchIndicator={benchIndicator} setBenchIndicator={setBenchIndicator} />}
      {subTab === "reports" && <ReportsPanel t={t} />}
      {subTab === "custom" && <CustomDashboardPanel t={t} selectedKpis={selectedKpis} setSelectedKpis={setSelectedKpis} />}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. CORRELATION PANEL
// ═══════════════════════════════════════════════════════════════════════════════
function CorrelationPanel({ t }: { t: Dict }) {
  const indicators: IndicatorSeries[] = useMemo(() => [
    { name: t.sadCorrGDP || "Croissance PIB", data: gdpAnnual.map(d => ({ year: d.year, value: d.growthPct })) },
    { name: t.sadCorrInflation || "Inflation (déc.)", data: cpiMonthly.filter(d => d.m === 12).map(d => ({ year: d.year, value: d.yoyPct })) },
    { name: t.sadCorrUnemp || "Chômage", data: laborMarket.map(d => ({ year: d.year, value: d.unemploymentPct })) },
    { name: t.sadCorrTrade || "Solde Commercial", data: tradeAnnual.map(d => ({ year: d.year, value: d.balanceBn })) },
    { name: t.sadCorrIPI || "IPI", data: ipiQuarterly.filter(d => d.quarter === 4).map(d => ({ year: d.year, value: d.ipi })) },
    { name: t.sadCorrDebt || "Dette/PIB", data: fiscalData.map(d => ({ year: d.year, value: d.debtPctGdp })) },
    { name: t.sadCorrOilPrice || "Prix pétrole", data: hydrocarbons.map(d => ({ year: d.year, value: d.oilPrice })) },
    { name: t.sadCorrOilRev || "Rev. HC (Mds $)", data: hydrocarbons.map(d => ({ year: d.year, value: d.hydroRevBn })) },
  ], [t]);

  const pairs = useMemo(() => correlationMatrix(indicators), [indicators]);
  const [selectedPair, setSelectedPair] = useState(0);

  const strengthColor = (s: string) => {
    switch (s) {
      case "very-strong": return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30";
      case "strong": return "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30";
      case "moderate": return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30";
      case "weak": return "text-slate-500 bg-slate-50 dark:bg-slate-800/30";
      default: return "text-slate-400 bg-slate-50 dark:bg-slate-800/30";
    }
  };

  const currentPair = pairs[selectedPair] ?? pairs[0];
  const s1 = indicators.find(i => i.name === currentPair?.x);
  const s2 = indicators.find(i => i.name === currentPair?.y);
  const scatter = s1 && s2 ? scatterData(s1, s2) : [];

  return (
    <div className="space-y-4">
      {/* Correlation matrix */}
      <ExportableChartCard
        title={t.sadCorrTitle || "Matrice de corrélation"}
        subtitle={t.sadCorrSub || "Coefficients de Pearson entre les principaux indicateurs macroéconomiques (2010–2024)"}
        exportId="sad-correlation"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="p-1.5 text-left font-bold text-slate-500 dark:text-slate-400">{t.sadCorrTableInd || "Indicateur"}</th>
                {indicators.map(ind => (
                  <th key={ind.name} className="p-1.5 text-center font-bold text-slate-500 dark:text-slate-400 min-w-[50px]" title={ind.name}>
                    {ind.name.split(" ")[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {indicators.map((ind, i) => (
                <tr key={ind.name} className="border-t border-slate-100 dark:border-slate-700/50">
                  <td className="p-1.5 font-medium text-slate-700 dark:text-slate-300">{ind.name}</td>
                  {indicators.map((_, j) => {
                    if (i === j) return <td key={j} className="p-1.5 text-center"><span className="inline-block w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" /></td>;
                    const pairIdx = i < j
                      ? pairs.findIndex(p => p.x === indicators[i].name && p.y === indicators[j].name)
                      : pairs.findIndex(p => p.x === indicators[j].name && p.y === indicators[i].name);
                    const pair = pairIdx >= 0 ? pairs[pairIdx] : null;
                    if (!pair) return <td key={j} className="p-1.5 text-center">—</td>;
                    const bg = Math.abs(pair.r) >= 0.7 ? (pair.r > 0 ? "bg-emerald-200 dark:bg-emerald-800/50" : "bg-red-200 dark:bg-red-800/50")
                      : Math.abs(pair.r) >= 0.4 ? (pair.r > 0 ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-red-100 dark:bg-red-900/30")
                      : "bg-slate-50 dark:bg-slate-800/30";
                    return (
                      <td key={j} className={`p-1.5 text-center font-mono font-bold cursor-pointer hover:ring-2 hover:ring-emerald-400 rounded ${bg}`}
                        onClick={() => { const idx = pairs.findIndex(p => p.x === pair.x && p.y === pair.y); if (idx >= 0) setSelectedPair(idx); }}
                      >{pair.r > 0 ? "+" : ""}{pair.r.toFixed(2)}</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ExportableChartCard>

      {/* Top correlations list + Scatter plot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ExportableChartCard title={t.sadCorrTopPairs || "Corrélations notables"} subtitle={t.sadCorrTopPairsSub || "Classées par intensité"} exportId="sad-corr-pairs">
          <div className="max-h-[380px] overflow-y-auto space-y-1.5">
            {pairs
              .sort((a, b) => Math.abs(b.r) - Math.abs(a.r))
              .map((p, i) => (
                <div key={i}
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${selectedPair === i ? "ring-2 ring-emerald-400 bg-emerald-50 dark:bg-emerald-950/30" : "hover:bg-slate-50 dark:hover:bg-slate-800/30"}`}
                  onClick={() => setSelectedPair(i)}
                >
                  <Badge variant="outline" className={`text-[10px] px-1.5 py-0 border-0 ${strengthColor(p.strength)}`}>{p.r > 0 ? "+" : ""}{p.r.toFixed(3)}</Badge>
                  <span className="flex-1 text-xs font-medium truncate">{p.x}</span>
                  <span className="text-[10px] text-slate-400">↔</span>
                  <span className="flex-1 text-xs font-medium truncate text-right">{p.y}</span>
                  <Badge variant="outline" className="text-[9px] px-1 py-0">
                    R²={p.rSquared.toFixed(2)}
                  </Badge>
                </div>
              ))}
          </div>
        </ExportableChartCard>

        <ExportableChartCard title={`${currentPair?.x} ↔ ${currentPair?.y}`} subtitle={`r = ${currentPair?.r?.toFixed(3)} | R² = ${currentPair?.rSquared?.toFixed(3)}`} exportId="sad-corr-scatter">
          <ChartContainer
            config={{
              scatter: { label: `${currentPair?.x} / ${currentPair?.y}`, color: "#059669" },
            }}
            className="h-[350px] w-full"
          >
            <ScatterChart margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="x" name={currentPair?.x} tick={{ fontSize: 11 }} />
              <YAxis dataKey="y" name={currentPair?.y} tick={{ fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Scatter data={scatter} fill="#059669" r={5}>
                {scatter.map((_, i) => <Cell key={i} fill={i === scatter.length - 1 ? "#dc2626" : "#059669"} />)}
              </Scatter>
            </ScatterChart>
          </ChartContainer>
        </ExportableChartCard>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. BENCHMARK PANEL (Algérie vs Tunisie, Égypte, Arabie Saoudite)
// ═══════════════════════════════════════════════════════════════════════════════
function BenchmarkPanel({ t, benchIndicator, setBenchIndicator }: {
  t: Dict; benchIndicator: keyof typeof allBenchmarks; setBenchIndicator: (v: keyof typeof allBenchmarks) => void;
}) {
  const bench = allBenchmarks[benchIndicator];
  const latestRow = bench.data[bench.data.length - 1];
  const countries: Country[] = ["DZ", "TN", "EG", "SA"];

  const indicatorLabels: Record<string, string> = {
    gdpGrowth: t.sadBenchGrowth || "Croissance PIB (%)",
    inflation: t.sadBenchInflation || "Inflation (%)",
    unemployment: t.sadBenchUnemp || "Chômage (%)",
    tradeBalance: t.sadBenchTrade || "Solde Commercial (% PIB)",
    debtGdp: t.sadBenchDebt || "Dette/PIB (%)",
    fdi: t.sadBenchFdi || "IDE (% PIB)",
    gniPerCapita: t.sadBenchGni || "RNB/habitant ($)",
    energyAccess: t.sadBenchEnergy || "Accès électricité (%)",
  };

  // Ranking
  const ranking = countries.map(c => ({ country: c, value: latestRow[c] })).sort((a, b) => b.value - a.value);
  const dzRank = ranking.findIndex(r => r.country === "DZ") + 1;

  return (
    <div className="space-y-4">
      {/* Country selector + ranking summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-slate-200 dark:border-slate-700/60">
          <CardContent className="p-4">
            <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-3">
              {t.sadBenchSelect || "Sélectionner l'indicateur"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(allBenchmarks) as (keyof typeof allBenchmarks)[]).map(key => (
                <Button key={key} variant={benchIndicator === key ? "default" : "outline"} size="sm"
                  className={benchIndicator === key ? "bg-emerald-600 hover:bg-emerald-700 text-white text-[11px]" : "text-[11px]"}
                  onClick={() => setBenchIndicator(key)}
                >{indicatorLabels[key]}</Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-700/60">
          <CardContent className="p-4">
            <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-3">
              {t.sadBenchRanking || "Classement 2024"}
            </p>
            <div className="space-y-2">
              {ranking.map((r, i) => {
                const meta = countryMeta[r.country];
                const isDZ = r.country === "DZ";
                const lowerBetter = benchIndicator === "unemployment" || benchIndicator === "inflation" || benchIndicator === "debtGdp";
                const rank = lowerBetter ? ranking.length - i : i + 1;
                const dzActualRank = lowerBetter ? ranking.findIndex(x => x.country === "DZ") + 1 : dzRank;
                return (
                  <div key={r.country} className={`flex items-center gap-2 p-2 rounded-lg ${isDZ ? "bg-emerald-50 dark:bg-emerald-950/30 ring-1 ring-emerald-300 dark:ring-emerald-700" : ""}`}>
                    <span className="text-lg">{meta.flag}</span>
                    <span className={`flex-1 text-xs font-medium ${isDZ ? "text-emerald-700 dark:text-emerald-300 font-bold" : "text-slate-700 dark:text-slate-300"}`}>{meta.name}</span>
                    <span className={`text-sm font-bold ${isDZ ? "text-emerald-600 dark:text-emerald-400" : "text-slate-600 dark:text-slate-400"}`}>{r.value}{bench.unit}</span>
                    <Badge variant={isDZ ? "default" : "outline"} className={`text-[10px] ${isDZ ? "bg-emerald-600" : ""}`}>#{isDZ ? dzActualRank : (lowerBetter ? ranking.length - i : i + 1)}</Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison line chart */}
      <ExportableChartCard
        title={indicatorLabels[benchIndicator]}
        subtitle={t.sadBenchSub || "Comparaison 2015–2024 — Sources officielles (ONS, INS, CAPMAS, GASTAT)"}
        exportId="sad-benchmark-line"
      >
        <ChartContainer
          config={Object.fromEntries(countries.map(c => [c, { label: countryMeta[c].name, color: COUNTRY_COLORS[c] }]))}
          className="h-[350px] w-full"
        >
          <LineChart data={bench.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {countries.map(c => (
              <Line key={c} type="monotone" dataKey={c} stroke={COUNTRY_COLORS[c]} strokeWidth={c === "DZ" ? 3 : 1.5} dot={{ r: c === "DZ" ? 4 : 2 }} strokeDasharray={c === "DZ" ? undefined : "4 2"} />
            ))}
          </LineChart>
        </ChartContainer>
      </ExportableChartCard>

      {/* Multi-indicator radar comparison */}
      <ExportableChartCard
        title={t.sadBenchRadarTitle || "Vue comparative multi-indicateurs (2024)"}
        subtitle={t.sadBenchRadarSub || "Algérie vs pays de la région"}
        exportId="sad-benchmark-radar"
      >
        <ChartContainer
          config={Object.fromEntries(countries.map(c => [c, { label: countryMeta[c].name, color: COUNTRY_COLORS[c] }]))}
          className="h-[350px] w-full"
        >
          <BarChart data={([
            { ind: t.sadBenchGrowth || "Croissance PIB", ...Object.fromEntries(countries.map(c => [c, latestSnapshot[c].gdpGrowth])) },
            { ind: t.sadBenchUnemp || "Chômage", ...Object.fromEntries(countries.map(c => [c, latestSnapshot[c].unemployment])) },
            { ind: t.sadBenchInflation || "Inflation", ...Object.fromEntries(countries.map(c => [c, latestSnapshot[c].inflation])) },
            { ind: t.sadBenchDebt || "Dette/PIB", ...Object.fromEntries(countries.map(c => [c, latestSnapshot[c].debtGdp])) },
          ])} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis type="category" dataKey="ind" width={100} tick={{ fontSize: 11 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {countries.map(c => (
              <Bar key={c} dataKey={c} fill={COUNTRY_COLORS[c]} barSize={c === "DZ" ? 16 : 8} />
            ))}
          </BarChart>
        </ChartContainer>
      </ExportableChartCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. REPORTS PANEL
// ═══════════════════════════════════════════════════════════════════════════════
function ReportsPanel({ t }: { t: Dict }) {
  const reportSections = useMemo(() => [
      { title: t.sadRepMacro || "1. Synthèse macroéconomique", items: [
        `${t.sadRepGdpGrowth || "Croissance PIB"}: 3.6% (${t.sadRepUp || "en hausse"} vs 2.8% en 2023)`,
        `${t.sadRepGdpNom || "PIB nominal"}: 35 789 Mds DZD (267 Mds USD)`,
        `${t.sadRepNonHC || "Croissance hors-HC"}: 4.8% (moteur principal de la croissance)`,
      ]},
      { title: t.sadRepPrices || "2. Prix et inflation", items: [
        `${t.sadRepInflationDec || "Inflation déc. 2024"}: 4.0% (${t.sadRepDown || "en baisse"} de 7.4% en 2023)`,
        `${t.sadRepDeflation || "Déflation"}: -0.4% en juillet 2025 (première depuis des décennies)`,
        `${t.sadRepFood || "Inflation alimentaire"}: en nette décélération`,
      ]},
      { title: t.sadRepLabor || "3. Marché du travail", items: [
        `${t.sadRepUnemp || "Chômage"}: 9.7% (${t.sadRepDown || "en baisse"} de 11.3% en 2023, -1.6 pts)`,
        `${t.sadRepActivity || "Taux d'activité"}: 44.5% (en hausse)`,
        `${t.sadRepYouth || "Chômage jeunes"}: 19.5% (en amélioration)`,
      ]},
      { title: t.sadRepTrade || "4. Commerce extérieur", items: [
        `${t.sadRepExports || "Exportations"}: 49.7 Mds USD (92.8% HC)`,
        `${t.sadRepImports || "Importations"}: 47.8 Mds USD (en hausse)`,
        `${t.sadRepBalance || "Solde commercial"}: +1.9 Mds USD (excédent réduit)`,
      ]},
      { title: t.sadRepRisks || "5. Points de vigilance", items: [
        `⚠️ ${t.sadRepRisk1 || "Déflation"}: L'IPC a chuté sous 0% en juillet 2025`,
        `⚠️ ${t.sadRepRisk2 || "Dépendance HC"}: 92.8% des exportations sont des hydrocarbures`,
        `⚠️ ${t.sadRepRisk3 || "Informel"}: 43% de l'emploi informel`,
      ]},
  ], [t]);

  const handleExport = () => {
    const text = reportSections.map(s => `${s.title}\n${"─".repeat(40)}\n${s.items.map(i => `  • ${i}`).join("\n")}`).join("\n\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "rapport-economique-algerie.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <Card className="border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">{t.sadRepAutoTitle || "Rapport économique automatique — T3 2025"}</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">{t.sadRepAutoSub || "Synthèse des indicateurs clés basée sur les données officielles ONS"}</p>
          </div>
          <Button variant="outline" size="sm" className="text-emerald-700 border-emerald-300" onClick={handleExport}>
            <Download className="w-3.5 h-3.5 me-1.5" />
            {t.sadRepExport || "Exporter"}
          </Button>
        </CardContent>
      </Card>

      {reportSections.map((section, i) => (
        <ExportableChartCard key={i} title={section.title} exportId={`sad-report-${i}`}>
          <div className="space-y-2">
            {section.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                <span className={`text-xs mt-0.5 ${item.startsWith("⚠️") ? "text-red-500" : "text-emerald-500"}`}>●</span>
                <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{item.replace("⚠️ ", "")}</span>
              </div>
            ))}
          </div>
        </ExportableChartCard>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. CUSTOM DASHBOARD PANEL
// ═══════════════════════════════════════════════════════════════════════════════
const ALL_CUSTOM_KPIS = [
  { key: "gdpGrowth", label: "Croissance PIB", getValue: () => 3.6, unit: "%", dir: "up" as const, icon: TrendingUp },
  { key: "inflation", label: "Inflation", getValue: () => 1.8, unit: "%", dir: "down" as const, icon: TrendingDown },
  { key: "unemployment", label: "Chômage", getValue: () => 9.7, unit: "%", dir: "down" as const, icon: TrendingDown },
  { key: "tradeBalance", label: "Solde Commercial", getValue: () => 1.9, unit: "Mds $", dir: "up" as const, icon: TrendingUp },
  { key: "debtGdp", label: "Dette/PIB", getValue: () => 41.0, unit: "%", dir: "down" as const, icon: TrendingDown },
  { key: "population", label: "Population", getValue: () => 46.3, unit: "M", dir: "up" as const, icon: TrendingUp },
  { key: "ipi", label: "IPI", getValue: () => 117.2, unit: "", dir: "up" as const, icon: TrendingUp },
  { key: "hydrocarbonShare", label: "Part HC exports", getValue: () => 92.8, unit: "%", dir: "down" as const, icon: TrendingDown },
  { key: "fiscalRevenue", label: "Recettes fiscales", getValue: () => 36.8, unit: "% PIB", dir: "up" as const, icon: TrendingUp },
  { key: "savingsRate", label: "Taux d'épargne", getValue: () => 42.5, unit: "%", dir: "up" as const, icon: TrendingUp },
  { key: "nonHCGrowth", label: "Croissance hors-HC", getValue: () => 4.8, unit: "%", dir: "up" as const, icon: TrendingUp },
  { key: "informalPct", label: "Emploi informel", getValue: () => 43.0, unit: "%", dir: "down" as const, icon: TrendingDown },
];

function CustomDashboardPanel({ t, selectedKpis, setSelectedKpis }: {
  t: Dict; selectedKpis: string[]; setSelectedKpis: (v: string[]) => void;
}) {
  const toggleKpi = (key: string) => {
    setSelectedKpis(selectedKpis.includes(key)
      ? selectedKpis.filter(k => k !== key)
      : [...selectedKpis, key]
    );
  };

  return (
    <div className="space-y-4">
      <Card className="border-slate-200 dark:border-slate-700/60">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
              {t.sadCustomSelect || "Sélectionner vos indicateurs"}
            </p>
            <Badge variant="outline" className="text-[10px]">
              {selectedKpis.length}/{ALL_CUSTOM_KPIS.length} {t.sadCustomSelected || "sélectionnés"}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ALL_CUSTOM_KPIS.map(kpi => (
              <Button key={kpi.key} variant={selectedKpis.includes(kpi.key) ? "default" : "outline"} size="sm"
                className={selectedKpis.includes(kpi.key)
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white text-[11px]" : "text-[11px]"}
                onClick={() => toggleKpi(kpi.key)}
              >
                <kpi.icon className="w-3 h-3 me-1" />
                {kpi.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected KPIs grid */}
      {selectedKpis.length === 0 ? (
        <Card className="border-dashed border-slate-300 dark:border-slate-600">
          <CardContent className="p-8 text-center text-muted-foreground">
            <LayoutDashboard className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p className="text-sm">{t.sadCustomEmpty || "Sélectionnez au moins un indicateur pour construire votre tableau de bord"}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ALL_CUSTOM_KPIS.filter(k => selectedKpis.includes(k.key)).map(kpi => (
            <Card key={kpi.key} className="border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/80">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                    <kpi.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">{kpi.label}</span>
                </div>
                <p className="text-xl font-bold text-foreground">{kpi.getValue()}<span className="text-xs text-slate-400 ms-1 font-normal">{kpi.unit}</span></p>
                <p className="text-[10px] text-muted-foreground mt-1">{t.sadCustomDir || "Direction"}: {kpi.dir === "up" ? (t.sadCustomUp || "Hausse souhaitée") : (t.sadCustomDown || "Baisse souhaitée")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Mini charts for selected KPIs */}
      {selectedKpis.length >= 2 && (
        <ExportableChartCard title={t.sadCustomChart || "Évolution des indicateurs sélectionnés"} exportId="sad-custom-chart">
          <ChartContainer
            config={{ value: { label: t.sadCustomChartLabel || "Valeur", color: "#059669" } }}
            className="h-[300px] w-full"
          >
            <BarChart data={ALL_CUSTOM_KPIS
              .filter(k => selectedKpis.includes(k.key))
              .map(k => ({ name: k.label, value: k.getValue(), fill: k.dir === "up" ? "#059669" : "#d97706" }))
            } layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 11 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {ALL_CUSTOM_KPIS.filter(k => selectedKpis.includes(k.key)).map((_, i) => (
                  <Cell key={i} fill={_.dir === "up" ? "#059669" : "#d97706"} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ExportableChartCard>
      )}
    </div>
  );
}
