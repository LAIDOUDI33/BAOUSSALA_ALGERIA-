import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const BASE_URL = "https://www.ons.dz";

// ONS Website Structure - known sections and their economic classifications
const ONS_SECTIONS = [
  {
    name: "Accueil",
    nameAr: "الرئيسية",
    nameFr: "Accueil",
    url: `${BASE_URL}/`,
    description: "Main page with latest statistical publications and news",
    icon: "Home",
    color: "#192f65",
  },
  {
    name: "Social Statistics",
    nameAr: "إحصائيات اجتماعية",
    nameFr: "Statistiques Sociales",
    url: `${BASE_URL}/spip.php?rubrique3`,
    description: "Population, employment, education, health, and living conditions data",
    icon: "Users",
    color: "#059669",
  },
  {
    name: "Economic Statistics",
    nameAr: "إحصائيات اقتصادية",
    nameFr: "Statistiques Economiques",
    url: `${BASE_URL}/spip.php?rubrique4`,
    description: "GDP, national accounts, trade balance, industry, and agriculture data",
    icon: "TrendingUp",
    color: "#d97706",
  },
  {
    name: "Directories",
    nameAr: "دلائل",
    nameFr: "Répertoires",
    url: `${BASE_URL}/spip.php?rubrique294`,
    description: "Economic and social agent directories - businesses and individuals",
    icon: "BookOpen",
    color: "#7c3aed",
  },
  {
    name: "Price Indices",
    nameAr: "أرقام مؤشرات",
    nameFr: "Indices",
    url: `${BASE_URL}/spip.php?rubrique12`,
    description: "Consumer price index (CPI), industrial production index, import/export price indices",
    icon: "BarChart3",
    color: "#dc2626",
  },
  {
    name: "Publications",
    nameAr: "منشورات",
    nameFr: "Publications",
    url: `${BASE_URL}/spip.php?rubrique2`,
    description: "Official statistical publications, reports, and bulletins",
    icon: "FileText",
    color: "#2563eb",
  },
  {
    name: "Nomenclatures",
    nameAr: "تصنيفات",
    nameFr: "Nomenclatures",
    url: `${BASE_URL}/spip.php?rubrique24`,
    description: "Official statistical classifications and nomenclature systems",
    icon: "List",
    color: "#0891b2",
  },
  {
    name: "Presentation",
    nameAr: "تقديم",
    nameFr: "Présentation",
    url: `${BASE_URL}/spip.php?rubrique38`,
    description: "About the National Statistics Office - mission, organization, and activities",
    icon: "Info",
    color: "#6b7280",
  },
];

