import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Wrench, 
  Shield, 
  Clock, 
  Zap,
  Settings,
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Thermometer,
      title: "HVAC Installation",
      description: "Complete installation of heating, ventilation, and air conditioning systems",
      features: [
        "Energy-efficient system design",
        "Professional installation",
        "System commissioning",
        "Performance optimization"
      ],
      price: "Starting at $3,500"
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description: "Regular maintenance to keep your HVAC systems running efficiently",
      features: [
        "Seasonal tune-ups",
        "Filter replacements",
        "System diagnostics",
        "Preventive care plans"
      ],
      price: "Starting at $150"
    },
    {
      icon: Shield,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for urgent HVAC issues",
      features: [
        "24/7 availability",
        "Rapid response time",
        "Expert diagnostics",
        "Same-day repairs"
      ],
      price: "Starting at $95"
    },
    {
      icon: Clock,
      title: "Smart Thermostats",
      description: "Modern smart thermostat installation and configuration",
      features: [
        "WiFi-enabled controls",
        "Energy optimization",
        "Remote monitoring",
        "Smart scheduling"
      ],
      price: "Starting at $250"
    },
    {
      icon: Zap,
      title: "Energy Audits",
      description: "Comprehensive energy efficiency assessments and recommendations",
      features: [
        "Thermal imaging",
        "Efficiency analysis",
        "Cost savings report",
        "Upgrade recommendations"
      ],
      price: "Starting at $200"
    },
    {
      icon: Settings,
      title: "System Upgrades",
      description: "Modernize your existing HVAC systems with latest technology",
      features: [
        "Equipment assessment",
        "Efficiency improvements",
        "Technology integration",
        "Performance monitoring"
      ],
      price: "Custom Quote"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6">
            Professional HVAC Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Complete HVAC solutions from installation to maintenance. 
            We deliver reliable, efficient service for optimal comfort.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to complete system installations, 
              we provide comprehensive HVAC services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-lg text-primary mb-4">{service.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary-glow">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                24/7 Emergency HVAC Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                HVAC emergencies don't wait for business hours. Our certified technicians 
                are available around the clock to restore your comfort when you need it most.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Rapid response within 60 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Licensed and insured technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Upfront pricing with no hidden fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Parts and labor warranty</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-glow">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-lg p-12">
                <Clock className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold text-3xl mb-2">24/7</h3>
                <p className="text-xl opacity-90">Emergency Service</p>
                <p className="text-4xl font-bold mt-4">+44 (0) 189 55 28 226</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. 
            Our experts are ready to help with all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;