import React, { useState } from "react";
import "./DetailsBanner.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"; // fro centering the all content
import useFetch from "../../hooks/useFetch";
import CircleRating from "../../components/rating/CircleRating";
import Img from "../../components/lazyLoadImg/Img.js";
import PosterImg from "../../assets/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  // to get the duration of movie or tv show
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="details-banner">
      {!loading ? (
        <>
          {/*adding details backgound image */}
          <div className="backdrop-img">
            <Img src={url.backdrop + data.backdrop_path} />{" "}
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data.poster_path ? (
                  <Img
                    className="poster-img"
                    src={url.backdrop + data.poster_path}
                  />
                ) : (
                  <Img className="poster-img" src={PosterImg} />
                )}
              </div>
              <div className="right">
                <div className="title">{`${data.name || data.title} (${dayjs(
                  data.release_date
                ).format("YYYY")})`}</div>
              </div>
            </div>
          </ContentWrapper>
        </>
      ) : (
        <div className="banner-skeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
