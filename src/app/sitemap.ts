import type { MetadataRoute } from "next";
import { RESIDENCES } from "@/data/residences";

const SITE_URL = "https://thenestaliving.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/about`, priority: 0.7 },
    { url: `${SITE_URL}/contact`, priority: 0.7 },
    ...RESIDENCES.map((r) => ({
      url: `${SITE_URL}/residence/${r.slug}`,
      priority: 0.8,
    })),
  ];
}
