import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Shield, Zap, Clock, Wrench, Phone, CheckCircle, AlertTriangle, TrendingUp, Award } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import hvacProfessional from "@/assets/hvac-professional.jpg";
import modernSystem from "@/assets/modern-hvac-system.jpg";

const faqs = [
  { q: "Why use a professional HVAC engineer instead of a general handyman?", a: "HVAC systems — especially FCU, HIU, MVHR and boilers — require manufacturer-specific knowledge, calibration tools and in many cases legal certification (Gas Safe, F-Gas). A general handyman can't legally carry out gas or refrigerant work and is unlikely to have the diagnostic equipment or training to service these systems correctly." },
  { q: "What qualifications should an HVAC engineer hold?", a: "Gas Safe registration for any gas work. F-Gas certification for refrigerant handling. NICEIC or Part P approval for electrical work associated with HVAC systems. TM44 approval for air conditioning inspection certificates. Always ask to see registration before work starts." },
  { q: "How does regular HVAC maintenance save money?", a: "Well-maintained systems use 15–30% less energy. They also last significantly longer — a maintained FCU can run 20+ years, while a neglected one may fail in under 10. Emergency call-out and replacement costs dwarf the cost of annual servicing." },
  { q: "What's the difference between reactive and planned HVAC maintenance?", a: "Reactive maintenance means fixing things after they break — usually at the worst possible moment, at emergency call-out rates, with tenants complaining. Planned preventive maintenance catches issues before they become failures, reducing costs and keeping tenants happy." },
  { q: "Can poor HVAC maintenance affect a landlord's legal compliance?", a: "Yes. Landlords are legally required to have gas appliances inspected annually (CP12), electrical installations checked every 5 years (EICR), and air conditioning systems with refrigerant charges over 3kg inspected every 5 years (TM44). Missing any of these can result in fines, prosecution and invalidated landlord insurance." },
  { q: "How do I know if my HVAC system is being maintained properly?", a: "You should receive a written service report after each visit, documenting what was inspected, any faults found, readings taken and any recommended actions. If you're not receiving this, the maintenance isn't being done to a professional standard." },
];

const reasons = [
  { icon: Shield, title: "Legal compliance", desc: "Gas Safe, F-Gas and NICEIC certified engineers ensure every job is carried out to legal standards. We issue the certificates you need — CP12, EICR, TM44, F-Gas." },
  { icon: Zap, title: "Energy efficiency", desc: "Properly serviced HVAC systems use 15–30% less energy. That's a meaningful reduction in service charges and utility costs for you and your tenants." },
  { icon: Clock, title: "System longevity", desc: "A maintained FCU or HIU can last 20+ years. A neglected one may need replacing in under 10. Professional servicing is the cheapest form of asset protection." },
  { icon: Wrench, title: "Specialist tools and knowledge", desc: "Proper HVAC diagnostics require calibrated instruments and manufacturer-specific training. This isn't work that can be done with general tools or guesswork." },
  { icon: TrendingUp, title: "Early fault detection", desc: "Professional engineers spot deteriorating components, blocked filters, pressure issues and control faults before they cause a breakdown. Reactive repairs cost far more than prevention." },
  { icon: Award, title: "Written service records", desc: "Professional maintenance produces a written report after every visit. This creates an audit trail for compliance, insurance and asset management purposes." },
];

const WhyProfessionalHVAC = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I'd like to discuss professional HVAC maintenance for my property.";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Why Professional HVAC Maintenance Matters | Landlord Guide | Mainteniq"
        description="Why landlords and property managers need Gas Safe, NICEIC and F-Gas certified HVAC engineers. Legal requirements, energy savings, system longevity and compliance explained."
        keywords="professional HVAC maintenance London, why HVAC maintenance matters, HVAC engineer qualifications, Gas Safe HVAC London, landlord HVAC compliance, FCU HIU MVHR professional service"
        canonicalUrl="https://www.mainteniq.co.uk/why-professional-hvac"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Why Professional HVAC", url: "https://www.mainteniq.co.uk/why-professional-hvac" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${hvacProfessional})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            HVAC maintenance isn't optional.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              It's how you protect your asset.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Why landlords and property managers need certified, specialist engineers — not general handymen — for HVAC, boiler, plumbing and electrical maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>

      {/* Quick answer block — AI Overview bait */}
      <section className="py-10 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-lg font-bold mb-3">Why does professional HVAC maintenance matter?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Professional HVAC maintenance keeps systems legally compliant (Gas Safe, NICEIC, F-Gas, TM44), extends equipment life by up to twice as long, reduces energy consumption by 15–30%, and prevents costly emergency failures. For landlords, it's also a legal requirement — annual CP12 gas safety certificates and 5-yearly EICR electrical reports are mandatory for rental properties. Neglecting HVAC maintenance exposes landlords to fines, prosecution and invalidated insurance.</p>
        </div>
      </section>

      {/* Why professional */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Six reasons certified engineers matter</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border">
                <CardContent className="p-5">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-primary" /></div>
                  <h3 className="font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance requirements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Landlord legal requirements</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Property law in England requires landlords to meet specific maintenance and certification obligations. Missing any of these can result in fines of up to £30,000, prosecution and insurance invalidation.</p>
              <div className="space-y-4">
                {[
                  { cert: "CP12", desc: "Gas Safety Certificate — required every 12 months for all gas appliances in rental properties." },
                  { cert: "EICR", desc: "Electrical Installation Condition Report — required every 5 years for all rental properties." },
                  { cert: "TM44", desc: "Air conditioning inspection — required every 5 years for systems with a refrigerant charge over 3kg." },
                  { cert: "F-Gas", desc: "Refrigerant handling must be carried out by F-Gas certified engineers to comply with environmental regulations." },
                ].map(({ cert, desc }) => (
                  <div key={cert} className="flex gap-3">
                    <div className="w-12 h-6 bg-primary text-primary-foreground text-xs font-bold rounded flex items-center justify-center flex-shrink-0">{cert}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-6 bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book Certificates</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={modernSystem} alt="Modern HVAC system in a London property" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Reactive vs planned */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Reactive vs planned maintenance</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">The true cost of waiting for things to break.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="border-l-4 border-l-destructive bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-destructive font-semibold text-sm mb-4"><AlertTriangle className="w-4 h-4" />Reactive (waiting for failure)</div>
                <ul className="space-y-3">
                  {["Emergency call-out premium on top of repair cost", "Tenants complaining and threatening formal complaints", "Parts not in stock — days or weeks without heat or cooling", "Equipment replaced years before it should be", "Compliance certificates not in place when inspected"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive font-bold mt-0.5 flex-shrink-0">✕</span>{item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4"><CheckCircle className="w-4 h-4" />Planned preventive maintenance</div>
                <ul className="space-y-3">
                  {["Predictable costs — one fixed annual arrangement", "Faults caught before tenants notice them", "Systems running efficiently — lower service charges", "Equipment lasting its full designed lifespan", "Full compliance documentation, always current"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Get your property properly maintained</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us about your property and systems. We'll explain what needs servicing and when — and give you a clear quote.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyProfessionalHVAC;
