"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

function getInitialTransform(direction: "up" | "left" | "right") {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -40, y: 0 };
    case "right":
      return { opacity: 0, x: 40, y: 0 };
    case "up":
    default:
      return { opacity: 0, x: 0, y: 30 };
  }
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const initial = getInitialTransform(direction);

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
