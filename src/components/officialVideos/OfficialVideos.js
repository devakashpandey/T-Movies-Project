import React, { useState } from "react";
import "./OfficialVideos.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../playButton/PlayIcon";
import VideoPopup from "../../components/videoPopup/VideoPopup";
import Img from "../lazyLoadImg/img";

const OfficialVideos = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skeleton-item">
        <div className="thumbnail skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videos-section">
      <ContentWrapper>
        <div className="section-heading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => {
              const thumbnail = `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`;
              return (
                <div
                  className="video-item"
                  key={video.id}
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                >
                  <div className="video-thumbnail">
                    <Img src={thumbnail} />
                    <PlayIcon />
                  </div>
                  <div className="video-title">{video.name}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="video-skeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default OfficialVideos;
