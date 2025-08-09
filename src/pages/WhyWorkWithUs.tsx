import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import { CheckCircle } from "lucide-react";

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
      <header className="bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Why Work With Us
          </h1>
          <p className="text-muted-foreground max-w-3xl text-base sm:text-lg">
            We partner with installation companies, property managers and facility service providers to take full ownership of ongoing
            maintenance for HVAC, MVHR, fan coil units and related systems. You focus on projects and client relationships—
            we keep assets compliant, efficient and reliable.
          </p>
        </div>
      </header>

      <section aria-labelledby="benefits" className="py-10 sm:py-14 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-4">
            <h2 id="benefits" className="font-heading text-2xl sm:text-3xl font-semibold">
              A maintenance partner that protects your reputation
            </h2>
            <p className="text-muted-foreground">
              We respond fast, diagnose accurately and resolve issues first time. Our planned preventive maintenance reduces
              downtime, prolongs system life and keeps you fully aligned with manufacturer guidance and compliance requirements.
            </p>
            <ul className="space-y-3">
              {[
                "Rapid response and clear communication across schedules and call-outs",
                "Specialist engineers for HVAC, MVHR and fan coil units",
                "Reliable first‑time fixes and predictable, proactive maintenance",
                "Reduced downtime, extended asset lifespan and compliance assured",
                "You focus on your core business—we handle the maintenance burden",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-2 rounded-lg border border-border bg-card text-card-foreground p-6">
            <h3 className="font-medium text-lg mb-3">Proof points</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Systems:</span> HVAC, MVHR, fan coil units, HIU/CIU and related plant
              </li>
              <li>
                <span className="font-medium text-foreground">Property types:</span> Residential blocks, commercial offices, multi‑unit schemes
              </li>
              <li>
                <span className="font-medium text-foreground">Delivery:</span> PPM schedules, reactive support, compliant documentation
              </li>
              <li>
                <span className="font-medium text-foreground">Coverage:</span> Coordinated multi‑site capability
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section aria-labelledby="cta" className="py-8 sm:py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-border bg-background p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 id="cta" className="font-heading text-xl sm:text-2xl font-semibold">
                Let’s collaborate
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Ready to offload maintenance to a dependable partner? Talk to us about a service plan tailored to your portfolio and SLAs.
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
