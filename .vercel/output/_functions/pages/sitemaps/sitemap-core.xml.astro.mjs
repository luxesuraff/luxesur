export { renderers } from '../../renderers.mjs';

const SITE_URL = "https://www.luxesur.com";
function urlTag(loc, priority = "0.7", changefreq = "monthly") {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return `<url>
  <loc>${loc}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}
const GET = async () => {
  const urls = [];
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
