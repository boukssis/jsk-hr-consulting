import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight" | "outlineDark" | "sage";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-ivory shadow-[0_10px_24px_-14px_rgba(8,32,48,0.65)] hover:bg-sage hover:text-navy hover:shadow-[0_14px_28px_-12px_rgba(107,143,94,0.55)] active:bg-sage-deep active:text-ivory",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-ivory active:bg-charcoal",
  ghost:
    "bg-transparent text-ivory hover:bg-white/15 active:bg-white/25",
  outlineLight:
    "border border-ivory/45 bg-transparent text-ivory hover:border-ivory hover:bg-ivory hover:text-navy active:bg-soft",
  outlineDark:
    "border border-navy/25 bg-transparent text-navy hover:border-sage hover:bg-sage hover:text-navy active:bg-sage-deep active:text-ivory",
  sage:
    "bg-sage text-navy shadow-[0_10px_24px_-14px_rgba(107,143,94,0.7)] hover:bg-navy hover:text-ivory hover:shadow-[0_14px_28px_-12px_rgba(8,32,48,0.55)] active:bg-charcoal",
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
    "btn-interactive inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    "hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.97]",
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
