import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">Mainteniq</span>
            </div>
            <p className="text-sm text-gray-300">
              Professional HVAC and smart property solutions. Modern maintenance 
              company delivering reliable, efficient service for your comfort needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-300 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">HVAC Installation</li>
              <li className="text-sm text-gray-300">System Maintenance</li>
              <li className="text-sm text-gray-300">Emergency Repairs</li>
              <li className="text-sm text-gray-300">Smart Thermostats</li>
              <li className="text-sm text-gray-300">Energy Audits</li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal & Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-gray-300 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm text-gray-300 hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr-compliance" className="text-sm text-gray-300 hover:text-primary transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2025 Mainteniq. All rights reserved. Professional HVAC & Smart Property Solutions.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 (0) 189 55 28 226</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@mainteniq.co.uk</span>
              </div>
              <div className="flex items-center space-x-2">
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