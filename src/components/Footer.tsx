import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageSquare, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import { handleQuoteRequest } from "@/utils/quote";

const Footer = () => {
  const topServices = [
    { name: "HVAC Maintenance", href: "/hvac-maintenance" },
    { name: "FCU Maintenance", href: "/fcu-maintenance" },
    { name: "HIU & CIU Service", href: "/hiu-maintenance" },
    { name: "Boiler Services", href: "/boiler-services" },
    { name: "End of Tenancy", href: "/end-of-tenancy-cleaning" },
  ];

  const allServices = [
    { name: "MVHR Maintenance", href: "/mvhr-maintenance" },
    { name: "BMS", href: "/bms" },
    { name: "Smart Home", href: "/smart-home" },
    { name: "Plumber & Electrician", href: "/plumber-electrician" },
    { name: "Handyman", href: "/handyman" },
    { name: "Renovation", href: "/renovation-composer" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Emergency Contact Banner */}
      <div className="bg-destructive/90 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">24/7 Emergency Service</p>
                <p className="text-sm text-white/80">Response within 4 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                className="text-white hover:bg-white/20 border border-white/30"
              >
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {CONTACT.phones.emergency}
                </a>
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 border border-white/30"
                onClick={() => handleQuoteRequest("Emergency - Urgent assistance needed")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img 
                src="/LOGOPETRU2.png" 
                alt="Mainteniq Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300">
              Professional HVAC maintenance and property services. Your single point of contact 
              for all property maintenance needs — HVAC, plumbing, electrical, and more.
            </p>
            
            {/* Testimonial Snippet */}
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                ))}
                <span className="text-sm text-gray-300 ml-2">4.9/5</span>
              </div>
              <p className="text-sm text-gray-300 italic">
                "Excellent service from start to finish. Professional team, fair pricing, 
                and great communication throughout."
              </p>
              <p className="text-xs text-gray-400 mt-2">— Property Manager, London</p>
            </div>
            
            {/* Service Area */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-gray-200">Service Coverage</span>
              </div>
              <p className="text-xs text-gray-300">
                <strong>London & 120-Mile Radius</strong><br />
                Birmingham • Oxford • Cambridge • Brighton • Reading • Milton Keynes<br />
                Same-day emergency response available
              </p>
            </div>
          </div>

          {/* Top Services */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Top Services</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              {topServices.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">More Services</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              {allServices.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-sm text-gray-300 hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li><Link to="/maintenance-contracts" className="text-sm text-gray-300 hover:text-primary transition-colors">Maintenance Contracts</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-300 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
            
            <h3 className="font-semibold text-lg pt-4">Legal</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-gray-300 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-sm text-gray-300 text-center md:text-left">
                © 2026 Mainteniq. All rights reserved. Professional HVAC Maintenance & Property Services.
              </p>
              <p className="text-sm text-gray-300 text-center md:text-left mt-1">
                Built by{" "}
                <a 
                  href="https://www.yektad.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-primary hover:underline transition-colors"
                >
                  YD
                </a>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <a href={`tel:${CONTACT.phones.landlineTel}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span>{CONTACT.phones.landline}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-white" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="w-4 h-4 text-white" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
