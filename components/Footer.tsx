"use client";

import Link from "next/link";
import { 
  Terminal, 
  ArrowUpRight, 
  Radio
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SyahTechLogo from "./SyahTechLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-obsidian-900/30 backdrop-blur-md pt-16 pb-8 px-4 overflow-hidden">
      
      {/* ─── DESAIN ORNAMEN LATAR BELAKANG FUTURISTIK ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* GRID UTAMA FOOTER (Diubah menjadi grid-cols-2 untuk mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8 mb-16">
          
          {/* Kolom 1: Profil Brand & Status (col-span-2 agar full-width di mobile) */}
          <div className="space-y-5 col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-display font-extrabold text-white tracking-wide group block flex items-center gap-2">
              <SyahTechLogo iconSize={36} showText={false} />
              SYAH{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">
                TECH
              </span>
            </Link>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              Arsitektur digital mutakhir untuk efisiensi, kedaulatan data, dan otomatisasi berskala enterprise.
            </p>
            
            {/* Live Infrastructure Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              All Systems Operational
            </div>
          </div>

          {/* Kolom 2: Solusi & Produk (Otomatis mengambil 1 kolom di mobile / berdampingan) */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-cyber-cyan mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-text">
              <li>
                <Link href="/solutions#ai" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Artificial Intelligence <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-cyber-cyan" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#cyber-security" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Cyber Security <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-cyber-cyan" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#devops" className="hover:text-white transition-colors flex items-center gap-1 group">
                  DevOps & Cloud Hybrid <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-cyber-cyan" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#custom-software" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Custom Enterprise SaaS <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-cyber-cyan" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Perusahaan / Ekosistem Syah (Otomatis mengambil 1 kolom di mobile / berdampingan) */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-cyber-cyan mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-text">
              <li><Link href="https://syahgroup.vercel.app" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Syah Group</Link></li>
              <li><Link href="/innovation#lab" className="hover:text-white transition-colors">R&D Lab</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Karier Digital</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Keamanan & Kepatuhan</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kantor Pusat (col-span-2 agar kembali full-width di mobile) */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-cyber-cyan mb-4">
              Headquarters
            </h4>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              District 8, Treasury Tower, Lt. 52, Sudirman Central Business District, Jakarta Selatan, Indonesia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="https://www.linkedin.com/in/syahriza-ikhsan-alsistani" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-text hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all">
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-text hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all">
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link href="https://www.github.com/syahrizaia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-text hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all">
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* ─── BARIS BAWAH: HAK CIPTA & PROTOKOL ─── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] md:text-xs font-mono text-slate-text/50">
          
          <div className="flex items-center gap-1.5 order-2 sm:order-1">
            <Terminal className="w-3.5 h-3.5 text-cyber-blue" />
            <span>&copy; {currentYear} SYAH TECH. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <span className="flex items-center gap-1"><Radio className="w-3 h-3 text-cyber-cyan" /> SECURE TR-X PROTOCOL v4</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
}