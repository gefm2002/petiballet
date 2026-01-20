import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-offwhite transition duration-200 hover:bg-cta/90 active:bg-cta/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite disabled:cursor-not-allowed disabled:opacity-50";

export default function Button({ className, href, ...props }: ButtonProps) {
  const classes = [baseClasses, className].filter(Boolean).join(" ");

  if (href) {
    const { children, ...rest } = props as ButtonAsLink;
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
