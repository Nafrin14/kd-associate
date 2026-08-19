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
    <main className="bg-slate-50 text-slate-800 font-sans pt-20">
      
      {/* =====================================================
          HEADER SECTION
      ====================================================== */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Let's discuss your corporate objectives.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              Connect with our senior advisory team to explore how KD Associates can drive strategic value and operational excellence within your organization.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT (Split Layout)
      ====================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Corporate Headquarters</h3>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded flex items-center justify-center shrink-0 shadow-sm">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">New York Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      100 Financial District, Suite 500<br />
                      New York, NY 10005<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded flex items-center justify-center shrink-0 shadow-sm">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">London Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Level 39, One Canada Square<br />
                      Canary Wharf, London E14 5AB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Direct Channels</h3>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded flex items-center justify-center shrink-0 shadow-sm">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                    <p className="text-slate-900 font-medium">+1 (800) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded flex items-center justify-center shrink-0 shadow-sm">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Inquiry</p>
                    <p className="text-slate-900 font-medium">consulting@kdassociates.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="text-blue-900 mt-1">
                    <FiClock className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Operating Hours</h4>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM (EST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Formal Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded border border-slate-200 shadow-lg p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] z-0" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    Submit an Inquiry
                  </h3>
                  <p className="text-slate-600 mb-8">
                    Please provide your corporate details below. A senior consultant will respond within one business day.
                  </p>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Corporate Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company / Organization</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                        placeholder="Acme Corp"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Area of Interest</label>
                      <select className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition appearance-none">
                        <option>Management Consulting</option>
                        <option>Strategic Planning</option>
                        <option>Financial Advisory</option>
                        <option>Digital Transformation</option>
                        <option>Global Expansion</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                      <textarea
                        rows="5"
                        className="w-full px-4 py-3 rounded border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                        placeholder="Please provide details about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-2 w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded transition-colors"
                    >
                      Submit Request <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-700 hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
