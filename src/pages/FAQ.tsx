import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, CheckCircle } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const faqs = [
  {
    category: "HVAC & Systems",
    items: [
      { q: "What HVAC systems do you maintain?", a: "FCU (Fan Coil Units), HIU (Heat Interface Units), MVHR (Mechanical Ventilation Heat Recovery), CIU (Chilled Interface Units), air conditioning systems, boilers and BMS controls — for residential and commercial buildings." },
      { q: "How often should HVAC systems be serviced?", a: "Annual servicing as a minimum for most systems. MVHR filters should be checked quarterly. Commercial systems in heavy use benefit from bi-annual inspections. We'll advise based on your specific systems and building type." },
      { q: "What happens if I don't service my MVHR?", a: "Blocked filters reduce airflow by up to 55%, heat recovery efficiency drops significantly, condensation and mould risk increases, and fan motors wear out prematurely. Annual servicing is a small cost compared to a full system replacement." },
      { q: "Do you service all MVHR, FCU and HIU brands?", a: "Yes. We service all major brands across all these system types. Our engineers are trained across platforms and carry common parts to resolve most issues in a single visit." },
    ]
  },
  {
    category: "Plumbing & Electrical",
    items: [
      { q: "Are your plumbers Gas Safe registered?", a: "Yes. All engineers carrying out gas work hold a valid Gas Safe registration, verifiable independently at gassaferegister.co.uk before they start work." },
      { q: "Do you issue CP12 Gas Safety Certificates?", a: "Yes. We issue CP12 Gas Safety Certificates — the annual legal requirement for all rental properties. We can also manage scheduling and reminders across a portfolio." },
      { q: "Are your electricians NICEIC certified?", a: "Yes. All electrical work meets British Standards. We issue EICR Electrical Installation Condition Reports and Part P compliance documentation on completion." },
      { q: "Do you offer emergency plumbing and electrical cover?", a: "Yes. We respond within 4 hours, 24/7 for urgent issues including burst pipes, flooding, gas leaks and electrical failures. Call us directly — no automated system." },
    ]
  },
  {
    category: "Maintenance Contracts",
    items: [
      { q: "What's included in a maintenance contract?", a: "Scheduled preventive maintenance visits, priority emergency response (4 hours, 24/7), written service reports and compliance certificates. Every contract is tailored to the specific systems in your property." },
      { q: "Can I cover multiple properties under one contract?", a: "Yes. Many clients are portfolio landlords and letting agents. We manage maintenance across multiple properties under a single agreement with one point of contact." },
      { q: "How do I get a contract quote?", a: "WhatsApp or call us to describe your property and systems. We'll carry out a free site assessment and produce a tailored proposal — no obligation." },
    ]
  },
  {
    category: "General",
    items: [
      { q: "What areas do you cover?", a: "London and up to 120 miles from the M25 — including Kent, Surrey, Essex, Hertfordshire, Buckinghamshire and Berkshire. Contact us to confirm availability for your specific location." },
      { q: "Do you work for Airbnb hosts and short-let operators?", a: "Yes. We regularly service Airbnb properties and short-let portfolios — MVHR servicing, handyman works, between-guest maintenance, CP12 and EICR certificates." },
      { q: "How do I book a service?", a: "WhatsApp us or call. Send us the details of what you need — property type, location, system or job description. We'll confirm availability and get an engineer booked in." },
    ]
  },
];

const allFaqsFlat = faqs.flatMap(cat => cat.items);

const FAQ = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.defaultMessage)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="FAQ | HVAC, Plumbing, Electrical & Property Maintenance | Mainteniq"
        description="Answers to common questions about Mainteniq's HVAC maintenance, plumbing, electrical, handyman and property services across London. Gas Safe, NICEIC, CP12, EICR and more."
        keywords="HVAC maintenance FAQ, CP12 landlord certificate FAQ, EICR FAQ, MVHR service questions, FCU HIU maintenance FAQ, property maintenance London FAQ"
        canonicalUrl="https://www.mainteniq.co.uk/faq"
        structuredData={generateFAQSchema(allFaqsFlat.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "FAQ", url: "https://www.mainteniq.co.uk/faq" },
        ])}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">Everything you need to know about our services. If you can't find your answer, just ask us directly.</p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            {faqs.map(({ category, items }) => (
              <div key={category}>
                <h2 className="font-heading text-xl font-bold mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full inline-block" />
                  {category}
                </h2>
                <div className="space-y-4">
                  {items.map(({ q, a }) => (
                    <div key={q} className="bg-slate-50 rounded-xl border px-6 py-5">
                      <h3 className="font-semibold text-sm mb-2 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {q}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-2xl font-bold mb-3">Still have a question?</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">WhatsApp us or call — we'll answer directly, no scripts, no waiting.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
