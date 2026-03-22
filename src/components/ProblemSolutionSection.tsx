import { MessageSquare, Thermometer, TrendingUp, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handleQuoteRequest } from "@/utils/quote";
import { CONTACT } from "@/config/contact";

const problems = [
  {
    icon: MessageSquare,
    problem: "Tenant complaints about temperature?",
    solution: "Our FCU and HVAC maintenance ensures consistent comfort year-round",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    icon: TrendingUp,
    problem: "Energy bills climbing?",
    solution: "Professional servicing cuts energy waste by up to 15%",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: AlertTriangle,
    problem: "Emergency breakdowns disrupting operations?",
    solution: "Planned maintenance prevents 80% of unexpected failures",
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: Thermometer,
    problem: "Poor air quality affecting health?",
    solution: "MVHR and filter maintenance removes 75% of airborne particles",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Common Problems We Solve
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            These issues affect thousands of London properties. Here's how we fix them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {problems.map((item, index) => (
            <Card 
              key={index} 
              className={`${item.bgColor} ${item.borderColor} border-l-4 hover:shadow-lg transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.problem}</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
            One call handles it all
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stop juggling multiple contractors. Get a single point of contact for all your property maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => handleQuoteRequest("property assessment")}
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                <Phone className="w-5 h-5 mr-2" />
                Speak to an Expert
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
