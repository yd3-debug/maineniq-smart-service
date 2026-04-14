import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  Wind, Thermometer, Cpu, Flame, Snowflake, Wrench,
  Droplets, Zap, Home, Building2, Phone, CheckCircle, ArrowRight,
} from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import mvhrInstallation from "@/assets/mvhr-installation.jpg";
import fcuInstallation from "@/assets/fcu-installation.jpg";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import hiuInstallation from "@/assets/hiu-installation.jpg";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import handymanRepair from "@/assets/handyman-repair.jpg";
import hvacProfessional from "@/assets/hvac-professional.jpg";

const faqData = generateFAQSchema([
  { question: "What property maintenance services does Mainteniq offer?", answer: "We cover HVAC maintenance (FCU, HIU, MVHR, CIU, boilers, air conditioning), plumbing, electrical, Gas Safe and NICEIC certified work, handyman services, BMS, smart home installation and full property renovation — across London and within 120 miles." },
  { question: "Do you provide emergency property maintenance in London?", answer: "Yes. We provide 24/7 emergency cover with response within 4 hours across London. Our engineers are directly employed and carry common parts on every visit — most issues resolved in a single call-out." },
  { question: "Can you manage maintenance across multiple properties?", answer: "Yes. Many of our clients are landlords and letting agents with portfolios of 5–50+ properties. We offer maintenance contracts covering multiple properties under one agreement, with a single point of contact and consolidated reporting." },
  { question: "Are your engineers Gas Safe and NICEIC certified?", answer: "Yes. All gas work is carried out by Gas Safe registered engineers — verifiable at gassaferegister.co.uk. All electrical work is by NICEIC approved contractors. We are also F-Gas certified and TM44 approved for commercial air conditioning inspections." },
  { question: "Do you issue CP12 and EICR certificates?", answer: "Yes. We issue CP12 Gas Safety Certificates (required annually for all rental properties) and EICR Electrical Installation Condition Reports (required every 5 years). Certificates are issued on the day. We can also manage renewal scheduling across a portfolio." },
  { question: "What areas do you cover for property maintenance?", answer: "All London boroughs and within 120 miles of the M25 — including Kent, Surrey, Essex, Hertfordshire, Buckinghamshire, Berkshire, Oxford, Cambridge and Birmingham. Contact us to confirm coverage for your specific location." },
]);

const breadcrumbData = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.mainteniq.co.uk/" },
  { name: "Services", url: "https://www.mainteniq.co.uk/services" },
]);

const hvacServices = [
  { icon: Wind, title: "FCU Maintenance", desc: "Fan Coil Unit cleaning, servicing and repair for residential and commercial buildings.", href: "/fcu-maintenance", img: fcuInstallation, popular: true },
  { icon: Thermometer, title: "HIU & CIU Service", desc: "Heat Interface Unit and district heating maintenance — installation, repair and annual contracts.", href: "/hiu-maintenance", img: hiuInstallation, popular: true },
  { icon: Wind, title: "MVHR Maintenance", desc: "Mechanical ventilation with heat recovery — filter changes, airflow balancing and full system reports.", href: "/mvhr-maintenance", img: mvhrInstallation },
  { icon: Flame, title: "Boiler Services", desc: "Gas Safe boiler servicing, repair, installation and CP12 landlord certificates.", href: "/boiler-services", img: hvacProfessional, popular: true },
  { icon: Snowflake, title: "Air Conditioning London", desc: "F-Gas certified AC installation, servicing and TM44 compliance inspections.", href: "/air-conditioning-london", popular: true },
  { icon: Cpu, title: "BMS Services", desc: "Building Management System installation, optimization and ongoing maintenance.", href: "/bms", img: bmsControlRoom },
];

const propertyServices = [
  { icon: Droplets, title: "Plumbing & Electrical", desc: "Leak repairs, installations, rewiring, consumer units and EICR certificates.", href: "/plumber-electrician", img: plumberElectricianWork },
  { icon: Wrench, title: "Handyman", desc: "General repairs, carpentry, decorating, assembly and property upkeep.", href: "/handyman", img: handymanRepair },
  { icon: Zap, title: "Smart Home", desc: "Smart thermostats, lighting, security systems and full home automation.", href: "/smart-home", img: smartHomeAutomation },
  { icon: Home, title: "Renovation", desc: "Full flat refurbishments, kitchens, bathrooms and commercial fit-outs.", href: "/renovation-composer" },
  { icon: Building2, title: "Maintenance Contracts", desc: "Planned preventative maintenance for landlords, letting agents and facilities managers.", href: "/maintenance-contracts" },
];

