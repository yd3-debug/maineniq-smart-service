import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import FullBleedHero from "@/components/FullBleedHero";
import PropertyAssessmentForm from "@/components/PropertyAssessmentForm";
import SystemsWeMaintain from "@/components/sections/SystemsWeMaintain";
import WhoWeServe from "@/components/sections/WhoWeServe";
import SEOHead from "@/components/SEOHead";
import { CONTACT } from "@/config/contact";
import { generateMaintenanceContractSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  DollarSign, 
  BarChart3, 
  Building, 
  Users, 
  FileText, 
  Phone,
  Target,
  Wrench,
  AlertTriangle,
  TrendingUp,
  Award,
  Zap,
  MessageSquare,
  ShieldCheck,
  LifeBuoy,
  CalendarCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Home,
  Factory,
  HardHat,
  Thermometer
} from "lucide-react";

const MaintenanceContracts = () => {
  console.log('MaintenanceContracts: Component loaded');
  console.log('WhoWeServe:', WhoWeServe);
  console.log('SystemsWeMaintain:', SystemsWeMaintain);

  const maintenanceContractFaqs = [
    { question: "What's included in a maintenance contract?", answer: "Our contracts include scheduled preventive maintenance, 24/7 emergency response, parts and labor for covered systems, detailed reporting, and priority service. We tailor coverage to your specific property needs." },
    { question: "How much can I save with a maintenance contract?", answer: "Properties on maintenance contracts typically save 30-50% compared to reactive maintenance costs. You also benefit from extended equipment lifespan and reduced emergency callouts." },
    { question: "What's the typical response time for emergencies?", answer: "Contract customers receive guaranteed 4-hour response SLA for emergencies, with 24/7 direct access to our engineering team - no call centers or delays." },
    { question: "Can I customize my maintenance contract?", answer: "Yes, all our contracts are tailored to your property's specific systems and needs. We conduct a free assessment and design a package that covers exactly what you need." },
    { question: "What systems can be covered under a maintenance contract?", answer: "We cover HVAC systems, boilers, plumbing, electrical, FCU, HIU, MVHR, BMS, and general building maintenance. Single-provider coverage simplifies your property management." },
    { question: "How do I get started with a maintenance contract?", answer: "Contact us for a free property assessment. We'll evaluate your systems, discuss your needs, and provide a custom proposal with clear pricing and service levels." }
  ];
  
  useEffect(() => {
    console.log('MaintenanceContracts: useEffect running');
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
      <SEOHead
        title="Custom Maintenance Contracts UK | Prevent 80% Breakdowns | 24/7 Response | Mainteniq"
        description="Tailored HVAC, plumbing & electrical maintenance contracts for landlords & property managers. Prevent 80% breakdowns, fixed monthly costs, 24/7 response, 99.2% uptime guarantee."
        keywords="maintenance contracts UK, property maintenance agreements, HVAC maintenance contracts, landlord maintenance services, preventive maintenance contracts, building maintenance, commercial property maintenance, planned maintenance, PPM contracts, facility management"
        canonicalUrl="https://www.mainteniq.co.uk/maintenance-contracts"
        structuredData={generateMaintenanceContractSchema()}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "Maintenance Contracts", url: "https://www.mainteniq.co.uk/maintenance-contracts" }
        ])}
        faqData={generateFAQSchema(maintenanceContractFaqs)}
      />
      <FullBleedHero
        title="Custom Maintenance Contracts for Your Property Portfolio"
        subtitle="Why choose reactive maintenance when you can prevent problems? Our tailored contracts provide 24/7 guaranteed response, preventive maintenance, and all systems coverage under one provider."
        image="/BOILER.png"
        alt="Modern building maintenance systems"
        primaryLabel="Schedule Assessment"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      {/* Our Track Record */}
      <section className="py-12 bg-background" aria-labelledby="track-record-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto mb-8 text-center">
            <h2 id="track-record-title" className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-muted-foreground">
              Numbers that matter to property managers and facility teams.
            </p>
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="text-center p-3 sm:p-4 md:p-6 border border-muted rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Properties Maintained</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 border border-muted rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-success mb-2">99.2%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 border border-muted rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-trust-blue mb-2">4hrs</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Response SLA</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 border border-muted rounded-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-orange mb-2">8:1</div>
              <div className="text-xs sm:text-sm text-muted-foreground">ROI Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract vs Reactive Maintenance */}
      <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Maintenance Contracts vs Reactive Maintenance?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Smart property owners choose contracts over reactive maintenance. Here's why:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
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

      {/* What Makes Us Different */}
      <section id="what-makes-us-different" className="py-8 sm:py-12 md:py-16 bg-background" aria-labelledby="different-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto mb-8 md:mb-12 text-center">
            <h2 id="different-title" className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              While others react to problems, we prevent them. Here's how we keep your systems running and your reputation intact.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Specialist Expertise</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  We specialize in advanced building systems maintenance across HVAC, MVHR, and mechanical services. Our engineers know these systems inside-out, not just general maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-trust-blue">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-trust-blue/10 rounded-lg">
                    <Clock className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Proactive Response</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  24/7 monitoring and guaranteed 4-hour response times. We catch issues before they become emergencies that disrupt your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <FileText className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparent Reporting</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Clear, jargon-free reports after every visit. You know exactly what was done, what was found, and what needs attention next.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-orange">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent-orange/10 rounded-lg">
                    <Target className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Proven Process</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  SFG20/CIBSE-aligned maintenance programs that actually prevent failures. No guesswork, just proven industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-energy-gold">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-energy-gold/10 rounded-lg">
                    <Award className="w-6 h-6 text-energy-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality Assurance</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  First-time-fix philosophy with fully trained, insured engineers. We arrive with the right parts and expertise every time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Partnership Approach</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  We integrate with your existing operations, not disrupt them. Clear communication, agreed SLAs, and accountable service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contract Benefits */}
      <section className="py-16 bg-muted/30">
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
      <section className="py-16 bg-background">
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
      <section className="py-16 bg-muted/30">
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

      <WhoWeServe />

      {/* Case Study Snippets */}
      <section id="proof-points" className="py-16 bg-muted/20" aria-labelledby="proof-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto mb-12 text-center">
            <h2 id="proof-title" className="font-heading text-3xl font-bold mb-4">
              Real Results for Real Clients
            </h2>
            <p className="text-muted-foreground">
              See how our maintenance programs deliver measurable benefits to property managers and facility teams.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-success">£47,000</div>
                  <div className="text-sm text-muted-foreground">Annual Energy Savings</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Residential Development, London:</strong> Our preventative maintenance program improved building system efficiency by 32%, saving £47,000 annually in energy costs across 180 units.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-trust-blue">Zero</div>
                  <div className="text-sm text-muted-foreground">Emergency Callouts</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Commercial Office, Birmingham:</strong> 18 months with zero system emergencies after implementing our proactive maintenance schedule. Previous year had 12 costly callouts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-accent-orange">40%</div>
                  <div className="text-sm text-muted-foreground">Longer Asset Life</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Student Accommodation, Manchester:</strong> Our maintenance program extended system lifespan from 12 to 17 years, delaying £280,000 in replacement costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" aria-labelledby="how-we-work-title" className="py-10 sm:py-14 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center">
            <h2 id="how-we-work-title" className="font-heading text-2xl sm:text-3xl font-semibold">
              How we work
            </h2>
            <p className="text-muted-foreground">A simple, accountable process tuned for busy teams.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Onboarding", copy: "Site survey, asset capture and risk assessment. We agree SLAs and communication lines." },
              { step: "02", title: "Mobilisation", copy: "Work schedules planned, safety assessments completed, and communication protocols established with your team." },
              { step: "03", title: "Planned Maintenance", copy: "Routine visits aligned to manufacturer guidance—find issues early, avoid outages." },
              { step: "04", title: "Reactive & Reporting", copy: "Clear call-out process, root-cause fixes and concise reports after every visit." },
            ].map((s) => (
              <Card key={s.step} className="hover:shadow-card transition-all hover-scale">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {s.step}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-muted-foreground text-sm">{s.copy}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SystemsWeMaintain />

      {/* Compliance & Credentials */}
      <section id="compliance" className="py-10 sm:py-14 bg-muted/30 animate-fade-in" aria-labelledby="compliance-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center">
            <h2 id="compliance-title" className="font-heading text-2xl sm:text-3xl font-semibold">Compliance & credentials</h2>
            <p className="text-muted-foreground">We align with industry standards and provide audit-ready documentation.</p>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start gap-2"><ClipboardList className="w-4 h-4 text-primary mt-0.5" /> SFG20/CIBSE-aligned PPM and tasking</li>
            <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-0.5" /> RAMS, certificates and visit reports after every job</li>
            <li className="flex items-start gap-2"><Wrench className="w-4 h-4 text-primary mt-0.5" /> Gas Safe/NICEIC where applicable and fully insured operations</li>
            <li className="flex items-start gap-2"><Building2 className="w-4 h-4 text-primary mt-0.5" /> Risk-managed work across occupied residential and commercial sites</li>
          </ul>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete System Coverage Under One Contract</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From HVAC to plumbing, electrical to handyman services - we handle everything so you don't have to manage multiple contractors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Thermometer className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">HVAC Systems</h3>
                <p className="text-sm text-muted-foreground">Complete heating, ventilation, and air conditioning maintenance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Wrench className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Plumbing & Electrical</h3>
                <p className="text-sm text-muted-foreground">Emergency repairs, safety checks, and routine maintenance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Building Management</h3>
                <p className="text-sm text-muted-foreground">BMS systems, controls, and smart building automation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <HardHat className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">General Maintenance</h3>
                <p className="text-sm text-muted-foreground">Handyman services, cleaning, and property care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Commitments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Commitments</h2>
            <p className="text-lg text-muted-foreground">When you choose our maintenance contracts, you get these guarantees:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Response Time Guarantee</h3>
              <p className="text-muted-foreground">Emergency: 2-4 hours | Urgent: Same day | Routine: Within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">First-time fix commitment with follow-up if needed. All work guaranteed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Transparency</h3>
              <p className="text-muted-foreground">Detailed reports after every visit. Real-time updates via our portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPORARILY HIDDEN - Property Assessment Form Section 
          This section is commented out while building the backend functionality.
          Uncomment when ready to integrate with backend API.
      */}
      {/* 
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Your Custom Contract Assessment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every property is unique. Tell us about yours and we'll create a tailored maintenance contract that fits your exact needs and budget.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PropertyAssessmentForm />
          </div>
        </div>
      </section>
      */}

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Switch from Reactive to Preventive Maintenance?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Join hundreds of property owners who've already made the smart choice. Get your custom contract assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Schedule Assessment
                </Button>
              </Link>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceContracts;