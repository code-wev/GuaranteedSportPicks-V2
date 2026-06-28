import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-black hover:bg-primary-hover": variant === "primary",
          "bg-card text-white hover:bg-card-border border border-card-border": variant === "secondary",
          "border border-card-border bg-transparent text-white hover:bg-card": variant === "outline",
          "bg-transparent text-white hover:bg-card-border": variant === "ghost",
          "h-9 px-4 text-xs": size === "sm",
          "h-11 px-6 text-sm": size === "md",
          "h-14 px-8 text-base": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
