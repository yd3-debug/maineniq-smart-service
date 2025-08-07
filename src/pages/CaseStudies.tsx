import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
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
  MessageSquare
} from "lucide-react";
import heroImage from "@/assets/embassy-gardens-hero.jpg";
import { AnimatedCounter } from "@/components/AnimatedChart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TrustStrip from "@/components/TrustStrip";

  const CaseStudies = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    // SEO: title, meta description, canonical
    useEffect(() => {
      document.title = "Case Studies: Premium Refurbishment | Mainteniq";
      const description =
        "Explore premium refurbishment case studies in London. Confidential portfolio for designers and architects.";
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

    const projectFilters = ["All", "Full Renovation", "Bathroom", "Kitchen", "Heritage", "Maintenance"];

    const countFor = (filter: string) =>
      filter === "All"
        ? portfolioProjects.length
        : portfolioProjects.filter((p) => p.projectType.includes(filter)).length;

    const workProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meeting with design team to understand project vision and requirements",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Detailed property survey and technical feasibility analysis",
      duration: "3-5 days"
    },
    {
      step: 3,
      title: "Detailed Proposal",
      description: "Comprehensive project plan with timelines and specifications",
      duration: "5-7 days"
    },
    {
      step: 4,
      title: "Project Execution",
      description: "Professional implementation with daily progress updates",
      duration: "2-8 weeks"
    },
    {
      step: 5,
      title: "Quality Assurance",
      description: "Final inspection and handover with guarantees",
      duration: "1-2 days"
    }
  ];

  const testimonials = [
    {
      text: "Exceptional craftsmanship and attention to detail. The team transformed our client's vision into reality perfectly.",
      author: "Sarah Mitchell",
      company: "Mitchell & Associates Interior Design",
      project: "Mayfair Luxury Apartment",
      rating: 5
    },
    {
      text: "Professional, reliable, and discreet. Their understanding of high-end residential work is unmatched.",
      author: "James Richardson",
      company: "Richardson Architecture",
      project: "Chelsea Townhouse",
      rating: 5
    },
    {
      text: "The quality of workmanship exceeded our expectations. Every detail was executed to perfection.",
      author: "Emma Clarke",
      company: "Clarke Design Studio",
      project: "Kensington Penthouse",
      rating: 5
    }
  ];

  const companyStats = [
    { label: "Projects Completed", value: "150+", icon: Building2 },
    { label: "Design Partners", value: "25+", icon: Users },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Years Experience", value: "12+", icon: Award }
  ];
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
      image: "/src/assets/renovation-comparison.jpg",
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6 md:mb-8">
                <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 text-white tracking-tight leading-none">
                  Premium Refurbishment
                  <span className="block font-bold text-luxury-gold">
                    Case Studies Portfolio
                  </span>
                </h1>
                <div className="w-16 md:w-24 h-0.5 bg-primary mx-auto mb-6 md:mb-8"></div>
              </div>
              <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-white/90 mb-10 md:mb-16 leading-relaxed font-light">
                Exclusive collaboration with interior designers and architects on luxury developments. 
                Delivering exceptional craftsmanship for London's most prestigious residential properties.
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
            <h2 className="font-heading text-2xl md:text-4xl font-light mb-3 md:mb-4">
              Project
              <span className="font-bold text-primary"> Portfolio</span>
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 font-light max-w-xl mx-auto leading-relaxed">
              Select projects showcasing our premium refurbishment capabilities
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {portfolioProjects
              .filter(project => selectedFilter === "All" || project.projectType.includes(selectedFilter))
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
                    <Badge className="bg-primary text-primary-foreground">
                      <AnimatedCounter 
                        value={parseFloat(project.projectValue.replace(/[£K+]/g, ''))}
                        prefix="£"
                        suffix="K+"
                        duration={1200}
                      />
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
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
                                        <Building2 className="w-4 h-4 text-primary" />
                                        <span>{project.projectType}</span>
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
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" className="flex-1 rounded-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="sm" className="bg-primary hover:bg-primary-glow md:h-12">
                Partner with Us
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
              </Button>
              <Button size="sm" variant="outline" className="md:h-12">
                Request Portfolio Access
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
};

export default CaseStudies;