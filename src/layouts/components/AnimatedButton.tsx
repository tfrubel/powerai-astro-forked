
import React from "react";

const AnimatedButton = ({
  classNames,
  children,
  href,
}: {
  classNames?: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="border border-border/30 rounded-full group inline-block"
    >
      <span
        className={`${classNames} py-3.5 mx-1.5 my-1.25 group-hover:m-0 group-hover:py-4.75 group-hover:px-7.5 transition-all duration-300 rounded-full`}
      >
        {children}
      </span>
    </a>
  );
};

export default AnimatedButton;
