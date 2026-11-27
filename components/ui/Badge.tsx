
import type { HTMLAttributes } from "react";

type BadgeVariant =
  | "essential"
  | "recommended"
  | "optional"
  | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  essential:
    "border-doom-red/40 bg-doom-red/15 text-red-300",

  recommended:
    "border-doom-gold/30 bg-doom-gold/10 text-doom-gold",

  optional:
    "border-white/10 bg-white/5 text-foreground-secondary",

  neutral:
    "border-white/10 bg-white/5 text-foreground",
};

export function Badge({
  variant = "neutral",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex w-fit items-center rounded-full border",
        "px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
