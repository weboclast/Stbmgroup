import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-hag3c2cwe3";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { motion } from "framer-motion";

export function Hero() {
  const promptTexts = [
    "Starting a new facility",
    "Upgrading existing equipment",
    "Improving efficiency",
    "Meeting compliance standards",
    "Expanding production capacity",
    "Reducing operational costs"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const MotionLink = motion(Link);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % promptTexts.length);
        setIsAnimating(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let rafId = 0;

    const check = () => {
      const rect = wrapper.getBoundingClientRect();
      const bottomOffset = 16; // matches `bottom-4` (16px)
      const shouldStick = rect.bottom <= window.innerHeight - bottomOffset;
      setIsStuck((prev) => (prev === shouldStick ? prev : shouldStick));
    };

    const handler = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(check);
    };

    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    handler();

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative bg-neutral-10 text-neutral-0 overflow-hidden">
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
            <div className="w-2 h-2 bg-secondary-3 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-0">27+ Years of Excellence • 100+ Projects Delivered • UAE Leader</span>
          </div>
        </div>

        {/* Main Heading and Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="h1 text-neutral-0 mb-6">
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
              className="bg-primary-4 hover:bg-primary-5 text-white gap-2 rounded-full px-8 h-12"
              asChild
            >
              <Link to="/products">
                Explore Solutions
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-secondary-3 gap-2 rounded-full px-8 h-12"
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
                src="/src/assets/hero_image.webp"
                alt="Modern food processing facility"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-8 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Prompt Input */}
            <div
              ref={wrapperRef}
              className={`${isStuck ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50' : 'absolute bottom-8 left-1/2 transform -translate-x-1/2'} w-[calc(100%-4rem)] max-w-3xl`}
            >
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <div className="backdrop-blur-[6px] bg-neutral-0 rounded-[24px] cursor-pointer border border-gray-200 shadow-lg p-4">
                    <div className="flex flex-col gap-6 p-5">
                      {/* Animated Prompt Item */}
                      <div className="flex gap-1 items-center">
                        <svg className="w-6 h-6 flex-shrink-0 text-neutral-10" fill="none" viewBox="0 0 24 24">
                          <g>
                            <path d={svgPaths.p2ad11100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M11.7 9.5L14.5 12.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M18.5 5.5L19.27 4.73001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M15.57 3.79999L15.85 2.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M20.2 8.42999L21.25 8.14999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                        <motion.p
                          className="text-neutral-10 font-medium whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isAnimating ? 1 : 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          {promptTexts[currentTextIndex]}
                        </motion.p>
                      </div>

                      {/* Prompt Text and Button */}
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm text-neutral-6">
                          Find Your Perfect Solution in 60 Seconds
                        </p>
                        <button className="bg-primary-4 hover:bg-primary-5 transition-colors flex cursor-pointer items-center justify-center w-16 h-12 rounded-full sm:hidden flex-shrink-0">
                          <svg className="w-6 h-6 text-neutral-0" fill="none" viewBox="0 0 24 24">
                            <path d={svgPaths.p244cad00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </PopoverTrigger>

                <PopoverContent 
                  className="w-full p-0 border-0 bg-transparent shadow-none"
                  sideOffset={12}
                  align="center"
                  style={{ width: 'var(--radix-popover-trigger-width)' }}
                >
                  {/* Popover Menu */}
                  <div className="bg-neutral-0 rounded-[24px] border border-gray-200 shadow-lg overflow-hidden py-2">
                    <div className="flex flex-col gap-1 p-3">
                      {promptTexts.map((text, index) => {
                        const paths = [
                          "/solutions/complete-facilities/cattle-slaughterhouse",
                          "/solutions/operations-support/preventive-maintenance",
                          "/solutions/infrastructure-systems/power-and-automation",
                          "/solutions/infrastructure-systems/hygienic-infrastructure",
                          "/solutions/complete-facilities/poultry-processing",
                          "/solutions/operations-support/facility-management"
                        ];
                        const path = paths[index] || "/solutions";

                        return (
                          <MotionLink
                            key={index}
                            to={path}
                            onClick={() => setIsPopoverOpen(false)}
                            whileHover={{ scale: 1.01, backgroundColor: '#F3F5F7' }}
                            initial={{ backgroundColor: '#ffffff' }}
                            transition={{ duration: 0.15 }}
                            className="px-4 py-4 text-neutral-10 text-base rounded-md block"
                          >
                            {text}
                          </MotionLink>
                        );
                      })}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
