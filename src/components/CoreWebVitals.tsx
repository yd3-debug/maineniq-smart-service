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
      heroImageLink.href = '/og-image-mainteniq.png';
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
      const hints = [
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Reduce layout shift with font display swap
    const optimizeFontLoading = () => {
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: local('Inter');
        }
      `;
      document.head.appendChild(style);
    };

    // Implement intersection observer for lazy loading
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              imageObserver.unobserve(img);
            }
          });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    addResourceHints();
    optimizeFontLoading();
    setupLazyLoading();

    // Enhanced Core Web Vitals monitoring with detailed metrics
    const observers: PerformanceObserver[] = [];

    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (window.gtag && lastEntry.renderTime) {
          window.gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.renderTime),
            metric_rating: lastEntry.renderTime < 2500 ? 'good' : lastEntry.renderTime < 4000 ? 'needs_improvement' : 'poor',
            non_interaction: true,
          });
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      observers.push(lcpObserver);
    } catch (e) {
      console.log('LCP observer not supported');
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (window.gtag && entry.processingStart) {
            const fid = entry.processingStart - entry.startTime;
            window.gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(fid),
              metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor',
              non_interaction: true,
            });
          }
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
      observers.push(fidObserver);
    } catch (e) {
      console.log('FID observer not supported');
    }

    // Cumulative Layout Shift (CLS)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsScore = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        });

        if (window.gtag && clsScore > 0) {
          window.gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsScore * 1000),
            metric_rating: clsScore < 0.1 ? 'good' : clsScore < 0.25 ? 'needs_improvement' : 'poor',
            non_interaction: true,
          });
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      observers.push(clsObserver);
    } catch (e) {
      console.log('CLS observer not supported');
    }

    // Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry && window.gtag) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        window.gtag('event', 'TTFB', {
          event_category: 'Web Vitals',
          value: Math.round(ttfb),
          metric_rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs_improvement' : 'poor',
          non_interaction: true,
        });
      }
    } catch (e) {
      console.log('TTFB measurement not supported');
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return null;
};

export default CoreWebVitals;