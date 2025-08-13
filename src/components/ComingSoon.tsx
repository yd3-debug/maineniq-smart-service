import { Calendar, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  expectedDate?: string;
  features?: string[];
}

export const ComingSoon = ({ 
  title = "Case Studies",
  subtitle = "Comprehensive HVAC maintenance success stories and project portfolios",
  expectedDate = "February 2025",
  features = [
    "Detailed project breakdowns and technical specifications",
    "Before and after performance metrics",
    "Client testimonials and success stories",
    "Energy efficiency improvements and cost savings",
    "Professional maintenance case studies"
  ]
}: ComingSoonProps) => {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-medium">Currently in Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl font-light mb-6 text-foreground">
            {title}
            <span className="block font-bold text-primary mt-2">
              Coming Soon
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Expected Launch Date */}
          <Card className="max-w-md mx-auto mb-12 bg-white/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Expected Launch</span>
              </div>
              <div className="text-2xl font-bold text-foreground">{expectedDate}</div>
            </CardContent>
          </Card>

          {/* What's Coming */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">What's Coming</h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-muted-foreground mb-6">
              In the meantime, explore our services or get in touch for a consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <a href="/services">View Our Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="/contact">Get Free Quote</a>
              </Button>
            </div>
          </div>

          {/* Development Note - Only visible with dev parameter */}
          {new URLSearchParams(window.location.search).get('dev') === 'true' && (
            <div className="mt-16 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Wrench className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Developer Mode:</strong> You're seeing this because you have ?dev=true in the URL. 
                    Remove this parameter to see the public coming soon page.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};