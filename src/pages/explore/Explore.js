import React, { useState, useEffect } from "react";
import "./Explore.scss";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import useFetch from "../../hooks/useFetch"; // this is used to fetch the "genres"
import { fetchDataFromApi } from "../../config/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/lodingSpinner/Spinner";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" }, // value is come from sort_by QUERY (avail in discovver API)
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`); // fetching genres

  const fetchInitialData = () => {
    setLoading(true);
    // filters indicate to "params" which is define in api.js
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPage = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value; // assign a key name "sort_by" (which is default from discomer API) in filters
      } else {
        delete filters.sort_by; // for clearing the select box
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id); // get the all genres id [2,3,4,7]
        genreId = JSON.stringify(genreId).slice(1, -1); // converting array to string "[2,3,4,7]" then alice it to remove bracket "2,3,4,7"
        filters.with_genres = genreId; // assign a key name "with_genres" (which is default from discover API) in filters
      } else {
        delete filters.with_genres; // for deleting all genres
      }
    }

    setPageNum(1);
    fetchInitialData();
  };

  return (
    <div className="explore-page">
      <ContentWrapper>
        <div className="page-header">
          <div className="title">
            {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
          </div>
          {/* ====== filter and select option start ======= */}
          <div className="filters">
            <Select
              isMulti
              name="genres"
              value={genre}
              closeMenuOnSelect={true}
              options={genresData?.genres}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={onChange}
              placeholder="Select Category"
              className="react-select-container category"
              classNamePrefix="react-select"
            />
            <Select
              name="sortby"
              value={sortby}
              options={sortbyData}
              onChange={onChange}
              isClearable={true}
              placeholder="Sort by"
              className="react-select-container sortby"
              classNamePrefix="react-select"
            />
          </div>
          {/* ====== filter and select option end ======= */}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {data?.results?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPage}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} mediaType={mediaType} />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
