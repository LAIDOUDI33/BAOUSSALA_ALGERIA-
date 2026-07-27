"use client";

import { servicesData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, XAxis, YAxis } from "recharts";
import { Activity, Globe, Truck, Zap } from "lucide-react";

export function ServicesTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiServicesGdp} value="51.3" unit="%" icon={Activity} color={COLORS.purple} />
              <KpiCard title={t.kpiTrade} value="12.8" unit="%" icon={Globe} color={COLORS.emerald} />
              <KpiCard title={t.kpiTransport} value="7.5" unit="%" icon={Truck} color={COLORS.blue} />
              <KpiCard title={t.kpiTelecom} value="6.5" unit="%" icon={Zap} color={COLORS.cyan} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartServicesTrend} subtitle={t.chartServicesTrendSub} exportId="chartServicesTrend">
                <ChartContainer config={{ gdpContribPct: { label: t.kpiServicesGdp, color: COLORS.purple } }} className="h-[320px] w-full">
                  <AreaChart data={servicesData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[45, 55]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gdpContribPct" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2.5} fillOpacity={0.4} name={t.kpiServicesGdp} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartServicesComposition} subtitle={t.chartServicesCompositionSub} exportId="chartServicesComposition">
                <ChartContainer config={{
                  trade: { label: t.chartTradeLabel, color: COLORS.emerald },
                  transport: { label: t.chartTransportLabel, color: COLORS.blue },
                  telecom: { label: t.chartTelecomLabel, color: COLORS.cyan },
                  finance: { label: t.chartFinanceLabel, color: COLORS.amber },
                  tourism: { label: t.chartTourismLabel, color: COLORS.rose },
                  govtServices: { label: t.chartGovtLabel, color: COLORS.slate },
                }} className="h-[320px] w-full">
                  <BarChart data={servicesData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="trade" fill={COLORS.emerald} radius={[2, 2, 0, 0]} stackId="1" name={t.chartTradeLabel} />
                    <Bar dataKey="transport" fill={COLORS.blue} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTransportLabel} />
                    <Bar dataKey="telecom" fill={COLORS.cyan} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTelecomLabel} />
                    <Bar dataKey="finance" fill={COLORS.amber} radius={[0, 0, 0, 0]} stackId="1" name={t.chartFinanceLabel} />
                    <Bar dataKey="tourism" fill={COLORS.rose} radius={[0, 0, 0, 0]} stackId="1" name={t.chartTourismLabel} />
                    <Bar dataKey="govtServices" fill={COLORS.slate} radius={[2, 2, 0, 0]} stackId="1" name={t.chartGovtLabel} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default ServicesTab;
