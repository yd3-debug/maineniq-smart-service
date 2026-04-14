import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Shield, Phone, CheckCircle, ArrowRight, Clock, Award, Wrench, Building2, X, AlertTriangle } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";

const faqs = [
  { q: "What's included in a Mainteniq maintenance contract?", a: "Scheduled preventive maintenance visits, priority emergency response, written service reports and compliance certificates. We tailor every contract to the specific systems in your property." },
  { q: "Can I cover multiple properties under one contract?", a: "Yes. Many of our clients are portfolio landlords and letting agents. We can manage maintenance across multiple properties under a single agreement with one point of contact." },
  { q: "What's the emergency response time for contract clients?", a: "Contract clients receive guaranteed priority response within 4 hours, 24/7. You also get direct access to our engineering team — no call centres, no delays." },
  { q: "What systems can be covered?", a: "HVAC (FCU, HIU, MVHR, CIU), boilers, plumbing, electrical, air conditioning and general building maintenance — all under one contract." },
  { q: "How do I get started?", a: "WhatsApp or call us to describe your property and systems. We'll carry out a free site assessment and produce a tailored proposal." },
];

const systems = [
  "FCU (Fan Coil Units)", "HIU (Heat Interface Units)", "MVHR Systems", "CIU (Chilled Interface Units)",
  "Air Conditioning", "Boilers & Heating", "Plumbing", "Electrical Systems", "BMS Controls",
];

const MaintenanceContracts = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I'm interested in a maintenance contract for my property. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Property Maintenance Contracts London | PPM for Landlords | Mainteniq"
        description="Planned preventative maintenance contracts for landlords, property managers and facilities teams across London. HVAC, boilers, plumbing, electrical. Priority emergency response included."
        keywords="maintenance contracts London, planned preventative maintenance London, PPM contracts landlord, property maintenance contract London, HVAC maintenance contract London, landlord maintenance plan"
        canonicalUrl="https://www.mainteniq.co.uk/maintenance-contracts"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Maintenance Contracts", url: "https://www.mainteniq.co.uk/maintenance-contracts" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            The landlords who never worry about breakdowns
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              all have one thing in common.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            A Mainteniq maintenance contract. Scheduled servicing, priority emergency response and complete compliance — for one fixed arrangement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />Get a Contract Quote</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Tailored to Your Property", "Priority Emergency Response", "All Systems Covered", "Portfolio-Wide Available", "Compliance Included"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactive vs Planned */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Reactive vs planned maintenance</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">The difference between a stressful portfolio and a smooth one comes down to when you act — before or after things break.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="border-l-4 border-l-destructive bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-destructive font-semibold text-sm mb-4"><AlertTriangle className="w-4 h-4" />Without a contract</div>
                <ul className="space-y-3">
                  {["Unexpected bills with no budget or warning", "Tenant complaints escalating to formal disputes", "Emergency call-out premiums on top of repair costs", "Equipment failing years before it should", "Compliance certificates missed or expired"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm"><X className="w-3.5 h-3.5 text-destructive mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4"><CheckCircle className="w-4 h-4" />With a Mainteniq contract</div>
                <ul className="space-y-3">
                  {["Predictable costs — no surprises", "Issues caught before tenants notice them", "Priority emergency response 24/7", "Systems that last significantly longer", "Full compliance documentation, on time"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Systems we cover under contract</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Every system in your building — one contract, one team, one invoice.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {systems.map(s => (
              <div key={s} className="flex items-center gap-2 bg-white rounded-full border px-4 py-2 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />{s}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, title: "Scheduled visits", desc: "Agreed service dates so you can plan access and notify tenants." },
              { icon: Shield, title: "Priority response", desc: "Contract clients jump the queue — 4hr emergency response guaranteed." },
              { icon: Award, title: "Compliance covered", desc: "Gas Safe, NICEIC, TM44 and F-Gas certificates included." },
              { icon: Wrench, title: "One point of contact", desc: "Your dedicated contact who knows your property and systems." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-5 text-center">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3"><Icon className="w-4 h-4 text-primary" /></div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Who our contracts are built for</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: "Portfolio landlords", desc: "Multiple properties, multiple systems — one contract that covers everything. We manage the schedule so you don't have to." },
              { icon: Award, title: "Letting agents", desc: "Offer your clients a fully maintained property as part of your service. We provide the engineers, you provide the peace of mind." },
              { icon: Wrench, title: "Facilities managers", desc: "Commercial buildings, mixed-use developments and residential blocks — tailored PPM programmes with full reporting." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl border p-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-primary" /></div>
                <h3 className="font-semibold text-base mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Get a contract tailored to your property</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us about your property and systems. We'll carry out a free site assessment and produce a clear proposal.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaintenanceContracts;
