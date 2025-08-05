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
      title: "Luxury Flat Refurbishment LFR-001",
      projectType: "Full Flat Renovation",
      location: "Mayfair District",
      completedDate: "Q1 2024",
      projectValue: "£45K+",
      confidential: true,
      tags: ["Full Refurbishment", "Luxury Finishes", "Designer Bathrooms"],
      description: "Complete transformation in collaboration with award-winning interior design firm",
      technicalScope: "Full flat renovation including kitchen, bathrooms, flooring, lighting, and custom joinery",
      achievements: [
        "Property value increased by 35%",
        "High-end finishes throughout",
        "Client satisfaction: 5-star rating",
        "Completed ahead of schedule"
      ],
      image: "/src/assets/before-after.jpg",
      height: "h-80"
    },
    {
      id: 2,
      title: "Executive Bathroom Suite EBS-003",
      projectType: "Luxury Bathroom",
      location: "Canary Wharf",
      completedDate: "Q4 2023",
      projectValue: "£25K+",
      confidential: true,
      tags: ["Bathroom Design", "Premium Fittings", "Wet Room"],
      description: "Bespoke bathroom design for high-end residential tower",
      technicalScope: "Complete bathroom renovation with underfloor heating, luxury fixtures, and custom vanity",
      achievements: [
        "Marble and porcelain tile work",
        "Rainfall shower and freestanding bath",
        "Heated towel rails and mirrors",
        "Smart lighting and ventilation"
      ],
      image: "/src/assets/renovation-comparison.jpg",
      height: "h-96"
    },
    {
      id: 3,
      title: "Period Property Restoration PPR-002",
      projectType: "Heritage Renovation",
      location: "Bloomsbury",
      completedDate: "Q2 2024",
      projectValue: "£55K+",
      confidential: true,
      tags: ["Period Features", "Conservation", "Original Details"],
      description: "Sensitive restoration preserving character while adding modern amenities",
      technicalScope: "Period property renovation maintaining original features with contemporary upgrades",
      achievements: [
        "Original Victorian features restored",
        "Modern kitchen seamlessly integrated",
        "Energy efficiency improvements",
        "Planning approval for listed building"
      ],
      image: "/src/assets/handyman-maintenance.jpg",
      height: "h-72"
    },
    {
      id: 4,
      title: "End-of-Tenancy Transformation EOT-005",
      projectType: "Property Makeover",
      location: "Kensington",
      completedDate: "Q3 2023",
      projectValue: "£15K+",
      confidential: true,
      tags: ["Deep Cleaning", "Repairs", "Quick Turnaround"],
      description: "Complete property refresh for luxury rental market preparation",
      technicalScope: "Professional cleaning, repairs, painting, and minor upgrades for rental readiness",
      achievements: [
        "7-day turnaround completion",
        "Professional cleaning standards",
        "All maintenance issues resolved",
        "Rental value increased by 20%"
      ],
      image: "/src/assets/end-of-tenancy-cleaning.jpg",
      height: "h-88"
    },
    {
      id: 5,
      title: "Designer Kitchen Upgrade DKU-001",
      projectType: "Kitchen Renovation",
      location: "Chelsea",
      completedDate: "Q1 2024",
      projectValue: "£35K+",
      confidential: true,
      tags: ["Kitchen Design", "Premium Appliances", "Custom Cabinetry"],
      description: "Bespoke kitchen design for luxury apartment development",
      technicalScope: "Complete kitchen transformation with custom units, stone worktops, and integrated appliances",
      achievements: [
        "Handleless German cabinetry",
        "Quartz waterfall island",
        "Premium integrated appliances",
        "Under-cabinet LED lighting system"
      ],
      image: "/src/assets/professional-cleaning.jpg",
      height: "h-64"
    },
    {
      id: 6,
      title: "Handyman Services Package HSP-012",
      projectType: "Maintenance & Repairs",
      location: "Central London",
      completedDate: "Q4 2023",
      projectValue: "£8K+",
      confidential: true,
      tags: ["Handyman Services", "Electrical", "Plumbing"],
      description: "Comprehensive maintenance package for high-end residential property",
      technicalScope: "Electrical repairs, plumbing updates, carpentry work, and general maintenance",
      achievements: [
        "24-hour emergency response",
        "All electrical work certified",
        "Plumbing efficiency improved",
        "Regular maintenance schedule established"
      ],
      image: "/src/assets/handyman-repair.jpg",
      height: "h-76"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560618124-8c6d6c4c70c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-5xl font-bold mb-6">
            Interior Design Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
            Showcasing our expertise in luxury refurbishments, bathroom renovations, full flat transformations, 
            and professional services for high-end residential properties across London.
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
              <h3 className="font-semibold">50+ Refurbishment Projects</h3>
              <p className="text-sm text-muted-foreground">Luxury transformations</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Lock className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Confidential Portfolio</h3>
              <p className="text-sm text-muted-foreground">Discretion guaranteed</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Design Partnerships</h3>
              <p className="text-sm text-muted-foreground">Interior Designers & Developers</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Premium Standards</h3>
              <p className="text-sm text-muted-foreground">Luxury finishes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Exclusive Refurbishment Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confidential projects showcasing our expertise in luxury interior design, 
              bathroom renovations, full flat refurbishments, and premium property services.
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
                  "The transformation was beyond our expectations. Their craftsmanship and attention to detail 
                  brought our vision to life perfectly. The bathroom renovation is absolutely stunning."
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — Leading Interior Design Firm, Chelsea Project
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
              Partner with Interior Design Specialists
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We collaborate exclusively with interior designers, architects, and property developers 
              to deliver exceptional refurbishment services that exceed luxury standards.
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