
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import HandymanImage from "@/assets/handyman-repair.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone } from "lucide-react";

const Handyman: React.FC = () => {
  useEffect(() => {
    document.title = "Handyman Services | Mainteniq";
    const desc = "Reliable handyman services for repairs and improvements. Fast, tidy, guaranteed workmanship.";
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
        title="Handyman"
        subtitle="General maintenance and repairs for homes and businesses. Done right, on time."
        image={HandymanImage}
        alt="Handyman performing maintenance and repairs"
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call us"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Repairs & maintenance","Minor installations","Preventive upkeep"].map((item) => (
            <div key={item} className="rounded-lg border bg-background p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="rounded-xl border bg-primary/5 p-6">
          <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Problems we prevent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Small faults becoming big repairs</div>
              <p className="text-muted-foreground">Preventive fixes avoid costly damage and downtime.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Safety risks at home</div>
              <p className="text-muted-foreground">Loose fixtures, trip hazards, and leaks resolved fast.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Tenant dissatisfaction</div>
              <p className="text-muted-foreground">Quick, tidy work that keeps occupants happy.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border rounded-xl p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Describe & quote: simple, transparent",
              "Fix & improve: tidy and efficient",
              "Check & guarantee: satisfaction assured",
            ].map((step, i) => (
              <li key={i} className="rounded-lg border bg-background p-4">
                <div className="text-sm text-muted-foreground mb-1">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Book a handyman</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call us now at ${CONTACT.phones.emergency}`}><Phone className="w-4 h-4 mr-2"/>Call now</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Handyman;
