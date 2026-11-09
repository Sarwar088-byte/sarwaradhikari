"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
} as const;

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 18,
} as const;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon = false,
  className = "",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  const baseClasses = [
    "inline-flex items-center justify-center font-medium rounded-lg",
    "transition-colors duration-200 cursor-pointer select-none",
    sizeClasses[size],
    isPrimary
      ? "bg-[#67E3F5] text-[#07090D] hover:bg-[#7BE8F7]"
      : "border border-[rgba(255,255,255,0.09)] text-[#F4F6FA] bg-transparent hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={iconSizes[size]}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  const motionProps = {
    whileHover: {
      scale: 1.03,
      ...(isPrimary && {
        boxShadow: "0 0 24px rgba(103, 227, 245, 0.25), 0 0 8px rgba(103, 227, 245, 0.15)",
      }),
    },
    whileTap: { scale: 0.97 },
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
    },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClasses}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`group ${baseClasses}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
