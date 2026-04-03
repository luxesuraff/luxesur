import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_BqhcYmk4.mjs';
import { $ as $$Hero } from '../../../../chunks/Hero_BZroyzFh.mjs';
import { $ as $$CallCTA } from '../../../../chunks/CallCTA_CqrV1s2v.mjs';
import { s as supabase } from '../../../../chunks/supabase_BOt9cYpn.mjs';
import { s as supabaseAdmin } from '../../../../chunks/supabaseAdmin_BlrIHUgT.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.luxesur.com");
async function getStaticPaths() {
  const { data: metros } = await supabaseAdmin.from("metros").select("slug,city,state").eq("active", true);
  const { data: verticals } = await supabaseAdmin.from("verticals").select("slug");
  const { data: services } = await supabaseAdmin.from("intents").select("slug,vertical_slug").eq("is_active", true);
  const languages = ["en", "es"];
  const paths = [];
  for (const lang of languages) {
    for (const v of verticals || []) {
      for (const m of metros || []) {
        const serviceList = (services || []).filter(
          (s) => s.vertical_slug === v.slug
        );
        for (const s of serviceList) {
          paths.push({
            params: {
              lang,
              vertical: v.slug,
              metro: m.slug,
              service: s.slug
            },
            props: {
              city: m.city,
              state: m.state
            }
          });
        }
      }
    }
  }
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const SITE_URL = "https://www.luxesur.com";
  function injectLocation(text, city2, state2) {
    if (!text) return "";
    return text.replaceAll("{city}", city2).replaceAll("{state}", state2);
  }
  function formatHeading(text) {
    if (!text) return "";
    return text.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }
  const { lang, vertical, metro, service } = Astro2.params;
  const { city, state } = Astro2.props;
  const { data: verticalData } = await supabase.from("verticals").select("id,name,hero_image").eq("slug", vertical).maybeSingle();
  if (!verticalData) throw new Error("Vertical not found");
  const { data: serviceData } = await supabase.from("intents").select("name").eq("slug", service).maybeSingle();
  if (!serviceData) throw new Error("Service not found");
  const { data: contentBlocks } = await supabase.from("intent_content_blocks").select("*").eq("intent_slug", service).eq("language_code", lang).order("position");
  const blocks = contentBlocks || [];
  const seen = /* @__PURE__ */ new Set();
  const finalBlocks = [];
  for (const b of blocks) {
    const section = (b.section || "").toLowerCase().trim();
    const content = b.content || b.body || "";
    if (!section || !content) continue;
    if (seen.has(section)) continue;
    seen.add(section);
    finalBlocks.push({
      section,
      content
    });
  }
  const limitedBlocks = finalBlocks.slice(0, 12);
  const { data: suburbData } = await supabase.from("suburbs").select("name,slug").eq("metro_slug", metro).limit(20);
  const suburbs = suburbData || [];
  const { data: otherServices } = await supabase.from("intents").select("slug,name").eq("vertical_slug", vertical).neq("slug", service).eq("is_active", true);
  const relatedServices = (otherServices || []).slice(0, 6);
  let nearbyMetros = [];
  const { data: sameState } = await supabase.from("metros").select("slug,city,state").eq("state", state).neq("slug", metro).limit(10);
  nearbyMetros = sameState || [];
  const pageTitle = `${serviceData.name} in ${city}, ${state} | Luxesur`;
  const metaDescription = `${serviceData.name} services in ${city}, ${state}. Emergency plumbing coverage including burst pipes and sewer backups.`;
  const canonicalUrl = `${SITE_URL}/${lang}/${vertical}/${metro}/${service}/`;
  const heroImage = verticalData.hero_image || "/images/default.webp";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceData.name} in ${city}, ${state}`,
    areaServed: {
      "@type": "City",
      name: city
    },
    provider: {
      "@type": "Organization",
      name: "Luxesur",
      url: SITE_URL
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": canonicalUrl, "lang": lang }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", " ", "<h1>", " in ", ", ", "</h1> ", "", "", "", "<section> <h2> ", " </h2> <ul> ", " </ul> </section> <footer> <nav> <h3>", "</h3> <ul> <li><a", ">Cities</a></li> <li><a", ">Services</a></li> <li><a", ">", '</a></li> <li><a href="/crawl-map/">Coverage Map</a></li> </ul> </nav> </footer> '])), unescapeHTML(JSON.stringify(schema)), renderComponent($$result2, "Hero", $$Hero, { "src": heroImage, "alt": `${serviceData.name} in ${city}, ${state}` }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CallCTA", $$CallCTA, {})} ` }), maybeRenderHead(), serviceData.name, city, state, limitedBlocks.map((b) => renderTemplate`<section> <h2>${formatHeading(b.section)}</h2> <p>${injectLocation(b.content, city, state)}</p> </section>`), suburbs.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? `\xC1reas cercanas en ${city}` : `Nearby Service Areas in ${city}`} </h2> <ul> ${suburbs.map((s) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical}/${metro}/${service}/${s.slug}/`, "href")}> ${s.name} </a> </li>`)} </ul> </section>`, relatedServices.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? "Otros servicios" : "Other Services"} </h2> <ul> ${relatedServices.map((s) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical}/${metro}/${s.slug}/`, "href")}> ${s.name} in ${city} </a> </li>`)} </ul> </section>`, nearbyMetros.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? "Ciudades cercanas" : "Nearby Cities We Serve"} </h2> <ul> ${nearbyMetros.map((m) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical}/${m.slug}/${service}/`, "href")}> ${serviceData.name} in ${m.city}, ${m.state} </a> </li>`)} </ul> </section>`, lang === "es" ? "Cobertura de servicio" : "Service Coverage", nearbyMetros.slice(0, 8).map((m) => renderTemplate`<li> <a${addAttribute(`/${lang}/${vertical}/${m.slug}/`, "href")}> ${verticalData.name} in ${m.city} </a> </li>`), lang === "es" ? "Explorar" : "Explore", addAttribute(`/${lang}/cities/`, "href"), addAttribute(`/${lang}/services/`, "href"), addAttribute(`/${lang}/${vertical}/`, "href"), verticalData.name) })}`;
}, "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/[service]/index.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/[service]/index.astro";
const $$url = "/[lang]/[vertical]/[metro]/[service]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
