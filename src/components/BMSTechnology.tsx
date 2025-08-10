import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Thermometer, 
  Lightbulb, 
  Shield, 
  Zap, 
  Wifi, 
  BarChart3,
  Clock,
  Smartphone
} from "lucide-react";

const technologies = [
  {
    title: "HVAC Control",
    icon: Thermometer,
    description: "Automated heating, ventilation & air conditioning management",
    features: ["Zone-based control", "Temperature optimization", "Air quality monitoring"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Lighting Systems",
    icon: Lightbulb,
    description: "Smart lighting control with occupancy detection",
    features: ["Motion sensors", "Daylight harvesting", "Scene programming"],
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    title: "Security Integration",
    icon: Shield,
    description: "Access control and security system management",
    features: ["Door access control", "CCTV integration", "Alarm systems"],
    gradient: "from-red-500 to-pink-600"
  },
  {
    title: "Energy Monitoring",
    icon: Zap,
    description: "Real-time energy consumption tracking and optimization",
    features: ["Consumption analytics", "Peak demand control", "Cost optimization"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Network Connectivity",
    icon: Wifi,
    description: "Robust communication infrastructure for all systems",
    features: ["IoT device management", "Wireless protocols", "Cloud connectivity"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
    description: "Comprehensive data analysis and performance reporting",
    features: ["Performance metrics", "Trend analysis", "Custom dashboards"],
    gradient: "from-teal-500 to-blue-600"
  },
  {
    title: "Scheduling",
    icon: Clock,
    description: "Advanced scheduling for all building systems",
    features: ["Time-based control", "Calendar integration", "Holiday schedules"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Remote Access",
    icon: Smartphone,
    description: "Mobile and web-based system management",
    features: ["Mobile app control", "Remote diagnostics", "Alert notifications"],
    gradient: "from-violet-500 to-purple-600"
  }
];

export function BMSTechnology() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold">BMS Technology Suite</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Comprehensive building automation with integrated control systems
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <Card key={tech.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <CardHeader className="relative pb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.gradient}`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{tech.title}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}