"use client";

import { Globe, Zap, Terminal } from "lucide-react";
import { BenefitItem } from "./types";

export default function BenefitsSection() {
  const benefits: BenefitItem[] = [
    {
      title: "Kedaulatan Remote / Hybrid",
      description: "Kami percaya pada produktivitas berbasis hasil, bukan absensi fisik baku. Pilih ekosistem kerja terbaik Anda secara fleksibel.",
      icon: Globe,
      iconContainerClass: "bg-cyber-cyan/10 border-cyber-cyan/20",
      iconClass: "text-cyber-cyan"
    },
    {
      title: "Infrastruktur Kelas Atas",
      description: "Akses workstation mutakhir, anggaran riset internal mandiri, dan komputasi awan premium tanpa batas untuk eksperimen Anda.",
      icon: Zap,
      iconContainerClass: "bg-cyber-blue/10 border-cyber-blue/20",
      iconClass: "text-cyber-blue"
    },
    {
      title: "Kurikulum R&D Intensif",
      description: "Alokasikan waktu khusus setiap minggu untuk menguji teknologi spekulatif di R&D Lab internal Syah Tech bersama tim ahli kami.",
      icon: Terminal,
      iconContainerClass: "bg-cyber-purple/10 border-cyber-purple/20",
      iconClass: "text-cyber-purple"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mb-28 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
              <div className={`p-2.5 border rounded-lg w-fit mb-4 ${benefit.iconContainerClass}`}>
                <Icon className={`w-5 h-5 ${benefit.iconClass}`} />
              </div>
              <h3 className="text-lg font-bold mb-1.5">{benefit.title}</h3>
              <p className="text-xs md:text-sm text-slate-text leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}