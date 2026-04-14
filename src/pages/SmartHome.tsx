import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Smartphone, Shield, Lightbulb, Lock, Tv, Phone, CheckCircle, Wifi, Key } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import smartLightingControl from "@/assets/smart-lighting-control.jpg";

const faqs = [
  { q: "How much does a smart home installation cost in London?", a: "Smart home installation costs vary based on the scope, rooms and systems involved. We assess your property first and provide a tailored quote — contact us via WhatsApp or phone for a free consultation." },
  { q: "Do I need to rewire my home for smart technology?", a: "Not necessarily. Many smart home devices are wireless and work with existing wiring. Smart bulbs, plugs, sensors and cameras typically require no rewiring. For advanced features like smart switches, minor electrical work may be needed." },
  { q: "Will smart home systems work if my internet goes down?", a: "Modern smart home systems include local processing, so core functions continue working during internet outages. Lights, locks and sensors operate locally. Voice control and remote access require internet, but automations remain functional." },
  { q: "What's the difference between DIY and professional smart home installation?", a: "DIY smart devices often result in compatibility issues, security vulnerabilities and fragmented control across multiple apps. Professional installation provides unified control, proper network configuration and secure setup with ongoing support." },
  { q: "What smart home brands do you install?", a: "We work across all major platforms — Philips Hue, Lutron, Yale, Ring, Nest, Sonos, Control4 and more. We design systems around your needs rather than pushing a single brand." },
  { q: "Can smart home technology help Airbnb hosts?", a: "Yes. Smart locks allow keyless check-in, automated lighting scenes create a great first impression, and smart thermostats help you manage energy costs between guests. Many hosts see improved reviews after installation." },
];

const services = [
  { icon: Lightbulb, title: "Smart Lighting", items: ["Automated scenes", "Motion sensing", "Dimming and colour control", "Circadian rhythm scheduling", "Multi-room synchronisation"] },
  { icon: Lock, title: "Security & Access", items: ["Smart locks and keypads", "Video doorbells", "CCTV cameras", "Motion sensors", "Remote access control"] },
  { icon: Tv, title: "Entertainment", items: ["Multi-room audio", "Smart TV integration", "Whole-home streaming", "Voice control setup", "Hidden cable management"] },
  { icon: Wifi, title: "Network & Control", items: ["Mesh Wi-Fi systems", "Smart hub setup", "Single-app control", "Voice assistant integration", "Automation rules"] },
];

const SmartHome = () => {
  const handleWhatsApp = () => {
    const msg = "Hi, I'm interested in smart home installation. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Smart Home Installation London | For Landlords & Airbnb Hosts | Mainteniq"
        description="Professional smart home installation across London for homeowners, landlords and Airbnb hosts. Smart lighting, security cameras, access control and whole-home automation. One app, everything connected."
        keywords="smart home London, smart home installation London, home automation London, smart lighting London, smart locks London, Airbnb smart home London, home security systems London"
        canonicalUrl="https://www.mainteniq.co.uk/smart-home"
        structuredData={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Smart Home", url: "https://www.mainteniq.co.uk/smart-home" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-900" />
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${smartHomeAutomation})` }} />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            One app. Every light, lock and camera.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Professionally installed. Just works.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Smart home installation for homeowners, landlords and Airbnb hosts across London. Lighting, security, entertainment and automation — all unified, all reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Lighting & Scenes", "Smart Locks & Access", "Security Cameras", "Multi-Room Audio", "Airbnb Ready"].map(c => (
              <div key={c} className="flex items-center gap-1.5 text-white/70 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-400" />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">What we install</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">Every system integrated. Every device connected. One clean setup.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, items }) => (
              <Card key={title} className="border">
                <CardContent className="p-5">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center mb-3"><Icon className="w-4 h-4 text-indigo-600" /></div>
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
              <img src={smartLightingControl} alt="Smart lighting control in a London property" className="w-full h-64 object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Built for property owners</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Whether you want to upgrade your home, add value to a rental property or give Airbnb guests a premium experience — we design and install smart systems that actually get used.</p>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: Smartphone, text: "Homeowners — control everything from one app" },
                  { icon: Key, text: "Landlords — keyless entry, remote monitoring" },
                  { icon: Shield, text: "Airbnb hosts — smart locks, welcome scenes, energy control" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-sm"><Icon className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" /><span>{text}</span></li>
                ))}
              </ul>
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={handleWhatsApp}><FaWhatsapp className="w-4 h-4" />Book a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-10">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We visit your property, assess your needs and design a system tailored to how you live." },
              { step: "2", title: "Installation", desc: "Our engineers install and configure everything cleanly. No mess, no trailing cables, no guesswork." },
              { step: "3", title: "Handover", desc: "We show you how everything works and stay available for any questions afterwards." },
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
          <h2 className="font-heading text-2xl font-bold mb-3">Ready for a smarter home?</h2>
          <p className="text-primary-foreground/75 text-sm mb-8">Tell us what you'd like to control — we'll design and install a system that works.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={handleWhatsApp}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartHome;
