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
  const isInView = useInView(ref, { once: true, amount: 0.18, margin: "0px 0px -8% 0px" });
  const reduceMotion = useReducedMotion();

  const hidden = { opacity: 0, y: 40 };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={reduceMotion ? visible : hidden}
      animate={reduceMotion || isInView ? visible : hidden}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
