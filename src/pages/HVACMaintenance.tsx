import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { handleQuoteRequest } from "@/utils/quote";
import { CONTACT } from "@/config/contact";
import { 
  CheckCircle, 
  AlertTriangle, 
  Wrench, 
  Calendar, 
  Phone, 
  Shield, 
  Building2, 
  Snowflake, 
  Wind, 
  Thermometer, 
  ChevronDown, 
  Filter, 
  Scale, 
  FileText, 
  Heart, 
  XCircle,
  AlertCircle,
  Clock,
  Volume2,
  TrendingUp,
  Users,
  Home,
  Award,
  ArrowRight,
  Search,
  Settings,
  FileCheck
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-hvac.jpg";
import SEOHead from "@/components/SEOHead";
import EnhancedFAQSchema from "@/components/EnhancedFAQSchema";

const hvacFaqs = [
  { question: "How often should HVAC systems be serviced in the UK?", answer: "Commercial HVAC systems should be serviced quarterly, while residential systems need annual maintenance minimum. High-use environments like restaurants require monthly checks." },
  { question: "What does professional HVAC maintenance include?", answer: "HVAC maintenance includes filter replacement, coil cleaning, refrigerant checks, electrical inspections, control calibration, and safety testing to ensure optimal efficiency and compliance." },
  { question: "Is HVAC maintenance a legal requirement for UK businesses?", answer: "Yes, commercial buildings must comply with TM44 air conditioning inspections, F-Gas regulations for refrigerants, and health and safety requirements including Legionella risk assessments." },
  { question: "How much does HVAC maintenance cost in London?", answer: "HVAC maintenance costs vary from £200-500 for residential systems to £500-2,000+ for commercial systems annually, depending on size and complexity. Preventive maintenance saves 5-10x emergency repair costs." },
  { question: "What is TM44 compliance and do I need it?", answer: "TM44 is a mandatory air conditioning inspection for systems over 12kW in England and Wales. Non-compliance can result in penalties of £300+. Our engineers are TM44 certified." },
  { question: "What types of HVAC systems do you maintain?", answer: "We maintain FCUs, MVHR, HIU/CIU, VRF systems, central plant, commercial refrigeration including cold rooms, display cabinets, and chillers across London and the South East." }
];

// Compact system icons for initial view
const systemCategories = [
  { icon: Wind, title: "FCU", color: "text-blue-500" },
  { icon: Filter, title: "MVHR", color: "text-green-500" },
  { icon: Thermometer, title: "HIU/CIU", color: "text-orange-500" },
  { icon: Building2, title: "VRF", color: "text-purple-500" },
  { icon: Snowflake, title: "Refrigeration", color: "text-cyan-500" },
  { icon: Heart, title: "Central Plant", color: "text-red-500" }
];

// Symptom-based content
const signsYouNeedService = [
  {
    symptom: "AC not cooling properly?",
    description: "Warm air, uneven temperatures, or system running constantly without results",
    solution: "Coil cleaning, refrigerant check, and system optimization",
    icon: Thermometer
  },
  {
    symptom: "Unusual noises from vents?",
    description: "Rattling, buzzing, or grinding sounds from ducts or units",
    solution: "Component inspection, bearing lubrication, and fan belt adjustment",
    icon: Volume2
  },
  {
    symptom: "Higher energy bills?",
    description: "Electricity costs rising without increased usage",
    solution: "Filter replacement, efficiency testing, and control calibration",
    icon: TrendingUp
  },
  {
    symptom: "System keeps breaking down?",
    description: "Frequent repairs, error codes, or emergency callouts",
    solution: "Preventive maintenance plan to catch issues before they fail",
    icon: AlertCircle
  }
];

// Service process with icons
const serviceProcess = [
  { step: "01", title: "Assessment", description: "Full system inspection and diagnostics", duration: "30 mins", icon: Search },
  { step: "02", title: "Service", description: "Filter replacement, coil cleaning, testing", duration: "60 mins", icon: Wrench },
  { step: "03", title: "Calibration", description: "Controls optimization and efficiency check", duration: "20 mins", icon: Settings },
  { step: "04", title: "Certification", description: "Compliance documentation and report", duration: "10 mins", icon: FileCheck }
];

// Full system details for collapsible
const fullSystemDetails = [
  {
    icon: Wind,
    title: "FCU (Fan Coil Units)",
    description: "Commercial offices, hotels, shopping centers",
    highlights: ["Quarterly filter replacement", "Coil deep cleaning", "Control calibration"]
  },
  {
    icon: Filter,
    title: "MVHR (Heat Recovery)",
    description: "Residential and commercial buildings with fresh air",
    highlights: ["Filter replacement", "Heat exchanger cleaning", "Airflow balancing"]
  },
  {
    icon: Thermometer,
    title: "HIU/CIU (Interface Units)",
    description: "Apartment blocks, district heating networks",
    highlights: ["Plate descaling", "Valve servicing", "Pressure testing"]
  },
  {
    icon: Building2,
    title: "VRF Systems",
    description: "Large commercial buildings, multi-zone control",
    highlights: ["Refrigerant checks", "Outdoor unit cleaning", "System diagnostics"]
  },
  {
    icon: Snowflake,
    title: "Commercial Refrigeration",
    description: "Cold rooms, display cabinets, freezers",
    highlights: ["F-Gas certified", "Temperature calibration", "Food safety compliance"]
  },
  {
    icon: Heart,
    title: "Central Plant",
    description: "Hospitals, large facilities, data centers",
    highlights: ["24/7 monitoring", "Critical systems support", "Legionella control"]
  }
];

export default function HVACMaintenance() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <EnhancedFAQSchema faqs={hvacFaqs} pageTitle="HVAC Maintenance" />
      <SEOHead
        title="HVAC & Commercial Refrigeration Maintenance UK | Professional Service"
        description="Professional HVAC and commercial refrigeration maintenance for UK properties. FCU, MVHR, HIU, VRF systems, cold rooms, and display refrigeration. F-Gas certified engineers."
        keywords="HVAC maintenance London, commercial refrigeration service, FCU maintenance, MVHR servicing, VRF systems, F-Gas certified, TM44 inspection"
        canonicalUrl={`${window.location.origin}/hvac-maintenance`}
      />

      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Professional HVAC & Refrigeration Service
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              HVAC & Commercial Refrigeration
              <span className="text-white/90"> Maintenance Specialists</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Professional maintenance for all heating, ventilation, air conditioning, and commercial refrigeration systems. F-Gas certified, UK-wide coverage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={() => handleQuoteRequest("HVAC Maintenance")}>
                <Phone className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => handleQuoteRequest("HVAC Emergency Service")}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help - Educational Intro */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Help
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Stop dealing with unreliable contractors and compliance headaches. We provide certified engineers who maintain your systems properly, keep documentation up to date, and respond fast when things go wrong.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <Home className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Landlords</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <Building2 className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Facilities Managers</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Property Managers</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Business Owners</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/HVAC_SYSTEM.png" 
                alt="Professional HVAC system installation and maintenance" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Service - Symptom-Based */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signs Your HVAC Needs Service
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognise any of these? They're usually easy to fix with professional maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {signsYouNeedService.map((item, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.symptom}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-start gap-2 p-3 bg-success/10 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground font-medium">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => handleQuoteRequest("HVAC Maintenance")}>
              Get Professional Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Systems We Maintain - Compact with Collapsible */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Systems We Maintain
            </h2>
            <p className="text-muted-foreground">HVAC and commercial refrigeration across London and the South East</p>
          </div>
          
          {/* Compact Icon Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {systemCategories.map((system, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:scale-105 cursor-pointer" 
                onClick={() => setSystemsOpen(true)}
              >
                <system.icon className={`w-10 h-10 mb-2 ${system.color}`} />
                <span className="text-sm font-medium text-center">{system.title}</span>
              </div>
            ))}
          </div>
          
          {/* Collapsible Full Details */}
          <Collapsible open={systemsOpen} onOpenChange={setSystemsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <span>{systemsOpen ? "Hide" : "View"} All System Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${systemsOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullSystemDetails.map((system, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <system.icon className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{system.title}</h3>
                          <p className="text-muted-foreground mb-4 text-sm">{system.description}</p>
                          <ul className="space-y-1">
                            {system.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Trust Metrics Strip */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Clock, value: 24, suffix: "h", label: "Response Time", sublabel: "Emergency callouts" },
              { icon: Building2, value: 500, suffix: "+", label: "Systems Maintained", sublabel: "Commercial & residential" },
              { icon: Award, value: 98, suffix: "%", label: "Satisfaction Rate", sublabel: "First-visit resolution" },
              { icon: Shield, value: 10, suffix: "+", label: "Years Experience", sublabel: "F-Gas certified" }
            ].map((stat, index) => (
              <AnimatedStatCard key={index} delay={index * 150}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">
                      <AnimatedCounter value={stat.value} duration={2000} />
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-primary">{stat.suffix}</span>
                  </div>
                  <p className="font-semibold text-sm text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
                </div>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Process - Card Grid with Icons */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-muted-foreground">Comprehensive HVAC service typically takes 2 hours</p>
          </div>
          
          {/* Process Step Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {serviceProcess.map((step, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-xs font-medium">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">Step {step.step}</div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
          
          <Collapsible open={processOpen} onOpenChange={setProcessOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <span>{processOpen ? "Hide" : "View"} Full Service Checklist</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${processOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              
              <div className="mt-6 bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">What's Included in Every Service:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Filter replacement or cleaning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Coil inspection and cleaning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Refrigerant pressure check</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Electrical connections verification</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Control system calibration</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Safety device testing</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Performance efficiency report</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Compliance certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" onClick={() => handleQuoteRequest("HVAC Maintenance")}>
              Schedule Your Service
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                <Phone className="w-5 h-5 mr-2"/>
                Emergency: {CONTACT.phones.emergency}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Refrigeration - Brief Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center mb-6">
            <Snowflake className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Commercial Refrigeration
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl">
            F-Gas certified service for all commercial cooling systems. We keep your refrigeration compliant and your produce safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-destructive">Without Maintenance:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Food spoilage and waste</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Health & Safety violations</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Higher energy bills</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Failed health inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-primary">With Professional Service:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consistent safe temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lower energy costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extended equipment life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full compliance documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['refrigeration-details']} onOpenChange={() => toggleSection('refrigeration-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                <span>View Refrigeration Systems We Service</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['refrigeration-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 bg-background p-6 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Snowflake className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Cold Rooms</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Snowflake className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Display Cabinets</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Snowflake className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Blast Chillers</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Snowflake className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Ice Machines</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* UK Compliance Quick Reference */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center mb-6">
            <Shield className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              UK Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-amber-500/30">
              <CardHeader>
                <FileText className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>TM44 Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Required:</span> AC systems &gt;12kW</p>
                  <p><span className="font-semibold">Frequency:</span> Every 5 years</p>
                  <p className="text-destructive font-medium">Penalty: £300-£1,000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Scale className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>F-Gas Regulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Required:</span> All AC & refrigeration</p>
                  <p><span className="font-semibold">Checks:</span> Annual leak testing</p>
                  <p className="text-primary font-medium">We're F-Gas Category 1 certified</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Building2 className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Landlord Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Residential:</span> Functional heating required</p>
                  <p><span className="font-semibold">Commercial:</span> FRI lease maintenance</p>
                  <p className="text-muted-foreground">Building Safety Act 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['compliance-details']} onOpenChange={() => toggleSection('compliance-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                <span>Learn More About UK Regulations</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['compliance-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4 bg-muted/30 p-6 rounded-lg">
              <div>
                <h4 className="font-semibold mb-2">TM44 Inspection Details:</h4>
                <p className="text-sm text-muted-foreground">
                  TM44 inspections assess energy efficiency and identify improvement opportunities. Required for systems over 12kW, with first inspection within 12 months of installation, then every 5 years.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">F-Gas Certificate Categories:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                  <li><strong>Category 1:</strong> Full refrigeration and AC systems</li>
                  <li><strong>Category 2:</strong> Small systems under 3kg</li>
                  <li><strong>Category 3:</strong> Leak checking only</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">MEES Compliance:</h4>
                <p className="text-sm text-muted-foreground">
                  From April 2025, all new commercial leases require EPC rating C. Poor HVAC maintenance can drop ratings by 2 grades.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Credentials - Simplified */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Professional Service
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Our Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2 bg-blue-50 text-blue-700 border-blue-200">Gas Safe</Badge>
                  <Badge variant="outline" className="justify-center py-2 bg-green-50 text-green-700 border-green-200">F-Gas Cat 1</Badge>
                  <Badge variant="outline" className="justify-center py-2 bg-amber-50 text-amber-700 border-amber-200">NICEIC</Badge>
                  <Badge variant="outline" className="justify-center py-2 bg-purple-50 text-purple-700 border-purple-200">£10M Insured</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Red Flags to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>No Gas Safe or F-Gas numbers</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Suspiciously low prices</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>No written warranty</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>No proof of insurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your HVAC Maintenance?
          </h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            Professional service for all heating, ventilation, air conditioning, and commercial refrigeration systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => handleQuoteRequest("HVAC Maintenance")}>
              <Phone className="w-5 h-5 mr-2" />
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => handleQuoteRequest("HVAC Emergency Service")}>
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            24/7 Emergency Response | UK-Wide Coverage | F-Gas & Gas Safe Certified
          </p>
        </div>
      </section>
    </div>
  );
}