const Services = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I'd like to find out more about your property maintenance services.";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Property Maintenance Services London | HVAC, Plumbing, Electrical | Mainteniq"
        description="Complete property maintenance services for landlords and property managers across London. HVAC, boilers, FCU, HIU, MVHR, plumbing, electrical, handyman and renovation. Gas Safe & NICEIC certified."
        keywords="property maintenance services London, HVAC maintenance London, boiler service London, FCU maintenance, HIU service, MVHR cleaning, plumbing London, electrician London, handyman London, property renovation London"
        canonicalUrl="https://www.mainteniq.co.uk/services"
        structuredData={faqData}
        breadcrumbData={breadcrumbData}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Landlords, agents and property managers.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              One team handles everything.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            HVAC, boilers, plumbing, electrical, handyman and renovation — Gas Safe, NICEIC and F-Gas certified. Serving London and 120 miles.
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
            {["Gas Safe Registered", "NICEIC Approved", "F-Gas Certified", "TM44 Inspections", "24/7 Emergency", "120-Mile Coverage"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC & Specialist */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">HVAC & Specialist</span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2">HVAC & building systems</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">The specialist systems that keep buildings comfortable and compliant — maintained by certified engineers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hvacServices.map((s) => (
              <Link key={s.title} to={s.href}>
                <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full relative">
                  {s.popular && <div className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">Popular</div>}
                  {s.img && (
                    <div className="overflow-hidden rounded-t-lg">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <CardContent className="p-5">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <span className="text-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3" /></span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Property Services */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Property Services</span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2">Everything else your property needs</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Plumbing, electrical, handyman, smart home and renovation — all from one trusted team.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {propertyServices.map((s) => (
              <Link key={s.title} to={s.href}>
                <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                  {s.img && (
                    <div className="overflow-hidden rounded-t-lg">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <CardContent className="p-5">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <span className="text-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3" /></span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: "What property maintenance services do you offer?", a: "We cover HVAC maintenance (FCU, HIU, MVHR, CIU, boilers, air conditioning), plumbing, electrical, Gas Safe and NICEIC certified work, handyman services, BMS, smart home installation and full property renovation — across London and within 120 miles." },
              { q: "Do you offer emergency property maintenance?", a: "Yes. We provide 24/7 emergency cover with response within 4 hours. Our engineers are directly employed and carry common parts on every visit — most issues resolved in a single call-out." },
              { q: "Can you manage maintenance across multiple properties?", a: "Yes. Many of our clients are landlords and letting agents with portfolios of 5–50+ properties. We offer maintenance contracts covering multiple properties under one agreement, with a single point of contact and consolidated reporting." },
              { q: "Are your engineers Gas Safe and NICEIC certified?", a: "Yes. All gas work is carried out by Gas Safe registered engineers — verifiable at gassaferegister.co.uk. All electrical work is by NICEIC approved contractors. We are also F-Gas certified for AC and refrigeration work, and TM44 approved for commercial air conditioning inspections." },
              { q: "Do you issue CP12 and EICR certificates?", a: "Yes. We issue CP12 Gas Safety Certificates (required annually for all rental properties) and EICR Electrical Installation Condition Reports (required every 5 years). Certificates are issued on the day. We can also manage renewal scheduling across a portfolio." },
              { q: "What areas do you cover?", a: "All London boroughs and within 120 miles of the M25 — including Kent, Surrey, Essex, Hertfordshire, Buckinghamshire, Berkshire, Oxford, Cambridge and Birmingham. Contact us to confirm coverage for your specific location." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-xl border px-6 py-5">
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Not sure which service you need?</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">WhatsApp or call us and describe the issue. We'll tell you exactly what's needed — no jargon, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}>
              <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
            </Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2">
              <a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
