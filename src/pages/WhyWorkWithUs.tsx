import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import TrustStrip from "@/components/TrustStrip";
import WhoWeServe from "@/components/sections/WhoWeServe";
import SystemsWeMaintain from "@/components/sections/SystemsWeMaintain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FullBleedHero from "@/components/FullBleedHero";
import hvacProfessional from "@/assets/hvac-professional.jpg";
import { ShieldCheck, ClipboardList, LifeBuoy, CalendarCheck, Building2, BarChart3, Wrench, Clock, Target, Users, Award, Zap, CheckCircle2, Phone, MessageSquare, FileText } from "lucide-react";

const PAGE_TITLE = "Why Choose Us | Professional HVAC Maintenance That Actually Works";
const PAGE_DESCRIPTION =
  "Partner with HVAC specialists who prevent breakdowns before they happen. Proven maintenance programs that reduce costs, eliminate emergencies, and protect your business reputation.";

export default function WhyWorkWithUs() {
  useEffect(() => {
    // Title
    document.title = PAGE_TITLE;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", PAGE_DESCRIPTION);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Canonical
    const canonicalHref = `${window.location.origin}/why-work-with-us`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Why Work With Us",
      description: PAGE_DESCRIPTION,
      url: canonicalHref,
    });
    document.head.appendChild(script);

    return () => {
      // Clean up JSON-LD to avoid duplicates when navigating
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main>
      <FullBleedHero
        id="hero-why-work-with-us"
        title="Why Choose Professional HVAC Maintenance?"
        subtitle="Partner with specialists who understand what's at stake. We prevent problems before they become emergencies, protect your reputation, and turn your building systems into a competitive advantage."
        image={hvacProfessional}
        alt="Professional HVAC engineers maintaining commercial systems"
        primaryLabel="Discuss Your Requirements"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref={`tel:${CONTACT.phones.landlineTel}`}
        imageFit="cover"
      />

      <TrustStrip />

      {/* Our Track Record - Simple Metrics */}
      <section className="py-12 bg-background" aria-labelledby="track-record-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8 text-center">
            <h2 id="track-record-title" className="font-heading text-3xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-muted-foreground">
              Numbers that matter to property managers and facility teams.
            </p>
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Properties Maintained</div>
            </div>
            <div className="text-center p-6 border border-muted rounded-lg">
              <div className="text-3xl font-bold text-success mb-2">99.2%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center p-6 border border-muted rounded-lg">
              <div className="text-3xl font-bold text-trust-blue mb-2">4hrs</div>
              <div className="text-sm text-muted-foreground">Response SLA</div>
            </div>
            <div className="text-center p-6 border border-muted rounded-lg">
              <div className="text-3xl font-bold text-accent-orange mb-2">8:1</div>
              <div className="text-sm text-muted-foreground">ROI Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="what-makes-us-different" className="py-16 bg-muted/30" aria-labelledby="different-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-12 text-center">
            <h2 id="different-title" className="font-heading text-3xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg">
              While others react to problems, we prevent them. Here's how we keep your systems running and your reputation intact.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  We focus exclusively on HVAC, MVHR, and building services. Our engineers know these systems inside-out, not just general maintenance.
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

      {/* Services Integration */}
      <section id="our-services" className="py-12 bg-background" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8">
            <h2 id="services-title" className="font-heading text-2xl sm:text-3xl font-semibold">Complete Building Services Coverage</h2>
            <p className="text-muted-foreground">From HVAC systems to smart home automation, we maintain everything that keeps your properties running smoothly.</p>
          </header>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "HVAC Maintenance", to: "/hvac-maintenance" },
              { label: "MVHR Maintenance", to: "/mvhr-maintenance" },
              { label: "FCU Maintenance", to: "/fcu-maintenance" },
              { label: "HIU Maintenance", to: "/hiu-maintenance" },
              { label: "BMS & Controls", to: "/bms" },
              { label: "Plumbing & Electrical", to: "/plumber-electrician" },
              { label: "Handyman & Repairs", to: "/handyman" },
              { label: "End of Tenancy Cleaning", to: "/end-of-tenancy-cleaning" },
              { label: "Smart Home & Automation", to: "/smart-home" },
              { label: "Renovation & Finishes", to: "/renovation-composer" },
              { label: "All Services", to: "/services" },
            ].map((s) => (
              <Button key={s.to} variant="outline" size="sm" asChild className="hover-scale">
                <Link to={s.to} aria-label={`Learn more about ${s.label}`}>{s.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* Case Study Snippets */}
      <section id="proof-points" className="py-16 bg-muted/20" aria-labelledby="proof-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-12 text-center">
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
                  <strong>Residential Development, London:</strong> Our preventative maintenance program improved HVAC efficiency by 32%, saving £47,000 annually in energy costs across 180 units.
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
                  <strong>Commercial Office, Birmingham:</strong> 18 months with zero HVAC emergencies after implementing our proactive maintenance schedule. Previous year had 12 costly callouts.
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

      <section id="how-we-work" aria-labelledby="how-we-work-title" className="py-10 sm:py-14 bg-muted/10 animate-fade-in">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-6 sm:mb-8">
            <h2 id="how-we-work-title" className="font-heading text-2xl sm:text-3xl font-semibold">
              How we work
            </h2>
            <p className="text-muted-foreground">A simple, accountable process tuned for busy teams.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Onboarding", copy: "Site survey, asset capture and risk assessment. We agree SLAs and communication lines." },
              { step: "02", title: "Mobilisation", copy: "PPM schedules created, RAMS issued and portal/reporting set up for your team." },
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

      <section id="compliance" className="py-10 sm:py-14 bg-background animate-fade-in" aria-labelledby="compliance-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-6 sm:mb-8">
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

      <section aria-labelledby="final-cta" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 id="final-cta" className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Ready to Partner with HVAC Specialists?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join property managers who've eliminated emergency callouts and turned their building systems into competitive advantages.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm">Consultation & Site Survey</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Emergency Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">No</div>
                <div className="text-sm">Setup or Hidden Costs</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4">
                  Discuss Your Requirements
                </Button>
              </Link>
              <a
                href={`tel:${CONTACT.phones.landlineTel}`}
                aria-label="Call us to discuss your maintenance needs"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
                  Call Now
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-white/70 mt-6">
              Trusted by 500+ properties across the UK. Professional, reliable, accountable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}