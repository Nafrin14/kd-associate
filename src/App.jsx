import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LeadGeneration from "./pages/LeadGeneration";
import BrandingPage from "./pages/BrandingPage";
import PaidAdsPage from "./pages/PaidAdsPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import BusinessAutomationPage from "./pages/BusinessAutomationPage";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>

        {/* Home */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />

        {/* Services Master Directory */}
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />

        {/* Lead Generation & Sub-routes */}
        <Route path="/lead-generation" element={<MainLayout><LeadGeneration /></MainLayout>} />
        <Route path="/lead-generation/*" element={<MainLayout><LeadGeneration /></MainLayout>} />

        {/* Branding & Sub-routes */}
        <Route path="/branding" element={<MainLayout><BrandingPage /></MainLayout>} />
        <Route path="/branding/*" element={<MainLayout><BrandingPage /></MainLayout>} />

        {/* Paid Ads & Sub-routes */}
        <Route path="/paid-ads" element={<MainLayout><PaidAdsPage /></MainLayout>} />
        <Route path="/paid-ads/*" element={<MainLayout><PaidAdsPage /></MainLayout>} />

        {/* Development & Sub-routes */}
        <Route path="/development" element={<MainLayout><DevelopmentPage /></MainLayout>} />
        <Route path="/development/*" element={<MainLayout><DevelopmentPage /></MainLayout>} />

        {/* Business Automation & Sub-routes */}
        <Route path="/business-automation" element={<MainLayout><BusinessAutomationPage /></MainLayout>} />
        <Route path="/business-automation/*" element={<MainLayout><BusinessAutomationPage /></MainLayout>} />

        {/* Know Us & Secondary Pages */}
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
        <Route path="/our-portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
        
        {/* Contact */}
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><Contact /></MainLayout>} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms-and-conditions" element={<MainLayout><TermsAndConditions /></MainLayout>} />

        {/* Fallback for any unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


