import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  spotlightSize?: number;
  onClick?: () => void;
  ariaLabel?: string;
};

export function SpotlightCard({
  children,
  className = "",
  delay = 0,
  spotlightSize = 380,
  onClick,
  ariaLabel,
}: Props) {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--cta-glow) 50%, transparent) 0%, transparent 65%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mouseX.set(-9999);
        mouseY.set(-9999);
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
      className={`group relative isolate overflow-hidden ${onClick ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-cta focus-visible:outline-none" : ""} ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-60"
        style={{
          background:
            "linear-gradient(120deg, transparent, color-mix(in oklab, var(--cta) 10%, transparent), transparent)",
        }}
      />
      {children}
    </motion.div>
  );
}
