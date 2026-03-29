
import Badge from "./Badge";
import { motion } from "motion/react";
import { sectionHeaderVariants } from "@/lib/animations";

const SectionHeader = ({ title, badge }: { title: string; badge: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      variants={sectionHeaderVariants}
      className="text-center mb-14"
    >
      {badge && <Badge>{badge}</Badge>}
      <h2 className="text-h2 font-medium lg:w-2/5 mx-auto">{title}</h2>
    </motion.div>
  );
};

export default SectionHeader;
