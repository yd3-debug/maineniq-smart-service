import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Zap, Shield, Star, MessageCircle } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";

interface Service {
  service: string;
  icon: React.ComponentType<{ className?: string }>;
  popular: boolean;
  description: string;
}

const services: Service[] = [
  { 
    service: "Carpet Steam Clean", 
    icon: Sparkles, 
    popular: true,
    description: "Deep steam cleaning for fresh, stain-free carpets"
  },
  { 
    service: "Oven Deep Clean", 
    icon: Zap, 
    popular: true,
    description: "Interior & exterior oven cleaning to showroom condition"
  },
  { 
    service: "Upholstery Clean", 
    icon: Shield, 
    popular: false,
    description: "Professional fabric cleaning for sofas and chairs"
  },
  { 
    service: "Window Cleaning", 
    icon: Star, 
    popular: false,
    description: "Interior window cleaning for crystal clear finish"
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

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Build Your Perfect Service Package</h2>
        <p className="text-lg text-muted-foreground">
          Select additional services to create your ideal cleaning package
        </p>
        {selectedServices.size > 0 && (
          <Badge variant="secondary" className="mt-2">
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
              className={`transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                addon.popular ? 'ring-2 ring-primary/20' : ''
              } ${
                selected 
                  ? 'ring-2 ring-success border-success bg-success/5 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => toggleService(addon.service)}
            >
              <CardContent className="p-6 text-center relative">
                {addon.popular && !selected && (
                  <Badge className="absolute -top-2 -right-2" variant="secondary">
                    Popular
                  </Badge>
                )}
                {selected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <addon.icon className={`w-8 h-8 mx-auto mb-3 ${selected ? 'text-success' : 'text-primary'}`} />
                <h3 className="font-medium mb-2">{addon.service}</h3>
                <p className="text-xs text-muted-foreground mb-4">{addon.description}</p>
                
                <Button 
                  size="sm" 
                  variant={selected ? "default" : "outline"}
                  className={`w-full transition-all duration-200 ${
                    selected 
                      ? 'bg-success hover:bg-success/90' 
                      : 'hover:bg-primary hover:text-white'
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
        <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-xl p-6 max-w-2xl mx-auto">
          {selectedServices.size > 0 ? (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Perfect! You've selected {selectedServices.size} additional service{selectedServices.size !== 1 ? 's' : ''}
              </h3>
              <p className="text-muted-foreground mb-4">
                Most customers who choose these services get excellent deposit returns
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {Array.from(selectedServices).map((service) => (
                  <Badge key={service} variant="secondary" className="bg-success/20 text-success border-success/30">
                    {service}
                  </Badge>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Start with our standard end-of-tenancy clean
              </h3>
              <p className="text-muted-foreground mb-4">
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