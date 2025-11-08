import { useState } from "react";
import { products, categories } from "../data/products";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Filter, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { Link } from "react-router-dom";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Equipment");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToBasket, isInBasket } = useEnquiryBasket();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Equipment" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Industrial Equipment Catalog</h1>
          <p className="text-blue-100 max-w-2xl">
            Browse our complete range of food processing equipment. Click "Add to Enquiry" to request quotes for multiple items.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search equipment by name or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-[#1e3a8a] hover:bg-[#172554]" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <Link to={`/products/${product.id}`}>
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="text-sm text-[#f97316] mb-2">{product.category}</div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-[#1e3a8a] mb-1 group-hover:text-[#f97316] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="text-sm text-gray-500 mb-3">Model: {product.model}</div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                    asChild
                  >
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <Button
                    size="sm"
                    className={`gap-2 ${isInBasket(product.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-[#f97316] hover:bg-[#ea580c]'}`}
                    onClick={() => addToBasket(product)}
                    disabled={isInBasket(product.id)}
                  >
                    {isInBasket(product.id) ? (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">No products found matching your criteria</p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Equipment");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
