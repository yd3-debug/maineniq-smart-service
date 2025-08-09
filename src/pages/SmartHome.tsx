import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FullBleedHero from "@/components/FullBleedHero";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone } from "lucide-react";

const SmartHome: React.FC = () => {
  useEffect(() => {
    document.title = "Smart Home Automation | Mainteniq";
    const desc = "Smart home integration for comfort, security, and energy efficiency. Control HVAC, lighting, and more.";
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
        title="Smart Home Automation"
        subtitle="Seamlessly control heating, cooling, lighting and security from your phone or voice. Comfort meets efficiency."
        image={smartHomeAutomation}
        alt="Smart home automation panel controlling HVAC and lighting"
        primaryLabel="Get a Smart Home Quote"
        primaryHref="/contact"
        secondaryLabel="Call us"
        secondaryHref={`tel:${CONTACT.phones.emergencyTel}`}
      />

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Smart thermostat setup","Voice assistant integration","Energy usage monitoring"].map((item) => (
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
              <div className="font-medium mb-1">Heating left on</div>
              <p className="text-muted-foreground">Automations turn off devices and save energy when you’re away.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Security blind spots</div>
              <p className="text-muted-foreground">Cameras and sensors integrated into one reliable system.</p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-white p-4">
              <div className="font-medium mb-1">Too many apps</div>
              <p className="text-muted-foreground">One app and voice control for everything important.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 border rounded-xl p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Consult & design: we plan your ideal setup",
              "Install & connect: devices, hubs, and apps",
              "Configure & train: scenes, automations, and support",
            ].map((step, i) => (
              <li key={i} className="rounded-lg border bg-background p-4">
                <div className="text-sm text-muted-foreground mb-1">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Discuss your project</Link>
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

export default SmartHome;
