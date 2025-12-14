import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const ComplaintsProcedure = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Complaints Procedure", url: "https://www.mainteniq.co.uk/complaints-procedure" }
  ]);

  return (
    <>
      <SEOHead 
        title="Complaints Procedure - MaintenIQ HVAC Services"
        description="How to make a complaint about MaintenIQ services. Our formal complaints handling process and resolution procedures."
        keywords="complaints procedure, customer service, complaint resolution, MaintenIQ, HVAC services"
        canonicalUrl="https://www.mainteniq.co.uk/complaints-procedure"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Complaints Procedure</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Complaints Procedure</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025 | Version 3.0</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to Customer Service</h2>
              <p className="mb-4">
                At MaintenIQ, we are committed to providing exceptional HVAC services and customer care. 
                We welcome feedback and take all complaints seriously as an opportunity to improve our services.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-blue-800">Our Service Standards:</p>
                <ul className="list-disc pl-6 space-y-1 text-blue-700">
                  <li>Acknowledge complaints within 1 working day</li>
                  <li>Resolve most complaints within 7 working days</li>
                  <li>Provide regular updates throughout the process</li>
                  <li>Offer fair and reasonable resolutions</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. What is a Complaint?</h2>
              
              <p className="mb-4">
                A complaint is an expression of dissatisfaction with our service delivery, staff conduct, 
                or any aspect of our business operations. This includes:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Poor quality workmanship or service delivery</li>
                <li>Delays in service provision or communication</li>
                <li>Billing or pricing concerns</li>
                <li>Staff behavior or professionalism issues</li>
                <li>Health and safety concerns</li>
                <li>Environmental or property damage issues</li>
                <li>Failure to meet agreed service standards</li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-yellow-800">Not a Complaint:</p>
                <ul className="list-disc pl-6 space-y-1 text-yellow-700">
                  <li>Routine service requests or inquiries</li>
                  <li>First-time reports of defects (handled as service calls)</li>
                  <li>Requests for information or quotes</li>
                  <li>General feedback or suggestions</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How to Make a Complaint</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Contact Methods</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Primary Contact Methods:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> complaints@mainteniq.co.uk</li>
                  <li><strong>Phone:</strong> +44 (0) 189 55 28 226</li>
                  <li><strong>Online Form:</strong> Available on our website</li>
                  <li><strong>Post:</strong> MaintenIQ Ltd, Complaints Department, [Address]</li>
                  <li><strong>In Person:</strong> Speak to any engineer or office staff</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">3.2 Information to Include</h3>
              <p className="mb-4">To help us resolve your complaint quickly, please provide:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your name and contact details</li>
                <li>Property address where service was provided</li>
                <li>Date(s) of service or incident</li>
                <li>Engineer or staff member names (if known)</li>
                <li>Job reference number or invoice number</li>
                <li>Clear description of the problem</li>
                <li>What outcome you are seeking</li>
                <li>Any supporting evidence (photos, documents)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.3 Anonymous Complaints</h3>
              <p className="mb-4">
                While we prefer complaints with contact details for follow-up, we will investigate 
                anonymous complaints, particularly those relating to safety or regulatory compliance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Our Complaints Process</h2>
              
              <h3 className="text-xl font-semibold mb-3">Stage 1: Initial Response</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-green-800">Within 1 Working Day:</p>
                <ul className="list-disc pl-6 space-y-1 text-green-700">
                  <li>Complaint acknowledgment with reference number</li>
                  <li>Explanation of our process and timescales</li>
                  <li>Assignment to appropriate investigator</li>
                  <li>Request for additional information if needed</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Stage 2: Investigation</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-blue-800">Within 3-5 Working Days:</p>
                <ul className="list-disc pl-6 space-y-1 text-blue-700">
                  <li>Full investigation of the complaint</li>
                  <li>Interview with relevant staff members</li>
                  <li>Review of job records and documentation</li>
                  <li>Site visit if necessary</li>
                  <li>Assessment of evidence and circumstances</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Stage 3: Resolution</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-purple-800">Within 7 Working Days:</p>
                <ul className="list-disc pl-6 space-y-1 text-purple-700">
                  <li>Written response with investigation findings</li>
                  <li>Explanation of our decision</li>
                  <li>Proposed resolution or remedy</li>
                  <li>Implementation timeline for agreed actions</li>
                  <li>Information about escalation options</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Types of Resolutions</h2>
              
              <p className="mb-4">Depending on the nature and validity of your complaint, we may offer:</p>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Service Remedies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Free return visit to correct workmanship issues</li>
                <li>Replacement or repair of faulty equipment</li>
                <li>Completion of incomplete work at no charge</li>
                <li>Additional maintenance or service provisions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Financial Remedies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Full or partial refund of charges</li>
                <li>Compensation for inconvenience or additional costs</li>
                <li>Waiver of future service charges</li>
                <li>Payment for third-party repair costs (where appropriate)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.3 Process Improvements</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Staff training and development</li>
                <li>Process changes to prevent recurrence</li>
                <li>Policy updates and clarifications</li>
                <li>Enhanced quality control measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Complex Complaints</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Extended Investigations</h3>
              <p className="mb-4">
                Some complaints may require extended investigation periods, particularly those involving:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Multiple site visits or technical assessments</li>
                <li>Third-party expert opinions</li>
                <li>Insurance or warranty claim processes</li>
                <li>Regulatory body investigations</li>
                <li>Legal or contractual complexities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Regular Updates</h3>
              <p className="mb-4">
                For extended investigations, we will provide weekly progress updates and 
                revised completion timescales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Escalation Options</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Internal Escalation</h3>
              <p className="mb-4">If you are not satisfied with our initial response, you can escalate to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Customer Service Manager</strong> - For service delivery issues</li>
                <li><strong>Operations Director</strong> - For technical or safety concerns</li>
                <li><strong>Managing Director</strong> - For serious complaints or final review</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 External Escalation</h3>
              <p className="mb-4">If internal escalation doesn't resolve your concern, you may contact:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Gas Safe Register</strong> - For gas safety concerns (0800 408 5500)</li>
                <li><strong>Trading Standards</strong> - For consumer protection issues</li>
                <li><strong>Citizens Advice</strong> - For consumer guidance and support</li>
                <li><strong>Ombudsman Services</strong> - For independent dispute resolution</li>
                <li><strong>Small Claims Court</strong> - For unresolved financial disputes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Learning from Complaints</h2>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Continuous Improvement</h3>
              <p className="mb-4">We use complaints data to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Identify trends and recurring issues</li>
                <li>Improve training and procedures</li>
                <li>Enhance service quality standards</li>
                <li>Update policies and documentation</li>
                <li>Prevent similar complaints in the future</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">8.2 Reporting and Monitoring</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Monthly complaints analysis and reporting</li>
                <li>Quarterly review with senior management</li>
                <li>Annual customer satisfaction surveys</li>
                <li>Industry benchmarking and best practice sharing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Record Keeping</h2>
              
              <p className="mb-4">
                We maintain comprehensive records of all complaints for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Quality assurance and audit purposes</li>
                <li>Regulatory compliance requirements</li>
                <li>Insurance and legal protection</li>
                <li>Performance monitoring and improvement</li>
                <li>Training and development purposes</li>
              </ul>
              
              <p className="mb-4">
                All records are stored securely and in compliance with data protection regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Complaints Department</p>
                <p><strong>Email:</strong> complaints@mainteniq.co.uk</p>
                <p><strong>Phone:</strong> +44 (0) 189 55 28 226</p>
                <p><strong>Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM</p>
                <p><strong>Emergency:</strong> 24/7 for urgent safety concerns</p>
                <p><strong>Post:</strong> MaintenIQ Ltd, Complaints Department, [Address]</p>
              </div>
              
              <p className="mt-4">
                We are committed to resolving your complaint fairly and efficiently. 
                Your feedback helps us maintain and improve our service standards.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintsProcedure;