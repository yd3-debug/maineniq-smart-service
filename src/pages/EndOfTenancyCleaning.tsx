import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FullBleedHero from "@/components/FullBleedHero";
import { TestimonialCards } from "@/components/TestimonialCards";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServicePackageBuilder from "@/components/ServicePackageBuilder";
import endOfTenancyCleaning from "@/assets/end-of-tenancy-cleaning.jpg";
import professionalCleaning from "@/assets/professional-cleaning.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { handleQuoteRequest } from "@/utils/quote";
import { 
  CheckCircle, 
  Phone, 
  Shield, 
  Sparkles, 
  AlertTriangle, 
  Clock, 
  Star,
  TrendingUp,
  FileCheck,
  Users,
  Zap,
  Award,
  Calendar,
  MessageCircle
} from "lucide-react";

const EndOfTenancyCleaning: React.FC = () => {
  useEffect(() => {
    document.title = "End of Tenancy Cleaning | Mainteniq";
    const desc = "Professional end of tenancy cleaning for deposit-safe standards. Deep, detailed, guaranteed.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${endOfTenancyCleaning})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  Emergency Response Available
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Get Your Full Deposit Back
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Professional end-of-tenancy cleaning that meets strict inventory standards. 
                Thorough, reliable, and deposit-safe cleaning you can trust.
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
                  className="text-lg px-8 border-white/30 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Deposit Protection Guarantee", color: "text-success" },
                  { icon: Clock, text: "Same-Day Available", color: "text-primary" },
                  { icon: Award, text: "Inventory-Ready Standards", color: "text-accent-orange" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-lg p-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* What We Clean */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">What We Clean</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail covered to meet strict inventory standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Kitchen",
                  icon: Sparkles,
                  items: ["Oven interior & exterior", "Hob & extractor fan", "Cupboards inside & out", "Appliance surfaces", "Sink & taps", "Tiles & splashbacks"]
                },
                {
                  title: "Bathroom",
                  icon: Shield,
                  items: ["Toilet inside & out", "Shower & bath deep clean", "Tiles & grout", "Mirror & fixtures", "Floor sanitization", "Ventilation areas"]
                },
                {
                  title: "Living Areas",
                  icon: CheckCircle,
                  items: ["Carpet deep vacuum", "Skirting boards", "Light switches & sockets", "Window sills", "Radiators", "All surfaces wiped"]
                },
                {
                  title: "Throughout",
                  icon: Star,
                  items: ["All doors & frames", "Handles & fixtures", "Cobweb removal", "Floor mopping", "Final inspection", "Inventory compliance"]
                }
              ].map((area, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center">
                    <area.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Process */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Professional Process</h2>
              <p className="text-lg text-muted-foreground">
                Systematic approach ensuring inventory-ready results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "Thorough property walkthrough and cleaning plan creation"
                },
                {
                  step: "2", 
                  title: "Deep Cleaning",
                  desc: "Room-by-room systematic cleaning with professional equipment"
                },
                {
                  step: "3",
                  title: "Quality Check",
                  desc: "Detailed inspection against inventory standards"
                },
                {
                  step: "4",
                  title: "Final Sign-off",
                  desc: "Property ready for handover with guarantee certificate"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-medium mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Service</h2>
              <p className="text-lg text-muted-foreground">
                Professional expertise that protects your deposit
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Professional Equipment",
                  desc: "Industrial-grade cleaning equipment and eco-friendly products for superior results"
                },
                {
                  icon: Users,
                  title: "Experienced Team",
                  desc: "Trained professionals who understand inventory requirements and landlord expectations"
                },
                {
                  icon: Shield,
                  title: "Inventory Standards",
                  desc: "Cleaning to exact inventory specifications ensuring deposit protection"
                },
                {
                  icon: Clock,
                  title: "Flexible Scheduling",
                  desc: "Same-day availability and emergency slots to meet your move-out deadline"
                },
                {
                  icon: FileCheck,
                  title: "Quality Guarantee",
                  desc: "Free return visit if anything doesn't meet required standards"
                },
                {
                  icon: Zap,
                  title: "Peace of Mind",
                  desc: "Fully insured service with comprehensive liability coverage"
                }
              ].map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-medium mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Interactive Service Package Builder */}
          <ServicePackageBuilder />

          {/* Enhanced Pricing */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transparent, Fixed Pricing</h2>
              <p className="text-lg text-muted-foreground">
                No hidden costs. Professional results guaranteed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Studio/1 Bed", 
                  price: "From £140", 
                  points: ["Kitchen + bathroom deep clean","All rooms thoroughly cleaned","Inventory-ready guarantee","48h re-clean promise"],
                  popular: false
                },
                {
                  name: "2-3 Bed", 
                  price: "From £220", 
                  points: ["Oven exterior & interior","Windows interior cleaning","Professional equipment","Priority same-day slots"],
                  popular: true
                },
                {
                  name: "4+ Bed", 
                  price: "From £290", 
                  points: ["Full deep clean service","Team of 2-3 professionals","Carpet spot treatment","Move-out coordination"],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''} relative`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
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
          <section className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Guarantees</h2>
              <p className="text-muted-foreground">Your peace of mind is guaranteed</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Deposit Protection",
                  desc: "Professional standards that protect your deposit",
                  color: "text-success"
                },
                {
                  icon: Clock,
                  title: "48h Re-Clean",
                  desc: "Free return if anything doesn't meet standards",
                  color: "text-primary"
                },
                {
                  icon: CheckCircle,
                  title: "Fully Insured",
                  desc: "Comprehensive public liability and contents cover",
                  color: "text-accent-orange"
                },
                {
                  icon: FileCheck,
                  title: "Inventory Ready",
                  desc: "Meets all professional inventory standards",
                  color: "text-energy-gold"
                }
              ].map((guarantee, index) => (
                <div key={index} className="text-center p-4 bg-background/60 backdrop-blur rounded-lg">
                  <guarantee.icon className={`w-8 h-8 ${guarantee.color} mx-auto mb-3`} />
                  <h3 className="font-medium mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Customer Testimonials */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Tenant & Landlord Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Real experiences from satisfied customers
              </p>
            </div>
            <TestimonialCards />
          </section>

        <section className="rounded-xl border p-6">
          <h2 className="font-heading text-2xl font-bold mb-4">FAQs</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Do you provide cleaning supplies and equipment?</summary>
              <p className="mt-2">Yes, our team brings all professional cleaning products and equipment.</p>
            </details>
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Are you available on short notice?</summary>
              <p className="mt-2">Often yes. Contact us and we’ll do our best to fit your timescale.</p>
            </details>
            <details className="rounded-lg border p-4 bg-background">
              <summary className="font-medium text-foreground">Do you guarantee deposit return?</summary>
              <p className="mt-2">We meet inventory standards and offer a 48h re-clean if anything is missed.</p>
            </details>
          </div>
        </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-center text-primary-foreground">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Ready to Secure Your Deposit?</h2>
              <p className="text-lg opacity-90">
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
                  <span>Trusted by tenants</span>
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
