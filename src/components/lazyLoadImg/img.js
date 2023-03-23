import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; // lazy load package
import "react-lazy-load-image-component/src/effects/blur.css"; // lazy load css

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="lazy-load"
      effect="blur"
      src={src}
    />
  );
};

export default Img;
