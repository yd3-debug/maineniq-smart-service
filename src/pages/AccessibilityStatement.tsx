import SEOHead from "../components/SEOHead";

const AccessibilityStatement = () => {
  return (
    <>
      <SEOHead 
        title="Accessibility Statement - MaintenIQ HVAC Services"
        description="MaintenIQ's commitment to web accessibility. Learn about our WCAG compliance efforts and accessibility features for all users."
        keywords="accessibility statement, WCAG compliance, web accessibility, MaintenIQ"
      />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Accessibility Statement</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Accessibility Statement</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="mb-4">
                MaintenIQ is committed to ensuring digital accessibility for people with disabilities. 
                We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>
              <p className="mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
                These guidelines help make web content accessible to users with disabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>High contrast color schemes</li>
                <li>Resizable text up to 200%</li>
                <li>Alternative text for images</li>
                <li>Clear navigation structure</li>
                <li>Form labels and error messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Known Issues</h2>
              <p className="mb-4">
                We are actively working to address any accessibility barriers. If you encounter 
                difficulties accessing any part of our website, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
              <p className="mb-4">
                We welcome feedback on the accessibility of our website. Please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>Email: accessibility@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityStatement;