import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Luxesur" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About Luxesur</h1> <p>
Luxesur is a consumer-facing informational and referral platform designed to
    help individuals find assistance for urgent plumbing-related situations that
    require timely attention.
</p> <p>
The platform publishes location-based informational content intended to help
    users understand emergency plumbing conditions, such as burst pipes, sewer
    backups, and sudden loss of water service, and to identify potential options
    for getting help.
</p> <p>
Luxesur does not provide plumbing services, repairs, or emergency response
    directly. Luxesur does not employ contractors or service technicians. All
    services referenced on this website are performed by independent third-party
    service providers who operate separately from Luxesur.
</p> <p>
Availability of services may vary by location and provider. Users are
    encouraged to independently evaluate service providers before engaging
    their services.
</p> ` })}`;
}, "C:/projects/luxesur/src/pages/about.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
