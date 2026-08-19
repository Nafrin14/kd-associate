import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiZap,
  FiSmartphone,
  FiMessageSquare,
  FiRepeat,
  FiClock,
  FiSliders
} from "react-icons/fi";

const BusinessAutomationPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
              Business Automation & Software Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              Business Automation & KD Leads App
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              Streamline prospect response, automate follow-up workflows, and eliminate manual data entry with our proprietary KD Leads platform and business automation software.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Spotlight Hero Box: KD Leads App */}
          <div className="bg-gradient-to-r from-purple-900 via-slate-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl mb-16 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-3">
                <FiZap className="text-sm" /> Proprietary Lead CRM & Automation Platform
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                KD Leads App
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Never lose a hot prospect to slow response time. KD Leads App automatically catches incoming leads from web forms, Facebook Ads, Google Ads, and phone calls, triggering instant SMS follow-ups, automated appointment scheduling, and team notifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs font-semibold">
                  <FiClock className="text-teal-400 text-base" /> Instant Under-60-Sec Lead Response
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs font-semibold">
                  <FiMessageSquare className="text-teal-400 text-base" /> Two-Way SMS & Email Pipeline
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs font-semibold">
                  <FiRepeat className="text-teal-400 text-base" /> Automated Drip Follow-Up Sequences
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs font-semibold">
                  <FiSliders className="text-teal-400 text-base" /> Visual Sales Pipeline & CRM
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 px-8 py-3.5 rounded-full text-xs font-extrabold shadow-lg hover:brightness-110 transition"
              >
                Schedule KD Leads App Demo <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6">
                <FiZap />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Workflow Automation
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Connect your website forms, payment gateways, and accounting tools via custom Zapier & webhook automation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6">
                <FiSmartphone />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Mobile Lead Management
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Manage conversations on the go with real-time push alerts, mobile lead scoring, and instant click-to-call.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6">
                <FiRepeat />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Automated Review Requests
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Automatically send SMS review requests after job completion to generate continuous 5-star Google Reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAutomationPage;
