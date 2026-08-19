import {
  FiTarget,
  FiCompass,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiBarChart,
  FiShield
} from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const hero   = useScrollReveal(0.1);
  const intro  = useScrollReveal(0.15);
  const values = useScrollReveal(0.1);

  return (
    <main className="bg-white text-slate-800 pt-20">

      {/* =====================================================
          HEADER SECTION — upgraded with decorative elements
      ====================================================== */}
      <section className="bg-blue-950 py-28 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[140px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-900 rounded-full blur-[120px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />

        <div
          ref={hero.ref}
          className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 reveal-hidden ${hero.isVisible ? "reveal-visible" : ""}`}
        >
          {/* Teal accent bar */}
          <div className="w-12 h-1 bg-teal-400 rounded-full mb-6" />

          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Corporate Overview
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Empowering organizations to achieve{" "}
              <span className="text-teal-400">lasting success.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              KD Associates is a premier business consulting firm dedicated to providing strategic, actionable insights that drive sustainable growth and operational excellence.
            </p>
          </div>

          {/* Floating stat badges */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Projects Delivered", value: "500+" },
              { label: "Client Retention", value: "98%" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-blue-900/60 backdrop-blur-sm border border-blue-800/60 rounded-xl px-6 py-4">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            ref={intro.ref}
            className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center reveal-hidden ${intro.isVisible ? "reveal-visible" : ""}`}
          >
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-xl shrink-0 flex items-center justify-center mt-1 shadow-sm">
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
                <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-xl shrink-0 flex items-center justify-center mt-1 shadow-sm">
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

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-900/5 rounded-bl-[120px]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/5 rounded-tr-[80px]" />
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Partner With Us?</h3>
              <ul className="space-y-5">
                {[
                  "Decades of combined industry experience and deep sector knowledge.",
                  "Data-driven methodologies that guarantee objective insights.",
                  "Highly customized strategies tailored to your unique corporate structure.",
                  "A commitment to transparency, integrity, and tangible results.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="text-teal-600 text-xl shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
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

          <div
            ref={values.ref}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: FiAward,    title: "Excellence",    delay: "delay-100", text: "We demand the highest quality in our deliverables, consistently exceeding client expectations." },
              { icon: FiShield,   title: "Integrity",     delay: "delay-200", text: "We operate with absolute honesty, transparency, and ethical responsibility in all engagements." },
              { icon: FiUsers,    title: "Collaboration", delay: "delay-300", text: "We view ourselves as an extension of your team, fostering partnerships built on mutual trust." },
              { icon: FiBarChart, title: "Impact",        delay: "delay-400", text: "We focus on strategies that produce measurable, sustainable, and significant business results." },
            ].map(({ icon: Icon, title, delay, text }) => (
              <div
                key={title}
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-2 hover:shadow-lg hover:border-blue-200 transition-all duration-300 reveal-hidden ${delay} ${values.isVisible ? "reveal-visible" : ""}`}
              >
                <div className="w-16 h-16 mx-auto bg-blue-900 text-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
