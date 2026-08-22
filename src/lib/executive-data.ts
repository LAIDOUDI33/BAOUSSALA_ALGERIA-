// ═══════════════════════════════════════════════════════════════════════════════
// EXECUTIVE DATA — Aggregated strategic metrics for executive dashboard
// Derived from ONS data + World Bank + benchmarking sources
// ═══════════════════════════════════════════════════════════════════════════════

// ─── National Performance Index (composite 0–100) ─────────────────────────
export const nationalPerformance = {
  score: 67,
  previousScore: 63,
  change: 4,
  components: [
    { name: "economicGrowth", label: "Economic Growth", score: 72, weight: 20 },
    { name: "priceStability", label: "Price Stability", score: 58, weight: 15 },
    { name: "employment", label: "Employment", score: 52, weight: 15 },
    { name: "tradeBalance", label: "Trade Balance", score: 78, weight: 15 },
    { name: "fiscalHealth", label: "Fiscal Health", score: 75, weight: 10 },
    { name: "socialWelfare", label: "Social Welfare", score: 61, weight: 10 },
    { name: "infrastructure", label: "Infrastructure", score: 65, weight: 8 },
    { name: "sustainability", label: "Sustainability", score: 70, weight: 7 },
  ],
};

// ─── Executive KPI Cards (top-level strategic metrics) ────────────────────
export const executiveKPIs = [
  {
    key: "gdp",
    value: "267",
    unit: "Bn USD",
    change: 3.6,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "Q2-2025",
  },
  {
    key: "growth",
    value: "3.6",
    unit: "%",
    change: 0.8,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "Q2-2025",
  },
  {
    key: "inflation",
    value: "4.2",
    unit: "%",
    change: -1.3,
    direction: "down" as const,
    status: "improving" as const,
    quarter: "Jun-2025",
  },
  {
    key: "unemployment",
    value: "11.8",
    unit: "%",
    change: -0.5,
    direction: "down" as const,
    status: "improving" as const,
    quarter: "Q1-2025",
  },
  {
    key: "tradeSurplus",
    value: "12.8",
    unit: "Bn USD",
    change: 2.1,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "H1-2025",
  },
  {
    key: "forexReserves",
    value: "68.5",
    unit: "Bn USD",
    change: 5.2,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "Jun-2025",
  },
  {
    key: "fdi",
    value: "1.8",
    unit: "Bn USD",
    change: 12.5,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "2024",
  },
  {
    key: "investmentRate",
    value: "38.2",
    unit: "%",
    change: 1.4,
    direction: "up" as const,
    status: "positive" as const,
    quarter: "2024",
  },
];

// ─── Monthly trend sparkline data (last 12 months) ───────────────────────
export const monthlyTrends = [
  { month: "Jul-24", gdpGrowth: 3.0, inflation: 5.5, unemployment: 12.3, tradeBalance: 10.7 },
  { month: "Aug-24", gdpGrowth: 3.1, inflation: 5.3, unemployment: 12.2, tradeBalance: 10.9 },
  { month: "Sep-24", gdpGrowth: 3.1, inflation: 5.1, unemployment: 12.1, tradeBalance: 11.2 },
  { month: "Oct-24", gdpGrowth: 3.2, inflation: 4.9, unemployment: 12.0, tradeBalance: 11.5 },
  { month: "Nov-24", gdpGrowth: 3.3, inflation: 4.7, unemployment: 12.0, tradeBalance: 11.8 },
  { month: "Dec-24", gdpGrowth: 3.4, inflation: 4.5, unemployment: 11.9, tradeBalance: 12.0 },
  { month: "Jan-25", gdpGrowth: 3.4, inflation: 4.6, unemployment: 11.9, tradeBalance: 12.1 },
  { month: "Feb-25", gdpGrowth: 3.5, inflation: 4.5, unemployment: 11.8, tradeBalance: 12.3 },
  { month: "Mar-25", gdpGrowth: 3.5, inflation: 4.4, unemployment: 11.8, tradeBalance: 12.5 },
  { month: "Apr-25", gdpGrowth: 3.6, inflation: 4.3, unemployment: 11.8, tradeBalance: 12.6 },
  { month: "May-25", gdpGrowth: 3.6, inflation: 4.2, unemployment: 11.8, tradeBalance: 12.7 },
  { month: "Jun-25", gdpGrowth: 3.6, inflation: 4.2, unemployment: 11.8, tradeBalance: 12.8 },
];

