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
  Heart,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "1,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Wrench, label: "Projects Completed", value: "2,500+" },
    { icon: Star, label: "Customer Rating", value: "4.9★" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable service you can trust, with guaranteed quality workmanship."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge HVAC technology and smart property solutions."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your comfort and satisfaction are our highest priorities."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior results on every project."
    }
  ];

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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6">
            Your Trusted HVAC Partner Since 2009
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Established with a foundation of excellence, we've built our reputation on reliability, 
            professional standards, and unmatched customer service. Licensed, insured, and committed 
            to your complete satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-3xl mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Built on Strong Foundations</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Since 2009, we've established ourselves as the region's most trusted HVAC service provider. 
                  Our foundation is built on professional excellence, regulatory compliance, and an 
                  unwavering commitment to customer satisfaction.
                </p>
                <p>
                  We maintain all required licenses and certifications, carry comprehensive insurance, 
                  and adhere to the highest industry standards. Our technicians undergo rigorous 
                  background checks and continuous professional development.
                </p>
                <p>
                  With over 2,500 successful projects and a 4.9-star customer rating, we've proven 
                  our reliability time and again. When you choose Mainteniq, you're choosing a 
                  partner you can trust completely.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary-glow">
                    Experience Our Service
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">24/7 Service</h3>
                  <p className="text-sm text-muted-foreground">Always available when you need us</p>
                </Card>
                <Card className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground">Fully certified professionals</p>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="p-6">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">100% satisfaction promise</p>
                </Card>
                <Card className="p-6">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Energy Efficient</h3>
                  <p className="text-sm text-muted-foreground">Green solutions focused</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <value.icon className="w-8 h-8 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">Service Excellence Standards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to exceptional customer service is backed by measurable standards and guarantees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceStandards.map((standard, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <standard.icon className="w-8 h-8 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">Certifications & Credentials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team maintains the highest industry certifications and standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "NATE Certified",
              "EPA Licensed",
              "HVAC Excellence",
              "Energy Star Partner",
              "BBB Accredited",
              "Fully Insured"
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="font-medium text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Experience the Mainteniq Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust us for their HVAC needs. 
            Let's discuss how we can serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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