"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { testimonials } from "@/data/portfolio";
export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by teams and founders."
      />
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="glass min-w-[320px] rounded-3xl p-6 md:min-w-[460px]"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} client photo`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-poppins font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <p className="mt-5 leading-8 text-muted">"{testimonial.text}"</p>
              </article>
            )
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}