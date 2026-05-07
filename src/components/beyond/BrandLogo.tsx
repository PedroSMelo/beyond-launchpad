import { MountainPeaks } from "./MountainPeaks";

type Size = "sm" | "md" | "lg";

type Props = {
  size?: Size;
  showSubtitle?: boolean;
  className?: string;
};

const sizes: Record<Size, { icon: string; brand: string; subtitle: string; gap: string }> = {
  sm: {
    icon: "h-6 w-12",
    brand: "text-base",
    subtitle: "text-[10px]",
    gap: "gap-2",
  },
  md: {
    icon: "h-7 w-14 sm:h-8 sm:w-16",
    brand: "text-lg sm:text-xl",
    subtitle: "text-[11px] sm:text-xs",
    gap: "gap-2.5",
  },
  lg: {
    icon: "h-10 w-20",
    brand: "text-2xl",
    subtitle: "text-sm",
    gap: "gap-3",
  },
};

export function BrandLogo({ size = "md", showSubtitle = false, className = "" }: Props) {
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      <MountainPeaks variant="icon" className={`${s.icon} shrink-0 text-foreground`} />
      <div className="flex flex-col leading-none">
        <span className={`${s.brand} font-extrabold uppercase tracking-[0.2em] text-foreground`}>
          BEYOND
        </span>
        {showSubtitle && (
          <span className={`${s.subtitle} mt-1 font-medium uppercase tracking-[0.25em] text-muted-foreground`}>
            Solutions Brasil
          </span>
        )}
      </div>
    </div>
  );
}
