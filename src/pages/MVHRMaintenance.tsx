import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResearchBadge } from "@/components/ResearchBadge";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { Separator } from "@/components/ui/separator";
import { handleQuoteRequest } from "@/utils/quote";
import { 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Thermometer,
  Wind,
  Zap,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Leaf,
  Droplets,
  Home,
  Volume2,
  Filter,
  Building2,
  Users,
  Wrench,
  Star,
  ChevronDown,
  ArrowRight,
  Heart,
  Phone
} from "lucide-react";

import heroImage from "@/assets/mvhr-installation.jpg";
import systemInspectionImage from "@/assets/system-inspection.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import EnhancedFAQSchema from "@/components/EnhancedFAQSchema";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import { generateBreadcrumbSchema, generateFAQSchema, generateMVHRServiceSchema } from "@/utils/structuredData";

import { TrustMetrics } from "@/components/TrustMetrics";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const mvhrFaqs = [
  { question: "How often should MVHR filters be replaced?", answer: "MVHR filters should be checked every 3 months and replaced when visibly dirty, typically every 3-6 months. In urban areas with higher pollution, more frequent replacement may be needed." },
  { question: "What are signs my MVHR system needs servicing?", answer: "Signs include reduced airflow, increased noise, condensation on windows, musty odours, higher energy bills, and visible dust around vents. These indicate filter or system issues." },
  { question: "Can I clean MVHR filters myself?", answer: "Basic filter checks are DIY-friendly, but professional service is recommended annually for heat exchanger cleaning, fan motor inspection, ductwork checks, and system calibration." },
  { question: "How much does MVHR maintenance cost?", answer: "Filter replacement costs £40-100 per set. Annual professional service costs £150-300. System neglect can lead to £1,500-3,500 motor replacements and higher energy bills." },
  { question: "What happens if I don't change MVHR filters?", answer: "Dirty filters reduce airflow by up to 55%, decrease heat recovery efficiency, strain fan motors leading to premature failure, and allow allergens and pollutants to bypass filtration." },
  { question: "Does MVHR maintenance affect energy bills?", answer: "Yes, clean MVHR systems recover up to 92% of heat from extracted air. Dirty systems can lose 60%+ of this efficiency, adding £50-100 monthly to heating costs." }
];

