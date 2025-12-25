import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResearchBadge } from "@/components/ResearchBadge";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { handleQuoteRequest } from "@/utils/quote";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { TrustMetrics } from "@/components/TrustMetrics";
import SEOHead from "@/components/SEOHead";
import EnhancedFAQSchema from "@/components/EnhancedFAQSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import { 
  Wind,
  CheckCircle,
  XCircle,
  Shield,
  Building2,
  Users,
  Briefcase,
  Home,
  ChevronDown,
  Thermometer,
  Droplets,
  Volume2,
  Clock,
  Zap,
  Star,
  Quote,
  MapPin,
  Fan,
  Settings,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/fcu-commercial.jpg";
import fcuInstallationImage from "@/assets/fcu-installation.jpg";
import systemInspectionImage from "@/assets/system-inspection.jpg";
import { generateBreadcrumbSchema, generateFAQSchema, generateFCUServiceSchema } from "@/utils/structuredData";

const fcuFaqs = [
  { question: "What is an FCU (Fan Coil Unit)?", answer: "A Fan Coil Unit is a heating/cooling device consisting of a fan and heating/cooling coils. It circulates air through the coils to maintain room temperature in commercial and residential buildings." },
  { question: "How often should FCU filters be changed?", answer: "FCU filters should be checked monthly and replaced every 1-3 months depending on usage and air quality. Commercial environments with high foot traffic may need more frequent changes." },
  { question: "What's the difference between 2-pipe and 4-pipe FCUs?", answer: "2-pipe FCUs have one coil for both heating and cooling (switching seasonally), while 4-pipe systems have separate heating and cooling coils allowing simultaneous operation. 4-pipe systems offer better comfort control but cost more to install and maintain." },
  { question: "What are signs my FCU needs maintenance?", answer: "Common signs include poor airflow, unusual noises, water leaks or drips, inconsistent temperatures, higher energy bills, and musty odours indicating mold or bacteria growth." },
  { question: "How much does FCU maintenance cost in the UK?", answer: "FCU maintenance typically costs £150-300 per unit annually for preventive service. Emergency repairs can cost £500-3,000+ depending on the damage and parts needed." },
  { question: "Do FCUs require TM44 air conditioning inspections?", answer: "Yes, FCUs over 12kW (or combined systems over 70kW) require TM44 inspections every 5 years under the Energy Performance of Buildings Regulations. Non-compliance can result in fines up to £300 per unit." },
  { question: "Can dirty FCU coils affect indoor air quality?", answer: "Yes, dirty coils harbour bacteria, mold, and allergens that circulate through your space. Regular cleaning improves air quality and prevents health issues for building occupants." },
  { question: "What is included in professional FCU servicing?", answer: "Professional FCU service includes filter replacement, coil cleaning, condensate drain clearance, fan motor inspection, electrical checks, control calibration, and safety testing." }
];

