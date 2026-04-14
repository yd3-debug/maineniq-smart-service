import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  Wind, Thermometer, Filter, Building2, Snowflake, Flame,
  Phone, CheckCircle, ArrowRight, AlertCircle, Clock, Wrench, Award,
} from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import heroImage from "@/assets/hero-hvac.jpg";
import hvacInstallation from "@/assets/hvac-installation.jpg";
import hvacMaintenance from "@/assets/hvac-maintenance.jpg";

const faqs = [
  { q: "How often should HVAC systems be serviced?", a: "Commercial HVAC systems should be serviced quarterly, residential systems at least annually. High-use environments may need monthly checks. We'll advise the right frequency for your setup — contact us for a free assessment." },
  { q: "Is HVAC maintenance a legal requirement for UK businesses?", a: "Yes. Commercial buildings must comply with TM44 air conditioning inspections, F-Gas regulations for refrigerant handling, and health and safety legislation including Legionella risk assessments." },
  { q: "What systems do you maintain?", a: "FCU (Fan Coil Units), HIU (Heat Interface Units), MVHR (Mechanical Ventilation with Heat Recovery), CIU (Chilled Interface Units), VRF/VRV systems, split system AC, boilers and commercial plant." },
  { q: "What does HVAC maintenance include?", a: "Filter replacement, coil cleaning, refrigerant checks, electrical inspections, control calibration, safety testing, airflow balancing and a written report on system condition." },
  { q: "Do you cover London and surrounding areas?", a: "Yes. We cover all of London and a 120-mile radius including Essex, Kent, Surrey, Hertfordshire, Buckinghamshire, Birmingham, Oxford, Cambridge, Brighton and Reading." },
];

const systems = [
  { icon: Wind, title: "FCU — Fan Coil Units", desc: "Residential and commercial fan coil units serviced, cleaned and repaired.", href: "/fcu-maintenance" },
  { icon: Thermometer, title: "HIU — Heat Interface Units", desc: "District heating connection units maintained and repaired.", href: "/hiu-maintenance" },
  { icon: Filter, title: "MVHR — Mechanical Ventilation", desc: "Heat recovery ventilation systems cleaned, balanced and certified.", href: "/mvhr-maintenance" },
  { icon: Building2, title: "CIU — Chilled Interface Units", desc: "Zone control and chilled interface systems serviced.", href: "/ciu-maintenance" },
  { icon: Snowflake, title: "Air Conditioning", desc: "F-Gas certified AC installation, servicing and TM44 inspections.", href: "/air-conditioning-london" },
  { icon: Flame, title: "Boiler Services", desc: "Gas Safe boiler servicing, repair and CP12 certificates.", href: "/boiler-services" },
];

const signs = [
  { icon: Thermometer, title: "Uneven temperatures", desc: "Some rooms too warm, others too cold — usually a balancing or coil issue." },
  { icon: AlertCircle, title: "Unusual noises", desc: "Rattling, buzzing or grinding from units or ductwork — often a component issue caught early." },
  { icon: Clock, title: "Higher energy bills", desc: "Dirty or poorly calibrated systems use significantly more energy than they should." },
  { icon: Wrench, title: "System hasn't been serviced", desc: "If you can't remember the last service date, it's overdue. Unmaintained systems fail faster." },
];

const HVACMaintenance = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need HVAC maintenance for my property. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="HVAC Maintenance London | FCU, HIU, MVHR, CIU | Gas Safe & F-Gas | Mainteniq"
        description="Professional HVAC maintenance for landlords and property managers across London. FCU, HIU, MVHR, CIU, VRF systems. TM44 certified, F-Gas licensed. 24/7 emergency response."
        keywords="HVAC maintenance London, FCU maintenance London, HIU service London, MVHR cleaning London, CIU maintenance, VRF system maintenance, TM44 inspection London, commercial HVAC London, landlord HVAC maintenance"
        canonicalUrl="https://www.mainteniq.co.uk/hvac-maintenance"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "HVAC Maintenance", url: "https://www.mainteniq.co.uk/hvac-maintenance" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your HVAC failed when it mattered most.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              We make sure it doesn't happen again.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            FCU, HIU, MVHR, CIU, VRF and boilers — specialist maintenance for every system in your building. TM44 certified, F-Gas licensed, Gas Safe registered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}>
              <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
            </Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2">
              <a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8">
            {["TM44 Certified", "F-Gas Licensed", "Gas Safe Registered", "24/7 Emergency", "120-Mile Coverage"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answer — AI Overview target */}
      <section className="py-8 bg-blue-50 border-y">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl border border-blue-100 p-5 md:p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold mb-2">HVAC Maintenance in London — Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Mainteniq provides specialist HVAC maintenance for FCU, HIU, MVHR, CIU and VRF systems across London and within 120 miles. Our engineers are TM44 certified, F-Gas licensed and Gas Safe registered. We cover residential blocks, commercial buildings and mixed-use properties for landlords, facilities managers and property management companies. Contact us for a free site assessment and tailored maintenance programme.</p>
          </div>
        </div>
      </section>

      {/* Systems we cover */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Systems we maintain and repair</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Every specialist system in your building — one team, fully certified across all types.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map((s) => (
              <Link key={s.title} to={s.href}>
                <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <CardContent className="p-5">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <span className="text-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">View service <ArrowRight className="w-3 h-3" /></span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signs you need service */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Signs your HVAC needs attention</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Catch issues early — before they become expensive emergencies or compliance failures.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {signs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-orange-500" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">What our HVAC service includes</h2>
              <ul className="space-y-3">
                {["Filter replacement and coil cleaning", "Refrigerant levels check (F-Gas compliant)", "Electrical safety inspection", "Control system calibration", "Airflow measurement and balancing", "Condensate drain clearance", "Written condition report", "TM44 inspection and certificate (where applicable)"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />WhatsApp Us</Button>
                <Button variant="outline" asChild><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-4 h-4 mr-2" />{CONTACT.phones.emergency}</a></Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={hvacMaintenance} alt="HVAC maintenance engineer at work in London" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Mainteniq */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Why property managers choose Mainteniq</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: Award, title: "Multi-certified engineers", body: "TM44, F-Gas, Gas Safe and NICEIC — all the credentials your building requires, under one roof." },
              { icon: Clock, title: "4-hour emergency response", body: "24/7 cover across London. Contract clients get guaranteed priority response." },
              { icon: Wrench, title: "Directly employed team", body: "Not subcontractors. Our engineers are vetted, trained and take ownership of every job." },
              { icon: CheckCircle, title: "Full compliance documentation", body: "Every service produces a written report and any required compliance certificates." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-xl border px-6 py-5">
                <h3 className="font-semibold text-sm mb-2">{q}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6"><Link to="/faq"><Button variant="outline" size="sm">View all FAQs <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button></Link></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold mb-3">Book an HVAC assessment</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us what systems you have and we'll put together a maintenance programme that fits your building and budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HVACMaintenance;