// ─── Sector Performance (for radar/comparison) ────────────────────────────
export const sectorPerformance = [
  { sector: "hydrocarbons", growth: 2.1, contribution: 18.5, status: "stable" as const },
  { sector: "agriculture", growth: 5.8, contribution: 10.0, status: "strong" as const },
  { sector: "manufacturing", growth: 4.2, contribution: 7.8, status: "positive" as const },
  { sector: "construction", growth: 3.5, contribution: 10.2, status: "stable" as const },
  { sector: "services", growth: 4.8, contribution: 51.3, status: "strong" as const },
  { sector: "mining", growth: 1.2, contribution: 2.2, status: "weak" as const },
];

// ─── Strategic Alerts ─────────────────────────────────────────────────────
export const strategicAlerts = [
  {
    id: 1,
    level: "critical" as const,
    category: "inflation",
    titleEn: "Food inflation above 6% threshold",
    titleFr: "Inflation alimentaire au-dessus du seuil de 6%",
    titleAr: "التضخم الغذائي يتجاوز عتبة 6%",
    detailEn: "Food prices rose 6.3% YoY in June 2025, exceeding the 6% alert threshold. Cereals and dairy products are the main drivers.",
    detailFr: "Les prix alimentaires ont augmenté de 6,3% en glissement annuel en juin 2025, dépassant le seuil d'alerte de 6%. Les céréales et les produits laitiers en sont les principaux moteurs.",
    detailAr: "ارتفعت أسعار المواد الغذائية بنسبة 6.3% على أساس سنوي في يونيو 2025، متجاوزة عتبة الإنذار 6%. الحبوب ومنتجات الألبان هي المحركات الرئيسية.",
    actionEn: "Review grain import strategy and consider targeted subsidies",
    actionFr: "Réexaminer la stratégie d'importation de céréales et envisager des subventions ciblées",
    actionAr: "مراجعة استراتيجية استيراد الحبوب والنظر في الدعم الموجه",
    date: "2025-06-30",
    kpi: "6.3%",
    trend: "up",
  },
  {
    id: 2,
    level: "warning" as const,
    category: "trade",
    titleEn: "Non-hydrocarbon exports below target",
    titleFr: "Exportations non-hydrocarbures inférieures à l'objectif",
    titleAr: "الصادرات غير الهيدروكربونية أقل من المستهدف",
    detailEn: "Non-hydrocarbon exports reached $7.2B in H1-2025, 8% below the $7.8B semi-annual target set in the economic recovery plan.",
    detailFr: "Les exportations non-hydrocarbures ont atteint 7,2 Mds USD au S1-2025, soit 8% de moins que l'objectif semestriel de 7,8 Mds USD fixé dans le plan de relance économique.",
    detailAr: "بلغت الصادرات غير الهيدروكarbونية 7.2 مليار دولار في النصف الأول 2025، أي أقل بـ 8% من المستهدف Semesteri البالغ 7.8 مليار دولار.",
    actionEn: "Accelerate SME export support programs and reduce bureaucratic barriers",
    actionFr: "Accélérer les programmes de soutien à l'exportation des PME et réduire les barrières bureaucratiques",
    actionAr: "تسريع برامج دعم تصدير المؤسسات الصغيرة والمتوسطة وتقليل الحواجز البيروقراطية",
    date: "2025-07-15",
    kpi: "7.2B$",
    trend: "down",
  },
  {
    id: 3,
    level: "info" as const,
    category: "fiscal",
    titleEn: "Foreign exchange reserves continue to build",
    titleFr: "Les réserves de change continuent de se constituer",
    titleAr: "تستمر الاحتياطيات من النقد الأجنبي في التعزيز",
    detailEn: "FX reserves reached $68.5B in June 2025, up 5.2% YoY. This provides 18+ months of import coverage, well above the 12-month IMF benchmark.",
    detailFr: "Les réserves de change ont atteint 68,5 Mds USD en juin 2025, en hausse de 5,2% en glissement annuel. Cela fournit plus de 18 mois de couverture des importations.",
    detailAr: "بلغت الاحتياطيات من النقد الأجنبي 68.5 مليار دولار في يونيو 2025، بزيادة 5.2% على أساس سنوي. وهذا يوفر أكثر من 18 شهراً من تغطية الواردات.",
    actionEn: "Maintain current policy stance; consider strategic reserve diversification",
    actionFr: "Maintenir la orientation politique actuelle; envisager une diversification stratégique des réserves",
    actionAr: "الحفاظ على الموقف السياسي الحالي؛ النظر في تنويع الاحتياطيات الاستراتيجية",
    date: "2025-07-01",
    kpi: "68.5B$",
    trend: "up",
  },
  {
    id: 4,
    level: "warning" as const,
    category: "employment",
    titleEn: "Youth unemployment remains elevated at 29.5%",
    titleFr: "Le chômage des jeunes reste élevé à 29,5%",
    titleAr: "يظل بطالة الشباب مرتفعة عند 29.5%",
    detailEn: "Youth unemployment (15-24) stands at 29.5% despite overall unemployment declining to 11.8%. The gap highlights structural labor market challenges.",
    detailFr: "Le chômage des jeunes (15-24 ans) s'établit à 29,5% malgré une baisse du chômage global à 11,8%. L'écart souligne des défis structurels du marché du travail.",
    detailAr: "يبلغ معدل بطالة الشباب (15-24 سنة) 29.5% رغم انخفاض البطالة الإجمالية إلى 11.8%. الفجوة تبرز تحديات هيكلية في سوق العمل.",
    actionEn: "Expand youth entrepreneurship programs and accelerate digital skills training",
    actionFr: "Étendre les programmes d'entrepreneuriat des jeunes et accélérer la formation aux compétences numériques",
    actionAr: "توسيع برامج ريادة الأعمال للشباب وتسريع التدريب على المهارات الرقمية",
    date: "2025-06-15",
    kpi: "29.5%",
    trend: "stable",
  },
  {
    id: 5,
    level: "critical" as const,
    category: "water",
    titleEn: "Drought conditions persist in southern regions",
    titleFr: "Conditions de sécheresse persistantes dans les régions du sud",
    titleAr: "استمرار ظروف الجفاف في المناطق الجنوبية",
    detailEn: "Dam filling rates in southern basins dropped below 30%. Agricultural output in Saharan regions may decline 15-20% without intervention.",
    detailFr: "Les taux de remplissage des barrages dans les bassins du sud sont tombés en dessous de 30%. La production agricole dans les régions sahariennes pourrait baisser de 15 à 20% sans intervention.",
    detailAr: "انخفضت معدلات ملء السدود في الأحواض الجنوبية إلى أقل من 30%. قد تنخفض الإنتاجية الزراعية في المناطق الصحراوية بنسبة 15-20% بدون تدخل.",
    actionEn: "Activate emergency water supply protocols and accelerate desalination projects",
    actionFr: "Activer les protocoles d'approvisionnement d'urgence en eau et accélérer les projets de dessalement",
    actionAr: "تفعيل بروتوكولات إمدادات المياه الطارئة وتسريع مشاريع تحلية المياه",
    date: "2025-07-20",
    kpi: "<30%",
    trend: "down",
  },
  {
    id: 6,
    level: "info" as const,
    category: "growth",
    titleEn: "GDP growth on track to meet 3.6% target",
    titleFr: "La croissance du PIB en voie d'atteindre l'objectif de 3,6%",
    titleAr: "نمو الناتج المحلي الإجمالي في مسار تحقيق هدف 3.6%",
    detailEn: "H1-2025 GDP growth averaged 3.5%, with Q2 showing acceleration to 3.6%. Non-hydrocarbon sectors driving the expansion.",
    detailFr: "La croissance du PIB au S1-2025 a atteint en moyenne 3,5%, avec une accélération à 3,6% au T2. Les secteurs non-hydrocarbures stimulent l'expansion.",
    detailAr: "بلغ متوسط نمو الناتج المحلي الإجمالي في النصف الأول 2025 نحو 3.5%، مع تسارع إلى 3.6% في الربع الثاني. القطاعات غير الهيدروكربونية تقود التوسع.",
    actionEn: "Continue diversification policies; prepare mid-term fiscal framework",
    actionFr: "Poursuivre les politiques de diversification; préparer le cadre budgétaire à moyen terme",
    actionAr: "الاستمرار في سياسات التنويع؛ إطار الميزانية المتوسطة الأمد",
    date: "2025-07-25",
    kpi: "3.6%",
    trend: "up",
  },
];

