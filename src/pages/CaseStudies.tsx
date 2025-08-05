import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  ArrowRight,
  Building2,
  Users,
  Award,
  Lock
} from "lucide-react";

const CaseStudies = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Luxury Residential Project LRP-001",
      projectType: "High-End Residential",
      location: "Mayfair District",
      completedDate: "Q1 2024",
      projectValue: "£75K+",
      confidential: true,
      tags: ["MVHR Systems", "Underfloor Heating", "Smart Controls"],
      description: "Collaboration with award-winning interior design firm for premium residential development",
      technicalScope: "Complete HVAC design and installation for luxury penthouse with bespoke climate zones",
      achievements: [
        "Whisper-quiet operation meeting strict acoustic requirements",
        "Energy efficiency exceeding Building Regulations by 40%",
        "Seamless integration with high-end interior finishes",
        "Certified Passivhaus standard compliance"
      ],
      image: "/src/assets/hiu-residential.jpg",
      height: "h-80"
    },
    {
      id: 2,
      title: "Commercial Headquarters CHQ-003",
      projectType: "Corporate Office",
      location: "Canary Wharf",
      completedDate: "Q4 2023",
      projectValue: "£120K+",
      confidential: true,
      tags: ["BMS Integration", "Energy Recovery", "Zone Control"],
      description: "Partnership with leading architectural practice for Grade A office building",
      technicalScope: "Advanced HVAC systems with intelligent building management integration",
      achievements: [
        "BREEAM Excellent rating achieved",
        "30% energy reduction vs. baseline design",
        "Flexible zoning for agile working environments",
        "Integration with smart building technologies"
      ],
      image: "/src/assets/bms-control-room.jpg",
      height: "h-96"
    },
    {
      id: 3,
      title: "Boutique Hotel Project BHP-002",
      projectType: "Hospitality",
      location: "Central London",
      completedDate: "Q2 2024",
      projectValue: "£95K+",
      confidential: true,
      tags: ["Guest Comfort", "Noise Control", "Efficiency"],
      description: "Exclusive collaboration with renowned hospitality design specialists",
      technicalScope: "Silent HVAC solutions with individual room climate control systems",
      achievements: [
        "Ultra-quiet operation (<35dB) in guest rooms",
        "Individual temperature control in 45 rooms",
        "Rapid response climate adjustment",
        "Enhanced guest satisfaction scores"
      ],
      image: "/src/assets/commercial-hvac.jpg",
      height: "h-72"
    },
    {
      id: 4,
      title: "Listed Building Restoration LBR-001",
      projectType: "Heritage Conservation",
      location: "Bloomsbury",
      completedDate: "Q3 2023",
      projectValue: "£65K+",
      confidential: true,
      tags: ["Conservation", "Minimal Impact", "Listed Building"],
      description: "Sensitive installation in Grade II listed building with conservation architects",
      technicalScope: "Discrete HVAC installation preserving historical architectural features",
      achievements: [
        "Planning permission approval achieved",
        "Zero impact on historical features",
        "Modern comfort in period setting",
        "Conservation officer full approval"
      ],
      image: "/src/assets/modern-hvac-system.jpg",
      height: "h-88"
    },
    {
      id: 5,
      title: "Luxury Apartment Development LAD-004",
      projectType: "Residential Development",
      location: "Kensington",
      completedDate: "Q1 2024",
      projectValue: "£200K+",
      confidential: true,
      tags: ["Multi-Unit", "Premium Finishes", "Smart Systems"],
      description: "Comprehensive HVAC design for exclusive residential development",
      technicalScope: "Building-wide climate solutions with individual apartment control systems",
      achievements: [
        "12 luxury apartments fully equipped",
        "Centralised plant with individual metering",
        "Smart home integration capability",
        "10-year comprehensive warranty"
      ],
      image: "/src/assets/energy-tech.jpg",
      height: "h-64"
    },
    {
      id: 6,
      title: "Creative Studio Complex CSC-001",
      projectType: "Commercial Creative",
      location: "Shoreditch",
      completedDate: "Q4 2023",
      projectValue: "£85K+",
      confidential: true,
      tags: ["Creative Spaces", "Flexible Zoning", "Air Quality"],
      description: "Innovative HVAC solutions for modern creative workspace design",
      technicalScope: "Adaptive climate control for versatile studio and office environments",
      achievements: [
        "Enhanced air quality for creative work",
        "Flexible zoning for different activities",
        "Integrated with architectural lighting",
        "Minimal visual impact on industrial aesthetic"
      ],
      image: "/src/assets/team-working.jpg",
      height: "h-76"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6">
            Professional Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
            Showcasing our expertise in high-end HVAC installations for luxury developments, 
            prestigious buildings, and exclusive partnerships with leading interior designers and architects.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Confidential Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Premium Standards</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Design Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Building2 className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">25+ Premium Projects</h3>
              <p className="text-sm text-muted-foreground">High-end installations</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Lock className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Confidential Portfolio</h3>
              <p className="text-sm text-muted-foreground">Discretion guaranteed</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Design Partnerships</h3>
              <p className="text-sm text-muted-foreground">Architects & Designers</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Premium Standards</h3>
              <p className="text-sm text-muted-foreground">Luxury specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Exclusive Project Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confidential projects showcasing our expertise in luxury HVAC installations 
              for high-end residential, commercial, and heritage properties.
            </p>
          </div>
          
          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className={`group break-inside-avoid ${project.height} hover:shadow-elegant transition-all duration-300 overflow-hidden`}>
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/70 text-white border-0">
                      <Lock className="w-3 h-3 mr-1" />
                      Confidential
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.projectValue}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 leading-tight">{project.title}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4" />
                      <span>{project.projectType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Completed {project.completedDate}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground italic">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Technical Scope</h4>
                      <p className="text-xs text-muted-foreground">{project.technicalScope}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements</h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary text-xs">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Testimonial Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-accent/30 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-4">
                  "Their attention to detail and understanding of our design requirements was exceptional. 
                  The HVAC integration was seamless and invisible, exactly what our luxury project demanded."
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — Leading Interior Design Firm, Mayfair Project
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Partner with HVAC Specialists
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We collaborate exclusively with interior designers, architects, and luxury developers 
              to deliver seamless HVAC solutions that complement exceptional design.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Discretion Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Confidential project handling</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Design Collaboration</h3>
                <p className="text-sm text-muted-foreground">Seamless integration support</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Premium Standards</h3>
                <p className="text-sm text-muted-foreground">Luxury project expertise</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow">
                Partner with Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Request Portfolio Access
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;