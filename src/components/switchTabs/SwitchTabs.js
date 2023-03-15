import React, { useState } from "react";
import "./SwitchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [select, setSelect] = useState(0); // for active select option

  const activeTab = (tab, index) => {
    setTimeout(() => {
      setSelect(index);
    }, 300); // for smooth animation
    onTabChange(tab, index);
  };

  return (
    <>
      <div className="switching-tabs">
        <div className="tab-items">
          {data.map((tab, index) => {
            return (
              <span
                key={index}
                className={`tab-item ${select === index ? "active" : ""}`}
                onClick={() => activeTab(tab, index)}
              >
                {tab}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SwitchTabs;
