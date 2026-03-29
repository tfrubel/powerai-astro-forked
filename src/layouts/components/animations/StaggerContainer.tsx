
import { motion, useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { staggerContainerVariants } from "@/lib/animations";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: UseInViewOptions;
  once?: boolean;
  staggerDelay?: number;
}

/**
 * StaggerContainer Component
 * Animates children with staggered delays for lists/grids
 *
 * @example
 * <StaggerContainer>
 *   {items.map((item, index) => (
 *     <div key={index}>Item {index}</div>
 *   ))}
 * </StaggerContainer>
 */
const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, margin: "0px", amount: 0.05 },
  once = true,
  staggerDelay = 0.1,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...viewport, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
      className={className}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
