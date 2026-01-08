import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getSolutionDetail, getAllSolutions } from "../data/solutions";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { FinalCTA } from "../components/FinalCTA";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { toast } from "sonner@2.0.3";

export default function SolutionDetail() {
  const { tier, slug } = useParams<{ tier: string; slug: string }>();
  const { addToBasket } = useEnquiryBasket();
  
  if (!slug) {
    return <Navigate to="/solutions" replace />;
  }

  const solution = getSolutionDetail(slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const tierLabels: Record<string, string> = {
    'complete-facilities': 'Complete Facilities',
    'infrastructure-systems': 'Infrastructure Systems',
    'operations-support': 'Operations & Support'
  };

  const tierPaths: Record<string, string> = {
    'complete-facilities': '/solutions/complete-facilities',
    'infrastructure-systems': '/solutions/infrastructure-systems',
    'operations-support': '/solutions/operations-support'
  };

  const handleAddToBasket = () => {
    addToBasket({
      id: solution.id,
      name: solution.title,
      model: 'Turnkey Solution',
      category: tierLabels[solution.tier] || 'Solution',
      description: solution.description,
      features: solution.included?.items || [],
      image: solution.image || ''
    });
    toast.success(`Added ${solution.title} to enquiry basket`);
  };

  const relatedSolutions = solution.relatedSolutions
    .map(relatedSlug => getAllSolutions().find(s => s.slug === relatedSlug))
    .filter(Boolean);

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
                <BreadcrumbLink asChild>
                  <Link to={tierPaths[solution.tier]}>{tierLabels[solution.tier]}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{solution.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#12141d] to-[#1e3a8a] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm">{tierLabels[solution.tier]}</span>
            </div>

            <h1 className="h1 text-white mb-6">
              {solution.hero.headline}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {solution.hero.subheadline}
            </p>

            {solution.hero.stats && (
              <div className="grid grid-cols-3 gap-6 md:gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                {solution.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-[#FF5757] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <h2 className="h2 text-[#1e3a8a] mb-4">
                {solution.challenge.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {solution.challenge.description}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="h2 text-[#1e3a8a] mb-4">
                {solution.solution.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {solution.solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 text-[#1e3a8a] mb-8 text-center">
              {solution.included.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {solution.included.items.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#FF5757] hover:bg-[#E04848] text-white gap-2"
                onClick={handleAddToBasket}
              >
                <Plus className="w-4 h-4" />
                Add to Enquiry Basket
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Example */}
      {solution.caseExample && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white">
                <h2 className="h2 text-white mb-6">
                  {solution.caseExample.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {solution.caseExample.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {solution.caseExample.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF5757] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="h2 text-[#1e3a8a] mb-8 text-center">
                Related Solutions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedSolutions.map((related) => (
                  <Card key={related!.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-[#1e3a8a] mb-3">{related!.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{related!.description}</p>
                      <Button 
                        asChild
                        variant="outline"
                        className="w-full border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white gap-2"
                      >
                        <Link to={`/solutions/${getSolutionDetail(related!.slug)?.tier}/${related!.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
