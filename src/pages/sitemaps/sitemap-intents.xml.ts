import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

const SITE_URL = "https://www.luxesur.com";
const LANGUAGES = ["en", "es"];

function urlTag(
  loc: string,
  lastmod?: string,
  priority = "0.7",
  changefreq = "weekly"
) {
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod || new Date().toISOString()}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}

export const GET: APIRoute = async () => {
  const urls: string[] = [];

  /* =========================
  METROS
  ========================= */

  const { data: metros } = await supabase
    .from("metros")
    .select("slug,updated_at")
    .eq("active", true);

  /* =========================
  VERTICALS
  ========================= */

  const { data: verticals } = await supabase
    .from("verticals")
    .select("slug");

  /* =========================
  INTENTS
  ========================= */

  const { data: intents } = await supabase
    .from("intents")
    .select("slug,vertical_slug,is_active")
    .eq("is_active", true);

  if (!metros || !verticals || !intents) {
    return new Response("Error loading sitemap data", { status: 500 });
  }

  /* =========================
  BUILD URLS
  ========================= */

  for (const lang of LANGUAGES) {
    for (const vertical of verticals) {

      // filter intents per vertical
      const verticalIntents = intents.filter(
        (i) => i.vertical_slug === vertical.slug
      );

      for (const metro of metros) {
        for (const intent of verticalIntents) {

          urls.push(
            urlTag(
              `${SITE_URL}/${lang}/${vertical.slug}/${metro.slug}/${intent.slug}/`,
              metro.updated_at,
              "0.7",
              "weekly"
            )
          );

        }
      }
    }
  }

  /* =========================
  OUTPUT XML
  ========================= */

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("\n")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};