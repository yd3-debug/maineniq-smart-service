import { Card, CardContent } from "@/components/ui/card";
import modernHvacSystem from "@/assets/modern-hvac-system.jpg";
import smartHomeSetup from "@/assets/smart-home-setup.jpg";
import energyTech from "@/assets/energy-tech.jpg";
import systemInspection from "@/assets/system-inspection.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Smart HVAC Integration",
    description: "Connected climate control with intelligent scheduling",
    image: modernHvacSystem,
    category: "Climate Control"
  },
  {
    id: 2,
    title: "Whole Home Setup",
    description: "Complete smart home ecosystem with central control",
    image: smartHomeSetup,
    category: "Home Automation"
  },
  {
    id: 3,
    title: "Energy Management",
    description: "Real-time monitoring and optimization systems",
    image: energyTech,
    category: "Energy Efficiency"
  },
  {
    id: 4,
    title: "System Integration",
    description: "Professional installation and testing process",
    image: systemInspection,
    category: "Installation"
  }
];

export function SmartHomeGallery() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-2xl font-bold">Smart Home Solutions Gallery</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See our professional installations and the technology that powers modern smart homes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}