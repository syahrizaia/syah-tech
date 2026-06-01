import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import DynamicBackground from "@/components/DynamicBackground";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syah Tech",
  description: "Syah Tech is a software development company specializing in web and mobile applications. We provide innovative solutions to help businesses thrive in the digital age.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="antialiased selection:bg-cyber-cyan/30">
        <SmoothScroll>
          
          {/* Latar Belakang Interaktif 3D Core */}
          <DynamicBackground />
          
          {/* Komponen Navigasi Utama */}
          <Navbar />
          
          {/* Konten Utama Page */}
          <div className="relative min-h-screen">
            {children}
          </div>

          <Footer />
          
        </SmoothScroll>
      </body>
    </html>
  );
}
