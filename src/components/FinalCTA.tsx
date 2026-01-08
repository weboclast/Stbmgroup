import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="bg-primary text-accent-foreground py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to build your facility?
            </h2>
            <p className="text-primary-foreground text-sm mb-8">
              Join the many successful food processing businesses that trust STBM for their equipment and facility needs. Let's discuss how we can help your operation thrive.
            </p>
            <Button
              size="lg"
              className="bg-neutral-0 text-primary hover:bg-primary-400 px-8 py-6 text-base inline-flex items-center gap-2 w-fit"
              asChild
            >
              <Link to="/enquiry">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right Side - Empty/Black Space */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
