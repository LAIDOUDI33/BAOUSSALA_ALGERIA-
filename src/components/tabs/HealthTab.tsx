"use client";

import { healthData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Area, Bar, BarChart, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Activity, Baby, BedDouble, Building2, DollarSign, Factory, Heart, Shield, Stethoscope, Syringe, Users } from "lucide-react";

export function HealthTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiHospitalBeds} value="20.3" icon={BedDouble} color={COLORS.blue} change={2.5} changeDir="up" />
              <KpiCard title={t.kpiPhysicians} value="25.5" icon={Stethoscope} color={COLORS.emerald} change={6.3} changeDir="up" />
              <KpiCard title={t.kpiNurses} value="32.0" icon={Shield} color={COLORS.purple} change={4.9} changeDir="up" />
              <KpiCard title={t.kpiHealthExpenditure} value="6.5" unit="%" icon={DollarSign} color={COLORS.amber} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiLifeExpectancy} value="77.5" unit="ans" icon={Heart} color={COLORS.rose} change={0.4} changeDir="up" />
              <KpiCard title={t.kpiInfantMortality} value="15.2" icon={Baby} color={COLORS.red} change={-5.0} changeDir="down" />
              <KpiCard title={t.kpiMaternalMortality} value="65" icon={Heart} color={COLORS.orange} change={-9.7} changeDir="down" />
              <KpiCard title={t.kpiVaccination} value="94" unit="%" icon={Syringe} color={COLORS.teal} change={1.1} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiNumHospitals} value="498" icon={Building2} color={COLORS.blue} change={2.7} changeDir="up" />
              <KpiCard title={t.kpiHealthCenters} value="1850" icon={Activity} color={COLORS.emerald} change={3.9} changeDir="up" />
              <KpiCard title={t.kpiPolyclinics} value="460" icon={Factory} color={COLORS.purple} change={4.5} changeDir="up" />
              <KpiCard title={t.kpiPrimaryCareVisits} value="78" unit="M" icon={Users} color={COLORS.amber} change={5.4} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartHealthInfrastructure} subtitle={t.chartHealthInfrastructureSub} exportId="chartHealthInfrastructure">
                <ChartContainer config={{
                  numHospitals: { label: t.chartHospitalsLabel, color: COLORS.blue },
                  numHealthCenters: { label: t.chartHealthCentersLabel, color: COLORS.emerald },
                  numPolyclinics: { label: t.chartPolyclinicsLabel, color: COLORS.purple },
                }} className="h-[320px] w-full">
                  <BarChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="numHealthCenters" fill={COLORS.emerald} radius={[2, 2, 0, 0]} stackId="1" name={t.chartHealthCentersLabel} />
                    <Bar dataKey="numPolyclinics" fill={COLORS.purple} radius={[0, 0, 0, 0]} stackId="1" name={t.chartPolyclinicsLabel} />
                    <Bar dataKey="numHospitals" fill={COLORS.blue} radius={[2, 2, 0, 0]} name={t.chartHospitalsLabel} />
                  </BarChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartPersonnelTrend} subtitle={t.chartPersonnelTrendSub} exportId="chartPersonnelTrend">
                <ChartContainer config={{
                  physicians10k: { label: t.chartPhysiciansLabel, color: COLORS.emerald },
                  nurses10k: { label: t.chartNursesLabel, color: COLORS.purple },
                  hospitalBeds10k: { label: t.chartHospitalsLabel, color: COLORS.blue },
                }} className="h-[320px] w-full">
                  <LineChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="hospitalBeds10k" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} name={t.chartHospitalsLabel} />
                    <Line type="monotone" dataKey="physicians10k" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPhysiciansLabel} />
                    <Line type="monotone" dataKey="nurses10k" stroke={COLORS.purple} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartNursesLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartMortalityTrend} subtitle={t.chartMortalityTrendSub} exportId="chartMortalityTrend">
                <ChartContainer config={{
                  infantMortality: { label: t.chartInfantMortLabel, color: COLORS.red },
                  maternalMortality95k: { label: t.chartMaternalMortLabel, color: COLORS.orange },
                }} className="h-[300px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[50, 150]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area yAxisId="left" type="monotone" dataKey="infantMortality" fill={COLORS.redLight} stroke={COLORS.red} strokeWidth={2.5} fillOpacity={0.4} name={t.chartInfantMortLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="maternalMortality95k" stroke={COLORS.orange} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartMaternalMortLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartHealthExpenditureTrend} subtitle={t.chartHealthExpenditureTrendSub} exportId="chartHealthExpenditureTrend">
                <ChartContainer config={{
                  healthExpenditurePct: { label: t.chartHealthExpLabel, color: COLORS.amber },
                  lifeExpectancy: { label: t.chartLifeExpLabel, color: COLORS.rose },
                }} className="h-[300px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[4, 8]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[74, 79]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="healthExpenditurePct" fill={COLORS.amber} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartHealthExpLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="lifeExpectancy" stroke={COLORS.rose} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartLifeExpLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartVaccinationTrend} subtitle={t.chartVaccinationTrendSub} exportId="chartVaccinationTrend">
                <ChartContainer config={{ vaccinationRate: { label: t.chartVaccinationLabel, color: COLORS.teal }, primaryCareVisitsM: { label: t.chartPrimaryCareLabel, color: COLORS.amber } }} className="h-[280px] w-full">
                  <ComposedChart data={healthData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[85, 100]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Area yAxisId="left" type="monotone" dataKey="vaccinationRate" fill={COLORS.tealLight} stroke={COLORS.teal} strokeWidth={2.5} fillOpacity={0.4} name={t.chartVaccinationLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="primaryCareVisitsM" stroke={COLORS.amber} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartPrimaryCareLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default HealthTab;
