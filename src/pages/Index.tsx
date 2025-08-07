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
import { AnimatedCounter } from "@/components/AnimatedChart";
import { CONTACT } from "@/config/contact";

const Index = () => {
  const services = [
    {
      icon: Thermometer,
      title: "HVAC Installation",
      description: "Professional installation of heating, ventilation, and air conditioning systems for optimal comfort."
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description: "Regular maintenance services to keep your HVAC systems running efficiently year-round."
    },
    {
      icon: Shield,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services to get your systems back online quickly and safely."
    },
    {
      icon: Clock,
      title: "Smart Solutions",
      description: "Modern smart thermostats and automation systems for enhanced energy efficiency."
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
      <section className="relative -mt-20 pt-24 md:pt-32 pb-20 md:pb-32 bg-professional-gradient text-white overflow-hidden">
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
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Save £3,250+ Annually with Professional{" "}
                <span className="text-accent-orange">HVAC Systems</span>
              </h1>
              <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transform your property with intelligent HVAC technology. Experience 50% energy reduction, 
                superior comfort, and increased property value through professional installation and maintenance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
<Button asChild size="sm" variant="accent" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 md:h-12">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
    Call Now
  </a>
</Button>
              <Link to="/services">
                <Button size="sm" variant="hero" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 md:h-12">
                  View Services
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* HVAC Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-energy-gold/20 backdrop-blur-sm rounded-md md:rounded-lg p-3 md:p-4 border border-energy-gold/30">
                <div className="text-lg md:text-2xl font-bold text-energy-gold">
                  <AnimatedCounter value={3250} prefix="£" delay={0} duration={1400} />
                </div>
                <div className="text-xs md:text-sm opacity-80">Annual Savings</div>
              </div>
              <div className="text-center bg-trust-blue/20 backdrop-blur-sm rounded-md md:rounded-lg p-3 md:p-4 border border-trust-blue/30">
                <div className="text-lg md:text-2xl font-bold text-trust-blue">
                  <AnimatedCounter value={50} suffix="%" delay={100} duration={1400} />
                </div>
                <div className="text-xs md:text-sm opacity-80">Energy Reduction</div>
              </div>
              <div className="text-center bg-accent-orange/20 backdrop-blur-sm rounded-md md:rounded-lg p-3 md:p-4 border border-accent-orange/30">
                <div className="text-lg md:text-2xl font-bold text-accent-orange">
                  <AnimatedCounter value={25} suffix="%" delay={200} duration={1400} />
                </div>
                <div className="text-xs md:text-sm opacity-80">Property Value+</div>
              </div>
              <div className="text-center bg-primary/20 backdrop-blur-sm rounded-md md:rounded-lg p-3 md:p-4 border border-primary/30">
                <div className="text-lg md:text-2xl font-bold text-energy-gold">
                  <AnimatedCounter value={99.97} precision={2} suffix="%" delay={300} duration={1400} />
                </div>
                <div className="text-xs md:text-sm opacity-80">Air Filtration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>OUR SERVICES</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Complete HVAC Solutions</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive HVAC solutions 
              that deliver exceptional comfort and efficiency.
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

      {/* Why HVAC Matters Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Why HVAC Matters
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-primary">
              HVAC Systems: Essential for Modern Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional HVAC isn't just comfort—it's protection for your health, finances, and property value.
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
                <p className="text-muted-foreground text-sm mb-3">Save £3,250+ annually on energy, maintenance, and repairs</p>
                <div className="text-2xl font-bold text-success">
                  <AnimatedCounter value={270} prefix="£" suffix="/mo" delay={0} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Average Monthly Savings</div>
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
                  <AnimatedCounter value={99.97} precision={2} suffix="%" delay={200} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Filtration Efficiency</div>
              </CardContent>
            </Card>

            <Card className="border-accent-orange/25 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-energy-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-accent-orange/20 hover:animate-pulse-glow">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Property Value</h4>
                <p className="text-muted-foreground text-sm mb-3">Professional HVAC increases marketability</p>
                <div className="text-2xl font-bold text-accent-orange">
                  <AnimatedCounter value={25} prefix="+" suffix="%" delay={300} duration={1400} />
                </div>
                <div className="text-xs text-muted-foreground">Value Increase</div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for HVAC Page */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover exactly how much you could save and the complete benefits of professional HVAC systems.
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
                    <CheckCircle className="w-5 h-5 text-primary" />
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
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get professional HVAC installation and maintenance that delivers 
            exceptional comfort, efficiency, and peace of mind.
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
