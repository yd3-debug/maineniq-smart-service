import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Home, Palette, Shield, Phone, CheckCircle, Wrench, Building2, Clock } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";

const faqs = [
  { q: "How long does a full property renovation take?", a: "A full property renovation typically takes 8–16 weeks depending on scope. Kitchen and bathroom renovations usually take 2–4 weeks each. We provide a detailed timeline during the initial consultation." },
  { q: "Do you handle planning permissions and building regulations?", a: "Yes. We assist with planning applications and ensure all work meets building regulations. Our team coordinates with local authorities and provides all necessary compliance documentation and certificates." },
  { q: "What's included in a renovation quote?", a: "All labour, materials, project management and site clearance. We provide itemised quotes so you know exactly what you're paying for — no hidden costs or surprise additions." },
  { q: "Can you renovate a property while tenants are in it?", a: "Yes. We can phase work to minimise disruption for occupied properties, discussing logistics during consultation and creating schedules that work for everyone involved." },
  { q: "Do you offer warranties on renovation work?", a: "Yes. We provide comprehensive warranties on all renovation work — typically 2–5 years depending on the type of work. All materials come with manufacturer warranties." },
  { q: "What types of properties do you renovate in London?", a: "Flats, houses, HMOs, commercial units and mixed-use properties across London. We work for homeowners, buy-to-let landlords, Airbnb operators and property investors." },
];

const services = [
  { icon: Home, title: "Full property renovation", items: ["Complete rewiring and plumbing", "Bathroom and kitchen refit", "Flooring and decoration", "HVAC and heating installation", "Project management end to end"] },
  { icon: Palette, title: "Kitchen & bathroom", items: ["Full strip-out and refit", "Modern fixtures and units", "Tiling and waterproofing", "Appliance integration", "Efficient layout design"] },
  { icon: Shield, title: "Between-tenancy works", items: ["Deep clean and redecoration", "Flooring replacement", "Plumbing and electrical repairs", "White goods replacement", "Snag list clearance"] },
  { icon: Building2, title: "HMO & investment", items: ["Room additions and conversions", "Fire safety compliance", "En-suite installation", "Shared space upgrades", "EPC improvement works"] },
];

const RenovationComposer = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need help with a property renovation. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Property Renovation London | Refurbishment for Landlords & Investors | Mainteniq"
        description="Professional property renovation and refurbishment across London. Kitchens, bathrooms, full property makeovers and between-tenancy works for landlords, Airbnb hosts and investors."
        keywords="property renovation London, refurbishment London, kitchen renovation London, bathroom renovation London, landlord refurbishment London, HMO renovation London, property investor renovation London"
        canonicalUrl="https://www.mainteniq.co.uk/renovation-composer"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Renovation", url: "https://www.mainteniq.co.uk/renovation-composer" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-amber-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(/New_Flat.jpg)` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Property needs work.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              We plan it, manage it, deliver it.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Property renovation and refurbishment for landlords, Airbnb hosts and investors across London. Kitchens, bathrooms, full property makeovers and between-tenancy works.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Kitchens & Bathrooms", "Full Refurbishments", "Between-Tenancy Works", "HMO Conversions", "No Prices Online"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">What we do</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">From a single bathroom refit to a full property transformation — we manage everything.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* Gallery strip */}
      <section className="py-0">
        <div className="grid grid-cols-2 h-48 md:h-64">
          <div className="overflow-hidden relative">
            <img src="/New_Flat.jpg" alt="Property before renovation" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
          </div>
          <div className="overflow-hidden relative">
            <img src="/2024_Kitchen.png" alt="Modern kitchen after professional renovation" className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">After</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-10">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "Free site visit to assess the property, understand your brief and set the scope." },
              { step: "2", title: "Quote", desc: "Itemised proposal with timeline. No hidden costs, no surprises." },
              { step: "3", title: "Delivery", desc: "Our team manages the project from start to finish. Daily updates if you want them." },
              { step: "4", title: "Handover", desc: "Final walkthrough, snagging resolved, certificates provided. Job done." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">{step}</div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why landlords use us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Built for property professionals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Wrench, title: "One team, everything covered", desc: "Builders, electricians, plumbers and decorators — all coordinated by us. You deal with one contact." },
              { icon: Clock, title: "Done on time, done properly", desc: "We work to your tenancy and lettings schedule. Void periods cost money — we minimise them." },
              { icon: Shield, title: "Fully insured", desc: "Public liability insurance on every job. All work certified and compliant with building regulations." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-primary" /></div>
                <h3 className="font-semibold text-base mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Tell us about the project</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Send us a WhatsApp with the property details and what you need — we'll come and have a look.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RenovationComposer;
