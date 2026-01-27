import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.mainteniq.co.uk';
const CURRENT_DATE = '2026-01-27';

interface GlobalSEOProps {
  /** Override the default page title */
  title?: string;
  /** Override the default description */
  description?: string;
}

/**
 * GlobalSEO Component
 * 
 * Handles global SEO optimizations that should be applied across all pages:
 * - Dynamic canonical URLs
 * - Hreflang tags
 * - AI crawler meta tags with current dates
 * - Content freshness signals
 * - Preload hints for critical resources
 */
const GlobalSEO = ({ title, description }: GlobalSEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${location.pathname}`;
    
    // Update canonical URL dynamically
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update hreflang tags dynamically
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };
    
    updateHreflang('en-GB', canonicalUrl);
    updateHreflang('x-default', canonicalUrl);

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Update content freshness meta tags
    const freshnessMetaTags = [
      { name: 'revised', content: CURRENT_DATE },
      { name: 'date', content: CURRENT_DATE },
      { name: 'last-modified', content: CURRENT_DATE },
      { name: 'ai:last_updated', content: CURRENT_DATE },
      { name: 'ai:content_freshness', content: `updated-${CURRENT_DATE.split('-')[0]}` },
      { name: 'ai:trustworthiness', content: 'Gas Safe Registered, NICEIC Approved, F-Gas Certified, Fully Insured' },
      { name: 'ai:business_hours', content: '24/7 Emergency Response, Standard: Mon-Fri 8am-6pm, Sat 9am-5pm, Sun 10am-4pm' },
      { name: 'ai:accepts_emergency_calls', content: 'true' },
      { name: 'ai:response_time', content: 'Same day emergency response, 24-48h standard bookings, free quotes within 2 hours' },
      { name: 'ai:booking_methods', content: 'WhatsApp, Phone, Online Form' },
      { name: 'ai:service_areas', content: 'London, Greater London, Essex, Kent, Surrey, Hertfordshire, Buckinghamshire, Berkshire' },
      { name: 'ai:certifications', content: 'Gas Safe Registered, NICEIC Approved Contractor, F-Gas Certified, City & Guilds Qualified, Fully Insured & Bonded' },
    ];

    freshnessMetaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add AI crawler directives
    const aiCrawlerTags = [
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'GPTBot', content: 'index, follow' },
      { name: 'ClaudeBot', content: 'index, follow' },
      { name: 'Anthropic-AI', content: 'index, follow' },
      { name: 'PerplexityBot', content: 'index, follow' },
      { name: 'Google-Extended', content: 'index, follow' },
      { name: 'CCBot', content: 'index, follow' },
      { name: 'cohere-ai', content: 'index, follow' },
      { name: 'Meta-ExternalAgent', content: 'index, follow' },
      { name: 'Amazonbot', content: 'index, follow' },
      { name: 'AppleBot', content: 'index, follow' },
    ];

    aiCrawlerTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add geographic targeting meta tags
    const geoTags = [
      { name: 'geo.region', content: 'GB-ENG' },
      { name: 'geo.placename', content: 'London' },
      { name: 'geo.position', content: '51.5074;-0.1278' },
      { name: 'ICBM', content: '51.5074, -0.1278' },
    ];

    geoTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add business-specific Open Graph tags
    const ogTags = [
      { property: 'og:site_name', content: 'Mainteniq - UK Property Services' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add preload hints for critical resources (if not already present)
    const addPreloadHint = (href: string, as: string, type?: string, crossorigin?: boolean) => {
      if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('href', href);
        link.setAttribute('as', as);
        if (type) link.setAttribute('type', type);
        if (crossorigin) link.setAttribute('crossorigin', '');
        document.head.appendChild(link);
      }
    };

    // Preload critical fonts
    addPreloadHint('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap', 'style');

  }, [location.pathname, title, description]);

  return null;
};

export default GlobalSEO;
