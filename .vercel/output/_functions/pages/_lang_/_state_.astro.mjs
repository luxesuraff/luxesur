import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, l as Fragment, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const STATES = [
  { code: "FL", slug: "florida", name: "Florida", name_es: "Florida" },
  { code: "TX", slug: "texas", name: "Texas", name_es: "Texas" },
  { code: "CA", slug: "california", name: "California", name_es: "California" },
  { code: "NY", slug: "new-york-state", name: "New York", name_es: "Nueva York" },
  { code: "GA", slug: "georgia", name: "Georgia", name_es: "Georgia" },
  { code: "NC", slug: "north-carolina", name: "North Carolina", name_es: "Carolina del Norte" },
  { code: "SC", slug: "south-carolina", name: "South Carolina", name_es: "Carolina del Sur" },
  { code: "AZ", slug: "arizona", name: "Arizona", name_es: "Arizona" },
  { code: "NV", slug: "nevada", name: "Nevada", name_es: "Nevada" },
  { code: "IL", slug: "illinois", name: "Illinois", name_es: "Illinois" }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.luxesur.com");
async function getStaticPaths() {
  const langs = ["en", "es"];
  const paths = [];
  for (const lang of langs) {
    for (const state of STATES) {
      paths.push({
        params: {
          lang,
          state: state.slug
        },
        props: {
          stateCode: state.code,
          stateName: state.name,
          stateNameEs: state.name_es
        }
      });
    }
  }
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const SITE_URL = "https://www.luxesur.com";
  const { lang, state } = Astro2.params;
  const { stateCode, stateName, stateNameEs } = Astro2.props;
  const isSpanish = lang === "es";
  const displayStateName = isSpanish ? stateNameEs : stateName;
  const { data: metros } = await supabase.from("metros").select("slug,city,state").eq("active", true).eq("state", stateCode).order("city");
  const { data: verticals } = await supabase.from("verticals").select("slug,name").order("name");
  const { data: intents } = await supabase.from("intents").select("slug,name,vertical_slug").eq("is_active", true).order("position");
  function intentsByVertical(verticalSlug) {
    return (intents || []).filter((i) => i.vertical_slug === verticalSlug);
  }
  const pageTitle = isSpanish ? `Cobertura de Servicios en ${displayStateName} | Luxesur` : `Service Coverage in ${displayStateName} | Luxesur`;
  const metaDescription = isSpanish ? `Explore ciudades, \xE1reas metropolitanas y servicios cubiertos por Luxesur en ${displayStateName}.` : `Explore cities, metro areas, and service coverage by Luxesur across ${displayStateName}.`;
  const canonicalUrl = `${SITE_URL}/${lang}/${state}/`;
  const alternateEn = `${SITE_URL}/en/${state}/`;
  const alternateEs = `${SITE_URL}/es/${state}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: canonicalUrl,
    about: {
      "@type": "Place",
      name: displayStateName
    },
    publisher: {
      "@type": "Organization",
      name: "Luxesur",
      url: SITE_URL
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": canonicalUrl, "hreflang": {
    en: alternateEn,
    es: alternateEs,
    xDefault: alternateEn
  }, "lang": lang }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", "<main> <section> <h1>", "</h1> <p> ", " </p> </section> <section> <h2>", "</h2> <ul> <li> <a", "> ", " </a> </li> <li> <a", "> ", ' </a> </li> <li> <a href="/crawl-map/"> ', ' </a> </li> <li> <a href="/geo/"> ', " </a> </li> </ul> </section> ", " </main> "])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), pageTitle, isSpanish ? `Explore cobertura por ciudad y tipo de servicio en ${displayStateName}.` : `Explore city-level and service-level coverage across ${displayStateName}.`, isSpanish ? "Enlaces principales" : "Primary Links", addAttribute(`/${lang}/cities/`, "href"), isSpanish ? "Ciudades" : "Cities", addAttribute(`/${lang}/services/`, "href"), isSpanish ? "Servicios" : "Services", isSpanish ? "Mapa de cobertura" : "Coverage Map", isSpanish ? "Mapa GEO" : "GEO Crawl Accelerator", verticals?.map((vertical) => {
    const verticalIntents = intentsByVertical(vertical.slug);
    return renderTemplate`<section> <h2> <a${addAttribute(`/${lang}/${vertical.slug}/`, "href")}> ${vertical.name} ${isSpanish ? `en ${displayStateName}` : `in ${displayStateName}`} </a> </h2> ${metros && metros.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h3>${isSpanish ? "Ciudades" : "Cities"}</h3> <ul> ${metros.slice(0, 100).map((metro) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/`, "href")}> ${vertical.name} ${isSpanish ? `en ${metro.city}, ${metro.state}` : `in ${metro.city}, ${metro.state}`} </a> </li>`)} </ul> ${verticalIntents.length > 0 && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <h3>${isSpanish ? "Servicios destacados" : "Featured Services"}</h3> <ul> ${metros.slice(0, 30).flatMap(
      (metro) => verticalIntents.slice(0, 4).map((intent) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/${intent.slug}/`, "href")}> ${intent.name} ${isSpanish ? `en ${metro.city}, ${metro.state}` : `in ${metro.city}, ${metro.state}`} </a> </li>`)
    )} </ul> ` })}`}` })}` : renderTemplate`<p> ${isSpanish ? "No hay ciudades activas para este estado todav\xEDa." : "No active cities are available for this state yet."} </p>`} </section>`;
  })) })}`;
}, "C:/projects/luxesur/src/pages/[lang]/[state]/index.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/[lang]/[state]/index.astro";
const $$url = "/[lang]/[state]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
