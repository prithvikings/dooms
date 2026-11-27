
import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement>;

export function Divider({
  className = "",
  ...props
}: DividerProps) {
  return (
    <hr
      className={[
        "border-0 border-t border-border",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
