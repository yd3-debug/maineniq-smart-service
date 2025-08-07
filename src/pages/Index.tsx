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
      <section className="relative -mt-20 pt-32 pb-32 bg-professional-gradient text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(57, 62, 70, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-4 h-4 text-trust-blue" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="w-4 h-4 text-accent-orange" />
                <span>20+ Years Experience</span>
              </div>
            </div>

            <div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Save £3,250+ Annually with Professional{" "}
                <span className="text-accent-orange">HVAC Systems</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Transform your property with intelligent HVAC technology. Experience 50% energy reduction, 
                superior comfort, and increased property value through professional installation and maintenance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +44 783 456 2366
              </Button>
              <Link to="/services">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* HVAC Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center bg-energy-gold/20 backdrop-blur-sm rounded-lg p-4 border border-energy-gold/30">
                <div className="text-2xl font-bold text-energy-gold">£3,250</div>
                <div className="text-sm opacity-80">Annual Savings</div>
              </div>
              <div className="text-center bg-trust-blue/20 backdrop-blur-sm rounded-lg p-4 border border-trust-blue/30">
                <div className="text-2xl font-bold text-trust-blue">50%</div>
                <div className="text-sm opacity-80">Energy Reduction</div>
              </div>
              <div className="text-center bg-accent-orange/20 backdrop-blur-sm rounded-lg p-4 border border-accent-orange/30">
                <div className="text-2xl font-bold text-accent-orange">25%</div>
                <div className="text-sm opacity-80">Property Value+</div>
              </div>
              <div className="text-center bg-primary/20 backdrop-blur-sm rounded-lg p-4 border border-primary/30">
                <div className="text-2xl font-bold text-energy-gold">99.97%</div>
                <div className="text-sm opacity-80">Air Filtration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>OUR SERVICES</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Complete HVAC Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive HVAC solutions 
              that deliver exceptional comfort and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
                <div className="text-2xl font-bold text-success">£270/mo</div>
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
                <div className="text-2xl font-bold text-trust-blue">±1°C</div>
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
                <div className="text-2xl font-bold text-success">99.97%</div>
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
                <div className="text-2xl font-bold text-accent-orange">+25%</div>
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
            <Button size="lg" variant="accent" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +44 783 456 2366
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
