import React from "react";
import "./Cast.scss";
import { useSelector } from "react-redux";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImg/img";
import avatar from "../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="cast-skeleton-item">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="cast-section">
      <ContentWrapper>
        <div className="section-heading">Top Cast</div>
        {!loading ? (
          <div className="list-items">
            {data?.map((item) => {
              const imgURL = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div className="list-item" key={item.id}>
                  <div className="profile-img">
                    <Img src={imgURL} />
                  </div>
                  <div className="cast-name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="cast-skeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
