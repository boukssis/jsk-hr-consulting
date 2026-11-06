import Image from "next/image";
import { cn } from "@/lib/cn";

type PortraitProps = {
  className?: string;
  priority?: boolean;
};

export function Portrait({ className, priority = false }: PortraitProps) {
  return (
    <figure className={cn("relative h-36 w-36 shrink-0 sm:h-44 sm:w-44", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-full border border-copper/40 bg-[#79c6ea]">
        <Image
          src="/june-speranza-kerr.jpg"
          alt="June Speranza Kerr, Senior HR Consultant"
          fill
          sizes="176px"
          priority={priority}
          className="object-contain object-center"
        />
      </div>
    </figure>
  );
}
