import React, { useState, useEffect } from "react";
import "./SearchResult.scss";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../config/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResult from "../../assets/no-results.png";
import Spinner from "../../components/lodingSpinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

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

  const fetchNextPage = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setLoading(false);
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
    setPageNum(1);
  }, [query]);

  return (
    <>
      <div className="search-result">
        {loading ? (
          <Spinner />
        ) : (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                <div className="page-title">
                  {`Search ${
                    data?.total_results > 1 ? "results" : "result"
                  } of "${query}" `}
                </div>
                <InfiniteScroll
                  className="content"
                  dataLength={data?.results?.length || []}
                  next={fetchNextPage}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {data?.results?.map((item, i) => {
                    if (item.media_type === "person") return; // we done want to show person result after searching
                    return <MovieCard key={i} data={item} />;
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <span className="resultNotFound">Sorry, Results Not Found!!</span>
            )}
          </ContentWrapper>
        )}
      </div>
    </>
  );
};

export default SearchResult;
