export const VERTICALS = {
  plumbing: {
    label: "Emergency Plumbing",
    intents: ["emergency", "burst-pipe", "no-hot-water", "sewer-backup"],
    primaryIntent: "emergency",
  },
  hvac: {
    label: "Emergency HVAC",
    intents: ["emergency", "ac-repair", "heating-repair"],
    primaryIntent: "emergency",
  },
  electrical: {
    label: "Emergency Electrical",
    intents: ["emergency", "power-outage"],
    primaryIntent: "emergency",
  },
};