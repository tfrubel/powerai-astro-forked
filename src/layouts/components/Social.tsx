
import DynamicIcon from "@/helpers/DynamicIcon";
import { motion } from "motion/react";
import { fadeInUpVariants } from "@/lib/animations";

export interface ISocial {
  name: string;
  icon: string;
  link: string;
}

const Social = ({
  source,
  className,
}: {
  source: ISocial[];
  className: string;
}) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      className={className}
    >
      {source.map((social, index) => (
        <motion.li
          key={social.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a
            aria-label={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block hover:scale-110 transition-transform duration-200"
          >
            <span className="sr-only">{social.name}</span>
            <DynamicIcon className="inline-block" icon={social.icon} />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Social;
