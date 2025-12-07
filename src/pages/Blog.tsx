import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateWebSiteSchema } from '@/utils/structuredData';

const Blog = () => {
  const posts = [
    {
      slug: 'hvac-maintenance-frequency',
      title: 'How Often Should You Service Your HVAC System?',
      excerpt: 'Learn the optimal maintenance schedule for your heating and cooling systems to maximize efficiency and lifespan.',
      date: '2025-10-01',
      readTime: '5 min read',
      category: 'Maintenance Tips',
      image: '/hero-hvac.jpg'
    },
    {
      slug: 'fcu-maintenance-signs',
      title: '7 Signs Your FCU Needs Professional Maintenance',
      excerpt: 'Discover the warning signs that indicate your Fan Coil Unit requires immediate professional attention.',
      date: '2025-09-28',
      readTime: '4 min read',
      category: 'HVAC Systems',
      image: '/FCUclean.png'
    },
    {
      slug: 'energy-saving-london',
      title: 'Energy Saving Tips for London Homeowners',
      excerpt: 'Practical advice to reduce your heating bills while maintaining optimal comfort in your London property.',
      date: '2025-09-25',
      readTime: '6 min read',
      category: 'Energy Efficiency',
      image: '/og-image-mainteniq.png'
    },
    {
      slug: 'hiu-systems-guide',
      title: 'Understanding HIU Systems: A Complete Guide',
      excerpt: 'Everything you need to know about Heat Interface Units and why they\'re essential for modern properties.',
      date: '2025-09-20',
      readTime: '8 min read',
      category: 'Technical Guides',
      image: '/BOILER.png'
    },
    {
      slug: 'mvhr-vs-traditional',
      title: 'MVHR vs Traditional Ventilation: Which is Better?',
      excerpt: 'Compare Mechanical Ventilation with Heat Recovery against traditional systems to make an informed choice.',
      date: '2025-09-15',
      readTime: '7 min read',
      category: 'Ventilation',
      image: '/MVHRclean.webp'
    },
    {
      slug: 'smart-home-integration',
      title: 'Integrating Smart Home Technology with HVAC Systems',
      excerpt: 'How to combine smart home automation with your heating and cooling for maximum comfort and efficiency.',
      date: '2025-09-10',
      readTime: '6 min read',
      category: 'Smart Home',
      image: '/og-image-mainteniq.png'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.mainteniq.co.uk' },
    { name: 'Blog', url: 'https://www.mainteniq.co.uk/blog' }
  ];

  return (
    <>
      <SEOHead
        title="Property Maintenance Blog - Expert Tips & Guides | Mainteniq"
        description="Expert advice on HVAC maintenance, energy efficiency, and property management. Get professional insights from London's leading maintenance specialists."
        keywords="HVAC blog, maintenance tips, energy efficiency, property management, London heating advice"
        ogImage="https://www.mainteniq.co.uk/og-image-mainteniq.png"
        breadcrumbData={generateBreadcrumbSchema(breadcrumbs)}
        structuredData={generateWebSiteSchema()}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary-glow to-accent-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Property Maintenance Insights
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Expert advice, maintenance tips, and industry insights from London's leading property services specialists
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link 
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <span className="text-primary flex items-center group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get expert maintenance tips, energy saving advice, and exclusive offers delivered to your inbox
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
