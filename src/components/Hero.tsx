import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-hag3c2cwe3";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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

            {/* Prompt Input */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-4rem)] max-w-3xl">
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <div className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] rounded-[24px] relative cursor-pointer">
                    <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[20px] relative w-full">
                        {/* Premade Prompt Item */}
                        <div className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip relative rounded-[10px] shrink-0 w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g>
                                <path d={svgPaths.p2ad11100} stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M11.7 9.5L14.5 12.3" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M18.5 5.5L19.27 4.73001" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M15.57 3.79999L15.85 2.75" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M20.2 8.42999L21.25 8.14999" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                            </svg>
                          </div>
                          <p 
                            className="basis-0 grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-nowrap transition-opacity duration-300" 
                            style={{ 
                              whiteSpace: 'nowrap',
                              opacity: isAnimating ? 1 : 0
                            }}
                          >
                            {promptTexts[currentTextIndex]}
                          </p>
                        </div>

                        {/* Row with Prompt and Button */}
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          {/* Prompt Text */}
                          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                            <div className="bg-[#1e3a8a] h-[24px] shrink-0 w-[2px]" />
                            <p className="text-[14px] leading-[20px] opacity-70 relative shrink-0 text-[#121212] text-nowrap whitespace-pre">
                              Find Your Perfect Solution in 60 Seconds
                            </p>
                          </div>
                          
                          {/* Button */}
                          <button className="bg-[#f97316] hover:bg-[#ea580c] transition-colors box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0">
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <g>
                                  <path d={svgPaths.p244cad00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
                    <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.13),0px_8px_16px_-12px_rgba(0,0,0,0.08)]" />
                  </div>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-full p-0 border-0 bg-transparent shadow-none"
                  sideOffset={12}
                  align="center"
                  style={{ width: 'var(--radix-popover-trigger-width)' }}
                >
                  {/* Premade Prompt Popover */}
                  <div className="bg-[#fcfcfc] rounded-[24px] w-full">
                    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
                      {/* List */}
                      <div className="relative w-full">
                        <div className="size-full">
                          <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[12px] relative w-full">
                            {promptTexts.map((text, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  // Functionality will be added later
                                  setIsPopoverOpen(false);
                                }}
                                className={`${
                                  index === 1 ? 'bg-[#f8f7f7]' : ''
                                } relative rounded-[10px] w-full hover:bg-[#f8f7f7] transition-colors`}
                              >
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative w-full">
                                    <p className="basis-0 grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[16px] text-nowrap tracking-[-0.16px] text-left">
                                      {text}
                                    </p>
                                  </div>
                                </div>
                                {index === 1 && (
                                  <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[10px]" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_16px_4px_0px_rgba(0,0,0,0),0px_10px_4px_0px_rgba(0,0,0,0),0px_6px_3px_0px_rgba(0,0,0,0.01),0px_3px_3px_0px_rgba(0,0,0,0.02),0px_1px_1px_0px_rgba(0,0,0,0.02)]" />
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
