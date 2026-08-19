import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiGlobe
} from "react-icons/fi";

const Contact = () => {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans pt-12">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Get In Touch • KD Marketing Group
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-6">
              Let's Discuss Your Growth Strategy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Connect with our digital marketing and web design experts in Buffalo, NY. We deliver customized solutions that generate leads and boost revenue.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Agency Headquarters</h3>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Buffalo NY Office</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      162 Woodlawn Ave<br />
                      Buffalo, NY 14208-1731<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Global Coverage</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Serving local Buffalo businesses & national enterprise clients across the United States.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Direct Channels</h3>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                    <a href="tel:+17163338202" className="text-slate-900 font-bold hover:text-blue-600 transition">
                      +1 (716) 333-8202
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sales Email</p>
                    <a href="mailto:sales@kdmarketinggroup.com" className="text-slate-900 font-bold hover:text-blue-600 transition">
                      sales@kdmarketinggroup.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="text-blue-600 mt-1">
                  <FiClock className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Operating Hours</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:00 PM (EST)<br />
                    24/7 Client Support Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-12 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Free Growth Consultation
                </h3>
                <p className="text-slate-500 text-xs mb-8">
                  Fill out the form below to receive a free SEO & Lead Generation assessment from our Buffalo marketing team.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition"
                        placeholder="(716) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition">
                      <option>Lead Generation & Funnels</option>
                      <option>SEO Services & Organic Growth</option>
                      <option>Paid Ads (Google / Meta / LinkedIn)</option>
                      <option>Web Design & App Development</option>
                      <option>Business Automation & KD Leads App</option>
                      <option>Online Reputation Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Details / Goals</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:outline-none focus:border-blue-600 transition resize-none"
                      placeholder="Tell us about your business, current website, or advertising goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl text-xs shadow-md transition-all"
                  >
                    Submit Consultation Request <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

