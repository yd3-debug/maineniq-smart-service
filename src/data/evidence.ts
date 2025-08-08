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
  commercial_energy_savings: {
    id: "commercial_energy_savings",
    title: "U.S. EPA – Commercial HVAC Energy Efficiency",
    url: "https://www.epa.gov/climateheatislands/heat-island-compendium",
    claim:
      "Commercial HVAC optimization can reduce energy consumption by 10-40% through proper maintenance, controls, and efficiency upgrades.",
    range: "10-40%",
    lastReviewed: "2025-08-08",
  },
  commercial_maintenance_costs: {
    id: "commercial_maintenance_costs",
    title: "BOMA – Building Operating Management Association",
    url: "https://www.boma.org/research-resources/",
    claim:
      "Preventive HVAC maintenance can reduce commercial building operating costs by 15-30% compared to reactive maintenance approaches.",
    range: "15-30%",
    lastReviewed: "2025-08-08",
  },
  commercial_productivity: {
    id: "commercial_productivity",
    title: "Harvard T.H. Chan School – Indoor Air Quality and Productivity",
    url: "https://www.hsph.harvard.edu/news/press-releases/green-office-environments-linked-with-higher-cognitive-function-scores/",
    claim:
      "Improved indoor air quality in commercial spaces can increase employee productivity by 6-16% through better cognitive function.",
    range: "6-16%",
    lastReviewed: "2025-08-08",
  },
};
