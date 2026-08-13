"use client";

import React, { useRef, useCallback, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileSpreadsheet, Image, FileImage, ChevronDown } from "lucide-react";
import { toPng, toSvg, toJpeg } from "html-to-image";

// ─── CSV Export Helper ─────────────────────────────────────────────────────
function downloadCsv(data: Record<string, unknown>[], filename: string) {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(","),
    ...data.map(row =>
      headers.map(h => {
        const val = row[h];
        const str = String(val ?? "");
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

// ─── Image Export Helpers ──────────────────────────────────────────────────
async function exportImage(element: HTMLElement, filename: string, format: "png" | "jpg" | "svg") {
  try {
    const bgColor = getComputedStyle(element).backgroundColor || "#ffffff";
    const opts = {
      backgroundColor: bgColor,
      pixelRatio: 2,
      cacheBust: true,
      style: { transform: "none" } as React.CSSProperties,
    };

    let dataUrl: string;
    let ext: string;

    switch (format) {
      case "jpg":
        dataUrl = await toJpeg(element, opts);
        ext = "jpg";
        break;
      case "svg":
        dataUrl = await toSvg(element, { ...opts, pixelRatio: 1 });
        ext = "svg";
        break;
      default:
        dataUrl = await toPng(element, opts);
        ext = "png";
    }

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${filename}.${ext}`;
    a.click();
  } catch (err) {
    console.warn(`${format.toUpperCase()} export failed:`, err);
  }
}

// ─── Unit label rendered inside chart area ─────────────────────────────────
function UnitLabel({ unit }: { unit: string }) {
  if (!unit) return null;
  return (
    <span className="absolute top-1.5 right-12 text-[10px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100/80 dark:bg-slate-700/60 px-1.5 py-0.5 rounded z-10 pointer-events-none">
      {unit}
    </span>
  );
}

// ─── Export Dropdown Button ────────────────────────────────────────────────
function ExportDropdown({ onExport, hasData }: { onExport: (fmt: "png" | "jpg" | "svg" | "csv") => void; hasData: boolean }) {
  const [open, setOpen] = useState(false);

  const formats = hasData
    ? [
        { key: "png" as const, label: "PNG", icon: Image },
        { key: "jpg" as const, label: "JPG", icon: FileImage },
        { key: "svg" as const, label: "SVG", icon: FileImage },
        { key: "csv" as const, label: "CSV", icon: FileSpreadsheet },
      ]
    : [
        { key: "png" as const, label: "PNG", icon: Image },
        { key: "jpg" as const, label: "JPG", icon: FileImage },
        { key: "svg" as const, label: "SVG", icon: FileImage },
      ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
        title="Export"
      >
        <Download className="w-3.5 h-3.5" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 min-w-[120px]">
            {formats.map(f => (
              <button
                key={f.key}
                onClick={() => { onExport(f.key); setOpen(false); }}
                className="flex items-center gap-2 w-full px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <f.icon className="w-3 h-3" />
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export function ChartCard({
  title,
  subtitle,
  children,
  className,
  unit,
  data,
  exportId,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  unit?: string;
  data?: Record<string, unknown>[];
  exportId?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const safeId = exportId || title.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 40);

  const handleExport = useCallback((format: "png" | "jpg" | "svg" | "csv") => {
    if (format === "csv") {
      if (data && data.length) downloadCsv(data, safeId);
      return;
    }
    if (cardRef.current) exportImage(cardRef.current, safeId, format);
  }, [safeId, data]);

  return (
    <Card ref={cardRef} className={`border-0 shadow-sm relative ${className || ""}`}>
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <CardTitle className="text-sm font-semibold">{title}</CardTitle>
            {subtitle && <CardDescription className="text-xs">{subtitle}</CardDescription>}
          </div>
          <ExportDropdown onExport={handleExport} hasData={!!(data && data.length > 0)} />
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 relative">
        <UnitLabel unit={unit || ""} />
        {children}
      </CardContent>
    </Card>
  );
}
