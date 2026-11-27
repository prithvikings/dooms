
"use client";

import { useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";





const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Essentials", href: "/essentials" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Extras", href: "/extras" },
  { label: "Story", href: "/story" },
  { label: "Progress", href: "/#progress" },
  { label: "About", href: "/#about" },
];





export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Doomsday home"
          className="group flex items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-doom-red text-lg font-bold text-white transition-colors group-hover:bg-doom-red-light">
            D
          </span>

          <span className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.18em] text-foreground">
              DOOMSDAY
            </span>

            <span className="text-[9px] font-medium tracking-[0.2em] text-foreground-muted">
              MARVEL WATCH GUIDE
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground-secondary transition-colors hover:text-doom-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground-secondary transition-colors hover:bg-surface md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={[
          "border-t border-border bg-background md:hidden",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <Container className="flex flex-col gap-1 py-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-foreground-secondary transition-colors hover:bg-surface hover:text-doom-gold"
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
