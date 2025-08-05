import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
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
  TrendingDown
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

const WhyProfessionalHVAC = () => {
  // Chart configuration for consistent theming
  const chartConfig = {
    oldSystem: {
      label: "Current System",
      color: "hsl(var(--chart-1))",
    },
    newSystem: {
      label: "Professional HVAC", 
      color: "hsl(var(--chart-2))",
    },
    energy: {
      label: "Energy Usage",
      color: "hsl(var(--chart-3))",
    },
    cost: {
      label: "Annual Cost",
      color: "hsl(var(--chart-4))",
    },
  };

  // Data for energy consumption comparison chart
  const energyComparisonData = [
    { system: 'Current System', energy: 2400, cost: 320, fill: "hsl(var(--chart-1))" },
    { system: 'Professional HVAC', energy: 1200, cost: 160, fill: "hsl(var(--chart-2))" }
  ];

  // Data for monthly savings over time
  const savingsOverTimeData = [
    { month: 'Jan', oldSystem: 280, newSystem: 140, savings: 140 },
    { month: 'Feb', oldSystem: 320, newSystem: 160, savings: 160 },
    { month: 'Mar', oldSystem: 260, newSystem: 130, savings: 130 },
    { month: 'Apr', oldSystem: 200, newSystem: 100, savings: 100 },
    { month: 'May', oldSystem: 180, newSystem: 90, savings: 90 },
    { month: 'Jun', oldSystem: 350, newSystem: 175, savings: 175 },
    { month: 'Jul', oldSystem: 420, newSystem: 210, savings: 210 },
    { month: 'Aug', oldSystem: 400, newSystem: 200, savings: 200 },
    { month: 'Sep', oldSystem: 300, newSystem: 150, savings: 150 },
    { month: 'Oct', oldSystem: 220, newSystem: 110, savings: 110 },
    { month: 'Nov', oldSystem: 260, newSystem: 130, savings: 130 },
    { month: 'Dec', oldSystem: 300, newSystem: 150, savings: 150 }
  ];

  // Data for efficiency breakdown
  const efficiencyData = [
    { name: 'Energy Saved', value: 40, fill: "hsl(var(--chart-2))" },
    { name: 'Energy Used', value: 60, fill: "hsl(var(--chart-1))" }
  ];

  const keyStats = [
    {
      icon: DollarSign,
      value: "£800+",
      label: "Average Annual Savings",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Zap,
      value: "40%",
      label: "Energy Reduction",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      value: "99.97%",
      label: "Air Filtration",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Home,
      value: "20%",
      label: "Property Value Increase",
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  const currentChallenges = [
    {
      icon: TrendingDown,
      title: "Energy Inefficiency",
      impact: "£1,200+ wasted annually",
      description: "Outdated systems consume 40-60% more energy than necessary",
      metric: "60%",
      metricLabel: "Energy Waste"
    },
    {
      icon: Thermometer,
      title: "Comfort Issues",
      impact: "±5°C temperature variations",
      description: "Inconsistent heating and cooling across different zones",
      metric: "±5°C",
      metricLabel: "Temperature Variation"
    },
    {
      icon: Clock,
      title: "Maintenance Burden",
      impact: "£300+ per breakdown",
      description: "Aging systems require 3x more frequent repairs",
      metric: "3x",
      metricLabel: "More Breakdowns"
    }
  ];

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
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-500/30">
              <Star className="w-4 h-4" />
              Trusted by 500+ Property Owners
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-emerald-200 bg-clip-text text-transparent">
              Save £800+ Annually with Smart HVAC
            </h1>
            <p className="text-xl mb-10 text-slate-200 max-w-3xl leading-relaxed">
              Transform your property with intelligent HVAC technology that delivers measurable results: 
              40% energy reduction, pristine air quality, and increased property value.
            </p>
            
            {/* Key Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {keyStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.gradient} p-2 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="font-bold text-3xl mb-1 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current State Analysis */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-600/10 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              Current State Analysis
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Is Your HVAC System Holding You Back?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Most properties are unknowingly wasting thousands annually. Here's what outdated systems are really costing you:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {currentChallenges.map((challenge, index) => (
              <Card key={index} className="border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <challenge.icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800">{challenge.title}</h3>
                  <div className="text-3xl font-bold text-slate-700 mb-2">{challenge.metric}</div>
                  <div className="text-sm font-medium text-slate-500 mb-4">{challenge.metricLabel}</div>
                  <div className="text-lg font-semibold text-slate-600 mb-3">{challenge.impact}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Energy Consumption Comparison Chart */}
          <Card className="border-slate-200 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-slate-800">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                Annual Energy Consumption Analysis
              </CardTitle>
              <p className="text-slate-600">Compare the efficiency gap between current and professional systems</p>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="h-80"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="system" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                    />
                    <Bar 
                      dataKey="energy" 
                      name="Energy Usage (kWh)"
                      radius={[4, 4, 0, 0]}
                      fill="var(--color-energy)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Smart HVAC Solution */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Smart Technology Solution
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
              Professional HVAC: Measurable Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced systems that deliver proven performance, significant savings, and enhanced comfort through intelligent technology.
            </p>
          </div>

          {/* Benefits Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyStats.map((stat, index) => (
              <Card key={index} className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} p-3 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">{stat.value}</div>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-white/50 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Monthly Savings Analysis
                </CardTitle>
                <p className="text-slate-600">Track your energy cost reduction throughout the year</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={savingsOverTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <defs>
                        <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12 }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="savings"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={3}
                        fill="url(#savingsGradient)"
                        name="Monthly Savings (£)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-white/50 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  Energy Efficiency Distribution
                </CardTitle>
                <p className="text-slate-600">See how much energy you save with professional systems</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={efficiencyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={6}
                        dataKey="value"
                        strokeWidth={2}
                        stroke="#ffffff"
                      >
                        {efficiencyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <ChartTooltip 
                        content={<ChartTooltipContent />}
                        formatter={(value) => [`${value}%`, 'Efficiency']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="flex justify-center mt-6 space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-slate-600">Energy Saved (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-slate-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-slate-600">Energy Used (60%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800">Energy Efficiency</h3>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">95%</span>
                </div>
                <Progress value={95} className="mb-3 h-2" />
                <p className="text-sm text-slate-600 leading-relaxed">Professional HVAC systems achieve 95% efficiency compared to 60% for outdated systems</p>
              </CardContent>
            </Card>

            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800">Air Quality</h3>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">99.97%</span>
                </div>
                <Progress value={99.97} className="mb-3 h-2" />
                <p className="text-sm text-slate-600 leading-relaxed">Advanced HEPA filtration removes 99.97% of airborne particles, allergens, and pollutants</p>
              </CardContent>
            </Card>

            <Card className="border-white/50 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800">System Reliability</h3>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">99.5%</span>
                </div>
                <Progress value={99.5} className="mb-3 h-2" />
                <p className="text-sm text-slate-600 leading-relaxed">Professional systems maintain 99.5% uptime with intelligent predictive maintenance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you could save with a professional HVAC upgrade
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Why 500+ Property Owners Trust Mainteniq
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results with professional expertise and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Start Saving £800+ Annually Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
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
            <a href="tel:+441895528226" className="inline-flex">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call +44 (0) 189 55 28 226
              </Button>
            </a>
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