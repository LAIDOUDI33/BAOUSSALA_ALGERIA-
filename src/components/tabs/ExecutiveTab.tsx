"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  executiveKPIs, monthlyTrends, sectorPerformance, nationalPerformance, strategicAlerts,
  riskMatrix, vnrTargets, periodComparison,
  type RiskItem, type TargetItem, type ComparisonItem,
} from "@/lib/executive-data";
import {
  Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip as RTooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, Bar, BarChart, Cell,
} from "recharts";
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Activity, Shield, AlertTriangle, Info, CheckCircle2,
  Circle, BarChart3, Target, Zap, Globe, DollarSign,
  TriangleAlert, ArrowRight, TrendingUp as TrendIcon, Clock,
} from "lucide-react";

// ─── Color Constants ────────────────────────────────────────────────────────
const STATUS_COLORS = {
  positive: { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800" },
  improving: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-700 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800" },
  warning: { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-700 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800" },
  negative: { bg: "bg-red-50 dark:bg-red-950/30", text: "text-red-700 dark:text-red-400", border: "border-red-200 dark:border-red-800" },
};

const ALERT_LEVEL = {
  critical: { bg: "bg-red-50 dark:bg-red-950/20", border: "border-l-4 border-l-red-500", icon: AlertTriangle, iconColor: "text-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" },
  warning: { bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-l-4 border-l-amber-500", icon: AlertTriangle, iconColor: "text-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" },
  info: { bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-l-4 border-l-blue-500", icon: Info, iconColor: "text-blue-500", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" },
};

const SECTOR_COLORS = ["#059669", "#2563eb", "#d97706", "#7c3aed", "#0891b2", "#e11d48"];

// ─── Sub-components ────────────────────────────────────────────────────────

function ExecutiveKpiCard({ kpi, labels }: {
  kpi: typeof executiveKPIs[0];
  labels: Record<string, string>;
}) {
  const statusStyle = STATUS_COLORS[kpi.status] || STATUS_COLORS.positive;
  return (
    <Card className={`border ${statusStyle.border} ${statusStyle.bg} transition-all hover:shadow-md`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {labels[`execKpi${kpi.key.charAt(0).toUpperCase() + kpi.key.slice(1)}`] || kpi.key}
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight">{kpi.value}</span>
              <span className="text-sm text-muted-foreground font-medium">{kpi.unit}</span>
            </div>
          </div>
          <div className={`flex flex-col items-end gap-1`}>
            <div className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
              kpi.direction === "up" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
            }`}>
              {kpi.direction === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {kpi.change > 0 ? "+" : ""}{kpi.change}%
            </div>
            <span className="text-[10px] text-muted-foreground">{kpi.quarter}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PerformanceScoreRing({ score, prevScore, labels }: {
  score: number; prevScore: number; labels: Record<string, string>;
}) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? "#059669" : score >= 50 ? "#d97706" : "#dc2626";

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6 flex flex-col items-center">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
          {labels.execNationalScore || "National Score"}
        </p>
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted/30" />
            <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="8"
              strokeDasharray={circumference} strokeDashoffset={offset}
              strokeLinecap="round" className="transition-all duration-1000" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold" style={{ color }}>{score}</span>
            <span className="text-[10px] text-muted-foreground">/ 100</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${score > prevScore ? "text-emerald-600" : "text-red-600"}`}>
          {score > prevScore ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {labels.execScoreChange || "Change"}: {score > prevScore ? "+" : ""}{score - prevScore}
        </div>
      </CardContent>
    </Card>
  );
}

function ComponentBreakdown({ components, labels }: {
  components: typeof nationalPerformance.components;
  labels: Record<string, string>;
}) {
  const compLabels: Record<string, string> = {
    economicGrowth: labels.execCompGrowth || "Economic Growth",
    priceStability: labels.execCompStability || "Price Stability",
    employment: labels.execCompEmployment || "Employment",
    tradeBalance: labels.execCompTrade || "Trade Balance",
    fiscalHealth: labels.execCompFiscal || "Fiscal Health",
    socialWelfare: labels.execCompSocial || "Social Welfare",
    infrastructure: labels.execCompInfra || "Infrastructure",
    sustainability: labels.execCompSustain || "Sustainability",
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">{labels.execComponents || "Performance Components"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {components.map((c) => {
          const color = c.score >= 70 ? "bg-emerald-500" : c.score >= 50 ? "bg-amber-500" : "bg-red-500";
          return (
            <div key={c.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">{compLabels[c.name] || c.name}</span>
                <span className="font-semibold">{c.score}</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${c.score}%` }} />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

// ─── Risk Heatmap ───────────────────────────────────────────────────────
function RiskHeatmap({ risks, labels, locale }: {
  risks: RiskItem[];
  labels: Record<string, string>;
  locale: string;
}) {
  const getTitle = (r: RiskItem) => locale === "ar" ? r.titleAr : locale === "fr" ? r.titleFr : r.titleEn;
  const getDesc = (r: RiskItem) => locale === "ar" ? r.descAr : locale === "fr" ? r.descFr : r.descEn;

  const levelColor = (l: string) => {
    if (l === "critical") return "bg-red-500";
    if (l === "high") return "bg-amber-500";
    if (l === "medium") return "bg-yellow-400";
    return "bg-emerald-500";
  };
  const levelBorder = (l: string) => {
    if (l === "critical") return "border-red-300 dark:border-red-700";
    if (l === "high") return "border-amber-300 dark:border-amber-700";
    if (l === "medium") return "border-yellow-300 dark:border-yellow-700";
    return "border-emerald-300 dark:border-emerald-700";
  };
  const trendIcon = (t: string) => {
    if (t === "up") return <ArrowUpRight className="w-3 h-3 text-red-500" />;
    if (t === "down") return <ArrowDownRight className="w-3 h-3 text-emerald-500" />;
    return <Circle className="w-2 h-2 text-muted-foreground" />;
  };

  // Grid positions: probability (y) × impact (x) -> 3x3 grid
  const gridCells = [
    { probLabel: labels.execRiskHigh || "High Prob.", impactLabel: labels.execRiskHighImpact || "High Impact", minP: 50, maxP: 100, minI: 60, maxI: 100 },
    { probLabel: labels.execRiskHigh || "High Prob.", impactLabel: labels.execRiskMedImpact || "Med. Impact", minP: 50, maxP: 100, minI: 30, maxI: 60 },
    { probLabel: labels.execRiskHigh || "High Prob.", impactLabel: labels.execRiskLowImpact || "Low Impact", minP: 50, maxP: 100, minI: 0, maxI: 30 },
    { probLabel: labels.execRiskMed || "Med. Prob.", impactLabel: labels.execRiskHighImpact || "High Impact", minP: 25, maxP: 50, minI: 60, maxI: 100 },
    { probLabel: labels.execRiskMed || "Med. Prob.", impactLabel: labels.execRiskMedImpact || "Med. Impact", minP: 25, maxP: 50, minI: 30, maxI: 60 },
    { probLabel: labels.execRiskMed || "Med. Prob.", impactLabel: labels.execRiskLowImpact || "Low Impact", minP: 25, maxP: 50, minI: 0, maxI: 30 },
    { probLabel: labels.execRiskLow || "Low Prob.", impactLabel: labels.execRiskHighImpact || "High Impact", minP: 0, maxP: 25, minI: 60, maxI: 100 },
    { probLabel: labels.execRiskLow || "Low Prob.", impactLabel: labels.execRiskMedImpact || "Med. Impact", minP: 0, maxP: 25, minI: 30, maxI: 60 },
    { probLabel: labels.execRiskLow || "Low Prob.", impactLabel: labels.execRiskLowImpact || "Low Impact", minP: 0, maxP: 25, minI: 0, maxI: 30 },
  ];

  const getCellColor = (cell: typeof gridCells[0]) => {
    const maxScore = (cell.maxP + cell.maxI) / 2;
    if (maxScore >= 70) return "bg-red-100 dark:bg-red-950/30";
    if (maxScore >= 45) return "bg-amber-100 dark:bg-amber-950/30";
    return "bg-emerald-50 dark:bg-emerald-950/20";
  };

  const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null);

  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TriangleAlert className="w-4 h-4 text-red-500" />
              <CardTitle className="text-sm font-semibold">{labels.execRiskTitle || "Risk Assessment Matrix"}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="destructive" className="text-[10px]">{risks.filter(r => r.level === "critical").length} {labels.execRiskCrit || "Critical"}</Badge>
              <Badge className="bg-amber-500 text-[10px]">{risks.filter(r => r.level === "high").length} {labels.execRiskHigh || "High"}</Badge>
              <Badge variant="secondary" className="text-[10px]">{risks.filter(r => r.level === "medium").length} {labels.execRiskMed || "Medium"}</Badge>
              <Badge variant="outline" className="text-[10px]">{risks.filter(r => r.level === "low").length} {labels.execRiskLow || "Low"}</Badge>
            </div>
          </div>
          <CardDescription className="text-xs">{labels.execRiskSub || "Probability vs Impact assessment for key economic risks"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-1">
            {gridCells.map((cell, i) => {
              const cellRisks = risks.filter(r => r.probability >= cell.minP && r.probability < cell.maxP && r.impact >= cell.minI && r.impact < cell.maxI);
              return (
                <div key={i} className={`rounded-lg p-2 min-h-[80px] border ${getCellColor(cell)} transition-colors`}>
                  <div className="flex flex-wrap gap-1">
                    {cellRisks.map(r => (
                      <button key={r.id} onClick={() => setSelectedRisk(selectedRisk?.id === r.id ? null : r)}
                        className={`w-6 h-6 rounded-full ${levelColor(r.level)} border-2 ${levelBorder(r.level)} flex items-center justify-center text-white text-[9px] font-bold hover:scale-110 transition-transform ${selectedRisk?.id === r.id ? "ring-2 ring-offset-1 ring-gray-400" : ""}`}>
                        {r.id}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Axis labels */}
          <div className="flex justify-between mt-1 text-[9px] text-muted-foreground px-1">
            <span>{labels.execRiskLowImpact || "Low Impact"}</span>
            <span>{labels.execRiskMedImpact || "Medium"}</span>
            <span>{labels.execRiskHighImpact || "High Impact"}</span>
          </div>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-[9px] text-muted-foreground">{labels.execRiskProbAxis || "Probability"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Selected risk detail */}
      {selectedRisk && (
        <Card className={`border ${levelBorder(selectedRisk.level)} ${levelColor(selectedRisk.level).replace("bg-", "bg-").replace("-500", "-50")} dark:bg-opacity-20`}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg ${levelColor(selectedRisk.level)} flex items-center justify-center text-white shrink-0`}>
                <span className="text-sm font-bold">{selectedRisk.id}</span>
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold">{getTitle(selectedRisk)}</span>
                  <Badge className={`${levelColor(selectedRisk.level)} text-white text-[10px]`}>{selectedRisk.level.toUpperCase()}</Badge>
                  <span className="flex items-center gap-0.5 text-[10px]">{trendIcon(selectedRisk.trend)}</span>
                </div>
                <p className="text-xs text-muted-foreground">{getDesc(selectedRisk)}</p>
                <div className="flex items-center gap-4 text-[10px] mt-1">
                  <span>{labels.execRiskProb || "Probability"}: <b>{selectedRisk.probability}%</b></span>
                  <span>{labels.execRiskImpact || "Impact"}: <b>{selectedRisk.impact}%</b></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Risk list */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold">{labels.execRiskList || "All Risks"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 max-h-72 overflow-y-auto">
          {risks.map(r => (
            <div key={r.id} className="flex items-center gap-3 py-2 border-b border-muted/50 last:border-0 cursor-pointer hover:bg-muted/30 rounded px-2 -mx-2 transition-colors" onClick={() => setSelectedRisk(selectedRisk?.id === r.id ? null : r)}>
              <div className={`w-6 h-6 rounded-full ${levelColor(r.level)} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>{r.id}</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">{getTitle(r)}</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] shrink-0">
                <span className="text-muted-foreground">P:{r.probability}%</span>
                <span className="text-muted-foreground">I:{r.impact}%</span>
                <span className="flex items-center gap-0.5">{trendIcon(r.trend)}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Target Tracker (VNR 2026) ─────────────────────────────────────────────
function TargetTracker({ targets, labels, locale }: {
  targets: TargetItem[];
  labels: Record<string, string>;
  locale: string;
}) {
  const getTitle = (t: TargetItem) => locale === "ar" ? t.titleAr : locale === "fr" ? t.titleFr : t.titleEn;
  const getStatus = (t: TargetItem) => locale === "ar" ? t.statusAr : locale === "fr" ? t.statusFr : t.statusEn;

  const statusColor = (l: string) => {
    if (l === "onTrack") return { bar: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", dot: "bg-emerald-500" };
    if (l === "achieved") return { bar: "bg-emerald-600", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", dot: "bg-emerald-600" };
    if (l === "moderate") return { bar: "bg-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400", dot: "bg-amber-500" };
    return { bar: "bg-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400", dot: "bg-red-500" };
  };

  const pct = (cur: number, tgt: number, lowerIsBetter = false) => {
    if (lowerIsBetter) return Math.min(100, Math.max(0, (tgt / Math.max(cur, 0.01)) * 100));
    return Math.min(100, Math.max(0, (cur / Math.max(tgt, 0.01)) * 100));
  };

  const onTrack = targets.filter(t => t.statusLevel === "onTrack" || t.statusLevel === "achieved").length;
  const atRisk = targets.filter(t => t.statusLevel === "atRisk").length;
  const moderate = targets.filter(t => t.statusLevel === "moderate").length;

  return (
    <div className="space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-600">{onTrack}</div>
            <p className="text-[10px] text-muted-foreground mt-1">{labels.execTargetOnTrack || "On Track"}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">{moderate}</div>
            <p className="text-[10px] text-muted-foreground mt-1">{labels.execTargetModerate || "Moderate"}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{atRisk}</div>
            <p className="text-[10px] text-muted-foreground mt-1">{labels.execTargetAtRisk || "At Risk"}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            <CardTitle className="text-sm font-semibold">{labels.execTargetTitle || "VNR 2026 Target Tracker"}</CardTitle>
          </div>
          <CardDescription className="text-xs">{labels.execTargetSub || "Progress toward Voluntary National Review targets"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 max-h-[480px] overflow-y-auto">
          {targets.map(tgt => {
            const sc = statusColor(tgt.statusLevel);
            // For metrics like poverty and CO2, lower is better
            const lowerIsBetter = tgt.key === undefined && (tgt.sdgNumber === 1 || tgt.sdgNumber === 13);
            const progress = pct(tgt.current, tgt.target, lowerIsBetter);
            return (
              <div key={tgt.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-muted-foreground w-5 shrink-0">SDG {tgt.sdgNumber}</span>
                    <span className="text-xs font-medium truncate">{getTitle(tgt)}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge className={`${sc.badge} text-[10px]`}>{getStatus(tgt)}</Badge>
                    <span className="text-[10px] text-muted-foreground font-mono">{tgt.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={progress} className={`h-2 flex-1 [&>div]:${sc.bar}`} />
                  <div className="text-[10px] text-muted-foreground w-24 text-right shrink-0">
                    <span className="font-semibold text-foreground">{tgt.current}</span> / {tgt.target} {tgt.unit}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Period Comparison ──────────────────────────────────────────────────
function ComparisonView({ items, labels, locale }: {
  items: ComparisonItem[];
  labels: Record<string, string>;
  locale: string;
}) {
  const getLabel = (c: ComparisonItem) => locale === "ar" ? c.labelAr : locale === "fr" ? c.labelFr : c.labelEn;

  const barData = items.map(c => ({
    name: getLabel(c),
    current: c.current,
    previous: c.previous,
    change: Number(((c.current - c.previous) / Math.max(Math.abs(c.previous), 0.01) * 100).toFixed(1)),
    positive: c.positive,
  }));

  const improved = items.filter(c => {
    const good = c.positive ? c.current >= c.previous : c.current <= c.previous;
    return good;
  }).length;

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-emerald-600">{improved}/{items.length}</p>
              <p className="text-[10px] text-muted-foreground">{labels.execCompImproved || "Improved"}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600">H1-2025 {labels.execCompVs || "vs"} H1-2024</p>
              <p className="text-[10px] text-muted-foreground">{labels.execCompPeriod || "Semi-annual comparison"}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <CardTitle className="text-sm font-semibold">{labels.execCompTitle || "Executive Period Comparison"}</CardTitle>
          </div>
          <CardDescription className="text-xs">{labels.execCompSub || "Current vs previous period for key indicators"}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={110} />
                <RTooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                <Bar dataKey="previous" fill="#94a3b8" radius={[0, 2, 2, 0]} name={labels.execCompPrev || "Previous"} />
                <Bar dataKey="current" fill="#059669" radius={[0, 2, 2, 0]} name={labels.execCompCurr || "Current"} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Comparison table */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold">{labels.execCompTable || "Detailed Comparison"}</CardTitle>
        </CardHeader>
        <CardContent className="max-h-72 overflow-y-auto">
          <div className="space-y-1.5">
            {items.map(c => {
              const change = c.current - c.previous;
              const changePct = ((change / Math.max(Math.abs(c.previous), 0.01)) * 100).toFixed(1);
              const isGood = c.positive ? change >= 0 : change <= 0;
              const label = getLabel(c);
              return (
                <div key={c.key} className="flex items-center gap-3 py-2 border-b border-muted/50 last:border-0 text-xs">
                  <span className="flex-1 font-medium truncate">{label}</span>
                  <span className="text-muted-foreground w-16 text-right">{c.previous}{c.unit}</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="font-semibold w-16 text-right">{c.current}{c.unit}</span>
                  <span className={`flex items-center gap-0.5 w-16 justify-end font-semibold ${isGood ? "text-emerald-600" : "text-red-600"}`}>
                    {change > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {change > 0 ? "+" : ""}{changePct}%
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function ExecutiveTab({ t }: { t: Record<string, string> }) {
  const { locale } = useI18n();
  const [subTab, setSubTab] = useState<"overview" | "risks" | "targets" | "comparison">("overview");

  const getTitle = (obj: { titleEn: string; titleFr: string; titleAr: string }) => {
    if (locale === "ar") return obj.titleAr;
    if (locale === "fr") return obj.titleFr;
    return obj.titleEn;
  };

  const getDetail = (obj: { detailEn: string; detailFr: string; detailAr: string }) => {
    if (locale === "ar") return obj.detailAr;
    if (locale === "fr") return obj.detailFr;
    return obj.detailEn;
  };

  const getAction = (obj: { actionEn: string; actionFr: string; actionAr: string }) => {
    if (locale === "ar") return obj.actionAr;
    if (locale === "fr") return obj.actionFr;
    return obj.actionEn;
  };

  // Radar chart data for sector performance
  const radarData = sectorPerformance.map((s, i) => ({
    sector: t[`execSector${s.sector.charAt(0).toUpperCase() + s.sector.slice(1)}`] || s.sector,
    growth: s.growth,
    contribution: s.contribution,
    fill: SECTOR_COLORS[i % SECTOR_COLORS.length],
  }));

  return (
    <div className="space-y-5">
      {/* ── Header Bar ──────────────────────────────────────── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold">{t.execDashboardTitle || "Executive Dashboard"}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {t.execDashboardSub || "Strategic overview of national economic indicators"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-[10px] font-mono">
            {t.execLastUpdate || "Last update"}: {new Date().toLocaleDateString(locale === "ar" ? "ar-DZ" : locale === "fr" ? "fr-DZ" : "en-US", { day: "numeric", month: "short", year: "numeric" })}
          </Badge>
        </div>
      </div>

      {/* ── Sub-tab Navigation ────────────────────────────── */}
      <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl p-1">
        {(["overview", "risks", "targets", "comparison"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              subTab === tab
                ? "bg-white dark:bg-slate-800 shadow-sm text-emerald-700 dark:text-emerald-400"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === "overview" && (t.execTabOverview || "Overview")}
            {tab === "risks" && (t.execTabRisks || "Risk Matrix")}
            {tab === "targets" && (t.execTabTargets || "VNR Targets")}
            {tab === "comparison" && (t.execTabComparison || "Comparison")}
          </button>
        ))}
      </div>

      {/* ── Overview (original content) ──────────────────────── */}
      {subTab === "overview" && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {executiveKPIs.map((kpi) => (
              <ExecutiveKpiCard key={kpi.key} kpi={kpi} labels={t} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PerformanceScoreRing
              score={nationalPerformance.score}
              prevScore={nationalPerformance.previousScore}
              labels={t}
            />
            <ComponentBreakdown components={nationalPerformance.components} labels={t} />
          </div>

          <Separator />

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">{t.execTrendTitle || "Monthly Economic Trends"}</CardTitle>
              <CardDescription className="text-xs">{t.execTrendSub || "12-month rolling trends for key indicators"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrends} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gradGdp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gradInfl" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gradUnemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d97706" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#d97706" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} className="text-muted-foreground" />
                    <YAxis tick={{ fontSize: 10 }} className="text-muted-foreground" />
                    <RTooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                    <Area type="monotone" dataKey="gdpGrowth" stroke="#059669" fill="url(#gradGdp)" strokeWidth={2} name={t.execTrendGdp || "GDP Growth %"} />
                    <Area type="monotone" dataKey="inflation" stroke="#dc2626" fill="url(#gradInfl)" strokeWidth={2} name={t.execTrendInfl || "Inflation %"} />
                    <Area type="monotone" dataKey="unemployment" stroke="#d97706" fill="url(#gradUnemp)" strokeWidth={2} name={t.execTrendUnemp || "Unemployment %"} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">{t.execSectorTitle || "Sector Performance"}</CardTitle>
                <CardDescription className="text-xs">{t.execSectorSub || "Growth rate by sector (% year-over-year)"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid className="stroke-muted" />
                      <PolarAngleAxis dataKey="sector" tick={{ fontSize: 10 }} className="text-muted-foreground" />
                      <PolarRadiusAxis angle={30} domain={[0, 8]} tick={{ fontSize: 9 }} className="text-muted-foreground" />
                      <Radar name={t.execSectorGrowth || "Growth %"} dataKey="growth" stroke="#059669" fill="#059669" fillOpacity={0.25} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">{t.execSectorTable || "Sector Breakdown"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5">
                  {sectorPerformance.map((s, i) => (
                    <div key={s.sector} className="flex items-center justify-between py-1.5 border-b border-muted/50 last:border-0">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SECTOR_COLORS[i] }} />
                        <span className="text-sm font-medium">
                          {t[`execSector${s.sector.charAt(0).toUpperCase() + s.sector.slice(1)}`] || s.sector}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-muted-foreground">{t.execContrib || "Contribution"}: {s.contribution}%</span>
                        <Badge variant={s.status === "strong" ? "default" : s.status === "stable" ? "secondary" : "outline"} className="text-[10px]">
                          <TrendingUp className="w-3 h-3 me-1" />{s.growth}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-semibold">{t.execAlerts || "Strategic Alerts"}</h3>
              <Badge variant="destructive" className="text-[10px]">{t.execAlertsCritical || "Critical"}: 2</Badge>
              <Badge variant="secondary" className="text-[10px]">{t.execAlertsWarning || "Warning"}: 2</Badge>
              <Badge variant="outline" className="text-[10px]">{t.execAlertsInfo || "Info"}: 2</Badge>
            </div>
            <div className="space-y-3">
              {strategicAlerts.map((alert) => {
                const style = ALERT_LEVEL[alert.level];
                const IconComp = style.icon;
                return (
                  <Card key={alert.id} className={`${style.bg} ${style.border} border`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <IconComp className={`w-4 h-4 mt-0.5 shrink-0 ${style.iconColor}`} />
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold">{getTitle(alert)}</span>
                            <Badge className={`${style.badge} text-[10px]`}>{alert.level.toUpperCase()}</Badge>
                            <span className="text-[10px] text-muted-foreground font-mono">{alert.date}</span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{getDetail(alert)}</p>
                          <div className="flex items-center gap-1.5 pt-1">
                            <Zap className="w-3 h-3 text-amber-500" />
                            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                              {t.execAction || "Action"}: {getAction(alert)}
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="text-lg font-bold">{alert.kpi}</span>
                          <div className={`flex items-center justify-end gap-0.5 text-[10px] font-semibold ${
                            alert.trend === "up" ? "text-emerald-600" : alert.trend === "down" ? "text-red-600" : "text-muted-foreground"
                          }`}>
                            {alert.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : alert.trend === "down" ? <ArrowDownRight className="w-3 h-3" /> : <Circle className="w-2 h-2" />}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* ── Risk Matrix ──────────────────────────────────── */}
      {subTab === "risks" && <RiskHeatmap risks={riskMatrix} labels={t} locale={locale} />}

      {/* ── Target Tracker ──────────────────────────────── */}
      {subTab === "targets" && <TargetTracker targets={vnrTargets} labels={t} locale={locale} />}

      {/* ── Period Comparison ──────────────────────────── */}
      {subTab === "comparison" && <ComparisonView items={periodComparison} labels={t} locale={locale} />}
    </div>
  );
}