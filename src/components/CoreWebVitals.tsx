import { useEffect } from 'react';

const CoreWebVitals = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload above-the-fold images
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.href = '/og-image-maineniq.png';
      heroImageLink.as = 'image';
      document.head.appendChild(heroImageLink);
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to critical third parties
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    addResourceHints();

    // Optimize for Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (window.gtag && 'value' in entry) {
          const entryValue = entry as any;
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: entry.name,
            value: Math.round(entry.name === 'CLS' ? entryValue.value * 1000 : entryValue.value),
            non_interaction: true,
          });
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default CoreWebVitals;