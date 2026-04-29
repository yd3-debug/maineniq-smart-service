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

      // Add conversational keywords meta tag for voice search
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

      const conversationalMeta = document.createElement('meta');
      conversationalMeta.name = 'voice-search-keywords';
      conversationalMeta.content = voiceQueries.join(', ');
      document.head.appendChild(conversationalMeta);

      return () => {
        if (conversationalMeta.parentNode) document.head.removeChild(conversationalMeta);
      };
    };

    return addVoiceSearchMeta();
  }, [faqs, serviceName, location.pathname]);

  return null;
};

export default VoiceSearchOptimizer;