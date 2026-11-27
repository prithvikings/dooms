
import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="home" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
