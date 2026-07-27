"use client";

import { miningEnergy } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Droplets, Factory, Zap } from "lucide-react";

export function MiningTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiElectricity} value="72" unit="TWh" icon={Zap} color={COLORS.cyan} />
              <KpiCard title={t.kpiGasConsump} value="42" unit="Bcm" icon={Droplets} color={COLORS.blue} />
              <KpiCard title={t.kpiIronOre} value="3.8" unit="Mt" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiPhosphate} value="1.5" unit="Mt" icon={Factory} color={COLORS.emerald} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartMiningProd} subtitle={t.chartMiningProdSub} exportId="chartMiningProd">
                <ChartContainer config={{
                  ironOreMt: { label: t.chartIronOreLabel, color: COLORS.amber },
                  phosphateMt: { label: t.chartPhosphateLabel, color: COLORS.emerald },
                }} className="h-[320px] w-full">
                  <LineChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="ironOreMt" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartIronOreLabel} />
                    <Line type="monotone" dataKey="phosphateMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPhosphateLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartElectricity} subtitle={t.chartElectricitySub} exportId="chartElectricity">
                <ChartContainer config={{ electricityTwh: { label: t.chartElectricityLabel, color: COLORS.cyan } }} className="h-[320px] w-full">
                  <BarChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[40, 80]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="electricityTwh" fill={COLORS.cyan} radius={[4, 4, 0, 0]} name={t.chartElectricityLabel} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <ExportableChartCard title={t.chartEnergyConsump} subtitle={t.chartEnergyConsumpSub} exportId="chartEnergyConsump">
              <ChartContainer config={{ gasConsumptionBcm: { label: t.chartGasConsumpLabel, color: COLORS.blue }, petrolConsumptionMt: { label: t.chartPetrolConsumpLabel, color: COLORS.red } }} className="h-[280px] w-full">
                <LineChart data={miningEnergy} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="gasConsumptionBcm" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartGasConsumpLabel} />
                  <Line type="monotone" dataKey="petrolConsumptionMt" stroke={COLORS.red} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartPetrolConsumpLabel} />
                </LineChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default MiningTab;
