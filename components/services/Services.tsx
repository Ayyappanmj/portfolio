import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        eyebrow="07 // SERVICES"
        title="Engineering consulting &amp; product development."
        description="Core technical services across distributed systems, autonomous AI agents, data engineering, and infrastructure automation."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          return (
            <article
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-[#27272A] bg-[#121215] p-6 transition duration-200 hover:border-[#3F3F46]"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-[#FAFAFA]">{service.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#A1A1AA]">{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
