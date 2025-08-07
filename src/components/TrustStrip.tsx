import React from "react";
import { Badge } from "@/components/ui/badge";

const partners = [
  "RIBA Partner",
  "NHBC",
  "FMB",
  "Gas Safe",
  "NICEIC",
  "TrustMark",
];

const TrustStrip: React.FC = () => {
  return (
    <aside className="bg-secondary/40 border-t border-b border-muted/60">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground/80"
              aria-label={`Accreditation: ${name}`}
            >
              <div className="h-6 w-6 rounded-full bg-foreground/10" />
              <Badge variant="outline" className="bg-white/60 backdrop-blur text-foreground/70 border-muted">
                {name}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrustStrip;
