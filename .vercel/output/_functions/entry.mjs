import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_0YO-IcWj.mjs';
import { manifest } from './manifest_CD3_7nMg.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/cities/_letter_.astro.mjs');
const _page3 = () => import('./pages/cities.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/coverage-map.astro.mjs');
const _page6 = () => import('./pages/crawl-map.astro.mjs');
const _page7 = () => import('./pages/disclosures.astro.mjs');
const _page8 = () => import('./pages/geo.astro.mjs');
const _page9 = () => import('./pages/plumbing-content-test.astro.mjs');
const _page10 = () => import('./pages/privacy.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/sitemaps/sitemap-core.xml.astro.mjs');
const _page13 = () => import('./pages/sitemaps/sitemap-index.xml.astro.mjs');
const _page14 = () => import('./pages/sitemaps/sitemap-intents.xml.astro.mjs');
const _page15 = () => import('./pages/sitemaps/sitemap-metros.xml.astro.mjs');
const _page16 = () => import('./pages/sitemaps/sitemap-suburbs-fl.xml.astro.mjs');
const _page17 = () => import('./pages/sitemaps/sitemap-suburbs-rest.xml.astro.mjs');
const _page18 = () => import('./pages/sitemaps/sitemap-suburbs.xml.astro.mjs');
const _page19 = () => import('./pages/states/_state_.astro.mjs');
const _page20 = () => import('./pages/states.astro.mjs');
const _page21 = () => import('./pages/supabase-test.astro.mjs');
const _page22 = () => import('./pages/terms.astro.mjs');
const _page23 = () => import('./pages/_lang_/_vertical_/_metro_/_intent_/_suburb_.astro.mjs');
const _page24 = () => import('./pages/_lang_/_vertical_/_metro_/_service_.astro.mjs');
const _page25 = () => import('./pages/_lang_/_vertical_/_metro_.astro.mjs');
const _page26 = () => import('./pages/_lang_/_state_.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/cities/[letter].astro", _page2],
    ["src/pages/cities.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/coverage-map.astro", _page5],
    ["src/pages/crawl-map.astro", _page6],
    ["src/pages/disclosures.astro", _page7],
    ["src/pages/geo.astro", _page8],
    ["src/pages/plumbing-content-test.astro", _page9],
    ["src/pages/privacy.astro", _page10],
    ["src/pages/services.astro", _page11],
    ["src/pages/sitemaps/sitemap-core.xml.ts", _page12],
    ["src/pages/sitemaps/sitemap-index.xml.ts", _page13],
    ["src/pages/sitemaps/sitemap-intents.xml.ts", _page14],
    ["src/pages/sitemaps/sitemap-metros.xml.ts", _page15],
    ["src/pages/sitemaps/sitemap-suburbs-fl.xml.ts", _page16],
    ["src/pages/sitemaps/sitemap-suburbs-rest.xml.ts", _page17],
    ["src/pages/sitemaps/sitemap-suburbs.xml.ts", _page18],
    ["src/pages/states/[state].astro", _page19],
    ["src/pages/states.astro", _page20],
    ["src/pages/supabase-test.astro", _page21],
    ["src/pages/terms.astro", _page22],
    ["src/pages/[lang]/[vertical]/[metro]/[intent]/[suburb]/index.astro", _page23],
    ["src/pages/[lang]/[vertical]/[metro]/[service]/index.astro", _page24],
    ["src/pages/[lang]/[vertical]/[metro]/index.astro", _page25],
    ["src/pages/[lang]/[state]/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "549a8d7c-e19f-4383-a6a4-4d0096404cef",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
