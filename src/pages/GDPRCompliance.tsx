const GDPRCompliance = () => {
  return (
    <div className="min-h-screen pt-16 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-4xl font-bold mb-8">GDPR Compliance</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              Under GDPR, you have the right to access, correct, delete, or transfer your personal data. 
              You also have the right to object to or restrict certain processing of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Legal Basis</h2>
            <p className="mb-4">
              We process your data based on your consent, contractual necessity, legal obligation, 
              or legitimate business interests, always in compliance with GDPR requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exercise Your Rights</h2>
            <p>
              To exercise your GDPR rights or for any data protection queries, contact us at 
              info@mainteniq.co.uk or +44 (0) 189 55 28 226.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;