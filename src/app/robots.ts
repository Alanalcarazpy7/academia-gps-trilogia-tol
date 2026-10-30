import type { MetadataRoute } from "next";
import { isPreviewDeployment, seoConfig } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/campus", "/gracias"] },
    sitemap: `${seoConfig.metadataBaseUrl}/sitemap.xml`,
  };
}
