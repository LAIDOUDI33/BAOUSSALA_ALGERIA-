"use client";

import { useState, useMemo } from "react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid,
  Line, LineChart, XAxis, YAxis, Legend, ResponsiveContainer,
} from "recharts";
import {
  Brain, SlidersHorizontal, Bell, AlertTriangle, TrendingUp, TrendingDown,
  ArrowUpRight, ArrowDownRight, Info, ChevronRight, Activity, Zap, Target,
  Shield, BarChart3, Eye, Lightbulb, RefreshCw,
} from "lucide-react";

import {
  gdpAnnual, gdpQuarterly, cpiMonthly, tradeAnnual,
  ipiQuarterly, laborMarket, fiscalData, hydrocarbons,
} from "@/lib/algeria-data";
import {
  forecastAllScenarios, runSimulation,
  type SimulationParams, type SimulationResult, type Scenario,
} from "@/lib/forecasting-engine";
import {
  runAllAlerts, algeriaThresholds,
  type Alert, type AlertSeverity,
} from "@/lib/alert-engine";
import { ExportableChartCard } from "@/components/exportable-chart";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Dict {
  [key: string]: string;
}
interface Props {
  t: Dict;
}

// ─── Color palette ───────────────────────────────────────────────────────────
const SAD_COLORS = {
  optimistic: "#059669",
  baseline: "#2563eb",
  pessimistic: "#dc2626",
  optimisticLight: "#d1fae5",
  baselineLight: "#dbeafe",
  pessimisticLight: "#fee2e2",
  critical: "#dc2626",
  warning: "#d97706",
  info: "#2563eb",
  accent: "#7c3aed",
};

// ─── Sub-tabs ────────────────────────────────────────────────────────────────
type SubTab = "forecast" | "whatif" | "alerts";

