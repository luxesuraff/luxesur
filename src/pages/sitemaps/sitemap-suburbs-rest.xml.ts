import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

const SITE_URL = "https://www.luxesur.com";
const LANGUAGES = ["en", "es"];

function urlTag(loc: string) {
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>`;
}

export const GET: APIRoute = async () => {

  const urls: string[] = [];

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
    .select("slug,vertical_slug")
    .eq("is_active", true);

  /* =========================
  NON-FL METROS
  ========================= */

  const { data: metros } = await supabase
    .from("metros")
    .select("slug,state")
    .neq("state", "FL");

  const metroSet = new Set((metros || []).map(m => m.slug));

  /* =========================
  SUBURBS
  ========================= */

  const { data: suburbs } = await supabase
    .from("suburbs")
    .select("slug,metro_slug")
    .not("metro_slug", "is", null);

  if (!verticals || !intents || !suburbs) {
    return new Response("Error loading REST sitemap", { status: 500 });
  }

  /* =========================
  BUILD URLS
  ========================= */

  for (const lang of LANGUAGES) {
    for (const vertical of verticals) {

      const verticalIntents = intents.filter(
        (i) => i.vertical_slug === vertical.slug
      );

      for (const sub of suburbs) {

        // 🔥 ONLY non-FL metros
        if (!metroSet.has(sub.metro_slug)) continue;

        for (const intent of verticalIntents) {

          urls.push(
            urlTag(
              `${SITE_URL}/${lang}/${vertical.slug}/${sub.metro_slug}/${intent.slug}/${sub.slug}/`
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