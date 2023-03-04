import { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataFromApi } from "./config/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./redux/slices/HomeSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.home);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
