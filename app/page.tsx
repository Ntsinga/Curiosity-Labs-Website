import Link from "next/link";
import { Logo } from "./components/Logo";
import { LogoText } from "./components/LogoText";
import { QuestionMark } from "./components/QuestionMark";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <QuestionMark size={36} />
            <LogoText size="sm" showSlogan={false} />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#what-we-do"
              className="hover:text-white transition-colors"
            >
              What We Do
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-28 pb-16 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <Logo size={220} />
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
            A technology hub driven by curiosity, building solutions that solve
            Africa&apos;s problems — one question at a time.
          </p>
          <a
            href="#about"
            className="mt-4 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">
            Our Story
          </h2>
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
            <p>
              Curiosity — this urge, this itch, this feeling — has driven us for
              most of our lives. The curiosity to learn, to know. It led us from
              science to technology, where we discovered that technology is
              curiosity&apos;s questions answered in physical form with the help
              of science.
            </p>
            <p>
              Technology, like any innovation at its core, is the attempt to
              solve a problem. We&apos;re not just asking any questions in this
              endless sea of curiosity — we&apos;re asking questions that solve
              our people&apos;s problems.
            </p>
            <p>
              Here at Curiosity Labs, we aim to be a hub of curiosity, of
              questions, of ideas, of possibilities. Questions that aim to solve
              Africa&apos;s problems — problems we plan to solve with
              technology.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 p-8 rounded-2xl border border-indigo-500/20 bg-indigo-950/20 glow">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">
              Our Mission
            </h3>
            <p className="text-zinc-200 text-lg leading-relaxed">
              To solve Africa&apos;s problems with technology — and to keep
              asking the question:{" "}
              <span className="gradient-text font-semibold">
                What if it&apos;s possible?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="card-hover p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Build Technology Solutions
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We build applications under Curiosity Labs — like Teleba — that
                directly address real problems faced by communities across
                Africa.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-hover p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Invest in Startups</h3>
              <p className="text-zinc-400 leading-relaxed">
                We help and invest in startups as an accelerator — offering
                mentorship, resources, and funding to promising African tech
                ventures.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-hover p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Push Original Innovation
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We push Africa to build more original technology innovations,
                replicating what works globally while adapting it to local
                contexts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card-hover p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e879f9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 6H8a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4h-2c0-3 2-4 2-6a4 4 0 0 0-4-4z" />
                  <path d="M9 18v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Custom AI Solutions
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We provide custom AI applications, agents, and models tailored
                to solve specific problems for businesses and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Build Together
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Whether you&apos;re a startup looking for support, a business
            needing AI solutions, or someone who shares our curiosity —
            we&apos;d love to connect.
          </p>
          <a
            href="mailto:hello@curiositylabs.tech"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-lg transition-colors"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <QuestionMark size={28} />
            <span className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Curiosity Labs. All rights reserved.
            </span>
          </div>
          <p className="text-sm text-zinc-500 italic">
            What if it&apos;s possible?
          </p>
          <Link
            href="/privacy-policy"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
