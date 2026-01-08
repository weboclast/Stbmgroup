import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Angelina Vasquez",
    title: "Marketing Manager of KM Hypermarket",
    quote: "STBM is the secret to our operations success. It makes day to day oops so easy, and our customers love using our new efficient services.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    metrics: [
      { value: "+$550,000", label: "Online sales" },
      { value: "+377%", label: "Growth" }
    ],
    slug: "angelina-vasquez-km-hypermarket"
  },
  {
    id: 2,
    name: "Ahmed Al Rashid",
    title: "CEO, Gulf Food Industries",
    quote: "STBM didn't just supply equipment - they solved our capacity problem. Their team analyzed our bottlenecks, redesigned our workflow, and implemented solutions that doubled our output without doubling our footprint.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    metrics: [
      { value: "2x", label: "Output increase" },
      { value: "0%", label: "Footprint change" }
    ],
    slug: "ahmed-al-rashid-gulf-food"
  },
  {
    id: 3,
    name: "Fatima Al Mansouri",
    title: "Operations Director, Al Reef Dairy",
    quote: "The professionalism and attention to detail shown by STBM transformed our facility. From initial consultation to final commissioning, every step was executed flawlessly. Our production has never been smoother.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    metrics: [
      { value: "+250%", label: "Efficiency gain" },
      { value: "-40%", label: "Downtime reduction" }
    ],
    slug: "fatima-al-mansouri-al-reef"
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="h2 text-neutral-10 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from industry leaders who've transformed their operations with STBM
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="h-96 md:h-full min-h-96 bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                {/* Quote */}
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium mb-6">
                    "{current.quote}"
                  </p>

                  {/* Name & Title */}
                  <div className="mb-8">
                    <h3 className="h4 text-neutral-10 mb-1">{current.name}</h3>
                    <p className="text-sm text-gray-600">{current.title}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <div className="grid grid-cols-2 gap-6">
                    {current.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl md:text-3xl font-bold text-primary-5 mb-1">
                          {metric.value}
                        </div>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  asChild
                  className="bg-primary-5 hover:bg-primary-6 text-white gap-2 w-fit"
                >
                  <Link to={`/projects#${current.slug}`}>
                    See {current.name.split(" ")[0]}'s story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary-5 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-5 hover:text-primary-5 transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-5 hover:text-primary-5 transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-sm text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
