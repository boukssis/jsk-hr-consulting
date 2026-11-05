import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight";

const variants: Record<Variant, string> = {
  primary:
    "bg-sage text-navy hover:bg-[#6f887a] focus-visible:ring-sage/40 shadow-[0_10px_30px_-18px_rgba(20,36,49,0.55)]",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy/40 hover:bg-navy/[0.03] focus-visible:ring-navy/20",
  ghost:
    "bg-transparent text-ivory hover:bg-white/10 focus-visible:ring-white/30",
  outlineLight:
    "border border-ivory/35 bg-transparent text-ivory hover:border-ivory/70 hover:bg-white/5 focus-visible:ring-white/25",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
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
