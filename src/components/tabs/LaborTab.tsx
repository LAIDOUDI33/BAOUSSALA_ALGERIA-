"use client";

import { laborMarket } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Activity, Building2, Heart, TrendingDown, TrendingUp, Users } from "lucide-react";

export function LaborTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <KpiCard title={t.kpiUnempRate} value="10.8" unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.red} />
              <KpiCard title={t.kpiActivityRate} value="44.0" unit="%" change={0.5} changeDir="up" icon={Activity} color={COLORS.emerald} />
              <KpiCard title={t.kpiYouthUnemp} value="22.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.amber} />
              <KpiCard title={t.kpiFemalePartic} value="17.2" unit="%" change={0.4} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiInformal} value="43.0" unit="%" change={-0.8} changeDir="down" icon={Building2} color={COLORS.slate} />
              <KpiCard title={t.kpiEmpPop} value="39.2" unit="%" change={0.6} changeDir="up" icon={TrendingUp} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartUnempRate} subtitle={t.chartUnempRateSub} exportId="chartUnempRate" data={laborMarket}>
                <ChartContainer config={{
                  unemploymentPct: { label: t.chartTotalPct, color: COLORS.red },
                  youthUnemp: { label: t.chartYouthPct, color: COLORS.amber },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="youthUnemp" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartYouthPct} />
                    <Line type="monotone" dataKey="unemploymentPct" stroke={COLORS.red} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartTotalPct} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartActivityFemale} subtitle={t.chartActivityFemaleSub} exportId="chartActivityFemale" data={laborMarket}>
                <ChartContainer config={{
                  activityRate: { label: t.chartActRate, color: COLORS.emerald },
                  femalePartic: { label: t.chartFemPartic, color: COLORS.purple },
                  informalPct: { label: t.chartInformalPct, color: COLORS.slate },
                }} className="h-[320px] w-full">
                  <LineChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[10, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="informalPct" stroke={COLORS.slate} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartInformalPct} />
                    <Line type="monotone" dataKey="femalePartic" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartFemPartic} />
                    <Line type="monotone" dataKey="activityRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartActRate} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <ExportableChartCard title={t.chartEmpPop} subtitle={t.chartEmpPopSub} exportId="chartEmpPop" data={laborMarket}>
              <ChartContainer config={{ employmentPop: { label: t.chartEmpPopPct, color: COLORS.blue } }} className="h-[250px] w-full">
                <BarChart data={laborMarket} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[35, 42]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="employmentPop" fill={COLORS.blue} radius={[4, 4, 0, 0]} name={t.chartEmpPopPct} />
                </BarChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default LaborTab;
