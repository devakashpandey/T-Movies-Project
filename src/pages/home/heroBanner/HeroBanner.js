import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

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
        <div className="backdrop-img"></div>
        <div className="wrapper">
          <div className="banner-content">
            <span className="title">Welcome</span>
            <span className="sub-title">
              Here you expore millions of Movies, TV shows & more. Explore now.
            </span>
            <div className="saerch-input">
              <input
                type="text"
                placeholder="Search for movies or tv shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