// ─── Action Items for Executive Briefing ──────────────────────────────────
export const actionItems = [
  {
    id: 1,
    priority: "high" as const,
    categoryEn: "Economic",
    categoryFr: "Économique",
    categoryAr: "اقتصادي",
    titleEn: "Approve revised grain import quota for Q3-2025",
    titleFr: "Approuver le quota révisé d'importation de céréales pour le T3-2025",
    titleAr: "الموافقة على الحصة المنقحة لاستيراد الحبوب للربع الثالث 2025",
    deadline: "2025-08-15",
    status: "pending" as const,
  },
  {
    id: 2,
    priority: "high" as const,
    categoryEn: "Social",
    categoryFr: "Social",
    categoryAr: "اجتماعي",
    titleEn: "Review youth employment program expansion proposal",
    titleFr: "Examiner la proposition d'extension du programme d'emploi des jeunes",
    titleAr: "مراجعة مقترح توسيع برنامج توظيف الشباب",
    deadline: "2025-08-30",
    status: "inReview" as const,
  },
  {
    id: 3,
    priority: "medium" as const,
    categoryEn: "Infrastructure",
    categoryFr: "Infrastructure",
    categoryAr: "بنية تحتية",
    titleEn: "Validate emergency desalination plant timeline for South",
    titleFr: "Valider le calendrier d'urgence de l'usine de dessalement pour le Sud",
    titleAr: "التصديق على الجدول الزمني الطارئ لمحطة تحلية المياه للجنوب",
    deadline: "2025-09-01",
    status: "pending" as const,
  },
  {
    id: 4,
    priority: "medium" as const,
    categoryEn: "Trade",
    categoryFr: "Commerce",
    categoryAr: "تجاري",
    titleEn: "Sign SME export facilitation decree",
    titleFr: "Signer le décret de facilitation des exportations des PME",
    titleAr: "توقيع مرسوم تسهيل تصدير المؤسسات الصغيرة والمتوسطة",
    deadline: "2025-08-20",
    status: "inReview" as const,
  },
  {
    id: 5,
    priority: "low" as const,
    categoryEn: "Fiscal",
    categoryFr: "Fiscal",
    categoryAr: "مالي",
    titleEn: "Review sovereign reserve diversification strategy report",
    titleFr: "Examiner le rapport de stratégie de diversification des réserves souveraines",
    titleAr: "مراجعة تقرير استراتيجية تنويع الاحتياطيات السيادية",
    deadline: "2025-09-15",
    status: "pending" as const,
  },
  {
    id: 6,
    priority: "high" as const,
    categoryEn: "Water",
    categoryFr: "Eau",
    categoryAr: "مائي",
    titleEn: "Activate drought emergency fund for affected southern wilayas",
    titleFr: "Activer le fonds d'urgence sécheresse pour les wilayas du sud touchées",
    titleAr: "تفعيل صندوق الطوارئ للجفاف للولايات الجنوبية المتأثرة",
    deadline: "2025-08-10",
    status: "pending" as const,
  },
];

