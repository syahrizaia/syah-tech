import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solusi & Infrastruktur",
  description: "Eksplorasi arsitektur IT tingkat industri dari Syah Tech, mulai dari AI privat, sistem keamanan Zero-Trust, hingga manajemen cloud hybrid global.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}