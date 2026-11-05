"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures hash fragment targets scroll into view after App Router navigation,
 * compensating for the sticky header via CSS scroll-margin-top.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    };

    // Allow layout paint before measuring sticky offsets
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHash);
    });

    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
