import React, { useState, useEffect } from "react";
import "./SearchResult.scss";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../config/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResult from "../../assets/no-results.png";

const SearchResult = () => {
  const [data, setData] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <>
      <div className="search-result"></div>
    </>
  );
};

export default SearchResult;
