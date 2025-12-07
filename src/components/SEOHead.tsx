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
  title = "🏆 #1 Professional Property Services UK | HVAC, Smart Home, Maintenance | 24/7 Emergency | Save 30%",
  description = "⭐ 4.9/5 Rating | Premier property services UK ⭐ Expert HVAC maintenance (FCU, HIU, MVHR, CIU), smart home automation, BMS installation, certified plumbing/electrical, handyman, end-of-tenancy cleaning. Save 30% energy costs, prevent 80% breakdowns, extend equipment life 10+ years. Gas Safe & NICEIC certified. 24/7 emergency response. Free quotes, transparent pricing, quality guaranteed. Trusted by 1000+ customers across London, Manchester, Birmingham. Transform your property today!",
  ogImage = "/og-image-mainteniq.png",
  ogType = "website",
  keywords = "HVAC maintenance London, London landlord HVAC, Airbnb property maintenance London, buy-to-let property services, BTL maintenance London, rental property maintenance London, property manager maintenance contracts, heating engineer London, Gas Safe registered engineer London, NICEIC electrician London, planned maintenance contracts London, PPM maintenance London, FCU HIU MVHR maintenance London, landlord gas safety certificate London, CP12 certificate London, EICR London, emergency plumber electrician London, facilities management London, end of tenancy cleaning London, property renovation London, 24/7 emergency response London, certified engineers London, smart home London, BMS London, commercial property maintenance London, residential property maintenance London",
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
    
    // Add AI-specific meta tags for better crawlability and search ranking
    const addAIMetaTags = () => {
      const aiTags = [
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'slurp', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'DuckDuckBot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Mainteniq - UK Premier Property Services' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'article:author', content: 'Mainteniq Expert Team' },
        { property: 'article:publisher', content: 'https://www.mainteniq.co.uk' },
        { name: 'twitter:site', content: '@mainteniq' },
        { name: 'twitter:creator', content: '@mainteniq' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'apple-mobile-web-app-title', content: 'Mainteniq' },
        { name: 'application-name', content: 'Mainteniq Property Services' },
        { name: 'msapplication-TileColor', content: '#1e40af' },
        { name: 'theme-color', content: '#1e40af' },
        { name: 'business:contact_data:locality', content: 'London' },
        { name: 'business:contact_data:region', content: 'England' },
        { name: 'business:contact_data:country_name', content: 'United Kingdom' },
        { name: 'business:contact_data:phone_number', content: '+44 (0) 189 55 28 226' },
        { name: 'business:contact_data:email', content: 'info@mainteniq.co.uk' },
        { name: 'geo.region', content: 'GB' },
        { name: 'geo.placename', content: 'United Kingdom' },
        { name: 'geo.position', content: '51.5074;-0.1278' },
        { name: 'ICBM', content: '51.5074, -0.1278' },
        { name: 'ai:service_areas', content: 'London, Manchester, Birmingham, Leeds, Liverpool, Bristol, Newcastle, Sheffield, Nottingham, Bradford, Edinburgh, Glasgow, Cardiff' },
        { name: 'ai:primary_services', content: 'HVAC Maintenance, FCU Service, HIU Repair, MVHR Cleaning, BMS Installation, Smart Home Automation, Emergency Plumbing, Certified Electrical, Professional Handyman, End-of-Tenancy Cleaning' },
        { name: 'ai:specializations', content: 'Energy Efficiency, Preventive Maintenance, Smart Building Technology, 24/7 Emergency Response, Gas Safe & NICEIC Certified' },
        { name: 'ai:emergency_service', content: '24/7 Emergency HVAC, Plumbing & Electrical Response Available Across UK' },
        { name: 'ai:certifications', content: 'Gas Safe Registered, NICEIC Approved Contractor, F-Gas Certified, City & Guilds Qualified, Fully Insured & Bonded' },
        { name: 'ai:response_time', content: 'Same day emergency response, 24-48h standard bookings, free quotes within 2 hours' },
        { name: 'ai:service_guarantee', content: 'Work guaranteed, transparent pricing, no hidden costs, customer satisfaction promise' },
        { name: 'ai:coverage_area', content: 'UK-wide coverage with local engineers, specializing in London, Manchester, Birmingham metro areas' },
        { name: 'rating', content: '4.9' },
        { name: 'price_range', content: '££' },
        { name: 'availability', content: '24/7' },
        { name: 'language', content: 'English' },
        { name: 'audience', content: 'Homeowners, Landlords, Property Managers, Facility Managers, Commercial Property Owners' },
        { name: 'expertise', content: 'HVAC Systems, Smart Home Technology, Building Management, Emergency Repairs, Preventive Maintenance' }
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