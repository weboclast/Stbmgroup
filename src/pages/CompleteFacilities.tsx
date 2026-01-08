import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { completeFacilities } from "../data/solutions";
import { FinalCTA } from "../components/FinalCTA";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function CompleteFacilities() {
  const components = [
    "Process Equipment",
    "Environmental Systems", 
    "Climate Control",
    "Hygiene Infrastructure",
    "Power & Automation",
    "Commissioning & Training"
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
                <BreadcrumbPage>Complete Facilities</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-neutral-8 to-neutral-10 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-primary-5 rounded-full animate-pulse"></div>
              <span className="text-sm">Tier 1 • Complete Facilities</span>
            </div>

            <h1 className="h1 text-white mb-6">
              Turnkey Facilities, Delivered Ready to Operate
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              STBM designs, builds, and commissions complete food processing facilities. One partner, accountable from concept to first production shift.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="h2 text-neutral-10 mb-4">
              Complete Facility Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized facility types, each designed for specific processing requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {completeFacilities.map((facility) => (
              <Card key={facility.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1565060299746-e5cbc5fae06d?w=600`}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white">
                    {facility.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">
                    {facility.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-primary-5 hover:bg-primary-6 text-white gap-2"
                  >
                    <Link to={`/solutions/complete-facilities/${facility.slug}`}>
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

      {/* What Complete Means */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h2 text-neutral-10 mb-4">
                What "Complete" Really Means
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A complete STBM facility includes every system integrated and working together—not just equipment, but the entire infrastructure required for production
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-5 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{component}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-neutral-10 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-primary-5 mb-2">One Partner</div>
                  <p className="text-sm text-gray-300">Accountable from design to commissioning</p>
                </div>
                <div className="text-center md:border-l md:border-r border-white/20">
                  <div className="text-primary-5 mb-2">Integrated</div>
                  <p className="text-sm text-gray-300">All systems designed to work together</p>
                </div>
                <div className="text-center">
                  <div className="text-primary-5 mb-2">Ready to Operate</div>
                  <p className="text-sm text-gray-300">Commissioned and tested before handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
