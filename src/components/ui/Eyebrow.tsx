import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.22em]",
        light ? "text-sage" : "text-sage-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}
