
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scaleAmount?: number;
}

/**
 * HoverScale Component
 * Adds a scale effect on hover
 *
 * @example
 * <HoverScale>
 *   <div>Your content here</div>
 * </HoverScale>
 */
const HoverScale = ({
  children,
  className = "",
  scaleAmount = 1.05,
}: HoverScaleProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { scale: 1 },
        hover: { scale: scaleAmount },
      }}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
