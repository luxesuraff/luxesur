import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, u as unescapeHTML } from '../../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BqhcYmk4.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_BZroyzFh.mjs';
import { $ as $$CallCTA } from '../../../chunks/CallCTA_CqrV1s2v.mjs';
import 'clsx';
import { s as supabase } from '../../../chunks/supabase_BOt9cYpn.mjs';
import { s as supabaseAdmin } from '../../../chunks/supabaseAdmin_BlrIHUgT.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro("https://www.luxesur.com");
const $$RelatedMetros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedMetros;
  const { metros = [], lang, vertical } = Astro2.props;
  return renderTemplate`${metros.length > 0 && renderTemplate`${maybeRenderHead()}<section class="related-metros"><h2>${lang === "es" ? "Ciudades Cercanas" : "Nearby Cities"}</h2><ul>${metros.map((m) => renderTemplate`<li><a${addAttribute(`/${lang}/${vertical}/${m.slug}/`, "href")}>${m.name}</a></li>`)}</ul></section>`}`;
}, "C:/projects/luxesur/src/components/RelatedMetros.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.luxesur.com");
async function getStaticPaths() {
  const { data: metros } = await supabaseAdmin.from("metros").select("slug,city,state").eq("active", true);
  const { data: verticals } = await supabaseAdmin.from("verticals").select("slug");
  const languages = ["en", "es"];
  const paths = [];
  for (const lang of languages) {
    for (const v of verticals || []) {
      for (const m of metros || []) {
        paths.push({
          params: {
            lang,
            vertical: v.slug,
            metro: m.slug
          },
          props: {
            city: m.city,
            state: m.state
          }
        });
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
  const { lang, vertical, metro } = Astro2.params;
  const { city, state } = Astro2.props;
  const { data: verticalData } = await supabase.from("verticals").select("id,name,hero_image").eq("slug", vertical).maybeSingle();
  if (!verticalData) throw new Error("Vertical not found");
  const { data: metroData } = await supabase.from("metros").select("seo_intro,region_name").eq("slug", metro).maybeSingle();
  const region = metroData?.region_name || state;
  const { data: intents } = await supabase.from("intents").select("slug,name").eq("vertical_slug", vertical).eq("is_active", true).order("position");
  const services = intents || [];
  const { data: suburbData } = await supabase.from("suburbs").select("slug,name").eq("metro_slug", metro).order("name").limit(25);
  const suburbs = suburbData || [];
  const { data: contentBlocks } = await supabase.from("intent_content_blocks").select("*").eq("vertical_slug", vertical).eq("language_code", lang).order("position");
  const seen = /* @__PURE__ */ new Set();
  const uniqueBlocks = [];
  for (const b of contentBlocks || []) {
    const key = `${b.heading}-${b.body}`;
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueBlocks.push(b);
  }
  const blocks = uniqueBlocks.slice(0, 10);
  const { data: related } = await supabase.from("metros").select("city,slug").eq("state", state).neq("slug", metro).eq("active", true).limit(8);
  const relatedMetros = related || [];
  let phoneNumber = null;
  const { data: ctaProfile } = await supabase.from("cta_profiles").select("phone_number,is_active").eq("vertical_id", verticalData.id).eq("language_code", lang).maybeSingle();
  if (ctaProfile?.is_active) {
    phoneNumber = ctaProfile.phone_number;
  }
  const pageTitle = `${verticalData.name} in ${city}, ${state} | Luxesur`;
  const metaDescription = `${verticalData.name} resources and service coverage in ${city}, ${state}.`;
  const canonicalUrl = `${SITE_URL}/${lang}/${vertical}/${metro}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${verticalData.name} in ${city}, ${state}`,
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": canonicalUrl, "lang": lang }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", " ", "<h1>", " in ", ", ", "</h1> <p> ", " services may be available in ", ", ", " and surrounding areas within the ", " region.\n</p> ", "", "", "", "<section> <h2> ", " </h2> <ul> ", " </ul> </section> ", " "])), unescapeHTML(JSON.stringify(schema)), renderComponent($$result2, "Hero", $$Hero, { "src": verticalData.hero_image || "/images/default.webp", "alt": pageTitle }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CallCTA", $$CallCTA, { "phoneNumber": phoneNumber })} ` }), maybeRenderHead(), verticalData.name, city, state, verticalData.name, city, state, region, services.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? `Servicios disponibles en ${city}` : `${verticalData.name} Services in ${city}`} </h2> <ul> ${services.map((s) => renderTemplate`<li${addAttribute(s.slug, "key")}> <a${addAttribute(`/${lang}/${vertical}/${metro}/${s.slug}/`, "href")}> ${s.name} in ${city} </a> </li>`)} </ul> </section>`, blocks.map((b) => renderTemplate`<section${addAttribute(b.id, "key")}> <h2>${formatHeading(b.heading || b.section)}</h2> <p>${injectLocation(b.body || b.content, city, state)}</p> </section>`), suburbs.length > 0 && services.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? `\xC1reas cercanas en ${city}` : `Nearby Areas in ${city}`} </h2> <ul> ${suburbs.map((s) => renderTemplate`<li${addAttribute(s.slug, "key")}> ${services.map((svc) => renderTemplate`<div> <a${addAttribute(`/${lang}/${vertical}/${metro}/${svc.slug}/${s.slug}/`, "href")}> ${svc.name} in ${s.name} </a> </div>`)} </li>`)} </ul> </section>`, relatedMetros.length > 0 && renderTemplate`<section> <h2> ${lang === "es" ? "Ciudades cercanas" : "Nearby Cities"} </h2> <ul> ${relatedMetros.map((m) => renderTemplate`<li${addAttribute(m.slug, "key")}> <a${addAttribute(`/${lang}/${vertical}/${m.slug}/`, "href")}> ${verticalData.name} in ${m.city}, ${state} </a> </li>`)} </ul> </section>`, lang === "es" ? "Cobertura de servicio" : "Service Coverage", relatedMetros.map((m) => renderTemplate`<li${addAttribute(m.slug, "key")}> <a${addAttribute(`/${lang}/${vertical}/${m.slug}/`, "href")}> ${verticalData.name} in ${m.city} </a> </li>`), renderComponent($$result2, "RelatedMetros", $$RelatedMetros, { "metros": relatedMetros, "lang": lang, "vertical": vertical })) })}`;
}, "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/index.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/index.astro";
const $$url = "/[lang]/[vertical]/[metro]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
