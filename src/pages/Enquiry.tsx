import { useState } from "react";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, ArrowLeft, X, CheckCircle2, Send } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner@2.0.3";

export function Enquiry() {
  const { items, removeFromBasket, clearBasket } = useEnquiryBasket();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    additionalMessage: "",
    projectTimeline: "",
    
    // Step 2
    name: "",
    company: "",
    email: "",
    phone: "",
    countryCode: "+971",
    country: "",
    preferredContact: "",
    
    // Step 3
    acceptPrivacy: false
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (items.length === 0) {
      toast.error("Please add at least one product to your enquiry");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (!formData.acceptPrivacy) {
      toast.error("Please accept the privacy policy");
      return;
    }

    // In a real app, this would send to an API
    console.log("Enquiry submitted:", { items, formData });
    toast.success("Enquiry submitted successfully! We'll contact you within 24 hours.");
    clearBasket();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-10 to-neutral-9 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="h1 text-white mb-4">Enquiry Form</h1>
          <p className="text-neutral-1">
            Complete the form below and our team will respond within 24 hours
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`flex items-center gap-3 ${stepNum <= step ? 'text-neutral-10' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    stepNum < step ? 'bg-green-600 text-white' :
                    stepNum === step ? 'bg-neutral-10 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNum < step ? <CheckCircle2 className="w-5 h-5" /> : stepNum}
                  </div>
                  <span className="hidden sm:inline">
                    {stepNum === 1 ? 'Requirements' : stepNum === 2 ? 'Information' : 'Confirmation'}
                  </span>
                </div>
                {stepNum < 3 && (
                  <div className={`w-12 sm:w-24 h-1 mx-2 ${stepNum < step ? 'bg-green-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Requirements */}
          {step === 1 && (
            <div>
              <h2 className="h2 text-neutral-10 mb-6">Your Requirements</h2>
              
              {items.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-gray-600 mb-6">Your enquiry basket is empty</p>
                  <Button asChild>
                    <Link to="/products">Browse Equipment</Link>
                  </Button>
                </Card>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {items.map((item) => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                              <ImageWithFallback
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="h3 text-neutral-10 mb-1">{item.name}</h3>
                              <div className="text-sm text-gray-500 mb-2">Model: {item.model}</div>
                              <div className="text-sm text-primary-5">{item.category}</div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromBasket(item.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="additionalMessage">Additional Requirements or Questions</Label>
                      <Textarea
                        id="additionalMessage"
                        placeholder="Please provide any specific requirements, quantities, or questions about the equipment..."
                        value={formData.additionalMessage}
                        onChange={(e) => updateFormData('additionalMessage', e.target.value)}
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectTimeline">Project Timeline</Label>
                      <Select value={formData.projectTimeline} onValueChange={(value) => updateFormData('projectTimeline', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6+months">6+ months</SelectItem>
                          <SelectItem value="planning">Planning stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-end mt-8">
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="bg-neutral-10 hover:bg-neutral-9 gap-2"
                  disabled={items.length === 0}
                >
                  Continue to Information
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Information */}
          {step === 2 && (
            <div>
              <h2 className="text-neutral-10 mb-6">Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="mt-2"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="mt-2"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="flex gap-2 mt-2">
                    <Select value={formData.countryCode} onValueChange={(value) => updateFormData('countryCode', value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+971">🇦🇪 +971</SelectItem>
                        <SelectItem value="+966">🇸🇦 +966</SelectItem>
                        <SelectItem value="+965">🇰🇼 +965</SelectItem>
                        <SelectItem value="+974">🇶🇦 +974</SelectItem>
                        <SelectItem value="+968">🇴🇲 +968</SelectItem>
                        <SelectItem value="+973">🇧🇭 +973</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="flex-1"
                      placeholder="XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="saudi">Saudi Arabia</SelectItem>
                      <SelectItem value="kuwait">Kuwait</SelectItem>
                      <SelectItem value="qatar">Qatar</SelectItem>
                      <SelectItem value="oman">Oman</SelectItem>
                      <SelectItem value="bahrain">Bahrain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <Select value={formData.preferredContact} onValueChange={(value) => updateFormData('preferredContact', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>
                <Button
                  size="lg"
                  onClick={handleNext}
                  className="bg-neutral-10 hover:bg-neutral-9 gap-2"
                >
                  Continue to Review
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <h2 className="text-neutral-10 mb-6">Review & Submit</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-neutral-10 mb-4">Selected Equipment</h3>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 pb-3 border-b last:border-0">
                        <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                        <div className="text-neutral-10">{item.name}</div>
                          <div className="text-sm text-gray-500">Model: {item.model}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-neutral-10 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Name</div>
                      <div className="text-gray-900">{formData.name}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Company</div>
                      <div className="text-gray-900">{formData.company}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Email</div>
                      <div className="text-gray-900">{formData.email}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Phone</div>
                      <div className="text-gray-900">{formData.countryCode} {formData.phone}</div>
                    </div>
                    {formData.projectTimeline && (
                      <div>
                        <div className="text-gray-500">Timeline</div>
                        <div className="text-gray-900">{formData.projectTimeline}</div>
                      </div>
                    )}
                    {formData.preferredContact && (
                      <div>
                        <div className="text-gray-500">Preferred Contact</div>
                        <div className="text-gray-900">{formData.preferredContact}</div>
                      </div>
                    )}
                  </div>
                  {formData.additionalMessage && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-gray-500 mb-2">Additional Message</div>
                      <div className="text-gray-900">{formData.additionalMessage}</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 rounded-lg">
                <Checkbox
                  id="privacy"
                  checked={formData.acceptPrivacy}
                  onCheckedChange={(checked) => updateFormData('acceptPrivacy', checked as boolean)}
                />
                <label htmlFor="privacy" className="text-sm text-gray-700 cursor-pointer">
                  I agree to STBM's privacy policy and consent to being contacted regarding this enquiry. 
                  I understand that my information will be used solely for business purposes and will not be shared with third parties.
                </label>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="bg-primary-5 hover:bg-primary-6 gap-2"
                  disabled={!formData.acceptPrivacy}
                >
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
