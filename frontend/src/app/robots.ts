import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin", // Disallow indexing of the administrative dashboard
    },
    sitemap: "https://suasiongroup.in/sitemap.xml",
  };
}
