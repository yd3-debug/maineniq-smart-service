export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
  "name": "Mainteniq",
  "alternateName": "Mainteniq UK HVAC & Property Services",
  "description": "Professional HVAC maintenance and property services including boiler services, FCU/HIU/MVHR/CIU servicing, BMS installation, smart home automation, plumbing, electrical, handyman & end-of-tenancy cleaning across London and 120-mile radius. 24/7 emergency response, Gas Safe & NICEIC certified, 4.9 star rating.",
  "url": "https://www.mainteniq.co.uk",
  "logo": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
  "image": "https://www.mainteniq.co.uk/og-image-mainteniq.png",
  "telephone": "+44 783 456 2366",
  "email": "info@mainteniq.co.uk",
  "foundingDate": "2020",
  "dateModified": "2025-12-14",
  "slogan": "Preventing Breakdowns, Protecting Your Investment",
  "sameAs": [
    "https://www.linkedin.com/company/mainteniq",
    "https://www.facebook.com/mainteniq",
    "https://www.instagram.com/mainteniq",
    "https://twitter.com/mainteniq"
  ],
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
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "193121"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London",
      "addressCountry": "GB",
      "description": "Primary service area - all London boroughs"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Greater London",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "City of London",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "Westminster",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "Camden",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "Islington",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "Tower Hamlets",
      "addressCountry": "GB"
    },
    {
      "@type": "Place",
      "name": "Southwark",
      "addressCountry": "GB"
    },
    {
      "@type": "GeoCircle",
      "description": "Extended service area within 120 miles of Central London including Home Counties",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.5074",
        "longitude": "-0.1278"
      },
      "geoRadius": "193121"
    }
  ],
  "serviceType": [
    "HVAC Maintenance and Repair",
    "Boiler Installation, Repair and Servicing",
    "CP12 Gas Safety Certificates",
    "FCU (Fan Coil Unit) Service and Installation", 
    "HIU (Heat Interface Unit) Repair and Maintenance",
    "MVHR (Mechanical Ventilation Heat Recovery) Cleaning and Service",
    "CIU (Central Interface Unit) Maintenance and Calibration",
    "BMS (Building Management System) Installation and Configuration",
    "Professional Plumbing Services - Boiler Repair, Pipe Installation",
    "Certified Electrical Services - Wiring, Testing, Emergency Repairs", 
    "Handyman Services - Property Maintenance and Repairs",
    "Smart Home Installation - Automation, Security, Entertainment Systems",
    "End of Tenancy Cleaning - Deep Clean, Check-out Ready",
    "Emergency 24/7 HVAC Response",
    "Energy Efficiency Consulting",
    "Preventive Maintenance Programs",
    "Commercial HVAC Solutions",
    "Residential Property Services"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Gas Safe Registered",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Gas Safe Register"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "NICEIC Approved Contractor",
      "recognizedBy": {
        "@type": "Organization",
        "name": "NICEIC"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "F-Gas Certified",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Environment Agency"
      }
    }
  ],
  "paymentAccepted": [
    "Cash",
    "Credit Card", 
    "Bank Transfer",
    "PayPal",
    "Invoice (Commercial)",
    "Contactless Payment",
    "Apple Pay",
    "Google Pay"
  ],
  "currenciesAccepted": "GBP",
  "priceRange": "££",
  "openingHours": "Mo-Fr 08:00-18:00",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00", 
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "HVAC Maintenance",
    "Emergency Plumbing", 
    "Electrical Safety",
    "Smart Home Technology",
    "Property Maintenance",
    "Building Management Systems",
    "Energy Efficiency",
    "Preventive Maintenance"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Property Maintenance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Emergency HVAC Services",
          "description": "Round-the-clock emergency heating, ventilation, and air conditioning repairs across London and 120-mile radius",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Mainteniq"
          },
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  }
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "image": service.image || "https://www.mainteniq.co.uk/og-image-mainteniq.png",
  "serviceType": service.serviceType,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mainteniq",
    "url": "https://www.mainteniq.co.uk",
    "telephone": "+44 783 456 2366",
    "email": "info@mainteniq.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247"
    }
  },
  "areaServed": service.areaServed || [
    {
      "@type": "City",
      "name": "London",
      "addressCountry": "GB"
    },
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.5074",
        "longitude": "-0.1278"
      },
      "geoRadius": "193121"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC and Property Maintenance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name
        }
      }
    ]
  }
});

export const generatePlumberElectricianSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Plumber", "Electrician", "LocalBusiness"],
  "name": "Mainteniq - Professional Plumber & Electrician Services",
  "description": "Gas Safe registered plumbers and NICEIC certified electricians in London. Emergency repairs, boiler installation, rewiring, CP12 & EICR certificates. 24/7 emergency response.",
  "url": "https://www.mainteniq.co.uk/plumber-electrician",
  "image": "https://www.mainteniq.co.uk/Boiler.png",
  "telephone": "+44 783 456 2366",
  "email": "info@mainteniq.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "193121"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Gas Safe Registered"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NICEIC Approved Contractor"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
});

export const generateHandymanSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "name": "Mainteniq - Professional Handyman Services",
  "description": "Professional handyman services for landlords, Airbnb hosts & property managers in London. Electrical repairs, plumbing fixes, carpentry, decorating. Same-day emergency repairs available.",
  "url": "https://www.mainteniq.co.uk/handyman",
  "image": "https://www.mainteniq.co.uk/og-image-mainteniq.png",
  "telephone": "+44 783 456 2366",
  "email": "info@mainteniq.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "193121"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
});

export const generateSmartHomeSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Home Automation Installation",
  "description": "Professional smart home installation and integration in London. Control lighting, entertainment, security and energy monitoring from one app. SMETS2 smart meter integration.",
  "url": "https://www.mainteniq.co.uk/smart-home",
  "image": "https://www.mainteniq.co.uk/og-image-mainteniq.png",
  "serviceType": "Smart Home Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mainteniq",
    "url": "https://www.mainteniq.co.uk",
    "telephone": "+44 783 456 2366"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "193121"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
});

export const generateCleaningServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "Mainteniq - End of Tenancy Cleaning",
  "description": "Professional end of tenancy cleaning in London. Deposit-safe standards, inventory-ready results. 48h re-clean guarantee. Same-day availability for urgent move-outs.",
  "url": "https://www.mainteniq.co.uk/end-of-tenancy-cleaning",
  "image": "https://www.mainteniq.co.uk/og-image-mainteniq.png",
  "telephone": "+44 783 456 2366",
  "email": "info@mainteniq.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "geoRadius": "193121"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
});

export const generateMaintenanceContractSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Maintenance Contracts",
  "description": "Tailored maintenance contracts for landlords, property managers & commercial properties in the UK. Prevent 80% of breakdowns, 24/7 emergency response, fixed monthly costs.",
  "url": "https://www.mainteniq.co.uk/maintenance-contracts",
  "image": "https://www.mainteniq.co.uk/BOILER.png",
  "serviceType": "Property Maintenance Contracts",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Mainteniq",
    "url": "https://www.mainteniq.co.uk",
    "telephone": "+44 783 456 2366"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "offers": {
    "@type": "Offer",
    "name": "Custom Maintenance Contract",
    "priceRange": "££",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247"
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mainteniq",
  "url": "https://www.mainteniq.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.mainteniq.co.uk/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Mainteniq"
  },
  "author": reviews.map(review => ({
    "@type": "Person",
    "name": review.author
  })),
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length,
    "bestRating": "5"
  },
  "reviewBody": reviews.map(r => r.text).join(" ")
});
