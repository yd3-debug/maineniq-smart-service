import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingPage } from "@/components/LoadingSpinner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const WhyProfessionalHVAC = lazy(() => import("./pages/WhyProfessionalHVAC"));
const HVACMaintenance = lazy(() => import("./pages/HVACMaintenance"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col font-poppins">
    <Navigation />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <WhatsAppFloat />
    <CookieBanner />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

export default App;
