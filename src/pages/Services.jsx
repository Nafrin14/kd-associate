import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { navCategories } from "../data/navData";

const Services = () => {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans pt-12">
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            Full-Service Digital Marketing Agency • Buffalo, NY
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            Data-Driven Digital Services
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            From ROI-focused lead generation and top Google organic SEO to high-converting paid ads, web development, and automated CRM lead response.
          </p>
        </div>
      </section>

      {/* SERVICES DIRECTORY GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navCategories
              .filter((cat) => cat.title !== "Know Us")
              .map((cat, idx) => (
                <div
                  key={cat.title}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2 block">
                      Category 0{idx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      {cat.title}
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Included Sub-Services:
                      </p>
                      {cat.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
                        >
                          <span className="line-clamp-1">{sub.title}</span>
                          <FiArrowRight className="text-xs shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={cat.path !== "#" ? cat.path : cat.subItems[0]?.path}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-xs transition"
                  >
                    View All {cat.title} <FiArrowRight />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
