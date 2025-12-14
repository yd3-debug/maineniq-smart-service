import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const AntiSlaveryStatement = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Anti-Slavery Statement", url: "https://www.mainteniq.co.uk/anti-slavery-statement" }
  ]);

  return (
    <>
      <SEOHead 
        title="Anti-Slavery Statement - MaintenIQ HVAC Services"
        description="MaintenIQ's Modern Slavery Act statement outlining our commitment to preventing slavery and human trafficking in our operations and supply chain."
        keywords="anti-slavery statement, modern slavery act, human trafficking, MaintenIQ, ethical business"
        canonicalUrl="https://www.mainteniq.co.uk/anti-slavery-statement"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Anti-Slavery Statement</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Anti-Slavery Statement</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Modern Slavery Act 2015 Statement | Financial Year 2024-2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out 
                the steps that MaintenIQ has taken and is continuing to take to ensure that modern slavery 
                or human trafficking is not taking place within our business or supply chain.
              </p>
              
              <p className="mb-4">
                Modern slavery encompasses slavery, servitude, human trafficking, and forced labor. 
                MaintenIQ has a zero-tolerance approach to any form of modern slavery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. About MaintenIQ</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Our Business</h3>
              <p className="mb-4">
                MaintenIQ is a UK-based HVAC services company providing maintenance, installation, 
                and repair services for heating, ventilation, and air conditioning systems across 
                residential and commercial properties.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.2 Our Structure</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Limited company incorporated in England and Wales</li>
                <li>Headquarters and operations based in the UK</li>
                <li>Direct employment of qualified HVAC engineers and support staff</li>
                <li>Subcontractor network of verified, local tradespeople</li>
                <li>Supply chain of equipment manufacturers and parts suppliers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Our Policies</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Anti-Slavery Policy</h3>
              <p className="mb-4">
                We have implemented a comprehensive Anti-Slavery Policy that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sets out our commitment to preventing modern slavery</li>
                <li>Establishes clear expectations for employees and business partners</li>
                <li>Provides guidance on identifying and reporting concerns</li>
                <li>Outlines disciplinary measures for policy violations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Related Policies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Recruitment Policy:</strong> Ethical hiring practices and documentation requirements</li>
                <li><strong>Whistleblowing Policy:</strong> Safe reporting mechanisms for concerns</li>
                <li><strong>Supplier Code of Conduct:</strong> Ethical standards for business partners</li>
                <li><strong>Equal Opportunities Policy:</strong> Fair treatment and non-discrimination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Risk Assessment</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Business Risk Areas</h3>
              <p className="mb-4">We have identified the following areas where modern slavery risks may exist:</p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-amber-800">Low Risk Areas:</p>
                <ul className="list-disc pl-6 space-y-1 text-amber-700">
                  <li>Direct employees (comprehensive vetting and UK-based)</li>
                  <li>Major equipment suppliers (established manufacturers)</li>
                  <li>Professional services (legal, accounting, insurance)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-orange-800">Medium Risk Areas:</p>
                <ul className="list-disc pl-6 space-y-1 text-orange-700">
                  <li>Subcontractor network (varying business practices)</li>
                  <li>Component and parts suppliers (complex supply chains)</li>
                  <li>Cleaning and maintenance services for our facilities</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">4.2 Supply Chain Assessment</h3>
              <p className="mb-4">
                Our supply chain primarily consists of UK and EU-based suppliers, which typically 
                present lower modern slavery risks. However, we recognize that global supply chains 
                for HVAC components may involve higher-risk regions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Due Diligence Procedures</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Employee Due Diligence</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to work verification for all employees</li>
                <li>Enhanced vetting for positions requiring security clearance</li>
                <li>Regular review of employment documentation</li>
                <li>Fair wage policies and transparent payment systems</li>
                <li>Open communication channels for concerns</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Subcontractor Due Diligence</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Pre-qualification assessments including modern slavery questions</li>
                <li>Site visits and working condition assessments</li>
                <li>Insurance and certification verification</li>
                <li>Annual review of subcontractor practices</li>
                <li>Contractual obligations regarding ethical practices</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.3 Supplier Due Diligence</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Supplier questionnaires covering labor practices</li>
                <li>Factory audits for significant suppliers</li>
                <li>Certification requirements (e.g., ETI Base Code compliance)</li>
                <li>Regular monitoring and review processes</li>
                <li>Escalation procedures for non-compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Training and Awareness</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Employee Training</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Annual modern slavery awareness training for all staff</li>
                <li>Specialized training for procurement and HR teams</li>
                <li>Management training on risk identification and response</li>
                <li>Induction training for new employees</li>
                <li>Regular updates on policy changes and best practices</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Training Content</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Definition and examples of modern slavery</li>
                <li>Indicators and red flags to watch for</li>
                <li>Reporting procedures and support mechanisms</li>
                <li>Legal obligations and company policies</li>
                <li>Case studies and scenario-based learning</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Reporting and Response</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Reporting Mechanisms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Confidential whistleblowing hotline</li>
                <li>Anonymous online reporting system</li>
                <li>Direct reporting to management or HR</li>
                <li>Third-party reporting services</li>
                <li>Protection for whistleblowers against retaliation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 Investigation and Response</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Prompt investigation of all reports</li>
                <li>Engagement with law enforcement where appropriate</li>
                <li>Support for victims and affected individuals</li>
                <li>Remedial action and process improvements</li>
                <li>Regular review and updating of procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Key Performance Indicators</h2>
              
              <p className="mb-4">We measure our effectiveness in preventing modern slavery through:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Percentage of suppliers completing modern slavery assessments</li>
                <li>Number of employees trained on modern slavery awareness</li>
                <li>Frequency of supply chain audits and assessments</li>
                <li>Response time to investigate reported concerns</li>
                <li>Implementation of corrective actions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. 2024 Progress and Future Commitments</h2>
              
              <h3 className="text-xl font-semibold mb-3">9.1 Progress Made</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Updated and enhanced anti-slavery policies</li>
                <li>Completed modern slavery training for 100% of employees</li>
                <li>Conducted risk assessments for all major suppliers</li>
                <li>Implemented enhanced due diligence procedures</li>
                <li>Established clear reporting mechanisms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">9.2 Future Commitments</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Annual review and update of risk assessments</li>
                <li>Enhanced supplier audit program</li>
                <li>Development of sector-specific guidance</li>
                <li>Collaboration with industry partners on best practices</li>
                <li>Continuous improvement of monitoring systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Approval and Review</h2>
              
              <p className="mb-4">
                This statement has been approved by the MaintenIQ board of directors and will be 
                reviewed annually. Any significant changes to our business or supply chain will 
                trigger an immediate review of this statement.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Approved by:</strong> [Director Name]</p>
                <p><strong>Position:</strong> Managing Director</p>
                <p><strong>Date:</strong> January 2025</p>
                <p><strong>Next Review:</strong> January 2026</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              
              <p className="mb-4">
                For questions about this statement or to report concerns:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Compliance Officer</strong></p>
                <p>Email: compliance@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
                <p>Confidential Hotline: [Number]</p>
                <p>Modern Slavery Helpline: 08000 121 700</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AntiSlaveryStatement;