import type { APIRoute } from "astro";
import { cities } from "../data/cities";

const SITE_URL = "https://www.luxesur.com";

// Static pages
const staticPages = [
  "/",
  "/about",
  "/contact",
  "/disclosures",
  "/privacy",
  "/terms",
  "/emergency-plumbing",
];

export const GET: APIRoute = async () => {
  const urls: string[] = [];

  // Add static pages
  for (const path of staticPages) {
    urls.push(`${SITE_URL}${path}/`);
  }

  // Add city pages for each intent
  for (const city of cities) {
    const slug = city.slug;

    // Base emergency plumbing city page
    urls.push(`${SITE_URL}/emergency-plumbing/${slug}/`);

    // Burst pipe
    urls.push(
      `${SITE_URL}/emergency-plumbing/burst-pipe/${slug}/`
    );

    // Sewer backup
    urls.push(
      `${SITE_URL}/emergency-plumbing/sewer-backup/${slug}/`
    );

    // No hot water
    urls.push(
      `${SITE_URL}/emergency-plumbing/no-hot-water/${slug}/`
    );
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
