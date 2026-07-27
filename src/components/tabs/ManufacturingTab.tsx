"use client";

import { manufacturingData } from "@/lib/algeria-data";
import { useI18n } from "@/lib/i18n/context";
import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";
import { Bar, CartesianGrid, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, ComposedChart, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, XAxis, YAxis } from "recharts";
import { Activity, Building2, DollarSign, Factory, Globe, Hammer, Heart, Package, TrendingUp, Users, Zap } from "lucide-react";

export function ManufacturingTab() {
  const { t } = useI18n();
  return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiFoodIndustry} value="110" icon={Factory} color={COLORS.emerald} />
              <KpiCard title={t.kpiPharma} value="128" change={5.0} changeDir="up" icon={Heart} color={COLORS.purple} />
              <KpiCard title={t.kpiTextiles} value="86" icon={Factory} color={COLORS.amber} />
              <KpiCard title={t.kpiChemicals} value="107" icon={Factory} color={COLORS.blue} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiMetallurgy} value="102" icon={Hammer} color={COLORS.slate} />
              <KpiCard title={t.kpiBuildingMat} value="112" change={1.8} changeDir="up" icon={Building2} color={COLORS.orange} />
              <KpiCard title={t.kpiElectrical} value="94" icon={Zap} color={COLORS.cyan} />
              <KpiCard title={t.kpiPaper} value="98" icon={Package} color={COLORS.rose} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiManufEmploy} value="550" unit="K" icon={Users} color={COLORS.purple} change={2.8} changeDir="up" />
              <KpiCard title={t.kpiManufExports} value="4.2" unit="bn $" icon={Globe} color={COLORS.emerald} change={10.5} changeDir="up" />
              <KpiCard title={t.kpiCapacityUtil} value="70" unit="%" icon={Activity} color={COLORS.blue} change={2.9} changeDir="up" />
              <KpiCard title={t.kpiManufGdp} value="6.2" unit="%" icon={Factory} color={COLORS.teal} change={7.0} changeDir="up" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard title={t.kpiNumEnterprises} value="13.0" unit="K" icon={Building2} color={COLORS.slate} change={3.2} changeDir="up" />
              <KpiCard title={t.kpiPrivateShare} value="58" unit="%" icon={DollarSign} color={COLORS.amber} change={3.6} changeDir="up" />
              <KpiCard title={t.kpiManufFDI} value="2.0" unit="bn $" icon={Globe} color={COLORS.cyan} change={11.1} changeDir="up" />
              <KpiCard title={t.kpiProductivity} value="106" icon={TrendingUp} color={COLORS.emerald} change={2.9} changeDir="up" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartManufSubsectors} subtitle={t.chartManufSubsectorsSub} exportId="chartManufSubsectors" data={manufacturingData}>
                <ChartContainer config={{
                  foodIndustry: { label: t.chartFoodLabel, color: COLORS.emerald },
                  textiles: { label: t.chartTextileLabel, color: COLORS.amber },
                  chemicals: { label: t.chartChemicalLabel, color: COLORS.blue },
                  metallurgy: { label: t.chartMetallurgyLabel, color: COLORS.slate },
                  electrics: { label: t.chartElectricLabel, color: COLORS.cyan },
                  pharma: { label: t.chartPharmaLabel, color: COLORS.purple },
                }} className="h-[380px] w-full">
                  <LineChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[70, 135]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="textiles" stroke={COLORS.amber} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartTextileLabel} />
                    <Line type="monotone" dataKey="metallurgy" stroke={COLORS.slate} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartMetallurgyLabel} />
                    <Line type="monotone" dataKey="electrics" stroke={COLORS.cyan} strokeWidth={1.5} dot={false} strokeDasharray="4 2" name={t.chartElectricLabel} />
                    <Line type="monotone" dataKey="chemicals" stroke={COLORS.blue} strokeWidth={2} dot={false} name={t.chartChemicalLabel} />
                    <Line type="monotone" dataKey="pharma" stroke={COLORS.purple} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartPharmaLabel} />
                    <Line type="monotone" dataKey="foodIndustry" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartFoodLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartManufRadar} subtitle={t.chartManufRadarSub} exportId="chartManufRadar" data={manufacturingData}>
                <ChartContainer config={{
                  foodIndustry: { label: t.chartFoodLabel, color: COLORS.emerald },
                  textiles: { label: t.chartTextileLabel, color: COLORS.amber },
                  chemicals: { label: t.chartChemicalLabel, color: COLORS.blue },
                  metallurgy: { label: t.chartMetallurgyLabel, color: COLORS.slate },
                  electrics: { label: t.chartElectricLabel, color: COLORS.cyan },
                  buildingMat: { label: t.chartBuildingMatLabel, color: COLORS.orange },
                  pharma: { label: t.chartPharmaLabel, color: COLORS.purple },
                  paper: { label: t.chartPaperLabel, color: COLORS.rose },
                }} className="h-[380px] w-full">
                  <RadarChart cx="50%" cy="50%" outerRadius={120} data={[
                    { key: t.chartFoodLabel, value: manufacturingData[manufacturingData.length - 1].foodIndustry },
                    { key: t.chartTextileLabel, value: manufacturingData[manufacturingData.length - 1].textiles },
                    { key: t.chartChemicalLabel, value: manufacturingData[manufacturingData.length - 1].chemicals },
                    { key: t.chartMetallurgyLabel, value: manufacturingData[manufacturingData.length - 1].metallurgy },
                    { key: t.chartElectricLabel, value: manufacturingData[manufacturingData.length - 1].electrics },
                    { key: t.chartBuildingMatLabel, value: manufacturingData[manufacturingData.length - 1].buildingMat },
                    { key: t.chartPharmaLabel, value: manufacturingData[manufacturingData.length - 1].pharma },
                    { key: t.chartPaperLabel, value: manufacturingData[manufacturingData.length - 1].paper },
                  ]}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="key" tick={{ fontSize: 9 }} />
                    <PolarRadiusAxis tick={{ fontSize: 9 }} domain={[70, 135]} />
                    <Radar name="2024" dataKey="value" stroke={COLORS.emerald} fill={COLORS.emeraldLight} fillOpacity={0.4} strokeWidth={2} />
                  </RadarChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartManufBuildingPaper} subtitle={t.chartManufBuildingPaperSub} exportId="chartManufBuildingPaper" data={manufacturingData}>
                <ChartContainer config={{ buildingMat: { label: t.chartBuildingMatLabel, color: COLORS.orange }, paper: { label: t.chartPaperLabel, color: COLORS.rose } }} className="h-[300px] w-full">
                  <LineChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} domain={[80, 120]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="buildingMat" stroke={COLORS.orange} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartBuildingMatLabel} />
                    <Line type="monotone" dataKey="paper" stroke={COLORS.rose} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartPaperLabel} />
                  </LineChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartManufEmployCapacity} subtitle={t.chartManufEmployCapacitySub} exportId="chartManufEmployCapacity" data={manufacturingData}>
                <ChartContainer config={{ manufEmployK: { label: t.chartEmployLabel, color: COLORS.purple }, capacityUtilPct: { label: t.chartCapacityLabel, color: COLORS.blue }, manufExportsBn: { label: t.chartManufExportLabel, color: COLORS.emerald } }} className="h-[300px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[40, 80]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="manufExportsBn" fill={COLORS.emerald} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufExportLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="capacityUtilPct" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartCapacityLabel} />
                    <Line yAxisId="left" type="monotone" dataKey="manufEmployK" stroke={COLORS.purple} strokeWidth={2} dot={{ r: 2 }} strokeDasharray="4 2" name={t.chartEmployLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <ExportableChartCard title={t.chartManufGDP} subtitle={t.chartManufGDPSub} exportId="chartManufGDP" data={manufacturingData}>
                <ChartContainer config={{ gdpContribPct: { label: t.chartManufGDPLabel, color: COLORS.teal }, privateSharePct: { label: t.kpiPrivateShare, color: COLORS.amber } }} className="h-[280px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} domain={[4, 7]} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[35, 65]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="gdpContribPct" fill={COLORS.teal} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufGDPLabel} />
                    <Line yAxisId="right" type="monotone" dataKey="privateSharePct" stroke={COLORS.amber} strokeWidth={2.5} dot={{ r: 3 }} name={t.kpiPrivateShare} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
              <ExportableChartCard title={t.chartManufFDI} subtitle={t.chartManufFDISub} exportId="chartManufFDI" data={manufacturingData}>
                <ChartContainer config={{ fdiBn: { label: t.chartManufFDILabel, color: COLORS.cyan }, productivityIndex: { label: t.chartProductivityLabel, color: COLORS.emerald } }} className="h-[280px] w-full">
                  <ComposedChart data={manufacturingData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickLine={false} domain={[85, 115]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="fdiBn" fill={COLORS.cyan} radius={[2, 2, 0, 0]} opacity={0.8} name={t.chartManufFDILabel} />
                    <Line yAxisId="right" type="monotone" dataKey="productivityIndex" stroke={COLORS.emerald} strokeWidth={2.5} dot={{ r: 3 }} name={t.chartProductivityLabel} />
                  </ComposedChart>
                </ChartContainer>
              </ExportableChartCard>
            </div>
          );
}

export default ManufacturingTab;
