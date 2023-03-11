import React from "react";
import "./Component.css";

// a responsive container for gap from both left and right side
const ContentWrapper = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
