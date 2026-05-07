import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-28">
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-cta" />
          Tecnologia. Estratégia. Resultado.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-gradient"
        >
          Transformamos Necessidades de Negócio em Soluções Escaláveis
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          Especialistas em Identidade Visual, Desenvolvimento de Sistemas, Engenharia de Redes e Consultoria em TI.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground cta-glow hover:brightness-110 transition"
          >
            Solicite um Orçamento Estratégico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-card/60 transition"
          >
            Nossas Soluções
          </a>
        </motion.div>
      </div>
    </section>
  );
}
