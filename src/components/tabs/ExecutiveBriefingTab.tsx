"use client";

import { useI18n } from "@/lib/i18n/context";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  strategicAlerts, actionItems, keyDecisions, performanceSummary,
} from "@/lib/executive-data";
import {
  AlertTriangle, Info, CheckCircle2, Clock, ArrowUpRight,
  ArrowDownRight, Circle, FileText, Target, ChevronRight,
  Shield, Zap, Briefcase, CalendarDays, TrendingUp, Printer,
} from "lucide-react";

// ─── Style Maps ────────────────────────────────────────────────────────────
const ALERT_LEVEL = {
  critical: { bg: "bg-red-50 dark:bg-red-950/20", border: "border-l-4 border-l-red-500", icon: AlertTriangle, color: "text-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" },
  warning: { bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-l-4 border-l-amber-500", icon: AlertTriangle, color: "text-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" },
  info: { bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-l-4 border-l-blue-500", icon: Info, color: "text-blue-500", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" },
};

const PRIORITY_STYLES = {
  high: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400", dot: "bg-red-500" },
  medium: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400", dot: "bg-amber-500" },
  low: { bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-600 dark:text-slate-400", dot: "bg-slate-400" },
};

const STATUS_MAP = {
  pending: { label: "Pending", icon: Clock, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" },
  inReview: { label: "In Review", icon: ArrowUpRight, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  inProgress: { label: "In Progress", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
  completed: { label: "Completed", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
};

// ─── Main Component ───────────────────────────────────────────────────────

export default function ExecutiveBriefingTab({ t }: { t: Record<string, string> }) {
  const { locale } = useI18n();

  const getLocalized = (obj: Record<string, string>, suffix: string) => {
    if (locale === "ar") return obj[`${suffix}Ar`] || obj[`${suffix}En`];
    if (locale === "fr") return obj[`${suffix}Fr`] || obj[`${suffix}En`];
    return obj[`${suffix}En`];
  };

  const getAlertTitle = (a: typeof strategicAlerts[0]) => {
    if (locale === "ar") return a.titleAr;
    if (locale === "fr") return a.titleFr;
    return a.titleEn;
  };
  const getAlertDetail = (a: typeof strategicAlerts[0]) => {
    if (locale === "ar") return a.detailAr;
    if (locale === "fr") return a.detailFr;
    return a.detailEn;
  };

  const summary = performanceSummary.week;
  const highlights = locale === "ar" ? summary.highlightsAr : locale === "fr" ? summary.highlightsFr : summary.highlightsEn;
  const risks = locale === "ar" ? summary.risksAr : locale === "fr" ? summary.risksFr : summary.risksEn;
  const periodLabel = locale === "ar" ? summary.periodAr : locale === "fr" ? summary.periodFr : summary.periodEn;

  const getCategory = (item: typeof actionItems[0]) => {
    if (locale === "ar") return item.categoryAr;
    if (locale === "fr") return item.categoryFr;
    return item.categoryEn;
  };

  const getDecisionTitle = (d: typeof keyDecisions[0]) => {
    if (locale === "ar") return d.decisionAr;
    if (locale === "fr") return d.decisionFr;
    return d.decisionEn;
  };

  const getActionTitle = (item: typeof actionItems[0]) => {
    if (locale === "ar") return item.titleAr;
    if (locale === "fr") return item.titleFr;
    return item.titleEn;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* ── Briefing Header ──────────────────────────────── */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold">{t.execBriefTitle || "Executive Briefing"}</h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{periodLabel}</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-muted hover:bg-muted/50 transition-colors"
        >
          <Printer className="w-3.5 h-3.5" />
          {t.execBriefPrint || "Print Briefing"}
        </button>
      </div>

      {/* ── Weekly Highlights ─────────────────────────────── */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            <CardTitle className="text-sm font-semibold">{t.execBriefHighlights || "Key Highlights"}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ── Risk Factors ──────────────────────────────────── */}
      <Card className="border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/10">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <CardTitle className="text-sm font-semibold">{t.execBriefRisks || "Risk Factors"}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5">
            {risks.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* ── Action Items ──────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-semibold">{t.execBriefActions || "Pending Action Items"}</h3>
          <Badge variant="outline" className="text-[10px]">{actionItems.length}</Badge>
        </div>
        <div className="space-y-2.5">
          {actionItems.map((item) => {
            const pStyle = PRIORITY_STYLES[item.priority];
            const sInfo = STATUS_MAP[item.status];
            const StatusIcon = sInfo.icon;
            return (
              <Card key={item.id} className={`border ${pStyle.bg} hover:shadow-sm transition-shadow`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${pStyle.dot}`} />
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-[10px] font-semibold">{getCategory(item)}</Badge>
                        <Badge className={`${pStyle.bg} ${pStyle.text} text-[10px] border-0`}>
                          {item.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{getActionTitle(item)}</p>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3 h-3" />
                          {item.deadline}
                        </span>
                        <span className={`flex items-center gap-1 ${sInfo.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {t[`execBriefStatus${item.status.charAt(0).toUpperCase() + item.status.slice(1)}`] || sInfo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* ── Key Decisions Tracking ────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-semibold">{t.execBriefDecisions || "Key Decisions Tracking"}</h3>
        </div>
        <div className="space-y-3">
          {keyDecisions.map((d) => {
            const sInfo = STATUS_MAP[d.status];
            const StatusIcon = sInfo.icon;
            return (
              <Card key={d.id} className="border-0 shadow-sm">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium leading-relaxed flex-1">{getDecisionTitle(d)}</p>
                    <span className={`flex items-center gap-1 text-[10px] font-medium ${sInfo.color} shrink-0`}>
                      <StatusIcon className="w-3 h-3" />
                      {d.progress}%
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={d.progress} className="h-1.5 flex-1" />
                    <span className="text-[10px] text-muted-foreground font-mono">{d.date}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* ── Strategic Alerts Summary ──────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-semibold">{t.execBriefAlerts || "Active Alerts"}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {strategicAlerts.map((alert) => {
            const aStyle = ALERT_LEVEL[alert.level];
            const AIcon = aStyle.icon;
            return (
              <Card key={alert.id} className={`${aStyle.bg} ${aStyle.border} border`}>
                <CardContent className="p-3.5">
                  <div className="flex items-start gap-2.5">
                    <AIcon className={`w-4 h-4 mt-0.5 shrink-0 ${aStyle.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold leading-tight">{getAlertTitle(alert)}</span>
                        <span className={`text-[10px] font-bold ml-auto ${alert.trend === "up" ? "text-emerald-600" : alert.trend === "down" ? "text-red-600" : "text-muted-foreground"}`}>
                          {alert.kpi}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{getAlertDetail(alert)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* ── Footer Disclaimer ─────────────────────────────── */}
      <div className="text-center py-3">
        <p className="text-[10px] text-muted-foreground">
          {t.execBriefDisclaimer || "This briefing is generated from ONS data and is intended for internal executive use only."}
        </p>
      </div>
    </div>
  );
}