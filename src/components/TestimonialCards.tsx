import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, Home, Briefcase } from "lucide-react";

const testimonials = [
  {
    quote: "Their proactive maintenance has eliminated our emergency callouts. ROI was clear within 6 months.",
    name: "Sarah Mitchell",
    role: "Property Manager",
    company: "Heritage Residential",
    icon: Building2,
    rating: 5
  },
  {
    quote: "Professional service, detailed reporting, and they actually answer the phone when needed.",
    name: "David Chen",
    role: "Facilities Director", 
    company: "Camden Commercial",
    icon: Briefcase,
    rating: 5
  },
  {
    quote: "Finally found a maintenance partner we can trust. They keep our residents happy and systems running.",
    name: "Emma Thompson",
    role: "Development Manager",
    company: "Skyline Properties",
    icon: Home,
    rating: 5
  }
];

export function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => {
        const Icon = testimonial.icon;
        return (
          <Card key={index} className={`hover:shadow-elegant transition-all hover-scale animate-stagger-${index + 1}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}