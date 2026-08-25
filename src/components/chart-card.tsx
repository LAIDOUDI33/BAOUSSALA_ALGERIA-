"use client";

import React, { useRef, useCallback, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileSpreadsheet, Image, FileImage, TableProperties } from "lucide-react";
import { DataTableView } from "@/components/data-table-view";

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

// ─── Image Export Helpers (dynamic import to avoid SSR issues) ─────────────
async function exportImage(element: HTMLElement, filename: string, format: "png" | "jpg" | "svg") {
  try {
    const htmlToImage = await import("html-to-image");
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
        dataUrl = await htmlToImage.toJpeg(element, opts);
        ext = "jpg";
        break;
      case "svg":
        dataUrl = await htmlToImage.toSvg(element, { ...opts, pixelRatio: 1 });
        ext = "svg";
        break;
      default:
        dataUrl = await htmlToImage.toPng(element, opts);
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
  if (!unit || typeof unit !== "string") return null;
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

// ─── Table Toggle Button ──────────────────────────────────────────────────
function TableToggle({ showTable, onToggle, hasData }: { showTable: boolean; onToggle: () => void; hasData: boolean }) {
  if (!hasData) return null;
  return (
    <button
      onClick={onToggle}
      className={`p-1.5 rounded-md transition-colors ${showTable ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"}`}
      title={showTable ? "Show chart" : "Show data table"}
    >
      <TableProperties className="w-3.5 h-3.5" />
    </button>
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
  enableTableToggle = true,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  unit?: string;
  data?: Record<string, unknown>[];
  exportId?: string;
  enableTableToggle?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showTable, setShowTable] = useState(false);
  const hasData = !!(data && data.length > 0);
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
          <div className="flex items-center gap-1">
            <TableToggle showTable={showTable} onToggle={() => setShowTable(v => !v)} hasData={hasData && enableTableToggle} />
            <ExportDropdown onExport={handleExport} hasData={hasData} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 relative">
        {unit && typeof unit === "string" && <UnitLabel unit={unit} />}
        {showTable && hasData ? <DataTableView data={data} maxHeight="max-h-[320px]" /> : children}
      </CardContent>
    </Card>
  );
}