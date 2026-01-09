import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Building2, Wrench, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FinalCTA } from "../components/FinalCTA";

export default function Solutions() {
  const tiers = [
    {
      icon: Building2,
      title: "Complete Facilities",
      subtitle: "For building entire slaughterhouses from the ground up",
      description: "Turnkey food processing facilities delivered ready to operate. We design, build, and commission complete plants—one partner accountable from concept to first production shift.",
      link: "/solutions/complete-facilities",
      features: [
        "Cattle & small ruminant slaughterhouses",
        "Poultry processing plants",
        "Deboning & meat processing facilities",
        "Integrated infrastructure & equipment"
      ],
      color: "bg-neutral-10",
      image: "modern industrial facility construction"
    },
    {
      icon: Wrench,
      title: "Infrastructure Systems",
      subtitle: "For upgrading or adding critical systems to existing facilities",
      description: "Specialized infrastructure solutions that integrate seamlessly into your existing operations. Upgrade, replace, or add essential systems—often without disrupting production.",
      link: "/solutions/infrastructure-systems",
      features: [
        "Wastewater treatment plants",
        "HVAC & refrigeration systems",
        "Hygienic infrastructure",
        "Power & automation systems"
      ],
      color: "bg-primary-5",
      image: "industrial hvac system"
    },
    {
      icon: HeadphonesIcon,
      title: "Operations & Support",
      subtitle: "For outsourcing technical management and maintenance",
      description: "Expert facility operations and technical support services. Maximize uptime, ensure compliance, and reduce costs by letting our specialists manage your technical systems.",
      link: "/solutions/operations-support",
      features: [
        "Complete facility management",
        "Preventive maintenance programs",
        "24/7 emergency technical support",
        "Compliance & reporting"
      ],
      color: "bg-neutral-10",
      image: "maintenance technician"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-8 to-neutral-10 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="w-2 h-2 bg-primary-5 rounded-full animate-pulse"></div>
              <span className="text-sm">Three Solution Tiers • One Trusted Partner</span>
            </div>

            <h1 className="h1 text-white mb-6">
              Integrated Solutions for Every Challenge
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              From complete turnkey facilities to specialized infrastructure and ongoing support—STBM delivers solutions engineered to work together, managed by one accountable partner.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {tiers.map((tier, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800`}
                      alt={tier.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className={`absolute top-6 left-6 ${tier.color} p-4 rounded-2xl shadow-xl`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="mb-4">
                      <h2 className="h2 text-neutral-10 mb-2">
                        {tier.title}
                      </h2>
                      <p className="text-gray-600 italic">
                        {tier.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-5 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Button 
                        asChild
                        size="lg"
                        className={`${tier.color} ${tier.color === 'bg-neutral-10' ? 'hover:bg-neutral-9' : 'hover:bg-primary-6'} text-white gap-2`}
                      >
                        <Link to={tier.link}>
                          Explore {tier.title}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
