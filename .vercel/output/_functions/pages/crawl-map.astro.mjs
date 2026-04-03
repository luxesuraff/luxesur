import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const $$CrawlMap = createComponent(async ($$result, $$props, $$slots) => {
  const supabase = createClient(
    "https://yvyryoitegqscavrplib.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eXJ5b2l0ZWdxc2NhdnJwbGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNDQxMTQsImV4cCI6MjA4MTcyMDExNH0.pPr4X-TNcHceL-vqgufMpDgiWTfQ1871O3jys3r7Tq8"
  );
  const SITE_URL = "https://www.luxesur.com";
  const { data: metros } = await supabase.from("metros").select("name,slug,state").eq("is_active", true).order("state", { ascending: true }).order("name", { ascending: true });
  const { data: verticals } = await supabase.from("verticals").select("slug,name").order("name", { ascending: true });
  const { data: intents } = await supabase.from("intents").select("slug,name,vertical_slug").eq("is_active", true).order("position", { ascending: true });
  const languages = ["en", "es"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Service Coverage Map | Luxesur", "canonical": `${SITE_URL}/crawl-map/` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Service Coverage Map</h1> <p>
This page lists service coverage areas and available services across supported metropolitan regions.
Use the links below to explore service pages by city and service type.
</p> ${verticals?.map((vertical) => renderTemplate`<section> <h2>${vertical.name}</h2> ${metros?.map((metro) => renderTemplate`<div> <h3>${metro.name}, ${metro.state}</h3> <ul> ${intents?.filter((i) => i.vertical_slug === vertical.slug).map((intent) => renderTemplate`<li> ${languages.map((lang) => renderTemplate`<a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/${intent.slug}/`, "href")}> ${intent.name} in ${metro.name} (${lang})
</a>`)} </li>`)} </ul> </div>`)} </section>`)}` })}`;
}, "C:/projects/luxesur/src/pages/crawl-map.astro", void 0);
const $$file = "C:/projects/luxesur/src/pages/crawl-map.astro";
const $$url = "/crawl-map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CrawlMap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
