import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  Wrench,
  Zap,
  Settings,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { useEffect } from "react";

// Import professional work images
import electricalInstallation from "@/assets/electrical-installation.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import customerConsultation from "@/assets/customer-consultation.jpg";
import heroHvac from "@/assets/hero-hvac.jpg";
import modernEquipment from "@/assets/modern-equipment.jpg";
import TrustStrip from "@/components/TrustStrip";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import WhoWeServe from "@/components/sections/WhoWeServe";
import SystemsWeMaintain from "@/components/sections/SystemsWeMaintain";


const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1,000+" },
    { icon: Award, label: "Years in Maintenance", value: "15+" },
    { icon: Wrench, label: "Assets Maintained", value: "2,500+" },
    { icon: Star, label: "Customer Rating", value: "4.9★" }
  ];

  useEffect(() => {
    document.title = "About Maineniq | Expert HVAC & Property Maintenance Team";
    const description = "Learn about Maineniq's professional HVAC, FCU, HIU, MVHR maintenance services. 15+ years experience, 4.9★ rating, certified engineers, emergency response.";

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
    ogTitle.content = "About Maineniq | Expert HVAC & Property Maintenance Team";

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
    link.href = `${window.location.origin}/about`;
  }, []);

  const serviceStandards = [
    {
      icon: Clock,
      title: "Response Time Guarantee",
      description: "Emergency calls answered within 30 minutes, service within 4 hours"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Multi-point inspection on every job with 100% satisfaction guarantee"
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "All technicians certified, background checked, and continuously trained"
    },
    {
      icon: Star,
      title: "Customer Service Excellence",
      description: "4.9/5 customer rating with dedicated support team available 24/7"
    }
  ];

  const processSteps = [
    {
      icon: Home,
      title: "Site Assessment",
      description: "Asset survey and condition review to prioritise maintenance needs",
      image: customerConsultation
    },
    {
      icon: Settings,
      title: "Planned Maintenance",
      description: "PPM schedule aligned to manufacturer guidance and building usage",
      image: electricalInstallation
    },
    {
      icon: Wrench,
      title: "Rapid Response",
      description: "24/7 call‑outs with first‑time fix approach for breakdowns",
      image: modernEquipment
    },
    {
      icon: Star,
      title: "Reporting & Review",
      description: "Clear digital reports, recommendations and ongoing optimisation",
      image: teamCollaboration
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative -mt-2 md:-mt-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroHvac})`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
            Maintenance‑First HVAC Partner Since 2009
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            We specialise in service and maintenance for HVAC, MVHR, fan coil units and building systems—
            keeping residential, commercial and multi‑unit properties running efficiently long‑term.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="sm" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-6 py-2.5">
                Request Maintenance
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="sm" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 px-4 sm:px-6 py-2.5">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-3 sm:p-4 md:p-6 hover:shadow-card transition-shadow">
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2">
                  <AnimatedCounter 
                    value={parseFloat(stat.value.replace(/[,+★]/g, ''))} 
                    suffix={stat.value.includes('★') ? '★' : stat.value.includes('+') ? '+' : ''}
                    precision={stat.value.includes('★') ? 1 : 0}
                    duration={1400}
                    delay={index * 120}
                  />
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <WhyWorkWithUs />
      <WhoWeServe />
      <SystemsWeMaintain />
      

      {/* Our Process Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">How a Maintenance Partnership Works</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial assessment to ongoing care and transparent reporting, here’s how we keep your systems performing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                  <span className="absolute top-2 left-2 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/90 text-foreground text-xs sm:text-sm font-semibold shadow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-36 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Maintenance Results & Impact</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real outcomes from proactive maintenance across residential, commercial and multi‑unit buildings.
            </p>
          </div>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
            <Card className="text-center p-6 sm:p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl mb-1.5 text-primary">Up to 30%</h3>
              <h4 className="font-semibold mb-2 text-sm sm:text-base flex items-center justify-center gap-2">Energy Savings <span className="hidden sm:inline"><span className="sr-only">source:</span></span><span><a href="#" aria-hidden className="hidden"></a></span></h4>
              <div className="flex items-center justify-center"><span className="sr-only">Source:</span></div>
            </Card>
            <Card className="text-center p-6 sm:p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl mb-2 text-primary">4.9★</h3>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Customer Rating</h4>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Consistently high satisfaction across all our services</p>
            </Card>
            <Card className="text-center p-6 sm:p-8 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl mb-2 text-primary">99%</h3>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">First-Time Fix</h4>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Problems resolved on the first visit by our expert technicians</p>
            </Card>
          </div>


          {/* Benefits List */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Customer Benefits</h3>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Enhanced Comfort</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Consistent temperature control throughout your space</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Improved Air Quality</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Advanced filtration for healthier indoor environments</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Reduced Maintenance</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Modern systems require less frequent repairs</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">System Improvements</h3>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Energy Efficiency</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Significant reduction in utility costs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Smart Controls</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Advanced automation and remote monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Extended Lifespan</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Premium equipment lasts longer with proper installation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Excellence Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Service Excellence Standards</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to exceptional customer service is backed by measurable standards and guarantees.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceStandards.map((standard, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                    <standard.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">{standard.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Maintenance Technology & Reporting</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern diagnostics, digital service reports and asset tracking to keep everything compliant and efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <img 
                src={modernEquipment} 
                alt="Modern HVAC equipment showcase"
                loading="lazy"
                className="rounded-lg shadow-elegant w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">Insightful, Transparent Maintenance</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Our maintenance programs leverage smart tools, detailed service logs and condition reports—
                so you always know asset status, risks and next actions.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card className="p-3 sm:p-4 text-center">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm sm:text-base">Digital Reports</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Photographic evidence, checklists and recommendations</p>
                </Card>
                <Card className="p-3 sm:p-4 text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm sm:text-base">Remote Monitoring</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Smart alerts and insights where supported</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Protection Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Accreditations & Insurance</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insurance coverage and licensing for your complete peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">General Liability</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Comprehensive coverage protecting your property during all work</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Workers' Compensation</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Full coverage for all technicians working on your premises</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Professional Indemnity</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Protection against professional service liability</p>
            </Card>
            <Card className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Public Liability</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">Coverage for any public interaction during service calls</p>
            </Card>
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <Card className="inline-block p-4 sm:p-6 bg-primary text-primary-foreground">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Fully Licensed HVAC Professionals</h3>
              <p className="opacity-90 text-sm sm:text-base">All work guaranteed and protected • Comprehensive coverage for your peace of mind</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Experience the Mainteniq Difference
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust us for their HVAC needs. 
            Let's discuss how we can serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;