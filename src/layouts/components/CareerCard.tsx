
import type { Career } from "@/types/index";
import { motion } from "motion/react";

const CareerCard = ({
  data,
  featured,
}: {
  data: Career;
  featured?: boolean;
}) => {
  const { title, job_info } = data.frontmatter;
  const { employ_type, location, salary_range, department } = job_info;

  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      className={`${
        featured ? "bg-card/20 border-border/10" : "bg-card/70"
      } border border-border/6 rounded-3xl p-10 flex lg:items-center lg:justify-between gap-8 group hover:bg-card/40 transition-all duration-300 flex-col lg:flex-row`}
    >
      {/* Left: Job Title & Department */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <a href={`/careers/${data.slug}`}>
          <h3 className="font-primary font-medium text-h6 text-text hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </a>
        <p className="text-gray">{department}</p>
      </div>

      {/* Middle: Job Info */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-gray">{employ_type}</span>
        <div className="size-1 rounded-full bg-gray/40" />
        <span className="text-gray">{location}</span>
        <div className="size-1 rounded-full bg-gray/40" />
        <span className="text-gray">{salary_range}</span>
      </div>

      {/* Right: Apply Button */}
      <a
        href={`/careers/${data.slug}`}
        className={`${
          featured
            ? "bg-gradient-primary"
            : "bg-gradient-dark "
        } btn btn-dark w-fit`}
      >
        Apply Now
      </a>
    </motion.div>
  );
};

export default CareerCard;
