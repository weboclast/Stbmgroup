import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#172554] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-white" />
          </div>
          
          <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            "STBM didn't just supply equipment - they solved our capacity problem. Their team analyzed our bottlenecks, redesigned our workflow, and implemented solutions that doubled our output without doubling our footprint."
          </blockquote>
          
          <div>
            <div className="text-white mb-1">Ahmed Al Rashid</div>
            <div className="text-blue-200 text-sm">CEO, Gulf Food Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
