const RefundPolicy = () => {
  return (
    <div className="min-h-screen pt-16 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Guarantee</h2>
            <p className="mb-4">
              We stand behind our work with a 100% satisfaction guarantee. If you're not completely 
              satisfied with our service, we'll make it right.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="mb-4">
              Refund requests must be made within 30 days of service completion. We will review 
              each case individually and work with you to resolve any concerns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Parts and Materials</h2>
            <p className="mb-4">
              Parts and materials are covered by manufacturer warranties. We will assist with 
              warranty claims and replacements as needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              To discuss a refund or service concern, please contact us at info@mainteniq.co.uk 
              or +44 (0) 189 55 28 226.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;