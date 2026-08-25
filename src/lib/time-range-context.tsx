"use client";

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

export interface TimeRange {
  start: number;
  end: number;
}

const DEFAULT_RANGE: TimeRange = { start: 2000, end: 2024 };
const STORAGE_KEY = "baoussala-time-range";

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
  const [range, setRangeState] = useState<TimeRange>(DEFAULT_RANGE);

  // Restore saved range from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.start === "number" && typeof parsed.end === "number") {
          setRangeState(parsed);
        }
      }
    } catch {}
  }, []);

  const setRange = useCallback((r: TimeRange) => {
    setRangeState(r);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); } catch {}
  }, []);

  const resetRange = useCallback(() => {
    setRangeState(DEFAULT_RANGE);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  const filterByYear = useCallback(<T extends Record<string, unknown>>(data: T[], yearKey: string = "year"): T[] => {
    if (!data || !data.length) return data;
    if (range.start === DEFAULT_RANGE.start && range.end === DEFAULT_RANGE.end) return data;
    return data.filter(d => {
      const y = Number(d[yearKey]);
      return !isNaN(y) && y >= range.start && y <= range.end;
    });
  }, [range.start, range.end]);

  const value = useMemo<TimeRangeContextValue>(() => ({
    range,
    setRange,
    filterByYear,
    resetRange,
  }), [range, setRange, filterByYear, resetRange]);

  return (
    <TimeRangeContext.Provider value={value}>
      {children}
    </TimeRangeContext.Provider>
  );
}

export function useTimeRange() {
  return useContext(TimeRangeContext);
}
