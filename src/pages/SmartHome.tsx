import React from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, Smartphone, Shield, Zap, Home, Brain, ThermometerSun, Lightbulb, Cctv, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { ProgressMetric } from "@/components/ProgressMetric";
import { TrustMetrics } from "@/components/TrustMetrics";
import ResearchBadge from "@/components/ResearchBadge";
import { SmartHomeGallery } from "@/components/SmartHomeGallery";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";
import { handleQuoteRequest } from "@/utils/quote";

const SmartHome: React.FC = () => {
  const serviceOutcomes = [
    {
      icon: Zap,
      value: 32,
      label: "Average Energy Savings",
      description: "Percentage reduction in energy costs",
      percentage: 85,
      suffix: "%"
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
      icon: Smartphone,
      value: 45,
      label: "Connected Devices",
      description: "Average devices controlled per installation",
      percentage: 90,
      suffix: "+"
    },
    {
      icon: Brain,
      value: 2,
      label: "Response Time",
      description: "Minutes for automated security response",
      percentage: 95,
      suffix: " min"
    }
  ];

  const smartHomeTechnologies = [
    {
      icon: ThermometerSun,
      title: "Climate Control",
      description: "Smart thermostats, HVAC integration, zone control"
    },
    {
      icon: Lightbulb,
      title: "Lighting Systems",
      description: "Automated lighting, dimming, color control, scene management"
    },
    {
      icon: Cctv,
      title: "Security Integration",
      description: "Cameras, sensors, access control, monitoring systems"
    },
    {
      icon: Home,
      title: "Whole Home Control",
      description: "Central hub, voice control, mobile app, automation rules"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional Smart Home Automation Services | Mainteniq"
        description="Expert smart home installation and integration. Control HVAC, lighting, security and more from one app. Professional installation with ongoing support."
        keywords="smart home automation, home integration, HVAC control, smart lighting, home security, voice control, smart thermostat installation"
        canonicalUrl="/smart-home"
      />
      
      <FullBleedHero
        title="Smart Home Automation"
        subtitle="Seamlessly control heating, cooling, lighting and security from your phone or voice. Professional installation with comprehensive integration."
        image={smartHomeAutomation}
        alt="Smart home automation panel controlling HVAC and lighting"
        primaryLabel="Request Smart Home Consultation"
        primaryHref="/contact"
        secondaryLabel="Request Callback"
        secondaryHref="javascript:void(0)"
      />

      <main className="container mx-auto px-4 py-12 space-y-16">
        <TrustMetrics />

        <section className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              Smart Home Integration Specialists
            </div>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Service outcomes you can expect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Typical results after a professional smart home installation and integration
              <ResearchBadge claimId="smart_home_energy_savings" className="ml-2" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smartHomeTechnologies.map((tech) => (
            <div key={tech.title} className="rounded-lg border bg-background p-6 text-center space-y-3">
              <tech.icon className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold">{tech.title}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </section>

        <section className="rounded-xl border bg-primary/5 p-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl font-bold text-primary">Smart Home Benefits & ROI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional smart home integration delivers measurable benefits in energy savings, security, and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-primary/20 bg-white p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Energy Efficiency</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart thermostats and automated systems reduce energy waste by up to 23%. 
                Typical savings of £300-800 annually on heating and cooling costs.
              </p>
            </div>
            
            <div className="rounded-lg border border-primary/20 bg-white p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Enhanced Security</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Integrated security systems with smart cameras, sensors, and automated responses. 
                Potential insurance savings of 5-20% with approved systems.
              </p>
            </div>
            
            <div className="rounded-lg border border-primary/20 bg-white p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Property Value</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart home features can increase property value by 3-5%. 
                Professional installation ensures reliable operation and maximum benefit.
              </p>
            </div>
          </div>
        </section>

        <SmartHomeGallery />
        
        <BeforeAfterComparison />
        
        <section className="bg-muted/40 border rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl font-bold">Our Professional Installation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From consultation to ongoing support, we ensure your smart home works perfectly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation & Design",
                description: "Site survey, needs assessment, and custom system design"
              },
              {
                step: "2", 
                title: "Professional Installation",
                description: "Certified installation of devices, hubs, and network setup"
              },
              {
                step: "3",
                title: "Integration & Testing",
                description: "System configuration, automation setup, and comprehensive testing"
              },
              {
                step: "4",
                title: "Training & Support",
                description: "User training, documentation, and ongoing maintenance support"
              }
            ].map((process) => (
              <div key={process.step} className="rounded-lg border bg-background p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Automation")}
            >
              Get Smart Home Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Automation")}
            >
              <Phone className="w-4 h-4 mr-2"/>
              Request Callback
            </Button>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold">Ready for a Smarter Home?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who've transformed their homes with our professional 
            smart home automation services. Expert installation, ongoing support, and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Smart Home Automation")}
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