import React from "react";
import "./Details.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import Cast from "./Cast";
import OfficialVideos from "../../components/officialVideos/OfficialVideos";
import Similar from "./Similar";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <DetailsBanner video={data.results?.[0]} crew={credits?.crew} />
      <Cast data={credits.cast} loading={creditsLoading} />
      <OfficialVideos data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
