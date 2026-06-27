"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="mt-32 max-w-4xl mx-auto text-center relative z-10">
      <div className="p-8 md:p-12 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-md">
        <h3 className="text-xl md:text-3xl font-display font-bold mb-4">Butuh Konsultasi Arsitektur Spesifik?</h3>
        <p className="text-xs md:text-sm text-slate-text max-w-xl mx-auto mb-6">
          Tim teknis ahli Syah Tech siap membantu membedah tantangan sistem Anda melalui sesi audit arsitektur IT mendalam.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-obsidian-950 font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all text-xs md:text-sm shadow-lg shadow-cyber-cyan/10"
        >
          Hubungi Solusi Enterprise
        </Link>
      </div>
    </section>
  );
}