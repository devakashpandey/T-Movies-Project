import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"; // fro centering the all content

const HeroBanner = () => {
  const [bgBanner, setBgBanner] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgImg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBgBanner(bgImg);
  }, [data]);

  const searchHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="hero-banner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={bgBanner} alt="img" />
          </div>
        )}

        <div className="opacity-layer"></div>

        <ContentWrapper>
          <div className="banner-content">
            <span className="title">Welcome</span>
            <span className="sub-title">
              Here you expore millions of Movies, TV shows & more. Explore now.
            </span>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for movies or tv shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
