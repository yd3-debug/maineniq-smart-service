import SEOHead from "../components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - MaintenIQ HVAC Services"
        description="Learn how MaintenIQ collects, uses, and protects your personal information. Comprehensive privacy policy for our HVAC maintenance and installation services."
        keywords="privacy policy, data protection, MaintenIQ, HVAC services"
      />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Privacy Policy</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025 | Version 2.0</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contact details: Name, address, phone number, email address</li>
                <li>Property information: Property type, size, HVAC system details</li>
                <li>Service history: Previous maintenance records, equipment specifications</li>
                <li>Payment information: Billing details and transaction records</li>
                <li>Emergency contact information when required for service calls</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">1.2 Technical Data</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Website usage data: IP address, browser type, pages visited</li>
                <li>Device information: Operating system, screen resolution</li>
                <li>Cookies and tracking technologies (see our Cookie Policy)</li>
                <li>System diagnostic data from HVAC equipment when applicable</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">1.3 Service-Specific Data</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Property access codes and security information (stored securely)</li>
                <li>Equipment serial numbers and warranty information</li>
                <li>Energy efficiency data and performance metrics</li>
                <li>Maintenance schedules and service preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Service Provision</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Scheduling and performing HVAC maintenance and installations</li>
                <li>Providing emergency repair services</li>
                <li>Maintaining equipment warranties and service records</li>
                <li>Processing payments and managing billing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Communication</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Appointment confirmations and service reminders</li>
                <li>Technical support and customer service</li>
                <li>Safety notifications and equipment recalls</li>
                <li>Marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.3 Business Operations</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Quality assurance and service improvement</li>
                <li>Compliance with legal and regulatory requirements</li>
                <li>Insurance and liability purposes</li>
                <li>Training and certification of our technicians</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Sharing and Third Parties</h2>
              
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Partners:</strong> Authorized equipment manufacturers for warranty claims</li>
                <li><strong>Payment Processors:</strong> Secure payment handling (Stripe, PayPal)</li>
                <li><strong>Insurance Providers:</strong> For liability and coverage purposes</li>
                <li><strong>Regulatory Bodies:</strong> When required by law (Gas Safe Register, etc.)</li>
                <li><strong>Emergency Services:</strong> In case of safety incidents</li>
              </ul>
              
              <p className="mb-4">We never sell your personal data to third parties for marketing purposes.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Records:</strong> 7 years (for warranty and legal compliance)</li>
                <li><strong>Financial Records:</strong> 6 years (HMRC requirements)</li>
                <li><strong>Safety Certificates:</strong> As required by law (typically 5-10 years)</li>
                <li><strong>Marketing Data:</strong> Until you withdraw consent</li>
                <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              
              <p className="mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Object:</strong> Opt out of certain types of processing</li>
                <li><strong>Automated Decision-Making:</strong> Request human review of automated decisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              
              <p className="mb-4">We implement appropriate security measures including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
              
              <p className="mb-4">
                Some of our service providers may be located outside the UK. When we transfer data internationally, 
                we ensure appropriate safeguards are in place, including adequacy decisions or standard contractual clauses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              
              <p className="mb-4">For any privacy-related questions or to exercise your rights:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Data Protection Officer</strong></p>
                <p>Email: privacy@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
                <p>Post: MaintenIQ Ltd, Data Protection, [Address]</p>
              </div>
              
              <p className="mt-4">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                if you believe your data protection rights have been breached.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;