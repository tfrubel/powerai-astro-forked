
import AnimatedButton from "@/components/AnimatedButton";
import Badge from "@/components/Badge";
import MainContainer from "@/components/MainContainer";
import CTAShape from "@/components/shape/CTAShape";
import { markdownify } from "@/lib/utils/textConverter";
import type { Button } from "@/types/index";
import { motion } from "motion/react";
import { fadeInUpVariants } from "@/lib/animations";

interface PageHeaderProps {
  page_header: {
    title: string;
    badge?: string;
    subtitle?: string;
    button_primary?: Button;
    button_dark?: Button;
  };
  children?: React.ReactNode;
}

const PageHeader = ({ page_header, children }: PageHeaderProps) => {
  const { title, badge, subtitle, button_primary, button_dark } = page_header;
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      variants={fadeInUpVariants}
      className="relative overflow-hidden"
    >
      <MainContainer>
        <div className="container-padding-x container-padding-y relative z-1">
          <div className="text-center">
            {badge && <Badge>{badge}</Badge>}
            <h1
              dangerouslySetInnerHTML={markdownify(title)}
              className="hero-text"
            />
            {subtitle && (
              <p className="mt-4 text-lg sm:w-2/4 mx-auto text-gray">
                {subtitle}
              </p>
            )}
            {(button_dark || button_primary) && (
              <div className="mt-10 flex items-center gap-5 flex-wrap justify-center ">
                {button_dark?.enable && (
                  <AnimatedButton
                    classNames="btn bg-dark/30 border border-border/6"
                    href={button_dark?.link || "/"}
                  >
                    {button_dark?.label}
                  </AnimatedButton>
                )}
                {button_primary?.enable && (
                  <AnimatedButton
                    classNames="btn btn-primary"
                    href={button_primary?.link || "/"}
                  >
                    {button_primary?.label}
                  </AnimatedButton>
                )}
              </div>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </MainContainer>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
        <CTAShape />
      </div>
    </motion.section>
  );
};

export default PageHeader;
