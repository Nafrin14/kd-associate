import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram
} from "react-icons/fi";
import { navCategories } from "../data/navData";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-slate-900 font-sans">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex flex-col mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 text-white flex items-center justify-center font-black text-lg shadow-lg">
                  KD
                </div>
                <div>
                  <p className="font-extrabold text-xl text-white tracking-wide">
                    KD MARKETING GROUP
                  </p>
                  <p className="text-teal-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Digital Marketing Agency • Buffalo, NY
                  </p>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-xs">
              KD Marketing Group is a creative, data-driven digital marketing and web design agency in Buffalo, NY helping businesses grow with SEO, web design, branding, lead generation, paid ads, and business automation.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/kdmarketinggroup1/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="text-base" />
              </a>
              <a
                href="https://www.instagram.com/kdmarketinggroup/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="text-base" />
              </a>
              <a
                href="https://x.com/kd_marketting"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                aria-label="Twitter X"
              >
                <FiTwitter className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/company/kd-marketing-group"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-xs text-teal-400">
              Our Services
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navCategories.map((cat) => (
                <Link
                  key={cat.title}
                  to={cat.path !== "#" ? cat.path : cat.subItems[0]?.path}
                  className="text-slate-400 hover:text-white text-xs transition-colors flex items-center gap-2"
                >
                  <FiArrowRight className="text-[10px] text-teal-400" /> {cat.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Key Pages */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-xs text-teal-400">
              Company
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/about" className="text-slate-400 hover:text-white text-xs transition-colors">
                About Us
              </Link>
              <Link to="/our-portfolio" className="text-slate-400 hover:text-white text-xs transition-colors">
                Our Portfolio
              </Link>
              <Link to="/careers" className="text-slate-400 hover:text-white text-xs transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="text-slate-400 hover:text-white text-xs transition-colors">
                Blog & News
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white text-xs transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-slate-400 hover:text-white text-xs transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-xs text-teal-400">
              Contact Headquarters
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-teal-400 mt-1 shrink-0 text-sm" />
                <span className="text-slate-400 text-xs leading-relaxed">
                  162 Woodlawn Ave<br />
                  Buffalo, NY 14208-1731, USA
                </span>
              </div>
              <a href="tel:+17163338202" className="flex items-center gap-3 text-slate-400 hover:text-teal-300 text-xs transition-colors">
                <FiPhone className="text-teal-400 shrink-0 text-sm" />
                +1 (716) 333-8202
              </a>
              <a href="mailto:sales@kdmarketinggroup.com" className="flex items-center gap-3 text-slate-400 hover:text-teal-300 text-xs transition-colors">
                <FiMail className="text-teal-400 shrink-0 text-sm" />
                sales@kdmarketinggroup.com
              </a>
              <div className="pt-2">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  Operating Hours
                </p>
                <p className="text-xs text-slate-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} KD Marketing Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

