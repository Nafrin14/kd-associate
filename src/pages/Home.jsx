import {
  FiArrowRight,
  FiBriefcase,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiAward,
  FiPhone,
  FiMail,
  FiMapPin,
  FiChevronRight
} from "react-icons/fi";

import heroImg from "../assets/images/Laptop_and_notebook_on_desk_202608191916.jpeg";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="bg-white text-slate-800 font-sans">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Corporate Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-900/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-50">
                Premier Business Consulting
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Strategic Solutions for <br className="hidden lg:block" />
              <span className="text-teal-400">Sustainable Growth.</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              We empower organizations with expert consulting, practical strategies, 
              and professional support designed to optimize performance and achieve long-term success.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-teal-500 transition-all w-full sm:w-auto shadow-lg shadow-teal-900/20"
              >
                Schedule a Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection("services")}
                className="group flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          METRICS & TRUST (Why Choose Us)
      ====================================================== */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 text-center">
            <div className="px-4">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Client Retention</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT / INTRODUCTION
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-3">
                About KD Associates
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Driving Excellence Through Professional Expertise.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At KD Associates, we believe that true business success is built on a foundation of solid strategy and flawless execution. We partner with firms of all sizes to identify critical bottlenecks, streamline operations, and develop roadmaps that foster sustainable growth.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our approach is analytical, objective, and highly collaborative. By combining industry insights with proven methodologies, we deliver solutions that are not just theoretical, but practically applicable to your unique business environment.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn more about our methodology <FiChevronRight />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
                <FiAward className="text-4xl text-blue-900 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Proven Track Record</h3>
                <p className="text-sm text-slate-600">Consistent delivery of high-impact results across multiple sectors.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm mt-8">
                <FiUsers className="text-4xl text-blue-900 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-sm text-slate-600">Seasoned professionals with deep industry knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES SHOWCASE
      ====================================================== */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Practice Areas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Corporate Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We offer a suite of professional services tailored to meet the complex demands of modern business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <FiBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Management Consulting</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                Strategic advice and organizational planning to enhance structural efficiency, reduce costs, and improve overall corporate governance.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                View Details <FiArrowRight />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <FiTarget className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Strategic Planning</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                Data-driven market analysis and actionable roadmaps to help navigate competitive landscapes and secure market positioning.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                View Details <FiArrowRight />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <FiTrendingUp className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Financial Advisory</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                Comprehensive financial restructuring, risk management, and capital optimization strategies to ensure fiscal health and resilience.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                View Details <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERS
      ====================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Strategic Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Professional Network
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We collaborate with established local service providers to deliver comprehensive solutions across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow-sm border border-slate-200 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">KD Fence & Deck</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Premium custom-built fences, decking, and railing systems focused on durability, design, and security.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-sm border border-slate-200 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tree Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Certified arborists delivering comprehensive tree maintenance, pruning, and removal services safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-sm border border-slate-200 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">KD Landscaping</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full-service landscape design and maintenance, creating vibrant gardens and lasting curb appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section id="contact" className="py-24 bg-blue-950 text-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-blue-200 leading-relaxed mb-10 max-w-md">
                Our team of experts is ready to discuss your unique challenges and provide actionable insights. Reach out to schedule a preliminary consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded flex items-center justify-center shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Corporate Headquarters</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      100 Financial District, Suite 500<br />
                      New York, NY 10005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded flex items-center justify-center shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Direct Line</h4>
                    <p className="text-blue-200 text-sm">
                      +1 (800) 555-0198
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded flex items-center justify-center shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Inquiry</h4>
                    <p className="text-blue-200 text-sm">
                      consulting@kdassociates.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Corporate Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
