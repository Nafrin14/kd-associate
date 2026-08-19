import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowUpRight,
  FiPhone,
  FiHeadphones
} from "react-icons/fi";
import { navCategories } from "../data/navData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile accordion
  const toggleMobileCategory = (index) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs" ref={dropdownRef}>
      {/* Top Utility Bar (Desktop) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-teal-400 font-medium">Digital Marketing & Web Design Agency • Buffalo, NY</span>
            <a href="tel:+17163338202" className="flex items-center gap-1.5 hover:text-white transition">
              <FiPhone className="text-teal-400" /> (716) 333-8202
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:sales@kdmarketinggroup.com"
              className="hover:text-white transition"
            >
              sales@kdmarketinggroup.com
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold transition"
            >
              <FiHeadphones /> Client Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={closeAll}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-teal-500 text-white flex items-center justify-center font-black text-base shadow-md group-hover:scale-105 transition-transform">
              KD
            </div>
            <div className="leading-tight">
              <p className="text-slate-900 font-extrabold text-base tracking-tight group-hover:text-blue-600 transition-colors">
                KD MARKETING GROUP
              </p>
              <p className="text-[10px] font-bold tracking-[0.2em] text-teal-600 uppercase">
                Digital & Growth Experts
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navCategories.map((category, index) => {
              const isDropdownOpen = activeDropdown === index;
              const isActiveRoute =
                pathname === category.path ||
                category.subItems.some((sub) => pathname === sub.path);

              return (
                <div
                  key={category.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() =>
                      setActiveDropdown(isDropdownOpen ? null : index)
                    }
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all ${
                      isActiveRoute
                        ? "text-blue-600 bg-blue-50/80"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{category.title}</span>
                    <FiChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {/* Mega / Standard Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-2 border-b border-gray-100 mb-2">
                        <Link
                          to={category.path !== "#" ? category.path : category.subItems[0]?.path}
                          onClick={closeAll}
                          className="font-bold text-xs uppercase tracking-wider text-blue-600 hover:underline flex items-center justify-between"
                        >
                          <span>{category.title} Overview</span>
                          <FiArrowUpRight className="text-sm" />
                        </Link>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {category.description}
                        </p>
                      </div>

                      <div className="max-h-96 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                        {category.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={closeAll}
                            className={`group flex flex-col p-2.5 rounded-xl transition-all ${
                              pathname === sub.path
                                ? "bg-blue-50 text-blue-700 font-semibold"
                                : "hover:bg-slate-50 text-slate-700"
                            }`}
                          >
                            <span className="text-xs font-semibold group-hover:text-blue-600 flex items-center justify-between">
                              {sub.title}
                              <FiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                            </span>
                            <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                              {sub.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:shadow-md hover:from-blue-700 hover:to-teal-700 transition-all transform active:scale-95"
            >
              Get Free Consultation
              <FiArrowUpRight className="text-sm" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-slate-200 transition"
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navCategories.map((category, index) => {
                const isExpanded = mobileExpanded[index];

                return (
                  <div key={category.title} className="border-b border-gray-50 pb-2">
                    <button
                      onClick={() => toggleMobileCategory(index)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-slate-800 text-sm font-semibold hover:bg-slate-50 rounded-lg"
                    >
                      <span>{category.title}</span>
                      <FiChevronDown
                        className={`text-slate-400 transition-transform ${
                          isExpanded ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="ml-3 pl-3 border-l-2 border-blue-100 flex flex-col gap-1 mt-1">
                        {category.path !== "#" && (
                          <Link
                            to={category.path}
                            onClick={closeAll}
                            className="px-3 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-md"
                          >
                            → All {category.title}
                          </Link>
                        )}
                        {category.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={closeAll}
                            className={`px-3 py-2 text-xs rounded-md ${
                              pathname === sub.path
                                ? "bg-blue-600 text-white font-semibold"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:+17163338202"
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl text-xs font-bold"
                >
                  <FiPhone className="text-teal-400" /> Call (716) 333-8202
                </a>
                <Link
                  to="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl text-xs font-bold"
                >
                  Get Consultation
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


