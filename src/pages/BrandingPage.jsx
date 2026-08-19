import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiSearch,
  FiShield,
  FiFeather,
  FiShare2
} from "react-icons/fi";

const subServicesMap = {
  "seo-services": {
    title: "Search Engine Optimization (SEO Services)",
    subtitle: "Dominating Google Search Rankings for Buffalo & National Businesses",
    icon: FiSearch,
    description:
      "Organic search is the highest ROI digital marketing channel. KD Marketing Group delivers comprehensive technical SEO audits, keyword research, on-page optimization, local Google Map Pack rankings, and high-authority link acquisition to ensure your website ranks #1 for target search queries.",
    highlights: [
      "Local Buffalo SEO & Google Business Profile Optimization",
      "Technical Site Speed & Core Web Vitals Audits",
      "Strategic High-Intent Keyword Optimization",
      "White-Hat Authority Backlink Acquisition"
    ]
  },
  "online-reputation-management": {
    title: "Online Reputation Management (ORM)",
    subtitle: "Protect Your Brand Image & Drive Positive Customer Signals",
    icon: FiShield,
    description:
      "Your online reputation directly dictates customer conversion rates. We monitor brand mentions across Google Reviews, Yelp, social media, and forums. We establish review acquisition systems for satisfied clients and mitigate negative search results to ensure your brand displays immaculate trust.",
    highlights: [
      "Automated Review Generation Campaigns",
      "Negative Content Suppression & Sentiment Analysis",
      "Google Business Profile Review Strategy",
      "24/7 Brand Monitoring & Alert System"
    ]
  },
  "content-marketing": {
    title: "Content Marketing",
    subtitle: "Authoritative Content that Educates, Engages & Converts",
    icon: FiFeather,
    description:
      "High-value content establishes authority, builds organic traffic, and fuels social channels. We craft expert blog articles, comprehensive whitepapers, case studies, and infographics tailored to your target audience's search intent.",
    highlights: [
      "SEO-Driven Blog Content Strategy",
      "Thought Leadership Articles & Case Studies",
      "Interactive Content & Lead Magnets",
      "Content Audit & Editorial Calendar Management"
    ]
  },
  "social-media-management-marketing": {
    title: "Social Media Management & Marketing",
    subtitle: "Engage Your Community across Instagram, Facebook & LinkedIn",
    icon: FiShare2,
    description:
      "Consistent social media activity builds brand recognition and customer loyalty. We create visual content, write engaging captions, manage community interactions, and execute organic growth strategies across Facebook, Instagram, LinkedIn, and X.",
    highlights: [
      "Custom Graphic & Video Content Creation",
      "Community Engagement & Comment Moderation",
      "Cross-Platform Social Scheduling",
      "Monthly Audience Growth & Analytics Reports"
    ]
  }
};

const BrandingPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentSubSlug = pathParts.length > 1 ? pathParts[1] : null;
  const activeDetail = currentSubSlug ? subServicesMap[currentSubSlug] : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-600/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              Branding & SEO Agency • Buffalo, NY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              {activeDetail ? activeDetail.title : "Branding & Reputation Strategy"}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              {activeDetail
                ? activeDetail.subtitle
                : "Stand out in crowded markets with top search rankings, compelling content marketing, and positive brand reputation."}
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
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl">
                    <activeDetail.icon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeDetail.title}
                    </h2>
                    <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
                      KD Marketing Group Branding Solution
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  {activeDetail.description}
                </p>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Strategic Deliverables:
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

                <div className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Ready to boost your organic reach?
                    </h4>
                    <p className="text-xs text-indigo-100">
                      Get a free SEO & Reputation Audit for your website.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 bg-white text-indigo-950 px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-100 transition"
                  >
                    Request Free Audit
                  </Link>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-indigo-600">
                    Branding Services
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(subServicesMap).map(([slug, item]) => {
                      const isActive = slug === currentSubSlug;
                      return (
                        <Link
                          key={slug}
                          to={`/branding/${slug}`}
                          className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-sm"
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
                  <h4 className="font-bold text-base mb-2">Speak with an Expert</h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Let's discuss how we can position your brand for long-term growth.
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
                  Branding & Digital Authority Services
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  From top Google organic search rankings to proactive reputation management, we elevate your business brand into a recognized industry leader.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(subServicesMap).map(([slug, item]) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={slug}
                      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <Link
                        to={`/branding/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
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

export default BrandingPage;
