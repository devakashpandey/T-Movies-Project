import React from "react";
import "../Style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const Trending = () => {
  const onTabChange = (tab) => {};

  return (
    <>
      <div className="carousel-Section">
        <ContentWrapper>
          <span className="carousel-title">Trending</span>
          <SwitchTabs
            data={["Day", "Week", "Month"]}
            onTabChange={onTabChange}
          />
        </ContentWrapper>
      </div>
    </>
  );
};

export default Trending;
