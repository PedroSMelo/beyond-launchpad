import { motion } from "framer-motion";
import { MountainPeaks } from "./MountainPeaks";

type Props = {
  position?: "left" | "right" | "center";
  size?: string;
};

export function BrandWatermark({ position = "right", size = "clamp(3rem,8vw,7rem)" }: Props) {
  const positionClass =
    position === "left"
      ? "left-[clamp(1rem,4vw,3rem)]"
      : position === "right"
      ? "right-[clamp(1rem,4vw,3rem)]"
      : "left-1/2 -translate-x-1/2";

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={`pointer-events-none absolute bottom-[clamp(3rem,9vh,7rem)] ${positionClass} flex flex-col items-center select-none`}
    >
      <MountainPeaks
        variant="icon"
        className="text-foreground/10"
        style={{ width: `calc(${size} * 0.7)`, height: `calc(${size} * 0.32)` }}
      />
      <span
        className="brand-watermark font-extrabold tracking-[0.04em] leading-none -mt-[0.1em]"
        style={{ fontSize: size }}
      >
        BEYOND
      </span>
    </motion.div>
  );
}
