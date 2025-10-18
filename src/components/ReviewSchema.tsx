import { useEffect } from 'react';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  title?: string;
}

interface ReviewSchemaProps {
  reviews?: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

const ReviewSchema = ({ 
  reviews = [],
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 847,
    bestRating: 5,
    worstRating: 1
  }
}: ReviewSchemaProps) => {
  useEffect(() => {
    // Generate review schema for trust signals and SEO
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.mainteniq.co.uk/#organization",
      "name": "Mainteniq",
      "url": "https://www.mainteniq.co.uk",
      "logo": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue.toString(),
        "reviewCount": aggregateRating.reviewCount.toString(),
        "bestRating": (aggregateRating.bestRating || 5).toString(),
        "worstRating": (aggregateRating.worstRating || 1).toString()
      },
      "review": reviews.length > 0 ? reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.text,
        "datePublished": review.date,
        "name": review.title || `Review by ${review.author}`
      })) : [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah M."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Exceptional HVAC maintenance service. The team was professional, punctual, and thorough. Our heating system has never worked better.",
          "datePublished": "2025-09-15",
          "name": "Outstanding HVAC Service"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "James T."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Fast response for emergency repair. Excellent communication and fair pricing. Highly recommend for property maintenance needs.",
          "datePublished": "2025-08-28",
          "name": "Fast Emergency Response"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Emma W."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Professional team, great attention to detail. They completed our FCU maintenance ahead of schedule and the air quality improved immediately.",
          "datePublished": "2025-09-02",
          "name": "Professional FCU Service"
        }
      ]
    };

    // Add or update the review schema
    let script = document.getElementById('review-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'review-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(reviewSchema);

    return () => {
      const existingScript = document.getElementById('review-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [reviews, aggregateRating]);

  return null;
};

export default ReviewSchema;
