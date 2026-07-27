"use client";

import { hydrocarbons, tradeAnnual } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, Pie, PieChart, XAxis, YAxis } from "recharts";
import { Activity, DollarSign, Droplets, Factory, Globe, Zap } from "lucide-react";

export function HydroTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHydroRevenue} value="33.0" unit="bn $" change={10.0} changeDir="up" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiOilProd} value="0.98" unit="Mb/j" icon={Droplets} color={COLORS.emerald} />
              <KpiCard title={t.kpiGasProd} value="105" unit="Bcm" icon={Droplets} color={COLORS.blue} />
              <KpiCard title={t.kpiHydroGdpShare} value="23.5" unit="%" icon={Activity} color={COLORS.red} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiOilPrice} value="76.0" unit="$/bbl" change={-2.6} changeDir="down" icon={DollarSign} color={COLORS.red} />
              <KpiCard title={t.kpiHydroExports} value="38.8" unit="bn $" change={7.8} changeDir="up" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiReservesOil} value="12.2" unit="Bn bbl" icon={Droplets} color={COLORS.amber} />
              <KpiCard title={t.kpiReservesGas} value="4.5" unit="Tcm" icon={Zap} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiLNG} value="21.5" unit="Bcm" change={4.9} changeDir="up" icon={Droplets} color={COLORS.cyan} />
              <KpiCard title={t.kpiRefining} value="550" unit="Kb/d" icon={Factory} color={COLORS.slate} />
              <KpiCard title={t.kpiDomesticConsump} value="35" unit="%" icon={Activity} color={COLORS.rose} />
              <KpiCard title={t.kpiRPRatioOil} value="34.1" unit="ans" icon={DollarSign} color={COLORS.amber} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartHydroRevenue} subtitle={t.chartHydroRevenueSub} exportId="chartHydroRevenue" data={hydrocarbons}>
                <ChartContainer config={{ hydroRevBn: { label: t.chartHydroRevLabel, color: COLORS.amber }, exportsBn: { label: t.chartExportsLabel, color: COLORS.emerald } }} className="h-[320px] w-full">
                  <ComposedChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="hydroRevBn" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.85} name={t.chartHydroRevLabel} />
                    <Line type="monotone" dataKey="exportsBn" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 2 }} name={t.chartExportsLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartHydroVsNonHydro} subtitle={t.chartHydroVsNonHydroSub} exportId="chartHydroVsNonHydro" data={hydrocarbons}>
                <ChartContainer config={{ hydroExports: { label: t.chartHydroExportLabel, color: COLORS.amber }, nonHydroExports: { label: t.chartNonHydroExportLabel, color: COLORS.blue } }} className="h-[320px] w-full">
                  <AreaChart data={tradeAnnual} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="nonHydroExports" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth={2} fillOpacity={0.5} name={t.chartNonHydroExportLabel} />
                    <Area type="monotone" stackId="1" dataKey="hydroExports" fill={COLORS.amberLight} stroke={COLORS.amber} strokeWidth={2} fillOpacity={0.5} name={t.chartHydroExportLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartOilPrice} subtitle={t.chartOilPriceSub} exportId="chartOilPrice">
                <ChartContainer config={{ oilPrice: { label: t.chartOilPriceLabel, color: COLORS.red } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="oilPrice" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2} fillOpacity={0.4} name={t.chartOilPriceLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartHydroGdp} subtitle={t.chartHydroGdpSub} exportId="chartHydroGdp" data={hydrocarbons}>
                <ChartContainer config={{ gdpContribPct: { label: t.kpiHydroGdpShare, color: COLORS.purple } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[15, 40]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gdpContribPct" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.kpiHydroGdpShare} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartOilProduction} subtitle={t.chartOilProductionSub} exportId="chartOilProduction">
                <ChartContainer config={{ oilProdMbpd: { label: t.chartOilProdLabel, color: COLORS.amber }, gasProdBcm: { label: t.chartGasProdLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <ComposedChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[0.8, 1.7]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[75, 110]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="oilProdMbpd" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartOilProdLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="gasProdBcm" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartGasProdLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartReservesPie} subtitle={t.chartReservesPieSub} exportId="chartReservesPie">
                <ChartContainer config={{ reservesOilBn: { label: t.chartOilReservesLabel, color: COLORS.amber }, reservesGasTcm: { label: t.chartGasReservesLabel, color: COLORS.blue } }} className="h-[300px] w-full">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Pie data={[
                      { name: t.chartOilReservesLabel, value: hydrocarbons[hydrocarbons.length - 1].reservesOilBn },
                      { name: t.chartGasReservesLabel, value: hydrocarbons[hydrocarbons.length - 1].reservesGasTcm * 2.7 },
                    ]} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" nameKey="name" paddingAngle={2}>
                      <Cell fill={COLORS.amber} />
                      <Cell fill={COLORS.blue} />
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartLNGExports} subtitle={t.chartLNGExportsSub} exportId="chartLNGExports">
                <ChartContainer config={{ lngExportsBcm: { label: t.chartLNGLabel, color: COLORS.cyan } }} className="h-[280px] w-full">
                  <AreaChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="lngExportsBcm" fill={COLORS.cyanLight} stroke={COLORS.cyan} strokeWidth={2.5} fillOpacity={0.4} name={t.chartLNGLabel} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartRefining} subtitle={t.chartRefiningSub} exportId="chartRefining">
                <ChartContainer config={{ refiningKbpd: { label: t.chartRefiningLabel, color: COLORS.slate } }} className="h-[280px] w-full">
                  <BarChart data={hydrocarbons} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[400, 580]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="refiningKbpd" fill={COLORS.slate} radius={[4, 4, 0, 0]} name={t.chartRefiningLabel} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default HydroTab;
