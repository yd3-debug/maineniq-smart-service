export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
  "name": "Maineniq",
  "alternateName": "Mainteniq UK Property Services",
  "description": "🏆 Award-winning professional HVAC maintenance, FCU/HIU/MVHR servicing, BMS installation, smart home automation, plumbing, electrical, handyman & end-of-tenancy cleaning services across the UK. 24/7 emergency response, certified engineers, 4.9⭐ rating.",
  "url": "https://www.mainteniq.co.uk",
  "logo": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
  "image": "https://www.mainteniq.co.uk/og-image-maineniq.png",
  "telephone": "+44 (0) 189 55 28 226",
  "email": "info@mainteniq.co.uk",
  "foundingDate": "2020",
  "slogan": "Preventing Breakdowns, Protecting Your Investment",
  "sameAs": [
    "https://www.linkedin.com/company/maineniq",
    "https://www.facebook.com/maineniq",
    "https://www.instagram.com/maineniq",
    "https://twitter.com/maineniq"
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
    "FCU (Fan Coil Unit) Service and Installation", 
    "HIU (Heat Interface Unit) Repair and Maintenance",
    "MVHR (Mechanical Ventilation Heat Recovery) Cleaning and Service",
    "CIU (Cooling Interface Unit) Maintenance",
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
            "name": "Maineniq"
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
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "serviceType": service.serviceType,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Maineniq",
    "url": "https://www.mainteniq.co.uk"
  },
  "areaServed": service.areaServed || [
    {
      "@type": "Country",
      "name": "United Kingdom"
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
  "name": "Maineniq",
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
    "name": "Maineniq"
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