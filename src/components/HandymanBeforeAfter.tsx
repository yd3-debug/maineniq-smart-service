import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, Palette, Wrench, Home, AlertTriangle } from "lucide-react";

const handymanComparisons = [
  {
    category: "Interior Decoration",
    icon: Palette,
    before: {
      title: "Tired & Outdated",
      issues: [
        "Peeling paint and wallpaper",
        "Mismatched colour schemes",
        "Amateur DIY attempts visible",
        "Poor finishing around edges"
      ]
    },
    after: {
      title: "Professionally Transformed",
      benefits: [
        "Fresh, modern colour palette",
        "Expert paint application",
        "Clean, professional finish",
        "Increased property value"
      ]
    }
  },
  {
    category: "Property Repairs",
    icon: Wrench,
    before: {
      title: "Damaged & Neglected",
      issues: [
        "Visible cracks and holes",
        "Temporary patch repairs",
        "Safety hazards present",
        "Deteriorating fixtures"
      ]
    },
    after: {
      title: "Professionally Restored",
      benefits: [
        "Structurally sound repairs",
        "Building regulation compliance",
        "Long-lasting solutions",
        "Safety risks eliminated"
      ]
    }
  },
  {
    category: "Property Maintenance",
    icon: Home,
    before: {
      title: "Reactive Maintenance",
      issues: [
        "Issues left until they worsen",
        "Emergency callouts required",
        "Higher long-term costs",
        "Property deterioration"
      ]
    },
    after: {
      title: "Proactive Care",
      benefits: [
        "Regular preventive maintenance",
        "Issues caught early",
        "Cost-effective solutions",
        "Property value protected"
      ]
    }
  }
];

export function HandymanBeforeAfter() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-2xl font-bold">Professional Property Transformation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See the difference professional handyman services make to your property's condition and value
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {handymanComparisons.map((comparison) => (
          <div key={comparison.category} className="space-y-6">
            <div className="flex items-center gap-3">
              <comparison.icon className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">{comparison.category}</h3>
            </div>
            
            <div className="space-y-4">
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