import { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';
import { AnimatedCounter, AnimatedStatCard } from '@/components/AnimatedChart';
import { LucideIcon } from 'lucide-react';

interface ProgressMetricProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  description?: string;
  percentage: number;
  comparison?: {
    old: number;
    new: number;
    unit?: string;
  };
  variant?: 'default' | 'danger' | 'success' | 'warning';
  delay?: number;
}

export const ProgressMetric = ({
  icon: Icon,
  value,
  label,
  description,
  percentage,
  comparison,
  variant = 'default',
  delay = 0
}: ProgressMetricProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'danger':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-red-100',
          border: 'border-red-200',
          iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
          text: 'text-red-600',
          progressBg: 'bg-red-500'
        };
      case 'success':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
          border: 'border-emerald-200',
          iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
          text: 'text-emerald-600',
          progressBg: 'bg-emerald-500'
        };
      case 'warning':
        return {
          bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
          border: 'border-amber-200',
          iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
          text: 'text-amber-600',
          progressBg: 'bg-amber-500'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
          border: 'border-blue-200',
          iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          text: 'text-blue-600',
          progressBg: 'bg-blue-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <AnimatedStatCard delay={delay} className={`${styles.bg} ${styles.border} border-2 hover:shadow-xl transition-all duration-300`}>
      <div className="p-6">
        {/* Icon and main value */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className={`text-2xl font-bold ${styles.text}`}>
            {typeof value === 'number' ? (
              <AnimatedCounter 
                value={value} 
                delay={delay + 200}
              />
            ) : (
              value
            )}
          </div>
        </div>

        {/* Label */}
        <h3 className="font-semibold text-slate-800 mb-2">{label}</h3>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <Progress 
            value={percentage} 
            className="h-2 bg-slate-200"
            style={{
              '--progress-foreground': styles.progressBg
            } as React.CSSProperties}
          />
        </div>

        {/* Comparison bars if provided */}
        {comparison && (
          <div className="mb-4 p-3 bg-white/60 rounded-lg">
            <div className="text-xs font-medium text-slate-600 mb-2">Before vs After</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Before:</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-red-500 rounded-full"></div>
                  <span className="text-xs font-medium text-red-600">
                    {comparison.old}{comparison.unit}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">After:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className={`h-1.5 ${styles.progressBg} rounded-full`}
                    style={{ width: `${(comparison.new / comparison.old) * 64}px` }}
                  ></div>
                  <span className={`text-xs font-medium ${styles.text}`}>
                    {comparison.new}{comparison.unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
        )}
      </div>
    </AnimatedStatCard>
  );
};

interface ComparisonBarProps {
  label: string;
  value: string;
  multiplier: string;
  variant: 'danger' | 'success';
  percentage: number;
  delay?: number;
}

export const ComparisonBar = ({
  label,
  value,
  multiplier,
  variant,
  percentage,
  delay = 0
}: ComparisonBarProps) => {
  const isDanger = variant === 'danger';
  
  return (
    <AnimatedStatCard delay={delay} className="text-center">
      <div className="space-y-2">
        <div className={`text-2xl font-bold ${isDanger ? 'text-red-600' : 'text-emerald-600'}`}>
          {multiplier}
        </div>
        <div className="text-sm text-slate-600 font-medium">{label}</div>
        
        {/* Visual bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${
              isDanger ? 'bg-red-500' : 'bg-emerald-500'
            } animate-chart-bar-grow`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className={`text-lg font-semibold ${isDanger ? 'text-red-600' : 'text-emerald-600'}`}>
          {value}
        </div>
      </div>
    </AnimatedStatCard>
  );
};