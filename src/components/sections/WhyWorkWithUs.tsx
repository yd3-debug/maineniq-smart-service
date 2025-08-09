import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";

const WhyWorkWithUs = () => {
  return (
    <section id="why-work-with-us" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <h2 id="why-work-with-us-title" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Partner With the Team That Protects Your Reputation
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Fast response. Proven expertise. Reliable outcomes you can stand behind.
          </p>
        </header>

        <article className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          <p className="text-muted-foreground">
            You’ve delivered a high‑quality installation—now you need a maintenance partner who keeps it performing flawlessly. We specialise in service and maintenance for HVAC, MVHR, fan coil units, and related systems across residential buildings, commercial properties, and multi‑unit housing. Installation companies, property managers, and facility service providers trust us to keep systems running smoothly and clients satisfied long after handover.
          </p>
          <p className="text-muted-foreground">
            Our engineers respond quickly, diagnose accurately, and resolve issues the first time. With planned preventative maintenance and smart scheduling, we reduce downtime, prevent costly breakdowns, and extend asset life. The result: fewer emergencies, predictable costs, and peace of mind—backed by deep experience in both residential and commercial environments.
          </p>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Reduce downtime with proactive, planned maintenance and rapid call‑outs</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Prevent costly breakdowns through expert diagnostics and manufacturer‑aligned care</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Safeguard your brand and client relationships with consistent, reliable performance</span>
            </li>
          </ul>

          <p className="text-muted-foreground">
            When you need a dependable partner who supports your reputation and protects your assets, we’re ready to help—on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                Request service
              </Button>
            </Link>
            <a
              href={`tel:${CONTACT.phones.landlineTel}`}
              aria-label={`Call now on ${CONTACT.phones.landline}`}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-trust-blue text-trust-blue-foreground hover:bg-trust-blue/90">
                Call now
              </Button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
