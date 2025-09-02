import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { ComingSoon } from "@/components/ComingSoon";
import { 
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  ArrowRight,
  Building2,
  Users,
  Award,
  Lock,
  Eye,
  Star,
  Quote,
  CheckCircle,
  FileText,
  Clock,
  Filter,
  MessageSquare,
  Home,
  Factory,
  BarChart3,
  Zap,
  DollarSign,
  BrainCircuit
} from "lucide-react";
import heroImage from "@/assets/embassy-gardens-hero.jpg";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TrustStrip from "@/components/TrustStrip";
import { handleQuoteRequest } from "@/utils/quote";
import { CommercialBenefitsChart } from "@/components/CommercialBenefitsChart";

  const CaseStudies = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    
    // Check if in development mode
    const isDevelopmentMode = new URLSearchParams(window.location.search).get('dev') === 'true' || 
                             localStorage.getItem('case-studies-dev-mode') === 'true';

    // If not in development mode, show coming soon page
    if (!isDevelopmentMode) {
      return <ComingSoon 
        title="Property Services Case Studies" 
        subtitle="Comprehensive renovation and property services success stories showcasing professional results, transformations, and value improvements across London properties"
        expectedDate="March 2025"
        features={[
          "Complete renovation project breakdowns with before/after visuals",
          "HVAC, handyman, smart home, and cleaning service case studies", 
          "Property value improvements and cost savings data",
          "Before and after transformation metrics and testimonials",
          "Professional service results across all property types"
        ]}
      />;
    }

// SEO: title, meta description, canonical
    useEffect(() => {
      document.title = "Property Services Case Studies | Renovation & Maintenance Results | Mainteniq";
      const description =
        "Real property transformation success stories: complete renovations, HVAC services, smart home installations, handyman work, and cleaning services. Professional results that add value and improve living.";
      const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      } else {
        const m = document.createElement("meta");
        m.name = "description";
        m.content = description;
        document.head.appendChild(m);
      }
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = window.location.origin + "/case-studies";
    }, []);

    const projectFilters = ["All", "Full Renovation", "Kitchen & Bathroom", "HVAC Services", "Smart Home", "Handyman", "Cleaning Services", "Commercial Fit-out"];

    const countFor = (filter: string) => {
      if (filter === "All") return portfolioProjects.length;
      if (filter === "Commercial") return portfolioProjects.filter((p) => p.propertyType === "Commercial").length;
      return portfolioProjects.filter((p) => p.projectType.includes(filter)).length;
    };

const workProcess = [
    {
      step: 1,
      title: "Property Assessment",
      description: "Comprehensive inspection and evaluation of property requirements and potential",
      duration: "2-4 hours"
    },
    {
      step: 2,
      title: "Service Planning",
      description: "Customized project plan based on property type, budget, and timeline requirements",
      duration: "1-3 days"
    },
    {
      step: 3,
      title: "Professional Execution",
      description: "Expert service delivery using specialized tools, quality materials, and certified procedures",
      duration: "1 day - 8 weeks"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Thorough testing, inspection, and performance verification of completed work",
      duration: "2-4 hours"
    },
    {
      step: 5,
      title: "Project Documentation",
      description: "Detailed completion report with warranties, maintenance guidance, and handover",
      duration: "1 hour"
    }
  ];

const testimonials = [
    {
      text: "Complete apartment renovation exceeded our expectations. The transformation is stunning and has significantly increased the property value.",
      author: "Sarah Johnson",
      company: "Prime London Properties",
      project: "Full Apartment Renovation",
      rating: 5
    },
    {
      text: "Professional smart home installation made our house truly modern. Everything works seamlessly and the energy savings are remarkable.",
      author: "David Thompson",
      company: "Metro Residential",
      project: "Smart Home Automation",
      rating: 5
    },
    {
      text: "Excellent handyman services and HVAC maintenance - everything from minor repairs to major upgrades. Reliable and professional.",
      author: "Michael Chen",
      company: "Central London Developments",
      project: "Property Maintenance Program",
      rating: 5
    }
  ];

const companyStats = [
    { label: "Properties Transformed", value: "300+", icon: Building2 },
    { label: "Service Categories", value: "8+", icon: Users },
    { label: "Client Satisfaction", value: "99%", icon: Star },
    { label: "Years Experience", value: "15+", icon: Award }
  ];
