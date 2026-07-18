"use client";

import { useI18n } from "@/lib/i18n/context";
import { type Locale, localeNames, localeFlags } from "@/lib/i18n/dictionaries";
import { Globe } from "lucide-react";

const locales: Locale[] = ["fr", "ar", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale, isRtl } = useI18n();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-3.5 h-3.5 text-emerald-200/60" />
      <div className="flex items-center bg-white/10 rounded-lg overflow-hidden border border-white/10">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
              locale === l
                ? "bg-white/20 text-white"
                : "text-white/60 hover:text-white/90 hover:bg-white/5"
            } ${isRtl && l !== "ar" ? "font-sans" : ""}`}
            style={{
              fontFamily: l === "ar" ? "'Noto Sans SC', sans-serif" : undefined,
              direction: l === "ar" ? "rtl" : "ltr",
            }}
          >
            <span className="mr-1">{localeFlags[l]}</span>
            {localeNames[l]}
          </button>
        ))}
      </div>
    </div>
  );
}