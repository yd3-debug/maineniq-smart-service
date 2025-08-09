import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface UrgencyTimerProps {
  targetDate?: Date;
  title?: string;
}

export function UrgencyTimer({ 
  targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Default to 7 days from now
  title = "Move-out deadline approaching?"
}: UrgencyTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card className="border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-orange-500" />
          <div>
            <h3 className="font-medium text-sm">{title}</h3>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                Book now for emergency availability
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}