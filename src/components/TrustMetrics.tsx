import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Clock, Star, Award } from "lucide-react";
import { useEffect } from "react";

export function TrustMetrics() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count: properties, startAnimation: startProperties } = useCounterAnimation(500, 2000);
  const { count: uptime, startAnimation: startUptime } = useCounterAnimation(99.2, 2000);
  const { count: response, startAnimation: startResponse } = useCounterAnimation(4, 1500);
  const { count: years, startAnimation: startYears } = useCounterAnimation(15, 2000);

  useEffect(() => {
    if (isVisible) {
      startProperties();
      setTimeout(() => startUptime(), 300);
      setTimeout(() => startResponse(), 600);
      setTimeout(() => startYears(), 900);
    }
  }, [isVisible, startProperties, startUptime, startResponse, startYears]);

  return (
    <div ref={ref as any} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Shield className="w-6 h-6 text-trust-blue mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{properties}+</div>
        <div className="text-xs text-muted-foreground">Properties maintained</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Star className="w-6 h-6 text-energy-gold mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{uptime.toFixed(1)}%</div>
        <div className="text-xs text-muted-foreground">System uptime</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Clock className="w-6 h-6 text-success mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{response}h</div>
        <div className="text-xs text-muted-foreground">Avg response time</div>
      </div>
      <div className="text-center p-4 bg-card border rounded-lg hover:shadow-card transition-all">
        <Award className="w-6 h-6 text-accent-orange mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{years}+</div>
        <div className="text-xs text-muted-foreground">Years experience</div>
      </div>
    </div>
  );
}