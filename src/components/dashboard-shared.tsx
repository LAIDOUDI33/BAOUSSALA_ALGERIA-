"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ExportableChartCard } from "@/components/exportable-chart";

// ─── Color palette ──────────────────────────────────────────────────────────
export const COLORS = {
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

// ─── KPI Card ──────────────────────────────────────────────────────────────
export function KpiCard({ title, value, unit, change, changeDir, icon: Icon, color }: {
  title: string; value: string | number; unit?: string;
  change?: number; changeDir?: "up" | "down"; icon: React.ElementType; color: string;
}) {
  return (
    <Card className="border border-slate-200/80 dark:border-slate-700/60 shadow-sm min-h-[130px] bg-white dark:bg-slate-800/80">
      <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bold leading-tight tracking-wide uppercase">{title}</span>
          <div className="p-2.5 rounded-xl flex-shrink-0" style={{ backgroundColor: color + "20" }}>
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-[34px] font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">{value}</span>
          {unit && <span className="text-sm sm:text-[15px] text-slate-500 dark:text-slate-400 font-semibold">{unit}</span>}
        </div>
        {change !== undefined && changeDir && (
          <div className={`inline-flex items-center gap-1 mt-2.5 text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full w-fit ${changeDir === "up" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400" : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400"}`}>
            {changeDir === "up" ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
            {change > 0 ? "+" : ""}{change}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Chart Card (without export) ───────────────────────────────────────────
export function ChartCard({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
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
