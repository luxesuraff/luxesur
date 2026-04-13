import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const prerender = false;

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function pickDestination(vertical: string) {
  // Phase 1 routing plan
  // Update these values later without changing the form frontend
  switch (vertical) {
    case "solar":
      return {
        destination: "profitise",
        buyer: "profitise_solar"
      };
    case "roofing":
      return {
        destination: "affiliate_b",
        buyer: "affiliate_b_roofing"
      };
    case "windows":
      return {
        destination: "affiliate_b",
        buyer: "affiliate_b_windows"
      };
    default:
      return {
        destination: "internal",
        buyer: "unassigned"
      };
  }
}

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  try {
    const formData = await request.formData();

    const lang = String(formData.get("lang") || "").trim().toLowerCase();
    const vertical = String(formData.get("vertical") || "").trim().toLowerCase();

    const first_name = String(formData.get("first_name") || "").trim();
    const last_name = String(formData.get("last_name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const zip_code = String(formData.get("zip_code") || "").trim();

    const homeowner = String(formData.get("homeowner") || "").trim().toLowerCase();
    const property_type = String(formData.get("property_type") || "").trim();
    const monthly_bill = String(formData.get("monthly_bill") || "").trim();
    const service_type = String(formData.get("service_type") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const consent = formData.get("consent") ? "yes" : "no";

    if (!lang || !vertical || !first_name || !phone || !email || !zip_code) {
      return new Response("Missing required fields", { status: 400 });
    }

    const normalizedPhone = normalizePhone(phone);

    if (normalizedPhone.length < 10) {
      return new Response("Invalid phone number", { status: 400 });
    }

    const page_url = request.headers.get("referer") || "";
    const user_agent = request.headers.get("user-agent") || "";
    const ip_address = clientAddress || "";

    const routing = pickDestination(vertical);

    // Basic lead quality flags for future routing decisions
    const isHomeowner = homeowner === "yes";
    const hasConsent = consent === "yes";

    let delivery_status = "pending";
    let sent_at: string | null = null;
    let response_payload: Record<string, unknown> | null = null;
    let error_message: string | null = null;

    // Phase 1:
    // Save first. Buyer posting can be added later once endpoint details are ready.
    // For now this stays pending unless you choose to pre-mark internal-only rows.
    if (!hasConsent) {
      delivery_status = "failed";
      error_message = "Missing consent";
    } else if (!isHomeowner && vertical === "solar") {
      delivery_status = "pending_review";
      error_message = "Solar lead not marked as homeowner";
    }

    const insertPayload = {
      lang,
      vertical,
      first_name,
      last_name: last_name || null,
      phone: normalizedPhone,
      email,
      zip_code,
      homeowner: homeowner || null,
      property_type: property_type || null,
      monthly_bill: monthly_bill || null,
      service_type: service_type || null,
      message: message || null,
      consent,
      source: "website",
      status: "new",
      page_url,
      user_agent,
      ip_address,
      destination: routing.destination,
      buyer: routing.buyer,
      sent_at,
      delivery_status,
      response_payload,
      error_message
    };

    const { error } = await supabase.from("quote_requests").insert(insertPayload);

    if (error) {
      console.error("QUOTE REQUEST INSERT ERROR:", error, insertPayload);
      return new Response("Failed to save request", { status: 500 });
    }

    return redirect(`/${lang}/${vertical}/quote/thank-you/`, 302);
  } catch (err) {
    console.error("QUOTE REQUEST API ERROR:", err);
    return new Response("Server error", { status: 500 });
  }
};