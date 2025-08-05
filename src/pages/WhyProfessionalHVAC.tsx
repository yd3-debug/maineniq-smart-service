import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Heart, 
  Leaf, 
  Smartphone, 
  Shield, 
  Home,
  DollarSign,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Timer,
  AlertTriangle,
  BarChart3,
  Zap,
  Target
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import hvacProfessional from "@/assets/hvac-professional.jpg";
import modernSystem from "@/assets/modern-hvac-system.jpg";
import energyEfficiency from "@/assets/energy-efficiency.jpg";

const WhyProfessionalHVAC = () => {
  // Data for energy consumption comparison chart
  const energyComparisonData = [
    { system: 'Old HVAC', energy: 2400, cost: 320 },
    { system: 'Professional HVAC', energy: 1200, cost: 160 }
  ];

  // Data for monthly savings over time
  const savingsOverTimeData = [
    { month: 'Jan', oldSystem: 280, newSystem: 140 },
    { month: 'Feb', oldSystem: 320, newSystem: 160 },
    { month: 'Mar', oldSystem: 260, newSystem: 130 },
    { month: 'Apr', oldSystem: 200, newSystem: 100 },
    { month: 'May', oldSystem: 180, newSystem: 90 },
    { month: 'Jun', oldSystem: 350, newSystem: 175 },
    { month: 'Jul', oldSystem: 420, newSystem: 210 },
    { month: 'Aug', oldSystem: 400, newSystem: 200 },
    { month: 'Sep', oldSystem: 300, newSystem: 150 },
    { month: 'Oct', oldSystem: 220, newSystem: 110 },
    { month: 'Nov', oldSystem: 260, newSystem: 130 },
    { month: 'Dec', oldSystem: 300, newSystem: 150 }
  ];

  // Data for efficiency breakdown
  const efficiencyData = [
    { name: 'Energy Used', value: 65, color: '#10b981' },
    { name: 'Energy Saved', value: 35, color: '#3b82f6' }
  ];

  const keyStats = [
    {
      icon: DollarSign,
      value: "£800+",
      label: "Average Annual Savings",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      value: "40%",
      label: "Energy Reduction",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Target,
      value: "99.97%",
      label: "Air Filtration",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Home,
      value: "20%",
      label: "Property Value Increase",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const problems = [
    {
      icon: DollarSign,
      title: "High Energy Bills",
      impact: "£1,200+ annually",
      description: "Inefficient systems waste 40-60% more energy"
    },
    {
      icon: Thermometer,
      title: "Temperature Issues",
      impact: "±5°C variations",
      description: "Inconsistent heating and cooling zones"
    },
    {
      icon: AlertTriangle,
      title: "Frequent Repairs",
      impact: "£300+ per incident",
      description: "Aging systems break down 3x more often"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Key Stats */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={hvacProfessional} 
            alt="Professional HVAC Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-background">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Save £800+ Annually with Professional HVAC
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Transform your property with smart HVAC technology that cuts energy bills by 40%, 
              improves air quality, and increases property value.
            </p>
            
            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-background/10 backdrop-blur-sm rounded-lg p-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 border-background text-background hover:bg-background hover:text-foreground">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Cost - Data-Driven Problems */}
      <section className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4 text-destructive">
              The Hidden Cost of Inefficient HVAC
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your current system is quietly draining your wallet. Here's the real cost breakdown:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <Card key={index} className="border-destructive/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <div className="text-2xl font-bold text-destructive mb-2">{problem.impact}</div>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Energy Consumption Chart */}
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-destructive" />
                Annual Energy Consumption Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="system" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'energy' ? `${value} kWh` : `£${value}`,
                        name === 'energy' ? 'Energy Usage' : 'Annual Cost'
                      ]}
                    />
                    <Bar dataKey="energy" fill="#ef4444" name="energy" />
                    <Bar dataKey="cost" fill="#dc2626" name="cost" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Professional Solution - Data-Driven Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Professional HVAC: Your Smart Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern systems deliver measurable results. Here's your return on investment:
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyStats.map((stat, index) => (
              <Card key={index} className={`border-primary/20 ${stat.bgColor} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Monthly Savings Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Monthly Energy Costs Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={savingsOverTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`£${value}`, 'Monthly Cost']} />
                      <Line 
                        type="monotone" 
                        dataKey="oldSystem" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        name="Old System"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="newSystem" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        name="Professional HVAC"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Energy Efficiency Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={efficiencyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {efficiencyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Energy Used (65%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">Energy Saved (35%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Energy Efficiency</h3>
                  <span className="text-2xl font-bold text-green-600">95%</span>
                </div>
                <Progress value={95} className="mb-2" />
                <p className="text-sm text-muted-foreground">Professional HVAC systems achieve 95% efficiency vs 60% for old systems</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Air Quality</h3>
                  <span className="text-2xl font-bold text-blue-600">99.97%</span>
                </div>
                <Progress value={99.97} className="mb-2" />
                <p className="text-sm text-muted-foreground">HEPA filtration removes 99.97% of airborne particles and allergens</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Reliability</h3>
                  <span className="text-2xl font-bold text-purple-600">99.5%</span>
                </div>
                <Progress value={99.5} className="mb-2" />
                <p className="text-sm text-muted-foreground">Professional systems have 99.5% uptime with predictive maintenance</p>
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
                    <Smartphone className="w-6 h-6 text-primary" />
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