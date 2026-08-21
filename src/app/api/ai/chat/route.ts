// API Route Handler — no "use server" directive needed

import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const conversations = new Map<string, Array<{ role: string; content: string }>>();

const ECONOMIC_CONTEXT = `
أنت خبير اقتصادي متخصص في الاقتصاد الجزائري. لديك معرفة عميقة بالبيانات الاقتصادية التالية:

## البيانات الأساسية للجزائر:
- الناتج المحلي الإجمالي: ~237 مليار دولار (2024)
- السكان: ~46.2 مليون نسمة
- معدل التضخم: ~7.3%
- معدل البطالة: ~11.8%
- الصادرات: ~48.5 مليار دولار (مهيمنة بالهيدروكربونات)
- الواردات: ~51.2 مليار دولار
- احتياطيات الصرف: ~64 مليار دولار

## القطاعات الاقتصادية الرئيسية:
- المحروقات: 40% من الناتج المحلي، 95% من الصادرات
- الزراعة: ~10% من الناتج المحلي
- الصناعة: ~5% من الناتج المحلي
- الخدمات: ~35% من الناتج المحلي
- البناء والأشغال العمومية: ~10% من الناتج المحلي

## المؤشرات الاجتماعية:
- متوسط العمر المتوقع: ~77 سنة
- معدل الإلمام بالقراءة والكتابة: ~81%
- نسبة التحضر: ~73%

## أهداف التنمية المستدامة (ODD):
- 17 هدف مع تقدم متفاوت
- التقرير الوطني الطوعي 2026
- مؤشرات الصحة، التعليم، الطاقة، المياه، السكن

## البيانات الإقليمية:
- 58 ولاية مع تفاوتات اقتصادية كبيرة
- الجزائر العاصمة: 15% من الناتج المحلي
- الهضاب العليا والجنوب: فجوات تنمية

## المؤشرات المالية:
- عجز الميزانية: ~3.5% من الناتج المحلي
- الدين العام: ~52% من الناتج المحلي
- المداخيل الجبائية: ~5.5 تريليون دج

أجب دائما باللغة العربية. كن دقيقا ومحترفا. استشهد بالأرقام عندما يكون ذلك ممكنا.
قدم تحليلا متعمقا واقتراحات عملية. إذا كنت لا تعرف إجابة دقيقة، قل ذلك بوضوح.`;

const RETRY_DELAYS = [10000, 30000, 60000];

async function callWithRetry(fn: () => Promise<unknown>): Promise<{ success: boolean; data?: unknown; error?: string }> {
  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      const result = await fn();
      return { success: true, data: result };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      const is429 = msg.includes("429") || msg.includes("Too many requests");
      if (is429 && attempt < RETRY_DELAYS.length) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAYS[attempt]));
        continue;
      }
      if (is429) return { success: false, error: "RATE_LIMIT" };
      return { success: false, error: msg };
    }
  }
  return { success: false, error: "Max retries exceeded" };
}

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;
async function getZAI() {
  if (!zaiInstance) zaiInstance = await ZAI.create();
  return zaiInstance;
}
function resetZAI() { zaiInstance = null; }

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();
    if (!message || !sessionId) return NextResponse.json({ error: "Message and sessionId are required" }, { status: 400 });

    let history = conversations.get(sessionId);
    if (!history) { history = [{ role: "assistant", content: ECONOMIC_CONTEXT }]; conversations.set(sessionId, history); }
    history.push({ role: "user", content: message });
    if (history.length > 12) { history = [history[0], ...history.slice(-10)]; conversations.set(sessionId, history); }

    const { success, data, error } = await callWithRetry(async () => {
      const zai = await getZAI();
      return zai.chat.completions.create({
        messages: history.map(m => ({ role: m.role as "assistant" | "user", content: m.content })),
        thinking: { type: "disabled" },
      });
    });

    if (!success || !data) {
      if (error === "RATE_LIMIT") return NextResponse.json({ success: false, error: "RATE_LIMIT" }, { status: 429 });
      resetZAI();
      return NextResponse.json({ success: false, error: error || "Unknown error" }, { status: 500 });
    }

    const completion = data as { choices: Array<{ message?: { content?: string } }> };
    const response = completion.choices[0]?.message?.content || "عذرا، لم أتمكن من توليد رد.";
    history.push({ role: "assistant", content: response });
    conversations.set(sessionId, history);
    return NextResponse.json({ success: true, response });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");
  if (sessionId) conversations.delete(sessionId);
  return NextResponse.json({ success: true });
}
