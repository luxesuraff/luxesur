import { f as createComponent, m as maybeRenderHead, r as renderTemplate$1 } from '../chunks/astro/server_kB_zZSEQ.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../chunks/supabase_BOt9cYpn.mjs';
export { renderers } from '../renderers.mjs';

async function getContentBlocks({
  verticalId,
  languageCode,
  regionId = null
}) {
  let { data, error } = await supabase.from("content_variants").select(`
      block_type,
      template:content_templates (
        template_text
      )
    `).eq("vertical_id", verticalId).eq("language_code", languageCode).eq("region_id", regionId).eq("is_active", true);
  if (!data || data.length === 0) {
    ({ data, error } = await supabase.from("content_variants").select(`
        block_type,
        template:content_templates (
          template_text
        )
      `).eq("vertical_id", verticalId).eq("language_code", languageCode).is("region_id", null).eq("is_active", true));
  }
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

function renderTemplate(template, vars) {
  let output = template;
  for (const [key, value] of Object.entries(vars)) {
    output = output.replaceAll(`{{${key}}}`, value);
  }
  return output;
}

function selectVariant(variants, seed) {
  if (variants.length === 1) return variants[0];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % variants.length;
  return variants[index];
}

const $$PlumbingContentTest = createComponent(async ($$result, $$props, $$slots) => {
  const EMERGENCY_PLUMBING_ID = "8d1074a0-37c0-4db1-9596-7fa2c48fa5a1";
  const metro = {
    name: "Dallas",
    region: "Texas",
    slug: "dallas-tx"
  };
  const blocks = await getContentBlocks({
    verticalId: EMERGENCY_PLUMBING_ID,
    languageCode: "en",
    regionId: null
  });
  const grouped = {};
  for (const block of blocks) {
    if (!grouped[block.block_type]) {
      grouped[block.block_type] = [];
    }
    grouped[block.block_type].push(block);
  }
  const selectedBlocks = Object.values(grouped).map(
    (variants) => selectVariant(variants, metro.slug)
  );
  return renderTemplate$1`${maybeRenderHead()}<h1>Emergency Plumbing Content Test</h1> ${selectedBlocks.map((block) => renderTemplate$1`<section style="margin-bottom: 32px;"> <h3>${block.block_type}</h3> <p> ${renderTemplate(block.template.template_text, {
    metro_name: metro.name,
    region_name: metro.region
  })} </p> </section>`)}`;
}, "C:/projects/luxesur/src/pages/plumbing-content-test.astro", void 0);

const $$file = "C:/projects/luxesur/src/pages/plumbing-content-test.astro";
const $$url = "/plumbing-content-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PlumbingContentTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
