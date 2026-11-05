import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "full" | "compact";
};

export function Logo({ className, priority = false, variant = "full" }: LogoProps) {
  const isCompact = variant === "compact";

  return (
    <Image
      src="/jsk-logo.png"
      alt="JSK Human Resources Consulting"
      width={isCompact ? 148 : 196}
      height={isCompact ? 72 : 95}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        isCompact ? "h-11 sm:h-12" : "h-14 sm:h-16",
        className,
      )}
    />
  );
}
