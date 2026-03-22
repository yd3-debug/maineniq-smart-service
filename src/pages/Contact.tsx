import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema } from "@/utils/structuredData";
import { 
  Phone, 
  Clock,
  MessageCircle,
  Shield,
  Award,
  Star,
  Users,
  Zap,
  CheckCircle,
  PhoneCall,
  MapPin,
  ThumbsUp
} from "lucide-react";

// Import professional images
import heroImage from "@/assets/team-working.jpg";
const customerConsultation = "/HVAC_SYSTEM.png";
import professionalTeam from "@/assets/team-collaboration.jpg";
import satisfiedCustomer from "@/assets/satisfied-customer.jpg";
import modernEquipment from "@/assets/modern-equipment.jpg";
import hvacProfessional from "@/assets/hvac-professional.jpg";

const breadcrumbData = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.mainteniq.co.uk" },
  { name: "Contact", url: "https://www.mainteniq.co.uk/contact" }
]);

const Contact = () => {
  const handleWhatsAppClick = (isEmergency = false) => {
    const phoneNumber = "447834562366";
    const message = isEmergency 
      ? "🚨 EMERGENCY: I need urgent HVAC assistance. Please call me back immediately!"
      : "Hi! I'm interested in your HVAC services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified professionals with comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "10-Year Warranty",
      description: "Quality workmanship guarantee on all installations and major repairs"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent HVAC emergencies"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated 5 stars by our satisfied customers"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced technicians with over 15 years in the industry"
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick service within 2 hours for emergency calls"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 3:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Mainteniq | 24/7 HVAC & Property Services London"
        description="Contact Mainteniq for professional HVAC maintenance, plumbing, electrical, and property services in London. 24/7 emergency response. WhatsApp, phone, and email support."
        keywords="contact HVAC London, emergency plumber London, 24/7 HVAC service, property maintenance contact, WhatsApp HVAC support"
        canonicalUrl="https://www.mainteniq.co.uk/contact"
        breadcrumbData={breadcrumbData}
      />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-20 sm:pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-6 sm:px-8 md:px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-6 sm:space-y-6 md:space-y-8">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                UK's Leading HVAC
                <span className="block text-accent"> Maintenance Experts</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl opacity-95 leading-relaxed">
                Specialists in MVHR, HIU & CIU, FCU & BMS systems. Professional maintenance 
                and emergency repairs you can trust from certified experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  onClick={() => handleWhatsAppClick()}
                  className="bg-whatsapp hover:bg-whatsapp/90 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-elegant hover-scale"
                >
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button 
                  onClick={() => handleWhatsAppClick(true)}
                  variant="hero" 
                  className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Emergency Call
                </Button>
              </div>
            </div>

            {/* Right side - Quick contact card */}
            <div className="lg:flex lg:justify-end">
              <Card className="bg-white/95 backdrop-blur-sm shadow-elegant max-w-md">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-bold text-xl sm:text-2xl text-center mb-4 sm:mb-6">Get Instant Help</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Mobile WhatsApp</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">+44 783 456 2366</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Landline</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">+44 (0) 189 55 28 226</p>
                    </div>
                    <Button 
                      onClick={() => handleWhatsAppClick()}
                      className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-3"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start WhatsApp Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Consultation Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-20">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
                Expert HVAC Consultation & Support
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Get specialist advice from our certified HVAC maintenance experts. With over 15 years of experience 
                in MVHR, HIU & CIU, FCU & BMS systems, we provide professional solutions you can rely on.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card 
                  className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover-scale"
                  onClick={() => handleWhatsAppClick()}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-lg font-semibold text-primary mb-1">+44 783 456 2366</p>
                    <p className="text-sm text-muted-foreground">Instant chat & calls</p>
                  </CardContent>
                </Card>

                <Card 
                  className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover-scale"
                  onClick={() => handleWhatsAppClick()}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Landline</h3>
                    <p className="text-lg font-semibold text-primary mb-1">+44 (0) 189 55 28 226</p>
                    <p className="text-sm text-muted-foreground">Office support</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img 
                src={customerConsultation} 
                alt="Professional HVAC consultation"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Why Choose Us Section with Images */}
          <div className="mb-10 md:mb-20">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Why Choose Our Experts?</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading HVAC maintenance specialists with proven expertise in complex systems. 
                Our technical knowledge and commitment to quality make us the trusted choice.
              </p>
            </div>
            
            {/* Features with alternating layout */}
            <div className="space-y-10 md:space-y-20">
              {/* First row - Image left, content right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/Customer_Service.png"
                    alt="Professional HVAC team"
                    className="rounded-lg shadow-elegant w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
                </div>
                <div className="space-y-8">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">Certified Experts & Proven Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {whyChooseUs.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second row - Content left, image right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 lg:order-1">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">Advanced Equipment & Fast Response</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {whyChooseUs.slice(4, 6).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Customer testimonial */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img 
                          src={satisfiedCustomer} 
                          alt="Satisfied customer"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                          <p className="font-semibold">Sarah Johnson</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "Exceptional service! The team was professional, quick, and solved our heating issue in no time. 
                        Highly recommend Mainteniq for anyone needing HVAC services."
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative lg:order-2">
                  <img 
                    src="/Boiler.png" 
                    alt="Professional boiler maintenance equipment"
                    className="rounded-lg shadow-elegant w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Emergency Section with Enhanced Design */}
          <div className="space-y-12">
            {/* Emergency Section - Featured prominently */}
            <div className="relative">
              <div 
                className="bg-cover bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${hvacProfessional})` }}
              >
                <div className="bg-gradient-to-r from-primary/95 to-primary-glow/90 p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center text-white">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">24/7 Emergency Service</h3>
                      </div>
                      <p className="text-base md:text-xl opacity-95 leading-relaxed">
                        HVAC emergency? Don't suffer in discomfort! Our emergency response team 
                        is available 24/7 to get your system back up and running quickly.
                      </p>
                      <div className="flex items-center space-x-2 text-accent">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Average response time: Under 2 hours</span>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-right space-y-6">
                      <div className="space-y-2">
                        <p className="text-sm opacity-75">Emergency Hotline</p>
                        <p className="text-4xl font-bold text-accent">+44 783 456 2366</p>
                      </div>
                      <Button 
                        onClick={() => handleWhatsAppClick(true)}
                        className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-elegant hover-scale"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Emergency WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <Card className="shadow-elegant border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="flex items-center space-x-3 text-3xl">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-background border hover:border-primary/30 transition-colors">
                      <span className="font-semibold text-lg">{schedule.day}</span>
                      <span className="text-muted-foreground text-lg font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-whatsapp/10 to-whatsapp/5 rounded-lg border border-whatsapp/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6 text-whatsapp" />
                      <div>
                        <p className="font-semibold text-lg">Need help outside business hours?</p>
                        <p className="text-muted-foreground">WhatsApp us anytime for quick responses</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleWhatsAppClick()}
                      className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                    >
                      Chat Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;