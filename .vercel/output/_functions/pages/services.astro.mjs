import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const SITE_URL = "https://www.luxesur.com";
  const { data: verticals } = await supabase.from("verticals").select("slug,name").order("name");
  const { data: metros } = await supabase.from("metros").select("slug,city,state").eq("active", true).order("city").limit(50);
  const { data: intents } = await supabase.from("intents").select("slug,name,vertical_slug").eq("is_active", true).order("position");
  function intentsByVertical(verticalSlug) {
    return (intents || []).filter((i) => i.vertical_slug === verticalSlug);
  }
  const pageTitle = "Home Services Directory | Luxesur";
  const canonicalUrl = `${SITE_URL}/services/`;
  const alternateEn = `${SITE_URL}/en/services/`;
  const alternateEs = `${SITE_URL}/es/services/`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: canonicalUrl
      }
    ]
  };
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Home Services Directory",
    itemListElement: verticals?.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.name,
      url: `${SITE_URL}/en/${v.slug}/`
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "canonical": canonicalUrl, "hreflang": {
    en: alternateEn,
    es: alternateEs,
    xDefault: alternateEn
  }, "lang": "en" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> ", "<h1>Home Service Resources</h1> <p>\nLuxesur provides informational resources covering common residential service needs across major metropolitan areas in the United States.\nBrowse service categories below to view available city pages and learn about services available in your area.\n</p> <section> <h2>Service Categories</h2> <ul> ", " </ul> </section> <section> <h2>Popular Service Searches</h2> <ul> ", " </ul> </section> <section> <h2>Cities With Service Coverage</h2> <ul> ", " </ul> </section> <section> <h2>How Luxesur Works</h2> <p>\nLuxesur operates as an informational directory designed to help users understand common residential service needs and connect with independent service providers in their area.\nContent across the platform is organized by service category and metropolitan region to help visitors locate relevant information quickly.\n</p> <p>\nEach service category includes pages covering major cities and surrounding communities where independent providers may offer assistance with common household service needs.\n</p> </section> "])), unescapeHTML(JSON.stringify(breadcrumbSchema)), unescapeHTML(JSON.stringify(serviceListSchema)), maybeRenderHead(), verticals?.map((v) => renderTemplate`<li> <a${addAttribute(`/en/${v.slug}/`, "href")}> ${v.name} </a> </li>`), verticals?.flatMap((v) => {
    const verticalIntents = intentsByVertical(v.slug).slice(0, 3);
    return verticalIntents.map((intent) => renderTemplate`<li> <a${addAttribute(`/en/${v.slug}/`, "href")}> ${intent.name} </a> </li>`);
  }), metros?.map((m) => renderTemplate`<li> <a${addAttribute(`/en/emergency-plumbing/${m.slug}/`, "href")}>
Emergency Plumbing in ${m.city}, ${m.state} </a> </li>`)) })}`;
}, "C:/projects/luxesur/src/pages/services.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
