import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download, FileText, BookOpen, Video } from "lucide-react";

const resources = [
  {
    category: "Product Catalogs",
    items: [
      {
        title: "Complete Equipment Catalog 2025",
        description: "Full range of food processing equipment with specifications",
        type: "PDF",
        size: "12.5 MB",
        icon: FileText
      },
      {
        title: "Meat Processing Equipment Guide",
        description: "Specialized equipment for meat and poultry processing",
        type: "PDF",
        size: "8.2 MB",
        icon: FileText
      },
      {
        title: "Refrigeration Systems Catalog",
        description: "Blast freezers, cold rooms, and cooling solutions",
        type: "PDF",
        size: "6.8 MB",
        icon: FileText
      }
    ]
  },
  {
    category: "Technical Documentation",
    items: [
      {
        title: "Installation Guidelines",
        description: "Best practices for equipment installation and setup",
        type: "PDF",
        size: "4.2 MB",
        icon: BookOpen
      },
      {
        title: "Maintenance Manual",
        description: "Preventive maintenance schedules and procedures",
        type: "PDF",
        size: "5.6 MB",
        icon: BookOpen
      },
      {
        title: "Safety & Compliance Guide",
        description: "Food safety standards and regulatory compliance",
        type: "PDF",
        size: "3.8 MB",
        icon: BookOpen
      }
    ]
  },
  {
    category: "Case Studies",
    items: [
      {
        title: "Al Ain Slaughterhouse Success Story",
        description: "Complete facility transformation case study",
        type: "PDF",
        size: "2.4 MB",
        icon: FileText
      },
      {
        title: "Dubai Central Kitchen Expansion",
        description: "Large-scale catering facility upgrade",
        type: "PDF",
        size: "2.1 MB",
        icon: FileText
      },
      {
        title: "ROI Analysis: Modern Food Processing",
        description: "Cost-benefit analysis of equipment modernization",
        type: "PDF",
        size: "1.8 MB",
        icon: FileText
      }
    ]
  },
  {
    category: "Video Resources",
    items: [
      {
        title: "Equipment Operation Training",
        description: "Video tutorials for operating STBM equipment",
        type: "Video",
        size: "250 MB",
        icon: Video
      },
      {
        title: "Facility Tour: Modern Processing Plant",
        description: "Virtual tour of a complete STBM installation",
        type: "Video",
        size: "180 MB",
        icon: Video
      },
      {
        title: "Maintenance Best Practices",
        description: "Video guide for equipment maintenance",
        type: "Video",
        size: "120 MB",
        icon: Video
      }
    ]
  }
];

export function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Resource Center</h1>
          <p className="text-blue-100 max-w-2xl">
            Download product catalogs, technical documentation, case studies, and training materials. 
            All resources are available free of charge.
          </p>
        </div>
      </section>

      {/* Resources */}
      <div className="container mx-auto px-4 py-16">
        {resources.map((category, catIndex) => (
          <div key={catIndex} className="mb-16 last:mb-0">
            <h2 className="text-[#1e3a8a] mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#f97316]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1e3a8a] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            {item.type} • {item.size}
                          </div>
                          <Button size="sm" variant="outline" className="gap-2">
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-white mb-4">Need Custom Documentation?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Our technical team can provide customized specifications, drawings, 
                and documentation tailored to your specific project requirements.
              </p>
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c]">
                Request Custom Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
