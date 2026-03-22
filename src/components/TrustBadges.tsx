import { Shield, Award, CheckCircle, Clock } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Gas Safe Registered",
      description: "Certified heating engineers",
      schema: {
        "@type": "Certification",
        "name": "Gas Safe Registration",
        "issuedBy": "Gas Safe Register"
      }
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "NICEIC Approved",
      description: "Qualified electrical contractors",
      schema: {
        "@type": "Certification",
        "name": "NICEIC Approved Contractor",
        "issuedBy": "NICEIC"
      }
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "F-Gas Certified",
      description: "Air conditioning specialists",
      schema: {
        "@type": "Certification",
        "name": "F-Gas Certification",
        "issuedBy": "REFCOM"
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency",
      description: "Round-the-clock service",
      schema: {
        "@type": "Service",
        "serviceType": "Emergency Support",
        "hoursAvailable": "24/7"
      }
    }
  ];

  return (
    <div className="py-8 md:py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-card hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-3">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
