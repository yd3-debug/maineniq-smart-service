import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResearchBadge } from "@/components/ResearchBadge";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { ProgressMetric } from "@/components/ProgressMetric";
import { Separator } from "@/components/ui/separator";
import { handleQuoteRequest } from "@/utils/quote";
import { 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Thermometer,
  Settings,
  Zap,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Building
} from "lucide-react";

import heroImage from "@/assets/commercial-hvac.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import maintenanceImage from "@/assets/hvac-maintenance.jpg";
import professionalImage from "@/assets/hvac-professional.jpg";

const CIUMaintenance = () => {
  const neglectScenarios = [
    {
      stage: "3 Months",
      issue: "Control System Drift & Imbalance",
      consequence: "Uneven temperatures, hot/cold spots, complaints",
      cost: "£300-600 in wasted energy & tenant issues"
    },
    {
      stage: "6 Months", 
      issue: "Valve Actuator Failures",
      consequence: "Zones stuck open/closed, system conflicts",
      cost: "£800-1,200 in emergency repairs & downtime"
    },
    {
      stage: "12 Months",
      issue: "Complete Control System Failure",
      consequence: "Total loss of zone control, system shutdown",
      cost: "£3,000-6,000 replacement + business disruption"
    }
  ];

  const maintenanceChecklist = [
    { task: "Control system calibration", frequency: "Quarterly", benefit: "Accurate zone temperature control" },
    { task: "Valve actuator inspection", frequency: "Quarterly", benefit: "Smooth operation & longevity" },
    { task: "Sensor accuracy testing", frequency: "Bi-annually", benefit: "Precise temperature monitoring" },
    { task: "BMS integration check", frequency: "Bi-annually", benefit: "Seamless system communication" },
    { task: "Energy optimization review", frequency: "Annually", benefit: "Maximum efficiency & cost savings" },
    { task: "Emergency override testing", frequency: "Annually", benefit: "Safety & backup system reliability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Building className="w-4 h-4 mr-2" />
              CIU Control & Maintenance Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              CIU Maintenance: 
              <span className="text-accent-blue"> Perfect Zone </span>
              Control Every Time
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Central Interface Units require precise calibration and regular maintenance to deliver optimal zone control. 
              Don't let control system failures compromise comfort and waste energy across your building.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Schedule CIU Service
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Emergency CIU Repair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Without Maintenance - Warning Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-destructive/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Cost of CIU Control System Neglect
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              CIU failures create building-wide comfort issues, energy waste, and can shut down entire HVAC zones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {neglectScenarios.map((scenario, index) => (
              <AnimatedStatCard key={index} delay={index * 200} className="h-full">
                <Card className="h-full border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="destructive">{scenario.stage}</Badge>
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{scenario.issue}</h3>
                    <p className="text-muted-foreground mb-4">{scenario.consequence}</p>
                    <div className="text-destructive font-bold">{scenario.cost}</div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          {/* Before/After Comparison */}
          <AnimatedChart delay={600}>
            <Card className="bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={beforeAfterImage} 
                      alt="CIU before and after maintenance comparison"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Before vs After Regular CIU Maintenance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Zone Control:</strong> ±0.5°C vs ±3°C variance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Energy Efficiency:</strong> 25% better optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>System Response:</strong> Instant vs delayed/failed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Complaints:</strong> 95% reduction in comfort issues</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* CIU Maintenance Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional CIU Maintenance Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision maintenance that ensures perfect zone control, optimal energy efficiency, and seamless system integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {maintenanceChecklist.map((item, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-success" />
                      <Badge variant="outline">{item.frequency}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{item.task}</h3>
                    <p className="text-sm text-muted-foreground">{item.benefit}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quarterly Maintenance vs System Replacement Costs
            </h2>
            <ResearchBadge claimId="ciu-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Quarterly CIU Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={450} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Control system calibration</li>
                    <li>• Valve actuator servicing</li>
                    <li>• BMS integration checks</li>
                    <li>• Energy optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">Emergency Replacement</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={5000} prefix="£" suffix="/system" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New control system</li>
                    <li>• Emergency installation</li>
                    <li>• System downtime costs</li>
                    <li>• Building disruption</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>
        </div>
      </section>

      {/* UK Compliance Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              UK Energy Efficiency & Compliance
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              CIU maintenance is essential for meeting UK energy efficiency standards and MEES compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">MEES (EPC) Compliance</h3>
                  <p className="text-muted-foreground mb-4">
                    Poorly maintained CIU systems can reduce EPC ratings below the legal minimum. 
                    Regular maintenance ensures optimal efficiency and MEES compliance for commercial properties.
                  </p>
                  <ResearchBadge claimId="mees-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Regulations Part L</h3>
                  <p className="text-muted-foreground mb-4">
                    Control systems must operate efficiently to meet Part L requirements. 
                    CIU maintenance ensures compliance with energy conservation standards.
                  </p>
                  <ResearchBadge claimId="part-l-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Optimize Your Building's Zone Control
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our CIU specialists deliver precision maintenance that ensures perfect zone control, 
            maximizes energy efficiency, and keeps your building systems running seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
              Get CIU Maintenance Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Schedule System Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CIUMaintenance;