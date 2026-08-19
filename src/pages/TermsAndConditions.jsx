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

const BulletList = ({ items }) => (
  <ul className="space-y-3 ml-1">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="text-blue-950 mt-2 text-xs flex-shrink-0">
          ▸
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111]">

      {/* =====================================================
          HERO
      ====================================================== */}
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
            Terms & Conditions
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

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="py-16 sm:py-20">

        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* INTRO */}
          <div className="bg-[#f5f5f3] rounded-3xl p-6 sm:p-8 border border-gray-200 mb-12">

            <p className="text-gray-600 text-sm sm:text-base leading-8">
              Welcome to{" "}
              <span className="font-bold text-[#111111]">
                KD Associates
              </span>
              . By accessing or using our website and services, you agree to
              comply with and be bound by these Terms and Conditions.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-8 mt-4">
              If you do not agree with these Terms and Conditions, please do
              not use our website or services.
            </p>

          </div>

          {/* 1 */}
          <Section number="1" title="Acceptance of Terms">

            <p>
              By accessing this website, submitting information through our
              forms, contacting us, or using our services, you acknowledge
              that you have read, understood, and agreed to these Terms and
              Conditions.
            </p>

          </Section>

          {/* 2 */}
          <Section number="2" title="Business Information">

            <p>
              These Terms and Conditions apply to services provided by
              KD Associates.
            </p>

            <p>
              KD Associates provides professional business and support
              services to individuals, organizations, and businesses.
            </p>

            <p>
              For questions regarding these Terms, please contact us using
              the information provided at the end of this page.
            </p>

          </Section>

          {/* 3 */}
          <Section number="3" title="Use of Our Website">

            <p>
              You agree to use this website only for lawful purposes and in
              a manner that does not interfere with or negatively affect the
              operation of the website.
            </p>

            <p>
              You agree not to:
            </p>

            <BulletList
              items={[
                "Use the website for unlawful or fraudulent purposes",
                "Attempt to gain unauthorized access to website systems",
                "Interfere with the security or functionality of the website",
                "Submit false, misleading, or fraudulent information",
                "Copy or reproduce website content without permission",
              ]}
            />

          </Section>

          {/* 4 */}
          <Section number="4" title="Services">

            <p>
              KD Associates provides services based on the specific needs and
              requirements of each client.
            </p>

            <p>
              Service descriptions presented on this website are provided for
              general informational purposes and may change without notice.
            </p>

            <p>
              Specific services, pricing, timelines, deliverables, and other
              requirements may be agreed upon separately between KD Associates
              and the client.
            </p>

          </Section>

          {/* 5 */}
          <Section number="5" title="Client Responsibilities">

            <p>
              Clients are responsible for providing accurate and complete
              information necessary for KD Associates to provide requested
              services.
            </p>

            <p>
              Clients agree to cooperate reasonably and provide requested
              materials, information, approvals, or access when required.
            </p>

          </Section>

          {/* 6 */}
          <Section number="6" title="Payments and Fees">

            <p>
              Where applicable, fees and payment terms will be communicated
              to the client before services are provided.
            </p>

            <p>
              Unless otherwise agreed in writing, clients are responsible for
              paying all applicable charges associated with requested services.
            </p>

          </Section>

          {/* 7 */}
          <Section number="7" title="Intellectual Property">

            <p>
              Unless otherwise stated, the content of this website, including
              text, graphics, branding, design elements, images, logos, and
              other materials, is owned by or licensed to KD Associates.
            </p>

            <p>
              You may not reproduce, modify, distribute, publish, sell, or
              commercially exploit website content without prior written
              permission.
            </p>

          </Section>

          {/* 8 */}
          <Section number="8" title="Client Content">

            <p>
              If you submit text, images, documents, reviews, or other
              materials to KD Associates, you confirm that you have the right
              to provide such materials.
            </p>

            <p>
              You remain responsible for ensuring that submitted content does
              not violate applicable laws or the rights of another person or
              organization.
            </p>

          </Section>

          {/* 9 */}
          <Section number="9" title="Third-Party Services and Links">

            <p>
              Our website may contain links to third-party websites,
              platforms, or services.
            </p>

            <p>
              KD Associates does not control or guarantee the availability,
              accuracy, security, or privacy practices of third-party websites.
            </p>

            <p>
              Your use of third-party services may be subject to their own
              terms and policies.
            </p>

          </Section>

          {/* 10 */}
          <Section number="10" title="Disclaimer">

            <p>
              Information provided on this website is intended for general
              informational purposes only.
            </p>

            <p>
              While we make reasonable efforts to keep website information
              accurate and current, KD Associates does not guarantee that all
              information will always be complete, accurate, or up to date.
            </p>

          </Section>

          {/* 11 */}
          <Section number="11" title="Limitation of Liability">

            <p>
              To the maximum extent permitted by applicable law, KD Associates
              shall not be liable for indirect, incidental, consequential,
              special, or other damages arising from the use of this website
              or reliance on information provided through the website.
            </p>

            <p>
              Nothing in these Terms is intended to exclude liability that
              cannot legally be excluded under applicable law.
            </p>

          </Section>

          {/* 12 */}
          <Section number="12" title="Privacy">

            <p>
              Your use of this website is also subject to our Privacy Policy.
            </p>

            <p>
              Our Privacy Policy explains how we collect, use, and protect
              information provided through our website.
            </p>

            <Link
              to="/privacy-policy"
              className="inline-flex text-blue-950 font-bold hover:underline"
            >
              View Privacy Policy →
            </Link>

          </Section>

          {/* 13 */}
          <Section number="13" title="Changes to These Terms">

            <p>
              KD Associates reserves the right to modify or update these
              Terms and Conditions at any time.
            </p>

            <p>
              Changes will become effective when the updated Terms are posted
              on this website.
            </p>

            <p>
              Your continued use of the website after changes are posted
              constitutes acceptance of the updated Terms.
            </p>

          </Section>

          {/* 14 */}
          <Section number="14" title="Termination">

            <p>
              KD Associates may restrict or terminate access to the website
              or certain services when reasonably necessary, including where
              a user violates these Terms or applicable law.
            </p>

          </Section>

          {/* 15 */}
          <Section number="15" title="Governing Law">

            <p>
              These Terms and Conditions shall be interpreted and applied in
              accordance with applicable laws.
            </p>

            <p>
              Any disputes arising from the use of this website or services
              shall be handled in accordance with applicable legal
              requirements and jurisdiction.
            </p>

          </Section>

          {/* 16 */}
          <Section number="16" title="Contact Information">

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
              to="/privacy-policy"
              className="text-sm font-bold text-gray-500 hover:text-blue-800 transition"
            >
              View Privacy Policy →
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default TermsAndConditions;

