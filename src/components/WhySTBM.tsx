import { Target, Globe2, Handshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Single-Source Accountability",
    description: "Stop juggling multiple vendors. One partner, one contract, one point of contact for your entire project. Simplicity that saves time and eliminates finger-pointing."
  },
  {
    icon: Globe2,
    title: "Regional Expertise, Global Standards",
    description: "Deep understanding of UAE market requirements combined with international best practices. Your facility will meet local regulations while achieving world-class efficiency."
  },
  {
    icon: Handshake,
    title: "Lifecycle Partnership",
    description: "Our relationship doesn't end at installation. From preventive maintenance to emergency support, we're here to ensure continuous operation and peak performance."
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our solutions pay for themselves. Clients typically see 30-40% efficiency improvements and significant cost reductions within the first year of operation."
  }
];

export function WhySTBM() {
  return (
    <section id="why-stbm" className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#172554] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="h2 text-white mb-4">Why Leaders Choose STBM</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="w-14 h-14 bg-[#FF5757] rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="h5 text-white mb-3">{reason.title}</h3>
              <p className="text-blue-100 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
