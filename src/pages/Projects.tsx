import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Al Ain Meat Processing Facility",
    location: "Al Ain, UAE",
    year: "2024",
    category: "Slaughterhouse",
    scope: "Turnkey Project",
    description: "Complete slaughterhouse setup including meat processing line, blast freezers, and cold storage facilities. Capacity: 500 heads/day.",
    image: "https://images.unsplash.com/photo-1656711858987-1956a99f646a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvY2Vzc2luZyUyMHBsYW50fGVufDF8fHx8MTc2MTg1NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "50% increase in processing capacity",
      "30% reduction in energy costs",
      "Full HACCP compliance achieved"
    ]
  },
  {
    id: 2,
    name: "Dubai Central Kitchen Expansion",
    location: "Dubai, UAE",
    year: "2023",
    category: "Food Processing",
    scope: "Equipment Supply & Installation",
    description: "Installation of industrial cooking equipment, blast chillers, and automated packaging line for large-scale catering operation.",
    image: "https://images.unsplash.com/photo-1741739813128-cb658a9a0f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmFjdG9yeSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTg1NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "Doubled production output",
      "Improved food safety standards",
      "Reduced operational costs by 25%"
    ]
  },
  {
    id: 3,
    name: "Sharjah Poultry Processing Plant",
    location: "Sharjah, UAE",
    year: "2023",
    category: "Poultry Processing",
    scope: "Turnkey Project",
    description: "State-of-the-art poultry processing facility with automated evisceration line, chilling systems, and packaging equipment.",
    image: "https://images.unsplash.com/photo-1717163232843-74ec38536930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjE4NTQwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "Processing 10,000 birds/day",
      "ISO 22000 certification achieved",
      "98% automation efficiency"
    ]
  },
  {
    id: 4,
    name: "Abu Dhabi Fish Processing Unit",
    location: "Abu Dhabi, UAE",
    year: "2022",
    category: "Seafood Processing",
    scope: "Equipment Supply",
    description: "Supply of filleting machines, smoking chambers, vacuum packaging systems, and cold storage for fish processing operation.",
    image: "https://images.unsplash.com/photo-1758506972062-07fb7a2c34bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9vZCUyMHByb2Nlc3NpbmclMjBmYWN0b3J5fGVufDF8fHx8MTc2MTg1MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "Extended product shelf life",
      "Premium quality output",
      "Export certification obtained"
    ]
  },
  {
    id: 5,
    name: "Ajman Meat Factory Upgrade",
    location: "Ajman, UAE",
    year: "2022",
    category: "Equipment Upgrade",
    scope: "Installation & Training",
    description: "Modernization of existing facility with new grinding equipment, mixing systems, and water treatment plant.",
    image: "https://images.unsplash.com/photo-1656711858987-1956a99f646a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwcHJvY2Vzc2luZyUyMHBsYW50fGVufDF8fHx8MTc2MTg1NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "40% productivity increase",
      "Improved product consistency",
      "Staff fully trained and certified"
    ]
  },
  {
    id: 6,
    name: "RAK Cold Storage Facility",
    location: "Ras Al Khaimah, UAE",
    year: "2021",
    category: "Cold Storage",
    scope: "Turnkey Project",
    description: "Complete cold storage and freezing facility with blast freezers, cold rooms, and material handling systems.",
    image: "https://images.unsplash.com/photo-1741739813128-cb658a9a0f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmFjdG9yeSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTg1NDA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "5,000 tons storage capacity",
      "Energy-efficient cooling systems",
      "24/7 temperature monitoring"
    ]
  }
];

export function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-neutral-10 to-neutral-9 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="h1 text-white mb-4">Our Projects</h1>
          <p className="text-neutral-1 max-w-2xl">
            Proven track record of 100+ successful installations across the UAE. 
            From single equipment to complete turnkey facilities.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-neutral-10 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-neutral-10 mb-2">27+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-neutral-10 mb-2">50+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-neutral-10 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary-4/10 text-primary-5">
                      {project.category}
                    </Badge>
                    <Badge variant="outline">{project.scope}</Badge>
                  </div>
                  
                  <h3 className="h4 text-neutral-10 mb-3">{project.name}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-neutral-10 mb-2">Key Results:</div>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary-5 mt-1">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h2 text-neutral-10 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your food processing requirements and create a customized solution for your facility.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary-5 hover:bg-primary-6 gap-2" asChild>
              <Link to="/enquiry">
                <Building2 className="w-5 h-5" />
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">Browse Equipment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
