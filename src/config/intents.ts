// src/config/intents.ts

export const INTENT_CONFIG = {
  // === LIVE AT LAUNCH ===
  'emergency-plumbing': {
    label: 'Emergency Plumbing',
    phone: 'tel:+18885550101',
    ringbaTag: 'EP_MAIN',
    ctaEnabled: false,
  },

  'sewer-backup': {
    label: 'Sewer Backup',
    phone: 'tel:+18885550202',
    ringbaTag: 'SEWER_MAIN',
    ctaEnabled: false,
  },

  'burst-pipe': {
    label: 'Burst Pipe Repair',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },

  'no-hot-water': {
    label: 'No Hot Water',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },

  // === FUTURE LEVERS (LOCKED) ===
  'water-heater-repair': {
    label: 'Water Heater Repair',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },

  'drain-cleaning': {
    label: 'Drain Cleaning',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },

  'gas-line-repair': {
    label: 'Gas Line Repair',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },

  'hvac-emergency': {
    label: 'Emergency HVAC',
    phone: null,
    ringbaTag: null,
    ctaEnabled: false,
  },
} as const;

export type IntentKey = keyof typeof INTENT_CONFIG;