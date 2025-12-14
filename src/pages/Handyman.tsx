import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";

import { TestimonialCards } from "@/components/TestimonialCards";
import { ProgressMetric } from "@/components/ProgressMetric";
import HandymanImage from "@/assets/handyman-repair.jpg";
import { CONTACT } from "@/config/contact";
import { handleQuoteRequest } from "@/utils/quote";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { generateHandymanSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
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
  Users,
  Home,
  Building2,
  ChevronDown,
  AlertCircle,
  ArrowRight
} from "lucide-react";

// Compact service icons for initial view
const serviceCategories = [
  { icon: Zap, title: "Electrical", color: "text-yellow-500" },
  { icon: Droplets, title: "Plumbing", color: "text-blue-500" },
  { icon: Hammer, title: "Carpentry", color: "text-amber-700" },
  { icon: PaintBucket, title: "Decorating", color: "text-purple-500" },
  { icon: Wrench, title: "Maintenance", color: "text-slate-600" },
  { icon: Shield, title: "Emergency", color: "text-red-500" }
];

// Full service details for collapsible section
const fullServices = [
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

// Symptom-based content
const symptoms = [
  {
    symptom: "DIY repairs keep failing?",
    description: "Patches that don't hold, recurring leaks, or fixes that look unprofessional",
    solution: "We provide lasting professional solutions with proper materials and techniques",
    icon: Wrench
  },
  {
    symptom: "Can't find reliable tradespeople?",
    description: "No-shows, delays, poor communication, or inconsistent quality",
    solution: "Same-day response, qualified team, and clear communication throughout",
    icon: Users
  },
  {
    symptom: "Small issues becoming expensive?",
    description: "Minor maintenance ignored until it becomes a major structural problem",
    solution: "Preventive maintenance plans that catch problems early and save money",
    icon: TrendingUp
  }
];

const processSteps = [
  { step: "01", title: "Assessment", description: "Detailed inspection with transparent quote" },
  { step: "02", title: "Planning", description: "Materials sourced, timeline confirmed" },
  { step: "03", title: "Execution", description: "Clean, efficient work by qualified pros" },
  { step: "04", title: "Guarantee", description: "Quality check and warranty provided" }
];

const Handyman: React.FC = () => {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);

  const handymanFaqs = [
    { question: "What handyman services do you offer in London?", answer: "We offer comprehensive property maintenance including electrical repairs, plumbing fixes, carpentry, decorating, property maintenance, and emergency repairs. All work is carried out by qualified, insured professionals." },
    { question: "Do you offer same-day emergency handyman services?", answer: "Yes, we offer 98% same-day response for emergency repairs. Contact us and we'll dispatch a qualified tradesperson as quickly as possible." },
    { question: "Are your handymen insured and qualified?", answer: "Yes, all our tradespeople are fully insured with public liability cover and hold relevant trade qualifications. We provide documentation for all work completed." },
    { question: "How much does a handyman cost in London?", answer: "Our rates are competitive for professional London handyman services. We provide transparent quotes before work begins with no hidden charges." },
    { question: "Do you work with landlords and letting agents?", answer: "Yes, we specialize in property maintenance for landlords, Airbnb hosts, letting agents, and property managers. We understand tenant turnaround requirements and compliance documentation needs." },
    { question: "What warranty do you offer on handyman work?", answer: "We provide up to 24 months warranty on all work with free callback if any issues arise within the warranty period." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional Handyman Services London | Property Maintenance | Mainteniq"
        description="Professional handyman services for landlords, Airbnb hosts & property managers in London. Electrical, plumbing, carpentry, decorating. Same-day emergency repairs. Fully insured."
        keywords="handyman London, property maintenance London, handyman services, electrical repairs London, plumbing fixes, carpentry London, decorating services, emergency handyman, landlord handyman, Airbnb property maintenance"
        ogImage="/og-image-mainteniq.png"
        canonicalUrl="https://www.mainteniq.co.uk/handyman"
        structuredData={generateHandymanSchema()}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "Handyman Services", url: "https://www.mainteniq.co.uk/handyman" }
        ])}
        faqData={generateFAQSchema(handymanFaqs)}
      />

      <FullBleedHero
        title="Professional Handyman Services"
        subtitle="Expert property maintenance by qualified tradespeople. From minor repairs to major improvements, we deliver quality workmanship with full insurance and guarantees."
        image={HandymanImage}
        alt="Professional handyman performing quality maintenance and repairs"
        primaryLabel="Get Your Free Quote"
        primaryHref="/contact"
        secondaryLabel="Emergency Call"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      

      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* WHO WE HELP - Educational Intro */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">Who We Help</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop wasting time chasing unreliable tradespeople. We provide qualified, insured handymen who show up on time, complete work to standard, and give you documentation for compliance.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <Home className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-center">Landlords</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <Building2 className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-center">Airbnb Hosts</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-center">Property Managers</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-center">Homeowners</span>
            </div>
          </div>
        </section>

        {/* SIGNS YOU NEED US - Symptom-based approach */}
        <section className="rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">Signs You Need a Professional</h2>
            <p className="text-muted-foreground">Recognise any of these? We can help.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {symptoms.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.symptom}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-success/10 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-success-foreground font-medium">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => handleQuoteRequest("Handyman Services")}>
              Get Help Today
            </Button>
          </div>
        </section>

        {/* WHAT WE FIX - Compact with collapsible details */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">What We Fix</h2>
            <p className="text-muted-foreground">Comprehensive property maintenance services</p>
          </div>
          
          {/* Compact Icon Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {serviceCategories.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:scale-105 cursor-pointer" onClick={() => setServicesOpen(true)}>
                <service.icon className={`w-10 h-10 mb-2 ${service.color}`} />
                <span className="text-sm font-medium text-center">{service.title}</span>
              </div>
            ))}
          </div>
          
          {/* Collapsible Full Details */}
          <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <span>{servicesOpen ? "Hide" : "View"} All Service Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <service.icon className="w-8 h-8 text-primary flex-shrink-0" />
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
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* TRUST METRICS - Moved after services */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ProgressMetric
            icon={Clock}
            value={98}
            label="Same-day response"
            description="Emergency repairs"
            percentage={98}
            variant="success"
            delay={0}
          />
          <ProgressMetric
            icon={Users}
            value={850}
            label="Properties maintained"
            description="Residential & commercial"
            percentage={85}
            variant="default"
            delay={200}
          />
          <ProgressMetric
            icon={Award}
            value={99}
            label="Customer satisfaction"
            description="Quality guaranteed"
            percentage={99}
            variant="success"
            delay={400}
          />
          <ProgressMetric
            icon={TrendingUp}
            value={24}
            label="Months warranty"
            description="On all work"
            percentage={100}
            variant="default"
            delay={600}
          />
        </section>

        {/* OUR PROCESS - Simplified with collapsible */}
        <section className="bg-muted/40 border rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple process, professional results</p>
          </div>
          
          {/* Compact Process Steps */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
          
          <Collapsible open={processOpen} onOpenChange={setProcessOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-full flex items-center justify-center gap-2 text-muted-foreground">
                <span>{processOpen ? "Hide" : "Show"} Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${processOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-3">
                        {step.step}
                      </div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" onClick={() => handleQuoteRequest("Handyman Services")}>
              Get Professional Assessment
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                <Phone className="w-5 h-5 mr-2"/>
                Emergency: {CONTACT.phones.emergency}
              </a>
            </Button>
          </div>
        </section>

        {/* CREDENTIALS - Simplified */}
        <section className="text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">Qualified, Insured, Guaranteed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg border bg-card">
              <Award className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Qualified</h3>
              <p className="text-sm text-muted-foreground">Certified professionals with trade qualifications</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg border bg-card">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Insured</h3>
              <p className="text-sm text-muted-foreground">Full public liability and professional indemnity</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg border bg-card">
              <CheckCircle className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Up to 24-month warranty with free callback</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialCards />

        {/* FINAL CTA */}
        <section className="text-center rounded-xl bg-primary/5 border border-primary/20 p-8">
          <h2 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tell us about your property maintenance needs and get a free, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => handleQuoteRequest("Handyman Services")}>
              Get Your Free Quote
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                <Phone className="w-5 h-5 mr-2"/>
                Call Now
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Handyman;
