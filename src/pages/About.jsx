import {
  FiCheckCircle,
  FiPhone
} from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans pt-12">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Committed to Excellence Delivery
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-6">
              Everyone has a story. Here is ours.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              KD Marketing Group was founded to help businesses in Buffalo, NY and across North America thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* STORY MILESTONES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Milestone 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2 block">
                01. The Beginning
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Roots in Buffalo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                KD Marketing Group was founded to help businesses in Buffalo thrive in the digital world. What started as a small team passionate about marketing and web design quickly grew into a trusted agency serving brands across New York and beyond.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 mb-2 block">
                02. Our Mission
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Empowering Local Brands</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We are on a mission to empower local businesses with customized web and digital marketing solutions. We achieve sustainable development for any client by combining innovative strategy, latest technologies, and an outcome-focused attitude.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 mb-2 block">
                03. Local & Global
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Knowledge, Global Reach</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our deep local knowledge of projects is based on our powerful experience in Buffalo, NY. Through our network, we provide current digital best practices, innovative collaboration, preferred care, and 24/7 reliability.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE KD MARKETING GROUP */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Why Us
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Why Choose KD Marketing Group?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                KD Marketing Group knows how fast and demanding business management can be, especially in the fast-moving Buffalo, NY market. That is why our agency does not just provide online marketing and web design; we develop a genuine partnership based on trust, effective communication, and in-depth understanding of the industry.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cooperation with KD Marketing provides you with a dedicated team of professionals who genuinely understand your growth goals. We bring order to complex digital landscapes through integrated solutions including paid ads, SEO, branding, automation, and custom web development.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-bold transition"
                >
                  Work With Us <FiCheckCircle />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
              <span className="text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                We are the designers of your online success, from first click to last conversion.
              </h3>
              
              <div className="space-y-4 border-t border-slate-800 pt-6">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-400 text-lg shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">
                    Data-driven SEO, Google Ads, and Meta advertising setup
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-400 text-lg shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">
                    Full custom website design and mobile app development
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-teal-400 text-lg shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">
                    Proprietary KD Leads App for automated instant prospect follow-up
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">Call Headquarters</p>
                  <p className="text-sm font-bold text-teal-400">(716) 333-8202</p>
                </div>
                <a
                  href="tel:+17163338202"
                  className="w-10 h-10 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold hover:bg-teal-400 transition"
                >
                  <FiPhone />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;

