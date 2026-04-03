import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqhcYmk4.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy | Luxesur" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Privacy Policy</h1> <p>
This Privacy Policy describes how information is collected, used, and
    disclosed when you visit or interact with the Luxesur website.
</p> <h2>Information We Collect</h2> <p>
Luxesur may collect limited information when you visit this website,
    including standard usage data such as browser type, device information,
    pages visited, referring URLs, and approximate geographic location.
</p> <p>
If you choose to contact Luxesur directly for business or platform-related
    inquiries, we may collect the information you voluntarily provide, such as
    your email address or message content.
</p> <h2>Call and Communication Data</h2> <p>
Calls initiated through this website are consumer-initiated and may be
    routed to independent third-party plumbing service providers based on
    geographic relevance, service category, and availability.
</p> <p>
Calls may be monitored or recorded for quality assurance, routing,
    compliance, or training purposes where permitted by applicable law.
    Luxesur does not control how third-party service providers handle
    information once a call is connected.
</p> <h2>Use of Information</h2> <p>
Information collected by Luxesur may be used to operate and improve the
    website, respond to inquiries, maintain platform functionality, support
    compliance obligations, and analyze website performance.
</p> <h2>Analytics & Advertising Technologies</h2> <p>
Luxesur may use analytics, tracking, and advertising technologies,
    including cookies, pixels, and similar tools, to understand how users
    interact with the website and to improve platform performance.
</p> <p>
These technologies may be provided by third-party services and may collect
    information such as pages visited, device type, browser information, and
    general location data. This information may be used for analytics,
    measurement, and advertising-related purposes.
</p> <p>
Users may be shown advertisements related to their interactions with this
    website on third-party platforms. Users can manage or opt out of certain
    advertising preferences through browser settings or third-party tools.
</p> <h2>Third-Party Services</h2> <p>
This website may reference, link to, or connect users with independent
    third-party plumbing service providers. Luxesur is not responsible for the
    privacy practices, policies, or content of third-party websites or services.
</p> <h2>Data Security</h2> <p>
Luxesur takes reasonable measures to protect information collected through
    this website. However, no method of transmission or storage is completely
    secure, and Luxesur cannot guarantee absolute security.
</p> <h2>Changes to This Policy</h2> <p>
This Privacy Policy may be updated periodically. Continued use of this
    website after changes are posted constitutes acceptance of those changes.
</p> <h2>Contact</h2> <p>
For questions regarding this Privacy Policy, please contact Luxesur using
    the contact information provided on this website.
</p> ` })}`;
}, "C:/projects/luxesur/src/pages/privacy.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
