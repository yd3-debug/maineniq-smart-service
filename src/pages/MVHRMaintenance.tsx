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
  Leaf,
  Droplets,
  Home,
  Volume2,
  Filter
} from "lucide-react";

import heroImage from "@/assets/mvhr-installation.jpg";
import beforeAfterImage from "@/assets/before-after.jpg";
import maintenanceImage from "@/assets/hvac-maintenance.jpg";
import professionalImage from "@/assets/hvac-professional.jpg";

const MVHRMaintenance = () => {
  const keyBenefits = [
    {
      icon: Volume2,
      title: "Ultra-Quiet Units",
      description: "Minimal Noise & Disturbance",
      detail: "Professional maintenance keeps fan motors balanced and quiet"
    },
    {
      icon: Wind,
      title: "Cooling",
      description: "Purge Ventilation Preventing Overheating", 
      detail: "Clean systems provide effective summer bypass cooling"
    },
    {
      icon: Droplets,
      title: "Prevents Damp",
      description: "Reduces Humidity in the Air",
      detail: "Optimal humidity control through efficient heat recovery"
    },
    {
      icon: Home,
      title: "Reduces Condensation",
      description: "Reduces Mould Build Up",
      detail: "Prevents condensation that leads to mold and damage"
    },
    {
      icon: Filter,
      title: "Air Quality", 
      description: "Filters out Pollutants, Allergens, and Contaminants",
      detail: "Clean filters ensure maximum air purification"
    }
  ];

  const filterComparison = {
    dirty: {
      airflow: "45%",
      particles: "95% contaminated",
      energy: "60% heat loss",
      health: "Poor air quality"
    },
    clean: {
      airflow: "100%", 
      particles: "99.9% filtered",
      energy: "92% heat recovery",
      health: "Excellent air quality"
    }
  };

  const dirtyFilterProblems = [
    {
      problem: "Allergens & Pollutants Bypass",
      impact: "Respiratory issues, asthma triggers",
      timeframe: "Within weeks",
      icon: AlertTriangle
    },
    {
      problem: "Energy Waste from Poor Heat Recovery", 
      impact: "£50-100 extra monthly heating costs",
      timeframe: "Immediate",
      icon: DollarSign
    },
    {
      problem: "Fan Motor Strain & Failure",
      impact: "£1,500-3,000 motor replacement",
      timeframe: "6-12 months",
      icon: XCircle
    },
    {
      problem: "System Imbalance & Pressure Issues",
      impact: "Drafts, poor ventilation, comfort issues",
      timeframe: "2-3 months", 
      icon: Wind
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
              MVHR Filter Maintenance: 
              <span className="text-white"> Clean Filters = </span>
              Healthy Living
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your MVHR filters are the frontline defense against pollutants, allergens, and contaminated air. 
              See the shocking difference between dirty and clean filters - and why regular maintenance is critical for your health and energy bills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" onClick={() => handleQuoteRequest()}>
                Free Filter Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Emergency Filter Replacement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-success/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              5 Key Benefits of Professional MVHR Maintenance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Regular maintenance ensures your MVHR system delivers optimal comfort, air quality, and energy efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {keyBenefits.map((benefit, index) => (
              <AnimatedStatCard key={index} delay={index * 100} className="h-full">
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-success/20 hover:border-success/40">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-success">{benefit.title}</h3>
                    <p className="text-sm font-medium mb-2">{benefit.description}</p>
                    <p className="text-xs text-muted-foreground">{benefit.detail}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          {/* Dramatic Filter Before/After Section */}
          <AnimatedChart delay={600}>
            <Card className="bg-card/80 backdrop-blur border-2 border-success/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">The Shocking Truth About Dirty MVHR Filters</h3>
                  <p className="text-lg text-muted-foreground">See the dramatic difference maintenance makes to your air quality and energy bills</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Dirty Filter Side */}
                  <div className="bg-destructive/5 rounded-lg p-6 border-2 border-destructive/20">
                    <div className="text-center mb-6">
                      <div className="w-full h-40 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-white font-bold">DIRTY FILTER</div>
                      </div>
                      <h4 className="text-xl font-bold text-destructive mb-2">After 6 Months Without Maintenance</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Airflow Efficiency:</span>
                        <span className="font-bold text-destructive">{filterComparison.dirty.airflow}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Particle Contamination:</span>
                        <span className="font-bold text-destructive">{filterComparison.dirty.particles}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Heat Recovery:</span>
                        <span className="font-bold text-destructive">{filterComparison.dirty.energy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Air Quality:</span>
                        <span className="font-bold text-destructive">{filterComparison.dirty.health}</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Filter Side */}
                  <div className="bg-success/5 rounded-lg p-6 border-2 border-success/20">
                    <div className="text-center mb-6">
                      <div className="w-full h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-success font-bold">CLEAN FILTER</div>
                      </div>
                      <h4 className="text-xl font-bold text-success mb-2">With Regular Professional Maintenance</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Airflow Efficiency:</span>
                        <span className="font-bold text-success">{filterComparison.clean.airflow}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Particle Filtration:</span>
                        <span className="font-bold text-success">{filterComparison.clean.particles}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Heat Recovery:</span>
                        <span className="font-bold text-success">{filterComparison.clean.energy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Air Quality:</span>
                        <span className="font-bold text-success">{filterComparison.clean.health}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* What Dirty Filters Actually Do Section */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Dirty MVHR Filters Actually Do To Your Health & Wallet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The hidden costs of neglected filter maintenance go far beyond the price of replacement filters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {dirtyFilterProblems.map((problem, index) => (
              <AnimatedStatCard key={index} delay={index * 150} className="h-full">
                <Card className="h-full border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                        <problem.icon className="w-6 h-6 text-destructive" />
                      </div>
                      <Badge variant="destructive">{problem.timeframe}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{problem.problem}</h3>
                    <p className="text-muted-foreground font-medium">{problem.impact}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          {/* Filter Maintenance Cost Reality */}
          <AnimatedChart delay={800}>
            <Card className="bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Real Cost of Filter Neglect</h3>
                  <p className="text-muted-foreground">Annual filter maintenance vs the cost of system damage and health impacts</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">
                      <AnimatedCounter value={80} prefix="£" suffix="/year" />
                    </div>
                    <p className="text-sm text-success font-medium">Annual Filter Replacement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">
                      <AnimatedCounter value={1200} prefix="£" suffix="/year" />
                    </div>
                    <p className="text-sm text-destructive font-medium">Extra Energy Costs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">
                      <AnimatedCounter value={3500} prefix="£" suffix="" />
                    </div>
                    <p className="text-sm text-destructive font-medium">System Replacement Cost</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* Filter Maintenance Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-success mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Professional MVHR Filter Maintenance Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures your filters and system components stay clean for optimal air quality and efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedChart delay={200}>
              <Card className="mb-8 border-success/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">3</span>
                      </div>
                      <h3 className="font-bold mb-2">Every 3 Months</h3>
                      <p className="text-sm text-muted-foreground">Filter inspection & replacement if needed</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">6</span>
                      </div>
                      <h3 className="font-bold mb-2">Every 6 Months</h3>
                      <p className="text-sm text-muted-foreground">Deep filter clean & system inspection</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">12</span>
                      </div>
                      <h3 className="font-bold mb-2">Annual Service</h3>
                      <p className="text-sm text-muted-foreground">Complete system maintenance & calibration</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                      <h3 className="font-bold mb-2">Emergency</h3>
                      <p className="text-sm text-muted-foreground">24/7 filter replacement service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedChart>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedStatCard delay={400}>
                <Card className="h-full border-success/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-success">Professional vs DIY Filter Changes</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Proper filter grade selection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">System rebalancing after changes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Heat exchanger condition check</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Ductwork contamination assessment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>

              <AnimatedStatCard delay={600}>
                <Card className="h-full border-success/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-success">Filter Subscription Service</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Automatic quarterly delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Professional installation included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">System health monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">Priority emergency support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            </div>
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
              Get Filter Maintenance Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Free Filter Assessment
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Filter Subscription Service
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVHRMaintenance;