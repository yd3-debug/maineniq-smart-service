import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Palette, Shield, Star, Clock, Zap, ArrowRight, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import FullBleedHero from "@/components/FullBleedHero";
import { TrustMetrics } from "@/components/TrustMetrics";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

// Image imports
import renovationComparison from "@/assets/renovation-comparison.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import customerConsultation from "@/assets/customer-consultation.jpg";
import modernEquipment from "@/assets/modern-equipment.jpg";

const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 900;

const fileToDataURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const renovationServices = [
  {
    icon: Home,
    title: "Full Property Renovation",
    description: "Complete property transformations from outdated spaces to modern, energy-efficient homes",
    features: ["Complete rewiring", "Plumbing upgrades", "HVAC installation", "Modern finishes"]
  },
  {
    icon: Palette,
    title: "Kitchen & Bathroom Refurbishment",
    description: "Specialized renovation of key living spaces with modern fixtures and functionality",
    features: ["Modern appliances", "Quality fixtures", "Efficient layouts", "Waterproofing"]
  },
  {
    icon: Shield,
    title: "Commercial Property Renovation",
    description: "Office and commercial space transformations that enhance productivity and value",
    features: ["Office fit-outs", "Commercial HVAC", "Safety compliance", "Modern infrastructure"]
  }
];

const renovationBenefits = [
  {
    icon: Star,
    title: "Increased Property Value",
    description: "Professional renovations can increase property value by 15-30%"
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Modern systems and insulation reduce energy costs by up to 40%"
  },
  {
    icon: Clock,
    title: "Professional Timeline",
    description: "Efficient project management ensures timely completion"
  }
];

export default function RenovationComposer() {
  const [beforeSrc, setBeforeSrc] = useState<string | null>(null);
  const [afterSrc, setAfterSrc] = useState<string | null>(null);
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

    ctx.fillStyle = "#111827";
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

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(halfW - 1, 0, 2, canvas.height);

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
    <>
      <SEOHead 
        title="Professional Property Renovation & Refurbishment Services | Mainteniq"
        description="Transform your property with our expert renovation and refurbishment services. Kitchen, bathroom, and full property renovations across London. Professional project management and guaranteed quality."
        keywords="property renovation, refurbishment services, kitchen renovation, bathroom renovation, property transformation, London renovation"
        canonicalUrl="/renovation-composer"
      />

      {/* Hero Section */}
      <FullBleedHero
        title="Transform Your Property with Professional Renovation Services"
        subtitle="From outdated spaces to modern masterpieces - we deliver comprehensive renovation and refurbishment solutions that enhance both value and livability."
        image={renovationComparison}
        alt="Professional property renovation and refurbishment services showing before and after transformation"
        primaryLabel="Get Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
        secondaryClass="bg-white/10 text-white border-white/20 hover:bg-white/20"
      />

      {/* Trust Metrics */}
      <TrustMetrics />

      <main className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Renovation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team delivers end-to-end renovation services, transforming properties with precision, quality, and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {renovationServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Professional Renovation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional renovation services deliver superior results, increased property value, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {renovationBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Renovation Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for our clients across London.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={beforeAfter} 
                alt="Before and after renovation transformation showing dramatic improvement"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Badge className="mb-2">Complete Renovation</Badge>
                  <h3 className="text-xl font-semibold">Modern Family Home</h3>
                  <p className="text-sm opacity-90">Full property transformation including HVAC, electrical, and interior design</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={customerConsultation} 
                alt="Customer consultation for renovation project planning"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Badge className="mb-2">Professional Service</Badge>
                  <h3 className="text-xl font-semibold">Expert Consultation</h3>
                  <p className="text-sm opacity-90">Detailed planning and professional guidance throughout your renovation journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Visualization Tool */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Renovation Visualization Tool
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create professional before-and-after comparisons to visualize your renovation potential. Upload your property photos and see the transformation possibilities.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Upload Property Images
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="before">Current Property State</Label>
                    <Input id="before" type="file" accept="image/*" onChange={onSelectBefore} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="after">Renovation Vision</Label>
                    <Input id="after" type="file" accept="image/*" onChange={onSelectAfter} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Use photos from the same angle for best alignment. This tool helps visualize renovation potential.
                  </p>
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
                    <Button onClick={handleExport} disabled={!bothReady}>
                      Export Comparison
                    </Button>
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
                          <img src={beforeSrc} alt="Current property state"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                              transform: `translate(${beforeX}px, ${beforeY}px) scale(${beforeZoom})`,
                              transformOrigin: "center center",
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">Current State</div>
                        )}
                        <div className="absolute left-3 top-3 px-3 py-2 bg-black/50 text-white text-xs rounded">Before</div>
                      </div>
                      <div className="relative overflow-hidden">
                        {afterSrc ? (
                          <img src={afterSrc} alt="Renovation vision"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                              transform: `translate(${afterX}px, ${afterY}px) scale(${afterZoom})`,
                              transformOrigin: "center center",
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full grid place-items-center text-sm text-muted-foreground">Renovation Vision</div>
                        )}
                        <div className="absolute right-3 top-3 px-3 py-2 bg-black/50 text-white text-xs rounded">After</div>
                      </div>
                    </div>
                  </div>
                  <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
                  <p className="mt-3 text-xs text-muted-foreground">
                    Output: {CANVAS_WIDTH}×{CANVAS_HEIGHT} professional comparison image
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure a smooth and professional renovation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Initial property assessment and planning" },
              { step: "2", title: "Design", description: "Detailed renovation plans and timeline" },
              { step: "3", title: "Execution", description: "Professional renovation work" },
              { step: "4", title: "Handover", description: "Quality inspection and completion" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get expert renovation consultation and transform your property with professional quality and guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Free Renovation Consultation</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Property assessment and renovation potential</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Detailed project timeline and costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Professional recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>No obligation, expert advice</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <Mail className="w-5 h-5 mr-2" />
                Get Renovation Quote
              </Button>
              <p className="text-sm opacity-90 text-center">
                Available 24/7 for emergency renovations and urgent property repairs
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}