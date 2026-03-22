import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { handleQuoteRequest } from "@/utils/quote";
import { 
  Wind, 
  Thermometer, 
  Settings, 
  Building, 
  Cpu,
  Home,
  Wrench,
  Users,
  Sparkles,
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import mvhrInstallation from "@/assets/mvhr-installation.jpg";
import fcuInstallation from "@/assets/fcu-installation.jpg";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import hiuInstallation from "@/assets/hiu-installation.jpg";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import hvacInstallation from "@/assets/hvac-installation.jpg";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import handymanRepair from "@/assets/handyman-repair.jpg";
// Using genuine before/after renovation image
import hvacProfessional from "@/assets/hvac-professional.jpg";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";

import { CONTACT } from "@/config/contact";
import { AlertTriangle } from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedChart";
import FullBleedHero from "@/components/FullBleedHero";

import { useEffect } from "react";
import teamWorking from "@/assets/team-working.jpg";
import SEOHead from "@/components/SEOHead";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
const Services = () => {
  const faqData = generateFAQSchema([
    {
      question: "What services do you offer for property maintenance?",
      answer: "We offer comprehensive HVAC maintenance (FCU, HIU, MVHR, CIU), plumbing, electrical, handyman services, BMS installation, smart home automation, and end-of-tenancy cleaning."
    },
    {
      question: "Do you provide emergency repair services?",
      answer: "Yes, we offer 24/7 emergency call-out services for critical HVAC and building systems failures to minimize downtime and restore comfort quickly."
    },
    {
      question: "What areas in the UK do you serve?",
      answer: "We provide services across the UK with particular expertise in London and surrounding areas. Contact us to confirm availability in your specific location."
    }
  ]);

  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Services", url: "https://www.mainteniq.co.uk/services" }
  ]);

