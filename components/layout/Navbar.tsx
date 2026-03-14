"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Phillip Green
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-xl border border-border bg-card/80 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
          >
            Let&apos;s Connect
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-card/80 p-2 text-muted-foreground transition hover:border-primary hover:text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition hover:bg-card hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/Phillip_Green_Resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl border border-border bg-card/80 px-3 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Download Resume (PDF)
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}