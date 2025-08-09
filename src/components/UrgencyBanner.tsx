import { useState, useEffect } from "react";
import { AlertTriangle, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UrgencyBanner() {
  const [slotsLeft, setSlotsLeft] = useState(3);
  const [currentSavings, setCurrentSavings] = useState(47000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSavings(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-accent-orange/10 to-destructive/5 border-accent-orange/30 p-4 animate-pulse-glow">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-accent-orange animate-pulse" />
          <div>
            <div className="font-semibold text-foreground">Winter prep season starting</div>
            <div className="text-sm text-muted-foreground flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Only {slotsLeft} survey slots left this month
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                £{currentSavings.toLocaleString()} prevented this month
              </span>
            </div>
          </div>
        </div>
        <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white whitespace-nowrap">
          Book Survey Now
        </Button>
      </div>
    </Card>
  );
}