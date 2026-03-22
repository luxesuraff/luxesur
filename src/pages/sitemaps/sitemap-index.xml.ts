import type { APIRoute } from "astro";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

  const now = new Date().toISOString();

const sitemaps = [
  "/sitemaps/sitemap-core.xml",
  "/sitemaps/sitemap-metros.xml",
  "/sitemaps/sitemap-intents.xml",

  "/sitemaps/sitemap-suburbs-fl.xml",   // 🔥 HIGH PRIORITY
  "/sitemaps/sitemap-suburbs-rest.xml"  // secondary
];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${sitemaps.map(s => `
<sitemap>
  <loc>${SITE_URL}${s}</loc>
  <lastmod>${now}</lastmod>
</sitemap>
`).join("")}

</sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};