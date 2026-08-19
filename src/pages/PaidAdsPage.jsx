import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiTarget,
  FiBriefcase
} from "react-icons/fi";

const subServicesMap = {
  "google-ads": {
    title: "Google Ads Campaigns",
    subtitle: "Capture High-Intent Customers Exactly When They Are Searching to Buy",
    icon: FiSearch,
    description:
      "Google Ads is the premier channel for capturing active search demand. We build high-converting Search, Shopping, Performance Max, and Display campaigns tailored to lower Cost-Per-Click (CPC) and maximize lead conversion rate in Buffalo and nationwide.",
    highlights: [
      "Search & Performance Max Campaign Architecture",
      "Negative Keyword Mining to Eliminate Ad Waste",
      "Ad Extension & Dynamic Headline Optimization",
      "Conversion Tracking & Google Analytics 4 Setup"
    ]
  },
  "facebook-ads": {
    title: "Facebook & Instagram Ads",
    subtitle: "Precision Social Audience Targeting & High-Converting Video Ads",
    icon: FiTarget,
    description:
      "Meta advertising allows granular demographic, behavioral, and interest-based targeting. We design eye-catching visual story ads, create custom lookalike audiences, and run multi-stage retargeting campaigns to capture prospective buyers.",
    highlights: [
      "Custom Lookalike & Retargeting Audiences",
      "Short-Form Video Ad Creative Development",
      "Conversion Pixel & CAPI Server Tracking",
      "Continuous Headline & Visual Split Testing"
    ]
  },
  "linkedin-ads": {
    title: "LinkedIn B2B Advertising",
    subtitle: "Direct Access to Corporate Decision Makers & B2B Prospects",
    icon: FiBriefcase,
    description:
      "For B2B service providers and high-ticket offers, LinkedIn Ads provides unmatched professional demographic targeting by job title, company size, industry, and seniority. We deliver targeted lead form ads that connect directly with executive decision makers.",
    highlights: [
      "Job Title, Seniority & Company Industry Targeting",
      "In-Feed Sponsored Content & Message Ads",
      "Native Lead Gen Form Integration",
      "B2B Sales Pipeline Alignment"
    ]
  }
};

function FiSearch(props) {
  return <FiTarget {...props} />;
}

const PaidAdsPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentSubSlug = pathParts.length > 1 ? pathParts[1] : null;
  const activeDetail = currentSubSlug ? subServicesMap[currentSubSlug] : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-600/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-500/30">
              Paid PPC Advertising Agency • Buffalo, NY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              {activeDetail ? activeDetail.title : "Paid Advertising Campaigns"}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              {activeDetail
                ? activeDetail.subtitle
                : "Scalable Google, Facebook, and LinkedIn ad management designed for immediate ROI and customer pipeline expansion."}
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
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl">
                    <activeDetail.icon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeDetail.title}
                    </h2>
                    <p className="text-xs text-sky-600 font-semibold uppercase tracking-wider">
                      KD Marketing Group Paid Media Management
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  {activeDetail.description}
                </p>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Campaign Management Deliverables:
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

                <div className="bg-gradient-to-r from-sky-600 to-teal-600 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Want lower Cost-Per-Acquisition?
                    </h4>
                    <p className="text-xs text-sky-100">
                      Let our paid media team audit your ad account free of charge.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 bg-white text-sky-950 px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Request PPC Audit
                  </Link>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-sky-600">
                    Paid Ad Channels
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(subServicesMap).map(([slug, item]) => {
                      const isActive = slug === currentSubSlug;
                      return (
                        <Link
                          key={slug}
                          to={`/paid-ads/${slug}`}
                          className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition ${
                            isActive
                              ? "bg-sky-600 text-white shadow-sm"
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
                  <h4 className="font-bold text-base mb-2">Maximize Return on Ad Spend</h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Stop wasting money on ineffective clicks. Talk with our strategy team today.
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
                  Multi-Channel Paid Advertising
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We turn advertising dollars into predictable revenue with targeted ad creation, rigorous conversion tracking, and continuous campaign optimization.
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
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <Link
                        to={`/paid-ads/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-800 transition"
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

export default PaidAdsPage;
