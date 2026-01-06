import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { infrastructureSystems } from "../data/solutions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function InfrastructureSystems() {
  const commonProblems = [
    {
      problem: "Wastewater Non-Compliance",
      solution: "Specialized treatment systems achieving >95% removal"
    },
    {
      problem: "Failing Refrigeration",
      solution: "Modern systems with 24/7 monitoring and backup capacity"
    },
    {
      problem: "Hygiene Violations",
      solution: "Food-grade infrastructure meeting HACCP standards"
    },
    {
      problem: "High Energy Costs",
      solution: "Efficient systems with smart controls and automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/solutions">Solutions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Infrastructure Systems</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#12141d] to-[#1e3a8a] text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse"></div>
              <span className="text-sm">Tier 2 • Infrastructure Systems</span>
            </div>

            <h1 className="text-white mb-6">
              Critical Infrastructure Systems for Food Processing Facilities
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Upgrade, replace, or add essential systems to your existing operations. We deliver specialized solutions that integrate seamlessly, often without disrupting production.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">
              Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized systems designed for the unique demands of food processing facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {infrastructureSystems.map((system) => (
              <Card key={system.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1581092160607-1e48f47ad0c4?w=600`}
                    alt={system.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white">
                    {system.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">
                    {system.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white gap-2"
                  >
                    <Link to={`/solutions/infrastructure-systems/${system.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#1e3a8a] mb-4">
                Common Problems We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Infrastructure failures can shut down production and violate regulations. We solve these challenges with proven systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonProblems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-2">{item.problem}</h4>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#f97316] rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-white mb-2">Minimal Disruption</div>
                  <p className="text-sm text-white/80">Often installed without stopping production</p>
                </div>
                <div className="text-center md:border-l md:border-r border-white/20">
                  <div className="text-white mb-2">Seamless Integration</div>
                  <p className="text-sm text-white/80">Works with your existing equipment</p>
                </div>
                <div className="text-center">
                  <div className="text-white mb-2">Proven Solutions</div>
                  <p className="text-sm text-white/80">30+ systems installed across UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#1e3a8a] mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let us assess your current systems and recommend the right infrastructure upgrades for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white gap-2"
                asChild
              >
                <Link to="/enquiry">
                  Request Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white gap-2"
                asChild
              >
                <Link to="/projects">
                  View Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
