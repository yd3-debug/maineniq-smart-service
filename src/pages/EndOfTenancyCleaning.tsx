import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServicePackageBuilder from "@/components/ServicePackageBuilder";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { handleQuoteRequest } from "@/utils/quote";
import { generateCleaningServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { 
  CheckCircle, 
  Phone, 
  Shield, 
  Sparkles, 
  Clock, 
  Star,
  TrendingUp,
  FileCheck,
  Users,
  Zap,
  Award,
  Calendar,
  MessageCircle,
  Home,
  Building2,
  Key,
  AlertCircle,
  Timer,
  UserCheck,
  ChefHat,
  Bath,
  Sofa,
  Layers,
  Search,
  Brush,
  ClipboardCheck,
  ThumbsUp,
  ChevronDown
} from "lucide-react";

// Animated Counter Hook
const useCounterAnimation = (end: number, duration: number = 2000, suffix: string = "") => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return { count, suffix, startAnimation };
};

// Trust Metric Card Component
const TrustMetricCard = ({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  iconColor, 
  bgColor 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  iconColor: string;
  bgColor: string;
}) => {
  const counter = useCounterAnimation(value, 2000, suffix);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counter.startAnimation();
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-6 bg-background/60 backdrop-blur rounded-xl border border-border/50">
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">
        {counter.count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const EndOfTenancyCleaning: React.FC = () => {
  const [showAllRooms, setShowAllRooms] = useState(false);

  const cleaningFAQs = [
    { question: "Do you provide cleaning supplies and equipment?", answer: "Yes, our team brings all professional cleaning products and equipment. We use industrial-grade, eco-friendly solutions that are tough on dirt but safe for your property." },
    { question: "How long does an end of tenancy clean take?", answer: "A standard 1-2 bed flat typically takes 3-5 hours. Larger properties or those requiring deep cleaning may take 6-8 hours. We always ensure thorough results rather than rushing." },
    { question: "Are you available on short notice?", answer: "Often yes! We understand move-out deadlines can be tight. Contact us and we'll do our best to fit your timescale, including same-day availability when possible." },
    { question: "Do you guarantee deposit return?", answer: "We clean to professional inventory standards, which is what landlords and letting agents require. We offer a 48-hour re-clean guarantee if anything doesn't meet these standards." },
    { question: "What if my landlord isn't satisfied?", answer: "If your landlord identifies any issues within 48 hours of our clean (and before anyone else enters the property), we'll return to address them at no extra cost." },
    { question: "Do I need to be present during the clean?", answer: "No, you don't need to be there. Many clients provide access via keys or a lockbox. We can also coordinate key handover with your letting agent." }
  ];

  // Who We Help - Audiences
  const audiences = [
    {
      icon: Key,
      title: "Tenants Moving Out",
      description: "Protect your deposit with inventory-ready cleaning",
      iconColor: "text-trust-blue",
      bgColor: "bg-trust-blue/10"
    },
    {
      icon: Home,
      title: "Landlords Preparing",
      description: "Get your property tenant-ready fast",
      iconColor: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      icon: Building2,
      title: "Airbnb Hosts",
      description: "Quick turnaround between guests",
      iconColor: "text-teal-500",
      bgColor: "bg-teal-500/10"
    },
    {
      icon: Users,
      title: "Letting Agents",
      description: "Meet agency standards every time",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  // Signs You Need Professional Cleaning
  const signsYouNeed = [
    {
      symptom: "DIY cleaning taking too long?",
      solution: "Our teams complete full cleans in 3-5 hours",
      icon: Timer,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-l-amber-500"
    },
    {
      symptom: "Landlord being extra strict?",
      solution: "We clean to exact inventory specifications",
      icon: UserCheck,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-l-orange-500"
    },
    {
      symptom: "Short on time before checkout?",
      solution: "Same-day emergency slots available",
      icon: Clock,
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-l-red-500"
    },
    {
      symptom: "Previous clean didn't pass?",
      solution: "We offer 48hr re-clean guarantee",
      icon: AlertCircle,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-l-purple-500"
    }
  ];

  // What We Clean - Room data with colors
  const roomTypes = [
    {
      title: "Kitchen",
      icon: ChefHat,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-t-orange-500",
      items: ["Oven interior & exterior", "Hob & extractor fan", "Cupboards inside & out", "Appliance surfaces", "Sink & taps descaled", "Tiles & splashbacks", "Floor deep cleaned"]
    },
    {
      title: "Bathroom",
      icon: Bath,
      iconColor: "text-trust-blue",
      bgColor: "bg-trust-blue/10",
      borderColor: "border-t-trust-blue",
      items: ["Toilet inside & out", "Shower & bath descaled", "Tiles & grout cleaned", "Mirror & fixtures polished", "Floor sanitized", "Ventilation cleaned"]
    },
    {
      title: "Living Areas",
      icon: Sofa,
      iconColor: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-t-success",
      items: ["Carpet deep vacuum", "Skirting boards wiped", "Light switches cleaned", "Window sills dusted", "Radiators cleaned", "All surfaces polished"]
    },
    {
      title: "Throughout",
      icon: Layers,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-t-purple-500",
      items: ["All doors & frames", "Handles & fixtures", "Cobweb removal", "Floor mopping", "Final walkthrough", "Inventory compliance check"]
    }
  ];

  // Service Process with colors
  const serviceProcess = [
    {
      step: "01",
      title: "Assessment",
      duration: "15 mins",
      icon: Search,
      desc: "Property walkthrough and cleaning plan creation",
      color: "text-trust-blue",
      bgColor: "bg-trust-blue/10"
    },
    {
      step: "02",
      title: "Deep Clean",
      duration: "3-5 hours",
      icon: Brush,
      desc: "Room-by-room systematic cleaning",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      step: "03",
      title: "Quality Check",
      duration: "30 mins",
      icon: ClipboardCheck,
      desc: "Inspection against inventory standards",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10"
    },
    {
      step: "04",
      title: "Handover",
      duration: "15 mins",
      icon: ThumbsUp,
      desc: "Ready for keys return with guarantee",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  // Trust Metrics
  const trustMetrics = [
    { icon: Sparkles, value: 500, suffix: "+", label: "Move-Out Cleans", iconColor: "text-accent-orange", bgColor: "bg-accent-orange/10" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Deposit Returns", iconColor: "text-success", bgColor: "bg-success/10" },
    { icon: Clock, value: 24, suffix: "hr", label: "Emergency Available", iconColor: "text-trust-blue", bgColor: "bg-trust-blue/10" },
    { icon: Shield, value: 48, suffix: "hr", label: "Re-Clean Guarantee", iconColor: "text-energy-gold", bgColor: "bg-energy-gold/10" }
  ];

  return (
    <>
      <SEOHead
        title="End of Tenancy Cleaning London | Deposit-Safe Deep Clean | Mainteniq"
        description="Professional end of tenancy cleaning in London. Deposit-safe standards, inventory-ready results. 48h re-clean guarantee. Same-day availability. From £160."
        keywords="end of tenancy cleaning London, move out cleaning, deposit return cleaning, deep cleaning London, professional cleaning, inventory cleaning, landlord cleaning service, Airbnb cleaning London, rental property cleaning"
        canonicalUrl="https://www.mainteniq.co.uk/end-of-tenancy-cleaning"
        structuredData={generateCleaningServiceSchema()}
        breadcrumbData={generateBreadcrumbSchema([
          { name: "Home", url: "https://www.mainteniq.co.uk" },
          { name: "Services", url: "https://www.mainteniq.co.uk/services" },
          { name: "End of Tenancy Cleaning", url: "https://www.mainteniq.co.uk/end-of-tenancy-cleaning" }
        ])}
        faqData={generateFAQSchema(cleaningFAQs)}
      />
      <LocalBusinessSchema 
        businessType="End of Tenancy Cleaning" 
        serviceName="Professional End of Tenancy Cleaning"
        serviceDescription="Deposit-safe end of tenancy cleaning services in London with 48-hour re-clean guarantee. Inventory-ready deep cleaning for tenants and landlords"
      />
      <VoiceSearchOptimizer 
        faqs={cleaningFAQs} 
        serviceName="End of Tenancy Cleaning" 
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${endOfTenancyCleaning})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 bg-accent-orange/20 text-accent-orange border-accent-orange/30">
                  <Clock className="w-3 h-3 mr-1" />
                  Same-Day Availability
                </Badge>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-foreground to-accent-orange bg-clip-text text-transparent">
                Get Your Full Deposit Back
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl">
                Professional end-of-tenancy cleaning that meets strict inventory standards. 
                Thorough, reliable, and deposit-safe cleaning for London tenants and landlords.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  variant="hero"
                  className="text-lg px-8"
                  onClick={() => handleQuoteRequest("End of Tenancy Cleaning")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 border-foreground/30 hover:bg-foreground/10"
                  asChild
                >
                  <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, text: "Deposit Protection Guarantee", color: "text-success", bg: "bg-success/10" },
                  { icon: Clock, text: "Same-Day Available", color: "text-trust-blue", bg: "bg-trust-blue/10" },
                  { icon: Award, text: "Inventory-Ready Standards", color: "text-accent-orange", bg: "bg-accent-orange/10" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-2 ${item.bg} backdrop-blur rounded-lg p-3 border border-border/30`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-12 md:space-y-16">
          
          {/* Who We Help Section */}
          <section className="space-y-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Who We Serve</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Professional Cleaning for Every Move</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a tenant protecting your deposit or a landlord preparing for new tenants, we deliver inventory-ready results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience, index) => (
                <Card key={index} className={`h-full border-t-4 ${audience.bgColor.replace('/10', '/20')} hover:shadow-lg transition-all duration-300`} style={{ borderTopColor: `var(--${audience.iconColor.replace('text-', '')})` }}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 ${audience.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <audience.icon className={`w-7 h-7 ${audience.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why You Need Professional Cleaning */}
          <section className="bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <Badge variant="outline" className="mb-4 border-amber-500/30 text-amber-600 dark:text-amber-400">Common Challenges</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sound Familiar?</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                These are the most common reasons tenants choose professional cleaning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signsYouNeed.map((sign, index) => (
                <Card key={index} className={`h-full border-l-4 ${sign.borderColor} hover:shadow-md transition-all duration-300`}>
                  <CardContent className="p-5">
                    <div className={`w-10 h-10 ${sign.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <sign.icon className={`w-5 h-5 ${sign.iconColor}`} />
                    </div>
                    <h3 className="font-medium mb-2">{sign.symptom}</h3>
                    <p className="text-sm text-success font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {sign.solution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Trust Metrics Strip */}
          <section className="bg-gradient-to-r from-trust-blue/5 via-background to-success/5 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustMetrics.map((metric, index) => (
                <TrustMetricCard key={index} {...metric} />
              ))}
            </div>
          </section>

          {/* What We Clean - Simplified with Collapsible */}
          <section className="space-y-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Comprehensive Coverage</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">What We Clean</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail covered to meet strict inventory standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roomTypes.map((room, index) => (
                <Card key={index} className={`h-full border-t-4 hover:shadow-lg transition-all duration-300`} style={{ borderTopColor: room.iconColor.includes('trust-blue') ? 'hsl(var(--trust-blue))' : room.iconColor.includes('success') ? 'hsl(var(--success))' : room.iconColor.includes('purple') ? '#a855f7' : '#f97316' }}>
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 ${room.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <room.icon className={`w-6 h-6 ${room.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg">{room.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {room.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {room.items.length > 3 && (
                      <Collapsible>
                        <CollapsibleContent className="mt-2">
                          <ul className="space-y-2">
                            {room.items.slice(3).map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground">
                            <ChevronDown className="w-4 h-4 mr-1" />
                            View all {room.items.length} items
                          </Button>
                        </CollapsibleTrigger>
                      </Collapsible>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Process - With Color Progression */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <Badge variant="outline" className="mb-4">Our Method</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Professional Process</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Systematic approach ensuring inventory-ready results every time
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${process.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}>
                    <process.icon className={`w-8 h-8 ${process.color}`} />
                    <Badge className="absolute -top-2 -right-2 text-xs px-2" variant="secondary">
                      {process.duration}
                    </Badge>
                  </div>
                  <div className={`text-sm font-bold ${process.color} mb-1`}>Step {process.step}</div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Service Package Builder */}
          <ServicePackageBuilder />

          {/* Enhanced Pricing - Updated to London Market Rates */}
          <section className="space-y-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Transparent Pricing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fixed London Rates</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Competitive pricing with no hidden costs. Professional results guaranteed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Studio/1 Bed", 
                  price: "From £160", 
                  points: ["Kitchen + bathroom deep clean", "All rooms thoroughly cleaned", "Inventory-ready guarantee", "48h re-clean promise"],
                  popular: false,
                  color: "border-trust-blue",
                  iconColor: "text-trust-blue"
                },
                {
                  name: "2-3 Bed", 
                  price: "From £280", 
                  points: ["Oven interior & exterior", "Windows interior cleaning", "Professional equipment", "Priority same-day slots"],
                  popular: true,
                  color: "border-accent-orange",
                  iconColor: "text-accent-orange"
                },
                {
                  name: "4+ Bed", 
                  price: "From £400", 
                  points: ["Full deep clean service", "Team of 2-3 professionals", "Carpet spot treatment", "Move-out coordination"],
                  popular: false,
                  color: "border-success",
                  iconColor: "text-success"
                }
              ].map((plan, index) => (
                <Card key={index} className={`${plan.popular ? 'ring-2 ring-accent-orange shadow-xl scale-105' : ''} relative border-t-4 ${plan.color}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-orange text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className={`text-4xl font-bold ${plan.iconColor}`}>{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleQuoteRequest(`End of Tenancy Cleaning - ${plan.name}`)}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Service Guarantees */}
          <section className="bg-gradient-to-r from-success/10 to-trust-blue/10 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 border-success/30 text-success">Peace of Mind</Badge>
              <h2 className="text-2xl font-bold mb-4">Our Guarantees</h2>
              <p className="text-muted-foreground">Professional standards you can rely on</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Deposit Protection", desc: "Professional standards that protect your deposit", color: "text-success", bgColor: "bg-success/10" },
                { icon: Clock, title: "48h Re-Clean", desc: "Free return if anything doesn't meet standards", color: "text-trust-blue", bgColor: "bg-trust-blue/10" },
                { icon: CheckCircle, title: "Fully Insured", desc: "Comprehensive public liability coverage", color: "text-accent-orange", bgColor: "bg-accent-orange/10" },
                { icon: FileCheck, title: "Inventory Ready", desc: "Meets all professional inventory standards", color: "text-energy-gold", bgColor: "bg-energy-gold/10" }
              ].map((guarantee, index) => (
                <div key={index} className={`text-center p-6 ${guarantee.bgColor} rounded-xl`}>
                  <guarantee.icon className={`w-10 h-10 ${guarantee.color} mx-auto mb-3`} />
                  <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs - Using Accordion */}
          <section className="space-y-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Common Questions</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Everything you need to know about our cleaning service
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {cleaningFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-4 sm:p-6 md:p-8 text-center text-primary-foreground">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Ready to Secure Your Deposit?</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90">
                Don't risk losing hundreds in deposit deductions. Book our professional 
                end-of-tenancy cleaning service today and move out with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8"
                  onClick={() => handleQuoteRequest("End of Tenancy Cleaning - Emergency")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Emergency Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm opacity-75">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Same-day available</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>500+ happy customers</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <WhatsAppFloat />
    </>
  );
};

export default EndOfTenancyCleaning;
