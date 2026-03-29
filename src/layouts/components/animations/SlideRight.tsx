
import { motion, useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { fadeInRightVariants } from "@/lib/animations";

interface SlideRightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: UseInViewOptions;
  once?: boolean;
}

/**
 * SlideRight Component
 * Slides content in from the right with fade-in when scrolled into view
 *
 * @example
 * <SlideRight>
 *   <div>Your content here</div>
 * </SlideRight>
 */
const SlideRight = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, margin: "0px", amount: 0.05 },
  once = true,
}: SlideRightProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...viewport, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInRightVariants}
      className={className}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideRight;
