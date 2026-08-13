#!/usr/bin/env python3
"""
Split page.tsx monolithic file into 16 lazy-loaded tab components.
This is a one-time migration script.
"""

import re
import os

BASE = "/home/z/my-project/src"
PAGE = os.path.join(BASE, "app/page.tsx")
TABS_DIR = os.path.join(BASE, "components/tabs")
SHARED = os.path.join(BASE, "components/dashboard-shared.tsx")

os.makedirs(TABS_DIR, exist_ok=True)

with open(PAGE, "r", encoding="utf-8") as f:
    content = f.read()

# ── 1. Extract COLORS, KpiCard, ChartCard ──
# Find the COLORS block
_colors_start = content.index('// ─── Color palette')
_colors_end = content.index('};', _colors_start) + 2
colors_block = content[_colors_start:_colors_end]

# Find KpiCard function
_kpi_start = content.index('function KpiCard(')
_kpi_end = content.index('}', content.index('</Card>', _kpi_start)) + 1
# Find the closing of the KpiCard function properly
brace_count = 0
for i in range(_kpi_start, len(content)):
    if content[i] == '{': brace_count += 1
    elif content[i] == '}':
        brace_count -= 1
        if brace_count == 0:
            _kpi_end = i + 1
            break
kpi_block = content[_kpi_start:_kpi_end]

# Find ChartCard function
_cc_start = content.index('function ChartCard(')
brace_count = 0
for i in range(_cc_start, len(content)):
    if content[i] == '{': brace_count += 1
    elif content[i] == '}':
        brace_count -= 1
        if brace_count == 0:
            _cc_end = i + 1
            break
cc_block = content[_cc_start:_cc_end]

# Write shared file
shared_content = '''"use client";

import React from "react";
import { Card, CardContent } from "components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ExportableChartCard } from "@/components/exportable-chart";

''' + colors_block + '\n\n' + kpi_block + '\n\n' + cc_block + '\n\nexport { COLORS, KpiCard, ChartCard, ExportableChartCard };\n'

with open(SHARED, "w", encoding="utf-8") as f:
    f.write(shared_content)
print(f"Created {SHARED}")

# ── 2. Extract each tab's TabsContent ──
# Pattern: <TabsContent value="xxx" className="space-y-5"> ... </TabsContent>
tab_pattern = re.compile(
    r'(<TabsContent\s+value="([^"]+)"[^>]*>)(.*?)(</TabsContent>)',
    re.DOTALL
)

tabs = []
for m in tab_pattern.finditer(content):
    tab_val = m.group(2)
    tab_body = m.group(3)
    tabs.append((tab_val, tab_body))

print(f"Found {len(tabs)} tabs")

# ── 3. Determine imports needed per tab ──
# All possible recharts components
RECHARTS_COMPS = {
    'AreaChart', 'Area', 'BarChart', 'Bar', 'ComposedChart', 'LineChart', 'Line',
    'PieChart', 'Pie', 'RadarChart', 'Radar', 'PolarGrid', 'PolarAngleAxis',
    'PolarRadiusAxis', 'ScatterChart', 'Scatter', 'ZAxis',
    'CartesianGrid', 'Cell', 'XAxis', 'YAxis', 'Legend', 'ResponsiveContainer',
    'Tooltip', 'ChartContainer', 'ChartTooltip', 'ChartTooltipContent', 'ChartLegend', 'ChartLegendContent',
}

# Map of data variable names to their import
ALL_DATA_VARS = [
    'gdpAnnual', 'gdpBySector', 'gdpQuarterly', 'cpiMonthly', 'tradeAnnual',
    'tradeQuarterly', 'tradeByPartner', 'ipiQuarterly', 'laborMarket',
    'demographics', 'populationByAge', 'fiscalData', 'cpiByDivision',
    'education', 'ippiQuarterly', 'wilayaData', 'constructionIndex', 'latestKPIs',
    'hydrocarbons', 'agricultureData', 'manufacturingData', 'btpData',
    'servicesData', 'miningEnergy', 'healthData', 'regionAggregates', 'regionalTimeSeries', 'regionalSectorComposition',
    'wilayaDetailed', 'regionalInequality', 'regionalHDI', 'regionalEmployment', 'regionalInfrastructure',
    'topWilayasByUnemp', 'topWilayasByGDP', 'regionalDevelopmentScatter', 'regionalUrbanization', 'wilayaPopulationRanking',
    'sdgOverview', 'sdgIndicators', 'sdgDeepDive', 'sdgEnergyMix', 'sdgHousingPrograms',
    'sdgDesalination', 'sdgWaterReuse', 'sdgTelecoms', 'sdgInnovation', 'vnr2026Targets',
    'sdgFoodSecurity', 'sdgEducation', 'sdgInequality', 'sdgOceans',
]