// Known PDFs from the homepage with classification
const KNOWN_PDFS = [
  {
    title: "Répertoire des agents économiques et sociaux - Personnes Physiques S2 2023",
    titleFr: "Répertoire Personnes Physiques au 31/12/2023",
    description: "Directory of economic and social agents - Physical persons registered at end of 2023. Contains data on self-employed individuals, freelancers, and individual entrepreneurs across all Algerian wilayas.",
    url: `${BASE_URL}//IMG/pdf/Prsphys_S2_2023.pdf`,
    category: "Directories",
    period: "S2 2023",
    year: 2023,
    dataType: "directory",
    isNew: true,
    tags: "entreprises,personnes physiques,répertoire,registre",
  },
  {
    title: "Répertoire des agents économiques et sociaux - Personnes Physiques S2 2022",
    titleFr: "Répertoire Personnes Physiques au 31/12/2022",
    description: "Directory of economic and social agents - Physical persons at end of 2022. Comparative data for tracking the evolution of individual entrepreneurship in Algeria.",
    url: `${BASE_URL}//IMG/pdf/Prsphys_S2_2022.pdf`,
    category: "Directories",
    period: "S2 2022",
    year: 2022,
    dataType: "directory",
    isNew: false,
    tags: "entreprises,personnes physiques,répertoire",
  },
  {
    title: "Indice des Prix à la Consommation - Avril 2026",
    titleFr: "IPC - Avril 2026",
    description: "Consumer Price Index for April 2026. Measures inflation rate and price evolution of consumer goods and services across Algeria. Key indicator for monetary policy and purchasing power analysis.",
    url: `${BASE_URL}//IMG/pdf/IPC_Avril2026.pdf`,
    category: "Price Indices",
    period: "Avril 2026",
    year: 2026,
    quarter: "Q2",
    dataType: "index",
    isNew: true,
    tags: "IPC,inflation,prix,consommation,indice",
  },
  {
    title: "Enquête trimestrielle dans l'industrie - 2ème trimestre 2025",
    titleFr: "Enquête Industrie 2T 2025",
    description: "Quarterly industrial survey for Q2 2025. Covers industrial production trends, capacity utilization, order books, and business sentiment in the manufacturing sector.",
    url: `${BASE_URL}//IMG/pdf/industrie2T2025.pdf`,
    category: "Economic Statistics",
    period: "2T 2025",
    year: 2025,
    quarter: "Q2",
    dataType: "survey",
    isNew: true,
    tags: "industrie,production,enquête,manufacturier",
  },
  {
    title: "Comptes Nationaux Trimestriels - 2ème trimestre 2025",
    titleFr: "CNT 2T 2025",
    description: "Quarterly National Accounts for Q2 2025. Includes GDP growth rate, value added by sector, final consumption, investment (GFCF), and trade balance figures.",
    url: `${BASE_URL}//IMG/pdf/CNT2T2025.pdf`,
    category: "Economic Statistics",
    period: "2T 2025",
    year: 2025,
    quarter: "Q2",
    dataType: "national_accounts",
    isNew: true,
    tags: "PIB,comptes nationaux,croissance,PIB trimestriel",
  },
  {
    title: "Indices du commerce extérieur - 1er semestre 2025",
    titleFr: "Indices Commerce Extérieur S1 2025",
    description: "External trade indices for H1 2025. Covers terms of trade, unit value indices for exports and imports, and volume indices. Essential for analyzing Algeria's trade competitiveness.",
    url: `${BASE_URL}//IMG/pdf/indice_commerce_exterieur_s1_2025.pdf`,
    category: "Price Indices",
    period: "S1 2025",
    year: 2025,
    dataType: "index",
    isNew: true,
    tags: "commerce extérieur,indices,exportations,importations",
  },
  {
    title: "Indice de la Production Industrielle - 2T 2025",
    titleFr: "IPI 2T 2025",
    description: "Industrial Production Index for Q2 2025. Measures monthly and quarterly changes in the volume of industrial output, broken down by industrial sector (mining, manufacturing, energy).",
    url: `${BASE_URL}//IMG/pdf/I.IPI2T2025.pdf`,
    category: "Price Indices",
    period: "2T 2025",
    year: 2025,
    quarter: "Q2",
    dataType: "index",
    isNew: true,
    tags: "IPI,production industrielle,indice,manufacture",
  },
  {
    title: "Indice des Prix à la Production Industrielle - 2T 2025",
    titleFr: "IPPI 2T 2025",
    description: "Industrial Producer Price Index for Q2 2025. Tracks price changes at the factory gate for industrial products, a leading indicator of consumer price inflation.",
    url: `${BASE_URL}//IMG/pdf/IPPI2T2025.pdf`,
    category: "Price Indices",
    period: "2T 2025",
    year: 2025,
    quarter: "Q2",
    dataType: "index",
    isNew: true,
    tags: "IPPI,prix production,indice,industrie",
  },
  {
    title: "Comptes Economiques 2021-2024",
    titleFr: "Comptes Economiques 2021-2024",
    description: "National economic accounts for 2021-2024. Comprehensive annual data including GDP by expenditure and production approach, national income, savings rate, and sectoral value added.",
    url: `${BASE_URL}//IMG/pdf/comptes_econoniques__2021_2024.pdf`,
    category: "Economic Statistics",
    period: "2021-2024",
    year: 2024,
    dataType: "national_accounts",
    isNew: true,
    tags: "comptes nationaux,PIB annuel,croissance économique",
  },
  {
    title: "Commerce Extérieur Base 2019 - 1er trimestre 2025",
    titleFr: "Commerce Extérieur 1T 2025 (base 2019)",
    description: "Foreign trade statistics Q1 2025 (2019 base). Detailed data on exports, imports, trade balance by product category and partner country. Hydrocarbons share and diversification metrics.",
    url: `${BASE_URL}//IMG/pdf/commerce_ext1T2025base2019.pdf`,
    category: "Economic Statistics",
    period: "1T 2025",
    year: 2025,
    quarter: "Q1",
    dataType: "trade",
    isNew: true,
    tags: "commerce extérieur,exportations,importations,balance commerciale",
  },
  {
    title: "Commerce Extérieur Année 2024 (Base 2019)",
    titleFr: "Commerce Extérieur Année 2024",
    description: "Annual foreign trade statistics for 2024. Complete yearly overview of Algeria's trade flows including total exports, imports, trade deficit/surplus, and structural analysis.",
    url: `${BASE_URL}//IMG/pdf/commerce_ext_base2019anne2024.pdf`,
    category: "Economic Statistics",
    period: "2024",
    year: 2024,
    dataType: "trade",
    isNew: true,
    tags: "commerce extérieur,annual,exportations,importations,balance",
  },
  {
    title: "Tableaux Ressources et Emplois 2021-2023",
    titleFr: "TRE 2021-2023",
    description: "Supply and Use Tables (TRE) 2021-2023. Input-output framework showing the flow of goods and services between industries and final demand categories.",
    url: `${BASE_URL}//IMG/pdf/TRE2021_2023.pdf`,
    category: "Economic Statistics",
    period: "2021-2023",
    year: 2023,
    dataType: "national_accounts",
    isNew: true,
    tags: "tableaux ressources emplois,input-output,équilibre,biens et services",
  },
  {
    title: "Calendrier Statistique ONS 2025",
    titleFr: "Calendrier ONS 2025",
    description: "Official release calendar for ONS statistical publications in 2025. Schedule of upcoming economic indicators, surveys, and reports to be published throughout the year.",
    url: `${BASE_URL}/IMG/pdf/CalendrierONS_2025.pdf`,
    category: "Publications",
    period: "2025",
    year: 2025,
    dataType: "calendar",
    isNew: false,
    tags: "calendrier,publication,planification,statistiques",
  },
];

