import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqhcYmk4.mjs';
import { s as supabase } from '../../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.luxesur.com");
function getStaticPaths() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return letters.map((l) => ({
    params: { letter: l }
  }));
}
const $$letter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$letter;
  const SITE_URL = "https://www.luxesur.com";
  const { letter } = Astro2.params;
  const { data: metros } = await supabase.from("metros").select("name,slug,state").ilike("name", `${letter}%`).eq("is_active", true).order("name");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Cities Starting With ${letter.toUpperCase()} | Luxesur`, "canonical": `${SITE_URL}/cities/${letter}/` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Cities Starting With "${letter.toUpperCase()}"</h1> <p>
Browse cities beginning with the letter ${letter.toUpperCase()} where service resources may be available.
</p> <ul> ${metros?.map((m) => renderTemplate`<li> <a${addAttribute(`/en/emergency-plumbing/${m.slug}/`, "href")}>
Emergency Plumbing in ${m.name}, ${m.state} </a> </li>`)} </ul> ` })}`;
}, "C:/projects/luxesur/src/pages/cities/[letter].astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/cities/[letter].astro";
const $$url = "/cities/[letter]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$letter,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
