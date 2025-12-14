import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import FullBleedHero from "@/components/FullBleedHero";
import smartHomeSetup from "@/assets/smart-home-setup.jpg";
import smartHomeDashboard from "@/assets/smart-home-dashboard.jpg";
import satisfiedCustomer from "@/assets/satisfied-customer.jpg";
import { 
  Smartphone, Shield, Zap, Brain, Lightbulb, Phone, Lock, Tv, 
  Home, Building2, Key, Briefcase, Wifi, WifiOff, Eye, AppWindow,
  ChevronDown, CheckCircle2, Star, Quote
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { ProgressMetric } from "@/components/ProgressMetric";
import { TrustMetrics } from "@/components/TrustMetrics";
import ResearchBadge from "@/components/ResearchBadge";
import { SmartHomeGallery } from "@/components/SmartHomeGallery";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";
import { handleQuoteRequest } from "@/utils/quote";
import { generateSmartHomeSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";

const SmartHome: React.FC = () => {
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);

  const audienceCards = [
    {
      icon: Home,
      title: "Homeowners",
      description: "Simplify daily life with intelligent automation that adapts to your routine",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Building2,
      title: "Landlords",
      description: "Add value and attract premium tenants with smart home features",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: Key,
      title: "Airbnb Hosts",
      description: "Impress guests with keyless entry, smart controls, and seamless check-in",
      color: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      icon: Briefcase,
      title: "Property Developers",
      description: "Future-proof new builds with integrated smart infrastructure",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  const symptomCards = [
    {
      icon: AppWindow,
      title: "Too many apps controlling different devices",
      description: "Unified control from one intuitive interface",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: WifiOff,
      title: "WiFi dead spots affecting smart devices",
      description: "Professional network optimization for full coverage",
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      icon: Wifi,
      title: "DIY devices keep disconnecting",
      description: "Reliable installation with proper hub configuration",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: Eye,
      title: "Security cameras have blind spots",
      description: "Strategic placement for complete coverage",
      color: "bg-slate-500/10 text-slate-600 border-slate-200"
    }
  ];

  const serviceOutcomes = [
    {
      icon: Smartphone,
      value: 45,
      label: "Connected Devices",
      description: "Average devices controlled per installation",
      percentage: 90,
      suffix: "+"
    },
    {
      icon: Shield,
      value: 4.9,
      label: "Security Rating",
      description: "Customer satisfaction with security integration",
      percentage: 98,
      suffix: "/5"
    },
    {
      icon: Brain,
      value: 87,
      label: "Convenience Rating",
      description: "Time saved on daily home management tasks",
      percentage: 92,
      suffix: "%"
    },
    {
      icon: Zap,
      value: 24,
      label: "Automated Tasks",
      description: "Daily tasks automated per household",
      percentage: 88,
      suffix: "/7"
    }
  ];

  const smartHomeTechnologies = [
    {
      icon: Lightbulb,
      title: "Smart Lighting & Controls",
      description: "Automated lighting, dimming, color control, scene management",
      details: "Philips Hue, Lutron Caseta, smart switches, motion-activated lighting, circadian rhythm automation"
    },
    {
      icon: Tv,
      title: "Entertainment Systems",
      description: "Smart TVs, audio systems, streaming, multi-room control",
      details: "Sonos, Control4, whole-house audio, 4K/8K video distribution, hidden cable management"
    },
    {
      icon: Lock,
      title: "Security & Access",
      description: "Smart locks, cameras, sensors, doorbell integration",
      details: "Yale, Ring, Nest, facial recognition, remote access, automated locking schedules"
    },
    {
      icon: Zap,
      title: "Energy Monitoring & Smart Meters",
      description: "SMETS2 integration, real-time usage and tariff insights",
      details: "Smart meters, solar panel integration, EV charger control, usage optimization algorithms"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation & Design",
      description: "Site survey, needs assessment, and custom system design",
      details: "We visit your property, assess your needs, review network infrastructure, and design a tailored smart home solution"
    },
    {
      step: "2", 
      title: "Professional Installation",
      description: "Certified installation of devices, hubs, and network setup",
      details: "Clean, professional installation with proper cable management, optimal device placement, and network optimization"
    },
    {
      step: "3",
      title: "Integration & Testing",
      description: "System configuration, automation setup, and comprehensive testing",
      details: "All devices integrated into unified control, automations configured, and thorough testing of every scenario"
    },
    {
      step: "4",
      title: "Training & Support",
      description: "User training, documentation, and ongoing maintenance support",
      details: "Hands-on training for all household members, written guides, and ongoing support for any questions"
    }
  ];

  const testimonials = [
    {
      quote: "The installation was seamless and our whole family loves controlling everything from one app. The automated lighting scenes have transformed how we use our home.",
      name: "Sarah M.",
      role: "Homeowner",
      location: "Kensington",
      rating: 5
    },
    {
      quote: "Since installing smart locks and automated lighting, my Airbnb reviews have improved significantly. Guests love the keyless entry and the 'welcome home' scene.",
      name: "James T.",
      role: "Airbnb Host",
      location: "Shoreditch",
      rating: 5
    },
    {
      quote: "Managing access across 12 properties is now effortless. The remote monitoring and smart lock integration has saved us countless hours.",
      name: "Property Solutions Ltd",
      role: "Property Management",
      location: "Central London",
      rating: 5
    }
  ];

  const smartHomeFaqs = [
    { question: "What smart home systems do you install?", answer: "We install smart lighting, entertainment systems, security cameras, smart locks, video doorbells, and energy monitoring including SMETS2 smart meter integration. We work with major platforms like Apple HomeKit, Google Home, and Amazon Alexa." },
    { question: "How long does smart home installation take?", answer: "A typical smart home installation takes 1-3 days depending on complexity. Simple lighting automation can be done in a day, while whole-house systems with security integration may take 2-3 days." },
    { question: "Do I need special wiring for smart home?", answer: "Most smart home devices work with existing wiring and WiFi. However, some advanced installations benefit from dedicated networking or smart switches. We assess your property and recommend the best approach." },
    { question: "Can I control everything from one app?", answer: "Yes, we specialize in unified smart home control. We integrate multiple devices into a single control interface, whether through manufacturer apps or universal platforms like Apple Home or Google Home." },
    { question: "What happens if my internet goes down?", answer: "Quality smart home installations include local control options. Many devices continue working locally even without internet, and critical systems like security remain operational." },
    { question: "How much does smart home installation cost in London?", answer: "Smart home installation costs vary from £500 for basic lighting automation to £5,000+ for comprehensive whole-house systems. We provide free consultations and detailed quotes." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Smart Home Automation Installation London | Professional Setup | Mainteniq"
        description="Expert smart home installation in London. Control lighting, entertainment, security & energy from one app. SMETS2 smart meter integration. Professional installation & ongoing support."
        keywords="smart home London, smart home automation, home automation installation, smart lighting London, home security systems, entertainment systems, smart locks, energy monitoring UK, SMETS2 integration, smart home installer"
        canonicalUrl="https://www.mainteniq.co.uk/smart-home"
        structuredData={generateSmartHomeSchema()}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "Smart Home", url: "https://www.mainteniq.co.uk/smart-home" }
        ])}
        faqData={generateFAQSchema(smartHomeFaqs)}
      />
      
      <FullBleedHero
        title="Smart Home Automation"
        subtitle="Transform your home with intelligent lighting, entertainment, security and energy monitoring. Professional installation with comprehensive automation."
        image={smartHomeSetup}
        alt="Smart home control panel for lighting, security and entertainment"
        primaryLabel="Request Smart Home Consultation"
        primaryOnClick={() => handleQuoteRequest("Smart Home Consultation")}
        secondaryLabel="Request Callback"
        secondaryOnClick={() => handleQuoteRequest("Smart Home Callback Request")}
      />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Trust Metrics Strip */}
        <TrustMetrics />

        {/* Who We Help Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Who We Help
            </Badge>
            <h2 className="font-heading text-3xl font-bold">
              Smart Home Solutions for Every Property
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're upgrading your own home or managing multiple properties, we deliver intelligent automation that works for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceCards.map((card) => (
                <Card key={card.title} className={`border ${card.color} transition-all hover:shadow-md`}>
                  <CardContent className="p-5 space-y-3">
                    <card.icon className="w-8 h-8" />
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={smartHomeDashboard} 
                alt="Smart home dashboard showing unified device control" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Signs You Need Professional Installation */}
        <section className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200">
              Signs You Need Professional Installation
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              Frustrations That Disappear With Expert Setup
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptomCards.map((card) => (
              <Card key={card.title} className={`border ${card.color} transition-all hover:shadow-md`}>
                <CardContent className="p-5 space-y-3">
                  <card.icon className="w-6 h-6" />
                  <h3 className="font-medium text-sm">{card.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Consultation")}
            >
              Get Expert Help
            </Button>
          </div>
        </section>

        {/* What We Install Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              What We Install
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              Complete Smart Home Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From lighting to security, we integrate all your smart devices into one seamless system
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {smartHomeTechnologies.map((tech) => (
              <div key={tech.title} className="rounded-lg border bg-background p-5 text-center space-y-3 hover:shadow-md transition-all">
                <tech.icon className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">{tech.title}</h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>

          <Collapsible open={technologiesOpen} onOpenChange={setTechnologiesOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
                <span>{technologiesOpen ? "Hide Details" : "View Technology Details"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${technologiesOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {smartHomeTechnologies.map((tech) => (
                  <Card key={tech.title} className="border">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <tech.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">{tech.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* What You Get From Professional Installation */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
              What You Get
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              What You Get From Professional Installation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Typical results after a professional smart home installation and integration
              <ResearchBadge claimId="smart_home_energy_savings" className="ml-2" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOutcomes.map((metric, index) => (
                <ProgressMetric
                  key={metric.label}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                  percentage={metric.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={satisfiedCustomer} 
                alt="Satisfied customer using smart home controls" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Smart Home Benefits Section */}
        <section className="rounded-xl border bg-primary/5 p-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl font-bold text-primary">Smart Home Benefits & ROI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional smart home integration delivers measurable benefits in energy savings, security, and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-primary/20 bg-background p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Convenience & Lifestyle</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automate daily routines with schedules and smart scenes. 
                Save 2-3 hours weekly on routine home management tasks.
              </p>
            </div>
            
            <div className="rounded-lg border border-primary/20 bg-background p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Entertainment Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Seamless control of TVs, speakers, and streaming across all rooms. 
                Create immersive experiences with synchronized lighting and audio.
              </p>
            </div>
            
            <div className="rounded-lg border border-primary/20 bg-background p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Enhanced Security</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart locks, cameras, and sensors with instant notifications. 
                Potential insurance savings of 5-20% with approved systems.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="bg-muted/40 border rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Our Process
            </Badge>
            <h2 className="font-heading text-2xl font-bold">Professional Installation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From consultation to ongoing support, we ensure your smart home works perfectly
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((process) => (
              <div key={process.step} className="rounded-lg border bg-background p-5 space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold text-sm">{process.title}</h3>
                <p className="text-xs text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>

          <Collapsible open={processOpen} onOpenChange={setProcessOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
                <span>{processOpen ? "Hide Details" : "View Process Details"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${processOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {processSteps.map((process) => (
                  <Card key={process.step} className="border">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                          {process.step}
                        </div>
                        <h4 className="font-semibold">{process.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{process.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Automation")}
            >
              Get Smart Home Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Callback")}
            >
              <Phone className="w-4 h-4 mr-2"/>
              Request Callback
            </Button>
          </div>
        </section>

        <BeforeAfterComparison />
        
        <SmartHomeGallery />

        {/* Testimonials Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-200">
              Customer Reviews
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-2 border-t">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold">Ready for a Smarter Home?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who've transformed their homes with our professional 
            smart home automation services. Expert installation, ongoing support, and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Consultation")}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Quote")}
            >
              Get Instant Quote
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SmartHome;
