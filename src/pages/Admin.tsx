import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, 
  Upload, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Image,
  Save,
  X
} from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCase, setEditingCase] = useState<number | null>(null);
  
  // Prevent indexing of admin page
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'noindex, nofollow');
    if (!metaRobots.parentNode) document.head.appendChild(metaRobots);
  }, []);
  
  const [caseStudyForm, setCaseStudyForm] = useState({
    title: "",
    category: "",
    location: "",
    duration: "",
    savings: "",
    challenge: "",
    solution: "",
    results: "",
    tags: ""
  });

  // Mock case studies data
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: "Downtown Office Building HVAC Upgrade",
      category: "Commercial",
      location: "Downtown District",
      duration: "2 weeks",
      savings: "35% energy reduction",
      status: "Published"
    },
    {
      id: 2,
      title: "Smart Home Climate Automation",
      category: "Smart Solutions",
      location: "Suburban Residence",
      duration: "3 days",
      savings: "28% energy reduction",
      status: "Published"
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication check (in real app, this would be server-side)
    if (loginData.username === "admin" && loginData.password === "mainteniq2025") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSubmitCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCase) {
      // Update existing case study
      toast({
        title: "Case Study Updated",
        description: "The case study has been successfully updated.",
      });
    } else {
      // Add new case study
      const newCase = {
        id: Date.now(),
        title: caseStudyForm.title,
        category: caseStudyForm.category,
        location: caseStudyForm.location,
        duration: caseStudyForm.duration,
        savings: caseStudyForm.savings,
        status: "Published"
      };
      setCaseStudies([...caseStudies, newCase]);
      toast({
        title: "Case Study Added",
        description: "New case study has been successfully created.",
      });
    }
    
    // Reset form
    setCaseStudyForm({
      title: "",
      category: "",
      location: "",
      duration: "",
      savings: "",
      challenge: "",
      solution: "",
      results: "",
      tags: ""
    });
    setShowAddForm(false);
    setEditingCase(null);
  };

  const handleDeleteCase = (id: number) => {
    setCaseStudies(caseStudies.filter(caseItem => caseItem.id !== id));
    toast({
      title: "Case Study Deleted",
      description: "The case study has been removed.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <p className="text-muted-foreground">Access the Mainteniq admin panel</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-glow">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage case studies and content</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Case Studies</p>
                  <p className="text-2xl font-bold">{caseStudies.length}</p>
                </div>
                <Eye className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Published</p>
                  <p className="text-2xl font-bold">{caseStudies.filter(c => c.status === "Published").length}</p>
                </div>
                <Upload className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <Image className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add New Case Study Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowAddForm(true)}
            className="bg-primary hover:bg-primary-glow"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Case Study
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingCase) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {editingCase ? "Edit Case Study" : "Add New Case Study"}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingCase(null);
                    setCaseStudyForm({
                      title: "",
                      category: "",
                      location: "",
                      duration: "",
                      savings: "",
                      challenge: "",
                      solution: "",
                      results: "",
                      tags: ""
                    });
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitCase} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={caseStudyForm.title}
                      onChange={(e) => setCaseStudyForm({...caseStudyForm, title: e.target.value})}
                      placeholder="Enter project title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      value={caseStudyForm.category}
                      onChange={(e) => setCaseStudyForm({...caseStudyForm, category: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Smart Solutions">Smart Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={caseStudyForm.location}
                      onChange={(e) => setCaseStudyForm({...caseStudyForm, location: e.target.value})}
                      placeholder="Project location"
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      value={caseStudyForm.duration}
                      onChange={(e) => setCaseStudyForm({...caseStudyForm, duration: e.target.value})}
                      placeholder="e.g., 2 weeks"
                    />
                  </div>
                  <div>
                    <Label htmlFor="savings">Savings/Results</Label>
                    <Input
                      id="savings"
                      value={caseStudyForm.savings}
                      onChange={(e) => setCaseStudyForm({...caseStudyForm, savings: e.target.value})}
                      placeholder="e.g., 35% energy reduction"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="challenge">Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={caseStudyForm.challenge}
                    onChange={(e) => setCaseStudyForm({...caseStudyForm, challenge: e.target.value})}
                    placeholder="Describe the challenge faced"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="solution">Solution</Label>
                  <Textarea
                    id="solution"
                    value={caseStudyForm.solution}
                    onChange={(e) => setCaseStudyForm({...caseStudyForm, solution: e.target.value})}
                    placeholder="Describe the solution implemented"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="results">Results (one per line)</Label>
                  <Textarea
                    id="results"
                    value={caseStudyForm.results}
                    onChange={(e) => setCaseStudyForm({...caseStudyForm, results: e.target.value})}
                    placeholder="List the results achieved"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={caseStudyForm.tags}
                    onChange={(e) => setCaseStudyForm({...caseStudyForm, tags: e.target.value})}
                    placeholder="Energy Efficiency, Commercial, Upgrade"
                  />
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Image className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Upload before/after images</p>
                  <Button type="button" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Files
                  </Button>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingCase(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary-glow">
                    <Save className="w-4 h-4 mr-2" />
                    {editingCase ? "Update" : "Save"} Case Study
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Case Studies List */}
        <Card>
          <CardHeader>
            <CardTitle>Manage Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{caseStudy.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="secondary">{caseStudy.category}</Badge>
                      <span className="text-sm text-muted-foreground">{caseStudy.location}</span>
                      <span className="text-sm text-muted-foreground">{caseStudy.duration}</span>
                      <Badge variant="outline" className="text-success border-success">
                        {caseStudy.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setEditingCase(caseStudy.id);
                        setShowAddForm(true);
                        // In a real app, populate form with case study data
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCase(caseStudy.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;