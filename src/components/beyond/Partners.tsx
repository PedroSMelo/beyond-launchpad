const partners = ["AWS", "Microsoft", "Google Cloud", "Cisco", "Oracle"];

export function Partners() {
  return (
    <section id="parceiros" className="py-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Nossas Certificações e Parceiros
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center text-2xl font-bold tracking-tight text-muted-foreground/60 grayscale hover:grayscale-0 hover:text-cta transition-all duration-300"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
