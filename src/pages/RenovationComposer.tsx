import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, Home, Palette, Shield, Star, Clock, Zap, ArrowRight, Phone, 
  Building2, Key, Briefcase, AlertTriangle, Thermometer, TrendingDown, PaintBucket,
  ChevronDown, CheckCircle2, Quote, HelpCircle, Award, Users, Calendar
} from "lucide-react";
import FullBleedHero from "@/components/FullBleedHero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { ProgressMetric } from "@/components/ProgressMetric";
import SEOHead from "@/components/SEOHead";
import RenovationGallery from "@/components/RenovationGallery";
import { handleQuoteRequest } from "@/utils/quote";
import { CONTACT } from "@/config/contact";
import { generateBreadcrumbSchema, generateFAQSchema, generateRenovationServiceSchema } from "@/utils/structuredData";
import renovationImage from "@/assets/renovation-comparison.jpg";

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
  const [processOpen, setProcessOpen] = useState(false);

  const audienceCards = [
    {
      icon: Home,
      title: "Homeowners",
      description: "Complete home transformations that enhance your living space and property value",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Building2,
      title: "Landlords",
      description: "Tenant-ready refurbishments that attract premium renters and maximize returns",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: Key,
      title: "Property Investors",
      description: "Value-add renovations for resale that maximize your investment returns",
      color: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      icon: Briefcase,
      title: "Commercial Owners",
      description: "Office and retail fit-outs that enhance productivity and brand image",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  const symptomCards = [
    {
      icon: TrendingDown,
      title: "Property value below market average",
      description: "Strategic renovation to unlock hidden value",
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      icon: AlertTriangle,
      title: "Outdated electrical or plumbing systems",
      description: "Complete system upgrades for safety & efficiency",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: Thermometer,
      title: "Poor EPC energy ratings",
      description: "Energy efficiency improvements for better ratings",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: PaintBucket,
      title: "Aesthetically dated or tired interiors",
      description: "Modern design transformations that impress",
      color: "bg-slate-500/10 text-slate-600 border-slate-200"
    }
  ];

  const serviceOutcomes = [
    {
      icon: Star,
      value: 32,
      label: "Value Increase",
      description: "Average property value increase after renovation",
      percentage: 85,
      suffix: "%"
    },
    {
      icon: Award,
      value: 98,
      label: "Customer Satisfaction",
      description: "Clients satisfied with their renovation results",
      percentage: 98,
      suffix: "%"
    },
    {
      icon: Calendar,
      value: 95,
      label: "On-Time Completion",
      description: "Projects completed within scheduled timeline",
      percentage: 95,
      suffix: "%"
    },
    {
      icon: Zap,
      value: 40,
      label: "Energy Efficiency",
      description: "Average improvement in energy efficiency ratings",
      percentage: 88,
      suffix: "%"
    }
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Consultation", 
      description: "Initial property assessment and planning",
      details: "Free site visit to assess your property, discuss your vision, review structural requirements, and understand your budget and timeline"
    },
    { 
      step: "2", 
      title: "Design", 
      description: "Detailed renovation plans and timeline",
      details: "Custom design proposals, 3D visualizations, material selection, and comprehensive project timeline with milestones"
    },
    { 
      step: "3", 
      title: "Execution", 
      description: "Professional renovation work",
      details: "Expert tradespeople, quality materials, daily progress updates, and strict adherence to building regulations"
    },
    { 
      step: "4", 
      title: "Handover", 
      description: "Quality inspection and completion",
      details: "Final walkthrough, snagging resolution, certification handover, and warranty documentation"
    }
  ];

  const testimonials = [
    {
      quote: "Our Victorian terrace was completely transformed. The attention to detail and project management was exceptional - they delivered on time and on budget.",
      name: "Emma & David H.",
      role: "Homeowners",
      location: "Islington",
      rating: 5
    },
    {
      quote: "Since the refurbishment, I've increased rental income by 35% and reduced void periods significantly. Best investment I've made.",
      name: "Marcus T.",
      role: "Buy-to-Let Landlord",
      location: "Hackney",
      rating: 5
    },
    {
      quote: "They renovated 8 units in our development on schedule. Professional, clean work, and brilliant communication throughout.",
      name: "Apex Property Group",
      role: "Property Developer",
      location: "South London",
      rating: 5
    }
  ];

  const renovationFaqs = [
    { question: "How long does a full property renovation take?", answer: "A full property renovation typically takes 8-16 weeks depending on the scope of work. Kitchen and bathroom renovations usually take 2-4 weeks each. We provide detailed timelines during consultation." },
    { question: "Do you handle planning permissions and building regulations?", answer: "Yes, we can assist with planning applications and ensure all work meets building regulations. Our team coordinates with local authorities and provides all necessary certifications." },
    { question: "What's included in a renovation quote?", answer: "Our quotes include all labor, materials, project management, and cleanup. We provide itemized breakdowns so you know exactly what you're paying for with no hidden costs." },
    { question: "Can you work while tenants are in the property?", answer: "Yes, we can phase work to minimize disruption for occupied properties. We discuss logistics during consultation and create schedules that work for everyone involved." },
    { question: "Do you offer warranties on renovation work?", answer: "Yes, we provide comprehensive warranties on all renovation work - typically 2-5 years depending on the work type. All materials used come with manufacturer warranties." },
    { question: "How much does property renovation cost in London?", answer: "Renovation costs vary based on scope and specification. Kitchen renovations start from £10,000, bathrooms from £5,000, and full property renovations from £30,000. Contact us for an accurate quote." }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Property Renovation & Refurbishment Services London | Mainteniq"
        description="Transform your property with our expert renovation and refurbishment services. Kitchen, bathroom, and full property renovations across London. Professional project management and guaranteed quality."
        keywords="property renovation London, refurbishment services, kitchen renovation, bathroom renovation, property transformation, London renovation, full property renovation, commercial renovation"
        canonicalUrl="https://www.mainteniq.co.uk/renovation-composer"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "Renovation & Refurbishment", url: "https://www.mainteniq.co.uk/renovation-composer" }
        ])}
        faqData={generateFAQSchema(renovationFaqs)}
        serviceData={generateRenovationServiceSchema()}
      />

      {/* Hero Section with WhatsApp CTAs */}
      <FullBleedHero
        title="Transform Your Property with Professional Renovation Services"
        subtitle="From outdated spaces to modern masterpieces - we deliver comprehensive renovation and refurbishment solutions that enhance both value and livability."
        image="/New_Flat.jpg"
        alt="Genuine UK property renovation showing dramatic before and after transformation of London flat"
        primaryLabel="Get Free Consultation"
        primaryOnClick={() => handleQuoteRequest("Renovation Consultation")}
        secondaryLabel="Request Callback"
        secondaryOnClick={() => handleQuoteRequest("Renovation Callback Request")}
      />

      {/* Trust Metrics */}
      <TrustMetrics />

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Who We Help Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Who We Help
            </Badge>
            <h2 className="font-heading text-3xl font-bold">
              Renovation Solutions for Every Property Owner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're upgrading your home or maximizing investment returns, we deliver transformations that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceCards.map((card) => (
                <Card key={card.title} className={`border ${card.color} transition-all hover:shadow-md`}>
                  <CardContent className="p-5 space-y-3">
                    <card.icon className="w-8 h-8" />
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={renovationImage} 
                alt="Professional property renovation showing modern transformation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Signs You Need Professional Renovation */}
        <section className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200">
              Signs You Need Professional Renovation
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              Problems That Disappear With Expert Renovation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptomCards.map((card) => (
              <Card key={card.title} className={`border ${card.color} transition-all hover:shadow-md`}>
                <CardContent className="p-5 space-y-3">
                  <card.icon className="w-6 h-6" />
                  <h3 className="font-medium text-sm">{card.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Renovation Assessment")}
            >
              Get Property Assessment
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
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
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Outcomes with ProgressMetrics */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
              What You Get
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              Results From Professional Renovation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Typical outcomes from our professional renovation and refurbishment services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOutcomes.map((metric, index) => (
                <ProgressMetric
                  key={metric.label}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                  percentage={metric.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/2024_Kitchen.png" 
                alt="Modern kitchen renovation showing quality finishes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="rounded-xl border bg-primary/5 p-8 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl font-bold text-primary">Why Choose Professional Renovation?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional renovation services deliver superior results, increased property value, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {renovationBenefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border border-primary/20 bg-background p-6 space-y-3 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section - Collapsible */}
        <section className="bg-muted/40 border rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Renovation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure a smooth and professional renovation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="rounded-lg border bg-background p-5 space-y-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>

          <Collapsible open={processOpen} onOpenChange={setProcessOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
                <span>{processOpen ? "Hide Details" : "View Process Details"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${processOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {processSteps.map((process) => (
                  <Card key={process.step} className="border">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                          {process.step}
                        </div>
                        <h4 className="font-semibold">{process.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{process.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Renovation Quote")}
            >
              Get Renovation Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Renovation Callback")}
            >
              <Phone className="w-4 h-4 mr-2"/>
              Request Callback
            </Button>
          </div>
        </section>

        {/* Renovation Gallery with Interactive Before/After */}
        <RenovationGallery />

        {/* Testimonials Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-200">
              Customer Reviews
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-2 border-t">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-200">
              <HelpCircle className="w-3 h-3 mr-1" />
              Common Questions
            </Badge>
            <h2 className="font-heading text-2xl font-bold">
              Renovation FAQ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about professional property renovation
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {renovationFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 bg-gradient-to-br from-background to-muted/20">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold">Ready to Transform Your Property?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who've transformed their properties with our professional 
            renovation services. Expert project management, quality craftsmanship, and guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => handleQuoteRequest("Renovation Consultation")}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleQuoteRequest("Renovation Quote")}
            >
              Get Instant Quote
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
