import React from "react";
import "./MovieCard.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImg/Img";
import CircleRating from "../rating/CircleRating";
import NoPosterImg from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const posterUrl = data?.poster_path
    ? url.poster + data?.poster_path
    : NoPosterImg;

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="poster-block">
        <Img className="poster-img" src={posterUrl} />
        <CircleRating rating={data.vote_average.toFixed(1)} />
      </div>
      <div className="text-block">
        <span className="title">{data?.title || data?.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