// Sub-rubriques discovered from crawling
const SUB_RUBRIQUES: Record<string, { title: string; category: string; description: string }> = {
  "rubrique139": {
    title: "Enquêtes auprès des ménages",
    titleFr: "Enquêtes auprès des ménages",
    category: "Social Statistics",
    description: "Household surveys covering employment (ENEM), consumption (ENSC), and living conditions. Key source for poverty, unemployment, and social indicators.",
  },
  "rubrique161": {
    title: "Démographie",
    titleFr: "Démographie",
    category: "Social Statistics",
    description: "Demographic data including population estimates, birth/death rates, fertility rates, migration, and population projections by wilaya.",
  },
  "rubrique166": {
    title: "Statistiques de l'emploi",
    titleFr: "Statistiques de l'emploi",
    category: "Social Statistics",
    description: "Employment and unemployment statistics: activity rate, unemployment rate by gender and age group, informal employment, and sectoral employment distribution.",
  },
  "rubrique207": {
    title: "Statistiques de l'éducation",
    titleFr: "Statistiques de l'éducation",
    category: "Social Statistics",
    description: "Education statistics: school enrollment rates, literacy rates, number of students by level, graduation rates, and educational expenditure.",
  },
  "rubrique212": {
    title: "Comptes Nationaux",
    titleFr: "Comptes Nationaux",
    category: "Economic Statistics",
    description: "National accounts: GDP (annual and quarterly), gross national income, national savings, investment rate, and institutional sector accounts.",
  },
  "rubrique220": {
    title: "Statistiques du commerce extérieur",
    titleFr: "Statistiques du commerce extérieur",
    category: "Economic Statistics",
    description: "External trade statistics: exports and imports by product (SITC/HS), by partner country, trade balance, hydrocarbons vs non-hydrocarbons breakdown.",
  },
  "rubrique26": {
    title: "Statistiques agricoles",
    titleFr: "Statistiques agricoles",
    category: "Economic Statistics",
    description: "Agricultural statistics: crop production, livestock, agricultural land use, cereal production, and food self-sufficiency ratios.",
  },
  "rubrique27": {
    title: "Statistiques industrielles",
    titleFr: "Statistiques industrielles",
    category: "Economic Statistics",
    description: "Industrial production statistics: industrial output by sector, manufacturing value added, energy production, and mining output.",
  },
  "rubrique28": {
    title: "Statistiques des prix",
    titleFr: "Statistiques des prix",
    category: "Price Indices",
    description: "Price statistics: CPI by division and group, core inflation, producer prices, agricultural prices, and construction cost indices.",
  },
  "rubrique31": {
    title: "Statistiques des transports",
    titleFr: "Statistiques des transports",
    category: "Economic Statistics",
    description: "Transport statistics: freight and passenger traffic, port activity, road infrastructure, vehicle fleet, and air transport metrics.",
  },
};

