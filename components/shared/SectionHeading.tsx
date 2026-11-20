type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[#A1A1AA] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
