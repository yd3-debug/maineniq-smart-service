import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import TrustStrip from "@/components/TrustStrip";
import ResearchBadge from "@/components/ResearchBadge";
import WhoWeServe from "@/components/sections/WhoWeServe";
import SystemsWeMaintain from "@/components/sections/SystemsWeMaintain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FullBleedHero from "@/components/FullBleedHero";
import { ProgressMetric } from "@/components/ProgressMetric";
import { CommercialBenefitsChart } from "@/components/CommercialBenefitsChart";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { ROICalculator } from "@/components/ROICalculator";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { TrustMetrics } from "@/components/TrustMetrics";
import { TestimonialCards } from "@/components/TestimonialCards";
import teamWorking from "@/assets/team-working.jpg";
import { ShieldCheck, ClipboardList, LifeBuoy, CalendarCheck, Building2, BarChart3, Wrench, AlertTriangle, TrendingUp, Zap, Clock, Target } from "lucide-react";

const PAGE_TITLE = "Why Work With Us | The Insurance Policy Your Business Can't Afford to Skip";
const PAGE_DESCRIPTION =
  "Don't let system failures destroy your reputation. Our proactive maintenance prevents 90% of breakdowns, saves £8 per £1 spent, and protects your bottom line. Get bulletproof reliability.";

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
        title="The Insurance Policy Your Business Can't Afford to Skip"
        subtitle="Stop gambling with system failures. Our proactive maintenance prevents 90% of breakdowns, eliminates emergency callouts, and turns your HVAC systems into a competitive advantage—not a liability."
        image={teamWorking}
        alt="Professional team maintaining commercial HVAC systems"
        primaryLabel="Get Your ROI Calculation"
        primaryHref="/contact"
        secondaryLabel="Book Free Survey"
        secondaryHref={`tel:${CONTACT.phones.landlineTel}`}
        imageFit="cover"
      >
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-success/10 backdrop-blur-sm rounded-lg p-3 border border-success/20">
            <div className="flex items-center gap-2 text-success font-semibold text-sm">
              <TrendingUp className="w-4 h-4" />
              £8 saved per £1 spent
            </div>
          </div>
          <div className="bg-trust-blue/10 backdrop-blur-sm rounded-lg p-3 border border-trust-blue/20">
            <div className="flex items-center gap-2 text-trust-blue font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              99.2% system uptime
            </div>
          </div>
          <div className="bg-accent-orange/10 backdrop-blur-sm rounded-lg p-3 border border-accent-orange/20">
            <div className="flex items-center gap-2 text-accent-orange font-semibold text-sm">
              <Clock className="w-4 h-4" />
              4-hour response SLA
            </div>
          </div>
        </div>
      </FullBleedHero>

      <TrustStrip />
      
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <UrgencyBanner />
        </div>
      </section>

      <section id="roi-calculator" className="py-12 bg-muted/30" aria-labelledby="roi-title">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 id="roi-title" className="font-heading text-3xl font-bold mb-4">
                Stop Paying the Hidden Costs of Poor Maintenance
              </h2>
              <p className="text-muted-foreground mb-6">
                Every day you delay professional maintenance, your systems degrade. Energy bills climb. 
                Emergency risks compound. Client satisfaction drops. Calculate what reactive maintenance is really costing you.
              </p>
              <TrustMetrics />
            </div>
            <ROICalculator />
          </div>
        </div>
      </section>

      <section id="hidden-costs" className="py-12 bg-background" aria-labelledby="hidden-costs-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8">
            <h2 id="hidden-costs-title" className="font-heading text-3xl font-bold mb-4">
              The Hidden Costs Destroying Your Profit Margins
            </h2>
            <p className="text-muted-foreground">
              Without proper maintenance, your systems are silently bleeding money. Here's what most property managers don't realize they're losing.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ProgressMetric
              icon={AlertTriangle}
              value={40}
              label="Efficiency Loss"
              description="Systems lose 40% efficiency over 8 years without maintenance"
              percentage={40}
              variant="danger"
              delay={0}
            />
            <ProgressMetric
              icon={Zap}
              value={90}
              label="Preventable Failures"
              description="90% of system breakdowns could have been prevented"
              percentage={90}
              variant="warning"
              delay={200}
            />
            <ProgressMetric
              icon={TrendingUp}
              value={800}
              label="ROI Percentage"
              description="Our clients see 800% ROI on maintenance investment"
              percentage={100}
              variant="success"
              delay={400}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeSrc="/MVHRclean.webp"
              afterSrc="/MVPR0dirty.webp"
              beforeAlt="Clean, efficient MVHR system"
              afterAlt="Dirty, inefficient MVHR system"
              beforeLabel="With Our Maintenance"
              afterLabel="Without Professional Care"
              className="rounded-lg"
            />
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold">What Poor Maintenance Actually Costs:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span><strong>Energy waste:</strong> 15-40% higher bills due to inefficient operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span><strong>Emergency callouts:</strong> £500-2000 per incident, often out of hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span><strong>Tenant complaints:</strong> Comfort issues, noise, poor air quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span><strong>Shortened lifespan:</strong> Replace systems 3-5 years earlier</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span><strong>Reputation damage:</strong> Poor reviews, harder lettings, lower values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services-we-deliver" className="py-10 sm:py-14 bg-background animate-fade-in" aria-labelledby="services-we-deliver-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-6 sm:mb-8">
            <h2 id="services-we-deliver-title" className="font-heading text-2xl sm:text-3xl font-semibold">Services we deliver</h2>
            <p className="text-muted-foreground">End-to-end maintenance and support across HVAC, controls and building services.</p>
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
              <Button key={s.to} variant="secondary" size="sm" asChild className="hover-scale">
                <Link to={s.to} aria-label={`Learn more about ${s.label}`}>{s.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <WhoWeServe />

      <section id="competitive-edge" aria-labelledby="competitive-edge-title" className="py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8">
            <h2 id="competitive-edge-title" className="font-heading text-3xl font-bold mb-4">
              Your Competitive Edge: While Others React, You Prevent
            </h2>
            <p className="text-muted-foreground mb-6">
              Stop being the property manager who apologizes for system failures. Become the one who never has them. 
              Here's how we transform your maintenance from a cost center into a profit driver.
            </p>
            <ResearchBadge claimId="hvac_maintenance_savings" label="Proven ROI" />
          </header>
          
          <CommercialBenefitsChart />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <Card className="group hover:shadow-elegant transition-all hover-scale bg-gradient-to-br from-success/5 to-success/10 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Target className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-success">Predictable Budgets, Zero Surprises</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Fixed monthly costs with no emergency callout fees. Plan your budgets with confidence—we handle the rest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale bg-gradient-to-br from-trust-blue/5 to-trust-blue/10 border-trust-blue/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-trust-blue/10 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-blue">Sleep Easy Guarantee</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      24/7 monitoring, proactive alerts, and guaranteed 4-hour response. Your systems are our responsibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale bg-gradient-to-br from-accent-orange/5 to-energy-gold/10 border-accent-orange/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-orange/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-orange">Profit Protection System</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Turn maintenance into a revenue stream. Happy tenants stay longer, pay more, and refer others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CalendarCheck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Maintenance That Actually Maintains</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      SFG20/CIBSE-aligned PPM that finds problems before they find you. Systems last 40% longer with our care.
                    </p>
                    <ResearchBadge claimId="hvac_maintenance_savings" className="mt-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">First-Time-Fix Philosophy</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Our engineers arrive with the right parts, tools, and expertise. No return visits, no excuses.
                    </p>
                    <ResearchBadge claimId="commercial_downtime_prevention" className="mt-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Data-Driven Decision Making</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Real performance metrics, not generic reports. Know exactly what your money is buying.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="social-proof" className="py-12 bg-background" aria-labelledby="social-proof-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-8 text-center">
            <h2 id="social-proof-title" className="font-heading text-3xl font-bold mb-4">
              Join the Property Managers Who Sleep Easy
            </h2>
            <p className="text-muted-foreground">
              Don't take our word for it. Here's what happens when property managers choose prevention over panic.
            </p>
          </header>
          <TestimonialCards />
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

      <section aria-labelledby="final-cta" className="py-16 bg-professional-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 id="final-cta" className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Stop Gambling with System Failures
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Every day you delay professional maintenance is another day your competitors gain an edge. 
              Don't wait for the emergency that destroys your reputation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm">Site Survey & ROI Report</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Emergency Support Included</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">£0</div>
                <div className="text-sm">Setup or Callout Fees</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold text-lg px-8 py-4">
                  Get Your FREE ROI Analysis
                </Button>
              </Link>
              <a
                href={`tel:${CONTACT.phones.landlineTel}`}
                aria-label="Call our emergency helpline"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
                  Call Emergency Helpline
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-white/70 mt-6">
              Join 500+ property managers who've eliminated emergency callouts. No contracts, no risk—just results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}