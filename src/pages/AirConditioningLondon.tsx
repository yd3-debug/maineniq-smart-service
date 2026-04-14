import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT } from "@/config/contact";
import {
  CheckCircle,
  Phone,
  Shield,
  Snowflake,
  Zap,
  Wind,
  Award,
  Clock,
  MapPin,
  ThumbsUp,
  Wrench,
  FileCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import hvacInstallationImg from "@/assets/hvac-installation.jpg";
import commercialHvacImg from "@/assets/commercial-hvac.jpg";
import hvacProfessionalImg from "@/assets/hvac-professional.jpg";
import hvacMaintenanceImg from "@/assets/hvac-maintenance.jpg";

const acFaqs = [
  {
    question: "Do you install air conditioning in London homes and offices?",
    answer: "Yes. Our F-Gas certified engineers install split systems, multi-split systems, and VRF/VRV air conditioning for residential and commercial properties across London and within a 120-mile radius. Most single-room installations are completed in a single day. Contact us via WhatsApp or phone to discuss your property."
  },
  {
    question: "How much does air conditioning installation cost in London?",
    answer: "Installation costs vary depending on your property, the number of rooms, and the system type. We assess every job individually and provide a clear, itemised quote with no hidden charges. Message us on WhatsApp or call us and we'll get back to you quickly."
  },
  {
    question: "Do I need planning permission to install air conditioning in London?",
    answer: "In most cases, domestic split system installations are permitted development and do not require planning permission. However, listed buildings, conservation areas, and some flats may have restrictions. Our engineers will advise you during your free consultation."
  },
  {
    question: "What is F-Gas certification and why does it matter?",
    answer: "F-Gas (fluorinated greenhouse gas) regulations require that anyone handling refrigerants in air conditioning systems holds a valid F-Gas certificate. All Mainteniq engineers are F-Gas certified, ensuring your installation is legally compliant and the refrigerant is handled correctly."
  },
  {
    question: "What is a TM44 inspection?",
    answer: "TM44 is a mandatory air conditioning inspection required by law for systems over 12kW capacity in England and Wales. Our TM44 certified engineers carry out these inspections and issue the required compliance documentation for commercial landlords and building owners."
  },
  {
    question: "Can you service or repair an existing air conditioning system?",
    answer: "Yes — we service and repair all major AC brands including Daikin, Mitsubishi, LG, Samsung, Panasonic, Fujitsu, and more. Whether it's a routine pre-summer check, refrigerant top-up, or fault diagnosis, our engineers can attend across London and surrounding areas."
  },
  {
    question: "How quickly can you respond to an AC breakdown?",
    answer: "We offer 24/7 emergency call-out with response within 4 hours across London. For planned bookings, we typically attend within 24–48 hours. Our engineers carry common parts and consumables on the van so most issues are resolved in a single visit."
  },
  {
    question: "Which areas do you cover for air conditioning installation?",
    answer: "We cover all of London and areas within a 120-mile radius including Birmingham, Oxford, Cambridge, Brighton, Milton Keynes, Reading, Surrey, Essex, Kent, Hertfordshire, and Buckinghamshire. Contact us to confirm availability for your location."
  }
];

const acServices = [
  {
    icon: Snowflake,
    title: "Split System Installation",
    description: "Single and multi-head split system AC for homes, flats, and offices. F-Gas certified supply and installation.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Wind,
    title: "VRF / VRV Systems",
    description: "Variable refrigerant flow systems for commercial buildings, apartment blocks, and larger properties.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Wrench,
    title: "AC Servicing & Repair",
    description: "All major brands serviced. Fault diagnosis, refrigerant checks, filter cleaning, and full system reports.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: FileCheck,
    title: "TM44 Inspections",
    description: "Mandatory compliance inspections for commercial AC systems over 12kW. Certified engineers, same-day reports.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Pre-Summer AC Check",
    description: "Book before summer demand peaks. Full performance test, refrigerant level check, and filter service.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Commercial AC Contracts",
    description: "Scheduled maintenance contracts for offices, retail, and multi-unit residential buildings across London.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const whyUs = [
  { icon: Award, label: "F-Gas Certified", sub: "All refrigerant work legally compliant" },
  { icon: Clock, label: "4-Hour Emergency Response", sub: "24/7 across London" },
  { icon: MapPin, label: "120-Mile Coverage", sub: "London & surrounding regions" },
  { icon: ThumbsUp, label: "1,000+ Properties Served", sub: "Trusted by landlords & managers" },
  { icon: FileCheck, label: "TM44 Certified", sub: "Commercial compliance covered" },
];

const AirConditioningLondon = () => {
  const faqData = generateFAQSchema(acFaqs);

  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Services", url: "https://www.mainteniq.co.uk/services" },
    { name: "Air Conditioning London", url: "https://www.mainteniq.co.uk/air-conditioning-london" },
  ]);

  const handleWhatsApp = () => {
    const msg = "Hi! I'm interested in air conditioning installation / servicing in London. Can you help?";
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${CONTACT.phones.emergencyTel}`, "_self");
  };

  return (
    <>
      <SEOHead
        title="Air Conditioning Installation London | F-Gas Certified | Mainteniq"
        description="F-Gas certified air conditioning installation, servicing & TM44 inspections across London and within 120 miles. Split systems, VRF, multi-split for homes & offices. Call or WhatsApp for a free quote."
        keywords="air conditioning London, AC installation London, air conditioning installation London, split system London, VRF installation London, F-Gas certified London, TM44 inspection London, air conditioning service London, AC repair London, multi-split AC London, commercial air conditioning London, residential air conditioning London"
        canonicalUrl="https://www.mainteniq.co.uk/air-conditioning-london"
        structuredData={faqData}
        breadcrumbData={breadcrumbData}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-12 md:pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(/HVAC_SYSTEM.png)` }}
        />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center gap-6">
            <Badge className="bg-orange-500 text-white border-0 text-sm px-4 py-1.5 font-semibold">
              Summer 2026 — Booking Now
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Air Conditioning Installation & Service in London
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              F-Gas certified engineers. Split systems, VRF, multi-split and TM44 inspections for homes,
              offices, and commercial properties across London and within 120 miles.
              WhatsApp or call us for a tailored quote — no call centres, no generic prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 text-base px-8 py-6 font-semibold shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </Button>
              <Button
                onClick={handleCall}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 gap-2 text-base px-8 py-6 font-semibold"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phones.emergency}
              </Button>
            </div>
            <p className="text-slate-400 text-sm">
              Emergency response within 4 hours · Available 24/7 · No obligation quote
            </p>
          </div>
        </div>
      </section>

      {/* Real Work Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-64">
          <div className="overflow-hidden">
            <img
              src={hvacInstallationImg}
              alt="HVAC installation in London property"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={hvacMaintenanceImg}
              alt="Air conditioning maintenance and servicing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={commercialHvacImg}
              alt="Commercial air conditioning installation London"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={hvacProfessionalImg}
              alt="Professional Mainteniq engineer at work"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {whyUs.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1">
                <Icon className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-semibold text-foreground leading-tight">{label}</span>
                <span className="text-xs text-muted-foreground leading-tight">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct answer block — AI Overview bait */}
      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl border border-blue-100 p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-3 text-foreground">
              Air Conditioning Installation in London — Quick Answer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mainteniq's F-Gas and Gas Safe certified engineers install, service, and repair air conditioning
              systems for residential and commercial properties across London and within a 120-mile radius.
              We cover split systems, multi-split, VRF/VRV, and portable AC, and carry out mandatory TM44
              inspections for commercial buildings. Most installations are completed in a single day.
              Contact us via WhatsApp or phone for a free, no-obligation quote based on your property.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["F-Gas Certified", "TM44 Inspections", "All Major Brands", "Same-Day Emergency", "120-Mile Radius"].map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Air Conditioning Services We Provide
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              From new installations to emergency repairs and compliance inspections — one team, fully certified.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acServices.map(({ icon: Icon, title, description, color, bg }) => (
              <Card key={title} className="border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <CardTitle className="text-base font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mainteniq */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                Why Choose Mainteniq for AC in London?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're not a call centre or a marketplace. When you contact Mainteniq you speak to our
                team directly, get a real assessment of your property, and an honest quote — no pressure,
                no upselling. Our engineers are directly employed, fully insured, and carry their F-Gas
                and Gas Safe credentials on every job.
              </p>
              <ul className="space-y-3">
                {[
                  "F-Gas certified — legally compliant refrigerant handling",
                  "All major AC brands serviced and installed",
                  "TM44 inspections for commercial compliance",
                  "Landlord and property manager specialists",
                  "Emergency response available 24/7",
                  "Single visit — most installs done in a day",
                ].map(point => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={hvacProfessionalImg}
                alt="Mainteniq HVAC engineer servicing air conditioning in London"
                className="w-full h-72 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="font-semibold text-xl mb-2">Get a Free Quote</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
            Tell us about your property and we'll get back to you with a clear, itemised quote.
            No automated estimates — a real engineer will assess your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold"
            >
              <FaWhatsapp className="w-5 h-5" />
              Message on WhatsApp
            </Button>
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="gap-2 font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call {CONTACT.phones.emergency}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Available 24/7 · Emergency response within 4 hours
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 border-y bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground font-medium mb-4 uppercase tracking-wider">
            Brands We Install & Service
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Daikin", "Mitsubishi Electric", "LG", "Samsung", "Panasonic", "Fujitsu", "Toshiba", "Hitachi", "Carrier", "Gree"].map(brand => (
              <span key={brand} className="text-sm font-semibold text-muted-foreground">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Common questions about air conditioning installation and servicing in London
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {acFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm sm:text-base">
                  <h3 className="text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Ready to Get a Quote?
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Drop us a message on WhatsApp or give us a call. Our team will assess your
            property and come back with an honest, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us Now
            </Button>
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary gap-2 font-semibold px-8"
            >
              <Phone className="w-5 h-5" />
              {CONTACT.phones.emergency}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AirConditioningLondon;
