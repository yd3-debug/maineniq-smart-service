import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Zap, TrendingUp } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useScrollAnimation";

export function ROICalculator() {
  const [propertySize, setPropertySize] = useState(1000);
  const [systemAge, setSystemAge] = useState(5);
  
  const yearlyMaintenanceCost = propertySize * 2.5; // £2.50 per sqft
  const emergencyRisk = Math.min(systemAge * 15, 90); // 15% per year up to 90%
  const potentialEmergencyCost = propertySize * 15; // £15 per sqft emergency cost
  const totalSavings = (potentialEmergencyCost * emergencyRisk / 100) - yearlyMaintenanceCost;
  const roi = ((totalSavings / yearlyMaintenanceCost) * 100);

  const { count: animatedSavings, startAnimation } = useCounterAnimation(Math.round(totalSavings), 2000);
  const { count: animatedROI } = useCounterAnimation(Math.round(roi), 2000);

  return (
    <Card className="bg-gradient-to-br from-energy-gold/5 to-trust-blue/5 border-energy-gold/20 hover:shadow-glow transition-all duration-500">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="w-5 h-5 text-energy-gold" />
          Your ROI Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">See what preventive maintenance saves you</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="size" className="text-sm font-medium">Property Size (sqft)</Label>
            <Input 
              id="size"
              type="number" 
              value={propertySize}
              onChange={(e) => setPropertySize(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="age" className="text-sm font-medium">System Age (years)</Label>
            <Input 
              id="age"
              type="number" 
              value={systemAge}
              onChange={(e) => setSystemAge(Number(e.target.value))}
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center p-3 bg-destructive/10 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-destructive font-semibold">
              <Zap className="w-4 h-4" />
              Emergency Risk
            </div>
            <div className="text-2xl font-bold text-destructive">{emergencyRisk}%</div>
            <div className="text-xs text-muted-foreground">Failure probability</div>
          </div>
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <div className="flex items-center justify-center gap-1 text-success font-semibold">
              <TrendingUp className="w-4 h-4" />
              Annual Savings
            </div>
            <div className="text-2xl font-bold text-success">£{animatedSavings.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">{animatedROI}% ROI</div>
          </div>
        </div>

        <Button 
          onClick={startAnimation} 
          className="w-full bg-energy-gold hover:bg-energy-gold/90 text-white"
        >
          Calculate My Savings
        </Button>
      </CardContent>
    </Card>
  );
}