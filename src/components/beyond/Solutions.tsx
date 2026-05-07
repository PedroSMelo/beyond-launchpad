import { motion } from "framer-motion";
import { Code2, PenTool, Target, Server, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { SectionLabel } from "./SectionLabel";
import { BrandWatermark } from "./BrandWatermark";
import { selectService, type ServiceOption } from "@/lib/selectService";

const items: { icon: typeof Code2; title: string; desc: string; servico: ServiceOption }[] = [
  {
    icon: Code2,
    title: "Desenvolvimento de Aplicações",
    desc: "Sistemas sob medida, performance e escalabilidade.",
    servico: "Desenvolvimento de Aplicações",
  },
  {
    icon: PenTool,
    title: "Identidade Visual",
    desc: "Marcas profissionais e posicionamento de mercado.",
    servico: "Identidade Visual",
  },
  {
    icon: Target,
    title: "Consultoria em TI",
    desc: "Diagnóstico estratégico e otimização de processos.",
    servico: "Consultoria em TI",
  },
  {
    icon: Server,
    title: "Engenharia de Redes",
    desc: "Infraestrutura, segurança e alta performance.",
    servico: "Engenharia de Redes",
  },
];

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden min-h-[100svh] flex items-start pt-[clamp(6rem,14vh,10rem)] pb-[clamp(8rem,18vh,14rem)]"
    >
      <BrandWatermark position="right" />
      <div className="relative mx-auto w-full max-w-[min(90rem,95vw)] px-[clamp(1rem,4vw,3rem)] flex flex-col">
        <div className="max-w-3xl">
          <SectionLabel label="Soluções" />
          <h2 className="mt-4 text-[clamp(1.75rem,3.8vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-gradient">
            Tudo que sua empresa precisa, em um só lugar
          </h2>
          <p className="mt-[clamp(1rem,1.5vh,1.5rem)] text-[clamp(0.95rem,1.1vw,1.15rem)] text-muted-foreground max-w-[55ch]">
            Soluções integradas que conectam tecnologia, design e estratégia para acelerar resultados.
          </p>
        </div>

        <div className="mt-[clamp(2rem,5vh,4rem)] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <SpotlightCard
              key={it.title}
              delay={i * 0.08}
              onClick={() => selectService(it.servico)}
              ariaLabel={`Solicitar orçamento de ${it.title}`}
              className="glass rounded-xl p-6 transition-all duration-300 hover:border-cta/25 hover:shadow-[0_12px_40px_-24px_var(--cta-glow)]"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-cta/15 text-cta"
                >
                  <it.icon className="h-6 w-6" />
                </motion.div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-cta group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <p className="mt-3 text-xs font-medium text-cta/0 transition-colors duration-300 group-hover:text-cta">
                Solicitar orçamento →
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
