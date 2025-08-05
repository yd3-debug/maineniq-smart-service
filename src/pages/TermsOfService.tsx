const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-16 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Agreement</h2>
            <p className="mb-4">
              By engaging our HVAC services, you agree to these terms and conditions. 
              Our services are provided according to industry standards and local regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <p className="mb-4">
              Payment is due upon completion of services unless otherwise agreed upon in writing. 
              We accept various payment methods for your convenience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranty</h2>
            <p className="mb-4">
              We guarantee our workmanship and provide warranties on parts and labor as specified 
              in your service agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For questions regarding these terms, contact us at info@mainteniq.co.uk or 
              +44 (0) 189 55 28 226.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;