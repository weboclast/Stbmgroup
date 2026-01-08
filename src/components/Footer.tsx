import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/stbm-logo-grey.svg";

export function Footer() {
  return (
    <footer className="bg-neutral-10 text-foreground p-2">
      <div className="bg-neutral-0 overflow-hidden" style={{ borderRadius: "1.875rem" }}>
      <div className="container mx-auto px-4 py-12">
        {/* Top Section - Logo, Description, and Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12">
          {/* Left - Logo and Description */}
          <div>
            <Link to="/" className="inline-flex items-center mb-1" aria-label="STBM Home">
              <img src={logo} alt="STBM Food Technology" className="h-16 w-auto" loading="lazy" />
              <span className="sr-only">STBM Food Technology</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs grid md:grid-cols-2 gap-8">
              Leading food processing solutions provider in UAE with 27+ years of industry expertise.
            </p>
          </div>

          {/* Right - Action Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Documentation Card */}
            <Link to="/resources">
              <div className="group bg-primary hover:bg-primary/90 p-6 rounded-lg text-left transition-all duration-300 cursor-pointer h-full flex items-end justify-between">
                <span className="text-sm font-semibold text-primary-foreground">
                  Request Custom Documentation
                </span>
                <div className="w-8 h-8 rounded-full bg-primary/80 group-hover:bg-primary/70 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </Link>

            {/* Facility Tour Card */}
            <Link to="/enquiry">
              <div className="group bg-primary-4 hover:bg-primary/50 p-6 rounded-lg text-left transition-all duration-300 cursor-pointer h-full flex items-end justify-between">
                <span className="text-sm font-semibold text-primary-foreground">
                  Facility Tour
                </span>
                <div className="w-8 h-8 rounded-full bg-primary/80 group-hover:bg-primary/70 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Grid - 6 Columns */}
        <div className="w-full">
          <div className="grid grid-cols-12 md:grid-cols-6 sm:grid-cols-2 gap-4 mb-12 py-12">
            {/* Quick Links */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <h4 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-lg hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/solutions/complete-facilities" className="text-lg hover:text-foreground transition-colors">Complete Facilities</Link></li>
                <li><Link to="/solutions/infrastructure-systems" className="text-lg hover:text-foreground transition-colors">Infrastructure Systems</Link></li>
                <li><Link to="/solutions/operations-support" className="text-lg hover:text-foreground transition-colors">Operations & Support</Link></li>
                <li><Link to="/products" className="text-lg hover:text-foreground transition-colors">Equipments</Link></li>
                <li><Link to="/projects" className="text-lg hover:text-foreground transition-colors">Our Projects</Link></li>
              </ul>
            </div>

            

            {/* About */}
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <h4 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">About</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</Link></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Career</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Leadership</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Video Resources</a></li>
              </ul>
            </div>


            {/* Resources */}
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <h4 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/resources" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Download Catalogs</Link></li>
                <li><Link to="/resources" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Technical Docs</Link></li>
                <li><Link to="/resources" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Case Studies</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <h4 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-destructive mt-0.5" />
                  <span className="text-muted-foreground text-sm">+971 XX XXX XXXX</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-destructive mt-0.5" />
                  <span className="text-muted-foreground text-sm">info@stbm.ae</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-destructive mt-0.5" />
                  <span className="text-muted-foreground text-sm">Al Mawrouth St - Al Danah - Zone 1, Abu Dhabi, UAE</span>
                </li>
              </ul>
            </div>


            {/* Office hours */}
            <div className="col-span-12 sm:col-span-6 md:col-span-2">
              <h4 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">Office Hours</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Sunday - Thursday</p>
                <p className="text-muted-foreground text-sm">8:00 AM - 6:00 PM GST</p>
              </div>
            </div>

          </div>


        </div>


        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 STBM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Settings</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}
