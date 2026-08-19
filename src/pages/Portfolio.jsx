import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const portfolioItems = [
  {
    title: "Buffalo Commercial Contracting",
    category: "Web Development & Local SEO",
    metrics: "+240% Organic Lead Growth",
    description:
      "Complete custom web redesign paired with local Google Map Pack optimization resulting in record commercial inquiry call volume.",
    tags: ["Web Design", "SEO", "Lead Capture"]
  },
  {
    title: "Regional Financial Services",
    category: "Google & LinkedIn Paid Ads",
    metrics: "3.8x Return on Ad Spend (ROAS)",
    description:
      "Targeted Google Search & LinkedIn B2B campaign architecture targeting high-net-worth business clients across New York State.",
    tags: ["PPC Ads", "Google Ads", "LinkedIn B2B"]
  },
  {
    title: "E-Commerce & Retail Apparel",
    category: "Branding & Social Media Growth",
    metrics: "+180% Revenue Increase",
    description:
      "Comprehensive digital brand overhaul, short-form video creative, and Meta retargeting campaigns driving direct online sales.",
    tags: ["Branding", "Social Media", "Video Ads"]
  },
  {
    title: "Multi-Location Home Services",
    category: "Business Automation & KD Leads App",
    metrics: "< 45 Second Lead Response Time",
    description:
      "Implemented KD Leads App for automated instant SMS follow-up, Google Review acquisition, and CRM pipeline tracking.",
    tags: ["KD Leads App", "SMS Automation", "CRM Integration"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Our Success Stories • KD Marketing Group
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              Our Work & Portfolio
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              Explore how we help businesses in Buffalo, NY and across North America generate leads, dominate search rankings, and automate sales pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-extrabold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      {item.metrics}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                >
                  Schedule Similar Strategy <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
