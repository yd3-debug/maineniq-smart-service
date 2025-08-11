import SEOHead from "../components/SEOHead";

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service - MaintenIQ HVAC Services"
        description="Terms and conditions for MaintenIQ HVAC maintenance, installation, and repair services. Professional service agreements and customer responsibilities."
        keywords="terms of service, HVAC services, service agreement, MaintenIQ"
      />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Terms of Service</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025 | Version 2.0</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Service Agreement</h2>
              
              <h3 className="text-xl font-semibold mb-3">1.1 Acceptance of Terms</h3>
              <p className="mb-4">
                By engaging MaintenIQ for HVAC services, you agree to these terms and conditions. 
                Our services are provided according to British Standards, Gas Safe regulations, and all applicable UK law.
              </p>

              <h3 className="text-xl font-semibold mb-3">1.2 Service Scope</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>HVAC system installation, maintenance, and repair</li>
                <li>Building Management System (BMS) services</li>
                <li>Fan Coil Unit (FCU) and Heat Interface Unit (HIU) maintenance</li>
                <li>MVHR (Mechanical Ventilation Heat Recovery) services</li>
                <li>Emergency call-out services</li>
                <li>Energy efficiency consultations</li>
                <li>Compliance certifications and safety inspections</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">1.3 Professional Standards</h3>
              <p className="mb-4">
                All work is performed by Gas Safe registered engineers and certified technicians. 
                We comply with F-Gas regulations, Building Regulations, and Health & Safety requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Booking and Scheduling</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Service Requests</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All bookings must be confirmed in writing (email or signed agreement)</li>
                <li>Emergency services available 24/7 with premium rates</li>
                <li>Minimum 24 hours notice required for non-emergency appointments</li>
                <li>Access requirements must be communicated at booking</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>24+ hours notice: No charge</li>
                <li>Less than 24 hours: 50% of service charge</li>
                <li>No access provided: Full service charge applies</li>
                <li>Emergency calls cannot be cancelled within 2 hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Payment Methods</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Bank transfer (preferred)</li>
                <li>Credit/Debit cards</li>
                <li>Corporate accounts (30-day terms available)</li>
                <li>Cash for emergency services under £500</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Payment Schedule</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Maintenance services: Payment due on completion</li>
                <li>Installation projects: 50% deposit, balance on completion</li>
                <li>Large commercial projects: Staged payments as agreed</li>
                <li>Emergency services: Payment due before engineer departure</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Late Payment</h3>
              <p className="mb-4">
                Late payment charges of 8% per annum plus Bank of England base rate apply to overdue invoices. 
                We reserve the right to suspend services for accounts over 30 days overdue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Warranties and Guarantees</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Workmanship Warranty</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>12 months guarantee on all labor and workmanship</li>
                <li>Parts warranty as per manufacturer terms (typically 1-5 years)</li>
                <li>Installation warranties up to 6 years for commercial systems</li>
                <li>Annual maintenance contracts include priority service</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Warranty Exclusions</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Damage caused by misuse or neglect</li>
                <li>Normal wear and tear</li>
                <li>Modifications by third parties</li>
                <li>Force majeure events</li>
                <li>Failure to follow maintenance recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Liability and Insurance</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Insurance Coverage</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Public liability insurance: £2,000,000</li>
                <li>Professional indemnity: £1,000,000</li>
                <li>Employer's liability: £10,000,000</li>
                <li>All relevant trade certifications and licenses</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Limitation of Liability</h3>
              <p className="mb-4">
                Our liability is limited to the value of the service provided. We are not liable for 
                consequential losses, business interruption, or indirect damages unless caused by our negligence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Health and Safety</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Site Safety</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All engineers carry relevant safety equipment and certifications</li>
                <li>Risk assessments conducted for all commercial work</li>
                <li>COSHH assessments for chemical handling</li>
                <li>Compliance with CDM regulations on construction sites</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Customer Responsibilities</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide safe access to work areas</li>
                <li>Inform us of any known hazards (asbestos, etc.)</li>
                <li>Ensure adequate lighting and ventilation</li>
                <li>Remove personal belongings from work areas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              
              <p className="mb-4">
                All designs, specifications, and documentation remain our intellectual property. 
                Customers receive a license to use for the intended purpose only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Complaints Procedure</h3>
              <p className="mb-4">
                We aim to resolve all complaints within 7 working days. See our Complaints Procedure 
                for detailed steps and escalation process.
              </p>

              <h3 className="text-xl font-semibold mb-3">8.2 Governing Law</h3>
              <p className="mb-4">
                These terms are governed by English law, and any disputes will be subject to the 
                exclusive jurisdiction of English courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              
              <p className="mb-4">
                Either party may terminate ongoing contracts with 30 days written notice. 
                Emergency services and completed work are not subject to termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>MaintenIQ Ltd</strong></p>
                <p>Email: info@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
                <p>Emergency: Available 24/7</p>
                <p>Gas Safe Registration: [Number]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;