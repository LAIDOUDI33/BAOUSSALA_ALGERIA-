"use server";

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

function buildReportPrompt(topic: string, lang: string): string {
  if (lang === "ar") {
    return `أنت خبير اقتصادي جزائري رفيع المستوى. اكتب تقريرا تحليليا اقتصاديا احترافيا باللغة العربية حول: ${topic}

تضمين: 1) الملخص التنفيذي 2) السياق والمقدمة 3) التحليل المفصل مع الأرقام 4) التحليل الإقليمي 5) التوصيات السياسية 6) الخلاصة

تاريخ التقرير: أغسطس 2026 | المصدر: منصة تحليل البيانات - LAIDOUDI Lyassine © 2026`;
  }
  if (lang === "fr") {
    return `Vous êtes un expert économiste algérien. Rédigez un rapport analytique économique professionnel en français sur: ${topic}

Inclure: 1) Résumé exécutif 2) Contexte 3) Analyse détaillée 4) Analyse régionale 5) Recommandations 6) Conclusion

Date: août 2026 | Source: Plateforme d'Analyse de Données - LAIDOUDI Lyassine © 2026`;
  }
  return `You are a senior Algerian economic expert. Write a professional economic report in English about: ${topic}

Include: 1) Executive Summary 2) Context 3) Detailed Analysis 4) Regional Analysis 5) Policy Recommendations 6) Conclusion

Date: August 2026 | Source: Data Analysis Platform - LAIDOUDI Lyassine © 2026`;
}

const RETRY_DELAYS = [10000, 30000, 60000];

async function callWithRetry(fn: () => Promise<unknown>): Promise<{ success: boolean; data?: unknown; error?: string }> {
  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      return { success: true, data: await fn() };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      const is429 = msg.includes("429") || msg.includes("Too many requests");
      if (is429 && attempt < RETRY_DELAYS.length) { await new Promise(r => setTimeout(r, RETRY_DELAYS[attempt])); continue; }
      if (is429) return { success: false, error: "RATE_LIMIT" };
      return { success: false, error: msg };
    }
  }
  return { success: false, error: "Max retries" };
}

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;
async function getZAI() { if (!zaiInstance) zaiInstance = await ZAI.create(); return zaiInstance; }

export async function POST(request: NextRequest) {
  try {
    const { topic, lang } = await request.json();
    if (!topic) return NextResponse.json({ error: "Topic required" }, { status: 400 });
    const { success, data, error } = await callWithRetry(async () => {
      const zai = await getZAI();
      return zai.chat.completions.create({
        messages: [
          { role: "assistant", content: buildReportPrompt(topic, lang || "ar") },
          { role: "user", content: lang === "ar" ? `اكتب التقرير حول: "${topic}"` : `Write report about: "${topic}"` },
        ], thinking: { type: "disabled" },
      });
    });
    if (!success || !data) {
      if (error === "RATE_LIMIT") return NextResponse.json({ success: false, error: "RATE_LIMIT" }, { status: 429 });
      return NextResponse.json({ success: false, error: error || "Unknown" }, { status: 500 });
    }
    const c = data as { choices: Array<{ message?: { content?: string } }> };
    return NextResponse.json({ success: true, report: c.choices[0]?.message?.content || "Failed" });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function GET() { return NextResponse.json({ topics: REPORT_TOPICS }); }
