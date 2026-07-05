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
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-poppins text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}