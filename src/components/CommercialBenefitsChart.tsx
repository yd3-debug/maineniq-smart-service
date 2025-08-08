import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { TrendingUp, Zap, DollarSign, BrainCircuit } from "lucide-react";
import ResearchBadge from "@/components/ResearchBadge";

const chartData = [
  {
    category: "Energy Savings",
    residential: 15,
    commercial: 25,
    icon: Zap,
    color: "hsl(var(--primary))"
  },
  {
    category: "Maintenance Cost Reduction", 
    residential: 10,
    commercial: 22,
    icon: DollarSign,
    color: "hsl(var(--secondary))"
  },
  {
    category: "Productivity Improvement",
    residential: 0,
    commercial: 11,
    icon: BrainCircuit,
    color: "hsl(var(--accent))"
  }
];

const chartConfig = {
  residential: {
    label: "Residential",
    color: "hsl(var(--muted-foreground))"
  },
  commercial: {
    label: "Commercial", 
    color: "hsl(var(--primary))"
  }
};

export function CommercialBenefitsChart() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Commercial vs Residential HVAC Benefits</h3>
        <p className="text-muted-foreground mb-4">
          Commercial properties typically see greater returns from professional HVAC services
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <ResearchBadge claimId="commercial_energy_savings" label="Energy Data" />
          <ResearchBadge claimId="commercial_maintenance_costs" label="Cost Data" />
          <ResearchBadge claimId="commercial_productivity" label="Productivity" />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Average Improvement Percentage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="category" 
                  tick={{ fontSize: 12 }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Improvement (%)', angle: -90, position: 'insideLeft' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value, name) => [`${value}%`, name === 'commercial' ? 'Commercial' : 'Residential']}
                />
                <Bar 
                  dataKey="residential" 
                  fill={chartConfig.residential.color}
                  name="Residential"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="commercial" 
                  fill={chartConfig.commercial.color}
                  name="Commercial"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {chartData.map((item) => (
              <div key={item.category} className="text-center p-4 rounded-lg bg-accent/30">
                <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold text-sm mb-1">{item.category}</h4>
                <div className="text-xs text-muted-foreground">
                  <div>Residential: {item.residential}%</div>
                  <div className="font-semibold text-primary">Commercial: {item.commercial}%</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground text-center">
            * Percentages represent typical improvement ranges based on industry research.
            Actual results may vary depending on property condition and specific requirements.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}