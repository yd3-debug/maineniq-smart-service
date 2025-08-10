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
  Shield
} from "lucide-react";

import heroImage from "@/assets/fcu-commercial.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import maintenanceImage from "@/assets/hvac-maintenance.jpg";
import professionalImage from "@/assets/hvac-professional.jpg";

const FCUMaintenance = () => {
  const neglectScenarios = [
    {
      stage: "3 Months",
      issue: "Dirty Filters & Dust Buildup",
      consequence: "15-25% efficiency loss, poor air quality",
      cost: "£150-300 in extra energy costs"
    },
    {
      stage: "6 Months", 
      issue: "Coil Fouling & Blocked Drainage",
      consequence: "Water leaks, mold growth, tenant complaints",
      cost: "£500-1,500 emergency repairs"
    },
    {
      stage: "12 Months",
      issue: "Fan Motor Strain & System Failure",
      consequence: "Complete breakdown, no heating/cooling",
      cost: "£2,000-5,000 replacement costs"
    }
  ];

  const maintenanceChecklist = [
    { task: "Filter replacement/cleaning", frequency: "Monthly", benefit: "Optimal airflow & air quality" },
    { task: "Coil cleaning & inspection", frequency: "Quarterly", benefit: "Maximum heat transfer efficiency" },
    { task: "Condensate drain clearance", frequency: "Quarterly", benefit: "Prevents water damage & mold" },
    { task: "Fan motor lubrication", frequency: "Bi-annually", benefit: "Extends motor lifespan" },
    { task: "Control system calibration", frequency: "Annually", benefit: "Accurate temperature control" },
    { task: "Electrical connections check", frequency: "Annually", benefit: "Safety & reliable operation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent-blue/5">
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
              <Wind className="w-4 h-4 mr-2" />
              FCU Maintenance Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              FCU Maintenance: 
              <span className="text-accent-blue"> Prevent Costly </span>
              System Failures
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Fan Coil Units require regular maintenance to prevent efficiency loss, water damage, and complete system breakdowns. 
              Don't wait for emergency repairs that cost 10x more than preventive maintenance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Schedule FCU Service
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Emergency FCU Repair
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
              The Cost of FCU Neglect
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly what happens when FCU maintenance is ignored - and why prevention costs 90% less than emergency repairs.
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
                      alt="FCU before and after maintenance comparison"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Before vs After Regular FCU Maintenance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Efficiency:</strong> 95% vs 60% (unmaintained)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Energy Bills:</strong> £200/month vs £350/month</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Breakdowns:</strong> 0 vs 3-4 per year</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span><strong>Lifespan:</strong> 15+ years vs 8-10 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* FCU Maintenance Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional FCU Maintenance Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive maintenance that prevents problems before they start and keeps your FCUs running at peak efficiency.
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
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Maintenance vs Emergency Repair Costs
            </h2>
            <ResearchBadge claimId="maintenance-cost-savings" className="mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Preventive Maintenance</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={300} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scheduled maintenance visits</li>
                    <li>• Filter replacements included</li>
                    <li>• 24/7 emergency cover</li>
                    <li>• Extended equipment life</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-destructive mb-2">Emergency Repairs</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={3000} prefix="£" suffix="/incident" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Call-out charges</li>
                    <li>• Replacement parts</li>
                    <li>• Business downtime costs</li>
                    <li>• Shortened equipment life</li>
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
              UK Compliance & Legal Requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay compliant with UK building regulations and avoid costly penalties with professional FCU maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">TM44 Air Conditioning Inspections</h3>
                  <p className="text-muted-foreground mb-4">
                    Commercial buildings with AC systems over 12kW must have regular TM44 inspections. 
                    Poor FCU maintenance can result in failed inspections and £300+ penalties.
                  </p>
                  <ResearchBadge claimId="tm44-compliance" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Landlord Maintenance Obligations</h3>
                  <p className="text-muted-foreground mb-4">
                    Commercial landlords must ensure HVAC systems are properly maintained. 
                    Tenant complaints about poor heating/cooling can lead to legal disputes and rent reductions.
                  </p>
                  <ResearchBadge claimId="landlord-obligations" />
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
            Don't Wait for FCU Failure
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional FCU maintenance that prevents problems, saves money, and ensures compliance. 
            Our certified technicians service all FCU types across London and the South East.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
              Get FCU Maintenance Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Schedule Emergency Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FCUMaintenance;