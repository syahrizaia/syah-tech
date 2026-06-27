"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProductItem } from "./types";

interface ProductCardProps {
  product: ProductItem;
  variants: Variants;
  whatsappNumber: string;
}

export default function ProductCard({ product, variants, whatsappNumber }: ProductCardProps) {
  const ProductIcon = product.icon;
  
  // Format pesan WhatsApp terstruktur otomatis
  const waMessage = `Halo Tim Core Dev Syah Tech,%0A%0ASaya tertarik untuk meminta akses uji coba dan mendiskusikan implementasi untuk produk berikut:%0A%0A- *Produk:* ${product.name}%0A- *Versi:* ${product.version}%0A- *Modul:* ${product.tagline}%0A%0AMohon informasi lebih detail mengenai prasyarat sistem, metode deployment, serta skema integrasi skala enterprise.%0A%0ABerikut data profil singkat instansi kami:%0A- *Nama:* %0A- *Nama Perusahaan/Instansi:* %0A- *Kebutuhan Khusus:* %0A%0ATerima kasih.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

  return (
    <motion.div 
      variants={variants}
      className={`p-6 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl transition-all group ${product.colorClass}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-white group-hover:bg-transparent transition-colors">
            <ProductIcon className="w-6 h-6 transition-colors" />
          </div>
          <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-md ${product.badgeColor}`}>
            {product.version}
          </span>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-xl font-bold font-display tracking-tight text-white">
            {product.name}
          </h3>
          <p className="text-xs font-mono text-slate-text italic">
            {product.tagline}
          </p>
        </div>
        
        <p className="text-xs md:text-sm text-slate-text font-light leading-relaxed text-justify pt-1">
          {product.description}
        </p>

        <div className="pt-3 border-t border-white/10 space-y-2">
          <span className="text-[10px] font-mono text-slate-text/70 tracking-wider block uppercase">ARSITEKTUR UTAMA:</span>
          <ul className="text-xs space-y-1.5 text-white/90 font-sans">
            {product.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-white/40 shrink-0" /> {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4 font-mono">
        <div className="text-left">
          <span className="text-[9px] text-slate-text/60 block uppercase tracking-tight">{product.metrics.label}</span>
          <span className="text-sm font-bold text-white flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" /> {product.metrics.value}
          </span>
        </div>

        <Link 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1 text-xs font-bold font-sans bg-white/10 hover:bg-white/20 border border-white/10 text-white px-3 py-2 rounded-xl transition-all shadow-md"
        >
          Minta Akses <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}