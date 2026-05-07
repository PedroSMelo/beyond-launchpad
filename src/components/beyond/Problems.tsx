import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, ShieldOff, Clock, Workflow, Network, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { SectionLabel } from "./SectionLabel";
import { MountainPeaks } from "./MountainPeaks";
import { BrandLogo } from "./BrandLogo";
import { selectService, type ServiceOption } from "@/lib/selectService";

const problems: {
  icon: typeof TrendingDown;
  title: string;
  desc: string;
  servico: ServiceOption;
}[] = [
  {
    icon: TrendingDown,
    title: "Sistemas legados travando o crescimento",
    desc: "Modernizamos sua stack para ganhar performance, escalabilidade e reduzir custos operacionais.",
    servico: "Desenvolvimento de Aplicações",
  },
  {
    icon: ShieldOff,
    title: "Vulnerabilidades e riscos de segurança",
    desc: "Auditoria, hardening de rede e boas práticas para proteger dados e a continuidade do negócio.",
    servico: "Engenharia de Redes",
  },
  {
    icon: Workflow,
    title: "Processos manuais e retrabalho",
    desc: "Automatizamos fluxos com sistemas sob medida que liberam seu time para o que realmente importa.",
    servico: "Desenvolvimento de Aplicações",
  },
  {
    icon: Network,
    title: "Infraestrutura instável",
    desc: "Engenharia de redes com alta disponibilidade, monitoramento e arquitetura preparada para escala.",
    servico: "Engenharia de Redes",
  },
  {
    icon: AlertTriangle,
    title: "Marca sem posicionamento claro",
    desc: "Identidade visual estratégica que comunica autoridade e conecta com o seu público-alvo.",
    servico: "Identidade Visual",
  },
  {
    icon: Clock,
    title: "Decisões de TI sem direção",
    desc: "Consultoria especializada que traduz tecnologia em resultado mensurável para o seu negócio.",
    servico: "Consultoria em TI",
  },
];

export function Problems() {
  return (
    <section
      id="solucionamos"
      className="relative overflow-hidden min-h-[100svh] flex items-start pt-[clamp(6rem,14vh,10rem)] pb-[clamp(8rem,18vh,14rem)]"
    >
      <MountainPeaks
        variant="silhouette"
        aria-hidden
        className="absolute top-0 inset-x-0 w-full h-[clamp(3rem,9vh,6rem)] text-foreground -scale-y-100"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 0.26, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute right-[clamp(1rem,4vw,3rem)] top-[clamp(5rem,10vh,7rem)] z-0 hidden lg:block"
      >
        <BrandLogo size="lg" showSubtitle />
      </motion.div>
      <div className="relative mx-auto w-full max-w-[min(90rem,95vw)] px-[clamp(1rem,4vw,3rem)] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <SectionLabel label="O que solucionamos" />
          <h2 className="mt-4 text-[clamp(1.75rem,3.8vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-gradient">
            Resolvemos os gargalos que travam sua operação
          </h2>
          <p className="mt-[clamp(1rem,1.5vh,1.5rem)] text-[clamp(0.95rem,1.1vw,1.15rem)] text-muted-foreground max-w-[60ch]">
            Cada desafio do seu negócio tem uma solução técnica e estratégica. Veja onde podemos atuar:
          </p>
        </motion.div>

        <div className="mt-[clamp(2rem,5vh,4rem)] grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <SpotlightCard
              key={p.title}
              delay={i * 0.07}
              onClick={() => selectService(p.servico)}
              ariaLabel={`Resolver problema: ${p.title}`}
              className="glass rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-cta/25 hover:shadow-[0_12px_40px_-24px_var(--cta-glow)]"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-cta/15 text-cta"
                >
                  <p.icon className="h-5 w-5" />
                </motion.div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-cta group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-3 text-xs font-medium text-cta/0 transition-colors duration-300 group-hover:text-cta">
                Quero resolver isso →
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
