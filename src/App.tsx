import { HashRouter, Routes, Route } from "react-router-dom";
import { EnquiryBasketProvider } from "./contexts/EnquiryBasketContext";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Enquiry } from "./pages/Enquiry";
import { Projects } from "./pages/Projects";
import { Resources } from "./pages/Resources";
import { About } from "./pages/About";

export default function App() {
  return (
    <HashRouter>
      <EnquiryBasketProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="top-right" />
        </div>
      </EnquiryBasketProvider>
    </HashRouter>
  );
}