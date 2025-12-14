import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const CookiePolicy = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Cookie Policy", url: "https://www.mainteniq.co.uk/cookie-policy" }
  ]);

  return (
    <>
      <SEOHead 
        title="Cookie Policy - MaintenIQ HVAC Services"
        description="Learn how MaintenIQ uses cookies on our website. Information about cookie types, purposes, and how to manage your cookie preferences."
        keywords="cookie policy, website cookies, data privacy, MaintenIQ"
        canonicalUrl="https://www.mainteniq.co.uk/cookie-policy"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Cookie Policy</li>
            </ol>
          </nav>
          <h1 className="font-heading text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide you with a better browsing experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to remember your preferences, analyze website traffic, and improve 
              our services. We do not use cookies to collect personal information without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies through your browser settings. Note that disabling 
              cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about our cookie policy, please contact us at 
              info@mainteniq.co.uk or +44 (0) 189 55 28 226.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default CookiePolicy;