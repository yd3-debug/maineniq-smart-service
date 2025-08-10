import { Card, CardContent } from "@/components/ui/card";
import smartLightingControl from "@/assets/smart-lighting-control.jpg";
import voiceAssistantControl from "@/assets/voice-assistant-control.jpg";
import smartSecuritySystem from "@/assets/smart-security-system.jpg";
import smartEntertainmentCenter from "@/assets/smart-entertainment-center.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Smart Lighting Control",
    description: "Automated lighting scenes with color and dimming control",
    image: smartLightingControl,
    category: "Lighting Systems"
  },
  {
    id: 2,
    title: "Voice Assistant Integration",
    description: "Control your entire home with voice commands",
    image: voiceAssistantControl,
    category: "Voice Control"
  },
  {
    id: 3,
    title: "Security & Monitoring",
    description: "Smart cameras, sensors, and access control systems",
    image: smartSecuritySystem,
    category: "Security Systems"
  },
  {
    id: 4,
    title: "Entertainment Centers",
    description: "Integrated audio, video, and streaming control",
    image: smartEntertainmentCenter,
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