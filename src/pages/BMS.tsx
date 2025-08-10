import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import TrustStrip from "@/components/TrustStrip";
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

const BMS: React.FC = () => {
  useEffect(() => {
    document.title = "BMS (Building Management Systems) | Mainteniq";
    const desc = "BMS installation and maintenance to optimise building performance, comfort, and energy use.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative">
        <FullBleedHero
          title="BMS — Building Management Systems"
          subtitle="Centralised automation for HVAC, lighting, and energy. Monitor, control, and optimise performance across your building."
          image={bmsControlRoom}
          alt="BMS control room with dashboards for building automation"
          primaryLabel="Get a BMS Quote"
          primaryHref="/contact"
          secondaryLabel="Call us"
          secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
        />
        
        {/* Floating Metrics Overlay */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="bg-background/95 backdrop-blur border rounded-xl shadow-lg p-6">
              <BMSMetrics />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip />

      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Key Benefits */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold">Complete Building Automation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional BMS implementation delivers comprehensive control and monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Energy Monitoring & Optimization",
                description: "Real-time tracking with automated optimization reducing energy costs by up to 25%",
                icon: "⚡"
              },
              {
                title: "Automated Scheduling & Control",
                description: "Intelligent demand control and scheduling across all building systems",
                icon: "🕒"
              },
              {
                title: "Remote Access & Alerts",
                description: "24/7 monitoring with instant alerts and comprehensive reporting dashboard",
                icon: "📱"
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
              Without professional BMS, buildings face significant operational and financial risks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Uncontrolled Energy Waste",
                description: "Live monitoring and AI-driven optimization eliminate up to 30% of energy waste",
                impact: "£10k+ annual savings"
              },
              {
                title: "Comfort & Productivity Issues", 
                description: "Precision zoning and scheduling maintain optimal conditions across all spaces",
                impact: "15% productivity gain"
              },
              {
                title: "Equipment Failures & Downtime",
                description: "Predictive analytics and instant alerts prevent costly breakdowns",
                impact: "85% less downtime"
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
            <h2 className="font-heading text-3xl font-bold">Ready to Automate Your Building?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Join hundreds of property managers who've transformed their buildings with professional BMS implementation. 
              Get a comprehensive consultation and custom quote today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/contact" className="flex items-center gap-2">
                Get Professional BMS Quote
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
              ✓ Free consultation ✓ Custom design ✓ Professional installation ✓ Ongoing support
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BMS;
