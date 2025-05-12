"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  width?: string;
  children: React.ReactNode;
}

const TabButton = ({
  isActive = false,
  width,
  className,
  children,
  ...props
}: TabButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-4 pt-2.5 pb-px text-sm leading-4 whitespace-nowrap rounded-full min-h-9",
        isActive 
          ? "font-bold text-white bg-black" 
          : "text-neutral-500 bg-slate-50",
        width && `w-[${width}]`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton; 