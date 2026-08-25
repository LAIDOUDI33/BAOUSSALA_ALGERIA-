"use client";

import React, { useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, TableProperties } from "lucide-react";

interface DataTableViewProps {
  data: Record<string, unknown>[];
  maxHeight?: string;
}

export function DataTableView({ data, maxHeight = "max-h-[320px]" }: DataTableViewProps) {
  const [sortKey, setSortKey] = useState<string>("");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const columns = useMemo(() => {
    if (!data || !data.length) return [];
    return Object.keys(data[0]);
  }, [data]);

  const sorted = useMemo(() => {
    if (!sortKey || !data) return data;
    return [...data].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (typeof va === "number" && typeof vb === "number") {
        return sortDir === "asc" ? va - vb : vb - va;
      }
      return sortDir === "asc"
        ? String(va ?? "").localeCompare(String(vb ?? ""))
        : String(vb ?? "").localeCompare(String(va ?? ""));
    });
  }, [data, sortKey, sortDir]);

  const toggleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(d => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  if (!data || !data.length) {
    return <p className="text-xs text-muted-foreground text-center py-8">No data</p>;
  }

  return (
    <div className={`${maxHeight} overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700`}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(col => (
              <TableHead
                key={col}
                className="text-[10px] font-semibold uppercase tracking-wider h-8 px-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50 select-none whitespace-nowrap"
                onClick={() => toggleSort(col)}
              >
                <span className="flex items-center gap-1">
                  {col}
                  <ArrowUpDown className={`w-2.5 h-2.5 ${sortKey === col ? "text-emerald-600" : "opacity-30"}`} />
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row, i) => (
            <TableRow key={i} className="text-xs">
              {columns.map(col => (
                <TableCell key={col} className="px-2 py-1.5 whitespace-nowrap tabular-nums">
                  {typeof row[col] === "number"
                    ? row[col] % 1 !== 0 ? (row[col] as number).toLocaleString(undefined, { maximumFractionDigits: 2 }) : (row[col] as number).toLocaleString()
                    : String(row[col] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Toggle button for switching chart/table view
export function ChartTableToggle({
  showTable,
  onToggle,
}: {
  showTable: boolean;
  onToggle: () => void;
}) {
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