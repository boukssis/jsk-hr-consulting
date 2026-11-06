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
  const full = isLight ? "/jsk-logo-light.png" : "/jsk-logo.png";

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <Image
        src={full}
        alt="JSK Human Resources Consulting"
        width={280}
        height={88}
        priority={priority}
        className="h-11 w-auto max-w-[200px] object-contain object-left sm:h-12 sm:max-w-[240px] lg:h-[3.35rem] lg:max-w-[280px]"
        style={{ background: "transparent" }}
      />
    </span>
  );
}
