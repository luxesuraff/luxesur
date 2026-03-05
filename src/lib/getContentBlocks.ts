import { supabase } from "./supabase";

type GetContentBlocksParams = {
  verticalId: string;
  languageCode: string;
  regionId?: string | null;
};

export async function getContentBlocks({
  verticalId,
  languageCode,
  regionId = null,
}: GetContentBlocksParams) {
  // 1️⃣ Try region-specific content
  let { data, error } = await supabase
    .from("content_variants")
    .select(`
      block_type,
      template:content_templates (
        template_text
      )
    `)
    .eq("vertical_id", verticalId)
    .eq("language_code", languageCode)
    .eq("region_id", regionId)
    .eq("is_active", true);

  // 2️⃣ Fallback to global (region_id IS NULL)
  if (!data || data.length === 0) {
    ({ data, error } = await supabase
      .from("content_variants")
      .select(`
        block_type,
        template:content_templates (
          template_text
        )
      `)
      .eq("vertical_id", verticalId)
      .eq("language_code", languageCode)
      .is("region_id", null)
      .eq("is_active", true));
  }

  if (error) {
    throw new Error(error.message);
  }

  return data;
}