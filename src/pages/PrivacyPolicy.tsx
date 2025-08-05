const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you contact us for services, 
              request quotes, or communicate with our customer service team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our HVAC services, 
              communicate with you, and ensure the best possible customer experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              info@mainteniq.co.uk or +44 (0) 189 55 28 226.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;