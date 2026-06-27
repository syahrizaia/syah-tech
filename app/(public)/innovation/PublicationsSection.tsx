"use client";

import { LineChart, ArrowUpRight } from "lucide-react";
import { WhitepaperItem } from "./types";

interface PublicationsSectionProps {
  papers: WhitepaperItem[];
}

export default function PublicationsSection({ papers }: PublicationsSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-cyber-cyan text-xs font-mono uppercase tracking-wider">
          <LineChart className="w-4 h-4" /> Academic & Tech Publications
        </div>
        <h3 className="text-xl md:text-3xl font-display font-bold">Jurnal & Dokumen Putih Riset (<span className="font-extrabold">Whitepapers</span>)</h3>
        <p className="text-xs md:text-sm text-slate-text leading-relaxed">
          Kami mendokumentasikan setiap penemuan krusial ke dalam jurnal teknis komparatif. Baca arsitektur matematika di balik sistem rekayasa perangkat lunak kami.
        </p>
      </div>
      <div className="space-y-3">
        {papers.map((paper, index) => (
          <a 
            key={index}
            href={paper.link} 
            className="p-4 rounded-xl border border-white/5 bg-black/20 flex items-center justify-between group hover:border-white/10 transition-colors"
          >
            <div>
              <h5 className="text-xs md:text-sm font-bold text-white transition-colors group-hover:text-cyber-cyan">
                {paper.title}
              </h5>
              <span className="text-[10px] font-mono text-slate-text/60">
                Diterbitkan: {paper.published} • PDF ({paper.fileSize})
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-text group-hover:text-cyber-cyan transition-colors shrink-0 ml-4" />
          </a>
        ))}
      </div>
    </section>
  );
}