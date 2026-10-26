import type { MetadataRoute } from "next";
import { isPreviewDeployment, seoConfig } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreviewDeployment) return [];
  return [
    {
      url: `${seoConfig.metadataBaseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
