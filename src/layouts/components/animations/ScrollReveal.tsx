
import { motion, useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { scrollRevealVariants } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: UseInViewOptions;
  variants?: any;
  once?: boolean;
}

/**
 * ScrollReveal Component
 * Reveals content with a smooth fade-up animation when scrolled into view
 *
 * @example
 * <ScrollReveal>
 *   <div>Your content here</div>
 * </ScrollReveal>
 */
const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, margin: "0px", amount: 0.05 },
  variants = scrollRevealVariants,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...viewport, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      transition={{ ...variants.visible.transition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
