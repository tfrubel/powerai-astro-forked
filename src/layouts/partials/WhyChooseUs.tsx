
import IconBox from "@/components/IconBox";
import MainContainer from "@/components/MainContainer";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "motion/react";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    badge: string;
    enable?: boolean;
    title: string;
    feature_list: {
      title: string;
      content: string;
      icon: string;
    }[];
  };
}
const HorizontalLine = () => (
  <svg
    width="1"
    height="590"
    viewBox="0 0 1 590"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1" height="590" fill="url(#paint0_linear_40_2150)" />
    <defs>
      <linearGradient
        id="paint0_linear_40_2150"
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="590"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.35" stopColor="white" stopOpacity="0.1" />
        <stop offset="0.65" stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
const VerticalLine = () => (
  <svg
    width="1188"
    height="1"
    viewBox="0 0 1188 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H1188V1H0V0Z" fill="url(#paint0_linear_40_2151)" />
    <defs>
      <linearGradient
        id="paint0_linear_40_2151"
        x1="-0.00991344"
        y1="0.504736"
        x2="1187.99"
        y2="0.504736"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.2" stopColor="white" stopOpacity="0.1" />
        <stop offset="0.8" stopColor="white" stopOpacity="0.1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const StarShape = () => (
  <svg
    width="61"
    height="61"
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.5 0C30.5 11.8843 49.1169 30.5 61 30.5C49.1169 30.5 30.5 49.118 30.5 61C30.5 49.118 11.8831 30.5 0 30.5C11.8831 30.5 30.5 11.8843 30.5 0Z"
      className="fill-body"
    />
    <path
      d="M30.5 3.67676C31.0276 5.73701 31.95 7.886 33.1592 10.0254C35.116 13.4875 37.8441 16.9643 40.9404 20.0605C44.0366 23.1566 47.5137 25.8842 50.9756 27.8408C53.1148 29.0498 55.2633 29.9724 57.3232 30.5C55.2633 31.0276 53.1147 31.9501 50.9756 33.1592C47.5137 35.116 44.0367 37.8442 40.9404 40.9404C37.8442 44.0368 35.116 47.5136 33.1592 50.9756C31.9501 53.1147 31.0277 55.2634 30.5 57.3232C29.9723 55.2634 29.0499 53.1147 27.8408 50.9756C25.884 47.5136 23.1558 44.0368 20.0596 40.9404C16.9633 37.8442 13.4863 35.116 10.0244 33.1592C7.88497 31.9499 5.73598 31.0276 3.67578 30.5C5.73602 29.9724 7.88493 29.05 10.0244 27.8408C13.4863 25.8842 16.9634 23.1566 20.0596 20.0605C23.1559 16.9643 25.884 13.4875 27.8408 10.0254C29.05 7.886 29.9724 5.73701 30.5 3.67676Z"
      stroke="white"
      strokeOpacity="0.08"
    />
  </svg>
);
const WhyChooseUs = ({ data }: { data: PageData }) => {
  const { badge, title, feature_list, enable } = data.frontmatter;
  return (
    enable && (
      <section>
        <MainContainer>
          <div className="container-padding-y container-padding-x">
            <SectionHeader title={title} badge={badge} />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.05 }}
              variants={staggerContainerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-25 relative overflow-hidden"
            >
              {feature_list.map((item, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <IconBox icon={item.icon} />
                  <h3 className="text-h5 font-medium mb-5">{item.title}</h3>
                  <p className="text-gray">{item.content}</p>
                </motion.div>
              ))}
              <div
                className="hidden md:block absolute top-0 left-[calc(50%-10px)] lg:left-[calc(33.3333%-20px)]"
                // style={{ left: "calc(33.3333% - 20px)" }}
              >
                <HorizontalLine />
              </div>
              <div
                className="hidden md:block absolute top-1/2 lg:top-0 left-[calc(50%-10px)] lg:left-[calc(66.6666%+20px)]"
                // style={{ left: "calc(66.6666% + 20px)" }}
              >
                <HorizontalLine />
              </div>
              <div className="hidden md:block absolute left-0 top-1/3 lg:top-1/2 -translate-y-1/3 lg:-translate-y-1/2">
                <VerticalLine />
              </div>
              <div className="absolute left-0 top-2/3 lg:top-1/2 -translate-y-1/3 lg:-translate-y-1/2 lg:hidden block">
                <VerticalLine />
              </div>

              {/* Shape */}
              <div
                className="hidden md:block absolute  top-[calc(33.33%-29px)] lg:top-1/2  lg:-translate-1/2 left-[calc(50%-40px)] lg:left-[calc(33.3333%-20px)]"
                // style={{ left: "calc(33.3333% - 20px)" }}
              >
                <StarShape />
              </div>
              <div
                className="hidden md:block absolute  top-[calc(66.33%-28px)] lg:top-1/2 lg:-translate-1/2 left-[calc(50%-40px)] lg:left-[calc(66.6666%+20px)]"
                // style={{ left: "calc(66.6666% + 20px)" }}
              >
                <StarShape />
              </div>
            </motion.div>
          </div>
        </MainContainer>
      </section>
    )
  );
};

export default WhyChooseUs;
