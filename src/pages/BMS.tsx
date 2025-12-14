import React from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import SEOHead from "@/components/SEOHead";

import { BMSMetrics } from "@/components/BMSMetrics";
import { BMSBeforeAfter } from "@/components/BMSBeforeAfter";
import { BMSTechnology } from "@/components/BMSTechnology";
import { BMSProcess } from "@/components/BMSProcess";
import { BMSSpecs } from "@/components/BMSSpecs";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import bmsControlPanel from "@/assets/bms-control-panel.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema, generateBMSServiceSchema } from "@/utils/structuredData";

const bmsFaqs = [
  { question: "What is a Building Management System (BMS)?", answer: "A BMS is a computer-based control system that manages and monitors a building's mechanical and electrical equipment such as HVAC, lighting, power systems, fire systems, and security systems." },
  { question: "How often should BMS systems be maintained?", answer: "BMS systems should have quarterly preventive maintenance checks, with comprehensive annual reviews. Critical systems may require monthly monitoring and calibration." },
  { question: "What are the benefits of BMS maintenance?", answer: "Regular BMS maintenance reduces energy costs by 15-30%, prevents system failures, extends equipment lifespan, ensures occupant comfort, and maintains regulatory compliance." },
  { question: "Can you maintain any BMS brand?", answer: "Yes, we service all major BMS platforms including Trend, Siemens, Honeywell, Johnson Controls, Schneider Electric, and Tridium. Our engineers are multi-platform certified." },
  { question: "What does BMS optimization include?", answer: "BMS optimization includes control strategy review, setpoint optimization, scheduling adjustments, sensor calibration, trending analysis, and energy performance improvements." },
  { question: "How much can BMS optimization save on energy costs?", answer: "Proper BMS optimization typically saves 15-30% on energy costs. We provide detailed energy reports showing before and after performance metrics." }
];

const BMS: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="BMS Maintenance & Optimization London | Building Management Systems | Mainteniq"
        description="Expert BMS maintenance services to optimize your building management system performance, reduce energy costs by 15-30%, and ensure reliable operation. Multi-platform certified engineers."
        keywords="BMS maintenance London, building management system, BMS optimization, HVAC controls, building automation, Trend BMS, Siemens BMS, energy management, building controls maintenance"
        canonicalUrl="https://www.mainteniq.co.uk/bms"
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "BMS Maintenance", url: "https://www.mainteniq.co.uk/bms" }
        ])}
        faqData={generateFAQSchema(bmsFaqs)}
        serviceData={generateBMSServiceSchema()}
      />
      {/* Enhanced Hero Section */}
      <FullBleedHero
        title="BMS Maintenance & Optimization"
        subtitle="Expert servicing and optimization of your existing building management systems. Maximize efficiency, reduce costs, and ensure reliable operation."
        image={bmsControlRoom}
        alt="BMS control room with dashboards for building automation"
        primaryLabel="Get BMS Maintenance Quote"
        primaryHref="/contact"
        secondaryLabel="Call us"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />


      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Performance Results */}
        <BMSMetrics />

        {/* Key Maintenance Benefits */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold">Expert BMS Maintenance & Optimization</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional maintenance services that maximize your existing BMS investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "System Health Monitoring",
                description: "Continuous monitoring and diagnostics to prevent issues before they impact performance",
                icon: "🔧"
              },
              {
                title: "Performance Optimization",
                description: "Fine-tuning existing systems for maximum efficiency and reduced energy costs",
                icon: "⚡"
              },
              {
                title: "Preventive Maintenance",
                description: "Scheduled maintenance programs to extend system lifespan and prevent costly failures",
                icon: "🛡️"
              }
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="rounded-xl border bg-card p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BMS Technology Suite */}
        <BMSTechnology />

        {/* Before/After Comparison */}
        <BMSBeforeAfter />

        {/* Technical Specifications */}
        <BMSSpecs />

        {/* Professional Process */}
        <BMSProcess />

        {/* Problems We Prevent */}
        <section className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-2xl border border-destructive/20 p-8">
          <div className="text-center space-y-6 mb-8">
            <h2 className="font-heading text-3xl font-bold text-destructive">Critical Issues We Prevent</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Without proper BMS maintenance, buildings face significant operational and financial risks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "System Degradation & Inefficiency",
                description: "Regular maintenance and optimization prevent gradual performance decline and energy waste",
                impact: "£10k+ annual savings"
              },
              {
                title: "Unexpected System Failures", 
                description: "Preventive maintenance identifies issues early, avoiding costly emergency repairs",
                impact: "85% fewer breakdowns"
              },
              {
                title: "Compliance & Safety Issues",
                description: "Regular inspections and updates ensure systems meet safety standards and regulations",
                impact: "100% compliance"
              }
            ].map((problem) => (
              <div key={problem.title} className="bg-background rounded-lg border border-destructive/30 p-6">
                <h3 className="font-semibold text-lg mb-3 text-destructive">{problem.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  {problem.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center space-y-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border p-12">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold">Ready to Optimize Your BMS?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Join hundreds of property managers who've maximized their BMS performance with our expert maintenance services. 
              Get a comprehensive system assessment and maintenance quote today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/contact" className="flex items-center gap-2">
                Get BMS Maintenance Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call us now at ${CONTACT.phones.emergency}`}>
                <Phone className="w-5 h-5 mr-2"/>
                {CONTACT.phones.emergency}
              </a>
            </Button>
          </div>
          
          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              ✓ Free system assessment ✓ Preventive maintenance ✓ Performance optimization ✓ 24/7 support
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BMS;
