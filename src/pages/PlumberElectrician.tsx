import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Droplets, Zap, Flame, FileCheck, Phone, CheckCircle, AlertCircle, Shield, Award } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";

const faqs = [
  { q: "Are your plumbers Gas Safe registered?", a: "Yes. All engineers carrying out gas work hold a valid Gas Safe registration. We provide certificates for all gas work, verifiable at gassaferegister.co.uk." },
  { q: "Do you provide CP12 gas safety certificates for landlords?", a: "Yes. We issue CP12 Gas Safety Certificates — the annual legal requirement for all rental properties. We can schedule reminders and manage certificates across your portfolio." },
  { q: "Are your electricians NICEIC certified?", a: "Yes. All our electricians are NICEIC approved, ensuring all electrical work meets British Standards and building regulations. We issue EICR certificates and Part P compliance documentation." },
  { q: "Do you offer 24/7 emergency plumbing and electrical services?", a: "Yes. We respond within 4 hours 24/7 for urgent issues including burst pipes, flooding, gas leaks and electrical failures. Call us directly — no automated system." },
  { q: "Can you handle EICR electrical certificates?", a: "Yes. We issue Electrical Installation Condition Reports (EICRs) — the 5-yearly landlord legal requirement. Contact us to discuss your property and we'll confirm the scope." },
  { q: "What boiler brands do your plumbers service?", a: "All major brands — Vaillant, Worcester Bosch, Baxi, Ideal, Viessmann, Potterton, Glow-worm. We carry common parts and resolve most issues in a single visit." },
];

const services = [
  { icon: Droplets, title: "Plumbing", items: ["Leak detection and repair", "Pipework installation", "Bathroom fitting", "Tap and valve replacement", "Drain unblocking", "Water pressure issues"] },
  { icon: Zap, title: "Electrical", items: ["Rewiring", "Consumer unit replacement", "Fault finding", "Socket and lighting installation", "EICR certificates", "Part P compliance"] },
  { icon: Flame, title: "Boiler & Gas", items: ["Boiler servicing and repair", "Boiler installation", "Power flush", "Smart thermostat fitting", "Gas pipework", "CP12 certificates"] },
  { icon: FileCheck, title: "Certificates", items: ["CP12 Gas Safety Record", "EICR Electrical Certificate", "PAT Testing", "Landlord compliance packs", "Building regs sign-off"] },
];

const PlumberElectrician = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need a plumber or electrician. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Gas Safe Plumber & NICEIC Electrician London | Mainteniq"
        description="Gas Safe registered plumbers and NICEIC approved electricians across London. CP12 landlord certificates, EICR, boiler repair, emergency call-out. 24/7 response within 4 hours."
        keywords="plumber London, gas safe plumber London, electrician London, NICEIC electrician London, CP12 certificate London, EICR London, boiler repair London, emergency plumber London, landlord certificates London"
        canonicalUrl="https://www.mainteniq.co.uk/plumber-electrician"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Plumber & Electrician", url: "https://www.mainteniq.co.uk/plumber-electrician" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-blue-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${plumberElectricianWork})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Burst pipe? No power? Gas leak?
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Gas Safe and NICEIC. Landlord specialists. There in 4 hours.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Gas Safe registered plumbers and NICEIC approved electricians for landlords and property managers across London. Emergency cover 24/7. CP12, EICR and full compliance documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Gas Safe Registered", "NICEIC Approved", "CP12 & EICR Certificates", "24/7 Emergency", "Landlord Specialists"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">What we cover</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, items }) => (
              <Card key={title} className="border">
                <CardContent className="p-5">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-primary" /></div>
                  <h3 className="font-semibold text-sm mb-3">{title}</h3>
                  <ul className="space-y-1.5">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground"><CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landlord compliance */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Landlord compliance — sorted</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">As a landlord you need an annual CP12 Gas Safety Certificate and an EICR every 5 years as legal minimums. Missing either exposes you to fines, prosecution and invalidated insurance. We manage both — and remind you when they're due.</p>
              <ul className="space-y-3 mb-6">
                {["CP12 Gas Safety Certificate (annual)", "EICR Electrical Installation Report (5-yearly)", "PAT testing for furnished rentals", "Digital certificates same day", "Portfolio scheduling available"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book Certificates</Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={electricalInstallation} alt="NICEIC electrician at work in London property" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Gas Safe Registered", body: "Every gas engineer holds a valid Gas Safe registration — verifiable independently before they start work." },
              { icon: Award, title: "NICEIC Approved", body: "All electrical work meets British Standards. We issue Part P and EICR documentation on completion." },
              { icon: AlertCircle, title: "Fully insured", body: "Public liability insurance and professional indemnity on every job, for your complete peace of mind." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-slate-50 rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{body}</p></div>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Need a plumber or electrician?</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Describe the issue on WhatsApp or call us — we'll get an engineer to you fast.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumberElectrician;
