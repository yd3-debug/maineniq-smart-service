import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { LoadingPage } from "@/components/LoadingSpinner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CoreWebVitals from "./components/CoreWebVitals";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const WhyProfessionalHVAC = lazy(() => import("./pages/WhyProfessionalHVAC"));
const HVACMaintenance = lazy(() => import("./pages/HVACMaintenance"));
const FCUMaintenance = lazy(() => import("./pages/FCUMaintenance"));
const HIUMaintenance = lazy(() => import("./pages/HIUMaintenance"));
const CIUMaintenance = lazy(() => import("./pages/CIUMaintenance"));
const MVHRMaintenance = lazy(() => import("./pages/MVHRMaintenance"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));
const RenovationComposer = lazy(() => import("./pages/RenovationComposer"));
const BMS = lazy(() => import("./pages/BMS"));
const SmartHome = lazy(() => import("./pages/SmartHome"));
const PlumberElectrician = lazy(() => import("./pages/PlumberElectrician"));
const Handyman = lazy(() => import("./pages/Handyman"));
const EndOfTenancyCleaning = lazy(() => import("./pages/EndOfTenancyCleaning"));

const MaintenanceContracts = lazy(() => import("./pages/MaintenanceContracts"));
const Blog = lazy(() => import("./pages/Blog"));
const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col font-poppins">
    <GoogleAnalytics />
    <CoreWebVitals />
    <Navigation />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <WhatsAppFloat />
    <CookieBanner />
  </div>
);

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);
  return null;
};

const App = () => {
  console.log('App.tsx: App component rendering');
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <Index />
              </Suspense>
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <Services />
              </Suspense>
            </Layout>
          } />
          <Route path="/why-professional-hvac" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <WhyProfessionalHVAC />
              </Suspense>
            </Layout>
          } />
          <Route path="/hvac-maintenance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <HVACMaintenance />
              </Suspense>
            </Layout>
          } />
          <Route path="/fcu-maintenance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <FCUMaintenance />
              </Suspense>
            </Layout>
          } />
          <Route path="/hiu-maintenance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <HIUMaintenance />
              </Suspense>
            </Layout>
          } />
          <Route path="/ciu-maintenance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <CIUMaintenance />
              </Suspense>
            </Layout>
          } />
          <Route path="/mvhr-maintenance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <MVHRMaintenance />
              </Suspense>
            </Layout>
          } />
          <Route path="/bms" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <BMS />
              </Suspense>
            </Layout>
          } />
          <Route path="/smart-home" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <SmartHome />
              </Suspense>
            </Layout>
          } />
          <Route path="/plumber-electrician" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <PlumberElectrician />
              </Suspense>
            </Layout>
          } />
          <Route path="/handyman" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <Handyman />
              </Suspense>
            </Layout>
          } />
          <Route path="/end-of-tenancy-cleaning" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <EndOfTenancyCleaning />
              </Suspense>
            </Layout>
          } />
          <Route path="/case-studies" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <CaseStudies />
              </Suspense>
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <About />
              </Suspense>
            </Layout>
          } />
          <Route path="/maintenance-contracts" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <MaintenanceContracts />
              </Suspense>
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <Contact />
              </Suspense>
            </Layout>
          } />
          <Route path="/privacy-policy" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <PrivacyPolicy />
              </Suspense>
            </Layout>
          } />
          <Route path="/terms-of-service" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <TermsOfService />
              </Suspense>
            </Layout>
          } />
          <Route path="/cookie-policy" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <CookiePolicy />
              </Suspense>
            </Layout>
          } />
          <Route path="/gdpr-compliance" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <GDPRCompliance />
              </Suspense>
            </Layout>
          } />
          <Route path="/admin" element={
            <Suspense fallback={<LoadingPage />}>
              <Admin />
            </Suspense>
          } />
          <Route path="/renovation-composer" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <RenovationComposer />
              </Suspense>
            </Layout>
          } />
          <Route path="/blog" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <Blog />
              </Suspense>
            </Layout>
          } />
          <Route path="*" element={
            <Layout>
              <Suspense fallback={<LoadingPage />}>
                <NotFound />
              </Suspense>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
