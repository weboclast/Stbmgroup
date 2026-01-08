import { FileText, CheckSquare, Calculator, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: FileText,
    title: "10 Ways to Optimize Your Food Processing Line",
    type: "Guide"
  },
  {
    icon: CheckSquare,
    title: "HACCP Compliance for UAE Food Facilities",
    type: "Checklist"
  },
  {
    icon: Calculator,
    title: "ROI Calculator for Equipment Upgrades",
    type: "Calculator"
  },
  {
    icon: BookOpen,
    title: "Future of Food Processing in the GCC",
    type: "Whitepaper"
  }
];

export function ResourcePreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 text-neutral-10 mb-4">Knowledge That Empowers</h2>
          <p className="text-gray-600">Featured Resources</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to="/resources"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-neutral-10/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-neutral-10/20 transition-colors">
                <resource.icon className="w-6 h-6 text-neutral-10" />
              </div>
              <div className="text-xs text-primary-5 mb-2">{resource.type}</div>
              <h3 className="h5 text-neutral-10 group-hover:text-primary-5 transition-colors">{resource.title}</h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neutral-10 text-neutral-10 hover:bg-neutral-10 hover:text-white gap-2"
            asChild
          >
            <Link to="/resources">
              Access Resource Center
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
