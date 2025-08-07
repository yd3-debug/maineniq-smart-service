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
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
  precision?: number;
  duration?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    const reducedMotion = typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const start = 0;
    const end = value;
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
  }, [isVisible, value, delay, duration, precision]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={`${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};