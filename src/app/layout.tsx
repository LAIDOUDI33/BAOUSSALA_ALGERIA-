import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers/query-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { TimeRangeProvider } from "@/lib/time-range-context";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baoussala-DZ — Tableau de Bord Économique de l'Algérie",
  description: "Baoussala-DZ : Plateforme algérienne d'aide à la décision basée sur les données de l'Office National des Statistiques (ONS). Tableau de bord économique complet.",
  keywords: ["Baoussala-DZ", "Algérie", "Algeria", "ONS", "statistiques", "economic dashboard", "tableau de bord", "GDP", "inflation", "trade"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Baoussala-DZ — Tableau de Bord Économique de l'Algérie",
    description: "Baoussala-DZ : Plateforme algérienne d'aide à la décision économique",
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
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <I18nProvider>
              <TimeRangeProvider>
                {children}
              </TimeRangeProvider>
            </I18nProvider>
          </ThemeProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}