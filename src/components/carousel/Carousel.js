import React, { useRef } from "react";
import "./Carousel.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImg/Img";
import PosterImg from "../../assets/no-poster.png";

const Carousel = ({ data, loading }) => {
  const carouselSelector = useRef(); // we can select any element by their refrences through this hook
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const navigation = (direction) => {};

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
                {
                  /* const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterImg; */
                }
                return (
                  <div className="caraousel-item" key={item.id}>
                    <div className="poster-block">
                      <Img />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <span>Loding</span>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Carousel;
