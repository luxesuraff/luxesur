import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const SITE_URL = "https://www.luxesur.com";
const LANGUAGES = ["en", "es"];
function urlTag(loc, priority = "0.6", changefreq = "weekly") {
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}
const GET = async () => {
  const urls = [];
  const { data: verticals } = await supabase.from("verticals").select("slug");
  const { data: intents } = await supabase.from("intents").select("slug,vertical_slug").eq("is_active", true);
  const { data: suburbs } = await supabase.from("suburbs").select("slug,metro_slug,city").not("metro_slug", "is", null);
  if (!verticals || !intents || !suburbs) {
    return new Response("Error loading sitemap data", { status: 500 });
  }
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
