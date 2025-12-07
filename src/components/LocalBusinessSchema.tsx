import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LocalBusinessSchemaProps {
  businessType?: string;
  serviceName?: string;
  serviceDescription?: string;
}

const LocalBusinessSchema = ({ 
  businessType = "Property Maintenance", 
  serviceName,
  serviceDescription 
}: LocalBusinessSchemaProps) => {
  const location = useLocation();

  useEffect(() => {
    // Enhanced local business schema for better local SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
      "name": "Mainteniq",
      "description": `Premier UK ${businessType.toLowerCase()} services. ${serviceDescription || 'Professional property maintenance solutions across London and 120-mile radius.'}`,
      "url": `https://www.mainteniq.co.uk${location.pathname}`,
      "telephone": "+44 20 7946 0958",
      "email": "info@mainteniq.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Street",
        "addressLocality": "London",
        "addressRegion": "Greater London", 
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5074,
        "longitude": -0.1278
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "geoRadius": "193121"
      },
      "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00, Su 10:00-16:00",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": businessType,
        "itemListElement": serviceName ? [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mainteniq"
            }
          }
        }] : []
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "247",
        "bestRating": "5"
      },
      "priceRange": "££",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "hasCredential": [
        "Gas Safe Registered",
        "NICEIC Approved Contractor", 
        "F-Gas Certified"
      ],
      "makesOffer": {
        "@type": "Offer",
        "description": `Professional ${businessType.toLowerCase()} services with 24/7 emergency support`,
        "availability": "https://schema.org/InStock",
        "priceCurrency": "GBP",
        "areaServed": "United Kingdom"
      }
    };

    // Add or update the schema
    let script = document.getElementById(`local-business-schema-${location.pathname.replace(/\//g, '-')}`) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = `local-business-schema-${location.pathname.replace(/\//g, '-')}`;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(localBusinessSchema);

    return () => {
      const existingScript = document.getElementById(`local-business-schema-${location.pathname.replace(/\//g, '-')}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [businessType, serviceName, serviceDescription, location.pathname]);

  return null;
};

export default LocalBusinessSchema;