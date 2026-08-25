"use client";

import React from "react";
import { Brush } from "recharts";

interface BrushChartProps {
  dataKey?: string;
  data: Record<string, unknown>[];
  height?: number;
  startIndex?: number;
  endIndex?: number;
  onChange?: (range: { startIndex: number; endIndex: number }) => void;
}

/**
 * Reusable Brush component for Recharts time-series charts.
 * Place inside any ComposedChart/AreaChart/LineChart/BarChart.
 * Shows a mini overview with drag-to-select range.
 */
export function ChartBrush({
  dataKey = "year",
  data,
  height = 30,
  startIndex,
  endIndex,
  onChange,
}: BrushChartProps) {
  if (!data || data.length < 6) return null;

  return (
    <Brush
      dataKey={dataKey}
      height={height}
      stroke="#059669"
      fill="#d1fae5"
      fillOpacity={0.4}
      travellerWidth={6}
      startIndex={startIndex}
      endIndex={endIndex}
      onChange={onChange}
      tickFormatter={(v: string) => String(v)}
      tick={{ fontSize: 9 }}
    />
  );
}
