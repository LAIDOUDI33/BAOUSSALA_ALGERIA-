"use client";

import { useState } from "react";
import { ChartCard } from "@/components/chart-card";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Line, LineChart, Bar, BarChart, CartesianGrid, Radar, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, Legend, Cell,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Globe, Users, DollarSign, Activity, Scale, Zap, Wifi, Heart, BarChart3 } from "lucide-react";

import {
  gdpGrowthComparison, inflationComparison, unemploymentComparison,
  gdpPerCapitaComparison, tradeOpennessComparison, fdiComparison,
  externalDebtComparison, lifeExpectancySnapshot, hdiComponents,
  sectorComposition, digitalIndicators, energyIndicators,
  fiscalComparison, benchmarkSummary, radarBenchmark,
  countryMeta, type Country,
} from "@/lib/benchmarking-data";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Dict { [key: string]: string; }
interface Props { t: Dict; }

const C = {
  dz: "#059669", dzLight: "#d1fae5",
  tn: "#2563eb", tnLight: "#dbeafe",
  eg: "#d97706", egLight: "#fef3c7",
  sa: "#7c3aed", saLight: "#ede9fe",
  rose: "#e11d48",
  red: "#dc2626",
  best: "#059669",
  worst: "#dc2626",
};

export function BenchmarkingTab({ t }: Props) {
  const [subTab, setSubTab] = useState<"overview" | "growth" | "social" | "digital" | "fiscal">("overview");

  const dz = countryMeta.DZ;
  const tn = countryMeta.TN;
  const eg = countryMeta.EG;
  const sa = countryMeta.SA;

  const tabList = [
    { key: "overview" as const, label: t.benchTabOverview || "Vue d'ensemble" },
    { key: "growth" as const, label: t.benchTabGrowth || "Croissance & Commerce" },
    { key: "social" as const, label: t.benchTabSocial || "Social & IDH" },
    { key: "digital" as const, label: t.benchTabDigital || "Numérique & Énergie" },
    { key: "fiscal" as const, label: t.benchTabFiscal || "Budget & Dette" },
  ];

  // ─── Helper: highlight Algeria's rank ───
  const rankBadge = (value: number, allValues: number[], lowerIsBetter = false) => {
    const sorted = lowerIsBetter ? [...allValues].sort((a, b) => a - b) : [...allValues].sort((a, b) => b - a);
    const rank = sorted.indexOf(value) + 1;
    const colors = rank === 1 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
      : rank === 2 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
      : rank === 3 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
      : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
    return <Badge className={`${colors} text-[10px] px-1.5 py-0 border-0`}>#{rank}</Badge>;
  };

  return (
    <div className="space-y-5">
      {/* Sub-tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabList.map(tab => (
          <button
            key={tab.key}
            onClick={() => setSubTab(tab.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              subTab === tab.key
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══════ OVERVIEW TAB ═══════ */}
      {subTab === "overview" && (
        <div className="space-y-5">
          {/* Country cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(["DZ", "TN", "EG", "SA"] as Country[]).map(code => {
              const c = countryMeta[code];
              const isDz = code === "DZ";
              const borderColor = code === "DZ" ? "border-emerald-500 dark:border-emerald-400" : "border-slate-200 dark:border-slate-700";
              return (
                <div key={code} className={`border-2 ${borderColor} rounded-xl p-4 bg-white dark:bg-slate-800/80 shadow-sm ${isDz ? "ring-2 ring-emerald-500/20" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <p className="font-bold text-sm">{c.name}</p>
                      <p className="text-[10px] text-muted-foreground">{c.region}</p>
                    </div>
                    {isDz && <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 text-[10px] ml-auto border-0">{t.benchFocus || "Référence"}</Badge>}
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-muted-foreground">{t.benchPop || "Population"}</span><span className="font-semibold">{c.populationM}M</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">{t.benchGdp || "PIB"}</span><span className="font-semibold">{c.gdpBn}B$</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">{t.benchGni || "RNB/hab"}</span><span className="font-semibold">{c.gniPerCapita}$</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">IDH</span><span className="font-semibold">{c.hdi}</span></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Radar Chart */}
          <ChartCard title={t.benchRadar || "Profil Comparatif"} subtitle={t.benchRadarSub || "Allemagne vs pairs — scores normalisés 0-100"} unit="Score" data={radarBenchmark}>
            <ChartContainer
              config={{ DZ: { label: dz.flag + " " + dz.name, color: C.dz }, TN: { label: tn.flag + " " + tn.name, color: C.tn }, EG: { label: eg.flag + " " + eg.name, color: C.eg }, SA: { label: sa.flag + " " + sa.name, color: C.sa } }}
              className="h-[350px] w-full"
            >
              <RadarChart data={radarBenchmark} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="axis" tick={{ fontSize: 10 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 9 }} />
                <Radar name={dz.flag + " " + dz.name} dataKey="DZ" stroke={C.dz} fill={C.dzLight} fillOpacity={0.4} strokeWidth={2} />
                <Radar name={tn.flag + " " + tn.name} dataKey="TN" stroke={C.tn} fill={C.tnLight} fillOpacity={0.2} strokeWidth={1.5} />
                <Radar name={eg.flag + " " + eg.name} dataKey="EG" stroke={C.eg} fill={C.egLight} fillOpacity={0.2} strokeWidth={1.5} />
                <Radar name={sa.flag + " " + sa.name} dataKey="SA" stroke={C.sa} fill={C.saLight} fillOpacity={0.2} strokeWidth={1.5} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </RadarChart>
            </ChartContainer>
          </ChartCard>

          {/* Summary table */}
          <ChartCard title={t.benchSummary || "Tableau de Synthese"} subtitle={t.benchSummarySub || "Classement sur 12 indicateurs clés"} unit="">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 px-2 font-semibold text-muted-foreground">{t.benchIndicator || "Indicateur"}</th>
                    <th className="text-center py-2 px-2 font-semibold" style={{ color: C.dz }}>{dz.flag} DZ</th>
                    <th className="text-center py-2 px-2 font-semibold" style={{ color: C.tn }}>{tn.flag} TN</th>
                    <th className="text-center py-2 px-2 font-semibold" style={{ color: C.eg }}>{eg.flag} EG</th>
                    <th className="text-center py-2 px-2 font-semibold" style={{ color: C.sa }}>{sa.flag} SA</th>
                    <th className="text-center py-2 px-2 font-semibold text-muted-foreground">{t.benchBest || "Meilleur"}</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkSummary.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="py-2 px-2 text-slate-700 dark:text-slate-300">{row.indicator}</td>
                      <td className="py-2 px-2 text-center font-semibold" style={{ color: C.dz }}>{row.DZ}</td>
                      <td className="py-2 px-2 text-center">{row.TN}</td>
                      <td className="py-2 px-2 text-center">{row.EG}</td>
                      <td className="py-2 px-2 text-center">{row.SA}</td>
                      <td className="py-2 px-2 text-center">
                        <span className="text-emerald-600 font-semibold">{row.best}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>
        </div>
      )}

      {/* ═══════ GROWTH & TRADE TAB ═══════ */}
      {subTab === "growth" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* GDP Growth */}
            <ChartCard title={t.benchGdpGrowth || "Croissance PIB"} subtitle={t.benchGdpGrowthSub || "% annuel — Source: BM"} unit="%" data={gdpGrowthComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <LineChart data={gdpGrowthComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[-10, 10]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="DZ" stroke={C.dz} strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="TN" stroke={C.tn} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="EG" stroke={C.eg} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="SA" stroke={C.sa} strokeWidth={1.5} dot={{ r: 2 }} />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            {/* GDP Per Capita */}
            <ChartCard title={t.benchGdpCapita || "PIB par Habitant"} subtitle={"USD courant — Banque Mondiale"} unit="$" data={gdpPerCapitaComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <LineChart data={gdpPerCapitaComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="DZ" stroke={C.dz} strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="TN" stroke={C.tn} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="EG" stroke={C.eg} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="SA" stroke={C.sa} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="6 3" />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            {/* Inflation */}
            <ChartCard title={t.benchInflation || "Inflation"} subtitle={"% annuel — IPC"} unit="%" data={inflationComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <LineChart data={inflationComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 35]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="DZ" stroke={C.dz} strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="TN" stroke={C.tn} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="EG" stroke={C.eg} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="SA" stroke={C.sa} strokeWidth={1.5} dot={{ r: 2 }} />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            {/* Trade Openness */}
            <ChartCard title={t.benchTrade || "Ouverture Commerciale"} subtitle={"% du PIB"} unit="% PIB" data={tradeOpennessComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <BarChart data={tradeOpennessComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="DZ" fill={C.dz} radius={[2, 2, 0, 0]} opacity={0.85} />
                  <Bar dataKey="TN" fill={C.tn} radius={[2, 2, 0, 0]} opacity={0.7} />
                  <Bar dataKey="EG" fill={C.eg} radius={[2, 2, 0, 0]} opacity={0.7} />
                  <Bar dataKey="SA" fill={C.sa} radius={[2, 2, 0, 0]} opacity={0.7} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            {/* Unemployment */}
            <ChartCard title={t.benchUnemp || "Chomage"} subtitle={"% de la population active"} unit="%" data={unemploymentComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <LineChart data={unemploymentComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 20]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="DZ" stroke={C.dz} strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="TN" stroke={C.tn} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="EG" stroke={C.eg} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="SA" stroke={C.sa} strokeWidth={1.5} dot={{ r: 2 }} />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            {/* FDI */}
            <ChartCard title={t.benchFdi || "IDE"} subtitle={"% du PIB"} unit="% PIB" data={fdiComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <BarChart data={fdiComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 3]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="DZ" fill={C.dz} radius={[2, 2, 0, 0]} opacity={0.85} />
                  <Bar dataKey="TN" fill={C.tn} radius={[2, 2, 0, 0]} opacity={0.7} />
                  <Bar dataKey="EG" fill={C.eg} radius={[2, 2, 0, 0]} opacity={0.7} />
                  <Bar dataKey="SA" fill={C.sa} radius={[2, 2, 0, 0]} opacity={0.7} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </div>
        </div>
      )}

      {/* ═══════ SOCIAL & HDI TAB ═══════ */}
      {subTab === "social" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Life Expectancy */}
            <ChartCard title={t.benchLifeExp || "Esperance de Vie"} subtitle={"2024 — annees a la naissance"} unit="Annees" data={lifeExpectancySnapshot}>
              <ChartContainer
                config={{ total: { label: "Total", color: "#059669" }, male: { label: "Homme", color: "#2563eb" }, female: { label: "Femme", color: "#e11d48" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={lifeExpectancySnapshot} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[65, 85]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="male" fill={C.tn} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="female" fill={C.rose} radius={[2, 2, 0, 0]} opacity={0.8} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            {/* HDI Components */}
            <ChartCard title={t.benchHdi || "Composantes IDH"} subtitle={"2023 — PNUD"} unit="Index" data={hdiComponents}>
              <ChartContainer
                config={{ lifeExp: { label: "Vie", color: "#059669" }, education: { label: "Education", color: "#2563eb" }, gni: { label: "RNB", color: "#d97706" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={hdiComponents} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 1.1]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="lifeExp" fill={C.dz} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="education" fill={C.tn} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="gni" fill={C.eg} radius={[2, 2, 0, 0]} opacity={0.8} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            {/* Sector Composition */}
            <ChartCard title={t.benchSectors || "Structure Sectorielle"} subtitle={"% PIB 2024"} unit="%" data={sectorComposition}>
              <ChartContainer
                config={{ agriculture: { label: "Agriculture", color: "#059669" }, industry: { label: "Industrie", color: "#2563eb" }, services: { label: "Services", color: "#d97706" }, hydrocarbons: { label: "Hydrocarbures", color: "#7c3aed" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={sectorComposition} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 70]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="agriculture" fill={C.dz} stackId="a" />
                  <Bar dataKey="industry" fill={C.tn} stackId="a" />
                  <Bar dataKey="services" fill={C.eg} stackId="a" />
                  <Bar dataKey="hydrocarbons" fill={C.sa} stackId="a" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            {/* Unemployment comparison bar */}
            <ChartCard title={t.benchUnempComp || "Chomage 2024"} subtitle={"% de la population active"} unit="%" data={unemploymentComparison.filter(d => d.year === 2024)}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <BarChart data={unemploymentComparison.filter(d => d.year === 2024)} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 18]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="DZ" fill={C.dz} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="TN" fill={C.tn} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="EG" fill={C.eg} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="SA" fill={C.sa} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </div>
        </div>
      )}

      {/* ═══════ DIGITAL & ENERGY TAB ═══════ */}
      {subTab === "digital" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Digital Indicators */}
            <ChartCard title={t.benchDigital || "Indicateurs Numeriques"} subtitle={"2024"} unit="%" data={digitalIndicators}>
              <ChartContainer
                config={{ internet: { label: "Internet", color: "#2563eb" }, mobile: { label: "Mobile", color: "#059669" }, broadband: { label: "Haut debit", color: "#7c3aed" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={digitalIndicators} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 135]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="internet" fill={C.tn} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="broadband" fill={C.sa} radius={[2, 2, 0, 0]} opacity={0.8} />
                </BarChart>
              </ChartContainer>
            </ChartCard>

            {/* Energy & CO2 */}
            <ChartCard title={t.benchEnergy || "Energie & CO2"} subtitle={"2024"} unit="" data={energyIndicators}>
              <ChartContainer
                config={{ renewableShare: { label: "Renouvelable %", color: "#059669" }, co2PerCapita: { label: "CO2 t/hab", color: "#dc2626" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={energyIndicators} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="renewableShare" fill={C.dz} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="co2PerCapita" fill={C.red} radius={[2, 2, 0, 0]} opacity={0.6} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </div>
        </div>
      )}

      {/* ═══════ FISCAL & DEBT TAB ═══════ */}
      {subTab === "fiscal" && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* External Debt */}
            <ChartCard title={t.benchDebt || "Dette Exterieure"} subtitle={"% du RNB"} unit="% RNB" data={externalDebtComparison}>
              <ChartContainer
                config={{ DZ: { label: dz.name, color: C.dz }, TN: { label: tn.name, color: C.tn }, EG: { label: eg.name, color: C.eg }, SA: { label: sa.name, color: C.sa } }}
                className="h-[300px] w-full"
              >
                <LineChart data={externalDebtComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="DZ" stroke={C.dz} strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="TN" stroke={C.tn} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="EG" stroke={C.eg} strokeWidth={1.5} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="SA" stroke={C.sa} strokeWidth={1.5} dot={{ r: 2 }} />
                </LineChart>
              </ChartContainer>
            </ChartCard>

            {/* Fiscal Balance */}
            <ChartCard title={t.benchFiscal || "Equilibre Budgetaire"} subtitle={"% du PIB 2024"} unit="% PIB" data={fiscalComparison}>
              <ChartContainer
                config={{ revenue: { label: "Recettes", color: "#059669" }, expenditure: { label: "Depenses", color: "#dc2626" }, deficit: { label: "Deficit", color: "#d97706" } }}
                className="h-[300px] w-full"
              >
                <BarChart data={fiscalComparison} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[-15, 45]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="revenue" fill={C.dz} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="expenditure" fill={C.red} radius={[2, 2, 0, 0]} opacity={0.8} />
                  <Bar dataKey="deficit" fill={C.eg} radius={[2, 2, 0, 0]} opacity={0.9} />
                </BarChart>
              </ChartContainer>
            </ChartCard>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground">{t.benchSource || "Source: Banque Mondiale, FMI, PNUD, OIT — Données 2015-2024"}</p>
    </div>
  );
}
