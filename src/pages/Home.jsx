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
import PartnerLogos from "../components/PartnerLogos";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

// Animated counter that counts from 0 to target
function AnimatedStat({ end, suffix = "", label }) {
  const { ref, count } = useCountUp(end, 1800);
  return (
    <div ref={ref} className="px-4">
      <div className="text-4xl font-bold text-blue-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{label}</div>
    </div>
  );
}

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll reveal hooks per section
  const heroReveal     = useScrollReveal(0.1);
  const statsReveal    = useScrollReveal(0.2);
  const aboutReveal    = useScrollReveal(0.15);
  const servicesTitle  = useScrollReveal(0.15);
  const servicesCards  = useScrollReveal(0.1);
  const partnersReveal = useScrollReveal(0.1);
  const contactReveal  = useScrollReveal(0.1);

  return (
    <main className="bg-white text-slate-800">
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
          {/* Subtle animated shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-blue-900/20 animate-pulse" style={{ animationDuration: "4s" }} />
        </div>

        <div
          ref={heroReveal.ref}
          className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full text-center lg:text-left reveal-hidden ${heroReveal.isVisible ? "reveal-visible" : ""}`}
        >
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
                className="group flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-500 transition-all w-full sm:w-auto shadow-lg shadow-teal-900/20 hover:shadow-teal-500/30"
              >
                Schedule a Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="group flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
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
          <div
            ref={statsReveal.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 text-center reveal-hidden ${statsReveal.isVisible ? "reveal-visible" : ""}`}
          >
            <AnimatedStat end={15}  suffix="+"  label="Years Experience" />
            <AnimatedStat end={500} suffix="+"  label="Projects Delivered" />
            <AnimatedStat end={98}  suffix="%"  label="Client Retention" />
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
          <div
            ref={aboutReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center reveal-hidden ${aboutReveal.isVisible ? "reveal-visible" : ""}`}
          >
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
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FiAward className="text-4xl text-blue-900 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Proven Track Record</h3>
                <p className="text-sm text-slate-600">Consistent delivery of high-impact results across multiple sectors.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm mt-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
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
          <div
            ref={servicesTitle.ref}
            className={`text-center max-w-3xl mx-auto mb-16 reveal-hidden ${servicesTitle.isVisible ? "reveal-visible" : ""}`}
          >
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

          <div
            ref={servicesCards.ref}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: FiBriefcase,   title: "Management Consulting", delay: "delay-100", text: "Strategic advice and organizational planning to enhance structural efficiency, reduce costs, and improve overall corporate governance." },
              { icon: FiTarget,      title: "Strategic Planning",     delay: "delay-200", text: "Data-driven market analysis and actionable roadmaps to help navigate competitive landscapes and secure market positioning." },
              { icon: FiTrendingUp,  title: "Financial Advisory",     delay: "delay-300", text: "Comprehensive financial restructuring, risk management, and capital optimization strategies to ensure fiscal health and resilience." },
            ].map(({ icon: Icon, title, delay, text }) => (
              <div
                key={title}
                className={`bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group reveal-hidden ${delay} ${servicesCards.isVisible ? "reveal-visible" : ""}`}
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{text}</p>
                <a href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                  View Details <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERS
      ====================================================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            ref={partnersReveal.ref}
            className={`text-center max-w-3xl mx-auto mb-16 reveal-hidden ${partnersReveal.isVisible ? "reveal-visible" : ""}`}
          >
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

          <PartnerLogos />
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section id="contact" className="py-24 bg-blue-950 text-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-950 to-teal-950 opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900 rounded-full blur-[160px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div
            ref={contactReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 reveal-hidden ${contactReveal.isVisible ? "reveal-visible" : ""}`}
          >
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
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded-xl flex items-center justify-center shrink-0">
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
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded-xl flex items-center justify-center shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Direct Line</h4>
                    <p className="text-blue-200 text-sm">+1 (800) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 text-teal-400 rounded-xl flex items-center justify-center shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Inquiry</h4>
                    <p className="text-blue-200 text-sm">consulting@kdassociates.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA form redirect */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Request a Consultation</h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Fill out our inquiry form and a senior advisor will personally reach out within one business day.
                </p>
                <ul className="space-y-3 mb-8">
                  {["No commitment required", "Confidential discussion", "Personalized strategy session"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-blue-100 text-sm">
                      <span className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/contact"
                className="group flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30"
              >
                Go to Contact Form
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
