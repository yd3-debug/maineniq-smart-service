import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ResearchBadge } from "@/components/ResearchBadge";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { ProgressMetric } from "@/components/ProgressMetric";
import { handleQuoteRequest } from "@/utils/quote";
import { useState } from "react";
import { 
  TrendingUp, 
  Thermometer,
  Droplets,
  Zap,
  CheckCircle,
  XCircle,
  Shield,
  Home,
  ChevronDown,
  AlertCircle,
  Clock,
  Gauge,
  Volume2,
  Building2,
  Users,
  Briefcase,
  Star,
  Quote
} from "lucide-react";

import heroImage from "@/assets/hiu-residential.jpg";
import hiuInstallation from "@/assets/hiu-installation.jpg";
import SEOHead from "@/components/SEOHead";
import EnhancedFAQSchema from "@/components/EnhancedFAQSchema";
import TrustStrip from "@/components/TrustStrip";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { TrustMetrics } from "@/components/TrustMetrics";

const hiuFaqs = [
  { question: "What is an HIU (Heat Interface Unit)?", answer: "An HIU is a compact unit that connects your property to a communal or district heating system. It provides heating and hot water without needing an individual gas boiler, common in modern apartment blocks." },
  { question: "How often should an HIU be serviced?", answer: "HIUs should be serviced annually to maintain efficiency and prevent breakdowns. In hard water areas like London, more frequent descaling may be needed every 6-12 months." },
  { question: "Why is my hot water taking too long to heat?", answer: "Slow hot water is usually caused by scale buildup on the heat exchanger or blocked strainers. Professional descaling and strainer cleaning typically resolves this issue." },
  { question: "What's the difference between an HIU and CIU?", answer: "HIU (Heat Interface Unit) provides both heating and hot water. CIU (Central Interface Unit) often refers to the central control unit. Both require similar maintenance and are serviced together." },
  { question: "Do HIUs need Gas Safe registered engineers?", answer: "No, HIUs don't use gas so Gas Safe certification isn't required. However, engineers should be trained on HIU systems and hold relevant qualifications for heating work." },
  { question: "How much does HIU servicing cost?", answer: "HIU annual service typically costs £150-250. Emergency repairs can cost £300-800 for common issues. Full HIU replacement costs £1,500-3,500 including installation." }
];

const testimonials = [
  {
    quote: "Our residents used to complain about slow hot water every winter. After Mainteniq serviced all 48 HIUs in our block, the complaints stopped completely. Worth every penny.",
    name: "Sarah Mitchell",
    role: "Building Manager",
    company: "Embassy Gardens",
    rating: 5
  },
  {
    quote: "I was quoted £2,800 for a replacement HIU. Mainteniq serviced it for £180 and it's been working perfectly for 18 months now. They saved my tenant from weeks without hot water.",
    name: "David Chen",
    role: "Landlord",
    company: "BTL Portfolio",
    rating: 5
  },
  {
    quote: "Managing 200+ units across London, we needed a reliable HIU maintenance partner. Mainteniq's planned servicing has reduced our emergency callouts by 70%.",
    name: "James Wilson",
    role: "Operations Director",
    company: "Foxtons Property Management",
    rating: 5
  }
];

const audienceCards = [
  {
    icon: Building2,
    title: "Building Managers",
    description: "Keep residents happy with reliable heating and fewer complaints",
    color: "bg-trust-blue/10 border-trust-blue/20 hover:border-trust-blue/40",
    iconColor: "text-trust-blue"
  },
  {
    icon: Home,
    title: "Landlords",
    description: "Protect your investment and avoid costly emergency replacements",
    color: "bg-accent-orange/10 border-accent-orange/20 hover:border-accent-orange/40",
    iconColor: "text-accent-orange"
  },
  {
    icon: Briefcase,
    title: "Managing Agents",
    description: "Streamline maintenance across your property portfolio",
    color: "bg-teal-500/10 border-teal-500/20 hover:border-teal-500/40",
    iconColor: "text-teal-500"
  },
  {
    icon: Users,
    title: "Housing Associations",
    description: "Meet regulatory compliance and resident welfare requirements",
    color: "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40",
    iconColor: "text-purple-500"
  }
];

