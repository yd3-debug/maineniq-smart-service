import React from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import { TestimonialCards } from "@/components/TestimonialCards";
import { ProgressMetric } from "@/components/ProgressMetric";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Clock, Award, Zap, Wrench, AlertTriangle, FileCheck } from "lucide-react";

const PlumberElectrician: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Professional Plumber & Electrician Services | Mainteniq"
        description="Certified Gas Safe & NICEIC plumbing and electrical services. Emergency repairs, installations, rewiring, boiler service. Fully insured with guarantees."
        keywords="plumber electrician, Gas Safe, NICEIC, boiler repair, rewiring, emergency plumber, electrical installation, certified trades"
        canonicalUrl={`${window.location.origin}/plumber-electrician`}
      />
      
      <FullBleedHero
        title="Professional Plumber & Electrician Services"
        subtitle="Gas Safe registered plumbers and NICEIC certified electricians delivering safe, compliant installations and emergency repairs across London."
        image={plumberElectricianWork}
        alt="Professional plumber and electrician performing certified installation work"
        primaryLabel="Request Professional Quote"
        primaryHref="/contact"
        secondaryLabel="Emergency Service Request"
        secondaryHref="/contact"
      />

      <TrustStrip />

      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Core Services */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Professional Trade Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "Plumbing Services", desc: "Boiler installation, leak detection, pipe work, bathroom installations" },
              { icon: Zap, title: "Electrical Services", desc: "Rewiring, consumer units, fault finding, testing & certification" },
              { icon: AlertTriangle, title: "Emergency Callouts", desc: "24/7 response for urgent plumbing and electrical emergencies" },
              { icon: Shield, title: "Safety Inspections", desc: "Gas safety checks, electrical testing, landlord certificates" },
              { icon: FileCheck, title: "Compliance Certificates", desc: "Building regulation compliance, safety certificates issued" },
              { icon: Award, title: "Quality Guarantees", desc: "Professional liability insurance, workmanship warranties" }
            ].map((service) => (
              <div key={service.title} className="rounded-lg border bg-background p-6 hover:bg-accent/50 transition-colors">
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="bg-secondary/20 rounded-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Professional Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgressMetric
              icon={Clock}
              value={95}
              label="On-Time Arrival"
              description="Punctual service appointments"
              percentage={95}
              variant="success"
              delay={0}
            />
            <ProgressMetric
              icon={Shield}
              value={100}
              label="Safety Compliance"
              description="All work meets building regulations"
              percentage={100}
              variant="success"
              delay={200}
            />
            <ProgressMetric
              icon={Award}
              value={98}
              label="Customer Satisfaction"
              description="Rated excellent by customers"
              percentage={98}
              variant="success"
              delay={400}
            />
          </div>
        </section>

        {/* Professional Process */}
        <section className="rounded-xl border bg-primary/5 p-8">
          <h2 className="font-heading text-2xl font-bold mb-6 text-primary">Our Professional Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Safety Assessment", desc: "Comprehensive property and system evaluation" },
              { step: 2, title: "Transparent Quote", desc: "Detailed pricing with no hidden costs" },
              { step: 3, title: "Certified Installation", desc: "Professional work to building regulations" },
              { step: 4, title: "Testing & Certification", desc: "Safety testing and official certificates issued" }
            ].map((item) => (
              <div key={item.step} className="rounded-lg border border-primary/20 bg-white p-5">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Services */}
        <section className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive mt-1" />
            <div className="flex-1">
              <h2 className="font-heading text-xl font-bold mb-2 text-destructive">24/7 Emergency Services</h2>
              <p className="text-muted-foreground mb-4">
                Gas leaks, electrical faults, burst pipes, and heating failures require immediate professional attention. 
                Our certified engineers provide rapid emergency response with safety-first approach.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="destructive">
                  <Link to="/contact">Emergency Service Request</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <TestimonialCards />
        </section>

        {/* Final CTA */}
        <section className="bg-accent/50 border rounded-xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Professional Trade Services You Can Trust</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Gas Safe registered plumbers and NICEIC certified electricians delivering safe, compliant work with full guarantees. 
            Emergency callouts available 24/7 for urgent repairs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request Professional Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlumberElectrician;
