import React, { useRef } from "react";
import "./Carousel.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; // formating the date
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImg/Img";
import PosterImg from "../../assets/no-poster.png";

const Carousel = ({ data, loading }) => {
  const carouselSelector = useRef(); // we can select any element by their refrences through this hook
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const navigation = (direction) => {};

  const skeletonFunc = () => {
    return (
      <div className="skeleton-item">
        <div className="posters skeleton"></div>
        <div className="details">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="carousel">
        <ContentWrapper>
          <BsFillArrowLeftCircleFill
            className="left-arrow arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="right-arrow arrow"
            onClick={() => navigation("right")}
          />
          {!loading ? (
            <div className="carousel-items">
              {data?.map((item) => {
                const posterURL = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterImg;
                return (
                  <div className="carousel-item" key={item.id}>
                    <div className="posters">
                      <Img src={posterURL} />
                    </div>
                    <div className="details">
                      <span className="title">{item.title || item.name}</span>
                      <span className="date">
                        {dayjs(item.release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loding-skeleton">
              {skeletonFunc()}
              {skeletonFunc()}
              {skeletonFunc()}
              {skeletonFunc()}
              {skeletonFunc()}
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Carousel;