const HIUMaintenance = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const signsYouNeedService = [
    {
      symptom: "Hot water takes too long",
      icon: Clock,
      cause: "Strainer clog or scale buildup on heat exchanger",
      solution: "Strainer cleaning and plate descaling",
      color: "bg-orange-500/10 border-orange-500/30",
      iconColor: "text-orange-500"
    },
    {
      symptom: "Temperature fluctuates",
      icon: Thermometer,
      cause: "Mixing valve needs calibration or actuator issue",
      solution: "Valve calibration and actuator testing",
      color: "bg-red-500/10 border-red-500/30",
      iconColor: "text-red-500"
    },
    {
      symptom: "Strange noises from unit",
      icon: Volume2,
      cause: "Air in system or differential pressure imbalance",
      solution: "Air bleeding and pressure valve adjustment",
      color: "bg-purple-500/10 border-purple-500/30",
      iconColor: "text-purple-500"
    },
    {
      symptom: "Heating not responding",
      icon: Gauge,
      cause: "Control failure or seized valve",
      solution: "Control verification and valve servicing",
      color: "bg-slate-500/10 border-slate-500/30",
      iconColor: "text-slate-500"
    }
  ];

  const serviceProcess = [
    { 
      step: "Inspection & Diagnostics",
      tasks: ["Visual inspection of all components", "Temperature and pressure readings", "Flow rate measurement", "Control system check"],
      duration: "15 mins"
    },
    { 
      step: "Cleaning & Descaling",
      tasks: ["Plate heat exchanger descaling", "Strainer cleaning", "Dirt separator flush", "Filter replacement if needed"],
      duration: "30 mins"
    },
    { 
      step: "Valve & Control Service",
      tasks: ["Differential pressure valve test", "Mixing valve calibration", "Actuator verification", "Bypass valve adjustment"],
      duration: "20 mins"
    },
    { 
      step: "Safety & Compliance",
      tasks: ["Pressure relief valve test", "Safety controls check", "Temperature sensor calibration", "Documentation & certificate"],
      duration: "15 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedFAQSchema faqs={hiuFaqs} pageTitle="HIU & CIU Maintenance" />
      <SEOHead
        title="HIU & CIU Maintenance | Mainteniq"
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
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("HIU/CIU Annual Service")}>
                Schedule HIU/CIU Service
              </Button>
              <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency HIU/CIU Repair - Urgent")}>
                Emergency HIU/CIU Repair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip - Immediate Credibility */}
      <TrustStrip />

      {/* Who We Help Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Who We Help</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                HIU/CIU Specialists for London Properties
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                We service Heat Interface Units across residential blocks, build-to-rent developments, and housing association properties throughout London.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {audienceCards.map((card, index) => (
                  <Card key={index} className={`${card.color} transition-all duration-300`}>
                    <CardContent className="p-4">
                      <card.icon className={`w-8 h-8 ${card.iconColor} mb-3`} />
                      <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={hiuInstallation} 
                alt="HIU installation and maintenance by Mainteniq technician" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">500+ HIUs Serviced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Strip */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <TrustMetrics />
        </div>
      </section>

      {/* What is an HIU/CIU - Educational Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is an HIU or CIU?
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-4xl">
            Heat Interface Units (HIUs) and Central Interface Units (CIUs) connect your property to a communal or district heating system. They're like a compact boiler that delivers heating and hot water without the need for individual gas supply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Where They're Found</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Modern apartment blocks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>District heating networks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Student accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Build-to-rent developments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Thermometer className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">How They Work</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Hot water from central plant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Heat exchanger transfers energy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Valves control temperature</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Separate circuits for heating/DHW</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Why Maintenance Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Scale reduces efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Strainers can block</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Valves can seize without use</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Controls need calibration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['hiu-details']} onOpenChange={() => toggleSection('hiu-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                <span>Learn More About HIU/CIU Systems</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['hiu-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4 bg-muted/30 p-6 rounded-lg">
              <p className="text-muted-foreground">
                HIUs and CIUs are increasingly common in UK new-build developments as part of district heating schemes. They offer several advantages over individual boilers, including lower carbon emissions, reduced maintenance burden on the building, and no need for gas supply to each flat.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">HIU vs CIU - What's the Difference?</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>HIU (Heat Interface Unit):</strong> Provides both heating and hot water from a single unit</li>
                  <li><strong>CIU (Central Interface Unit):</strong> Often refers to the central control or a simpler interface unit</li>
                  <li>Both require similar maintenance procedures</li>
                  <li>Annual servicing is recommended for optimal performance</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Common Issues in London Properties:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Hard water causes rapid scale buildup on heat exchangers</li>
                  <li>Debris from ageing communal pipework blocks strainers</li>
                  <li>Infrequent use during summer can cause valve seizure</li>
                  <li>Poor commissioning leads to temperature control issues</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Before/After Visual Comparison */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              See the Difference Professional Servicing Makes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Drag the slider to compare a scaled, inefficient heat exchanger with a professionally descaled and serviced unit.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/src/assets/hiu-before.svg"
              afterSrc="/src/assets/hiu-after.svg"
              beforeAlt="HIU heat exchanger before service - scaled and restricted flow"
              afterAlt="HIU heat exchanger after service - clean and optimal flow"
              beforeLabel="Before Service"
              afterLabel="After Service"
              ratio={16/9}
              fit="contain"
            />
          </div>
        </div>
      </section>

      {/* Signs You Need Service - Symptom-Based with Psychological Colors */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signs Your HIU/CIU Needs Service
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognise these common symptoms? They're usually easy to fix with professional servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {signsYouNeedService.map((item, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${item.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg flex-shrink-0 ${item.color}`}>
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.symptom}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">Likely cause:</span> {item.cause}
                        </p>
                        <p className="text-sm text-success">
                          <span className="font-medium">Solution:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our HIU/CIU Service Process
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive service typically takes around 90 minutes and covers all critical components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {serviceProcess.map((phase, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-primary border-primary">
                        Step {index + 1}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          <Collapsible open={openSections['maintenance-details']} onOpenChange={() => toggleSection('maintenance-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between max-w-5xl mx-auto">
                <span>View Full Technical Checklist</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['maintenance-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 max-w-5xl mx-auto">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Heat Exchanger Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Plate heat exchanger chemical descaling</li>
                        <li>• Strainer cleaning and debris removal</li>
                        <li>• Dirt separator flush and inspection</li>
                        <li>• Flow rate measurement before/after</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Valve & Control Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Differential pressure valve test and set</li>
                        <li>• Mixing/blending valve calibration</li>
                        <li>• Bypass valve adjustment</li>
                        <li>• Actuator stroke and response test</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Safety Checks</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Pressure relief valve test</li>
                        <li>• Expansion vessel pressure check</li>
                        <li>• Temperature limiting device test</li>
                        <li>• Primary/secondary isolation valve check</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Control System</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Temperature sensor calibration</li>
                        <li>• Control board diagnostics</li>
                        <li>• User interface test</li>
                        <li>• Fault code history review</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Service Outcomes */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Results You Can Expect
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Typical improvements after professional HIU/CIU servicing
            </p>
          </div>

          <AnimatedChart>
            <Card className="bg-card/80 backdrop-blur max-w-4xl mx-auto">
              <CardContent className="p-8">
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

      {/* Cost Comparison - Simplified */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Annual Service vs Emergency Costs
            </h2>
            <ResearchBadge claimId="hiu-maintenance-savings" className="mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <AnimatedStatCard>
              <Card className="text-center border-success/20 hover:border-success/40 transition-colors">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Annual Service</h3>
                  <div className="text-4xl font-bold text-success mb-4">
                    <AnimatedCounter value={180} prefix="£" suffix="/year" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-success" /> Full descaling & cleaning</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-success" /> Valve servicing & calibration</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-success" /> Safety compliance check</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-success" /> 12-month warranty</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>

            <AnimatedStatCard delay={200}>
              <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardContent className="p-8">
                  <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Emergency Replacement</h3>
                  <div className="text-4xl font-bold text-destructive mb-4">
                    <AnimatedCounter value={3500} prefix="£" suffix="/unit" />
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li className="flex items-center"><XCircle className="w-4 h-4 mr-2 text-destructive" /> New HIU/CIU unit cost</li>
                    <li className="flex items-center"><XCircle className="w-4 h-4 mr-2 text-destructive" /> Emergency installation</li>
                    <li className="flex items-center"><XCircle className="w-4 h-4 mr-2 text-destructive" /> Potential water damage</li>
                    <li className="flex items-center"><XCircle className="w-4 h-4 mr-2 text-destructive" /> Tenant compensation</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedStatCard>
          </div>
        </div>
      </section>

      {/* UK Compliance Requirements */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              UK Safety & Compliance
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              HIU/CIU maintenance is crucial for meeting landlord obligations and avoiding legal issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedChart>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Building Safety Act 2022</h3>
                  <p className="text-muted-foreground mb-4">
                    Landlords must ensure all building systems are properly maintained and safe. 
                    HIU/CIU failures can lead to safety violations and significant penalties.
                  </p>
                  <ResearchBadge claimId="building-safety-act" />
                </CardContent>
              </Card>
            </AnimatedChart>

            <AnimatedChart delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Fitness for Habitation</h3>
                  <p className="text-muted-foreground mb-4">
                    Properties must provide adequate heating and hot water. Failures can make properties 
                    legally uninhabitable, leading to rent reductions and claims.
                  </p>
                  <ResearchBadge claimId="fitness-for-habitation" />
                </CardContent>
              </Card>
            </AnimatedChart>
          </div>

          <Collapsible open={openSections['compliance-details']} onOpenChange={() => toggleSection('compliance-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between max-w-4xl mx-auto mt-6">
                <span>Learn More About Compliance Requirements</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['compliance-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 max-w-4xl mx-auto">
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Landlord Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Ensure heating and hot water systems are safe and functional</li>
                        <li>Maintain records of all servicing and repairs</li>
                        <li>Respond promptly to heating/hot water failures</li>
                        <li>Use qualified engineers for all work</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Documentation We Provide:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Service certificate with all checks documented</li>
                        <li>Before/after readings and measurements</li>
                        <li>Recommendations for any additional work</li>
                        <li>Digital records for easy compliance audits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Building managers and landlords trust us with their HIU maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedStatCard key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-energy-gold fill-energy-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent-orange">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ensure Reliable Hot Water & Heating
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our certified HIU/CIU specialists provide comprehensive annual servicing that prevents failures, 
            ensures compliance, and keeps your residents happy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => handleQuoteRequest("HIU/CIU Annual Service Quote")}>
              Get HIU/CIU Service Quote
            </Button>
            <Button size="lg" variant="hero" onClick={() => handleQuoteRequest("Emergency HIU/CIU Repair - Urgent")}>
              Emergency HIU/CIU Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HIUMaintenance;
