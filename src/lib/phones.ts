// src/lib/phones.ts
// Production-grade phone resolver for Ringba (or any call tracking)
// Works server-side in Astro. Keeps routing logic in ONE place.

export type IntentKey =
  | "plumbing-emergency"
  | "plumbing-burst-pipe"
  | "plumbing-no-hot-water"
  | "plumbing-sewer-backup"
  | "hvac-emergency"
  | "hvac-ac-repair"
  | "hvac-heating-repair"
  | "electrical-emergency"
  | "electrical-power-outage";

// ---- Helpers ----
function normalizePhone(phone: string): string {
  // Keep digits only (for tel: links); assumes US numbers.
  const digits = phone.replace(/\D/g, "");
  // If user puts 10 digits, keep it. If 11 starting with 1, keep 11.
  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits.startsWith("1")) return digits;
  // Allow whatever if non-standard (but still digits-only)
  return digits;
}

function env(name: string): string | null {
  // Astro build/server env access
  const v = (import.meta as any).env?.[name] ?? null;
  return typeof v === "string" && v.trim().length ? v.trim() : null;
}

// ---- Configuration ----
// 1) Defaults per vertical (fallback)
// 2) Overrides per intent (higher priority)

const DEFAULT_VERTICAL_PHONES: Record<string, string | null> = {
  plumbing: env("PUBLIC_PHONE_PLUMBING_DEFAULT"),
  hvac: env("PUBLIC_PHONE_HVAC_DEFAULT"),
  electrical: env("PUBLIC_PHONE_ELECTRICAL_DEFAULT"),
};

const INTENT_PHONE_OVERRIDES: Partial<Record<IntentKey, string | null>> = {
  // Plumbing intent overrides
  "plumbing-sewer-backup": env("PUBLIC_PHONE_PLUMBING_SEWER"),
  // You can override these too if you want separate lines:
  // "plumbing-burst-pipe": env("PUBLIC_PHONE_PLUMBING_BURST"),
  // "plumbing-no-hot-water": env("PUBLIC_PHONE_PLUMBING_NOHOTWATER"),

  // HVAC intent overrides (optional)
  // "hvac-ac-repair": env("PUBLIC_PHONE_HVAC_AC"),
  // "hvac-heating-repair": env("PUBLIC_PHONE_HVAC_HEAT"),

  // Electrical intent overrides (optional)
  // "electrical-power-outage": env("PUBLIC_PHONE_ELECTRICAL_OUTAGE"),
};

export type PhoneResolution = {
  phone: string | null;        // digits-only for tel:
  display: string | null;      // formatted for UI if desired
  source: "intent" | "vertical" | "none";
  reason?: string;
};

export function resolvePhone(intentKey: string): PhoneResolution {
  // intentKey examples:
  // "plumbing-emergency", "hvac-ac-repair", "electrical-power-outage"

  if (!intentKey || typeof intentKey !== "string") {
    return { phone: null, display: null, source: "none", reason: "Missing intentKey" };
  }

  const key = intentKey as IntentKey;
  const [vertical] = intentKey.split("-"); // plumbing / hvac / electrical

  // 1) Intent override
  const intentPhone = INTENT_PHONE_OVERRIDES[key];
  if (intentPhone) {
    const normalized = normalizePhone(intentPhone);
    return {
      phone: normalized,
      display: formatDisplayPhone(normalized),
      source: "intent",
    };
  }

  // 2) Vertical default
  const verticalPhone = DEFAULT_VERTICAL_PHONES[vertical] ?? null;
  if (verticalPhone) {
    const normalized = normalizePhone(verticalPhone);
    return {
      phone: normalized,
      display: formatDisplayPhone(normalized),
      source: "vertical",
    };
  }

  // 3) No phone configured (safe for “SEO-only bake mode”)
  return { phone: null, display: null, source: "none", reason: "No phone configured in env" };
}

export function formatDisplayPhone(digitsOnly: string): string {
  const d = digitsOnly.replace(/\D/g, "");
  // US formatting for 10-digit numbers
  if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  if (d.length === 11 && d.startsWith("1")) return `+1 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
  return digitsOnly;
}