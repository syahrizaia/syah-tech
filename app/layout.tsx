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
  metadataBase: new URL("https://syahtech.vercel.app"),
  title: {
    default: "Syah Tech | Software Development Company",
    template: "%s | Syah Tech",
  },
  description: "Syah Tech adalah perusahaan pengembang perangkat lunak (software development) yang berfokus pada pembuatan aplikasi web dan mobile inovatif untuk transformasi digital bisnis Anda.",
  keywords: [
    "software development company",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi mobile",
    "tech startup Indonesia",
    "web development",
    "UI UX design",
    "Syah Tech"
  ],
  authors: [{ name: "Syah Tech", url: "https://syahtech.vercel.app" }],
  creator: "Syah Tech",
  publisher: "Syah Tech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syah Tech | Software Development Company",
    description: "Solusi teknologi inovatif untuk pengembangan aplikasi web dan mobile premium guna mengakselerasi pertumbuhan bisnis Anda.",
    url: "https://syahtech.vercel.app",
    siteName: "Syah Tech",
    images: [
      {
        url: "/icon.svg", // Siapkan gambar ukuran 1200x630px di folder public
        width: 1200,
        height: 630,
        alt: "Syah Tech - Premium Software Development",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syah Tech | Software Development Company",
    description: "Solusi teknologi inovatif untuk pengembangan aplikasi web dan mobile premium.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
