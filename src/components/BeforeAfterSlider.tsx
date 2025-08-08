import React, { useCallback, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const clamp = (val: number, min = 0, max = 100) => Math.min(max, Math.max(min, val));

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}) => {
  const [percent, setPercent] = useState(50);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<"before" | "after">("after");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onPointerMove = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp(((clientX - rect.left) / rect.width) * 100);
    setPercent(Math.round(x));
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") setPercent((p) => clamp(p - 5));
    if (e.key === "ArrowRight") setPercent((p) => clamp(p + 5));
  }, []);

  const dividerStyle = useMemo(() => ({ left: `${percent}%` }), [percent]);
  const afterStyle = useMemo(() => ({ width: `${percent}%` }), [percent]);

  const handleOpenLightbox = (which: "before" | "after") => {
    setLightboxImage(which);
    setLightboxOpen(true);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl shadow-md bg-muted/20"
        role="group"
        aria-label="Before and after image comparison"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseDown={(e) => onPointerMove(e.clientX)}
        onMouseMove={(e) => {
          if (e.buttons === 1) onPointerMove(e.clientX);
        }}
        onTouchStart={(e) => onPointerMove(e.touches[0].clientX)}
        onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
      >
        {/* Before image (base layer) */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          className="block w-full h-auto select-none pointer-events-none"
        />

        {/* After image (revealed layer) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={afterStyle}
          aria-hidden="true"
        >
          <img
            src={afterSrc}
            alt={afterAlt}
            loading="lazy"
            className="block w-full h-auto select-none pointer-events-none"
          />
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute left-3 top-3 z-10">
          <span className="rounded-md bg-destructive/80 text-destructive-foreground text-xs font-semibold px-2 py-1 shadow">
            {beforeLabel}
          </span>
        </div>
        <div className="pointer-events-none absolute right-3 top-3 z-10">
          <span className="rounded-md bg-success/80 text-success-foreground text-xs font-semibold px-2 py-1 shadow">
            {afterLabel}
          </span>
        </div>

        {/* Divider + Handle */}
        <div
          className="absolute inset-y-0 z-20 flex items-center"
          style={dividerStyle}
          aria-hidden="true"
        >
          <div className="-translate-x-1/2 h-full w-px bg-border" />
          <button
            type="button"
            className="-translate-x-1/2 ml-[-1px] rounded-full border bg-background/90 text-foreground shadow hover-scale focus:outline-none focus:ring-2 focus:ring-primary w-8 h-8 flex items-center justify-center"
            aria-label="Drag to reveal before or after"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setPercent((p) => (p < 50 ? 75 : 25))}
          >
            <span className="block w-3 h-3 rounded-full bg-primary" />
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-background/80 backdrop-blur px-3 py-2 rounded-full border shadow">
          <button
            type="button"
            className="text-xs font-medium px-2 py-1 rounded hover:bg-muted"
            onClick={() => handleOpenLightbox("before")}
          >
            View {beforeLabel}
          </button>
          <input
            type="range"
            aria-label="Reveal slider"
            min={0}
            max={100}
            value={percent}
            onChange={(e) => setPercent(clamp(Number(e.target.value)))}
            className="w-40"
          />
          <button
            type="button"
            className="text-xs font-medium px-2 py-1 rounded hover:bg-muted"
            onClick={() => handleOpenLightbox("after")}
          >
            View {afterLabel}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl">
          <img
            src={lightboxImage === "before" ? beforeSrc : afterSrc}
            alt={lightboxImage === "before" ? beforeAlt : afterAlt}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeforeAfterSlider;
