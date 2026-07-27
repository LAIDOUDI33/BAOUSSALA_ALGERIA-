"use client";

import React from "react";
import { Card, CardContent } from "components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ExportableChartCard } from "@/components/exportable-chart";

// ─── Color palette ──────────────────────────────────────────────────────────
const COLORS = {
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

function KpiCard({ title, value, unit, change, changeDir, icon: Icon, color }

function ChartCard({ title, subtitle, children, className }

export { COLORS, KpiCard, ChartCard, ExportableChartCard };
