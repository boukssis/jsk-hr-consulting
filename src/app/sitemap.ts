import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/industries", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: "2026-11-05",
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
