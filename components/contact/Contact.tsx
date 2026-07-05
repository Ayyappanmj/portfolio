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
        eyebrow="Contact"
        title="Let us build something exceptional."
        description="Send a message for freelance work, full-time opportunities, product consulting, or collaboration."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-3xl p-8">
          <h3 className="font-poppins text-2xl font-bold">Contact Information</h3>
          <div className="mt-8 space-y-5">
            <ContactItem icon={<FaEnvelope />} label="Email" value={profile.email} />
            <ContactItem icon={<FaPhone />} label="Phone" value={profile.phone} />
            <ContactItem icon={<FaLocationDot />} label="Location" value={profile.location} />
          </div>
          <div className="mt-8 flex gap-4">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="focus-ring rounded-full border border-white/10 p-4 text-xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Google Map Location"
              src="[google.com](https://www.google.com/maps?q=Bengaluru%20India&output=embed)"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Name" name="name" placeholder="Your name" required />
            <Input label="Email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="mt-5">
            <Input label="Subject" name="subject" placeholder="Project inquiry" required />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              placeholder="Tell me about your project..."
              className="focus-ring w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted transition focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting || !formId}
            className="focus-ring mt-6 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 px-6 py-4 font-bold text-white shadow-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          {!formId ? (
            <p className="mt-4 text-sm text-yellow-300">
              Add your Formspree ID to `NEXT_PUBLIC_FORMSPREE_ID` to enable submissions.
            </p>
          ) : null}
          {state.succeeded ? (
            <p className="mt-4 text-sm text-cyan-300">
              Message sent successfully. I will reply soon.
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
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
      <div className="text-xl text-cyan-400">{icon}</div>
      <div>
        <p className="text-sm text-muted">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-ring w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-muted transition focus:border-cyan-400"
      />
    </div>
  );
}