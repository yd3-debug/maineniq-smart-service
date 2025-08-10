import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Wifi, 
  Smartphone, 
  Shield,
  Database,
  Cloud
} from "lucide-react";

const specifications = [
  {
    title: "System Protocols",
    icon: Server,
    specs: [
      { label: "BACnet", type: "primary" },
      { label: "Modbus", type: "primary" },
      { label: "LonWorks", type: "secondary" },
      { label: "KNX/EIB", type: "secondary" },
      { label: "SNMP", type: "secondary" }
    ],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Connectivity",
    icon: Wifi,
    specs: [
      { label: "Ethernet TCP/IP", type: "primary" },
      { label: "Wi-Fi 6", type: "primary" },
      { label: "LoRaWAN", type: "secondary" },
      { label: "Zigbee", type: "secondary" },
      { label: "RS-485", type: "secondary" }
    ],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "User Interfaces",
    icon: Smartphone,
    specs: [
      { label: "Web Dashboard", type: "primary" },
      { label: "Mobile App", type: "primary" },
      { label: "HMI Panels", type: "secondary" },
      { label: "API Access", type: "secondary" },
      { label: "SCADA Integration", type: "secondary" }
    ],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Security Features",
    icon: Shield,
    specs: [
      { label: "256-bit Encryption", type: "primary" },
      { label: "VPN Access", type: "primary" },
      { label: "Role-based Access", type: "secondary" },
      { label: "Audit Logging", type: "secondary" },
      { label: "Firewall Protection", type: "secondary" }
    ],
    gradient: "from-red-500 to-pink-600"
  },
  {
    title: "Data Management",
    icon: Database,
    specs: [
      { label: "Real-time Logging", type: "primary" },
      { label: "Historical Trending", type: "primary" },
      { label: "Automated Backups", type: "secondary" },
      { label: "Data Analytics", type: "secondary" },
      { label: "Report Generation", type: "secondary" }
    ],
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Cloud Integration",
    icon: Cloud,
    specs: [
      { label: "Remote Monitoring", type: "primary" },
      { label: "Cloud Backup", type: "primary" },
      { label: "Multi-site Management", type: "secondary" },
      { label: "API Integration", type: "secondary" },
      { label: "Third-party Connectors", type: "secondary" }
    ],
    gradient: "from-teal-500 to-blue-600"
  }
];

export function BMSSpecs() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold">Technical Specifications</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Industry-leading BMS technology with comprehensive protocol support and enterprise-grade security
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specifications.map((spec) => (
          <Card key={spec.title} className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <CardHeader className="relative pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${spec.gradient}`}>
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{spec.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-3">
                {spec.specs.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.label}</span>
                    <Badge 
                      variant={item.type === "primary" ? "default" : "outline"} 
                      className="text-xs"
                    >
                      {item.type === "primary" ? "Standard" : "Optional"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}