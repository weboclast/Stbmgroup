import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build your facility?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the many successful food processing businesses that trust STBM for their equipment and facility needs. Let's discuss how we can help your operation thrive.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold"
              asChild
            >
              <Link to="/enquiry">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Documentation Card */}
            <button className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-lg text-left transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Request Custom Documentation
                  </h3>
                  <p className="text-gray-400">
                    Get detailed specs and technical documentation tailored to your needs
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-white flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Facility Tour Card */}
            <button className="group bg-[#FF5757] hover:bg-[#E04848] p-8 rounded-lg text-left transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Facility Tour
                  </h3>
                  <p className="text-red-100">
                    Experience our state-of-the-art facilities and equipment firsthand
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-white flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
