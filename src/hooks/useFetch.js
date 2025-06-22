import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../config/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    try {
      const res = await fetchDataFromApi(url);
      setData(res);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
