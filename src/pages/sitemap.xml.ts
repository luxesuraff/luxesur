import type { APIRoute } from "astro";
import { supabase } from "../lib/supabase";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

  const urls: string[] = [];

  /* =========================
     STATIC PAGES
  ========================= */
  const staticPages = [
    { path: "", priority: "1.0" },
    { path: "/about", priority: "0.6" },
    { path: "/contact", priority: "0.6" },
    { path: "/disclosures", priority: "0.4" },
    { path: "/privacy", priority: "0.3" },
    { path: "/terms", priority: "0.3" }
  ];

  for (const page of staticPages) {
    urls.push(`
      <url>
        <loc>${SITE_URL}${page.path}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `);
  }

  /* =========================
     FETCH VERTICALS
  ========================= */
  const { data: verticals } = await supabase
    .from("verticals")
    .select("slug");

  /* =========================
     FETCH METROS
  ========================= */
  const { data: metros } = await supabase
    .from("metros")
    .select("slug")
    .eq("is_active", true);

  /* =========================
     FETCH PAGE BUILD LOG
     (For lastmod accuracy)
  ========================= */
  const { data: buildLog } = await supabase
    .from("page_build_log")
    .select("metro_slug, vertical_slug, language_code, updated_at");

  const buildMap = new Map(
    (buildLog || []).map(entry => [
      `${entry.language_code}-${entry.vertical_slug}-${entry.metro_slug}`,
      entry.updated_at
    ])
  );

  const languages = ["en", "es"];

  /* =========================
     BUILD DYNAMIC URLS
  ========================= */
  for (const lang of languages) {
    for (const v of verticals || []) {

      /* Vertical root page */
      urls.push(`
        <url>
          <loc>${SITE_URL}/${lang}/${v.slug}/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `);

      /* Metro pages */
      for (const m of metros || []) {

        const key = `${lang}-${v.slug}-${m.slug}`;
        const lastmod = buildMap.get(key) || new Date().toISOString();

        urls.push(`
          <url>
            <loc>${SITE_URL}/${lang}/${v.slug}/${m.slug}/</loc>
            <lastmod>${new Date(lastmod).toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `);
      }
    }
  }

  /* =========================
     GENERATE XML
  ========================= */
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};