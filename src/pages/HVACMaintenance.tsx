import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, AlertTriangle, Wrench, Calendar, Phone, Shield, Building2, Snowflake, Wind, Thermometer, ChevronDown, Filter, ClipboardCheck, Scale, FileText, Heart, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-hvac.jpg";

export default function HVACMaintenance() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    document.title = "HVAC & Commercial Refrigeration Maintenance UK | Professional Service";
    const description = "Professional HVAC and commercial refrigeration maintenance for UK properties. FCU, MVHR, HIU, VRF systems, cold rooms, and display refrigeration. F-Gas certified engineers.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "HVAC & Commercial Refrigeration Maintenance UK";

    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}/hvac-maintenance`;
  }, []);

  const systemTypes = [
    { name: "FCU (Fan Coil Units)", icon: <Wind className="w-5 h-5" />, use: "Commercial offices, hotels" },
    { name: "MVHR (Heat Recovery)", icon: <Filter className="w-5 h-5" />, use: "Residential & commercial buildings" },
    { name: "HIU/CIU (Interface Units)", icon: <Thermometer className="w-5 h-5" />, use: "Apartment blocks, district systems" },
    { name: "VRF Systems", icon: <Building2 className="w-5 h-5" />, use: "Large commercial buildings" },
    { name: "Commercial Refrigeration", icon: <Snowflake className="w-5 h-5" />, use: "Cold rooms, display cabinets, freezers" },
    { name: "Central Plant", icon: <Building2 className="w-5 h-5" />, use: "Hospitals, large facilities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${heroImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10">
              <Shield className="w-4 h-4 mr-2" />
              Professional HVAC & Refrigeration Service
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              HVAC & Commercial Refrigeration<br />
              <span className="text-primary">Maintenance Specialists</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Professional maintenance for all heating, ventilation, air conditioning, and commercial refrigeration systems across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default">
                <Phone className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* What is HVAC Maintenance Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What is HVAC Maintenance?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Professional service keeping your heating, ventilation, and air conditioning systems running efficiently and safely.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Systems We Service:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemTypes.map((system, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">{system.icon}</div>
                      <div>
                        <div className="font-semibold">{system.name}</div>
                        <div className="text-sm text-muted-foreground">{system.use}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <XCircle className="w-5 h-5 mr-2 text-destructive" />
                  Reactive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Fix when broken (most expensive)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  Preventive (PPM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Scheduled service (cost-effective)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ClipboardCheck className="w-5 h-5 mr-2 text-success" />
                  Predictive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Condition monitoring (most advanced)</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Why UK Buildings Need Professional Service:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>Hard water causes rapid scale buildup (London, South East)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>Strict F-Gas and TM44 compliance requirements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>Legionella risk in water-based systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>Aging building infrastructure</span>
              </li>
            </ul>
          </div>

          <Collapsible open={openSections['hvac-details']} onOpenChange={() => toggleSection('hvac-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-4 justify-between">
                <span>Learn More About HVAC Systems</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['hvac-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <p className="text-muted-foreground">
                HVAC stands for Heating, Ventilation, and Air Conditioning. In the UK, these systems are critical for maintaining comfortable indoor environments across residential and commercial properties.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">UK Climate Challenges:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Damp conditions promote mold growth in ductwork</li>
                  <li>Temperature swings between seasons stress equipment</li>
                  <li>Hard water in London and South East requires frequent descaling</li>
                  <li>Older building stock often has aging, inefficient systems</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Maintenance Frequency Guidelines:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Residential properties: Annual service minimum</li>
                  <li>Commercial offices: Quarterly maintenance recommended</li>
                  <li>High-use environments (restaurants, gyms): Monthly checks</li>
                  <li>Critical systems (hospitals, data centers): Weekly monitoring</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Commercial Property Specialists */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commercial Property Specialists
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We maintain HVAC and refrigeration systems for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Office Buildings & Business Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multi-zone climate control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>VRF and central plant systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Air quality management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>After-hours service available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Retail & Shopping Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customer comfort systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Display refrigeration maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy efficiency optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Minimal disruption scheduling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Guest comfort HVAC systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Commercial kitchen refrigeration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Walk-in freezer/cold room maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Healthcare & Care Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Critical temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Legionella prevention programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Infection control air filtration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compliance documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Warehouses & Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Large-scale ventilation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cold storage refrigeration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Process cooling systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Heavy-duty equipment service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Multi-Tenant Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>HIU/CIU systems for apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Communal heating and cooling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building Safety Act compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Landlord duty fulfillment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['commercial-details']} onOpenChange={() => toggleSection('commercial-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-6 justify-between">
                <span>Learn More About Commercial Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['commercial-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <p className="text-muted-foreground">
                Our commercial HVAC and refrigeration services are tailored to each property type's unique requirements. We understand that downtime costs businesses money, so we offer flexible scheduling including after-hours and weekend appointments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Service Scheduling Options:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>After-hours maintenance (evenings/weekends)</li>
                    <li>Quarterly planned preventive maintenance (PPM)</li>
                    <li>Monthly monitoring for high-use systems</li>
                    <li>24/7 emergency callout service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>Full system inspection and testing</li>
                    <li>Filter replacement and coil cleaning</li>
                    <li>Performance optimization and calibration</li>
                    <li>Compliance certification documentation</li>
                    <li>Energy efficiency recommendations</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Commercial Refrigeration Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Snowflake className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Refrigeration Maintenance
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Professional service for all commercial cooling systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Systems We Service:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Walk-in cold rooms & freezers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Display refrigeration (shops, supermarkets)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Back bar & under counter units</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Blast chillers & prep fridges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Ice machines</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Bottle coolers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Deli & butchery cabinets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Included in Service:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Condenser & evaporator coil cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Refrigerant pressure checks (F-Gas certified)</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Door seal inspection & adjustment</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Temperature calibration & monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Defrost system testing</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Electrical component verification</span>
                  </li>
                  <li className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    <span>Food safety compliance documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                <CardTitle className="text-destructive">Without Maintenance:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Food spoilage and waste</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Health & Safety violations</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Higher energy consumption</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Unexpected breakdowns during service</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Failed health inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-primary">With Professional Service:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consistent food safety temperatures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lower energy bills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extended equipment lifespan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>UK regulations compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority emergency response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['refrigeration-details']} onOpenChange={() => toggleSection('refrigeration-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-6 justify-between">
                <span>Learn More About Refrigeration Maintenance</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['refrigeration-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <h4 className="font-semibold">F-Gas Compliance for Refrigeration:</h4>
              <p className="text-muted-foreground text-sm">
                All our refrigeration engineers are F-Gas Category 1 certified, legally required for working on commercial refrigeration systems containing fluorinated gases. We maintain detailed service records for 5 years as required by UK law.
              </p>
              <h4 className="font-semibold mt-4">Food Safety Regulations:</h4>
              <p className="text-muted-foreground text-sm">
                Commercial refrigeration must maintain specific temperature ranges: Chilled food storage 0-5°C, Frozen food storage below -18°C. We provide temperature logging documentation that Environmental Health Officers require during inspections.
              </p>
              <h4 className="font-semibold mt-4">Maintenance Frequency:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                <li>Display cabinets & under-counter units: Quarterly service</li>
                <li>Walk-in cold rooms: Bi-annual professional service</li>
                <li>High-use kitchen equipment: Monthly checks</li>
                <li>Temperature monitoring: Daily logs required</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Maintenance Frequency Guide Table */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Maintenance Frequency Guide
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Quick reference for when your systems need service
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4 text-left">System Type</th>
                  <th className="p-4 text-left">Monthly Check</th>
                  <th className="p-4 text-left">Quarterly Service</th>
                  <th className="p-4 text-left">Annual Service</th>
                  <th className="p-4 text-left">Who Can Do It?</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-semibold">FCU</td>
                  <td className="p-4 text-sm">Filter check</td>
                  <td className="p-4 text-sm">Filter replace + clean</td>
                  <td className="p-4 text-sm">Deep service + compliance</td>
                  <td className="p-4 text-sm">Professional only</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-semibold">MVHR</td>
                  <td className="p-4 text-sm">Filter check</td>
                  <td className="p-4 text-sm">Filter replace</td>
                  <td className="p-4 text-sm">Heat exchanger clean</td>
                  <td className="p-4 text-sm">Basic DIY, service = pro</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-semibold">HIU/CIU</td>
                  <td className="p-4 text-sm">Visual check</td>
                  <td className="p-4 text-sm">-</td>
                  <td className="p-4 text-sm">Descale + safety test</td>
                  <td className="p-4 text-sm">Professional only</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-semibold">VRF</td>
                  <td className="p-4 text-sm">Error monitoring</td>
                  <td className="p-4 text-sm">Filter + refrigerant check</td>
                  <td className="p-4 text-sm">Full system service</td>
                  <td className="p-4 text-sm">Professional only</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4 font-semibold">Commercial Refrigeration</td>
                  <td className="p-4 text-sm">Temperature log</td>
                  <td className="p-4 text-sm">Coil clean + calibration</td>
                  <td className="p-4 text-sm">Full compliance service</td>
                  <td className="p-4 text-sm">Professional only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  Building Managers Can Check:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Visual inspections for leaks or damage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic filter checks (non-refrigerant systems)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Thermostat operation tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Temperature monitoring logs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unusual noise detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                  REQUIRES Professional Service:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Refrigerant systems (F-Gas certification required)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Gas heating systems (Gas Safe registration required)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Electrical work (NICEIC approved)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Deep cleaning and coil work</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Safety and compliance testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['maintenance-details']} onOpenChange={() => toggleSection('maintenance-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-6 justify-between">
                <span>Learn More About Maintenance Checklists</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['maintenance-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">FCU Quarterly Service Includes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>Filter replacement (MERV 8-13 grade)</li>
                    <li>Coil deep cleaning (chemical treatment)</li>
                    <li>Condensate pan cleaning and sanitization</li>
                    <li>Fan motor lubrication and bearing inspection</li>
                    <li>Control system calibration</li>
                    <li>Refrigerant pressure check (F-Gas engineer)</li>
                    <li>Electrical connections verification</li>
                    <li>Water flow rate testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">MVHR Annual Service Includes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>Heat exchanger removal and deep cleaning</li>
                    <li>Full duct inspection</li>
                    <li>Bypass damper operation testing</li>
                    <li>Outdoor hood cleaning</li>
                    <li>Airflow balancing across all rooms</li>
                    <li>Heat recovery efficiency testing (85%+ target)</li>
                    <li>Control logic verification</li>
                    <li>Energy consumption analysis</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* UK Regulations - Quick Guide */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              UK Legal Compliance for HVAC & Refrigeration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-amber-500/30">
              <CardHeader>
                <FileText className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>TM44 Air Conditioning Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Who needs it:</span>
                    <span className="text-muted-foreground">AC systems &gt;12kW</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Frequency:</span>
                    <span className="text-muted-foreground">Every 5 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Penalty:</span>
                    <span className="text-destructive font-medium">£300-£1,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Energy efficiency, system sizing, and controls assessment
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Scale className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>F-Gas Regulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Applies to:</span>
                    <span className="text-muted-foreground">All AC & refrigeration</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Requirement:</span>
                    <span className="text-muted-foreground">Annual leak checks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Engineer must have:</span>
                    <span className="text-primary font-medium">F-Gas certification</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  £200 per violation, unlimited for illegal venting
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Building2 className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Landlord Legal Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold">Residential:</span>
                    <span className="text-muted-foreground ml-2">Must provide functional heating/hot water</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Commercial:</span>
                    <span className="text-muted-foreground ml-2">FRI leases require maintenance</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building Safety Act 2022: High-rise buildings need documented maintenance
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <FileText className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>MEES (Energy Efficiency Standards)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Requirement:</span>
                    <span className="text-muted-foreground">EPC rating E minimum</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">From 2025:</span>
                    <span className="text-destructive font-medium">EPC rating C</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">HVAC impact:</span>
                    <span className="text-muted-foreground">Drops EPC by 2 grades</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cannot legally rent property, fines up to £150,000
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Heart className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Health & Safety (HSE)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold">Legionella Control:</span>
                    <span className="text-muted-foreground ml-2">Risk assessment required</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Workplace Ventilation:</span>
                    <span className="text-muted-foreground ml-2">10 L/s per person minimum</span>
                  </div>
                </div>
                <p className="text-sm text-destructive font-medium">
                  Unlimited fines, prison sentences possible
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader>
                <Snowflake className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Food Safety Regulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Chilled storage:</span>
                    <span className="text-muted-foreground">0-5°C</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Frozen storage:</span>
                    <span className="text-muted-foreground">Below -18°C</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Monitoring:</span>
                    <span className="text-muted-foreground ml-2">Daily temperature logs</span>
                  </div>
                </div>
                <p className="text-sm text-destructive font-medium">
                  Closure orders, unlimited fines, prosecution
                </p>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={openSections['regulations-details']} onOpenChange={() => toggleSection('regulations-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-6 justify-between">
                <span>Learn More About UK Regulations</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['regulations-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">TM44 Inspection Details:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  TM44 inspections assess energy efficiency and identify opportunities for improvement. Inspectors must be CIBSE Low Carbon Consultants or equivalent. First inspection within 12 months of installation, then every 5 years.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>What's checked:</strong> System efficiency vs design, cooling load vs capacity, control system effectiveness, maintenance records, alternative cooling options, and energy improvement recommendations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">F-Gas Certificate Categories:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                  <li><strong>Category 1:</strong> Full refrigeration and AC systems - Can do everything</li>
                  <li><strong>Category 2:</strong> Small systems and recovery - Limited to systems &lt;3kg</li>
                  <li><strong>Category 3:</strong> Leak checking only - Cannot handle refrigerant</li>
                  <li><strong>Category 4:</strong> Recovery only - Decommissioning work</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Verify engineer credentials at realcert.org before work begins. All Mainteniq engineers are F-Gas Category 1 certified.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Building Safety Act 2022:</h4>
                <p className="text-sm text-muted-foreground">
                  Buildings 7+ stories must have an "accountable person" responsible for building safety. HVAC systems must be included in building safety case documentation. Regular maintenance records must be kept and available for inspection. Criminal liability for accountable person if failures lead to safety incidents.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">MEES Compliance:</h4>
                <p className="text-sm text-muted-foreground">
                  From April 2025, all new commercial leases must meet EPC rating C. Old or poorly maintained HVAC systems can drop EPC ratings by 2 full grades. Regular professional maintenance can improve EPC by 1 grade. System upgrades may be required for compliance.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Why Choose Professional Maintenance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Professional HVAC Maintenance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Essential Certifications We Hold:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Gas Safe Registered</div>
                      <div className="text-sm text-muted-foreground">Legal requirement for gas work</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">F-Gas Certified (Category 1)</div>
                      <div className="text-sm text-muted-foreground">All refrigerant systems</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">NICEIC Approved</div>
                      <div className="text-sm text-muted-foreground">Electrical safety compliance</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">£10M Public Liability Insurance</div>
                      <div className="text-sm text-muted-foreground">Full coverage protection</div>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Verify our credentials anytime - we provide certificate numbers on request.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center text-destructive">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Red Flags to Avoid:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong>Cannot provide Gas Safe or F-Gas numbers</strong>
                      <div className="text-muted-foreground">Illegal, voids insurance, you're liable</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong>Suspiciously low prices</strong>
                      <div className="text-muted-foreground">Often inspection only, no real work</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong>No written warranty</strong>
                      <div className="text-muted-foreground">Professional companies provide 12-month warranty</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong>Pressure to sign immediately</strong>
                      <div className="text-muted-foreground">Professional companies provide written quotes</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong>Cannot provide proof of insurance</strong>
                      <div className="text-muted-foreground">Minimum £5M public liability required</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Commercial Property Experience:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Office Buildings</div>
                  <div className="text-xs text-muted-foreground">Business Parks</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Retail</div>
                  <div className="text-xs text-muted-foreground">Hospitality</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Healthcare</div>
                  <div className="text-xs text-muted-foreground">Care Facilities</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Industrial</div>
                  <div className="text-xs text-muted-foreground">Warehouses</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Collapsible open={openSections['professional-details']} onOpenChange={() => toggleSection('professional-details')}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full mt-6 justify-between">
                <span>Learn More: How to Verify Engineer Credentials</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSections['professional-details'] ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Verify Gas Safe Registration:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit register.gassaferegister.co.uk and enter the engineer's ID number (found on their ID card). This confirms they're legally allowed to work on gas systems.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Verify F-Gas Certification:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit realcert.org and search for the engineer's certificate number. Format should be UK/FGAS/XXXX. Check the category matches the work needed (Category 1 for full AC systems).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Questions to Ask Before Hiring:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                  <li>Can I see your Gas Safe and F-Gas certificate numbers?</li>
                  <li>Do you have references from similar properties?</li>
                  <li>What exactly is included in your service?</li>
                  <li>Do you provide emergency cover? What's the response time?</li>
                  <li>What warranty do you offer on parts and labor?</li>
                  <li>Are parts and labor separate or included in the price?</li>
                  <li>Do you have experience with my specific system type?</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What's Included in Professional Service:</h4>
                <p className="text-sm text-muted-foreground">
                  A comprehensive HVAC service should include: detailed system inspection, filter replacement, coil cleaning, component testing, performance optimization, safety checks, compliance certification, and a written service report with recommendations. Beware of "cheap services" that only do basic inspections.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your HVAC Maintenance?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Professional service for all heating, ventilation, air conditioning, and commercial refrigeration systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call for Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            24/7 Emergency Response | UK-Wide Coverage | F-Gas & Gas Safe Certified Engineers
          </p>
        </div>
      </section>
    </div>
  );
}