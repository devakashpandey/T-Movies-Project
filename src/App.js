import { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataFromApi } from "./config/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./redux/slices/HomeSlice";

function App() {
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.home);

  console.log(url);

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
      <h1>AKASH PANDEY</h1>
      <p>{url?.total_pages}</p>
      <ToastContainer />
    </>
  );
}

export default App;
