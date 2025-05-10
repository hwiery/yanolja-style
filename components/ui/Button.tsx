"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link" | "tab";
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  isActive = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "flex items-center justify-center rounded-lg font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-black text-white",
    secondary: "bg-slate-50 text-zinc-900",
    outline: "bg-white border border-gray-300 text-zinc-900",
    link: "bg-transparent text-zinc-900 hover:underline p-0",
    tab: isActive
      ? "bg-black text-white rounded-full"
      : "bg-slate-50 text-neutral-500 rounded-full",
  };
  
  const sizeStyles = {
    sm: "text-xs py-1.5 px-3 min-h-8",
    md: "text-sm py-2.5 px-4 min-h-10",
    lg: "text-base py-3 px-5 min-h-12",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 