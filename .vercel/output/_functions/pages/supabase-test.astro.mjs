import { f as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

const $$SupabaseTest = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("verticals").select("slug").limit(5);
  if (error) {
    throw new Error(error.message);
  }
  return renderTemplate`${maybeRenderHead()}<h1>Supabase Test</h1> <pre>${JSON.stringify(data, null, 2)}</pre>`;
}, "C:/projects/luxesur/src/pages/supabase-test.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/supabase-test.astro";
const $$url = "/supabase-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SupabaseTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
