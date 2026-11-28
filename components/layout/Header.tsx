
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const navigationLinks = [
  { label: "Catalogue", href: "/catalogue" },
  { label: "Extras", href: "/extras" },
  { label: "Story", href: "/story" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-200",
        isHomePage
          ? [
              "-mb-20 text-white",
              isScrolled || menuOpen
                ? "bg-black/25 backdrop-blur-lg"
                : "bg-black/10 backdrop-blur-[2px]",
            ].join(" ")
          : "border-b border-border bg-background/85 backdrop-blur-xl",
      ].join(" ")}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Doomsday home"
          className="group flex items-center gap-3"
        >
          <span className="flex flex-col">
            <span className={[
              "text-sm font-bold tracking-[0.18em]",
              isHomePage ? "text-white" : "text-foreground",
            ].join(" ")}>
              DOOMSDAY
            </span>

            <span className={[
              "text-[9px] font-medium tracking-[0.2em]",
              isHomePage ? "text-white/60" : "text-foreground-muted",
            ].join(" ")}>
              MARVEL WATCH GUIDE
            </span>
          </span>
        </Link>

        {/* Desktop Navigation and GitHub profile */}
        <div className="hidden items-center gap-7 md:flex">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-8"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  "text-sm font-medium transition-colors hover:text-accent-green",
                  isHomePage ? "text-white/85 hover:text-white" : "text-foreground-secondary",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://github.com/prithvikings/dooms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile for prithvikings"
            className={[
              "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors",
              isHomePage
                ? "border-white/30 text-white hover:border-accent-green hover:bg-white/10"
                : "border-border-strong text-foreground hover:border-accent-green/60 hover:bg-accent-green/5",
            ].join(" ")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[17px]" fill="currentColor">
              <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.75 10.75 0 0 1 5.62 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={[
            "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors md:hidden",
            isHomePage
              ? "border-white/25 text-white hover:bg-white/10"
              : "border-border text-foreground-secondary hover:bg-surface",
          ].join(" ")}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={[
          isHomePage
            ? "border-t border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
            : "border-t border-border bg-background md:hidden",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <Container className="flex flex-col gap-1 py-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={[
                "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:text-accent-green",
                isHomePage
                  ? "text-white/85 hover:bg-white/10"
                  : "text-foreground-secondary hover:bg-surface",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/prithvikings/dooms"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={[
              "mt-2 inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors",
              isHomePage
                ? "border-white/30 text-white hover:border-accent-green hover:bg-white/10"
                : "border-border-strong text-foreground hover:border-accent-green/60 hover:bg-accent-green/5",
            ].join(" ")}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[17px]" fill="currentColor">
              <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.75 10.75 0 0 1 5.62 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
            </svg>
            GitHub
          </a>
        </Container>
      </div>
    </header>
  );
}
