import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Flame, Sofa, Droplets, MessageCircle } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";

interface Service {
  service: string;
  icon: React.ComponentType<{ className?: string }>;
  popular: boolean;
  description: string;
  iconColor: string;
  bgColor: string;
  selectedBorder: string;
}

const services: Service[] = [
  { 
    service: "Carpet Steam Clean", 
    icon: Sparkles, 
    popular: true,
    description: "Deep steam cleaning for fresh, stain-free carpets",
    iconColor: "text-trust-blue",
    bgColor: "bg-trust-blue/10",
    selectedBorder: "ring-trust-blue border-trust-blue"
  },
  { 
    service: "Oven Deep Clean", 
    icon: Flame, 
    popular: true,
    description: "Interior & exterior oven cleaning to showroom condition",
    iconColor: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    selectedBorder: "ring-accent-orange border-accent-orange"
  },
  { 
    service: "Upholstery Clean", 
    icon: Sofa, 
    popular: false,
    description: "Professional fabric cleaning for sofas and chairs",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-500/10",
    selectedBorder: "ring-teal-500 border-teal-500"
  },
  { 
    service: "Window Cleaning", 
    icon: Droplets, 
    popular: false,
    description: "Interior window cleaning for crystal clear finish",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    selectedBorder: "ring-purple-500 border-purple-500"
  }
];

const ServicePackageBuilder: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const toggleService = (serviceName: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceName)) {
      newSelected.delete(serviceName);
    } else {
      newSelected.add(serviceName);
    }
    setSelectedServices(newSelected);
  };

  const handleGetQuote = () => {
    if (selectedServices.size === 0) {
      handleQuoteRequest("End of Tenancy Cleaning");
    } else {
      const servicesList = Array.from(selectedServices).join(", ");
      handleQuoteRequest(`End of Tenancy Cleaning + ${servicesList}`);
    }
  };

  const isSelected = (serviceName: string) => selectedServices.has(serviceName);

  const getSelectedService = (serviceName: string) => services.find(s => s.service === serviceName);

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">Customize Your Package</Badge>
        <h2 className="text-3xl font-bold mb-4">Build Your Perfect Service Package</h2>
        <p className="text-lg text-muted-foreground">
          Select additional services to create your ideal cleaning package
        </p>
        {selectedServices.size > 0 && (
          <Badge variant="secondary" className="mt-3 bg-success/20 text-success border-success/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            {selectedServices.size} service{selectedServices.size !== 1 ? 's' : ''} selected
          </Badge>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((addon, index) => {
          const selected = isSelected(addon.service);
          return (
            <Card 
              key={index} 
              className={`transition-all duration-300 cursor-pointer transform hover:scale-105 border-t-4 ${
                selected 
                  ? `ring-2 ${addon.selectedBorder} bg-${addon.iconColor.replace('text-', '')}/5 shadow-lg` 
                  : addon.popular 
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
              onClick={() => toggleService(addon.service)}
            >
              <CardContent className="p-6 text-center relative">
                {addon.popular && !selected && (
                  <Badge className="absolute -top-2 -right-2 bg-accent-orange/90 text-white" variant="secondary">
                    Popular
                  </Badge>
                )}
                {selected && (
                  <div className={`absolute -top-2 -right-2 w-6 h-6 ${addon.bgColor.replace('/10', '')} rounded-full flex items-center justify-center`} style={{ backgroundColor: addon.iconColor.includes('trust-blue') ? 'hsl(var(--trust-blue))' : addon.iconColor.includes('accent-orange') ? 'hsl(var(--accent-orange))' : addon.iconColor.includes('teal') ? '#14b8a6' : '#a855f7' }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`w-14 h-14 ${addon.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <addon.icon className={`w-7 h-7 ${addon.iconColor}`} />
                </div>
                <h3 className="font-semibold mb-2">{addon.service}</h3>
                <p className="text-xs text-muted-foreground mb-4">{addon.description}</p>
                
                <Button 
                  size="sm" 
                  variant={selected ? "default" : "outline"}
                  className={`w-full transition-all duration-200 ${
                    selected 
                      ? 'bg-success hover:bg-success/90 text-white' 
                      : 'hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleService(addon.service);
                  }}
                >
                  {selected ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Selected
                    </>
                  ) : (
                    "Include This"
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Dynamic Call-to-Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-trust-blue/10 via-background to-success/10 rounded-xl p-8 max-w-2xl mx-auto border border-border/50">
          {selectedServices.size > 0 ? (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Great choice! You've selected {selectedServices.size} additional service{selectedServices.size !== 1 ? 's' : ''}
              </h3>
              <p className="text-muted-foreground mb-4">
                Customers who choose these services report higher deposit return rates
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {Array.from(selectedServices).map((serviceName) => {
                  const service = getSelectedService(serviceName);
                  return (
                    <Badge 
                      key={serviceName} 
                      variant="secondary" 
                      className={`${service?.bgColor} ${service?.iconColor} border-current/30`}
                    >
                      {serviceName}
                    </Badge>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Start with our standard end-of-tenancy clean
              </h3>
              <p className="text-muted-foreground mb-6">
                Or select additional services above for the ultimate package
              </p>
            </>
          )}
          
          <Button 
            size="lg" 
            onClick={handleGetQuote}
            className="text-lg px-8"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {selectedServices.size > 0 
              ? `Get Quote for Complete Package` 
              : 'Get Standard Quote'
            }
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePackageBuilder;
