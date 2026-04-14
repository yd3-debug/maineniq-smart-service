import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  "": "Home",
  "services": "Services",
  "hvac-maintenance": "HVAC Maintenance",
  "fcu-maintenance": "FCU Maintenance",
  "hiu-maintenance": "HIU & CIU Service",
  "ciu-maintenance": "CIU Maintenance",
  "mvhr-maintenance": "MVHR Maintenance",
  "boiler-services": "Boiler Services",
  "bms": "BMS",
  "smart-home": "Smart Home",
  "plumber-electrician": "Plumber & Electrician",
  "handyman": "Handyman",
  "air-conditioning-london": "Air Conditioning London",
  "renovation-composer": "Renovation",
  "maintenance-contracts": "Maintenance Contracts",
  "about": "About",
  "contact": "Contact",
  "faq": "FAQ",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "cookie-policy": "Cookie Policy",
  "gdpr-compliance": "GDPR Compliance",
};

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if items not provided
  const breadcrumbs: BreadcrumbItem[] = items || (() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      crumbs.push({ label, href: currentPath });
    });
    
    // Remove href from last item (current page)
    if (crumbs.length > 1) {
      crumbs[crumbs.length - 1].href = undefined;
    }
    
    return crumbs;
  })();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-3 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" />
            )}
            {crumb.href ? (
              <Link 
                to={crumb.href} 
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-3.5 h-3.5" />}
                {crumb.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
