import { Button } from "./ui/button";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/stbm-logo.svg";
import { EnquiryBasketButton } from "./EnquiryBasketButton";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const megaMenuSolutions = [
    {
      title: "Complete Facilities",
      items: [
        { name: "Cattle Slaughterhouse", link: "/solutions/complete-facilities/cattle-slaughterhouse" },
        { name: "Sheep & Goat", link: "/solutions/complete-facilities/sheep-goat-slaughterhouse" },
        { name: "Poultry Processing", link: "/solutions/complete-facilities/poultry-processing" },
        { name: "Deboning & Processing", link: "/solutions/complete-facilities/deboning-meat-processing" }
      ]
    },
    {
      title: "Infrastructure Systems",
      items: [
        { name: "Wastewater Treatment", link: "/solutions/infrastructure-systems/wastewater-treatment" },
        { name: "HVAC & Refrigeration", link: "/solutions/infrastructure-systems/hvac-and-refrigeration" },
        { name: "Hygienic Infrastructure", link: "/solutions/infrastructure-systems/hygienic-infrastructure" },
        { name: "Power & Automation", link: "/solutions/infrastructure-systems/power-and-automation" }
      ]
    },
    {
      title: "Operations & Support",
      items: [
        { name: "Facility Management", link: "/solutions/operations-support/facility-management" },
        { name: "Preventive Maintenance", link: "/solutions/operations-support/preventive-maintenance" },
        { name: "24/7 Technical Support", link: "/solutions/operations-support/technical-support" }
      ]
    }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="STBM Home">
            <img src={logo} alt="STBM Food Technology" className="h-16 w-auto" loading="lazy" />
            <span className="sr-only">STBM Food Technology</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}
            >
              Home
            </Link> */}
            
            {/* Solutions with Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isActive('/solutions') ? 'text-neutral-10' : 'text-gray-700 hover:text-neutral-10'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {solutionsOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-4 w-[720px]">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {megaMenuSolutions.map((column, idx) => (
                        <div key={idx}>
                          <h3 className="text-foreground font-semibold mb-4 text-xs uppercase tracking-wider">{column.title}</h3>
                          <ul className="space-y-3">
                            {column.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  to={item.link}
                                  className="text-sm text-gray-600 hover:text-primary-5 transition-colors block"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-neutral-10' : 'text-gray-700 hover:text-neutral-10'}`}
            >
              Equipments
            </Link>

            <Link 
              to="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-neutral-10' : 'text-gray-700 hover:text-neutral-10'}`}
            >
              Projects
            </Link>
            <Link 
              to="/resources" 
              className={`transition-colors ${isActive('/resources') ? 'text-neutral-10' : 'text-gray-700 hover:text-neutral-10'}`}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-neutral-10' : 'text-gray-700 hover:text-neutral-10'}`}
            >
              About
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+971 XX XXX XXXX</span>
            </div>
            <EnquiryBasketButton />
            <Button className="bg-neutral-10 hover:bg-primary-4" asChild>
              <Link to="/enquiry">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-neutral-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-neutral-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-700 hover:text-neutral-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/resources" 
                className="text-gray-700 hover:text-neutral-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-neutral-10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex gap-2 mt-2">
                <EnquiryBasketButton />
                <Button className="bg-primary-4 hover:bg-primary-5 flex-1" asChild>
                  <Link to="/enquiry" onClick={() => setMobileMenuOpen(false)}>Request Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
