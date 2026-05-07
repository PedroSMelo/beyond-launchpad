import { motion } from "framer-motion";
import { Code2, PenTool, Target, Server } from "lucide-react";

const items = [
  { icon: Code2, title: "Desenvolvimento de Aplicações", desc: "Sistemas sob medida, performance e escalabilidade." },
  { icon: PenTool, title: "Identidade Visual", desc: "Marcas profissionais e posicionamento de mercado." },
  { icon: Target, title: "Consultoria em TI", desc: "Diagnóstico estratégico e otimização de processos." },
  { icon: Server, title: "Engenharia de Redes", desc: "Infraestrutura, segurança e alta performance." },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">Soluções</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Tudo que sua empresa precisa, em um só lugar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções integradas que conectam tecnologia, design e estratégia para acelerar resultados.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cta/40 hover:shadow-[0_20px_60px_-20px_var(--cta-glow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cta/15 text-cta">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
