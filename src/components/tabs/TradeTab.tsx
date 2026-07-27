"use client";

import { tradeAnnual, tradeByPartner, tradeQuarterly } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, XAxis, YAxis } from "recharts";
import { DollarSign, Factory, Globe, Package } from "lucide-react";

export function TradeTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiExports} value="48.5" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiImports} value="37.0" unit="bn $" change={6.3} changeDir="up" icon={Package} color={COLORS.red} />
              <KpiCard title={t.kpiTradeBalance} value="11.5" unit="bn $" change={1.3} changeDir="up" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title={t.kpiHydroPct} value="80.0" unit="%" icon={Factory} color={COLORS.amber} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartTradeAnnual} subtitle={t.chartTradeAnnualSub} exportId="chartTradeAnnual" data={tradeAnnual}>
                <ChartContainer config={{ exportsBn: { label: t.chartExports, color: COLORS.emerald }, importsBn: { label: t.chartImports, color: COLORS.red }, balanceBn: { label: t.chartBalance, color: COLORS.blue } }} className="h-[340px] w-full">
                  <ComposedChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartExports} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartImports} />
                    <Line type="monotone" dataKey="balanceBn" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartBalance} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartHydroShare} subtitle={t.chartHydroShareSub} exportId="chartHydroShare">
                <ChartContainer config={{ hydroPct: { label: t.chartHydroPct, color: COLORS.amber } }} className="h-[340px] w-full">
                  <AreaChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[60, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="hydroPct" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.5} name={t.chartHydroPct} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartTradeQuarterly} subtitle={t.chartTradeQuarterlySub} exportId="chartTradeQuarterly" data={tradeQuarterly}>
                <ChartContainer config={{
                  exportsBn: { label: t.chartExports, color: COLORS.emerald },
                  importsBn: { label: t.chartImports, color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} name={t.chartExports} />
                    <Bar dataKey="importsBn" fill={COLORS.red} radius={[2, 2, 0, 0]} name={t.chartImports} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartTradePartners} subtitle={t.chartTradePartnersSub} exportId="chartTradePartners" data={tradeByPartner}>
                <ChartContainer config={{
                  exports: { label: t.chartExports, color: COLORS.emerald },
                  imports: { label: t.chartImports, color: COLORS.red },
                }} className="h-[280px] w-full">
                  <BarChart data={tradeByPartner} layout="vertical" margin={{ top: 5, right: 10, left: 65, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="partner" type="category" tick={{ fontSize: 10 }} tickLine={false} width={60} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="exports" fill={COLORS.emerald} radius={[0, 4, 4, 0]} name={t.chartExports} />
                    <Bar dataKey="imports" fill={COLORS.red} radius={[0, 4, 4, 0]} name={t.chartImports} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default TradeTab;