export function DecisionSupportTab({ t }: Props) {
  const [subTab, setSubTab] = useState<SubTab>("alerts");
  const [forecastIndicator, setForecastIndicator] = useState("gdpGrowth");
  const [simulationParams, setSimulationParams] = useState<SimulationParams>({
    oilPrice: 76,
    oilProduction: 0.98,
    gasPrice: 10.5,
    nonHydroGrowthPct: 4.8,
    importGrowthPct: 5.0,
    publicInvestPctGdp: 15.2,
  });

  // ─── Forecast Data ──────────────────────────────────────────────────────
  const forecastData = useMemo(() => {
    const configs: Record<string, { data: { year: number; value: number }[]; label: string; unit: string }> = {
      gdpGrowth: {
        data: gdpAnnual.map(d => ({ year: d.year, value: d.growthPct })),
        label: t.sadForecastGdpGrowth || "Croissance PIB",
        unit: "%",
      },
      inflation: {
        data: cpiMonthly
          .filter(d => d.m === 12)
          .map(d => ({ year: d.year, value: d.yoyPct })),
        label: t.sadForecastInflation || "Inflation (déc.)",
        unit: "%",
      },
      unemployment: {
        data: laborMarket.map(d => ({ year: d.year, value: d.unemploymentPct })),
        label: t.sadForecastUnemp || "Chômage",
        unit: "%",
      },
      tradeBalance: {
        data: tradeAnnual.map(d => ({ year: d.year, value: d.balanceBn })),
        label: t.sadForecastTrade || "Solde Commercial",
        unit: "Mds USD",
      },
      ipi: {
        data: ipiQuarterly
          .filter(d => d.quarter === 4)
          .map(d => ({ year: d.year, value: d.ipi })),
        label: t.sadForecastIpi || "IPI (Q4)",
        unit: "",
      },
      debtGdp: {
        data: fiscalData.map(d => ({ year: d.year, value: d.debtPctGdp })),
        label: t.sadForecastDebt || "Dette/PIB",
        unit: "%",
      },
    };
    const config = configs[forecastIndicator] ?? configs.gdpGrowth;
    return { ...forecastAllScenarios(config.data, config.label, config.unit, 3), config };
  }, [forecastIndicator, t]);

  // Build chart data for forecast
  const forecastChartData = useMemo(() => {
    const years = new Set<number>();
    for (const s of ["optimistic", "baseline", "pessimistic"] as Scenario[]) {
      for (const p of forecastData[s].data) years.add(p.year);
    }
    const sortedYears = [...years].sort((a, b) => a - b);
    const lastHistorical = forecastData.baseline.data.find(d => d.historical !== undefined);
    const lastHistYear = lastHistorical?.year ?? 2024;

    return sortedYears.map(year => {
      const opt = forecastData.optimistic.data.find(d => d.year === year);
      const base = forecastData.baseline.data.find(d => d.year === year);
      const pess = forecastData.pessimistic.data.find(d => d.year === year);

      return {
        year,
        historical: base?.historical,
        optimistic: opt?.forecast,
        optimisticUpper: opt?.upperBound,
        optimisticLower: opt?.lowerBound,
        baseline: base?.forecast,
        baselineUpper: base?.upperBound,
        baselineLower: base?.lowerBound,
        pessimistic: pess?.forecast,
        pessimisticUpper: pess?.upperBound,
        pessimisticLower: pess?.lowerBound,
        isForecast: year > lastHistYear,
      };
    });
  }, [forecastData]);

  // ─── What-If Simulation ─────────────────────────────────────────────────
  const simulationResult = useMemo(() => runSimulation(simulationParams), [simulationParams]);

  const referenceResult = useMemo(() => runSimulation({
    oilPrice: 76, oilProduction: 0.98, gasPrice: 10.5,
    nonHydroGrowthPct: 4.8, importGrowthPct: 5.0, publicInvestPctGdp: 15.2,
  }), []);

  // ─── Alerts ─────────────────────────────────────────────────────────────
  const alerts = useMemo(() => {
    return runAllAlerts(
      cpiMonthly,
      gdpAnnual.map(d => ({ year: d.year, growthPct: d.growthPct })),
      tradeAnnual.map(d => ({ year: d.year, balanceBn: d.balanceBn })),
      laborMarket.map(d => ({ year: d.year, unemploymentPct: d.unemploymentPct })),
      ipiQuarterly,
      fiscalData.map(d => ({ year: d.year, debtPctGdp: d.debtPctGdp })),
    );
  }, []);

  const alertCounts = useMemo(() => ({
    critical: alerts.filter(a => a.severity === "critical").length,
    warning: alerts.filter(a => a.severity === "warning").length,
    info: alerts.filter(a => a.severity === "info").length,
  }), [alerts]);

  // ─── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-5">
      {/* Header KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiMini
          label={t.sadKpiAlerts || "Alertes actives"}
          value={alerts.length}
          icon={Bell}
          color={alertCounts.critical > 0 ? "red" : "amber"}
          sub={`${alertCounts.critical} critiques, ${alertCounts.warning} avertissements`}
        />
        <KpiMini
          label={t.sadKpiScenarios || "Scénarios"}
          value={3}
          icon={Target}
          color="blue"
          sub={t.sadKpiScenariosSub || "Optimiste / Base / Pessimiste"}
        />
        <KpiMini
          label={t.sadKpiParams || "Paramètres simulation"}
          value={Object.keys(simulationParams).length}
          icon={SlidersHorizontal}
          color="emerald"
          sub={t.sadKpiParamsSub || "6 leviers modifiables"}
        />
        <KpiMini
          label={t.sadKpiIndicators || "Indicateurs surveillés"}
          value={6}
          icon={Eye}
          color="purple"
          sub={t.sadKpiIndicatorsSub || "PIB, IPC, Chômage, Commerce, IPI, Dette"}
        />
      </div>

      {/* Sub-tab navigation */}
      <div className="flex gap-2 flex-wrap">
        {([
          { key: "alerts" as SubTab, icon: Bell, label: t.sadTabAlerts || "Alertes" },
          { key: "forecast" as SubTab, icon: Brain, label: t.sadTabForecast || "Prévisions" },
          { key: "whatif" as SubTab, icon: SlidersHorizontal, label: t.sadTabWhatIf || "Simulation" },
        ]).map(tab => (
          <Button
            key={tab.key}
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
            {tab.key === "alerts" && alertCounts.critical > 0 && (
              <Badge variant="destructive" className="ms-1.5 text-[10px] px-1.5 py-0">
                {alertCounts.critical}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* ──────────── ALERTS TAB ──────────── */}
      {subTab === "alerts" && (
        <div className="space-y-4">
          {/* Alert summary banner */}
          {alertCounts.critical > 0 && (
            <Card className="border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-950/30">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-300 text-sm">
                    {alertCounts.critical} {t.sadCriticalAlert || "alerte(s) critique(s)"}{" "}
                    {t.sadRequiresAttention || "requièrent votre attention"}
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {t.sadAlertBanner || "Des anomalies statistiques ou des dépassements de seuils ont été détectés sur les indicateurs clés."}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Thresholds config overview */}
          <ExportableChartCard
            title={t.sadThresholdTitle || "Seuils de surveillance"}
            subtitle={t.sadThresholdSub || "Configuration des limites d'alerte par indicateur"}
            exportId="sad-thresholds"
          >
            <div className="space-y-2">
              {algeriaThresholds.map((th, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 w-24 truncate">{th.indicator}</span>
                  <div className="flex-1 flex items-center gap-1">
                    {th.lowerCritical !== undefined && (
                      <Badge variant="destructive" className="text-[10px]">&le;{th.lowerCritical}</Badge>
                    )}
                    {th.lowerWarning !== undefined && (
                      <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 text-[10px] border-0">&le;{th.lowerWarning}</Badge>
                    )}
                    <div className="flex-1 h-1.5 bg-emerald-100 dark:bg-emerald-900/40 rounded-full mx-1" />
                    {th.upperWarning !== undefined && (
                      <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 text-[10px] border-0">&ge;{th.upperWarning}</Badge>
                    )}
                    {th.upperCritical !== undefined && (
                      <Badge variant="destructive" className="text-[10px]">&ge;{th.upperCritical}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ExportableChartCard>

          {/* Active alerts list */}
          <ExportableChartCard
            title={t.sadAlertsTitle || "Alertes détectées"}
            subtitle={t.sadAlertsSub || "Anomalies statistiques et franchissements de seuils"}
            exportId="sad-alerts"
          >
            <div className="max-h-[500px] overflow-y-auto space-y-2">
              {alerts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Shield className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">{t.sadNoAlerts || "Aucune alerte active — tous les indicateurs sont dans les normes"}</p>
                </div>
              ) : (
                alerts.map(alert => (
                  <AlertCard key={alert.id} alert={alert} t={t} />
                ))
              )}
            </div>
          </ExportableChartCard>
        </div>
      )}

      {/* ──────────── FORECAST TAB ──────────── */}
      {subTab === "forecast" && (
        <div className="space-y-4">
          {/* Indicator selector */}
          <Card className="border-slate-200 dark:border-slate-700/60">
            <CardContent className="p-4">
              <Label className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-3 block">
                {t.sadSelectIndicator || "Sélectionner l'indicateur à projeter"}
              </Label>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "gdpGrowth", label: t.sadFInd1 || "Croissance PIB" },
                  { key: "inflation", label: t.sadFInd2 || "Inflation" },
                  { key: "unemployment", label: t.sadFInd3 || "Chômage" },
                  { key: "tradeBalance", label: t.sadFInd4 || "Solde Commercial" },
                  { key: "ipi", label: t.sadFInd5 || "IPI" },
                  { key: "debtGdp", label: t.sadFInd6 || "Dette/PIB" },
                ].map(ind => (
                  <Button
                    key={ind.key}
                    variant={forecastIndicator === ind.key ? "default" : "outline"}
                    size="sm"
                    className={forecastIndicator === ind.key
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "text-xs"
                    }
                    onClick={() => setForecastIndicator(ind.key)}
                  >
                    {ind.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forecast chart */}
          <ExportableChartCard
            title={forecastData.config.label}
            subtitle={`${t.sadForecastSub || "Projections 2025-2027 — 3 scénarios"} (${forecastData.config.unit})`}
            exportId="sad-forecast"
          >
            <ChartContainer
              config={{
                historical: { label: t.sadHistorical || "Historique", color: "#475569" },
                optimistic: { label: t.sadOptimistic || "Optimiste", color: SAD_COLORS.optimistic },
                baseline: { label: t.sadBaseline || "Baseline", color: SAD_COLORS.baseline },
                pessimistic: { label: t.sadPessimistic || "Pessimiste", color: SAD_COLORS.pessimistic },
              }}
              className="h-[350px] w-full"
            >
              <AreaChart data={forecastChartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="fillOptimistic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SAD_COLORS.optimistic} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={SAD_COLORS.optimistic} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="fillBaseline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SAD_COLORS.baseline} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={SAD_COLORS.baseline} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="fillPessimistic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SAD_COLORS.pessimistic} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={SAD_COLORS.pessimistic} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area type="monotone" dataKey="optimistic" stroke={SAD_COLORS.optimistic} fill="url(#fillOptimistic)" strokeWidth={1.5} strokeDasharray="4 2" dot={false} />
                <Area type="monotone" dataKey="baseline" stroke={SAD_COLORS.baseline} fill="url(#fillBaseline)" strokeWidth={2} dot={false} />
                <Area type="monotone" dataKey="pessimistic" stroke={SAD_COLORS.pessimistic} fill="url(#fillPessimistic)" strokeWidth={1.5} strokeDasharray="4 2" dot={false} />
                <Line type="monotone" dataKey="historical" stroke="#475569" strokeWidth={2.5} dot={{ fill: "#475569", r: 3 }} connectNulls={false} />
              </AreaChart>
            </ChartContainer>
          </ExportableChartCard>

          {/* Scenario comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ScenarioCard
              title={t.sadOptimistic || "Optimiste"}
              data={forecastData.optimistic}
              color="emerald"
              icon={TrendingUp}
              t={t}
            />
            <ScenarioCard
              title={t.sadBaseline || "Baseline"}
              data={forecastData.baseline}
              color="blue"
              icon={Activity}
              t={t}
            />
            <ScenarioCard
              title={t.sadPessimistic || "Pessimiste"}
              data={forecastData.pessimistic}
              color="red"
              icon={TrendingDown}
              t={t}
            />
          </div>
        </div>
      )}

      {/* ──────────── WHAT-IF TAB ──────────── */}
      {subTab === "whatif" && (
        <div className="space-y-4">
          {/* Parameters panel */}
          <Card className="border-slate-200 dark:border-slate-700/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                {t.sadSimParams || "Paramètres de simulation"}
              </CardTitle>
              <CardDescription className="text-xs">
                {t.sadSimParamsSub || "Ajustez les leviers économiques et observez l'impact en temps réel"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <SimSlider
                label={t.sadOilPrice || "Prix du pétrole (USD/baril)"}
                value={simulationParams.oilPrice}
                min={30} max={150} step={1}
                unit="$"
                refValue={76}
                onChange={v => setSimulationParams(p => ({ ...p, oilPrice: v }))}
              />
              <SimSlider
                label={t.sadOilProd || "Production pétrolière (Mb/j)"}
                value={simulationParams.oilProduction}
                min={0.6} max={1.5} step={0.01}
                unit=""
                refValue={0.98}
                onChange={v => setSimulationParams(p => ({ ...p, oilProduction: v }))}
              />
              <SimSlider
                label={t.sadGasPrice || "Prix du gaz (USD/mmbtu)"}
                value={simulationParams.gasPrice}
                min={3} max={25} step={0.5}
                unit="$"
                refValue={10.5}
                onChange={v => setSimulationParams(p => ({ ...p, gasPrice: v }))}
              />
              <SimSlider
                label={t.sadNonHCGrowth || "Croissance hors-hydrocarbures (%)"}
                value={simulationParams.nonHydroGrowthPct}
                min={1} max={8} step={0.1}
                unit="%"
                refValue={4.8}
                onChange={v => setSimulationParams(p => ({ ...p, nonHydroGrowthPct: v }))}
              />
              <SimSlider
                label={t.sadImportGrowth || "Croissance des importations (%)"}
                value={simulationParams.importGrowthPct}
                min={-5} max={15} step={0.5}
                unit="%"
                refValue={5.0}
                onChange={v => setSimulationParams(p => ({ ...p, importGrowthPct: v }))}
              />
              <SimSlider
                label={t.sadPublicInvest || "Investissement public (% PIB)"}
                value={simulationParams.publicInvestPctGdp}
                min={8} max={25} step={0.5}
                unit="%"
                refValue={15.2}
                onChange={v => setSimulationParams(p => ({ ...p, publicInvestPctGdp: v }))}
              />
              <div className="flex justify-end">
                <Button
                  variant="outline" size="sm"
                  className="text-xs text-slate-500"
                  onClick={() => setSimulationParams({
                    oilPrice: 76, oilProduction: 0.98, gasPrice: 10.5,
                    nonHydroGrowthPct: 4.8, importGrowthPct: 5.0, publicInvestPctGdp: 15.2,
                  })}
                >
                  <RefreshCw className="w-3 h-3 me-1.5" />
                  {t.sadReset || "Réinitialiser"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Simulation results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <SimKpi
              label={t.sadSimGdpGrowth || "Croissance PIB"}
              value={simulationResult.gdpGrowthPct}
              refValue={referenceResult.gdpGrowthPct}
              unit="%"
              t={t}
            />
            <SimKpi
              label={t.sadSimGdp || "PIB (Mds DZD)"}
              value={simulationResult.gdpBillionDzd}
              refValue={referenceResult.gdpBillionDzd}
              unit=""
              t={t}
            />
            <SimKpi
              label={t.sadSimTrade || "Solde Commercial"}
              value={simulationResult.tradeBalanceBn}
              refValue={referenceResult.tradeBalanceBn}
              unit="Mds $"
              t={t}
            />
            <SimKpi
              label={t.sadSimUnemp || "Chômage"}
              value={simulationResult.unemploymentPct}
              refValue={referenceResult.unemploymentPct}
              unit="%"
              invertColor
              t={t}
            />
            <SimKpi
              label={t.sadSimHydroRev || "Revenus HC"}
              value={simulationResult.hydroRevenueBn}
              refValue={referenceResult.hydroRevenueBn}
              unit="Mds $"
              t={t}
            />
            <SimKpi
              label={t.sadSimExports || "Exportations"}
              value={simulationResult.exportsBn}
              refValue={referenceResult.exportsBn}
              unit="Mds $"
              t={t}
            />
            <SimKpi
              label={t.sadSimFiscal || "Recettes fiscales"}
              value={simulationResult.fiscalRevenuePctGdp}
              refValue={referenceResult.fiscalRevenuePctGdp}
              unit="% PIB"
              t={t}
            />
            <SimKpi
              label={t.sadSimDebt || "Dette/PIB"}
              value={simulationResult.debtToGdpPct}
              refValue={referenceResult.debtToGdpPct}
              unit="%"
              invertColor
              t={t}
            />
          </div>

          {/* Impact radar chart */}
          <ExportableChartCard
            title={t.sadSimImpact || "Impact de la simulation vs scénario de référence"}
            subtitle={t.sadSimImpactSub || "Comparaison des écarts induits par les paramètres ajustés"}
            exportId="sad-sim-impact"
          >
            <ChartContainer
              config={{
                impact: { label: t.sadImpact || "Impact", color: "#059669" },
              }}
              className="h-[300px] w-full"
            >
              <BarChart data={[
                { name: t.sadSimGdpGrowth || "Croissance PIB", impact: Math.round((simulationResult.gdpGrowthPct - referenceResult.gdpGrowthPct) * 100) / 100 },
                { name: t.sadSimTrade || "Solde Com." , impact: Math.round((simulationResult.tradeBalanceBn - referenceResult.tradeBalanceBn) * 100) / 100 },
                { name: t.sadSimUnemp || "Chômage", impact: Math.round((simulationResult.unemploymentPct - referenceResult.unemploymentPct) * 100) / 100 },
                { name: t.sadSimHydroRev || "Rev. HC", impact: Math.round((simulationResult.hydroRevenueBn - referenceResult.hydroRevenueBn) * 100) / 100 },
                { name: t.sadSimExports || "Export.", impact: Math.round((simulationResult.exportsBn - referenceResult.exportsBn) * 100) / 100 },
                { name: t.sadSimFiscal || "Fisc.", impact: Math.round((simulationResult.fiscalRevenuePctGdp - referenceResult.fiscalRevenuePctGdp) * 100) / 100 },
                { name: t.sadSimDebt || "Dette/PIB", impact: Math.round((simulationResult.debtToGdpPct - referenceResult.debtToGdpPct) * 100) / 100 },
              ]} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 11 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
                  {[0,1,2,3,4,5,6].map((entry, index) => (
                    <Cell key={index} fill={entry >= 0 ? "#059669" : "#dc2626"} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </ExportableChartCard>
        </div>
      )}
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

import { Cell } from "recharts";

function KpiMini({ label, value, icon: Icon, color, sub }: {
  label: string; value: number | string; icon: React.ElementType;
  color: string; sub: string;
}) {
  const colorMap: Record<string, string> = {
    red: "text-red-600 dark:text-red-400",
    amber: "text-amber-600 dark:text-amber-400",
    blue: "text-blue-600 dark:text-blue-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    purple: "text-purple-600 dark:text-purple-400",
  };
  const bgMap: Record<string, string> = {
    red: "bg-red-50 dark:bg-red-950/30",
    amber: "bg-amber-50 dark:bg-amber-950/30",
    blue: "bg-blue-50 dark:bg-blue-950/30",
    emerald: "bg-emerald-50 dark:bg-emerald-950/30",
    purple: "bg-purple-50 dark:bg-purple-950/30",
  };
  return (
    <Card className={`${bgMap[color]} border-slate-200/80 dark:border-slate-700/60`}>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <Icon className={`w-3.5 h-3.5 ${colorMap[color]}`} />
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</span>
        </div>
        <p className={`text-lg font-bold ${colorMap[color]}`}>{value}</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{sub}</p>
      </CardContent>
    </Card>
  );
}

function AlertCard({ alert, t }: { alert: Alert; t: Dict }) {
  const severityConfig = {
    critical: { bg: "bg-red-50 dark:bg-red-950/30", border: "border-red-200 dark:border-red-800/50", badge: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300", icon: AlertTriangle, label: t.sadCritical || "Critique" },
    warning: { bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-200 dark:border-amber-800/50", badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300", icon: Bell, label: t.sadWarning || "Avertissement" },
    info: { bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800/50", badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300", icon: Info, label: t.sadInfo || "Info" },
  }[alert.severity];
  const SIcon = severityConfig.icon;

  return (
    <div className={`${severityConfig.bg} ${severityConfig.border} border rounded-lg p-3`}
      >
      <div className="flex items-start gap-2.5">
        <SIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${alert.severity === "critical" ? "text-red-500" : alert.severity === "warning" ? "text-amber-500" : "text-blue-500"}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge variant="outline" className={`text-[10px] px-1.5 py-0 border-0 ${severityConfig.badge}`}>
              {severityConfig.label}
            </Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              {alert.type === "anomaly" ? (t.sadTypeAnomaly || "Anomalie") : alert.type === "threshold" ? (t.sadTypeThreshold || "Seuil") : (t.sadTypeTrend || "Tendance")}
            </Badge>
          </div>
          <p className="text-xs font-semibold text-foreground truncate">{alert.title}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">{alert.description}</p>
          <p className="text-[10px] text-slate-400 mt-1">
            {alert.period} — {t.sadValue || "Valeur"}: {alert.value} / {t.sadExpected || "Attendu"}: {alert.expected}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScenarioCard({ title, data, color, icon: Icon, t }: {
  title: string; data: { data: { year: number; forecast: number; upperBound?: number; lowerBound?: number; historical?: number }[] }; color: string; icon: React.ElementType; t: Dict;
}) {
  const forecasts = data.data.filter(d => d.historical === undefined);
  const latest = forecasts[forecasts.length - 1];
  const latestHistorical = data.data.filter(d => d.historical !== undefined).slice(-1)[0];

  const colorMap: Record<string, { text: string; bg: string }> = {
    emerald: { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50" },
    blue: { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50" },
    red: { text: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/50" },
  };
  const c = colorMap[color] ?? colorMap.blue;

  return (
    <Card className={`${c.bg} border`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon className={`w-4 h-4 ${c.text}`} />
          <span className="text-sm font-bold">{title}</span>
        </div>
        {latestHistorical && (
          <p className="text-[10px] text-slate-500 mb-1">
            {t.sadLastActual || "Dernière valeur réelle"} ({latestHistorical.year}): <b>{latestHistorical.historical}</b> {data.data[0] && (data.data as {unit?: string}[0]).unit}
          </p>
        )}
        <div className="space-y-2">
          {forecasts.map(f => (
            <div key={f.year} className="flex items-center justify-between">
              <span className="text-xs text-slate-600 dark:text-slate-300">{f.year}</span>
              <div className="text-right">
                <span className={`text-sm font-bold ${c.text}`}>{f.forecast}</span>
                {f.upperBound !== undefined && f.lowerBound !== undefined && (
                  <span className="text-[10px] text-slate-400 ms-1">
                    [{f.lowerBound}, {f.upperBound}]
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SimSlider({ label, value, min, max, step, unit, refValue, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; refValue: number; onChange: (v: number) => void;
}) {
  const diff = value - refValue;
  const isUp = diff > 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-medium text-slate-700 dark:text-slate-300">{label}</Label>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold ${diff === 0 ? "text-slate-500" : isUp ? "text-emerald-600" : "text-red-600"}`}>
            {value}{unit}
          </span>
          {diff !== 0 && (
            <span className={`text-[10px] ${isUp ? "text-emerald-500" : "text-red-500"}`}>
              ({isUp ? "+" : ""}{step < 1 ? diff.toFixed(1) : diff}{unit})
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={([v]) => onChange(v)}
          className="w-full"
        />
        <div className="flex justify-between mt-0.5">
          <span className="text-[9px] text-slate-400">{min}{unit}</span>
          <span className="text-[9px] text-slate-400">Réf: {refValue}{unit}</span>
          <span className="text-[9px] text-slate-400">{max}{unit}</span>
        </div>
      </div>
    </div>
  );
}

function SimKpi({ label, value, refValue, unit, invertColor, t }: {
  label: string; value: number; refValue: number; unit: string; invertColor?: boolean; t: Dict;
}) {
  const diff = Math.round((value - refValue) * 100) / 100;
  const isPositive = diff > 0;
  const isGood = invertColor ? !isPositive : isPositive;
  return (
    <Card className="bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/60">
      <CardContent className="p-3">
        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">{label}</p>
        <p className="text-base font-bold text-foreground">{typeof value === 'number' && value > 999 ? value.toLocaleString() : value}<span className="text-[10px] text-slate-400 ms-1">{unit}</span></p>
        {diff !== 0 && (
          <p className={`text-[10px] font-semibold mt-0.5 flex items-center gap-0.5 ${isGood ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {isGood ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {isPositive ? "+" : ""}{diff}{unit} vs {t.sadRef || "réf"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
