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
import hvacProfessional from "@/assets/hvac-professional.jpg";
import energyEfficiency from "@/assets/energy-efficiency.jpg";

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
      <section className="relative py-32 bg-professional-gradient text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(57, 62, 70, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-4 h-4 text-accent-blue" />
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
              <div className="text-center bg-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/30">
                <div className="text-2xl font-bold text-emerald-400">£3,250</div>
                <div className="text-sm opacity-80">Annual Savings</div>
              </div>
              <div className="text-center bg-accent-blue/20 backdrop-blur-sm rounded-lg p-4 border border-accent-blue/30">
                <div className="text-2xl font-bold text-accent-blue">50%</div>
                <div className="text-sm opacity-80">Energy Reduction</div>
              </div>
              <div className="text-center bg-accent-orange/20 backdrop-blur-sm rounded-lg p-4 border border-accent-orange/30">
                <div className="text-2xl font-bold text-accent-orange">25%</div>
                <div className="text-sm opacity-80">Property Value+</div>
              </div>
              <div className="text-center bg-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400">99.97%</div>
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Why HVAC Matters
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">
              HVAC Systems: Essential for Modern Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional HVAC isn't just comfort—it's protection for your health, finances, and property value.
            </p>
          </div>

          {/* HVAC Benefits Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-emerald-200 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800">Financial Protection</h4>
                <p className="text-slate-600 text-sm mb-3">Save £3,250+ annually on energy, maintenance, and repairs</p>
                <div className="text-2xl font-bold text-emerald-600">£270/mo</div>
                <div className="text-xs text-slate-500">Average Monthly Savings</div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Thermometer className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800">Ultimate Comfort</h4>
                <p className="text-slate-600 text-sm mb-3">Consistent temperature control year-round</p>
                <div className="text-2xl font-bold text-blue-600">±1°C</div>
                <div className="text-xs text-slate-500">Temperature Precision</div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800">Health & Wellness</h4>
                <p className="text-slate-600 text-sm mb-3">Hospital-grade air filtration removes allergens</p>
                <div className="text-2xl font-bold text-purple-600">99.97%</div>
                <div className="text-xs text-slate-500">Filtration Efficiency</div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-slate-800">Property Value</h4>
                <p className="text-slate-600 text-sm mb-3">Professional HVAC increases marketability</p>
                <div className="text-2xl font-bold text-orange-600">+25%</div>
                <div className="text-xs text-slate-500">Value Increase</div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action for HVAC Page */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200">
            <h3 className="font-heading text-2xl font-bold mb-4 text-slate-800">
              Ready to Transform Your Property?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Discover exactly how much you could save and the complete benefits of professional HVAC systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/why-professional-hvac">
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3">
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
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
