
import type { PricingType } from "@/types/index";
import { motion } from "motion/react";
import { cardVariants } from "@/lib/animations";

const PricingCard = ({ plan }: { plan: PricingType }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      whileHover="hover"
      variants={cardVariants}
      className="bg-card/70 border border-border/6 rounded-3xl p-2.5"
    >
      <div className="bg-card border border-border/6 rounded-3xl p-7.5 ">
        <div className="size-14 bg-gradient-dark border border-border/6 rounded-2xl flex justify-center items-center relative overflow-hidden mb-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.875 4.5H16.875C17.5712 4.5 18.2389 4.77656 18.7312 5.26884C19.2234 5.76113 19.5 6.4288 19.5 7.12499V7.125C19.5 7.82119 19.2234 8.48887 18.7312 8.98116C18.2389 9.47344 17.5712 9.75 16.875 9.75H14.25V7.125C14.25 6.42881 14.5266 5.76113 15.0188 5.26884C15.5111 4.77656 16.1788 4.5 16.875 4.5V4.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.75 9.75H7.125C6.42881 9.75 5.76113 9.47344 5.26884 8.98116C4.77656 8.48887 4.5 7.82119 4.5 7.125V7.12499C4.5 6.4288 4.77656 5.76112 5.26884 5.26884C5.76112 4.77656 6.4288 4.5 7.12499 4.5H7.125C7.82119 4.5 8.48887 4.77656 8.98116 5.26884C9.47344 5.76113 9.75 6.42881 9.75 7.125V9.75Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 14.25H16.875C17.5712 14.25 18.2389 14.5266 18.7312 15.0188C19.2234 15.5111 19.5 16.1788 19.5 16.875V16.875C19.5 17.5712 19.2234 18.2389 18.7312 18.7312C18.2389 19.2234 17.5712 19.5 16.875 19.5H16.875C16.1788 19.5 15.5111 19.2234 15.0188 18.7312C14.5266 18.2389 14.25 17.5712 14.25 16.875V14.25Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.125 19.5H7.12499C6.4288 19.5 5.76112 19.2234 5.26884 18.7312C4.77656 18.2389 4.5 17.5712 4.5 16.875V16.875C4.5 16.1788 4.77656 15.5111 5.26884 15.0188C5.76113 14.5266 6.42881 14.25 7.125 14.25H9.75V16.875C9.75 17.5712 9.47344 18.2389 8.98116 18.7312C8.48887 19.2234 7.82119 19.5 7.125 19.5V19.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.25 9.75H9.75V14.25H14.25V9.75Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/*  */}
          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            width="56"
            height="38"
            viewBox="0 0 56 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_40_2892)">
              <circle
                cx="28"
                cy="40"
                r="20"
                fill="url(#paint0_linear_40_2892)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_40_2892"
                x="-12"
                y="0"
                width="80"
                height="80"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10"
                  result="effect1_foregroundBlur_40_2892"
                />
              </filter>
              <linearGradient
                id="paint0_linear_40_2892"
                x1="8"
                y1="40"
                x2="48"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A4DFE" />
                <stop offset="1" stopColor="#E87CFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 className="text-h5 font-medium mb-2.5">{plan.name}</h3>
        <p className="text-gray mb-3">{plan.content}</p>
        <div className="flex items-baseline ">
          <h3
            className={`text-h2  price-tag font-normal text-text`}
            data-price-tag-monthly
          >
            <span className="text-text-light">
              {plan.price?.monthly.prefix}
            </span>
            {plan.price?.monthly.number}
            <span className="text-base text-text-light">
              {plan.price?.monthly.suffix}
            </span>
          </h3>
          <h3
            className={`text-h2 price-tag font-normal text-text`}
            data-price-tag-yearly
          >
            <span className=" text-text-light">
              {plan.price?.yearly.prefix}
            </span>
            {plan.price?.yearly.number}
            <span className="text-base text-text-light">
              {plan.price?.yearly.suffix}
            </span>
          </h3>
        </div>
      </div>
      <div className="p-7.5 ">
        <ul className="flex flex-col gap-y-3 list-disc list-inside ">
          {plan.features?.map((feature, index) => (
            <li
              key={index}
              className={`${feature.include ? "text-text" : "text-text-light"}`}
            >
              {" "}
              {feature.value}
            </li>
          ))}
        </ul>
        {plan.button?.enable && (
          <a
            href={plan.button.link}
            className={`btn ${plan.highlighted ? "btn-primary" : "bg-gradient-dark"} w-full mt-7.5 text-center font-medium py-3.5 text-text border border-border/6`}
          >
            {plan.button.label}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PricingCard;
