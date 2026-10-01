import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import InstallPrompt from "@/components/InstallPrompt";
import { siteUrl } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "ImmigrationSpain — Expert Immigration Lawyers in Spain";
const defaultDescription =
  "Spain's most trusted immigration law firm. NIE Certificate, Work Permit, Residence Permit, Digital Nomad Visa, and Spanish Nationality. Transparent fixed prices.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | ImmigrationSpain",
  },
  description: defaultDescription,
  keywords:
    "immigration spain, NIE certificate, work permit spain, digital nomad visa spain, residence permit spain, spanish nationality",
  openGraph: {
    type: "website",
    siteName: "ImmigrationSpain",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    locale: "en_US",
    alternateLocale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  appleWebApp: {
    capable: true,
    title: "ImmigSpain",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set by proxy.ts from the URL prefix (/es/*).
  const lang = (await headers()).get("x-lang") === "es" ? "es" : "en";

  return (
    <html lang={lang} className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 antialiased">
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
