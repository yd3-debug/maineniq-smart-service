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
      <div className="bg-destructive/90 py-2 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">24/7 Emergency Service</p>
                <p className="text-xs sm:text-sm text-white/80">Response within 4 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 border border-white/30 text-xs sm:text-sm"
              >
                <a href={`tel:${CONTACT.phones.emergencyTel}`}>
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {CONTACT.phones.emergency}
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 border border-white/30 text-xs sm:text-sm"
                onClick={() => handleQuoteRequest("Emergency - Urgent assistance needed")}
              >
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-3 md:space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img 
                src="/LOGOPETRU2.png" 
                alt="Mainteniq Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-300">
              Professional HVAC maintenance and property services. Your single point of contact 
              for all property maintenance needs.
            </p>
            
            {/* Testimonial Snippet - hidden on mobile */}
            <div className="hidden sm:block bg-primary/20 border border-primary/30 rounded-lg p-4">
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

            {/* Compact mobile rating */}
            <div className="sm:hidden flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-energy-gold text-energy-gold" />
              ))}
              <span className="text-xs text-gray-300 ml-1">4.9/5 — 200+ reviews</span>
            </div>
            
            {/* Service Area - hidden on mobile */}
            <div className="hidden sm:block bg-primary/10 border border-primary/20 rounded-lg p-3">
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
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-sm sm:text-lg">Top Services</h3>
            <ul className="flex flex-col items-center md:items-start space-y-1 sm:space-y-2">
              {topServices.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 hidden sm:block" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-sm sm:text-lg">More Services</h3>
            <ul className="flex flex-col items-center md:items-start space-y-1 sm:space-y-2">
              {allServices.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-sm sm:text-lg">Company</h3>
            <ul className="flex flex-col items-center md:items-start space-y-1 sm:space-y-2">
              <li><Link to="/maintenance-contracts" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Contracts</Link></li>
              <li><Link to="/case-studies" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-sm sm:text-lg">Legal</h3>
            <ul className="flex flex-col items-center md:items-start space-y-1 sm:space-y-2">
              <li><Link to="/privacy-policy" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 md:mt-8 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div>
              <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
                © 2026 Mainteniq. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left mt-1">
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
            <div className="flex flex-row items-center justify-center md:justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300">
              <a href={`tel:${CONTACT.phones.landlineTel}`} className="flex items-center space-x-1 sm:space-x-2 hover:text-primary transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span>{CONTACT.phones.landline}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center space-x-1 sm:space-x-2 hover:text-primary transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
