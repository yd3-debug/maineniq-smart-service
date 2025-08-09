import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone } from "lucide-react";

const PlumberElectrician: React.FC = () => {
  useEffect(() => {
    document.title = "Plumber & Electrician Services | Mainteniq";
    const desc = "Certified plumbing and electrical services: installations, repairs, and maintenance for safe, reliable systems.";
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
      <FullBleedHero
        title="Plumber & Electrician"
        subtitle="From leaks and rewires to boiler installs—reliable, compliant work by certified trades."
        image={plumberElectricianWork}
        alt="Plumber and electrician performing installation work"
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Emergency help"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Boiler install & maintenance","Rewiring and fault finding","Emergency call-outs"].map((item) => (
            <div key={item} className="rounded-lg border bg-background p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="rounded-xl border bg-primary/5 p-6">
          <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Problems we prevent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Water damage</div>
              <p className="text-muted-foreground">Prompt leak fixes and compliant installs prevent costly damp issues.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Electrical hazards</div>
              <p className="text-muted-foreground">Certified work reduces fire and shock risks and ensures safety.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Compliance penalties</div>
              <p className="text-muted-foreground">We issue certificates and keep your property fully compliant.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border rounded-xl p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Diagnose & quote: transparent pricing",
              "Repair/Install: certified workmanship",
              "Test & guarantee: safety and compliance",
            ].map((step, i) => (
              <li key={i} className="rounded-lg border bg-background p-4">
                <div className="text-sm text-muted-foreground mb-1">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Book a visit</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${CONTACT.phones.emergencyTel}`}><Phone className="w-4 h-4 mr-2"/>Call {CONTACT.phones.emergency}</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlumberElectrician;
