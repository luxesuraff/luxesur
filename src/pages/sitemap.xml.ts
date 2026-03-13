import type { APIRoute } from "astro";
import { supabase } from "../lib/supabase";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

const urls:string[] = [];
const now = new Date().toISOString();

/* =========================
LANGUAGES
========================= */

const languages = ["en","es"];

/* =========================
STATIC PAGES
========================= */

const staticPages = [

{ path:"", priority:"1.0" },

{ path:"about", priority:"0.6" },

{ path:"contact", priority:"0.6" },

{ path:"disclosures", priority:"0.4" },

{ path:"privacy", priority:"0.3" },

{ path:"terms", priority:"0.3" },

{ path:"services", priority:"0.8" },

{ path:"cities", priority:"0.8" },

{ path:"crawl-map", priority:"0.7" },

{ path:"states", priority:"0.8" }

];

for(const lang of languages){

for(const page of staticPages){

const path = page.path
  ? `${SITE_URL}/${lang}/${page.path}/`
  : `${SITE_URL}/${lang}/`;

urls.push(`

<url>
<loc>${path}</loc>
<lastmod>${now}</lastmod>
<changefreq>monthly</changefreq>
<priority>${page.priority}</priority>
</url>

`);

}

}

/* =========================
FETCH DATA
========================= */

const { data: verticals } = await supabase
.from("verticals")
.select("slug");

const { data: metros } = await supabase
.from("metros")
.select("slug")
.eq("active", true);

const { data: intents } = await supabase
.from("intents")
.select("slug,vertical_slug")
.eq("is_active", true);

const { data: suburbs } = await supabase
.from("suburbs")
.select("slug,metro_slug");

/* =========================
BUILD LOG
========================= */

const { data: buildLog } = await supabase
.from("page_build_log")
.select("metro_slug,vertical_slug,language_code,updated_at");

const buildMap = new Map(

(buildLog || []).map(entry => [

`${entry.language_code}-${entry.vertical_slug}-${entry.metro_slug}`,

entry.updated_at

])

);

/* =========================
VERTICAL + METRO PAGES
========================= */

for(const lang of languages){

for(const v of verticals || []){

/* vertical hub */

urls.push(`

<url>
<loc>${SITE_URL}/${lang}/${v.slug}/</loc>
<lastmod>${now}</lastmod>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>

`);

for(const m of metros || []){

const key = `${lang}-${v.slug}-${m.slug}`;
const lastmod = buildMap.get(key) || now;

/* metro hub */

urls.push(`

<url>
<loc>${SITE_URL}/${lang}/${v.slug}/${m.slug}/</loc>
<lastmod>${new Date(lastmod).toISOString()}</lastmod>
<changefreq>weekly</changefreq>
<priority>0.8</priority>
</url>

`);

/* =========================
SERVICE PAGES
========================= */

for (const intent of intents || []) {

if (intent.vertical_slug !== v.slug) continue;

const serviceUrl =
`${SITE_URL}/${lang}/${v.slug}/${m.slug}/${intent.slug}/`;

urls.push(`

<url>
<loc>${serviceUrl}</loc>
<lastmod>${new Date(lastmod).toISOString()}</lastmod>
<changefreq>weekly</changefreq>
<priority>0.75</priority>
</url>

`);

/* =========================
SUBURB PAGES
========================= */

const suburbList = (suburbs || []).filter(
s => s.metro_slug === m.slug
);

for (const sub of suburbList) {

const suburbUrl =
`${SITE_URL}/${lang}/${v.slug}/${m.slug}/${intent.slug}/${sub.slug}/`;

urls.push(`

<url>
<loc>${suburbUrl}</loc>
<lastmod>${new Date(lastmod).toISOString()}</lastmod>
<changefreq>weekly</changefreq>
<priority>0.6</priority>
</url>

`);

}

}

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

return new Response(xml,{
headers:{ "Content-Type":"application/xml" }
});

};