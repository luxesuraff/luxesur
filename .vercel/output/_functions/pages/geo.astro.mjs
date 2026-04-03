import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Geo = createComponent(async ($$result, $$props, $$slots) => {
  const SITE_URL = "https://www.luxesur.com";
  const languages = ["en", "es"];
  const { data: verticals } = await supabase.from("verticals").select("slug,name").order("name");
  const { data: metros } = await supabase.from("metros").select("slug,city,state").eq("active", true).order("city");
  const { data: intents } = await supabase.from("intents").select("slug,name,vertical_slug").eq("is_active", true).order("name");
  const { data: suburbs } = await supabase.from("suburbs").select("slug,name,metro_slug").order("name");
  function byVertical(verticalSlug) {
    return (intents || []).filter((i) => i.vertical_slug === verticalSlug);
  }
  function byMetro(metroSlug) {
    return (suburbs || []).filter((s) => s.metro_slug === metroSlug);
  }
  function formatLang(lang) {
    return lang === "es" ? "Espa\xF1ol" : "English";
  }
  const pageTitle = "Luxesur GEO Crawl Map";
  const metaDescription = "Luxesur geo crawl accelerator for cities, services, metros, intents, and suburb coverage pages.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": metaDescription, "canonical": `${SITE_URL}/geo/`, "lang": "en", "data-astro-cid-7phuwa3b": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="geo-page" data-astro-cid-7phuwa3b> <section data-astro-cid-7phuwa3b> <h1 data-astro-cid-7phuwa3b>Luxesur GEO Crawl Accelerator</h1> <p data-astro-cid-7phuwa3b>
This page exposes Luxesur service coverage URLs for crawl discovery across
        languages, verticals, metros, intents, and suburb-level pages.
</p> </section> <section data-astro-cid-7phuwa3b> <h2 data-astro-cid-7phuwa3b>Primary Hubs</h2> <ul data-astro-cid-7phuwa3b> <li data-astro-cid-7phuwa3b><a href="/crawl-map/" data-astro-cid-7phuwa3b>Coverage Map</a></li> <li data-astro-cid-7phuwa3b><a href="/sitemap.xml" data-astro-cid-7phuwa3b>XML Sitemap</a></li> <li data-astro-cid-7phuwa3b><a href="/en/cities/" data-astro-cid-7phuwa3b>English Cities</a></li> <li data-astro-cid-7phuwa3b><a href="/es/cities/" data-astro-cid-7phuwa3b>Spanish Cities</a></li> <li data-astro-cid-7phuwa3b><a href="/en/services/" data-astro-cid-7phuwa3b>English Services</a></li> <li data-astro-cid-7phuwa3b><a href="/es/services/" data-astro-cid-7phuwa3b>Spanish Services</a></li> </ul> </section> ${languages.map((lang) => renderTemplate`<section data-astro-cid-7phuwa3b> <h2 data-astro-cid-7phuwa3b>${formatLang(lang)}</h2> <div class="lang-block" data-astro-cid-7phuwa3b> <h3 data-astro-cid-7phuwa3b>Hub Pages</h3> <ul data-astro-cid-7phuwa3b> <li data-astro-cid-7phuwa3b><a${addAttribute(`/${lang}/cities/`, "href")} data-astro-cid-7phuwa3b>${lang.toUpperCase()} Cities</a></li> <li data-astro-cid-7phuwa3b><a${addAttribute(`/${lang}/services/`, "href")} data-astro-cid-7phuwa3b>${lang.toUpperCase()} Services</a></li> </ul> </div> ${(verticals || []).map((vertical) => {
    const verticalIntents = byVertical(vertical.slug);
    return renderTemplate`<section class="vertical-block" data-astro-cid-7phuwa3b> <h3 data-astro-cid-7phuwa3b> <a${addAttribute(`/${lang}/${vertical.slug}/`, "href")} data-astro-cid-7phuwa3b> ${vertical.name || vertical.slug} </a> </h3> <details data-astro-cid-7phuwa3b> <summary data-astro-cid-7phuwa3b>Show metro and service links for ${vertical.name || vertical.slug}</summary> ${(metros || []).map((metro) => {
      const metroSuburbs = byMetro(metro.slug);
      return renderTemplate`<div class="metro-block" data-astro-cid-7phuwa3b> <h4 data-astro-cid-7phuwa3b> <a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/`, "href")} data-astro-cid-7phuwa3b> ${metro.city}, ${metro.state} </a> </h4> ${verticalIntents.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-7phuwa3b": true }, { "default": async ($$result3) => renderTemplate` <ul data-astro-cid-7phuwa3b> ${verticalIntents.map((intent) => renderTemplate`<li data-astro-cid-7phuwa3b> <a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/${intent.slug}/`, "href")} data-astro-cid-7phuwa3b> ${intent.name} in ${metro.city}, ${metro.state} </a> </li>`)} </ul> ${metroSuburbs.length > 0 && renderTemplate`<details data-astro-cid-7phuwa3b> <summary data-astro-cid-7phuwa3b>
Show suburb links for ${metro.city}, ${metro.state} </summary> ${verticalIntents.map((intent) => renderTemplate`<div class="suburb-intent-block" data-astro-cid-7phuwa3b> <h5 data-astro-cid-7phuwa3b>${intent.name}</h5> <ul data-astro-cid-7phuwa3b> ${metroSuburbs.map((suburb) => renderTemplate`<li data-astro-cid-7phuwa3b> <a${addAttribute(`/${lang}/${vertical.slug}/${metro.slug}/${intent.slug}/${suburb.slug}/`, "href")} data-astro-cid-7phuwa3b> ${intent.name} in ${suburb.name} </a> </li>`)} </ul> </div>`)} </details>`}` })}`} </div>`;
    })} </details> </section>`;
  })} </section>`)} </main> ` })} `;
}, "C:/projects/luxesur/src/pages/geo.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/geo.astro";
const $$url = "/geo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Geo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
