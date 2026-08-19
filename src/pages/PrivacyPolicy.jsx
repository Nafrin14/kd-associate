import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Section = ({ number, title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-black text-[#111111] mb-4">
      <span className="text-gray-400">{number}.</span> {title}
    </h2>

    <div className="text-gray-600 leading-8 space-y-4 text-sm sm:text-base">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111]">

      {/* HERO */}
      <section className="bg-[#f5f5f3] py-24">

        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-800 text-sm font-semibold transition mb-8"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-600">
              Legal
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-sm mt-6">
            <span className="text-gray-700 font-semibold">Effective Date:</span>{" "}
            January 1, 2025
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-gray-700 font-semibold">Last Updated:</span>{" "}
            August 19, 2026
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 sm:py-20">

        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* INTRO */}
          <div className="bg-[#f5f5f3] rounded-3xl p-6 sm:p-8 border border-gray-200 mb-12">

            <p className="text-gray-600 text-sm sm:text-base leading-8">
              KD Associates respects your privacy and is committed to
              protecting the personal information you provide when using our
              website, contacting us, or using our services.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-8 mt-4">
              This Privacy Policy explains what information we collect, how
              we use it, how we protect it, and the choices you have regarding
              your information.
            </p>

          </div>

          {/* 1 */}
          <Section number="1" title="Information We Collect">

            <p>
              We may collect information that you voluntarily provide when
              you interact with KD Associates through our website or services.
            </p>

            <p>
              This information may include:
            </p>

            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Name and contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Email address and phone number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Company or business information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Information submitted through contact forms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Messages and communications you send to us</span>
              </li>
            </ul>

          </Section>

          {/* 2 */}
          <Section number="2" title="Automatically Collected Information">

            <p>
              When you visit our website, certain information may be
              automatically collected through standard web technologies.
            </p>

            <p>
              This may include your IP address, browser type, device type,
              pages visited, approximate location, and general website usage
              information.
            </p>

            <p>
              This information helps us understand how visitors use our
              website and improve its functionality and performance.
            </p>

          </Section>

          {/* 3 */}
          <Section number="3" title="How We Use Your Information">

            <p>
              KD Associates may use collected information for legitimate
              business purposes, including:
            </p>

            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Responding to inquiries and requests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Providing and improving our services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Communicating with customers and prospects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Managing website functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Improving user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-950 mt-2 text-xs flex-shrink-0">▸</span>
                <span>Sending service-related communications</span>
              </li>
            </ul>

          </Section>

          {/* 4 */}
          <Section number="4" title="Cookies and Tracking Technologies">

            <p>
              Our website may use cookies and similar technologies to
              provide essential functionality, understand website traffic,
              and improve the user experience.
            </p>

            <p>
              Cookies may also be used by third-party services integrated
              into our website.
            </p>

            <p>
              You can control or disable cookies through your browser
              settings. Disabling certain cookies may affect some website
              functionality.
            </p>

          </Section>

          {/* 5 */}
          <Section number="5" title="Third-Party Services">

            <p>
              We may use third-party providers to support certain website,
              communication, analytics, marketing, or business functions.
            </p>

            <p>
              These providers may process information according to their own
              privacy policies and applicable agreements.
            </p>

            <p>
              KD Associates does not sell your personal information simply
              because you use our website.
            </p>

          </Section>

          {/* 6 */}
          <Section number="6" title="Information Sharing">

            <p>
              We may share information when reasonably necessary to operate
              our business, provide requested services, communicate with you,
              comply with legal obligations, or protect our rights.
            </p>

            <p>
              We do not intentionally disclose personal information to
              unrelated third parties for purposes outside those described
              in this Privacy Policy without appropriate authorization.
            </p>

          </Section>

          {/* 7 */}
          <Section number="7" title="Data Security">

            <p>
              We take reasonable administrative, technical, and organizational
              measures to protect personal information against unauthorized
              access, disclosure, alteration, or destruction.
            </p>

            <p>
              However, no method of transmitting or storing information
              electronically can be guaranteed to be completely secure.
            </p>

          </Section>

          {/* 8 */}
          <Section number="8" title="Data Retention">

            <p>
              We retain personal information only for as long as reasonably
              necessary for legitimate business purposes, to provide our
              services, maintain business records, resolve disputes, or comply
              with applicable legal requirements.
            </p>

          </Section>

          {/* 9 */}
          <Section number="9" title="Your Privacy Choices">

            <p>
              Depending on applicable law, you may have rights regarding your
              personal information, including the ability to request access,
              correction, or deletion of certain information.
            </p>

            <p>
              You may also contact us regarding questions about how your
              information is collected or used.
            </p>

          </Section>

          {/* 10 */}
          <Section number="10" title="Children's Privacy">

            <p>
              Our website and services are not intentionally directed toward
              children under the age of 13.
            </p>

            <p>
              We do not knowingly collect personal information from children
              under 13 through our website.
            </p>

          </Section>

          {/* 11 */}
          <Section number="11" title="External Links">

            <p>
              Our website may contain links to third-party websites or
              services.
            </p>

            <p>
              KD Associates is not responsible for the privacy practices,
              content, or security of external websites. We encourage you to
              review the privacy policies of third-party websites you visit.
            </p>

          </Section>

          {/* 12 */}
          <Section number="12" title="Changes to This Privacy Policy">

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, legal requirements, or
              business practices.
            </p>

            <p>
              Any updates will be posted on this page with a revised
              "Last Updated" date.
            </p>

          </Section>

          {/* 13 */}
          <Section number="13" title="Contact Us">

            <div className="bg-[#f5f5f3] rounded-3xl p-7 sm:p-8 border border-gray-200">

              <p className="text-xl font-black text-[#111111] mb-5">
                KD Associates
              </p>

              <div className="space-y-4 text-sm sm:text-base">

                <p className="text-gray-600">
                  <span className="font-bold text-[#111111]">Email:</span>{" "}
                  <a
                    href="mailto:info@kdassociates.com"
                    className="text-blue-950 font-semibold hover:underline"
                  >
                    info@kdassociates.com
                  </a>
                </p>

                <p className="text-gray-600">
                  <span className="font-bold text-[#111111]">Phone:</span>{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-blue-950 font-semibold hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </p>

                <p className="text-gray-600">
                  <span className="font-bold text-[#111111]">Location:</span>{" "}
                  New York, USA
                </p>

              </div>

            </div>

          </Section>

          {/* BOTTOM LINKS */}
          <div className="border-t border-gray-200 pt-8 mt-14 flex flex-col sm:flex-row justify-between gap-4">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-800 transition"
            >
              <FiArrowLeft />
              Back to Home
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-sm font-bold text-gray-500 hover:text-blue-800 transition"
            >
              View Terms & Conditions →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PrivacyPolicy;

