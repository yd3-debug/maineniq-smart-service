import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const HealthSafetyPolicy = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Health & Safety Policy", url: "https://www.mainteniq.co.uk/health-safety-policy" }
  ]);

  return (
    <>
      <SEOHead 
        title="Health & Safety Policy - MaintenIQ HVAC Services"
        description="MaintenIQ's comprehensive health and safety policy for HVAC work. Our commitment to safe working practices and regulatory compliance."
        keywords="health safety policy, HVAC safety, workplace safety, Gas Safe, MaintenIQ"
        canonicalUrl="https://www.mainteniq.co.uk/health-safety-policy"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Health & Safety Policy</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Health & Safety Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025 | Policy Version 3.0</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Commitment</h2>
              <p className="mb-4">
                MaintenIQ is committed to maintaining the highest standards of health and safety for our 
                employees, customers, and the public. We believe that all workplace accidents and 
                occupational ill health are preventable.
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Our Health & Safety Objectives:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Zero accidents and incidents</li>
                  <li>Full regulatory compliance</li>
                  <li>Continuous improvement in safety standards</li>
                  <li>Comprehensive training for all staff</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Legal Compliance</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Key Regulations</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Health and Safety at Work Act 1974</strong> - Primary legislation</li>
                <li><strong>Gas Safety (Installation and Use) Regulations 1998</strong> - Gas work compliance</li>
                <li><strong>F-Gas Regulations</strong> - Refrigerant handling and certification</li>
                <li><strong>Construction (Design and Management) Regulations 2015</strong> - Construction site safety</li>
                <li><strong>COSHH Regulations</strong> - Chemical and substance safety</li>
                <li><strong>Working at Height Regulations</strong> - Elevated work safety</li>
                <li><strong>Electricity at Work Regulations</strong> - Electrical safety</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Certifications and Registrations</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Gas Safe Register - All gas engineers certified</li>
                <li>F-Gas Category I certification for refrigerant work</li>
                <li>NICEIC electrical certification</li>
                <li>PASMA tower scaffold training</li>
                <li>First Aid at Work certification</li>
                <li>CSCS cards for construction sites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Risk Assessment Procedures</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Pre-Work Risk Assessment</h3>
              <p className="mb-4">Before commencing any work, our engineers conduct comprehensive risk assessments covering:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Site-specific hazards and environmental conditions</li>
                <li>Equipment and tool safety requirements</li>
                <li>Access and egress routes</li>
                <li>Emergency procedures and escape routes</li>
                <li>Personal protective equipment requirements</li>
                <li>Interaction with other trades and occupants</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Dynamic Risk Assessment</h3>
              <p className="mb-4">
                Our engineers are trained to continuously assess and adapt to changing conditions 
                throughout the work process, implementing additional controls as needed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Safety Procedures by Service Type</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Gas Work Safety</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Gas leak detection before and after work</li>
                <li>Proper ventilation and gas monitoring</li>
                <li>Lock-off/tag-out procedures for gas supplies</li>
                <li>Tightness testing and safety checks</li>
                <li>Emergency shutdown procedures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Electrical Work Safety</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Isolation and proving dead procedures</li>
                <li>Appropriate test equipment and PPE</li>
                <li>Lockout/tagout procedures</li>
                <li>Installation testing and certification</li>
                <li>Arc flash risk assessment</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.3 Working at Height</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Hierarchy of controls (eliminate, reduce, protect)</li>
                <li>Ladder and scaffold safety inspections</li>
                <li>Fall protection equipment</li>
                <li>Weather condition assessments</li>
                <li>Rescue procedures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.4 Refrigerant Handling</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>F-Gas certified engineer requirements</li>
                <li>Proper recovery and recycling procedures</li>
                <li>Leak detection and repair protocols</li>
                <li>Record keeping and reporting</li>
                <li>Environmental protection measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Personal Protective Equipment (PPE)</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Standard PPE Requirements</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Safety footwear with steel toe caps and puncture resistance</li>
                <li>High-visibility clothing for road work and construction sites</li>
                <li>Hard hats for overhead work and construction sites</li>
                <li>Safety glasses and face protection</li>
                <li>Cut-resistant gloves for appropriate tasks</li>
                <li>Respiratory protection for dusty environments</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Specialized PPE</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Arc flash suits for electrical panel work</li>
                <li>Chemical-resistant gloves and clothing</li>
                <li>Fall protection harnesses and lanyards</li>
                <li>Gas monitoring equipment</li>
                <li>Confined space entry equipment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Training and Competency</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Mandatory Training</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Health and Safety Awareness (annual refresh)</li>
                <li>Manual Handling (3-year refresh)</li>
                <li>First Aid at Work (3-year refresh)</li>
                <li>Gas Safe annual assessment</li>
                <li>F-Gas certification (5-year refresh)</li>
                <li>Working at Height (annual refresh)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Competency Assessment</h3>
              <p className="mb-4">
                All engineers undergo regular competency assessments to ensure they maintain 
                the required skills and knowledge for safe work practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Emergency Procedures</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Gas Emergencies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Immediate area evacuation</li>
                <li>Gas supply isolation</li>
                <li>National Gas Emergency Service: 0800 111 999</li>
                <li>No ignition sources or electrical switches</li>
                <li>Ventilation of affected areas</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 Electrical Emergencies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Immediate disconnection of supply (if safe to do so)</li>
                <li>Emergency services: 999</li>
                <li>First aid for electrical shock victims</li>
                <li>Building evacuation if fire risk</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.3 Accident Reporting</h3>
              <p className="mb-4">
                All accidents, near misses, and dangerous occurrences must be reported immediately 
                to management and investigated to prevent recurrence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Customer Safety</h2>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Clear communication of any safety risks</li>
                <li>Barrier and signage for work areas</li>
                <li>Safe storage of tools and materials</li>
                <li>Post-work safety briefings and documentation</li>
                <li>Emergency contact information provision</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Continuous Improvement</h2>
              
              <p className="mb-4">
                We regularly review and update our health and safety procedures based on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Incident investigations and lessons learned</li>
                <li>Industry best practices and new technologies</li>
                <li>Regulatory changes and guidance updates</li>
                <li>Employee feedback and suggestions</li>
                <li>External safety audits and assessments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Health & Safety Officer</strong></p>
                <p>Email: safety@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
                <p>Emergency: 999 (Life-threatening situations)</p>
                <p>Gas Emergency: 0800 111 999</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthSafetyPolicy;