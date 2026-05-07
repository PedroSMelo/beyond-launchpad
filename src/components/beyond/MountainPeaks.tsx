import type { SVGProps } from "react";

type Variant = "icon" | "line" | "silhouette";

type Props = SVGProps<SVGSVGElement> & {
  variant?: Variant;
};

const ICON_BACK_PATH =
  "M0 36 L8 24 L12 26 L18 18 L22 22 L30 8 L34 14 L38 6 L42 10 L46 4 L52 14 L56 10 L62 18 L66 14 L72 22 L78 26 L80 36 Z";

const ICON_FRONT_PATH =
  "M2 36 L14 22 L17 25 L20 18 L26 30 L30 16 L34 19 L38 14 L42 4 L46 12 L42 16 L48 12 L52 22 L58 14 L62 17 L65 12 L70 22 L78 36 Z";

const ICON_NOTCH_PATH =
  "M40 8 L44 14 L40 14 L42 22 L46 18 Z";

export function MountainPeaks({ variant = "icon", className = "", ...rest }: Props) {
  if (variant === "silhouette") {
    return (
      <svg
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        aria-hidden
        className={className}
        {...rest}
      >
        <defs>
          <linearGradient id="mp-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mp-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* back range — softer */}
        <path
          d="M0 220 L0 145 L70 90 L100 110 L160 50 L200 80 L250 70 L320 30 L360 60 L420 25 L470 55 L540 40 L600 80 L680 50 L760 90 L820 60 L900 100 L980 70 L1060 110 L1140 80 L1200 130 L1200 220 Z"
          fill="url(#mp-back)"
        />
        {/* front range — sharper, more notches */}
        <path
          d="M0 220 L0 175 L60 120 L80 140 L130 80 L160 110 L185 95 L230 50 L260 80 L240 95 L290 75 L340 130 L380 95 L420 110 L460 65 L490 90 L470 105 L520 85 L580 145 L640 110 L700 80 L760 130 L820 100 L900 150 L970 110 L1040 145 L1110 120 L1200 165 L1200 220 Z"
          fill="url(#mp-front)"
        />
      </svg>
    );
  }

  if (variant === "line") {
    return (
      <svg
        viewBox="0 0 200 24"
        preserveAspectRatio="none"
        aria-hidden
        className={className}
        {...rest}
      >
        <path
          d="M0 22 L14 8 L18 12 L22 6 L34 14 L38 10 L46 18 L52 4 L56 10 L52 14 L62 12 L74 20 L82 8 L88 14 L96 6 L106 16 L114 4 L120 12 L116 16 L128 14 L138 20 L150 6 L156 12 L168 8 L178 18 L186 10 L200 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 36"
      aria-hidden
      className={className}
      {...rest}
    >
      <path d={ICON_BACK_PATH} fill="currentColor" opacity="0.5" />
      <path d={ICON_FRONT_PATH} fill="currentColor" />
      <path d={ICON_NOTCH_PATH} fill="var(--background)" opacity="0.9" />
    </svg>
  );
}
