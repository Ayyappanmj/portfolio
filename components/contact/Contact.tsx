"use client";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaLocationDot, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xnjkwdrr";
  const [state, handleSubmit] = useForm(formId);

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch."
        description="Feel free to reach out directly via email or send a message below."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column: Direct channels & Location */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 transition hover:border-[#3F3F46]">
          <div>
            <h3 className="text-xl font-bold text-[#FAFAFA]">Contact Information</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
              I am open to conversations about opportunities, project collaborations, or technical questions.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 group-hover:text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Email</span>
                  <p className="font-mono text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 group-hover:text-white">
                  <FaPhone />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Phone</span>
                  <p className="font-mono text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-300">
                  <FaLocationDot />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Location</span>
                  <p className="font-mono text-xs sm:text-sm font-medium text-zinc-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap gap-3">
            <Link
              href="https://github.com/Ayyappanmj"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 font-mono text-xs font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <FaGithub className="text-sm" />
              <span>GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ayyappanmj"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 font-mono text-xs font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <FaLinkedin className="text-sm text-blue-400" />
              <span>LinkedIn</span>
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-semibold text-[#09090B] transition hover:bg-zinc-200"
            >
              <FaEnvelope className="text-xs" />
              <span>Mail directly</span>
            </a>
          </div>
        </div>

        {/* Right Column: Working Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 transition hover:border-[#3F3F46]"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="focus-ring w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-400 font-mono" />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="focus-ring w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-400 font-mono" />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Inquiry or message topic"
              className="focus-ring w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-xs text-red-400 font-mono" />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="focus-ring w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-400 font-mono" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="focus-ring mt-6 w-full rounded-lg bg-[#FAFAFA] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#09090B] transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {state.succeeded && (
            <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
              <p className="font-mono text-xs text-emerald-400">
                Message sent successfully! Thank you for reaching out.
              </p>
            </div>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
