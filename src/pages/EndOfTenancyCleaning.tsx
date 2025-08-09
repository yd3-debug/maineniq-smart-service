import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FullBleedHero from "@/components/FullBleedHero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { CleaningTrustMetrics } from "@/components/CleaningTrustMetrics";
import { DepositCalculator } from "@/components/DepositCalculator";
import { UrgencyTimer } from "@/components/UrgencyTimer";
import { AnimatedChecklist } from "@/components/AnimatedChecklist";
import { TestimonialCards } from "@/components/TestimonialCards";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
                  48-Hour Emergency Response Available
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Get Your Full Deposit Back
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Professional end-of-tenancy cleaning that meets strict inventory standards. 
                <span className="text-foreground font-medium"> 98.7% deposit return success rate.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => handleQuoteRequest("End of Tenancy Cleaning")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  asChild
                >
                  <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Booking
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Deposit Protection Guarantee", color: "text-success" },
                  { icon: Clock, text: "Same-Day Availability", color: "text-primary" },
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
          {/* Trust Metrics */}
          <section>
            <CleaningTrustMetrics />
          </section>

          {/* Urgency Timer */}
          <section>
            <UrgencyTimer />
          </section>

          {/* Cost of Getting It Wrong */}
          <section className="bg-gradient-to-r from-destructive/5 to-orange-500/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">The Real Cost of DIY Cleaning</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't risk your deposit with inadequate cleaning. Here's what tenants typically lose:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { amount: "£300-800", issue: "Kitchen deep clean failures", detail: "Grease, limescale, and appliance interiors missed" },
                { amount: "£200-500", issue: "Bathroom standard issues", detail: "Mold, limescale, and sanitization not up to inventory" },
                { amount: "£150-400", issue: "General cleaning oversights", detail: "Skirting boards, switches, and detailed areas missed" }
              ].map((item, index) => (
                <Card key={index} className="border-orange-200 bg-background">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.amount}</div>
                    <div className="font-medium mb-2">{item.issue}</div>
                    <div className="text-sm text-muted-foreground">{item.detail}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-background rounded-full px-6 py-3 border">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="font-medium">Our professional service from £140 - saving you hundreds</span>
              </div>
            </div>
          </section>

          {/* Interactive Before/After Showcase */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">See The Transformation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Professional cleaning that exceeds inventory standards and guarantees deposit return
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <BeforeAfterSlider
                beforeSrc="/FCUdirty.png"
                afterSrc="/FCUclean.png"
                beforeAlt="Kitchen before professional end of tenancy cleaning"
                afterAlt="Kitchen after professional deep cleaning - inventory ready"
                beforeLabel="Move-in condition"
                afterLabel="Inventory ready"
                className="w-full"
              />
              
              <BeforeAfterSlider
                beforeSrc="/MVPR0dirty.webp"
                afterSrc="/MVHRclean.webp"
                beforeAlt="Bathroom before professional cleaning"
                afterAlt="Bathroom after deep cleaning and sanitization"
                beforeLabel="Needs attention"
                afterLabel="Deposit-safe clean"
                className="w-full"
              />
            </div>
          </section>

          {/* Deposit Calculator */}
          <section className="bg-gradient-to-br from-primary/5 to-accent-orange/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Savings</h2>
              <p className="text-lg text-muted-foreground">
                See how much our professional cleaning could save on your deposit
              </p>
            </div>
            <DepositCalculator />
          </section>

          {/* Animated Cleaning Process */}
          <section className="rounded-2xl border p-8 bg-gradient-to-br from-background to-muted/30">
            <AnimatedChecklist />
          </section>

          {/* Enhanced Service Add-ons */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Complete Your Clean</h2>
              <p className="text-lg text-muted-foreground">
                Professional add-ons for the perfect finish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: "Carpet Steam Clean", price: "£60", icon: Sparkles, popular: true },
                { service: "Oven Deep Clean", price: "£40", icon: Zap, popular: true },
                { service: "Upholstery Clean", price: "£80", icon: Shield, popular: false },
                { service: "Window Cleaning", price: "£30", icon: Star, popular: false }
              ].map((addon, index) => (
                <Card key={index} className={`${addon.popular ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-6 text-center">
                    {addon.popular && (
                      <Badge className="mb-3" variant="secondary">Popular</Badge>
                    )}
                    <addon.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-2">{addon.service}</h3>
                    <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                    <Button size="sm" variant="outline" className="w-full">
                      Add to Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

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
                  originalPrice: "£200",
                  savings: "Save £60",
                  points: ["Kitchen + bathroom deep clean","All rooms thoroughly cleaned","Inventory-ready guarantee","48h re-clean promise"],
                  popular: false
                },
                {
                  name: "2-3 Bed", 
                  price: "From £180", 
                  originalPrice: "£280",
                  savings: "Save £100",
                  points: ["Oven exterior & interior","Windows interior cleaning","Professional equipment","Priority same-day slots"],
                  popular: true
                },
                {
                  name: "4+ Bed", 
                  price: "From £240", 
                  originalPrice: "£380",
                  savings: "Save £140",
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
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="text-success">
                        {plan.savings}
                      </Badge>
                    </div>
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
                  desc: "98.7% success rate returning full deposits",
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
                  desc: "£2M public liability and contents cover",
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
                    Call {CONTACT.phones.emergency}
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm opacity-75">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Same-day availability</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Trusted by 850+ tenants</span>
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
