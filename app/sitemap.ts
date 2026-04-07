import type { MetadataRoute } from "next";
import { generatePages } from "@/lib/seo/page-generator";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const year = new Date().getFullYear();
  const pages = await generatePages("US", year);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://carameldigitalcontent.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://carameldigitalcontent.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carameldigitalcontent.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carameldigitalcontent.com/automation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carameldigitalcontent.com/templates",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carameldigitalcontent.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://carameldigitalcontent.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://carameldigitalcontent.com/brand-kit",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://carameldigitalcontent.com/netlify-site",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const dynamicPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `https://carameldigitalcontent.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}
