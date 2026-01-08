import { ShoppingBag } from "lucide-react";
import { useEnquiryBasket } from "../contexts/EnquiryBasketContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function EnquiryBasketButton() {
  const { items } = useEnquiryBasket();
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      className="relative"
      onClick={() => navigate('/enquiry')}
    >
      <ShoppingBag className="w-4 h-4 mr-2" />
      <span className="hidden sm:inline">Enquiry Basket</span>
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary-4 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </Button>
  );
}
