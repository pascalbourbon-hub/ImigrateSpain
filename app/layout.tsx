import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImmigrationSpain — Expert Immigration Lawyers in Spain",
  description:
    "Spain's most trusted immigration law firm. NIE Certificate, Work Permit, Residence Permit, Digital Nomad Visa, and Spanish Nationality. Transparent fixed prices.",
  keywords: "immigration spain, NIE certificate, work permit spain, digital nomad visa spain, residence permit spain, spanish nationality",
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
