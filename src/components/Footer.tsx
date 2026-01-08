import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section - Logo, Description, and Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
          {/* Left - Logo and Description */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF5757] rounded flex items-center justify-center font-bold text-lg text-white">
                S
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">tbm</div>
                <div className="text-xs text-gray-600">FOOD TECHNOLOGY</div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Leading food processing solutions provider in UAE with 27+ years of industry expertise.
            </p>
          </div>

          {/* Right - Action Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Documentation Card */}
            <Link to="/resources">
              <div className="group bg-gray-900 hover:bg-gray-800 p-6 rounded-lg text-left transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Request Custom Documentation
                    </h3>
                    <p className="text-xs text-gray-400">
                      Get detailed specs and technical documentation tailored to your needs
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Facility Tour Card */}
            <Link to="/enquiry">
              <div className="group bg-[#FF5757] hover:bg-[#E04848] p-6 rounded-lg text-left transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Facility Tour
                    </h3>
                    <p className="text-xs text-red-100">
                      Experience our state-of-the-art facilities and equipment firsthand
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Grid - 5 Columns */}
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/solutions/complete-facilities" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Complete Facilities</Link></li>
              <li><Link to="/solutions/infrastructure-systems" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Infrastructure Systems</Link></li>
              <li><Link to="/solutions/operations-support" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Operations & Support</Link></li>
              <li><Link to="/products" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Equipments</Link></li>
              <li><Link to="/projects" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Our Projects</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Download Catalogs</Link></li>
              <li><Link to="/resources" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Technical Docs</Link></li>
              <li><Link to="/resources" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Case Studies</Link></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Video Resources</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Video Resources</a></li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Office Hours</h4>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Sunday - Thursday</p>
              <p className="text-gray-600 text-sm">8:00 AM - 6:00 PM GST</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-600 text-sm">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-600 text-sm">info@stbm.ae</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-600 text-sm">Al Mawrouth St - Al Danah - Zone 1, Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 STBM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cookie Settings</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
