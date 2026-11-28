
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  return (
    <footer
      id="about"
      className="mt-auto border-t border-border bg-background-secondary"
    >
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] text-foreground"
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-accent-green text-xs font-bold text-[#071006]">
                D
              </span>
              DOOMSDAY
            </Link>

            <p className="text-xs text-foreground-muted">
              Your curated path to Avengers: Doomsday.
            </p>
          </div>

          <Link
            href="#home"
            className="w-fit text-xs font-medium text-foreground-secondary transition-colors hover:text-accent-green"
          >
            Back to top ↑
          </Link>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col gap-2 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Doomsday Watch Guide.</p>

          <p>
            This is a fan-made, unofficial Marvel watch guide.
          </p>
        </div>
      </Container>
    </footer>
  );
}
