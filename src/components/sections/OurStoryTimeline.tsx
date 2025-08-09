import { Clock } from "lucide-react";

const milestones = [
  { year: "2009", title: "Founded", desc: "Started as a specialist HVAC maintenance team in London." },
  { year: "2013", title: "Multi‑Unit Expertise", desc: "Expanded to large residential blocks and mixed‑use sites." },
  { year: "2017", title: "Commercial Portfolios", desc: "Added office and retail portfolios with 24/7 response." },
  { year: "2021", title: "Digital Reporting", desc: "Rolled out photographic reports and asset tracking." },
  { year: "Today", title: "Trusted Partner", desc: "Maintenance‑first partner for installation companies and managers." },
];

const OurStoryTimeline = () => {
  return (
    <section id="our-story" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            A proven history of dependable, maintenance‑led service.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-muted/60 pl-6">
            {milestones.map((m, i) => (
              <li key={i} className="mb-6">
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground shadow">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{m.year}</div>
                  <h3 className="font-semibold text-base sm:text-lg">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurStoryTimeline;
