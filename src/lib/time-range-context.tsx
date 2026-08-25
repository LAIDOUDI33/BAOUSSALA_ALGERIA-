"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";

export interface TimeRange {
  start: number;
  end: number;
}

const DEFAULT_RANGE: TimeRange = { start: 2000, end: 2024 };

let currentRange: TimeRange = { ...DEFAULT_RANGE };
let rangeListeners: (() => void)[] = [];

function emitRangeChange() {
  for (const fn of rangeListeners) fn();
}

function subscribeRange(callback: () => void) {
  rangeListeners.push(callback);
  return () => { rangeListeners = rangeListeners.filter(l => l !== callback); };
}

function getRangeSnapshot(): TimeRange { return currentRange; }
function getRangeServerSnapshot(): TimeRange { return DEFAULT_RANGE; }

interface TimeRangeContextValue {
  range: TimeRange;
  setRange: (r: TimeRange) => void;
  filterByYear: <T extends Record<string, unknown>>(data: T[], yearKey?: string) => T[];
  resetRange: () => void;
}

const TimeRangeContext = createContext<TimeRangeContextValue>({
  range: DEFAULT_RANGE,
  setRange: () => {},
  filterByYear: (d) => d,
  resetRange: () => {},
});

export function TimeRangeProvider({ children }: { children: React.ReactNode }) {
  const range = useSyncExternalStore(subscribeRange, getRangeSnapshot, getRangeServerSnapshot);

  const setRange = useCallback((r: TimeRange) => {
    currentRange = { ...r };
    try { localStorage.setItem("baoussala-time-range", JSON.stringify(currentRange)); } catch {}
    emitRangeChange();
  }, []);

  const resetRange = useCallback(() => {
    currentRange = { ...DEFAULT_RANGE };
    try { localStorage.removeItem("baoussala-time-range"); } catch {}
    emitRangeChange();
  }, []);

  const filterByYear = useCallback(<T extends Record<string, unknown>>(data: T[], yearKey: string = "year"): T[] => {
    if (!data || !data.length) return data;
    if (currentRange.start === DEFAULT_RANGE.start && currentRange.end === DEFAULT_RANGE.end) return data;
    return data.filter(d => {
      const y = Number(d[yearKey]);
      return !isNaN(y) && y >= currentRange.start && y <= currentRange.end;
    });
  }, []);

  // Restore saved range on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("baoussala-time-range");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.start === "number" && typeof parsed.end === "number") {
          currentRange = parsed;
          emitRangeChange();
        }
      }
    } catch {}
  }, []);

  return (
    <TimeRangeContext.Provider value={{ range, setRange, filterByYear, resetRange }}>
      {children}
    </TimeRangeContext.Provider>
  );
}

export function useTimeRange() {
  return useContext(TimeRangeContext);
}