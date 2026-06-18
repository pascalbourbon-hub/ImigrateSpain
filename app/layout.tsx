import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://imigrate-spain.vercel.app";

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
  alternates: {
    canonical: "/",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
