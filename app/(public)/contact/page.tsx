import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Inisiasi Audit & Konsultasi Sistem",
  description: "Diskusikan kerentanan arsitektur digital, integrasi otomasi AI, atau skalabilitas infrastruktur cloud korporasi Anda langsung bersama core engineer Syah Tech.",
};

export default function ContactPage() {
  return <ContactClient />;
}