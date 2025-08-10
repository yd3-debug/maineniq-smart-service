import { Card } from "@/components/ui/card";
import { CheckCircle, Wrench, Gauge, Fan, Cog, Cpu } from "lucide-react";

const SystemsWeMaintain = () => {
  const systems = [
    { icon: Wrench, title: "HVAC Plant", description: "Chillers, AHUs, condensers and air handling equipment." },
    { icon: Fan, title: "MVHR", description: "Mechanical ventilation with heat recovery systems." },
    { icon: Gauge, title: "Fan Coil Units", description: "FCU servicing, balancing and filter changes." },
    { icon: Cog, title: "HIU & CIU", description: "Heat interface units and central interface units for district heating and zone control systems." },
    { icon: CheckCircle, title: "Boilers & Pumps", description: "Efficiency checks and preventative maintenance." },
    { icon: Cpu, title: "BMS & Controls", description: "Controls optimisation and fault diagnostics." },
  ];

  return (
    <section id="systems-we-maintain" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Systems We Maintain
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Comprehensive care for the systems that keep your buildings comfortable and compliant.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {systems.map((s, i) => (
            <Card key={i} className="p-4 sm:p-6 hover:shadow-card transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsWeMaintain;
