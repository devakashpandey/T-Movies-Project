import React from "react";
import "./PageNotFound.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="big-text">404</span>
        <span className="pnf">Page not found!</span>
        <br />
        <button className="goHome-btn" onClick={() => navigate("/")}>
          Go To Home
        </button>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
