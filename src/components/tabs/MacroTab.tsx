"use client";

import { gdpAnnual, gdpBySector, gdpQuarterly, latestKPIs } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, XAxis, YAxis } from "recharts";
import { DollarSign, Factory, Heart, Scale, TrendingUp, Users } from "lucide-react";

export function MacroTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <KpiCard title={t.kpiGdpGrowth} value={latestKPIs.gdpGrowth} unit="%" change={0.2} changeDir="up" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.kpiGdp2024} value="205" unit="bn $" icon={DollarSign} color={COLORS.blue} />
              <KpiCard title={t.kpiInflation} value={latestKPIs.inflation} unit="%" change={-1.0} changeDir="down" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.kpiUnemployment} value={latestKPIs.unemployment} unit="%" change={-0.5} changeDir="down" icon={Users} color={COLORS.amber} />
              <KpiCard title={t.kpiPopulation} value="46.8" unit="M" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiInvestmentRate} value={latestKPIs.investmentRate} unit="% GDP" icon={Factory} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartGdpGrowth} subtitle={t.chartGdpGrowthSub} exportId="chartGdpGrowth" data={gdpAnnual}>
                <ChartContainer config={{ gdpBillionUsd: { label: t.chartGdpBnUsd, color: COLORS.emerald }, growthPct: { label: t.chartGrowthPct, color: COLORS.blue } }} className="h-[320px] w-full">
                  <ComposedChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[-5, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="gdpBillionUsd" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartGdpBnUsd} />
                    <Line yAxisId="right" type="monotone" dataKey="growthPct" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} name={t.chartGrowthPct} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartGdpSector} subtitle={t.chartGdpSectorSub} exportId="chartGdpSector" data={gdpBySector}>
                <ChartContainer config={{
                  agriculture: { label: t.sectorAgriculture, color: COLORS.emerald },
                  industry: { label: t.sectorIndustry, color: COLORS.blue },
                  construction: { label: t.sectorConstruction, color: COLORS.amber },
                  services: { label: t.sectorServices, color: COLORS.purple },
                }} className="h-[320px] w-full">
                  <AreaChart data={gdpBySector} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="services" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} name={t.sectorServices} />
                    <Area type="monotone" stackId="1" dataKey="construction" fill={COLORS.amber} stroke={COLORS.amber} fillOpacity={0.7} name={t.sectorConstruction} />
                    <Area type="monotone" stackId="1" dataKey="industry" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} name={t.sectorIndustry} />
                    <Area type="monotone" stackId="1" dataKey="agriculture" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} name={t.sectorAgriculture} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartQuarterlyGdp} subtitle={t.chartQuarterlyGdpSub} exportId="chartQuarterlyGdp" data={gdpQuarterly}>
                <ChartContainer config={{ growthPct: { label: t.chartGrowthPct, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <BarChart data={gdpQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[-8, 6]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="growthPct" radius={[2, 2, 0, 0]} name={t.chartGrowthPct}>
                      {gdpQuarterly.map((d, i) => (
                        <Cell key={i} fill={d.growthPct >= 0 ? COLORS.emerald : COLORS.red} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartGdpPerCapita} subtitle={t.chartGdpPerCapitaSub} exportId="chartGdpPerCapita" data={gdpAnnual}>
                <ChartContainer config={{ perCapitaUsd: { label: t.chartGdpCapita, color: COLORS.blue } }} className="h-[280px] w-full">
                  <AreaChart data={gdpAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="perCapitaUsd" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.4} name={t.chartGdpCapita} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default MacroTab;
