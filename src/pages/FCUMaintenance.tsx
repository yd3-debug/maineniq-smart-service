import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Wind, Phone, CheckCircle, ArrowRight, AlertCircle, Clock, Wrench, Award, Droplets, Volume2 } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import fcuInstallation from "@/assets/fcu-installation.jpg";
import fcuCommercial from "@/assets/fcu-commercial.jpg";

const faqs = [
  { q: "What is a Fan Coil Unit (FCU)?", a: "A Fan Coil Unit is a heating and cooling device consisting of a fan and heat exchange coils. It circulates air through the coils to maintain room temperature and is found in residential flats, hotels, offices and commercial buildings." },
  { q: "How often should FCU filters be changed?", a: "FCU filters should be checked every 3 months and replaced when dirty — typically every 3–6 months. High-footfall commercial spaces may need more frequent changes." },
  { q: "What are signs my FCU needs servicing?", a: "Poor airflow, unusual noises, water dripping from the unit, inconsistent temperatures, musty odours and higher energy bills are all signs that servicing is needed." },
  { q: "Do FCUs require TM44 inspections?", a: "Yes. FCU systems over 12kW (or combined systems over 70kW) require mandatory TM44 air conditioning inspections under UK Energy Performance of Buildings Regulations." },
  { q: "Can dirty FCU coils affect air quality?", a: "Yes. Dirty coils harbour bacteria, mould and allergens that then circulate through the building. Regular cleaning directly improves indoor air quality for occupants." },
  { q: "What does an FCU service include?", a: "Filter replacement, coil cleaning, condensate drain clearance, fan motor inspection, electrical checks, control calibration, safety testing and a written condition report." },
];

const FCUMaintenance = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need FCU maintenance for my property. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="FCU Maintenance London | Fan Coil Unit Service for Landlords | Mainteniq"
        description="Professional Fan Coil Unit servicing, cleaning and repair for landlords, property managers and facilities teams across London. TM44 certified. 24/7 emergency response."
        keywords="FCU maintenance London, fan coil unit service London, landlord FCU maintenance London, FCU cleaning London, FCU repair London, TM44 FCU inspection, fan coil unit maintenance, FCU servicing commercial, FCU residential London, property manager FCU London"
        canonicalUrl="https://www.mainteniq.co.uk/fcu-maintenance"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "FCU Maintenance", url: "https://www.mainteniq.co.uk/fcu-maintenance" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-blue-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${fcuCommercial})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your FCU is blowing warm air.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Or no air at all.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Fan Coil Unit servicing, cleaning and repair for landlords, property managers and facilities teams across London. Residential blocks, hotels and offices. TM44 certified, 24/7 emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["TM44 Certified", "F-Gas Licensed", "All FCU Types", "24/7 Emergency", "Residential & Commercial"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/after photos */}
      <section className="py-0">
        <div className="grid grid-cols-2 h-48 md:h-60">
          <div className="overflow-hidden relative">
            <img src="/FCUdirty.png" alt="Dirty FCU unit before professional cleaning" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
          </div>
          <div className="overflow-hidden relative">
            <img src="/FCUclean.png" alt="Clean FCU unit after professional servicing" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">After</div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">What our FCU service includes</h2>
              <ul className="space-y-3">
                {["Filter replacement (all types)", "Coil deep clean — evaporator and condenser", "Condensate drain clearance and test", "Fan motor inspection and lubrication", "Electrical and control check", "Airflow measurement and calibration", "Water leak inspection", "Written condition report"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={fcuInstallation} alt="FCU maintenance engineer at work in London" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Signs your FCU needs attention</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Wind, title: "Weak or no airflow", desc: "Blocked filters or coils restrict airflow — a dirty system can lose 55% of its efficiency." },
              { icon: Volume2, title: "Unusual noises", desc: "Rattling, squealing or grinding from the unit usually indicates a fan or bearing issue." },
              { icon: Droplets, title: "Water dripping from the unit", desc: "A blocked condensate drain causes water to back up and leak — damaging ceilings and interiors." },
              { icon: AlertCircle, title: "Musty or stale air", desc: "Mould and bacteria build up on dirty coils and circulate through the building, affecting air quality." },
              { icon: Clock, title: "System last serviced over 6 months ago", desc: "Unmaintained FCUs fail faster, use more energy and harbour bacteria. Annual minimum is strongly recommended." },
              { icon: Wrench, title: "Inconsistent temperatures", desc: "Some rooms too hot, others too cold — often a calibration or balancing issue resolved in a single visit." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-4 flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-blue-500" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book an FCU service</Button>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Book an FCU service</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Single unit or entire block — we'll schedule at a time that works for you and your tenants.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FCUMaintenance;
