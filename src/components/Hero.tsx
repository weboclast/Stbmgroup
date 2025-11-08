import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-[#12141d] text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse"></div>
            <span className="text-sm text-white">27+ Years of Excellence • 100+ Projects Delivered • UAE Leader</span>
          </div>
        </div>

        {/* Main Heading and Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-white mb-6 tracking-tight">
            Your Trusted Food Tech Solutions Partner
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Complete turnkey projects. Premium equipment supply. Expert installation. 
            One partner for transforming your food processing vision into reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white gap-2 rounded-full px-8 h-12"
              asChild
            >
              <Link to="/products">
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 gap-2 rounded-full px-8 h-12"
              asChild
            >
              <Link to="/resources">
                <FileText className="w-4 h-4" />
                View Equipment Catalog
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-t-3xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574850183045-b3a7bcc4b93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwcHJvY2Vzc2luZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MjYwMjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern food processing facility"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Stats Overlay Card */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-4rem)] max-w-3xl">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-[#1e3a8a] mb-2">27+</div>
                    <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center border-l border-r border-gray-200">
                    <div className="text-[#1e3a8a] mb-2">100+</div>
                    <div className="text-xs md:text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#f97316] mb-2">ISO</div>
                    <div className="text-xs md:text-sm text-gray-600">Certified Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
