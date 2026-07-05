import Link from "next/link";
import { FaCertificate } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { certifications } from "@/data/portfolio";
export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that support practical expertise."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certificate) => (
          <article
            key={certificate.name}
            className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-3xl text-cyan-400">
              <FaCertificate />
            </div>
            <h3 className="font-poppins text-xl font-bold">{certificate.name}</h3>
            <p className="mt-3 text-muted">{certificate.issuer}</p>
            <Link
              href={certificate.verify}
              target="_blank"
              className="focus-ring mt-6 inline-flex rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Verify Certificate
            </Link>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}