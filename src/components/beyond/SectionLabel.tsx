import { motion } from "framer-motion";
import { MountainPeaks } from "./MountainPeaks";

type Props = {
  label: string;
  align?: "left" | "center";
};

export function SectionLabel({ label, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-3 text-[clamp(0.7rem,0.85vw,0.9rem)] font-semibold uppercase tracking-[0.28em] ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <MountainPeaks variant="icon" className="h-4 w-9 shrink-0 text-cta" />
      <span className="text-cta">BEYOND</span>
      <span className="text-muted-foreground/60">·</span>
      <span className="text-foreground/80">{label}</span>
    </motion.div>
  );
}
