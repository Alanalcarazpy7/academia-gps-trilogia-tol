import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  isPlaceholder?: boolean;
} & Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel" | "aria-label"
> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled">;

const baseClasses =
  "inline-flex min-w-0 items-center justify-center rounded-full text-center text-balance font-bold leading-tight transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-xs",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-7 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_18px_36px_rgba(0,72,119,0.2)] hover:-translate-y-0.5 hover:bg-brand-teal hover:shadow-[0_22px_44px_rgba(0,72,119,0.24)] focus-visible:outline-brand-yellow",
  secondary:
    "border border-brand-blue/20 bg-white text-brand-blue shadow-[0_12px_28px_rgba(0,72,119,0.08)] hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal focus-visible:outline-brand-teal",
  ghost:
    "bg-transparent text-brand-blue hover:bg-white/20 focus-visible:outline-brand-teal",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  isPlaceholder = false,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled ? "cursor-not-allowed opacity-70" : "",
    isPlaceholder ? "cursor-pointer" : "",
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