const portfolioProjects = [
    {
      id: 1,
      title: "Complete Apartment Transformation CAT-001",
      projectType: "Full Renovation",
      propertyType: "Residential",
      location: "Canary Wharf",
      completedDate: "Q1 2024",
      confidential: false,
      tags: ["Complete Renovation", "Modern Design", "Value Enhancement"],
      description: "Full apartment renovation transforming outdated space into modern luxury home",
      technicalScope: "Complete interior renovation including kitchen, bathroom, flooring, lighting, and smart home integration",
      achievements: [
        "45% increase in property value",
        "Modern open-plan living space created",
        "Energy-efficient systems installed",
        "£85,000 added property value"
      ],
      image: "/src/assets/new-flat.jpg",
      height: "h-80"
    },
    {
      id: 2,
      title: "Premium Kitchen & Bathroom Renovation PKB-003",
      projectType: "Kitchen & Bathroom",
      propertyType: "Residential", 
      location: "Westminster",
      completedDate: "Q4 2023",
      confidential: false,
      tags: ["Kitchen Renovation", "Bathroom Renovation", "Premium Finishes", "Modern Design"],
      description: "Complete kitchen and bathroom renovation with premium fixtures and modern design",
      technicalScope: "Full kitchen and bathroom renovation including plumbing, electrical, tiling, cabinetry, and appliance installation",
      achievements: [
        "Stunning modern kitchen and bathroom spaces",
        "Premium materials and finishes throughout",
        "Improved functionality and storage",
        "£45,000 added property value"
      ],
      image: "/src/assets/renovation-comparison.jpg",
      height: "h-96"
    },
    {
      id: 3,
      title: "Smart Home Automation System SAS-002",
      projectType: "Smart Home",
      propertyType: "Residential",
      location: "King's Cross",
      completedDate: "Q2 2024",
      confidential: false,
      tags: ["Smart Home", "Automation", "Energy Management", "Security"],
      description: "Complete smart home automation system with lighting, security, and climate control",
      technicalScope: "Smart lighting installation, automated security system, climate control, entertainment center, and voice assistant integration",
      achievements: [
        "30% reduction in energy consumption",
        "Seamless home automation experience",
        "Enhanced security and convenience",
        "Modern smart home ecosystem"
      ],
      image: "/src/assets/smart-home-dashboard.jpg",
      height: "h-72"
    },
    {
      id: 4,
      title: "Comprehensive HVAC Service Program CSP-005",
      projectType: "HVAC Services",
      propertyType: "Commercial",
      location: "Shoreditch",
      completedDate: "Q3 2023",
      confidential: false,
      tags: ["HVAC Maintenance", "System Optimization", "Energy Efficiency"],
      description: "Complete HVAC system maintenance and optimization for commercial office building",
      technicalScope: "FCU maintenance, HIU servicing, MVHR optimization, and BMS calibration across multiple systems",
      achievements: [
        "25% improvement in energy efficiency",
        "Zero unexpected system failures",
        "Extended equipment lifespan by 5+ years",
        "£20,000 annual energy cost savings"
      ],
      image: "/src/assets/hvac-installation.jpg",
      height: "h-88"
    },
    {
      id: 5,
      title: "Multi-Service Handyman Program MSP-001",
      projectType: "Handyman",
      propertyType: "Residential",
      location: "City of London",
      completedDate: "Q1 2024",
      confidential: false,
      tags: ["Property Maintenance", "Repairs", "Improvements", "Multi-Trade"],
      description: "Comprehensive handyman services including electrical, plumbing, and general maintenance work",
      technicalScope: "Electrical repairs, plumbing fixes, painting, carpentry, fixture installation, and ongoing maintenance",
      achievements: [
        "Multiple property issues resolved efficiently",
        "Same-day service for urgent repairs",
        "Cost-effective maintenance solutions",
        "Enhanced property condition and value"
      ],
      image: "/src/assets/handyman-maintenance.jpg",
      height: "h-64"
    },
    {
      id: 6,
      title: "Commercial Office Fit-out COF-012",
      projectType: "Commercial Fit-out",
      propertyType: "Commercial",
      location: "Central London",
      completedDate: "Q4 2023",
      confidential: false,
      tags: ["Office Design", "Commercial Renovation", "Modern Workspace"],
      description: "Complete commercial office fit-out creating modern, efficient workspace",
      technicalScope: "Space planning, electrical installation, lighting design, flooring, partition walls, and furniture installation",
      achievements: [
        "Modern, collaborative workspace created",
        "Improved employee productivity environment",
        "Energy-efficient lighting and systems",
        "Professional, branded office space"
      ],
      image: "/src/assets/team-working.jpg",
      height: "h-76"
    },
    {
      id: 7,
      title: "End of Tenancy Deep Clean ETC-008",
      projectType: "Cleaning Services",
      propertyType: "Residential",
      location: "Kensington",
      completedDate: "Q3 2024",
      confidential: false,
      tags: ["Deep Cleaning", "End of Tenancy", "Professional Service"],
      description: "Comprehensive end of tenancy cleaning ensuring deposit return and property presentation",
      technicalScope: "Deep cleaning of all rooms, kitchen appliances, bathroom sanitization, carpet cleaning, and window washing",
      achievements: [
        "100% deposit return achieved",
        "Property ready for immediate viewing",
        "Professional cleaning standards met",
        "Satisfied landlord and tenant"
      ],
      image: "/src/assets/end-of-tenancy-cleaning.jpg",
      height: "h-72"
    }
  ];

  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: portfolioProjects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: window.location.origin + "/case-studies#" + p.id,
        name: p.title,
      })),
    };
    const existing = document.getElementById("case-studies-jsonld");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "case-studies-jsonld";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen pt-0">
      {/* Hero Section - Elegant & Flowing */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image as <img> for better focal control */}
          <picture>
            <source srcSet={heroImage} />
            <img
              src={heroImage}
              alt="Luxury flat refurbishment projects and premium residential developments"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content - Refined & Elegant */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 md:mb-6 text-white tracking-tight leading-none">
                  Property Services
                  <span className="block font-bold text-trust-blue">
                    Success Stories
                  </span>
                </h1>
                <div className="w-16 md:w-24 h-0.5 bg-primary mx-auto mb-6 md:mb-8"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-white/90 mb-10 md:mb-16 leading-relaxed font-light">
                Professional property services delivering exceptional results: complete renovations, smart home installations, 
                HVAC maintenance, and comprehensive property improvements across London.
              </p>
              
              {/* Elegant Statistics - Simplified to 3 key metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16 max-w-4xl mx-auto">
                {companyStats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div className="bg-white/8 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/15 hover:bg-white/12 hover:border-luxury-gold/40 transition-all duration-500 hover:scale-105">
                      <stat.icon className="w-8 md:w-12 h-8 md:h-12 text-luxury-gold mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl md:text-4xl font-light text-white mb-2 md:mb-3 drop-shadow-sm">
                        <AnimatedCounter 
                          value={parseFloat(stat.value.replace(/[+%]/g, ''))}
                          suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : ''}
                          duration={1200}
                          delay={index * 120}
                        />
                      </div>
                      <div className="text-xs md:text-sm text-white/80 font-light tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Refined Professional Badge - Single, elegant */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 md:space-x-4 bg-white/8 backdrop-blur-sm px-4 md:px-8 py-2 md:py-4 rounded-full border border-white/15">
                  <Shield className="w-4 md:w-5 h-4 md:h-5 text-luxury-gold" />
                  <span className="text-white font-light text-sm md:text-base">Confidential Portfolio</span>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  <Award className="w-4 md:w-5 h-4 md:h-5 text-luxury-gold" />
                  <span className="text-white font-light text-sm md:text-base">Premium Standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Portfolio Filter - Elegant */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4">
              Project
              <span className="font-bold text-primary"> Portfolio</span>
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-12 font-light max-w-xl mx-auto leading-relaxed">
              Select projects showcasing our comprehensive property services and transformation capabilities
            </p>
            <div className="sticky top-16 z-30 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur rounded-full py-2 md:py-3 max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2 md:px-3">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 md:px-8 py-1.5 md:py-2.5 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                      selectedFilter === filter
                        ? "bg-primary text-white shadow-md border border-primary"
                        : "bg-white text-foreground border border-border hover:bg-secondary hover:border-primary/40 hover:text-primary"
                    }`}
                    aria-label={`${filter} projects: ${countFor(filter)} items`}
                  >
                    <span>{filter}</span>
                    <span className="ml-1 md:ml-2 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs px-1.5 md:px-2 py-0.5">
                      {countFor(filter)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Gallery - Refined */}
          <div className="max-w-7xl mx-auto">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center font-light leading-relaxed">
              Confidential projects showcasing our expertise in luxury interior design, 
              bathroom renovations, full flat refurbishments, and premium property services.
            </p>
           
            {/* Enhanced Project Grid with Modal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {portfolioProjects
              .filter(project => {
                if (selectedFilter === "All") return true;
                if (selectedFilter === "Commercial") return project.propertyType === "Commercial";
                return project.projectType.includes(selectedFilter);
              })
              .map((project) => (
              <Card id={`p-${project.id}`} key={project.id} className={`group hover:shadow-elegant transition-all duration-500 overflow-hidden rounded-2xl border-white/50 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 animate-fade-in`}>
                <div className="relative">
                  <AspectRatio ratio={3/2}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </AspectRatio>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/70 text-white border-0">
                      <Lock className="w-3 h-3 mr-1" />
                      Confidential
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`${project.propertyType === 'Commercial' ? 'bg-primary' : 'bg-secondary'} text-white`}>
                      {project.propertyType === 'Commercial' ? (
                        <Factory className="w-3 h-3 mr-1" />
                      ) : (
                        <Home className="w-3 h-3 mr-1" />
                      )}
                      {project.propertyType}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="hero" size="sm" className="rounded-full">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] max-w-[1200px] h-[90vh] overflow-hidden p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                          <div className="relative bg-muted">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="h-full overflow-y-auto p-6">
                            <DialogHeader>
                              <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                            </DialogHeader>
                            <Tabs defaultValue="overview" className="w-full">
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="details">Project Details</TabsTrigger>
                                <TabsTrigger value="results">Results</TabsTrigger>
                              </TabsList>
                              <TabsContent value="overview" className="space-y-4">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Project Information</h4>
                                   <div className="space-y-2 text-sm">
                                       <div className="flex items-center space-x-2">
                                         {project.propertyType === 'Commercial' ? (
                                           <Factory className="w-4 h-4 text-primary" />
                                         ) : (
                                           <Home className="w-4 h-4 text-primary" />
                                         )}
                                         <span>{project.propertyType} - {project.projectType}</span>
                                       </div>
                                       <div className="flex items-center space-x-2">
                                         <MapPin className="w-4 h-4 text-primary" />
                                         <span>{project.location}</span>
                                       </div>
                                       <div className="flex items-center space-x-2">
                                         <Calendar className="w-4 h-4 text-primary" />
                                         <span>Completed {project.completedDate}</span>
                                       </div>
                                     </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Project Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {project.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                              <TabsContent value="details" className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Project Description</h4>
                                  <p className="text-muted-foreground mb-4">{project.description}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Technical Scope</h4>
                                  <p className="text-muted-foreground">{project.technicalScope}</p>
                                </div>
                              </TabsContent>
                              <TabsContent value="results" className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-4">Key Achievements</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.achievements.map((achievement, index) => (
                                      <div key={index} className="flex items-start space-x-3 p-3 bg-accent/30 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">{achievement}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
                      {project.propertyType === 'Commercial' ? (
                        <Factory className="w-4 h-4" />
                      ) : (
                        <Home className="w-4 h-4" />
                      )}
                      <span>{project.propertyType} - {project.projectType}</span>
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
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Commercial Benefits Chart */}
          <div className="mt-16">
            <CommercialBenefitsChart />
          </div>
          
           {/* Enhanced Testimonials Section */}
           <div className="mt-16">
             <h3 className="text-2xl font-bold text-center mb-8">What Our Design Partners Say</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {testimonials.map((testimonial, index) => (
                 <Card key={index} className="bg-accent/30 border-primary/20">
                   <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                       {[...Array(testimonial.rating)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                       ))}
                     </div>
                     <blockquote className="text-sm italic mb-4">
                       <Quote className="w-4 h-4 text-primary mb-2" />
                       "{testimonial.text}"
                     </blockquote>
                     <footer className="text-xs text-muted-foreground">
                       <div className="font-semibold">{testimonial.author}</div>
                       <div>{testimonial.company}</div>
                       <div className="text-primary">{testimonial.project}</div>
                     </footer>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
           </div>
         </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 md:py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3 md:mb-4">Our Collaboration Process</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A seamless approach to working with interior designers and architects from concept to completion.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
              {workProcess.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">
                      {step.step}
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -z-10"></div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{step.description}</p>
                  <div className="flex items-center justify-center text-xs text-primary">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Partnership CTA */}
      <section className="py-12 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Partner with Interior Design Specialists
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
              We collaborate exclusively with interior designers, architects, and property developers 
              to deliver exceptional refurbishment services that exceed luxury standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Discretion Guaranteed</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Confidential project handling</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Design Collaboration</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Seamless integration support</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">Premium Standards</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Luxury project expertise</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button size="sm" className="bg-primary hover:bg-primary-glow md:h-12">
                Partner with Us
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
};

export default CaseStudies;