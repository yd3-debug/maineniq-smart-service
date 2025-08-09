import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building2, Factory, Home } from "lucide-react";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Briefcase,
      title: "Installation Companies",
      description:
        "Reliable maintenance partner post‑handover to protect performance and client satisfaction.",
    },
    {
      icon: Building2,
      title: "Property Managers",
      description:
        "Planned maintenance, rapid call‑outs and predictable costs across residential blocks.",
    },
    {
      icon: Factory,
      title: "Facilities Service Providers",
      description:
        "Responsive support that reduces downtime and meets SLA commitments across portfolios.",
    },
    {
      icon: Home,
      title: "Residential & Commercial",
      description:
        "Dependable care for multi‑unit housing and commercial sites with transparent reporting.",
    },
  ];

  return (
    <section id="who-we-serve" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Who We Serve
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Maintenance partnerships tailored for organisations that value reliability and reputation.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {audiences.map((a, i) => (
            <Card key={i} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                  <a.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm">{a.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
