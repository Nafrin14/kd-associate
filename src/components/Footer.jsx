import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-blue-50 border-t border-blue-900 font-sans">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-teal-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
                  KD
                </div>
                <div>
                  <p className="font-bold text-xl text-white tracking-wide">
                    KD ASSOCIATES
                  </p>
                  <p className="text-teal-400 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Strategic Consulting
                  </p>
                </div>
              </div>
            </Link>
            
            <p className="text-blue-200 leading-relaxed max-w-sm mb-8 text-sm">
              Empowering organizations with expert consulting, practical strategies, and professional support designed to optimize performance and achieve long-term success.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded bg-blue-900 border border-blue-800 text-blue-200 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors hover:border-teal-600">
                <FiLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-blue-900 border border-blue-800 text-blue-200 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors hover:border-teal-600">
                <FiTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>
            <nav className="flex flex-col gap-4">
              <Link to="/about" className="text-blue-200 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                <FiArrowRight className="text-xs" /> About Us
              </Link>
              <Link to="/services" className="text-blue-200 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                <FiArrowRight className="text-xs" /> Services
              </Link>
              <Link to="/contact" className="text-blue-200 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                <FiArrowRight className="text-xs" /> Contact
              </Link>
              <Link to="/privacy-policy" className="text-blue-200 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                <FiArrowRight className="text-xs" /> Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-blue-200 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                <FiArrowRight className="text-xs" /> Terms of Service
              </Link>
            </nav>
          </div>

          {/* Partners */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Our Partners
            </h3>
            <nav className="flex flex-col gap-4">
              <span className="text-blue-200 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                KD Fence & Deck
              </span>
              <span className="text-blue-200 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                Tree Services
              </span>
              <span className="text-blue-200 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                KD Landscaping
              </span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-teal-400 mt-1 shrink-0" />
                <span className="text-blue-200 text-sm leading-relaxed">
                  100 Financial District, Suite 500<br />
                  New York, NY 10005
                </span>
              </div>
              <a href="tel:+18005550198" className="flex items-center gap-3 text-blue-200 hover:text-teal-400 text-sm transition-colors">
                <FiPhone className="text-teal-400 shrink-0" />
                +1 (800) 555-0198
              </a>
              <a href="mailto:consulting@kdassociates.com" className="flex items-center gap-3 text-blue-200 hover:text-teal-400 text-sm transition-colors">
                <FiMail className="text-teal-400 shrink-0" />
                consulting@kdassociates.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900 bg-blue-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs text-center md:text-left">
            © {new Date().getFullYear()} KD Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-blue-300 text-xs">
              Designed for Professional Excellence.
            </span>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
