import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Wind, Phone, CheckCircle, AlertCircle, Clock, Filter } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import mvhrInstallation from "@/assets/mvhr-installation.jpg";

const faqs = [
  { q: "How often should MVHR filters be replaced?", a: "Filters should be checked every 3 months and replaced when visibly dirty — typically every 3–6 months. Urban areas with higher pollution may need more frequent changes." },
  { q: "What happens if MVHR filters aren't changed?", a: "Dirty filters reduce airflow by up to 55%, decrease heat recovery efficiency, strain fan motors and allow allergens to bypass filtration. Eventually the system fails entirely." },
  { q: "Can I change MVHR filters myself?", a: "Basic filter checks are DIY-friendly. However professional annual servicing is needed for heat exchanger cleaning, fan motor inspection, ductwork checks and system calibration." },
  { q: "What are signs my MVHR needs servicing?", a: "Reduced airflow, condensation on windows, musty odours, visible dust around vents and higher energy bills are all signs. If in doubt, contact us for a free assessment." },
  { q: "Does MVHR maintenance save money on energy?", a: "Yes. Clean systems recover up to 92% of heat from extracted air. A poorly maintained system can lose 60%+ of this efficiency, significantly increasing your heating costs." },
  { q: "What MVHR brands do you service?", a: "We service all major brands including Zehnder, PAUL, Brink, Vent-Axia, Genvex, NIBE, Daikin and own-brand units. Our engineers are trained across all platforms." },
];

const MVHRMaintenance = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need MVHR maintenance. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="MVHR Maintenance London | Mechanical Ventilation Heat Recovery Service | Mainteniq"
        description="Professional MVHR filter replacement, cleaning and servicing across London. All brands. Restore heat recovery efficiency and improve indoor air quality. 24/7 response."
        keywords="MVHR maintenance London, MVHR filter replacement, MVHR cleaning London, mechanical ventilation heat recovery service, MVHR service London, ventilation maintenance London"
        canonicalUrl="https://www.mainteniq.co.uk/mvhr-maintenance"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "MVHR Maintenance", url: "https://www.mainteniq.co.uk/mvhr-maintenance" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-green-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${mvhrInstallation})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Condensation on windows. Stale air. Rising bills.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Your MVHR filters need attention.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            MVHR filter replacement, heat exchanger cleaning and full system servicing across London. All brands. Annual contracts for landlords and property managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["All Major Brands", "Filter Replacement", "Heat Exchanger Cleaning", "Annual Contracts", "24/7 Emergency"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/after */}
      <section className="py-0">
        <div className="grid grid-cols-2 h-48 md:h-60">
          <div className="overflow-hidden relative">
            <img src="/MVPR0dirty.webp" alt="Dirty MVHR filter before professional cleaning" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
          </div>
          <div className="overflow-hidden relative">
            <img src="/MVHRclean.webp" alt="Clean MVHR filter after professional servicing" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">After</div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">What our MVHR service includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {["Filter replacement — supply and fit (all types)", "Heat exchanger inspection and cleaning", "Fan motor inspection and test", "Ductwork condition check", "Airflow measurement and balancing", "Summer bypass check", "Controls and sensor test", "Written condition report"].map(item => (
              <div key={item} className="flex items-start gap-2.5 bg-slate-50 rounded-lg border px-4 py-3">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a Service</Button>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">What happens when MVHR is neglected</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Filter, title: "Up to 55% airflow loss", desc: "Blocked filters starve the system of airflow, reducing ventilation throughout the property." },
              { icon: Wind, title: "Heat recovery drops sharply", desc: "A dirty heat exchanger loses efficiency — the warmth extracted from stale air is wasted." },
              { icon: AlertCircle, title: "Condensation and damp", desc: "Poor ventilation leads to condensation on windows and walls, encouraging mould growth." },
              { icon: Clock, title: "Premature system failure", desc: "Fan motors work harder to compensate, wearing out years before they should." },
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold mb-3">Book an MVHR service</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us your unit brand and we'll send the right engineer with the right filters. Usually within 24–48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MVHRMaintenance;
