import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle, Wrench, Calendar, Phone, Clock, Shield, TrendingDown, TrendingUp, Zap } from "lucide-react";
import { useEffect } from "react";
import { AnimatedCounter } from "@/components/AnimatedChart";
import ResearchBadge from "@/components/ResearchBadge";
import heroImage from "@/assets/hero-hvac.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import hvacMaintenanceImage from "@/assets/hvac-maintenance.jpg";
import systemInspectionImage from "@/assets/system-inspection.jpg";
import hvacProfessionalImage from "@/assets/hvac-professional.jpg";
import modernEquipmentImage from "@/assets/modern-equipment.jpg";

export default function HVACMaintenance() {
  useEffect(() => {
    document.title = "HVAC Maintenance | Professional Heating, Ventilation & AC Service";
    const description = "Expert HVAC maintenance preventing breakdowns, improving efficiency, and extending equipment life. Emergency service available 24/7. Call for FREE quote.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "HVAC Maintenance | Professional Heating, Ventilation & AC Service";

    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}/hvac-maintenance`;
  }, []);
  const neglectScenarios = [
    {
      system: "FCU Systems",
      scenario: "Dirty coils and clogged filters",
      consequences: [
        "40% efficiency loss within 6 months",
        "£800+ monthly energy waste",
        "Complete system failure",
        "Emergency replacement: £5,000"
      ],
      timeframe: "3-6 months without service",
      icon: <TrendingDown className="w-6 h-6 text-destructive" />
    },
    {
      system: "MVHR Units", 
      scenario: "Blocked filters and heat exchanger",
      consequences: [
        "90% heat recovery loss",
        "Poor air quality and mold growth",
        "£2,000+ heating cost increase",
        "Full unit replacement: £6,000"
      ],
      timeframe: "2-4 months without filter changes",
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />
    },
    {
      system: "HIU Systems",
      scenario: "Scale buildup and component failure", 
      consequences: [
        "No heating or hot water",
        "Emergency callout fees: £500+",
        "Tenant complaints and liability",
        "Replacement costs: £1,500"
      ],
      timeframe: "6-12 months without servicing",
      icon: <Wrench className="w-6 h-6 text-destructive" />
    }
  ];

  const maintenanceProcess = [
    { step: "Visual Inspection", description: "Complete system assessment and fault identification" },
    { step: "Filter Replacement", description: "High-quality filters for optimal airflow and efficiency" },
    { step: "Coil Cleaning", description: "Deep cleaning of heat exchange surfaces" },
    { step: "Component Testing", description: "Electrical and mechanical component verification" },
    { step: "Performance Optimization", description: "System tuning for maximum efficiency" },
    { step: "Compliance Certification", description: "UK regulatory compliance documentation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Dramatic Background */}
      <section 
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10">
              <AlertTriangle className="w-4 h-4 mr-2" />
              CRITICAL: System Failure Prevention
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              Your HVAC is <span className="text-destructive">Dying</span><br />
              <span className="text-primary">Without Maintenance</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Every month without professional maintenance costs you hundreds in wasted energy. 
              System failure isn't a question of IF—it's WHEN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="destructive">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Service
              </Button>
              <Button size="lg" variant="hero" className="border-white">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Preventive Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Without Maintenance - Scary Reality */}
      <section className="py-20 bg-destructive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Cost of <span className="text-destructive">Neglect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what happens to UK commercial properties that skip maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {neglectScenarios.map((scenario, index) => (
              <Card key={index} className="border-destructive/20 bg-background">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {scenario.icon}
                    <CardTitle className="text-xl text-destructive">{scenario.system}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{scenario.scenario}</p>
                  <Badge variant="destructive" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    {scenario.timeframe}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scenario.consequences.map((consequence, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{consequence}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Before vs After Visual */}
          <div className="bg-background rounded-lg p-8 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={beforeAfterImage} 
                  alt="Before and after maintenance comparison showing dirty vs clean HVAC components"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">The Difference Maintenance Makes</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                    <span className="font-medium text-destructive">Without Maintenance:</span>
                    <span className="text-lg font-bold text-destructive">40% Efficiency Loss</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                    <span className="font-medium text-primary">With Professional Service:</span>
                    <span className="text-lg font-bold text-primary">95%+ Peak Performance</span>
                  </div>
                </div>
                <ResearchBadge claimId="maintenance_efficiency_loss" label="Scientific Evidence" className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Shock */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The True Cost Comparison
            </h2>
            <p className="text-xl text-muted-foreground">
              Annual maintenance vs emergency replacement costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <CardTitle className="text-2xl text-primary">Professional Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">
                  £<AnimatedCounter value={850} duration={2000} />
                </div>
                <p className="text-muted-foreground mb-6">Annual comprehensive service</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" />All systems serviced</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" />Preventive repairs included</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" />Energy efficiency guaranteed</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" />24/7 emergency support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader className="text-center">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl text-destructive">Emergency Replacement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-destructive mb-4">
                  £<AnimatedCounter value={15000} duration={2000} />
                </div>
                <p className="text-muted-foreground mb-6">Average system failure costs</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-destructive mr-2" />Emergency callout fees</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-destructive mr-2" />Complete system replacement</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-destructive mr-2" />Business disruption costs</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-destructive mr-2" />Tenant compensation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">Maintenance ROI</h3>
              <p className="text-4xl font-bold text-primary">
                17:1 Return on Investment
              </p>
              <p className="text-muted-foreground mt-2">
                Every £1 spent on maintenance saves £17 in emergency repairs
              </p>
              <ResearchBadge claimId="maintenance_roi" label="Industry Research" className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Maintenance Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Professional <span className="text-primary">Maintenance Process</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive service that prevents failure and maximizes efficiency
              </p>
              
              <div className="space-y-4">
                {maintenanceProcess.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg border">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={hvacMaintenanceImage} 
                alt="Professional HVAC maintenance technician performing system service"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src={systemInspectionImage} 
                alt="Detailed system inspection and testing procedures"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UK Compliance Warning */}
      <section className="py-20 bg-amber-50 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              UK Legal Compliance Requirements
            </h2>
            <p className="text-xl text-amber-800">
              Avoid penalties and legal issues with proper maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">TM44 Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 mb-4">
                  Mandatory for AC systems over 12kW. Failure to comply results in penalties up to £300.
                </p>
                <Badge variant="outline" className="border-amber-500 text-amber-700">
                  Legal Requirement
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Landlord Duties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 mb-4">
                  Commercial landlords must maintain HVAC systems in safe working order for tenant welfare.
                </p>
                <Badge variant="outline" className="border-amber-500 text-amber-700">
                  Legal Obligation
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">MEES Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 mb-4">
                  Minimum Energy Efficiency Standards require properly maintained HVAC systems.
                </p>
                <Badge variant="outline" className="border-amber-500 text-amber-700">
                  Energy Regulations
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Equipment Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional Equipment & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art tools and certified technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src={modernEquipmentImage} 
                alt="Modern HVAC diagnostic and maintenance equipment"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Advanced Diagnostic Tools</h3>
                  <p className="text-sm opacity-90">Professional-grade equipment for accurate system analysis</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={hvacProfessionalImage} 
                alt="Certified HVAC technician performing professional maintenance"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
                  <p className="text-sm opacity-90">Gas Safe registered engineers with HVAC expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Urgent Action */}
      <section className="py-20 bg-gradient-to-r from-destructive via-primary to-destructive text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Don't Let Your System <span className="text-yellow-300">Fail Tomorrow</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every day without maintenance brings you closer to catastrophic failure. 
            Emergency repairs cost 15x more than preventive service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-foreground hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Book Emergency Assessment
            </Button>
            <Button size="lg" variant="hero">
              <Zap className="w-5 h-5 mr-2" />
              Schedule Preventive Service
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            24/7 Emergency Response | UK-Wide Coverage | Certified Engineers
          </p>
        </div>
      </section>
    </div>
  );
}