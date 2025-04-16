// src/components/ui/ButtonDuo.tsx

import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";

interface ButtonDuoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-black hover:bg-gray-100 dark:text-white",
};

export default function ButtonDuo({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonDuoProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl font-semibold text-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
