import React, { useState } from "react";
import "./DetailsBanner.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"; // fro centering the all content
import useFetch from "../../hooks/useFetch";
import CircleRating from "../../components/rating/CircleRating";
import Img from "../../components/lazyLoadImg/Img.js";
import PosterFallback from "../../assets/no-poster.png";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  // to get the duration of movie or tv show
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="details-banner">
      {!loading ? (
        <div>Details Content...</div>
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
