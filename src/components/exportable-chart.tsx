"use client";

import React, { useRef, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import { Download, FileSpreadsheet, ImageIcon } from "lucide-react";
import { toPng } from "html-to-image";

// ─── CSV Export Helper ─────────────────────────────────────────────────────
function downloadCsv(data: Record<string, unknown>[], filename: string) {
  if (!data.length) return;
  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(","),
    ...data.map(row =>
      headers.map(h => {
        const val = row[h];
        const str = String(val ?? "");
        // Escape quotes and wrap if contains comma/newline/quote
        return str.includes(",") || str.includes("\n") || str.includes('"')
          ? `"${str.replace(/"/g, '""')}"`
          : str;
      }).join(",")
    ),
  ];
  const blob = new Blob(["\uFEFF" + csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── PNG Export Helper ─────────────────────────────────────────────────────
async function downloadPng(element: HTMLElement, filename: string) {
  try {
    const dataUrl = await toPng(element, {
      backgroundColor: getComputedStyle(element).backgroundColor || "#ffffff",
      pixelRatio: 2,
      cacheBust: true,
    });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${filename}.png`;
    a.click();
  } catch (err) {
    console.warn("PNG export failed:", err);
  }
}

// ─── Component ─────────────────────────────────────────────────────────────
export function ExportableChartCard({
  title,
  subtitle,
  children,
  className,
  data,
  exportId,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  data?: Record<string, unknown>[];
  exportId?: string;
}) {
  const { t } = useI18n();
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePng = useCallback(() => {
    if (cardRef.current) downloadPng(cardRef.current, exportId || title);
  }, [exportId, title]);

  const handleCsv = useCallback(() => {
    if (data && data.length) downloadCsv(data, exportId || title);
  }, [data, exportId, title]);

  return (
    <Card
      ref={cardRef}
      className={`border border-slate-200/80 dark:border-slate-700/60 shadow-sm bg-white dark:bg-slate-800/80 ${className || ""}`}
    >
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-100">{title}</CardTitle>
            {subtitle && <CardDescription className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</CardDescription>}
          </div>
          <div className="flex items-center gap-0.5 flex-shrink-0">
            {data && data.length > 0 && (
              <button
                onClick={handleCsv}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                title={t.labelExportCsv}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={handlePng}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              title={t.labelExportPng}
            >
              <ImageIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">{children}</CardContent>
    </Card>
  );
}
