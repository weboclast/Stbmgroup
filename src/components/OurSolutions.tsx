import { Building2, Wrench, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Turnkey Facility Development",
    problem: "Starting a food processing facility from scratch",
    description: "Transform empty spaces into fully operational food processing facilities. We manage everything - from initial design and equipment selection to installation and commissioning. Your vision, our expertise, guaranteed results."
  },
  {
    icon: Wrench,
    title: "Equipment Modernization",
    problem: "Outdated equipment limiting your production",
    description: "Upgrade your existing operations with state-of-the-art processing equipment. We assess, recommend, and implement the right technology to boost your efficiency and meet growing demand."
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    problem: "Inefficient workflows and high operational costs",
    description: "Streamline your production line for maximum efficiency. Our experts analyze your current setup and implement solutions that reduce waste, improve throughput, and lower operating costs."
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Certification Support",
    problem: "Meeting industry standards and regulations",
    description: "Navigate complex food safety regulations with confidence. We ensure your facility meets HACCP, ISO, and local UAE standards through proper equipment selection and facility design."
  }
];

export function OurSolutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-[#1e3a8a] mb-4">Tailored Solutions for Every Challenge</h2>
          <p className="text-gray-600 text-lg">
            Whether you're building from the ground up, upgrading critical systems, or optimizing daily operations—STBM brings the expertise, integration, and accountability you need.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 1. Complete Slaughterhouse Facilities */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#FF5757]/30">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-4 text-3xl">
                🏭
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">For the Builder</div>
              <h3 className="text-[#1e3a8a] mb-3">Build Your Entire Facility</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                From empty land to the first production shift, STBM delivers turnkey facilities that work. We manage everything—design, equipment, infrastructure, installation, commissioning, and training—all integrated under one contract and one accountable team.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Includes:</div>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Process design and layout optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Slaughter and processing equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Wastewater treatment and HVAC systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Installation, training, and operational handover</span>
                </li>
              </ul>
            </div>

            <Link 
              to="/solutions/complete-facilities" 
              className="inline-flex items-center gap-2 text-[#FF5757] hover:text-[#E04848] transition-colors group"
            >
              <span className="text-sm">Explore Turnkey Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 2. Critical Infrastructure Systems */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#FF5757]/30">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-4 text-3xl">
                ⚙️
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">For the Fixer</div>
              <h3 className="text-[#1e3a8a] mb-3">Upgrade Your Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Need to meet new wastewater standards? Is your refrigeration system failing? STBM delivers specialized infrastructure solutions that integrate seamlessly with your current operations, often without disrupting production.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Systems:</div>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span><strong>Environmental:</strong> Wastewater Treatment, Biogas Recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span><strong>Climate:</strong> HVAC, Cold Rooms & Refrigeration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span><strong>Hygienic:</strong> Monile Flooring, Industrial Drains</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span><strong>Power:</strong> Electrical Systems, Automation & Controls</span>
                </li>
              </ul>
            </div>

            <Link 
              to="/solutions/infrastructure-systems" 
              className="inline-flex items-center gap-2 text-[#FF5757] hover:text-[#E04848] transition-colors group"
            >
              <span className="text-sm">Browse Infrastructure Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3. Facility Operations & Support */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#FF5757]/30">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-4 text-3xl">
                🔧
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">For the Operator</div>
              <h3 className="text-[#1e3a8a] mb-3">Optimize Your Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Your facility is only as good as how well it runs. Our operations and support programs keep your equipment performing, your compliance intact, and your downtime minimal, so you can focus on production.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Services:</div>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Complete Facility Management Contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>Preventive Maintenance Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>24/7 Emergency Technical Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF5757] mt-0.5 flex-shrink-0" />
                  <span>HACCP Compliance Monitoring & Audits</span>
                </li>
              </ul>
            </div>

            <Link 
              to="/solutions/operations-support" 
              className="inline-flex items-center gap-2 text-[#FF5757] hover:text-[#E04848] transition-colors group"
            >
              <span className="text-sm">View Support Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
