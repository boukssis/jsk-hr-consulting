import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight" | "outlineDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-ivory hover:bg-deep focus-visible:ring-forest/35",
  secondary:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/35 hover:bg-ink/[0.03] focus-visible:ring-ink/20",
  ghost:
    "bg-transparent text-ivory hover:bg-white/10 focus-visible:ring-white/30",
  outlineLight:
    "border border-ivory/40 bg-transparent text-ivory hover:border-ivory hover:bg-white/5 focus-visible:ring-white/25",
  outlineDark:
    "border border-ink/20 bg-transparent text-ink hover:border-forest hover:text-forest focus-visible:ring-forest/25",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
