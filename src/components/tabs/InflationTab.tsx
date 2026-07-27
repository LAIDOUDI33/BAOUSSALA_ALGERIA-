"use client";

import { cpiByDivision, cpiMonthly, ippiQuarterly } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, Pie, PieChart, XAxis, YAxis } from "recharts";
import { Activity, Package, Scale, TrendingDown } from "lucide-react";

export function InflationTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiCpi} value="344.2" change={0.4} changeDir="up" icon={Scale} color={COLORS.red} />
              <KpiCard title={t.kpiYoyInflation} value="3.0" unit="%" change={-1.0} changeDir="down" icon={TrendingDown} color={COLORS.emerald} />
              <KpiCard title={t.kpiFoodInflation} value="2.8" unit="%" change={-1.3} changeDir="down" icon={Package} color={COLORS.amber} />
              <KpiCard title={t.kpiCoreInflation} value="2.8" unit="%" change={-0.7} changeDir="down" icon={Activity} color={COLORS.blue} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartCpiMonthly} subtitle={t.chartCpiMonthlySub} exportId="chartCpiMonthly" data={cpiMonthly}>
                <ChartContainer config={{ yoyPct: { label: t.chartInflationYoy, color: COLORS.red }, foodYoy: { label: t.chartFoodYoy, color: COLORS.amber }, coreYoy: { label: t.chartCoreYoy, color: COLORS.blue } }} className="h-[340px] w-full">
                  <LineChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="yoyPct" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.legendTotalYoy} />
                    <Line type="monotone" dataKey="foodYoy" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.legendFoodYoy} />
                    <Line type="monotone" dataKey="coreYoy" stroke={COLORS.blue} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.legendCoreYoy} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartCpiLevel} subtitle={t.chartCpiLevelSub} exportId="chartCpiLevel" data={cpiMonthly}>
                <ChartContainer config={{ ipc: { label: t.chartIpcIndex, color: COLORS.rose } }} className="h-[340px] w-full">
                  <AreaChart data={cpiMonthly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 9 }} tickLine={false} interval={5} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[200, 360]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="ipc" fill={COLORS.roseLight} stroke={COLORS.rose} strokeWidth={2} fillOpacity={0.5} name={t.chartIpcIndex} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartCpiDivision} subtitle={t.chartCpiDivisionSub} exportId="chartCpiDivision" data={cpiByDivision}>
                <ChartContainer config={{ y2024: { label: "2024 YoY %", color: COLORS.blue } }} className="h-[340px] w-full">
                  <BarChart data={cpiByDivision} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="division" type="category" tick={{ fontSize: 10 }} tickLine={false} width={95} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="y2024" fill={COLORS.blue} radius={[0, 4, 4, 0]}>
                      {cpiByDivision.map((d, i) => (
                        <Cell key={i} fill={d.y2024 >= 5 ? COLORS.red : d.y2024 >= 3.5 ? COLORS.amber : COLORS.emerald} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartCpiWeights} subtitle={t.chartCpiWeightsSub} exportId="chartCpiWeights">
                <ChartContainer config={Object.fromEntries(
                  cpiByDivision.map((d, i) => [d.division, { label: d.division, color: Object.values(COLORS)[i % Object.values(COLORS).length] }])
                )} className="h-[340px] w-full">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie data={cpiByDivision} dataKey="weight" nameKey="division" cx="50%" cy="50%" outerRadius={110} innerRadius={50} paddingAngle={1}>
                      {cpiByDivision.map((_, i) => (
                        <Cell key={i} fill={Object.values(COLORS)[i % Object.values(COLORS).length]} />
                      ))}
                    </Pie>
                    <Legend content={<ChartLegendContent nameKey="division" />} />
                  </PieChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <ExportableChartCard title={t.chartIppi} subtitle={t.chartIppiSub} exportId="chartIppi">
              <ChartContainer config={{
                mining: { label: t.sectorMining, color: COLORS.amber },
                manufacturing: { label: t.sectorManufacturing, color: COLORS.blue },
                energy: { label: t.sectorEnergy, color: COLORS.red },
              }} className="h-[300px] w-full">
                <LineChart data={ippiQuarterly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="mining" stroke={COLORS.amber} strokeWidth={2} dot={false} name={t.sectorMining} />
                  <Line type="monotone" dataKey="manufacturing" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.sectorManufacturing} />
                  <Line type="monotone" dataKey="energy" stroke={COLORS.red} strokeWidth={2} dot={false} name={t.sectorEnergy} />
                </LineChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default InflationTab;
