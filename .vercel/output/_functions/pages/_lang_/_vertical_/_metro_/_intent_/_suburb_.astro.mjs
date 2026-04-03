import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../../../chunks/BaseLayout_BqhcYmk4.mjs';
import { $ as $$Hero } from '../../../../../chunks/Hero_BZroyzFh.mjs';
import { $ as $$CallCTA } from '../../../../../chunks/CallCTA_CqrV1s2v.mjs';
import { s as supabase } from '../../../../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.luxesur.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const SITE_URL = "https://www.luxesur.com";
  function injectLocation(text, city2, state2, suburb2) {
    if (!text) return "";
    return String(text).replaceAll("{city}", city2).replaceAll("{state}", state2).replaceAll("{suburb}", suburb2);
  }
  function formatHeading(text) {
    if (!text) return "";
    return String(text).replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }
  const { lang, vertical, metro, intent, suburb } = Astro2.params;
  if (!lang || !vertical || !metro || !intent || !suburb) {
    return Astro2.redirect("/404");
  }
  const { data: metroData } = await supabase.from("metros").select("city,state").eq("slug", metro).eq("active", true).maybeSingle();
  if (!metroData) {
    return Astro2.redirect("/404");
  }
  const city = metroData.city;
  const state = metroData.state;
  const { data: suburbData } = await supabase.from("suburbs").select("city,metro_slug").eq("slug", suburb).maybeSingle();
  if (!suburbData || suburbData.metro_slug !== metro) {
    return Astro2.redirect("/404");
  }
  const suburbName = suburbData.city;
  const { data: verticalData } = await supabase.from("verticals").select("id,name,hero_image").eq("slug", vertical).maybeSingle();
  if (!verticalData) {
    return Astro2.redirect("/404");
  }
  const { data: intentData } = await supabase.from("intents").select("name").eq("slug", intent).eq("vertical_slug", vertical).eq("is_active", true).maybeSingle();
  if (!intentData) {
    return Astro2.redirect("/404");
  }
  const { data: contentBlocks } = await supabase.from("intent_content_blocks").select("*").eq("intent_slug", intent).eq("language_code", lang).order("position");
  const seenSections = /* @__PURE__ */ new Set();
  const blocks = [];
  for (const b of contentBlocks || []) {
    const section = String(b.section || b.heading || "").trim();
    const content = String(b.content || b.body || "").trim();
    if (!section || !content) continue;
    if (seenSections.has(section)) continue;
    seenSections.add(section);
    blocks.push({ section, content });
  }
  const finalBlocks = blocks.slice(0, 5);
  let monetizationEnabled = false;
  let callEnabled = false;
  const { data: rollout } = await supabase.from("state_rollouts").select("monetization_enabled,call_enabled,form_enabled").eq("state", state).eq("vertical_slug", vertical).eq("language_code", lang).maybeSingle();
  if (rollout) {
    monetizationEnabled = rollout.monetization_enabled;
    callEnabled = rollout.call_enabled;
  }
  let phoneNumber = null;
  if (monetizationEnabled && callEnabled) {
    const { data: ctaProfile } = await supabase.from("cta_profiles").select("phone_number,is_active").eq("vertical_id", verticalData.id).eq("language_code", lang).maybeSingle();
    if (ctaProfile?.is_active) {
      phoneNumber = ctaProfile.phone_number;
    }
  }
  const pageTitle = `${intentData.name} in ${suburbName}, ${city}, ${state} | Luxesur`;
  const metaDescription = `${intentData.name} services may be available in ${suburbName}, ${city}, ${state}.`;
  const canonicalUrl = `${SITE_URL}/${lang}/${vertical}/${metro}/${intent}/${suburb}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${intentData.name} in ${suburbName}, ${city}, ${state}`,
    areaServed: {
      "@type": "Place",
      name: suburbName
    },
    provider: {
      "@type": "Organization",
      name: "Luxesur",
      url: SITE_URL
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": canonicalUrl, "lang": lang }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", " ", "<h1>", " in ", ", ", ", ", "</h1> <p> ", " services may be available in ", ", ", ", ", ".\n</p> ", ""])), unescapeHTML(JSON.stringify(schema)), renderComponent($$result2, "Hero", $$Hero, { "src": verticalData.hero_image || "/images/default.webp", "alt": pageTitle }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CallCTA", $$CallCTA, { "phoneNumber": phoneNumber })} ` }), maybeRenderHead(), intentData.name, suburbName, city, state, intentData.name, suburbName, city, state, finalBlocks.map((b) => renderTemplate`<section> <h2>${formatHeading(b.section)}</h2> <p>${injectLocation(b.content, city, state, suburbName)}</p> </section>`)) })}`;
}, "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/[intent]/[suburb]/index.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/[lang]/[vertical]/[metro]/[intent]/[suburb]/index.astro";
const $$url = "/[lang]/[vertical]/[metro]/[intent]/[suburb]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
