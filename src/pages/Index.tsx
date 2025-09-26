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
  X
} from "lucide-react";
import { CardHeader, CardTitle } from "@/components/ui/card";
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
import { QuickValueChecker } from "@/components/QuickValueChecker";
import ResearchBadge from "@/components/ResearchBadge";
import { CONTACT } from "@/config/contact";
import SEOHead from "@/components/SEOHead";
import { generateOrganizationSchema, generateFAQSchema, generateBreadcrumbSchema, generateWebSiteSchema } from "@/utils/structuredData";

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

  const services = [
    {
      icon: Wrench,
      title: "FCU Maintenance & Upgrade",
      description: "Expert maintenance and upgrades for Fan Coil Units to ensure optimal efficiency and performance."
    },
    {
      icon: Shield,
      title: "HIU & CIU Service & Repair",
      description: "Comprehensive Heat Interface Unit and Central Interface Unit servicing, repairs, and upgrades for district heating and zone control systems."
    },
    {
      icon: Thermometer,
      title: "MVHR Maintenance",
      description: "Professional maintenance for Mechanical Ventilation with Heat Recovery systems for optimal air quality and energy efficiency."
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

  useEffect(() => {
    console.log('Index.tsx: Setting up SEO');
  }, []);

  return (
    <>
      <SEOHead 
        title="🏆 #1 Professional Property Services UK | HVAC, Smart Home, Maintenance | 24/7 Emergency | Save 30%"
        description="⭐ 4.9/5 Rating | Premier property services UK ⭐ Expert HVAC maintenance (FCU, HIU, MVHR, CIU), smart home automation, BMS installation, certified plumbing/electrical, handyman, end-of-tenancy cleaning. Save 30% energy costs, prevent 80% breakdowns, extend equipment life 10+ years. Gas Safe & NICEIC certified. 24/7 emergency response. Free quotes, transparent pricing, quality guaranteed. Trusted by 1000+ customers across London, Manchester, Birmingham. Transform your property today!"
        keywords="HVAC maintenance UK, smart home installation, professional property services, emergency plumber electrician London, FCU HIU MVHR maintenance, BMS building management systems, Gas Safe NICEIC certified, preventive maintenance contracts, energy efficient HVAC, 24/7 emergency response, property maintenance specialists, commercial residential services, handyman services UK, end of tenancy cleaning, property renovation refurbishment, certified engineers, transparent pricing, energy savings, breakdown prevention, equipment servicing, building services, facility management, smart building technology, home automation, security systems"
        canonicalUrl="https://www.mainteniq.co.uk/"
        structuredData={generateOrganizationSchema()}
        faqData={faqData}
        breadcrumbData={breadcrumbData}
      />
      
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
              <div className="flex items-center space-x-1 md:space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-primary/30">
                <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-energy-gold flex items-center justify-center">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-background"></div>
                </div>
                <span className="font-medium">London & 120-Mile Radius</span>
              </div>
            </div>

            <div>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                UK's FCU, HIU & MVHR Specialists
                <span className="text-accent-orange"> Save £2,400/Year with Expert Maintenance</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Professional maintenance that prevents breakdowns, cuts energy bills, and ensures clean air. 
                <span className="text-primary font-semibold">24/7 emergency response across London & 120-mile radius.</span>
              </p>
              
              {/* Immediate Trust & Value */}
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <div className="bg-energy-gold/20 border border-energy-gold/30 rounded-lg px-3 py-2">
                  <div className="text-sm font-semibold text-energy-gold">99.7% Uptime</div>
                </div>
                <div className="bg-primary/20 border border-primary/30 rounded-lg px-3 py-2">
                  <div className="text-sm font-semibold text-primary">2hr Response</div>
                </div>
                <div className="bg-accent-orange/20 border border-accent-orange/30 rounded-lg px-3 py-2">
                  <div className="text-sm font-semibold text-accent-orange">Gas Safe & NICEIC</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12">
<Button asChild size="sm" variant="accent" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 h-10 sm:h-11 md:h-12">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" />
    Call Now
  </a>
</Button>
              <Link to="/maintenance-contracts">
                <Button size="sm" variant="hero" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 h-10 sm:h-11 md:h-12">
                  Get Custom Assessment
                  <ArrowRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 ml-1 sm:ml-2" />
                </Button>
              </Link>
            </div>

            {/* Static Impact Stats - No Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-energy-gold/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-energy-gold/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-energy-gold">
                  15%
                </div>
                <div className="text-xs opacity-80">Energy Savings</div>
              </div>
              <div className="text-center bg-trust-blue/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-trust-blue/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-trust-blue">
                  80%
                </div>
                <div className="text-xs opacity-80">Breakdown Prevention</div>
              </div>
              <div className="text-center bg-accent-orange/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:p-4 border border-accent-orange/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-accent-orange">
                  25%
                </div>
                <div className="text-xs opacity-80">FCU Efficiency Gain</div>
              </div>
              <div className="text-center bg-primary/20 backdrop-blur-sm rounded-md md:rounded-lg p-2 sm:p-3 md:pb-5 md:p-4 border border-primary/30">
                <div className="text-base sm:text-lg md:text-2xl font-bold text-energy-gold">
                  50%
                </div>
                <div className="text-xs opacity-80">Longer Equipment Life</div>
              </div>
            </div>
<p className="mt-1 text-[10px] sm:text-xs opacity-70">Average results from our maintained FCU, HIU & MVHR systems</p>
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
              Specialist HVAC maintenance (FCU, HIU & CIU, MVHR) and AC installation to optimise performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
            
            {/* Interactive Value Checker */}
            <div className="lg:col-span-1">
              <QuickValueChecker />
            </div>
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
            <Link to="/plumber-electrician">
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
            <Link to="/handyman">
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
            <Link to="/end-of-tenancy-cleaning">
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
            <Link to="/smart-home">
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
            <Link to="/renovation-composer">
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
            <Link to="/bms">
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

      {/* Why Choose Our Contracts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>WHY CONTRACTS</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Why Choose Maintenance Contracts Over Reactive Repairs?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Stop paying for breakdowns. Start investing in prevention. Our maintenance contracts save money, reduce stress, and protect your reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                    <span>Unexpected breakdown costs (£2,000-£15,000+ per incident)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Tenant complaints and reputation damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Emergency call-out charges (£200-£500 premium)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Shortened equipment lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>No cost predictability or budget control</span>
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
                    <span>Predictable monthly costs (typically 60-80% savings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Proactive issue prevention and early detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>24/7 priority response for contract holders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Extended equipment lifespan (up to 40% longer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Complete budget control and cost transparency</span>
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
                <Button variant="premium" className="px-8 py-3">
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
    </>
  );
};

export default Index;
