import type { APIRoute } from "astro";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const urls = letters.map(l=>`

<url>
<loc>${SITE_URL}/cities/${l}</loc>
<changefreq>weekly</changefreq>
<priority>0.6</priority>
</url>

`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("")}

</urlset>`;

return new Response(xml,{
headers:{ "Content-Type":"application/xml" }
});

};