import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Heart, 
  Leaf, 
  Smartphone, 
  Shield, 
  Home,
  DollarSign,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Timer,
  AlertTriangle
} from "lucide-react";
import hvacProfessional from "@/assets/hvac-professional.jpg";
import modernSystem from "@/assets/modern-hvac-system.jpg";
import energyEfficiency from "@/assets/energy-efficiency.jpg";

const WhyProfessionalHVAC = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "High Energy Bills",
      description: "Old or inefficient HVAC systems can increase energy costs by up to 40%"
    },
    {
      icon: Thermometer,
      title: "Inconsistent Temperatures",
      description: "Poor system performance leads to hot and cold spots throughout your property"
    },
    {
      icon: AlertTriangle,
      title: "Frequent Breakdowns",
      description: "Aging systems require constant repairs and unexpected maintenance costs"
    },
    {
      icon: Heart,
      title: "Poor Air Quality",
      description: "Outdated systems can't properly filter air, affecting health and comfort"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "30-50% Energy Savings",
      description: "Modern HVAC systems dramatically reduce energy consumption and monthly bills",
      stat: "£800+ saved annually"
    },
    {
      icon: Heart,
      title: "Improved Health & Comfort",
      description: "Advanced filtration and humidity control create healthier indoor environments",
      stat: "99.97% allergen removal"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Eco-friendly systems reduce carbon footprint and support sustainability goals",
      stat: "40% less emissions"
    },
    {
      icon: Smartphone,
      title: "Smart Technology Integration",
      description: "Remote monitoring, scheduling, and predictive maintenance capabilities",
      stat: "24/7 system monitoring"
    },
    {
      icon: Shield,
      title: "Enhanced Safety & Compliance",
      description: "Professional installation ensures code compliance and safety standards",
      stat: "100% code compliant"
    },
    {
      icon: Home,
      title: "Increased Property Value",
      description: "Modern HVAC systems add significant value to your property investment",
      stat: "15-20% value increase"
    }
  ];

  const whyMainteniq = [
    "20+ Years Industry Experience",
    "Certified & Licensed Technicians",
    "Latest Technology & Equipment",
    "Comprehensive Warranty Coverage",
    "24/7 Emergency Support",
    "Energy Efficiency Specialists",
    "Smart System Integration",
    "Competitive Pricing & Financing"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={hvacProfessional} 
            alt="Professional HVAC Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-background">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose Professional HVAC Solutions?
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Discover how professional HVAC systems deliver superior comfort, 
              dramatic energy savings, and long-term value for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 border-background text-background hover:bg-background hover:text-foreground">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4 text-destructive">
              Common HVAC Problems Costing You Money
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outdated or poorly maintained HVAC systems create multiple problems that impact 
              your comfort, health, and wallet. Here's what you're facing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="border-destructive/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Professional HVAC Solutions Transform Your Property
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern professional HVAC systems don't just solve problems – they deliver 
              exceptional value, comfort, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">
            Old vs Professional HVAC: The Clear Choice
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Old System */}
            <Card className="border-destructive/30">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-6 text-destructive">
                  Outdated HVAC Systems
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>Energy bills 40-60% higher</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>Frequent breakdowns and repairs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>Poor air quality and filtration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>No smart controls or monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>Inconsistent temperatures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>Higher environmental impact</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional System */}
            <Card className="border-primary/30 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-6 text-primary">
                  Professional HVAC Systems
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>30-50% lower energy costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Reliable operation with warranties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Superior air filtration (99.97%)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Smart controls and remote monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Consistent comfort throughout</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Eco-friendly and efficient</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <img 
              src={energyEfficiency} 
              alt="Energy Efficiency Comparison" 
              className="mx-auto rounded-lg shadow-elegant max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Mainteniq Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={modernSystem} 
                alt="Modern HVAC Installation" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Why Choose Mainteniq for Your HVAC Upgrade?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just another HVAC company. We're your partners in creating 
                the perfect indoor environment with cutting-edge technology and unmatched expertise.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {whyMainteniq.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-xl">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-xl">4.9★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div className="text-center">
                  <Timer className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-xl">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>

              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-glow">
                  Start Your HVAC Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't let outdated systems cost you money and comfort. Get a free professional 
            assessment and discover how much you could save with a modern HVAC upgrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Get Free Assessment
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call +44 (0) 189 55 28 226
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyProfessionalHVAC;