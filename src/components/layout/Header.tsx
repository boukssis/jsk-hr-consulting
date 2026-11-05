"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-500",
          siteConfig.preview.isPrivateConcept ? "top-[38px]" : "top-0",
        )}
      >
        <div
          className={cn(
            "mx-auto mt-3 flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between rounded-[1.6rem] px-4 py-3 transition-all duration-500 sm:px-6",
            solid
              ? "border border-white/10 bg-navy/85 shadow-[0_20px_50px_-28px_rgba(20,36,49,0.65)] backdrop-blur-xl"
              : "bg-transparent",
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-sage text-[13px] font-bold tracking-[0.08em] text-navy transition-transform duration-300 group-hover:scale-[1.03]">
              JSK
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-ivory">JSK</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/65">
                Human Resources Consulting
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
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
                    "group relative px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory/75 transition-colors hover:text-ivory",
                    active && "text-ivory",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-sage transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" className="!py-3 !px-5 text-[10px]">
              Schedule a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 bg-white/5 text-ivory transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span
              className={cn(
                "absolute h-[1.5px] w-4 bg-current transition-all duration-300",
                open ? "translate-y-0 rotate-45" : "-translate-y-[3.5px]",
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-4 bg-current transition-all duration-300",
                open ? "translate-y-0 -rotate-45" : "translate-y-[3.5px]",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 bg-navy lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={cn(
                "flex h-full flex-col px-6 pb-10",
                siteConfig.preview.isPrivateConcept ? "pt-28" : "pt-24",
              )}
            >
              <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 border-b border-white/10 py-5"
                      onClick={() => setOpen(false)}
                    >
                      <span className="font-display text-sm text-sage">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl text-ivory transition group-hover:text-sage sm:text-4xl">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
