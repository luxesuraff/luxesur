import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact | Luxesur" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Contact Luxesur</h1> <p>
This page is intended for business, partner, and platform-related inquiries
    only, including buyer onboarding, partnership discussions, billing questions,
    compliance matters, or website-related concerns.
</p> <p>
Luxesur does not provide emergency plumbing services, repairs, or response
    directly. If you are a property owner seeking immediate assistance for a
    plumbing-related issue, please visit the appropriate city- and
    service-specific informational page on this website.
</p> <p>
Business and partner inquiries may be directed to the contact information
    below.
</p> <p> <strong>Phone:</strong> <a href="tel:18665354699">1-866-535-4699</a> </p> <p> <strong>Email:</strong> <a href="mailto:partners@luxesur.com">partners@luxesur.com</a> </p> <p>
This contact information is intended for business inquiries only and is not
    an emergency service line. Messages related to consumer service needs or
    emergency situations may not receive a response.
</p> ` })}`;
}, "C:/projects/luxesur/src/pages/contact.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
