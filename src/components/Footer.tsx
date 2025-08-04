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
              <span className="font-heading font-bold text-xl">Maineniq</span>
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
              <li><Link to="/" className="text-sm text-gray-300 hover:text-primary transition-colors">Home</Link></li>
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">info@maineniq.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">123 Main St, City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Maineniq. All rights reserved. Professional HVAC & Smart Property Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;