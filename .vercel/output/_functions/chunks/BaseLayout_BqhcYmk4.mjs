import { f as createComponent, r as renderTemplate, e as createAstro, h as addAttribute, n as renderSlot, k as renderComponent, o as renderHead, u as unescapeHTML, p as renderScript, l as Fragment } from './astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const PIXELS = {
  meta: {
    enabled: false},
  google: {
    enabled: false}
};

const $$Pixels = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${PIXELS.meta.enabled}${PIXELS.google.enabled}`;
}, "C:/projects/luxesur/src/components/Pixels.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://www.luxesur.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    breadcrumbs = null,
    faqs = null,
    canonical = null,
    hreflang = null,
    lang = "en"
  } = Astro2.props;
  const canonicalUrl = canonical ?? new URL(Astro2.request.url).origin + Astro2.url.pathname;
  return renderTemplate(_c || (_c = __template(["<html", " data-astro-cid-37fxchfa> <head><title>", '</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO META --><meta name="robots" content="index, follow, max-image-preview:large"><!-- CANONICAL --><link rel="canonical"', "><!-- HREFLANG -->", "", "", '<!-- GOOGLE TAG (GA4) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZMDPYFW90C"><\/script>', '<!-- WEBSITE SCHEMA --><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        name: "Luxesur",\n        url: "https://www.luxesur.com",\n        description:\n          "Luxesur is a consumer-facing informational and referral platform connecting users with independent third-party service providers.",\n        publisher: {\n          "@type": "Organization",\n          name: "Luxesur",\n          url: "https://www.luxesur.com",\n        },\n      })}\n    <\/script><!-- ORGANIZATION SCHEMA --><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        name: "Luxesur",\n        url: "https://www.luxesur.com",\n        description:\n          "Luxesur operates as an informational and referral platform.",\n      })}\n    <\/script><!-- FAQ SCHEMA -->', "<!-- BREADCRUMB SCHEMA -->", "<!-- PIXELS -->", "", "</head> <body data-astro-cid-37fxchfa> <main data-astro-cid-37fxchfa> <!-- HTML BREADCRUMBS (CRAWLABLE LINKS) --> ", " ", ' <!-- GEO DISCOVERY LINKS --> <div class="geo-hub" data-astro-cid-37fxchfa> <strong data-astro-cid-37fxchfa>Service Areas</strong><br data-astro-cid-37fxchfa> <a href="/cities/" data-astro-cid-37fxchfa>Cities We Serve</a> </div> </main> <footer data-astro-cid-37fxchfa> <a href="/" data-astro-cid-37fxchfa>Home</a> |\n<a href="/services/" data-astro-cid-37fxchfa>Services</a> |\n<a', ' data-astro-cid-37fxchfa>Cities We Serve</a> <a href="/states/" data-astro-cid-37fxchfa>States</a> <a href="/about" data-astro-cid-37fxchfa>About</a> |\n<a href="/contact" data-astro-cid-37fxchfa>Contact</a> |\n<a href="/disclosures" data-astro-cid-37fxchfa>Disclosures</a> |\n<a href="/privacy" data-astro-cid-37fxchfa>Privacy</a> |\n<a href="/terms" data-astro-cid-37fxchfa>Terms</a> |\n<a href="/crawl-map/" data-astro-cid-37fxchfa>Coverage Map</a> |\n</footer> </body></html>'])), addAttribute(lang, "lang"), title, addAttribute(canonicalUrl, "href"), hreflang?.en && renderTemplate`<link rel="alternate" hrefLang="en"${addAttribute(hreflang.en, "href")}>`, hreflang?.es && renderTemplate`<link rel="alternate" hrefLang="es"${addAttribute(hreflang.es, "href")}>`, hreflang?.xDefault && renderTemplate`<link rel="alternate" hrefLang="x-default"${addAttribute(hreflang.xDefault, "href")}>`, renderScript($$result, "C:/projects/luxesur/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), faqs && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  }))), breadcrumbs && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  }))), renderComponent($$result, "Pixels", $$Pixels, { "data-astro-cid-37fxchfa": true }), renderHead(), breadcrumbs && renderTemplate`<nav class="breadcrumbs" data-astro-cid-37fxchfa> ${breadcrumbs.map((b, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-37fxchfa": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(b.url, "href")} data-astro-cid-37fxchfa>${b.name}</a> ${i < breadcrumbs.length - 1 && " > "}` })}`)} </nav>`, renderSlot($$result, $$slots["default"]), addAttribute(`/${lang}/cities/`, "href"));
}, "C:/projects/luxesur/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
