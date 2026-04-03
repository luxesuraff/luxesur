import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://www.luxesur.com");
const $$CallCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallCTA;
  const {
    phoneNumber = null,
    label = "Call Now",
    subtext = "",
    className = "cta",
    lang = "en"
  } = Astro2.props;
  return renderTemplate`${phoneNumber ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`tel:${phoneNumber}`, "href")}${addAttribute(className, "class")} rel="nofollow" role="button"${addAttribute(`${label} ${phoneNumber}`, "aria-label")}><span class="cta-label">${label}</span>${subtext && renderTemplate`<small class="cta-subtext">${subtext}</small>`}</a>` : renderTemplate`<a${addAttribute(`/${lang}/cities/`, "href")}${addAttribute(className, "class")} role="button"><span class="cta-label">
Cities We Serve
</span></a>`}`;
}, "C:/projects/luxesur/src/components/CallCTA.astro", void 0);

export { $$CallCTA as $ };
