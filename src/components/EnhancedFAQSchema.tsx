import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
}

interface EnhancedFAQSchemaProps {
  faqs: FAQ[];
  pageTitle?: string;
}

const EnhancedFAQSchema = ({ faqs, pageTitle }: EnhancedFAQSchemaProps) => {
  const location = useLocation();

  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Add the FAQ schema
    let script = document.getElementById(`faq-schema-${location.pathname.replace(/\//g, '-')}`) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = `faq-schema-${location.pathname.replace(/\//g, '-')}`;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.getElementById(`faq-schema-${location.pathname.replace(/\//g, '-')}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs, pageTitle, location.pathname]);

  return null;
};

export default EnhancedFAQSchema;