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
  Wind,
  Zap,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Leaf
} from "lucide-react";

import heroImage from "@/assets/mvhr-installation.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import maintenanceImage from "@/assets/hvac-maintenance.jpg";
import professionalImage from "@/assets/hvac-professional.jpg";

const MVHRMaintenance = () => {
  const neglectScenarios = [
    {
      stage: "3 Months",
      issue: "Filter Contamination & Blockage",
      consequence: "50% airflow reduction, poor indoor air quality",
      cost: "£200-400 in health impacts & energy waste"
    },
    {
      stage: "6 Months", 
      issue: "Heat Exchanger Fouling",
      consequence: "60% heat recovery loss, condensation problems",
      cost: "£600-1,000 in energy waste & damp issues"
    },
    {
      stage: "12 Months",
      issue: "Fan Motor Failure & System Breakdown",
      consequence: "Total ventilation failure, mold risk",
      cost: "£2,000-4,000 replacement + health hazards"
    }
  ];

  const maintenanceChecklist = [
    { task: "Filter replacement & cleaning", frequency: "Every 3 months", benefit: "Optimal airflow & air quality" },
    { task: "Heat exchanger cleaning", frequency: "Bi-annually", benefit: "Maximum heat recovery efficiency" },
    { task: "Fan motor inspection", frequency: "Annually", benefit: "Quiet operation & longevity" },
    { task: "Ductwork inspection & cleaning", frequency: "Annually", benefit: "Prevents contamination spread" },
    { task: "Control system calibration", frequency: "Annually", benefit: "Optimal performance & energy use" },
    { task: "Condensate drain maintenance", frequency: "Bi-annually", benefit: "Prevents water damage & mold" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-success/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-success/90 via-success/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Leaf className="w-4 h-4 mr-2" />
              MVHR Maintenance & Air Quality Specialists
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              MVHR Maintenance: 
              <span className="text-white"> Clean Air & </span>
              Energy Recovery
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Mechanical Ventilation with Heat Recovery systems need regular maintenance to deliver clean air and maximum energy efficiency. 
              Don't let dirty filters and fouled heat exchangers compromise air quality and waste energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Schedule MVHR Service
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Air Quality Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Without Maintenance - Warning Section */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Hidden Dangers of MVHR Neglect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MVHR neglect doesn't just waste energy - it can create serious health risks and expensive property damage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                      alt="MVHR before and after maintenance comparison"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Before vs After Regular MVHR Maintenance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Heat Recovery:</strong> 90% efficiency vs 40%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Air Quality:</strong> Excellent vs poor indoor air</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Energy Savings:</strong> £800/year vs £200/year</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>System Life:</strong> 20+ years vs 10-12 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* MVHR Maintenance Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Professional MVHR Maintenance Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive maintenance that ensures clean air, maximum heat recovery, and optimal system performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Regular Maintenance vs System Replacement Costs
            </h2>
            <ResearchBadge claimId="mvhr-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Annual MVHR Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={250} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quarterly filter changes</li>
                    <li>• Heat exchanger cleaning</li>
                    <li>• System optimization</li>
                    <li>• Air quality monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">System Replacement</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={4000} prefix="£" suffix="/system" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New MVHR unit</li>
                    <li>• Installation & commissioning</li>
                    <li>• Ductwork modifications</li>
                    <li>• Lost energy savings</li>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">
              UK Building Regulations & Air Quality Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MVHR maintenance is essential for meeting UK ventilation standards and indoor air quality requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Regulations Part F</h3>
                  <p className="text-muted-foreground mb-4">
                    MVHR systems must provide adequate ventilation rates. Poor maintenance can cause 
                    systems to fail compliance testing and building regulation requirements.
                  </p>
                  <ResearchBadge claimId="part-f-ventilation" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Indoor Air Quality Standards</h3>
                  <p className="text-muted-foreground mb-4">
                    Workplace and residential air quality standards require properly maintained ventilation. 
                    Poor MVHR maintenance can lead to health complaints and legal liability.
                  </p>
                  <ResearchBadge claimId="indoor-air-quality" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-success">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Breathe Easy with Professional MVHR Care
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our MVHR specialists ensure your system delivers clean, healthy air while maximizing energy recovery and efficiency. 
            Protect your investment and your health with regular professional maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
              Get MVHR Service Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Air Quality Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVHRMaintenance;