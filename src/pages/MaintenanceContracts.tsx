import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import FullBleedHero from "@/components/FullBleedHero";
import TrustStrip from "@/components/TrustStrip";
import { CONTACT } from "@/config/contact";
import { 
  Shield, 
  Clock, 
  Users, 
  FileText, 
  CheckCircle, 
  Phone,
  Building2,
  Home,
  Factory,
  HardHat
} from "lucide-react";

const MaintenanceContracts = () => {
  useEffect(() => {
    document.title = "Maintenance Contracts | Custom Building Maintenance Solutions | Mainteniq";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Custom maintenance contracts for landlords, property managers, and commercial building owners. 24/7 guaranteed response, preventive maintenance, all systems under one provider.");
    }
  }, []);

  const contractBenefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Predictable Costs",
      description: "Fixed monthly fees eliminate surprise maintenance expenses and help you budget effectively."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Emergency Response",
      description: "Guaranteed response times with direct access to our experienced engineers - no call center delays."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Preventive Maintenance",
      description: "Regular inspections and maintenance prevent costly breakdowns and extend equipment life."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "One Provider for All Systems",
      description: "HVAC, plumbing, electrical, and more - all handled by our experienced team with 20+ years in the field."
    }
  ];

  const stakeholders = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Landlords & Property Investors",
      description: "Protect your rental income with predictable maintenance costs. Keep tenants happy and properties compliant.",
      benefits: ["Reduced void periods", "Happy tenants", "Predictable costs", "Property value protection"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Property Owners",
      description: "Ensure compliance and maximize occupancy rates with professional building maintenance.",
      benefits: ["Tenant satisfaction", "Regulatory compliance", "Energy efficiency", "Asset protection"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Property Managers",
      description: "Take the stress out of building operations. Reduce tenant complaints and emergency callouts.",
      benefits: ["Less stress", "Fewer complaints", "Professional reporting", "Direct communication"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Housing Associations",
      description: "Maintain housing standards with professional contracts. Ensure compliance and tenant satisfaction.",
      benefits: ["Standards compliance", "Social responsibility", "Cost control", "Professional service"]
    }
  ];

  const assessmentProcess = [
    {
      step: "1",
      title: "Property Assessment",
      description: "We evaluate your building's systems, current condition, and specific maintenance needs."
    },
    {
      step: "2",
      title: "Custom Proposal",
      description: "Based on our assessment, we create a tailored maintenance plan with clear service levels."
    },
    {
      step: "3",
      title: "Contract Agreement",
      description: "We agree on service schedules, response times, and reporting requirements that fit your needs."
    },
    {
      step: "4",
      title: "Ongoing Service",
      description: "Regular maintenance, emergency response, and detailed reporting keep your property running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FullBleedHero
        title="Custom Maintenance Contracts for Your Property Portfolio"
        subtitle="Why choose reactive maintenance when you can prevent problems? Our tailored contracts provide 24/7 guaranteed response, preventive maintenance, and all systems coverage under one provider."
        image="/BOILER.png"
        alt="Modern building maintenance systems"
        primaryLabel="Schedule Assessment"
        primaryHref="/contact"
        secondaryLabel="Call: 078 3456 2366"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      <TrustStrip />

      {/* Contract vs Reactive Maintenance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Maintenance Contracts vs Reactive Maintenance?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Smart property owners choose contracts over reactive maintenance. Here's why:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Reactive Maintenance</CardTitle>
                <CardDescription>Waiting for things to break</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    Unpredictable emergency costs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    Tenant complaints and void periods
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    Emergency call-out charges
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    Equipment replacement costs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Contract Maintenance</CardTitle>
                <CardDescription>Preventing problems before they happen</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Fixed monthly costs - no surprises
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Happy tenants, fewer complaints
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Priority response when needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Extended equipment lifespan
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contract Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Mainteniq Maintenance Contracts?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With 20+ years experience, we understand that every property is unique. Our contracts are tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contractBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder-Specific Messaging */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tailored Solutions for Different Property Stakeholders</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're managing one property or hundreds, we have the right maintenance solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      {stakeholder.icon}
                    </div>
                    <CardTitle className="text-xl">{stakeholder.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{stakeholder.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {stakeholder.benefits.map((benefit, bIndex) => (
                      <Badge key={bIndex} variant="secondary" className="justify-start">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Custom Assessment Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No two buildings are the same - neither are our maintenance contracts. Here's how we create your custom solution:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {assessmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete System Coverage Under One Contract</h2>
            <p className="text-lg text-muted-foreground">
              Why manage multiple contractors when one provider can handle everything?
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">HVAC Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Heating, cooling, ventilation, and air quality systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Plumbing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Water systems, drainage, and emergency plumbing repairs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Electrical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Power systems, lighting, and electrical safety checks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Building Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">General maintenance, handyman services, and repairs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Smart Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building management and smart home automation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees and Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Commitments</h2>
            <p className="text-lg text-muted-foreground">
              When you choose a Mainteniq maintenance contract, you get these guarantees:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Response Time Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Emergency response within agreed timeframes, with priority given to contract customers.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All work carried out by qualified engineers with full warranties and insurance coverage.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Detailed Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Regular maintenance reports and recommendations to keep your property in optimal condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Property Investment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free property assessment and discover how a custom maintenance contract can save you money and stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Free Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call: 078 3456 2366
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceContracts;