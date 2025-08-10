import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({ 
  size = "md", 
  className,
  text = "Loading..." 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg", 
    xl: "text-xl"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className={cn(
        "animate-pulse",
        sizeClasses[size],
        "flex items-center justify-center"
      )}>
        <img 
          src="/LOGOPETRU2.png" 
          alt="Mainteniq Logo" 
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>
      {text && (
        <p className={cn(
          "text-muted-foreground font-medium animate-pulse",
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );
};

export const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <LoadingSpinner 
        size="xl" 
        text="Loading your HVAC solutions..."
        className="text-center"
      />
    </div>
  );
};

export const LoadingCard = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-card rounded-lg border">
      <LoadingSpinner size="md" text={text} />
    </div>
  );
};

export const LoadingButton = ({ 
  isLoading, 
  children, 
  ...props 
}: { 
  isLoading: boolean; 
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <button {...props} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 animate-pulse">
            <img 
              src="/LOGOPETRU2.png" 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};