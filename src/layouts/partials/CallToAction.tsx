
import AnimatedButton from "@/components/AnimatedButton";
import MainContainer from "@/components/MainContainer";
import CTAShape from "@/components/shape/CTAShape";
import type { Call_to_action } from "@/types/index";
import { motion } from "motion/react";
import { fadeInUpVariants } from "@/lib/animations";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="relative overflow-hidden">
          <MainContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.05 }}
              variants={fadeInUpVariants}
              className="container-padding-y text-center "
            >
              <h1 className="mb-5 hero-text sm:w-4/6 mx-auto">
                {data.frontmatter.title}
              </h1>
              <p className="text-lg mb-10 sm:w-3/6 mx-auto">
                {data.frontmatter.description}
              </p>

              <div className="mt-10 flex justify-center gap-4">
                {data.frontmatter.button.enable && (
                  <AnimatedButton
                    href={data.frontmatter.button.link}
                    classNames="btn btn-primary"
                  >
                    {data.frontmatter.button.label}
                  </AnimatedButton>
                )}
              </div>
            </motion.div>
          </MainContainer>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
            <CTAShape />
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
