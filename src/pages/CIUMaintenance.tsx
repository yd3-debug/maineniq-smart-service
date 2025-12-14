import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResearchBadge } from "@/components/ResearchBadge";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { handleQuoteRequest } from "@/utils/quote";
import SEOHead from "@/components/SEOHead";

import { TrustMetrics } from "@/components/TrustMetrics";
import { 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Thermometer,
  Settings,
  Zap,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Building,
  Users,
  ChevronDown,
  Wind,
  Target,
  BarChart3,
  MessageSquare,
  Home,
  Briefcase,
  Star,
  Quote
} from "lucide-react";

import heroImage from "@/assets/commercial-hvac.jpg";
import hvacProfessionalImage from "@/assets/hvac-professional.jpg";
import systemInspectionImage from "@/assets/system-inspection.jpg";

const CIUMaintenance = () => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const audienceCards = [
    {
      icon: Users,
      title: "Facilities Managers",
      description: "Maintain perfect zone control across buildings",
      color: "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50",
      iconColor: "text-blue-500"
    },
    {
      icon: Building,
      title: "Commercial Landlords",
      description: "Reduce tenant complaints, protect asset value",
      color: "bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50",
      iconColor: "text-orange-500"
    },
    {
      icon: Briefcase,
      title: "Building Managers",
      description: "Keep all zones operating efficiently",
      color: "bg-teal-500/10 border-teal-500/30 hover:border-teal-500/50",
      iconColor: "text-teal-500"
    },
    {
      icon: Home,
      title: "Property Management Companies",
      description: "Streamline maintenance across portfolios",
      color: "bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50",
      iconColor: "text-purple-500"
    }
  ];

  const symptomCards = [
    {
      icon: Thermometer,
      title: "Hot and cold spots in different zones",
      description: "Control system calibration needed for balanced temperatures",
      color: "bg-orange-500/10 border-orange-500/30",
      iconColor: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Energy bills climbing unexpectedly",
      description: "Inefficient zone optimization wasting heating and cooling",
      color: "bg-amber-500/10 border-amber-500/30",
      iconColor: "text-amber-500"
    },
    {
      icon: Settings,
      title: "Zones not responding to thermostat",
      description: "Valve actuator issues preventing proper temperature control",
      color: "bg-purple-500/10 border-purple-500/30",
      iconColor: "text-purple-500"
    },
    {
      icon: BarChart3,
      title: "BMS showing communication errors",
      description: "Integration problems causing system conflicts",
      color: "bg-slate-500/10 border-slate-500/30",
      iconColor: "text-slate-500"
    }
  ];

  const outcomeCards = [
    {
      icon: Target,
      title: "Precise Zone Control",
      stat: "±0.5°C",
      description: "Accurate temperature across all zones"
    },
    {
      icon: TrendingUp,
      title: "Lower Energy Bills",
      stat: "25%",
      description: "Efficiency improvement from optimization"
    },
    {
      icon: BarChart3,
      title: "BMS Integration",
      stat: "100%",
      description: "Seamless communication with building systems"
    },
    {
      icon: MessageSquare,
      title: "Reduced Complaints",
      stat: "95%",
      description: "Fewer tenant comfort issues"
    }
  ];

  const maintenanceChecklist = [
    { task: "Control system calibration", frequency: "Quarterly", benefit: "Accurate zone temperature control" },
    { task: "Valve actuator inspection", frequency: "Quarterly", benefit: "Smooth operation & longevity" },
    { task: "Sensor accuracy testing", frequency: "Bi-annually", benefit: "Precise temperature monitoring" },
    { task: "BMS integration check", frequency: "Bi-annually", benefit: "Seamless system communication" },
    { task: "Energy optimization review", frequency: "Annually", benefit: "Maximum efficiency & cost savings" },
    { task: "Emergency override testing", frequency: "Annually", benefit: "Safety & backup system reliability" }
  ];

  const testimonials = [
    {
      quote: "Since switching to Mainteniq for our CIU maintenance, we've seen a 30% reduction in energy costs and virtually eliminated tenant complaints about temperature.",
      name: "David Thompson",
      role: "Facilities Director",
      company: "Westminster Commercial Properties"
    },
    {
      quote: "Their quarterly servicing keeps all 12 zones in our office building running perfectly. The BMS integration expertise is exceptional.",
      name: "Sarah Mitchell",
      role: "Building Manager",
      company: "Canary Wharf Office Complex"
    },
    {
      quote: "Professional, reliable, and thorough. They understand commercial HVAC systems inside out and their calibration work is precise.",
      name: "James Wilson",
      role: "Operations Manager",
      company: "City of London Hotels Group"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SEOHead
        title="CIU Maintenance London | Zone Control & Central Interface Units | Mainteniq"
        description="Expert CIU maintenance and central interface unit servicing in London. Precision zone control calibration, valve actuator servicing, and BMS integration for commercial buildings."
        keywords="CIU maintenance London, central interface unit service, zone control maintenance, HVAC zone control, commercial building maintenance, BMS integration, valve actuator service"
      />

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
              <Building className="w-4 h-4 mr-2" />
              CIU Control & Maintenance Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              CIU Maintenance: 
              <span className="text-accent-blue"> Perfect Zone </span>
              Control Every Time
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Central Interface Units require precise calibration and regular maintenance to deliver optimal zone control. 
              Don't let control system failures compromise comfort and waste energy across your building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("CIU Maintenance Service")}>
                Schedule CIU Service
              </Button>
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency CIU Repair - Urgent")}>
                Emergency CIU Repair
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Help Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Who We Help
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide CIU maintenance for commercial buildings, offices, hotels, and large residential complexes across London.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid sm:grid-cols-2 gap-4">
              {audienceCards.map((card, index) => (
                <AnimatedStatCard key={index} delay={index * 100}>
                  <Card className={`h-full transition-all duration-300 ${card.color}`}>
                    <CardContent className="p-6">
                      <card.icon className={`w-10 h-10 ${card.iconColor} mb-4`} />
                      <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedStatCard>
              ))}
            </div>
            <div className="relative">
              <img 
                src={hvacProfessionalImage} 
                alt="CIU maintenance technician servicing commercial HVAC zone control system"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Commercial Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <TrustMetrics />
        </div>
      </section>

      {/* What is a CIU? Educational Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What is a CIU?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding your Central Interface Unit is the first step to better building performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* CIU Image */}
            <div className="flex items-center justify-center">
              <img 
                src="/CIU.png" 
                alt="Central Interface Unit (CIU) control panel for commercial HVAC zone management"
                className="rounded-xl shadow-xl w-full max-w-md object-cover"
              />
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <AnimatedStatCard>
                <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <Settings className="w-10 h-10 text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">What is a CIU?</h3>
                        <p className="text-muted-foreground text-sm">
                          A Central Interface Unit is the brain of your building's zone control system. 
                          It manages temperature, airflow, and comfort across multiple zones.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>

              <AnimatedStatCard delay={100}>
                <Card className="bg-gradient-to-br from-teal-500/5 to-teal-500/10 border-teal-500/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <Building className="w-10 h-10 text-teal-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Where They're Found</h3>
                        <p className="text-muted-foreground text-sm">
                          CIUs are essential in commercial offices, hotels, hospitals, 
                          shopping centres, and large residential developments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>

              <AnimatedStatCard delay={200}>
                <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-10 h-10 text-purple-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Why Maintenance Matters</h3>
                        <p className="text-muted-foreground text-sm">
                          Without regular calibration, CIUs cause hot/cold spots, energy waste, 
                          and BMS communication errors that affect your entire building.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            </div>
          </div>

          <Collapsible open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="mx-auto flex items-center gap-2">
                Learn More About CIU Systems
                <ChevronDown className={`w-4 h-4 transition-transform ${learnMoreOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">How CIUs Work</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        CIUs receive input from multiple zone sensors and thermostats, processing this data 
                        to control valve actuators, dampers, and fan speeds. They communicate with the Building 
                        Management System (BMS) to provide centralized monitoring and control.
                      </p>
                      <h4 className="font-semibold mb-3">Key Components</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Control boards and processors</li>
                        <li>• Valve actuators and damper motors</li>
                        <li>• Temperature and humidity sensors</li>
                        <li>• BMS communication modules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Common CIU Brands We Service</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                        <li>• Trend Controls (IQ Series)</li>
                        <li>• Honeywell (Excel Series)</li>
                        <li>• Siemens (Desigo CC)</li>
                        <li>• Johnson Controls (Metasys)</li>
                        <li>• Trane (Tracer)</li>
                      </ul>
                      <h4 className="font-semibold mb-3">Maintenance Frequency</h4>
                      <p className="text-muted-foreground text-sm">
                        We recommend quarterly inspections with bi-annual comprehensive servicing 
                        to maintain optimal performance and prevent costly failures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Signs You Need Service - Symptom-based */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Signs Your CIU Needs Service
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognizing these symptoms early prevents costly breakdowns and keeps tenants comfortable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptomCards.map((card, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className={`h-full transition-all duration-300 hover:shadow-lg ${card.color}`}>
                  <CardContent className="p-6">
                    <card.icon className={`w-10 h-10 ${card.iconColor} mb-4`} />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get From Professional Servicing */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What You Get From Professional Servicing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements you'll notice after our CIU maintenance service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomeCards.map((card, index) => (
                <AnimatedStatCard key={index} delay={index * 100}>
                  <Card className="h-full bg-gradient-to-br from-success/5 to-success/10 border-success/20 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <card.icon className="w-10 h-10 text-success mx-auto mb-3" />
                      <div className="text-3xl font-bold text-success mb-1">{card.stat}</div>
                      <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedStatCard>
              ))}
            </div>
            <div className="relative">
              <img 
                src={systemInspectionImage} 
                alt="Professional CIU maintenance delivering precise zone control results"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CIU Maintenance Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional CIU Maintenance Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Precision maintenance that ensures perfect zone control, optimal energy efficiency, and seamless system integration.
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quarterly Maintenance vs System Replacement Costs
            </h2>
            <ResearchBadge claimId="ciu-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Quarterly CIU Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={450} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Control system calibration</li>
                    <li>• Valve actuator servicing</li>
                    <li>• BMS integration checks</li>
                    <li>• Energy optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">Emergency Replacement</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={5000} prefix="£" suffix="/system" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New control system</li>
                    <li>• Emergency installation</li>
                    <li>• System downtime costs</li>
                    <li>• Building disruption</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>
        </div>
      </section>

      {/* UK Compliance Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              UK Energy Efficiency & Compliance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              CIU maintenance is essential for meeting UK energy efficiency standards and MEES compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">MEES (EPC) Compliance</h3>
                  <p className="text-muted-foreground mb-4">
                    Poorly maintained CIU systems can reduce EPC ratings below the legal minimum. 
                    Regular maintenance ensures optimal efficiency and MEES compliance for commercial properties.
                  </p>
                  <ResearchBadge claimId="mees-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Regulations Part L</h3>
                  <p className="text-muted-foreground mb-4">
                    Control systems must operate efficiently to meet Part L requirements. 
                    CIU maintenance ensures compliance with energy conservation standards.
                  </p>
                  <ResearchBadge claimId="part-l-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by facilities managers and building operators across London.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-energy-gold text-energy-gold" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 mb-3" />
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about CIU maintenance and zone control systems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* Zone Control Questions */}
            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">What is zone control and why is it important?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      Zone control allows different areas of a building to be heated or cooled independently. 
                      This is crucial for commercial buildings where different spaces have varying occupancy levels 
                      and thermal requirements. Proper zone control reduces energy waste by only conditioning 
                      occupied spaces and eliminates hot/cold spots that cause tenant complaints.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">How often should CIU systems be serviced?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      CIU systems should be serviced at least annually, with quarterly checks recommended for 
                      high-traffic commercial buildings. Seasonal calibration before summer and winter ensures 
                      optimal performance during peak demand periods. More frequent servicing may be needed 
                      for older systems or buildings with complex zone requirements.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* BMS Integration Questions */}
            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">How does CIU integrate with Building Management Systems (BMS)?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      CIUs communicate with your BMS via protocols like BACnet or Modbus, providing real-time 
                      zone data and accepting control commands. This integration allows centralized monitoring, 
                      automated scheduling, and coordinated responses to occupancy changes. Proper integration 
                      ensures your BMS can optimize energy use across all zones while maintaining comfort levels.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">What causes BMS communication errors with CIUs?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      Common causes include incorrect addressing, damaged communication cables, protocol mismatches, 
                      or faulty interface modules. Software updates to either system can also cause compatibility 
                      issues. Our engineers diagnose these problems using specialized diagnostic tools and ensure 
                      proper communication between your CIUs and BMS is restored.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Maintenance & Performance Questions */}
            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">What does CIU maintenance include?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      Comprehensive CIU maintenance includes sensor calibration, valve actuator testing, 
                      thermostat verification, BMS communication checks, and control logic optimization. 
                      We also inspect wiring connections, clean components, update firmware where needed, 
                      and provide a detailed report on system performance and any recommended improvements.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible>
              <Card>
                <CollapsibleTrigger className="w-full">
                  <CardContent className="p-4 sm:p-6 flex items-center justify-between">
                    <span className="font-semibold text-left text-foreground">Can you improve zone control accuracy in older buildings?</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-muted-foreground">
                      Yes, older systems can often be upgraded with modern sensors, smart thermostats, and 
                      improved valve actuators without full replacement. We can also retrofit BMS integration 
                      to legacy CIU systems, enabling centralized control and monitoring. Our engineers assess 
                      your existing infrastructure and recommend cost-effective upgrades to improve accuracy.
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Optimize Your Building's Zone Control
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our CIU specialists deliver precision maintenance that ensures perfect zone control, 
            maximizes energy efficiency, and keeps your building systems running seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest("CIU Maintenance Quote")}>
              Get CIU Maintenance Quote
            </Button>
            <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("CIU System Audit Request")}>
              Schedule System Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CIUMaintenance;
