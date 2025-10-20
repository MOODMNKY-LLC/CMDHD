"use client";

import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ScrollProgress({ className, ...props }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#06b6d4]",
        className,
      )}
      style={{ scaleX: scrollYProgress }}
      {...props}
    />
  );
}


