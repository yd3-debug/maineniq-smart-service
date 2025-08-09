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
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import { ShieldCheck, ClipboardList, LifeBuoy, CalendarCheck, Building2, BarChart3, Users2, Wrench } from "lucide-react";

const PAGE_TITLE = "Why Work With Us | HVAC & MVHR Maintenance Partner";
const PAGE_DESCRIPTION =
  "Partner with a fast, reliable maintenance team for HVAC, MVHR and fan coil systems. We reduce downtime, extend lifespan and protect your reputation.";

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
        title="The maintenance partner behind your installations"
        subtitle="We protect your SLAs, reputation and client relationships with rapid response, expert engineers and compliant documentation across your portfolio."
        image={bmsControlRoom}
        alt="BMS control room illustrating professional HVAC and MVHR maintenance operations"
        primaryLabel="Contact our team"
        primaryHref="/contact"
        secondaryLabel={`Call ${CONTACT.phones.landline}`}
        secondaryHref={`tel:${CONTACT.phones.landlineTel}`}
        imageFit="cover"
      >
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-foreground/90" aria-label="Key value points">
          <li className="flex items-center gap-2">
            <CalendarCheck className="w-4 h-4 text-primary" /> Fast response SLAs
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> Specialist engineers
          </li>
          <li className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-primary" /> Compliance-ready documentation
          </li>
        </ul>
      </FullBleedHero>

      <TrustStrip />

      <section id="who-we-work-with" className="py-10 sm:py-14 bg-background animate-fade-in" aria-labelledby="who-we-work-with-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
            <h2 id="who-we-work-with-title" className="font-heading text-2xl sm:text-3xl font-semibold">Who we work with</h2>
            <p className="text-muted-foreground">We partner with organisations who value reliable outcomes, clear SLAs and audit-ready documentation.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-scale hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Installation companies</h3>
                    <p className="text-muted-foreground text-sm mt-1">Frictionless handover to maintenance, single point of ownership and brand-safe client care.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Property & block managers</h3>
                    <p className="text-muted-foreground text-sm mt-1">Planned maintenance, minimal tenant disruption and compliant records after every visit.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Users2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Facilities & FM providers</h3>
                    <p className="text-muted-foreground text-sm mt-1">Portfolio scheduling, clear SLAs, fast call-outs and proactive communication.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="results" className="py-10 sm:py-14 bg-muted/10 animate-fade-in" aria-labelledby="results-title">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
            <h2 id="results-title" className="font-heading text-2xl sm:text-3xl font-semibold">Proven results you can show clients</h2>
            <p className="text-muted-foreground">Tangible improvements from routine care—better efficiency, cleaner air, fewer call-outs.</p>
          </header>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/mvhr-filter-dirty.png"
              afterSrc="/mvhr-filter-clean.png"
              beforeAlt="Dirty MVHR filter before maintenance"
              afterAlt="Clean MVHR filter after maintenance"
              beforeLabel="Before"
              afterLabel="After"
              ratio={16/9}
              fit="cover"
              className="shadow"
            />
            <div className="mt-4 flex items-start justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Regular filter changes restore MVHR efficiency and air quality, preventing energy waste and odour complaints.
              </p>
              <ResearchBadge claimId="mvhr_filter_performance" />
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" aria-labelledby="what-you-get-title" className="py-10 sm:py-14 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-6 sm:mb-8">
            <h2 id="what-you-get-title" className="font-heading text-2xl sm:text-3xl font-semibold">
              What you’ll get as our partner
            </h2>
            <p className="text-muted-foreground">
              Clear deliverables, proactive care and transparent reporting that make your projects look great long after handover.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CalendarCheck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Planned maintenance that prevents failures</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      SFG20/CIBSE-aligned PPM, asset registers and schedules that extend lifespan and stabilise performance.
                    </p>
                    <ResearchBadge claimId="hvac_maintenance_savings" className="mt-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Defined SLAs and accountable ownership</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Clear response times, single point of contact and proactive communication across your portfolio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Compliance-ready documentation</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      RAMS, reports, certificates and audit-ready records—kept organised and shared after every visit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <LifeBuoy className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Reactive support with a first-time-fix mindset</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Rapid diagnostics, stocked vans and root-cause remediation to minimise disruption.
                    </p>
                    <ResearchBadge claimId="commercial_downtime_prevention" className="mt-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Multi-site coordination and predictable scheduling</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Rolling PPM across residential blocks and commercial sites with minimal tenant impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Transparent reporting and actionable recommendations</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Visit reports with photos, risk flags and lifecycle planning so you can brief clients with confidence.
                    </p>
                  </div>
                </div>
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

      <WhoWeServe />
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

      <section aria-labelledby="cta" className="py-8 sm:py-12 bg-background animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 id="cta" className="font-heading text-xl sm:text-2xl font-semibold">
                Let’s partner
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                We’ll protect your installations, meet your SLAs and keep clients happy—so you can focus on your core business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact our team
                </Button>
              </Link>
              <a
                href={`tel:${CONTACT.phones.landlineTel}`}
                aria-label={`Call now on ${CONTACT.phones.landline}`}
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full sm:w-auto">
                  Call us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
