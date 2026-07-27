"use client";

import { fiscalData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, XAxis, YAxis } from "recharts";
import { Activity, DollarSign, Factory, Scale } from "lucide-react";

export function FiscalTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiSavings} value="42.5" unit="% GDP" icon={DollarSign} color={COLORS.emerald} />
              <KpiCard title={t.kpiInvest} value="40.0" unit="% GDP" icon={Factory} color={COLORS.blue} />
              <KpiCard title={t.kpiDebt} value="41.0" unit="%" change={-2.0} changeDir="down" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiFiscalDeficit} value="1.0" unit="% GDP" change={-1.0} changeDir="down" icon={Activity} color={COLORS.purple} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartFiscal} subtitle={t.chartFiscalSub} exportId="chartFiscal">
                <ChartContainer config={{
                  revenuePctGdp: { label: t.chartRevenue, color: COLORS.emerald },
                  expenditurePctGdp: { label: t.chartExpenditure, color: COLORS.red },
                  deficitPctGdp: { label: t.chartDeficit, color: COLORS.amber },
                }} className="h-[340px] w-full">
                  <ComposedChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="revenuePctGdp" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartRevenue} />
                    <Bar dataKey="expenditurePctGdp" fill={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartExpenditure} />
                    <Line type="monotone" dataKey="deficitPctGdp" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartDeficit} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartSavingsInvest} subtitle={t.chartSavingsInvestSub} exportId="chartSavingsInvest">
                <ChartContainer config={{
                  savingsRate: { label: t.chartSavingsRate, color: COLORS.emerald },
                  investRate: { label: t.chartInvestRate, color: COLORS.blue },
                }} className="h-[340px] w-full">
                  <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[30, 55]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="investRate" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} name={t.chartInvestRate} />
                    <Area type="monotone" dataKey="savingsRate" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.4} name={t.chartSavingsRate} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <ExportableChartCard title={t.chartDebt} subtitle={t.chartDebtSub} exportId="chartDebt">
              <ChartContainer config={{ debtPctGdp: { label: t.chartDebtGdp, color: COLORS.red } }} className="h-[280px] w-full">
                <AreaChart data={fiscalData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 50]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="debtPctGdp" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.5} name={t.chartDebtGdp} />
                </AreaChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default FiscalTab;
