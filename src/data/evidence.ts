export type EvidenceItem = {
  id: string;
  title: string;
  url: string;
  claim: string;
  range?: string;
  lastReviewed: string;
};

export const EVIDENCE: Record<string, EvidenceItem> = {
  energystar_qi_30: {
    id: "energystar_qi_30",
    title: "ENERGY STAR – HVAC Quality Installation",
    url: "https://www.energystar.gov/saveathome/heating-cooling/hvac-quality-installation",
    claim:
      "Improper HVAC installation can reduce performance by up to 30%. Ensuring quality installation helps avoid these losses.",
    range: "up to 30%",
    lastReviewed: "2025-08-08",
  },
  doe_thermostat_10: {
    id: "doe_thermostat_10",
    title: "U.S. DOE – Energy Saver: Programmable Thermostats",
    url: "https://www.energy.gov/energysaver/programmable-thermostats",
    claim:
      "Setting back your thermostat 7–10°F for 8 hours a day can save up to 10% a year on heating and cooling.",
    range: "~10%",
    lastReviewed: "2025-08-08",
  },
  merv13_efficiency: {
    id: "merv13_efficiency",
    title: "MERV 13 particle removal efficiency (reference table)",
    url: "https://www.rabbinicalassembly.org/sites/default/files/2020-08/HH_What_does_MERV_Rating_mean.pdf",
    claim:
      "MERV 13 filters typically capture ~50–75% of 0.3–1.0 µm particles, ≥85% for 1.0–3.0 µm, and ≥90% for 3.0–10 µm.",
    range: "50–75% (0.3–1.0 µm)",
    lastReviewed: "2025-08-08",
  },
};