// ─── Key Decisions Tracking ───────────────────────────────────────────────
export const keyDecisions = [
  {
    id: 1,
    decisionEn: "Increase non-hydrocarbon export target to $16B for 2025",
    decisionFr: "Augmenter l'objectif d'exportations non-hydrocarbures à 16 Mds USD pour 2025",
    decisionAr: "رفع مستهدف الصادرات غير الهيدروكربونية إلى 16 مليار دولار لسنة 2025",
    date: "2025-03-15",
    status: "inProgress" as const,
    progress: 65,
  },
  {
    id: 2,
    decisionEn: "Launch national digital skills program for 500K youth",
    decisionFr: "Lancer le programme national de compétences numériques pour 500 000 jeunes",
    decisionAr: "إطلاق البرنامج الوطني للمهارات الرقمية لـ 500 ألف شاب",
    date: "2025-02-01",
    status: "inProgress" as const,
    progress: 42,
  },
  {
    id: 3,
    decisionEn: "Approve 3 new desalination plants for southern regions",
    decisionFr: "Approuver 3 nouvelles usines de dessalement pour les régions du sud",
    decisionAr: "الموافقة على 3 محطات تحلية مياه جديدة للمناطق الجنوبية",
    date: "2025-01-20",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 4,
    decisionEn: "Reduce food import dependency by 10% by 2027",
    decisionFr: "Réduire la dépendance aux importations alimentaires de 10% d'ici 2027",
    decisionAr: "تقليل الاعتماد على استيراد الغذاء بنسبة 10% بحلول 2027",
    date: "2025-04-10",
    status: "inProgress" as const,
    progress: 28,
  },
];

