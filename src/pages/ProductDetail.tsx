import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, ShoppingBag, CheckCircle2, Download, Share2 } from "lucide-react";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { Card, CardContent } from "../components/ui/card";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToBasket, isInBasket } = useEnquiryBasket();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="h2 text-neutral-10 mb-4">Product Not Found</h2>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToBasket = () => {
    addToBasket(product);
    // Optionally show a success message
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-neutral-10">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-neutral-10">Equipment</Link>
            <span>/</span>
            <span className="text-neutral-10">{product.model}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6 gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg mb-4">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-primary-5 mb-2">{product.category}</div>
            <h1 className="h1 text-neutral-10 mb-2">{product.name}</h1>
            <div className="text-xl text-gray-700 mb-6">Model: {product.model}</div>
            
            <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
              <h3 className="text-neutral-10 mb-4">Key Features & Specifications</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`flex-1 gap-2 ${isInBasket(product.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-5 hover:bg-primary-6'}`}
                onClick={handleAddToBasket}
                disabled={isInBasket(product.id)}
              >
                {isInBasket(product.id) ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Added to Enquiry
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Add to Enquiry
                  </>
                )}
              </Button>
              {isInBasket(product.id) && (
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-neutral-10 text-neutral-10 hover:bg-neutral-10 hover:text-white"
                  asChild
                >
                  <Link to="/enquiry">View Enquiry Basket</Link>
                </Button>
              )}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-neutral-10 mb-3">What's Included</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Professional installation services</li>
                <li>✓ Comprehensive operator training</li>
                <li>✓ 12-month warranty coverage</li>
                <li>✓ Ongoing technical support</li>
                <li>✓ Spare parts availability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="h2 text-neutral-10 mb-8">Related Equipment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary-5 mb-2">{relatedProduct.category}</div>
                    <Link to={`/products/${relatedProduct.id}`}>
                            <h3 className="h3 text-neutral-10 mb-2 hover:text-primary-5 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="text-sm text-gray-500 mb-3">Model: {relatedProduct.model}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-neutral-10 text-neutral-10 hover:bg-neutral-10 hover:text-white"
                      asChild
                    >
                      <Link to={`/products/${relatedProduct.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
