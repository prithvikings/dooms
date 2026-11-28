
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Essentials", href: "/essentials" },
  { label: "Extras", href: "/extras" },
  { label: "Story", href: "/story" },
  { label: "Progress", href: "/#progress" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        "z-50 w-full",
        isHomePage
          ? "absolute inset-x-0 top-0 bg-transparent text-white"
          : "sticky top-0 border-b border-border bg-background/85 backdrop-blur-xl",
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

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "text-sm font-medium transition-colors hover:text-doom-gold",
                isHomePage ? "text-white/85 hover:text-white" : "text-foreground-secondary",
              ].join(" ")}
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
                "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:text-doom-gold",
                isHomePage
                  ? "text-white/85 hover:bg-white/10"
                  : "text-foreground-secondary hover:bg-surface",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
