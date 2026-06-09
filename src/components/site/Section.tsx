import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-ocean/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ocean">
      <span className="h-1.5 w-1.5 rounded-full bg-ocean" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative gradient-navy text-primary-foreground">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 50%)",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
