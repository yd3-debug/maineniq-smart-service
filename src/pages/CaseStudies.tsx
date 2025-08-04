import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  ArrowRight
} from "lucide-react";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Emergency", "Smart Solutions"];

  const caseStudies = [
    {
      id: 1,
      title: "Downtown Office Building HVAC Upgrade",
      category: "Commercial",
      location: "Downtown District",
      date: "March 2024",
      duration: "2 weeks",
      savings: "35% energy reduction",
      rating: 5,
      tags: ["Energy Efficiency", "Commercial", "Upgrade"],
      challenge: "Outdated HVAC system causing high energy costs and inconsistent temperatures",
      solution: "Complete system replacement with smart controls and zoned climate management",
      results: [
        "35% reduction in energy consumption",
        "Improved temperature consistency across all floors",
        "Enhanced air quality with advanced filtration",
        "ROI achieved within 18 months"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Smart Home Climate Automation",
      category: "Smart Solutions",
      location: "Suburban Residence",
      date: "February 2024",
      duration: "3 days",
      savings: "28% energy reduction",
      rating: 5,
      tags: ["Smart Home", "Automation", "Residential"],
      challenge: "Homeowner wanted intelligent climate control with energy optimization",
      solution: "Installation of smart thermostats, zoned HVAC, and automated scheduling",
      results: [
        "28% reduction in heating/cooling costs",
        "Remote control and monitoring capabilities",
        "Automated energy-saving schedules",
        "Enhanced comfort with room-by-room control"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Emergency Restaurant HVAC Repair",
      category: "Emergency",
      location: "Restaurant District",
      date: "January 2024",
      duration: "Same day",
      savings: "Prevented $10K loss",
      rating: 5,
      tags: ["Emergency", "Commercial", "Restaurant"],
      challenge: "Complete HVAC failure during peak business hours in winter",
      solution: "Emergency diagnostic, temporary heating, and expedited system repair",
      results: [
        "System restored within 4 hours",
        "Prevented business closure and revenue loss",
        "Implemented preventive maintenance plan",
        "Enhanced system reliability"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Luxury Home Complete HVAC Installation",
      category: "Residential",
      location: "Upscale Neighborhood",
      date: "December 2023",
      duration: "1 week",
      savings: "40% energy reduction",
      rating: 5,
      tags: ["New Installation", "Luxury", "Residential"],
      challenge: "New construction requiring high-efficiency HVAC for large luxury home",
      solution: "Design and installation of zoned high-efficiency system with smart controls",
      results: [
        "40% more efficient than standard systems",
        "Perfect climate control in all zones",
        "Whisper-quiet operation",
        "10-year comprehensive warranty"
      ],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop"
    }
  ];

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Real results from real projects. See how we've helped our clients 
            achieve optimal comfort and efficiency.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary-glow" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-elegant transition-all duration-300">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{study.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{study.savings}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Duration: {study.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our satisfied clients who have achieved optimal comfort and efficiency. 
            Let's discuss your HVAC needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-glow">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;