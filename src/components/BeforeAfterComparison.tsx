import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, Zap, Clock, Shield, Smartphone } from "lucide-react";

const comparisons = [
  {
    category: "Energy Management",
    icon: Zap,
    before: {
      title: "Traditional Home",
      issues: [
        "Manual thermostat adjustments",
        "Lights left on unnecessarily",
        "No energy usage visibility",
        "Inconsistent temperatures"
      ]
    },
    after: {
      title: "Smart Home",
      benefits: [
        "Automated climate optimization",
        "Motion-activated lighting",
        "Real-time energy monitoring",
        "Zone-based temperature control"
      ]
    }
  },
  {
    category: "Security & Access",
    icon: Shield,
    before: {
      title: "Standard Security",
      issues: [
        "Physical keys only",
        "No remote monitoring",
        "Limited access control",
        "Manual system operation"
      ]
    },
    after: {
      title: "Smart Security",
      benefits: [
        "Keyless entry with codes",
        "24/7 remote monitoring",
        "Automated alerts & responses",
        "Guest access management"
      ]
    }
  }
];

export function BeforeAfterComparison() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-2xl font-bold">Transform Your Home</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See the difference professional smart home automation makes in daily life
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {comparisons.map((comparison) => (
          <div key={comparison.category} className="space-y-6">
            <div className="flex items-center gap-3">
              <comparison.icon className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">{comparison.category}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before */}
              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <X className="w-5 h-5 text-destructive" />
                    <h4 className="font-medium text-destructive">{comparison.before.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {comparison.before.issues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* After */}
              <Card className="border-success/20 bg-success/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <h4 className="font-medium text-success">{comparison.after.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {comparison.after.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {benefit}
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