# All lucide icons used in the file
ALL_ICONS = [
    'TrendingUp', 'TrendingDown', 'ArrowUpRight', 'ArrowDownRight',
    'DollarSign', 'Users', 'BarChart3', 'Globe', 'Percent', 'Activity',
    'Factory', 'GraduationCap', 'Building2', 'Truck', 'Heart', 'Package',
    'Scale', 'ChevronRight', 'Droplets', 'Sprout', 'Hammer', 'Wrench', 'Zap',
    'Stethoscope', 'Shield', 'Thermometer', 'Baby', 'Syringe', 'BedDouble',
    'MapPin', 'ArrowRightLeft', 'Landmark', 'Wheat', 'Briefcase',
    'Wifi', 'Car', 'Pipette', 'TreePine', 'BookOpen', 'UserCheck', 'Home', 'Route',
    'Target', 'CheckCircle2', 'CircleDot', 'Flame', 'Sun', 'Battery', 'Sunrise',
]

# shadcn components
SHADCN_COMPS = {
    'Badge', 'Separator',
}

# Tab name to component name mapping
TAB_NAMES = {
    'macro': 'MacroTab',
    'inflation': 'InflationTab',
    'trade': 'TradeTab',
    'industry': 'IndustryTab',
    'labor': 'LaborTab',
    'social': 'SocialTab',
    'fiscal': 'FiscalTab',
    'regional': 'RegionalTab',
    'hydro': 'HydroTab',
    'agriculture': 'AgricultureTab',
    'manufacturing': 'ManufacturingTab',
    'btp': 'BtpTab',
    'services': 'ServicesTab',
    'mining': 'MiningTab',
    'health': 'HealthTab',
    'sdg': 'SdgTab',
}

def find_used_variables(body, variables):
    """Find which variables from a list are referenced in the body text."""
    used = []
    for var in variables:
        # Match whole word boundaries
        if re.search(r'\b' + re.escape(var) + r'\b', body):
            used.append(var)
    return used

def find_used_recharts(body):
    """Find which recharts components are used."""
    used = []
    for comp in ['AreaChart', 'Area', 'BarChart', 'Bar', 'ComposedChart', 'LineChart', 'Line',
                 'PieChart', 'Pie', 'RadarChart', 'Radar', 'PolarGrid', 'PolarAngleAxis',
                 'PolarRadiusAxis', 'ScatterChart', 'Scatter', 'ZAxis',
                 'CartesianGrid', 'Cell', 'XAxis', 'YAxis', 'Legend']:
        if f'<{comp}' in body or f' {comp} ' in body:
            used.append(comp)
    # ChartContainer is always needed for charts
    if 'ChartContainer' in body:
        used.extend(['ChartContainer', 'ChartTooltip', 'ChartTooltipContent'])
    if 'ChartLegend' in body:
        used.append('ChartLegend')
    if 'ChartLegendContent' in body:
        used.append('ChartLegendContent')
    return sorted(set(used))

def find_used_icons(body):
    """Find which lucide icons are used."""
    used = []
    for icon in ALL_ICONS:
        if re.search(r'\b' + icon + r'\b', body):
            used.append(icon)
    return used

def find_used_shadcn(body):
    """Find which shadcn components are used."""
    used = []
    for comp in SHADCN_COMPS:
        if f'<{comp}' in body or f' {comp}' in body:
            used.append(comp)
    return used

def needs_isrtl(body):
    return 'isRtl' in body

# ── 4. Generate each tab file ──
generated_files = []

