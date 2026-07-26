"use client";

import { useState, useEffect, useCallback, useMemo, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import { useI18n } from "@/lib/i18n/context";
import { Search, Moon, Sun, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// ─── Search index built from all tabs & SDG indicators ────────────────────────
interface SearchItem {
  id: string;
  tab: string;
  label: string;
  category: string;
  icon?: string;
}

function buildSearchIndex(t: Record<string, string>): SearchItem[] {
  const items: SearchItem[] = [];

  // Tab items (from page.tsx tabItems)
  const tabMap = [
    { tab: "macro", keys: ["tabMacro", "chartGdpGrowth", "chartGdpSector", "chartQuarterlyGdp", "chartGdpPerCapita", "kpiGdpGrowth", "kpiGdp2024", "kpiInflation", "kpiUnemployment", "kpiPopulation", "kpiInvestmentRate"], cat: "Macroeconomic" },
    { tab: "inflation", keys: ["tabInflation", "chartCpiMonthly", "chartCpiLevel", "chartCpiByDivision", "kpiCpi", "kpiYoyInflation", "kpiFoodInflation", "kpiCoreInflation"], cat: "Prices & Inflation" },
    { tab: "trade", keys: ["tabTrade", "chartTradeBalance", "chartTradeByPartner", "chartTradeQuarterly"], cat: "Trade & Balance" },
    { tab: "industry", keys: ["tabIndustry", "chartIpiQuarterly", "chartIppiQuarterly"], cat: "Industrial Production" },
    { tab: "labor", keys: ["tabLabor", "kpiUnemployment", "chartLaborMarket"], cat: "Labor Market" },
    { tab: "social", keys: ["tabSocial", "chartDemographics", "chartPopulationByAge", "chartEducation"], cat: "Demographics & Social" },
    { tab: "fiscal", keys: ["tabFiscal", "chartFiscalData"], cat: "Fiscal & Savings" },
    { tab: "regional", keys: ["tabRegional", "chartWilayaGdp", "chartRegionalInequality"], cat: "Regional" },
    { tab: "sdg", keys: ["tabSdg", "chartSdgProgress", "chartSdgRadar", "chartSdgEnergyMix", "chartSdgHousing", "chartSdgDesalination", "chartSdgWaterReuse", "chartSdgTelecoms", "chartSdgInnovation", "chartSdgFood", "chartSdgEducation", "chartSdgInequality", "chartSdgOceans"], cat: "ODD / SDGs" },
  ];

  for (const tm of tabMap) {
    for (const key of tm.keys) {
      if (t[key]) {
        items.push({
          id: `${tm.tab}-${key}`,
          tab: tm.tab,
          label: t[key],
          category: tm.cat,
        });
      }
    }
  }

  return items;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function HeaderControls({ onTabSelect }: { onTabSelect: (tab: string) => void }) {
  const { t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const items = useMemo(() => buildSearchIndex(t), [t]);

  // Cmd+K shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = useCallback((item: SearchItem) => {
    setOpen(false);
    setSearch("");
    onTabSelect(item.tab);
  }, [onTabSelect]);

  const filtered = search
    ? items.filter((it) => it.label.toLowerCase().includes(search.toLowerCase()) || it.category.toLowerCase().includes(search.toLowerCase()))
    : items;

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Search button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
          className="text-white/80 hover:text-white hover:bg-white/10 gap-2 h-9 px-3"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline text-xs">{t.labelSearch}</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] text-white/70">
            <span className="text-xs">\u2318</span>K
          </kbd>
        </Button>

        {/* Theme toggle */}
        {mounted && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-white hover:bg-white/10 h-9 w-9"
              >
                {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="w-4 h-4 mr-2" />
                {t.labelThemeLight}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="w-4 h-4 mr-2" />
                {t.labelThemeDark}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Search Dialog (cmdk) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px] p-0 gap-0 overflow-hidden">
          <DialogTitle className="sr-only">{t.labelSearch}</DialogTitle>
          <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-3">
            <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder={t.labelSearchPlaceholder}
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              {search && (
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSearch("")}>
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
            <Command.List className="max-h-[350px] overflow-y-auto">
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                {t.labelSearchNoResults}
              </Command.Empty>
              {filtered.length > 0 && (
                <Command.Group heading="">
                  {filtered.slice(0, 20).map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <span className="flex-1 truncate text-sm">{item.label}</span>
                        <span className="text-[10px] text-muted-foreground bg-muted rounded px-1.5 py-0.5 flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
