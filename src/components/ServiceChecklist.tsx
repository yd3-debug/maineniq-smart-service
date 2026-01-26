import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";

interface ChecklistItem {
  id: string;
  label: string;
  severity?: "low" | "medium" | "high";
}

interface ServiceChecklistProps {
  title?: string;
  subtitle?: string;
  items: ChecklistItem[];
  serviceName: string;
  threshold?: number;
}

const ServiceChecklist = ({
  title = "Signs You Need Service",
  subtitle = "Check any that apply to your property",
  items,
  serviceName,
  threshold = 2,
}: ServiceChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (id: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== id));
    }
  };

  const checkedCount = checkedItems.length;
  const needsService = checkedCount >= threshold;

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case "high": return "text-destructive";
      case "medium": return "text-amber-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {items.map((item) => (
            <label 
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/30 transition-all cursor-pointer"
            >
              <Checkbox
                checked={checkedItems.includes(item.id)}
                onCheckedChange={(checked) => handleCheck(item.id, checked as boolean)}
                className="mt-0.5"
              />
              <span className={`text-sm ${getSeverityColor(item.severity)}`}>
                {item.label}
              </span>
            </label>
          ))}
        </div>

        {/* Results indicator */}
        <div className={`p-4 rounded-lg transition-all ${
          needsService 
            ? "bg-amber-50 border border-amber-200" 
            : checkedCount > 0 
              ? "bg-blue-50 border border-blue-200"
              : "bg-muted/30 border border-border"
        }`}>
          {needsService ? (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-amber-800">
                  You checked {checkedCount} items — Professional service recommended
                </span>
              </div>
              <Button 
                size="sm" 
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => handleQuoteRequest(`${serviceName} - urgent service needed`)}
              >
                Get Priority Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ) : checkedCount > 0 ? (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">
                  {checkedCount} item{checkedCount > 1 ? 's' : ''} selected — Consider preventive maintenance
                </span>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleQuoteRequest(`${serviceName} - maintenance check`)}
              >
                Learn More
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center">
              Check any symptoms that apply to see recommendations
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceChecklist;
