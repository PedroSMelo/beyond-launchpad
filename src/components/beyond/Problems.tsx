import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, ShieldOff, Clock, Workflow, Network } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Sistemas legados travando o crescimento",
    desc: "Modernizamos sua stack para ganhar performance, escalabilidade e reduzir custos operacionais.",
  },
  {
    icon: ShieldOff,
    title: "Vulnerabilidades e riscos de segurança",
    desc: "Auditoria, hardening de rede e boas práticas para proteger dados e a continuidade do negócio.",
  },
  {
    icon: Workflow,
    title: "Processos manuais e retrabalho",
    desc: "Automatizamos fluxos com sistemas sob medida que liberam seu time para o que realmente importa.",
  },
  {
    icon: Network,
    title: "Infraestrutura instável",
    desc: "Engenharia de redes com alta disponibilidade, monitoramento e arquitetura preparada para escala.",
  },
  {
    icon: AlertTriangle,
    title: "Marca sem posicionamento claro",
    desc: "Identidade visual estratégica que comunica autoridade e conecta com o seu público-alvo.",
  },
  {
    icon: Clock,
    title: "Decisões de TI sem direção",
    desc: "Consultoria especializada que traduz tecnologia em resultado mensurável para o seu negócio.",
  },
];

export function Problems() {
  return (
    <section id="solucionamos" className="py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cta">O que solucionamos</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Resolvemos os gargalos que travam sua operação
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada desafio do seu negócio tem uma solução técnica e estratégica. Veja onde podemos atuar:
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cta/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cta/15 text-cta">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