const FCUMaintenance = () => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const audienceCards = [
    {
      icon: Building2,
      title: "Facilities Managers",
      description: "Keep tenants comfortable year-round with reliable climate control",
      color: "bg-blue-500/10 border-blue-500/30 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Commercial Landlords",
      description: "Protect property value and reduce tenant complaints",
      color: "bg-orange-500/10 border-orange-500/30 text-orange-600"
    },
    {
      icon: Users,
      title: "Office Managers",
      description: "Maintain productive work environments with optimal air quality",
      color: "bg-teal-500/10 border-teal-500/30 text-teal-600"
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Streamline maintenance across your entire portfolio",
      color: "bg-purple-500/10 border-purple-500/30 text-purple-600"
    }
  ];

  const symptomCards = [
    {
      icon: Wind,
      title: "Weak airflow or no cooling",
      description: "Blocked filters or fan motor issues reducing performance",
      color: "bg-orange-500/10 border-orange-500/30",
      iconColor: "text-orange-500"
    },
    {
      icon: Thermometer,
      title: "Inconsistent temperatures",
      description: "Control or thermostat problems causing hot/cold spots",
      color: "bg-red-500/10 border-red-500/30",
      iconColor: "text-red-500"
    },
    {
      icon: Droplets,
      title: "Water dripping from unit",
      description: "Blocked condensate drain causing water damage risk",
      color: "bg-purple-500/10 border-purple-500/30",
      iconColor: "text-purple-500"
    },
    {
      icon: Volume2,
      title: "Musty smell or unusual noise",
      description: "Mold growth on coils or worn bearings need attention",
      color: "bg-slate-500/10 border-slate-500/30",
      iconColor: "text-slate-500"
    }
  ];

  const outcomeCards = [
    {
      icon: Wind,
      title: "Better Air Quality",
      description: "Cleaner, healthier indoor environment for everyone",
      metric: "99% filter efficiency"
    },
    {
      icon: Zap,
      title: "Lower Energy Bills",
      description: "Optimised performance reduces running costs",
      metric: "Up to 25% savings"
    },
    {
      icon: Volume2,
      title: "Quieter Operation",
      description: "No rattling fans or noisy bearings",
      metric: "Whisper-quiet"
    },
    {
      icon: Clock,
      title: "Extended Lifespan",
      description: "Proper care extends equipment life significantly",
      metric: "15+ years vs 8-10"
    }
  ];

  const maintenanceChecklist = [
    { task: "Filter replacement/cleaning", frequency: "Monthly", benefit: "Optimal airflow & air quality" },
    { task: "Coil cleaning & inspection", frequency: "Quarterly", benefit: "Maximum heat transfer efficiency" },
    { task: "Condensate drain clearance", frequency: "Quarterly", benefit: "Prevents water damage & mold" },
    { task: "Fan motor lubrication", frequency: "Bi-annually", benefit: "Extends motor lifespan" },
    { task: "Control system calibration", frequency: "Annually", benefit: "Accurate temperature control" },
    { task: "Electrical connections check", frequency: "Annually", benefit: "Safety & reliable operation" }
  ];

  const testimonials = [
    {
      quote: "Since switching to Mainteniq for our FCU maintenance, we've had zero complaints about temperature issues. The quarterly visits keep everything running perfectly.",
      author: "James Wilson",
      role: "Facilities Manager",
      location: "Canary Wharf Office Complex",
      rating: 5
    },
    {
      quote: "The team identified a failing motor before it caused a breakdown. That saved us thousands in emergency repairs and kept our tenants happy.",
      author: "Sarah Ahmed",
      role: "Commercial Property Owner",
      location: "City of London",
      rating: 5
    },
    {
      quote: "Managing 50+ FCUs across multiple buildings was a nightmare until we found Mainteniq. Their systematic approach and reporting makes my job so much easier.",
      author: "Michael Chen",
      role: "Property Portfolio Manager",
      location: "West End, London",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent-blue/5">
      <SEOHead 
        title="FCU Maintenance London | Fan Coil Unit Servicing | Mainteniq"
        description="Professional FCU maintenance and servicing across London. Keep your fan coil units running efficiently with our certified engineers. Preventive maintenance from £150/unit."
        keywords="FCU maintenance London, fan coil unit servicing, FCU cleaning, commercial HVAC maintenance, air conditioning service UK, TM44 inspection, commercial building HVAC"
        canonicalUrl="https://www.mainteniq.co.uk/fcu-maintenance"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "FCU Maintenance", url: "https://www.mainteniq.co.uk/fcu-maintenance" }
        ])}
        faqData={generateFAQSchema(fcuFaqs)}
        serviceData={generateFCUServiceSchema()}
      />
      <EnhancedFAQSchema faqs={fcuFaqs} pageTitle="FCU Maintenance" />
      <LocalBusinessSchema 
        businessType="FCU Maintenance" 
        serviceName="Fan Coil Unit Servicing"
        serviceDescription="Professional FCU maintenance and servicing across London to keep your fan coil units running efficiently"
      />
      <VoiceSearchOptimizer faqs={fcuFaqs} serviceName="FCU Maintenance" />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Wind className="w-4 h-4 mr-2" />
              FCU Maintenance Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              FCU Maintenance: 
              <span className="text-accent-blue"> Prevent Costly </span>
              System Failures
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Fan Coil Units require regular maintenance to prevent efficiency loss, water damage, and complete system breakdowns. 
              Don't wait for emergency repairs that cost 10x more than preventive maintenance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("FCU Maintenance Service")}>
                Schedule FCU Service
              </Button>
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency FCU Repair - Urgent")}>
                Emergency FCU Repair
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Help Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Who We Help</Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                FCU Maintenance for London Commercial Properties
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you manage a single office or a portfolio of commercial buildings, we keep your fan coil units running at peak performance all year round.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {audienceCards.map((card, index) => (
                  <AnimatedStatCard key={index} delay={index * 100}>
                    <Card className={`h-full border ${card.color.split(' ')[1]} hover:shadow-md transition-all`}>
                      <CardContent className="p-4">
                        <div className={`w-10 h-10 rounded-lg ${card.color.split(' ')[0]} flex items-center justify-center mb-3`}>
                          <card.icon className={`w-5 h-5 ${card.color.split(' ')[2]}`} />
                        </div>
                        <h3 className="font-semibold mb-1">{card.title}</h3>
                        <p className="text-sm text-muted-foreground">{card.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedStatCard>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={fcuInstallationImage} 
                alt="Professional FCU maintenance technician servicing a fan coil unit in a London commercial building"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">500+ FCUs Serviced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetrics />

      {/* What is an FCU? Educational Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Understanding Your System</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What is an FCU?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Fan Coil Units are essential climate control systems found in most commercial buildings. Understanding how they work helps you recognise when maintenance is needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <AnimatedStatCard>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Where They're Found</h3>
                  <p className="text-muted-foreground text-sm">
                    Offices, hotels, hospitals, retail spaces, and apartment blocks use FCUs for individual room climate control.
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={100}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                    <Fan className="w-7 h-7 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">How They Work</h3>
                  <p className="text-muted-foreground text-sm">
                    A fan circulates room air through heating or cooling coils connected to central hot/chilled water systems.
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Why Maintenance Matters</h3>
                  <p className="text-muted-foreground text-sm">
                    Filters clog, coils foul with dust, and drains block - causing inefficiency, water damage, and poor air quality.
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>

          <Collapsible open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mx-auto flex items-center gap-2">
                Learn More About FCU Systems
                <ChevronDown className={`w-4 h-4 transition-transform ${learnMoreOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <Card className="bg-card/80">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">FCU Types We Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          2-pipe heating/cooling systems
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          4-pipe simultaneous heating/cooling
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Ceiling-mounted cassette units
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Floor-standing vertical units
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Ducted concealed units
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Common FCU Brands</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Trane, Carrier, Daikin
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Johnson Controls, Honeywell
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Myson, Biddle, Dunham-Bush
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          Aermec, Ciat, Climaveneta
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          All other major manufacturers
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Signs You Need Service - Symptom Based */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-amber-500/50 text-amber-600">
              <AlertCircle className="w-4 h-4 mr-2" />
              Warning Signs
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Signs Your FCU Needs Service
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognising these symptoms early prevents costly repairs and keeps your building comfortable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptomCards.map((card, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className={`h-full border ${card.color.split(' ')[1]} hover:shadow-lg transition-all`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${card.color.split(' ')[0]} flex items-center justify-center mb-4`}>
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => handleQuoteRequest("FCU Service - Symptoms Noticed")}>
              Experiencing Any of These? Get Help Now
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get From Professional Servicing */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent-blue/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-4 border-success/50 text-success">
                <CheckCircle className="w-4 h-4 mr-2" />
                Service Outcomes
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What You Get From Professional Servicing
              </h2>
              <p className="text-muted-foreground mb-8">
                Regular FCU maintenance delivers measurable improvements in comfort, efficiency, and equipment lifespan.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomeCards.map((card, index) => (
                  <AnimatedStatCard key={index} delay={index * 100}>
                    <Card className="h-full bg-card/80 hover:bg-card transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                            <card.icon className="w-5 h-5 text-success" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{card.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{card.description}</p>
                            <Badge variant="secondary" className="text-xs">{card.metric}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedStatCard>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={systemInspectionImage} 
                alt="Professional technician performing FCU maintenance inspection in London commercial building"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FCU Maintenance Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional FCU Maintenance Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive maintenance that prevents problems before they start and keeps your FCUs running at peak efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {maintenanceChecklist.map((item, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-success" />
                      <Badge variant="outline">{item.frequency}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{item.task}</h3>
                    <p className="text-sm text-muted-foreground">{item.benefit}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Maintenance vs Emergency Repair Costs
            </h2>
            <ResearchBadge claimId="maintenance-cost-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Preventive Maintenance</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={300} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scheduled maintenance visits</li>
                    <li>• Filter replacements included</li>
                    <li>• 24/7 emergency cover</li>
                    <li>• Extended equipment life</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">Emergency Repairs</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={3000} prefix="£" suffix="/incident" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Call-out charges</li>
                    <li>• Replacement parts</li>
                    <li>• Business downtime costs</li>
                    <li>• Shortened equipment life</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>
        </div>
      </section>

      {/* UK Compliance Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              UK Compliance & Legal Requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay compliant with UK building regulations and avoid costly penalties with professional FCU maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">TM44 Air Conditioning Inspections</h3>
                  <p className="text-muted-foreground mb-4">
                    Commercial buildings with AC systems over 12kW must have regular TM44 inspections. 
                    Poor FCU maintenance can result in failed inspections and £300+ penalties.
                  </p>
                  <ResearchBadge claimId="tm44-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Landlord Maintenance Obligations</h3>
                  <p className="text-muted-foreground mb-4">
                    Commercial landlords must ensure HVAC systems are properly maintained. 
                    Tenant complaints about poor heating/cooling can lead to legal disputes and rent reductions.
                  </p>
                  <ResearchBadge claimId="landlord-obligations" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Client Feedback</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Common Questions</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              FCU Maintenance FAQs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about fan coil unit maintenance, costs, and compliance
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {fcuFaqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4 sm:p-6 hover:bg-muted/50 transition-colors text-left">
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions about FCU maintenance?</p>
            <Button variant="outline" onClick={() => handleQuoteRequest("FCU Maintenance Question")}>
              Ask Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't Wait for FCU Failure
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional FCU maintenance that prevents problems, saves money, and ensures compliance. 
            Our certified technicians service all FCU types across London and the South East.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest("FCU Maintenance Quote")}>
              Get FCU Maintenance Quote
            </Button>
            <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency FCU Repair - Urgent")}>
              Schedule Emergency Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FCUMaintenance;
