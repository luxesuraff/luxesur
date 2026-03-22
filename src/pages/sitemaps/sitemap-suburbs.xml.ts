import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

const SITE_URL = "https://www.luxesur.com";
const LANGUAGES = ["en", "es"];

function urlTag(
  loc: string,
  priority = "0.6",
  changefreq = "weekly"
) {
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
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
  SUBURBS
  ========================= */

  const { data: suburbs } = await supabase
    .from("suburbs")
    .select("slug,metro_slug,city")
    .not("metro_slug", "is", null);

  if (!verticals || !intents || !suburbs) {
    return new Response("Error loading sitemap data", { status: 500 });
  }

  /* =========================
  BUILD URLS
  ========================= */

  for (const lang of LANGUAGES) {
    for (const vertical of verticals) {

      const verticalIntents = intents.filter(
        (i) => i.vertical_slug === vertical.slug
      );

      for (const suburb of suburbs) {

        if (!suburb.slug || !suburb.metro_slug) continue;

        for (const intent of verticalIntents) {

          urls.push(
            urlTag(
              `${SITE_URL}/${lang}/${vertical.slug}/${suburb.metro_slug}/${intent.slug}/${suburb.slug}/`
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