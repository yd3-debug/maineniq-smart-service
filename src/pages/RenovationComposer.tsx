import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Palette, Shield, Star, Clock, Zap, ArrowRight, Phone, Mail } from "lucide-react";
import FullBleedHero from "@/components/FullBleedHero";
import { TrustMetrics } from "@/components/TrustMetrics";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import RenovationGallery from "@/components/RenovationGallery";

const renovationServices = [
  {
    icon: Home,
    title: "Full Property Renovation",
    description: "Complete property transformations from outdated spaces to modern, energy-efficient homes",
    features: ["Complete rewiring", "Plumbing upgrades", "HVAC installation", "Modern finishes"]
  },
  {
    icon: Palette,
    title: "Kitchen & Bathroom Refurbishment",
    description: "Specialized renovation of key living spaces with modern fixtures and functionality",
    features: ["Modern appliances", "Quality fixtures", "Efficient layouts", "Waterproofing"]
  },
  {
    icon: Shield,
    title: "Commercial Property Renovation",
    description: "Office and commercial space transformations that enhance productivity and value",
    features: ["Office fit-outs", "Commercial HVAC", "Safety compliance", "Modern infrastructure"]
  }
];

const renovationBenefits = [
  {
    icon: Star,
    title: "Increased Property Value",
    description: "Professional renovations can increase property value by 15-30%"
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Modern systems and insulation reduce energy costs by up to 40%"
  },
  {
    icon: Clock,
    title: "Professional Timeline",
    description: "Efficient project management ensures timely completion"
  }
];

export default function RenovationComposer() {

  return (
    <>
      <SEOHead 
        title="Professional Property Renovation & Refurbishment Services | Mainteniq"
        description="Transform your property with our expert renovation and refurbishment services. Kitchen, bathroom, and full property renovations across London. Professional project management and guaranteed quality."
        keywords="property renovation, refurbishment services, kitchen renovation, bathroom renovation, property transformation, London renovation"
        canonicalUrl="/renovation-composer"
      />

      {/* Hero Section */}
      <FullBleedHero
        title="Transform Your Property with Professional Renovation Services"
        subtitle="From outdated spaces to modern masterpieces - we deliver comprehensive renovation and refurbishment solutions that enhance both value and livability."
        image="/New_Flat.jpg"
        alt="Genuine UK property renovation showing dramatic before and after transformation of London flat"
        primaryLabel="Get Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
        
      />

      {/* Trust Metrics */}
      <TrustMetrics />

      <main className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Renovation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team delivers end-to-end renovation services, transforming properties with precision, quality, and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {renovationServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Professional Renovation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional renovation services deliver superior results, increased property value, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {renovationBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Renovation Gallery with Interactive Before/After */}
        <RenovationGallery />


        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure a smooth and professional renovation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Initial property assessment and planning" },
              { step: "2", title: "Design", description: "Detailed renovation plans and timeline" },
              { step: "3", title: "Execution", description: "Professional renovation work" },
              { step: "4", title: "Handover", description: "Quality inspection and completion" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get expert renovation consultation and transform your property with professional quality and guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Free Renovation Consultation</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Property assessment and renovation potential</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Detailed project timeline and costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Professional recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>No obligation, expert advice</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Get Renovation Quote
              </Button>
              <p className="text-sm opacity-90 text-center">
                Available 24/7 for emergency renovations and urgent property repairs
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}