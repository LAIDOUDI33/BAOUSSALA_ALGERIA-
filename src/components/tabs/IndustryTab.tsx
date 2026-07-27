"use client";

import { constructionIndex, ipiQuarterly, ippiQuarterly } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Activity, Building2, Factory } from "lucide-react";

export function IndustryTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiIpi} value="114.5" change={1.8} changeDir="up" icon={Factory} color={COLORS.emerald} />
              <KpiCard title={t.kpiMining} value="108.0" change={1.4} changeDir="up" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiManufacturing} value="109.0" change={1.8} changeDir="up" icon={Building2} color={COLORS.blue} />
              <KpiCard title={t.kpiEnergy} value="118.0" change={0.4} changeDir="up" icon={Activity} color={COLORS.cyan} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartIpi} subtitle={t.chartIpiSub} exportId="chartIpi" data={ipiQuarterly}>
                <ChartContainer config={{
                  mining: { label: t.sectorMining, color: COLORS.amber },
                  manufacturing: { label: t.sectorManufacturing, color: COLORS.blue },
                  energy: { label: t.sectorEnergy, color: COLORS.cyan },
                  ipi: { label: t.chartIpiTotal, color: COLORS.emerald },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[75, 125]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="energy" stroke={COLORS.cyan} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorEnergy} />
                    <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorMining} />
                    <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.sectorManufacturing} />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartIpiTotal} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartIpiIppi} subtitle={t.chartIpiIppiSub} exportId="chartIpiIppi" data={ipiQuarterly}>
                <ChartContainer config={{
                  ipi: { label: t.chartIpiProd, color: COLORS.emerald },
                  ippi: { label: t.chartIppiPrices, color: COLORS.red },
                }} className="h-[340px] w-full">
                  <LineChart data={ipiQuarterly.map((d, i) => ({
                    period: d.period, ipi: d.ipi, ippi: ippiQuarterly[i]?.ippi || 0
                  }))} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="ipi" stroke={COLORS.emerald} strokeWidth={2} dot={false} name={t.chartIpiProd} />
                    <Line type="monotone" dataKey="ippi" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.chartIppiPrices} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <ExportableChartCard title={t.chartConstruction} subtitle={t.chartConstructionSub} exportId="chartConstruction" data={constructionIndex}>
              <ChartContainer config={{ index: { label: t.chartConstructionIdx, color: COLORS.amber } }} className="h-[250px] w-full">
                <BarChart data={constructionIndex} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[100, 170]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="index" fill={COLORS.amber} radius={[4, 4, 0, 0]} name={t.chartConstructionIdx} />
                </BarChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default IndustryTab;
