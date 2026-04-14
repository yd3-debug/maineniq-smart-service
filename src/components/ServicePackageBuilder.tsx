import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Flame, Sofa, Droplets, MessageCircle } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";

interface Service {
  service: string;
  icon: React.ComponentType<{ className?: string }>;
  popular: boolean;
  description: string;
  iconColor: string;
  bgColor: string;
}

const services: Service[] = [
  { 
    service: "Carpet Steam Clean", 
    icon: Sparkles, 
    popular: true,
    description: "Deep steam cleaning for fresh, stain-free carpets",
    iconColor: "text-trust-blue",
    bgColor: "bg-trust-blue/10"
  },
  { 
    service: "Oven Deep Clean", 
    icon: Flame, 
    popular: true,
    description: "Interior & exterior oven cleaning to showroom condition",
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange/10"
  },
  { 
    service: "Upholstery Clean", 
    icon: Sofa, 
    popular: false,
    description: "Professional fabric cleaning for sofas and chairs",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-500/10"
  },
  { 
    service: "Window Cleaning", 
    icon: Droplets, 
    popular: false,
    description: "Interior window cleaning for crystal clear finish",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

const ServicePackageBuilder: React.FC = () => {
  const handleAskAbout = (serviceName: string) => {
    handleQuoteRequest(`End of Tenancy Cleaning + ${serviceName}`);
  };

  const handleGetFullPackageQuote = () => {
    const allServices = services.map(s => s.service).join(", ");
    handleQuoteRequest(`End of Tenancy Cleaning + ${allServices}`);
  };

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">Popular Add-Ons</Badge>
        <h2 className="text-3xl font-bold mb-4">Enhance Your Cleaning Package</h2>
        <p className="text-lg text-muted-foreground">
          Add these extras to your service package for the best results
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((addon, index) => (
          <Card 
            key={index} 
            className={`transition-all duration-300 transform hover:scale-105 border-t-4 ${
              addon.popular 
                ? 'ring-1 ring-primary/20 hover:shadow-md' 
                : 'hover:shadow-md'
            }`}
            style={{ 
              borderTopColor: addon.iconColor.includes('trust-blue') 
                ? 'hsl(var(--trust-blue))' 
                : addon.iconColor.includes('accent-orange') 
                  ? 'hsl(var(--accent-orange))' 
                  : addon.iconColor.includes('teal') 
                    ? '#14b8a6' 
                    : '#a855f7' 
            }}
          >
            <CardContent className="p-6 text-center relative">
              {addon.popular && (
                <Badge className="absolute -top-2 -right-2 bg-accent-orange/90 text-white" variant="secondary">
                  Popular
                </Badge>
              )}
              
              <div className={`w-14 h-14 ${addon.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <addon.icon className={`w-7 h-7 ${addon.iconColor}`} />
              </div>
              <h3 className="font-semibold mb-2">{addon.service}</h3>
              <p className="text-xs text-muted-foreground mb-4">{addon.description}</p>
              
              <Button 
                size="sm" 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground"
                onClick={() => handleAskAbout(addon.service)}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Ask About This
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call-to-Action for Full Package */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-trust-blue/10 via-background to-success/10 rounded-xl p-8 max-w-2xl mx-auto border border-border/50">
          <h3 className="text-xl font-semibold mb-2">
            Want the complete package?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get a quote for your full service package with all add-ons included
          </p>
          
          <Button 
            size="lg" 
            onClick={handleGetFullPackageQuote}
            className="text-lg px-8"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Full Package Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePackageBuilder;
