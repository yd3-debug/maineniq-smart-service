import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { generateBreadcrumbSchema } from "../utils/structuredData";

const EnvironmentalPolicy = () => {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "Environmental Policy", url: "https://www.mainteniq.co.uk/environmental-policy" }
  ]);

  return (
    <>
      <SEOHead 
        title="Environmental Policy - MaintenIQ HVAC Services"
        description="MaintenIQ's environmental policy and commitment to sustainable HVAC practices, energy efficiency, and environmental protection."
        keywords="environmental policy, sustainable HVAC, energy efficiency, F-Gas regulations, MaintenIQ"
        canonicalUrl="https://www.mainteniq.co.uk/environmental-policy"
        breadcrumbData={breadcrumbData}
      />
      <LocalBusinessSchema businessType="Property Maintenance" />
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm breadcrumbs mb-6">
            <ol className="flex space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li className="before:content-['/'] before:mx-2">Environmental Policy</li>
            </ol>
          </nav>
          
          <h1 className="font-heading text-4xl font-bold mb-8">Environmental Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 2025 | Policy Version 2.0</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Our Environmental Commitment</h2>
              <p className="mb-4">
                MaintenIQ is committed to minimizing our environmental impact while delivering 
                exceptional HVAC services. We recognize our responsibility to protect the environment 
                for future generations and integrate environmental considerations into all our operations.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-green-800">Our Environmental Goals:</p>
                <ul className="list-disc pl-6 space-y-1 text-green-700">
                  <li>Reduce carbon emissions by 30% by 2026</li>
                  <li>Achieve 95% waste diversion from landfill</li>
                  <li>Promote energy-efficient HVAC solutions</li>
                  <li>Ensure 100% compliant refrigerant recovery</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Regulatory Compliance</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 F-Gas Regulations</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Full compliance with EU F-Gas Regulation (517/2014) as retained in UK law</li>
                <li>Certified engineers for all refrigerant handling activities</li>
                <li>Proper recovery, recycling, and destruction of refrigerants</li>
                <li>Accurate record-keeping and reporting of refrigerant quantities</li>
                <li>Regular leak detection and repair programs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Environmental Legislation</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Environmental Protection Act compliance</li>
                <li>Waste Electrical and Electronic Equipment (WEEE) Regulations</li>
                <li>Hazardous Waste Regulations</li>
                <li>Air Quality Standards and emissions control</li>
                <li>Water pollution prevention measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Sustainable HVAC Solutions</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Energy-Efficient Technologies</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Heat Pumps:</strong> Promoting low-carbon heating solutions</li>
                <li><strong>Variable Speed Drives:</strong> Optimizing system efficiency</li>
                <li><strong>Smart Controls:</strong> Advanced Building Management Systems</li>
                <li><strong>High-Efficiency Equipment:</strong> ErP Directive compliant systems</li>
                <li><strong>Heat Recovery:</strong> MVHR and energy recovery ventilation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Low-GWP Refrigerants</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Transitioning to natural refrigerants (CO2, ammonia, hydrocarbons)</li>
                <li>Utilizing HFO refrigerants with lower global warming potential</li>
                <li>Phasing out high-GWP refrigerants ahead of regulations</li>
                <li>Providing retrofit solutions for existing systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Waste Management</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 Refrigerant Recovery</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>100% recovery of refrigerants from decommissioned equipment</li>
                <li>Certified recovery equipment and trained personnel</li>
                <li>Proper storage and transportation to licensed facilities</li>
                <li>Documentation and traceability of all recovered refrigerants</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">4.2 Equipment and Materials</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Metal recycling: Copper, aluminum, and steel components</li>
                <li>WEEE compliance for electronic equipment disposal</li>
                <li>Hazardous waste disposal through licensed contractors</li>
                <li>Packaging waste minimization and recycling</li>
                <li>Reuse and refurbishment of suitable equipment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Carbon Reduction Initiatives</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Fleet Management</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Transition to electric and hybrid vehicles</li>
                <li>Route optimization to reduce fuel consumption</li>
                <li>Driver training for eco-efficient driving</li>
                <li>Regular vehicle maintenance for optimal efficiency</li>
                <li>Telematics monitoring of fuel consumption and emissions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">5.2 Office and Facilities</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>LED lighting and energy-efficient equipment</li>
                <li>Smart heating and cooling systems</li>
                <li>Paperless operations where possible</li>
                <li>Renewable energy procurement</li>
                <li>Water conservation measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Supply Chain Management</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 Supplier Selection</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Environmental criteria in supplier assessments</li>
                <li>Preference for local suppliers to reduce transport emissions</li>
                <li>Sustainable packaging and delivery requirements</li>
                <li>Supplier environmental policy alignment</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">6.2 Product Lifecycle</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Specifying products with extended lifespans</li>
                <li>Considering end-of-life disposal during selection</li>
                <li>Promoting modular and repairable equipment</li>
                <li>Supporting circular economy principles</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Environmental Training</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Staff Training Programs</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Environmental awareness for all employees</li>
                <li>F-Gas certification and ongoing competency</li>
                <li>Waste handling and disposal procedures</li>
                <li>Energy efficiency best practices</li>
                <li>Emergency environmental response</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">7.2 Customer Education</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Energy efficiency guidance and recommendations</li>
                <li>Optimal system operation training</li>
                <li>Environmental benefits of maintenance programs</li>
                <li>Upgrade options for improved efficiency</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Environmental Monitoring</h2>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Key Performance Indicators</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Carbon emissions per service call</li>
                <li>Refrigerant recovery rates</li>
                <li>Waste diversion from landfill</li>
                <li>Energy consumption per square meter served</li>
                <li>Customer energy savings achieved</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">8.2 Reporting and Review</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Annual environmental performance reports</li>
                <li>Quarterly management reviews</li>
                <li>Continuous improvement planning</li>
                <li>Stakeholder communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Innovation and Research</h2>
              
              <p className="mb-4">We actively support environmental innovation through:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Partnerships with equipment manufacturers on sustainable technologies</li>
                <li>Pilot projects for new low-carbon solutions</li>
                <li>Industry collaboration on environmental best practices</li>
                <li>Investment in emerging green technologies</li>
                <li>Knowledge sharing with industry peers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Emergency Environmental Response</h2>
              
              <h3 className="text-xl font-semibold mb-3">10.1 Spill Response</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Immediate containment procedures</li>
                <li>Environmental agency notification</li>
                <li>Professional cleanup and remediation</li>
                <li>Incident investigation and prevention</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">10.2 Refrigerant Leaks</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Rapid detection and isolation</li>
                <li>Recovery of escaped refrigerant where possible</li>
                <li>Repair and system integrity restoration</li>
                <li>Reporting as required by regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Environmental Officer</strong></p>
                <p>Email: environment@mainteniq.co.uk</p>
                <p>Phone: +44 (0) 189 55 28 226</p>
                <p>Environmental Emergency: 24/7 response available</p>
              </div>
              
              <p className="mt-4">
                For environmental incidents or concerns, please contact us immediately. 
                We are committed to transparent communication and rapid response.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentalPolicy;