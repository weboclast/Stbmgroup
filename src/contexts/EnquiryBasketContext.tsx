import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

interface EnquiryBasketContextType {
  items: Product[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: string) => void;
  clearBasket: () => void;
  isInBasket: (productId: string) => boolean;
}

const EnquiryBasketContext = createContext<EnquiryBasketContextType | undefined>(undefined);

export function EnquiryBasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    const saved = localStorage.getItem('enquiryBasket');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('enquiryBasket', JSON.stringify(items));
  }, [items]);

  const addToBasket = (product: Product) => {
    setItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromBasket = (productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearBasket = () => {
    setItems([]);
  };

  const isInBasket = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  return (
    <EnquiryBasketContext.Provider value={{ items, addToBasket, removeFromBasket, clearBasket, isInBasket }}>
      {children}
    </EnquiryBasketContext.Provider>
  );
}

export function useEnquiryBasket() {
  const context = useContext(EnquiryBasketContext);
  if (!context) {
    throw new Error('useEnquiryBasket must be used within EnquiryBasketProvider');
  }
  return context;
}
