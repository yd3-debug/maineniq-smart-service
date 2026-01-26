import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";
import { CONTACT } from "@/config/contact";

const Navigation = () => {
  console.log('Navigation.tsx: Navigation component rendering');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  console.log('Navigation.tsx: Current location:', location.pathname);

  // Routes that have light backgrounds and need dark header styling
  const lightBackgroundRoutes = ['/why-professional-hvac', '/services', '/about', '/contact', '/case-studies', '/hvac-maintenance', '/fcu-maintenance', '/hiu-maintenance', '/ciu-maintenance', '/mvhr-maintenance', '/end-of-tenancy-cleaning', '/handyman', '/plumber-electrician', '/smart-home', '/bms', '/renovation-composer', '/privacy-policy', '/terms-of-service', '/cookie-policy', '/gdpr-compliance', '/maintenance-contracts', '/boiler-services'];
  const hasLightBackground = lightBackgroundRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Maintenance Contracts", href: "/maintenance-contracts" },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { category: "Climate Control", items: [
          { name: "HVAC Maintenance", href: "/hvac-maintenance" },
          { name: "Boiler Services", href: "/boiler-services" },
          { name: "FCU Maintenance", href: "/fcu-maintenance" },
          { name: "HIU/CIU Service", href: "/hiu-maintenance" },
          { name: "MVHR Maintenance", href: "/mvhr-maintenance" },
          { name: "BMS", href: "/bms" },
        ]},
        { category: "Property Services", items: [
          { name: "Smart Home", href: "/smart-home" },
          { name: "Plumber & Electrician", href: "/plumber-electrician" },
          { name: "Handyman", href: "/handyman" },
          { name: "Renovation", href: "/renovation-composer" },
          { name: "End of Tenancy", href: "/end-of-tenancy-cleaning" },
        ]}
      ]
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const isSubmenuActive = (submenu: any[]) => {
    return submenu.some(group => 
      group.items?.some((item: any) => isActive(item.href)) || isActive(group.href)
    );
  };

  const getAllSubmenuItems = (submenu: any[]) => {
    return submenu.flatMap(group => group.items || [group]);
  };

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scrolling and add blur effect when menu is open
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  return (
    <>
      {/* Spacer to prevent content from going behind fixed header */}
      <div className="h-20" />
      
      <nav className={`fixed top-0 left-0 right-0 w-full z-60 transition-all duration-300 ${
        isScrolled || hasLightBackground
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/LOGOPETRU2.png" 
                alt="Mainteniq - Professional HVAC & Property Services" 
                className="h-16 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.submenu ? (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button
                      className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-1 ${
                        isSubmenuActive(item.submenu)
                          ? (isScrolled || hasLightBackground)
                            ? "text-primary bg-primary/10" 
                            : "text-primary bg-white/20 shadow-sm"
                          : (isScrolled || hasLightBackground)
                            ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                            : "text-white hover:text-white hover:bg-white/20 drop-shadow-sm"
                      } ${(!isScrolled && !hasLightBackground) ? 'text-shadow-sm' : ''}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu with Categories */}
                    {openSubmenu === item.name && (
                      <div className="absolute top-full left-0 w-72 bg-background border border-border rounded-lg shadow-lg z-50 p-2">
                        {item.submenu.map((group, groupIndex) => (
                          <div key={group.category} className={groupIndex > 0 ? "mt-2 pt-2 border-t border-border/50" : ""}>
                            <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {group.category}
                            </div>
                            {group.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className={`block px-3 py-2 text-sm rounded-md hover:bg-primary/5 transition-colors ${
                                  isActive(subItem.href) ? "text-primary font-medium bg-primary/10" : "text-muted-foreground hover:text-primary"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                      isActive(item.href)
                        ? (isScrolled || hasLightBackground)
                          ? "text-primary bg-primary/10" 
                          : "text-primary bg-white/20 shadow-sm"
                        : (isScrolled || hasLightBackground)
                          ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                          : "text-white hover:text-white hover:bg-white/20 drop-shadow-sm"
                    } ${(!isScrolled && !hasLightBackground) ? 'text-shadow-sm' : ''}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button 
                size="sm" 
                variant="accent"
                className="font-semibold shadow-md"
                onClick={() => handleQuoteRequest("property services")}
                aria-label="Get a quote for property services"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
              <Button 
                size="sm" 
                variant={(isScrolled || hasLightBackground) ? "destructive" : "hero"} 
                className={`${(!isScrolled && !hasLightBackground) ? "bg-red-600/90 text-white border-red-400/40 hover:bg-red-500/90 shadow-sm backdrop-blur-sm animate-pulse-glow" : "animate-pulse-glow"} font-semibold`}
                onClick={() => window.open(`tel:${CONTACT.phones.emergencyTel}`, "_self")}
                aria-label="Call for emergency HVAC service"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency
              </Button>
            </div>

          {/* Mobile menu button with enhanced animation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`transition-all duration-300 ${
                (!isScrolled && !hasLightBackground) ? "text-white hover:bg-white/20 drop-shadow-sm" : ""
              } ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <div className="relative">
                <Menu 
                  size={20} 
                  className={`transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Backdrop */}
        {/* Backdrop overlay with blur effect */}
        <div 
          className={`fixed top-20 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 md:hidden z-40 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile menu panel */}
        <div 
          className={`fixed top-20 left-0 right-0 bg-background border-b border-border shadow-2xl transition-all duration-300 ease-out md:hidden z-50 ${
            isOpen 
              ? 'translate-y-0 opacity-100 visible' 
              : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-8">
              {navItems.map((item, index) => (
                item.submenu ? (
                  <div key={item.name}>
                    <div 
                      className={`font-medium text-lg transition-all duration-300 transform hover:translate-x-2 cursor-pointer ${
                        isSubmenuActive(item.submenu)
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary"
                      } ${
                        isOpen ? 'animate-slide-in-right' : ''
                      }`}
                      style={{ 
                        animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                        animationFillMode: 'both'
                      }}
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                    >
                      <div className="flex items-center gap-2">
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    {openSubmenu === item.name && (
                      <div className="ml-4 mt-3 space-y-3">
                        {item.submenu.map((group) => (
                          <div key={group.category}>
                            <div className="text-sm font-bold text-primary uppercase tracking-wider pb-2 mb-3 border-b border-primary/30 first:mt-0 mt-4">
                              {group.category}
                            </div>
                            <div className="space-y-1">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`block text-sm transition-all duration-300 transform hover:translate-x-2 py-1 ${
                                    isActive(subItem.href)
                                      ? "text-primary font-medium"
                                      : "text-muted-foreground hover:text-primary"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium text-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    } ${
                      isOpen ? 'animate-slide-in-right' : ''
                    }`}
                    style={{ 
                      animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                      animationFillMode: 'both'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className={`pt-4 border-t border-border/30 ${
                isOpen ? 'animate-fade-in' : ''
              }`}
                style={{ 
                  animationDelay: isOpen ? `${navItems.length * 50 + 100}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <Button 
                  size="sm" 
                  variant="destructive" 
                  className="w-full text-lg py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow font-semibold"
                  onClick={() => {
                    window.open(`tel:${CONTACT.phones.emergencyTel}`, "_self");
                    setIsOpen(false);
                  }}
                  aria-label="Call for emergency HVAC service"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Call-Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navigation;