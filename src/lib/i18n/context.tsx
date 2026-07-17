"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback, useEffect } from "react";
import { type Locale, type Dictionary, getDictionary } from "./dictionaries";

interface I18nContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
  isRtl: boolean;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "fr",
  t: getDictionary("fr"),
  setLocale: () => {},
  dir: "ltr",
  isRtl: false,
});

let listeners: (() => void)[] = [];

function emitChange() {
  for (const fn of listeners) fn();
}

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
}

function getSnapshot(): Locale {
  if (typeof window === "undefined") return "fr";
  try {
    const saved = localStorage.getItem("ons-locale") as Locale | null;
    return saved && ["en", "fr", "ar"].includes(saved) ? saved : "fr";
  } catch {
    return "fr";
  }
}

function getServerSnapshot(): Locale {
  return "fr";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const dir = isRtl ? "rtl" : "ltr";

  const setLocale = useCallback((l: Locale) => {
    try { localStorage.setItem("ons-locale", l); } catch {}
    emitChange();
  }, []);

  // Update <html> dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, dir, isRtl }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}