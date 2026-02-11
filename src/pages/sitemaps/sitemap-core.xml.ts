import type { APIRoute } from "astro";

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
  const urls = staticPages.map(
    (path) => `https://www.luxesur.com${path}/`
  );

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
    headers: { "Content-Type": "application/xml" },
  });
};
