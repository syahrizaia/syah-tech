import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── TAMBAHKAN PALET WARNA KUSTOM SYAH GROUP DI SINI ───
      colors: {
        gold: {
          400: "#F1D280", // Emas muda untuk gradasi
          500: "#D4AF37", // Emas premium utama (Metallic Gold)
          600: "#AA7C11", // Emas gelap untuk bayangan/hover
        },
        navy: {
          900: "#0B1329", // Deep Navy untuk teks kontras tinggi
          950: "#030712", // Latar belakang hitam pekat futuristik
        },
        silver: "#94A3B8", // Perak/abu-abu elegan untuk teks sekunder
      },
      fontFamily: {
        // Jika Anda ingin mendefinisikan font kustom nantinya
        display: ["var(--font-geist-sans)", "sans-serif"], 
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite', // Rotasi super halus berdurasi 12 detik
      }
    },
  },
  plugins: [],
};

export default config;