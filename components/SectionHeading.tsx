import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeIn
      className={`mb-14 flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base text-text-secondary md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
