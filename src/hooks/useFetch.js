import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../config/api";

// custom hook for fetching api, handle loading & error

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("Loding...");
    setData("");
    setError("");

    fetchDataFromApi(url)
      .then((res) => {
        setLoading("");
        setData(res);
      })
      .catch((err) => {
        setLoading("");
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
