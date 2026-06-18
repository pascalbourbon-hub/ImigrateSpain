import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Our Immigration Lawyers in Spain",
  description:
    "Get in touch with ImmigrationSpain. Ask our specialist immigration lawyers about NIE, work permits, residence, the Digital Nomad Visa or Spanish nationality — we respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
