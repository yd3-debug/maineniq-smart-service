
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import { TestimonialCards } from "@/components/TestimonialCards";
import { ProgressMetric } from "@/components/ProgressMetric";
import { HandymanBeforeAfter } from "@/components/HandymanBeforeAfter";
import HandymanImage from "@/assets/handyman-repair.jpg";
import MaintenanceImage from "@/assets/handyman-maintenance.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { 
  CheckCircle, 
  Phone, 
  Wrench, 
  Zap, 
  Droplets, 
  Hammer, 
  PaintBucket, 
  Shield, 
  Clock, 
  Award,
  TrendingUp,
  Users
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical Repairs",
    description: "Socket replacement, light fitting, switch repairs, minor electrical fixes",
    highlights: ["PAT testing available", "Certified electricians", "Safety compliance"]
  },
  {
    icon: Droplets,
    title: "Plumbing Fixes",
    description: "Tap repairs, toilet fixes, pipe leaks, drainage issues",
    highlights: ["24/7 emergency", "No call-out charges", "Parts warranty"]
  },
  {
    icon: Hammer,
    title: "Carpentry & Joinery",
    description: "Door hanging, shelving, kitchen units, furniture assembly",
    highlights: ["Custom solutions", "Quality materials", "Precision fitting"]
  },
  {
    icon: PaintBucket,
    title: "Decorating & Finishing",
    description: "Painting, wallpapering, silicone renewal, surface preparation",
    highlights: ["Professional finish", "Clean work area", "Color matching"]
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description: "Gutter cleaning, fascia repairs, external maintenance, weatherproofing",
    highlights: ["Seasonal checks", "Preventive care", "Access equipment"]
  },
  {
    icon: Shield,
    title: "Emergency Repairs",
    description: "Urgent fixes, security repairs, weather damage, safety issues",
    highlights: ["Same-day response", "24/7 availability", "Temporary solutions"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Professional Assessment",
    description: "Detailed inspection and transparent, itemized quotation with no hidden costs"
  },
  {
    step: "02", 
    title: "Quality Planning",
    description: "Material sourcing, timeline planning, and coordination with your schedule"
  },
  {
    step: "03",
    title: "Expert Execution", 
    description: "Clean, efficient work by qualified tradespeople with proper insurance"
  },
  {
    step: "04",
    title: "Guaranteed Results",
    description: "Quality inspection, cleanup, and comprehensive warranty on all work"
  }
];

const Handyman: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional Handyman Services | Expert Property Maintenance | Mainteniq"
        description="Professional handyman services for homes and businesses. Qualified tradespeople for electrical, plumbing, carpentry, decorating, and property maintenance. Same-day emergency repairs available."
        keywords="handyman services, property maintenance, electrical repairs, plumbing fixes, carpentry, decorating, emergency repairs, qualified tradespeople"
        ogImage="/og-image-maineniq.png"
        canonicalUrl={window.location.href}
      />

      <FullBleedHero
        title="Professional Handyman Services"
        subtitle="Expert property maintenance by qualified tradespeople. From minor repairs to major improvements, we deliver quality workmanship with full insurance and guarantees."
        image={HandymanImage}
        alt="Professional handyman performing quality maintenance and repairs"
        primaryLabel="Get Professional Quote"
        primaryHref="/contact"
        secondaryLabel="Emergency Call"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      <TrustStrip />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Success Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ProgressMetric
            icon={Clock}
            value={98}
            label="Same-day response rate"
            description="Emergency and urgent repairs"
            percentage={98}
            variant="success"
            delay={0}
          />
          <ProgressMetric
            icon={Users}
            value={850}
            label="Properties maintained"
            description="Residential and commercial"
            percentage={85}
            variant="default"
            delay={200}
          />
          <ProgressMetric
            icon={Award}
            value={99}
            label="Customer satisfaction"
            description="Quality guaranteed work"
            percentage={99}
            variant="success"
            delay={400}
          />
          <ProgressMetric
            icon={TrendingUp}
            value={24}
            label="Months warranty"
            description="On all completed work"
            percentage={100}
            variant="default"
            delay={600}
          />
        </section>

        {/* Comprehensive Services */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Comprehensive Handyman Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our qualified tradespeople handle everything from emergency repairs to planned maintenance. 
              All work comes with full insurance coverage and comprehensive warranties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-1">
                        {service.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Before/After Comparison */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">Why Professional Handyman Services Matter</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The difference between DIY attempts and professional workmanship extends beyond appearance—it's about safety, durability, and compliance.
            </p>
          </div>
          <HandymanBeforeAfter />
        </section>

        {/* Problems We Prevent */}
        <section className="rounded-xl border bg-primary/5 p-8">
          <h2 className="font-heading text-3xl font-bold mb-6 text-primary text-center">Critical Issues We Prevent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-danger flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Safety Hazards & Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Electrical hazards, gas leaks, structural weaknesses, and building regulation violations 
                      that could result in accidents, insurance claims, or legal issues.
                    </p>
                  </div>
                </div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Electrical safety testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Building regulations compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Insurance-approved work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Escalating Repair Costs</h3>
                    <p className="text-sm text-muted-foreground">
                      Small maintenance issues that become major structural problems, water damage, 
                      or system failures requiring expensive emergency interventions.
                    </p>
                  </div>
                </div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Preventive maintenance schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Early problem detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Cost-effective solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-6 h-6 text-info flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Property Value & Tenant Issues</h3>
                    <p className="text-sm text-muted-foreground">
                      Poor maintenance affecting property values, tenant satisfaction, rental income, 
                      and creating ongoing management headaches for property owners.
                    </p>
                  </div>
                </div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Professional quality standards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Rapid response times</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Tenant communication support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Process */}
        <section className="bg-muted/40 border rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Professional Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial assessment to final guarantee, every step is designed to deliver exceptional results with complete transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Professional Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Emergency handyman call ${CONTACT.phones.emergency}`}>
                <Phone className="w-5 h-5 mr-2"/>
                Emergency Call: {CONTACT.phones.emergency}
              </a>
            </Button>
          </div>
        </section>

        {/* Trust and Credentials */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">Qualified, Insured, Guaranteed</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Qualified Tradespeople</h3>
                <p className="text-sm text-muted-foreground">All work carried out by certified professionals with relevant trade qualifications and ongoing training.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fully Insured</h3>
                <p className="text-sm text-muted-foreground">Comprehensive public liability and professional indemnity insurance for complete peace of mind.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Work Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Up to 24-month warranties on all work with free callback service if you're not completely satisfied.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <TestimonialCards />
      </main>
    </div>
  );
};

export default Handyman;
