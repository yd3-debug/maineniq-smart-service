import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
}

const cleaningChecklist: ChecklistItem[] = [
  // Kitchen
  { id: 'kitchen-1', text: 'Degrease hob, oven exterior, splashbacks', category: 'Kitchen' },
  { id: 'kitchen-2', text: 'Clean inside/outside cupboards and drawers', category: 'Kitchen' },
  { id: 'kitchen-3', text: 'Descale sink, taps, remove limescale', category: 'Kitchen' },
  { id: 'kitchen-4', text: 'Vacuum and mop floors thoroughly', category: 'Kitchen' },
  
  // Bathroom
  { id: 'bathroom-1', text: 'Descale shower, screens, tiles', category: 'Bathroom' },
  { id: 'bathroom-2', text: 'Sanitize toilet and pedestal', category: 'Bathroom' },
  { id: 'bathroom-3', text: 'Clean mirrors, fixtures, vents', category: 'Bathroom' },
  { id: 'bathroom-4', text: 'Vacuum and mop floors', category: 'Bathroom' },
  
  // General
  { id: 'general-1', text: 'Wipe skirting boards, sockets, switches', category: 'General' },
  { id: 'general-2', text: 'Clean doors, handles, frames', category: 'General' },
  { id: 'general-3', text: 'Clean window sills and frames (interior)', category: 'General' },
  { id: 'general-4', text: 'Vacuum carpets, wipe hard surfaces', category: 'General' }
];

export function AnimatedChecklist() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const categories = Array.from(new Set(cleaningChecklist.map(item => item.category)));

  const handleStartAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCompletedItems([]);
    
    cleaningChecklist.forEach((item, index) => {
      setTimeout(() => {
        setCompletedItems(prev => [...prev, item.id]);
        
        if (index === cleaningChecklist.length - 1) {
          setTimeout(() => setIsAnimating(false), 500);
        }
      }, index * 200);
    });
  };

  const resetAnimation = () => {
    setCompletedItems([]);
    setIsAnimating(false);
  };

  return (
    <div ref={ref as any} className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">Comprehensive Cleaning Checklist</h3>
        <p className="text-muted-foreground">Watch our systematic approach in action</p>
        <div className="flex gap-2 justify-center">
          <Button 
            onClick={handleStartAnimation} 
            disabled={isAnimating}
            size="sm"
          >
            {isAnimating ? 'Cleaning in Progress...' : 'See Our Process'}
          </Button>
          <Button 
            onClick={resetAnimation} 
            variant="outline" 
            size="sm"
            disabled={isAnimating}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category} className="space-y-3">
            <h4 className="font-medium text-sm text-primary">{category}</h4>
            <div className="space-y-2">
              {cleaningChecklist
                .filter(item => item.category === category)
                .map(item => (
                  <div 
                    key={item.id}
                    className={`flex items-start gap-2 p-2 rounded-lg transition-all duration-300 ${
                      completedItems.includes(item.id) 
                        ? 'bg-success/10 border border-success/20' 
                        : 'bg-muted/30'
                    }`}
                  >
                    {completedItems.includes(item.id) ? (
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 animate-scale-in" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      completedItems.includes(item.id) 
                        ? 'text-foreground font-medium' 
                        : 'text-muted-foreground'
                    }`}>
                      {item.text}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
          <CheckCircle className="w-4 h-4 text-success" />
          <span className="text-sm font-medium">
            Progress: {completedItems.length}/{cleaningChecklist.length} tasks completed
          </span>
        </div>
      </div>
    </div>
  );
}