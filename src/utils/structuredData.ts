export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maineniq",
  "description": "Professional HVAC maintenance, plumbing, electrical, handyman, BMS, smart home & end-of-tenancy cleaning services across the UK",
  "url": "https://www.mainteniq.co.uk",
  "logo": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
  "image": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
  "telephone": "+44 (0) 189 55 28 226",
  "email": "info@mainteniq.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressRegion": "England"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "-0.1278"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "City",
      "name": "London"
    }
  ],
  "serviceType": [
    "HVAC Maintenance",
    "FCU Service",
    "HIU Repair", 
    "MVHR Cleaning",
    "CIU Maintenance",
    "Plumbing Services",
    "Electrical Services",
    "Handyman Services",
    "BMS Installation",
    "Smart Home Installation",
    "End of Tenancy Cleaning"
  ],
  "openingHours": "Mo-Fr 08:00-18:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "sameAs": [
    "https://www.linkedin.com/company/maineniq"
  ]
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