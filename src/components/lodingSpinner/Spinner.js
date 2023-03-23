import React from "react";
import "./Spinner.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <PacmanLoader color="white" size={40} />
    </div>
  );
};

export default Spinner;
