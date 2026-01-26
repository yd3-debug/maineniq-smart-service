import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { handleQuoteRequest } from "@/utils/quote";

interface QuoteButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost" | "accent" | "premium";
  showIcon?: boolean;
  label?: string;
  service?: string;
}

const QuoteButton = ({ 
  className = "", 
  size = "default", 
  variant = "accent",
  showIcon = true,
  label = "Get a Quote",
  service = "property services"
}: QuoteButtonProps) => {
  return (
    <Button 
      size={size} 
      variant={variant}
      className={className}
      onClick={() => handleQuoteRequest(service)}
    >
      {showIcon && <MessageSquare className="w-4 h-4 mr-2" />}
      {label}
    </Button>
  );
};

export default QuoteButton;
