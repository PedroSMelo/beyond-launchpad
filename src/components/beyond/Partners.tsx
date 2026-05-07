import { motion } from "framer-motion";

const partners = ["AWS", "Microsoft", "Google Cloud", "Cisco", "Oracle"];

export function Partners() {
  return (
    <section id="parceiros" className="py-20 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Nossas Certificações e Parceiros
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center text-2xl font-bold tracking-tight text-muted-foreground/60 grayscale hover:grayscale-0 hover:text-cta hover:scale-105 transition-all duration-300"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
