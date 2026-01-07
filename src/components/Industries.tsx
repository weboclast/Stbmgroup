import { Beef, Milk, UtensilsCrossed, Fish, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const industries = [
  {
    icon: Beef,
    title: "Meat & Poultry Processing",
    description: "Complete slaughterhouse setups, processing lines, and cold chain solutions that ensure quality from farm to table."
  },
  {
    icon: Milk,
    title: "Dairy & Beverage Production",
    description: "Hygienic processing systems, pasteurization units, and packaging lines designed for optimal product safety and shelf life."
  },
  {
    icon: UtensilsCrossed,
    title: "Ready-to-Eat Food Manufacturing",
    description: "Integrated solutions for prepared foods - from cooking and blast chilling to packaging and distribution."
  },
  {
    icon: Fish,
    title: "Seafood Processing",
    description: "Specialized equipment and facility designs that maintain freshness and meet the highest hygiene standards."
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="h2 text-[#1e3a8a] mb-4">Specialized Solutions for Every Sector</h2>
        </div>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Every food sector has unique challenges. We've spent 27 years perfecting solutions for each one.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <industry.icon className="w-8 h-8 text-[#1e3a8a]" />
              </div>
              <h3 className="h4 text-[#1e3a8a] mb-3">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white gap-2"
            asChild
          >
            <Link to="/projects">
              See How We've Helped Others
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
