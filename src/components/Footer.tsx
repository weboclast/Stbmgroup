import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="tracking-wider mb-1">STBM</div>
              <div className="text-sm text-blue-200">Food Technology</div>
            </Link>
            <p className="text-sm text-blue-200 mb-4">
              Leading food processing solutions provider in UAE with 27+ years of industry expertise.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-white mb-4">Resources</div>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/resources" className="hover:text-white transition-colors">Download Catalogs</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Technical Docs</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/enquiry" className="hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white mb-4">Contact Us</div>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>info@stbm.ae</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <div>
            © 2025 STBM Food Technology. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}