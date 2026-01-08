import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, TrendingDown, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { operationsSupport } from "../data/solutions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function OperationsSupport() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Predictable Costs",
      description: "Fixed monthly fees replace unpredictable emergency repairs and in-house staffing costs"
    },
    {
      icon: Clock,
      title: "Maximum Uptime",
      description: "Preventive maintenance and 24/7 support keep your facility running reliably"
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Expert technicians manage your systems while you focus on production and quality"
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
                <BreadcrumbPage>Operations & Support</BreadcrumbPage>
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
              <div className="w-2 h-2 bg-[#FF5757] rounded-full animate-pulse"></div>
              <span className="text-sm">Tier 3 • Operations & Support</span>
            </div>

            <h1 className="h1 text-white mb-6">
              Facility Operations & Technical Support Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Maximize uptime, ensure compliance, and reduce operating costs. Let our experts manage your facility's technical systems so you can focus on production.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="h2 text-[#1e3a8a] mb-4">
              Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional technical services that keep your facility running reliably and efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {operationsSupport.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-[#FF5757] hover:bg-[#E04848] text-white gap-2"
                  >
                    <Link to={`/solutions/operations-support/${service.slug}`}>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h2 text-[#1e3a8a] mb-4">
                Why Outsource Technical Operations?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Running a food processing facility requires specialized technical expertise. Let us handle the complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5757] rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#1e3a8a] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-[#1e3a8a] mb-2">99.5%+</div>
                  <p className="text-sm text-gray-600">Guaranteed Uptime</p>
                </div>
                <div>
                  <div className="text-[#1e3a8a] mb-2">30%</div>
                  <p className="text-sm text-gray-600">Cost Savings vs. In-House</p>
                </div>
                <div>
                  <div className="text-[#1e3a8a] mb-2">24/7</div>
                  <p className="text-sm text-gray-600">Emergency Support</p>
                </div>
                <div>
                  <div className="text-[#1e3a8a] mb-2">100+</div>
                  <p className="text-sm text-gray-600">Facilities Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 text-white mb-6">
              Let Experts Manage Your Facility
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop worrying about technical systems and focus on what you do best—producing quality food products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#FF5757] hover:bg-[#E04848] text-white gap-2"
                asChild
              >
                <Link to="/enquiry">
                  Request Operations Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e3a8a] gap-2"
                asChild
              >
                <Link to="/about">
                  Meet Our Team
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
