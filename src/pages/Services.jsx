import {
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

import imgManagement from "../assets/images/management_consulting.png";
import imgStrategy from "../assets/images/strategic_planning.png";
import imgFinance from "../assets/images/financial_advisory.png";
import imgDigital from "../assets/images/digital_transformation.png";
import imgMarket from "../assets/images/market_research.png";

const Services = () => {
  return (
    <main className="bg-white text-slate-800 font-sans pt-20">
      
      {/* =====================================================
          HEADER SECTION
      ====================================================== */}
      <section className="bg-blue-950 py-32 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center">
          <p className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs mb-6">
            Our Expertise
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white mb-8">
            Transformative <br className="hidden sm:block" />
            Corporate Solutions.
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto font-light">
            We deliver highly specialized consulting services tailored to resolve complex business challenges, scale operations, and secure market dominance.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICE 1: Management Consulting (Image Left, Text Right)
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-900/5 translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={imgManagement} 
                alt="Management Consulting" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-slate-200">01</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Management Consulting
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We re-engineer organizational structures and governance protocols. Our senior partners provide the strategic foresight needed to improve overall corporate efficiency, drastically reduce operational costs, and perfectly align your workforce with your ultimate corporate objectives.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Enterprise Restructuring & Governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Advanced Change Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Workforce & Performance Optimization</span>
                </li>
              </ul>
              <a href="/contact" className="inline-flex items-center gap-3 text-blue-900 font-bold uppercase tracking-wider text-sm hover:text-teal-600 transition-colors">
                Engage Our Team <FiArrowRight className="text-lg" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 2: Strategic Planning (Text Left, Image Right)
      ====================================================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-slate-300">02</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Strategic Planning
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigate hyper-competitive landscapes with absolute confidence. We deliver rigorous data-driven market analyses and design actionable, multi-year roadmaps that secure your market positioning and uncover hidden revenue streams.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Global Market Entry Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Deep-Dive Competitor Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Predictive Growth Modeling</span>
                </li>
              </ul>
              <a href="/contact" className="inline-flex items-center gap-3 text-blue-900 font-bold uppercase tracking-wider text-sm hover:text-teal-600 transition-colors">
                Engage Our Team <FiArrowRight className="text-lg" />
              </a>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-blue-900/5 -translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
              <img 
                src={imgStrategy} 
                alt="Strategic Planning" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 3: Financial Advisory (Image Left, Text Right)
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-900/5 translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={imgFinance} 
                alt="Financial Advisory" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-slate-200">03</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Financial Advisory
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ensure long-term fiscal health and investor confidence. Our elite financial experts offer comprehensive corporate restructuring, institutional risk management, and aggressive capital optimization strategies.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Institutional Risk Assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Strategic Capital Allocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">M&A Due Diligence & Valuation</span>
                </li>
              </ul>
              <a href="/contact" className="inline-flex items-center gap-3 text-blue-900 font-bold uppercase tracking-wider text-sm hover:text-teal-600 transition-colors">
                Engage Our Team <FiArrowRight className="text-lg" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 4: Digital Transformation (Text Left, Image Right)
      ====================================================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-slate-300">04</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Digital Transformation
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Modernize your enterprise architecture. We guide global organizations through the adoption of disruptive technologies, streamlining legacy workflows, and engineering next-generation customer experiences.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Enterprise IT Strategy & Overhaul</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Intelligent Process Automation (RPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Cloud Architecture & Integration</span>
                </li>
              </ul>
              <a href="/contact" className="inline-flex items-center gap-3 text-blue-900 font-bold uppercase tracking-wider text-sm hover:text-teal-600 transition-colors">
                Engage Our Team <FiArrowRight className="text-lg" />
              </a>
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-blue-900/5 -translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
              <img 
                src={imgDigital} 
                alt="Digital Transformation" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 5: Market Research (Image Left, Text Right)
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-900/5 translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={imgMarket} 
                alt="Market Research" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-slate-200">05</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Market Intelligence
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Make high-stakes decisions anchored in robust, empirical data. We provide in-depth macroeconomic sector analysis, advanced consumer behavior studies, and predictive trend forecasting.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Advanced Consumer Analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Investment Feasibility Studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Macroeconomic Trend Forecasting</span>
                </li>
              </ul>
              <a href="/contact" className="inline-flex items-center gap-3 text-blue-900 font-bold uppercase tracking-wider text-sm hover:text-teal-600 transition-colors">
                Engage Our Team <FiArrowRight className="text-lg" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-24 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full max-w-4xl h-full bg-teal-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-5 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Require a custom solution?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-10 text-lg">
            Every enterprise is unique. Contact our senior advisory team to architect a bespoke consulting engagement tailored exclusively to your organizational mandate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-10 py-5 rounded font-bold text-lg hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/30"
          >
            Contact Our Advisors
          </a>
        </div>
      </section>

    </main>
  );
};

export default Services;
