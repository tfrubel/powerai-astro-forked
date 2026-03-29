import React from "react";

const MainContainer = ({
  children,
  class_container,
}: {
  children: React.ReactNode;
  class_container?: string;
}) => {
  return (
    <div className="main-container">
      <div className={`container ${class_container}`}>{children}</div>
    </div>
  );
};

export default MainContainer;
