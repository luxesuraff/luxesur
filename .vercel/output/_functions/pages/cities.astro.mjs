import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.luxesur.com");
async function getStaticPaths() {
  const languages = ["en", "es"];
  return languages.map((lang) => ({
    params: { lang }
  }));
}
const $$Cities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cities;
  const SITE_URL = "https://www.luxesur.com";
  const { lang } = Astro2.params;
  const language = ["en", "es"].includes(lang) ? lang : "en";
  const { data: metros } = await supabase.from("metros").select("city,state,slug").eq("active", true).order("state").order("city");
  const cities = metros || [];
  const states = {};
  for (const c of cities) {
    if (!states[c.state]) {
      states[c.state] = [];
    }
    states[c.state].push(c);
  }
  const pageTitle = language === "es" ? "Ciudades que Servimos | Luxesur" : "Cities We Serve | Luxesur";
  const metaDescription = language === "es" ? "Explore ciudades donde los servicios pueden estar disponibles a trav\xE9s de Luxesur." : "Explore cities where services may be available through Luxesur.";
  const canonicalUrl = `${SITE_URL}/${language}/cities/`;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cities.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${c.city}, ${c.state}`,
      "url": `${SITE_URL}/${language}/emergency-plumbing/${c.slug}/`
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": canonicalUrl, "lang": language }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", "<h1> ", " </h1> <p> ", " </p> ", "<section> <h2> ", " </h2> <ul> <li> <a", ">\nEmergency Plumbing\n</a> </li> <li> <a", "> ", " </a> </li> </ul> </section> "])), unescapeHTML(JSON.stringify(itemListSchema)), maybeRenderHead(), language === "es" ? "Ciudades que Servimos" : "Cities We Serve", language === "es" ? "A continuaci\xF3n se muestran ciudades donde pueden estar disponibles servicios." : "Below are cities where services may be available.", Object.entries(states).map(([state, metros2]) => renderTemplate`<section> <h2> <a${addAttribute(`/${language}/${state.toLowerCase()}/`, "href")}> ${language === "es" ? `Servicios en ${state}` : `Services in ${state}`} </a> </h2> <ul class="city-list"> ${metros2.map((c) => renderTemplate`<li> <a${addAttribute(`/${language}/emergency-plumbing/${c.slug}/`, "href")}> ${c.city}, ${c.state} </a> </li>`)} </ul> </section>`), language === "es" ? "Servicios Principales" : "Primary Services", addAttribute(`/${language}/emergency-plumbing/`, "href"), addAttribute(`/${language}/services/`, "href"), language === "es" ? "Todos los servicios" : "All Services") })}`;
}, "C:/projects/luxesur/src/pages/cities.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/cities.astro";
const $$url = "/cities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cities,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
