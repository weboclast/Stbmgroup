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

        </div>
      </div>
    </section>
  );
}
