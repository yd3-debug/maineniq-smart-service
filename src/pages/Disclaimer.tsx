import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const Disclaimer = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Disclaimer", url: "https://www.mainteniq.co.uk/disclaimer" }
  ]);

  return (
    <>
      <SEOHead 
        title="Disclaimer - MaintenIQ HVAC Services"
        description="Important disclaimers and limitations regarding MaintenIQ HVAC services, website content, and service recommendations."
        keywords="disclaimer, liability, HVAC services, MaintenIQ, service limitations"
        canonicalUrl="https://www.mainteniq.co.uk/disclaimer"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Disclaimer</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Disclaimer</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Website Information</h2>
              <p className="mb-4">
                The information on this website is provided for general guidance only. While we strive 
                for accuracy, we make no representations or warranties about the completeness, accuracy, 
                or suitability of the information for any particular purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Professional Advice</h2>
              <p className="mb-4">
                Content on this website should not be considered as professional advice for your specific 
                situation. Always consult with qualified HVAC professionals for system-specific recommendations 
                and safety assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Service Limitations</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Environmental Factors</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>System performance may vary based on weather conditions</li>
                <li>Building structure and insulation affect efficiency</li>
                <li>Usage patterns impact maintenance requirements</li>
                <li>Age and condition of existing equipment affects service outcomes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Technical Limitations</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Some older systems may require specialized parts with longer lead times</li>
                <li>Compatibility issues may arise with mixed manufacturer equipment</li>
                <li>Building regulation compliance may require additional work</li>
                <li>Access restrictions may limit service options</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Content</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites or references to other companies' 
                products. We are not responsible for the content, privacy practices, or availability 
                of external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Estimates and Quotes</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Online estimates are indicative only and subject to site survey</li>
                <li>Final costs may vary based on actual conditions found</li>
                <li>Quotes are valid for 30 days unless otherwise stated</li>
                <li>Additional work may be required for safety or compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Emergency Services</h2>
              <p className="mb-4">
                While we provide 24/7 emergency services, response times may vary based on weather, 
                traffic, and engineer availability. In life-threatening situations, always contact 
                emergency services (999) first.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Regulatory Compliance</h2>
              <p className="mb-4">
                All work is performed to current standards at the time of installation. Future 
                regulatory changes may require system modifications not covered under original warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, MaintenIQ shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from the use of this website or our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="mb-4">
                For clarification on any disclaimers or specific service questions:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>Email: info@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;