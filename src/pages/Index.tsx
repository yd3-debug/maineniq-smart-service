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
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional HVAC Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-background">
          <div className="max-w-4xl animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-background/80 font-medium">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>TRUSTED SINCE 2003 • LICENSED & INSURED</span>
              </div>
              
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight">
                Professional HVAC & Smart Property Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-background/90 leading-relaxed max-w-3xl">
                Transform your property with cutting-edge HVAC systems and smart home technology. 
                Expert installation, maintenance, and consultation services backed by 20+ years of experience.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 py-4">
                <div className="flex items-center space-x-2 text-background/80">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">500+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-2 text-background/80">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2 text-background/80">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">99% Customer Satisfaction</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8 py-4 shadow-glow hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +44 (0) 189 55 28 226
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-background text-background hover:bg-background hover:text-foreground shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    View Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              {/* Floating Stats Card */}
              <div className="mt-8 inline-block bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background">20+</div>
                    <div className="text-sm text-background/80">Years Experience</div>
                  </div>
                  <div className="w-px h-12 bg-background/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background">99%</div>
                    <div className="text-sm text-background/80">Customer Satisfaction</div>
                  </div>
                  <div className="w-px h-12 bg-background/20"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-background">50%</div>
                    <div className="text-sm text-background/80">Energy Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Preview Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Why Choose Professional HVAC?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the transformative benefits of professional installation and maintenance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-primary-foreground">30%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Savings</h3>
              <p className="text-muted-foreground">Reduce energy costs with efficient systems</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-primary-foreground">15+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Longer Life</h3>
              <p className="text-muted-foreground">Professional systems last significantly longer</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl font-bold text-primary-foreground">50%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fewer Repairs</h3>
              <p className="text-muted-foreground">Quality installation reduces maintenance needs</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/why-professional-hvac">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                Learn More About Professional HVAC
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>OUR PROFESSIONAL SERVICES</span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Complete HVAC Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive HVAC and smart property solutions 
              that deliver exceptional comfort and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-card to-accent/5 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Why Choose Mainteniq?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional HVAC expertise with modern smart property solutions, 
                delivering comprehensive maintenance services that prioritize your comfort and efficiency.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary-glow">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="text-center p-6">
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">4.9★</h3>
                <p className="text-muted-foreground">Customer Rating</p>
              </Card>
              <Card className="text-center p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">24/7</h3>
                <p className="text-muted-foreground">Emergency Service</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl mb-2">10yr</h3>
                <p className="text-muted-foreground">Warranty</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional HVAC Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Why Upgrade to Professional HVAC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern professional HVAC systems deliver exceptional benefits that transform 
              your property's comfort, efficiency, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={hvacProfessional} 
                alt="Professional HVAC Installation" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">30-50% Energy Savings</h3>
                  <p className="text-muted-foreground">
                    Modern systems dramatically reduce energy consumption, saving you £800+ annually on utility bills.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Superior Air Quality</h3>
                  <p className="text-muted-foreground">
                    Advanced filtration removes 99.97% of allergens and pollutants for healthier indoor air.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Smart Technology</h3>
                  <p className="text-muted-foreground">
                    Remote monitoring, predictive maintenance, and intelligent climate control at your fingertips.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Increased Property Value</h3>
                  <p className="text-muted-foreground">
                    Professional HVAC systems add 15-20% to your property value and appeal to buyers.
                  </p>
                </div>
              </div>

              <Link to="/why-professional-hvac">
                <Button size="lg" className="bg-primary hover:bg-primary-glow">
                  Learn More About Professional HVAC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings Showcase */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">
              See the Difference Professional HVAC Makes
            </h2>
            <p className="text-xl text-muted-foreground">
              Real energy efficiency improvements from our professional installations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={energyEfficiency} 
              alt="Energy Efficiency Comparison" 
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-bold text-3xl mb-2">50%</div>
              <div className="text-muted-foreground">Energy Reduction</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-bold text-3xl mb-2">£800+</div>
              <div className="text-muted-foreground">Annual Savings</div>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-bold text-3xl mb-2">40%</div>
              <div className="text-muted-foreground">Less Emissions</div>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-bold text-3xl mb-2">90%</div>
              <div className="text-muted-foreground">Fewer Breakdowns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="px-6 py-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-primary">Licensed & Insured</span>
              </div>
              <div className="px-6 py-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-primary">NATE Certified</span>
              </div>
              <div className="px-6 py-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-primary">BBB A+ Rating</span>
              </div>
              <div className="px-6 py-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-primary">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Get a free professional consultation and discover how our cutting-edge HVAC solutions 
              can improve your comfort while saving you money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-10 py-4 bg-card text-primary hover:bg-card/90 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                  Schedule Free Consultation
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                Free Estimates & Consultations
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                24/7 Emergency Service Available
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                100% Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
