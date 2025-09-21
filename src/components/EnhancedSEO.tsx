import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  structuredData?: any;
  faqData?: any;
  breadcrumbData?: any;
}

const EnhancedSEO = ({ 
  title, 
  description, 
  keywords, 
  structuredData, 
  faqData, 
  breadcrumbData 
}: EnhancedSEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Set title and meta tags
    document.title = title;
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!metaDescription.parentNode) document.head.appendChild(metaDescription);

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    if (!metaKeywords.parentNode) document.head.appendChild(metaKeywords);

    // Canonical URL
    const canonicalUrl = `https://www.mainteniq.co.uk${location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.mainteniq.co.uk/og-image-maineniq.png' },
      { property: 'og:site_name', content: 'Maineniq - UK Premier Property Services' },
      { property: 'og:locale', content: 'en_GB' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) || document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      if (!meta.parentNode) document.head.appendChild(meta);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://www.mainteniq.co.uk/og-image-maineniq.png' },
      { name: 'twitter:site', content: '@maineniq' },
      { name: 'twitter:creator', content: '@maineniq' }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) || document.createElement('meta');
      meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      if (!meta.parentNode) document.head.appendChild(meta);
    });

    // AI-optimized meta tags for better search visibility
    const aiTags = [
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'slurp', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'rating', content: '4.9' },
      { name: 'price_range', content: '££' },
      { name: 'availability', content: '24/7' },
      { name: 'coverage_area', content: 'United Kingdom' },
      { name: 'emergency_service', content: 'Available 24/7' },
      { name: 'certifications', content: 'Gas Safe, NICEIC, F-Gas Certified' },
      { name: 'business_type', content: 'Property Maintenance Services' },
      { name: 'service_areas', content: 'London, Manchester, Birmingham, Leeds, Liverpool, Bristol, Newcastle, Sheffield, Nottingham, Bradford, Edinburgh, Glasgow, Cardiff' }
    ];

    aiTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) || document.createElement('meta');
      meta.setAttribute('name', tag.name);
      meta.setAttribute('content', tag.content);
      if (!meta.parentNode) document.head.appendChild(meta);
    });

    // Add structured data
    const addStructuredData = (data: any, id: string) => {
      if (!data) return;
      
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    if (structuredData) addStructuredData(structuredData, `structured-data-${location.pathname.replace(/\//g, '-')}`);
    if (faqData) addStructuredData(faqData, `faq-data-${location.pathname.replace(/\//g, '-')}`);
    if (breadcrumbData) addStructuredData(breadcrumbData, `breadcrumb-data-${location.pathname.replace(/\//g, '-')}`);

  }, [title, description, keywords, structuredData, faqData, breadcrumbData, location.pathname]);

  return null;
};

export default EnhancedSEO;