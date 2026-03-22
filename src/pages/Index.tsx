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
  AlertTriangle,
  X,
  MessageSquare,
  Users,
  Building2
} from "lucide-react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { handleQuoteRequest } from "@/utils/quote";
import plumbingImage from "@/assets/plumber-electrician-work.jpg";
import handymanImage from "@/assets/handyman-maintenance.jpg";
import endOfTenancyImage from "@/assets/end-of-tenancy-cleaning.jpg";
import smartHomeImage from "@/assets/smart-home-automation.jpg";
const renovationImage = "/2024_Kitchen.png";
import bmsControlPanel from "@/assets/bms-control-panel.jpg";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import { generateOrganizationSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const Index = () => {
  console.log('Index.tsx: Index component rendering');
  
  const faqData = generateFAQSchema([
    {
      question: "What HVAC systems do you maintain?",
      answer: "We maintain FCU (Fan Coil Units), HIU (Heat Interface Units), MVHR (Mechanical Ventilation Heat Recovery), CIU (Chilled Interface Units), and all types of commercial and residential HVAC systems."
    },
    {
      question: "How often should HVAC systems be serviced?",
      answer: "We recommend quarterly maintenance for commercial systems and bi-annual servicing for residential systems. However, this depends on usage, environment, and manufacturer recommendations."
    },
    {
      question: "Do you provide emergency call-out services?",
      answer: "Yes, we offer 24/7 emergency call-out services for critical system failures. Our qualified engineers can respond quickly to minimize downtime and restore comfort."
    },
    {
      question: "What areas do you cover in the UK?",
      answer: "We serve London and all areas within a 120-mile radius, covering major cities including Birmingham, Oxford, Cambridge, Brighton, Milton Keynes, Reading, and surrounding regions. Same-day emergency response available throughout our service area."
    }
  ]);

  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" }
  ]);

  const coreServices = [
    {
      icon: Wrench,
      title: "FCU Maintenance",
      description: "Fan Coil Unit servicing for optimal climate control",
      href: "/fcu-maintenance",
      popular: true,
    },
    {
      icon: Shield,
      title: "HIU & CIU Service",
      description: "Heat Interface Unit and district heating specialists",
      href: "/hiu-maintenance",
      popular: true,
    },
    {
      icon: Thermometer,
      title: "MVHR Maintenance",
      description: "Ventilation with heat recovery for air quality",
      href: "/mvhr-maintenance",
    },
    {
      icon: Zap,
      title: "Boiler Services",
      description: "Gas Safe registered boiler maintenance and repair",
      href: "/boiler-services",
      popular: true,
    }
  ];

  const propertyServices = [
    { title: "Plumbing & Electrical", description: "Repairs and safety checks", image: plumbingImage, href: "/plumber-electrician", stat: "500+ jobs completed" },
    { title: "Handyman", description: "General repairs and maintenance", image: handymanImage, href: "/handyman", stat: "Same-day service" },
    { title: "End of Tenancy", description: "Deep cleaning for check-out", image: endOfTenancyImage, href: "/end-of-tenancy-cleaning", stat: "100% deposit return rate" },
    { title: "Smart Home", description: "Automation and controls", image: smartHomeImage, href: "/smart-home" },
    { title: "Renovation", description: "Refurbishment and fit-outs", image: renovationImage, href: "/renovation-composer" },
    { title: "BMS", description: "Building management systems", image: bmsControlPanel, href: "/bms" },
  ];

  const features = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Service",
    "Energy Efficiency Focus",
    "Smart Property Integration",
    "Competitive Pricing",
    "Quality Workmanship Guarantee"
  ];

  useEffect(() => {
    console.log('Index.tsx: Setting up SEO');
  }, []);

  return (
    <>
      <SEOHead 
        title="Keep Your Building Running | HVAC & Property Services London"
        description="Professional HVAC maintenance and property services for FCU, HIU, MVHR & CIU systems. Response within 4 hours. Trusted by 1,000+ property managers across London."
        keywords="HVAC maintenance London, property services, FCU maintenance, HIU service, MVHR maintenance, landlord services, Airbnb property maintenance, building maintenance London"
        canonicalUrl="https://www.mainteniq.co.uk/"
        structuredData={generateOrganizationSchema()}
        faqData={faqData}
        breadcrumbData={breadcrumbData}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Redesigned */}
        <section className="relative -mt-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 text-white overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: `url(/hero-minimal.jpg)` }}
          />
          
          <div className="relative container mx-auto px-4 pt-12 md:pt-20">
            <div className="max-w-5xl mx-auto">
              {/* Professional Container */}
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/20 p-6 sm:p-8 md:p-12 shadow-2xl text-center">
                
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-success/20 text-success-foreground border border-success/30 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-white">Response within 4 hours</span>
                </div>

                <div className="space-y-6">
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                    Keep Your Building Running.
                    <br />
                    <span className="bg-gradient-to-r from-accent-orange to-energy-gold bg-clip-text text-transparent">
                      Every System. One Team.
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Professional maintenance for HVAC, plumbing, electrical, and property services. 
                    Trusted by landlords, property managers, and facilities teams across London.
                  </p>
                </div>

                {/* CTA Buttons - Simplified */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <Button 
                    size="lg" 
                    variant="accent"
                    className="text-white font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg shadow-xl"
                    onClick={() => handleQuoteRequest("property assessment")}
                  >
                    <MessageSquare className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Get a Free Quote
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="hero" 
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg backdrop-blur-sm"
                  >
                    <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                      <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      Speak to an Expert
                    </a>
                  </Button>
                </div>

                {/* Social Proof Strip */}
                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-white/60 text-sm mb-4">Trusted by property professionals across London</p>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent-orange" />
                      <span className="text-white font-semibold">1,000+</span>
                      <span className="text-white/70 text-sm">Satisfied Customers</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-white/20" />
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-trust-blue" />
                      <span className="text-white font-semibold">500+</span>
                      <span className="text-white/70 text-sm">Properties Managed</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-white/20" />
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                      ))}
                      <span className="text-white font-semibold ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results Strip - Animated */}
        <section className="bg-secondary/40 border-b border-muted/60 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-muted hover:shadow-lg transition-all">
                <div className="text-xl md:text-3xl font-bold text-energy-gold">
                  <AnimatedCounter value={15} suffix="%" delay={0} duration={1400} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Energy Savings</div>
              </div>
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-muted hover:shadow-lg transition-all">
                <div className="text-xl md:text-3xl font-bold text-trust-blue">
                  <AnimatedCounter value={80} suffix="%" delay={100} duration={1400} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Breakdown Prevention</div>
              </div>
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-muted hover:shadow-lg transition-all">
                <div className="text-xl md:text-3xl font-bold text-accent-orange">
                  <AnimatedCounter value={4} suffix="hr" delay={200} duration={1400} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Response Time</div>
              </div>
              <div className="text-center bg-card/60 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-muted hover:shadow-lg transition-all">
                <div className="text-xl md:text-3xl font-bold text-success">
                  <AnimatedCounter value={50} suffix="%" delay={300} duration={1400} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Longer Equipment Life</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section - Climate Control */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>CLIMATE CONTROL</span>
                <span className="w-8 h-[2px] bg-primary"></span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">HVAC & Heating Services</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialist maintenance for FCU, HIU, CIU, MVHR and boiler systems. Keep your building comfortable year-round.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {coreServices.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card border h-full relative">
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                        <service.icon className="w-6 md:w-7 h-6 md:h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/hvac-maintenance">
                <Button variant="outline" size="lg">
                  View All HVAC Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem-Solution Section */}
        <ProblemSolutionSection />

        {/* Property Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>PROPERTY SERVICES</span>
                <span className="w-8 h-[2px] bg-primary"></span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">Full Property Care</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                One call handles it all. Plumbing, electrical, handyman, smart home, renovation and cleaning services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {propertyServices.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 relative">
                      <img
                        src={service.image}
                        alt={`${service.title} service`}
                        loading="lazy"
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        {service.stat && (
                          <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {service.stat}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Contracts Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>MAINTENANCE CONTRACTS</span>
                <span className="w-8 h-[2px] bg-primary"></span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Stop Paying for Breakdowns
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                Our maintenance contracts save money, reduce stress, and protect your reputation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="w-5 h-5" />
                    Reactive Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Unexpected costs (£2,000-£15,000+ per incident)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Tenant complaints and reputation damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Emergency call-out premiums (£200-£500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Shortened equipment lifespan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-success">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    Maintenance Contracts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Predictable monthly costs (60-80% savings)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Proactive issue prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>24/7 priority response for contract holders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Extended equipment lifespan (up to 40% longer)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/maintenance-contracts">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Your Custom Contract Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Maintenance Matters Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Leaf className="w-4 h-4" />
                Why Maintenance Matters
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-primary">
                Protect Your Investment
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Professional maintenance protects your health, your finances and your property's long-term value.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-16">
              <Card className="border-success/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Financial Protection</h4>
                  <p className="text-muted-foreground text-sm mb-3">Reduce energy and repair costs</p>
                  <div className="text-2xl font-bold text-success">
                    <AnimatedCounter value={15} prefix="Up to " suffix="%" delay={0} duration={1400} />
                  </div>
                  <div className="text-xs text-muted-foreground">Energy Savings</div>
                </CardContent>
              </Card>
              
              <Card className="border-trust-blue/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-trust-blue to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Ultimate Comfort</h4>
                  <p className="text-muted-foreground text-sm mb-3">Consistent temperature year-round</p>
                  <div className="text-2xl font-bold text-trust-blue">
                    <AnimatedCounter value={1} prefix="±" suffix="°C" delay={100} duration={1400} />
                  </div>
                  <div className="text-xs text-muted-foreground">Temperature Precision</div>
                </CardContent>
              </Card>

              <Card className="border-success/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Health & Wellness</h4>
                  <p className="text-muted-foreground text-sm mb-3">Better air quality for occupants</p>
                  <div className="text-2xl font-bold text-success">
                    <AnimatedCounter value={75} prefix="Up to " suffix="%" delay={200} duration={1400} />
                  </div>
                  <div className="text-xs text-muted-foreground">Particle Removal</div>
                </CardContent>
              </Card>

              <Card className="border-accent-orange/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-energy-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Property Value</h4>
                  <p className="text-muted-foreground text-sm mb-3">Protect your investment</p>
                  <div className="text-2xl font-bold text-accent-orange">
                    <AnimatedCounter value={15} prefix="Avoid " suffix="% loss" delay={300} duration={1200} />
                  </div>
                  <div className="text-xs text-muted-foreground">Value Protection</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="font-heading text-2xl font-bold mb-2">
                Ready to Protect Your Property?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how much you could save with professional maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/why-professional-hvac">
                  <Button variant="premium" className="px-8 py-3">
                    Calculate Your Savings
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3"
                  onClick={() => handleQuoteRequest("savings assessment")}
                >
                  Get Free Assessment
                </Button>
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
                  <Button 
                    variant="outline"
                    onClick={() => handleQuoteRequest("property services")}
                  >
                    Get Free Quote
                    <MessageSquare className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 bg-card hover:shadow-lg transition-all">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">500+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </Card>
                <Card className="text-center p-6 bg-card hover:shadow-lg transition-all">
                  <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">4.9★</h3>
                  <p className="text-muted-foreground">Customer Rating</p>
                </Card>
                <Card className="text-center p-6 bg-card hover:shadow-lg transition-all">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-2xl mb-2">4hr</h3>
                  <p className="text-muted-foreground">Response Time</p>
                </Card>
                <Card className="text-center p-6 bg-card hover:shadow-lg transition-all">
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
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Book This Week, Get Priority Scheduling
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Ready to protect your property?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get professional maintenance for HVAC, plumbing, electrical, BMS and more — comfort, efficiency and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="accent" 
                className="text-lg px-8 py-4"
              >
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-4"
                onClick={() => handleQuoteRequest("property services")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
