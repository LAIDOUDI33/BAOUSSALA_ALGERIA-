import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers/query-provider";
import { I18nProvider } from "@/lib/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONS Data Explorer — Algerian Economic Statistics",
  description: "Comprehensive extraction and classification of Algerian economic statistics from the Office National des Statistiques (ONS) for post-analysis.",
  keywords: ["Algeria", "ONS", "statistics", "economic data", "Office National des Statistiques", "GDP", "inflation", "trade"],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "ONS Data Explorer — Algerian Economic Statistics",
    description: "Extract and analyze data from Algeria's National Statistics Office",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <I18nProvider>
            {children}
          </I18nProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}