async function seedDatabase() {
  // Seed categories
  for (let i = 0; i < ONS_SECTIONS.length; i++) {
    const section = ONS_SECTIONS[i];
    await db.category.upsert({
      where: { id: `cat-${section.name.toLowerCase().replace(/\s+/g, "-")}` },
      update: {},
      create: {
        id: `cat-${section.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: section.name,
        nameAr: section.nameAr,
        nameFr: section.nameFr,
        description: section.description,
        icon: section.icon,
        color: section.color,
        order: i,
      },
    });
  }

  // Seed known PDFs
  for (const pdf of KNOWN_PDFS) {
    const cat = await db.category.findFirst({
      where: { name: pdf.category },
    });
    if (!cat) continue;

    await db.dataItem.upsert({
      where: { id: `item-${pdf.titleFr.replace(/\s+/g, "-").substring(0, 50)}` },
      update: {},
      create: {
        id: `item-${pdf.titleFr.replace(/\s+/g, "-").substring(0, 50)}`,
        title: pdf.title,
        titleFr: pdf.titleFr,
        description: pdf.description,
        categoryId: cat.id,
        sourceUrl: pdf.url,
        pdfUrl: pdf.url.replace("//", "/"),
        period: pdf.period,
        year: pdf.year || null,
        quarter: pdf.quarter || null,
        dataType: pdf.dataType,
        tags: pdf.tags,
        isNew: pdf.isNew,
      },
    });
  }

  // Seed sub-rubriques as data items
  for (const [rubId, info] of Object.entries(SUB_RUBRIQUES)) {
    const cat = await db.category.findFirst({
      where: { name: info.category },
    });
    if (!cat) continue;

    await db.dataItem.upsert({
      where: { id: `item-${rubId}` },
      update: {},
      create: {
        id: `item-${rubId}`,
        title: info.title,
        titleFr: info.titleFr,
        description: info.description,
        categoryId: cat.id,
        sourceUrl: `${BASE_URL}/spip.php?${rubId}`,
        dataType: "section",
      },
    });
  }
}

export async function POST() {
  try {
    await seedDatabase();

    const categories = await db.category.findMany({ orderBy: { order: "asc" } });
    const items = await db.dataItem.findMany({
      include: { category: true },
    });

    return NextResponse.json({
      success: true,
      categoriesCount: categories.length,
      itemsCount: items.length,
      categories,
      items,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}

// GET - check if seed has been done
export async function GET() {
  const count = await db.category.count();
  return NextResponse.json({ seeded: count > 0, categoriesCount: count });
}