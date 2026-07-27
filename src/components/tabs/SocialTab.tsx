"use client";

import { demographics, education, populationByAge } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Building2, Heart, TrendingUp, Users } from "lucide-react";

export function SocialTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiPop} value="46.8" unit="M" icon={Users} color={COLORS.purple} />
              <KpiCard title={t.kpiGrowthRate} value="1.4" unit="%" icon={TrendingUp} color={COLORS.emerald} />
              <KpiCard title={t.kpiUrbanization} value="74.5" unit="%" icon={Building2} color={COLORS.blue} />
              <KpiCard title={t.kpiFertility} value="1.9" icon={Heart} color={COLORS.rose} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartPopGrowth} subtitle={t.chartPopGrowthSub} exportId="chartPopGrowth" data={demographics}>
                <ChartContainer config={{ populationM: { label: t.chartPopulationM, color: COLORS.purple } }} className="h-[300px] w-full">
                  <AreaChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="populationM" fill={COLORS.purpleLight} stroke={COLORS.purple} strokeWidth={2} fillOpacity={0.4} name={t.chartPopulationM} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartPopPyramid} subtitle={t.chartPopPyramidSub} exportId="chartPopPyramid" data={populationByAge}>
                <ChartContainer config={{ m: { label: t.chartMale, color: COLORS.blue }, f: { label: t.chartFemale, color: COLORS.rose } }} className="h-[300px] w-full">
                  <BarChart data={populationByAge} layout="vertical" margin={{ top: 5, right: 10, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis dataKey="group" type="category" tick={{ fontSize: 10 }} tickLine={false} width={40} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="f" fill={COLORS.rose} radius={[4, 0, 0, 4]} name={t.chartFemale} />
                    <Bar dataKey="m" fill={COLORS.blue} radius={[0, 4, 4, 0]} name={t.chartMale} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartDemographic} subtitle={t.chartDemographicSub} exportId="chartDemographic">
                <ChartContainer config={{
                  birthRate: { label: t.chartBirthRate, color: COLORS.emerald },
                  deathRate: { label: t.chartDeathRate, color: COLORS.red },
                  fertilityRate: { label: t.chartFertilityRate, color: COLORS.amber },
                }} className="h-[300px] w-full">
                  <LineChart data={demographics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="deathRate" stroke={COLORS.red} strokeWidth={1.5} dot={false} name={t.chartDeathRate} />
                    <Line type="monotone" dataKey="fertilityRate" stroke={COLORS.amber} strokeWidth={2} dot={false} strokeDasharray="4 2" name={t.chartFertilityRate} />
                    <Line type="monotone" dataKey="birthRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartBirthRate} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>

              <ExportableChartCard title={t.chartEducation} subtitle={t.chartEducationSub} exportId="chartEducation">
                <ChartContainer config={{
                  enrollmentPrimary: { label: t.chartPrimary, color: COLORS.emerald },
                  enrollmentSecondary: { label: t.chartSecondary, color: COLORS.blue },
                  enrollmentHigher: { label: t.chartHigher, color: COLORS.purple },
                }} className="h-[300px] w-full">
                  <AreaChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentHigher" fill={COLORS.purple} stroke={COLORS.purple} fillOpacity={0.7} name={t.chartHigher} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentSecondary" fill={COLORS.blue} stroke={COLORS.blue} fillOpacity={0.7} name={t.chartSecondary} />
                    <Area type="monotone" stackId="1" dataKey="enrollmentPrimary" fill={COLORS.emerald} stroke={COLORS.emerald} fillOpacity={0.7} name={t.chartPrimary} />
                  </AreaChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>

            <ExportableChartCard title={t.chartLiteracy} subtitle={t.chartLiteracySub} exportId="chartLiteracy">
              <ChartContainer config={{
                literacyRate: { label: t.chartLiteracyRate, color: COLORS.emerald },
                primaryNet: { label: t.chartPrimaryNet, color: COLORS.blue },
                secondaryNet: { label: t.chartSecondaryNet, color: COLORS.amber },
                higherGross: { label: t.chartHigherGross, color: COLORS.purple },
              }} className="h-[280px] w-full">
                <LineChart data={education} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line type="monotone" dataKey="higherGross" stroke={COLORS.purple} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartHigherGross} />
                  <Line type="monotone" dataKey="secondaryNet" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartSecondaryNet} />
                  <Line type="monotone" dataKey="primaryNet" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.chartPrimaryNet} />
                  <Line type="monotone" dataKey="literacyRate" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartLiteracyRate} />
                </LineChart>
              </ChartContainer>
            </ExportableChartCard>
          );
}

export default SocialTab;
