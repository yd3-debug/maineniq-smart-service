import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { Search, Settings, CheckCircle, Phone } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Site Survey & Assessment",
    icon: Search,
    description: "We conduct a comprehensive evaluation of your building systems, existing infrastructure, and integration requirements.",
    details: [
      "System compatibility analysis",
      "Infrastructure assessment", 
      "Integration point mapping",
      "Performance baseline establishment"
    ],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    number: "02", 
    title: "Design & Installation",
    icon: Settings,
    description: "Custom BMS design followed by professional installation of controllers, sensors, and communication networks.",
    details: [
      "Custom system design",
      "Controller installation",
      "Sensor network deployment",
      "Communication setup"
    ],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    number: "03",
    title: "Commission & Optimize",
    icon: CheckCircle,
    description: "System commissioning, optimization, training, and ongoing support to ensure peak performance.",
    details: [
      "System commissioning",
      "Performance optimization",
      "User training",
      "Ongoing support & maintenance"
    ],
    gradient: "from-green-500 to-emerald-600"
  }
];

export function BMSProcess() {
  return (
    <section className="bg-muted/30 border rounded-xl p-8 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-heading text-3xl font-bold">Professional BMS Implementation</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Our proven three-phase approach ensures seamless integration and optimal performance
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connection line for desktop */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
            )}
            
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <CardContent className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${step.gradient} text-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-8 border-t space-y-6">
        <div className="space-y-2">
          <h3 className="font-heading text-xl font-semibold">Ready to Transform Your Building?</h3>
          <p className="text-muted-foreground">Get a professional BMS consultation and custom quote</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/contact">Get BMS Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href={`tel:${CONTACT.phones.emergencyTel}`} aria-label={`Call us now at ${CONTACT.phones.emergency}`}>
              <Phone className="w-5 h-5 mr-2"/>
              {CONTACT.phones.emergency}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}