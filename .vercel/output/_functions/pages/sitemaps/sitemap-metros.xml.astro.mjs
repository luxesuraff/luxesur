import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const SITE_URL = "https://www.luxesur.com";
const GET = async () => {
  const { data: metros } = await supabase.from("metros").select("slug").eq("is_active", true);
  const languages = ["en", "es"];
  let urls = [];
  for (const lang of languages) {
    for (const m of metros || []) {
      urls.push(`

<url>
<loc>${SITE_URL}/${lang}/emergency-plumbing/${m.slug}</loc>
<changefreq>weekly</changefreq>
<priority>0.8</priority>
</url>

`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("")}

</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
