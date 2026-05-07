import { motion } from "framer-motion";

const cases = [
  {
    tag: "Fintech",
    title: "Plataforma de pagamentos escalável",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Indústria",
    title: "Modernização de infraestrutura de redes",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Branding",
    title: "Reposicionamento de marca corporativa",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cta">Portfólio</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Resultados que Entregamos</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Projetos selecionados onde unimos tecnologia e estratégia para gerar impacto mensurável.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="inline-block rounded-full bg-cta/20 px-2.5 py-1 text-xs font-semibold text-cta">
                  {c.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
