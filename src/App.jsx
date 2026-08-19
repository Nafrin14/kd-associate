import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Animated page wrapper — triggers CSS fade-in animation on each route change
function AnimatedPage({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AnimatedPage>{children}</AnimatedPage>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        {/* Reviews */}
        <Route
          path="/reviews"
          element={
            <MainLayout>
              <Reviews />
            </MainLayout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* Privacy */}
        <Route
          path="/privacy-policy"
          element={
            <MainLayout>
              <PrivacyPolicy />
            </MainLayout>
          }
        />

        {/* Terms */}
        <Route
          path="/terms-and-conditions"
          element={
            <MainLayout>
              <TermsAndConditions />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

