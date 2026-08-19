import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiTarget,
  FiTrendingUp,
  FiZap,
  FiVideo,
  FiShare2,
  FiLayers,
  FiMail
} from "react-icons/fi";

const subServicesMap = {
  "generate-capture-nurture-leads": {
    title: "Generate, Capture and Nurture Leads",
    subtitle: "Complete Funnel System from First Click to Loyal Repeat Customer",
    icon: FiZap,
    description:
      "Our complete lead generation system turns total strangers into high-value customers. We don't just generate impressions; we map the entire customer journey: initial contact (Generate), high-converting form submission (Capture), and automated follow-up sequences (Nurture) that build lasting trust.",
    highlights: [
      "End-to-End Funnel Strategy",
      "Automated Multi-Channel Follow-ups",
      "High-Converting Lead Magnet Offers",
      "Real-Time CRM & Lead Notification Setup"
    ]
  },
  "roi-focused-target-campaigns": {
    title: "ROI-Focused Target Campaigns",
    subtitle: "Every Marketing Dollar Invested with Maximum Purpose",
    icon: FiTrendingUp,
    description:
      "Our campaigns are meticulously engineered to deliver measurable Return on Investment. By directing your advertising budget to the most profitable demographics and search channels in Buffalo, NY and across the US, we eliminate ad waste and maximize customer lifetime value.",
    highlights: [
      "Granular Customer Audience Targeting",
      "Conversion Rate Optimization (CRO)",
      "Strict Cost-Per-Acquisition (CPA) Thresholds",
      "Transparent Monthly Performance Dashboards"
    ]
  },
  "keyword-research-ad-creative-development": {
    title: "Keyword Research & Ad Creative Development",
    subtitle: "Discover What Your Audience Searches & Why They Buy",
    icon: FiTarget,
    description:
      "We identify exact high-intent search queries your customers use and craft irresistible ad copy and visuals. Deep search volume analysis reveals buyer pain points while our creative design team produces high-performing copy, graphics, and video elements.",
    highlights: [
      "High-Intent Longtail Keyword Mining",
      "Competitor Ad Strategy Benchmarking",
      "A/B Split Testing Copy & Visual Assets",
      "Continuous Bid & Copy Optimization"
    ]
  },
  "video-ads-landing-pages": {
    title: "Video Ads & Landing Pages",
    subtitle: "High-Impact Video Storytelling Paired with Dedicated Conversion Pages",
    icon: FiVideo,
    description:
      "Video is the highest converting ad format on modern digital channels. We write, produce, and optimize short-form video ads that stop the scroll, directing targeted traffic to bespoke, mobile-responsive landing pages built specifically for form completions and calls.",
    highlights: [
      "Custom Short-Form Video Production",
      "Mobile-Optimized Fast Loading Landing Pages",
      "Clear Call-To-Action (CTA) Placement",
      "Heatmap & User Behavior Analytics"
    ]
  },
  "content-distribution": {
    title: "Content Distribution",
    subtitle: "Amplify Your Highest Value Content Across Key Ecosystems",
    icon: FiShare2,
    description:
      "Great content is only valuable when seen by the right decision makers. Our distribution strategy guarantees your best blog posts, whitepapers, and guides reach active buyers via paid promotion, social channels, Quora, Reddit, and industry publication syndication.",
    highlights: [
      "Multi-Channel Syndication Strategy",
      "Quora & Reddit Organic & Paid Reach",
      "Authority Backlink Acquisition",
      "Omnichannel Brand Retargeting"
    ]
  },
  "lead-capture-technology": {
    title: "Lead Capture Technology",
    subtitle: "Next-Generation Forms, Interactive Widgets & Instant Routing",
    icon: FiLayers,
    description:
      "Convert visitors before they exit. We implement intelligent popups, multi-step lead forms, chatbot triggers, and instant lead notification webhooks so your sales team contacts fresh prospects within seconds of submission.",
    highlights: [
      "Conditional Multi-Step Form Builders",
      "Instant SMS & Email Sales Alerts",
      "Automated Calendar Booking Tools",
      "Zapier, HubSpot & Custom Webhook Sync"
    ]
  },
  "lead-nurturing": {
    title: "Lead Nurturing",
    subtitle: "Automated Drip Workflows that Turn Unqualified Leads into Sales",
    icon: FiMail,
    description:
      "Over 70% of web leads are not ready to purchase immediately. Our automated lead nurturing campaigns send personalized, value-packed email and SMS drip sequences over days and weeks, establishing your brand as the undisputed top authority when they decide to buy.",
    highlights: [
      "Personalized Dynamic Email Sequences",
      "SMS Quick Follow-up Automations",
      "Lead Scoring & Activity Triggering",
      "Re-engagement Campaigns for Cold Leads"
    ]
  }
};

const LeadGeneration = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentSubSlug = pathParts.length > 1 ? pathParts[1] : null;
  const activeDetail = currentSubSlug ? subServicesMap[currentSubSlug] : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Lead Generation Agency • Buffalo, NY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              {activeDetail ? activeDetail.title : "Data-Driven Lead Generation"}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              {activeDetail
                ? activeDetail.subtitle
                : "Traffic is merely a number; revenue is the true target. KD Marketing Group manages prospects from initial discovery all the way to closed purchase."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {activeDetail ? (
            /* Sub-Service Detail View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                    <activeDetail.icon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeDetail.title}
                    </h2>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                      KD Marketing Group Specialized Service
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

                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Ready to scale lead flow?
                    </h4>
                    <p className="text-xs text-blue-100">
                      Book a strategy call with our Buffalo digital marketing team.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 bg-white text-blue-900 px-6 py-3 rounded-full text-xs font-bold hover:bg-blue-50 transition"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>

              {/* Sidebar Menu */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-blue-600">
                    All Lead Gen Services
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(subServicesMap).map(([slug, item]) => {
                      const isActive = slug === currentSubSlug;
                      return (
                        <Link
                          key={slug}
                          to={`/lead-generation/${slug}`}
                          className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition ${
                            isActive
                              ? "bg-blue-600 text-white shadow-sm"
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
                  <h4 className="font-bold text-base mb-2">Need Custom Advice?</h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Call our lead generation team directly for immediate assistance.
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
                  Complete Lead Generation Ecosystem
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We turn high-intent online traffic into predictable monthly customer growth using custom landing pages, strategic keyword ads, and automated CRM follow-ups.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(subServicesMap).map(([slug, item]) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={slug}
                      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      <Link
                        to={`/lead-generation/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
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

export default LeadGeneration;
