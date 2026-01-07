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
import { StyleGuide } from "./pages/StyleGuide";
import Solutions from "./pages/Solutions";
import CompleteFacilities from "./pages/CompleteFacilities";
import InfrastructureSystems from "./pages/InfrastructureSystems";
import OperationsSupport from "./pages/OperationsSupport";
import SolutionDetail from "./pages/SolutionDetail";

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
              <Route path="/style-guide" element={<StyleGuide />} />
              
              {/* Solutions Routes */}
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/complete-facilities" element={<CompleteFacilities />} />
              <Route path="/solutions/infrastructure-systems" element={<InfrastructureSystems />} />
              <Route path="/solutions/operations-support" element={<OperationsSupport />} />
              <Route path="/solutions/:tier/:slug" element={<SolutionDetail />} />
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