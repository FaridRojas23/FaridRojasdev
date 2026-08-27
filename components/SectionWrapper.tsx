"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export default function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  const hidden = { opacity: 0, y: 48 };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={reduceMotion ? visible : hidden}
      animate={reduceMotion || isInView ? visible : hidden}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
