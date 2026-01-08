import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Logo and Desc */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#FF5757] rounded flex items-center justify-center font-bold text-lg">
              S
            </div>
            <div>
              <div className="font-bold text-lg">tbm</div>
              <div className="text-xs text-gray-500">FOOD TECHNOLOGY</div>
            </div>
          </Link>
          <p className="text-sm text-gray-400 max-w-xs mt-4">
            Leading food processing solutions provider in UAE with 27+ years of industry expertise.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/solutions/complete-facilities" className="text-gray-400 text-sm hover:text-white transition-colors">Complete Facilities</Link></li>
              <li><Link to="/solutions/infrastructure-systems" className="text-gray-400 text-sm hover:text-white transition-colors">Infrastructure Systems</Link></li>
              <li><Link to="/solutions/operations-support" className="text-gray-400 text-sm hover:text-white transition-colors">Operations & Support</Link></li>
              <li><Link to="/products" className="text-gray-400 text-sm hover:text-white transition-colors">Equipments</Link></li>
              <li><Link to="/projects" className="text-gray-400 text-sm hover:text-white transition-colors">Our Projects</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 text-sm hover:text-white transition-colors">Download Catalogs</Link></li>
              <li><Link to="/resources" className="text-gray-400 text-sm hover:text-white transition-colors">Technical Docs</Link></li>
              <li><Link to="/resources" className="text-gray-400 text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Video Resources</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Video Resources</a></li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Office Hours</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Sunday - Thursday</p>
                <p className="text-gray-400 text-sm">8:00 AM - 6:00 PM GST</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-400 text-sm">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-400 text-sm">info@stbm.ae</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#FF5757] mt-0.5" />
                <span className="text-gray-400 text-sm">Al Mawrouth St - Al Danah - Zone 1, Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 STBM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Settings</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}