const MVHRMaintenance = () => {
  const [showMvhrDetails, setShowMvhrDetails] = useState(false);
  const [showComplianceDetails, setShowComplianceDetails] = useState(false);

  const keyBenefits = [
    {
      icon: Volume2,
      title: "Ultra-Quiet Units",
      description: "Minimal Noise & Disturbance",
      detail: "Professional maintenance keeps fan motors balanced and quiet"
    },
    {
      icon: Wind,
      title: "Cooling",
      description: "Purge Ventilation Preventing Overheating", 
      detail: "Clean systems provide effective summer bypass cooling"
    },
    {
      icon: Droplets,
      title: "Prevents Damp",
      description: "Reduces Humidity in the Air",
      detail: "Optimal humidity control through efficient heat recovery"
    },
    {
      icon: Home,
      title: "Reduces Condensation",
      description: "Reduces Mould Build Up",
      detail: "Prevents condensation that leads to mold and damage"
    },
    {
      icon: Filter,
      title: "Air Quality", 
      description: "Filters out Pollutants, Allergens, and Contaminants",
      detail: "Clean filters ensure maximum air purification"
    }
  ];

  const whoWeHelp = [
    {
      icon: Home,
      title: "Homeowners",
      description: "Breathe cleaner air and reduce energy bills",
      color: "bg-blue-500/10 border-blue-500/30 text-blue-600"
    },
    {
      icon: Building2,
      title: "Landlords",
      description: "Meet ventilation compliance for new-build properties",
      color: "bg-orange-500/10 border-orange-500/30 text-orange-600"
    },
    {
      icon: Wrench,
      title: "Property Developers",
      description: "Maintain system warranties and handover quality",
      color: "bg-teal-500/10 border-teal-500/30 text-teal-600"
    },
    {
      icon: Users,
      title: "Facilities Managers",
      description: "Manage multi-unit MVHR systems efficiently",
      color: "bg-purple-500/10 border-purple-500/30 text-purple-600"
    }
  ];

  const signsYouNeedService = [
    {
      icon: Wind,
      symptom: "Reduced airflow from vents",
      cause: "Clogged filters restricting air movement",
      color: "bg-orange-500/10 border-orange-500/30"
    },
    {
      icon: Droplets,
      symptom: "Condensation on windows",
      cause: "Poor humidity control from reduced efficiency",
      color: "bg-amber-500/10 border-amber-500/30"
    },
    {
      icon: AlertTriangle,
      symptom: "Musty or stale smell",
      cause: "Mold growth in system or dirty filters",
      color: "bg-purple-500/10 border-purple-500/30"
    },
    {
      icon: TrendingUp,
      symptom: "Higher energy bills",
      cause: "Lost heat recovery efficiency",
      color: "bg-slate-500/10 border-slate-500/30"
    }
  ];

  const serviceOutcomes = [
    {
      icon: Wind,
      title: "Cleaner Air",
      value: "99.9%",
      description: "Pollutants filtered",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Lower Bills",
      value: "92%",
      description: "Heat recovery restored",
      color: "text-blue-500"
    },
    {
      icon: Volume2,
      title: "Quieter Operation",
      value: "Whisper",
      description: "Balanced, quiet fans",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      value: "12 mo",
      description: "Service guarantee",
      color: "text-orange-500"
    }
  ];

  const testimonials = [
    {
      quote: "We had condensation issues for months. After the MVHR service, windows are clear and the air feels so much fresher. Wish we'd called sooner.",
      name: "Sarah & James",
      role: "Homeowners",
      location: "New-build in Stratford",
      rating: 5
    },
    {
      quote: "Managing 40 flats with MVHR systems was a nightmare until we found Mainteniq. Their filter subscription service keeps everything running smoothly.",
      name: "David Chen",
      role: "Property Manager",
      location: "Embassy Gardens",
      rating: 5
    },
    {
      quote: "The engineer explained everything clearly and showed me the dirty filters - shocking! Energy bills are noticeably lower now.",
      name: "Rebecca Wilson",
      role: "Landlord",
      location: "Eco-home in Greenwich",
      rating: 5
    }
  ];

  const maintenanceChecklist = [
    { task: "Filter replacement & cleaning", frequency: "Every 3 months", benefit: "Optimal airflow & air quality" },
    { task: "Heat exchanger cleaning", frequency: "Bi-annually", benefit: "Maximum heat recovery efficiency" },
    { task: "Fan motor inspection", frequency: "Annually", benefit: "Quiet operation & longevity" },
    { task: "Ductwork inspection & cleaning", frequency: "Annually", benefit: "Prevents contamination spread" },
    { task: "Control system calibration", frequency: "Annually", benefit: "Optimal performance & energy use" },
    { task: "Condensate drain maintenance", frequency: "Bi-annually", benefit: "Prevents water damage & mold" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-success/5">
      <SEOHead
        title="MVHR Maintenance London | Filter Replacement & Heat Recovery Service"
        description="Professional MVHR maintenance services in London. Filter replacement, heat exchanger cleaning, ductwork inspection. Improve air quality & energy efficiency. Free quote."
        keywords="MVHR maintenance London, mechanical ventilation heat recovery, MVHR filter replacement, heat recovery service, MVHR cleaning, ventilation maintenance, air quality service"
        canonicalUrl="https://www.mainteniq.co.uk/mvhr-maintenance"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "MVHR Maintenance", url: "https://www.mainteniq.co.uk/mvhr-maintenance" }
        ])}
        faqData={generateFAQSchema(mvhrFaqs)}
        serviceData={generateMVHRServiceSchema()}
      />
      <EnhancedFAQSchema faqs={mvhrFaqs} pageTitle="MVHR Maintenance" />
      <LocalBusinessSchema 
        businessType="MVHR Maintenance" 
        serviceName="MVHR Filter Replacement & Heat Recovery Service"
        serviceDescription="Professional MVHR maintenance services in London including filter replacement, heat exchanger cleaning, and ductwork inspection"
      />
      <VoiceSearchOptimizer faqs={mvhrFaqs} serviceName="MVHR Maintenance" />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-success/90 via-success/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-2" />
              MVHR Maintenance & Air Quality Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              MVHR Filter Maintenance: 
              <span className="text-white"> Clean Filters = </span>
              Healthy Living
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Your MVHR filters are the frontline defense against pollutants, allergens, and contaminated air. 
              Regular maintenance ensures clean air, lower energy bills, and system longevity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("MVHR Maintenance Quote")}>
                Get Free Quote
              </Button>
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency MVHR Filter Replacement - Urgent")}>
                <Phone className="w-4 h-4 mr-2" />
                Emergency Filter Replacement
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Help Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Who We Help</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                MVHR Specialists for Every Property Type
              </h2>
              <p className="text-muted-foreground mb-8">
                From new-build homes with integrated ventilation to multi-unit developments, 
                we help property owners maintain optimal air quality and energy efficiency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whoWeHelp.map((audience, index) => (
                  <AnimatedStatCard key={index} delay={index * 100}>
                    <Card className={`border-2 ${audience.color} hover:shadow-lg transition-all duration-300`}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${audience.color}`}>
                          <audience.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{audience.title}</h3>
                          <p className="text-sm text-muted-foreground">{audience.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedStatCard>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <AnimatedChart delay={400}>
                <AspectRatio ratio={4/3}>
                  <img
                    src={heroImage}
                    alt="Professional MVHR installation and maintenance work"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="absolute -bottom-4 -right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-bold">500+ MVHR Systems</span> Serviced
                </div>
              </AnimatedChart>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetrics />

      {/* What is MVHR Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Understanding MVHR</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is an MVHR System?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mechanical Ventilation with Heat Recovery is the ventilation system of choice for modern, energy-efficient homes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <AnimatedStatCard>
              <Card className="h-full border-success/20 hover:border-success/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-7 h-7 text-success" />
                  </div>
                  <h3 className="font-bold mb-2">Where They're Found</h3>
                  <p className="text-sm text-muted-foreground">
                    New-build homes, apartments, passive houses, eco-homes, and modern office buildings
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={150}>
              <Card className="h-full border-success/20 hover:border-success/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-7 h-7 text-success" />
                  </div>
                  <h3 className="font-bold mb-2">How They Work</h3>
                  <p className="text-sm text-muted-foreground">
                    Extracts stale air while recovering up to 92% of heat, transferring it to incoming fresh air
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={300}>
              <Card className="h-full border-success/20 hover:border-success/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-7 h-7 text-success" />
                  </div>
                  <h3 className="font-bold mb-2">Why Maintenance Matters</h3>
                  <p className="text-sm text-muted-foreground">
                    Filters clog, heat recovery drops, air quality degrades - regular service prevents costly failures
                  </p>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>

          <Collapsible open={showMvhrDetails} onOpenChange={setShowMvhrDetails}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mx-auto flex items-center gap-2">
                Learn More About MVHR Systems
                <ChevronDown className={`w-4 h-4 transition-transform ${showMvhrDetails ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3">MVHR Components</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span><strong>Heat Exchanger:</strong> Transfers heat between air streams without mixing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span><strong>Supply & Extract Fans:</strong> Move air through the system continuously</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span><strong>Filters:</strong> Remove pollutants, pollen, and particulates from incoming air</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span><strong>Ductwork:</strong> Distributes fresh air and extracts stale air from rooms</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">Benefits of MVHR</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Up to 92% heat recovery reduces heating costs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Continuous fresh air without opening windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Reduces condensation, mold, and damp problems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Filters pollen and pollutants for allergy sufferers</span>
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

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-success/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-success mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              5 Key Benefits of Professional MVHR Maintenance
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Regular maintenance ensures your MVHR system delivers optimal comfort, air quality, and energy efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {keyBenefits.map((benefit, index) => (
              <AnimatedStatCard key={index} delay={index * 100} className="h-full">
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-success/20 hover:border-success/40">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-success">{benefit.title}</h3>
                    <p className="text-sm font-medium mb-2">{benefit.description}</p>
                    <p className="text-xs text-muted-foreground">{benefit.detail}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Before/After Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedChart delay={200}>
            <Card className="bg-card/80 backdrop-blur border-2 border-success/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">See The Difference Maintenance Makes</h3>
                  <p className="text-lg text-muted-foreground">Real MVHR filters showing the dramatic impact of regular replacement</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <AspectRatio ratio={16/10}>
                      <img
                        src="/MVPR0dirty.webp"
                        alt="Dirty MVHR filter clogged with dust reducing airflow and efficiency"
                        loading="lazy"
                        className="w-full h-full object-contain rounded-lg bg-muted"
                      />
                    </AspectRatio>
                    <div className="mt-3 text-center">
                      <Badge variant="destructive">Before: Clogged Filter</Badge>
                      <p className="text-sm text-muted-foreground mt-1">45% airflow, 60% heat loss</p>
                    </div>
                  </div>
                  <div>
                    <AspectRatio ratio={16/10}>
                      <img
                        src="/MVHRclean.webp"
                        alt="Clean MVHR filter with clear pleats ensuring optimal airflow and air quality"
                        loading="lazy"
                        className="w-full h-full object-contain rounded-lg bg-muted"
                      />
                    </AspectRatio>
                    <div className="mt-3 text-center">
                      <Badge className="bg-success hover:bg-success/90">After: Clean Filter</Badge>
                      <p className="text-sm text-muted-foreground mt-1">100% airflow, 92% heat recovery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* Signs You Need Service Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Symptom Checker</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signs Your MVHR Needs Service
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Recognise these symptoms? Your MVHR system may be overdue for professional attention.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {signsYouNeedService.map((sign, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className={`h-full border-2 ${sign.color} hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${sign.color}`}>
                      <sign.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold mb-2">{sign.symptom}</h3>
                    <p className="text-sm text-muted-foreground">{sign.cause}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => handleQuoteRequest("MVHR Service - Symptoms Identified")} className="bg-success hover:bg-success/90">
              Book Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get From Professional Servicing */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Service Outcomes</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get From Professional Servicing
              </h2>
              <p className="text-muted-foreground mb-8">
                Our MVHR maintenance delivers measurable improvements to your air quality, energy efficiency, and system performance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {serviceOutcomes.map((outcome, index) => (
                  <AnimatedStatCard key={index} delay={index * 100}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <outcome.icon className={`w-6 h-6 ${outcome.color}`} />
                          <span className={`text-2xl font-bold ${outcome.color}`}>{outcome.value}</span>
                        </div>
                        <h3 className="font-semibold">{outcome.title}</h3>
                        <p className="text-sm text-muted-foreground">{outcome.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedStatCard>
                ))}
              </div>
            </div>
            
            <div>
              <AnimatedChart delay={400}>
                <AspectRatio ratio={4/3}>
                  <img
                    src={systemInspectionImage}
                    alt="Professional MVHR system inspection and maintenance"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </AspectRatio>
              </AnimatedChart>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Maintenance Schedule */}
      <section className="py-12 sm:py-16 md:py-20 bg-success/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-success mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional MVHR Maintenance Schedule
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures your system stays clean for optimal air quality and efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedChart delay={200}>
              <Card className="mb-8 border-success/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">3</span>
                      </div>
                      <h3 className="font-bold mb-2">Every 3 Months</h3>
                      <p className="text-sm text-muted-foreground">Filter inspection & replacement if needed</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">6</span>
                      </div>
                      <h3 className="font-bold mb-2">Every 6 Months</h3>
                      <p className="text-sm text-muted-foreground">Deep filter clean & system inspection</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">12</span>
                      </div>
                      <h3 className="font-bold mb-2">Annual Service</h3>
                      <p className="text-sm text-muted-foreground">Complete system maintenance & calibration</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                      <h3 className="font-bold mb-2">Emergency</h3>
                      <p className="text-sm text-muted-foreground">24/7 filter replacement service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedChart>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedStatCard delay={400}>
                <Card className="h-full border-success/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-success">Professional vs DIY Filter Changes</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Proper filter grade selection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">System rebalancing after changes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Heat exchanger condition check</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Ductwork contamination assessment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>

              <AnimatedStatCard delay={600}>
                <Card className="h-full border-success/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-success">Filter Subscription Service</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Automatic quarterly delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Professional installation included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">System health monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Priority emergency support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Regular Maintenance vs System Replacement Costs
            </h2>
            <ResearchBadge claimId="mvhr-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Annual MVHR Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={250} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quarterly filter changes</li>
                    <li>• Heat exchanger cleaning</li>
                    <li>• System optimization</li>
                    <li>• Air quality monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">System Replacement</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={4000} prefix="£" suffix="/system" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New MVHR unit</li>
                    <li>• Installation & commissioning</li>
                    <li>• Ductwork modifications</li>
                    <li>• Lost energy savings</li>
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
              UK Building Regulations & Air Quality Standards
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              MVHR maintenance is essential for meeting UK ventilation standards and indoor air quality requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Regulations Part F</h3>
                  <p className="text-muted-foreground mb-4">
                    MVHR systems must provide adequate ventilation rates. Poor maintenance can cause 
                    systems to fail compliance testing and building regulation requirements.
                  </p>
                  <ResearchBadge claimId="part-f-ventilation" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Indoor Air Quality Standards</h3>
                  <p className="text-muted-foreground mb-4">
                    Workplace and residential air quality standards require properly maintained ventilation. 
                    Poor MVHR maintenance can lead to health complaints and legal liability.
                  </p>
                  <ResearchBadge claimId="indoor-air-quality" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>

          <Collapsible open={showComplianceDetails} onOpenChange={setShowComplianceDetails}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mx-auto flex items-center gap-2">
                View Full Compliance Requirements
                <ChevronDown className={`w-4 h-4 transition-transform ${showComplianceDetails ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3">Regulatory Requirements</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Part F: Adequate ventilation rates for all habitable rooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Part L: Energy efficiency documentation including MVHR performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>SAP calculations require commissioning certification</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">Landlord Obligations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Maintain MVHR systems in good working order</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Provide filter replacement schedule to tenants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                          <span>Document annual maintenance for compliance records</span>
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

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Customer Stories</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from property owners who trust us with their MVHR maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedStatCard key={index} delay={index * 150}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
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

      {/* Call to Action */}
      <section className="py-16 bg-success">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Breathe Easy with Professional MVHR Care
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our MVHR specialists ensure your system delivers clean, healthy air while maximizing energy recovery and efficiency. 
            Protect your investment and your health with regular professional maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest("MVHR Filter Maintenance")}>
              Get Filter Maintenance Quote
            </Button>
            <Button size="lg" variant="secondary" onClick={() => handleQuoteRequest("MVHR Filter Subscription Service")}>
              Filter Subscription Service
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVHRMaintenance;
