import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Flame, Phone, CheckCircle, ArrowRight, AlertCircle, Clock, Award, Wrench, ThermometerSun, Droplets, Gauge, Zap } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";

const faqs = [
  { q: "How often should a boiler be serviced?", a: "Annually — ideally before winter. For landlords, an annual Gas Safe service is a legal requirement to maintain a valid CP12 Gas Safety Certificate." },
  { q: "What is a CP12 Gas Safety Certificate?", a: "A CP12 (also called a Gas Safety Record) is the landlord's annual gas safety check certificate, legally required for all rental properties. Our Gas Safe engineers issue this after every landlord boiler service." },
  { q: "Are your boiler engineers Gas Safe registered?", a: "Yes. Every engineer carrying out boiler or gas work at Mainteniq holds a valid Gas Safe registration card, which you can verify independently at gassaferegister.co.uk." },
  { q: "What boiler brands do you service?", a: "We service all major brands — Vaillant, Worcester Bosch, Baxi, Ideal, Viessmann, Potterton, Glow-worm, Combi, system and heat-only boilers." },
  { q: "Do you offer emergency boiler repair?", a: "Yes. We provide 24/7 emergency boiler repair with response within 4 hours across London. If your tenants have no heating or hot water, call us now." },
];

const warningsigns = [
  { icon: ThermometerSun, title: "Radiators not heating evenly", desc: "Cold spots or some radiators not working — often a system flush or bleed issue." },
  { icon: Droplets, title: "Water leaking from the boiler", desc: "Any visible water around your boiler needs immediate attention to avoid further damage." },
  { icon: Gauge, title: "Pressure keeps dropping", desc: "Low pressure (below 1 bar) usually means a leak or faulty pressure relief valve." },
  { icon: AlertCircle, title: "Unusual noises", desc: "Banging, kettling or clunking sounds — often lime scale or pump issues caught early." },
  { icon: Zap, title: "Pilot light keeps going out", desc: "An intermittent pilot light suggests a thermocouple or gas supply issue." },
  { icon: Clock, title: "Boiler hasn't been serviced", desc: "An unserviced boiler runs less efficiently, fails sooner and can void your manufacturer warranty." },
];

const BoilerServices = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need a boiler service or repair. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Boiler Services London | Gas Safe Servicing, Repair & CP12 | Mainteniq"
        description="Gas Safe boiler servicing, repair and installation across London. CP12 landlord gas safety certificates. 24/7 emergency boiler repair. All major brands. Response within 4 hours."
        keywords="boiler service London, gas safe boiler London, CP12 gas safety certificate London, boiler repair London, emergency boiler repair London, landlord boiler service London, boiler installation London"
        canonicalUrl="https://www.mainteniq.co.uk/boiler-services"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Boiler Services", url: "https://www.mainteniq.co.uk/boiler-services" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-orange-900" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            No heating. No hot water.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              We're there within 4 hours.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Gas Safe boiler servicing, repair and CP12 certificates across London. Landlords, homeowners and property managers — same-day emergency response available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Gas Safe Registered", "CP12 Certificates", "All Major Brands", "24/7 Emergency", "Landlord Specialists"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services we offer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Boiler services we provide</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">From annual landlord certificates to emergency breakdown repair — everything under one Gas Safe team.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Annual Boiler Service", desc: "Full safety check, efficiency test and service certificate. Keeps warranties valid and detects issues before they become breakdowns." },
              { icon: Flame, title: "CP12 Landlord Certificate", desc: "Annual Gas Safety Record legally required for all rental properties. Issued by Gas Safe registered engineers." },
              { icon: Wrench, title: "Boiler Repair", desc: "Fault diagnosis and repair for all major brands. Engineers carry common parts — most repairs completed same visit." },
              { icon: Zap, title: "Boiler Installation", desc: "Supply and install of new boilers with full system flush, controls upgrade and compliance documentation." },
              { icon: Clock, title: "Emergency Call-Out", desc: "24/7 emergency response for heating and hot water failures. Response within 4 hours across London." },
              { icon: ThermometerSun, title: "Power Flush", desc: "Remove sludge and debris from heating circuits to restore performance and protect system components." },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border">
                <CardContent className="p-5">
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-orange-500" /></div>
                  <h3 className="font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Warning signs your boiler needs attention</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Catch problems early — before a breakdown leaves your tenants without heating in winter.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {warningsigns.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-4">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-orange-500" /></div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 bg-white rounded-xl border p-6">
            <p className="font-semibold text-sm mb-4">Spotted any of these? Don't wait for a full breakdown.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />WhatsApp Us</Button>
              <Button variant="outline" asChild><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-4 h-4 mr-2" />{CONTACT.phones.emergency}</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">For landlords — compliance sorted</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">As a landlord you're legally required to have gas appliances checked annually by a Gas Safe engineer and provide tenants with a valid CP12 certificate within 28 days of tenancy start — and annually thereafter. Failure can result in fines, prosecution and invalidated insurance.</p>
              <ul className="space-y-2.5 mb-6">
                {["Annual CP12 certificate issued", "Reminder service — we contact you when it's due", "Multi-property scheduling available", "Digital certificates sent same day", "Portfolio-wide maintenance contracts"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a CP12</Button>
            </div>
            <div className="bg-slate-50 rounded-xl border p-6">
              <Flame className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-base mb-2">CP12 Gas Safety Certificate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">A Gas Safety Record (CP12) must be carried out annually on all gas appliances in rented properties. A copy must be given to existing tenants within 28 days and to new tenants before they move in.</p>
              <p className="text-xs text-muted-foreground">Issued by Gas Safe Registered Engineer · Registration verifiable at gassaferegister.co.uk</p>
            </div>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Book a boiler service or CP12</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">WhatsApp or call us — we'll confirm availability and book your engineer, usually within 24–48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoilerServices;
