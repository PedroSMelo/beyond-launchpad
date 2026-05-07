import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { BrandWatermark } from "./BrandWatermark";
import { selectService, type ServiceOption } from "@/lib/selectService";

const cases: { tag: string; title: string; img: string; servico: ServiceOption }[] = [
  {
    tag: "Fintech",
    title: "Plataforma de pagamentos escalável",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    servico: "Desenvolvimento de Aplicações",
  },
  {
    tag: "Indústria",
    title: "Modernização de infraestrutura de redes",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    servico: "Engenharia de Redes",
  },
  {
    tag: "Branding",
    title: "Reposicionamento de marca corporativa",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    servico: "Identidade Visual",
  },
];

export function Cases() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden min-h-[100svh] flex items-start pt-[clamp(6rem,14vh,10rem)] pb-[clamp(8rem,18vh,14rem)]"
    >
      <BrandWatermark position="right" />
      <div className="relative mx-auto w-full max-w-[min(90rem,95vw)] px-[clamp(1rem,4vw,3rem)] flex flex-col">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-3xl">
            <SectionLabel label="Portfólio" />
            <h2 className="mt-4 text-[clamp(1.75rem,3.8vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-gradient">
              Resultados que Entregamos
            </h2>
          </div>
          <p className="max-w-md text-[clamp(0.95rem,1.1vw,1.15rem)] text-muted-foreground">
            Projetos selecionados onde unimos tecnologia e estratégia para gerar impacto mensurável.
          </p>
        </div>

        <div className="mt-[clamp(2rem,5vh,4rem)] grid gap-6 md:grid-cols-3 [perspective:1200px]">
          {cases.map((c, i) => (
            <TiltCard key={c.title} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ item, index }: { item: (typeof cases)[number]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => selectService(item.servico)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectService(item.servico);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Solicitar projeto similar a ${item.title}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card will-change-transform cursor-pointer focus-visible:ring-2 focus-visible:ring-cta focus-visible:outline-none"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.img}
          alt={item.title}
          loading="lazy"
          style={{ transform: "translateZ(40px)" }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, color-mix(in oklab, var(--cta) 30%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        style={{ transform: "translateZ(80px)" }}
      >
        <ArrowUpRight className="h-4 w-4 text-cta" />
      </div>
      <div className="absolute bottom-0 p-5" style={{ transform: "translateZ(60px)" }}>
        <span className="inline-block rounded-full bg-cta/20 px-2.5 py-1 text-xs font-semibold text-cta">
          {item.tag}
        </span>
        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      </div>
    </motion.article>
  );
}
