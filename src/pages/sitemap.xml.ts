import type { APIRoute } from "astro";
import { cities } from "../data/cities";

const staticPages = [
  "/",
  "/about",
  "/contact",
  "/disclosures",
  "/privacy",
  "/terms",
  "/emergency-plumbing",
];

const intents = [
  "", // base emergency plumbing city page
  "/burst-pipe",
  "/sewer-backup",
  "/no-hot-water",
];

export const GET: APIRoute = async () => {
  const urls: string[] = [];

  // Static pages
  for (const path of staticPages) {
    urls.push(`https://www.luxesur.com${path}`);
  }

  // City intent pages
  for (const city of cities) {
    for (const intent of intents) {
      const base = "/emergency-plumbing";
      const cityPath = `${base}${intent}/${city.slug}`;
      urls.push(`https://www.luxesur.com${cityPath}`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
