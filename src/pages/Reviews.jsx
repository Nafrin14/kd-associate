import {
  FiStar,
  FiAward,
  FiMessageSquare,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";

const reviews = [
  {
    name: "Michael R.",
    company: "Executive Director, Nexus Corp",
    review:
      "KD Associates delivered a comprehensive restructuring plan that immediately improved our operational efficiency. Their strategic insights were invaluable.",
  },
  {
    name: "Sarah M.",
    company: "CEO, GlobalTech Solutions",
    review:
      "The level of professionalism and depth of industry knowledge at KD Associates is unmatched. They guided us through a complex market entry with absolute precision.",
  },
  {
    name: "David T.",
    company: "Managing Partner, OmniSystems",
    review:
      "A truly collaborative partnership. KD Associates understood our unique challenges and provided actionable roadmaps that yielded measurable financial results within a single quarter.",
  },
  {
    name: "Jennifer K.",
    company: "Operations Head, Vanguard Inc",
    review:
      "From the initial consultation to final implementation, the team at KD Associates demonstrated exceptional integrity and commitment to our corporate objectives.",
  },
  {
    name: "Robert W.",
    company: "CFO, Synergy+ Enterprises",
    review:
      "Their financial advisory team provided the rigorous data analysis and risk management strategies we needed to secure our latest round of funding successfully.",
  },
  {
    name: "Amanda L.",
    company: "Founder, Altitude Logistics",
    review:
      "KD Associates didn't just give us a strategy; they provided the hands-on support required to transform our digital infrastructure seamlessly.",
  },
];

const Reviews = () => {
  return (
    <main className="bg-white text-slate-800 font-sans pt-20">

      {/* =====================================================
          HEADER SECTION
      ====================================================== */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Client Testimonials
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Proven results, validated by industry leaders.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              We take pride in the measurable impact we deliver. Read how KD Associates has helped organizations overcome challenges and achieve strategic milestones.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RATING SUMMARY / METRICS
      ====================================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            <div className="py-6 md:py-0">
              <div className="flex justify-center gap-1 text-teal-600 mb-3">
                <FiStar className="text-xl" fill="currentColor" />
                <FiStar className="text-xl" fill="currentColor" />
                <FiStar className="text-xl" fill="currentColor" />
                <FiStar className="text-xl" fill="currentColor" />
                <FiStar className="text-xl" fill="currentColor" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">5.0 / 5.0</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Average Client Rating</p>
            </div>

            <div className="py-6 md:py-0">
              <div className="flex justify-center mb-3">
                <FiCheckCircle className="text-3xl text-blue-900" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">98%</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Client Retention Rate</p>
            </div>

            <div className="py-6 md:py-0">
              <div className="flex justify-center mb-3">
                <FiAward className="text-3xl text-blue-900" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">Top Tier</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Industry Recognition</p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS GRID
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Discover the transformative experiences of executives and business owners who partnered with KD Associates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-teal-600 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" className="text-sm" />
                    ))}
                  </div>
                  <FiMessageSquare className="text-blue-900/10 text-4xl mb-4" />
                  <p className="text-slate-700 leading-relaxed italic mb-8">
                    "{review.review}"
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-blue-900 text-white flex items-center justify-center font-bold shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-slate-500 text-xs mt-1">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-slate-50 border-t border-slate-200 py-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Join Our Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Become our next success story.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with KD Associates to overcome complex challenges, optimize your operations, and secure long-term corporate growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded font-semibold hover:bg-blue-800 transition-colors shadow-md"
            >
              Schedule a Consultation <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Reviews;
