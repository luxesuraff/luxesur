import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.luxesur.com");
async function getStaticPaths() {
  const { data: metros } = await supabase.from("metros").select("state").eq("is_active", true);
  const states = [...new Set((metros || []).map((m) => m.state))];
  return states.map((s) => ({
    params: { state: s.toLowerCase() }
  }));
}
const $$state = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$state;
  const SITE_URL = "https://www.luxesur.com";
  const { state } = Astro2.params;
  const { data: metros } = await supabase.from("metros").select("name,slug,state").eq("state", state.toUpperCase()).eq("is_active", true).order("name");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Cities in ${state.toUpperCase()} | Luxesur`, "canonical": `${SITE_URL}/states/${state}/` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Cities in ${state.toUpperCase()}</h1> <p>
Browse cities in ${state.toUpperCase()} where Luxesur provides informational resources related to common home service needs.
</p> <ul> ${metros?.map((m) => renderTemplate`<li> <a${addAttribute(`/en/emergency-plumbing/${m.slug}/`, "href")}>
Emergency Plumbing in ${m.name} </a> </li>`)} </ul> ` })}`;
}, "C:/projects/luxesur/src/pages/states/[state].astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/states/[state].astro";
const $$url = "/states/[state]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$state,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
