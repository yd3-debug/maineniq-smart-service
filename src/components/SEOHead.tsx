import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: any;
  breadcrumbData?: any;
  faqData?: any;
  serviceData?: any;
}

const SEOHead = ({ 
  title = "Maineniq - #1 Professional HVAC, Smart Home & Property Maintenance Services UK | Emergency 24/7",
  description = "⭐ 4.9/5 Rating | Expert HVAC maintenance (FCU, HIU, MVHR, CIU), BMS installation, plumbing, electrical, handyman, smart home automation & end-of-tenancy cleaning across UK. Prevent costly breakdowns, reduce energy bills up to 30%, extend equipment life 10+ years. 24/7 emergency response, certified engineers, transparent pricing. Book instant quote!",
  ogImage = "/og-image-maineniq.png",
  ogType = "website",
  keywords = "HVAC maintenance UK, FCU service London, HIU repair Manchester, MVHR cleaning Birmingham, CIU maintenance Leeds, professional plumbing services, certified electrical work, handyman services, BMS building management systems, smart home installation, home automation UK, end of tenancy cleaning, property maintenance, energy efficiency, emergency HVAC repair, commercial HVAC, residential heating, ventilation systems, air conditioning service, heating engineer, certified technicians, preventive maintenance, equipment servicing",
  canonicalUrl,
  structuredData,
  breadcrumbData,
  faqData,
  serviceData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', `${window.location.origin}${ogImage}`);
    }
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', `${window.location.origin}${ogImage}`);
    }
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
    
    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl || window.location.href);
    }
    
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
    
    // Add various structured data types
    if (structuredData) addStructuredData(structuredData, 'structured-data-main');
    if (breadcrumbData) addStructuredData(breadcrumbData, 'structured-data-breadcrumb');
    if (faqData) addStructuredData(faqData, 'structured-data-faq');
    if (serviceData) addStructuredData(serviceData, 'structured-data-service');
    
    // Add AI-specific meta tags for better crawlability
    const addAIMetaTags = () => {
      const aiTags = [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Maineniq - Professional Property Services' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'article:author', content: 'Maineniq Technical Team' },
        { name: 'twitter:site', content: '@maineniq' },
        { name: 'twitter:creator', content: '@maineniq' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'business:contact_data:locality', content: 'London' },
        { name: 'business:contact_data:region', content: 'England' },
        { name: 'business:contact_data:country_name', content: 'United Kingdom' },
        { name: 'business:contact_data:phone_number', content: '+44 (0) 189 55 28 226' },
        { name: 'business:contact_data:email', content: 'info@mainteniq.co.uk' },
        { name: 'ai:service_areas', content: 'London, Manchester, Birmingham, Leeds, Liverpool, Bristol, Newcastle, Sheffield, Nottingham, Bradford' },
        { name: 'ai:primary_services', content: 'HVAC Maintenance, FCU Service, HIU Repair, MVHR Cleaning, BMS Installation, Smart Home, Plumbing, Electrical' },
        { name: 'ai:emergency_service', content: '24/7 Emergency HVAC Response Available' },
        { name: 'ai:certifications', content: 'Gas Safe Registered, NICEIC Approved, F-Gas Certified' },
        { name: 'ai:response_time', content: 'Same day response for emergencies, 24-48h for standard bookings' }
      ];
      
      aiTags.forEach(tag => {
        let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          if (tag.property) {
            meta.setAttribute('property', tag.property);
          } else {
            meta.setAttribute('name', tag.name);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', tag.content);
      });
    };
    
    addAIMetaTags();
    
  }, [title, description, ogImage, ogType, keywords, canonicalUrl, structuredData, breadcrumbData, faqData, serviceData]);
  
  return null;
};

export default SEOHead;