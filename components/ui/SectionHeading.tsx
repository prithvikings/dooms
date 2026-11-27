
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={[
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
        className,
      ].join(" ")}
    >
      <div className="space-y-3">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-doom-gold">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-sm leading-7 text-foreground-secondary sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
