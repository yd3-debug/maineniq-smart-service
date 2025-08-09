import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 900;

function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    // Canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonical = existingCanonical || document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.origin + '/admin/renovation-composer';
    if (!existingCanonical) document.head.appendChild(canonical);
  }, [title, description]);
}

const fileToDataURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function RenovationComposer() {
  useMeta(
    "Renovation Image Composer | Mainteniq",
    "Create a single before-and-after renovation image: align, label and export a polished composite."
  );

  const [beforeSrc, setBeforeSrc] = useState<string | null>(null);
  const [afterSrc, setAfterSrc] = useState<string | null>(null);

  // Controls
  const [beforeZoom, setBeforeZoom] = useState(1);
  const [afterZoom, setAfterZoom] = useState(1);
  const [beforeX, setBeforeX] = useState(0);
  const [beforeY, setBeforeY] = useState(0);
  const [afterX, setAfterX] = useState(0);
  const [afterY, setAfterY] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const bothReady = useMemo(() => !!beforeSrc && !!afterSrc, [beforeSrc, afterSrc]);

  const onSelectBefore = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const url = await fileToDataURL(f);
      setBeforeSrc(url);
    } catch {
      toast.error("Failed to load the 'Before' image");
    }
  };

  const onSelectAfter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const url = await fileToDataURL(f);
      setAfterSrc(url);
    } catch {
      toast.error("Failed to load the 'After' image");
    }
  };

  const drawComposite = async (): Promise<HTMLCanvasElement> => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Load images
    const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

    const [beforeImg, afterImg] = await Promise.all([
      loadImage(beforeSrc!),
      loadImage(afterSrc!),
    ]);

    // Background
    ctx.fillStyle = "#111827"; // neutral background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const halfW = canvas.width / 2;
    const areaH = canvas.height;

    const drawSide = (
      img: HTMLImageElement,
      side: "left" | "right",
      zoom: number,
      ox: number,
      oy: number
    ) => {
      const areaX = side === "left" ? 0 : halfW;
      const areaW = halfW;

      const scale = Math.max(areaW / img.naturalWidth, areaH / img.naturalHeight) * zoom;
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;

      const dx = areaX + (areaW - dw) / 2 + ox;
      const dy = (areaH - dh) / 2 + oy;

      ctx.drawImage(img, dx, dy, dw, dh);
    };

    drawSide(beforeImg, "left", beforeZoom, beforeX, beforeY);
    drawSide(afterImg, "right", afterZoom, afterX, afterY);

    // Center divider
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(halfW - 1, 0, 2, canvas.height);

    // Labels
    ctx.font = "600 28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto";
    ctx.textBaseline = "middle";

    const padX = 16;
    const padY = 12;

    const drawLabel = (text: string, x: number, y: number) => {
      const metrics = ctx.measureText(text);
      const w = metrics.width + padX * 2;
      const h = 44;
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, x + padX, y + h / 2 + 1);
    };

    drawLabel("Before", 24, 24);
    drawLabel("After", canvas.width - 24 - ctx.measureText("After").width - padX * 2, 24);

    return canvas;
  };

  const handleExport = async () => {
    if (!bothReady) return;
    try {
      const canvas = await drawComposite();
      const url = canvas.toDataURL("image/webp", 0.95);
      const a = document.createElement("a");
      a.href = url;
      a.download = "renovation-before-after.webp";
      a.click();
      toast.success("Composite exported as renovation-before-after.webp");
    } catch (e) {
      console.error(e);
      toast.error("Failed to export composite");
    }
  };

  const reset = () => {
    setBeforeZoom(1);
    setAfterZoom(1);
    setBeforeX(0); setBeforeY(0);
    setAfterX(0); setAfterY(0);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="font-heading text-2xl md:text-4xl font-bold mb-3">
          Renovation Image Composer (Before → After)
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload the same flat before and after refurbishment. Align with zoom and position, then export a polished side-by-side image.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="before">Before (dull flat)</Label>
              <Input id="before" type="file" accept="image/*" onChange={onSelectBefore} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="after">After (refurbished)</Label>
              <Input id="after" type="file" accept="image/*" onChange={onSelectAfter} />
            </div>
            <p className="text-xs text-muted-foreground">Tip: Use photos from the same angle for best alignment.</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Adjust Alignment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Before Zoom ({beforeZoom.toFixed(2)}x)</Label>
              <Slider value={[beforeZoom]} min={0.7} max={2.0} step={0.01} onValueChange={(v) => setBeforeZoom(v[0])} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Before X ({beforeX}px)</Label>
                <Slider value={[beforeX]} min={-400} max={400} step={1} onValueChange={(v) => setBeforeX(Math.round(v[0]))} />
              </div>
              <div className="space-y-2">
                <Label>Before Y ({beforeY}px)</Label>
                <Slider value={[beforeY]} min={-300} max={300} step={1} onValueChange={(v) => setBeforeY(Math.round(v[0]))} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>After Zoom ({afterZoom.toFixed(2)}x)</Label>
              <Slider value={[afterZoom]} min={0.7} max={2.0} step={0.01} onValueChange={(v) => setAfterZoom(v[0])} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>After X ({afterX}px)</Label>
                <Slider value={[afterX]} min={-400} max={400} step={1} onValueChange={(v) => setAfterX(Math.round(v[0]))} />
              </div>
              <div className="space-y-2">
                <Label>After Y ({afterY}px)</Label>
                <Slider value={[afterY]} min={-300} max={300} step={1} onValueChange={(v) => setAfterY(Math.round(v[0]))} />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={reset}>Reset</Button>
              <Button onClick={handleExport} disabled={!bothReady}>Export Composite</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-md border">
              <div className="w-full h-full grid grid-cols-2">
                <div className="relative overflow-hidden">
                  {beforeSrc ? (
                    <img src={beforeSrc} alt="Before flat condition"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transform: `translate(${beforeX}px, ${beforeY}px) scale(${beforeZoom})`,
                        transformOrigin: "center center",
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">Before preview</div>
                  )}
                  <div className="absolute left-3 top-3 px-3 py-2 bg-black/50 text-white text-xs rounded">Before</div>
                </div>
                <div className="relative overflow-hidden">
                  {afterSrc ? (
                    <img src={afterSrc} alt="After flat refurbishment"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transform: `translate(${afterX}px, ${afterY}px) scale(${afterZoom})`,
                        transformOrigin: "center center",
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">After preview</div>
                  )}
                  <div className="absolute right-3 top-3 px-3 py-2 bg-black/50 text-white text-xs rounded">After</div>
                </div>
              </div>
            </div>
            <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
            <p className="mt-3 text-xs text-muted-foreground">Output: {CANVAS_WIDTH}×{CANVAS_HEIGHT} WEBP with labels and center divider.</p>
          </CardContent>
        </Card>
      </section>

      <aside className="mt-6 text-xs text-muted-foreground text-center">
        Admin tool. Keep this link private. After download, send me the file and I’ll swap it on the homepage.
      </aside>
    </div>
  );
}