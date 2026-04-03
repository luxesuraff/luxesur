import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZroyzFh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Luxesur | Emergency Plumbing Information & Local Service Connections" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "src": "/images/home/home-hero.webp", "alt": "Emergency plumbing assistance and independent local plumbers" })} ${maybeRenderHead()}<h1>Luxesur</h1> <p>
Luxesur is a consumer-facing informational and referral platform designed to help
    property owners find assistance for urgent plumbing-related situations that
    require immediate attention.
</p> <p>
The Luxesur platform provides location-based informational content related to
    emergency plumbing conditions, including burst pipes, sewer backups, sudden
    water loss, and other time-sensitive plumbing issues.
</p> <p>
Luxesur does not provide plumbing services, repairs, or emergency response
    directly. All services referenced on this website are performed by independent
    third-party service providers who are not employed, supervised, or controlled
    by Luxesur.
</p> <p>
Consumers seeking assistance may be connected with independent third-party
    plumbing service providers through city- and service-specific informational
    pages available on this site, based on geographic relevance and provider
    availability.
</p> <p>
Emergency plumbing information and assistance may be available across many
    cities and surrounding communities through this platform.
</p> <hr> <h2>Business & Partner Contact</h2> <p>
Service providers, partners, and buyers interested in working with Luxesur may
  contact us using the details below.
</p> <p> <strong>Main Business Line:</strong> <a href="tel:18665354699">1-866-535-4699</a> </p> <p> <strong>Email:</strong> <a href="mailto:partners@luxesur.com">partners@luxesur.com</a> </p> <p>
These contact details are intended for business inquiries only and are not
  emergency service lines.
</p> <section> <h2>Service Areas</h2> <ul> <li><a href="/emergency-plumbing/new-york/">New York</a></li> <li><a href="/emergency-plumbing/los-angeles/">Los Angeles</a></li> <li><a href="/emergency-plumbing/chicago/">Chicago</a></li> <li><a href="/emergency-plumbing/houston/">Houston</a></li> <li><a href="/emergency-plumbing/phoenix/">Phoenix</a></li> <li><a href="/emergency-plumbing/dallas/">Dallas</a></li> <li><a href="/emergency-plumbing/miami/">Miami</a></li> </ul> </section>` })}`;
}, "C:/projects/luxesur/src/pages/index.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
