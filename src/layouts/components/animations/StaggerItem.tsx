
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { staggerItemVariants } from "@/lib/animations";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * StaggerItem Component
 * Individual item to be used within StaggerContainer
 *
 * @example
 * <StaggerContainer>
 *   {items.map((item, index) => (
 *     <StaggerItem key={index}>
 *       <div>Item {index}</div>
 *     </StaggerItem>
 *   ))}
 * </StaggerContainer>
 */
const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerItem;
