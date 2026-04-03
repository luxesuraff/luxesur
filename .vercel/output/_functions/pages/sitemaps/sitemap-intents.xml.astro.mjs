import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const SITE_URL = "https://www.luxesur.com";
const LANGUAGES = ["en", "es"];
function urlTag(loc, lastmod, priority = "0.7", changefreq = "weekly") {
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod || (/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}
const GET = async () => {
  const urls = [];
  const { data: metros } = await supabase.from("metros").select("slug,updated_at").eq("active", true);
  const { data: verticals } = await supabase.from("verticals").select("slug");
  const { data: intents } = await supabase.from("intents").select("slug,vertical_slug,is_active").eq("is_active", true);
  if (!metros || !verticals || !intents) {
    return new Response("Error loading sitemap data", { status: 500 });
  }
  for (const lang of LANGUAGES) {
    for (const vertical of verticals) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
