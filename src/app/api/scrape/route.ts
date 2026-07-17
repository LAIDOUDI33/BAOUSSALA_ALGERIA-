import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://www.ons.dz";

interface CrawlResult {
  url: string;
  title: string;
  text: string;
  pdfs: string[];
  links: string[];
}

async function crawlPage(url: string): Promise<CrawlResult> {
  const ZAI = await import("z-ai-web-dev-sdk").then((m) => m.default);
  const zai = await ZAI.create();

  const result = await zai.functions.invoke("page_reader", { url });

  const html = result?.data?.html || "";
  const title =
    result?.data?.title ||
    html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() ||
    "Untitled";

  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

  const pdfMatches = html.match(/href=["']([^"']*\.pdf)["'\s]/gi) || [];
  const pdfs = pdfMatches
    .map((m: string) => {
      const match = m.match(/href=["']([^"']+\.pdf)["']/i);
      if (!match) return null;
      const link = match[1];
      if (link.startsWith("/")) return BASE_URL + link;
      if (link.startsWith("http")) return link;
      return BASE_URL + "/" + link;
    })
    .filter(Boolean) as string[];

  const linkMatches = html.match(/href=["'](spip\.php\?[^"']+)["'\s]/gi) || [];
  const links = linkMatches
    .map((m: string) => {
      const match = m.match(/href=["'](spip\.php\?[^"']+)["']/i);
      return match ? BASE_URL + "/" + match[1] : null;
    })
    .filter(Boolean) as string[];

  return { url, title, text, pdfs: [...new Set(pdfs)], links: [...new Set(links)] };
}

// POST /api/scrape - Trigger a new crawl
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { targetUrl, sections } = body;

    const urlsToCrawl = targetUrl
      ? [targetUrl]
      : sections || [
          `${BASE_URL}/`,
          `${BASE_URL}/spip.php?rubrique3`,
          `${BASE_URL}/spip.php?rubrique4`,
          `${BASE_URL}/spip.php?rubrique294`,
          `${BASE_URL}/spip.php?rubrique12`,
          `${BASE_URL}/spip.php?rubrique2`,
          `${BASE_URL}/spip.php?rubrique24`,
          `${BASE_URL}/spip.php?rubrique38`,
        ];

    const results: CrawlResult[] = [];
    const allPdfs: string[] = [];
    const allLinks: string[] = [];

    for (const url of urlsToCrawl) {
      try {
        const result = await crawlPage(url);
        results.push(result);
        allPdfs.push(...result.pdfs);
        allLinks.push(...result.links);
        // Small delay to avoid rate limiting
        await new Promise((r) => setTimeout(r, 500));
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        results.push({
          url,
          title: "Error",
          text: "",
          pdfs: [],
          links: [],
        });
      }
    }

    return NextResponse.json({
      success: true,
      pagesCrawled: results.length,
      results,
      allPdfs: [...new Set(allPdfs)],
      allLinks: [...new Set(allLinks)],
    });
  } catch (error) {
    console.error("Scrape error:", error);
    return NextResponse.json(
      { error: "Failed to scrape" },
      { status: 500 }
    );
  }
}