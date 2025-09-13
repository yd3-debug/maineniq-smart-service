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
  title = "Maineniq - Professional HVAC & Smart Property Solutions",
  description = "Expert HVAC maintenance, plumbing, electrical, handyman, BMS, smart home & end-of-tenancy cleaning. Prevent breakdowns, cut costs & protect your property.",
  ogImage = "/LOGOPETRU2.png",
  ogType = "website",
  keywords = "HVAC maintenance, FCU service, HIU repair, MVHR cleaning, CIU maintenance, plumbing, electrical, handyman, smart home, end of tenancy cleaning",
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
    
  }, [title, description, ogImage, ogType, keywords, canonicalUrl, structuredData, breadcrumbData, faqData, serviceData]);
  
  return null;
};

export default SEOHead;