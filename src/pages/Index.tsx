import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Thermometer,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Zap,
  Users,
  Building2,
  AlertCircle,
  ThumbsDown,
  AlertTriangle,
  X,
  MapPin,
  Award,
  Flame,
  Wind,
  Cpu,
  Lightbulb,
  HardHat,
  Home,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import plumbingImage from "@/assets/plumber-electrician-work.jpg";
import handymanImage from "@/assets/handyman-maintenance.jpg";
import smartHomeImage from "@/assets/smart-home-automation.jpg";
const renovationImage = "/2024_Kitchen.png";
import bmsControlPanel from "@/assets/bms-control-panel.jpg";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import {
  generateOrganizationSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/utils/structuredData";

const Index = () => {
  const homepageFaqs = [
    {
      question: "How quickly can you respond to an emergency in London?",
      answer:
        "We offer 24/7 emergency cover with response within 4 hours across London and the surrounding area. Our engineers are directly employed and carry common parts on the van, so most issues are resolved in a single visit.",
    },
    {
      question: "Are your engineers Gas Safe registered?",
      answer:
        "Yes. Every engineer carrying out gas work holds a valid Gas Safe registration. We are also NICEIC approved for electrical work and F-Gas certified for air conditioning and refrigerant handling. Credentials are carried on every job.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover all of London and a 120-mile radius, including Essex, Kent, Surrey, Hertfordshire, Buckinghamshire, Berkshire, Birmingham, Oxford, Cambridge, Brighton and Reading. Contact us to confirm availability for your location.",
    },
    {
      question: "What HVAC systems do you service and maintain?",
      answer:
        "We maintain and repair FCU (Fan Coil Units), HIU (Heat Interface Units), MVHR (Mechanical Ventilation with Heat Recovery), CIU (Chilled Interface Units), VRF/VRV air conditioning systems, split systems, boilers and general heating and ventilation equipment for both residential and commercial properties.",
    },
    {
      question: "Do you offer planned maintenance contracts?",
      answer:
        "Yes. We offer tailored PPM (Planned Preventative Maintenance) contracts for landlords, property managers and facilities teams. Contracts include scheduled servicing, priority emergency response and detailed reports. Contact us to discuss your portfolio.",
    },
  ];

  const faqData = generateFAQSchema(homepageFaqs);
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
  ]);

  const handleWhatsApp = () => {
    const msg =
      "Hi, I need help with a property maintenance issue. Can you help?";
    window.open(
      `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  useEffect(() => {}, []);

  const coreServices = [
    {
      icon: Wind,
      title: "FCU Maintenance",
      description: "Fan Coil Unit servicing for consistent climate control in residential and commercial buildings.",
      href: "/fcu-maintenance",
      popular: true,
    },
    {
      icon: Flame,
      title: "HIU & CIU Service",
      description: "Heat Interface Unit and district heating system specialists — installation, repair and maintenance.",
      href: "/hiu-maintenance",
      popular: true,
    },
    {
      icon: Thermometer,
      title: "MVHR Maintenance",
      description: "Mechanical ventilation with heat recovery — filter cleans, airflow balancing and full system reports.",
      href: "/mvhr-maintenance",
    },
    {
      icon: Zap,
      title: "Boiler Services",
      description: "Gas Safe registered boiler servicing, repair, installation and CP12 landlord certificates.",
      href: "/boiler-services",
      popular: true,
    },
    {
      icon: Thermometer,
      title: "Air Conditioning",
      description: "F-Gas certified AC installation, servicing and TM44 inspections. All major brands covered.",
      href: "/air-conditioning-london",
      popular: true,
    },
    {
      icon: Cpu,
      title: "BMS Services",
      description: "Building Management System installation, configuration and ongoing maintenance.",
      href: "/bms",
    },
  ];

  const propertyServices = [
    {
      title: "Plumbing & Electrical",
      description: "Repairs, installations and EICR safety certificates",
      image: plumbingImage,
      href: "/plumber-electrician",
    },
    {
      title: "Handyman",
      description: "General repairs, maintenance and upkeep",
      image: handymanImage,
      href: "/handyman",
    },
    {
      title: "Smart Home",
      description: "Thermostats, lighting, security and automation",
      image: smartHomeImage,
      href: "/smart-home",
    },
    {
      title: "Renovation",
      description: "Full refurbishments — kitchens, bathrooms, fit-outs",
      image: renovationImage,
      href: "/renovation-composer",
    },
    {
      title: "Maintenance Contracts",
      description: "Planned preventative maintenance for landlords",
      image: bmsControlPanel,
      href: "/maintenance-contracts",
    },
  ];

  const painPoints = [
    {
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-50",
      title: "It always breaks at the worst time.",
      body: "Friday night in December. Boiler dead. You have a legal duty to restore heating within 24 hours. Most contractors aren't picking up until Monday.",
    },
    {
      icon: Building2,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: "Three properties, three problems, one week.",
      body: "Separate contractors. Separate quotes. Separate invoices. Each one needing access coordinated, chased and followed up. You didn't sign up to be a project manager.",
    },
    {
      icon: ThumbsDown,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      title: "One bad review costs more than the repair.",
      body: "Your Airbnb guest arrives to a broken shower. A slow response. Two stars. That one review tanks your bookings for months — from something that would have taken us an hour.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Message or call us",
      body: "Tell us what's happened. We respond fast — no forms, no automated replies, no hold music. A real person picks up.",
    },
    {
      step: "02",
      title: "Engineer attends",
      body: "A qualified, directly employed engineer visits your property. They assess the issue and tell you exactly what's needed before touching anything.",
    },
    {
      step: "03",
      title: "Fixed properly",
      body: "We carry parts. We work clean. We explain what we did and what to watch for — so you're not calling us back for the same issue.",
    },
  ];

  const whyUs = [
    {
      icon: Users,
      title: "You speak to us, not a call centre.",
      body: "No ticketing systems, no automated replies. WhatsApp or call and a real person from our team responds — usually within the hour.",
    },
    {
      icon: HardHat,
      title: "Directly employed engineers.",
      body: "Not subcontractors. Our engineers are trained, vetted, and carry their Gas Safe, NICEIC and F-Gas credentials on every job.",
    },
    {
      icon: Shield,
      title: "Transparent from the start.",
      body: "We tell you what's wrong and what it will cost before we start work. No invoice surprises. No pressure.",
    },
    {
      icon: Award,
      title: "All compliance covered.",
      body: "Gas Safe, NICEIC, F-Gas, TM44 — every certificate your property needs, from one team you already trust.",
    },
  ];

  const certifications = [
    { label: "Gas Safe Registered" },
    { label: "NICEIC Approved" },
    { label: "F-Gas Certified" },
    { label: "TM44 Inspections" },
    { label: "24/7 Emergency Cover" },
    { label: "4.9★ Rated" },
  ];

  return (
    <>
      <SEOHead
        title="HVAC & Property Maintenance London | Gas Safe, NICEIC, F-Gas | Mainteniq"
        description="24/7 emergency HVAC, boiler, plumbing and electrical services for landlords and property managers across London. Gas Safe, NICEIC and F-Gas certified. Response within 4 hours."
        keywords="HVAC maintenance London, boiler service London, property maintenance London, landlord maintenance London, FCU maintenance, HIU service, MVHR cleaning, emergency HVAC London, Gas Safe engineer London, NICEIC electrician London, F-Gas certified London, air conditioning London"
        canonicalUrl="https://www.mainteniq.co.uk/"
        structuredData={generateOrganizationSchema()}
        faqData={faqData}
        breadcrumbData={breadcrumbData}
      />

      <div className="min-h-screen">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="relative -mt-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-14 sm:pb-18 md:pb-22 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: `url(/hero-minimal.jpg)` }}
          />

          <div className="relative container mx-auto px-4 pt-8 md:pt-14">
            <div className="max-w-3xl mx-auto text-center">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/20 p-6 sm:p-8 md:p-12 shadow-2xl">

                {/* Live indicator */}
                <div className="inline-flex items-center gap-2 bg-success/20 border border-success/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/90">Available now — response within 4 hours</span>
                </div>

                {/* H1 — short and punchy */}
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                  Boiler failed? AC broken? Flooding?
                  <br />
                  <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
                    We're there within 4 hours.
                  </span>
                </h1>

                {/* Single line sub */}
                <p className="text-base sm:text-lg text-white/80 mb-8 max-w-lg mx-auto leading-relaxed">
                  One team for HVAC, boilers, plumbing and electrical across London.
                  Gas Safe. NICEIC. F-Gas. No call centres.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20b657] text-white font-semibold px-8 py-6 text-base shadow-xl gap-2"
                    onClick={handleWhatsApp}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-base backdrop-blur-sm gap-2"
                  >
                    <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                      <Phone className="w-5 h-5" />
                      {CONTACT.phones.emergency}
                    </a>
                  </Button>
                </div>

                {/* Social proof */}
                <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap justify-center items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-accent-orange" />
                    <span className="text-white/90 text-sm"><strong>1,000+</strong> properties served</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-energy-gold text-energy-gold" />
                    ))}
                    <span className="text-white/90 text-sm ml-1"><strong>4.9</strong> rating</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-trust-blue" />
                    <span className="text-white/90 text-sm">London & <strong>120-mile</strong> radius</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATION TRUST BAR ─────────────────────────────── */}
        <section className="py-5 bg-slate-900 border-b border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
              {certifications.map(({ label }) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Sound familiar?</h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
                These are the calls we get every day. We've heard them all — and we know exactly how to fix them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {painPoints.map(({ icon: Icon, color, bg, title, body }) => (
                <Card key={title} className="border shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <h3 className="font-semibold text-base mb-2 leading-snug">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-white rounded-xl border p-6 md:p-8 shadow-sm">
              <p className="text-base sm:text-lg font-semibold mb-1">
                That's exactly why we built Mainteniq.
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                One number. Every trade. Real engineers who show up — and actually fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold"
                  onClick={handleWhatsApp}
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </Button>
                <Button variant="outline" asChild>
                  <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {CONTACT.phones.emergency}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">

            {/* HVAC & Specialist Services */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">HVAC & Specialist</span>
                <span className="w-8 h-[2px] bg-primary" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                The systems most landlords don't think about — until they break
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                Specialist maintenance and repair for the systems that keep your building running. Certified engineers, all major brands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-6">
              {coreServices.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 bg-card border h-full relative">
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-3 group-hover:shadow-glow transition-all duration-200">
                        <service.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-base mb-1">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                      <span className="text-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mb-16">
              <Link to="/hvac-maintenance">
                <Button variant="outline" size="sm">
                  View all HVAC & specialist services
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Property Services */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Property Services</span>
                <span className="w-8 h-[2px] bg-primary" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                Everything else your property needs
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Plumbing, electrical, handyman, smart home and renovation — all from one team you already trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {propertyServices.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="group overflow-hidden hover:shadow-md transition-all duration-200">
                    <CardContent className="p-0 relative">
                      <img
                        src={service.image}
                        alt={`${service.title} service — Mainteniq London`}
                        loading="lazy"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-semibold text-white text-base">{service.title}</h3>
                        <p className="text-white/70 text-xs mt-0.5">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">How it works</h2>
              <p className="text-primary-foreground/70 text-sm sm:text-base">
                Simple process. No surprises. No chasing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/15 border border-white/25 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <Button
                className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-6"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp className="w-4 h-4" />
                Start on WhatsApp
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 px-6">
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-4 h-4" />
                  {CONTACT.phones.emergency}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHY MAINTENIQ ───────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                Why landlords keep coming back
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                We're not a marketplace or a contractor directory. We're a team you can rely on — and call directly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {whyUs.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-slate-50 rounded-xl border p-6 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 rounded-xl border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={1000} suffix="+" delay={0} duration={1200} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Properties served</div>
              </div>
              <div className="bg-slate-50 rounded-xl border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={4} suffix="hr" delay={100} duration={1200} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Emergency response</div>
              </div>
              <div className="bg-slate-50 rounded-xl border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={120} suffix="mi" delay={200} duration={1200} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Service coverage</div>
              </div>
              <div className="bg-slate-50 rounded-xl border p-4 text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-xs text-muted-foreground mt-1">Average rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAINTENANCE CONTRACTS ───────────────────────────────── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                Stop managing problems. Start preventing them.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                The landlords who never worry about breakdowns have one thing in common — a maintenance contract.
                Scheduled servicing catches issues before they become emergencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <Card className="border-l-4 border-l-destructive bg-white">
                <CardHeader className="pb-2 pt-5 px-5">
                  <CardTitle className="flex items-center gap-2 text-destructive text-sm font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    Without a contract
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <ul className="space-y-2.5 text-sm">
                    {[
                      "Large unexpected bills with no warning or budget",
                      "Tenant complaints and potential rent disputes",
                      "Emergency call-out fees on top of repair costs",
                      "Equipment failing years before it should",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 bg-white">
                <CardHeader className="pb-2 pt-5 px-5">
                  <CardTitle className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    With a Mainteniq contract
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <ul className="space-y-2.5 text-sm">
                    {[
                      "Predictable costs — no surprises",
                      "Issues caught and fixed before tenants notice",
                      "Priority emergency response, 24/7",
                      "Systems that last significantly longer",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/maintenance-contracts">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn about maintenance contracts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                Common questions
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Quick answers — and if yours isn't here, just ask us directly.
              </p>
            </div>
            <div className="space-y-4">
              {homepageFaqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl border px-6 py-5">
                  <h3 className="font-semibold text-sm mb-2">{faq.question}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="outline" size="sm">
                  View all FAQs
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-professional-gradient text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Got a problem right now?
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              WhatsApp us or give us a call. We respond fast — day or night, weekday or weekend.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20b657] text-white gap-2 font-semibold px-8"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us Now
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 backdrop-blur-sm"
              >
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT.phones.emergency}
                </a>
              </Button>
            </div>
            <p className="text-white/50 text-xs mt-6">
              Gas Safe · NICEIC · F-Gas · TM44 · 24/7 Emergency · London & 120-mile radius
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default Index;
