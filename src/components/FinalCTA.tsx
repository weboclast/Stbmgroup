import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to build your facility?
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Join the many successful food processing businesses that trust STBM for their equipment and facility needs. Let's discuss how we can help your operation thrive.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base inline-flex items-center"
              asChild
            >
              <Link to="/enquiry" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Documentation Card */}
            <Link to="/resources" className="block">
              <div className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-lg text-left transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Request Custom Documentation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get detailed specs and technical documentation tailored to your needs
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Facility Tour Card */}
            <Link to="/enquiry" className="block">
              <div className="group bg-[#FF5757] hover:bg-[#E04848] p-8 rounded-lg text-left transition-all duration-300 cursor-pointer h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Facility Tour
                    </h3>
                    <p className="text-red-100 text-sm">
                      Experience our state-of-the-art facilities and equipment firsthand
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
