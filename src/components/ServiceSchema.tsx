import { useEffect } from 'react';

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
}

const ServiceSchema = ({ serviceType, description }: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "provider": { "@id": "https://www.mainteniq.co.uk/#organization" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Greater London" },
      "description": description
    };

    const id = 'service-schema';
    let script = document.getElementById(id) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [serviceType, description]);

  return null;
};

export default ServiceSchema;
