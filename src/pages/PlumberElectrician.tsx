import React from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import { TestimonialCards } from "@/components/TestimonialCards";
import { ProgressMetric } from "@/components/ProgressMetric";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";
import modernEquipment from "@/assets/modern-equipment.jpg";
import hvacProfessional from "@/assets/hvac-professional.jpg";
import teamWorking from "@/assets/team-working.jpg";
import customerConsultation from "@/assets/customer-consultation.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import systemInspection from "@/assets/system-inspection.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Clock, Award, Zap, Wrench, AlertTriangle, FileCheck, Users, Settings, Camera } from "lucide-react";

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

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Core Services */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Core Trade Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Wrench, 
                title: "Plumbing Services", 
                desc: "Boiler installation, leak detection, pipe work, bathroom installations. Gas Safe registered engineers.", 
                image: plumberElectricianWork 
              },
              { 
                icon: Zap, 
                title: "Electrical Services", 
                desc: "Rewiring, consumer units, fault finding, testing & certification. NICEIC certified electricians.", 
                image: electricalInstallation 
              },
              { 
                icon: Shield, 
                title: "Safety Inspections", 
                desc: "Gas safety checks, electrical testing, landlord certificates. Building regulation compliance.", 
                image: systemInspection 
              },
              { 
                icon: AlertTriangle, 
                title: "Emergency Response", 
                desc: "24/7 emergency callouts for urgent repairs. Fast response within 1 hour.", 
                image: teamWorking 
              }
            ].map((service) => (
              <div key={service.title} className="rounded-xl border bg-background overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`Professional ${service.title.toLowerCase()}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-secondary/20 rounded-xl p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Choose Our Professional Team</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={teamCollaboration} 
                alt="Certified Gas Safe and NICEIC engineers working together"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-semibold mb-6">Certified & Experienced Engineers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>100% Gas Safe registered plumbers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>NICEIC certified electricians</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>15+ years average experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>£2M professional liability insurance</span>
                </div>
              </div>
            </div>
          </div>

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
              description="All work meets regulations"
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

        {/* Emergency Services */}
        <section className="bg-destructive/10 border border-destructive/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive mt-1" />
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-bold mb-2 text-destructive">24/7 Emergency Services</h2>
                  <p className="text-muted-foreground mb-4">
                    Gas leaks, electrical faults, burst pipes, and heating failures require immediate professional attention. 
                    Our certified engineers provide rapid emergency response with safety-first approach.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-muted-foreground">Within 1 hour</div>
                    </div>
                    <div>
                      <div className="font-semibold">Availability</div>
                      <div className="text-muted-foreground">365 days/year</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="destructive">
                      <Link to="/contact">Emergency Service Request</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src={teamWorking} 
                alt="Emergency response team ready for urgent plumbing and electrical repairs"
                className="w-full h-full object-cover"
              />
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
