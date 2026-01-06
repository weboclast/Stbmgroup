import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import { products } from "../data/products";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { Link } from "react-router-dom";

export function FeaturedEquipment() {
  const { addToBasket, isInBasket } = useEnquiryBasket();
  const featuredProducts = products.slice(0, 6);

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#1e3a8a] mb-4">Featured Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of industrial-grade food processing equipment. 
            All equipment backed by warranty and professional installation services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/products/${item.id}`}>
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="text-sm text-[#FF5757] mb-2">{item.category}</div>
                <Link to={`/products/${item.id}`}>
                  <h3 className="text-[#1e3a8a] mb-1 hover:text-[#FF5757] transition-colors">{item.name}</h3>
                </Link>
                <div className="text-sm text-gray-500 mb-3">Model: {item.model}</div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{item.description}</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                    asChild
                  >
                    <Link to={`/products/${item.id}`}>View Details</Link>
                  </Button>
                  <Button
                    size="sm"
                    className={`gap-2 ${isInBasket(item.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-[#FF5757] hover:bg-[#E04848]'}`}
                    onClick={() => addToBasket(item)}
                    disabled={isInBasket(item.id)}
                  >
                    {isInBasket(item.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        Enquire
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-[#FF5757] text-[#FF5757] hover:bg-[#FF5757] hover:text-white gap-2" asChild>
            <Link to="/products">
              View All Equipment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}