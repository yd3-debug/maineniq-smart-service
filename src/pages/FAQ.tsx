import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of HVAC systems do you maintain and service?",
      answer: "We service all types of HVAC systems including FCU (Fan Coil Units), HIU (Heat Interface Units), MVHR (Mechanical Ventilation Heat Recovery), CIU (Chilled Interface Units), air conditioning systems, heating boilers, and ventilation systems for both commercial and residential properties."
    },
    {
      question: "How often should HVAC systems be serviced?",
      answer: "We recommend quarterly maintenance for commercial systems and bi-annual servicing for residential systems. However, the frequency depends on system usage, environmental conditions, and manufacturer recommendations. Regular maintenance prevents breakdowns and ensures optimal efficiency."
    },
    {
      question: "Do you provide emergency call-out services?",
      answer: "Yes, we offer 24/7 emergency call-out services for critical system failures. Our qualified engineers can respond quickly to HVAC breakdowns, heating failures, electrical issues, and plumbing emergencies to minimize downtime and restore comfort."
    },
    {
      question: "What areas in the UK do you serve?",
      answer: "We provide services across the UK, with particular expertise in London and surrounding areas including Greater London, Essex, Kent, Surrey, Hertfordshire, and Buckinghamshire. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Are your engineers qualified and insured?",
      answer: "Yes, all our engineers are fully qualified, certified, and insured. We hold relevant industry certifications including Gas Safe registration, NICEIC electrical certification, and manufacturer-specific training certifications for the systems we service."
    },
    {
      question: "What is included in your MVHR maintenance service?",
      answer: "Our MVHR maintenance includes filter replacement, heat exchanger cleaning and inspection, ductwork cleaning and leak testing, airflow balancing and optimization, performance testing and reporting, and recommendations for efficiency improvements."
    },
    {
      question: "Do you offer smart home installation and automation services?",
      answer: "Yes, we provide comprehensive smart home installation including smart thermostats, lighting control systems, security systems, entertainment centers, voice assistant integration, and home automation platforms for modern connected living."
    },
    {
      question: "What does your end-of-tenancy cleaning service include?",
      answer: "Our end-of-tenancy cleaning includes deep cleaning of all rooms, kitchen appliances, bathrooms, windows, carpets, and common areas. We ensure properties meet landlord and letting agent standards for deposit return."
    },
    {
      question: "Do you provide Building Management System (BMS) installation?",
      answer: "Yes, we install and maintain Building Management Systems for commercial properties. This includes HVAC control systems, energy monitoring, lighting control, security integration, and automated building operations for improved efficiency and management."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer competitive transparent pricing with free initial consultations and quotes. Pricing varies based on service type, property size, and system complexity. We provide detailed quotes upfront with no hidden fees and offer both one-off services and maintenance contracts."
    },
    {
      question: "How can I book a service or get a quote?",
      answer: "You can book a service by calling us at +44 (0) 189 55 28 226, emailing info@mainteniq.co.uk, or using our online contact form. We provide free consultations and detailed quotes for all services."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer comprehensive maintenance contracts for both commercial and residential properties. These include scheduled preventive maintenance, priority emergency response, discounted repairs, and detailed reporting to help maintain optimal system performance."
    }
  ];

  const faqData = generateFAQSchema(faqs);
  
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.mainteniq.co.uk/" },
    { name: "FAQ", url: "https://www.mainteniq.co.uk/faq" }
  ]);

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions | HVAC, Plumbing & Property Services FAQ"
        description="Get answers to common questions about our HVAC maintenance, plumbing, electrical, handyman, BMS, smart home and end-of-tenancy cleaning services across the UK."
        keywords="HVAC FAQ, property maintenance questions, FCU HIU MVHR service questions, emergency repair services, UK property maintenance, smart home installation FAQ"
        canonicalUrl="https://www.mainteniq.co.uk/faq"
        structuredData={faqData}
        breadcrumbData={breadcrumbData}
      />
      
      <div className="min-h-screen pt-16 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our professional property maintenance services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+441895528226" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                Call +44 (0) 189 55 28 226
              </a>
              <a 
                href="mailto:info@mainteniq.co.uk" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;