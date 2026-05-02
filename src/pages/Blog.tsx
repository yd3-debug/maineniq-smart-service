import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema } from '@/utils/structuredData';

const Blog = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.mainteniq.co.uk' },
    { name: 'Blog', url: 'https://www.mainteniq.co.uk/blog' }
  ];

  return (
    <>
      <SEOHead
        title="Property Maintenance Blog - Expert Tips & Guides | Mainteniq"
        description="Maintenance, compliance and energy advice for London landlords, Airbnb hosts and property managers. CP12, EICR, MEES, HIU, MVHR — practical guides."
        keywords="HVAC blog, maintenance tips, energy efficiency, property management, London heating advice"
        ogImage="https://www.mainteniq.co.uk/og-image-mainteniq.png"
        breadcrumbData={generateBreadcrumbSchema(breadcrumbs)}
      />

      <div className="min-h-screen bg-background">
        <section className="relative py-10 sm:py-14 md:py-20 bg-gradient-to-br from-primary via-primary-glow to-accent-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Property Maintenance Insights
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-white/90">
                Expert advice, maintenance tips, and industry insights from the Mainteniq team in London
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Articles Coming Soon</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're working on expert guides covering HVAC maintenance, energy efficiency, boiler servicing, and more.
              Check back soon or contact us directly if you have a question about your property.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
