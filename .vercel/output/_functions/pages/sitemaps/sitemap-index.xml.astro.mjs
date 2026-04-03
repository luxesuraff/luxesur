export { renderers } from '../../renderers.mjs';

const SITE_URL = "https://www.luxesur.com";
const GET = async () => {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const sitemaps = [
    "/sitemaps/sitemap-core.xml",
    "/sitemaps/sitemap-metros.xml",
    "/sitemaps/sitemap-intents.xml",
    "/sitemaps/sitemap-suburbs-fl.xml",
    // 🔥 HIGH PRIORITY
    "/sitemaps/sitemap-suburbs-rest.xml"
    // secondary
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${sitemaps.map((s) => `
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
