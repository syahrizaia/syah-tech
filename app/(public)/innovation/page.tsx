import type { Metadata } from "next";
import InnovationClient from "./InnovationClient";

export const metadata: Metadata = {
  title: "Inovasi & Riset R&D",
  description: "Eksplorasi Fase R&D Hub Syah Tech. Kami mengembangkan komputasi kuantum paralel, jaringan otonom self-healing, dan optimalisasi silikon hardware.",
};

export default function InnovationPage() {
  return <InnovationClient />;
}