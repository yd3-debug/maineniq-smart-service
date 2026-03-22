import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Flame, 
  ThermometerSun, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Phone, 
  AlertTriangle,
  Home,
  Building2,
  Users,
  FileCheck,
  Droplets,
  Zap,
  ChevronDown,
  CheckCircle2,
  Star,
  Timer,
  Gauge,
  Settings,
  Award
} from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";
import { TrustMetrics } from "@/components/TrustMetrics";
import SEOHead from "@/components/SEOHead";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/utils/structuredData";

const BoilerServices = () => {
  const audienceCards = [
    {
      icon: Home,
      title: "Homeowners",
      description: "Keep your family warm and safe with reliable boiler maintenance",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: Building2,
      title: "Landlords",
      description: "Stay compliant with CP12 certificates and keep tenants happy",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      icon: Users,
      title: "Property Managers",
      description: "Manage multiple properties with scheduled maintenance contracts",
      color: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      icon: FileCheck,
      title: "Letting Agents",
      description: "Ensure properties meet safety standards before tenant move-in",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    }
  ];

  const warningSignCards = [
    {
      icon: ThermometerSun,
      title: "Radiators Not Heating Evenly",
      description: "Cold spots or some radiators not working at all",
      color: "bg-orange-500/10 border-orange-200"
    },
    {
      icon: Droplets,
      title: "Water Leaking From Boiler",
      description: "Any visible water around your boiler needs immediate attention",
      color: "bg-red-500/10 border-red-200"
    },
    {
      icon: Gauge,
      title: "Low Pressure Warning",
      description: "Pressure gauge showing below 1 bar when cold",
      color: "bg-amber-500/10 border-amber-200"
    },
    {
      icon: AlertTriangle,
      title: "Strange Noises",
      description: "Banging, gurgling, or kettling sounds from your boiler",
      color: "bg-purple-500/10 border-purple-200"
    },
    {
      icon: Timer,
      title: "Takes Ages to Heat Up",
      description: "Hot water or heating taking much longer than usual",
      color: "bg-blue-500/10 border-blue-200"
    },
    {
      icon: Flame,
      title: "Pilot Light Keeps Going Out",
      description: "Frequent pilot light issues indicate a bigger problem",
      color: "bg-red-500/10 border-red-200"
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: "Boiler Servicing",
      description: "Annual service to keep your boiler running efficiently and safely",
      details: ["Full safety inspection", "Efficiency check", "Clean key components", "Pressure test"]
    },
    {
      icon: AlertTriangle,
      title: "Boiler Repairs",
      description: "Fast diagnosis and repair for all boiler brands and models",
      details: ["Same-day response", "All major brands", "Genuine parts", "12-month warranty"]
    },
    {
      icon: Flame,
      title: "Boiler Installation",
      description: "New boiler installation with options to suit every budget",
      details: ["Combi, system & conventional", "Energy-efficient models", "Finance available", "10-year warranty options"]
    },
    {
      icon: FileCheck,
      title: "CP12 Gas Safety Certificate",
      description: "Legal requirement for landlords - annual gas safety check",
      details: ["Full property inspection", "Certificate for tenants", "Digital record keeping", "Reminder service"]
    },
    {
      icon: Droplets,
      title: "Power Flush",
      description: "Remove sludge and debris to restore heating efficiency",
      details: ["Improves heat output", "Reduces noise", "Extends boiler life", "Chemical treatment"]
    },
    {
      icon: Settings,
      title: "Smart Thermostat Installation",
      description: "Control your heating from anywhere with smart technology",
      details: ["Nest, Hive & more", "App control", "Scheduling", "Energy savings"]
    }
  ];

  const brands = [
    "Worcester Bosch", "Vaillant", "Baxi", "Ideal", "Viessmann", 
    "Glow-worm", "Potterton", "Alpha", "Ferroli", "Main"
  ];

  const outcomes = [
    {
      icon: ThermometerSun,
      title: "Reliable Heat",
      description: "Consistent warmth when you need it most"
    },
    {
      icon: Zap,
      title: "Lower Bills",
      description: "Efficient boiler means lower energy costs"
    },
    {
      icon: ShieldCheck,
      title: "Safety Assured",
      description: "Peace of mind with Gas Safe certified work"
    },
    {
      icon: Clock,
      title: "Extended Life",
      description: "Regular maintenance adds years to your boiler"
    }
  ];

  const boilerFAQs = [
    { question: "How often should I service my boiler?", answer: "Boilers should be serviced annually to maintain efficiency, safety, and warranty validity. For landlords, an annual CP12 Gas Safety Certificate is a legal requirement." },
    { question: "What is a CP12 Gas Safety Certificate?", answer: "A CP12 is a legal document that proves all gas appliances in a rental property have been checked and are safe. Landlords must have one issued annually by a Gas Safe registered engineer." },
    { question: "How much does a boiler service cost in London?", answer: "A standard boiler service in London typically costs between £70-£120. We offer competitive rates with no hidden fees and same-day service available." },
    { question: "Do you offer emergency boiler repairs?", answer: "Yes, we provide 24/7 emergency boiler repair services across London. Our Gas Safe engineers can usually attend within hours for urgent breakdowns." },
    { question: "Which boiler brands do you service?", answer: "We service all major brands including Worcester Bosch, Vaillant, Baxi, Ideal, Viessmann, Glow-worm, Potterton, Alpha, Ferroli, and Main." }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Services", url: "https://www.mainteniq.co.uk/services" },
    { name: "Boiler Services", url: "https://www.mainteniq.co.uk/boiler-services" }
  ];

  const boilerServiceSchema = generateServiceSchema({
    name: "Boiler Services London - Repair, Installation & CP12",
    description: "Gas Safe registered boiler services in London. Expert boiler repair, installation, servicing and CP12 certificates for landlords. Same-day emergency response available.",
    url: "https://www.mainteniq.co.uk/boiler-services",
    serviceType: "Boiler Repair and Installation",
    image: "https://www.mainteniq.co.uk/BOILER.png"
  });

  return (
    <>
      <SEOHead
        title="Boiler Services London | Repair, Installation & CP12 | Mainteniq"
        description="Gas Safe registered boiler services in London. Boiler repair, installation, servicing & CP12 certificates for landlords. Same-day emergency response. Call now!"
        keywords="boiler repair london, boiler service london, CP12 certificate london, gas safe engineer london, boiler installation london, emergency boiler repair london, landlord gas safety certificate, boiler servicing near me, Worcester Bosch engineer london, combi boiler repair, boiler breakdown london"
        canonicalUrl="/boiler-services"
        structuredData={boilerServiceSchema}
        breadcrumbData={generateBreadcrumbSchema(breadcrumbItems)}
        faqData={generateFAQSchema(boilerFAQs)}
      />
      <LocalBusinessSchema 
        businessType="Boiler Services" 
        serviceName="Boiler Repair, Installation & CP12"
        serviceDescription="Gas Safe registered boiler services in London including repair, installation, servicing and CP12 certificates for landlords"
      />
      <VoiceSearchOptimizer faqs={boilerFAQs} serviceName="Boiler Services" />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/BOILER.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-400/30 text-sm px-4 py-2">
              <Flame className="w-4 h-4 mr-2" />
              Gas Safe Registered Engineers
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Boiler Services</span>
              <br />for London Homes
            </h1>
            
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              From emergency repairs to annual servicing and CP12 certificates. 
              Keep your home warm and safe with our Gas Safe registered engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                onClick={() => handleQuoteRequest("Boiler Services Enquiry")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => handleQuoteRequest("Emergency Boiler Repair - Urgent")}
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Repair
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <span>Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-400" />
                <span>12-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Who We Help</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Boiler Services for Every Property
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a homeowner, landlord, or managing multiple properties, 
              we provide reliable boiler services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceCards.map((card) => (
              <Card key={card.title} className={`border ${card.color} hover:shadow-lg transition-all`}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-current/10 flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetrics />

      {/* Warning Signs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-amber-300 text-amber-700 bg-amber-50">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Warning Signs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Signs Your Boiler Needs Attention
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't wait for a complete breakdown. These signs indicate your boiler needs professional attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignCards.map((card) => (
              <Card key={card.title} className={`border ${card.color} hover:shadow-md transition-all`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-current/10 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600"
              onClick={() => handleQuoteRequest("Boiler Inspection Request")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book a Boiler Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Boiler Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to emergency repairs and new installations. 
              All work carried out by Gas Safe registered engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-all border-border/50">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center text-sm text-primary hover:text-primary/80 font-medium">
                      View Details
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3 pt-3 border-t">
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Boiler Brands We Service</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((brand) => (
                <Badge key={brand} variant="secondary" className="text-sm px-4 py-2">
                  {brand}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get From Professional Servicing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => (
              <Card key={outcome.title} className="text-center border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CP12 Section for Landlords */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-orange-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-red-500/10 text-red-600 border-red-200">
                <FileCheck className="w-4 h-4 mr-2" />
                Legal Requirement for Landlords
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                CP12 Gas Safety Certificates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All landlords in the UK must have a valid Gas Safety Certificate (CP12) for their rental properties. 
                Failure to comply can result in fines up to £6,000 or even imprisonment.
              </p>
            </div>

            <Card className="border-red-200 bg-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {[
                        "Full inspection of all gas appliances",
                        "Boiler safety and efficiency check",
                        "Flue and ventilation inspection",
                        "Gas pipework examination",
                        "Official CP12 certificate issued",
                        "Digital record for your files"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Annual Requirement</p>
                      <p className="text-3xl font-bold text-primary mb-4">CP12 Certificate</p>
                      <Button 
                        size="lg" 
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleQuoteRequest("CP12 Gas Safety Certificate Request")}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Book CP12 Inspection
                      </Button>
                      <p className="text-xs text-muted-foreground mt-3">
                        Same-day certificates available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Boiler Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From routine servicing to emergency repairs, our Gas Safe engineers are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
              onClick={() => handleQuoteRequest("Boiler Services Enquiry")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => handleQuoteRequest("Emergency Boiler Repair - URGENT")}
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              24/7 Emergency Line
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoilerServices;
