import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SuccessStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-block bg-[#FF5757]/10 text-[#FF5757] px-4 py-2 rounded-full text-sm mb-4">
              Recent Success Story
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Food processing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-[#1e3a8a] mb-6">
                  "From Concept to Production in 120 Days"
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-[#FF5757] mb-2">Challenge</div>
                    <p className="text-gray-600">
                      A major UAE food manufacturer needed to triple production capacity for Ramadan season.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm text-[#FF5757] mb-2">Our Solution</div>
                    <p className="text-gray-600">
                      Designed and installed a complete parallel production line including meat processing, packaging, and cold storage systems.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm text-[#FF5757] mb-2">Result</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">300% capacity increase delivered on time</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">40% reduction in per-unit processing costs</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="border-[#FF5757] text-[#FF5757] hover:bg-[#FF5757] hover:text-white gap-2"
                    asChild
                  >
                    <Link to="/projects">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
