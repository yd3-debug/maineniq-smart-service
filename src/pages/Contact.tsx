import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Clock, MessageCircle, Shield, Award, CheckCircle, MapPin } from "lucide-react";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema } from "@/utils/structuredData";

const Contact = () => {
  const handleWhatsApp = (isEmergency = false) => {
    const msg = isEmergency
      ? "EMERGENCY: I need urgent help with my property. Please call me back immediately."
      : CONTACT.whatsapp.defaultMessage;
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Contact Mainteniq | 24/7 HVAC & Property Maintenance London"
        description="Contact Mainteniq for HVAC maintenance, plumbing, electrical and property services in London. 24/7 emergency response within 4 hours. WhatsApp or call us now."
        keywords="contact Mainteniq, property maintenance London contact, HVAC emergency London, 24/7 plumber London, emergency property maintenance London"
        canonicalUrl="https://www.mainteniq.co.uk/contact"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk/" },
          { name: "Contact", url: "https://www.mainteniq.co.uk/contact" },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Something needs fixing.
            <br />
            <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
              Tell us about it.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            WhatsApp us the details or call. We'll tell you what we can do and when we can be there. Emergency jobs within 4 hours, 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8" onClick={() => handleWhatsApp()}><FaWhatsapp className="w-5 h-5" />WhatsApp Us</Button>
            <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm gap-2"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-5 h-5" />{CONTACT.phones.emergency}</a></Button>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: FaWhatsapp,
                title: "WhatsApp",
                primary: CONTACT.phones.emergency,
                secondary: "Fastest way to reach us — send a message anytime",
                action: () => handleWhatsApp(),
                label: "Start chat",
                color: "text-[#25D366]",
                bg: "bg-[#25D366]",
              },
              {
                icon: Phone,
                title: "Phone",
                primary: CONTACT.phones.emergency,
                secondary: "Mobile — for calls and WhatsApp",
                href: `tel:${CONTACT.phones.emergencyTel}`,
                label: "Call now",
                color: "text-primary",
                bg: "bg-primary",
              },
              {
                icon: Phone,
                title: "Landline",
                primary: CONTACT.phones.landline,
                secondary: "Office line for quotes and contracts",
                href: `tel:${CONTACT.phones.landlineTel}`,
                label: "Call office",
                color: "text-primary",
                bg: "bg-primary",
              },
            ].map(({ icon: Icon, title, primary, secondary, action, href, label, color, bg }) => (
              <div key={title} className="bg-slate-50 rounded-xl border p-6 text-center">
                <div className={`w-10 h-10 ${bg}/10 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="font-bold text-lg mb-1">{primary}</p>
                <p className="text-xs text-muted-foreground mb-4">{secondary}</p>
                {action ? (
                  <Button className={`${bg} hover:opacity-90 text-white gap-2 w-full`} onClick={action}>{label}</Button>
                ) : (
                  <Button asChild className={`${bg} hover:opacity-90 text-white gap-2 w-full`}><a href={href}>{label}</a></Button>
                )}
              </div>
            ))}
          </div>

          {/* Emergency callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center mb-12">
            <h2 className="font-heading text-xl font-bold text-red-700 mb-2">Emergency? We respond within 4 hours.</h2>
            <p className="text-sm text-red-600 mb-4">Burst pipe, boiler failure, gas leak, no power — call us directly. No automated system, no waiting.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold" onClick={() => handleWhatsApp(true)}><FaWhatsapp className="w-4 h-4" />Emergency WhatsApp</Button>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white gap-2 font-semibold"><a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-4 h-4" />Call Now</a></Button>
            </div>
          </div>

          {/* Hours and coverage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Hours</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "9:00 AM – 3:00 PM" },
                  { day: "Emergency cover", hours: "24/7 — call anytime" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium">{day}</span>
                    <span className="text-muted-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl border p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Coverage</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">We cover London and up to 120 miles from the M25 — including Kent, Surrey, Essex, Hertfordshire and Berkshire.</p>
              <ul className="space-y-2">
                {["All London boroughs", "Home Counties", "South East England", "Portfolio-wide coverage available"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm"><CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Gas Safe Registered", body: "All gas work carried out by Gas Safe registered engineers, verifiable at gassaferegister.co.uk." },
              { icon: Award, title: "NICEIC Approved", body: "All electrical work meets British Standards. EICR and Part P documentation issued on completion." },
              { icon: MessageCircle, title: "No call centres", body: "You talk to the engineering team directly. No automated queue, no third-party call handling." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl border p-5 flex gap-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Icon className="w-4 h-4 text-primary" /></div>
                <div><h3 className="font-semibold text-sm mb-1">{title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
