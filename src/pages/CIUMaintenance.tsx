import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Cpu, Phone, CheckCircle, AlertCircle, Wrench, Settings, Building2 } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import commercialHvac from "@/assets/commercial-hvac.jpg";

const faqs = [
  { q: "What is a CIU (Chilled Interface Unit)?", a: "A Chilled Interface Unit connects a property to a communal chilled water network, providing cooling without individual AC units. Common in modern commercial buildings and mixed-use developments." },
  { q: "How often should a CIU be serviced?", a: "Annually as a minimum. CIUs in high-use commercial buildings benefit from bi-annual inspections to maintain zone control accuracy and prevent failures during peak summer demand." },
  { q: "What's the difference between a CIU and HIU?", a: "An HIU (Heat Interface Unit) provides heating and hot water from a district heat network. A CIU provides chilled water for cooling. Many modern buildings have both — we service them as part of the same visit." },
  { q: "What happens if a CIU isn't maintained?", a: "Poor maintenance leads to zone control failures, temperature inconsistency across the building, energy waste from inefficient valve operation and eventual component failure." },
  { q: "Do you service CIUs across all makes?", a: "Yes. We service CIUs across all major brands and building types, including mixed-use residential and commercial developments." },
  { q: "Can you provide emergency CIU repair?", a: "Yes. We offer 24/7 emergency cover with response within 4 hours. A failed CIU in summer can make an entire building uninhabitable — we treat it as a priority." },
];

const CIUMaintenance = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need CIU maintenance or repair. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="CIU Maintenance London | Chilled Interface Unit Service & Repair | Mainteniq"
        description="Professional CIU servicing and repair for commercial buildings and mixed-use developments across London. Zone control maintenance, annual contracts and 24/7 emergency response."
        keywords="CIU maintenance London, chilled interface unit service, CIU repair London, chilled water system maintenance, zone control maintenance London, district cooling maintenance London"
        canonicalUrl="https://www.mainteniq.co.uk/ciu-maintenance"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "CIU Maintenance", url: "https://www.mainteniq.co.uk/ciu-maintenance" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${commercialHvac})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Zones out of control. Cooling not working.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              CIU issues, solved fast.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Chilled Interface Unit servicing, calibration and repair for commercial buildings and mixed-use developments across London. All makes, 24/7 emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["All Makes Serviced", "Zone Control Specialists", "Annual Contracts", "24/7 Emergency", "London & 120 Miles"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">What our CIU service includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {["Flow and return temperature checks", "Valve operation and calibration", "Strainer inspection and cleaning", "Zone control accuracy test", "Pressure and flow rate measurement", "Controls and sensor check", "Legionella risk assessment point check", "Written service report"].map(item => (
              <div key={item} className="flex items-start gap-2.5 bg-slate-50 rounded-lg border px-4 py-3">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Settings, title: "Zone control calibration", desc: "Accurate zone-by-zone temperature control across floors and areas." },
              { icon: AlertCircle, title: "Fault diagnosis", desc: "Trained engineers diagnose and resolve CIU faults across all brands." },
              { icon: Building2, title: "Block and estate servicing", desc: "Coordinated visits for multiple units to minimise disruption." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl border p-5">
                <div className="w-9 h-9 bg-cyan-50 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-cyan-600" /></div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Book a CIU service</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us your building type and the number of units — we'll arrange a coordinated visit.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CIUMaintenance;
