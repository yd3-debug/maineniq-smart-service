import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedChartProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedChart = ({ children, delay = 0, className = "" }: AnimatedChartProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ${
        shouldAnimate ? 'animate-scale-in' : 'opacity-0 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const AnimatedStatCard = ({ 
  children, 
  delay = 0, 
  className = "",
  hoverEffect = true 
}: AnimatedChartProps & { hoverEffect?: boolean }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        shouldAnimate ? 'animate-slide-up' : 'opacity-0 translate-y-8'
      } ${hoverEffect ? 'hover:scale-105 hover:shadow-xl' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  className = "",
  delay = 0,
  precision = 0,
  duration = 2000,
  staticText = "",
}: {
  value: number | string;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
  precision?: number;
  duration?: number;
  staticText?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [showStatic, setShowStatic] = useState<boolean>(false);

  useEffect(() => {
    if (!isVisible) return;

    // Handle static text display
    if (staticText || typeof value === 'string') {
      const timer = setTimeout(() => {
        setShowStatic(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    const reducedMotion = typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const start = 0;
    const end = typeof value === 'number' ? value : 0;
    let rafId: number | null = null;

    if (reducedMotion) {
      setDisplayValue(end);
      return;
    }

    const timer = setTimeout(() => {
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;
        const rounded = parseFloat(current.toFixed(precision));
        setDisplayValue(rounded);
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible, value, delay, duration, precision, staticText]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={`${className}`}>
      {staticText || typeof value === 'string' ? 
        (showStatic ? (staticText || value) : '') : 
        `${prefix}${displayValue}${suffix}`
      }
    </span>
  );
};