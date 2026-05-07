import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MountainPeaks } from "./MountainPeaks";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden flex items-start justify-center min-h-[100svh] pt-[clamp(7rem,16vh,12rem)] pb-[clamp(2rem,6vh,5rem)]"
    >
      <div className="absolute inset-0 mesh-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-cta/15 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[32rem] w-[32rem] rounded-full bg-[oklch(0.97_0.015_220/0.14)] blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -40, 20, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
      >
        <MountainPeaks
          variant="silhouette"
          className="w-full h-[clamp(8rem,22vh,16rem)] text-foreground/55"
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[min(90rem,95vw)] px-[clamp(1rem,4vw,3rem)] text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-[clamp(0.75rem,1.5vh,1.25rem)]"
        >
          <MountainPeaks variant="icon" className="h-5 w-12 shrink-0 text-cta" />
          <span className="text-[clamp(0.85rem,1vw,1.05rem)] font-bold uppercase tracking-[0.32em] text-cta">
            BEYOND
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span className="text-[clamp(0.7rem,0.85vw,0.85rem)] font-medium uppercase tracking-[0.28em] text-foreground/70">
            Solutions Brasil
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold tracking-tight leading-[1.05] text-gradient mt-[clamp(1.25rem,3vh,2.5rem)] text-[clamp(2rem,5.4vw,4.75rem)] max-w-[22ch]"
        >
          Transformamos Necessidades de Negócio em Soluções Escaláveis
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.22, ease: "easeOut" }}
          className="text-muted-foreground mt-[clamp(1rem,2.5vh,2rem)] text-[clamp(0.95rem,1.3vw,1.25rem)] max-w-[62ch]"
        >
          Especialistas em Identidade Visual, Desenvolvimento de Sistemas, Engenharia de Redes e Consultoria em TI.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center mt-[clamp(1.5rem,4vh,3rem)] gap-[clamp(0.75rem,1.5vw,1.25rem)]"
        >
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="btn-shimmer group inline-flex items-center gap-2 rounded-md bg-cta font-semibold text-cta-foreground cta-glow transition px-[clamp(1.25rem,2vw,2rem)] py-[clamp(0.75rem,1.2vw,1.1rem)] text-[clamp(0.875rem,1.1vw,1.125rem)]"
          >
            Solicite um Orçamento Estratégico
            <ArrowRight className="h-[1.1em] w-[1.1em] transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#solucoes"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 backdrop-blur font-semibold text-foreground hover:bg-card/60 hover:border-cta/40 transition px-[clamp(1.25rem,2vw,2rem)] py-[clamp(0.75rem,1.2vw,1.1rem)] text-[clamp(0.875rem,1.1vw,1.125rem)]"
          >
            Nossas Soluções
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
