import { useScrollAnimation, useCounterAnimation } from "@/hooks/useScrollAnimation";
import { Activity, Zap, Monitor, TrendingUp } from "lucide-react";
import { useEffect } from "react";

export function BMSMetrics() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count: energySavings, startAnimation: startEnergy } = useCounterAnimation(25, 2000);
  const { count: monitoringPoints, startAnimation: startPoints } = useCounterAnimation(1000, 2500);
  const { count: responseTime, startAnimation: startResponse } = useCounterAnimation(2, 1500);
  const { count: efficiency, startAnimation: startEfficiency } = useCounterAnimation(20, 2000);

  useEffect(() => {
    if (isVisible) {
      startEnergy();
      setTimeout(() => startPoints(), 200);
      setTimeout(() => startResponse(), 400);
      setTimeout(() => startEfficiency(), 600);
    }
  }, [isVisible, startEnergy, startPoints, startResponse, startEfficiency]);

  const metrics = [
    {
      icon: Zap,
      value: energySavings,
      suffix: "%",
      label: "Energy Savings",
      description: "Typical reduction in energy costs",
      gradient: "from-energy-gold to-amber-600"
    },
    {
      icon: Monitor,
      value: monitoringPoints,
      suffix: "+",
      label: "Monitoring Points",
      description: "Data points tracked in real-time",
      gradient: "from-trust-blue to-blue-600"
    },
    {
      icon: Activity,
      value: responseTime,
      suffix: "min",
      label: "Response Time",
      description: "Average alert response time",
      gradient: "from-success to-emerald-600"
    },
    {
      icon: TrendingUp,
      value: efficiency,
      suffix: "%",
      label: "Efficiency Gains",
      description: "Overall building performance improvement",
      gradient: "from-accent-orange to-orange-600"
    }
  ];

  return (
    <div ref={ref as any} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {metrics.map((metric, index) => (
        <div key={metric.label} className="group relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-lg opacity-10 group-hover:opacity-20 transition-opacity`} />
          <div className="relative text-center p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {metric.value}{metric.suffix}
            </div>
            <div className="text-sm font-medium text-foreground mb-2">{metric.label}</div>
            <div className="text-xs text-muted-foreground">{metric.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}