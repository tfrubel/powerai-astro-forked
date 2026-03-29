
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  liftAmount?: number;
}

/**
 * HoverLift Component
 * Adds a lift effect on hover
 *
 * @example
 * <HoverLift>
 *   <div>Your content here</div>
 * </HoverLift>
 */
const HoverLift = ({
  children,
  className = "",
  liftAmount = 8,
}: HoverLiftProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { y: 0 },
        hover: { y: -liftAmount },
      }}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default HoverLift;
