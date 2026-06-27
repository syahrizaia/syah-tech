"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ShowcaseWebsite } from "./types";

interface WebsiteCardProps {
  site: ShowcaseWebsite;
  variants: Variants;
}

export default function WebsiteCard({ site, variants }: WebsiteCardProps) {
  return (
    <motion.div 
      variants={variants}
      className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col justify-between shadow-2xl hover:border-cyber-purple/50 transition-all group relative overflow-hidden"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-cyber-purple uppercase text-[10px] tracking-wider font-semibold">
            {site.category}
          </span>
          <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] font-bold">
            {site.performance}
          </span>
        </div>

        <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyber-purple transition-colors">
          {site.title}
        </h4>

        <p className="text-xs text-slate-text leading-relaxed font-light text-justify">
          {site.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {site.tech.map((t, tIdx) => (
            <span key={tIdx} className="text-[10px] font-mono bg-black text-slate-text border border-white/10 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-white/10 flex justify-end">
        <Link
          href={site.link}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-text hover:text-cyber-purple transition-colors"
        >
          Inspect Node <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}