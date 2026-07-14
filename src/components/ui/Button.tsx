import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  isPlaceholder?: boolean;
} & Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel" | "aria-label"
> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled">;

const baseClasses =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_18px_36px_rgba(0,72,119,0.18)] hover:bg-brand-teal focus-visible:outline-brand-yellow",
  secondary:
    "border border-brand-blue/20 bg-white text-brand-blue hover:border-brand-teal hover:text-brand-teal focus-visible:outline-brand-teal",
  ghost:
    "bg-transparent text-brand-blue hover:bg-brand-cream focus-visible:outline-brand-teal",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  isPlaceholder = false,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    disabled || isPlaceholder ? "cursor-not-allowed opacity-70" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        aria-disabled={isPlaceholder}
        data-placeholder={isPlaceholder ? "true" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isPlaceholder} type={type}>
      {children}
    </button>
  );
}
