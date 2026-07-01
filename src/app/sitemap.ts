import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { allSchools } from "@/data/schools";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/education", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/what-we-do", priority: 0.7, changeFrequency: "monthly" },
    { path: "/impact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/campaigns", priority: 0.7, changeFrequency: "monthly" },
    { path: "/clean-water", priority: 0.6, changeFrequency: "monthly" },
    { path: "/our-presence", priority: 0.6, changeFrequency: "monthly" },
    { path: "/sponsors", priority: 0.5, changeFrequency: "monthly" },
    { path: "/donate", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const schoolEntries: MetadataRoute.Sitemap = allSchools.map((school) => ({
    url: absoluteUrl(`/education/${school.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...schoolEntries];
}
