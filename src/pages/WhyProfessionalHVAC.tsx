import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AnimatedChart, AnimatedStatCard, AnimatedCounter } from "@/components/AnimatedChart";
import { ProgressMetric, ComparisonBar } from "@/components/ProgressMetric";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Leaf, 
  Shield, 
  Home,
  DollarSign,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Timer,
  BarChart3,
  Zap,
  Target,
  Users,
  Clock,
  TrendingDown,
  AlertTriangle,
  Wrench,
  Activity
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import hvacProfessional from "@/assets/hvac-professional.jpg";
import modernSystem from "@/assets/modern-hvac-system.jpg";
import energyEfficiency from "@/assets/energy-efficiency.jpg";
import { CONTACT } from "@/config/contact";

const WhyProfessionalHVAC = () => {
  // Multi-colored chart configuration for professional presentation
  const chartConfig = {
    // Problems (Red tones)
    oldSystem: {
      label: "Current System",
      color: "hsl(0 85% 60%)", // Red for problems
    },
    wastage: {
      label: "Energy Waste",
      color: "hsl(0 70% 55%)", // Red for waste
    },
    // Solutions (Green/Blue tones)
    newSystem: {
      label: "Professional HVAC", 
      color: "hsl(142 55% 35%)", // Primary green for solutions
    },
    savings: {
      label: "Savings",
      color: "hsl(142 60% 45%)", // Lighter green for savings
    },
    // Efficiency (Blue tones)
    efficiency: {
      label: "Energy Efficiency",
      color: "hsl(213 94% 68%)", // Blue for efficiency
    },
    comfort: {
      label: "Comfort Level",
      color: "hsl(24 100% 50%)", // Orange for comfort
    },
    // Air Quality (Purple tones)
    airQuality: {
      label: "Air Quality",
      color: "hsl(270 60% 50%)", // Purple for air quality
    },
    health: {
      label: "Health Benefits",
      color: "hsl(280 50% 60%)", // Light purple for health
    },
  };

  // Multi-dimensional data for comprehensive analysis
  const energyComparisonData = [
    { 
      system: 'Current System', 
      energy: 2400, 
      cost: 3200, 
      maintenance: 850,
      comfort: 60,
      fill: "hsl(0 85% 60%)" 
    },
    { 
      system: 'Professional HVAC', 
      energy: 1200, 
      cost: 1600, 
      maintenance: 250,
      comfort: 95,
      fill: "hsl(142 55% 35%)" 
    }
  ];

  // Comprehensive monthly performance data
  const monthlyPerformanceData = [
    { month: 'Jan', oldCost: 280, newCost: 140, energySaved: 1200, comfortScore: 85, airQuality: 90 },
    { month: 'Feb', oldCost: 320, newCost: 160, energySaved: 1300, comfortScore: 88, airQuality: 92 },
    { month: 'Mar', oldCost: 260, newCost: 130, energySaved: 1100, comfortScore: 90, airQuality: 89 },
    { month: 'Apr', oldCost: 200, newCost: 100, energySaved: 900, comfortScore: 92, airQuality: 94 },
    { month: 'May', oldCost: 180, newCost: 90, energySaved: 800, comfortScore: 95, airQuality: 96 },
    { month: 'Jun', oldCost: 350, newCost: 175, energySaved: 1500, comfortScore: 93, airQuality: 91 },
    { month: 'Jul', oldCost: 420, newCost: 210, energySaved: 1800, comfortScore: 91, airQuality: 88 },
    { month: 'Aug', oldCost: 400, newCost: 200, energySaved: 1700, comfortScore: 89, airQuality: 90 },
    { month: 'Sep', oldCost: 300, newCost: 150, energySaved: 1300, comfortScore: 94, airQuality: 93 },
    { month: 'Oct', oldCost: 220, newCost: 110, energySaved: 1000, comfortScore: 96, airQuality: 95 },
    { month: 'Nov', oldCost: 260, newCost: 130, energySaved: 1100, comfortScore: 92, airQuality: 92 },
    { month: 'Dec', oldCost: 300, newCost: 150, energySaved: 1200, comfortScore: 87, airQuality: 89 }
  ];

  // Multi-faceted benefit breakdown data
  const benefitBreakdownData = [
    { name: 'Energy Savings', value: 40, fill: "hsl(142 55% 35%)", impact: "£800+ saved annually" },
    { name: 'Comfort Improvement', value: 35, fill: "hsl(24 100% 50%)", impact: "95% comfort score" },
    { name: 'Air Quality Enhancement', value: 25, fill: "hsl(270 60% 50%)", impact: "99.97% filtration" }
  ];

  // Service plan comparison data
  const servicePlansData = [
    { plan: 'No Service', reliability: 40, cost: 3200, breakdowns: 6, lifespan: 8 },
    { plan: 'Basic Service', reliability: 70, cost: 2400, breakdowns: 3, lifespan: 12 },
    { plan: 'Professional Annual Service', reliability: 95, cost: 1600, breakdowns: 0.5, lifespan: 18 }
  ];

  // ROI calculation data
  const roiCalculationData = [
    { category: 'Energy Bills', oldSystem: 3200, newSystem: 1600, savings: 1600 },
    { category: 'Maintenance', oldSystem: 850, newSystem: 250, savings: 600 },
    { category: 'Repairs', oldSystem: 1200, newSystem: 150, savings: 1050 },
    { category: 'Total Annual', oldSystem: 5250, newSystem: 2000, savings: 3250 }
  ];

  const keyStats = [
    {
      icon: DollarSign,
      value: "£3,250",
      label: "Total Annual Savings",
      gradient: "from-emerald-500 to-green-600",
      description: "Energy + maintenance + repair savings"
    },
    {
      icon: Zap,
      value: "50%",
      label: "Energy Reduction",
      gradient: "from-blue-500 to-cyan-600",
      description: "Compared to outdated systems"
    },
    {
      icon: Shield,
      value: "99.97%",
      label: "Air Filtration",
      gradient: "from-purple-500 to-indigo-600",
      description: "Hospital-grade air quality"
    },
    {
      icon: Home,
      value: "25%",
      label: "Property Value Boost",
      gradient: "from-orange-500 to-amber-600",
      description: "Verified by property assessments"
    }
  ];

  const costOfWaitingData = [
    {
      icon: DollarSign,
      title: "Financial Drain",
      impact: "£3,250+ wasted annually",
      description: "Every year you delay costs you thousands in unnecessary expenses",
      metric: "£270",
      metricLabel: "Monthly Waste",
      urgency: "high"
    },
    {
      icon: Thermometer,
      title: "Comfort Deterioration",
      impact: "±7°C temperature swings",
      description: "Inconsistent climate creates discomfort and reduces productivity",
      metric: "±7°C",
      metricLabel: "Temperature Variation",
      urgency: "medium"
    },
    {
      icon: AlertTriangle,
      title: "Health & Safety Risks",
      impact: "Poor air quality exposure",
      description: "Outdated filtration allows pollutants, allergens, and contaminants",
      metric: "70%",
      metricLabel: "Reduced Air Quality",
      urgency: "high"
    },
    {
      icon: TrendingDown,
      title: "Property Value Decline",
      impact: "£10,000+ value reduction",
      description: "Outdated HVAC systems significantly impact property marketability",
      metric: "-15%",
      metricLabel: "Market Value Impact",
      urgency: "high"
    }
  ];

  const { ref: comparisonRef, isVisible: isComparisonVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: energyRef, isVisible: isEnergyVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: scoresRef, isVisible: isScoresVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: benefitsRef, isVisible: isBenefitsVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Key Stats */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hvacProfessional} 
            alt="Professional HVAC Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-luxury-gold px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-luxury-gold/30">
              <Star className="w-4 h-4" />
              Trusted by 500+ Property Owners
            </div>
            
            <h1 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white">
              Why Professional HVAC is Essential for Your Property
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-4 sm:mb-6 md:mb-8 text-slate-200 max-w-3xl leading-relaxed">
              Discover how professional HVAC systems deliver £3,250+ annual savings, superior comfort, 
              and protect your investment. Don't let outdated systems cost you thousands.
            </p>
            
            {/* Key Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              {keyStats.map((stat, index) => (
                <AnimatedStatCard key={index} delay={index * 100}>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:animate-pulse-glow">
                    <div className={`w-6 h-6 sm:w-8 h-8 md:w-10 h-10 rounded-lg bg-gradient-to-r ${stat.gradient} p-1 sm:p-1.5 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div className="font-bold text-sm sm:text-lg md:text-2xl mb-1 text-white">
                      <AnimatedCounter 
                        value={parseFloat(stat.value.replace(/[£%,]/g, ''))} 
                        prefix={stat.value.includes('£') ? '£' : ''}
                        suffix={stat.value.includes('%') ? '%' : stat.value.includes(',') ? '+' : ''}
                        delay={index * 200}
                      />
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm text-slate-300 font-medium">{stat.label}</div>
                  </div>
                </AnimatedStatCard>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-luxury-gold hover:from-professional hover:to-primary text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-4 sm:py-4 min-h-[44px] shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <span className="sm:hidden">Get Free Assessment</span>
                  <span className="hidden sm:inline">Get Free Assessment & Savings Report</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 h-5 ml-2 flex-shrink-0" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base font-medium px-6 sm:px-8 py-4 sm:py-4 min-h-[44px] border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                  <span className="sm:hidden">Our Services</span>
                  <span className="hidden sm:inline">View Our Services</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Waiting Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <AlertTriangle className="w-3 sm:w-4 h-3 sm:h-4" />
              The Cost of Waiting
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-800">
              What Happens If You Don't Act Now?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every month you delay upgrading costs you hundreds. Here's the real impact of outdated HVAC systems:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {costOfWaitingData.map((item, index) => (
              <AnimatedStatCard key={index} delay={index * 150} className={`border-2 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm ${
                item.urgency === 'high' ? 'border-red-200 hover:border-red-300' : 'border-orange-200 hover:border-orange-300'
              }`}>
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <div className={`w-8 h-8 sm:w-10 h-10 rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto ${
                      item.urgency === 'high' ? 'bg-gradient-to-br from-red-100 to-red-200' : 'bg-gradient-to-br from-orange-100 to-orange-200'
                    }`}>
                      <item.icon className={`w-4 h-4 sm:w-5 h-5 ${item.urgency === 'high' ? 'text-red-600' : 'text-orange-600'}`} />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm mb-1 text-slate-800">{item.title}</h3>
                    <div className={`text-sm sm:text-lg font-bold mb-1 ${item.urgency === 'high' ? 'text-red-600' : 'text-orange-600'}`}>
                      <AnimatedCounter 
                        value={parseFloat(item.metric.replace(/[£%±°C-]/g, '')) || 0}
                        prefix={item.metric.includes('£') ? '£' : item.metric.includes('±') ? '±' : item.metric.includes('-') ? '-' : ''}
                        suffix={item.metric.includes('%') ? '%' : item.metric.includes('°C') ? '°C' : ''}
                        delay={index * 200 + 500}
                      />
                    </div>
                    <div className="text-xs font-medium text-slate-500 mb-1 sm:mb-2">{item.metricLabel}</div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">{item.impact}</div>
                    <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          {/* Multi-Dimensional Comparison Chart */}
          <AnimatedChart delay={800}>
            <Card className="border-red-200 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-slate-800 text-sm sm:text-base md:text-lg">
                  <div className="w-8 h-8 sm:w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 sm:w-5 h-5 text-white" />
                  </div>
                  Current vs Professional HVAC: Complete Comparison
                </CardTitle>
                <p className="text-slate-600 text-xs sm:text-sm">See the dramatic differences across all key metrics</p>
              </CardHeader>
              <CardContent>
                <div ref={comparisonRef as React.RefObject<HTMLDivElement>}>
                  <div className="overflow-hidden rounded-lg">
                    <ChartContainer
                      config={chartConfig}
                      className="h-32 sm:h-48 md:h-64 w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={energyComparisonData} 
                          margin={{ 
                            top: 10, 
                            right: 10, 
                            left: 10, 
                            bottom: 5 
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis 
                            dataKey="system" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 10 }}
                          />
                          <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 10 }}
                          />
                          <ChartTooltip 
                            content={<ChartTooltipContent />}
                            cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}
                          />
                          <Bar 
                            dataKey="cost" 
                            name="Annual Cost (£)"
                            radius={[4, 4, 0, 0]}
                            className="animate-chart-bar-grow"
                            isAnimationActive={isComparisonVisible}
                            animationBegin={120}
                            animationDuration={1000}
                            animationEasing="ease-out"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              
               {/* Enhanced Visual Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200">
                <ComparisonBar
                  label="Higher Energy Cost"
                  value="£3,200"
                  multiplier="2x"
                  variant="danger"
                  percentage={100}
                  delay={1000}
                />
                <ComparisonBar
                  label="More Maintenance"
                  value="£850"
                  multiplier="3.4x"
                  variant="danger"
                  percentage={85}
                  delay={1100}
                />
                <ComparisonBar
                  label="Less Comfort"
                  value="60% Score"
                  multiplier="40%"
                  variant="danger"
                  percentage={60}
                  delay={1200}
                />
                <ComparisonBar
                  label="Potential Savings"
                  value="£3,250"
                  multiplier="50%"
                  variant="success"
                  percentage={90}
                  delay={1300}
                />
              </div>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>
      </section>

      {/* Professional HVAC Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
              Professional HVAC Benefits
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-6 text-primary">
              Transform Your Property with Smart HVAC
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference professional HVAC makes: dramatic savings, superior comfort, 
              and peace of mind through intelligent technology and expert installation.
            </p>
          </div>

          {/* Benefits Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            {keyStats.map((stat, index) => (
              <AnimatedStatCard key={index} delay={index * 120} className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-2xl transition-all duration-500 group">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className={`w-8 h-8 sm:w-12 h-12 md:w-14 h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.gradient} p-1.5 sm:p-2 md:p-3 mb-2 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse-glow`}>
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-foreground">
                      <AnimatedCounter 
                        value={parseFloat(stat.value.replace(/[£%,]/g, ''))} 
                        prefix={stat.value.includes('£') ? '£' : ''}
                        suffix={stat.value.includes('%') ? '%' : stat.value.includes(',') ? '+' : ''}
                        delay={index * 200 + 300}
                      />
                    </div>
                    <p className="text-slate-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm">{stat.label}</p>
                    <p className="text-slate-500 text-xs hidden sm:block">{stat.description}</p>
                  </CardContent>
                </Card>
              </AnimatedStatCard>
            ))}
          </div>

          {/* Separated Performance Charts */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Energy Savings Chart */}
            <Card className="border-white/50 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-slate-800 text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                  </div>
                  Monthly Energy Savings
                </CardTitle>
                <p className="text-slate-600 text-xs sm:text-sm">Track your energy consumption improvements</p>
              </CardHeader>
              <CardContent>
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 md:p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-700">
                    <AnimatedCounter value={1420} suffix=" kWh" delay={200} duration={1400} />
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-600">Average Monthly Savings</div>
                </div>
                <div ref={energyRef as React.RefObject<HTMLDivElement>} className="overflow-hidden rounded-lg">
                  <ChartContainer config={chartConfig} className="h-40 sm:h-48 md:h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={monthlyPerformanceData} 
                        margin={{ 
                          top: 10, 
                          right: 5, 
                          left: 5, 
                          bottom: 5 
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                        />
                        <YAxis 
                          domain={[800, 1800]}
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                          width={40}
                        />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value, name) => [`${value} kWh`, 'Energy Saved']}
                        />
                        <Line
                          type="monotone"
                          dataKey="energySaved"
                          stroke="hsl(142 55% 35%)"
                          strokeWidth={3}
                          name="Energy Saved (kWh)"
                          dot={{ fill: "hsl(142 55% 35%)", strokeWidth: 2, r: 4 }}
                          isAnimationActive={isEnergyVisible}
                          animationBegin={120}
                          animationDuration={1000}
                          animationEasing="ease-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Performance Scores Chart */}
            <Card className="border-white/50 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-slate-800 text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Activity className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                  </div>
                  Comfort & Air Quality Scores
                </CardTitle>
                <p className="text-slate-600 text-xs sm:text-sm">Performance ratings out of 100</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-sm sm:text-lg md:text-xl font-bold text-orange-700">
                      <AnimatedCounter value={94} suffix="/100" delay={150} duration={1200} />
                    </div>
                    <div className="text-xs sm:text-sm text-orange-600">Avg. Comfort</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-sm sm:text-lg md:text-xl font-bold text-purple-700">
                      <AnimatedCounter value={92} suffix="/100" delay={250} duration={1200} />
                    </div>
                    <div className="text-xs sm:text-sm text-purple-600">Avg. Air Quality</div>
                  </div>
                </div>
                <div ref={scoresRef as React.RefObject<HTMLDivElement>} className="overflow-hidden rounded-lg">
                  <ChartContainer config={chartConfig} className="h-40 sm:h-48 md:h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={monthlyPerformanceData} 
                        margin={{ 
                          top: 10, 
                          right: 5, 
                          left: 5, 
                          bottom: 5 
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                        />
                        <YAxis 
                          domain={[80, 100]}
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#64748b', fontSize: 10 }}
                          width={40}
                        />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value, name) => [`${value}/100`, name]}
                        />
                        <Line
                          type="monotone"
                          dataKey="comfortScore"
                          stroke="hsl(24 100% 50%)"
                          strokeWidth={3}
                          name="Comfort Score"
                          dot={{ fill: "hsl(24 100% 50%)", strokeWidth: 2, r: 4 }}
                          isAnimationActive={isScoresVisible}
                          animationBegin={120}
                          animationDuration={1000}
                          animationEasing="ease-out"
                        />
                        <Line
                          type="monotone"
                          dataKey="airQuality"
                          stroke="hsl(270 60% 50%)"
                          strokeWidth={4}
                          name="Air Quality Score"
                          dot={{ fill: "hsl(270 60% 50%)", strokeWidth: 2, r: 5 }}
                          isAnimationActive={isScoresVisible}
                          animationBegin={180}
                          animationDuration={1000}
                          animationEasing="ease-out"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Benefit Breakdown Chart */}
            <Card className="border-white/50 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-slate-800 text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Target className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                  </div>
                  Professional HVAC Benefits
                </CardTitle>
                <p className="text-slate-600 text-xs sm:text-sm">Multi-dimensional improvements you'll experience</p>
              </CardHeader>
              <CardContent>
                <div ref={benefitsRef as React.RefObject<HTMLDivElement>} className="overflow-hidden rounded-lg px-2 sm:px-4">
                  <ChartContainer config={chartConfig} className="h-48 sm:h-56 md:h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={benefitBreakdownData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={4}
                          dataKey="value"
                          strokeWidth={2}
                          stroke="#ffffff"
                          isAnimationActive={isBenefitsVisible}
                          animationBegin={120}
                          animationDuration={1000}
                          animationEasing="ease-out"
                        >
                          {benefitBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value, name, props) => [
                            `${value}% improvement`,
                            props.payload.impact
                          ]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {benefitBreakdownData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.fill }}></div>
                        <span className="text-sm font-medium text-slate-700">{item.name}</span>
                      </div>
                      <span className="text-sm text-slate-500">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service & Maintenance Section */}
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 shadow-xl mb-8 sm:mb-12">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 sm:gap-3 text-slate-800 text-lg sm:text-xl md:text-2xl">
                <div className="w-8 h-8 sm:w-10 h-10 md:w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 h-4 sm:w-5 h-5 md:w-6 h-6 text-white" />
                </div>
                Annual Service & Maintenance Plans
              </CardTitle>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg">Protect your investment with professional maintenance that extends system life and ensures peak performance</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {servicePlansData.map((plan, index) => (
                  <Card key={index} className={`p-3 sm:p-4 md:p-6 ${index === 2 ? 'border-emerald-300 bg-white shadow-lg' : 'bg-white/70'}`}>
                    <div className="text-center">
                      <h4 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-4">{plan.plan}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                        <div>
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600">{plan.reliability}%</div>
                          <div className="text-xs sm:text-sm text-slate-600">Reliability</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-slate-700">£{plan.cost}</div>
                          <div className="text-xs sm:text-sm text-slate-600">Annual Cost</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-orange-600">{plan.breakdowns}</div>
                          <div className="text-xs sm:text-sm text-slate-600">Avg. Breakdowns/Year</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">{plan.lifespan} years</div>
                          <div className="text-xs sm:text-sm text-slate-600">System Lifespan</div>
                        </div>
                      </div>
                      {index === 2 && (
                        <div className="mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-100 py-1 sm:py-2 px-2 sm:px-3 rounded-full">
                          Recommended Plan
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border border-emerald-200">
                <h5 className="font-bold text-lg mb-4 text-slate-800">Our Annual Service Includes:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Comprehensive system inspection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Filter replacement & cleaning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Efficiency optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Safety checks & testing</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Priority emergency service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Performance monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Extended warranty coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Energy efficiency reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Energy Efficiency</h3>
                  </div>
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-sage-elegant">95%</span>
                </div>
                <Progress value={95} className="mb-2 sm:mb-3 h-1.5 sm:h-2" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Professional HVAC systems achieve 95% efficiency compared to 60% for outdated systems</p>
              </CardContent>
            </Card>

            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">Air Quality</h3>
                  </div>
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-accent-blue">99.97%</span>
                </div>
                <Progress value={99.97} className="mb-2 sm:mb-3 h-1.5 sm:h-2" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Advanced HEPA filtration removes 99.97% of airborne particles, allergens, and pollutants</p>
              </CardContent>
            </Card>

            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg sm:col-span-2 md:col-span-1">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 h-8 md:w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Award className="w-3 h-3 sm:w-4 h-4 md:w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">System Reliability</h3>
                  </div>
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary">99.5%</span>
                </div>
                <Progress value={99.5} className="mb-2 sm:mb-3 h-1.5 sm:h-2" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Professional systems maintain 99.5% uptime with intelligent predictive maintenance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you could save with a professional HVAC upgrade
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant">
            <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                {/* Current Situation */}
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-6 text-destructive">
                    Your Current HVAC Costs
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                      <span>Monthly Energy Bill</span>
                      <span className="font-bold text-destructive">£280</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                      <span>Annual Maintenance</span>
                      <span className="font-bold text-destructive">£450</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                      <span>Emergency Repairs</span>
                      <span className="font-bold text-destructive">£300</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-destructive/20 rounded-lg border-2 border-destructive/30">
                      <span className="font-bold">Total Annual Cost</span>
                      <span className="font-bold text-xl text-destructive">£4,110</span>
                    </div>
                  </div>
                </div>

                {/* Professional HVAC Solution */}
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-6 text-primary">
                    Professional HVAC Savings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                      <span>Monthly Energy Bill</span>
                      <span className="font-bold text-primary">£140</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                      <span>Annual Maintenance</span>
                      <span className="font-bold text-primary">£200</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                      <span>Emergency Repairs</span>
                      <span className="font-bold text-primary">£50</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/20 rounded-lg border-2 border-primary/30">
                      <span className="font-bold">Total Annual Cost</span>
                      <span className="font-bold text-xl text-primary">£1,930</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="text-center">
                  <h4 className="font-heading text-2xl font-bold mb-4 text-green-700">
                    Your Annual Savings
                  </h4>
                  <div className="text-5xl font-bold text-green-600 mb-2">£2,180</div>
                  <p className="text-green-700 font-medium">
                    Professional HVAC pays for itself in 3-4 years through energy savings alone
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Mainteniq */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why 500+ Property Owners Trust Mainteniq
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results with professional expertise and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            <div>
              <img 
                src={modernSystem} 
                alt="Modern HVAC Installation" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            
            <div>
              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Award className="w-10 h-10 text-primary mx-auto mb-2" />
                  <div className="font-bold text-3xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Installations</div>
                </div>
                <div className="text-center">
                  <Star className="w-10 h-10 text-primary mx-auto mb-2" />
                  <div className="font-bold text-3xl text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
                <div className="text-center">
                  <Timer className="w-10 h-10 text-primary mx-auto mb-2" />
                  <div className="font-bold text-3xl text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>

              {/* Key Differentiators */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">10-Year Warranty</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive coverage on all installations</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Smart Technology</h3>
                    <p className="text-sm text-muted-foreground">Remote monitoring and predictive maintenance</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certified Experts</h3>
                    <p className="text-sm text-muted-foreground">Gas Safe registered and industry certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl font-medium mb-4">
                "Mainteniq transformed our property's HVAC system. We're saving £150 per month on energy bills, 
                and the air quality is noticeably better. The smart controls are a game-changer!"
              </blockquote>
              <cite className="text-muted-foreground">
                Sarah Mitchell, Property Manager - Central London Office Complex
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="font-heading text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
            Start Saving £800+ Annually Today
          </h2>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
            Join 500+ satisfied customers who've transformed their properties with professional HVAC. 
            Get your free assessment and detailed savings report.
          </p>
          
          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">FREE</div>
              <div className="text-sm opacity-90">Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">NO</div>
              <div className="text-sm opacity-90">Obligation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">INSTANT</div>
              <div className="text-sm opacity-90">Quote</div>
            </div>
          </div>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <Button variant="secondary" size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90">
      Get Free Assessment & Savings Report
      <ArrowRight className="w-5 h-5 ml-2" />
    </Button>
  </Link>
  <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
    <a href={`tel:${CONTACT.phones.landlineTel}`} aria-label={`Call Now at ${CONTACT.phones.landline}`}>
      Call Now
    </a>
  </Button>
</div>

          <p className="text-sm mt-4 opacity-75">
            Most assessments completed within 24 hours • No pressure, just honest advice
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyProfessionalHVAC;