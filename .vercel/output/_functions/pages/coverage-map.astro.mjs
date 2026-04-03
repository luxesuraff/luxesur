import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

const $$CoverageMap = createComponent(async ($$result, $$props, $$slots) => {
  const SITE_URL = "https://www.luxesur.com";
  const { data: metros } = await supabase.from("metros").select("slug,name,state").eq("is_active", true).order("state");
  const { data: verticals } = await supabase.from("verticals").select("slug,name");
  const { data: intents } = await supabase.from("intents").select("slug,name,vertical_slug").eq("is_active", true);
  const intentMap = {};
  for (const intent of intents || []) {
    if (!intentMap[intent.vertical_slug]) {
      intentMap[intent.vertical_slug] = [];
    }
    intentMap[intent.vertical_slug].push(intent);
  }
  const stateMap = {};
  for (const m of metros || []) {
    if (!stateMap[m.state]) {
      stateMap[m.state] = [];
    }
    stateMap[m.state].push(m);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Service Coverage Map | Luxesur", "canonical": `${SITE_URL}/coverage-map/` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Service Coverage Map</h1> <p>
Luxesur provides informational resources for service availability across major metropolitan areas in the United States.  
Browse the coverage map below to find service pages by region.
</p> ${verticals.map((v) => renderTemplate`<section> <h2>${v.name}</h2> ${Object.entries(stateMap).map(([state, metros2]) => renderTemplate`<div> <h3>${state}</h3> <ul> ${metros2.map((m) => renderTemplate`<li> <a${addAttribute(`/en/${v.slug}/${m.slug}/`, "href")}> ${m.name} </a> </li>`)} </ul> </div>`)} </section>`)}` })}`;
}, "C:/projects/luxesur/src/pages/coverage-map.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/coverage-map.astro";
const $$url = "/coverage-map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CoverageMap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
