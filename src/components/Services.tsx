import { Package, Building2, Wrench, Headphones } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Equipment Supply",
    description: "Industrial food processing machinery from leading global manufacturers. Complete range of equipment for meat, poultry, dairy, and food production."
  },
  {
    icon: Building2,
    title: "Turnkey Projects",
    description: "Complete factory setup from scratch. We handle design, engineering, procurement, installation, and commissioning of your entire facility."
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description: "Professional equipment installation by certified technicians. Ensure optimal performance and compliance with industry standards."
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Ongoing technical support, preventive maintenance, spare parts supply, and emergency repairs to keep your operations running smoothly."
  }
];

export function Services() {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 text-neutral-10 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive food processing solutions tailored to your specific needs. 
            From single equipment to complete factory installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary-5/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary-5" />
              </div>
              <h3 className="h4 text-neutral-10 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
