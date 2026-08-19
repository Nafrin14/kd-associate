import {
  FiTarget,
  FiCompass,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiBarChart,
  FiShield
} from "react-icons/fi";

const About = () => {
  return (
    <main className="bg-white text-slate-800 font-sans pt-20">
      
      {/* =====================================================
          HEADER SECTION
      ====================================================== */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Corporate Overview
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Empowering organizations to achieve lasting success.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              KD Associates is a premier business consulting firm dedicated to providing strategic, actionable insights that drive sustainable growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded shrink-0 flex items-center justify-center mt-1">
                  <FiCompass className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To deliver practical, innovative, and strategic solutions that empower our clients to overcome complex business challenges, optimize their operations, and achieve measurable, long-term profitability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded shrink-0 flex items-center justify-center mt-1">
                  <FiTarget className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be recognized globally as the most trusted advisory partner, setting the standard for professional excellence, integrity, and transformative business impact across all major industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/5 rounded-bl-[100px]" />
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Partner With Us?</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700">Decades of combined industry experience and deep sector knowledge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700">Data-driven methodologies that guarantee objective insights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700">Highly customized strategies tailored to your unique corporate structure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700">A commitment to transparency, integrity, and tangible results.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Guiding Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These fundamental principles guide our interactions, decisions, and the strategies we build for our clients every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We demand the highest quality in our deliverables, consistently exceeding client expectations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiShield className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We operate with absolute honesty, transparency, and ethical responsibility in all engagements.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We view ourselves as an extension of your team, fostering partnerships built on mutual trust.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-blue-900 text-teal-400 rounded-full flex items-center justify-center mb-6">
                <FiBarChart className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Impact</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We focus on strategies that produce measurable, sustainable, and significant business results.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
