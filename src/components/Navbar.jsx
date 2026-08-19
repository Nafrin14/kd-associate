import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Detect scroll position to add elevated styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/reviews", label: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md shadow-slate-900/8 border-b border-gray-100"
          : "bg-white/90 backdrop-blur-lg border-b border-gray-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-18 py-3 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm tracking-tight">
              KD
            </div>

            <div className="leading-tight hidden sm:block">
              <p className="text-blue-950 font-black text-sm tracking-wide">
                KD ASSOCIATES
              </p>
              <p className="text-[9px] font-semibold tracking-[0.25em] text-gray-400 uppercase">
                Professional Services
              </p>
            </div>
          </Link>

          {/* Desktop Nav — pill container */}
          <nav className="hidden md:flex items-center bg-gray-100/80 rounded-full px-2 py-2 gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === to
                    ? "bg-white text-blue-950 shadow-sm"
                    : "text-gray-500 hover:text-blue-800 hover:bg-white/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all"
            >
              Contact Us
              <FiArrowUpRight className="text-base" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 text-blue-950 flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="text-lg" />
              ) : (
                <FiMenu className="text-lg" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu — animated slide down */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 py-4 pb-5">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-full text-sm font-semibold transition-all ${
                    pathname === to
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-bold"
              >
                Contact Us
                <FiArrowUpRight />
              </Link>
            </nav>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
