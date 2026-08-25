"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTimeRange } from "@/lib/time-range-context";
import { Button } from "@/components/ui/button";
import { CalendarRange, RotateCcw, ChevronDown, Check } from "lucide-react";

const PRESETS = [
  { label: "5Y", getRange: (max: number) => ({ start: max - 4, end: max }) },
  { label: "10Y", getRange: (max: number) => ({ start: max - 9, end: max }) },
  { label: "15Y", getRange: (max: number) => ({ start: max - 14, end: max }) },
  { label: "20Y", getRange: (max: number) => ({ start: max - 19, end: max }) },
  { label: "ALL", getRange: (_max: number, min: number) => ({ start: min, end: _max }) },
];

const MIN_YEAR = 2000;
const MAX_YEAR = 2024;

export function TimeRangeSelector() {
  const { range, setRange, resetRange } = useTimeRange();
  const [open, setOpen] = useState(false);
  const [localStart, setLocalStart] = useState(range.start);
  const [localEnd, setLocalEnd] = useState(range.end);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const rangeKey = `${range.start}-${range.end}`;

  // Reset local inputs when dropdown opens (captures current global range)
  const handleToggle = useCallback(() => {
    if (!open) {
      setLocalStart(range.start);
      setLocalEnd(range.end);
    }
    setOpen(v => !v);
  }, [open, range.start, range.end]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isActive = range.start > MIN_YEAR || range.end < MAX_YEAR;

  const applyPreset = useCallback((preset: typeof PRESETS[number]) => {
    const r = preset.getRange(MAX_YEAR, MIN_YEAR);
    setLocalStart(r.start);
    setLocalEnd(r.end);
    setRange(r);
  }, [setRange]);

  const applyCustom = useCallback(() => {
    const s = Math.max(MIN_YEAR, Math.min(localStart, localEnd));
    const e = Math.min(MAX_YEAR, Math.max(localStart, localEnd));
    setLocalStart(s);
    setLocalEnd(e);
    setRange({ start: s, end: e });
  }, [localStart, localEnd, setRange]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant={isActive ? "default" : "outline"}
        size="sm"
        onClick={handleToggle}
        className={`gap-1.5 text-xs h-8 ${isActive ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
      >
        <CalendarRange className="w-3.5 h-3.5" />
        <span>{range.start}–{range.end}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </Button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1.5 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-3 min-w-[220px]">
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {PRESETS.map(p => {
                const pr = p.getRange(MAX_YEAR, MIN_YEAR);
                const isCurrent = pr.start === range.start && pr.end === range.end;
                return (
                  <button
                    key={p.label}
                    onClick={() => applyPreset(p)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${isCurrent ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}`}
                  >
                    {isCurrent && <Check className="w-3 h-3" />}
                    {p.label}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
              <p className="text-[10px] font-medium text-muted-foreground mb-2 uppercase tracking-wider">Custom</p>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={localStart}
                  onChange={e => setLocalStart(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-2 py-1.5 text-xs text-center focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <span className="text-xs text-muted-foreground">–</span>
                <input
                  type="number"
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  value={localEnd}
                  onChange={e => setLocalEnd(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-2 py-1.5 text-xs text-center focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={applyCustom}
                  className="flex-1 h-7 text-xs bg-emerald-600 hover:bg-emerald-700"
                >
                  Apply
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => { resetRange(); setOpen(false); }}
                  className="h-7 text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}