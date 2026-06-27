"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";

interface DeploymentBannerProps {
  whatsappNumber: string;
}

export default function DeploymentBanner({ whatsappNumber }: DeploymentBannerProps) {
  const customServiceUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Tim%20Dev%20Core%20Syah%20Tech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20arsitektur%20perangkat%20lunak%20dan%20sistem%20kustom%20untuk%20perusahaan%20kami.`;

  return (
    <section className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-cyber-purple/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="space-y-3 max-w-xl">
        <h3 className="text-xl md:text-2xl font-display font-bold flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyber-purple" /> Butuh Solusi Arsitektur Kustom?
        </h3>
        <p className="text-xs md:text-sm text-slate-text leading-relaxed">
          Jika modul ekosistem standar atau pameran rekayasa situs web kami di atas memerlukan modifikasi khusus, pembatasan jaringan terisolasi penuh (air-gapped integration), atau skema deployment hibrida khusus untuk korporasi Anda, core engineer kami siap merakitnya khusus untuk Anda.
        </p>
      </div>
      <Link 
        href={customServiceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-obsidian-950 font-bold px-5 py-3 rounded-xl text-xs md:text-sm hover:opacity-90 transition-all font-sans shrink-0 h-fit shadow-md"
      >
        Hubungi Tim Dev Core
      </Link>
    </section>
  );
}