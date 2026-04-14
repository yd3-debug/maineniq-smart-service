import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Thermometer, Phone, CheckCircle, AlertCircle, Clock, Wrench, Droplets, Gauge } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import hiuResidential from "@/assets/hiu-residential.jpg";
import hiuInstallation from "@/assets/hiu-installation.jpg";

const faqs = [
  { q: "What is a Heat Interface Unit (HIU)?", a: "An HIU connects your property to a communal or district heating system, providing heating and hot water without an individual gas boiler. They're common in modern apartment blocks and new-build developments." },
  { q: "How often should an HIU be serviced?", a: "Annually as a minimum. In hard water areas like London, descaling may be needed every 6–12 months to maintain performance and avoid heat exchanger failure." },
  { q: "Why is my hot water slow or cold?", a: "Scale build-up on the heat exchanger or blocked strainers are the most common cause. Professional descaling and strainer cleaning typically resolves this in a single visit." },
  { q: "What's the difference between an HIU and a CIU?", a: "An HIU (Heat Interface Unit) provides both heating and hot water from a district heat network. A CIU (Chilled Interface Unit) provides chilled water for cooling. Many buildings have both — we service them together." },
  { q: "Do HIUs require Gas Safe engineers?", a: "No. HIUs don't use gas. However engineers should hold relevant heating qualifications and be trained on HIU systems. Our engineers carry manufacturer-specific training for all major HIU brands." },
  { q: "What brands of HIU do you service?", a: "We service all major brands including Heatrae Sadia, Swep, Alfa Laval, Danfoss, Dutypoint, Calorex and own-brand building management units." },
];

const HIUMaintenance = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I need HIU maintenance or repair. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="HIU Maintenance London | Heat Interface Unit Service for Landlords | Mainteniq"
        description="Professional HIU servicing, descaling and repair for landlords, block managers and property managers across London. Annual contracts, 24/7 emergency response. Tenant complaints resolved fast."
        keywords="HIU maintenance London, heat interface unit service, landlord HIU maintenance London, HIU repair London, district heating maintenance London, HIU descaling London, HIU annual service, heat interface unit London, block management HIU London, property manager HIU London"
        canonicalUrl="https://www.mainteniq.co.uk/hiu-maintenance"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "HIU Maintenance", url: "https://www.mainteniq.co.uk/hiu-maintenance" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-red-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${hiuResidential})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Slow hot water. Cold radiators.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Usually the HIU. Always fixable.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            HIU servicing, descaling and repair for landlords, block managers and property managers across London. All major brands. Annual contracts available — tenant complaints resolved fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["All Major Brands", "Annual Contracts", "Block Servicing", "24/7 Emergency", "London & 120 Miles"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">What our HIU service includes</h2>
              <ul className="space-y-3">
                {["Heat exchanger inspection and descaling", "Strainer cleaning and replacement", "Pressure and flow rate checks", "Valve operation testing", "Control and sensor calibration", "Temperature performance test", "Legionella risk check", "Written service report"].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-6"><Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a Service</Button></div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={hiuInstallation} alt="HIU heat interface unit maintenance in London" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold mb-3">Common HIU problems we fix</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Thermometer, title: "No hot water or slow heating", desc: "Scale build-up on the heat exchanger is the most common cause — descaling typically restores full performance." },
              { icon: Gauge, title: "Low flow rate", desc: "Blocked strainers or scaled pipework restrict flow — cleaned or replaced in a single visit." },
              { icon: Droplets, title: "Water leaking", desc: "Valve or connection leaks need prompt attention to avoid water damage and HIU failure." },
              { icon: AlertCircle, title: "Error codes showing", desc: "Our engineers are trained on manufacturer fault codes across all major HIU brands." },
              { icon: Clock, title: "Not serviced in over 12 months", desc: "Annual servicing prevents premature failure and is required by most building warranties." },
              { icon: Wrench, title: "Full HIU replacement", desc: "When repair isn't viable we supply and install replacement units — like-for-like or upgraded models." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border p-4 flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-red-500" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block servicing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 rounded-xl border p-6 md:p-8">
            <h2 className="font-heading text-xl font-bold mb-3">Managing a residential block?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">We regularly service entire blocks in a single coordinated visit — minimising disruption for residents. Annual contracts include scheduled service visits, priority emergency response and digital reports for your records.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Discuss a Block Contract</Button>
              <Button variant="outline" asChild><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-4 h-4 mr-2" />{CONTACT.phones.emergency}</a></Button>
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
          <h2 className="font-heading text-2xl font-bold mb-3">Book an HIU service</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Single unit, whole floor or entire block — we'll book an engineer at a time that suits you and your residents.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HIUMaintenance;
