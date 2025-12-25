import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

const BASE_URL = 'https://www.mainteniq.co.uk';

const SEOHead = ({ 
  title = "Professional Property Services UK | HVAC, Smart Home, Maintenance | 24/7 Emergency | Mainteniq",
  description = "4.9/5 Rating | Premier property services UK. Expert HVAC maintenance (FCU, HIU, MVHR, CIU), smart home automation, BMS installation, certified plumbing/electrical, handyman, end-of-tenancy cleaning. Save 30% energy costs, prevent 80% breakdowns. Gas Safe & NICEIC certified. 24/7 emergency response. London + 120 miles.",
  ogImage = "/og-image-mainteniq.png",
  ogType = "website",
  keywords = "HVAC maintenance London, London landlord HVAC, Airbnb property maintenance London, buy-to-let property services, BTL maintenance London, rental property maintenance London, property manager maintenance contracts, heating engineer London, Gas Safe registered engineer London, NICEIC electrician London, planned maintenance contracts London, PPM maintenance London, FCU HIU MVHR maintenance London, landlord gas safety certificate London, CP12 certificate London, EICR London, emergency plumber electrician London, facilities management London, end of tenancy cleaning London, property renovation London, 24/7 emergency response London, certified engineers London, smart home London, BMS London, commercial property maintenance London, residential property maintenance London",
  canonicalUrl,
  structuredData,
  breadcrumbData,
  faqData,
  serviceData
}: SEOHeadProps) => {
  const location = useLocation();
  
  // Generate absolute URLs
  const absoluteCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${BASE_URL}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`)
    : `${BASE_URL}${location.pathname}`;
  
  const absoluteOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
  
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
      ogImageMeta.setAttribute('content', absoluteOgImage);
    }
    
    const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]');
    if (ogImageSecure) {
      ogImageSecure.setAttribute('content', absoluteOgImage);
    }
    
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }
    
    // Update OG URL with absolute URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', absoluteCanonicalUrl);
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
      twitterImage.setAttribute('content', absoluteOgImage);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', absoluteCanonicalUrl);
    
    // Update hreflang tags dynamically
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };
    
    updateHreflang('en-GB', absoluteCanonicalUrl);
    updateHreflang('x-default', absoluteCanonicalUrl);
    
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
        // Standard search engine directives
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'slurp', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'DuckDuckBot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        // AI crawler directives
        { name: 'GPTBot', content: 'index, follow' },
        { name: 'ClaudeBot', content: 'index, follow' },
        { name: 'Anthropic-AI', content: 'index, follow' },
        { name: 'PerplexityBot', content: 'index, follow' },
        { name: 'Google-Extended', content: 'index, follow' },
        { name: 'CCBot', content: 'index, follow' },
        { name: 'cohere-ai', content: 'index, follow' },
        { name: 'Meta-ExternalAgent', content: 'index, follow' },
        { name: 'Amazonbot', content: 'index, follow' },
        // Open Graph
        { property: 'og:site_name', content: 'Mainteniq - UK Premier Property Services' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'article:author', content: 'Mainteniq Expert Team' },
        { property: 'article:publisher', content: 'https://www.mainteniq.co.uk' },
        // Twitter
        { name: 'twitter:site', content: '@mainteniq' },
        { name: 'twitter:creator', content: '@mainteniq' },
        { name: 'twitter:card', content: 'summary_large_image' },
        // App names
        { name: 'apple-mobile-web-app-title', content: 'Mainteniq' },
        { name: 'application-name', content: 'Mainteniq Property Services' },
        { name: 'msapplication-TileColor', content: '#1e40af' },
        { name: 'theme-color', content: '#1e40af' },
        // Business contact data
        { name: 'business:contact_data:locality', content: 'London' },
        { name: 'business:contact_data:region', content: 'England' },
        { name: 'business:contact_data:country_name', content: 'United Kingdom' },
        { name: 'business:contact_data:phone_number', content: '+44 783 456 2366' },
        { name: 'business:contact_data:email', content: 'info@mainteniq.co.uk' },
        // Geo targeting
        { name: 'geo.region', content: 'GB-LND' },
        { name: 'geo.placename', content: 'London, United Kingdom' },
        { name: 'geo.position', content: '51.5074;-0.1278' },
        { name: 'ICBM', content: '51.5074, -0.1278' },
        // AI-optimized structured metadata
        { name: 'ai:service_areas', content: 'London, Greater London, Essex, Kent, Surrey, Hertfordshire, Buckinghamshire, Berkshire' },
        { name: 'ai:primary_services', content: 'HVAC Maintenance, Boiler Services, FCU Service, HIU Repair, MVHR Cleaning, CIU Maintenance, BMS Installation, Smart Home Automation, Emergency Plumbing, Certified Electrical, Professional Handyman, End-of-Tenancy Cleaning, Property Renovation, Kitchen Renovation, Bathroom Renovation' },
        { name: 'ai:specializations', content: 'Energy Efficiency, Preventive Maintenance, Smart Building Technology, 24/7 Emergency Response, Gas Safe & NICEIC Certified' },
        { name: 'ai:emergency_service', content: '24/7 Emergency HVAC, Plumbing & Electrical Response Available Across London' },
        { name: 'ai:certifications', content: 'Gas Safe Registered, NICEIC Approved Contractor, F-Gas Certified, City & Guilds Qualified, Fully Insured & Bonded' },
        { name: 'ai:response_time', content: 'Same day emergency response, 24-48h standard bookings, free quotes within 2 hours' },
        { name: 'ai:service_guarantee', content: 'Work guaranteed, transparent pricing, no hidden costs, customer satisfaction promise' },
        { name: 'ai:coverage_area', content: 'London and 120-mile radius including Home Counties' },
        { name: 'ai:last_updated', content: '2025-12-25' },
        { name: 'ai:business_hours', content: '24/7 Emergency Response, Standard: Mon-Fri 8am-6pm, Sat 9am-5pm, Sun 10am-4pm' },
        { name: 'ai:accepts_emergency_calls', content: 'true' },
        { name: 'ai:booking_methods', content: 'WhatsApp, Phone, Online Form' },
        // Business metadata
        { name: 'rating', content: '4.9' },
        { name: 'price_range', content: '££' },
        { name: 'availability', content: '24/7' },
        { name: 'language', content: 'en-GB' },
        { name: 'audience', content: 'Landlords, Airbnb Hosts, Property Managers, Facility Managers, Buy-to-Let Investors, Commercial Property Owners' },
        { name: 'expertise', content: 'HVAC Systems, Boiler Services, Smart Home Technology, Building Management, Emergency Repairs, Preventive Maintenance' }
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
    
  }, [title, description, absoluteOgImage, ogType, keywords, absoluteCanonicalUrl, structuredData, breadcrumbData, faqData, serviceData]);
  
  return null;
};

export default SEOHead;
