
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
    "border-accent-green/40 bg-accent-green/15 text-accent-green",

  recommended:
    "border-accent-green/30 bg-accent-green/10 text-accent-green",

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
