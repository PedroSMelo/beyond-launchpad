import { SectionLabel } from "./SectionLabel";

const partners = ["AWS", "Microsoft", "Google Cloud", "Cisco", "Oracle", "IBM", "Red Hat", "Cloudflare"];

export function Partners() {
  const loop = [...partners, ...partners];

  return (
    <section
      id="parceiros"
      className="border-y border-border bg-card/30 py-[clamp(2rem,5vh,4rem)]"
    >
      <div className="mx-auto w-full max-w-[min(90rem,95vw)] px-[clamp(1rem,4vw,3rem)]">
        <div className="flex justify-center">
          <SectionLabel label="Certificações e Parceiros" align="center" />
        </div>

        <div className="marquee mt-6 sm:mt-8">
          <div className="marquee-track gap-[clamp(2rem,5vw,5rem)]">
            {loop.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="shrink-0 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-muted-foreground/60 grayscale hover:grayscale-0 hover:text-cta transition-all duration-300"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
