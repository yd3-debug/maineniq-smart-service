import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

const RelatedServices = ({ 
  services, 
  title = "Related Services" 
}: RelatedServicesProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border hover:border-primary/50">
                <CardHeader>
                  {service.icon && (
                    <div className="mb-4 text-primary">
                      {service.icon}
                    </div>
                  )}
                  <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                    {service.title}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
