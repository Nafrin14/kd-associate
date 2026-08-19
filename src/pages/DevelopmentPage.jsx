import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiSmartphone,
  FiCpu
} from "react-icons/fi";

const subServicesMap = {
  "web-development": {
    title: "Web Design & Development",
    subtitle: "Custom, High-Performance Websites Built to Convert Visitors into Clients",
    icon: FiCode,
    description:
      "Your website is the heart of your digital presence. KD Marketing Group builds custom, lightning-fast, mobile-responsive websites optimized for search engines, visitor conversion, and effortless content management.",
    highlights: [
      "Custom UI/UX Wireframing & Design",
      "Mobile-First Responsive Layouts",
      "Core Web Vitals & Speed Optimization",
      "CMS & Custom Web Application Development"
    ]
  },
  "app-development": {
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform iOS and Android Applications",
    icon: FiSmartphone,
    description:
      "Deliver seamless mobile experiences to your customers or workforce. We design and develop custom iOS and Android mobile apps equipped with intuitive user interfaces, real-time push notifications, and robust cloud backends.",
    highlights: [
      "iOS & Android Mobile App Architecture",
      "Cross-Platform React Native Development",
      "API & Third-Party Integrations",
      "App Store & Google Play Publishing Support"
    ]
  },
  "software-development": {
    title: "Custom Software Development",
    subtitle: "Scalable Software, Business Tools & API Integrations",
    icon: FiCpu,
    description:
      "Off-the-shelf software doesn't always fit unique operational needs. We engineer bespoke web applications, enterprise software dashboards, custom databases, and API integrations that streamline business workflows.",
    highlights: [
      "Custom Enterprise Software Engineering",
      "RESTful & GraphQL API Infrastructure",
      "Database Design & Migration Services",
      "Cloud Hosting & DevOps Maintenance"
    ]
  }
};

const DevelopmentPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentSubSlug = pathParts.length > 1 ? pathParts[1] : null;
  const activeDetail = currentSubSlug ? subServicesMap[currentSubSlug] : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-600/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              Web & Software Engineering • Buffalo, NY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              {activeDetail ? activeDetail.title : "Custom Digital Development"}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              {activeDetail
                ? activeDetail.subtitle
                : "Modern web design, mobile apps, and custom software systems built for high speed, reliability, and lead conversion."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {activeDetail ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
                    <activeDetail.icon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeDetail.title}
                    </h2>
                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">
                      KD Marketing Group Engineering Service
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  {activeDetail.description}
                </p>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Engineering Capabilities:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {activeDetail.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      <FiCheckCircle className="text-teal-500 text-lg shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Ready to build your web project?
                    </h4>
                    <p className="text-xs text-emerald-100">
                      Consult with our lead developer on tech stack and timeline.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 bg-white text-emerald-950 px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Start Project Build
                  </Link>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-emerald-600">
                    Development Services
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(subServicesMap).map(([slug, item]) => {
                      const isActive = slug === currentSubSlug;
                      return (
                        <Link
                          key={slug}
                          to={`/development/${slug}`}
                          className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition ${
                            isActive
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="line-clamp-1">{item.title}</span>
                          <FiArrowRight className="text-xs shrink-0" />
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800">
                  <h4 className="font-bold text-base mb-2">Have a Tech Specification?</h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Send us your project scope or schedule a technical call.
                  </p>
                  <a
                    href="tel:+17163338202"
                    className="block text-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition"
                  >
                    Call (716) 333-8202
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Main Overview Grid */
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                  Web & Software Engineering
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We design and develop modern websites, mobile applications, and enterprise software engineered for security, speed, and continuous business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(subServicesMap).map(([slug, item]) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={slug}
                      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <Link
                        to={`/development/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition"
                      >
                        Explore Service Details <FiArrowRight />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
