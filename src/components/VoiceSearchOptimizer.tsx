import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface VoiceSearchOptimizerProps {
  faqs?: Array<{ question: string; answer: string }>;
  serviceName?: string;
}

const VoiceSearchOptimizer = ({ faqs, serviceName }: VoiceSearchOptimizerProps) => {
  const location = useLocation();

  useEffect(() => {
    // Voice search optimization through speakable content
    const addVoiceSearchMeta = () => {
      // Add speakable content meta tags
      const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "SpeakableSpecification",
        "xpath": [
          "/html/head/title",
          "//h1",
          "//h2[contains(@class, 'service-title')]",
          "//p[contains(@class, 'service-description')]"
        ],
        "cssSelector": [
          "h1",
          ".service-title",
          ".service-description",
          ".faq-answer"
        ]
      };

      // Add voice search optimized questions
      const voiceQueries = [
        `Who provides ${serviceName || 'HVAC maintenance'} near me?`,
        `Best ${serviceName || 'property maintenance'} company London`,
        `Emergency ${serviceName || 'heating repair'} London`,
        `${serviceName || 'HVAC'} maintenance cost London`,
        `How to fix ${serviceName || 'heating'} problems`,
        "Property maintenance services near me",
        "24 hour emergency HVAC repair",
        "Gas Safe registered engineers London"
      ];

      // Create question and answer pairs for voice search
      const voiceFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": `${serviceName || 'Property Maintenance'} Voice Search FAQ`,
        "mainEntity": [
          ...voiceQueries.map(query => ({
            "@type": "Question",
            "name": query,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Mainteniq provides professional ${serviceName?.toLowerCase() || 'property maintenance'} services across London and 120-mile radius. We offer 24/7 emergency response, certified engineers, and 4.9-star rated service. Contact us on +44 (0) 189 55 28 226 for immediate assistance.`,
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": "//p[contains(@class, 'voice-answer')]"
              }
            }
          })),
          ...(faqs || []).map(faq => ({
            "@type": "Question", 
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ".faq-answer"
              }
            }
          }))
        ]
      };

      // Add the schema
      let script = document.getElementById(`voice-search-schema-${location.pathname.replace(/\//g, '-')}`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = `voice-search-schema-${location.pathname.replace(/\//g, '-')}`;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(voiceFAQSchema);

      // Add conversational keywords meta tag
      const conversationalMeta = document.createElement('meta');
      conversationalMeta.name = 'voice-search-keywords';
      conversationalMeta.content = voiceQueries.join(', ');
      document.head.appendChild(conversationalMeta);

      return () => {
        const existingScript = document.getElementById(`voice-search-schema-${location.pathname.replace(/\//g, '-')}`);
        if (existingScript) document.head.removeChild(existingScript);
        if (conversationalMeta.parentNode) document.head.removeChild(conversationalMeta);
      };
    };

    return addVoiceSearchMeta();
  }, [faqs, serviceName, location.pathname]);

  return null;
};

export default VoiceSearchOptimizer;