for tab_val, tab_body in tabs:
    comp_name = TAB_NAMES.get(tab_val, f'{tab_val.capitalize()}Tab')
    filename = f"{comp_name}.tsx"
    filepath = os.path.join(TABS_DIR, filename)
    
    # Determine imports
    used_data = find_used_variables(tab_body, ALL_DATA_VARS)
    used_recharts = find_used_recharts(tab_body)
    used_icons = find_used_icons(tab_body)
    used_shadcn = find_used_shadcn(tab_body)
    needs_rtl = needs_isrtl(tab_body)
    
    # Build imports
    lines = ['"use client";', '']
    
    # Data imports
    if used_data:
        lines.append(f'import {{ {", ".join(sorted(set(used_data)))} }} from "@/lib/algeria-data";')
    
    lines.append('import { useI18n } from "@/lib/i18n/context";')
    lines.append('import { COLORS, KpiCard, ExportableChartCard } from "@/components/dashboard-shared";')
    
    # shadcn
    if used_shadcn:
        lines.append(f'import {{ {", ".join(used_shadcn)} }} from "@/components/ui/{"badge" if "Badge" in used_shadcn else "separator"}";')
        if len(used_shadcn) > 1:
            lines[-1] = f'import {{ {", ".join(used_shadcn)} }} from "@/components/ui/badge";'  # Fallback
    
    # Recharts
    if used_recharts:
        lines.append(f'import {{ {", ".join(used_recharts)} }} from "recharts";')
    
    # Icons
    if used_icons:
        lines.append(f'import {{ {", ".join(sorted(set(used_icons)))} }} from "lucide-react";')
    
    lines.append('')
    
    # Component
    rtl_destruct = ', isRtl' if needs_rtl else ''
    lines.append(f'export function {comp_name}() {{')
    lines.append(f'  const {{ t{rtl_destruct} }} = useI18n();')
    lines.append(f'  return ({tab_body});')
    lines.append('}')
    lines.append('')
    lines.append(f'export default {comp_name};')
    lines.append('')
    
    file_content = '\n'.join(lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(file_content)
    
    generated_files.append((tab_val, comp_name, filename, len(used_data), len(used_recharts), len(used_icons)))
    print(f"  Created {filename}: {len(used_data)} data, {len(used_recharts)} recharts, {len(used_icons)} icons")

# ── 5. Fix shadcn imports for tabs that need multiple shadcn components ──
for tab_val, comp_name, filename, *_ in generated_files:
    filepath = os.path.join(TABS_DIR, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        fc = f.read()
    
    # Fix Badge import
    if '<Badge' in fc:
        fc = re.sub(
            r'import \{ Badge, Separator \} from "@/components/ui/badge";',
            'import { Badge } from "@/components/ui/badge";\nimport { Separator } from "@/components/ui/separator";',
            fc
        )
        # Also fix the fallback case
        fc = re.sub(
            r'import \{ Badge \} from "@/components/ui/badge";\nimport \{ Separator \} from "@/components/ui/separator";',
            'import { Badge } from "@/components/ui/badge";\nimport { Separator } from "@/components/ui/separator";',
            fc
        )
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(fc)

print(f"\nGenerated {len(generated_files)} tab files")

# ── 6. Generate new page.tsx ──
new_page = '''"use client";

import { lazy, Suspense, useState, useCallback } from "react";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { HeaderControls } from "@/components/global-search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Activity, Scale, Globe, Factory, Users, Heart, DollarSign,
  Building2, Droplets, Sprout, Hammer, Wrench, Zap, Stethoscope, Target, BarChart3,
} from "lucide-react";

// Lazy-loaded tab components
const MacroTab = lazy(() => import("@/components/tabs/MacroTab"));
const InflationTab = lazy(() => import("@/components/tabs/InflationTab"));
const TradeTab = lazy(() => import("@/components/tabs/TradeTab"));
const IndustryTab = lazy(() => import("@/components/tabs/IndustryTab"));
const LaborTab = lazy(() => import("@/components/tabs/LaborTab"));
const SocialTab = lazy(() => import("@/components/tabs/SocialTab"));
const FiscalTab = lazy(() => import("@/components/tabs/FiscalTab"));
const RegionalTab = lazy(() => import("@/components/tabs/RegionalTab"));
const HydroTab = lazy(() => import("@/components/tabs/HydroTab"));
const AgricultureTab = lazy(() => import("@/components/tabs/AgricultureTab"));
const ManufacturingTab = lazy(() => import("@/components/tabs/ManufacturingTab"));
const BtpTab = lazy(() => import("@/components/tabs/BtpTab"));
const ServicesTab = lazy(() => import("@/components/tabs/ServicesTab"));
const MiningTab = lazy(() => import("@/components/tabs/MiningTab"));
const HealthTab = lazy(() => import("@/components/tabs/HealthTab"));
const SdgTab = lazy(() => import("@/components/tabs/SdgTab"));

function TabSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[130px] bg-slate-200 dark:bg-slate-700/50 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-[320px] bg-slate-200 dark:bg-slate-700/50 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

const TAB_COMPONENTS: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  macro: MacroTab,
  inflation: InflationTab,
  trade: TradeTab,
  industry: IndustryTab,
  labor: LaborTab,
  social: SocialTab,
  fiscal: FiscalTab,
  regional: RegionalTab,
  hydro: HydroTab,
  agriculture: AgricultureTab,
  manufacturing: ManufacturingTab,
  btp: BtpTab,
  services: ServicesTab,
  mining: MiningTab,
  health: HealthTab,
  sdg: SdgTab,
};

export default function AlgeriaDashboard() {
  const { t, isRtl, locale } = useI18n();
  const [activeTab, setActiveTab] = useState("macro");
  const handleTabSelect = useCallback((tab: string) => setActiveTab(tab), []);

  const arabicFontStyle = locale === "ar"
    ? { fontFamily: "'Noto Sans Arabic', 'Noto Sans SC', sans-serif" }
    : {};

  const tabItems = [
    { val: "macro", label: t.tabMacro, icon: Activity },
    { val: "inflation", label: t.tabInflation, icon: Scale },
    { val: "trade", label: t.tabTrade, icon: Globe },
    { val: "industry", label: t.tabIndustry, icon: Factory },
    { val: "labor", label: t.tabLabor, icon: Users },
    { val: "social", label: t.tabSocial, icon: Heart },
    { val: "fiscal", label: t.tabFiscal, icon: DollarSign },
    { val: "regional", label: t.tabRegional, icon: Building2 },
    { val: "hydro", label: t.tabHydro, icon: Droplets },
    { val: "agriculture", label: t.tabAgriculture, icon: Sprout },
    { val: "manufacturing", label: t.tabManufacturing, icon: Factory },
    { val: "btp", label: t.tabBTP, icon: Hammer },
    { val: "services", label: t.tabServices, icon: Wrench },
    { val: "mining", label: t.tabMiningEnergy, icon: Zap },
    { val: "health", label: t.tabHealth, icon: Stethoscope },
    { val: "sdg", label: t.tabSdg, icon: Target },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex flex-col" style={arabicFontStyle}>
      <header className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><BarChart3 className="w-6 h-6" /></div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{t.headerTitle}</h1>
                <p className="text-emerald-200/70 text-xs sm:text-sm">{t.headerSubtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HeaderControls onTabSelect={handleTabSelect} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-5 w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
            {tabItems.map((tab) => (
              <TabsTrigger key={tab.val} value={tab.val}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-xs sm:text-sm font-medium">
                <tab.icon className="w-3.5 h-3.5 me-1.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{(tab.label || "").split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabItems.map((tab) => (
            <TabsContent key={tab.val} value={tab.val} className="space-y-5">
              <Suspense fallback={<TabSkeleton />}>
                {(() => {
                  const TabComp = TAB_COMPONENTS[tab.val];
                  return TabComp ? <TabComp /> : null;
                })()}
              </Suspense>
            </TabsContent>
          ))}
        </Tabs>

        <Separator className="my-6" />
        <footer className="text-center text-xs text-muted-foreground pb-4">
          <p>{t.footer}</p>
        </footer>
      </main>
    </div>
  );
}
'''

with open(PAGE, "w", encoding="utf-8") as f:
    f.write(new_page)

print(f"\nRewrote {PAGE}")
print(f"\nDone! Generated {len(generated_files)} tab files + shared + new page.tsx")
