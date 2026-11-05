"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || open
          ? "border-ink/10 bg-ivory/95 backdrop-blur-md"
          : "border-transparent bg-ivory",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5rem]">
        <Link
          href="/"
          className="group flex shrink-0 flex-col leading-none focus-visible:outline-none"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="font-display text-[1.65rem] tracking-tight text-ink transition group-hover:text-forest">
            JSK
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-muted">
            Human Resources Consulting
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-[12px] font-medium tracking-[0.04em] text-muted transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 bottom-1 h-px bg-forest transition-opacity duration-300",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="!px-5 !py-3 text-[10px]">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={cn(
              "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
              open ? "translate-y-0 rotate-45" : "-translate-y-[4px]",
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
              open ? "translate-y-0 -rotate-45" : "translate-y-[4px]",
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="border-t border-ink/10 bg-ivory lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-stone py-4 text-base font-medium text-ink",
                      active && "text-forest",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/contact" className="mt-5 w-full" onClick={() => setOpen(false)}>
                Book a Consultation
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
