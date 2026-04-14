import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Wrench, Hammer, PaintBucket, Zap, Droplets, Phone, CheckCircle, Clock, Shield } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import handymanRepair from "@/assets/handyman-repair.jpg";
import handymanMaintenance from "@/assets/handyman-maintenance.jpg";

const faqs = [
  { q: "What handyman jobs do you cover?", a: "We cover a wide range of jobs including furniture assembly, carpentry, decorating, minor plumbing fixes, door and lock repairs, shelving, tiling, grouting, pressure washing and general property upkeep." },
  { q: "Do you offer same-day handyman services in London?", a: "We aim for same-day or next-day availability across London for most handyman jobs. WhatsApp or call us and we'll confirm what we can do for your timeline." },
  { q: "Can you handle handyman work across multiple properties?", a: "Yes. Many of our landlord clients use us to carry out scheduled maintenance and repairs across their entire portfolio. Contact us to discuss regular arrangements." },
  { q: "Are your handymen vetted and insured?", a: "Yes. All Mainteniq handymen are directly employed, background checked and fully insured with public liability cover on every job." },
  { q: "Do you do furniture assembly for Airbnb and rental properties?", a: "Yes. We regularly fit out new rental properties and Airbnb listings — furniture assembly, picture hanging, curtain rails, blinds, shelving and more." },
];

const services = [
  { icon: Hammer, title: "Carpentry", items: ["Door hanging and adjustment", "Skirting and architrave", "Shelf installation", "Furniture assembly", "Wardrobe fitting"] },
  { icon: PaintBucket, title: "Decorating", items: ["Filling and painting", "Wallpaper hanging", "Touch-up and colour matching", "Ceiling and coving repairs", "Grout and sealant"] },
  { icon: Wrench, title: "General repairs", items: ["Door locks and handles", "Window mechanisms", "Blind and curtain fitting", "Tile and grout repair", "Minor plastering"] },
  { icon: Droplets, title: "Minor plumbing", items: ["Tap washer replacement", "Toilet repairs", "Shower head replacement", "Silicone sealing", "Drain cleaning"] },
  { icon: Zap, title: "Minor electrical", items: ["Bulb and fitting replacement", "Socket face plates", "TV aerial points", "CCTV camera positioning", "PAT test prep"] },
  { icon: Shield, title: "Property upkeep", items: ["Pressure washing", "Gutter clearing", "Fence and gate repairs", "Outdoor fixture fitting", "Move-in/move-out prep"] },
];

const Handyman = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need a handyman for my property. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Handyman Services London | Property Maintenance for Landlords | Mainteniq"
        description="Professional handyman services across London for landlords, Airbnb hosts and property managers. Carpentry, decorating, minor plumbing, repairs and property upkeep. Same-day availability."
        keywords="handyman London, handyman services London, property handyman London, landlord handyman London, Airbnb handyman London, property repairs London, furniture assembly London, carpentry London"
        canonicalUrl="https://www.mainteniq.co.uk/handyman"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Handyman", url: "https://www.mainteniq.co.uk/handyman" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-amber-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${handymanRepair})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            The small jobs that pile up.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              We clear them fast.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Carpentry, decorating, minor plumbing, repairs and property upkeep for landlords, Airbnb hosts and property managers across London. Vetted, insured, directly employed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Vetted & Insured", "Same-Day Available", "Landlord Specialists", "Airbnb Property Prep", "Portfolio Coverage"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">What our handymen cover</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">If it needs fixing, fitting or finishing — we can handle it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, items }) => (
              <Card key={title} className="border">
                <CardContent className="p-5">
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-amber-600" /></div>
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

      {/* Who we help */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={handymanMaintenance} alt="Handyman carrying out property maintenance in London" className="w-full h-64 object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Built for property professionals</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Whether you're preparing a flat between tenancies, getting an Airbnb ready for a new guest or tackling a snag list on a renovation — we work efficiently and leave the property in the best possible state.</p>
              <ul className="space-y-3 mb-6">
                {["Move-in and move-out property prep", "Airbnb setup and maintenance", "Between-tenancy repairs and painting", "Snag list clearance after renovation", "Regular scheduled upkeep visits"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a Handyman</Button>
            </div>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Got a job list?</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Send us the list on WhatsApp — we'll tell you what we can do and when we can be there.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Handyman;
