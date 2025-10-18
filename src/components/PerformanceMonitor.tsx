import { useEffect } from 'react';

/**
 * Performance monitoring component that tracks and logs key performance metrics
 * Useful for debugging and optimization during development
 */
const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in development
    if (import.meta.env.DEV) {
      const logPerformanceMetrics = () => {
        // Get navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        
        if (navigation) {
          console.group('🚀 Performance Metrics');
          
          // DNS + TCP
          const connectionTime = navigation.connectEnd - navigation.connectStart;
          console.log(`⚡ Connection Time: ${Math.round(connectionTime)}ms`);
          
          // Time to First Byte
          const ttfb = navigation.responseStart - navigation.requestStart;
          console.log(`📡 TTFB: ${Math.round(ttfb)}ms`, 
            ttfb < 800 ? '✅ Good' : ttfb < 1800 ? '⚠️ Needs Improvement' : '❌ Poor'
          );
          
          // DOM Content Loaded
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          console.log(`📄 DOM Content Loaded: ${Math.round(domContentLoaded)}ms`);
          
          // Page Load
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log(`✨ Page Load: ${Math.round(loadTime)}ms`);
          
          // Total Page Load Time
          const totalTime = navigation.loadEventEnd - navigation.fetchStart;
          console.log(`⏱️ Total Time: ${Math.round(totalTime)}ms`);
          
          console.groupEnd();
        }

        // Monitor LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          if (lastEntry) {
            const lcp = lastEntry.renderTime || lastEntry.loadTime;
            console.log(`🎨 LCP: ${Math.round(lcp)}ms`,
              lcp < 2500 ? '✅ Good' : lcp < 4000 ? '⚠️ Needs Improvement' : '❌ Poor'
            );
          }
        });
        
        try {
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          // LCP not supported
        }

        // Monitor FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            console.log(`⚡ FID: ${Math.round(fid)}ms`,
              fid < 100 ? '✅ Good' : fid < 300 ? '⚠️ Needs Improvement' : '❌ Poor'
            );
          });
        });
        
        try {
          fidObserver.observe({ type: 'first-input', buffered: true });
        } catch (e) {
          // FID not supported
        }

        // Monitor CLS (Cumulative Layout Shift)
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
            }
          });
          
          console.log(`📐 CLS: ${clsScore.toFixed(3)}`,
            clsScore < 0.1 ? '✅ Good' : clsScore < 0.25 ? '⚠️ Needs Improvement' : '❌ Poor'
          );
        });
        
        try {
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          // CLS not supported
        }

        // Log resource timing
        setTimeout(() => {
          const resources = performance.getEntriesByType('resource');
          const images = resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i));
          const scripts = resources.filter(r => r.name.match(/\.(js)$/i));
          const styles = resources.filter(r => r.name.match(/\.(css)$/i));
          
          console.group('📦 Resource Summary');
          console.log(`🖼️ Images: ${images.length} (${Math.round(images.reduce((sum, r) => sum + (r as any).transferSize, 0) / 1024)}KB)`);
          console.log(`📜 Scripts: ${scripts.length} (${Math.round(scripts.reduce((sum, r) => sum + (r as any).transferSize, 0) / 1024)}KB)`);
          console.log(`🎨 Styles: ${styles.length} (${Math.round(styles.reduce((sum, r) => sum + (r as any).transferSize, 0) / 1024)}KB)`);
          console.groupEnd();
        }, 3000);
      };

      // Run on load
      if (document.readyState === 'complete') {
        logPerformanceMetrics();
      } else {
        window.addEventListener('load', logPerformanceMetrics);
      }
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
