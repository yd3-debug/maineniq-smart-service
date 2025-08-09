import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Phone, Shield, Sparkles, AlertTriangle, Clock } from "lucide-react";

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

        <section className="rounded-xl border bg-primary/5 p-6">
          <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Problems we prevent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {title: "Deposit deductions", desc: "Missed areas and poor standards flagged in inventory"},
              {title: "Odours & stains", desc: "Lingering smells and stains that put off new tenants"},
              {title: "Re-clean delays", desc: "Landlord rejections that delay move-ins and cost time"}
            ].map((p) => (
              <div key={p.title} className="rounded-lg border border-primary/20 bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-medium">{p.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 rounded-xl border p-6 bg-muted/30">
          <div>
            <AspectRatio ratio={16/10}>
              <img src={endOfTenancyCleaning} alt="Before tenancy cleaning of a flat" loading="lazy" className="w-full h-full object-contain rounded-lg bg-background" />
            </AspectRatio>
            <div className="mt-2 text-center text-sm text-muted-foreground">Before</div>
          </div>
          <div>
            <AspectRatio ratio={16/10}>
              <img src={endOfTenancyCleaning} alt="After professional end of tenancy cleaning" loading="lazy" className="w-full h-full object-contain rounded-lg bg-background" />
            </AspectRatio>
            <div className="mt-2 text-center text-sm text-muted-foreground">After</div>
          </div>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">Comprehensive checklist</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-medium mb-2">Kitchen</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Degrease hob, oven exterior, splashbacks</li>
                <li>• Inside/out cupboards and drawers</li>
                <li>• Sink, taps, limescale removal</li>
                <li>• Floors vacuumed and mopped</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Bathrooms</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Descale shower, screens, tiles</li>
                <li>• Sanitize toilet and pedestal</li>
                <li>• Clean mirrors, fixtures, vents</li>
                <li>• Floors vacuumed and mopped</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Rooms & general</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Skirting boards, sockets, switches</li>
                <li>• Doors, handles, frames</li>
                <li>• Windows sills and frames (interior)</li>
                <li>• Vacuum carpets, wipe hard surfaces</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border p-6 bg-secondary/40">
          <h2 className="font-heading text-2xl font-bold mb-4">Popular add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            {["Carpet steam clean","Oven deep clean","Upholstery clean","Wall spot cleaning"].map((a) => (
              <div key={a} className="rounded-lg border bg-background p-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Studio", price: "From £140", points: ["Kitchen + bathroom","All rooms","Inventory ready"]},
            {name: "1–2 Bed", price: "From £180", points: ["Oven exterior","Windows interior","Inventory ready"]},
            {name: "3+ Bed", price: "From £240", points: ["Full deep clean","Team of 2–3","Priority slots"]}
          ].map((p) => (
            <div key={p.name} className="rounded-xl border p-6 bg-background">
              <div className="text-lg font-bold mb-2">{p.name}</div>
              <div className="text-2xl font-extrabold text-primary mb-4">{p.price}</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {p.points.map((pt) => (<li key={pt}>• {pt}</li>))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-xl border bg-primary/10 p-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">Deposit-safe standard</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">48h free re-clean</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Fully insured</span>
            </div>
          </div>
        </section>

        <section className="rounded-xl border p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">FAQs</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Do you provide cleaning supplies and equipment?</summary>
              <p className="mt-2">Yes, our team brings all professional cleaning products and equipment.</p>
            </details>
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Are you available on short notice?</summary>
              <p className="mt-2">Often yes. Contact us and we’ll do our best to fit your timescale.</p>
            </details>
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Do you guarantee deposit return?</summary>
              <p className="mt-2">We meet inventory standards and offer a 48h re-clean if anything is missed.</p>
            </details>
          </div>
        </section>

        <section className="text-center">
          <div className="flex gap-3 justify-center">
            <Button asChild>
              <Link to="/contact">Get a Cleaning Quote</Link>
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
