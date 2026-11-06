"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { headerLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const startsOnHero =
    pathname === "/" ||
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/industries");
  const [overHero, setOverHero] = useState(startsOnHero);
  const [heroTone, setHeroTone] = useState<"light" | "dark">(
    pathname === "/" ? "light" : "dark",
  );
  const [atTop, setAtTop] = useState(true);
  const merged = overHero && atTop && !open;
  const lightBar = !merged && !open;
  const onDark = open || (merged && heroTone === "dark");

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 12);
      const hero = document.getElementById("site-hero");
      if (!hero) {
        setOverHero(false);
        return;
      }
      setOverHero(hero.getBoundingClientRect().bottom > 72);
      setHeroTone(hero.dataset.hero === "dark" ? "dark" : "light");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

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
        "fixed top-0 z-50 w-full transition-colors duration-300",
        merged
          ? "bg-transparent"
          : lightBar
            ? "border-b border-ink/10 bg-ivory"
            : "bg-ink",
      )}
    >
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          href="/"
          className="relative z-[60] max-w-[58vw] shrink-0 focus-visible:outline-none sm:max-w-none"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo priority tone={onDark ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {headerLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3.5 py-2 text-[13px] transition-colors",
                  onDark
                    ? active
                      ? "text-paper"
                      : "text-paper/75 hover:text-paper"
                    : active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-copper transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={onDark ? "outlineLight" : "primary"}
            className="!px-5 !py-2.5"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "relative z-[60] flex h-12 w-12 items-center justify-center lg:hidden",
            onDark ? "text-paper" : "text-ink",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "translate-y-0 rotate-45" : "-translate-y-[6px]",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-current transition-all duration-300",
              open ? "translate-y-0 -rotate-45" : "translate-y-[6px]",
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-50 bg-ink text-paper lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="flex h-full flex-col px-6 pb-10 pt-[calc(var(--header-h)+2rem)]"
              aria-label="Mobile"
            >
              {headerLinks.map((link, index) => {
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
                      "flex items-baseline gap-4 border-t border-white/10 py-5",
                      active ? "text-paper" : "text-paper/70",
                    )}
                  >
                    <span className="font-display text-sm text-copper">
                      0{index + 1}
                    </span>
                    <span className="font-display text-5xl leading-none">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <Button
                href="/contact"
                variant="outlineLight"
                className="mt-10 w-full"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
