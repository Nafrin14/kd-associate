import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiGlobe,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Spinner component
const Spinner = () => (
  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
  </svg>
);

// Animated success state
const SuccessState = () => (
  <div className="success-pop flex flex-col items-center justify-center py-16 text-center">
    <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-teal-500 flex items-center justify-center mb-6 shadow-lg">
      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline className="check-draw" points="4 12 9 17 20 6" />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted!</h3>
    <p className="text-slate-600 max-w-sm leading-relaxed">
      Thank you for reaching out. A senior consultant will respond to you within one business day.
    </p>
  </div>
);

const INITIAL = { firstName: "", lastName: "", email: "", phone: "", company: "", interest: "Management Consulting", message: "" };

const Contact = () => {
  const [form, setForm]         = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const hero = useScrollReveal(0.1);
  const form_reveal = useScrollReveal(0.08);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim())  e.firstName = "First name is required.";
    if (!form.lastName.trim())   e.lastName  = "Last name is required.";
    if (!form.email.trim())      e.email     = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.company.trim())    e.company   = "Company name is required.";
    if (!form.message.trim())    e.message   = "Please include a message.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSubmitted(true);
  };

  // Reusable input class builder
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border transition-all outline-none focus:ring-2 text-slate-900 ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
        : "border-slate-300 bg-slate-50 focus:border-blue-600 focus:ring-blue-100"
    }`;

  return (
    <main className="bg-slate-50 text-slate-800 pt-20">

      {/* =====================================================
          HEADER SECTION
      ====================================================== */}
      <section className="bg-blue-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[140px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-900 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div
          ref={hero.ref}
          className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 reveal-hidden ${hero.isVisible ? "reveal-visible" : ""}`}
        >
          <div className="w-12 h-1 bg-teal-400 rounded-full mb-6" />
          <div className="max-w-3xl">
            <p className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Let's discuss your corporate{" "}
              <span className="text-teal-400">objectives.</span>
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
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
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
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
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
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                    <a href="tel:+18005550198" className="text-slate-900 font-medium hover:text-blue-700 transition-colors">+1 (800) 555-0198</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Inquiry</p>
                    <a href="mailto:consulting@kdassociates.com" className="text-slate-900 font-medium hover:text-blue-700 transition-colors">consulting@kdassociates.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="text-blue-900 mt-1">
                  <FiClock className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Operating Hours</h4>
                  <p className="text-slate-600 text-sm">
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM (EST)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div
              ref={form_reveal.ref}
              className={`lg:col-span-7 reveal-hidden ${form_reveal.isVisible ? "reveal-visible" : ""}`}
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[120px] z-0 opacity-60" />

                <div className="relative z-10">
                  {submitted ? (
                    <SuccessState />
                  ) : (
                    <>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Submit an Inquiry</h3>
                      <p className="text-slate-500 mb-8">
                        A senior consultant will respond within one business day.
                      </p>

                      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name</label>
                            <input name="firstName" type="text" value={form.firstName} onChange={handleChange} placeholder="John" className={inputClass("firstName")} />
                            {errors.firstName && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle />{errors.firstName}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name</label>
                            <input name="lastName" type="text" value={form.lastName} onChange={handleChange} placeholder="Doe" className={inputClass("lastName")} />
                            {errors.lastName && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle />{errors.lastName}</p>}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Corporate Email</label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass("email")} />
                            {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle />{errors.email}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number <span className="text-slate-400 font-normal">(optional)</span></label>
                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass("phone")} />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Organization</label>
                          <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputClass("company")} />
                          {errors.company && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle />{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Area of Interest</label>
                          <select name="interest" value={form.interest} onChange={handleChange} className={inputClass("interest") + " appearance-none cursor-pointer"}>
                            <option>Management Consulting</option>
                            <option>Strategic Planning</option>
                            <option>Financial Advisory</option>
                            <option>Digital Transformation</option>
                            <option>Global Expansion</option>
                            <option>Other Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                          <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Please provide details about your project or inquiry..." className={inputClass("message") + " resize-none"} />
                          {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle />{errors.message}</p>}
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="group flex items-center justify-center gap-2 w-full bg-blue-900 hover:bg-blue-800 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                        >
                          {submitting ? (
                            <><Spinner /> Submitting…</>
                          ) : (
                            <>Submit Request <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></>
                          )}
                        </button>

                        <p className="text-xs text-slate-400 text-center mt-2">
                          By submitting, you agree to our{" "}
                          <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                        </p>
                      </form>
                    </>
                  )}
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
