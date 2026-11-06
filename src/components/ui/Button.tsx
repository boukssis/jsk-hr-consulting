import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight" | "outlineDark" | "sage";

const variants: Record<Variant, string> = {
  primary:
    "border border-ink bg-ink text-paper hover:border-copper hover:bg-copper",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-paper hover:text-copper",
  outlineLight:
    "border border-paper/40 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink",
  outlineDark:
    "border border-ink/20 bg-transparent text-ink hover:border-copper hover:text-copper",
  sage: "border border-sage-deep bg-sage-deep text-paper hover:border-copper hover:bg-copper",
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
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-medium tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
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
