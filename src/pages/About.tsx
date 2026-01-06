import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, CheckCircle2, HeadphonesIcon, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">About STBM</h1>
          <p className="text-blue-100 max-w-2xl">
            Leading the food processing industry in UAE for over 27 years with expertise, 
            innovation, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1e3a8a] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Since 1997, STBM Food Technology has been at the forefront of food processing 
                solutions in the United Arab Emirates. What started as a small equipment supplier 
                has grown into a comprehensive solutions provider, serving over 100 major food 
                processing facilities across the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been built on a foundation of trust, technical expertise, and 
                unwavering commitment to our clients' success. We've evolved from simple equipment 
                supply to offering complete turnkey solutions, encompassing design, installation, 
                training, and ongoing support.
              </p>
              <p className="text-gray-600">
                Today, STBM stands as the trusted partner for food processors, slaughterhouses, 
                and production facilities seeking to modernize, expand, or establish new operations 
                in the UAE.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717163232843-74ec38536930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjE4NTQwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="STBM facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF5757]/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#FF5757]" />
                </div>
                <h3 className="text-[#1e3a8a] mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower food processing businesses with world-class equipment and solutions 
                  that enhance productivity, ensure food safety, and drive operational excellence. 
                  We are committed to delivering value through innovation, reliability, and 
                  exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF5757]/10 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-[#FF5757]" />
                </div>
                <h3 className="text-[#1e3a8a] mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted and innovative food processing solutions provider in the 
                  Middle East, recognized for our technical expertise, customer-centric approach, 
                  and contribution to the region's food security and industry advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1e3a8a] mb-12 text-center">Why Choose STBM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "ISO Certified",
                description: "Quality management systems certified to international standards"
              },
              {
                icon: Users,
                title: "Expert Teams",
                description: "Highly skilled engineers and technicians with decades of experience"
              },
              {
                icon: CheckCircle2,
                title: "Proven Track Record",
                description: "100+ successful projects across UAE's leading facilities"
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 Support",
                description: "Dedicated after-sales support and maintenance services"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#FF5757]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[#FF5757]" />
                  </div>
                  <h3 className="text-[#1e3a8a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1e3a8a] mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, ensuring the highest quality standards in equipment supply, installation, and service."
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty and transparency, building long-term relationships based on trust and mutual respect."
              },
              {
                title: "Innovation",
                description: "We continuously seek innovative solutions and technologies to help our clients stay ahead in a competitive market."
              },
              {
                title: "Customer Focus",
                description: "Our clients' success is our success. We listen, understand, and deliver solutions tailored to specific needs."
              },
              {
                title: "Expertise",
                description: "We invest in our team's knowledge and skills, ensuring we remain industry leaders in food processing technology."
              },
              {
                title: "Reliability",
                description: "We deliver on our promises, from initial consultation to long-term support, ensuring our clients can depend on us."
              }
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-[#1e3a8a] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#1e3a8a] mb-4">Partner With STBM</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the many successful food processing businesses that trust STBM for their equipment 
            and facility needs. Let's discuss how we can help your operation thrive.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#FF5757] hover:bg-[#E04848]" asChild>
              <Link to="/enquiry">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
