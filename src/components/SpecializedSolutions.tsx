import React, { useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import meatImg from "../assets/placeholder-meat.svg";
import dairyImg from "../assets/placeholder-dairy.svg";
import rteImg from "../assets/placeholder-rte.svg";
import seafoodImg from "../assets/placeholder-seafood.svg";

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
};

const DEFAULT_ITEMS: Item[] = [
  {
    id: "meat",
    title: "Meat & Poultry Processing",
    subtitle: "End-to-end slaughterhouse and processing lines",
    image: meatImg,
  },
  {
    id: "dairy",
    title: "Dairy & Beverage Production",
    subtitle: "Hygienic systems for liquid food processing",
    image: dairyImg,
  },
  {
    id: "rte",
    title: "Ready-to-Eat Food Manufacturing",
    subtitle: "Compact plants for value-added products",
    image: rteImg,
  },
  {
    id: "seafood",
    title: "Seafood Processing",
    subtitle: "Temperature-controlled automated lines",
    image: seafoodImg,
  },
];

const AUTOPLAY_INTERVAL = 6000; // milliseconds

export default function SpecializedSolutions({ items = DEFAULT_ITEMS }: { items?: Item[] }) {
  const visible = items.slice(0, 4);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const prev = useCallback(() => setIndex((i) => (i - 1 + visible.length) % visible.length), [visible.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % visible.length), [visible.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % visible.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, visible.length]);

  // Drag / swipe handling
  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (Math.abs(offset) > 80 || Math.abs(velocity) > 500) {
      if (offset < 0) {
        next();
      } else {
        prev();
      }
    }
  };

  // measure active tab position
  const measure = useCallback(() => {
    const active = tabRefs.current[index];
    const container = containerRef.current;
    if (!active || !container) return setIndicator({ left: 0, width: 0 });
    const aRect = active.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    setIndicator({ left: aRect.left - cRect.left, width: aRect.width });
  }, [index]);

  useLayoutEffect(() => {
    // Small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      measure();
    }, 50);
    
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground mb-8">Specialized Solutions<br/>for Every Sector</h2>

        <div className="max-w-5xl mx-auto mb-6">
          <div className="relative">
            <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6" role="tablist" aria-label="Sector tabs">
              {visible.map((it, i) => (
                <button
                  key={it.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  onClick={() => setIndex(i)}
                  role="tab"
                  aria-selected={i === index}
                  className={`flex items-start gap-3 p-3 md:p-4 rounded-lg transition-colors min-h-[64px] text-left border-b-4 ${
                    i === index ? "border-foreground bg-neutral-0 shadow-sm" : "border-neutral-3 bg-transparent hover:bg-neutral-1"
                  }`}
                >
                  <div className="text-xs text-muted-foreground w-6 flex-shrink-0">{i + 1}</div>
                  <div className={`flex-1 mt-0 text-sm md:text-base leading-snug ${i === index ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                    {it.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Visible timeline below tabs */}
          <motion.div className="mt-3 h-1 bg-neutral-3 w-full rounded-full relative overflow-visible">
            <motion.div
              key={index}
              className="h-1 absolute left-0 top-0"
              initial={{ width: 0 }}
              animate={{ width: indicator.width }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
              style={{ 
                backgroundColor: "#111827", 
                borderRadius: 9999,
                left: indicator.left,
              }}
            />
          </motion.div>
        </div>

        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden bg-neutral-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={visible[index].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45 }}
                className="w-full"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -300, right: 300 }}
                  dragElastic={0.16}
                  onDragEnd={handleDragEnd}
                >
                  <div className="relative">
                    <img
                      src={visible[index].image}
                      alt={visible[index].title}
                      className="w-full h-[420px] md:h-[480px] object-cover"
                    />
                    <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {visible[index].subtitle}
                      </div>
                      <div className="flex items-center gap-4">
                        <button onClick={prev} aria-label="Previous" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow">
                          <ArrowLeft className="w-4 h-4 text-foreground" />
                        </button>
                        <button onClick={next} aria-label="Next" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow">
                          <ArrowRight className="w-4 h-4 text-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
