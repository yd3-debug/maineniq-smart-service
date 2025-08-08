export type EvidenceItem = {
  id: string;
  title: string;
  url: string;
  claim: string;
  range?: string;
  lastReviewed: string;
};

export const EVIDENCE: Record<string, EvidenceItem> = {
  hvac_maintenance_savings: {
    id: "hvac_maintenance_savings",
    title: "U.S. DOE – Preventive HVAC Maintenance Benefits",
    url: "https://www.energy.gov/eere/buildings/heating-ventilation-and-air-conditioning",
    claim:
      "Regular HVAC maintenance can reduce energy consumption by 5-15% and extend equipment lifespan by up to 50%.",
    range: "5-15%",
    lastReviewed: "2025-08-08",
  },
  ciu_maintenance_benefits: {
    id: "ciu_maintenance_benefits",
    title: "CIBSE – Central Interface Unit Maintenance Standards",
    url: "https://www.cibse.org/knowledge/knowledge-items/detail?id=a0q20000008I74AAAS",
    claim:
      "Regular CIU maintenance prevents hydraulic imbalance and maintains optimal heat distribution efficiency across multi-zone systems.",
    range: "10-20%",
    lastReviewed: "2025-08-08",
  },
  commercial_downtime_prevention: {
    id: "commercial_downtime_prevention",
    title: "ASHRAE – Commercial HVAC Maintenance Standards",
    url: "https://www.ashrae.org/technical-resources/standards-and-guidelines",
    claim:
      "Preventive maintenance reduces unexpected HVAC breakdowns by 70-80% and prevents costly emergency repairs.",
    range: "70-80%",
    lastReviewed: "2025-08-08",
  },
  fcu_maintenance_efficiency: {
    id: "fcu_maintenance_efficiency",
    title: "BSRIA – Fan Coil Unit Performance Guidelines",
    url: "https://www.bsria.com/technical/commercial-hvac/fan-coil-units",
    claim:
      "Regular FCU maintenance including coil cleaning and filter replacement can improve efficiency by 10-25%.",
    range: "10-25%",
    lastReviewed: "2025-08-08",
  },
  hiu_service_benefits: {
    id: "hiu_service_benefits",
    title: "CIBSE – Heat Interface Unit Maintenance Guide",
    url: "https://www.cibse.org/knowledge/knowledge-items/detail?id=a0q20000008I73gAAC",
    claim:
      "Annual HIU servicing maintains optimal heat transfer efficiency and prevents scale buildup that reduces performance by 15-30%.",
    range: "15-30%",
    lastReviewed: "2025-08-08",
  },
  mvhr_filter_performance: {
    id: "mvhr_filter_performance",
    title: "Building Research Establishment – MVHR System Efficiency",
    url: "https://www.bre.co.uk/filelibrary/pdf/rpts/hvac/BR_472_MVHR_systems.pdf",
    claim:
      "Dirty MVHR filters can reduce heat recovery efficiency from 90% to 60%. Regular filter changes maintain optimal performance.",
    range: "60-90%",
    lastReviewed: "2025-08-08",
  },
  ac_maintenance_lifespan: {
    id: "ac_maintenance_lifespan",
    title: "Institute of Refrigeration – Air Conditioning Maintenance",
    url: "https://www.ior.org.uk/technical-papers",
    claim:
      "Proper air conditioning maintenance can extend system lifespan from 8-12 years to 15-20 years while maintaining efficiency.",
    range: "15-20 years",
    lastReviewed: "2025-08-08",
  },
  commercial_maintenance_roi: {
    id: "commercial_maintenance_roi",
    title: "BOMA – Building Operating Management Association",
    url: "https://www.boma.org/research-resources/",
    claim:
      "Every £1 spent on preventive HVAC maintenance saves £3-5 in emergency repairs and energy costs for commercial properties.",
    range: "£3-5 ROI",
    lastReviewed: "2025-08-08",
  },
};
