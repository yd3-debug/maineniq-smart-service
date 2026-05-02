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
  aggregateRating
}: ReviewSchemaProps) => {
  useEffect(() => {
    if (reviews.length === 0 && !aggregateRating) return;

    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.mainteniq.co.uk/#organization",
      "name": "Mainteniq",
      "url": "https://www.mainteniq.co.uk",
      "logo": "https://www.mainteniq.co.uk/LOGOPETRU2.png",
      ...(aggregateRating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue.toString(),
          "reviewCount": aggregateRating.reviewCount.toString(),
          "bestRating": (aggregateRating.bestRating || 5).toString(),
          "worstRating": (aggregateRating.worstRating || 1).toString()
        }
      }),
      "review": reviews.map(review => ({
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
      }))
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
