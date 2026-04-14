import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Shield, Phone, CheckCircle, Award, Clock, Users, Wrench, Star, Zap, Building2 } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema } from "@/utils/structuredData";
import heroHvac from "@/assets/hero-hvac.jpg";
import modernEquipment from "@/assets/modern-equipment.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";

const stats = [
  { icon: Users, label: "Properties served", value: "1,000+" },
  { icon: Award, label: "Years in maintenance", value: "15+" },
  { icon: Wrench, label: "Assets maintained", value: "2,500+" },
  { icon: Star, label: "Customer rating", value: "4.9★" },
];

const certifications = [
  { icon: Shield, title: "Gas Safe registered", body: "Every gas engineer holds a valid Gas Safe registration — verifiable at gassaferegister.co.uk before they start work." },
  { icon: Award, title: "NICEIC approved", body: "All electrical work meets British Standards. We issue EICR, Part P and compliance documentation on completion." },
  { icon: Zap, title: "F-Gas certified", body: "Our refrigeration and air conditioning engineers are F-Gas certified to handle all refrigerant work legally and safely." },
  { icon: CheckCircle, title: "Fully insured", body: "Public liability insurance and professional indemnity on every job. We also carry employers' liability insurance." },
];

const faqs = [
  { q: "Are Mainteniq engineers directly employed?", a: "Yes. All engineers are directly employed, background-checked and fully insured. We don't use unvetted subcontractors — the same team services your property each time." },
  { q: "What certifications do your engineers hold?", a: "Gas Safe registration, NICEIC electrical certification, F-Gas certification, TM44 and manufacturer-specific training for MVHR, FCU, HIU and CIU systems." },
  { q: "What areas do you cover?", a: "London and up to 120 miles from the M25. We service residential blocks, commercial buildings and portfolio landlords across the South East." },
  { q: "Do you offer emergency cover?", a: "Yes. We respond to emergencies within 4 hours, 24/7. Contract clients get priority access directly to our engineering team — no call centres." },
];

const About = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I'd like to learn more about Mainteniq's services.";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="About Mainteniq | Gas Safe, NICEIC & F-Gas Engineers London"
        description="Mainteniq — Gas Safe, NICEIC and F-Gas certified engineers providing HVAC maintenance, plumbing, electrical and property services across London. 15+ years experience, 4.9★ rating."
        keywords="about Mainteniq, HVAC maintenance company London, property maintenance team London, Gas Safe plumber London, NICEIC electrician London, F-Gas engineers London"
        canonicalUrl="https://www.mainteniq.co.uk/about"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "About", url: "https://www.mainteniq.co.uk/about" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${heroHvac})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Engineers who turn up, do the job properly
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              and come back when you need them.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Mainteniq is a London-based property maintenance company specialising in HVAC, plumbing, electrical and building services. Gas Safe, NICEIC and F-Gas certified. 15 years in the trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-background border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-2xl mb-1">{value}</div>
                <p className="text-muted-foreground text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Property maintenance done right</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">We started Mainteniq because too many landlords were being let down by unreliable contractors. Engineers who didn't show up, work that needed redoing, certificates that arrived weeks late — or not at all.</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">We do things differently. All our engineers are directly employed, background checked and hold the relevant certifications for every type of work they carry out. We issue compliance certificates on the day. And we're reachable when something goes wrong.</p>
              <ul className="space-y-3 mb-6">
                {["Directly employed, vetted engineers", "Gas Safe, NICEIC, F-Gas and TM44 certified", "Compliance certificates issued same day", "One point of contact for everything", "London and up to 120 miles"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={modernEquipment} alt="Mainteniq engineer carrying out HVAC maintenance" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Certifications & accreditations</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Every certification we hold means you're covered — legally, practically and professionally.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={electricalInstallation} alt="Property maintenance work in a London building" className="w-full h-64 object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Who we work with</h2>
              <div className="space-y-4">
                {[
                  { icon: Building2, title: "Portfolio landlords", desc: "Multiple properties, single point of contact. We manage the schedule, track compliance and issue all certificates across your portfolio." },
                  { icon: Users, title: "Letting agents", desc: "We work as an extension of your team — fast turnarounds between tenancies, proactive maintenance and reliable communication." },
                  { icon: Clock, title: "Facilities managers", desc: "PPM contracts, reactive response and full reporting for commercial blocks and mixed-use buildings." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Icon className="w-4 h-4 text-primary" /></div>
                    <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Common questions</h2>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Work with a maintenance team you can trust</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">WhatsApp us or call — tell us about your property and we'll explain exactly how we can help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
