import type { MetadataRoute } from "next";

import { extraMovies, movies } from "@/data/movies";

const siteUrl = "https://doomsday-six-blond.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/catalogue", "/extras", "/story"].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const titleRoutes = [...movies, ...extraMovies].map((movie) => ({
    url: `${siteUrl}/movies/${movie.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...titleRoutes];
}
