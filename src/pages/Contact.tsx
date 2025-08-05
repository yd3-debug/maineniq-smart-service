import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  PhoneCall
} from "lucide-react";

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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-6xl font-bold mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-2xl max-w-3xl mx-auto mb-8 opacity-95">
            Ready for expert HVAC solutions? Contact us now for immediate assistance 
            and discover why thousands trust Mainteniq with their comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => handleWhatsAppClick()}
              className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 text-lg font-semibold shadow-elegant"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button 
              onClick={() => handleWhatsAppClick(true)}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Contact Mainteniq</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant support through WhatsApp or call us directly for immediate assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {/* Mobile Number */}
            <Card 
              className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => handleWhatsAppClick()}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2">Mobile WhatsApp</h3>
                <p className="text-3xl font-bold text-primary mb-2">+44 783 456 2366</p>
                <p className="text-muted-foreground mb-4">Instant messaging & calls</p>
                <Button className="bg-whatsapp hover:bg-whatsapp/90 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Landline Number */}
            <Card 
              className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => handleWhatsAppClick()}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2">Landline</h3>
                <p className="text-3xl font-bold text-primary mb-2">020 7946 0958</p>
                <p className="text-muted-foreground mb-4">Office hours support</p>
                <Button className="bg-primary hover:bg-primary-glow">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">Why Choose Mainteniq?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover what makes us the #1 choice for HVAC services in the UK
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Hours & Emergency Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Hours */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Clock className="w-6 h-6" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-semibold text-lg">{schedule.day}</span>
                      <span className="text-muted-foreground text-lg">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-primary to-primary-glow text-white shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-3">24/7 Emergency Service</h3>
                <p className="mb-6 opacity-90 text-lg">HVAC emergency? We're here to help!</p>
                <div className="space-y-4">
                  <p className="text-3xl font-bold mb-4">+44 783 456 2366</p>
                  <Button 
                    onClick={() => handleWhatsAppClick(true)}
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Emergency WhatsApp
                  </Button>
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