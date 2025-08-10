import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, Building, Zap, AlertTriangle, Settings } from "lucide-react";

const comparisons = [
  {
    category: "Energy Management",
    icon: Zap,
    before: {
      title: "Manual Building Management",
      issues: [
        "Manual HVAC adjustments",
        "No real-time monitoring",
        "Energy waste undetected",
        "Reactive maintenance only"
      ]
    },
    after: {
      title: "BMS Automation",
      benefits: [
        "Automated climate optimization",
        "24/7 system monitoring",
        "Live energy usage tracking",
        "Predictive maintenance alerts"
      ]
    }
  },
  {
    category: "System Control",
    icon: Settings,
    before: {
      title: "Traditional Controls",
      issues: [
        "Individual system operation",
        "No centralized oversight",
        "Manual fault detection",
        "Limited scheduling options"
      ]
    },
    after: {
      title: "Centralized BMS",
      benefits: [
        "Integrated system control",
        "Single dashboard management",
        "Automated fault detection",
        "Advanced scheduling & zoning"
      ]
    }
  },
  {
    category: "Maintenance & Alerts",
    icon: AlertTriangle,
    before: {
      title: "Reactive Approach",
      issues: [
        "Equipment failures surprise",
        "Costly emergency repairs",
        "Extended downtime periods",
        "No performance tracking"
      ]
    },
    after: {
      title: "Proactive Monitoring",
      benefits: [
        "Early warning systems",
        "Planned maintenance windows",
        "Minimal system downtime",
        "Performance analytics & reports"
      ]
    }
  }
];

export function BMSBeforeAfter() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold">Transform Your Building Operations</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          See how professional BMS implementation revolutionizes building management, 
          energy efficiency, and operational control
        </p>
      </div>
      
      <div className="space-y-12">
        {comparisons.map((comparison) => (
          <div key={comparison.category} className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <comparison.icon className="w-8 h-8 text-primary" />
              <h3 className="font-heading text-2xl font-semibold">{comparison.category}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before */}
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <X className="w-6 h-6 text-destructive" />
                    <h4 className="font-semibold text-xl text-destructive">{comparison.before.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {comparison.before.issues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* After */}
              <Card className="border-success/30 bg-success/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent" />
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-6 h-6 text-success" />
                    <h4 className="font-semibold text-xl text-success">{comparison.after.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {comparison.after.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}