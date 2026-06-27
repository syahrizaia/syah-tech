import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://syahtech.vercel.app";

  const routes = [
    "",
    "/landing-page",
    "/products",
    "/solutions",
    "/innovation",
    "/careers",
    "/contact",
    "/legal",
    "/privacy",
    "/terms",
  ];

  const sitemapRecords: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return sitemapRecords;
}