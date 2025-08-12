import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Star, TrendingUp, Home, Building } from "lucide-react";

interface RenovationProject {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  description: string;
  stats: {
    valueIncrease: string;
    timeframe: string;
    energySavings?: string;
  };
  highlights: string[];
}

const renovationProjects: RenovationProject[] = [
  {
    id: 1,
    title: "Complete London Flat Transformation",
    category: "Residential",
    beforeImage: "/Old_Flat.jpeg",
    afterImage: "/New_Flat.jpg",
    beforeAlt: "Before renovation - outdated London flat with worn fixtures",
    afterAlt: "After renovation - modern London flat with contemporary design",
    description: "Complete transformation of a tired London flat into a modern, energy-efficient home with updated HVAC, plumbing, and electrical systems.",
    stats: {
      valueIncrease: "28%",
      timeframe: "6 weeks",
      energySavings: "35%"
    },
    highlights: [
      "Full rewiring and electrical upgrade",
      "Modern HVAC system installation",
      "Kitchen and bathroom renovation",
      "Energy-efficient windows and insulation"
    ]
  },
  {
    id: 2,
    title: "FCU System Upgrade & Efficiency",
    category: "HVAC Systems",
    beforeImage: "/FCUdirty.png",
    afterImage: "/FCUclean.png",
    beforeAlt: "Before FCU maintenance - dirty and inefficient fan coil unit",
    afterAlt: "After FCU maintenance - clean and optimized fan coil unit",
    description: "Professional FCU maintenance and upgrade delivering significant efficiency improvements and cost savings.",
    stats: {
      valueIncrease: "15%",
      timeframe: "2 days",
      energySavings: "25%"
    },
    highlights: [
      "Deep cleaning and component replacement",
      "Performance optimization",
      "Energy efficiency improvements",
      "Extended equipment lifespan"
    ]
  },
  {
    id: 3,
    title: "MVHR System Overhaul",
    category: "Ventilation",
    beforeImage: "/MVPR0dirty.webp",
    afterImage: "/MVHRclean.webp",
    beforeAlt: "Before MVHR maintenance - dirty ventilation system",
    afterAlt: "After MVHR maintenance - clean and efficient ventilation system",
    description: "Complete MVHR system maintenance and optimization for improved air quality and energy recovery.",
    stats: {
      valueIncrease: "12%",
      timeframe: "1 day",
      energySavings: "30%"
    },
    highlights: [
      "Filter replacement and system cleaning",
      "Heat recovery optimization",
      "Air quality improvement",
      "Reduced operating costs"
    ]
  }
];

const RenovationGallery: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>RENOVATION SHOWCASE</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Renovation Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore real transformations from our renovation projects across London and the UK. 
            Each project showcases our commitment to quality, efficiency, and client satisfaction.
          </p>
        </div>

        <div className="space-y-16">
          {renovationProjects.map((project, index) => (
            <div key={project.id} className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-success/25 bg-success/5">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-success mr-2" />
                        <span className="text-2xl font-bold text-success">
                          {project.stats.valueIncrease}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Value Increase</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/25 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Building className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">
                          {project.stats.timeframe}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Completion Time</p>
                    </CardContent>
                  </Card>
                  {project.stats.energySavings && (
                    <Card className="border-accent-orange/25 bg-accent-orange/5 col-span-2">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Home className="w-5 h-5 text-accent-orange mr-2" />
                          <span className="text-2xl font-bold text-accent-orange">
                            {project.stats.energySavings}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Energy Savings</p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Project Highlights */}
                <div>
                  <h4 className="font-semibold mb-3">Project Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Before/After Slider */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <BeforeAfterSlider
                  beforeSrc={project.beforeImage}
                  afterSrc={project.afterImage}
                  beforeAlt={project.beforeAlt}
                  afterAlt={project.afterAlt}
                  beforeLabel="Before"
                  afterLabel="After"
                  ratio={16 / 10}
                  fit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent-orange/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Property?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our portfolio of successful renovations. Get a free consultation and discover 
                how we can transform your property with professional expertise and guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="/case-studies"
                  className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  View More Case Studies
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RenovationGallery;