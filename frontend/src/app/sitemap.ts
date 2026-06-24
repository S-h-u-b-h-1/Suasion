import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suasiongroup.in";
  const routes = [
    "",
    "/about",
    "/services",
    "/companies",
    "/leadership",
    "/resources",
    "/contact",
    "/compliance",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/resources" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : 0.8,
  }));
}
