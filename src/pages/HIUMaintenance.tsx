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
  Droplets,
  Zap,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Home
} from "lucide-react";

import heroImage from "@/assets/hiu-residential.jpg";
import maintenanceImage from "@/assets/hvac-maintenance.jpg";
import professionalImage from "@/assets/hvac-professional.jpg";
import SEOHead from "@/components/SEOHead";

const HIUMaintenance = () => {
  const neglectScenarios = [
    {
      stage: "6 Months",
      issue: "Strainer clog + scale on plates",
      consequence: "Reduced hot water flow, actuator hunting",
      cost: "£200–£400 in complaints and energy waste"
    },
    {
      stage: "12 Months", 
      issue: "Differential pressure/mixing valve seizure, control failure",
      consequence: "No hot water or unstable temperatures",
      cost: "£800–£1,500 emergency repairs + lost rent"
    },
    {
      stage: "18 Months",
      issue: "Major HIU/CIU breakdown",
      consequence: "Replacement needed, potential water damage",
      cost: "£2,500–£4,000 replacement + damage"
    }
  ];

  const maintenanceChecklist = [
    { task: "Plate heat exchanger descaling", frequency: "Annually", benefit: "Optimal heat transfer & hot water flow" },
    { task: "Strainer cleaning & dirt separator flush", frequency: "Annually", benefit: "Prevents blockages & low flow" },
    { task: "Differential pressure/bypass valve test & set", frequency: "Annually", benefit: "Stable control & reduced noise" },
    { task: "Mixing/blending valve calibration", frequency: "Annually", benefit: "Consistent outlet temperatures" },
    { task: "Actuator and control verification", frequency: "Annually", benefit: "Reliable zone control" },
    { task: "Pressure relief valve test", frequency: "Annually", benefit: "Safety compliance & protection" },
    { task: "Primary/secondary circuit balancing", frequency: "Annually", benefit: "Efficiency & reduced cycling" },
    { task: "Temperature sensor calibration", frequency: "Bi-annually", benefit: "Accurate readings & comfort" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent-orange/5">
      <SEOHead 
        title="HIU & CIU Maintenance | Maineniq"
        description="Expert HIU & CIU servicing to keep hot water flowing, boost efficiency and prevent breakdowns. Schedule maintenance or emergency repair today."
        keywords="HIU maintenance, CIU maintenance, HIU repair, CIU service, district heating interface unit"
        canonicalUrl={`${window.location.origin}/hiu-maintenance`}
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/90 via-accent-orange/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Home className="w-4 h-4 mr-2" />
              HIU & CIU Service & Repair Specialists
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              HIU & CIU Maintenance: 
              <span className="text-white"> Keep Hot Water </span>
              Flowing Reliably
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Heat Interface Units (HIUs) and Central Interface Units (CIUs) are the heart of your heating and hot water distribution. Regular servicing prevents scale and control issues, improves efficiency, and ensures reliable comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Schedule HIU/CIU Service
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Emergency HIU/CIU Repair
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
              The Hidden Dangers of HIU/CIU Neglect
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Interface unit failures (HIU/CIU) don't just affect comfort — they can cause water damage, insurance issues, and complete system replacement.
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
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Service outcomes you can expect (HIU & CIU)</h3>
                  <p className="text-muted-foreground">Typical results after a professional HIU/CIU service</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ProgressMetric
                    icon={Droplets}
                    value="100%"
                    label="Hot water flow restored"
                    description="Full pressure and stable temperature"
                    percentage={100}
                    variant="success"
                    delay={100}
                  />
                  <ProgressMetric
                    icon={TrendingUp}
                    value="95%"
                    label="Heat transfer efficiency"
                    description="Clean plates and calibrated controls"
                    percentage={95}
                    variant="success"
                    delay={200}
                  />
                  <ProgressMetric
                    icon={Zap}
                    value="Up to 20%"
                    label="Energy saved"
                    description="Lower return temps and reduced cycling"
                    percentage={20}
                    variant="success"
                    delay={300}
                  />
                  <ProgressMetric
                    icon={Shield}
                    value="2–3/yr"
                    label="Emergency callouts avoided"
                    description="Fewer urgent disruptions and costs"
                    percentage={90}
                    variant="success"
                    delay={400}
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* HIU Maintenance Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Professional HIU & CIU Service Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive annual servicing for HIU & CIU systems that prevents scale and control issues, ensures safety compliance, and maintains optimal performance.
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
              Annual Service vs Emergency Replacement Costs
            </h2>
            <ResearchBadge claimId="hiu-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center bg-success/5 border-success/20">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-success mb-2">Annual HIU/CIU Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={180} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Full descaling & cleaning</li>
                    <li>• Valve servicing & calibration</li>
                    <li>• Safety compliance check</li>
                    <li>• 12-month warranty</li>
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
                    <AnimatedCounter value={3500} prefix="£" suffix="/unit" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• New HIU/CIU unit cost</li>
                    <li>• Emergency installation</li>
                    <li>• Potential water damage</li>
                    <li>• Tenant compensation</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>
        </div>
      </section>

      {/* UK Compliance Requirements */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              UK Safety & Compliance Requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              HIU/CIU maintenance is crucial for safety compliance and avoiding legal issues with tenants and insurers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Safety Act 2022</h3>
                  <p className="text-muted-foreground mb-4">
                    Landlords must ensure all building systems are properly maintained and safe. 
                    HIU/CIU failures can lead to safety violations and significant penalties under the new Act.
                  </p>
                  <ResearchBadge claimId="building-safety-act" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Fitness for Habitation</h3>
                  <p className="text-muted-foreground mb-4">
                    Properties must provide adequate heating and hot water. HIU/CIU failures can make properties 
                    legally uninhabitable, leading to rent reductions and compensation claims.
                  </p>
                  <ResearchBadge claimId="fitness-for-habitation" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent-orange">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ensure Reliable Hot Water & Heating (HIU/CIU)
          </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our certified HIU/CIU specialists provide comprehensive annual servicing that prevents failures, 
              ensures compliance, and keeps your residents happy.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Get HIU/CIU Service Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Emergency HIU/CIU Repair
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HIUMaintenance;