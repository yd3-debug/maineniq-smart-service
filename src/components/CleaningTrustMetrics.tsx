import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Clock, Star, CheckCircle } from "lucide-react";

export function CleaningTrustMetrics() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count: depositsReturned } = useCounterAnimation(isVisible ? 98.7 : 0, 2000);
  const { count: propertiesCleaned } = useCounterAnimation(isVisible ? 850 : 0, 2000, 300);
  const { count: responseTime } = useCounterAnimation(isVisible ? 2 : 0, 1500, 600);
  const { count: satisfaction } = useCounterAnimation(isVisible ? 4.9 : 0, 2000, 900);

  return (
    <div ref={ref as any} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Shield className="w-6 h-6 text-success mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{depositsReturned.toFixed(1)}%</div>
        <div className="text-xs text-muted-foreground">Deposits successfully returned</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{propertiesCleaned}+</div>
        <div className="text-xs text-muted-foreground">Properties cleaned</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Clock className="w-6 h-6 text-accent-orange mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{responseTime}h</div>
        <div className="text-xs text-muted-foreground">Emergency response</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Star className="w-6 h-6 text-energy-gold mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{satisfaction.toFixed(1)}/5</div>
        <div className="text-xs text-muted-foreground">Landlord satisfaction</div>
      </div>
    </div>
  );
}