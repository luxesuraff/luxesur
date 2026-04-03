import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.luxesur.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { src, alt, phone, position } = Astro2.props;
  const formatPhone = (num) => {
    if (!num) return "";
    const digits = num.replace(/\D/g, "");
    return digits.replace(/^1?(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3");
  };
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-bbe6dxrz> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} data-astro-cid-bbe6dxrz> ${phone && renderTemplate`<div class="hero-cta" data-astro-cid-bbe6dxrz> <p data-astro-cid-bbe6dxrz>Call for Emergency Help</p> <a${addAttribute(phone, "href")} data-astro-cid-bbe6dxrz> <strong data-astro-cid-bbe6dxrz>${formatPhone(phone)}</strong> </a> </div>`} </div> `;
}, "C:/projects/luxesur/src/components/Hero.astro", void 0);

export { $$Hero as $ };
