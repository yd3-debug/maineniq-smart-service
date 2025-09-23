import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'service_type',
          'custom_parameter_2': 'location_area'
        }
      });
    `;
    document.head.appendChild(script2);

    // Google Search Console verification
    const searchConsole = document.createElement('meta');
    searchConsole.name = 'google-site-verification';
    searchConsole.content = 'your-search-console-verification-code';
    document.head.appendChild(searchConsole);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(searchConsole);
    };
  }, []);

  useEffect(() => {
    // Track page views
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });

      // Track custom events for business metrics
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        service_area: 'london_120_mile_radius'
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;