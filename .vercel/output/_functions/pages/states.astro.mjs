import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

const $$States = createComponent(async ($$result, $$props, $$slots) => {
  const SITE_URL = "https://www.luxesur.com";
  const { data: metros } = await supabase.from("metros").select("slug,name,state").eq("is_active", true).order("state", { ascending: true }).order("name", { ascending: true });
  const { data: verticals } = await supabase.from("verticals").select("slug,name").order("name", { ascending: true });
  const stateMap = {};
  for (const m of metros || []) {
    if (!stateMap[m.state]) {
      stateMap[m.state] = [];
    }
    stateMap[m.state].push(m);
  }
  const states = Object.keys(stateMap).sort();
  const pageTitle = "States We Serve | Luxesur";
  const canonicalUrl = `${SITE_URL}/states/`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "canonical": canonicalUrl }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>States We Serve</h1> <p>
Luxesur provides informational resources covering residential service needs across metropolitan areas throughout the United States.
This directory organizes service coverage by state so users can quickly locate city service pages.
</p> <p>
Each state below lists cities where service information pages may be available.
Select a city to explore service categories such as plumbing, HVAC, water damage restoration, and related home services.
</p> ${states.map((state) => renderTemplate`<section> <h2>${state}</h2> <ul> ${stateMap[state].map((m) => renderTemplate`<li> ${verticals?.map((v) => renderTemplate`<a${addAttribute(`/en/${v.slug}/${m.slug}/`, "href")}> ${m.name} ${v.name} </a>`)} </li>`)} </ul> </section>`)}` })}`;
}, "C:/projects/luxesur/src/pages/states.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/states.astro";
const $$url = "/states";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$States,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
