"use client";

import { motion } from "framer-motion";

export interface SectionHeadingProps {
  number: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 ${alignmentClasses} ${className}`}
    >
      <span
        className="font-mono text-sm tracking-widest text-[#67E3F5] uppercase"
        aria-hidden="true"
      >
        {number.padStart(2, "0")}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F4F6FA] leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="max-w-xl text-base md:text-lg leading-relaxed text-[#A4ADBA]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
