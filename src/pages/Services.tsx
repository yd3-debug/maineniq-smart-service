import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { handleQuoteRequest } from "@/utils/quote";
import { 
  Wind, 
  Thermometer, 
  Settings, 
  Building, 
  Cpu,
  Home,
  Wrench,
  Users,
  Sparkles,
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import mvhrInstallation from "@/assets/mvhr-installation.jpg";
import fcuInstallation from "@/assets/fcu-installation.jpg";
import bmsControlRoom from "@/assets/bms-control-room.jpg";
import hiuInstallation from "@/assets/hiu-installation.jpg";
import smartHomeAutomation from "@/assets/smart-home-automation.jpg";
import hvacInstallation from "@/assets/hvac-installation.jpg";
import plumberElectricianWork from "@/assets/plumber-electrician-work.jpg";
import handymanRepair from "@/assets/handyman-repair.jpg";
import satisfiedCustomer from "@/assets/satisfied-customer.jpg";
import hvacProfessional from "@/assets/hvac-professional.jpg";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";
import hvacMaintenance from "@/assets/hvac-maintenance.jpg";
import { CONTACT } from "@/config/contact";
import { AlertTriangle, Clock, TrendingUp } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TrustStrip from "@/components/TrustStrip";
const Services = () => {
const services = [
    {
      icon: Wind,
      title: "MVHR Maintenance",
      subtitle: "Mechanical Ventilation with Heat Recovery Service",
      description: "Professional MVHR maintenance ensuring optimal heat recovery efficiency and air quality. Regular filter changes and system optimization.",
      image: mvhrInstallation,
      features: [
        "Filter replacement every 3-6 months",
        "Heat exchanger cleaning and inspection",
        "Ductwork cleaning and leak testing",
        "Airflow balancing and optimization",
        "Performance testing and reporting"
      ]
    },
    {
      icon: Thermometer,
      title: "HVAC Maintenance",
      subtitle: "Heating, Ventilation & Air Conditioning Service",
      description: "Comprehensive HVAC maintenance programs preventing breakdowns, optimizing efficiency, and extending equipment lifespan.",
      image: hvacInstallation,
      features: [
        "Preventive maintenance schedules",
        "System performance optimization",
        "Emergency repair services available",
        "Energy efficiency improvements",
        "Equipment lifespan extension"
      ]
    },
    {
      icon: Settings,
      title: "FCU Maintenance & Upgrades",
      subtitle: "Fan Coil Unit Service & Optimization",
      description: "Expert FCU maintenance improving efficiency by 10-25%. Filter changes, coil cleaning, and performance upgrades for optimal operation.",
      image: fcuInstallation,
      features: [
        "Monthly filter replacement programs",
        "Coil cleaning and descaling",
        "Fan motor maintenance and lubrication",
        "Control system calibration",
        "Energy efficiency upgrades available"
      ]
    },
    {
      icon: Building,
      title: "BMS",
      subtitle: "Building Management Systems",
      description: "Advanced building automation systems for optimal control of HVAC, lighting, and energy management in commercial properties.",
      image: bmsControlRoom,
      features: [
        "Centralized system control",
        "Energy monitoring and optimization",
        "Automated scheduling",
        "Remote access and alerts",
        "Integration with existing systems"
      ]
    },
    {
      icon: Cpu,
      title: "HIU Service & Repair",
      subtitle: "Heat Interface Unit Maintenance",
      description: "Professional HIU servicing maintaining 15-30% efficiency gains. Annual maintenance prevents scale buildup and ensures optimal performance.",
      image: hiuInstallation,
      features: [
        "Annual service and safety checks",
        "Heat exchanger descaling and cleaning",
        "Control valve testing and calibration",
        "Temperature sensor maintenance",
        "Emergency repair service available"
      ]
    },
    {
      icon: Home,
      title: "Smart Home",
      subtitle: "Home Automation Integration",
      description: "Complete smart home solutions integrating HVAC controls with modern automation systems for ultimate comfort and efficiency.",
      image: smartHomeAutomation,
      features: [
        "Smart thermostat installation",
        "Mobile app control",
        "Voice assistant integration",
        "Energy usage monitoring",
        "Automated scheduling and zoning"
      ]
    },
    {
      icon: Wrench,
      title: "Plumber & Electrician",
      subtitle: "Essential Building Services",
      description: "Comprehensive plumbing and electrical services to support your HVAC installations and general property maintenance needs.",
      image: plumberElectricianWork,
      features: [
        "Plumbing installation and repairs",
        "Electrical work and wiring",
        "Boiler installation and maintenance",
        "Emergency call-out services",
        "Certified and insured technicians"
      ]
    },
    {
      icon: Users,
      title: "Handyman",
      subtitle: "General Property Maintenance",
      description: "Professional handyman services for property maintenance, repairs, and improvements to keep your home or business in perfect condition.",
      image: handymanRepair,
      features: [
        "General repairs and maintenance",
        "Property improvements",
        "Preventive maintenance programs",
        "Emergency repair services",
        "Multi-trade expertise"
      ]
    },
    {
      icon: Sparkles,
      title: "End of Tenancy Cleaning",
      subtitle: "Professional Deep Cleaning",
      description: "Comprehensive end of tenancy cleaning services ensuring properties meet the highest standards for deposit return and new occupancy.",
      image: endOfTenancyCleaning,
      features: [
        "Deep cleaning all areas",
        "Professional equipment and products",
        "Inventory condition reports",
        "Deposit protection guarantee",
        "Available at short notice"
      ]
    }
  ];

  // Quick helpers for deep pages and metrics
  const getServicePath = (title: string) => {
    if (title.includes("MVHR")) return "/mvhr-maintenance";
    if (title.includes("FCU")) return "/fcu-maintenance";
    if (title.includes("HIU")) return "/hiu-maintenance";
    if (title.includes("HVAC")) return "/hvac-maintenance";
    if (title.includes("BMS")) return "/bms";
    if (title.includes("Smart Home")) return "/smart-home";
    if (title.includes("Plumber") || title.includes("Electrician")) return "/plumber-electrician";
    if (title.includes("Handyman")) return "/handyman";
    if (title.includes("End of Tenancy")) return "/end-of-tenancy-cleaning";
    return "/contact";
  };

  type Metric = { label: string; value: number; suffix?: string; prefix?: string };
  const getMetrics = (title: string): Metric[] => {
    if (title.includes("MVHR")) return [
      { label: "Efficiency gain", value: 20, suffix: "%" },
      { label: "Heat recovery", value: 85, suffix: "%+" },
      { label: "Avoided cost", value: 3500, prefix: "£" },
    ];
    if (title.includes("FCU")) return [
      { label: "Efficiency gain", value: 25, suffix: "%" },
      { label: "Energy saved", value: 15, prefix: "-", suffix: "%" },
      { label: "Avoided emergency", value: 850, prefix: "£" },
    ];
    if (title.includes("HIU")) return [
      { label: "Efficiency gain", value: 30, suffix: "%" },
      { label: "Energy saved", value: 20, prefix: "-", suffix: "%" },
      { label: "Avoided emergency", value: 2200, prefix: "£" },
    ];
    if (title.includes("HVAC")) return [
      { label: "Breakdowns reduced", value: 80, prefix: "-", suffix: "%" },
      { label: "Lifespan increase", value: 50, prefix: "+", suffix: "%" },
      { label: "ROI", value: 5, suffix: "x" },
    ];
    return [];
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Don't Wait for System Failure
              </h1>
              <p className="text-base md:text-xl lg:text-2xl max-w-3xl opacity-90 leading-relaxed mb-8">
                Professional maintenance prevents costly breakdowns, saves energy, and extends equipment life.
                Emergency repairs cost 5x more than regular servicing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call emergency ${CONTACT.phones.emergency}`}>
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Emergency Service Available
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-3">
                  <Link to="/contact" aria-label="Schedule Maintenance">
                    Schedule Maintenance
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/mvhr-maintenance" className="px-3 py-1.5 rounded-full border border-border text-foreground/80 hover:bg-muted text-sm">MVHR Maintenance</Link>
                <Link to="/fcu-maintenance" className="px-3 py-1.5 rounded-full border border-border text-foreground/80 hover:bg-muted text-sm">FCU Maintenance</Link>
                <Link to="/hiu-maintenance" className="px-3 py-1.5 rounded-full border border-border text-foreground/80 hover:bg-muted text-sm">HIU Service</Link>
                <Link to="/hvac-maintenance" className="px-3 py-1.5 rounded-full border border-border text-foreground/80 hover:bg-muted text-sm">HVAC Maintenance</Link>
              </div>
            </div>
            <div>
              <AspectRatio ratio={16/10}>
                <img
                  src={hvacMaintenance}
                  alt="Professional HVAC maintenance services"
                  loading="eager"
                  className="w-full h-full object-contain rounded-xl shadow-elegant bg-muted"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      <TrustStrip />

      {/* What Happens Without Maintenance */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-red-900 mb-4">
              The Cost of Neglecting Maintenance
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Without regular maintenance, systems fail catastrophically, energy costs spiral, and emergency repairs become inevitable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-red-200 bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-900">MVHR System Failure</CardTitle>
                <div className="text-3xl font-bold text-red-600">£3,500</div>
                <p className="text-sm text-red-700 font-medium">Average replacement cost</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-800 text-center">
                  Clogged filters cause system overwork, motor failure, and complete replacement within 3-5 years instead of 15-20 years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-900">FCU Emergency Repair</CardTitle>
                <div className="text-3xl font-bold text-orange-600">£850</div>
                <p className="text-sm text-orange-700 font-medium">Per unit emergency callout</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-800 text-center">
                  Dirty coils freeze, motors burn out, and water damage occurs. Emergency weekend callouts cost 3x normal rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-900">HIU Complete Failure</CardTitle>
                <div className="text-3xl font-bold text-red-600">£2,200</div>
                <p className="text-sm text-red-700 font-medium">Emergency replacement</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-800 text-center">
                  Scale buildup blocks heat exchangers, residents lose heating/hot water, and emergency replacement becomes necessary.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-red-600 mr-2" />
              <span className="font-bold text-red-900">Reality Check:</span>
            </div>
            <p className="text-red-800 text-lg font-medium">
              Systems that receive no maintenance fail 70% faster and cost 5x more to repair when they break down.
            </p>
          </div>
        </div>
      </section>

      {/* Results You Can Expect (no graphs) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center">
            Results You Can Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-primary mb-2">70–80%</div>
                <div className="text-sm text-muted-foreground">Fewer Breakdowns</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-success mb-2">+10–30%</div>
                <div className="text-sm text-muted-foreground">Efficiency Gain</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-accent-orange mb-2">-15–20%</div>
                <div className="text-sm text-muted-foreground">Energy Use</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-trust-blue mb-2">3–5x</div>
                <div className="text-sm text-muted-foreground">Return on Maintenance</div>
              </CardContent>
            </Card>
          </div>

          {/* Gain vs Risk */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What You Gain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Stable, predictable performance year-round</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Lower energy bills and longer equipment life</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Fewer disruptions, happier occupants</span></div>
                <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-success mt-0.5" /><span>Documentation for compliance and warranty</span></div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What You Risk Without It</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" /><span>Unexpected breakdowns in peak seasons</span></div>
                <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" /><span>Higher energy costs and premature replacements</span></div>
                <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" /><span>Poor air quality and comfort complaints</span></div>
                <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" /><span>Emergency callouts at 3–5x normal rates</span></div>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-background border rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-2xl font-bold mb-6 text-center">How Our Service Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg border bg-muted/30">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">1</div>
                <div className="font-semibold mb-1">Inspect & Diagnose</div>
                <div className="text-sm text-muted-foreground">We assess condition, risks, and opportunities to save.</div>
              </div>
              <div className="text-center p-4 rounded-lg border bg-muted/30">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">2</div>
                <div className="font-semibold mb-1">Service & Optimise</div>
                <div className="text-sm text-muted-foreground">We clean, calibrate, replace filters, and fix issues.</div>
              </div>
              <div className="text-center p-4 rounded-lg border bg-muted/30">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">3</div>
                <div className="font-semibold mb-1">Report & Plan</div>
                <div className="text-sm text-muted-foreground">You receive a report with recommendations and next steps.</div>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Certified technicians • Same-day availability • Work guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Filter Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The Shocking Reality: Dirty vs Clean Filters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This is what happens to your MVHR filters without regular maintenance. 
              Dirty filters don't just reduce efficiency—they destroy your indoor air quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
              <BeforeAfterSlider
                beforeSrc="/mvhr-filter-dirty.png"
                afterSrc="/mvhr-filter-clean.png"
                beforeAlt="MVHR filter after 6 months without maintenance (dirty)"
                afterAlt="MVHR filter after professional service (clean)"
                beforeLabel="Neglected 6 months"
                afterLabel="After service"
                ratio={4/3}
                fit="contain"
                className="rounded-lg shadow-elegant"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-red-900 mb-4">Dirty Filter Consequences:</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-red-800">
                    <TrendingUp className="w-5 h-5 mr-3 text-red-600" />
                    <span>Airflow reduced by 40-60%</span>
                  </div>
                  <div className="flex items-center text-red-800">
                    <TrendingUp className="w-5 h-5 mr-3 text-red-600" />
                    <span>Heat recovery drops to 30% efficiency</span>
                  </div>
                  <div className="flex items-center text-red-800">
                    <TrendingUp className="w-5 h-5 mr-3 text-red-600" />
                    <span>Energy costs increase by 40%</span>
                  </div>
                  <div className="flex items-center text-red-800">
                    <TrendingUp className="w-5 h-5 mr-3 text-red-600" />
                    <span>Mold, bacteria, and allergens multiply</span>
                  </div>
                  <div className="flex items-center text-red-800">
                    <TrendingUp className="w-5 h-5 mr-3 text-red-600" />
                    <span>Motor works 3x harder, leading to failure</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-xl text-green-900 mb-4">Clean Filter Benefits:</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span>Maximum airflow and efficiency</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span>85%+ heat recovery maintained</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span>Optimal energy efficiency</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span>Clean, healthy indoor air</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                    <span>Equipment lasts 15-20 years</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
                <p className="font-bold text-lg mb-2">Regular filter changes cost £30-50</p>
                <p className="text-sm opacity-90">Emergency system replacement costs £3,500+</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90">
              <Link to="/contact" aria-label="Schedule filter replacement">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Filter Replacement Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3 md:mb-4">Comprehensive HVAC Maintenance</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional maintenance services for all HVAC equipment types. Preventive care that reduces energy costs, 
              prevents expensive breakdowns, and ensures optimal system performance year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="relative h-36 md:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <service.icon className="w-6 md:w-8 h-6 md:h-8 mb-1 md:mb-2" />
                  </div>
                </div>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-xs md:text-sm font-medium text-primary">{service.subtitle}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                </CardHeader>
                 <CardContent className="p-4 md:p-6 pt-0">
                   {/* Key benefits at a glance */}
                   {(() => {
                     const metrics = getMetrics(service.title);
                     return metrics.length ? (
                       <div className="mb-4">
                         <h4 className="font-bold text-sm mb-2">Key benefits at a glance</h4>
                         <div className="grid grid-cols-3 gap-2">
                           {metrics.map((m, i) => (
                             <div key={i} className="rounded-lg border p-2 text-center bg-accent/20">
                               <div className="text-base md:text-lg font-bold text-foreground">
                                 <AnimatedCounter value={m.value} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
                               </div>
                               <div className="text-[10px] md:text-xs text-muted-foreground">{m.label}</div>
                             </div>
                           ))}
                         </div>
                       </div>
                     ) : null;
                   })()}
                   {/* Problems Prevented Section */}
                   <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                     <h4 className="font-bold text-red-900 text-sm mb-2 flex items-center">
                       <AlertTriangle className="w-4 h-4 mr-2" />
                       Problems We Prevent:
                     </h4>
                     <div className="text-xs text-red-800 space-y-1">
                       {service.title.includes("MVHR") && (
                         <>
                           <div>• Filter clogging causing 60% airflow loss</div>
                           <div>• Motor failure from overwork (£1,500+ repair)</div>
                           <div>• Mold growth and poor air quality</div>
                         </>
                       )}
                       {service.title.includes("FCU") && (
                         <>
                           <div>• Coil freezing and water damage</div>
                           <div>• Fan motor burnout (£400+ per unit)</div>
                           <div>• 40% efficiency loss from dirty coils</div>
                         </>
                       )}
                       {service.title.includes("HIU") && (
                         <>
                           <div>• Heat exchanger scaling and blockage</div>
                           <div>• Complete heating/hot water failure</div>
                           <div>• Emergency replacement (£2,200+)</div>
                         </>
                       )}
                       {service.title.includes("HVAC") && (
                         <>
                           <div>• System breakdowns during peak seasons</div>
                           <div>• 25% increase in energy costs</div>
                           <div>• Premature equipment replacement</div>
                         </>
                       )}
                       {!service.title.includes("MVHR") && !service.title.includes("FCU") && !service.title.includes("HIU") && !service.title.includes("HVAC") && (
                         <>
                           <div>• Unexpected failures and breakdowns</div>
                           <div>• Higher emergency repair costs</div>
                           <div>• Reduced equipment lifespan</div>
                         </>
                       )}
                     </div>
                   </div>

                   <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                     {service.features.map((feature, featureIndex) => (
                       <div key={featureIndex} className="flex items-start space-x-2">
                         <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                         <span className="text-xs md:text-sm">{feature}</span>
                       </div>
                     ))}
                   </div>
                   
                   <div className="flex flex-col gap-2">
                     <Button 
                       asChild
                       size="sm" 
                       variant="outline"
                       className="w-full border-primary text-primary hover:bg-primary/5 md:h-10"
                     >
                       <Link to={getServicePath(service.title)}>Learn more</Link>
                     </Button>
                     <Button 
                       size="sm" 
                       className="w-full bg-red-600 hover:bg-red-700 text-white md:h-10"
                       onClick={() => handleQuoteRequest(`Emergency ${service.title}`)}
                     >
                       Emergency Service
                       <Phone className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                     </Button>
                     <Button 
                       size="sm" 
                       variant="outline"
                       className="w-full border-primary text-primary hover:bg-primary/5 md:h-10"
                       onClick={() => handleQuoteRequest(service.title)}
                     >
                       Schedule Maintenance
                       <ArrowRight className="w-3 md:w-4 h-3 md:h-4 ml-2" />
                     </Button>
                   </div>
                 </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why HVAC Maintenance Matters */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why Regular HVAC Maintenance Is Critical
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Professional maintenance isn't optional—it's essential for protecting your investment, 
              ensuring reliability, and maximizing system performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-primary/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-7 h-7 text-white rotate-[-45deg]" />
                </div>
                <h4 className="font-bold text-lg mb-3">Prevent Breakdowns</h4>
                <p className="text-sm text-muted-foreground mb-3">Preventive maintenance reduces unexpected failures by 70-80%</p>
                <div className="text-2xl font-bold text-primary">70-80%</div>
                <div className="text-xs text-muted-foreground">Breakdown Prevention</div>
              </CardContent>
            </Card>
            
            <Card className="border-success/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Energy Savings</h4>
                <p className="text-sm text-muted-foreground mb-3">Regular maintenance reduces energy consumption significantly</p>
                <div className="text-2xl font-bold text-success">5-15%</div>
                <div className="text-xs text-muted-foreground">Energy Reduction</div>
              </CardContent>
            </Card>

            <Card className="border-accent-orange/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-energy-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Equipment Lifespan</h4>
                <p className="text-sm text-muted-foreground mb-3">Proper maintenance extends system life by up to 50%</p>
                <div className="text-2xl font-bold text-accent-orange">+50%</div>
                <div className="text-xs text-muted-foreground">Lifespan Extension</div>
              </CardContent>
            </Card>

            <Card className="border-trust-blue/25 bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-trust-blue to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-3">Cost Savings</h4>
                <p className="text-sm text-muted-foreground mb-3">Every £1 spent on maintenance saves £3-5 in repairs</p>
                <div className="text-2xl font-bold text-trust-blue">£3-5</div>
                <div className="text-xs text-muted-foreground">ROI per £1 spent</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Schedule Your Maintenance Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for problems to arise. Our preventive maintenance programs keep your systems running efficiently, 
              save energy costs, and prevent expensive emergency repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-white px-8 py-3">
                <Link to="/contact">
                  Schedule Maintenance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3">
                <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call emergency ${CONTACT.phones.emergency}`}>
                  Emergency Service Available
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Why Choose Our Professional Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience and industry-leading expertise, we deliver exceptional 
                results across all our service areas. From complex MVHR installations to simple handyman tasks.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Fully certified and insured technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Quality guarantee on all work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Emergency call-out services available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Latest technology and equipment</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-glow">
                <Phone className="w-5 h-5 mr-2" />
                Get Professional Quote
              </Button>
            </div>
            <div className="relative">
              <img 
                src={hvacProfessional} 
                alt="Professional HVAC technician" 
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-2xl mb-1">15+</h3>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you need MVHR installation, BMS setup, smart home integration, or any of our professional services, 
            our expert team is ready to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Get Professional Quote
              </Button>
            </Link>
<Button asChild variant="hero" size="lg" className="text-lg px-8">
  <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call Now at ${CONTACT.phones.emergency}`}>
    <Phone className="w-5 h-5 mr-2" />
    Call Now
  </a>
</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;