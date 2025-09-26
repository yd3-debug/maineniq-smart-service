import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ArrowRight } from "lucide-react";

export function QuickValueChecker() {
  const [systemType, setSystemType] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [currentIssues, setCurrentIssues] = useState("");
  const [postcode, setPostcode] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    if (!systemType || !propertySize) return 0;
    
    const baseSavings = {
      "fcu": { small: 800, medium: 1200, large: 2400 },
      "hiu": { small: 600, medium: 900, large: 1800 },
      "mvhr": { small: 400, medium: 800, large: 1600 },
      "multiple": { small: 1200, medium: 2000, large: 3500 }
    };

    const issueMultiplier = currentIssues === "frequent" ? 1.5 : currentIssues === "some" ? 1.2 : 1;
    const base = baseSavings[systemType as keyof typeof baseSavings]?.[propertySize as keyof typeof baseSavings.fcu] || 0;
    
    return Math.round(base * issueMultiplier);
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const savings = calculateSavings();

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-primary/5 to-energy-gold/5 border-primary/20">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-2 text-lg">
          <Calculator className="w-5 h-5 text-primary" />
          Quick Savings Check
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          See your potential annual savings
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="system-type">HVAC System Type</Label>
          <Select onValueChange={setSystemType}>
            <SelectTrigger>
              <SelectValue placeholder="Select your system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fcu">FCU (Fan Coil Units)</SelectItem>
              <SelectItem value="hiu">HIU (Heat Interface Units)</SelectItem>
              <SelectItem value="mvhr">MVHR (Heat Recovery)</SelectItem>
              <SelectItem value="multiple">Multiple Systems</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="property-size">Property Size</Label>
          <Select onValueChange={setPropertySize}>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (1-20 units)</SelectItem>
              <SelectItem value="medium">Medium (21-50 units)</SelectItem>
              <SelectItem value="large">Large (50+ units)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="current-issues">Current Issues</Label>
          <Select onValueChange={setCurrentIssues}>
            <SelectTrigger>
              <SelectValue placeholder="System performance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Running well</SelectItem>
              <SelectItem value="some">Some issues</SelectItem>
              <SelectItem value="frequent">Frequent problems</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            id="postcode"
            placeholder="e.g. SW1A 1AA"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>

        <Button 
          onClick={handleCheck}
          className="w-full"
          disabled={!systemType || !propertySize}
        >
          Check My Savings
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {showResults && savings > 0 && (
          <div className="mt-4 p-4 bg-energy-gold/10 border border-energy-gold/30 rounded-lg text-center">
            <div className="text-2xl font-bold text-energy-gold">
              £{savings.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              Potential annual savings with professional maintenance
            </div>
            <Button variant="accent" size="sm" className="mt-3 w-full">
              Get Free Assessment
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}