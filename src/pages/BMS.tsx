import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone } from "lucide-react";

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
    <div className="min-h-screen pt-16">
      <header className="py-12 md:py-16 bg-muted/30 border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">BMS — Building Management Systems</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Centralised automation for HVAC, lighting, and energy. Monitor, control, and optimise performance across your building.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/contact">Get a BMS Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call ${CONTACT.phones.emergency}`}>Call us</a>
              </Button>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16/10}>
              <img src={bmsControlRoom} alt="BMS control room with dashboards for building automation" loading="lazy" className="w-full h-full object-contain rounded-xl bg-background" />
            </AspectRatio>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Energy monitoring and optimisation",
            "Automated scheduling and demand control",
            "Remote access with alerts and reports",
          ].map((item) => (
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
              <div className="font-medium mb-1">Uncontrolled energy spend</div>
              <p className="text-muted-foreground">Live monitoring and optimisation reduce wasted consumption.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Comfort complaints</div>
              <p className="text-muted-foreground">Zoning and schedules keep temperatures consistent.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Faults missed for weeks</div>
              <p className="text-muted-foreground">Alerts and reports flag issues before they become failures.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border rounded-xl p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Survey & scope: we assess systems, points, and integrations",
              "Install & integrate: controllers, sensors, and dashboards",
              "Commission & optimise: alerts, schedules, and reports",
            ].map((step, i) => (
              <li key={i} className="rounded-lg border bg-background p-4">
                <div className="text-sm text-muted-foreground mb-1">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Discuss your BMS</Link>
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

export default BMS;