const services = [
    {
      icon: Wind,
      title: "MVHR Maintenance",
      subtitle: "Mechanical Ventilation with Heat Recovery Service",
      description: "Professional MVHR maintenance ensuring optimal heat recovery efficiency and air quality. Regular filter changes and system optimization.",
      image: mvhrInstallation,
      features: [
        "Filter replacement every 3-6 months",
        "Heat exchanger cleaning and inspection",
        "Ductwork cleaning and leak testing",
        "Airflow balancing and optimization",
        "Performance testing and reporting"
      ]
    },
    {
      icon: Thermometer,
      title: "HVAC Maintenance",
      subtitle: "Heating, Ventilation & Air Conditioning Service",
      description: "Comprehensive HVAC maintenance programs preventing breakdowns, optimizing efficiency, and extending equipment lifespan.",
      image: hvacInstallation,
      features: [
        "Preventive maintenance schedules",
        "System performance optimization",
        "Emergency repair services available",
        "Energy efficiency improvements",
        "Equipment lifespan extension"
      ]
    },
    {
      icon: Settings,
      title: "FCU Maintenance & Upgrades",
      subtitle: "Fan Coil Unit Service & Optimization",
      description: "Expert FCU maintenance improving efficiency by 10-25%. Filter changes, coil cleaning, and performance upgrades for optimal operation.",
      image: fcuInstallation,
      features: [
        "Monthly filter replacement programs",
        "Coil cleaning and descaling",
        "Fan motor maintenance and lubrication",
        "Control system calibration",
        "Energy efficiency upgrades available"
      ]
    },
    {
      icon: Building,
      title: "BMS",
      subtitle: "Building Management Systems",
      description: "Advanced building automation systems for optimal control of HVAC, lighting, and energy management in commercial properties.",
      image: bmsControlRoom,
      features: [
        "Centralized system control",
        "Energy monitoring and optimization",
        "Automated scheduling",
        "Remote access and alerts",
        "Integration with existing systems"
      ]
    },
    {
      icon: Cpu,
      title: "HIU & CIU Service & Repair",
      subtitle: "Heat Interface Unit & Central Interface Unit Maintenance",
      description: "Professional HIU and CIU servicing maintaining 15-30% efficiency gains. Annual maintenance prevents scale buildup and ensures optimal performance for both interface units.",
      image: hiuInstallation,
      features: [
        "Annual service and safety checks",
        "Heat exchanger descaling and cleaning",
        "Control valve testing and calibration",
        "Temperature sensor maintenance",
        "Emergency repair service available"
      ]
    },
    {
      icon: Home,
      title: "Smart Home",
      subtitle: "Home Automation Integration",
      description: "Complete smart home solutions integrating HVAC controls with modern automation systems for ultimate comfort and efficiency.",
      image: smartHomeAutomation,
      features: [
        "Smart thermostat installation",
        "Mobile app control",
        "Voice assistant integration",
        "Energy usage monitoring",
        "Automated scheduling and zoning"
      ]
    },
    {
      icon: Wrench,
      title: "Plumber & Electrician",
      subtitle: "Essential Building Services",
      description: "Comprehensive plumbing and electrical services to support your HVAC installations and general property maintenance needs.",
      image: plumberElectricianWork,
      features: [
        "Plumbing installation and repairs",
        "Electrical work and wiring",
        "Boiler installation and maintenance",
        "Emergency call-out services",
        "Certified and insured technicians"
      ]
    },
    {
      icon: Users,
      title: "Handyman",
      subtitle: "General Property Maintenance",
      description: "Professional handyman services for property maintenance, repairs, and improvements to keep your home or business in perfect condition.",
      image: handymanRepair,
      features: [
        "General repairs and maintenance",
        "Property improvements",
        "Preventive maintenance programs",
        "Emergency repair services",
        "Multi-trade expertise"
      ]
    },
    {
      icon: Home,
      title: "Renovation & Refurbishment",
      subtitle: "Property Transformation Services",
      description: "Complete renovation and refurbishment services transforming properties to modern standards with professional project management and quality finishes.",
      image: "/New_Flat.jpg",
      features: [
        "Kitchen and bathroom renovations",
        "Full property refurbishment",
        "Project management and coordination",
        "Quality materials and finishes",
        "Before/after visualization tools"
      ]
    },
    {
      icon: Sparkles,
      title: "End of Tenancy Cleaning",
      subtitle: "Professional Deep Cleaning",
      description: "Comprehensive end of tenancy cleaning services ensuring properties meet the highest standards for deposit return and new occupancy.",
      image: endOfTenancyCleaning,
      features: [
        "Deep cleaning all areas",
        "Professional equipment and products",
        "Inventory condition reports",
        "Deposit protection guarantee",
        "Available at short notice"
      ]
    }
  ];

  // Quick helpers for deep pages and metrics
  const getServicePath = (title: string) => {
    if (title.includes("MVHR")) return "/mvhr-maintenance";
    if (title.includes("FCU")) return "/fcu-maintenance";
    if (title.includes("HIU") || title.includes("CIU")) return "/hiu-maintenance";
    if (title.includes("HVAC")) return "/hvac-maintenance";
    if (title.includes("BMS")) return "/bms";
    if (title.includes("Smart Home")) return "/smart-home";
    if (title.includes("Plumber") || title.includes("Electrician")) return "/plumber-electrician";
    if (title.includes("Handyman")) return "/handyman";
    if (title.includes("Renovation") || title.includes("Refurbishment")) return "/renovation-composer";
    if (title.includes("End of Tenancy")) return "/end-of-tenancy-cleaning";
    return "/contact";
  };

  type Metric = { label: string; value: number; suffix?: string; prefix?: string };
  const getMetrics = (title: string): Metric[] => {
    if (title.includes("MVHR")) return [
      { label: "Efficiency gain", value: 20, suffix: "%" },
      { label: "Heat recovery", value: 85, suffix: "%+" },
      { label: "Avoided cost", value: 3500, prefix: "£" },
    ];
    if (title.includes("FCU")) return [
      { label: "Efficiency gain", value: 25, suffix: "%" },
      { label: "Energy saved", value: 15, prefix: "-", suffix: "%" },
      { label: "Avoided emergency", value: 850, prefix: "£" },
    ];
    if (title.includes("HIU") || title.includes("CIU")) return [
      { label: "Efficiency gain", value: 30, suffix: "%" },
      { label: "Energy saved", value: 20, prefix: "-", suffix: "%" },
      { label: "Avoided emergency", value: 2200, prefix: "£" },
    ];
    if (title.includes("HVAC")) return [
      { label: "Breakdowns reduced", value: 80, prefix: "-", suffix: "%" },
      { label: "Lifespan increase", value: 50, prefix: "+", suffix: "%" },
      { label: "ROI", value: 5, suffix: "x" },
    ];
    if (title.includes("Renovation") || title.includes("Refurbishment")) return [
      { label: "Property value increase", value: 15, prefix: "+", suffix: "%" },
      { label: "Project completion", value: 95, suffix: "%" },
      { label: "Customer satisfaction", value: 98, suffix: "%" },
    ];
    return [];
  };

  // Service-specific problems we prevent
  const getProblems = (title: string): string[] => {
    if (title.includes("MVHR")) return [
      "Filter clogging causing 60% airflow loss",
      "Mould growth and poor air quality",
      "Motor failure from overwork (£1,500+ repair)",
    ];
    if (title.includes("FCU")) return [
      "Coil freezing and water damage",
      "Fan motor burnout (£400+ per unit)",
      "40% efficiency loss from dirty coils",
    ];
    if (title.includes("HIU") || title.includes("CIU")) return [
      "Heat exchanger scaling and blockage",
      "Complete heating/hot water failure",
      "Emergency replacement (£2,200+)",
    ];
    if (title.includes("HVAC")) return [
      "Breakdowns during peak seasons",
      "25% increase in energy costs",
      "Premature equipment replacement",
    ];
    if (title.includes("BMS")) return [
      "Energy drift from poor schedules",
      "Comfort complaints from miscalibrated sensors",
      "Missed faults without alerts and reports",
    ];
    if (title.includes("Smart Home")) return [
      "Heating/lighting left on when away",
      "Security blind spots",
      "Too many disjointed apps and controls",
    ];
    if (title.includes("Plumber") || title.includes("Electrician")) return [
      "Water damage from leaks",
      "Electrical safety hazards",
      "Non-compliance and missing certificates",
    ];
    if (title.includes("Handyman")) return [
      "Small issues becoming big repairs",
      "Safety risks from DIY fixes",
      "Poor finishes causing tenant complaints",
    ];
    if (title.includes("Renovation") || title.includes("Refurbishment")) return [
      "Poor planning leading to cost overruns",
      "Substandard finishes affecting property value",
      "Project delays and coordination issues",
    ];
    if (title.includes("End of Tenancy")) return [
      "Deposit deductions after checkout",
      "Lingering odours and stains",
      "Re-clean delays slowing new move-ins",
    ];
    return [];
  };

  useEffect(() => {
    document.title = "Property Services & Maintenance | Expert HVAC, Plumbing, Electrical";
    const desc = "Professional HVAC, FCU, HIU, MVHR, CIU maintenance, BMS, smart home, plumbing, electrical, handyman & end-of-tenancy cleaning services.";
    
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "Property Services & Maintenance | Expert HVAC, Plumbing, Electrical";

    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = desc;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  return (
    <>
      <SEOHead 
        title="Professional Property Services | HVAC, Plumbing, Electrical & Smart Home"
        description="Comprehensive property maintenance services: HVAC systems (FCU, HIU, MVHR), plumbing, electrical, handyman, BMS installation, smart home automation & end-of-tenancy cleaning."
        keywords="property services, HVAC maintenance, FCU service, HIU repair, MVHR installation, plumbing services, electrical work, handyman services, BMS installation, smart home automation, end of tenancy cleaning"
        canonicalUrl="https://www.mainteniq.co.uk/services"
        faqData={faqData}
        breadcrumbData={breadcrumbData}
      />
      
      <div className="min-h-screen">
      <FullBleedHero
        title="Property Services & Maintenance"
        subtitle="One reliable team for ventilation, heating, controls, electrics, handyman and end-of-tenancy cleaning."
        image={teamWorking}
        alt="Maintenance and property services team working together"
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Call now"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      >
        <a href="#services" className="underline-offset-4 hover:underline text-muted-foreground text-sm md:text-base">See services</a>
      </FullBleedHero>
      


       {/* Fast, clear assurances and scheduling */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center">
            Fast help. Clear prices. Trusted engineers.
          </h2>

          {/* Key assurance + promises */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-1 overflow-hidden border-0 shadow-glow bg-success text-primary-foreground">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">90%</div>
                <div className="text-sm font-medium mt-1">Same‑day attendance</div>
                <div className="text-xs opacity-80 mt-1">Weekdays before 12pm*</div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-card bg-trust-blue text-primary-foreground">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Our Promises</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Upfront pricing before we start</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Certified, vetted engineers</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Respectful, tidy work on site</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Photo report and clear next steps</span></div>
              </CardContent>
            </Card>
          </div>

          {/* How scheduling works */}
          <div className="bg-background/70 backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 text-center">How scheduling works</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-trust-blue text-primary-foreground flex items-center justify-center font-semibold">1</div>
                <div>
                  <div className="font-semibold">Tell us what you need</div>
                  <div className="text-sm text-muted-foreground">Send a quick form or call with photos.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-trust-blue text-primary-foreground flex items-center justify-center font-semibold">2</div>
                <div>
                  <div className="font-semibold">Get a time window</div>
                  <div className="text-sm text-muted-foreground">We confirm availability and pricing.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-trust-blue text-primary-foreground flex items-center justify-center font-semibold">3</div>
                <div>
                  <div className="font-semibold">Engineer attends</div>
                  <div className="text-sm text-muted-foreground">Fix or stabilise, with a same‑day photo report.</div>
                </div>
              </li>
            </ul>
            <div className="mt-6 text-center text-xs text-muted-foreground">
              *Same‑day attendance achieved in ~90% of eligible weekday requests before 12pm; depends on location and job scope.
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild className="bg-success text-primary-foreground hover:bg-success/90">
                <Link to="/contact">Request service</Link>
              </Button>
              <Button asChild className="bg-trust-blue text-primary-foreground hover:bg-trust-blue/90">
                <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call us now at ${CONTACT.phones.emergency}`}>Call now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Explore Our Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              One team for ventilation, heating, controls, electrics, handyman and end-of-tenancy cleaning—delivered to a professional standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="relative h-36 md:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <service.icon className="w-6 md:w-8 h-6 md:h-8 mb-1 md:mb-2" />
                  </div>
                </div>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-xs md:text-sm font-medium text-primary">{service.subtitle}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                </CardHeader>
                 <CardContent className="p-4 md:p-6 pt-0">
                   {/* Key benefits at a glance */}
                   {(() => {
                     const metrics = getMetrics(service.title);
                     return metrics.length ? (
                       <div className="mb-4">
                         <h4 className="font-bold text-sm mb-2">Key benefits at a glance</h4>
                         <div className="grid grid-cols-3 gap-2">
                           {metrics.map((m, i) => (
                             <div key={i} className="rounded-lg border p-2 text-center bg-accent/20">
                               <div className="text-base md:text-lg font-bold text-foreground">
                                 <AnimatedCounter value={m.value} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
                               </div>
                               <div className="text-[10px] md:text-xs text-muted-foreground">{m.label}</div>
                             </div>
                           ))}
                         </div>
                       </div>
                     ) : null;
                   })()}
                   {/* Problems Prevented Section */}
                   <div className="bg-accent/20 border border-accent-orange/40 rounded-lg p-3 mb-4">
                     <h4 className="font-bold text-accent-orange text-sm mb-2 flex items-center">
                       <AlertTriangle className="w-4 h-4 mr-2 text-accent-orange" />
                       Problems We Prevent:
                     </h4>
                     <div className="text-xs text-foreground space-y-1">
                       {getProblems(service.title).map((p, i) => (
                         <div key={i}>• {p}</div>
                       ))}
                     </div>
                   </div>

                   <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                     {service.features.map((feature, featureIndex) => (
                       <div key={featureIndex} className="flex items-start space-x-2">
                         <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-success mt-0.5 flex-shrink-0" />
                         <span className="text-xs md:text-sm">{feature}</span>
                       </div>
                     ))}
                   </div>
                   
                   <div className="flex flex-col gap-2">
                     <Button 
                       asChild
                       size="sm" 
                       variant="outline"
                       className="w-full border-primary text-primary hover:bg-primary/5 md:h-10"
                     >
                       <Link to={getServicePath(service.title)}>Learn more</Link>
                     </Button>
                     <Button 
                       size="sm" 
                       className="w-full bg-red-600 hover:bg-red-700 text-white md:h-10"
                       onClick={() => handleQuoteRequest(`Emergency ${service.title}`)}
                     >
                       Emergency Service
                       <Phone className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                     </Button>
                     <Button 
                       size="sm" 
                       variant="outline"
                       className="w-full border-primary text-primary hover:bg-primary/5 md:h-10"
                       onClick={() => handleQuoteRequest(service.title)}
                     >
                       Schedule Maintenance
                       <ArrowRight className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                     </Button>
                   </div>
                 </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why HVAC Maintenance Matters */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-primary">
              Why Proactive Maintenance Matters
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-12">
              Proactive care protects assets, ensures comfort and reliability, and keeps energy spend under control—across ventilation, heating, controls and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-16">
            <Card className="border-primary/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-7 h-7 text-white rotate-[-45deg]" />
                </div>
                <h4 className="font-bold text-lg mb-3">Prevent Breakdowns</h4>
                <p className="text-sm text-muted-foreground mb-3">Preventive maintenance reduces unexpected failures by 70-80%</p>
                <div className="text-2xl font-bold text-primary">70-80%</div>
                <div className="text-xs text-muted-foreground">Breakdown Prevention</div>
              </CardContent>
            </Card>
            
            <Card className="border-success/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Energy Savings</h4>
                <p className="text-sm text-muted-foreground mb-3">Regular maintenance reduces energy consumption significantly</p>
                <div className="text-2xl font-bold text-success">5-15%</div>
                <div className="text-xs text-muted-foreground">Energy Reduction</div>
              </CardContent>
            </Card>

            <Card className="border-accent-orange/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-energy-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Equipment Lifespan</h4>
                <p className="text-sm text-muted-foreground mb-3">Proper maintenance extends system life by up to 50%</p>
                <div className="text-2xl font-bold text-accent-orange">+50%</div>
                <div className="text-xs text-muted-foreground">Lifespan Extension</div>
              </CardContent>
            </Card>

            <Card className="border-trust-blue/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-trust-blue to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Cost Savings</h4>
                <p className="text-sm text-muted-foreground mb-3">Every £1 spent on maintenance saves £3-5 in repairs</p>
                <div className="text-2xl font-bold text-trust-blue">£3-5</div>
                <div className="text-xs text-muted-foreground">ROI per £1 spent</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 text-center">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
              Schedule Your Maintenance Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for problems to arise. Our preventive maintenance programs keep your systems running efficiently, 
              save energy costs, and prevent expensive emergency repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="premium" className="px-8 py-3">
                <Link to="/contact">
                  Schedule Maintenance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3">
                <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call emergency ${CONTACT.phones.emergency}`}>
                  Emergency Service Available
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-10 sm:py-14 md:py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Why Choose Our Professional Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                With years of experience and industry-leading expertise, we deliver exceptional 
                results across all our service areas. From complex MVHR installations to simple handyman tasks.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Fully certified and insured technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Quality guarantee on all work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Emergency call-out services available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Latest technology and equipment</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-glow">
                <Phone className="w-5 h-5 mr-2" />
                Get Professional Quote
              </Button>
            </div>
            <div className="relative">
              <img 
                src={hvacProfessional} 
                alt="Professional HVAC technician" 
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-2xl mb-1">15+</h3>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you need MVHR installation, BMS setup, smart home integration, or any of our professional services, 
            our expert team is ready to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8">
                <span className="block sm:hidden">Get Quote</span>
                <span className="hidden sm:block">Get Professional Quote</span>
              </Button>
            </Link>
<Button asChild variant="hero" size="lg" className="text-lg px-8">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-5 h-5 mr-2" />
    Call Now
  </a>
</Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;