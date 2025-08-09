import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Clock, Star, Wrench } from "lucide-react";

export function TrustMetrics() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count: properties } = useCounterAnimation(isVisible ? 500 : 0, 2000);
  const { count: uptime } = useCounterAnimation(isVisible ? 99.2 : 0, 2000, 300);
  const { count: response } = useCounterAnimation(isVisible ? 4 : 0, 1500, 600);
  const { count: satisfaction } = useCounterAnimation(isVisible ? 4.9 : 0, 2000, 900);

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
        <Wrench className="w-6 h-6 text-accent-orange mx-auto mb-2" />
        <div className="text-2xl font-bold text-foreground">{satisfaction.toFixed(1)}/5</div>
        <div className="text-xs text-muted-foreground">Client satisfaction</div>
      </div>
    </div>
  );
}