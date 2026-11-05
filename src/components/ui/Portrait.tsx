import Image from "next/image";
import { cn } from "@/lib/cn";

type PortraitProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: {
    box: "h-[108px] w-[108px] sm:h-[128px] sm:w-[128px]",
    sizes: "128px",
    ring: "after:inset-[-6px]",
  },
  md: {
    box: "h-[140px] w-[140px] sm:h-[168px] sm:w-[168px]",
    sizes: "168px",
    ring: "after:inset-[-8px]",
  },
  lg: {
    box: "h-[168px] w-[168px] sm:h-[200px] sm:w-[200px]",
    sizes: "200px",
    ring: "after:inset-[-10px]",
  },
} as const;

export function Portrait({
  size = "md",
  className,
  priority = false,
}: PortraitProps) {
  const config = sizes[size];

  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full",
        config.box,
        "after:pointer-events-none after:absolute after:rounded-full after:border after:border-sage/45",
        config.ring,
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full border border-navy/10 bg-soft">
        <Image
          src="/june-speranza-kerr.jpg"
          alt="June Speranza Kerr, Senior HR Consultant"
          fill
          sizes={config.sizes}
          priority={priority}
          quality={90}
          className="object-cover object-[center_18%]"
        />
      </div>
    </div>
  );
}
