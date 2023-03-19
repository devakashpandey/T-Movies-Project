import React from "react";
import "./Details.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";

const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <>
      <DetailsBanner />
    </>
  );
};

export default Details;
