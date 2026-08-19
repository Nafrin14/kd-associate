import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const jobOpenings = [
  {
    title: "Digital Marketing Strategist",
    type: "Full-Time • Buffalo, NY / Hybrid",
    department: "Marketing & Paid Media",
    description:
      "Manage Google Ads, Meta Ads, and ROI-focused client lead generation campaigns with an outcome-driven mindset."
  },
  {
    title: "Senior SEO Specialist",
    type: "Full-Time • Remote / Hybrid",
    department: "SEO & Content",
    description:
      "Lead technical SEO audits, keyword strategy, and backlink acquisition for local and national agency clients."
  },
  {
    title: "Frontend & Web Developer",
    type: "Full-Time • Buffalo, NY",
    department: "Engineering",
    description:
      "Build high-converting, mobile-responsive web applications using modern web technologies like React, Tailwind, and Vite."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Join Our Growth Team • KD Marketing Group
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-6">
              Careers at KD Marketing Group
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
              We are a passionate, data-driven agency in Buffalo, NY. Explore current openings and build the future of digital marketing with us.
            </p>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Open Positions
          </h2>

          <div className="space-y-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold mb-3">
                    {job.type}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-2xl">
                    {job.description}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-bold transition flex items-center gap-2"
                >
                  Apply Now <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
