
import { useState, useMemo } from "react";
import SectionHeader from "@/layouts/components/SectionHeader";
import CareerCard from "@/layouts/components/CareerCard";
import MainContainer from "@/components/MainContainer";
import type { Career } from "@/types/index";
import { AnimatePresence, motion } from "motion/react";

type OpenPositionsProps = {
  badge: string;
  title: string;
  careers: Career[];
};

const OpenPositions = ({ badge, title, careers }: OpenPositionsProps) => {
  const [activeFilter, setActiveFilter] = useState("All roles");

  const listTransition = {
    type: "spring",
    stiffness: 280,
    damping: 28,
  } as const;

  // Get unique departments and count
  const departments = useMemo(() => {
    const deptCounts: Record<string, number> = {};
    careers.forEach((career) => {
      const dept = career.frontmatter.job_info.department;
      deptCounts[dept] = (deptCounts[dept] || 0) + 1;
    });

    // Create filter list
    const filters = [
      { name: "All roles", count: careers.length },
      ...Object.entries(deptCounts).map(([name, count]) => ({
        name,
        count,
      })),
    ];

    return filters;
  }, [careers]);

  // Filter careers based on active filter
  const filteredCareers = useMemo(() => {
    if (activeFilter === "All roles") {
      return careers;
    }
    return careers.filter(
      (career) => career.frontmatter.job_info.department === activeFilter,
    );
  }, [activeFilter, careers]);

  return (
    <section>
      <MainContainer>
        <div className="container-padding-x container-padding-y">
          {/* Section Header */}
          <div className="text-center mb-10">
            <SectionHeader badge={badge} title={title} />

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 p-1.5 border border-border/6 rounded-2xl lg:rounded-full mt-10 flex-wrap justify-center"
            >
              {departments.map((dept) => (
                <motion.button
                  key={dept.name}
                  onClick={() => setActiveFilter(dept.name)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  className="relative overflow-hidden px-5 py-2.5 rounded-full cursor-pointer"
                >
                  {activeFilter === dept.name && (
                    <motion.span
                      layoutId="career-active-filter-pill"
                      transition={listTransition}
                      className="absolute inset-0 bg-gradient-primary"
                    />
                  )}
                  <span
                    className={
                      activeFilter === dept.name
                        ? "relative z-10 text-white"
                        : "relative z-10 text-text"
                    }
                  >
                    {dept.name}
                  </span>
                  <span
                    className={
                      activeFilter === dept.name
                        ? "relative z-10 text-white/80"
                        : "relative z-10 text-gray"
                    }
                  >
                    ({dept.count})
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Career Cards */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  ...listTransition,
                  staggerChildren: 0.08,
                  delayChildren: 0.05,
                },
              }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col gap-2.5"
            >
              {filteredCareers.map((career) => (
                <motion.div
                  key={career.slug}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: listTransition }}
                >
                  <CareerCard data={career} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </MainContainer>
    </section>
  );
};

export default OpenPositions;
