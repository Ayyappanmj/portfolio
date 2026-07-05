import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { services } from "@/data/portfolio";
export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        eyebrow="Services"
        title="From idea to polished product."
        description="End-to-end development services for founders, agencies, startups, and growing product teams."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service) => {
          return (
            <article
              key={service.title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 p-4 text-3xl text-cyan-400">
                <span aria-hidden>💡</span>
              </div>
              <h3 className="font-poppins text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}