import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { TrendingUp, Zap, DollarSign, BrainCircuit, Users, Shield, CheckCircle } from "lucide-react";
import ResearchBadge from "@/components/ResearchBadge";

const chartData = [
  {
    category: "Energy Efficiency",
    value: 25,
    icon: Zap,
    color: "hsl(var(--energy-gold))"
  },
  {
    category: "Cost Reduction", 
    value: 22,
    icon: DollarSign,
    color: "hsl(var(--trust-blue))"
  },
  {
    category: "Employee Comfort",
    value: 18,
    icon: Users,
    color: "hsl(var(--accent-orange))"
  },
  {
    category: "System Reliability",
    value: 30,
    icon: Shield,
    color: "hsl(var(--luxury-gold))"
  },
  {
    category: "Compliance Standards",
    value: 28,
    icon: CheckCircle,
    color: "hsl(var(--primary))"
  }
];

const chartConfig = {
  value: {
    label: "Improvement",
    color: "hsl(var(--primary))"
  }
};

export function CommercialBenefitsChart() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-3 bg-professional-gradient bg-clip-text text-transparent">
          Commercial HVAC Benefits
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Professional HVAC services deliver measurable improvements across all commercial property metrics
        </p>
        <div className="flex justify-center gap-4 text-sm flex-wrap">
          <ResearchBadge claimId="commercial_energy_savings" label="Energy Research" />
          <ResearchBadge claimId="commercial_maintenance_costs" label="Cost Analysis" />
          <ResearchBadge claimId="commercial_productivity" label="Performance Data" />
        </div>
      </div>
      
      <Card className="shadow-elegant border-0 bg-gradient-to-br from-card to-accent/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="w-6 h-6 text-accent-orange" />
            Average Performance Improvements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={chartData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                barCategoryGap="20%"
              >
                <XAxis 
                  dataKey="category" 
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  label={{ 
                    value: 'Improvement (%)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { textAnchor: 'middle' }
                  }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 35]}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value) => [`${value}%`, 'Improvement']}
                  cursor={{ fill: 'hsl(var(--accent-orange) / 0.1)' }}
                />
                {chartData.map((item, index) => (
                  <Bar 
                    key={item.category}
                    dataKey="value"
                    data={[item]}
                    fill={item.color}
                    radius={[6, 6, 0, 0]}
                    className="animate-chart-bar-grow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {chartData.map((item, index) => (
              <div 
                key={item.category} 
                className="text-center p-4 rounded-xl border border-border/50 bg-gradient-to-br from-card to-accent/10 hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon 
                    className="w-6 h-6" 
                    style={{ color: item.color }} 
                  />
                </div>
                <h4 className="font-semibold text-sm mb-2 text-foreground">{item.category}</h4>
                <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                  {item.value}%
                </div>
                <div className="text-xs text-muted-foreground">
                  Average improvement
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-accent/30 border border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Performance metrics</strong> based on comprehensive industry research and client case studies. 
              Improvements measured over 12-month periods following professional HVAC optimization.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}