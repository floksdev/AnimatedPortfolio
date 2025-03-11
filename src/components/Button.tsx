import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";

const classes = cva(
  "border h-12 rounded-full px-6 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
  {
    variants: {
      variant: {
        primary: "bg-violet-600 text-white border-violet-500 border-2",
        secondary: "border-white border-2 text-white bg-transparent",
        tertiary: "bg-violet-600 text-white font-bold border-violet-500 border-2",
      },
      size: {
        sm: "h-10",
      },
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  size?: "sm";
  href?: string;
}

export default function Button({
  variant,
  size,
  href,
  className,
  ...otherProps
}: ButtonProps) {
  const buttonClass = classes({ variant, size, className });

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {otherProps.children}
      </Link>
    );
  }

  return <button className={buttonClass} {...otherProps} />;
}
