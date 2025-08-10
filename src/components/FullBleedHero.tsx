import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FullBleedHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryClass?: string;
  imageFit?: "cover" | "contain";
  id?: string;
  children?: React.ReactNode;
}

const isExternal = (href: string) => href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

const FullBleedHero: React.FC<FullBleedHeroProps> = ({
  title,
  subtitle,
  image,
  alt,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryClass,
  imageFit = "cover",
  id,
  children,
}) => {
  return (
    <section id={id} className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        loading="eager"
        className={`absolute inset-0 -z-10 w-full h-full object-${imageFit}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

      <div className="container mx-auto px-4 flex items-end min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            {primaryLabel && primaryHref && (
              <Button asChild size="lg" className="px-8 py-3">
                {isExternal(primaryHref) ? (
                  <a href={primaryHref}>{primaryLabel}</a>
                ) : (
                  <Link to={primaryHref}>{primaryLabel}</Link>
                )}
              </Button>
            )}
            {secondaryLabel && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className={secondaryClass || "border-primary text-primary hover:bg-primary/5 px-8 py-3"}
              >
                {isExternal(secondaryHref) ? (
                  <a href={secondaryHref}>{secondaryLabel}</a>
                ) : (
                  <Link to={secondaryHref}>{secondaryLabel}</Link>
                )}
              </Button>
            )}
          </div>
          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default FullBleedHero;
