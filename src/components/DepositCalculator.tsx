import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, AlertTriangle } from 'lucide-react';

export function DepositCalculator() {
  const [depositAmount, setDepositAmount] = useState([1500]);
  const [riskLevel, setRiskLevel] = useState([3]);

  const riskLabels = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
  const currentRisk = riskLabels[riskLevel[0] - 1];
  
  const potentialSavings = Math.round(depositAmount[0] * (riskLevel[0] * 0.15));
  const cleaningCost = depositAmount[0] < 1000 ? 140 : depositAmount[0] < 1800 ? 180 : 240;
  const netSaving = potentialSavings - cleaningCost;

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Deposit Protection Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Deposit Amount</label>
          <Slider
            value={depositAmount}
            onValueChange={setDepositAmount}
            max={3000}
            min={500}
            step={50}
            className="w-full"
          />
          <div className="text-center text-lg font-bold text-primary mt-2">
            £{depositAmount[0]}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Property Condition Risk</label>
          <Slider
            value={riskLevel}
            onValueChange={setRiskLevel}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="text-center text-sm text-muted-foreground mt-1">
            {currentRisk}
          </div>
        </div>

        <div className="border-t pt-4 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-orange-500" />
              Potential deduction risk:
            </span>
            <span className="font-medium text-orange-500">£{potentialSavings}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Professional cleaning cost:</span>
            <span className="font-medium">£{cleaningCost}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-5 h-5 text-success" />
              Potential savings:
            </span>
            <span className={`${netSaving > 0 ? 'text-success' : 'text-muted-foreground'}`}>
              £{Math.max(0, netSaving)}
            </span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Book Professional Cleaning
        </Button>
      </CardContent>
    </Card>
  );
}