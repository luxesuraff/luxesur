import type { APIRoute } from "astro";

const SITE_URL = "https://www.luxesur.com";

function urlTag(loc: string, priority = "0.7", changefreq = "monthly") {
  const now = new Date().toISOString();

  return `<url>
  <loc>${loc}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}

export const GET: APIRoute = async () => {

  const urls: string[] = [];

  const pages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/coverage-map",
    "/states",
    "/cities",
    "/services"
  ];

  for (const p of pages) {
    urls.push(
      urlTag(
        `${SITE_URL}${p}`,
        p === "" ? "1.0" : "0.8"
      )
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("\n")}

</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
