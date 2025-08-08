import { EVIDENCE } from "@/data/evidence";
import { ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ResearchBadgeProps {
  claimId: keyof typeof EVIDENCE;
  label?: string;
  className?: string;
}

export function ResearchBadge({ claimId, label = "Source", className }: ResearchBadgeProps) {
  const evidence = EVIDENCE[claimId];
  if (!evidence) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={evidence.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
              "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
              "transition-colors",
              className
            )}
            aria-label={`${label}: ${evidence.title}`}
          >
            <ExternalLink className="w-3 h-3" />
            <span>{label}</span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className="max-w-xs text-xs">
          <div className="font-medium mb-1">{evidence.title}</div>
          <div className="text-muted-foreground">{evidence.claim}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ResearchBadge;
