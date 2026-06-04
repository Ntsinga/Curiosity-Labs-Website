import type { Metadata } from "next";
import Link from "next/link";
import { LogoText } from "../components/LogoText";
import { QuestionMark } from "../components/QuestionMark";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curiositylabs.tech";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Curiosity Labs Privacy Policy — how we collect, use, and protect your personal data.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <QuestionMark size={32} />
            <LogoText size="sm" showSlogan={false} />
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Back Home
          </Link>
        </div>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold gradient-text">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated: June 4, 2026</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Introduction
            </h2>
            <p className="mt-3">
              Curiosity Labs (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard information when you visit our website, contact us, or
              use services provided by Curiosity Labs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Information We Collect
            </h2>
            <h3 className="mt-4 text-lg font-medium text-zinc-100">
              2.1 Information You Provide
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Name, email address, phone number, and organization details.
              </li>
              <li>
                Messages, project inquiries, startup applications, partnership
                requests, or support requests you send to us.
              </li>
              <li>
                Business information you choose to share when asking about AI,
                software, accelerator, or investment services.
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-zinc-100">
              2.2 Information Collected Automatically
            </h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Device and browser information, such as browser type, operating
                system, and device type.
              </li>
              <li>
                Usage data, such as pages visited, referral URLs, approximate
                location, and timestamps.
              </li>
              <li>
                Technical log data, such as IP address and error or performance
                information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use collected information to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Respond to inquiries and communicate with you.</li>
              <li>
                Evaluate project, partnership, startup, investment, or service
                opportunities.
              </li>
              <li>Provide, maintain, and improve our website and services.</li>
              <li>
                Develop and deliver technology, AI, accelerator, and consulting
                services.
              </li>
              <li>Protect against misuse, fraud, security issues, or abuse.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Data Sharing &amp; Disclosure
            </h2>
            <p className="mt-3">
              We do not sell your personal data. We may share information only
              in limited circumstances:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                <strong className="text-zinc-100">Service providers:</strong>{" "}
                trusted providers who help us operate our website, hosting,
                analytics, communications, or business tools.
              </li>
              <li>
                <strong className="text-zinc-100">Business partners:</strong>{" "}
                only when necessary to evaluate or deliver a project,
                accelerator, investment, or partnership opportunity.
              </li>
              <li>
                <strong className="text-zinc-100">Legal requirements:</strong>{" "}
                when required by law, court order, governmental request, or to
                protect our rights and users.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Data Security
            </h2>
            <p className="mt-3">
              We use reasonable technical and organizational safeguards to
              protect your information. However, no electronic transmission or
              storage method is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Data Retention
            </h2>
            <p className="mt-3">
              We retain information only for as long as needed to provide our
              services, respond to inquiries, manage business relationships,
              resolve disputes, or comply with legal obligations. When no longer
              needed, information is deleted or anonymized where practical.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
            <p className="mt-3">
              Depending on your location, you may have the right to access,
              correct, delete, restrict, or object to processing of your
              personal information. You may also request that we stop contacting
              you for optional communications.
            </p>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:hello@curiositylabs.co"
                className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
              >
                hello@curiositylabs.tech
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our website and services are not intended for children under 13.
              We do not knowingly collect personal information from children. If
              we learn that we have collected such information, we will delete
              it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised &quot;Last updated&quot;
              date. Your continued use of our website or services after updates
              means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:hello@curiositylabs.co"
                  className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
                >
                  hello@curiositylabs.tech
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Curiosity Labs. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            What if it&apos;s possible?
          </Link>
        </div>
      </footer>
    </div>
  );
}
