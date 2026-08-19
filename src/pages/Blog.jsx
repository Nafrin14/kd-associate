import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiUser, FiArrowRight } from "react-icons/fi";

const posts = [
  {
    title: "How to Build a High-Converting Lead Generation Funnel in 2026",
    category: "Lead Generation",
    date: "July 24, 2026",
    author: "KD Marketing Team",
    excerpt:
      "Traffic is useless without conversions. Discover how mapping keyword search intent, video landing pages, and instant SMS nurture sequences dramatically increase sales."
  },
  {
    title: "Local SEO Strategy for Buffalo NY Businesses",
    category: "SEO & Branding",
    date: "June 15, 2026",
    author: "KD SEO Team",
    excerpt:
      "A step-by-step guide to ranking #1 in Google Map Packs, gathering continuous 5-star Google Reviews, and driving organic phone calls."
  },
  {
    title: "Google Ads vs. Facebook Ads: Which Delivers Better ROI?",
    category: "Paid Ads",
    date: "May 28, 2026",
    author: "KD Paid Media Team",
    excerpt:
      "Compare search demand capture against targeted demographic push campaigns to allocate your advertising budget for maximum return on ad spend."
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Agency Blog & Digital Growth Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              Marketing & SEO Blog
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              Expert growth strategies, SEO algorithms, PPC ad optimizations, and lead generation tips from the KD Marketing Group team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-4 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 border-t border-gray-100 pt-4 mb-4">
                    <span className="flex items-center gap-1">
                      <FiClock /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUser /> {post.author}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                  >
                    Read Full Post <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
