import React, { useState } from "react";
import "./DetailsBanner.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"; // fro centering the all content
import useFetch from "../../hooks/useFetch";
import CircleRating from "../../components/rating/CircleRating";
import Img from "../../components/lazyLoadImg/img";
import PosterImg from "../../assets/no-poster.png";
import { PlayIcon } from "../../components/playButton/PlayIcon";
import VideoPopup from "../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoid] = useState("");

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Writer" || f.job === "Story"
  );

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
            <Img src={url.backdrop + data?.backdrop_path} />{" "}
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data?.poster_path ? (
                  <Img
                    className="poster-img"
                    src={url.backdrop + data?.poster_path}
                  />
                ) : (
                  <Img className="poster-img" src={PosterImg} />
                )}
              </div>
              <div className="right">
                <div className="title">{`${data?.name || data?.title} (${dayjs(
                  data?.release_date
                ).format("YYYY")})`}</div>
                <div className="sub-title">{data?.tagline}</div>
                <div className="row">
                  <CircleRating rating={data?.vote_average?.toFixed(1)} />
                  <div
                    className="play-btn"
                    onClick={() => {
                      setShow(true);
                      setVideoid(video.key);
                    }}
                  >
                    <PlayIcon />
                    <span className="btn-text">Watch Trailer</span>
                  </div>
                </div>
                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="descrip">{data?.overview}</div>
                </div>
                <div className="info-cointainer">
                  <div className="info">
                    <div className="info-item">
                      <span className="text bold">Status : </span>
                      <span className="text"> {data?.status}</span>
                    </div>
                    <div className="info-item">
                      <span className="text bold">Release Date : </span>
                      <span className="text">
                        {dayjs(data?.release_date).format("D MMM, YYYY")}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="text bold">Runtime : </span>
                      <span className="text">
                        {toHoursAndMinutes(data?.runtime)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="directer-writer">
                  {director?.length > 0 && (
                    <div className="info">
                      <span className="text bold">Director : </span>
                      <span className="text">
                        {director?.map((d, index) => {
                          return (
                            <span className="" key={index}>
                              {d.name}
                              {/* for seperate qumas for multiple directore / writer */}
                              {director?.length - 1 !== index && ", "}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  )}
                  {writer?.length > 0 && (
                    <div className="info">
                      <span className="text bold">Writer : </span>
                      <span className="text">
                        {writer?.map((d, index) => {
                          return (
                            <span className="" key={index}>
                              {d.name}
                              {/* for seperate qumas for multiple directore / writer */}
                              {writer?.length - 1 !== index && ", "}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  )}
                  {data?.created_by > 0 && (
                    <div className="info">
                      <span className="text bold">Creator : </span>
                      <span className="text">
                        {data?.created_by?.map((d, index) => {
                          return (
                            <span className="" key={index}>
                              {d.name}
                              {/* for seperate qumas for multiple directore / writer */}
                              {writer?.length - 1 !== index && ", "}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoid}
            />
          </ContentWrapper>
        </>
      ) : (
        <div className="banner-skeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row3 skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton "></div>
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
