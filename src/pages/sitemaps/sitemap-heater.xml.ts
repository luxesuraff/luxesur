import type { APIRoute } from "astro";
import { cities } from "../../data/cities";

export const GET: APIRoute = async () => {
  const urls = cities.map(
    (city) =>
      `https://www.luxesur.com/emergency-plumbing/no-hot-water/${city.slug}/`
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
