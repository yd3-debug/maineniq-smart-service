import { Card, CardContent } from "@/components/ui/card";
import ukSmartLightingInstallation from "@/assets/uk-smart-lighting-installation.jpg";
import ukSmartMeterMonitoring from "@/assets/uk-smart-meter-monitoring.jpg";
import ukSecuritySystemInstallation from "@/assets/uk-security-system-installation.jpg";
import ukEntertainmentCenter from "@/assets/uk-entertainment-center.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Professional Smart Lighting Installation",
    description: "UK-compliant LED downlights with smart switches and dimmer controls",
    image: ukSmartLightingInstallation,
    category: "Lighting Systems"
  },
  {
    id: 2,
    title: "UK SMETS2 Smart Meter Integration",
    description: "Real-time energy monitoring with tariff tracking and usage insights",
    image: ukSmartMeterMonitoring,
    category: "Energy Monitoring (UK)"
  },
  {
    id: 3,
    title: "Professional Security System Installation",
    description: "CCTV cameras, smart doorbells, and access control for UK homes",
    image: ukSecuritySystemInstallation,
    category: "Security Systems"
  },
  {
    id: 4,
    title: "Integrated Entertainment Centers",
    description: "Professional AV installation with smart home control integration",
    image: ukEntertainmentCenter,
    category: "Entertainment"
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