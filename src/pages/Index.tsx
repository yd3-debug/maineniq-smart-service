import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Thermometer, 
  Wrench, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  TrendingUp,
  Heart,
  Leaf,
  DollarSign,
  Zap,
  AlertTriangle
} from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import systemInspection from "@/assets/system-inspection.jpg";
import energyTech from "@/assets/energy-tech.jpg";
import plumbingImage from "@/assets/plumber-electrician-work.jpg";
import handymanImage from "@/assets/handyman-maintenance.jpg";
import endOfTenancyImage from "@/assets/end-of-tenancy-cleaning.jpg";
import smartHomeImage from "@/assets/smart-home-automation.jpg";
import renovationImage from "@/assets/renovation-comparison.jpg";
import bmsControlPanel from "@/assets/bms-control-panel.jpg";
import { AnimatedCounter } from "@/components/AnimatedChart";
import ResearchBadge from "@/components/ResearchBadge";
import { CONTACT } from "@/config/contact";

const Index = () => {
  useEffect(() => {
    document.title = "Property Maintenance: HVAC, Plumbing, Electrical";
    const desc = "Expert maintenance for HVAC, plumbing, electrical, handyman, BMS, smart home and renovation. Prevent breakdowns and cut costs.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = window.location.origin + '/';
  }, []);
  const services = [
    {
      icon: Wrench,
      title: "FCU Maintenance & Upgrade",
      description: "Expert maintenance and upgrades for Fan Coil Units to ensure optimal efficiency and performance."
    },
    {
      icon: Thermometer,
      title: "HIU Service & Repair",
      description: "Comprehensive Heat Interface Unit servicing, repairs, and upgrades for district heating systems."
    },
    {
      icon: Shield,
      title: "CIU & MVHR Maintenance",
      description: "Professional maintenance for Central Interface Units and Mechanical Ventilation with Heat Recovery systems."
    },
    {
      icon: Zap,
      title: "Air Conditioning Installation",
      description: "Professional installation of air conditioning systems for optimal comfort and efficiency."
    }
  ];

  const features = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Service",
    "Energy Efficiency Focus",
    "Smart Property Integration",
    "Competitive Pricing",
    "Quality Workmanship Guarantee"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-professional-gradient text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(57, 62, 70, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative container mx-auto px-4 pt-12 md:pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm mb-6 md:mb-8">
              <div className="flex items-center space-x-1 md:space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <Shield className="w-3 md:w-4 h-3 md:h-4 text-trust-blue" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/20">
                <Award className="w-3 md:w-4 h-3 md:h-4 text-accent-orange" />
                <span>20+ Years Experience</span>
              </div>
            </div>

            <div>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                Prevent breakdowns, cut costs, and protect your property
                <span className="text-accent-orange"> with expert maintenance</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Planned maintenance across HVAC, plumbing, electrical, and more keeps everything running safely and efficiently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12">
<Button asChild size="sm" variant="accent" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 h-10 sm:h-11 md:h-12">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" />
    Call Now
  </a>
</Button>
              <Link to="/services">
                <Button size="sm" variant="hero" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 h-10 sm:h-11 md:h-12">
                  View Services
                  <ArrowRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 ml-1 sm:ml-2" />
                </Button>
              </Link>
            </div>

            {/* HVAC Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-energy-gold/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-energy-gold/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-energy-gold">
                  <AnimatedCounter value={15} prefix="Up to " suffix="%" delay={0} duration={1400} />
                </div>
                <div className="text-xs opacity-80">Energy Savings (Maintenance)</div>
              </div>
              <div className="text-center bg-trust-blue/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-trust-blue/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-trust-blue">
                  <AnimatedCounter value={80} prefix="Up to " suffix="%" delay={100} duration={1400} />
                </div>
                <div className="text-xs opacity-80">Breakdown Prevention</div>
              </div>
              <div className="text-center bg-accent-orange/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-accent-orange/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-accent-orange">
                  <AnimatedCounter value={25} prefix="Up to " suffix="%" delay={200} duration={1400} />
                </div>
                <div className="text-xs opacity-80">FCU Efficiency Improvement</div>
              </div>
              <div className="text-center bg-primary/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:pb-5 md:p-4 border border-primary/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-energy-gold">
                  <AnimatedCounter value={50} prefix="Up to " suffix="%" delay={300} duration={1400} />
                </div>
                <div className="text-xs opacity-80">Equipment Lifespan Extension</div>
              </div>
            </div>
<p className="mt-1 text-[10px] sm:text-xs opacity-70">Estimates based on cited sources; actual savings vary by property and usage.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>MAINTENANCE SERVICES</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">Our Core Maintenance Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialist HVAC maintenance (FCU, HIU, CIU, MVHR) and AC installation to optimise performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card border">
                <CardContent className="p-4 md:p-8 text-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>OTHER SERVICES</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">More Services We Offer</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Plumbing, electrical, handyman, BMS, smart home and renovation support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Plumbing & Electrical */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={plumbingImage}
                    alt="Plumbing and electrical maintenance services"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">Plumbing & Electrical</h3>
                    <p className="text-sm text-muted-foreground">Repairs, safety checks and upgrades</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Handyman */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={handymanImage}
                    alt="Handyman maintenance and repairs"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">Handyman</h3>
                    <p className="text-sm text-muted-foreground">General repairs and property care</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* End of Tenancy Cleaning */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={endOfTenancyImage}
                    alt="End of tenancy cleaning experts"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">End of Tenancy Cleaning</h3>
                    <p className="text-sm text-muted-foreground">Deep cleans for check-out success</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Smart Home */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={smartHomeImage}
                    alt="Smart home automation services"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">Smart Home</h3>
                    <p className="text-sm text-muted-foreground">Automation, control and security</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Renovation */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={renovationImage}
                    alt="Renovation and refurbishment services"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">Renovation</h3>
                    <p className="text-sm text-muted-foreground">Refurbishment and fit-outs</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* BMS (Building Management Systems) */}
            <Link to="/services">
              <Card className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={bmsControlPanel}
                    alt="Building Management System (BMS) control panel"
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">BMS (Building Management Systems)</h3>
                    <p className="text-sm text-muted-foreground">Monitoring, integration and controls</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Why Maintenance Matters
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-primary">
              Maintenance: Essential for Modern Properties
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional maintenance protects your health, your finances and your property's long-term value.
            </p>
          </div>

          {/* HVAC Benefits Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-success/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-success/20 hover:animate-pulse-glow">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Financial Protection</h4>
                <p className="text-muted-foreground text-sm mb-3">Reduce HVAC energy and repair costs</p>
                <div className="text-2xl font-bold text-success">
                  <AnimatedCounter value={10} prefix="Up to " suffix="%" delay={0} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Thermostat Savings</div>
              </CardContent>
            </Card>
            
            <Card className="border-trust-blue/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-trust-blue to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-trust-blue/20 hover:animate-pulse-glow">
                  <Thermometer className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Ultimate Comfort</h4>
                <p className="text-muted-foreground text-sm mb-3">Consistent temperature control year-round</p>
                <div className="text-2xl font-bold text-trust-blue">
                  <AnimatedCounter value={1} prefix="±" suffix="°C" delay={100} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Temperature Precision</div>
              </CardContent>
            </Card>

            <Card className="border-success/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-success/20 hover:animate-pulse-glow">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Health & Wellness</h4>
                <p className="text-muted-foreground text-sm mb-3">Hospital-grade air filtration removes allergens</p>
                <div className="text-2xl font-bold text-success">
                  <AnimatedCounter value={75} prefix="Up to " suffix="%" delay={200} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Fine Particle Capture (MERV 13)</div>
              </CardContent>
            </Card>

            <Card className="border-accent-orange/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-energy-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-accent-orange/20 hover:animate-pulse-glow">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Property Value</h4>
                <p className="text-muted-foreground text-sm mb-3">Protect market value</p>
                <div className="text-2xl font-bold text-accent-orange">
                  <AnimatedCounter value={15} prefix="Avoid up to " suffix="% loss" delay={0} duration={1200} />
                </div>
                <div className="text-xs text-muted-foreground">Property Value Impact</div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for HVAC Page */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold mb-2">
              Ready to Transform Your Property?
            </h3>
            <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
              Discover how much you could save. Estimates are based on reputable sources and vary by property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/why-professional-hvac">
                <Button className="bg-gradient-to-r from-primary to-energy-gold hover:from-primary/90 hover:to-energy-gold/90 text-white px-8 py-3">
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3">
                  Get Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Why Choose Mainteniq?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional HVAC expertise with modern smart property solutions, 
                delivering comprehensive services that prioritize your comfort and efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary-glow">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Get Free Quote
                    <Phone className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-card">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="text-center p-6 bg-card">
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">4.9★</h3>
                <p className="text-muted-foreground">Customer Rating</p>
              </Card>
              <Card className="text-center p-6 bg-card">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">24/7</h3>
                <p className="text-muted-foreground">Emergency Service</p>
              </Card>
              <Card className="text-center p-6 bg-card">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">10yr</h3>
                <p className="text-muted-foreground">Warranty</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-professional-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Ready to protect your property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get professional maintenance for HVAC, plumbing, electrical, BMS and more — comfort, efficiency and peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<Button asChild size="lg" variant="accent" className="text-lg px-8 py-4">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-5 h-5 mr-2" />
    Call Now
  </a>
</Button>
            <Link to="/contact">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
