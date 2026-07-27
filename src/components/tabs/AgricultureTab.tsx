"use client";

import { agricultureData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Activity, Droplets, Globe, Heart, Package, Scale, Sprout, Truck, Users } from "lucide-react";

export function AgricultureTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiCerealProd} value="5.0" unit="Mt" icon={Sprout} color={COLORS.emerald} />
              <KpiCard title={t.kpiSelfSuffic} value="33" unit="%" icon={Scale} color={COLORS.amber} />
              <KpiCard title={t.kpiAgriExports} value="0.82" unit="bn $" icon={Package} color={COLORS.blue} />
              <KpiCard title={t.kpiAgriEmploy} value="11.5" unit="%" icon={Users} color={COLORS.purple} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiVegProd} value="11.8" unit="Mt" icon={Sprout} color={COLORS.emerald} change={2.6} changeDir="up" />
              <KpiCard title={t.kpiFruitProd} value="6.4" unit="Mt" icon={Sprout} color={COLORS.rose} change={3.2} changeDir="up" />
              <KpiCard title={t.kpiMilkProd} value="3.8" unit="B litres" icon={Heart} color={COLORS.blue} change={5.6} changeDir="up" />
              <KpiCard title={t.kpiIrrigatedLand} value="1.9" unit="M ha" icon={Droplets} color={COLORS.cyan} change={2.7} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiAgriGdp} value="9.8" unit="%" icon={Activity} color={COLORS.teal} change={-2.0} changeDir="down" />
              <KpiCard title={t.kpiCerealImports} value="8.2" unit="Mt" icon={Globe} color={COLORS.red} />
              <KpiCard title={t.kpiPoultryProd} value="1.75" unit="Mt" icon={Sprout} color={COLORS.amber} change={4.2} changeDir="up" />
              <KpiCard title={t.kpiTractorFleet} value="160" unit="K" icon={Truck} color={COLORS.slate} change={3.2} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartCerealProd} subtitle={t.chartCerealProdSub} exportId="chartCerealProd">
                <ChartContainer config={{ cerealProdMt: { label: t.chartCerealLabel, color: COLORS.emerald }, selfSufficCereals: { label: t.chartSelfSufficLabel, color: COLORS.amber } }} className="h-[320px] w-full">
                  <ComposedChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[20, 50]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="cerealProdMt" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartCerealLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="selfSufficCereals" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartSelfSufficLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartVegFruitProd} subtitle={t.chartVegFruitProdSub} exportId="chartVegFruitProd">
                <ChartContainer config={{ vegProdMt: { label: t.chartVegLabel, color: COLORS.emerald }, fruitProdMt: { label: t.chartFruitLabel, color: COLORS.rose } }} className="h-[320px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="fruitProdMt" fill={COLORS.roseLight} stroke={COLORS.rose} strokeWidth={2} fillOpacity={0.5} name={t.chartFruitLabel} />
                    <Area type="monotone" stackId="1" dataKey="vegProdMt" fill={COLORS.emeraldLight} stroke={COLORS.emerald} strokeWidth={2} fillOpacity={0.5} name={t.chartVegLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartLivestock} subtitle={t.chartLivestockSub} exportId="chartLivestock">
                <ChartContainer config={{ milkProdMl: { label: t.chartMilkLabel, color: COLORS.blue }, meatProdMt: { label: t.chartMeatLabel, color: COLORS.red } }} className="h-[300px] w-full">
                  <LineChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="milkProdMl" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartMilkLabel} />
                    <Line type="monotone" dataKey="meatProdMt" stroke={COLORS.red} strokeWidth={2} dot={{ r: 2 }} name={t.chartMeatLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartLandUse} subtitle={t.chartLandUseSub} exportId="chartLandUse">
                <ChartContainer config={{ irrigatedLandMha: { label: t.chartIrrigatedLabel, color: COLORS.cyan }, totalLandMha: { label: t.chartTotalLandLabel, color: COLORS.slate } }} className="h-[300px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[0, 10]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" dataKey="totalLandMha" fill={COLORS.slateLight} stroke={COLORS.slate} strokeWidth={2} fillOpacity={0.3} name={t.chartTotalLandLabel} />
                    <Area type="monotone" dataKey="irrigatedLandMha" fill={COLORS.cyanLight} stroke={COLORS.cyan} strokeWidth={2} fillOpacity={0.6} name={t.chartIrrigatedLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartOliveDateProd} subtitle={t.chartOliveDateProdSub} exportId="chartOliveDateProd">
                <ChartContainer config={{ oliveProdMt: { label: t.chartOliveLabel, color: COLORS.emerald }, dateProdMt: { label: t.chartDateLabel, color: COLORS.amber } }} className="h-[300px] w-full">
                  <LineChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="oliveProdMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartOliveLabel} />
                    <Line type="monotone" dataKey="dateProdMt" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartDateLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartAgriExports} subtitle={t.chartAgriExportsSub} exportId="chartAgriExports" data={agricultureData}>
                <ChartContainer config={{ agriExportsBn: { label: t.chartAgriExportsLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="agriExportsBn" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2.5} fillOpacity={0.4} name={t.chartAgriExportsLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartPoultryProd} subtitle={t.chartPoultryProdSub} exportId="chartPoultryProd">
                <ChartContainer config={{ poultryProdMt: { label: t.chartPoultryLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <AreaChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="poultryProdMt" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2.5} fillOpacity={0.4} name={t.chartPoultryLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartCerealImports} subtitle={t.chartCerealImportsSub} exportId="chartCerealImports">
                <ChartContainer config={{ cerealImportsMt: { label: t.chartCerealImportLabel, color: COLORS.red }, cerealProdMt: { label: t.chartCerealLabel, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <ComposedChart data={agricultureData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="cerealImportsMt" fill={COLORS.redLight} stroke={COLORS.red} radius={[2, 2, 0, 0]} opacity={0.7} name={t.chartCerealImportLabel} />
                    <Line type="monotone" dataKey="cerealProdMt" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCerealLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default AgricultureTab;
