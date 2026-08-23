"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot, FileText, Send, Trash2, Copy, Check, Loader2, Sparkles, MessageSquare, Globe, Languages } from "lucide-react";

function genId() { return Math.random().toString(36).substring(2, 15); }
interface Message { role: "user" | "assistant"; content: string; }
interface AITabProps { t: Record<string, string>; isRtl?: boolean; }

export function AITab({ t, isRtl }: AITabProps) {
  return (
    <Tabs defaultValue="chat" className="w-full">
      <TabsList className="mb-5">
        <TabsTrigger value="chat" className="gap-1.5"><MessageSquare className="w-3.5 h-3.5" />{t.aiChatTab}</TabsTrigger>
        <TabsTrigger value="report" className="gap-1.5"><FileText className="w-3.5 h-3.5" />{t.aiReportTab}</TabsTrigger>
      </TabsList>
      <TabsContent value="chat"><ChatPanel t={t} isRtl={isRtl} /></TabsContent>
      <TabsContent value="report"><ReportPanel t={t} isRtl={isRtl} /></TabsContent>
    </Tabs>
  );
}

function ChatPanel({ t, isRtl }: AITabProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => genId());
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, loading]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setMessages(prev => [...prev, { role: "user", content: trimmed }]);
    setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/ai/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: trimmed, sessionId }) });
      const data = await res.json();
      if (data.success) { setMessages(prev => [...prev, { role: "assistant", content: data.response }]); }
      else if (data.error === "RATE_LIMIT") { setMessages(prev => [...prev, { role: "assistant", content: isRtl ? "⏳ تم تجاوز حد الطلبات حالياً. يرجى المحاولة لاحقاً." : "⏳ Limite de requêtes atteinte. Veuillez réessayer plus tard." }]); }
      else { setMessages(prev => [...prev, { role: "assistant", content: `${t.aiErrorTitle}: ${data.error}` }]); }
    } catch { setMessages(prev => [...prev, { role: "assistant", content: t.aiErrorTitle }]); }
    finally { setLoading(false); }
  }, [input, loading, sessionId, t, isRtl]);

  const clearChat = async () => { setMessages([]); await fetch(`/api/ai/chat?sessionId=${sessionId}`, { method: "DELETE" }); };
  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  const quickTopics = isRtl
    ? [{ icon: "📊", l: "الناتج المحلي" }, { icon: "📈", l: "التضخم" }, { icon: "🤝", l: "التجارة الخارجية" }, { icon: "🏢", l: "سوق العمل" }]
    : [{ icon: "📊", l: "PIB / GDP" }, { icon: "📈", l: "Inflation" }, { icon: "🤝", l: "Trade Balance" }, { icon: "🏢", l: "Labor Market" }];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600"><Bot className="w-5 h-5 text-white" /></div>
            <div><CardTitle className="text-base">{t.aiChatTitle}</CardTitle><CardDescription className="text-xs mt-0.5">{t.aiChatDesc}</CardDescription></div>
          </div>
          <Button variant="ghost" size="sm" onClick={clearChat} className="text-muted-foreground hover:text-red-500 gap-1.5"><Trash2 className="w-3.5 h-3.5" />{t.aiChatClear}</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div ref={scrollRef} className={`rounded-xl border bg-muted/30 p-4 h-[450px] overflow-y-auto space-y-4 ${isRtl ? "font-[\'Noto Sans Arabic\',sans-serif]" : ""}`} style={isRtl ? { direction: "rtl" } : {}}>
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 px-4">
              <div className="p-4 rounded-2xl bg-violet-100 dark:bg-violet-900/30"><Sparkles className="w-8 h-8 text-violet-600 dark:text-violet-400" /></div>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{t.aiChatWelcome}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {quickTopics.map(s => (<Badge key={s.l} variant="secondary" className="cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors text-xs" onClick={() => { setInput(s.l); textareaRef.current?.focus(); }}>{s.icon} {s.l}</Badge>))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" && isRtl ? "flex-row-reverse" : ""}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm ${msg.role === "user" ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" : "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400"}`}>
                {msg.role === "user" ? <Globe className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`flex-1 rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user" ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50" : "bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 shadow-sm"}`} style={isRtl ? { direction: "rtl", textAlign: "right" } : {}}>
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
          {loading && (<div className="flex gap-3"><div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600"><Bot className="w-4 h-4" /></div><div className="flex-1 rounded-xl px-4 py-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 shadow-sm"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="w-3.5 h-3.5 animate-spin" />{t.aiChatThinking}</div></div></div>)}
        </div>
        <div className="flex gap-2 mt-3">
          <Textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder={t.aiChatPlaceholder} className="min-h-[44px] max-h-[120px] resize-none text-sm" rows={1} />
          <Button onClick={sendMessage} disabled={!input.trim() || loading} className="px-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"><Send className="w-4 h-4" /></Button>
        </div>
      </CardContent>
    </Card>
  );
}

const ARABIC_TOPICS = ["تقرير شامل عن الوضع الاقتصادي", "تحليل قطاع المحروقات", "تقرير سوق العمل", "تحليل التجارة الخارجية", "تقرير التضخم والأسعار", "تحليل التنمية الإقليمية", "تقرير أهداف التنمية المستدامة", "تحليل القطاع الصناعي", "تقرير المالية العامة", "تحليل القطاع الزراعي"];

const CLIENT_TIMEOUT_MS = 90_000; // 90s client-side timeout (server has 120s)
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 3_000;

function ReportPanel({ t, isRtl }: AITabProps) {
  const [topic, setTopic] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [lang, setLang] = useState("ar");
  const [report, setReport] = useState("");
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const abortRef = useRef<AbortController | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const selectedTopic = customTopic || topic;

  // Elapsed time counter
  useEffect(() => {
    if (generating) {
      setElapsedSec(0);
      timerRef.current = setInterval(() => setElapsedSec(s => s + 1), 1000);
    } else {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }
    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [generating]);

  const generateReport = async (attempt = 0) => {
    if (!selectedTopic || generating) return;
    setGenerating(true); setReport(""); setError(""); setRetryCount(attempt);

    // Abort any previous request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    // Client-side timeout
    const timeoutId = setTimeout(() => controller.abort(), CLIENT_TIMEOUT_MS);

    try {
      const res = await fetch("/api/ai/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: selectedTopic, lang }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      const data = await res.json();

      if (data.success) {
        setReport(data.report);
      } else if (data.error === "RATE_LIMIT") {
        setError(isRtl ? "⏳ تم تجاوز حد الطلبات حالياً. يرجى المحاولة لاحقاً." : "⏳ Limite de requêtes atteinte. Veuillez réessayer plus tard.");
      } else if (data.error === "TIMEOUT" || data.error === "EMPTY_REPORT") {
        // Auto-retry on timeout or empty report
        if (attempt < MAX_RETRIES) {
          setGenerating(false);
          await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
          generateReport(attempt + 1);
          return;
        }
        setError(isRtl
          ? `⏱️ انتهت مهلة التوليد بعد عدة محاولات. يرجى المحاولة لاحقاً.`
          : `⏱️ Délai d'attente dépassé après plusieurs tentatives. Veuillez réessayer plus tard.`);
      } else {
        // Auto-retry on server errors
        if (attempt < MAX_RETRIES && (!res.ok || !data.success)) {
          setGenerating(false);
          await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
          generateReport(attempt + 1);
          return;
        }
        setError(data.error || t.aiErrorTitle);
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof DOMException && err.name === "AbortError") {
        // Client-side timeout — auto-retry
        if (attempt < MAX_RETRIES) {
          setGenerating(false);
          await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
          generateReport(attempt + 1);
          return;
        }
        setError(isRtl
          ? `⏱️ انتهت مهلة الاتصال (${Math.round(CLIENT_TIMEOUT_MS / 1000)}ث). الخادم قد يكون مشغولاً، يرجى المحاولة لاحقاً.`
          : `⏱️ Délai de connexion dépassé (${Math.round(CLIENT_TIMEOUT_MS / 1000)}s). Le serveur est peut-être occupé, veuillez réessayer plus tard.`);
      } else {
        // Network error — auto-retry
        if (attempt < MAX_RETRIES) {
          setGenerating(false);
          await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
          generateReport(attempt + 1);
          return;
        }
        setError(isRtl
          ? `❌ خطأ في الاتصال بالخادم بعد عدة محاولات. حاول تحديث الصفحة.`
          : `❌ Erreur de connexion au serveur après plusieurs tentatives. Essayez de rafraîchir la page.`);
      }
    } finally {
      setGenerating(false);
      abortRef.current = null;
    }
  };
  const copyReport = async () => { if (!report) return; await navigator.clipboard.writeText(report); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600"><FileText className="w-5 h-5 text-white" /></div>
            <div><CardTitle className="text-base">{t.aiReportTitle}</CardTitle><CardDescription className="text-xs mt-0.5">{t.aiReportDesc}</CardDescription></div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div><p className="text-xs font-medium text-muted-foreground mb-2">{t.aiReportSuggestedTopics}</p><div className="flex flex-wrap gap-2">{ARABIC_TOPICS.map(tp => (<Badge key={tp} variant={topic === tp ? "default" : "secondary"} className={`cursor-pointer text-xs transition-colors ${topic === tp ? "bg-amber-600 hover:bg-amber-700" : "hover:bg-amber-100 dark:hover:bg-amber-900/40"}`} onClick={() => { setTopic(tp); setCustomTopic(""); }}>{tp}</Badge>))}</div></div>
          <Separator />
          <div><p className="text-xs font-medium text-muted-foreground mb-2">{t.aiReportCustomTopic}</p><Textarea value={customTopic} onChange={e => { setCustomTopic(e.target.value); setTopic(""); }} placeholder={t.aiReportCustomPlaceholder} className="min-h-[60px] text-sm" /></div>
          <div className="flex items-center gap-3"><Languages className="w-4 h-4 text-muted-foreground" /><Select value={lang} onValueChange={setLang}><SelectTrigger className="w-48"><SelectValue placeholder={t.aiReportLangLabel} /></SelectTrigger><SelectContent><SelectItem value="ar">{t.aiReportLangAr}</SelectItem><SelectItem value="fr">{t.aiReportLangFr}</SelectItem><SelectItem value="en">{t.aiReportLangEn}</SelectItem></SelectContent></Select></div>
          <Button onClick={generateReport} disabled={!selectedTopic || generating} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
            {generating ? (<><Loader2 className="w-4 h-4 animate-spin mr-2" />{t.aiReportGenerating}</>) : (<><Sparkles className="w-4 h-4 mr-2" />{t.aiReportGenerate}</>)}
          </Button>
        </CardContent>
      </Card>
      {generating && (<Card className="border-0 shadow-sm"><CardContent className="p-6 space-y-3"><Skeleton className="h-5 w-3/4" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-5/6" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-4/6" /><div className="flex items-center justify-between pt-2"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="w-4 h-4 animate-spin" />{retryCount > 0 ? `${t.aiReportGenerating} (${isRtl ? 'محاولة' : 'Tentative'} ${retryCount + 1}/${MAX_RETRIES + 1})` : t.aiReportGenerating}</div><span className="text-xs text-muted-foreground tabular-nums">{elapsedSec}s</span></div></CardContent></Card>)}
      {error && (<Card className="border border-red-200 dark:border-red-800/50"><CardContent className="p-4 flex items-center justify-between"><p className="text-sm text-red-600 dark:text-red-400">{error}</p><Button variant="outline" size="sm" onClick={generateReport} className="gap-1.5">{t.aiErrorRetry}</Button></CardContent></Card>)}
      {report && !generating && (<Card className="border-0 shadow-sm"><CardHeader className="pb-2"><div className="flex items-center justify-between"><CardTitle className="text-sm font-medium">{selectedTopic}</CardTitle><Button variant="ghost" size="sm" onClick={copyReport} className="gap-1.5 text-xs">{copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}{copied ? t.aiReportCopied : t.aiReportCopy}</Button></div></CardHeader><CardContent><div className={`prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap ${isRtl ? "font-[\'Noto Sans Arabic\',sans-serif]" : ""}`} style={lang === "ar" ? { direction: "rtl", textAlign: "right" } : {}}>{report}</div><Separator className="my-4" /><p className="text-xs text-muted-foreground italic">{t.aiReportDisclaimer}</p></CardContent></Card>)}
    </div>
  );
}