// ─── Weekly/Monthly Performance Summary ───────────────────────────────────
export const performanceSummary = {
  week: {
    periodEn: "Week of August 18-22, 2025",
    periodFr: "Semaine du 18-22 août 2025",
    periodAr: "أسبوع 18-22 أغسطس 2025",
    highlightsEn: [
      "Trade surplus widened to $2.1B weekly average, driven by higher energy prices",
      "CPI monthly reading shows continued disinflation trend at 4.2%",
      "Construction sector index rose 3.2% WoW, indicating sustained public investment",
      "FDI inflows reported at $340M for the week, concentrated in manufacturing",
    ],
    highlightsFr: [
      "L'excédent commercial s'est élargi à 2,1 Mds USD en moyenne hebdomadaire, tiré par la hausse des prix de l'énergie",
      "La lecture mensuelle de l'IPC montre une tendance continue de désinflation à 4,2%",
      "L'indice du secteur de la construction a augmenté de 3,2% d'une semaine sur l'autre",
      "Les IDE ont atteint 340 Mds USD pour la semaine, concentrés dans l'industrie",
    ],
    highlightsAr: [
      "اتسع فائض التجارة إلى 2.1 مليار دولار كمتوسط أسبوعي، بدافع ارتفاع أسعار الطاقة",
      "أظهرت القراءة الشهرية لمؤشر أسعار المستهلك اتجاه انخفاض التضخم عند 4.2%",
      "ارتفع مؤشر قطاع البناء بنسبة 3.2% أسبوعياً، مما يدل على استمرار الاستثمار العام",
      "بلغت التدفقات الاستثمارية الأجنبية 340 مليون دولار للأسبوع، تتركز في الصناعة",
    ],
    risksEn: [
      "Global oil price volatility may impact Q3 export revenues",
      "Southern drought conditions worsening, could affect agricultural output",
    ],
    risksFr: [
      "La volatilité des prix mondiaux du pétrole pourrait impacter les recettes d'exportation du T3",
      "Les conditions de sécheresse dans le sud s'aggravent, pourraient affecter la production agricole",
    ],
    risksAr: [
      "قد تؤثر تقلبات أسعار النفط العالمية على إيرادات التصدير في الربع الثالث",
      "تتفاقم ظروف الجفاف في الجنوب، وقد تؤثر على الإنتاج الزراعي",
    ],
  },
};

