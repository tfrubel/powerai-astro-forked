
import { motion, useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { fadeInLeftVariants } from "@/lib/animations";

interface SlideLeftProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: UseInViewOptions;
  once?: boolean;
}

/**
 * SlideLeft Component
 * Slides content in from the left with fade-in when scrolled into view
 *
 * @example
 * <SlideLeft>
 *   <div>Your content here</div>
 * </SlideLeft>
 */
const SlideLeft = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, margin: "0px", amount: 0.05 },
  once = true,
}: SlideLeftProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...viewport, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInLeftVariants}
      className={className}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideLeft;
