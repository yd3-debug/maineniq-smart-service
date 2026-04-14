import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Cpu, BarChart3, Settings, Shield, Phone, CheckCircle, Zap, Clock, Building2 } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import bmsControlPanel from "@/assets/bms-control-panel.jpg";

const faqs = [
  { q: "What is a Building Management System (BMS)?", a: "A BMS is a computer-based control system that monitors and manages a building's mechanical and electrical equipment — HVAC, lighting, power systems, fire systems and security. It's the central nervous system of a modern building." },
  { q: "How often should a BMS be serviced?", a: "BMS systems benefit from quarterly preventive checks and a comprehensive annual review. Critical commercial systems may require monthly calibration to maintain accuracy and performance." },
  { q: "What BMS brands do you service?", a: "We service all major platforms — Trend, Siemens, Honeywell, Johnson Controls, Schneider Electric and Tridium. Our engineers are multi-platform trained and work across makes and generations." },
  { q: "Can BMS optimisation save money on energy?", a: "Yes. Proper BMS optimisation typically reduces energy costs by 15–30%. We identify inefficient control strategies, recalibrate sensors and refine scheduling to deliver measurable savings." },
  { q: "What does BMS maintenance include?", a: "Control strategy review, setpoint optimisation, scheduling adjustments, sensor calibration, trending analysis, fault diagnosis and a written performance report. We document everything so you have a clear record." },
  { q: "Do you offer emergency BMS support?", a: "Yes. BMS failures can affect heating, cooling, lighting and access across an entire building. We offer 24/7 emergency response within 4 hours for contract clients." },
];

const whatWeDoItems = [
  "Controller and panel inspection",
  "Sensor calibration and accuracy check",
  "Control sequence and setpoint review",
  "Scheduling optimisation",
  "Alarm and fault log review",
  "Network and comms health check",
  "Energy performance trending",
  "Written service report",
];

const BMS = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need BMS maintenance or optimisation. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="BMS Maintenance London | Building Management System for Facilities Managers | Mainteniq"
        description="Expert BMS maintenance and optimisation for facilities managers and building owners across London. Trend, Siemens, Honeywell and all major platforms. Reduce energy costs by 15–30%. 24/7 support."
        keywords="BMS maintenance London, building management system London, facilities manager BMS London, BMS optimisation London, Trend BMS service London, Siemens BMS London, Honeywell BMS London, building controls maintenance London, HVAC controls London, building manager BMS London, commercial building BMS London"
        canonicalUrl="https://www.mainteniq.co.uk/bms"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "BMS Maintenance", url: "https://www.mainteniq.co.uk/bms" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${bmsControlRoom})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your BMS controls everything in the building.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              We keep it accurate, efficient and reliable.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            BMS maintenance and optimisation for facilities managers, building owners and commercial property managers across London. All platforms. Calibration, control sequence review, energy trending and 24/7 emergency support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["All Major Platforms", "Sensor Calibration", "Energy Optimisation", "Annual Contracts", "24/7 Emergency"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">What our BMS service includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {whatWeDoItems.map(item => (
              <div key={item} className="flex items-start gap-2.5 bg-slate-50 rounded-lg border px-4 py-3">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: BarChart3, title: "Energy trending", desc: "Identify consumption patterns and flag inefficiencies before they become costly." },
              { icon: Settings, title: "Control optimisation", desc: "Refine setpoints, sequences and schedules to match actual building usage." },
              { icon: Building2, title: "Multi-site management", desc: "Coordinated maintenance across multiple buildings under one contract." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl border p-5">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-slate-600" /></div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms + benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Multi-platform expertise</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">We service BMS across all major manufacturers without being tied to a single brand. Our engineers carry multi-platform certification and understand the nuances of each system — from legacy Trend controllers to modern Tridium JACE platforms.</p>
              <ul className="space-y-3 mb-6">
                {["Trend Controls", "Siemens Desigo", "Honeywell EBI", "Johnson Controls Metasys", "Schneider Electric EcoStruxure", "Tridium JACE / Niagara"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a BMS Service</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={bmsControlPanel} alt="BMS control panel in a commercial building" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">What happens when BMS is neglected</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Energy waste", desc: "Miscalibrated sensors and outdated schedules cause systems to run when they shouldn't — wasting thousands annually." },
              { icon: Clock, title: "Unexpected failures", desc: "Unserviced controllers develop faults that cascade into full system outages, affecting tenants and operations." },
              { icon: Shield, title: "Compliance gaps", desc: "Poorly documented BMS maintenance can expose you to compliance failures during audits and inspections." },
              { icon: Cpu, title: "Shortened equipment life", desc: "Incorrect control sequences force plant to work harder than necessary, reducing lifespan significantly." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-orange-500" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border px-6 py-5">
                <h3 className="font-semibold text-sm mb-2">{q}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold mb-3">Book a BMS assessment</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us your platform and building type — we'll arrange a site visit and service proposal.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BMS;
