import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">Mainteniq</span>
            </div>
            <p className="text-sm text-gray-300">
              Professional HVAC and smart property solutions. Modern maintenance 
              company delivering reliable, efficient service for your comfort needs.
            </p>
            
            {/* Service Area */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-gray-200">Service Coverage</span>
              </div>
              <p className="text-xs text-gray-300">
                <strong>London & 120-Mile Radius</strong><br />
                Birmingham • Oxford • Cambridge<br />
                Brighton • Reading • Milton Keynes<br />
                Same-day emergency response
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-300 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li><Link to="/mvhr-maintenance" className="text-sm text-gray-300 hover:text-primary transition-colors">MVHR System Maintenance</Link></li>
              <li><Link to="/hiu-maintenance" className="text-sm text-gray-300 hover:text-primary transition-colors">HIU & CIU Maintenance & Repair</Link></li>
              <li><Link to="/fcu-maintenance" className="text-sm text-gray-300 hover:text-primary transition-colors">FCU Unit Maintenance</Link></li>
              <li><Link to="/bms" className="text-sm text-gray-300 hover:text-primary transition-colors">BMS & Smart Systems</Link></li>
              <li><Link to="/handyman" className="text-sm text-gray-300 hover:text-primary transition-colors">Handyman Services</Link></li>
              <li><Link to="/renovation-composer" className="text-sm text-gray-300 hover:text-primary transition-colors">Refurbishment & Renovation</Link></li>
              <li><Link to="/end-of-tenancy-cleaning" className="text-sm text-gray-300 hover:text-primary transition-colors">End of Tenancy Cleaning</Link></li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Legal & Policies</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-gray-300 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr-compliance" className="text-sm text-gray-300 hover:text-primary transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-300 hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © 2025 Mainteniq. All rights reserved. Professional HVAC & Smart Property Solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 (0) 189 55 28 226</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@mainteniq.co.uk</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
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