// ─── Dashboard Quick-Access Links ─────────────────────────────────────────
export const quickAccessLinks = [
  { key: "macro", icon: "Activity" },
  { key: "inflation", icon: "Scale" },
  { key: "trade", icon: "Globe" },
  { key: "regional", icon: "Building2" },
  { key: "benchmarking", icon: "BarChart3" },
  { key: "ai", icon: "Bot" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// EXECUTIVE ENHANCEMENTS — Risk Heatmap, Target Tracker, Period Comparison
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Risk Matrix (probability × impact) ────────────────────────────────────
export type RiskLevel = "critical" | "high" | "medium" | "low";
export interface RiskItem {
  id: number;
  category: string;
  probability: number;      // 0–100
  impact: number;           // 0–100
  level: RiskLevel;
  titleEn: string; titleFr: string; titleAr: string;
  descEn: string; descFr: string; descAr: string;
  trend: "up" | "down" | "stable";
}

export const riskMatrix: RiskItem[] = [
  { id: 1, category: "economic", probability: 65, impact: 80, level: "critical",
    titleEn: "Oil price shock (>20% drop)", titleFr: "Choc pétrolier (>20% de baisse)", titleAr: "صدمة نفطية (انخفاض >20%)",
    descEn: "Sustained Brent below $60/bbl would cut export revenue by $8B+",
    descFr: "Un Brent soutenu en dessous de 60 $/bbl réduirait les recettes d'exportation de 8 Mds+$",
    descAr: "انخفاض برنت المستمر عن 60 دولار/برميل سيقلل إيرادات التصدير بأكثر من 8 مليار دولار",
    trend: "stable" },
  { id: 2, category: "climate", probability: 75, impact: 70, level: "critical",
    titleEn: "Southern drought escalation", titleFr: "Escalade de la sécheresse au sud", titleAr: "تصاعد الجفاف في الجنوب",
    descEn: "Dam levels below 30% in southern basins threatening agriculture and water supply",
    descFr: "Niveaux de barrages inférieurs à 30% dans les bassins du sud menaçant l'agriculture",
    descAr: "مستويات السدود أقل من 30% في الأحواض الجنوبية تهدد الزراعة وإمدادات المياه",
    trend: "up" },
  { id: 3, category: "social", probability: 55, impact: 75, level: "high",
    titleEn: "Youth unemployment spike", titleFr: "Hausse du chômage des jeunes", titleAr: "ارتفاع بطالة الشباب",
    descEn: "Youth unemployment at 29.5% with limited absorption capacity in formal sector",
    descFr: "Chômage des jeunes à 29,5% avec capacité d'absorption limitée dans le secteur formel",
    descAr: "بطالة الشباب عند 29.5% مع محدودية القدرة الاستيعابية في القطاع الرسمي",
    trend: "stable" },
  { id: 4, category: "fiscal", probability: 40, impact: 85, level: "high",
    titleEn: "Public debt acceleration", titleFr: "Accélération de la dette publique", titleAr: "تسارع الدين العام",
    descEn: "Debt-to-GDP approaching 55% threshold; fiscal consolidation needed",
    descFr: "Dette/PIB approchant le seuil de 55% ; consolidation budgétaire nécessaire",
    descAr: "الدين/الناتج المحلي يقترب من عتبة 55%؛ 需要 تعزيز الميزانية",
    trend: "up" },
  { id: 5, category: "trade", probability: 50, impact: 60, level: "medium",
    titleEn: "Non-HC export shortfall", titleFr: "Déficit des exportations non-HC", titleAr: "عجز الصادرات غير الهيدروكربونية",
    descEn: "Non-hydrocarbon exports 8% below H1 target of $7.8B",
    descFr: "Exportations non-hydrocarbures 8% en dessous de l'objectif S1 de 7,8 Mds$",
    descAr: "الصادرات غير الهيدروكربونية أقل بـ 8% من مستهدف النصف الأول البالغ 7.8 مليار دولار",
    trend: "stable" },
  { id: 6, category: "inflation", probability: 45, impact: 65, level: "medium",
    titleEn: "Food price volatility", titleFr: "Volatilité des prix alimentaires", titleAr: "تقلب أسعار المواد الغذائية",
    descEn: "Food inflation at 6.3% with cereals and dairy as main drivers",
    descFr: "Inflation alimentaire à 6,3% avec les céréales et les produits laitiers comme moteurs principaux",
    descAr: "التضخم الغذائي عند 6.3% مع الحبوب ومنتجات الألبان كمحركات رئيسية",
    trend: "down" },
  { id: 7, category: "energy", probability: 30, impact: 70, level: "medium",
    titleEn: "Gas supply disruption risk", titleFr: "Risque de rupture d'approvisionnement en gaz", titleAr: "خطر انقطاع إمدادات الغاز",
    descEn: "Domestic gas demand growing 4% annually against flat production profile",
    descFr: "Demande intérieure de gaz en croissance de 4% par an face à un profil de production plat",
    descAr: "الطلب المحلي على الغاز ينمو بنسبة 4% سنوياً مقابل مستوى إنتاج ثابت",
    trend: "up" },
  { id: 8, category: "geopolitical", probability: 25, impact: 55, level: "low",
    titleEn: "Regional instability spillover", titleFr: "Débordement de l'instabilité régionale", titleAr: "تسرب عدم الاستقرار الإقليمي",
    descEn: "Regional tensions could affect trade routes and investor confidence",
    descFr: "Les tensions régionales pourraient affecter les routes commerciales et la confiance des investisseurs",
    descAr: "يمكن أن تؤثر التوترات الإقليمية على طرق التجارة وثقة المستثمرين",
    trend: "stable" },
  { id: 9, category: "technology", probability: 20, impact: 40, level: "low",
    titleEn: "Cybersecurity threat to critical infra", titleFr: "Menace cyber sur les infrastructures critiques", titleAr: "تهديد cyberinfrastructure للبنية التحتية الحرجة",
    descEn: "Increasing attack surface on financial and energy infrastructure",
    descFr: "Surface d'attaque croissante sur les infrastructures financières et énergétiques",
    descAr: "تزايد مساحة الهجوم على البنية التحتية المالية والطاقوية",
    trend: "up" },
];

// ─── VNR 2026 Target Tracker ──────────────────────────────────────────────
export interface TargetItem {
  id: number;
  sdgNumber: number;
  titleEn: string; titleFr: string; titleAr: string;
  current: number;
  target: number;
  unit: string;
  statusEn: string; statusFr: string; statusAr: string;
  statusLevel: "onTrack" | "moderate" | "atRisk" | "achieved";
  year: number;
}

export const vnrTargets: TargetItem[] = [
  { id: 1, sdgNumber: 1, titleEn: "Poverty reduction", titleFr: "Réduction de la pauvreté", titleAr: "تخفيض الفقر",
    current: 4.8, target: 3.0, unit: "%", statusEn: "Moderate progress", statusFr: "Progrès modéré", statusAr: "تقدم معتدل", statusLevel: "moderate", year: 2030 },
  { id: 2, sdgNumber: 2, titleEn: "Food security", titleFr: "Sécurité alimentaire", titleAr: "الأمن الغذائي",
    current: 72, target: 85, unit: "%", statusEn: "At risk", statusFr: "À risque", statusAr: "معرض للخطر", statusLevel: "atRisk", year: 2030 },
  { id: 3, sdgNumber: 3, titleEn: "Health expenditure", titleFr: "Dépenses de santé", titleAr: "الإنفاق الصحي",
    current: 6.8, target: 8.5, unit: "% GDP", statusEn: "On track", statusFr: "Sur la bonne voie", statusAr: "في المسار الصحيح", statusLevel: "onTrack", year: 2030 },
  { id: 4, sdgNumber: 4, titleEn: "Upper secondary enrollment", titleFr: "Taux de scolarisation secondaire", titleAr: "الالتحاق بالتعليم الثانوي",
    current: 68, target: 85, unit: "%", statusEn: "Moderate progress", statusFr: "Progrès modéré", statusAr: "تقدم معتدل", statusLevel: "moderate", year: 2030 },
  { id: 5, sdgNumber: 6, titleEn: "Water access (rural)", titleFr: "Accès à l'eau (rural)", titleAr: "الوصول للمياه (ريفي)",
    current: 84, target: 95, unit: "%", statusEn: "On track", statusFr: "Sur la bonne voie", statusAr: "في المسار الصحيح", statusLevel: "onTrack", year: 2030 },
  { id: 6, sdgNumber: 7, titleEn: "Renewable energy share", titleFr: "Part des énergies renouvelables", titleAr: "حصة الطاقة المتجددة",
    current: 3.2, target: 22, unit: "%", statusEn: "At risk", statusFr: "À risque", statusAr: "معرض للخطر", statusLevel: "atRisk", year: 2030 },
  { id: 7, sdgNumber: 8, titleEn: "GDP growth rate", titleFr: "Taux de croissance du PIB", titleAr: "معدل نمو الناتج المحلي",
    current: 3.6, target: 4.5, unit: "%", statusEn: "On track", statusFr: "Sur la bonne voie", titleAr: "في المسار الصحيح", statusLevel: "onTrack", year: 2026 },
  { id: 8, sdgNumber: 9, titleEn: "Non-HC exports", titleFr: "Exportations non-HC", titleAr: "الصادرات غير الهيدروكربونية",
    current: 7.2, target: 16, unit: "Bn$", statusEn: "At risk", statusFr: "À risque", titleAr: "معرض للخطر", statusLevel: "atRisk", year: 2027 },
  { id: 9, sdgNumber: 10, titleEn: "Gini coefficient reduction", titleFr: "Réduction du coefficient de Gini", titleAr: "تخفيض معامل جيني",
    current: 27.6, target: 25.0, unit: "", statusEn: "Moderate progress", statusFr: "Progrès modéré", titleAr: "تقدم معتدل", statusLevel: "moderate", year: 2030 },
  { id: 10, sdgNumber: 13, titleEn: "Climate action (CO2 reduction)", titleFr: "Action climatique (réduction CO2)", titleAr: "العمل المناخي (تخفيض CO2)",
    current: 3.2, target: 2.5, unit: "t/cap", statusEn: "Moderate progress", titleFr: "Progrès modéré", titleAr: "تقدم معتدل", statusLevel: "moderate", year: 2030 },
];

// ─── Period Comparison Data ───────────────────────────────────────────────
export interface ComparisonItem {
  key: string;
  labelEn: string; labelFr: string; labelAr: string;
  current: number;
  previous: number;
  unit: string;
  direction: "up" | "down";
  positive: boolean; // true = increase is good
}

export const periodComparison: ComparisonItem[] = [
  { key: "gdpGrowth", labelEn: "GDP Growth", labelFr: "Croissance du PIB", labelAr: "نمو الناتج المحلي", current: 3.6, previous: 2.8, unit: "%", direction: "up", positive: true },
  { key: "inflation", labelEn: "Inflation (CPI)", labelFr: "Inflation (IPC)", labelAr: "التضخم", current: 4.2, previous: 5.5, unit: "%", direction: "down", positive: true },
  { key: "unemployment", labelEn: "Unemployment", labelFr: "Chômage", labelAr: "البطالة", current: 11.8, previous: 12.3, unit: "%", direction: "down", positive: true },
  { key: "tradeSurplus", labelEn: "Trade Surplus", labelFr: "Excédent commercial", labelAr: "فائض التجارة", current: 12.8, previous: 10.7, unit: "Bn$", direction: "up", positive: true },
  { key: "forexReserves", labelEn: "FX Reserves", labelFr: "Réserves de change", labelAr: "احتياطيات النقد", current: 68.5, previous: 65.1, unit: "Bn$", direction: "up", positive: true },
  { key: "fdi", labelEn: "FDI Inflows", labelFr: "IDE", labelAr: "الاستثمار الأجنبي", current: 1.8, previous: 1.6, unit: "Bn$", direction: "up", positive: true },
  { key: "investmentRate", labelEn: "Investment Rate", labelFr: "Taux d'investissement", labelAr: "معدل الاستثمار", current: 38.2, previous: 36.8, unit: "%", direction: "up", positive: true },
  { key: "debtToGdp", labelEn: "Debt-to-GDP", labelFr: "Dette/PIB", labelAr: "الدين/الناتج المحلي", current: 52, previous: 49.5, unit: "%", direction: "up", positive: false },
  { key: "youthUnemp", labelEn: "Youth Unemployment", labelFr: "Chômage des jeunes", labelAr: "بطالة الشباب", current: 29.5, previous: 30.2, unit: "%", direction: "down", positive: true },
  { key: "budgetDeficit", labelEn: "Budget Deficit", labelFr: "Déficit budgétaire", labelAr: "عجز الميزانية", current: 3.5, previous: 4.2, unit: "%", direction: "down", positive: true },
  { key: "nonHcExports", labelEn: "Non-HC Exports", labelFr: "Exportations non-HC", labelAr: "الصادرات غير الهيدروكربونية", current: 7.2, previous: 6.8, unit: "Bn$", direction: "up", positive: true },
  { key: "ipi", labelEn: "Industrial Production", labelFr: "Production industrielle", labelAr: "الإنتاج الصناعي", current: 4.1, previous: 2.3, unit: "%", direction: "up", positive: true },
];
