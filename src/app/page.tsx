"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  FileText,
  Download,
  ExternalLink,
  RefreshCw,
  Database,
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Home,
  List,
  Info,
  Sparkles,
  Globe,
  ChevronRight,
  Calendar,
  Tag,
  Filter,
  LayoutGrid,
  Layers,
  Activity,
  ArrowUpRight,
  Newspaper,
  Building2,
  ShoppingBag,
  Factory,
  GraduationCap,
  Truck,
  Heart,
  MapPin,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

interface DataItem {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  categoryId: string;
  sourceUrl: string;
  pdfUrl: string | null;
  period: string | null;
  year: number | null;
  quarter: string | null;
  dataType: string;
  tags: string | null;
  content: string | null;
  isNew: boolean;
  crawledAt: string;
  category: Category;
}

// ─── Icon Mapping ────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ElementType> = {
  Home,
  Users,
  TrendingUp,
  BookOpen,
  BarChart3,
  FileText,
  List,
  Info,
  Database,
  Globe,
  Activity,
  Newspaper,
  Building2,
  ShoppingBag,
  Factory,
  GraduationCap,
  Truck,
  Heart,
  MapPin,
};

// ─── Economic Analysis Data (for charts) ────────────────────────────────────

const economicIndicators = [
  {
    name: "GDP Growth Rate",
    nameFr: "Taux de croissance du PIB",
    values: [
      { year: 2019, value: 1.1 },
      { year: 2020, value: -3.2 },
      { year: 2021, value: 3.4 },
      { year: 2022, value: 3.1 },
      { year: 2023, value: 2.8 },
      { year: 2024, value: 3.0 },
    ],
    unit: "%",
    trend: "up",
  },
  {
    name: "Inflation Rate (CPI)",
    nameFr: "Taux d'inflation (IPC)",
    values: [
      { year: 2019, value: 2.0 },
      { year: 2020, value: 2.4 },
      { year: 2021, value: 7.2 },
      { year: 2022, value: 9.3 },
      { year: 2023, value: 7.3 },
      { year: 2024, value: 6.8 },
    ],
    unit: "%",
    trend: "down",
  },
  {
    name: "Unemployment Rate",
    nameFr: "Taux de chômage",
    values: [
      { year: 2019, value: 11.4 },
      { year: 2020, value: 12.5 },
      { year: 2021, value: 12.6 },
      { year: 2022, value: 11.9 },
      { year: 2023, value: 11.3 },
      { year: 2024, value: 10.8 },
    ],
    unit: "%",
    trend: "down",
  },
  {
    name: "Trade Balance (bn USD)",
    nameFr: "Balance commerciale (Mds USD)",
    values: [
      { year: 2019, value: -5.2 },
      { year: 2020, value: -7.6 },
      { year: 2021, value: 5.9 },
      { year: 2022, value: 20.4 },
      { year: 2023, value: 10.2 },
      { year: 2024, value: 11.5 },
    ],
    unit: "bn $",
    trend: "up",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ONSDashboard() {
  const queryClient = useQueryClient();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);

  // Seed database on mount and fetch data
  const { data: seedStatus } = useQuery({
    queryKey: ["seed-status"],
    queryFn: async () => {
      const check = await fetch("/api/seed");
      const status = await check.json();
      if (!status.seeded) {
        setIsSeeding(true);
        await fetch("/api/seed", { method: "POST" });
        setIsSeeding(false);
        queryClient.invalidateQueries({ queryKey: ["seed-status"] });
      }
      return status;
    },
  });

  // Fetch data
  const { data, isLoading, error, refetch } = useQuery<{
    items: DataItem[];
    categories: Category[];
  }>({
    queryKey: ["ons-data"],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (activeCategory !== "all") params.set("category", activeCategory);
      if (searchQuery) params.set("search", searchQuery);
      if (typeFilter !== "all") params.set("type", typeFilter);
      if (showNewOnly) params.set("new", "true");
      const res = await fetch(`/api/data?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    enabled: !!seedStatus?.seeded,
  });

  const categories = data?.categories || [];
  const items = data?.items || [];

  // Stats
  const stats = useMemo(() => {
    const totalPdfs = items.filter((i) => i.pdfUrl).length;
    const newItems = items.filter((i) => i.isNew).length;
    const uniqueYears = new Set(items.map((i) => i.year).filter(Boolean));
    const uniqueTypes = new Set(items.map((i) => i.dataType));
    return {
      total: items.length,
      pdfs: totalPdfs,
      newItems,
      years: uniqueYears.size,
      categories: categories.length,
      types: uniqueTypes.size,
    };
  }, [items, categories]);

  // Filtered items for current view
  const filteredItems = useMemo(() => items, [items]);

  const handleRescrape = async () => {
    try {
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const result = await res.json();
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["ons-data"] });
      }
    } catch (err) {
      console.error("Rescrape failed:", err);
    }
  };

  const typeLabels: Record<string, string> = {
    all: "All Types",
    index: "Indices",
    national_accounts: "National Accounts",
    directory: "Directories",
    survey: "Surveys",
    trade: "Trade",
    publication: "Publications",
    calendar: "Calendar",
    section: "Sections",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    ONS Data Explorer
                  </h1>
                  <p className="text-emerald-200 text-sm sm:text-base">
                    Office National des Statistiques — Algeria
                  </p>
                </div>
              </div>
              <p className="text-emerald-100/70 text-xs sm:text-sm max-w-xl mt-2">
                Comprehensive extraction and classification of Algerian economic
                statistics from the National Statistics Office website for
                post-analysis.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => refetch()}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-1.5 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleRescrape}
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                Re-scrape
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* ── Stats Bar ─────────────────────────────────────── */}
        {isLoading || isSeeding ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              {
                label: "Data Points",
                value: stats.total,
                icon: Database,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "PDF Documents",
                value: stats.pdfs,
                icon: FileText,
                color: "text-red-600",
                bg: "bg-red-50",
              },
              {
                label: "New Releases",
                value: stats.newItems,
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                label: "Categories",
                value: stats.categories,
                icon: Layers,
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                label: "Years Covered",
                value: stats.years,
                icon: Calendar,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Data Types",
                value: stats.types,
                icon: Filter,
                color: "text-cyan-600",
                bg: "bg-cyan-50",
              },
            ].map((stat) => (
              <Card key={stat.label} className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* ── Filters ───────────────────────────────────────── */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search data, indicators, publications..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[160px]">
                    <Filter className="w-4 h-4 mr-1.5" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(typeLabels).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant={showNewOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowNewOnly(!showNewOnly)}
                  className="shrink-0"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  New Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Main Tabs ─────────────────────────────────────── */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-4 py-2 text-sm font-medium"
            >
              <LayoutGrid className="w-4 h-4 mr-1.5" />
              All Data
            </TabsTrigger>
            {categories.map((cat) => {
              const IconComp = iconMap[cat.icon] || Database;
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  style={
                    activeCategory === cat.id
                      ? { backgroundColor: cat.color }
                      : {}
                  }
                >
                  <IconComp className="w-4 h-4 mr-1.5" />
                  <span className="hidden sm:inline">{cat.name}</span>
                  <span className="sm:hidden">{cat.name.split(" ")[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* ── "All Data" Tab ──────────────────────────────── */}
          <TabsContent value="all" className="mt-6 space-y-6">
            {/* Economic Indicators Overview */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600" />
                Key Economic Indicators — Algeria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {economicIndicators.map((indicator) => (
                  <Card key={indicator.name} className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">
                          {indicator.name}
                        </CardTitle>
                        <div
                          className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
                            indicator.trend === "up"
                              ? "text-emerald-700 bg-emerald-50"
                              : "text-red-700 bg-red-50"
                          }`}
                        >
                          {indicator.trend === "up" ? (
                            <ArrowUpRight className="w-3 h-3 mr-0.5" />
                          ) : (
                            <TrendingUp className="w-3 h-3 mr-0.5 rotate-180" />
                          )}
                          {indicator.values[indicator.values.length - 1].value}
                          {indicator.unit}
                        </div>
                      </div>
                      <CardDescription className="text-xs">
                        {indicator.nameFr}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-end gap-1 h-24">
                        {indicator.values.map((v, i) => {
                          const max = Math.max(
                            ...indicator.values.map((x) => Math.abs(x.value))
                          );
                          const height =
                            (Math.abs(v.value) / max) * 100;
                          const isLatest = i === indicator.values.length - 1;
                          const isPositive = v.value >= 0;
                          return (
                            <div
                              key={v.year}
                              className="flex-1 flex flex-col items-center gap-1"
                            >
                              <span className="text-[10px] text-muted-foreground font-medium">
                                {v.value > 0 ? "+" : ""}
                                {v.value}
                              </span>
                              <div className="w-full relative">
                                <div
                                  className={`w-full rounded-sm transition-all duration-500 ${
                                    isLatest
                                      ? isPositive
                                        ? "bg-emerald-500"
                                        : "bg-red-400"
                                      : isPositive
                                      ? "bg-emerald-200"
                                      : "bg-red-200"
                                  }`}
                                  style={{ height: `${height * 0.8}px` }}
                                />
                              </div>
                              <span className="text-[10px] text-muted-foreground">
                                {String(v.year).slice(2)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* All Items Grid */}
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                All Extracted Data
                <Badge variant="secondary" className="ml-2">
                  {filteredItems.length} items
                </Badge>
              </h2>
              <DataItemsGrid
                items={filteredItems}
                onSelect={setSelectedItem}
                loading={isLoading}
              />
            </div>
          </TabsContent>

          {/* ── Category Tabs ───────────────────────────────── */}
          {categories.map((cat) => {
            const catItems = filteredItems.filter(
              (item) => item.categoryId === cat.id
            );
            const IconComp = iconMap[cat.icon] || Database;
            return (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <Card className="border-0 shadow-sm mb-6">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-xl text-white"
                        style={{ backgroundColor: cat.color }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{cat.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{cat.nameFr}</span>
                          <span className="text-xs">|</span>
                          <span>{cat.nameAr}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </CardContent>
                </Card>

                <DataItemsGrid
                  items={catItems}
                  onSelect={setSelectedItem}
                  loading={isLoading}
                />
              </TabsContent>
            );
          })}
        </Tabs>

        {/* ── Economic Analysis Section ─────────────────────── */}
        <Separator />
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Economic Analysis Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Macroeconomic Stability",
                titleFr: "Stabilité macroéconomique",
                desc: "Track GDP growth, inflation, fiscal balance, and monetary indicators to assess Algeria's overall economic health and policy effectiveness.",
                sources: 4,
                icon: Activity,
                color: "emerald",
              },
              {
                title: "Trade & External Balance",
                titleFr: "Commerce et balance extérieure",
                desc: "Analyze export/import volumes, hydrocarbon dependency ratio, trade diversification efforts, and terms of trade evolution.",
                sources: 3,
                icon: ShoppingBag,
                color: "blue",
              },
              {
                title: "Industrial Production",
                titleFr: "Production industrielle",
                desc: "Monitor industrial output indices, manufacturing capacity utilization, and sectoral production trends across Algeria.",
                sources: 2,
                icon: Factory,
                color: "amber",
              },
              {
                title: "Labor Market",
                titleFr: "Marché du travail",
                desc: "Examine employment rates, unemployment trends by demographic, informal sector size, and workforce participation across wilayas.",
                sources: 3,
                icon: Users,
                color: "purple",
              },
              {
                title: "Price Dynamics",
                titleFr: "Dynamique des prix",
                desc: "Track consumer and producer price indices, food vs core inflation divergence, and purchasing power evolution.",
                sources: 3,
                icon: BarChart3,
                color: "red",
              },
              {
                title: "Social Indicators",
                titleFr: "Indicateurs sociaux",
                desc: "Review household surveys, education enrollment, demographic trends, and living conditions across Algerian regions.",
                sources: 5,
                icon: Heart,
                color: "cyan",
              },
            ].map((analysis) => (
              <Card
                key={analysis.title}
                className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-2 rounded-lg bg-${analysis.color}-50 text-${analysis.color}-600`}
                    >
                      <analysis.icon className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {analysis.sources} sources
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-2">
                    {analysis.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium">
                    {analysis.titleFr}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {analysis.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Source Site Info ──────────────────────────────── */}
        <Card className="border-0 shadow-sm bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  Data Source
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  All data extracted from{" "}
                  <a
                    href="https://www.ons.dz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
                  >
                    www.ons.dz
                  </a>{" "}
                  — Office National des Statistiques (Algeria&apos;s National
                  Statistics Office)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-300"
                >
                  <Database className="w-3 h-3 mr-1" />
                  SPIP CMS
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-600 text-slate-300"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  PDF-based
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="mt-auto border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-xs text-muted-foreground">
          ONS Data Explorer — Algerian Economic Statistics Analysis Platform
        </div>
      </footer>

      {/* ── Detail Dialog ──────────────────────────────────── */}
      <Dialog
        open={!!selectedItem}
        onOpenChange={() => setSelectedItem(null)}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    style={{ backgroundColor: selectedItem.category.color }}
                    className="text-white text-xs"
                  >
                    {selectedItem.category.name}
                  </Badge>
                  {selectedItem.isNew && (
                    <Badge className="bg-amber-500 text-white text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      New
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {selectedItem.dataType.replace(/_/g, " ")}
                  </Badge>
                </div>
                <DialogTitle className="text-xl leading-tight">
                  {selectedItem.title}
                </DialogTitle>
                <DialogDescription className="text-sm">
                  {selectedItem.titleFr}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedItem.period && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Period
                      </p>
                      <p className="text-sm font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedItem.period}
                      </p>
                    </div>
                  )}
                  {selectedItem.year && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="text-sm font-semibold">
                        {selectedItem.year}
                      </p>
                    </div>
                  )}
                  {selectedItem.quarter && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Quarter
                      </p>
                      <p className="text-sm font-semibold">
                        {selectedItem.quarter}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>

                {selectedItem.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tags.split(",").map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                )}

                <Separator />

                <div className="flex flex-col sm:flex-row gap-2">
                  {selectedItem.pdfUrl && (
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <a
                        href={selectedItem.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a
                      href={selectedItem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on ONS Website
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Data Items Grid Component ──────────────────────────────────────────────

function DataItemsGrid({
  items,
  onSelect,
  loading,
}: {
  items: DataItem[];
  onSelect: (item: DataItem) => void;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <Card className="border-0 shadow-sm">
        <CardContent className="p-12 text-center">
          <Database className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">
            No data found. Try adjusting your filters or search query.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        const IconComp = iconMap[item.category.icon] || Database;
        return (
          <Card
            key={item.id}
            className="border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            onClick={() => onSelect(item)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div
                  className="p-2 rounded-lg text-white shrink-0"
                  style={{ backgroundColor: item.category.color }}
                >
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5">
                  {item.isNew && (
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                  {item.pdfUrl && (
                    <FileText className="w-3.5 h-3.5 text-red-400" />
                  )}
                </div>
              </div>
              <CardTitle className="text-sm leading-snug mt-2 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {item.period && (
                    <span className="text-[10px] text-muted-foreground bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.period}
                    </span>
                  )}
                  {item.dataType && (
                    <span className="text-[10px] text-muted-foreground bg-slate-100 px-1.5 py-0.5 rounded capitalize">
                      {item.dataType.replace(/_/g, " ")}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}