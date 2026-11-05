import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export function Logo({
  className,
  priority = false,
  tone = "dark",
}: LogoProps) {
  const isLight = tone === "light";
  const mark = isLight ? "/jsk-monogram-light.png" : "/jsk-monogram.png";
  const full = isLight ? "/jsk-logo-light.png" : "/jsk-logo.png";

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {/* Mobile: monogram only */}
      <Image
        src={mark}
        alt="JSK Human Resources Consulting"
        width={140}
        height={42}
        priority={priority}
        className="h-7 w-auto max-w-[140px] object-contain object-left sm:hidden"
        style={{ background: "transparent" }}
      />
      {/* Tablet+: full lockup */}
      <Image
        src={full}
        alt=""
        aria-hidden
        width={180}
        height={56}
        priority={priority}
        className="hidden h-9 w-auto max-w-[180px] object-contain object-left sm:block lg:h-10 lg:max-w-[200px]"
        style={{ background: "transparent" }}
      />
    </span>
  );
}
