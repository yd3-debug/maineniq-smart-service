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

      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Core Services */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Professional Trade Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "Plumbing Services", desc: "Boiler installation, leak detection, pipe work, bathroom installations", image: plumberElectricianWork },
              { icon: Zap, title: "Electrical Services", desc: "Rewiring, consumer units, fault finding, testing & certification", image: electricalInstallation },
              { icon: AlertTriangle, title: "Emergency Callouts", desc: "24/7 response for urgent plumbing and electrical emergencies", image: teamWorking },
              { icon: Shield, title: "Safety Inspections", desc: "Gas safety checks, electrical testing, landlord certificates", image: systemInspection },
              { icon: FileCheck, title: "Compliance Certificates", desc: "Building regulation compliance, safety certificates issued", image: hvacProfessional },
              { icon: Award, title: "Quality Guarantees", desc: "Professional liability insurance, workmanship warranties", image: customerConsultation }
            ].map((service) => (
              <div key={service.title} className="rounded-lg border bg-background overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`Professional ${service.title.toLowerCase()}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Team Gallery */}
        <section className="bg-muted/30 rounded-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Meet Our Certified Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={teamCollaboration} 
                alt="Certified Gas Safe and NICEIC engineers working together"
                className="w-full h-64 object-cover"
              />
              <div className="bg-background p-4">
                <h3 className="font-semibold mb-2">Gas Safe & NICEIC Certified Engineers</h3>
                <p className="text-sm text-muted-foreground">Our fully qualified team holds all necessary certifications and undergoes continuous training.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={customerConsultation} 
                alt="Professional consultation with customer"
                className="w-full h-64 object-cover"
              />
              <div className="bg-background p-4">
                <h3 className="font-semibold mb-2">Customer-Focused Service</h3>
                <p className="text-sm text-muted-foreground">We prioritize clear communication and transparent pricing throughout every project.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Shield, label: "Gas Safe Registered", count: "100%" },
              { icon: Zap, label: "NICEIC Certified", count: "100%" },
              { icon: Users, label: "Experienced Team", count: "15+ Years" },
              { icon: Award, label: "Fully Insured", count: "£2M Cover" }
            ].map((cert) => (
              <div key={cert.label} className="bg-background rounded-lg p-4">
                <cert.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-bold text-primary">{cert.count}</div>
                <div className="text-xs text-muted-foreground">{cert.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment & Quality Showcase */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Professional Equipment & Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden bg-background border">
              <img 
                src={modernEquipment} 
                alt="Professional grade testing and diagnostic equipment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Settings className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Modern Equipment</h3>
                <p className="text-sm text-muted-foreground">Professional-grade tools and testing equipment for accurate diagnostics and safe installations.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-background border">
              <img 
                src={beforeAfter} 
                alt="Before and after comparison of professional work"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Camera className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Quality Results</h3>
                <p className="text-sm text-muted-foreground">Documented before and after photos showing the transformation of every project we complete.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-background border">
              <img 
                src={systemInspection} 
                alt="Thorough system testing and inspection process"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <CheckCircle className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Thorough Testing</h3>
                <p className="text-sm text-muted-foreground">Comprehensive testing and inspection ensures all work meets safety standards and building regulations.</p>
              </div>
            </div>
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
          <h2 className="font-heading text-2xl font-bold mb-8 text-primary text-center">Our Professional Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                title: "Safety Assessment", 
                desc: "Comprehensive property and system evaluation",
                image: systemInspection,
                alt: "Professional safety assessment and system evaluation"
              },
              { 
                step: 2, 
                title: "Transparent Quote", 
                desc: "Detailed pricing with no hidden costs",
                image: customerConsultation,
                alt: "Transparent consultation and detailed quotation"
              },
              { 
                step: 3, 
                title: "Certified Installation", 
                desc: "Professional work to building regulations",
                image: electricalInstallation,
                alt: "Certified professional installation work"
              },
              { 
                step: 4, 
                title: "Testing & Certification", 
                desc: "Safety testing and official certificates issued",
                image: modernEquipment,
                alt: "Professional testing equipment and certification process"
              }
            ].map((item) => (
              <div key={item.step} className="rounded-lg border border-primary/20 bg-white overflow-hidden">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
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
