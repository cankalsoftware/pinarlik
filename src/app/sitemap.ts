import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pinarlik.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/urunler",
    "/hakkimizda",
    "/zaman-cizelgesi",
    "/galeri",
    "/iletisim",
    "/indexnow",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
