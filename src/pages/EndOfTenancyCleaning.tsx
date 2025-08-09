import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone } from "lucide-react";

const EndOfTenancyCleaning: React.FC = () => {
  useEffect(() => {
    document.title = "End of Tenancy Cleaning | Mainteniq";
    const desc = "Professional end of tenancy cleaning for deposit-safe standards. Deep, detailed, guaranteed.";
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
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">End of Tenancy Cleaning</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Deep, detailed cleaning that meets inventory and deposit return standards. Fast turnarounds available.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link to="/contact">Get a Cleaning Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>Call us</a>
              </Button>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16/10}>
              <img src={endOfTenancyCleaning} alt="End of tenancy deep cleaning of a modern flat" loading="lazy" className="w-full h-full object-contain rounded-xl bg-background" />
            </AspectRatio>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Kitchens & bathrooms deep clean","Carpets, ovens, windows","Inventory-ready reports"].map((item) => (
            <div key={item} className="rounded-lg border bg-background p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="bg-muted/40 border rounded-xl p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Assess & schedule: convenient times",
              "Deep clean: trained team, pro equipment",
              "Final check: standards met, guaranteed",
            ].map((step, i) => (
              <li key={i} className="rounded-lg border bg-background p-4">
                <div className="text-sm text-muted-foreground mb-1">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Book cleaning</Link>
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

export default EndOfTenancyCleaning;
