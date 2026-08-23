// API Route Handler (Next.js App Router)

import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const REPORT_TOPICS = [
  "تقرير شامل عن الوضع الاقتصادي",
  "تحليل قطاع المحروقات",
  "تقرير سوق العمل",
  "تحليل التجارة الخارجية",
  "تقرير التضخم والأسعار",
  "تحليل التنمية الإقليمية",
  "تقرير أهداف التنمية المستدامة",
  "تحليل القطاع الصناعي",
  "تقرير المالية العامة",
  "تحليل القطاع الزراعي",
];

const ECONOMIC_CONTEXT = `
## Algeria Key Economic Data (2024):
- GDP: ~$237 billion
- Population: ~46.2 million
- Inflation rate: ~7.3%
- Unemployment rate: ~11.8%
- Exports: ~$48.5 billion (hydrocarbons dominate at 95%)
- Imports: ~$51.2 billion
- Foreign exchange reserves: ~$64 billion
- Budget deficit: ~3.5% of GDP
- Public debt: ~52% of GDP

## Economic Sectors:
- Hydrocarbons: 40% of GDP, 95% of exports
- Agriculture: ~10% of GDP
- Industry: ~5% of GDP
- Services: ~35% of GDP
- Construction & Public Works: ~10% of GDP

## Social Indicators:
- Life expectancy: ~77 years
- Literacy rate: ~81%
- Urbanization rate: ~73%
- 58 wilayas with significant economic disparities
- Algiers: 15% of GDP

## Sustainable Development Goals (SDGs):
- 17 goals with varying progress
- 2026 Voluntary National Report

Cite these figures when relevant. Be precise and professional.`;

function buildReportPrompt(topic: string, lang: string): string {
  if (lang === "ar") {
    return `أنت خبير اقتصادي جزائري رفيع المستوى. اكتب تقريرا تحليليا اقتصاديا احترافيا باللغة العربية فقط حول: ${topic}

البيانات المرجعية:
${ECONOMIC_CONTEXT}

هيكل التقرير المطلوب:
1) الملخص التنفيذي 2) السياق والمقدمة 3) التحليل المفصل مع الأرقام 4) التحليل الإقليمي 5) التوصيات السياسية 6) الخلاصة

تاريخ التقرير: أغسطس 2026 | المصدر: منصة تحليل البيانات - LAIDOUDI Lyassine © 2026`;
  }
  if (lang === "fr") {
    return `Vous êtes un expert économiste algérien de haut niveau. Rédigez un rapport analytique économique professionnel EN FRANÇAIS UNIQUEMENT sur : ${topic}

Données de référence :
${ECONOMIC_CONTEXT}

Structure du rapport requise :
1) Résumé exécutif 2) Contexte et introduction 3) Analyse détaillée avec chiffres 4) Analyse régionale 5) Recommandations politiques 6) Conclusion

Date : août 2026 | Source : Plateforme d'Analyse de Données - LAIDOUDI Lyassine © 2026`;
  }
  return `You are a senior Algerian economic expert. Write a professional economic analytical report IN ENGLISH ONLY about: ${topic}

Reference data:
${ECONOMIC_CONTEXT}

Required report structure:
1) Executive Summary 2) Context and Introduction 3) Detailed Analysis with figures 4) Regional Analysis 5) Policy Recommendations 6) Conclusion

Date: August 2026 | Source: Data Analysis Platform - LAIDOUDI Lyassine © 2026`;
}

const RETRY_DELAYS = [10000, 30000, 60000];
const ZAI_TIMEOUT_MS = 120_000; // 2 minutes max for report generation

async function callWithRetry(fn: () => Promise<unknown>): Promise<{ success: boolean; data?: unknown; error?: string }> {
  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      // Add timeout wrapper around each attempt
      const result = await Promise.race([
        fn(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("TIMEOUT")), ZAI_TIMEOUT_MS)
        ),
      ]);
      return { success: true, data: result };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      const is429 = msg.includes("429") || msg.includes("Too many requests");
      const isTimeout = msg === "TIMEOUT";
      if (isTimeout) return { success: false, error: "TIMEOUT" };
      if (is429 && attempt < RETRY_DELAYS.length) {
        await new Promise(r => setTimeout(r, RETRY_DELAYS[attempt]));
        continue;
      }
      if (is429) return { success: false, error: "RATE_LIMIT" };
      return { success: false, error: msg };
    }
  }
  return { success: false, error: "Max retries" };
}

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;
async function getZAI() {
  if (!zaiInstance) {
    try {
      zaiInstance = await ZAI.create();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "ZAI init failed";
      throw new Error(`ZAI_INIT: ${msg}`);
    }
  }
  return zaiInstance;
}
function resetZAI() { zaiInstance = null; }

export async function POST(request: NextRequest) {
  try {
    const { topic, lang } = await request.json();
    if (!topic) return NextResponse.json({ error: "Topic required" }, { status: 400 });

    const effectiveLang = lang || "ar";

    const { success, data, error } = await callWithRetry(async () => {
      const zai = await getZAI();
      return zai.chat.completions.create({
        messages: [
          { role: "system", content: buildReportPrompt(topic, effectiveLang) },
          { role: "user", content: effectiveLang === "fr" ? `Rédigez le rapport complet sur : "${topic}"` : effectiveLang === "en" ? `Write the full report about: "${topic}"` : `اكتب التقرير الكامل حول: "${topic}"` },
        ],
        thinking: { type: "disabled" },
      });
    });

    if (!success || !data) {
      resetZAI();
      if (error === "RATE_LIMIT") return NextResponse.json({ success: false, error: "RATE_LIMIT" }, { status: 429 });
      if (error === "TIMEOUT") return NextResponse.json({ success: false, error: "TIMEOUT" }, { status: 504 });
      return NextResponse.json({ success: false, error: error || "Unknown" }, { status: 500 });
    }

    const c = data as { choices: Array<{ message?: { content?: string } }> };
    const reportContent = c.choices[0]?.message?.content;
    if (!reportContent || reportContent.length < 50) {
      resetZAI();
      return NextResponse.json({ success: false, error: "EMPTY_REPORT" }, { status: 500 });
    }

    return NextResponse.json({ success: true, report: reportContent });
  } catch (e: unknown) {
    resetZAI();
    const msg = e instanceof Error ? e.message : "Unknown";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function GET() { return NextResponse.json({ topics: REPORT_TOPICS }); }
