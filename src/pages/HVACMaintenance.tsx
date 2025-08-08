import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle, Wrench, Calendar, BookOpen, TrendingUp } from "lucide-react";
import ResearchBadge from "@/components/ResearchBadge";

export default function HVACMaintenance() {
  const maintenanceServices = [
    {
      name: "FCU Maintenance",
      icon: <Wrench className="w-5 h-5" />,
      interval: "Every 6 months",
      benefits: [
        "Prevents 40% efficiency loss from dirty coils",
        "Extends equipment life by 5-7 years",
        "Reduces energy costs by up to 25%",
        "Improves air quality and comfort"
      ],
      neglectCosts: "Emergency FCU replacement: £2,500-£5,000 vs £150 maintenance"
    },
    {
      name: "HIU Service",
      icon: <Wrench className="w-5 h-5" />,
      interval: "Annually",
      benefits: [
        "Maintains optimal heat transfer efficiency",
        "Prevents scale buildup and corrosion",
        "Ensures consistent heating and hot water",
        "Reduces communal heating costs"
      ],
      neglectCosts: "HIU replacement: £800-£1,500 vs £120 annual service"
    },
    {
      name: "CIU Maintenance",
      icon: <Wrench className="w-5 h-5" />,
      interval: "Every 6 months",
      benefits: [
        "Optimizes multi-zone system balance",
        "Prevents hydraulic imbalances",
        "Ensures even temperature distribution",
        "Reduces overall system energy consumption"
      ],
      neglectCosts: "System rebalancing: £1,000-£2,000 vs £180 maintenance"
    },
    {
      name: "MVHR Service",
      icon: <Wrench className="w-5 h-5" />,
      interval: "Every 6 months",
      benefits: [
        "Maintains 90%+ heat recovery efficiency",
        "Ensures optimal indoor air quality",
        "Prevents mold and condensation issues",
        "Reduces heating costs by up to 30%"
      ],
      neglectCosts: "Full unit replacement: £3,000-£6,000 vs £200 service"
    }
  ];

  const complianceRequirements = [
    {
      title: "TM44 Air Conditioning Inspections",
      description: "Mandatory inspections for AC systems over 12kW to maintain compliance and avoid penalties up to £300.",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Commercial Landlord Obligations",
      description: "Legal requirement to maintain HVAC systems in good working order for tenant safety and comfort.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Building Regulations Compliance",
      description: "Regular maintenance ensures continued compliance with UK building regulations for energy efficiency.",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              UK HVAC Compliance & Efficiency
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Why HVAC Maintenance <span className="text-primary">Matters</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional maintenance for FCU, HIU, CIU, and MVHR systems is essential for UK commercial properties. 
              Ensure compliance, prevent costly breakdowns, and maximize efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* UK Legal Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">UK Legal Compliance Requirements</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay compliant with UK regulations and avoid penalties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceRequirements.map((requirement, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {requirement.icon}
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Service-Specific Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Professional Maintenance Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored maintenance programs for each HVAC system type
            </p>
            <div className="flex justify-center mt-4">
              <ResearchBadge claimId="maintenance_efficiency_loss" label="Research" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{service.interval}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Maintenance Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-destructive">Cost of Neglect:</p>
                        <p className="text-sm text-muted-foreground mt-1">{service.neglectCosts}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">The Impact of Regular Maintenance</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Data-driven evidence of maintenance benefits for UK commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">90%</div>
                <p className="text-sm text-muted-foreground">Breakdown prevention rate with regular maintenance</p>
                <ResearchBadge claimId="maintenance_breakdown_prevention" label="Source" className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">25%</div>
                <p className="text-sm text-muted-foreground">Average energy cost reduction with proper maintenance</p>
                <ResearchBadge claimId="maintenance_energy_savings" label="Source" className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">50%</div>
                <p className="text-sm text-muted-foreground">Equipment lifespan extension through professional servicing</p>
                <ResearchBadge claimId="maintenance_lifespan_extension" label="Source" className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground">8:1</div>
                <p className="text-sm text-muted-foreground">ROI ratio: every £1 spent on maintenance saves £8 in repairs</p>
                <ResearchBadge claimId="maintenance_roi" label="Source" className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Service Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Professional Service Standards</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive maintenance programs designed for UK commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certified Technicians</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All our engineers are Gas Safe registered and hold relevant HVAC certifications for UK commercial systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Scheduled Maintenance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proactive maintenance schedules tailored to each system type, ensuring optimal performance year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <span>Emergency Response</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 emergency callout service for when systems fail despite regular maintenance programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Don't Wait for System Failure
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Protect your investment with professional HVAC maintenance. Schedule your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-background text-foreground hover:bg-background/90 transition-colors"
            >
              Schedule Maintenance
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/20 text-base font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}