"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { usePathname } from "next/navigation";
import SyahTechLogo from "./SyahTechLogo";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/solutions", label: "Solusi" },
  { href: "/innovation", label: "Inovasi" },
  { href: "/careers", label: "Karier" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek mendeteksi scroll untuk mengaktifkan liquid glass ultra-slim
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu mobile otomatis jika ukuran layar diubah ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-500 ${
        isScrolled ? "py-2 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <nav
        // ─── EFEK LIQUID GLASS FUTURISTIK ───
        className={`relative flex items-center justify-between gap-4 w-full max-w-6xl px-4 md:px-6 py-2.5 md:py-3 rounded-2xl md:rounded-full transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#0a0d16]/80 backdrop-blur-2xl border border-white/10 shadow-[0_12px_50px_rgba(0,0,0,0.32)]"
            : "bg-[#0a0d16]/55 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
        }`}
      >
        {/* Glow Dekoratif di Belakang Nav Pill (Hanya Muncul Saat di-Scroll) */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/5 via-cyber-blue/5 to-cyber-purple/5 opacity-0 transition-opacity duration-500 pointer-events-none -z-10 ${
          isScrolled ? "opacity-100" : ""
        }`} />

        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-display font-extrabold text-white tracking-wide z-50 group flex items-center gap-2 pr-6"
          onClick={closeMenu}
        >
          <SyahTechLogo iconSize={36} showText={false} />
          SYAH{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-300">
            TECH
          </span>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium text-slate-text">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={active ? "page" : undefined} className={`relative block rounded-full px-3.5 py-2 transition-colors hover:text-white ${active ? "text-white bg-white/[0.07]" : ""}`}>
                  {item.label}
                  {active && <motion.span layoutId="active-route" className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-cyber-cyan to-cyber-blue" />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Tombol Call-to-Action / Konsultasi (Desktop) */}
        <Link 
          href="/contact"
          className="hidden md:block px-4 py-2 text-xs font-bold text-obsidian-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 hover:scale-105"
        >
          Mulai Konsultasi
        </Link>
        
        {/* Tombol Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white hover:text-cyber-cyan transition-colors z-50 flex items-center p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 animate-none" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Menu Dropdown Mobile Floating Control Center */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[62px] md:hidden w-fit max-w-md bg-obsidian-900/90 backdrop-blur-2xl border border-cyber-cyan/20 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-4 z-40 overflow-hidden"
          >
            {/* Dekorasi Ornamen Cyber di Dalam Dropdown */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyber-blue/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-2 px-1 text-[10px] font-mono tracking-widest text-cyber-cyan/60 uppercase">
              <Radio className="w-3 h-3 animate-pulse" /> Navigation Core
            </div>

            <ul className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                return <li key={item.href}><Link href={item.href} aria-current={active ? "page" : undefined} className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-white/5 ${active ? "text-cyber-cyan bg-white/[0.04]" : "text-white"}`} onClick={closeMenu}>{item.label}</Link></li>;
              })}
            </ul>
            
            <hr className="border-white/10" />
            
            <Link 
              href="/contact"
              onClick={closeMenu}
              className="w-full px-10 py-2.5 text-center text-sm font-bold text-obsidian-950 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full shadow-[0_0_15px_rgba(0,242,254,0.2)]"
            >
              Mulai Konsultasi
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
