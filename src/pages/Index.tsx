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
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional HVAC & Smart Property Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Modern maintenance company specializing in efficient HVAC systems 
              and smart property solutions. Your comfort is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +44 (0) 189 55 28 226
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 border-background text-background hover:bg-background hover:text-foreground">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive HVAC solutions designed to keep your property comfortable, 
              efficient, and smart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Experience Professional HVAC Excellence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free professional assessment and discover how much you could save 
            with a modern HVAC upgrade from Mainteniq.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Get Free Assessment
              </Button>
            </Link>
            <Link to="/why-professional-hvac">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More Benefits
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
