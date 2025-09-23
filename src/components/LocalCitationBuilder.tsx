import { useEffect } from 'react';

const LocalCitationBuilder = () => {
  useEffect(() => {
    // Build comprehensive local business citations
    const businessData = {
      name: "Maineniq",
      address: "123 Business Street, London, SW1A 1AA, UK",
      phone: "+44 (0) 189 55 28 226",
      email: "info@mainteniq.co.uk",
      website: "https://www.mainteniq.co.uk",
      categories: [
        "HVAC Contractors",
        "Plumbing Services", 
        "Electrical Contractors",
        "Property Maintenance",
        "Smart Home Installation",
        "Building Management Systems",
        "Emergency Repair Services"
      ],
      serviceAreas: [
        "London", "Birmingham", "Manchester", "Leeds", "Liverpool", 
        "Bristol", "Newcastle", "Sheffield", "Nottingham", "Bradford"
      ],
      certifications: [
        "Gas Safe Registered",
        "NICEIC Approved Contractor",
        "F-Gas Certified"
      ]
    };

    // Create comprehensive NAP (Name, Address, Phone) schema
    const napSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessData.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Street",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      },
      "telephone": businessData.phone,
      "email": businessData.email,
      "url": businessData.website,
      "additionalProperty": businessData.categories.map(category => ({
        "@type": "PropertyValue",
        "name": "business_category",
        "value": category
      })),
      "hasCredential": businessData.certifications.map(cert => ({
        "@type": "EducationalOccupationalCredential",
        "name": cert
      })),
      "areaServed": businessData.serviceAreas.map(area => ({
        "@type": "City",
        "name": area,
        "addressCountry": "GB"
      }))
    };

    // Add structured data for local citations
    let script = document.getElementById('local-citation-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-citation-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(napSchema);

    // Add local business directory meta tags
    const directoryMetas = [
      { name: 'business-name', content: businessData.name },
      { name: 'business-phone', content: businessData.phone },
      { name: 'business-email', content: businessData.email },
      { name: 'business-address', content: businessData.address },
      { name: 'business-categories', content: businessData.categories.join(', ') },
      { name: 'service-areas', content: businessData.serviceAreas.join(', ') },
      { name: 'certifications', content: businessData.certifications.join(', ') },
      { name: 'emergency-service', content: '24/7 Available' },
      { name: 'payment-methods', content: 'Cash, Card, Bank Transfer, PayPal' },
      { name: 'service-radius', content: '120 miles from London' }
    ];

    directoryMetas.forEach(meta => {
      const metaElement = document.createElement('meta');
      metaElement.name = meta.name;
      metaElement.content = meta.content;
      document.head.appendChild(metaElement);
    });

    return () => {
      const existingScript = document.getElementById('local-citation-schema');
      if (existingScript) document.head.removeChild(existingScript);
      
      directoryMetas.forEach(meta => {
        const existingMeta = document.querySelector(`meta[name="${meta.name}"]`);
        if (existingMeta) document.head.removeChild(existingMeta);
      });
    };
  }, []);

  return null;
};

export default LocalCitationBuilder;