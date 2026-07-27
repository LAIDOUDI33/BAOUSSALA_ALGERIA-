"use client";

import { btpData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Activity, Building2, Factory, Users } from "lucide-react";

export function BtpTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHousingUnits} value="350" unit="K" change={2.9} changeDir="up" icon={Building2} color={COLORS.emerald} />
              <KpiCard title={t.kpiCementProd} value="24.5" unit="Mt" change={4.3} changeDir="up" icon={Factory} color={COLORS.blue} />
              <KpiCard title={t.kpiBTPGdp} value="10.2" unit="%" icon={Activity} color={COLORS.amber} />
              <KpiCard title={t.kpiBTPEmploy} value="1150" unit="K" icon={Users} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartHousingUnits} subtitle={t.chartHousingUnitsSub} exportId="chartHousingUnits">
                <ChartContainer config={{ housingUnitsK: { label: t.chartHousingLabel, color: COLORS.emerald }, buildingPermitsK: { label: t.chartPermitsLabel, color: COLORS.amber } }} className="h-[320px] w-full">
                  <ComposedChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="housingUnitsK" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartHousingLabel} />
                    <Line type="monotone" dataKey="buildingPermitsK" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 3 }} name={t.chartPermitsLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartCementSteel} subtitle={t.chartCementSteelSub} exportId="chartCementSteel">
                <ChartContainer config={{ cementMt: { label: t.chartCementLabel, color: COLORS.blue }, steelMt: { label: t.chartSteelLabel, color: COLORS.slate } }} className="h-[320px] w-full">
                  <LineChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="cementMt" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCementLabel} />
                    <Line type="monotone" dataKey="steelMt" stroke={COLORS.slate} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartSteelLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartBTPCostIndex} subtitle={t.chartBTPCostIndexSub} exportId="chartBTPCostIndex">
                <ChartContainer config={{ costIndex: { label: t.chartCostIndexLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <BarChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[100, 170]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="costIndex" fill={COLORS.amber} radius={[4, 4, 0, 0]} name={t.chartCostIndexLabel} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartBTPInvest} subtitle={t.chartBTPInvestSub} exportId="chartBTPInvest">
                <ChartContainer config={{ publicInvestBn: { label: t.chartPublicInvestLabel, color: COLORS.purple } }} className="h-[280px] w-full">
                  <AreaChart data={btpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="publicInvestBn" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.chartPublicInvestLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default BtpTab;
