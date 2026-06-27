import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/(private)/"], // Sesuaikan jika ada rute rahasia
    },
    sitemap: "https://syahtech.vercel.app/sitemap.xml",
  };
}