import { Button } from "./ui/button";
import { Phone, Mail, MapPin, MessageSquare, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    solution: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Three Ways to Connect */}
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">
              Let's Solve Your Food Processing Challenges Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Whether you're planning a new facility, upgrading equipment, or optimizing operations, our experts are ready to design the perfect solution for your needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#FF5757]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[#FF5757]" />
                </div>
                <h3 className="text-[#1e3a8a] mb-2">Schedule a Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">Free facility assessment</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-[#FF5757] text-[#FF5757] hover:bg-[#FF5757] hover:text-white"
                  asChild
                >
                  <Link to="/enquiry">Book Now</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#FF5757]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-[#FF5757]" />
                </div>
                <h3 className="text-[#1e3a8a] mb-2">Download Solutions Guide</h3>
                <p className="text-sm text-gray-600 mb-4">2024 Food Processing Handbook</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-[#FF5757] text-[#FF5757] hover:bg-[#FF5757] hover:text-white"
                  asChild
                >
                  <Link to="/resources">Download</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#FF5757]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-[#FF5757]" />
                </div>
                <h3 className="text-[#1e3a8a] mb-2">WhatsApp an Expert</h3>
                <p className="text-sm text-gray-600 mb-4">Quick questions answered instantly</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-[#FF5757] text-[#FF5757] hover:bg-[#FF5757] hover:text-white"
                  asChild
                >
                  <a href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Contact Form */}
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Form */}
              <div className="p-8 md:p-10 bg-white">
                <h3 className="text-[#1e3a8a] mb-2">Ready to Transform Your Operations?</h3>
                <p className="text-gray-600 mb-6">
                  Join 100+ businesses that have revolutionized their food production with STBM solutions.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1.5 block">What solution are you looking for?</label>
                    <Select value={formData.solution} onValueChange={(value) => setFormData({...formData, solution: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="turnkey">Turnkey Facility Development</SelectItem>
                        <SelectItem value="modernization">Equipment Modernization</SelectItem>
                        <SelectItem value="optimization">Process Optimization</SelectItem>
                        <SelectItem value="compliance">Compliance & Certification</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-1.5 block">Your Name</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1.5 block">Company Name</label>
                      <Input 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-1.5 block">Email</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1.5 block">Phone</label>
                      <Input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+971 XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-1.5 block">How can we help? (optional)</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#FF5757] hover:bg-[#E04848] text-white">
                    Submit Enquiry
                  </Button>
                </form>
              </div>

              {/* Right Side - Contact Info */}
              <div className="p-8 md:p-10 text-white">
                <h3 className="text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Direct Line</div>
                      <div className="text-white">+971 XX XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageSquare className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-blue-200 mb-1">WhatsApp</div>
                      <div className="text-white">+971 XX XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Email</div>
                      <div className="text-white">solutions@stbmgroup.com</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-blue-200 mb-1">Location</div>
                      <div className="text-white">Abu Dhabi, UAE</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="text-sm text-blue-200 mb-2">Office Hours</div>
                  <div className="text-white">Sunday - Thursday</div>
                  <div className="text-white">8:00 AM - 6:00 PM GST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
