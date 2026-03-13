import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

const { data: metros } = await supabase
.from("metros")
.select("slug")
.eq("is_active",true);

const { data: intents } = await supabase
.from("intents")
.select("slug")
.eq("vertical_slug","emergency-plumbing");

const languages = ["en","es"];

let urls:string[] = [];

for(const lang of languages){

for(const m of metros || []){

for(const intent of intents || []){

urls.push(`

<url>
<loc>${SITE_URL}/${lang}/emergency-plumbing/${m.slug}/${intent.slug}</loc>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>

`);

}

}

}

const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("")}

</urlset>`;

return new Response(xml,{
headers:{ "Content-Type":"application/xml" }
});

};