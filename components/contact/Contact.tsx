"use client";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xnjkwdrr";
  const [state, handleSubmit] = useForm(formId);

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="08 // CONTACT"
        title="Initiate technical collaboration."
        description="Reach out for full-time software engineering roles, distributed systems design, or AI engineering projects."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-[#27272A] bg-[#121215] p-8 transition hover:border-[#3F3F46]">
          <h3 className="text-xl font-bold text-[#FAFAFA]">Contact Information</h3>
          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
            Direct channels for opportunities, code evaluations, or architectural discussions.
          </p>
          <div className="mt-8 space-y-4">
            <ContactItem icon={<FaEnvelope />} label="Email" value={profile.email} />
            <ContactItem icon={<FaPhone />} label="Phone" value={profile.phone} />
            <ContactItem icon={<FaLocationDot />} label="Location" value={profile.location} />
          </div>
          <div className="mt-8 flex gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="focus-ring rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-base text-zinc-400 transition hover:border-zinc-600 hover:text-white"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps?q=India&amp;output=embed"
              className="h-56 w-full grayscale contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#27272A] bg-[#121215] p-8 transition hover:border-[#3F3F46]"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Name" name="name" placeholder="Your name" required />
            <Input label="Email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="mt-5">
            <Input label="Subject" name="subject" placeholder="Role or project inquiry" required />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Provide context regarding the engineering position or technical scope..."
              className="focus-ring w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting || !formId}
            className="focus-ring mt-6 w-full rounded-lg bg-[#FAFAFA] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#09090B] transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.submitting ? "Transmitting..." : "Send Message"}
          </button>
          {!formId ? (
            <p className="mt-4 font-mono text-xs text-zinc-500">
              Set NEXT_PUBLIC_FORMSPREE_ID to enable automated form delivery.
            </p>
          ) : null}
          {state.succeeded ? (
            <p className="mt-4 font-mono text-xs text-emerald-400">
              Message transmitted successfully. I will follow up shortly.
            </p>
          ) : null}
        </form>
      </div>
    </SectionWrapper>
  );
}

function ContactItem({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-2.5 text-zinc-400">
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{label}</p>
        <p className="text-sm font-semibold text-[#FAFAFA]">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-xs uppercase tracking-wider text-zinc-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-[#FAFAFA] placeholder:text-zinc-600 transition focus:border-zinc-500"
      />
    </div>
  );
}
