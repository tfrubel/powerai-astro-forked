
import React from "react";
import { motion } from "motion/react";
import { scaleInVariants } from "@/lib/animations";

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleInVariants}
      className="bg-gradient-primary p-px inline-block rounded-full mb-2"
    >
      <div className="bg-gradient-black-grid px-4 py-1.5 rounded-full ">
        <span className="gradient-text-primary ">{children}</span>
      </div>
    </motion.div>
  );
};

export default Badge;
