import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import { TestimonialCards } from "@/components/TestimonialCards";
import { ProgressMetric } from "@/components/ProgressMetric";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";
import plumbingWork from "@/assets/plumbing-work.jpg";
import plumbingCustomerService from "@/assets/plumbing-customer-service.jpg";
import teamWorking from "@/assets/team-working.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import { handleQuoteRequest } from "@/utils/quote";
import { generatePlumberElectricianSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { 
  CheckCircle, Shield, Clock, Award, Zap, Wrench, AlertTriangle, 
  FileCheck, Users, Flame, ThermometerSun, Droplets, Phone, 
  ChevronDown, Home, Building2, Briefcase, HelpCircle, ArrowRight,
  Gauge, Volume2, Eye, Calendar, BadgeCheck, ClipboardCheck
} from "lucide-react";

const PlumberElectrician: React.FC = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [showProcessDetails, setShowProcessDetails] = useState(false);
  const [showBoilerDetails, setShowBoilerDetails] = useState(false);

  const plumberElectricianFaqs = [
    { question: "Are your plumbers Gas Safe registered?", answer: "Yes, all our gas engineers are Gas Safe registered, meaning they are qualified to work safely and legally on gas appliances including boilers, cookers, and fires. We provide certificates for all gas work." },
    { question: "Do you provide CP12 gas safety certificates for landlords?", answer: "Yes, we provide CP12 Gas Safety Certificates required by law for all rental properties. We can schedule annual inspections and provide compliant documentation for your records." },
    { question: "Are your electricians NICEIC certified?", answer: "Yes, all our electricians are NICEIC approved contractors, ensuring all electrical work meets British Standards and building regulations. We provide EICR certificates and Part P compliance." },
    { question: "Do you offer 24/7 emergency plumber and electrician services?", answer: "Yes, we offer 24/7 emergency response for urgent plumbing and electrical issues including gas leaks, burst pipes, power failures, and safety hazards. Call our emergency line for immediate assistance." },
    { question: "How much does an EICR electrical certificate cost in London?", answer: "EICR (Electrical Installation Condition Report) costs vary based on property size, typically £150-350 for residential properties. Contact us for an accurate quote based on your specific property." },
    { question: "What's included in a boiler service?", answer: "A full boiler service includes safety checks, flue analysis, pressure testing, cleaning key components, and issuing a service certificate. We recommend annual servicing to maintain warranty and efficiency." }
  ];

  const services = [
    { 
      icon: Droplets, 
      title: "Plumbing", 
      details: ["Leak detection & repair", "Pipe work & installations", "Bathroom fitting", "Tap & valve repairs", "Drain unblocking"]
    },
    { 
      icon: Zap, 
      title: "Electrical", 
      details: ["Rewiring", "Consumer units", "Fault finding", "Socket installation", "Lighting upgrades"]
    },
    { 
      icon: Flame, 
      title: "Boiler", 
      details: ["Installation", "Annual servicing", "Repairs (all brands)", "Power flush", "Smart thermostat"]
    },
    { 
      icon: FileCheck, 
      title: "Certificates", 
      details: ["CP12 Gas Safety", "EICR Electrical", "PAT Testing", "Landlord compliance", "Building regs"]
    },
    { 
      icon: Shield, 
      title: "Safety", 
      details: ["Smoke detectors", "CO alarms", "Emergency lighting", "Safety inspections", "Risk assessments"]
    },
    { 
      icon: AlertTriangle, 
      title: "Emergency", 
      details: ["24/7 callouts", "Gas leak response", "Power failures", "Burst pipes", "Heating failures"]
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Contact", 
      desc: "Call or WhatsApp us",
      details: "Describe your issue and we'll provide initial guidance. No call-out fees for quotes during business hours."
    },
    { 
      step: "02", 
      title: "Assessment", 
      desc: "Same-day site visit",
      details: "Our certified engineer will assess the work, explain what's needed, and provide a transparent quote."
    },
    { 
      step: "03", 
      title: "Quote", 
      desc: "Fixed pricing",
      details: "No hidden charges. We agree the price before work begins. Payment only on completion."
    },
    { 
      step: "04", 
      title: "Completion", 
      desc: "Certified work",
      details: "All work completed to regulations with proper documentation, certificates, and a 24-month guarantee."
    }
  ];

  const boilerWarnings = [
    { icon: Flame, sign: "Yellow or orange flame", meaning: "Could indicate carbon monoxide - needs immediate attention" },
    { icon: Volume2, sign: "Strange noises", meaning: "Kettling, banging or gurgling suggests limescale or pressure issues" },
    { icon: ThermometerSun, sign: "Inconsistent heating", meaning: "Radiators not heating evenly or hot water fluctuating" },
    { icon: Gauge, sign: "Pressure dropping", meaning: "Frequent pressure loss may indicate a leak in the system" },
    { icon: Eye, sign: "Pilot light keeps going out", meaning: "Faulty thermocouple or gas supply issue" },
    { icon: Droplets, sign: "Leaking or dripping", meaning: "Internal component failure - don't ignore water around the boiler" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Professional Plumber & Electrician Services London | Gas Safe & NICEIC | Mainteniq"
        description="Certified Gas Safe plumbers & NICEIC electricians in London. Emergency repairs, boiler installation, rewiring, CP12 & EICR certificates. 24/7 response. Free quotes."
        keywords="plumber London, electrician London, Gas Safe registered plumber, NICEIC electrician, boiler repair London, rewiring London, emergency plumber London, CP12 certificate, EICR London, electrical installation London, boiler service London, emergency electrician"
        canonicalUrl="https://www.mainteniq.co.uk/plumber-electrician"
        structuredData={generatePlumberElectricianSchema()}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "Plumber & Electrician", url: "https://www.mainteniq.co.uk/plumber-electrician" }
        ])}
        faqData={generateFAQSchema(plumberElectricianFaqs)}
      />
      <LocalBusinessSchema 
        businessType="Plumbing and Electrical Services" 
        serviceName="Professional Plumber & Electrician Services"
        serviceDescription="Gas Safe registered plumbers and NICEIC certified electricians in London. Emergency repairs, boiler installation, rewiring, and compliance certificates"
      />
      <VoiceSearchOptimizer 
        faqs={plumberElectricianFaqs} 
        serviceName="Plumber & Electrician Services" 
      />
      
      <FullBleedHero
        title="Professional Plumber & Electrician Services"
        subtitle="Gas Safe registered plumbers and NICEIC certified electricians delivering safe, compliant installations and emergency repairs across London."
        image={plumberElectricianWork}
        alt="Professional plumber and electrician performing certified installation work"
        primaryLabel="Get Professional Quote"
        primaryOnClick={() => handleQuoteRequest("Plumber & Electrician Services")}
        secondaryLabel="Emergency? Call Now"
        secondaryOnClick={() => handleQuoteRequest("Emergency Plumber/Electrician")}
      />

      

      <main className="container mx-auto px-4 py-8 sm:py-12 space-y-8 sm:space-y-12 md:space-y-16">
        {/* Who We Help - Split Layout with Image */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Who We Help</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Licensed Gas Safe plumbers and NICEIC electricians for all your compliance needs. 
              We provide certificates, documentation, and peace of mind for your properties.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Home, label: "Landlords", desc: "CP12 & EICR compliance" },
                { icon: Building2, label: "Airbnb Hosts", desc: "Fast turnarounds" },
                { icon: Briefcase, label: "Property Managers", desc: "Portfolio coverage" },
                { icon: Users, label: "Facilities Teams", desc: "Commercial contracts" }
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center hover:bg-primary/10 transition-colors">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/Customer_Service.png" 
              alt="Professional consultation with customer about plumbing and electrical services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Gas Safe Registered
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                NICEIC Certified
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Need a Professional */}
        <section className="bg-gradient-to-br from-blue-50 to-primary/5 dark:from-blue-950/30 dark:to-primary/10 rounded-xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <h2 className="font-heading text-2xl font-bold text-center mb-6 md:mb-8">Signs You Need a Professional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { symptom: "Boiler keeps cutting out?", solution: "Qualified Gas Safe engineer diagnosis" },
              { symptom: "Electrics tripping frequently?", solution: "NICEIC certified fault-finding" },
              { symptom: "Need certificates for tenants?", solution: "CP12 & EICR compliance services" },
              { symptom: "Emergency at unsociable hours?", solution: "24/7 rapid response team" },
              { symptom: "Low water pressure throughout?", solution: "Full system pressure assessment" },
              { symptom: "Flickering lights or burning smell?", solution: "Urgent electrical safety check" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
                <div className="p-2 rounded-full bg-primary/10">
                  <HelpCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{item.symptom}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-primary" /> {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Examples Photo Strip */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-center mb-6">Our Work in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: electricalInstallation, label: "Electrical Installation" },
              { img: plumbingWork, label: "Plumbing Work" },
              { img: teamCollaboration, label: "Team Collaboration" },
              { img: teamWorking, label: "Emergency Response" }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl aspect-square">
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-muted-foreground text-center mb-6 md:mb-8">Certified plumbing and electrical solutions for every need</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {services.map((service) => (
              <div key={service.title} className="p-4 rounded-lg border-2 border-primary/20 bg-background text-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold">{service.title}</div>
              </div>
            ))}
          </div>
          
          <Collapsible open={showAllServices} onOpenChange={setShowAllServices}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full max-w-md mx-auto flex items-center gap-2 border-primary/30 hover:bg-primary/5">
                <span>{showAllServices ? "Hide Details" : "View All Services"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllServices ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div key={service.title} className="p-6 rounded-lg border bg-background hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* Is Your Boiler Ready? */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl overflow-hidden border border-amber-200 dark:border-amber-800">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Boiler Image */}
            <div className="relative h-64 lg:h-auto lg:col-span-1">
              <img 
                src="/Boiler.png" 
                alt="Professional boiler maintenance and servicing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-50/80 dark:to-amber-950/80 lg:block hidden" />
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2 p-4 sm:p-6 md:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <ThermometerSun className="w-4 h-4" />
                  Winter Readiness Check
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4">Is Your Boiler Ready for Winter?</h2>
                <p className="text-muted-foreground">
                  UK boilers work hardest during winter months. Spot these warning signs early to avoid cold showers, 
                  expensive emergency callouts, or worse - a complete breakdown when you need heating most.
                </p>
              </div>

              {/* Warning Signs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {boilerWarnings.map((warning, index) => (
                  <div key={index} className="p-3 rounded-lg bg-background/80 border border-amber-200 dark:border-amber-700 flex items-start gap-3 hover:bg-background transition-colors">
                    <div className="p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/50">
                      <warning.icon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{warning.sign}</div>
                      <div className="text-xs text-muted-foreground">{warning.meaning}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Collapsible open={showBoilerDetails} onOpenChange={setShowBoilerDetails}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full max-w-md mx-auto flex items-center gap-2 bg-background">
                <span>{showBoilerDetails ? "Hide Details" : "When to Service vs Replace"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showBoilerDetails ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-background border">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Service Your Boiler When...
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Boiler is under 10 years old",
                      "Minor issues like pressure drops",
                      "Annual service is due (required for warranty)",
                      "Strange noises just started",
                      "Heating is slightly less efficient"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-lg bg-background border">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Consider Replacing When...
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Boiler is 15+ years old",
                      "Frequent breakdowns (3+ per year)",
                      "Parts are hard to source",
                      "Energy bills are rising significantly",
                      "Carbon monoxide detector keeps triggering"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Landlord Compliance Callout */}
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Landlord Compliance Reminder</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      UK law requires landlords to have a Gas Safety Certificate (CP12) renewed annually. 
                      Failure to comply can result in fines up to £6,000 or imprisonment.
                    </p>
                    <Button 
                      size="sm" 
                      onClick={() => handleQuoteRequest("Annual Gas Safety Check (CP12)")}
                    >
                      Book Annual Gas Safety Check
                    </Button>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => handleQuoteRequest("Boiler Service")}
            >
              <Flame className="w-4 h-4 mr-2" />
              Get Boiler Service Quote
            </Button>
          </div>
        </section>

        {/* Trust Metrics */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgressMetric
              icon={Clock}
              value={95}
              label="On-Time Arrival"
              description="Punctual service appointments"
              percentage={95}
              variant="success"
              delay={0}
            />
            <ProgressMetric
              icon={Shield}
              value={100}
              label="Safety Compliance"
              description="All work meets regulations"
              percentage={100}
              variant="success"
              delay={200}
            />
            <ProgressMetric
              icon={Award}
              value={98}
              label="Customer Satisfaction"
              description="Rated excellent by customers"
              percentage={98}
              variant="success"
              delay={400}
            />
          </div>
        </section>

        {/* How It Works - Split Layout with Image */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.desc}</div>
                </div>
              ))}
            </div>

            <Collapsible open={showProcessDetails} onOpenChange={setShowProcessDetails}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full max-w-md flex items-center gap-2 border-primary/30">
                  <span>{showProcessDetails ? "Hide Details" : "Learn More About Our Process"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showProcessDetails ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {processSteps.map((step) => (
                    <div key={step.step} className="p-4 rounded-lg border bg-background">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                          {step.step}
                        </span>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.details}</p>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="lg:col-span-2 relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src={teamCollaboration} 
              alt="Our team of certified plumbers and electricians collaborating on projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="text-lg font-semibold text-foreground">Trusted by 500+ Properties</div>
              <div className="text-sm text-muted-foreground">Across London and surrounding areas</div>
            </div>
          </div>
        </section>

        {/* Certifications - Colored backgrounds */}
        <section className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-xl p-8 border border-primary/10">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Our Credentials</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: BadgeCheck, title: "Gas Safe", desc: "Registered engineers", color: "bg-blue-500" },
              { icon: Zap, title: "NICEIC", desc: "Certified electricians", color: "bg-amber-500" },
              { icon: Shield, title: "£2M Insured", desc: "Full liability cover", color: "bg-green-500" },
              { icon: ClipboardCheck, title: "24-Month", desc: "Work guarantee", color: "bg-purple-500" }
            ].map((cred) => (
              <div key={cred.title} className="text-center p-6 rounded-xl bg-background border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 rounded-full ${cred.color} flex items-center justify-center mx-auto mb-3`}>
                  <cred.icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-bold text-lg">{cred.title}</div>
                <div className="text-sm text-muted-foreground">{cred.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Services - Softer styling */}
        <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/50">
                  <Phone className="w-6 h-6 text-amber-700 dark:text-amber-300" />
                </div>
                <h2 className="font-heading text-2xl font-bold">We're Here When You Need Us</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Gas leaks, electrical faults, burst pipes, or heating failures? Our certified engineers 
                are on call 24/7, 365 days a year. We aim to be with you within 1 hour for emergencies.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="p-3 rounded-lg bg-background border">
                  <div className="font-semibold">Response Time</div>
                  <div className="text-muted-foreground">Within 1 hour</div>
                </div>
                <div className="p-3 rounded-lg bg-background border">
                  <div className="font-semibold">Availability</div>
                  <div className="text-muted-foreground">24/7, 365 days</div>
                </div>
              </div>
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => handleQuoteRequest("Emergency Plumber/Electrician")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Request Emergency Service
              </Button>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src={teamWorking} 
                alt="Emergency response team ready for urgent plumbing and electrical repairs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <TestimonialCards />
        </section>

        {/* Final CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Gas Safe registered plumbers and NICEIC certified electricians delivering safe, compliant work 
            with full guarantees. Get a no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => handleQuoteRequest("Plumber & Electrician Services")}>
              Get Professional Quote
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleQuoteRequest("Schedule Inspection")}>
              Schedule Inspection
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlumberElectrician;
