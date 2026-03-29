import MainContainer from "@/components/MainContainer";
import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import type { PricingType } from "@/types/index";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    subtitle?: string;
    badge: string;
    offer_yearly?: string;
    pricing_plans: Array<PricingType>;
  };
}

const Pricing = ({
  data,
  isHome = true,
}: {
  data: PageData;
  isHome?: boolean;
}) => {
  const { title, enable, badge, pricing_plans, offer_yearly } =
    data.frontmatter;
  const [isYearly, setIsYearly] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLSpanElement | null>(null);

  // measure and position the slider to match active tab
  useEffect(() => {
    const container = toggleRef.current;
    const slider = sliderRef.current;
    if (!container || !slider) return;

    const updateSlider = () => {
      const active = container.querySelector(
        '[role="tab"][aria-selected="true"]',
      ) as HTMLElement | null;
      if (!active) return;
      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const left = activeRect.left - containerRect.left;
      const width = activeRect.width;
      slider.style.width = `${Math.round(width)}px`;
      slider.style.transform = `translateX(${Math.round(left)}px)`;
    };

    // initial position
    requestAnimationFrame(updateSlider);

    // update on resize
    window.addEventListener("resize", updateSlider);

    // observe small DOM changes that can affect sizing
    const observer = new MutationObserver(() =>
      requestAnimationFrame(updateSlider),
    );
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.removeEventListener("resize", updateSlider);
      observer.disconnect();
    };
  }, [isYearly]);

  useEffect(() => {
    const monthlyElements = document.querySelectorAll(
      "[data-price-tag-monthly]",
    );
    const yearlyElements = document.querySelectorAll("[data-price-tag-yearly]");

    if (isYearly) {
      // Remove active from monthly, add to yearly
      monthlyElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove("active");
          el.classList.add("inactive");
        }, index * 150);
      });
      yearlyElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
          el.classList.remove("inactive");
        }, index * 150);
      });
    } else {
      // Add active to monthly, remove from yearly
      monthlyElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("active");
          el.classList.remove("inactive");
        }, index * 150);
      });
      yearlyElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove("active");
          el.classList.add("inactive");
        }, index * 150);
      });
    }
  }, [isYearly]);

  return (
    enable && (
      <section className="text-left">
        {isHome ? (
          <MainContainer>
            <div className="container-padding-y container-padding-x">
              <SectionHeader title={title} badge={badge} />

              <div className="flex flex-col gap-y-14">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px", amount: 0.05 }}
                  variants={fadeInUpVariants}
                  ref={toggleRef}
                  className="relative bg-lighter border border-border/30 px-1.5 py-1.25 rounded-full inline-flex w-max mx-auto gap-2"
                  role="tablist"
                  aria-label="Pricing toggle"
                >
                  {/* sliding background (positioned/sized by JS to match active tab) */}
                  <span
                    ref={sliderRef}
                    aria-hidden
                    style={{ width: 0, transform: "translateX(0px)" }}
                    className={`absolute top-1/2 -translate-y-1/2 left-0 h-[84%] rounded-full bg-gradient-button transition-all duration-300 pointer-events-none`}
                  />

                  <motion.button
                    role="tab"
                    aria-selected={!isYearly}
                    className={`px-6 py-2.5 rounded-full relative z-10 cursor-pointer text-text `}
                    onClick={() => setIsYearly(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Monthly
                  </motion.button>
                  <motion.button
                    role="tab"
                    aria-selected={isYearly}
                    className={`px-6 py-2 rounded-full relative z-10 cursor-pointer text-light`}
                    onClick={() => setIsYearly(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Yearly{" "}
                    <span
                      className={`${!isYearly ? "gradient-text-primary" : ""}`}
                    >
                      ({offer_yearly})
                    </span>
                  </motion.button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px", amount: 0.05 }}
                  variants={staggerContainerVariants}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {pricing_plans.map((plan, index) => (
                    <motion.div key={index} variants={staggerItemVariants}>
                      <PricingCard plan={plan} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </MainContainer>
        ) : (
          <div className="flex flex-col gap-y-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.05 }}
              variants={fadeInUpVariants}
              ref={toggleRef}
              className="relative bg-lighter border border-border/30 px-1.5 py-1.25 rounded-full inline-flex w-max mx-auto gap-2"
              role="tablist"
              aria-label="Pricing toggle"
            >
              {/* sliding background (positioned/sized by JS to match active tab) */}
              <span
                ref={sliderRef}
                aria-hidden
                style={{ width: 0, transform: "translateX(0px)" }}
                className={`absolute top-1/2 -translate-y-1/2 left-0 h-[84%] rounded-full bg-gradient-button transition-all duration-300 pointer-events-none`}
              />

              <motion.button
                role="tab"
                aria-selected={!isYearly}
                className={`px-6 py-2.5 rounded-full relative z-10 cursor-pointer text-text `}
                onClick={() => setIsYearly(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Monthly
              </motion.button>
              <motion.button
                role="tab"
                aria-selected={isYearly}
                className={`px-6 py-2 rounded-full relative z-10 cursor-pointer text-light`}
                onClick={() => setIsYearly(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yearly{" "}
                <span className={`${!isYearly ? "gradient-text-primary" : ""}`}>
                  ({offer_yearly})
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px", amount: 0.05 }}
              variants={staggerContainerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pricing_plans.map((plan, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <PricingCard plan={plan} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>
    )
  );
};

export default Pricing;
