"use client";

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
