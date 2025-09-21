import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  Home, 
  Factory, 
  Users,
  ClipboardCheck,
  Send
} from "lucide-react";

const PropertyAssessmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    stakeholderType: "",
    propertyType: "",
    propertyCount: "",
    buildingAge: "",
    systems: [] as string[],
    currentIssues: "",
    maintenanceFrequency: "",
    emergencyResponse: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });

  const stakeholderTypes = [
    { value: "landlord", label: "Landlord/Property Investor", icon: <Home className="w-4 h-4" /> },
    { value: "property-manager", label: "Property Manager", icon: <Users className="w-4 h-4" /> },
    { value: "commercial-owner", label: "Commercial Property Owner", icon: <Building2 className="w-4 h-4" /> },
    { value: "housing-association", label: "Housing Association", icon: <Factory className="w-4 h-4" /> }
  ];

  const systemTypes = [
    "HVAC/Heating Systems",
    "Air Conditioning",
    "Ventilation (MVHR)",
    "Plumbing & Water Systems",
    "Electrical Systems",
    "Building Management Systems (BMS)",
    "Fire Safety Systems",
    "Lift/Elevator Systems",
    "Security Systems",
    "Smart Home Automation"
  ];

  const handleSystemChange = (system: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        systems: [...prev.systems, system]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        systems: prev.systems.filter(s => s !== system)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Assessment Request Submitted",
      description: "We'll contact you within 24 hours to schedule your property assessment.",
    });
    
    // Here you would normally send the data to your backend
    console.log("Form Data:", formData);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <ClipboardCheck className="w-12 h-12 text-primary" />
        </div>
        <CardTitle className="text-2xl">Property Assessment Request</CardTitle>
        <CardDescription>
          Help us understand your property needs so we can create the perfect maintenance contract for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Stakeholder Type */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">What best describes you?</Label>
            <RadioGroup
              value={formData.stakeholderType}
              onValueChange={(value) => setFormData(prev => ({ ...prev, stakeholderType: value }))}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {stakeholderTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <Label htmlFor={type.value} className="flex items-center gap-2 cursor-pointer">
                    {type.icon}
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Property Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select value={formData.propertyType} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential-single">Single Residential Property</SelectItem>
                  <SelectItem value="residential-multiple">Multiple Residential Properties</SelectItem>
                  <SelectItem value="commercial-office">Commercial Office Building</SelectItem>
                  <SelectItem value="commercial-retail">Retail/Shopping Center</SelectItem>
                  <SelectItem value="industrial">Industrial Facility</SelectItem>
                  <SelectItem value="mixed-use">Mixed Use Development</SelectItem>
                  <SelectItem value="social-housing">Social Housing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="propertyCount">Number of Properties/Units</Label>
              <Select value={formData.propertyCount} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyCount: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Property</SelectItem>
                  <SelectItem value="2-5">2-5 Properties</SelectItem>
                  <SelectItem value="6-20">6-20 Properties</SelectItem>
                  <SelectItem value="21-50">21-50 Properties</SelectItem>
                  <SelectItem value="50+">50+ Properties</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="buildingAge">Building Age</Label>
            <Select value={formData.buildingAge} onValueChange={(value) => setFormData(prev => ({ ...prev, buildingAge: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select building age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Less than 5 years</SelectItem>
                <SelectItem value="modern">5-15 years</SelectItem>
                <SelectItem value="established">16-30 years</SelectItem>
                <SelectItem value="older">Over 30 years</SelectItem>
                <SelectItem value="mixed">Mixed ages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Systems Requiring Maintenance */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Which systems require maintenance? (Select all that apply)</Label>
            <div className="grid md:grid-cols-2 gap-3">
              {systemTypes.map((system) => (
                <div key={system} className="flex items-center space-x-2">
                  <Checkbox
                    id={system}
                    checked={formData.systems.includes(system)}
                    onCheckedChange={(checked) => handleSystemChange(system, checked as boolean)}
                  />
                  <Label htmlFor={system} className="text-sm cursor-pointer">
                    {system}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Current Issues */}
          <div className="space-y-2">
            <Label htmlFor="currentIssues">Current Issues or Concerns</Label>
            <Textarea
              id="currentIssues"
              placeholder="Describe any current maintenance issues, recurring problems, or specific concerns you have..."
              value={formData.currentIssues}
              onChange={(e) => setFormData(prev => ({ ...prev, currentIssues: e.target.value }))}
              rows={3}
            />
          </div>

          {/* Maintenance Preferences */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maintenanceFrequency">Preferred Maintenance Frequency</Label>
              <Select value={formData.maintenanceFrequency} onValueChange={(value) => setFormData(prev => ({ ...prev, maintenanceFrequency: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly Inspections</SelectItem>
                  <SelectItem value="quarterly">Quarterly Inspections</SelectItem>
                  <SelectItem value="bi-annual">Bi-Annual Inspections</SelectItem>
                  <SelectItem value="annual">Annual Inspections</SelectItem>
                  <SelectItem value="as-needed">As Needed Basis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyResponse">Emergency Response Priority</Label>
              <Select value={formData.emergencyResponse} onValueChange={(value) => setFormData(prev => ({ ...prev, emergencyResponse: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Critical - 2 hour response</SelectItem>
                  <SelectItem value="urgent">Urgent - 4 hour response</SelectItem>
                  <SelectItem value="standard">Standard - 24 hour response</SelectItem>
                  <SelectItem value="flexible">Flexible timing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Contact Information</Label>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.contactInfo.name}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contactInfo: { ...prev.contactInfo, name: e.target.value }
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contactInfo: { ...prev.contactInfo, email: e.target.value }
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.contactInfo.phone}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contactInfo: { ...prev.contactInfo, phone: e.target.value }
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.contactInfo.company}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contactInfo: { ...prev.contactInfo, company: e.target.value }
                  }))}
                />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Request Property Assessment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PropertyAssessmentForm;