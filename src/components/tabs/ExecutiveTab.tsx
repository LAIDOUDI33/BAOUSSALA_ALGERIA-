"use client";

import { useI18n } from "@/lib/i18n/context";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  executiveKPIs, monthlyTrends, sectorPerformance, nationalPerformance, strategicAlerts,
} from "@/lib/executive-data";
import {
  Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip as RTooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar,
} from "recharts";
import {
  TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight,
  Activity, Shield, AlertTriangle, Info, CheckCircle2,
  Circle, BarChart3, Target, Zap, Globe, DollarSign,
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

// ─── Main Component ───────────────────────────────────────────────────────

export default function ExecutiveTab({ t }: { t: Record<string, string> }) {
  const { locale } = useI18n();

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
    <div className="space-y-6">
      {/* ── Header Bar ──────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">{t.execDashboardTitle || "Executive Dashboard"}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {t.execDashboardSub || "Strategic overview of national economic indicators"}
          </p>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono">
          {t.execLastUpdate || "Last update"}: {new Date().toLocaleDateString(locale === "ar" ? "ar-DZ" : locale === "fr" ? "fr-DZ" : "en-US", { day: "numeric", month: "short", year: "numeric" })}
        </Badge>
      </div>

      {/* ── KPI Cards Row ───────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {executiveKPIs.map((kpi) => (
          <ExecutiveKpiCard key={kpi.key} kpi={kpi} labels={t} />
        ))}
      </div>

      {/* ── Performance Score + Components ──────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PerformanceScoreRing
          score={nationalPerformance.score}
          prevScore={nationalPerformance.previousScore}
          labels={t}
        />
        <ComponentBreakdown components={nationalPerformance.components} labels={t} />
      </div>

      <Separator />

      {/* ── Trends Chart ────────────────────────────────────── */}
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

      {/* ── Sector Performance Radar ────────────────────────── */}
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

        {/* Sector Table */}
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

      {/* ── Strategic Alerts ────────────────────────────────── */}
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
    </div>
  );
}