import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

const SITE_URL = "https://www.luxesur.com";

export const GET: APIRoute = async () => {

const { data: metros } = await supabase
.from("metros")
.select("state")
.eq("is_active",true);

const states = [...new Set((metros||[]).map(m=>m.state))];

const urls = states.map(s=>`

<url>
<loc>${SITE_URL}/states/${s.toLowerCase()}</loc>
<changefreq>weekly</changefreq>
<priority>0.7</priority>
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